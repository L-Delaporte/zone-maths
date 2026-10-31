/**
 * Délégation d'événements — L'Établi des Maths
 *
 * Remplace les attributs HTML on*="…" (incompatibles avec une politique CSP stricte)
 * par des attributs data-* lus par quelques écouteurs posés une seule fois sur document.
 *
 *   data-click="MathsApp.switchLevel" data-args='["6eme"]'   → MathsApp.switchLevel('6eme') au clic
 *   data-change="…" / data-input="…"                          → idem sur les événements change / input
 *   data-args : tableau JSON d'arguments ; la chaîne "$value" est remplacée par la valeur de l'élément
 *   data-stop    : event.stopPropagation() (les éléments data-click englobants ne sont pas appelés)
 *   data-self    : n'agit que si le clic vise l'élément lui-même (fond de modale)
 *   data-prevent : event.preventDefault() (lien <a href> géré en JS)
 *   data-fallback-src / data-fallback-href : ressource de repli si le chargement échoue
 *                                            (images, scripts et feuilles de style KaTeX)
 *
 * Aucune évaluation de code : seules les méthodes des objets globaux de la liste blanche
 * ci-dessous peuvent être appelées (plus « print » pour window.print).
 * Ce fichier est chargé dans le <head>, avant toute ressource munie d'un repli.
 */
(function () {
  'use strict';

  const TARGETS = [
    'MathsApp', 'MathsFlashcards', 'MathsDiaporama', 'MathsQuizGenerator',
    'MathsPwa', 'MathsAudio', 'MathVisualizer', 'MathsStorage'
  ];

  function resolve(name) {
    if (name === 'print') return { fn: window.print, ctx: window };
    const parts = String(name || '').split('.');
    if (parts.length !== 2 || !TARGETS.includes(parts[0])) return null;
    const target = window[parts[0]];
    const method = parts[1];
    if (!target || method in Object.prototype || typeof target[method] !== 'function') return null;
    return { fn: target[method], ctx: target };
  }

  function parseArgs(el) {
    const raw = el.getAttribute('data-args');
    if (!raw) return [];
    try {
      const args = JSON.parse(raw);
      if (!Array.isArray(args)) return [args];
      return args.map(a => (a === '$value' ? el.value : a));
    } catch (err) {
      console.error('data-args invalide :', raw, err);
      return [];
    }
  }

  function invoke(el, attr) {
    const name = el.getAttribute(attr);
    const action = resolve(name);
    if (!action) {
      console.error(`Action non autorisée ou introuvable : ${name}`);
      return;
    }
    action.fn.apply(action.ctx, parseArgs(el));
  }

  // Clic : comme des onclick en cascade, du plus profond au plus englobant, jusqu'à un data-stop.
  document.addEventListener('click', e => {
    const start = e.target && e.target.nodeType === 1 ? e.target : e.target && e.target.parentElement;
    if (!start || !start.closest) return;
    const chain = [];
    for (let el = start.closest('[data-click]'); el; el = el.parentElement && el.parentElement.closest('[data-click]')) {
      chain.push(el);
    }
    for (const el of chain) {
      if (el.hasAttribute('data-self') && e.target !== el) continue;
      if (el.hasAttribute('data-prevent')) e.preventDefault();
      if (el.hasAttribute('data-stop')) e.stopPropagation();
      try {
        invoke(el, 'data-click');
      } catch (err) {
        console.error(err);
      }
      if (el.hasAttribute('data-stop')) break;
    }
  });

  ['change', 'input'].forEach(type => {
    const attr = `data-${type}`;
    document.addEventListener(type, e => {
      const el = e.target;
      if (!el || el.nodeType !== 1 || !el.hasAttribute(attr)) return;
      invoke(el, attr);
    });
  });

  // Replis de chargement : l'événement error ne remonte pas, on l'intercepte en phase de capture.
  document.addEventListener('error', e => {
    const el = e.target;
    if (!el || el.nodeType !== 1) return;
    if (el.hasAttribute('data-fallback-href')) {
      const url = el.getAttribute('data-fallback-href');
      el.removeAttribute('data-fallback-href');
      el.href = url;
    } else if (el.hasAttribute('data-fallback-src')) {
      const url = el.getAttribute('data-fallback-src');
      el.removeAttribute('data-fallback-src');
      if (el.tagName === 'SCRIPT') {
        // Un <script> déjà exécuté ne se recharge pas en changeant src : on insère un nouvel élément.
        const s = document.createElement('script');
        s.src = url;
        s.async = false; // conserve l'ordre (katex.min.js avant auto-render.min.js)
        el.after(s);
      } else {
        el.src = url;
      }
    }
  }, true);
})();
