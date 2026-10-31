/**
 * L'Établi des Maths — Kit enseignant et affiche (enseignants.html, affiche.html).
 * Boutons « Copier le message » (presse-papiers, repli par sélection du texte) et boutons d'impression.
 */
(function () {
  'use strict';

  function announce(statusEl, text) {
    if (!statusEl) return;
    statusEl.textContent = '';
    // Laisse le temps aux lecteurs d'écran de détecter le changement
    setTimeout(function () { statusEl.textContent = text; }, 50);
    clearTimeout(statusEl._kitTimer);
    statusEl._kitTimer = setTimeout(function () { statusEl.textContent = ''; }, 6000);
  }

  function legacyCopy(field) {
    field.focus();
    field.select();
    try { return document.execCommand('copy'); } catch (e) { return false; }
  }

  function copyFrom(button) {
    var field = document.getElementById(button.getAttribute('data-copy-target'));
    var statusEl = document.getElementById(button.getAttribute('data-copy-status'));
    if (!field) return;
    var text = field.value;
    var ok = function () { announce(statusEl, '✅ Message copié. Collez-le dans l\'ENT ou un courriel.'); };
    var manual = function () {
      field.focus();
      field.select();
      announce(statusEl, 'Texte sélectionné : copiez-le avec Ctrl + C (ou ⌘ + C).');
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(ok, function () { if (legacyCopy(field)) ok(); else manual(); });
    } else if (legacyCopy(field)) {
      ok();
    } else {
      manual();
    }
  }

  document.addEventListener('click', function (event) {
    var target = event.target.closest ? event.target.closest('[data-copy-target], [data-print]') : null;
    if (!target) return;
    if (target.hasAttribute('data-copy-target')) { copyFrom(target); return; }
    // data-print="<id de section>" : n'imprime que cette section (voir @media print de landing.css)
    var only = target.getAttribute('data-print');
    if (only) document.body.setAttribute('data-print-only', only);
    window.print();
  });

  window.addEventListener('afterprint', function () { document.body.removeAttribute('data-print-only'); });

  // Arrivée par un lien ?src=… (message aux collègues, affiche) : GoatCounter lit la source dans
  // l'adresse au moment du comptage ; on retire ensuite les paramètres de suivi de la barre d'adresse.
  var TRACKING = /^(src|ref|source|campaign|utm_[a-z]+)$/i;
  function cleanUrl() {
    if (!window.history || !history.replaceState) return;
    var params = new URLSearchParams(location.search), drop = [];
    params.forEach(function (v, k) { if (TRACKING.test(k)) drop.push(k); });
    if (!drop.length) return;
    drop.forEach(function (k) { params.delete(k); });
    var q = params.toString();
    history.replaceState(history.state, '', location.pathname + (q ? '?' + q : '') + location.hash);
  }
  function cleanWhenCounted() {
    // count.js compte immédiatement si la page est visible, sinon au passage à « visible »
    if (document.visibilityState === 'visible') { cleanUrl(); return; }
    var onVisible = function () {
      if (document.visibilityState !== 'visible') return;
      document.removeEventListener('visibilitychange', onVisible);
      setTimeout(cleanUrl, 0);
    };
    document.addEventListener('visibilitychange', onVisible);
  }
  if (/[?&](src|ref|source|campaign|utm_[a-z]+)=/i.test(location.search)) {
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      cleanWhenCounted();
    } else {
      var gcScript = document.querySelector('script[data-goatcounter]');
      if (gcScript) {
        gcScript.addEventListener('load', cleanWhenCounted);
        gcScript.addEventListener('error', cleanUrl);
      }
      // Script bloqué (extension, hors ligne) : nettoyage de secours
      window.addEventListener('load', function () { setTimeout(cleanUrl, 5000); });
    }
  }
})();
