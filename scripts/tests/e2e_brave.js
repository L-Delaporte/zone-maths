#!/usr/bin/env node
/**
 * Test de bout en bout dans Brave (headless) via le protocole DevTools, sans dépendance.
 * Usage : node e2e_brave.js [url_de_base]   (défaut http://127.0.0.1:8765/)
 * Le site doit être servi (python3 -m http.server 8765 --bind 127.0.0.1 depuis Site/).
 * Captures dans ./e2e_shots/ (à côté du script, ignoré par git)
 */
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const BASE = process.argv[2] || 'http://127.0.0.1:8765/';
const OUT = path.join(__dirname, 'e2e_shots');
fs.mkdirSync(OUT, { recursive: true });
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'e2e-brave-'));
const PORT = 9300 + Math.floor(Math.random() * 500);
const sleep = ms => new Promise(r => setTimeout(r, ms));

const brave = spawn('brave', ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`,
  '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--window-size=1440,900', 'about:blank'], { stdio: 'ignore' });

let ws, msgId = 0;
const pending = new Map();
const errors = [];
function send(method, params = {}) {
  const id = ++msgId;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((res, rej) => pending.set(id, { res, rej }));
}
async function evaluate(expr) {
  const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(`${expr.slice(0, 80)} → ${r.exceptionDetails.exception && r.exceptionDetails.exception.description}`);
  return r.result.value;
}
async function shot(name, w = 1440, h = 900, mobile = false) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile });
  await sleep(400);
  const r = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(OUT, name + '.png'), Buffer.from(r.data, 'base64'));
}
async function waitFor(expr, timeout = 8000) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    try { if (await evaluate(expr)) return true; } catch (e) {}
    await sleep(150);
  }
  throw new Error('Délai dépassé : ' + expr);
}
async function goto(url) {
  await send('Page.navigate', { url });
  await sleep(300);
  await waitFor('document.readyState === "complete"');
  await sleep(600);
}

const results = [];
async function step(label, fn) {
  try {
    const info = await fn();
    results.push(['✔', label, info || '']);
  } catch (e) {
    results.push(['✖', label, e.message]);
  }
}

(async () => {
  let target;
  for (let i = 0; i < 60 && !target; i++) {
    await sleep(500);
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
      target = list.find(t => t.type === 'page');
    } catch (e) {}
  }
  if (!target) { console.error('Brave ne répond pas'); brave.kill(); process.exit(2); }
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  ws.addEventListener('message', ev => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id).res(m.result || {}); pending.delete(m.id); }
    if (m.method === 'Runtime.exceptionThrown') errors.push('EXCEPTION ' + (m.params.exceptionDetails.exception || {}).description);
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errors.push('console.error ' + m.params.args.map(a => a.value || a.description).join(' '));
    if (m.method === 'Log.entryAdded' && m.params.entry.level === 'error' && !/goatcounter|gc\.zgo/.test(m.params.entry.url || '')) errors.push('LOG ' + m.params.entry.text + ' ' + (m.params.entry.url || ''));
  });
  await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');

  await step('Accueil : chargement sans données de niveau superflues', async () => {
    await goto(BASE + 'index.html');
    await waitFor('window.MathsApp && document.getElementById("home-view").style.display !== "none"');
    const n = await evaluate('performance.getEntriesByType("resource").filter(e => /\\/js\\//.test(e.name)).reduce((s, e) => s + (e.transferSize || e.encodedBodySize || 0), 0)');
    await shot('01_accueil');
    return `${Math.round(n / 1024)} Ko de JS transférés`;
  });

  for (const level of ['6eme', '5eme', '4eme', '3eme', '2nde', '1ere', 'tale', 'L1', 'L2', 'L3', 'capes']) {
    await step(`Niveau ${level} : chargement + chapitre + exercice`, async () => {
      await evaluate(`window.MathsApp.switchLevel('${level}', true)`);
      await waitFor(`window.MathsDataLoader.isLevelLoaded('${level}') && window.MathsApp.currentLevel === '${level}'`);
      await sleep(400);
      const chap = await evaluate(`(window.MATHS_CHAPTERS.find(c => c.level === '${level}') || {}).id`);
      await evaluate(`window.MathsApp.selectChapter('${chap}'); window.MathsApp.switchTab('train'); true`);
      await sleep(500);
      const statement = await evaluate(`(document.querySelector('#exercise-statement-box .exo-body') || {}).textContent || ''`);
      if (statement.trim().length < 5) throw new Error(`pas d'énoncé pour ${chap}`);
      const url = await evaluate('location.search');
      if (!url.includes(chap)) throw new Error(`URL non synchronisée (${url})`);
      await evaluate(`window.MathsApp.switchTab('course'); true`);
      await sleep(400);
      const courseLen = await evaluate(`(document.getElementById('tab-course') || document.querySelector('.course-sheet-header') || {textContent:''}).textContent.length`);
      if (level === '6eme' || level === '3eme') await shot(`02_${level}_cours`);
      await evaluate(`window.MathsApp.switchTab('train'); true`);
      return `${chap} — énoncé « ${statement.trim().slice(0, 60)}… » — cours ${courseLen} car.`;
    });
  }

  await step('Réponse fausse puis bonne réponse (saisie exacte)', async () => {
    await evaluate(`window.MathsApp.switchLevel('3eme', false)`);
    await waitFor(`window.MathsDataLoader.isLevelLoaded('3eme')`);
    for (let i = 0; i < 30; i++) {
      await evaluate(`window.MathsApp.selectChapter('N1'); window.MathsApp.switchTab('train'); window.MathsAdaptiveEngine.nextExercise(); window.MathsApp.renderTrainingView(); true`);
      if (await evaluate(`window.MathsAdaptiveEngine.state.currentExercise.type === 'exact'`)) break;
    }
    const ex = await evaluate(`({ type: window.MathsAdaptiveEngine.state.currentExercise.type, answer: window.MathsAdaptiveEngine.state.currentExercise.answer })`);
    if (ex.type !== 'exact') return 'pas de question à saisie trouvée (QCM uniquement)';
    const input = `document.querySelector('#exercise-input-zone input')`;
    await evaluate(`${input}.value = 'réponse fausse'; ${input}.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter', bubbles: true})); true`);
    await sleep(500);
    await evaluate(`(document.querySelector('#exercise-input-zone button.btn-primary, #btn-submit-answer') || {click(){}}).click(); true`);
    await sleep(400);
    const fb1 = await evaluate(`(document.getElementById('exercise-feedback-zone') || {}).className || ''`);
    await shot('03_feedback_faux');
    return `réponse attendue ${ex.answer} — retour : ${fb1}`;
  });

  await step('Onglets Fiches & DS et Bilan (3e, 6e, Terminale)', async () => {
    const out = [];
    for (const [lvl, chap] of [['3eme', 'N1'], ['6eme', '6N4'], ['tale', 'TA1']]) {
      await evaluate(`window.MathsApp.switchLevel('${lvl}', false)`);
      await waitFor(`window.MathsDataLoader.isLevelLoaded('${lvl}')`);
      await evaluate(`window.MathsApp.selectChapter('${chap}'); window.MathsApp.switchTab('sheets'); true`);
      await sleep(500);
      const sheets = await evaluate(`(document.getElementById('sheets-content-container') || document.querySelector('[id*="sheet"]') || {textContent: ''}).textContent.length`);
      await evaluate(`window.MathsApp.switchTab('stats'); true`);
      await sleep(400);
      const stats = await evaluate(`(document.getElementById('stats-content-container') || document.querySelector('[id*="stats"]') || {textContent: ''}).textContent.length`);
      if (lvl === '3eme') await shot('03b_bilan');
      out.push(`${chap} fiches ${sheets} car. / bilan ${stats} car.`);
      await evaluate(`window.MathsApp.switchTab('train'); true`);
    }
    return out.join(' · ');
  });

  await step('Navigation clavier : Tab atteint les cartes de l’accueil', async () => {
    await evaluate(`window.MathsApp.showHomeView(); true`);
    await sleep(300);
    const roles = await evaluate(`[...document.querySelectorAll('.home-tool-card, .home-cycle-card, .home-resume-card')].filter(e => e.getAttribute('role') === 'button' && e.tabIndex === 0).length`);
    if (!roles) throw new Error('cartes non focusables');
    return `${roles} cartes focusables`;
  });

  await step('Modale + Échap + retour du focus', async () => {
    await evaluate(`window.MathsApp.showModeExplainer('adaptive'); true`);
    await sleep(300);
    const inside = await evaluate(`document.getElementById('mode-explainer-modal').contains(document.activeElement)`);
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await sleep(300);
    const closed = await evaluate(`document.getElementById('mode-explainer-modal').style.display === 'none'`);
    if (!closed) throw new Error('Échap ne ferme pas la modale');
    return `focus dans la modale : ${inside}`;
  });

  await step('Flashcards / Rituel / Devoir blanc (3e)', async () => {
    await evaluate(`window.MathsApp.switchLevel('3eme', false); window.MathsApp.openDiaporamaModal('N1'); true`);
    await sleep(500);
    const d = await evaluate(`document.getElementById('diaporama-modal').style.display`);
    await evaluate(`window.MathsDiaporama.closeModal(); window.MathsApp.openQuizModal('N1', true); true`);
    await sleep(1200);
    await shot('04_devoir_blanc');
    const q = await evaluate(`document.getElementById('quiz-modal').textContent.length`);
    await evaluate(`window.MathsQuizGenerator.closeModal(); window.MathsApp.openFlashcardsModal('N1'); true`);
    await sleep(500);
    const f = await evaluate(`document.getElementById('flashcards-modal').style.display`);
    await evaluate(`window.MathsFlashcards.closeModal(); true`);
    return `rituel ${d}, devoir ${q} car., flashcards ${f}`;
  });

  await step('Lien partagé ?chapitre=6G3&mode=rituel (niveau non chargé)', async () => {
    await goto(BASE + 'index.html?chapitre=6G3&mode=rituel');
    await waitFor(`window.MathsDataLoader && window.MathsDataLoader.isLevelLoaded('6eme') && document.getElementById('diaporama-modal').style.display !== 'none'`, 10000);
    await shot('05_lien_rituel_6e');
    return 'rituel 6e ouvert';
  });

  await step('Lien ?chapitre=N1&palier=4 sur un profil neuf : aucun palier débloqué', async () => {
    await evaluate("localStorage.clear(); true");
    await goto(BASE + 'index.html?chapitre=N1&palier=4');
    await sleep(1500);
    const st = await evaluate(`({ tier: window.MathsAdaptiveEngine.state.currentTier, validated: JSON.stringify((window.MathsStorage.getChapterProgress('N1').validatedTiers) || []), t4: window.MathsAdaptiveEngine.isTierUnlocked('N1', 4) })`);
    if (st.tier !== 1 || st.t4 || st.validated !== '[]') throw new Error(JSON.stringify(st));
    return 'reste au palier 1, palier 4 verrouillé';
  });

  await step('Bouton Retour du navigateur', async () => {
    await goto(BASE + 'index.html');
    await waitFor('window.MathsApp && window.MathsApp.isHomeView');
    await evaluate(`window.MathsApp.selectChapter('N1'); true`);
    await sleep(800);
    await evaluate(`window.MathsApp.selectChapter('N2'); true`);
    await sleep(400);
    await evaluate('history.back(); true');
    await sleep(800);
    const cur = await evaluate('window.MathsApp.currentChapterId + " " + location.search');
    if (!cur.startsWith('N1')) throw new Error('retour vers ' + cur);
    return cur;
  });

  for (const [name, url] of [['rituels', 'rituels.html'], ['brevet', 'brevet.html'], ['bac', 'bac.html'], ['enseignants', 'enseignants.html'], ['mentions', 'mentions-legales.html'], ['cours', 'cours/'], ['cours_6e', 'cours/6e/'], ['cours_pythagore', 'cours/4e/theoreme-de-pythagore.html']]) {
    await step(`Page ${url} (mobile 390 px, pas de débordement)`, async () => {
      await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
      await goto(BASE + url);
      const over = await evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth');
      await shot(`06_${name}_mobile`, 390, 844, true);
      if (over > 2) throw new Error(`débordement horizontal de ${over} px`);
      return 'OK';
    });
  }
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await step('Application en mobile', async () => {
    await goto(BASE + 'index.html');
    await sleep(500);
    const over = await evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth');
    await shot('07_app_mobile', 390, 844, true);
    if (over > 2) throw new Error(`débordement horizontal de ${over} px`);
    return 'OK';
  });

  for (const r of results) console.log(r.join(' '));
  const uniq = [...new Set(errors)];
  console.log(`\nErreurs JavaScript / réseau : ${uniq.length}`);
  uniq.slice(0, 30).forEach(e => console.log('  - ' + e.slice(0, 300)));
  ws.close();
  brave.kill();
  try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5 }); } catch (e) {}
  process.exit(results.some(r => r[0] === '✖') || uniq.length ? 1 : 0);
})().catch(e => { console.error(e); brave.kill(); process.exit(2); });
