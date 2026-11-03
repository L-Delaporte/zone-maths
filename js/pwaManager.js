/**
 * PWA Manager — L'Établi des Maths
 * Gestion du bandeau d'installation pour Android (Chromium) et iOS (Safari / WebKit)
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
    } catch (e) {}
    if (visits < 2) {
      return;
    }

    // 2. Vérifier si l'utilisateur a fermé récemment le bandeau (rappel après 7 jours)
    let dismissedTime = null;
    try { dismissedTime = localStorage.getItem('etabli_pwa_dismissed'); } catch (e) {}
    if (dismissedTime) {
      const elapsed = Date.now() - parseInt(dismissedTime, 10);
      if (elapsed < 7 * 24 * 60 * 60 * 1000) {
        return;
      }
    }

    // 3. Détection iOS
    this.isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // 4. Écoute de l'événement standard beforeinstallprompt (Android / Chromium)
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showBanner('android');
    });

    // 5. Cas iOS : pas d'événement beforeinstallprompt sur Safari WebKit
    if (this.isIos) {
      const isMobileScreen = window.innerWidth <= 768;
      if (isMobileScreen) {
        // Laisser 2.5 secondes après le chargement pour ne pas perturber l'ouverture
        setTimeout(() => {
          this.showBanner('ios');
        }, 2500);
      }
    }

    // 6. Détection après installation réussie
    window.addEventListener('appinstalled', () => {
      this.hideBanner();
      try { localStorage.setItem('etabli_pwa_installed', 'true'); } catch (e) {}
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
    if (platform === 'ios') {
      if (desc) desc.textContent = 'Ajouter sur iPhone/iPad (révisions hors-ligne)';
    } else {
      if (desc) desc.textContent = 'Installer l\'application (mode hors-ligne & plein écran)';
    }

    banner.style.display = 'flex';
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
    try { localStorage.setItem('etabli_pwa_dismissed', Date.now().toString()); } catch (e) {}
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
    }).catch(function (err) {
      console.warn('[PWA] Échec enregistrement Service Worker :', err);
    });
  });
}
