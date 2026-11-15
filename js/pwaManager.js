/**
 * PWA Manager — L'Établi des Maths
 * Gestion du bandeau d'installation pour Android (Chromium) et iOS (Safari / WebKit),
 * et annonce des nouvelles versions du site.
 */
window.MathsPwa = {
  deferredPrompt: null,
  isIos: false,
  isStandalone: false,

  init() {
    // 1. Détection du mode autonome (déjà installé comme PWA)
    this.isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                        window.navigator.standalone === true ||
                        document.referrer.includes('android-app://');

    if (this.isStandalone) {
      return;
    }

    // 1 bis. Ne proposer l'installation qu'à partir de la 2e visite (une visite = une session d'onglet)
    let visits = 0;
    try {
      visits = parseInt(localStorage.getItem('etabli_visits') || '0', 10) || 0;
      if (!sessionStorage.getItem('etabli_visit_counted')) {
        visits += 1;
        localStorage.setItem('etabli_visits', String(visits));
        sessionStorage.setItem('etabli_visit_counted', '1');
      }
    } catch (e) { /* stockage indisponible : les visites ne sont pas comptées */ }
    if (visits < 2) {
      return;
    }

    // 2. Vérifier si l'utilisateur a fermé récemment le bandeau (rappel après 7 jours)
    let dismissedTime = null;
    try { dismissedTime = localStorage.getItem('etabli_pwa_dismissed'); } catch (e) { /* stockage indisponible : aucun refus enregistré */ }
    if (dismissedTime) {
      const elapsed = Date.now() - parseInt(dismissedTime, 10);
      if (elapsed < 7 * 24 * 60 * 60 * 1000) {
        return;
      }
    }

    // 3. Détection iOS
    // (depuis iPadOS 13, Safari sur iPad se présente comme un Mac)
    this.isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    // 4. Écoute de l'événement standard beforeinstallprompt (Android / Chromium)
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showBanner('android');
    });

    // 5. Cas iOS : pas d'événement beforeinstallprompt sur Safari WebKit
    if (this.isIos) {
      // Laisser 2.5 secondes après le chargement pour ne pas perturber l'ouverture
      setTimeout(() => {
        this.showBanner('ios');
      }, 2500);
    }

    // 6. Détection après installation réussie
    window.addEventListener('appinstalled', () => {
      this.hideBanner();
      try { localStorage.setItem('etabli_pwa_installed', 'true'); } catch (e) { /* stockage indisponible : le réglage n'est pas conservé */ }
    });

    // 7. Attacher les écouteurs sur les boutons
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn) {
      installBtn.addEventListener('click', () => this.handleInstallClick());
    }

    const dismissBtn = document.getElementById('pwa-dismiss-btn');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => this.dismissBanner());
    }

    const iosCloseBtn = document.getElementById('pwa-ios-modal-close');
    if (iosCloseBtn) {
      iosCloseBtn.addEventListener('click', () => this.closeIosModal());
    }
  },

  showBanner(platform) {
    if (this.isStandalone) return;
    if (window.innerWidth > 768 && !this.isIos) return;

    const banner = document.getElementById('pwa-install-banner');
    if (!banner) return;

    const desc = document.getElementById('pwa-banner-desc');
    if (desc) {
      desc.textContent = platform === 'ios'
        ? 'Sur iPhone/iPad : contenus déjà ouverts accessibles hors ligne'
        : 'Plein écran et contenus déjà ouverts accessibles hors ligne';
      desc.style.whiteSpace = 'normal';
    }

    // important : au-delà de 768 px, la feuille de style masque le bandeau (les iPad en ont besoin)
    banner.style.setProperty('display', 'flex', 'important');
  },

  hideBanner() {
    const banner = document.getElementById('pwa-install-banner');
    if (!banner) return;
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      banner.style.display = 'none';
      banner.style.opacity = '';
      banner.style.transform = '';
    }, 250);
  },

  dismissBanner() {
    this.hideBanner();
    try { localStorage.setItem('etabli_pwa_dismissed', Date.now().toString()); } catch (e) { /* stockage indisponible : le réglage n'est pas conservé */ }
  },

  async handleInstallClick() {
    if (this.isIos) {
      this.openIosModal();
      return;
    }

    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      try {
        const choiceResult = await this.deferredPrompt.userChoice;
        if (choiceResult && choiceResult.outcome === 'accepted') {
          this.hideBanner();
        }
      } catch (err) {
        console.warn('[PWA] Erreur prompt install :', err);
      }
      this.deferredPrompt = null;
    } else {
      // Navigateurs mobiles où le prompt n'est pas déclenché directement (Firefox, Brave ou guide)
      this.openIosModal();
    }
  },

  openIosModal() {
    const modal = document.getElementById('pwa-ios-modal');
    if (modal) {
      modal.style.display = 'flex';
    }
  },

  closeIosModal() {
    const modal = document.getElementById('pwa-ios-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  },

  /** Surveille les nouvelles versions du service worker. La page ne se recharge jamais sans l'accord de l'élève. */
  watchUpdates(reg) {
    const container = navigator.serviceWorker;
    if (reg.waiting && container.controller) this.offerUpdate(reg.waiting);

    const onStateChange = (e) => {
      if (e.target.state === 'installed' && container.controller) this.offerUpdate(e.target);
    };
    const followInstalling = () => {
      if (reg.installing) reg.installing.addEventListener('statechange', onStateChange);
    };
    // Sur une connexion lente, l'installation peut avoir commencé avant la fin du chargement de la page
    followInstalling();
    reg.addEventListener('updatefound', followInstalling);

    container.addEventListener('controllerchange', () => {
      if (this.reloadOnActivation) window.location.reload();
      else if (container.controller) this.offerUpdate(container.controller);
    });

    // Une application restée ouverte ne repasse pas par une navigation : vérifier à son retour au premier plan
    let lastCheck = Date.now();
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && Date.now() - lastCheck > 60 * 60 * 1000) {
        lastCheck = Date.now();
        reg.update().catch(() => {});
      }
    });
  },

  /** Page déjà à jour : la version s'active sans rien dire. Sinon, l'élève choisit quand recharger. */
  offerUpdate(worker) {
    const urls = [...document.querySelectorAll('script[src], link[rel="stylesheet"]')].map((el) => el.src || el.href);
    const channel = new MessageChannel();
    channel.port1.onmessage = (e) => {
      if (e.data) worker.postMessage({ type: 'activate' });
      else this.showUpdateNotice(worker);
    };
    worker.postMessage({ type: 'is-current', urls }, [channel.port2]);
  },

  showUpdateNotice(worker) {
    if (document.getElementById('pwa-update-notice')) return;
    const notice = document.createElement('div');
    notice.id = 'pwa-update-notice';
    notice.className = 'pwa-install-banner no-print';
    notice.setAttribute('role', 'status');
    notice.innerHTML = `
      <div class="pwa-banner-left">
        <div class="pwa-banner-text">
          <strong class="pwa-banner-title">Nouvelle version disponible</strong>
          <span class="pwa-banner-desc" style="white-space: normal">Recharge la page quand tu auras terminé ton exercice.</span>
        </div>
      </div>
      <div class="pwa-banner-actions">
        <button class="pwa-install-btn" type="button">Recharger</button>
        <button class="pwa-dismiss-btn" type="button" aria-label="Plus tard" title="Plus tard">✕</button>
      </div>`;
    // En haut de l'écran : en bas, la barre d'onglets mobile le masquerait
    notice.style.cssText = 'position: fixed; top: calc(env(safe-area-inset-top, 0px) + 0.5rem); left: 0.5rem; right: 0.5rem; ' +
      'max-width: 30rem; margin: 0 auto; z-index: 1100; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 14px;';
    // important : le bandeau d'installation qui prête ses styles est masqué au-delà de 768 px
    notice.style.setProperty('display', 'flex', 'important');

    notice.querySelector('.pwa-install-btn').addEventListener('click', () => {
      if (worker.state === 'installed') {
        this.reloadOnActivation = true;
        worker.postMessage({ type: 'activate' });
      } else {
        window.location.reload();
      }
    });
    notice.querySelector('.pwa-dismiss-btn').addEventListener('click', () => notice.remove());
    document.body.appendChild(notice);
  }
};

// Initialisation au chargement de la page
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.MathsPwa.init());
} else {
  window.MathsPwa.init();
}

// Enregistrement du service worker (PWA hors ligne) — anciennement script inline d'index.html
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').then(function (reg) {
      console.log('[PWA] Service Worker actif :', reg.scope);
      window.MathsPwa.watchUpdates(reg);
    }).catch(function (err) {
      console.warn('[PWA] Échec enregistrement Service Worker :', err);
    });
  });
}
