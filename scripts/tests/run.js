#!/usr/bin/env node
/**
 * Lance toute la batterie de tests — À EXÉCUTER AVANT CHAQUE MISE EN LIGNE :
 *     node scripts/tests/run.js           complet, comme l'intégration continue
 *     node scripts/tests/run.js --quick   moins de tirages par générateur, pour l'usage courant
 *
 * Les étapes tournent en parallèle ; la sortie de chacune s'affiche d'un bloc quand elle se termine.
 * Code de sortie 0 si tout est vert, 1 sinon.
 */
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const QUICK = process.argv.includes('--quick');
const QUICK_DRAWS = 50; // au lieu de 200 par générateur

const steps = [
  ['Syntaxe JavaScript', null],
  ['Versions des ressources (cache)', ['scripts/build_versions.js', '--check']],
  ['Pages générées à jour (cours/, sitemap)', ['scripts/build_seo_pages.js', '--check']],
  ['Pages générées : balises et corrigés', ['scripts/tests/test_audit_seo.js']],
  ['Liens internes des pages', ['scripts/tests/test_audit_links.js']],
  ['Pieds et menus des pages racine', ['scripts/tests/test_audit_footers.js']],
  ['Coquille de l\'application', ['scripts/tests/test_audit_shell.js']],
  ['Service worker et PWA', ['scripts/tests/test_audit_sw.js']],
  ['Progression locale', ['scripts/tests/test_audit_storage.js']],
  ['Cœur applicatif', ['scripts/tests/test_core.js']],
  ['Badges à niveaux', ['scripts/tests/test_badges.js']],
  ['Contenus (cours, exercices, fiches)', ['scripts/tests/test_data_content.js']],
  ['Contenus du collège', ['scripts/tests/test_audit_college.js']],
  ['Rendu Markdown (code, formules, tableaux)', ['scripts/tests/test_audit_renderer.js']],
  ['Banques de DS et problèmes de brevet', ['scripts/tests/test_ds_banks.js', '--min', '12', '--min-secondaire', '16']],
  ['Défi de la semaine', ['scripts/tests/test_defis.js']],
  ['Content-Security-Policy (pages et scripts)', ['scripts/tests/test_csp.js']],
  ['Entraînement (oral, messages, mise en page)', ['scripts/tests/test_audit_training.js']],
  ['Diaporama (réponses, preuves)', ['scripts/tests/test_audit_diapo.js']],
  ['Séries communes et remise en ordre', ['scripts/tests/test_audit_seed.js']],
  ['Épreuve anticipée et version imprimable', ['scripts/tests/test_audit_epreuveAnticipee.js']],
  ['Sujets blancs de l\'épreuve anticipée', ['scripts/tests/test_ea_generators.js', ...(QUICK ? ['200'] : [])]],
  ['Générateurs collège', ['scripts/tests/test_college_generators.js', ...(QUICK ? [String(QUICK_DRAWS)] : [])]],
  ['Générateurs 6e', ['scripts/tests/test_6eme.js']],
  ['Générateurs lycée et licence', ['scripts/tests/test_lycee_licence_generators.js', ...(QUICK ? [`--n=${QUICK_DRAWS}`] : [])]],
  ['Générateurs : écritures et mélanges', ['scripts/tests/test_audit_generators.js']],
  ['Aller-retour générateurs et correcteur', ['scripts/tests/test_audit_corrector.js']],
  ['Chargement à la demande et en-tête mobile', ['scripts/tests/test_audit_uiTrans.js']],
  ['Intégrité KaTeX historique', ['scripts/tests/test_math_integrity.js']]
];

// Un nouveau test scripts/tests/test_*.js est lancé même si personne ne l'inscrit ci-dessus.
const listed = new Set(steps.filter(([, args]) => args).map(([, args]) => args[0]));
for (const name of fs.readdirSync(__dirname).sort()) {
  const rel = `scripts/tests/${name}`;
  if (/^test_.*\.js$/.test(name) && !listed.has(rel)) steps.push([name, [rel]]);
}

function jsFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return e.name === 'vendor' || e.name === 'node_modules' ? [] : jsFiles(p);
    return e.name.endsWith('.js') ? [p] : [];
  });
}

/** Compile sans exécuter tous les scripts publiés ; renvoie { ok, out }. */
function checkSyntax() {
  const files = [...jsFiles(path.join(ROOT, 'js')), path.join(ROOT, 'sw.js')];
  const errors = [];
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    const filename = path.relative(ROOT, file);
    try {
      new vm.Script(source, { filename });
    } catch (e) {
      errors.push(`✖ ${e.stack}`);
    }
    // Avant la version 16.4, Safari rejette à l'analyse tout le fichier qui contient un lookbehind.
    if (/\(\?<[!=]/.test(source)) errors.push(`✖ ${filename} : lookbehind « (?<! » ou « (?<= » incompatible avec Safari < 16.4`);
  }
  return { ok: !errors.length, out: errors.length ? errors.join('\n') + '\n' : `✔ ${files.length} fichiers\n` };
}

function runStep([label, args]) {
  return new Promise((resolve) => {
    const start = Date.now();
    const finish = (ok, out) => {
      const seconds = ((Date.now() - start) / 1000).toFixed(1).replace('.', ',');
      process.stdout.write(`\n━━ ${label} (${seconds} s) ━━\n${out}`);
      resolve(ok);
    };
    if (!args) {
      const { ok, out } = checkSyntax();
      finish(ok, out);
      return;
    }
    if (!fs.existsSync(path.join(ROOT, args[0]))) {
      finish(false, `✖ fichier absent : ${args[0]}\n`);
      return;
    }
    const child = spawn(process.execPath, args, { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '';
    child.stdout.on('data', (chunk) => { out += chunk; });
    child.stderr.on('data', (chunk) => { out += chunk; });
    child.on('error', (e) => finish(false, `${out}${e.message}\n`));
    child.on('close', (code) => finish(code === 0, out));
  });
}

async function main() {
  const start = Date.now();
  const queue = [...steps];
  const failed = [];
  const worker = async () => {
    while (queue.length) {
      const step = queue.shift();
      if (!(await runStep(step))) failed.push(step[0]);
    }
  };
  await Promise.all(Array.from({ length: Math.max(1, os.cpus().length) }, worker));

  const total = Math.round((Date.now() - start) / 1000);
  console.log('\n' + '═'.repeat(60));
  if (failed.length) {
    console.error(`✖ ÉCHEC (${total} s) : ${failed.join(' · ')}`);
    process.exit(1);
  }
  console.log(`✔ Tous les tests sont verts (${steps.length} étapes${QUICK ? ', mode rapide' : ''}, ${total} s).`);
}

main();
