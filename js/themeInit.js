// Applique le thème (clair/sombre) choisi dans l'application, avant l'affichage.
// Chargé de façon synchrone dans le <head> de chaque page (pas de script inline : CSP stricte).
(function () {
  var root = document.documentElement;
  function saved() {
    try { return JSON.parse(localStorage.getItem('maths_3e_progress_v1') || '{}').theme || null; } catch (e) { return null; }
  }
  var t = saved();
  if (t) { root.setAttribute('data-theme', t); return; }
  if (!window.matchMedia) { root.setAttribute('data-theme', 'light'); return; }
  // Aucun choix enregistré : on suit le réglage du système.
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var apply = function () { root.setAttribute('data-theme', mq.matches ? 'dark' : 'light'); };
  apply();
  if (mq.addEventListener) mq.addEventListener('change', function () { if (!saved()) apply(); });
})();
// Lien direct vers un chapitre ou un outil (mêmes paramètres que resolveUrlRoute, js/app.js) : l'accueil n'apparaît pas
// le temps du chargement. Le marqueur est retiré dès que l'application choisit sa vue ; sans JavaScript, il n'est jamais posé.
try {
  var deepLink = new URLSearchParams(location.search);
  if (['chapitre', 'chapter', 'chap', 'level', 'niveau', 'mode', 'tool'].some(function (k) { return deepLink.get(k); })) {
    document.documentElement.setAttribute('data-deep-link', '');
    // Filet : si l'application n'a pas démarré (script non chargé), l'accueil statique redevient visible
    window.addEventListener('load', function () { document.documentElement.removeAttribute('data-deep-link'); });
  }
} catch (e) { /* navigateur ancien : l'accueil s'affiche comme sans lien direct */ }
// Affichage simplifié (réglage d'accessibilité) : sans animations ni effets visuels.
try {
  if (localStorage.getItem('etabli_affichage_simple') === '1') document.documentElement.setAttribute('data-simple', '');
} catch (e) { /* stockage indisponible : affichage par défaut */ }
// Police adaptée à la dyslexie (OpenDyslexic) : le fichier de police n'est téléchargé que si ce réglage est actif.
try {
  if (localStorage.getItem('etabli_police_dys') === '1') document.documentElement.setAttribute('data-dys', '');
} catch (e) { /* stockage indisponible : police par défaut */ }
