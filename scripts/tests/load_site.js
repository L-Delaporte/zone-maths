/**
 * Charge les données du site dans un bac à sable Node, avec la liste du navigateur : les
 * <script src="js/data/…"> d'index.html, puis les fichiers des niveaux déclarés dans
 * <script id="level-bundles"> (js/dataLoader.js). Un fichier ajouté à index.html est ainsi
 * vu par les générateurs de pages et par les tests, sans autre liste à tenir à jour.
 *
 * Utilisé par scripts/build_seo_pages.js, scripts/build_qr_codes.js, test_data_content.js,
 * test_ds_banks.js et test_math_integrity.js.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');

/** Fichiers de données, relatifs à la racine, dans l'ordre où le site les déclare. */
function dataFilesFromIndex() {
  const page = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const files = [...page.matchAll(/<script[^>]+src="(js\/data\/[^"?]+)/g)].map((m) => m[1]);
  const block = page.match(/<script[^>]*id="level-bundles"[^>]*>([\s\S]*?)<\/script>/);
  if (!block) throw new Error('index.html : bloc level-bundles introuvable');
  for (const urls of Object.values(JSON.parse(block[1]))) {
    for (const url of urls) {
      const file = String(url).split('?')[0];
      if (file.startsWith('js/data/') && !files.includes(file)) files.push(file);
    }
  }
  return files;
}

/** Contexte « navigateur » minimal : les fichiers de données n'ont besoin que de window. */
function createSandbox() {
  const sandbox = {
    console,
    localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
    document: {
      addEventListener() {}, getElementById: () => null, querySelector: () => null,
      querySelectorAll: () => [], createElement: () => ({ style: {}, appendChild() {}, setAttribute() {} })
    }
  };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  return vm.createContext(sandbox);
}

/**
 * Exécute tous les fichiers de données et renvoie { win, files }.
 * Sans onError, le premier fichier absent ou invalide interrompt le chargement ;
 * avec onError(message), le chargement continue (un test peut alors tout lister).
 */
function loadSiteData({ onError } = {}) {
  const report = (message) => {
    if (!onError) throw new Error(message);
    onError(message);
  };
  const win = createSandbox();
  let files = [];
  try {
    files = dataFilesFromIndex();
  } catch (e) {
    report(`index.html : déclaration des données illisible (${e.message})`);
  }
  for (const file of files) {
    let source;
    try {
      source = fs.readFileSync(path.join(ROOT, file), 'utf8');
      vm.runInContext(source, win, { filename: file });
    } catch (e) {
      report(`${file} : erreur au chargement : ${e.message}`);
    }
  }
  return { win, files };
}

module.exports = { ROOT, dataFilesFromIndex, createSandbox, loadSiteData };
