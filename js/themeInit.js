// Applique le thème (clair/sombre) choisi dans l'application, avant l'affichage.
// Chargé de façon synchrone dans le <head> de chaque page (pas de script inline : CSP stricte).
try {
  document.documentElement.setAttribute('data-theme', JSON.parse(localStorage.getItem('maths_3e_progress_v1') || '{}').theme || 'light');
} catch (e) {}
// Affichage simplifié (réglage d'accessibilité) : sans animations ni effets visuels.
try {
  if (localStorage.getItem('etabli_affichage_simple') === '1') document.documentElement.setAttribute('data-simple', '');
} catch (e) {}
