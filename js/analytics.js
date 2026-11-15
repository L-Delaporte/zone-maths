/**
 * Statistiques d'audience anonymes et conformes RGPD (GoatCounter, sans cookie) — application (index.html)
 * Fichier externe (et non script inline) pour respecter la Content-Security-Policy du site.
 *
 * Sources de trafic : les liens diffusés portent ?src=<source>. GoatCounter lit nativement
 * les paramètres utm_source, ref, src et source (et utm_campaign / campaign) comme
 * « source » de la visite (https://www.goatcounter.com/help/campaigns).
 * Liste de référence (à garder identique à la FAQ de enseignants.html) :
 *   qr        QR codes imprimés ou projetés (fiches, DS, rituels, « Partager à ma classe »)
 *             — scripts/build_qr_codes.js (assets/qr/site.svg et assets/qr/<chapitre>.svg)
 *   classe    lien « Partager à ma classe » d'un chapitre (js/app/training.js)
 *   affiche   QR codes de l'affiche A4 et des QR par niveau (affiche.html, enseignants.html)
 *   ent       message aux élèves pour l'ENT / Pronote (enseignants.html)
 *   parents   message aux parents (enseignants.html)
 *   collegues message de présentation aux collègues (enseignants.html)
 *   defi      lien partagé du défi de la semaine (js/app/defi.js)
 * Ces paramètres sont retirés du chemin compté (sinon « /?src=qr » et « / » seraient deux
 * pages), la source est transmise comme référent, puis l'adresse affichée est nettoyée.
 */
(function () {
  var TRACKING = /^(src|ref|source|campaign|utm_[a-z]+)$/i;
  var first = new URLSearchParams(location.search);
  var source = (first.get('src') || first.get('ref') || first.get('source') || first.get('utm_source') || '')
    .toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40);
  var counted = false;
  function cleanSearch() {
    var p = new URLSearchParams(location.search), drop = [];
    p.forEach(function (v, k) { if (TRACKING.test(k)) drop.push(k); });
    drop.forEach(function (k) { p.delete(k); });
    var q = p.toString();
    return q ? '?' + q : '';
  }
  // Sans le fragment : le lien d'évitement (#contenu) ne doit pas compter une seconde page vue.
  // La graine d'une série commune reste dans l'adresse affichée, mais ne doit pas fragmenter les statistiques.
  function countedPath() {
    var p = new URLSearchParams(cleanSearch());
    p.delete('seed');
    var q = p.toString();
    return location.pathname + (q ? '?' + q : '');
  }
  function cleanUrl() {
    var target = location.pathname + cleanSearch() + location.hash;
    if (window.history && history.replaceState && target !== location.pathname + location.search + location.hash) {
      history.replaceState(history.state, '', target);
    }
  }
  window.goatcounter = {
    no_onload: true, // première visite comptée ci-dessous, pour nettoyer l'URL ensuite
    path: function () { return countedPath(); }
  };
  // Appelé au chargement de count.js : compte l'arrivée avec sa source, puis nettoie l'URL
  window.edmCountLanding = function () {
    if (counted) return;
    var gc = window.goatcounter;
    if (!gc || typeof gc.count !== 'function') return;
    var go = function () {
      counted = true;
      gc.count(source ? { path: countedPath(), referrer: source } : { path: countedPath() });
      cleanUrl();
    };
    if (document.visibilityState === 'prerender' || document.visibilityState === 'hidden') {
      var onVisible = function () {
        if (document.visibilityState !== 'visible') return;
        document.removeEventListener('visibilitychange', onVisible);
        go();
      };
      document.addEventListener('visibilitychange', onVisible);
    } else {
      go();
    }
  };
  // Script bloqué ou hors ligne : l'adresse est nettoyée quand même
  window.addEventListener('load', function () { setTimeout(function () { if (!counted) cleanUrl(); }, 5000); });

  // Refus de la mesure d'audience (mentions légales) : count.js n'est même pas chargé. L'adresse est
  // nettoyée par le délai de secours ci-dessus : js/app.js doit encore lire ?src= au démarrage.
  try { if (localStorage.getItem('skipgc') === 't') return; } catch (e) { /* stockage indisponible : aucun refus enregistré */ }

  // count.js inséré ici pour écouter son chargement sans attribut onload (compatibilité CSP)
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://etabli-des-maths.goatcounter.com/count');
  s.addEventListener('load', function () { window.edmCountLanding(); });
  document.body.appendChild(s);
})();
