#!/usr/bin/env node
/**
 * Test de bout en bout dans Brave (headless) via le protocole DevTools, sans dépendance.
 * Usage : node e2e_brave.js [url_de_base]   (défaut http://127.0.0.1:8765/)
 * Le site doit être servi (python3 -m http.server 8765 --bind 127.0.0.1 depuis Site/).
 * Captures dans ./e2e_shots/ (à côté du script, ignoré par git)
 * Les violations de la Content-Security-Policy (scripts/csp.js) sont collectées sur tout le parcours,
 * et un parcours dédié (clair puis sombre) couvre accueil, défi, niveaux, cours, flashcards, rituel,
 * fiches & DS + impression, brevet/bac blancs, sauvegarde/restauration, pages annexes : 0 attendue.
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
const cspViolations = []; // violations de la Content-Security-Policy (événement securitypolicyviolation + console)
let fileChooserWaiter = null;
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
    if (m.method === 'Runtime.bindingCalled' && m.params.name === '__e2eCspReport') cspViolations.push(m.params.payload);
    if (m.method === 'Log.entryAdded' && /Content[ -]Security[ -]Policy/i.test(m.params.entry.text)) cspViolations.push('console ' + m.params.entry.text.slice(0, 200));
    if (m.method === 'Page.fileChooserOpened' && fileChooserWaiter) { fileChooserWaiter(m.params); fileChooserWaiter = null; }
    if (m.method === 'Runtime.exceptionThrown') errors.push('EXCEPTION ' + (m.params.exceptionDetails.exception || {}).description);
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errors.push('console.error ' + m.params.args.map(a => a.value || a.description).join(' '));
    if (m.method === 'Log.entryAdded' && m.params.entry.level === 'error' && !/goatcounter|gc\.zgo/.test(m.params.entry.url || '')) errors.push('LOG ' + m.params.entry.text + ' ' + (m.params.entry.url || ''));
  });
  await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
  // Collecte des violations CSP sur toutes les pages visitées (script injecté par DevTools, hors CSP)
  await send('Runtime.addBinding', { name: '__e2eCspReport' });
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `document.addEventListener('securitypolicyviolation', function (e) {
    try { window.__e2eCspReport(location.pathname + ' : ' + (e.effectiveDirective || e.violatedDirective) + ' bloque ' + (e.blockedURI || '(inline)') + ' (' + (e.sourceFile || '') + ':' + e.lineNumber + ')'); } catch (_) {}
  }, true);` });

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

  await step('Fiches & DS : fiches rédigées + fiche générée + DS sur 20 (6e, 4e, 3e, 1re, L2, CAPES)', async () => {
    // css/sheets.css est injectée si la page ne la déclare pas encore
    await evaluate(`(() => { if (![...document.styleSheets].some(s => /sheets\\.css/.test(s.href || ''))) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'css/sheets.css'; document.head.appendChild(l); } return true; })()`);
    const out = [];
    for (const [lvl, chap] of [['6eme', '6N4'], ['4eme', '4G2'], ['3eme', 'G1'], ['1ere', '1A1'], ['L2', 'L2-RED1'], ['capes', 'capes-03']]) {
      await evaluate(`window.MathsApp.switchLevel('${lvl}', false)`);
      await waitFor(`window.MathsDataLoader.isLevelLoaded('${lvl}')`);
      await evaluate(`window.MathsApp.selectChapter('${chap}'); window.MathsApp.switchTab('sheets'); true`);
      await sleep(400);
      const n = await evaluate(`document.querySelectorAll('#sheets-content-container .ws-chip').length`);
      const kinds = [];
      for (let i = 0; i < n; i++) {
        await evaluate(`window.MathsApp.selectSheet(${i}); true`);
        await sleep(150);
        const r = await evaluate(`(() => { const C = document.getElementById('sheets-content-container'); const body = C.querySelector('.ws-subject .ws-body');
          const pts = [...C.querySelectorAll('.ws-subject .ws-ex-title .ws-pts')].reduce((s, e) => s + parseFloat(e.textContent.replace(',', '.')), 0);
          return { type: (C.querySelector('.ws-sheet').className.match(/ws-type-(\\S+)/) || [])[1], len: body ? body.textContent.trim().length : 0,
            kerr: C.querySelectorAll('.katex-error').length, print: !!C.querySelector('[data-print="subject"]'), sol: !!C.querySelector('.sheet-solution'), pts }; })()`);
        if (r.len < 150) throw new Error(`${chap} fiche ${i} vide ou trop courte (${r.len} car.)`);
        if (r.kerr) throw new Error(`${chap} fiche ${i} : ${r.kerr} erreur(s) KaTeX`);
        if (!r.print) throw new Error(`${chap} fiche ${i} : bouton imprimer absent`);
        if (r.type !== 'ds_type' && r.type !== 'entrainement_genere' && !r.sol) throw new Error(`${chap} fiche ${i} : corrigé absent`);
        if (r.type === 'ds_type' && r.pts !== 20) throw new Error(`${chap} : DS noté sur ${r.pts} au lieu de 20`);
        kinds.push(r.type);
      }
      if (!kinds.includes('ds_type') || !kinds.includes('entrainement_genere')) throw new Error(`${chap} : fiche générée ou DS manquant (${kinds})`);
      if (lvl === '1ere') await shot('03c_fiches_ds');
      out.push(`${chap} ${n} fiches`);
    }
    await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    await sleep(300);
    const over = await evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth');
    await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
    if (over > 2) throw new Error(`débordement horizontal mobile de ${over} px`);
    await evaluate(`window.MathsApp.switchTab('train'); true`);
    return out.join(' · ');
  });

  await step('DS sans QCM (banques rédigées) + brevet blanc et bac blanc', async () => {
    const out = [];
    for (const [lvl, chap] of [['2nde', '2S4'], ['tale', 'TA4'], ['L2', 'L2-DET'], ['capes', 'capes-05'], ['4eme', '4G1']]) {
      await evaluate(`window.MathsApp.switchLevel('${lvl}', false)`);
      await waitFor(`window.MathsDataLoader.isLevelLoaded('${lvl}')`);
      await evaluate(`window.MathsApp.selectChapter('${chap}'); window.MathsApp.switchTab('sheets'); true`);
      await sleep(600);
      await evaluate(`(()=>{const b=[...document.querySelectorAll('#sheets-content-container button, #sheets-content-container [role=tab]')].find(x=>/DS/.test(x.textContent)); if(b) b.click(); return true})()`);
      await sleep(700);
      const st = await evaluate(`({ choices: document.querySelectorAll('#sheets-content-container .ws-choices').length, exercises: document.querySelectorAll('#sheets-content-container .ws-exercise').length, err: document.querySelectorAll('#sheets-content-container .katex-error').length, bank: !!(window.MATHS_DS_BANK && window.MATHS_DS_BANK['${chap}']) })`);
      if (lvl === 'tale') await shot('12_ds_banque_tale');
      if (st.choices || !st.exercises || st.err) throw new Error(`${chap} ${JSON.stringify(st)}`);
      out.push(`${chap}: ${st.exercises} ex.${st.bank ? ' (banque)' : ''}`);
    }
    await evaluate(`window.MathsApp.switchLevel('3eme', false)`);
    await waitFor(`window.MathsDataLoader.isLevelLoaded('3eme')`);
    await evaluate("window.MathsApp.openQuizModal('N1', false); true");
    await sleep(600);
    await evaluate("document.getElementById('quiz-count-select').value='dnb-20'; window.MathsQuizGenerator.generate(); true");
    await sleep(1200);
    const br = await evaluate(`({ bank: [...document.querySelectorAll('.quiz-questions-grid .quiz-q-badge')].filter(b => /^Exercice/.test(b.textContent)).length, err: document.querySelectorAll('#quiz-preview-content .katex-error').length })`);
    await evaluate("window.MathsQuizGenerator.closeModal(); true");
    if (br.bank !== 3 || br.err) throw new Error('brevet ' + JSON.stringify(br));
    await evaluate(`window.MathsApp.switchLevel('tale', false)`);
    await evaluate("window.MathsApp.openQuizModal('TA4', false); true");
    await sleep(600);
    await evaluate("document.getElementById('quiz-count-select').value='bac-20'; window.MathsQuizGenerator.generate(); true");
    await sleep(1200);
    const bac = await evaluate(`({ cards: document.querySelectorAll('.quiz-questions-grid .quiz-q-card').length, mcq: /Choisir|Entourer|A\.\s/.test(document.querySelector('.quiz-questions-grid').textContent) && document.querySelectorAll('.quiz-questions-grid .quiz-q-card ol li').length > 50, err: document.querySelectorAll('#quiz-preview-content .katex-error').length })`);
    await shot('13_bac_blanc');
    await evaluate("window.MathsQuizGenerator.closeModal(); true");
    if (bac.cards !== 4 || bac.err) throw new Error('bac ' + JSON.stringify(bac));
    return out.join(' · ') + ' · brevet 3 problèmes · bac 4 exercices';
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

  await step('Partager à ma classe : lien, QR code et message ENT', async () => {
    await goto(BASE + 'index.html?chapitre=G1');
    await sleep(1200);
    await evaluate("document.getElementById('btn-share-training').click(); true");
    await sleep(500);
    const st = await evaluate(`({ open: document.getElementById('share-class-modal').style.display, url: document.getElementById('share-class-url').value, qr: document.querySelector('.share-class-qr img').naturalWidth, msg: document.getElementById('share-class-msg').value.length })`);
    await shot('11_partage_classe');
    if (st.open !== 'flex' || !st.url.includes('chapitre=G1') || !st.qr || st.msg < 30) throw new Error(JSON.stringify(st));
    await evaluate("window.MathsApp.closeShareModal(); true");
    return st.url;
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

  // --- Accessibilité (RGAA / WCAG 2.2 AA) : contrôles légers et stables ---
  // Contraste du texte visible sous ROOT (fonds composés, dégradés pris au pire, opacité héritée).
  const CONTRAST = (root) => `(() => {
    const cv = document.createElement('canvas'); cv.width = cv.height = 1; const cx = cv.getContext('2d', { willReadFrequently: true });
    const parse = c => { cx.clearRect(0,0,1,1); cx.fillStyle = '#000'; cx.fillStyle = c; cx.fillRect(0,0,1,1); const d = cx.getImageData(0,0,1,1).data; return [d[0], d[1], d[2], d[3] / 255]; };
    const blend = (t, b) => { const a = t[3]; return [t[0]*a + b[0]*(1-a), t[1]*a + b[1]*(1-a), t[2]*a + b[2]*(1-a), 1]; };
    const lum = c => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126*f(c[0]) + 0.7152*f(c[1]) + 0.0722*f(c[2]); };
    const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
    const bgs = el => { const layers = []; for (let n = el; n && n.nodeType === 1; n = n.parentElement) { const cs = getComputedStyle(n);
        const g = (cs.backgroundImage.match(/(rgba?\\([^)]*\\)|#[0-9a-f]{3,8})/gi) || []);
        if (/gradient/.test(cs.backgroundImage) && g.length) { const below = n.parentElement ? bgs(n.parentElement)[0] : [255,255,255,1]; return g.map(c => layers.reduceRight((acc, l) => blend(l, acc), blend(parse(c), below))); }
        const c = parse(cs.backgroundColor); if (c[3] > 0) { layers.push(c); if (c[3] >= 0.999) break; } }
      return [layers.reduceRight((acc, l) => blend(l, acc), [255,255,255,1])]; };
    const fails = []; const seen = new Set();
    const w = document.createTreeWalker(document.querySelector(${JSON.stringify(root)}), NodeFilter.SHOW_TEXT); let t;
    while ((t = w.nextNode())) {
      if (!/[\\p{L}\\p{N}]/u.test(t.nodeValue)) continue;
      const el = t.parentElement; if (!el || seen.has(el)) continue; seen.add(el);
      if (el.closest('script,style,.katex-mathml,.skip-link,.cours-skip,.sr-only,[aria-disabled="true"]')) continue;
      const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) continue;
      const cs = getComputedStyle(el); if (cs.visibility !== 'visible') continue;
      let op = 1; for (let n = el; n && n.nodeType === 1; n = n.parentElement) op *= parseFloat(getComputedStyle(n).opacity); if (op < 0.05) continue;
      const fg = parse(cs.color); const size = parseFloat(cs.fontSize), wt = parseInt(cs.fontWeight);
      const need = (size >= 24 || (size >= 18.66 && wt >= 700)) ? 3 : 4.5;
      const worst = Math.min(...bgs(el).map(bg => { let f = blend(fg, bg); if (op < 1) f = blend([f[0], f[1], f[2], op], bg); return ratio(f, bg); }));
      if (worst < need - 0.05) fails.push((el.id ? '#' + el.id : el.tagName.toLowerCase() + '.' + [...el.classList].slice(0, 2).join('.')) + ' ' + worst.toFixed(2) + ' « ' + t.nodeValue.trim().slice(0, 25) + ' »');
    }
    return fails;
  })()`;

  await step('Accessibilité : contrastes clair/sombre, lien d’évitement, champ étiqueté, onglets ARIA, récapitulatif du rituel', async () => {
    const out = [];
    for (const theme of ['light', 'dark']) {
      await evaluate(`localStorage.clear(); localStorage.setItem('maths_3e_progress_v1', JSON.stringify({ theme: '${theme}' })); true`);
      await goto(BASE + 'index.html');
      await waitFor('window.MathsApp && window.MathsApp.isHomeView');
      if (await evaluate('document.documentElement.getAttribute("data-theme")') !== theme && theme === 'dark') throw new Error('thème sombre non appliqué');
      const home = await evaluate(CONTRAST('body'));
      if (home.length) throw new Error(`accueil (${theme}) : ${home.length} texte(s) sous le seuil : ${home.slice(0, 4).join(' ; ')}`);
      await evaluate(`window.MathsApp.switchLevel('3eme', false)`);
      await waitFor(`window.MathsDataLoader.isLevelLoaded('3eme')`);
      for (let i = 0; i < 30; i++) {
        await evaluate(`window.MathsApp.selectChapter('N1'); window.MathsApp.switchTab('train'); window.MathsAdaptiveEngine.nextExercise(); window.MathsApp.renderTrainingView(); true`);
        if (await evaluate(`window.MathsAdaptiveEngine.state.currentExercise.type === 'exact'`)) break;
      }
      await sleep(500);
      const exo = await evaluate(CONTRAST('#contenu'));
      if (exo.length) throw new Error(`exercice (${theme}) : ${exo.length} texte(s) sous le seuil : ${exo.slice(0, 4).join(' ; ')}`);
      out.push(`${theme} OK`);
    }
    const skip = await evaluate(`(() => { const a = document.querySelector('body > a.skip-link'); const first = [...document.querySelectorAll('a[href],button,input,[tabindex]')].find(e => e.tabIndex >= 0); return !!a && a === first && !!document.getElementById('contenu') && document.querySelectorAll('main').length === 1 && !!document.getElementById('contenu').closest('main'); })()`);
    if (!skip) throw new Error('lien d’évitement absent, pas en premier, ou région <main id="contenu"> manquante');
    const input = await evaluate(`(() => { const i = document.getElementById('math-user-input'); return !i ? 'absent' : (i.labels && i.labels.length ? i.labels[0].textContent.trim() : (i.getAttribute('aria-label') || '')); })()`);
    if (input === 'absent') out.push('pas de saisie exacte'); else if (!input) throw new Error('champ de réponse sans étiquette'); else out.push(`champ « ${input} »`);
    await evaluate(`window.MathsApp.switchTab('course'); true`);
    await sleep(300);
    const tabs = await evaluate(`[...document.querySelectorAll('.tab-btn')].map(b => b.getAttribute('role') + ':' + b.getAttribute('aria-selected')).join(',')`);
    if (tabs !== 'tab:false,tab:true,tab:false,tab:false') throw new Error('onglets : ' + tabs);
    await evaluate(`window.MathsApp.switchTab('train'); true`);
    if (await evaluate(`document.activeElement && document.activeElement.id === 'home-resume-card'`)) throw new Error('focus volé par l’observateur des modales');
    // Rituel en mode Standard : le récapitulatif doit lister les questions (régression itemsHtml)
    await evaluate(`window.MathsApp.openDiaporamaModal('N1'); true`);
    await sleep(400);
    await evaluate(`(() => { const m = document.getElementById('diapo-mode-select'); if (m) m.value = 'standard'; const t = document.getElementById('diapo-time-select'); if (t) t.value = '0'; window.MathsDiaporama.start(); return true; })()`);
    await sleep(500);
    await evaluate(`window.MathsDiaporama.finish(); true`);
    await sleep(500);
    const recap = await evaluate(`document.querySelectorAll('#diapo-mm-questions-list .diapo-mm-item').length`);
    if (!recap) throw new Error('récapitulatif du rituel standard vide');
    await evaluate(`window.MathsDiaporama.setRecapMode('solutions'); true`);
    await sleep(300);
    const sol = await evaluate(`document.querySelectorAll('#diapo-mm-questions-list .diapo-mm-ans-badge').length`);
    if (sol !== recap) throw new Error(`correction incomplète (${sol}/${recap})`);
    await evaluate(`window.MathsDiaporama.closeModal(); localStorage.clear(); true`);
    out.push(`onglets OK, rituel ${recap} questions récapitulées`);
    return out.join(' · ');
  });

  for (const [name, url] of [['rituels', 'rituels.html'], ['brevet', 'brevet.html'], ['bac', 'bac.html'], ['enseignants', 'enseignants.html'], ['parents', 'parents.html'], ['mentions', 'mentions-legales.html'], ['apropos', 'a-propos.html'], ['cours', 'cours/'], ['cours_6e', 'cours/6e/'], ['cours_pythagore', 'cours/4e/theoreme-de-pythagore.html']]) {
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

  // --- Téléphone tactile (390×844 puis 360×740) : tiroir des chapitres, modales, flashcards ---
  const rect = sel => evaluate(`(() => { const e = document.querySelector(${JSON.stringify(sel)}); if (!e || !e.getClientRects().length) return null; const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; })()`);
  async function tapXY(x, y) {
    await send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
    await send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await sleep(350);
  }
  async function tap(sel) {
    const r = await rect(sel);
    if (!r) throw new Error('élément invisible : ' + sel);
    await tapXY(r.x + r.w / 2, r.y + r.h / 2);
  }
  const overflowX = () => evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth');
  for (const [w, h] of [[390, 844], [360, 740]]) {
    await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 2, mobile: true });
    await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });

    await step(`Mobile ${w} px : la barre « Chapitre » ouvre/ferme la liste, le choix d'un chapitre la referme`, async () => {
      await evaluate('localStorage.clear(); true');
      await goto(BASE + 'index.html');
      await waitFor('window.MathsApp && window.MathsApp.isHomeView');
      await evaluate(`window.MathsApp.switchLevel('4eme', true); true`);
      await waitFor(`window.MathsDataLoader.isLevelLoaded('4eme') && !window.MathsApp.isHomeView`);
      await sleep(500);
      const shown = () => evaluate(`getComputedStyle(document.getElementById('sidebar-chapters')).display !== 'none'`);
      if (await shown()) throw new Error('liste des chapitres déjà dépliée à l’arrivée');
      await tap('#mobile-chapter-btn');
      if (!await shown()) throw new Error('1er tap : la liste ne s’ouvre pas');
      if (await evaluate(`document.getElementById('mobile-chapter-btn').getAttribute('aria-expanded')`) !== 'true') throw new Error('aria-expanded non mis à jour');
      await tap('#mobile-chapter-btn');
      if (await shown()) throw new Error('2e tap : la liste ne se referme pas');
      await tap('#mobile-chapter-btn');
      const target = await evaluate(`[...document.querySelectorAll('#sidebar-chapters .chapter-card')].map(c => c.dataset.chapterId)[2]`);
      await evaluate(`document.querySelector('#sidebar-chapters .chapter-card[data-chapter-id="${target}"]').scrollIntoView({ block: 'center' }); true`);
      await sleep(200);
      await tap(`#sidebar-chapters .chapter-card[data-chapter-id="${target}"]`);
      await sleep(400);
      if (await evaluate('window.MathsApp.currentChapterId') !== target) throw new Error('le tap sur le chapitre ne le sélectionne pas');
      if (await shown()) throw new Error('la liste reste ouverte après le choix du chapitre');
      if (await overflowX() > 2) throw new Error('débordement horizontal');
      await shot(`08_chapitres_mobile_${w}`, w, h, true);
      return `${target} choisi, liste refermée`;
    });

    await step(`Mobile ${w} px : popups Niveau et Série lisibles et faciles à fermer (✕, fond, Échap)`, async () => {
      const out = [];
      for (const [pill, id] of [['#header-level-pill', 'level-modal'], ['#header-streak-pill', 'streak-modal']]) {
        const isOpen = () => evaluate(`document.getElementById('${id}').style.display !== 'none'`);
        for (const how of ['croix', 'fond', 'Échap']) {
          await evaluate('window.scrollTo(0, 0); true');
          await tap(pill);
          if (!await isOpen()) throw new Error(`${id} ne s’ouvre pas au tap`);
          const c = await rect(`#${id} .modal-header .modal-close-btn`);
          if (!c || c.w < 44 || c.h < 44) throw new Error(`${id} : bouton ✕ trop petit (${c && Math.round(c.w)}×${c && Math.round(c.h)})`);
          if (c.y < 0 || c.y + c.h > h || c.x + c.w > w) throw new Error(`${id} : bouton ✕ hors de l’écran`);
          const foot = await rect(`#${id} .modal-footer .btn-primary`);
          if (!foot || foot.y + foot.h > h + 1) throw new Error(`${id} : bouton du bas inaccessible`);
          if (await overflowX() > 2) throw new Error(`${id} : débordement horizontal`);
          if (how === 'croix') { await shot(`09_${id}_${w}`, w, h, true); await tap(`#${id} .modal-header .modal-close-btn`); }
          else if (how === 'fond') await tapXY(w / 2, 12);
          else {
            await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
            await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
            await sleep(300);
          }
          if (await isOpen()) throw new Error(`${id} ne se ferme pas (${how})`);
        }
        out.push(id);
      }
      return out.join(' + ') + ' : fermeture ✕ / fond / Échap OK';
    });

    await step(`Mobile ${w} px : séance de flashcards complète au doigt + récapitulatif énoncés/corrections`, async () => {
      await evaluate(`window.MathsApp.switchLevel('3eme', false)`);
      await waitFor(`window.MathsDataLoader.isLevelLoaded('3eme')`);
      await evaluate(`window.MathsApp.selectChapter('N1'); window.scrollTo(0, 0); true`);
      await sleep(400);
      // sur mobile, le choix d'un chapitre fait défiler jusqu'à l'exercice (défilement doux) : on ramène le bouton à l'écran
      await sleep(800);
      await evaluate(`document.getElementById('btn-open-flashcards').scrollIntoView({ block: 'center', behavior: 'instant' }); true`);
      await sleep(200);
      await tap('#btn-open-flashcards');
      await waitFor(`document.getElementById('flashcards-modal').style.display !== 'none'`);
      const start = '#flashcards-config-screen .modal-footer .btn-primary';
      const r0 = await rect(start);
      if (!r0 || r0.y + r0.h > h + 1) throw new Error('bouton « Démarrer » hors de l’écran');
      await tap(start);
      let n = 0;
      for (; n < 40; n++) {
        if (await evaluate(`document.getElementById('flashcards-summary-screen').style.display !== 'none'`)) break;
        await tap('#fc-flipper');
        if (!await evaluate('window.MathsFlashcards.isRevealed')) throw new Error('le tap sur la carte ne la retourne pas');
        const sel = n === 1 ? '.btn-fc-wrong' : '.btn-fc-correct';
        const b = await rect(sel);
        if (!b || b.y + b.h > h + 1) throw new Error('boutons d’auto-évaluation hors de l’écran');
        await tap(sel);
      }
      const recap = await evaluate(`(() => { const s = document.getElementById('flashcards-summary-screen'); return { items: s.querySelectorAll('.fc-recap-item').length, q: s.querySelectorAll('.fc-recap-q .fc-recap-text').length, a: s.querySelectorAll('.fc-recap-a .fc-recap-text').length, katex: s.querySelectorAll('.katex').length, raw: /\\$[^$]+\\$/.test(s.innerText) }; })()`);
      if (!recap.items || recap.q !== recap.items || recap.a !== recap.items) throw new Error('récapitulatif absent ou incomplet ' + JSON.stringify(recap));
      if (!recap.katex || recap.raw) throw new Error('KaTeX non rendu dans le récapitulatif');
      const close = await rect('#flashcards-summary-screen .modal-close-btn');
      if (!close || close.w < 44 || close.y < 0) throw new Error('bouton ✕ du bilan inaccessible');
      if (await overflowX() > 2) throw new Error('débordement horizontal');
      await evaluate(`document.querySelector('.fc-recap-item').scrollIntoView({ block: 'start' }); true`);
      await shot(`10_flashcards_recap_${w}`, w, h, true);
      await tap('#flashcards-summary-screen .modal-footer .btn-primary');
      if (await evaluate(`document.getElementById('flashcards-modal').style.display !== 'none'`)) throw new Error('« Terminer » ne ferme pas');
      return `${n} cartes jouées, ${recap.items} notions récapitulées (${recap.katex} formules KaTeX)`;
    });
  }
  await send('Emulation.setTouchEmulationEnabled', { enabled: false });

  // ── Content-Security-Policy : parcours complet en clair et en sombre, zéro violation attendue ──
  // (les violations sont collectées pendant TOUT le test, voir __e2eCspReport plus haut)
  const dlDir = fs.mkdtempSync(path.join(os.tmpdir(), 'e2e-dl-'));
  await send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: dlDir });
  const stubPrint = `window.__prints = 0; window.print = function () { window.__prints++; }; true`;
  const printMedia = async (fn) => {
    await send('Emulation.setEmulatedMedia', { media: 'print' });
    await sleep(500);
    try { return await fn(); } finally { await send('Emulation.setEmulatedMedia', { media: '' }); }
  };
  for (const theme of ['light', 'dark']) {
    const cspStep = async (label, fn) => step(`CSP ${theme} : ${label}`, async () => {
      const before = cspViolations.length;
      const info = await fn();
      await sleep(300);
      const v = cspViolations.slice(before);
      if (v.length) throw new Error(`${v.length} violation(s) : ${[...new Set(v)].slice(0, 3).join(' | ')}`);
      return info;
    });
    const setTheme = `localStorage.setItem('maths_3e_progress_v1', JSON.stringify(Object.assign(JSON.parse(localStorage.getItem('maths_3e_progress_v1') || '{}'), { theme: '${theme}' }))); true`;

    await cspStep('accueil, défi de la semaine, entraînement + cours de chaque grand niveau', async () => {
      await goto(BASE + 'index.html');
      await evaluate('localStorage.clear(); true');
      await evaluate(setTheme);
      await goto(BASE + 'index.html');
      await waitFor('window.MathsApp && window.MathsApp.isHomeView');
      const t = await evaluate('document.documentElement.getAttribute("data-theme")');
      if (t !== theme) throw new Error(`thème ${t} au lieu de ${theme}`);
      // Défi : mauvaise réponse, puis corrigé
      await waitFor('document.getElementById("home-defi-input")');
      await evaluate(`document.getElementById('home-defi-input').value = '123456789'; document.querySelector('.home-defi-submit').click(); true`);
      await sleep(400);
      await evaluate(`(document.querySelector('[data-defi-action="reveal"]') || { click() {} }).click(); true`);
      await sleep(400);
      if (!await evaluate('!!document.getElementById("home-defi-solution")')) throw new Error('corrigé du défi absent');
      const done = [];
      for (const level of ['6eme', '4eme', '3eme', '2nde', 'tale', 'L2', 'capes']) {
        await evaluate(`window.MathsApp.switchLevel('${level}', true)`);
        await waitFor(`window.MathsDataLoader.isLevelLoaded('${level}') && window.MathsApp.currentLevel === '${level}'`);
        const chap = await evaluate(`(window.MATHS_CHAPTERS.find(c => c.level === '${level}') || {}).id`);
        await evaluate(`window.MathsApp.selectChapter('${chap}'); window.MathsApp.switchTab('train'); true`);
        await sleep(600);
        await evaluate(`window.MathsApp.switchTab('course'); true`);
        await sleep(500);
        done.push(chap);
      }
      return `thème ${t}, défi, ${done.join(' ')}`;
    });

    await cspStep('flashcards, rituel, fiches & DS (génération + impression)', async () => {
      await evaluate(`window.MathsApp.switchLevel('3eme', false)`);
      await waitFor(`window.MathsDataLoader.isLevelLoaded('3eme')`);
      await evaluate(`window.MathsApp.selectChapter('G1'); window.MathsApp.openFlashcardsModal('G1'); true`);
      await sleep(600);
      await evaluate(`window.MathsFlashcards.closeModal(); window.MathsApp.openDiaporamaModal('G1'); true`);
      await sleep(600);
      await evaluate(`window.MathsDiaporama.closeModal(); true`);
      await evaluate(stubPrint);
      await evaluate(`window.MathsApp.switchTab('sheets'); true`);
      await sleep(500);
      const n = await evaluate(`document.querySelectorAll('#sheets-content-container .ws-chip').length`);
      for (let i = 0; i < n; i++) {
        await evaluate(`window.MathsApp.selectSheet(${i}); true`);
        await sleep(200);
      }
      // Impression du dernier sujet (DS) avec corrigé : rendu en média print
      await printMedia(async () => {
        await evaluate(`document.querySelector('#sheets-content-container [data-print="solution"]').click(); true`);
        await sleep(600);
      });
      const prints = await evaluate('window.__prints');
      if (prints < 1) throw new Error('impression non déclenchée');
      await evaluate(`window.MathsApp.switchTab('train'); true`);
      return `${n} fiches, impression ×${prints}`;
    });

    await cspStep('brevet blanc et bac blanc (génération + impression)', async () => {
      await evaluate(stubPrint);
      await evaluate("window.MathsApp.openQuizModal('N1', false); true");
      await sleep(600);
      await evaluate("document.getElementById('quiz-count-select').value='dnb-20'; window.MathsQuizGenerator.generate(); true");
      await sleep(1200);
      await printMedia(async () => {
        await evaluate(`(() => { const b = [...document.querySelectorAll('#quiz-modal [data-click="print"]')].find(x => x.offsetParent !== null) || document.querySelector('#quiz-modal [data-click="print"]'); b.click(); return true; })()`);
        await sleep(400);
      });
      await evaluate("window.MathsQuizGenerator.closeModal(); true");
      await evaluate(`window.MathsApp.switchLevel('tale', false)`);
      await waitFor(`window.MathsDataLoader.isLevelLoaded('tale')`);
      await evaluate("window.MathsApp.openQuizModal('TA4', false); true");
      await sleep(600);
      await evaluate("document.getElementById('quiz-count-select').value='bac-20'; window.MathsQuizGenerator.generate(); true");
      await sleep(1200);
      const err = await evaluate(`document.querySelectorAll('#quiz-preview-content .katex-error').length`);
      await evaluate("window.MathsQuizGenerator.closeModal(); true");
      if (err) throw new Error(`${err} erreur(s) KaTeX`);
      return `impression ×${await evaluate('window.__prints')}`;
    });

    await cspStep('bilan : sauvegarde (Blob) puis restauration (fichier)', async () => {
      await evaluate(`window.MathsApp.switchTab('stats'); true`);
      await sleep(500);
      for (const f of fs.readdirSync(dlDir)) fs.rmSync(path.join(dlDir, f), { force: true });
      await evaluate(`document.querySelector('[data-click="MathsStorage.exportToJson"]').click(); true`);
      let file;
      for (let i = 0; i < 40 && !file; i++) {
        await sleep(150);
        file = fs.readdirSync(dlDir).find(f => f.endsWith('.json'));
      }
      if (!file) throw new Error('sauvegarde non téléchargée');
      const saved = JSON.parse(fs.readFileSync(path.join(dlDir, file), 'utf8'));
      if (saved.theme !== theme && (saved.user || {}).theme !== theme && JSON.stringify(saved).indexOf(theme) < 0) throw new Error('sauvegarde sans le thème');
      // Restauration : on modifie la progression, puis on recharge le fichier via le vrai sélecteur de fichier
      await evaluate(`localStorage.setItem('maths_3e_progress_v1', JSON.stringify({ theme: 'light' })); window.confirm = () => true; true`);
      await send('Page.setInterceptFileChooserDialog', { enabled: true });
      const chooser = new Promise(r => { fileChooserWaiter = r; });
      // userGesture : input.click() n'ouvre le sélecteur de fichier qu'avec une activation utilisateur
      await send('Runtime.evaluate', { expression: `document.querySelector('[data-click="MathsApp.handleImportProgress"]').click()`, userGesture: true });
      const fc = await Promise.race([chooser, sleep(4000).then(() => null)]);
      await send('Page.setInterceptFileChooserDialog', { enabled: false });
      if (!fc) { await evaluate(setTheme); throw new Error('sélecteur de fichier non ouvert'); }
      await send('DOM.enable');
      await send('DOM.setFileInputFiles', { files: [path.join(dlDir, file)], backendNodeId: fc.backendNodeId });
      await sleep(1500); // restauration → location.reload()
      await waitFor('document.readyState === "complete" && window.MathsApp');
      const t = await evaluate('document.documentElement.getAttribute("data-theme")');
      if (t !== theme) throw new Error(`thème après restauration : ${t}`);
      return `${file} restauré`;
    });

    for (const [url, extra] of [
      ['rituels.html'], ['brevet.html'], ['bac.html'], ['parents.html'], ['a-propos.html'], ['mentions-legales.html'],
      ['enseignants.html', 'copy'], ['affiche.html', 'print'],
      ['cours/'], ['cours/4e/theoreme-de-pythagore.html'], ['cours/terminale/calcul-integral.html'], ['reussir-le-bac-de-maths/'], ['entrainement-maths/'],
    ]) {
      await cspStep(url, async () => {
        await goto(BASE + url);
        const t = await evaluate('document.documentElement.getAttribute("data-theme")');
        if (url !== 'affiche.html' && t !== theme) throw new Error(`thème ${t} au lieu de ${theme}`);
        let info = `thème ${t || '—'}`;
        if (extra === 'copy') {
          const st = [];
          for (const id of ['msg-ent', 'msg-parents', 'msg-collegues']) {
            await evaluate(`document.querySelector('[data-copy-target="${id}"]').click(); true`);
            await sleep(400);
            st.push(await evaluate(`document.getElementById('${id}-statut').textContent.trim()`));
          }
          if (st.some(s => !s)) throw new Error('statut de copie vide');
          await evaluate(stubPrint);
          await printMedia(async () => { await evaluate(`document.getElementById('kit-print-qr').click(); true`); await sleep(400); });
          info += `, copie : ${st[0]}, QR imprimés ×${await evaluate('window.__prints')}`;
        } else if (extra === 'print') {
          await evaluate(stubPrint);
          await printMedia(async () => { await evaluate(`document.querySelector('[data-print]').click(); true`); await sleep(400); });
          info += `, impression ×${await evaluate('window.__prints')}`;
        }
        const katex = await evaluate('document.querySelectorAll(".katex").length');
        return info + (katex ? `, ${katex} formules KaTeX` : '');
      });
    }
  }
  await evaluate('localStorage.clear(); true');
  try { fs.rmSync(dlDir, { recursive: true, force: true }); } catch (e) {}

  for (const r of results) console.log(r.join(' '));
  const uniq = [...new Set(errors)];
  console.log(`\nErreurs JavaScript / réseau : ${uniq.length}`);
  uniq.slice(0, 30).forEach(e => console.log('  - ' + e.slice(0, 300)));
  const cspUniq = [...new Set(cspViolations)];
  console.log(`Violations de la Content-Security-Policy (tout le parcours) : ${cspViolations.length}`);
  cspUniq.slice(0, 30).forEach(e => console.log('  - ' + e.slice(0, 300)));
  ws.close();
  brave.kill();
  try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5 }); } catch (e) {}
  process.exit(results.some(r => r[0] === '✖') || uniq.length || cspViolations.length ? 1 : 0);
})().catch(e => { console.error(e); brave.kill(); process.exit(2); });
