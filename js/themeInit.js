// Applique le thème (clair/sombre) choisi dans l'application, avant l'affichage.
// Chargé de façon synchrone dans le <head> de chaque page (pas de script inline : CSP stricte).
try {
  document.documentElement.setAttribute('data-theme', JSON.parse(localStorage.getItem('maths_3e_progress_v1') || '{}').theme || 'light');
} catch (e) {}
