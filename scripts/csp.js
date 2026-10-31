/**
 * Content-Security-Policy du site — source unique.
 *
 * GitHub Pages ne permet pas d'envoyer d'en-têtes HTTP : la politique est posée par
 * <meta http-equiv="Content-Security-Policy"> en tête de chaque page (juste après le charset,
 * avant toute ressource). Utilisée par scripts/build_seo_pages.js (pages générées) et vérifiée
 * par scripts/tests/test_csp.js (toutes les pages publiées, y compris les pages racine écrites
 * à la main : si la politique change ici, reporter la nouvelle balise dans *.html).
 *
 * - script-src : aucun 'unsafe-inline' ni 'unsafe-eval'. Pas de script inline exécutable
 *   (thème : js/themeInit.js ; statistiques : js/analytics.js ; service worker : js/pwaManager.js),
 *   pas d'attribut on*= (js/eventDelegation.js). Seul tiers : GoatCounter (gc.zgo.at).
 * - style-src 'unsafe-inline' : KaTeX (rendu côté client et pages de cours pré-rendues) et
 *   l'application produisent des attributs style="…" dans le HTML injecté (hauteurs KaTeX,
 *   figures, barres de progression…). Un style-src strict casserait le rendu des formules.
 *   Le risque résiduel (injection de CSS) est faible : aucun contenu tiers n'est injecté.
 * - img-src data: blob: : images SVG/PNG en data: (figures, KaTeX) et aperçus éventuels ;
 *   GoatCounter peut compter par pixel (image) quand sendBeacon est indisponible.
 * - connect-src : envoi des visites à GoatCounter (sendBeacon) ; le service worker est même origine.
 * - frame-ancestors n'est pas pris en compte dans une balise meta (en-tête HTTP uniquement).
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self' https://gc.zgo.at",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://etabli-des-maths.goatcounter.com",
  "font-src 'self' data:",
  "connect-src 'self' https://etabli-des-maths.goatcounter.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "manifest-src 'self'",
  "worker-src 'self'",
].join('; ');

const CSP_META = `<meta http-equiv="Content-Security-Policy" content="${CSP}" />`;

module.exports = { CSP, CSP_META };
