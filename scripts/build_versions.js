#!/usr/bin/env node
/**
 * Versionnement automatique des ressources (cache-busting) — L'Établi des Maths
 *
 * À lancer avant chaque mise en ligne :   node scripts/build_versions.js
 * Vérification seule (tests) :            node scripts/build_versions.js --check
 *
 * 1. Remplace dans chaque page HTML les `?v=...` des fichiers locaux (js/, css/, vendor/)
 *    par une empreinte du contenu du fichier : un fichier modifié change d'URL,
 *    un fichier inchangé garde la sienne (le cache des élèves reste valide).
 * 2. Régénère dans sw.js la liste de pré-cache (URLs versionnées de l'application)
 *    et le nom du cache.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const CHECK_ONLY = process.argv.includes('--check');
const ASSET_RE = /((?:src|href)=")((?:js|css|vendor)\/[^"?#]+\.(?:js|css))(?:\?v=[^"]*)?(")/g;

const hashCache = {};
function fileHash(rel) {
  if (!hashCache[rel]) {
    const buf = fs.readFileSync(path.join(ROOT, rel));
    hashCache[rel] = crypto.createHash('sha1').update(buf).digest('hex').slice(0, 10);
  }
  return hashCache[rel];
}

const htmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
let outdated = [];

// 1. Pages HTML
const appAssets = [];
for (const file of htmlFiles) {
  const full = path.join(ROOT, file);
  const src = fs.readFileSync(full, 'utf8');
  // Fichiers chargés à la demande (bloc JSON <script id="level-bundles">) : mêmes empreintes,
  // mais pas de pré-cache (ils sont mis en cache à leur première utilisation)
  const withBundles = src.replace(/(<script id="level-bundles"[^>]*>)([\s\S]*?)(<\/script>)/, (m, open, body, close) =>
    open + body.replace(/"((?:js|css)\/[^"?#]+\.js)(?:\?v=[^"]*)?"/g, (mm, rel) => {
      if (!fs.existsSync(path.join(ROOT, rel))) {
        console.error(`✖ ${file} : fichier introuvable ${rel}`);
        process.exitCode = 1;
        return mm;
      }
      return `"${rel}?v=${fileHash(rel)}"`;
    }) + close);
  const out = withBundles.replace(ASSET_RE, (m, pre, rel, post) => {
    if (!fs.existsSync(path.join(ROOT, rel))) {
      console.error(`✖ ${file} : fichier introuvable ${rel}`);
      process.exitCode = 1;
      return m;
    }
    const url = `${rel}?v=${fileHash(rel)}`;
    if (file === 'index.html') appAssets.push(url);
    return `${pre}${url}${post}`;
  });
  if (out !== src) {
    outdated.push(file);
    if (!CHECK_ONLY) fs.writeFileSync(full, out);
  }
}

// 2. Service worker : pré-cache du noyau applicatif (index.html et ses ressources)
const staticFiles = ['./', './index.html', './manifest.json', './assets/logo.svg', './assets/favicon-32x32.png', './assets/favicon-144x144.png'];
const precache = [...staticFiles, ...[...new Set(appAssets)].map(u => './' + u)];
const swPath = path.join(ROOT, 'sw.js');
const sw = fs.readFileSync(swPath, 'utf8');
const listJs = '[\n' + precache.map(u => `  '${u}'`).join(',\n') + '\n]';
const cacheId = crypto.createHash('sha1').update(precache.join('|')).digest('hex').slice(0, 10);
const newSw = sw
  .replace(/(\/\/ @precache-start\n)[\s\S]*?(\n\/\/ @precache-end)/, `$1const PRECACHE_URLS = ${listJs};$2`)
  .replace(/const CACHE_NAME = '[^']*';/, `const CACHE_NAME = 'etabli-des-maths-${cacheId}';`);
if (newSw !== sw) {
  outdated.push('sw.js');
  if (!CHECK_ONLY) fs.writeFileSync(swPath, newSw);
}

if (CHECK_ONLY) {
  if (outdated.length) {
    console.error(`✖ Versions à régénérer (node scripts/build_versions.js) : ${outdated.join(', ')}`);
    process.exit(1);
  }
  console.log('✔ Versions des ressources à jour.');
} else {
  console.log(outdated.length ? `✔ Mis à jour : ${outdated.join(', ')}` : '✔ Rien à mettre à jour.');
}
