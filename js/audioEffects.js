/**
 * audioEffects.js - Synthétiseur d'effets sonores procéduraux Web Audio API
 * 100% autonome, zéro dépendance, zéro fichier externe.
 */
(function() {
  'use strict';

  let audioCtx = null;
  const STORAGE_KEY = 'maths_sound_muted';
  let muted = localStorage.getItem(STORAGE_KEY) === 'true';

  function getContext() {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        audioCtx = new AudioCtxClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, type, duration, startTime = 0, gainLevel = 0.15) {
    if (muted) return;
    try {
      const ctx = getContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

      // Envelope ADSR douce
      gain.gain.setValueAtTime(0.001, ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(gainLevel, ctx.currentTime + startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + startTime);
      osc.stop(ctx.currentTime + startTime + duration + 0.05);
    } catch (e) {
      console.warn('Audio non supporté ou bloqué:', e);
    }
  }

  window.MathsAudio = {
    isMuted: function() {
      return muted;
    },

    toggleMute: function() {
      muted = !muted;
      localStorage.setItem(STORAGE_KEY, muted ? 'true' : 'false');
      this.updateToggleButton();
      return muted;
    },

    setMuted: function(val) {
      muted = !!val;
      localStorage.setItem(STORAGE_KEY, muted ? 'true' : 'false');
      this.updateToggleButton();
    },

    updateToggleButton: function() {
      const btn = document.getElementById('sound-toggle-btn');
      if (btn) {
        btn.innerHTML = muted ? '🔇 <span class="btn-sound-text">Sons : Off</span>' : '🔊 <span class="btn-sound-text">Sons : On</span>';
        btn.setAttribute('aria-pressed', muted ? 'true' : 'false');
        btn.setAttribute('title', muted ? 'Activer les sons d\'ambiance' : 'Couper le son');
      }
    },

    // 1. Réussite standard (carillon ascendant mélodieux)
    playCorrect: function() {
      if (muted) return;
      // Do5 - Mi5 - Sol5
      playTone(523.25, 'triangle', 0.15, 0, 0.12);
      playTone(659.25, 'triangle', 0.18, 0.08, 0.14);
      playTone(783.99, 'sine', 0.28, 0.16, 0.16);
    },

    // 2. Erreur douce / bienveillante (son feutré non punitif)
    playIncorrect: function() {
      if (muted) return;
      // Doux accord descendant non agressif
      playTone(329.63, 'sine', 0.18, 0, 0.08);
      playTone(293.66, 'sine', 0.25, 0.08, 0.08);
    },

    // 3. Révélation d'indice
    playHint: function() {
      if (muted) return;
      playTone(880, 'sine', 0.12, 0, 0.08);
      playTone(1046.5, 'triangle', 0.18, 0.07, 0.1);
    },

    // 4. Passage au palier supérieur (Niveau supérieur)
    playLevelUp: function() {
      if (muted) return;
      // Fanfare rapide Do5 -> Sol5 -> Do6
      playTone(523.25, 'triangle', 0.12, 0, 0.14);
      playTone(659.25, 'triangle', 0.12, 0.09, 0.15);
      playTone(783.99, 'triangle', 0.15, 0.18, 0.16);
      playTone(1046.50, 'sine', 0.40, 0.27, 0.20);
    },

    // 5. Maîtrise 100% du chapitre (Trophée & Climax festif)
    playMastery: function() {
      if (muted) return;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        playTone(freq, 'triangle', 0.25, idx * 0.09, 0.18);
      });
      // Accord final majestueux
      setTimeout(() => {
        playTone(523.25, 'sine', 0.6, 0, 0.12);
        playTone(783.99, 'sine', 0.6, 0, 0.14);
        playTone(1046.5, 'triangle', 0.8, 0, 0.18);
      }, 480);
    }
  };

  // Débloquer le contexte au premier clic utilisateur dans la page
  document.addEventListener('click', function unlockAudio() {
    getContext();
    document.removeEventListener('click', unlockAudio);
  }, { once: true });

})();
