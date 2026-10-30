/**
 * L'Établi des Maths — Page d'accueil, explications des modes, modales de série et de niveau.
 * Méthodes de window.MathsApp (voir js/app.js), ajoutées avant l'initialisation.
 */
Object.assign(window.MathsApp, {
  currentExplainerMode: 'adaptive',

  MODE_EXPLAINERS: {
    adaptive: {
      icon: '🎯',
      title: "Entraînement Adaptatif",
      subtitle: "Zone Proximale de Développement (ZPD) & 4 Paliers",
      actionLabel: "Tester l'entraînement 🎯",
      contentHtml: `
        <div class="mode-explainer-concept">
          L'algorithme s'adapte en continu à ton niveau grâce aux <strong>4 paliers de difficulté calibrés</strong>. Tu progresses à ton rythme, sans blocage ni frustration, en consolidant chaque étape avant de passer au palier supérieur.
        </div>

        <div class="mode-explainer-example-card">
          <div class="mode-explainer-example-header">
            <span>Exemple concret : Résolution d'équations</span>
            <span class="mode-explainer-example-badge">Progression ZPD</span>
          </div>
          <div class="mode-explainer-tiers-list">
            <div class="mode-explainer-tier-item tier-1">
              <div class="mode-explainer-tier-head">
                <span>Palier 1 : Socle & Automatismes</span>
                <span class="mode-explainer-tier-tag">Niveau 1</span>
              </div>
              <div class="mode-explainer-tier-math">
                Résoudre $2x = 8$. Solution immédiate : $x = \\frac{8}{2} = 4$.
              </div>
            </div>
            <div class="mode-explainer-tier-item tier-2">
              <div class="mode-explainer-tier-head">
                <span>Palier 2 : Entraînement Guidé</span>
                <span class="mode-explainer-tier-tag">Niveau 2</span>
              </div>
              <div class="mode-explainer-tier-math">
                Résoudre $3x + 5 = 20$. Étapes : $3x = 15$ puis $x = 5$.
              </div>
            </div>
            <div class="mode-explainer-tier-item tier-3">
              <div class="mode-explainer-tier-head">
                <span>Palier 3 : Niveau Examen Officiel</span>
                <span class="mode-explainer-tier-tag">Brevet / Bac</span>
              </div>
              <div class="mode-explainer-tier-math">
                Résoudre $5(x - 2) = 2x + 8$. Développement et regroupement : $3x = 18 \\implies x = 6$.
              </div>
            </div>
            <div class="mode-explainer-tier-item tier-4">
              <div class="mode-explainer-tier-head">
                <span>Palier 4 : Défis & Dépassement</span>
                <span class="mode-explainer-tier-tag">Expert</span>
              </div>
              <div class="mode-explainer-tier-math">
                Mise en équation d'un problème concret avec calcul de coût ou optimisation géométrique.
              </div>
            </div>
          </div>
        </div>

        <div class="mode-explainer-benefits-grid">
          <div class="mode-explainer-benefit-pill">
            <span>⚡</span>
            <div><strong>Feedback immédiat :</strong> Explication détaillée à chaque réponse pour comprendre ses erreurs.</div>
          </div>
          <div class="mode-explainer-benefit-pill">
            <span>🛡️</span>
            <div><strong>Ni note ni sanction :</strong> Seule la maîtrise compte. Tu avances sans stress et peux retenter jusqu'à la réussite.</div>
          </div>
          <div class="mode-explainer-benefit-pill">
            <span>🚀</span>
            <div><strong>Autonomie complète :</strong> Choix libre du palier ou guidage intelligent par le moteur adaptatif.</div>
          </div>
        </div>
      `
    },

    rituel: {
      icon: '⏱️',
      title: "Rituels Flash Chronométrés",
      subtitle: "Calcul mental & Automatismes façon MathsMentales",
      actionLabel: "Lancer un Rituel Flash ⏱️",
      contentHtml: `
        <div class="mode-explainer-concept">
          Inspiré du célèbre outil pédagogique <strong>MathsMentales</strong>, le rituel flash est idéal pour démarrer chaque séance : une série courte de questions défilant avec un <strong>compte à rebours dynamique</strong>, parfaite pour la vidéoprojection en classe ou l'échauffement individuel.
        </div>

        <div class="mode-explainer-example-card">
          <div class="mode-explainer-example-header">
            <span>Exemple d'une question projetée</span>
            <span class="mode-explainer-example-badge">⏱️ 15 secondes</span>
          </div>
          <div class="mode-explainer-tier-item tier-2">
            <div class="mode-explainer-tier-head">
              <span>Énoncé flash à l'écran</span>
              <span class="mode-explainer-tier-tag">Calcul Mental</span>
            </div>
            <div class="mode-explainer-tier-math" style="font-size: 1.05rem; font-weight: 600; color: var(--text-main); margin: 0.25rem 0;">
              Calculer : $(-7) + (-5) \\times 3$
            </div>
            <div class="mode-explainer-tier-math" style="border-top: 1px dashed var(--border-color); padding-top: 0.4rem; margin-top: 0.4rem;">
              <strong>Phase de correction pas à pas :</strong><br/>
              1. Priorité opératoire : $(-5) \\times 3 = -15$<br/>
              2. Somme de nombres négatifs : $(-7) + (-15) = \\mathbf{-22}$
            </div>
          </div>
        </div>

        <div class="mode-explainer-benefits-grid">
          <div class="mode-explainer-benefit-pill">
            <span>🧠</span>
            <div><strong>Mémoire de travail :</strong> Automatiser les calculs simples libère l'esprit pour raisonner sur les problèmes complexes.</div>
          </div>
          <div class="mode-explainer-benefit-pill">
            <span>📽️</span>
            <div><strong>Vidéoprojection 1 clic :</strong> Mode plein écran sans pub, adapté aux vidéoprojecteurs et TNI en classe.</div>
          </div>
          <div class="mode-explainer-benefit-pill">
            <span>⚙️</span>
            <div><strong>100% Paramétrable :</strong> Règle le nombre de questions (5, 10, 15) et le temps par question (10s à 60s).</div>
          </div>
        </div>
      `
    },

    quiz: {
      icon: '📝',
      title: "Devoirs Blancs & Évaluations",
      subtitle: "Sujets complets avec barèmes officiels et corrigés rédigés",
      actionLabel: "Générer un Devoir Blanc 📝",
      contentHtml: `
        <div class="mode-explainer-concept">
          Génère en un clic une évaluation complète et équilibrée couvrant le programme. Chaque devoir est calibré sur un <strong>barème officiel</strong> (ex : 100 points pour le Brevet des Collèges, épreuve type Bac au Lycée) avec un corrigé rédigé prêt pour l'auto-évaluation ou l'impression.
        </div>

        <div class="mode-explainer-example-card">
          <div class="mode-explainer-example-header">
            <span>Structure type d'un devoir Brevet</span>
            <span class="mode-explainer-example-badge">Sur 100 points</span>
          </div>
          <div class="mode-explainer-tiers-list">
            <div class="mode-explainer-tier-item tier-1">
              <div class="mode-explainer-tier-head">
                <span>Exercice 1 : QCM d'automatismes</span>
                <span class="mode-explainer-tier-tag">20 pts</span>
              </div>
              <div class="mode-explainer-tier-math">Fractions, puissances, décomposition en facteurs premiers.</div>
            </div>
            <div class="mode-explainer-tier-item tier-2">
              <div class="mode-explainer-tier-head">
                <span>Exercice 2 : Géométrie & Trigonométrie</span>
                <span class="mode-explainer-tier-tag">25 pts</span>
              </div>
              <div class="mode-explainer-tier-math">Théorème de Thalès et calcul d'angles dans un repère réel.</div>
            </div>
            <div class="mode-explainer-tier-item tier-3">
              <div class="mode-explainer-tier-head">
                <span>Exercice 3 : Fonctions & Modélisation</span>
                <span class="mode-explainer-tier-tag">20 pts</span>
              </div>
              <div class="mode-explainer-tier-math">Comparaison graphique de formules tarifaires et lectures d'images/antécédents.</div>
            </div>
          </div>
        </div>

        <div class="mode-explainer-benefits-grid">
          <div class="mode-explainer-benefit-pill">
            <span>🎯</span>
            <div><strong>Conditions réelles :</strong> Apprends à gérer ton temps et la longueur d'une épreuve officielle.</div>
          </div>
          <div class="mode-explainer-benefit-pill">
            <span>📖</span>
            <div><strong>Corrigé rédigé :</strong> Modèle de rédaction mathématique soignée avec justification des théorèmes.</div>
          </div>
          <div class="mode-explainer-benefit-pill">
            <span>🖨️</span>
            <div><strong>Format papier & PDF :</strong> Bouton d'impression optimisé pour les élèves et les enseignants.</div>
          </div>
        </div>
      `
    },

    flashcards: {
      icon: '🗂️',
      title: "Boîte de Leitner (Flashcards)",
      subtitle: "Mémorisation active & Répétition espacée à long terme",
      actionLabel: "Ouvrir les Flashcards 🗂️",
      contentHtml: `
        <div class="mode-explainer-concept">
          Basée sur la méthode scientifique de Sebastian Leitner et la courbe de l'oubli, la <strong>Boîte de Leitner</strong> permet d'ancrer durablement les théorèmes, formules et définitions grâce au principe de la <strong>répétition espacée</strong>.
        </div>

        <div class="mode-explainer-example-card">
          <div class="mode-explainer-example-header">
            <span>Exemple d'une carte d'ancrage</span>
            <span class="mode-explainer-example-badge">Recto / Verso</span>
          </div>
          <div class="mode-explainer-tier-item tier-3">
            <div class="mode-explainer-tier-head">
              <span>🔲 Recto (Question / Défi)</span>
              <span class="mode-explainer-tier-tag">Évocation active</span>
            </div>
            <div class="mode-explainer-tier-math" style="font-size: 0.95rem; font-weight: 600; color: var(--text-main); margin: 0.25rem 0;">
              « Théorème de Pythagore : Énoncé précis et formule dans un triangle rectangle. »
            </div>
            <div class="mode-explainer-tier-head" style="margin-top: 0.5rem;">
              <span>🔄 Verso (Réponse mémorisée)</span>
              <span class="mode-explainer-tier-tag">Validation</span>
            </div>
            <div class="mode-explainer-tier-math" style="margin-top: 0.2rem;">
              Si un triangle $ABC$ est rectangle en $A$, alors :<br/>
              $$BC^2 = AB^2 + AC^2$$
              <em>(Le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.)</em>
            </div>
          </div>
        </div>

        <div class="mode-explainer-benefits-grid">
          <div class="mode-explainer-benefit-pill">
            <span>📈</span>
            <div><strong>Système 5 boîtes :</strong> Une carte réussie monte de boîte (révisée moins souvent), une carte ratée redescend en Boîte 1.</div>
          </div>
          <div class="mode-explainer-benefit-pill">
            <span>⏱️</span>
            <div><strong>5 min par jour :</strong> Infiniment plus efficace que le bachotage de dernière minute la veille du contrôle.</div>
          </div>
          <div class="mode-explainer-benefit-pill">
            <span>💾</span>
            <div><strong>Sauvegarde locale :</strong> Ta progression est conservée dans ton navigateur sans création de compte.</div>
          </div>
        </div>
      `
    }
  },

  openStreakModal() {
    const streakInfo = (window.MathsStorage && typeof window.MathsStorage.getDailyStreakInfo === 'function')
      ? window.MathsStorage.getDailyStreakInfo()
      : { streak: 0, bestStreak: 0, isActiveToday: false };
    const modal = document.getElementById('streak-modal');
    if (!modal) return;

    const countEl = document.getElementById('streak-modal-count');
    const statusEl = document.getElementById('streak-modal-status');
    const currentEl = document.getElementById('streak-modal-current');
    const bestEl = document.getElementById('streak-modal-best');
    const todayEl = document.getElementById('streak-modal-today');

    const s = streakInfo.streak || 0;
    const daysStr = s > 1 ? `${s} jours` : `${s} jour`;
    const b = Math.max(streakInfo.bestStreak || 0, s);
    const bestStr = b > 1 ? `${b} jours` : `${b} jour`;

    if (countEl) countEl.textContent = daysStr;
    if (currentEl) currentEl.textContent = daysStr;
    if (bestEl) bestEl.textContent = bestStr;

    if (todayEl) {
      todayEl.innerHTML = streakInfo.isActiveToday 
        ? `<span style="color: var(--success, #10b981); font-weight: 700;">Validé ✓</span>` 
        : `<span style="color: #f59e0b; font-weight: 700;">En attente ⏳</span>`;
    }

    if (statusEl) {
      if (streakInfo.isActiveToday) {
        statusEl.textContent = `Bravo ! Défi du jour validé. Reviens demain pour passer à ${s + 1} jours !`;
      } else if (s > 0) {
        statusEl.textContent = `Ta série d'hier est préservée ! Résous un exercice aujourd'hui pour passer à ${s + 1} jours.`;
      } else {
        statusEl.textContent = `Complète un exercice aujourd'hui pour allumer ta flamme et démarrer ta série !`;
      }
    }

    // Rendu dynamique de la grille des 6 trophées de série (1 sem, 2 sem, 1 mois, 2 mois, 6 mois, 1 an)
    const trophiesContainer = document.getElementById('streak-modal-trophies-list');
    if (trophiesContainer && typeof window.MathsStorage.getStreakMilestones === 'function') {
      const milestones = window.MathsStorage.getStreakMilestones();
      trophiesContainer.innerHTML = milestones.map(m => `
        <div class="streak-trophy-modal-card ${m.isUnlocked ? 'unlocked' : 'locked'}">
          <span class="streak-trophy-icon" aria-hidden="true">${m.icon}</span>
          <div class="streak-trophy-details">
            <div class="streak-trophy-top">
              <span class="streak-trophy-title" title="${m.title}">${m.title}</span>
              <span class="streak-trophy-pill">${m.label}</span>
            </div>
            <div class="streak-trophy-sub" title="${m.desc}">${m.desc}</div>
            <div class="streak-trophy-progress-wrap">
              <div class="streak-trophy-bar-bg">
                <div class="streak-trophy-bar-fill" style="width: ${m.progressPct}%;"></div>
              </div>
              <span class="streak-trophy-progress-lbl">${m.isUnlocked ? 'Débloqué ✓' : `${m.current}/${m.days} j`}</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    modal.style.display = 'flex';
  },

  closeStreakModal() {
    const modal = document.getElementById('streak-modal');
    if (modal) modal.style.display = 'none';
  },

  openLevelModal() {
    const info = (window.MathsStorage && typeof window.MathsStorage.getLevelProgressInfo === 'function')
      ? window.MathsStorage.getLevelProgressInfo()
      : {
          level: 1,
          nextLevel: 2,
          totalXp: 0,
          xpInLevel: 0,
          xpNeeded: 50,
          xpToNext: 50,
          progressPct: 0,
          rankTitle: "Apprenti de l'Établi"
        };
    const modal = document.getElementById('level-modal');
    if (!modal) return;

    const numEl = document.getElementById('level-modal-num');
    const titleEl = document.getElementById('level-modal-title');
    const rankEl = document.getElementById('level-modal-rank');
    const nextEl = document.getElementById('level-modal-next-level');
    const xpInLevelEl = document.getElementById('level-modal-xp-in-level');
    const xpNeededEl = document.getElementById('level-modal-xp-needed');
    const stepNeededEl = document.getElementById('level-modal-step-needed');
    const progressFillEl = document.getElementById('level-modal-progress-fill');
    const progressBgEl = document.getElementById('level-modal-progressbar');
    const remainingEl = document.getElementById('level-modal-remaining-banner');
    const totalXpEl = document.getElementById('level-modal-total-xp');

    if (numEl) numEl.textContent = info.level;
    if (titleEl) titleEl.textContent = `Niveau ${info.level}`;
    if (rankEl) rankEl.textContent = info.rankTitle;
    if (nextEl) nextEl.textContent = `Niveau ${info.nextLevel}`;
    if (xpInLevelEl) xpInLevelEl.textContent = info.xpInLevel;
    if (xpNeededEl) xpNeededEl.textContent = info.xpNeeded;
    if (stepNeededEl) stepNeededEl.textContent = `${info.xpNeeded} XP`;
    if (progressFillEl) progressFillEl.style.width = `${info.progressPct}%`;
    if (progressBgEl) progressBgEl.setAttribute('aria-valuenow', info.progressPct);
    if (remainingEl) {
      remainingEl.innerHTML = `🚀 Plus que <strong>${info.xpToNext} XP</strong> nécessaires pour passer au <strong>Niveau ${info.nextLevel}</strong> !`;
    }
    if (totalXpEl) totalXpEl.textContent = `${info.totalXp} XP`;

    modal.style.display = 'flex';
  },

  closeLevelModal() {
    const modal = document.getElementById('level-modal');
    if (modal) modal.style.display = 'none';
  },

  showHomeView() {
    this.syncUrl({});
    this.isHomeView = true;
    document.body.classList.add('home-view-active');
    const homeView = document.getElementById('home-view');
    const sidebar = document.getElementById('sidebar-chapters');
    const workspace = document.querySelector('.main-workspace');
    const mobileBar = document.getElementById('mobile-chapter-trigger-bar');
    const appContainer = document.querySelector('.app-container');

    if (homeView) homeView.style.display = 'flex';
    if (sidebar) sidebar.style.display = 'none';
    if (workspace) workspace.style.display = 'none';
    if (mobileBar) mobileBar.style.display = 'none';
    if (appContainer) appContainer.classList.add('home-active');

    // Mettre en surbrillance l'onglet Accueil dans le header et désactiver les autres
    document.querySelectorAll('.cycle-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.id === 'cycle-tab-home');
    });
    // Retirer la sélection active des pilules de niveaux sur la page d'accueil
    document.querySelectorAll('.level-pill').forEach(pill => pill.classList.remove('active'));

    this.renderHomeView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  hideHomeView() {
    if (!this.isHomeView) return;
    this.isHomeView = false;
    document.body.classList.remove('home-view-active');
    const homeView = document.getElementById('home-view');
    const sidebar = document.getElementById('sidebar-chapters');
    const workspace = document.querySelector('.main-workspace');
    const mobileBar = document.getElementById('mobile-chapter-trigger-bar');
    const appContainer = document.querySelector('.app-container');

    if (homeView) homeView.style.display = 'none';
    if (sidebar) sidebar.style.display = 'flex';
    if (workspace) workspace.style.display = 'flex';
    if (mobileBar) mobileBar.style.display = '';
    if (appContainer) appContainer.classList.remove('home-active');

    const homeTab = document.getElementById('cycle-tab-home');
    if (homeTab) homeTab.classList.remove('active');

    const currentCycle = window.MathsStorage.getCycleForLevel(this.currentLevel);
    document.querySelectorAll('.cycle-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cycle') === currentCycle);
      btn.setAttribute('aria-current', btn.getAttribute('data-cycle') === currentCycle ? 'true' : 'false');
    });
  },

  renderHomeView() {
    // 1. Mise à jour de la flamme / série quotidienne
    const streakStatus = window.MathsStorage && window.MathsStorage.getDailyStreakInfo ? window.MathsStorage.getDailyStreakInfo() : null;
    const streakDays = streakStatus ? streakStatus.streak : ((window.MathsStorage.load().user || {}).streak || 0);
    const streakDaysEl = document.getElementById('home-streak-days');
    if (streakDaysEl) streakDaysEl.textContent = streakDays;

    // 2. Mise à jour de la carte de reprise d'activité (Effet Zeigarnik ou Accueil Neutre)
    const lastActive = window.MathsStorage && window.MathsStorage.getLastActiveChapter ? window.MathsStorage.getLastActiveChapter() : null;
    const allChapters = window.MATHS_CHAPTERS || [];
    const chap = (lastActive && lastActive.chapterId) ? allChapters.find(c => c.id === lastActive.chapterId) : null;

    const badgeEl = document.getElementById('home-resume-badge');
    const tagEl = document.getElementById('home-resume-tag');
    const nameEl = document.getElementById('home-resume-chap-name');
    const tierEl = document.getElementById('home-resume-tier-pill');
    const subEl = document.getElementById('home-resume-sub');
    const btnEl = document.getElementById('home-resume-btn');

    if (chap && lastActive) {
      this.homeResumeTarget = { chapterId: chap.id, tier: lastActive.tier || 1 };
      if (badgeEl) badgeEl.textContent = chap.id;
      if (tagEl) tagEl.textContent = "🎯 Reprendre où tu t'es arrêté";
      if (nameEl) nameEl.textContent = chap.shortTitle || chap.title;
      let tierLabel = 'Socle';
      if (lastActive.tier) {
        tierLabel = this.getTierButtonLabel(lastActive.tier, chap.level).replace(/^Palier \d+\s*:\s*/, '');
      }
      if (tierEl) {
        tierEl.style.display = 'inline-block';
        tierEl.textContent = `Palier ${lastActive.tier || 1} : ${tierLabel}`;
      }
      const progress = window.MathsStorage.getChapterProgress(chap.id);
      const mastery = progress ? (progress.mastery || 0) : 0;
      if (subEl) subEl.innerHTML = `Maîtrise : <strong id="home-resume-percent">${mastery}%</strong>`;
      if (btnEl) btnEl.innerHTML = 'Continuer ➔';
    } else {
      this.homeResumeTarget = null;
      if (badgeEl) badgeEl.textContent = '🚀';
      if (tagEl) tagEl.textContent = '🎯 Démarrage Rapide';
      if (nameEl) nameEl.textContent = 'Choisis ton cycle pour démarrer';
      if (tierEl) tierEl.style.display = 'none';
      if (subEl) subEl.textContent = 'Collège, Lycée ou prépare ton Brevet / Bac';
      if (btnEl) btnEl.innerHTML = 'Découvrir les cycles ▾';
    }

  },

  handleResumeOrStart() {
    if (this.homeResumeTarget) {
      this.resumeLastActivity();
    } else {
      this.scrollToCycles();
    }
  },

  scrollToCycles() {
    const el = document.querySelector('.home-cycles-grid') || document.querySelector('.home-section-header');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  resumeLastActivity() {
    const target = this.homeResumeTarget || { chapterId: 'N1', tier: 1 };
    this.hideHomeView();
    const allChapters = window.MATHS_CHAPTERS || [];
    const chap = allChapters.find(c => c.id === target.chapterId);
    if (chap && chap.level && chap.level !== this.currentLevel) {
      this.switchLevel(chap.level, false);
    }
    this.selectChapter(target.chapterId);
    if (window.MathsAdaptiveEngine && target.tier) {
      window.MathsAdaptiveEngine.setTier(target.tier);
    }
    this.switchTab('train');
  },

  showModeExplainer(modeKey) {
    const explainer = this.MODE_EXPLAINERS[modeKey];
    if (!explainer) return;

    this.currentExplainerMode = modeKey;
    const modal = document.getElementById('mode-explainer-modal');
    const iconEl = document.getElementById('mode-explainer-icon');
    const titleEl = document.getElementById('mode-explainer-title');
    const subEl = document.getElementById('mode-explainer-subtitle');
    const bodyEl = document.getElementById('mode-explainer-body');
    const actionBtn = document.getElementById('mode-explainer-action-btn');

    if (iconEl) iconEl.textContent = explainer.icon;
    if (titleEl) titleEl.textContent = explainer.title;
    if (subEl) subEl.textContent = explainer.subtitle;
    if (bodyEl) {
      bodyEl.innerHTML = explainer.contentHtml;
      if (window.MathsRenderer && typeof window.MathsRenderer.renderElement === 'function') {
        window.MathsRenderer.renderElement(bodyEl);
      }
    }
    if (actionBtn) {
      actionBtn.innerHTML = explainer.actionLabel;
    }

    if (modal) {
      modal.style.display = 'flex';
      modal.scrollTop = 0;
    }
  },

  closeModeExplainer() {
    const modal = document.getElementById('mode-explainer-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  },

  launchCurrentExplainerMode() {
    const mode = this.currentExplainerMode || 'adaptive';
    this.closeModeExplainer();
    if (mode === 'adaptive') {
      this.hideHomeView();
      this.switchTab('train');
    } else if (mode === 'rituel') {
      this.openDiaporamaModal();
    } else if (mode === 'quiz') {
      this.openQuizModal();
    } else if (mode === 'flashcards') {
      this.openFlashcardsModal();
    }
  },
});
