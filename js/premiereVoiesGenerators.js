/**
 * premiereVoiesGenerators.js
 * Générateurs procéduraux des deux autres voies de Première :
 *   - '1tc'     : 1re générale, enseignement de mathématiques du tronc commun (chapitres 1TC1…1TC6) ;
 *   - '1techno' : 1re technologique (chapitres 1T1…1T7).
 * Chaque chapitre <id> a (ou aura) sa méthode gen_<id>(tier), tier ∈ {1, 2, 3, 4}, qui renvoie une question
 * construite par makeMcq / _xa / makeExact, ou null (repli sur la banque statique MATHS_EXERCISES).
 *
 * Branchement : MathsLyceeGenerators.generate(id, t) cherche d'abord gen_<id> chez lui, puis ici
 * (appel avec this = window.MathsPremiereVoiesGenerators). Les outils de lyceeGenerators.js et de
 * advancedGenerators.js (makeMcq, _xa, _Tx, dec, randInt…) sont délégués plus bas, résolus à l'appel.
 *
 * Contrôles : node scripts/tests/test_lycee_licence_generators.js --only=1TC1 (recalcul, KaTeX, variété).
 * Format attendu des futurs chapitres : 4 paliers, au moins 3 gabarits par palier, hint1 = méthode,
 * hint2 = début d'application, solution = corrigé complet (voir le gabarit gen_1TC1 ci-dessous).
 */

window.MathsPremiereVoiesGenerators = {
  // =========================================================================
  // Outils propres aux deux voies
  // =========================================================================
  /** Consigne de saisie d'un taux d'évolution */
  _TX: 'Saisir le taux en pourcentage, sans le symbole %, précédé du signe « - » pour une baisse (par exemple -12,5).',
  /** Consigne de saisie d'un pourcentage (proportion) */
  _PC: 'Saisir le pourcentage sans le symbole % (par exemple 12,5).',
  /** Consigne de saisie d'une valeur numérique */
  _VAL: 'Saisir le nombre, sans unité (virgule décimale si besoin).',

  /** 12,5 -> « 12{,}5\,\% » (mode math) */
  _pct(x, d = 2) { return `${this.dec(x, d)}\\,\\%`; },
  /** taux signé en mode math : 12 -> « +12\,\% », -4 -> « -4\,\% » */
  _sg(x, d = 2) { return `${x > 0 ? '+' : '-'}${this._pct(Math.abs(x), d)}`; },
  /** entier ou décimal avec espace des milliers (mode math) */
  _int(x) {
    const [i, d] = this.dec(x, 2).split('{,}');
    const g = i.replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
    return d ? `${g}{,}${d}` : g;
  },
  /** arrondi propre à 1e-6 (évite 0.30000000000000004) */
  _r(x) { return Math.round(x * 1e6) / 1e6; },

  // =========================================================================
  // 1TC1 — Automatismes : proportions, pourcentages et évolutions (gabarit de référence)
  // =========================================================================
  _1TC1_CTX: [
    { s: 'Le prix d\'un vélo', v: [120, 150, 200, 250, 300, 400, 500, 600, 800] },
    { s: 'Le loyer d\'un appartement', v: [400, 500, 600, 750, 800] },
    { s: 'Le nombre d\'abonnés d\'une salle de sport', v: [200, 300, 400, 500, 800, 1000, 1200] },
    { s: 'La facture d\'électricité d\'une famille', v: [60, 80, 100, 120, 150, 200] },
    { s: 'La fréquentation d\'un musée', v: [1000, 2000, 2500, 4000, 5000] }
  ],
  _1TC1_PROP: [
    ['des élèves d\'un lycée', 'sont internes', 'des internes', 'pratiquent un sport en club', 'des élèves'],
    ['des salariés d\'une entreprise', 'travaillent à temps partiel', 'des salariés à temps partiel', 'ont plus de 50 ans', 'des salariés'],
    ['des clients d\'un magasin', 'possèdent une carte de fidélité', 'des détenteurs de la carte', 'achètent en ligne', 'des clients'],
    ['des habitants d\'une ville', 'utilisent les transports en commun', 'des usagers des transports', 'ont un abonnement annuel', 'des habitants'],
    ['des spectateurs d\'un festival', 'viennent d\'une autre région', 'des spectateurs venus d\'une autre région', 'dorment sur place', 'des spectateurs']
  ],

  gen_1TC1(tier) {
    const T = '1TC1';
    const P = (x, d) => this._pct(x, d);
    const S = (x, d) => this._sg(x, d);
    const I = (x) => this._int(x);
    const D = (x) => this.dec(x, 4);
    const fam = this.randInt(0, 2);

    if (tier === 1) {
      if (fam === 0) {
        // t % d'une quantité
        const N = this.randChoice([40, 60, 80, 120, 150, 200, 240, 300, 400, 500, 600, 800]);
        const t = this.randChoice([5, 10, 15, 20, 25, 30, 40, 60, 75]);
        const r = this._r(t * N / 100);
        return this.makeMcq(T, 1, 'Pourcentage d\'une quantité',
          'Appliquer un pourcentage à une quantité',
          `Calculer $${P(t)}$ de $${I(N)}$.`,
          `$${I(r)}$`,
          [`$${I(this._r(t * N / 10))}$`, `$${I(N - r)}$`, `$${I(this._r(N / t))}$`, `$${I(N + r)}$`],
          'Prendre $t\\,\\%$ d\'une quantité, c\'est en prendre $t$ centièmes : on la multiplie par l\'écriture décimale du pourcentage.',
          `Calcule $${D(t / 100)} \\times ${I(N)}$.`,
          `$${P(t)}$ de $${I(N)}$ : $${D(t / 100)} \\times ${I(N)} = ${I(r)}$.`
        );
      }
      if (fam === 1) {
        // coefficient multiplicateur
        const c = this.randChoice(this._1TC1_CTX);
        const up = Math.random() < 0.5;
        const t = up ? this.randInt(2, 80) : this.randInt(2, 60);
        const s = up ? t : -t;
        return this.makeMcq(T, 1, 'Coefficient multiplicateur',
          'Associer un taux d\'évolution à son coefficient multiplicateur',
          `${c.s} ${up ? 'augmente' : 'baisse'} de $${P(t)}$. Par quel nombre cette grandeur est-elle multipliée ?`,
          `$${D(1 + s / 100)}$`,
          [`$${D(1 - s / 100)}$`, `$${D(t / 100)}$`, `$${D(1 + s / 10)}$`, `$${D(t)}$`],
          up ? 'Une hausse de $t\\,\\%$ revient à multiplier par $1$ augmenté du taux écrit en décimal ($t$ centièmes).' : 'Une baisse de $t\\,\\%$ revient à multiplier par $1$ diminué du taux écrit en décimal ($t$ centièmes).',
          `Écris $${P(t)}$ sous forme décimale, puis ${up ? 'ajoute-le à' : 'retranche-le de'} $1$.`,
          `$CM = 1 ${up ? '+' : '-'} ${D(t / 100)} = ${D(1 + s / 100)}$.`
        );
      }
      // proportion d'une proportion (réponse en pourcentage)
      const [pop, a, sub, b, tous] = this.randChoice(this._1TC1_PROP);
      const p1 = this.randChoice([20, 25, 40, 50, 60, 75, 80]);
      const p2 = this.randChoice([10, 20, 25, 30, 40, 50, 60, 70, 90]);
      const r = this._r(p1 * p2 / 100);
      return this._xa([this.decText(r), this._PC], T, 1, 'Proportion d\'une proportion',
        'Calculer la proportion d\'une proportion',
        `$${P(p1)}$ ${pop} ${a}, et $${P(p2)}$ ${sub} ${b}. Quelle proportion ${tous} ${a} et ${b} ?`,
        `$${P(r)}$`,
        [`$${P(p1 + p2 <= 100 ? p1 + p2 : Math.abs(p1 - p2))}$`, `$${P(p2)}$`, `$${P(this._r(r / 10))}$`, `$${P(100 - r)}$`],
        'Lorsque $A \\subset B \\subset E$, on a $p_{A/E} = p_{A/B} \\times p_{B/E}$ : les proportions se multiplient.',
        `Calcule $${D(p1 / 100)} \\times ${D(p2 / 100)}$.`,
        `$${D(p1 / 100)} \\times ${D(p2 / 100)} = ${D(r / 100)}$, soit $${P(r)}$ ${pop}.`
      );
    }

    if (tier === 2) {
      const c = this.randChoice(this._1TC1_CTX);
      const V0 = this.randChoice(c.v);
      const t = this.randChoice([-40, -30, -25, -20, -15, -10, -5, 5, 10, 15, 20, 25, 30, 40, 50]);
      const V1 = this._r(V0 * (1 + t / 100));
      if (fam === 0) {
        // valeur finale
        return this._xa([this.decText(V1), this._VAL], T, 2, 'Valeur après évolution',
          'Appliquer un taux d\'évolution',
          `${c.s} valait $${I(V0)}$ et ${t > 0 ? 'augmente' : 'baisse'} de $${P(Math.abs(t))}$. Quelle est sa nouvelle valeur ?`,
          `$${I(V1)}$`,
          [`$${I(this._r(V0 * (1 - t / 100)))}$`, `$${I(V0 + t)}$`, `$${I(this._r(V0 * Math.abs(t) / 100))}$`],
          'La valeur finale s\'obtient en multipliant la valeur initiale par le coefficient multiplicateur.',
          `Le coefficient multiplicateur vaut $${D(1 + t / 100)}$.`,
          `$${I(V0)} \\times ${D(1 + t / 100)} = ${I(V1)}$.`
        );
      }
      if (fam === 1) {
        // taux entre deux valeurs
        const wrong = this._r((V1 - V0) / V1 * 100);
        return this._xa([String(t), this._TX], T, 2, 'Taux d\'évolution entre deux valeurs',
          'Calculer un taux d\'évolution',
          `${c.s} passe de $${I(V0)}$ à $${I(V1)}$. Quel est le taux d'évolution ?`,
          `$${S(t)}$`,
          [`$${S(-t)}$`, `$${S(Math.round(wrong * 100) / 100)}$`, `$${S(100 + t)}$`],
          'Le taux d\'évolution est $t = \\frac{V_1 - V_0}{V_0}$, calculé par rapport à la valeur de départ.',
          `Ici $V_1 - V_0 = ${I(this._r(V1 - V0))}$ ; divise par $${I(V0)}$.`,
          `$t = \\frac{${I(V1)} - ${I(V0)}}{${I(V0)}} = ${D(t / 100)}$, soit $${S(t)}$.`
        );
      }
      // valeur initiale
      return this._xa([this.decText(V0), this._VAL], T, 2, 'Retrouver la valeur initiale',
        'Retrouver une valeur avant évolution',
        `Après ${t > 0 ? 'une hausse' : 'une baisse'} de $${P(Math.abs(t))}$, ${c.s.charAt(0).toLowerCase() + c.s.slice(1)} vaut $${I(V1)}$. Quelle était sa valeur initiale ?`,
        `$${I(V0)}$`,
        [`$${I(this._r(V1 * (1 - t / 100)))}$`, `$${I(this._r(V1 - t))}$`, `$${I(this._r(V1 * (1 + t / 100)))}$`],
        'On divise la valeur finale par le coefficient multiplicateur.',
        `Le coefficient multiplicateur vaut $${D(1 + t / 100)}$ : calcule $${I(V1)} \\div ${D(1 + t / 100)}$.`,
        `$V_0 = \\frac{${I(V1)}}{${D(1 + t / 100)}} = ${I(V0)}$. Attention : appliquer l'évolution opposée ne redonne pas la valeur initiale.`
      );
    }

    if (tier === 3) {
      const c = this.randChoice(this._1TC1_CTX);
      if (fam === 0) {
        // deux évolutions successives
        let t1; let t2; let g;
        do {
          t1 = this.randChoice([-50, -40, -30, -25, -20, -10, 10, 20, 25, 30, 40, 50, 60]);
          t2 = this.randChoice([-50, -40, -30, -25, -20, -10, 10, 20, 25, 30, 40, 50]);
          g = this._r(((1 + t1 / 100) * (1 + t2 / 100) - 1) * 100);
        } while (g === 0 || g === t1 + t2);
        return this._xa([this.decText(g), this._TX], T, 3, 'Évolutions successives',
          'Enchaîner deux évolutions',
          `${c.s} ${t1 > 0 ? 'augmente' : 'baisse'} de $${P(Math.abs(t1))}$, puis ${t2 > 0 ? 'augmente' : 'baisse'} de $${P(Math.abs(t2))}$. Quel est le taux d'évolution global ?`,
          `$${S(g)}$`,
          [`$${S(t1 + t2 === 0 ? -g : t1 + t2)}$`, `$${S(-g)}$`, `$${S(this._r(t1 * t2 / 100) || 1)}$`],
          'Des évolutions successives se traduisent par le produit de leurs coefficients multiplicateurs.',
          `Calcule $${D(1 + t1 / 100)} \\times ${D(1 + t2 / 100)}$.`,
          `$CM = ${D(1 + t1 / 100)} \\times ${D(1 + t2 / 100)} = ${D(1 + g / 100)}$, donc $t = ${D(1 + g / 100)} - 1 = ${D(g / 100)}$, soit $${S(g)}$ (et non $${S(t1 + t2 === 0 ? -g : t1 + t2)}$).`
        );
      }
      if (fam === 1) {
        // évolution réciproque
        const [t, r] = this.randChoice([[25, -20], [60, -37.5], [100, -50], [150, -60], [300, -75], [400, -80], [-20, 25], [-50, 100], [-60, 150], [-75, 300], [-80, 400], [-37.5, 60], [-87.5, 700], [-90, 900]]);
        return this._xa([this.decText(r), this._TX], T, 3, 'Évolution réciproque',
          'Déterminer une évolution réciproque',
          `${c.s} a ${t > 0 ? 'augmenté' : 'baissé'} de $${P(Math.abs(t))}$. Quelle évolution cette grandeur doit-elle subir pour revenir à sa valeur initiale ?`,
          `$${S(r)}$`,
          [`$${S(-t)}$`, `$${S(-r)}$`, `$${S(this._r(-t / 2))}$`],
          'L\'évolution réciproque a pour coefficient multiplicateur l\'inverse $\\frac{1}{CM}$.',
          `Ici $CM = ${D(1 + t / 100)}$ : calcule $\\frac{1}{${D(1 + t / 100)}}$.`,
          `$\\frac{1}{${D(1 + t / 100)}} = ${D(1 + r / 100)}$, donc le taux réciproque est $${D(r / 100)}$, soit $${S(r)}$.`
        );
      }
      // évolution répétée
      const [t, n] = this.randChoice([[10, 2], [10, 3], [-10, 2], [-10, 3], [20, 2], [20, 3], [-20, 2], [-20, 3], [5, 2], [50, 2], [-50, 2], [-50, 3], [30, 2], [-30, 2], [100, 3]]);
      const g = this._r(((1 + t / 100) ** n - 1) * 100);
      return this._xa([this.decText(g), this._TX], T, 3, 'Évolution répétée',
        'Enchaîner plusieurs évolutions identiques',
        `${c.s} ${t > 0 ? 'augmente' : 'baisse'} de $${P(Math.abs(t))}$ par an pendant $${n}$ ans. Quel est le taux d'évolution global sur ces $${n}$ ans ?`,
        `$${S(g)}$`,
        [`$${S(n * t)}$`, `$${S(-g)}$`, `$${S(this._r(t ** n / 100 ** (n - 1)))}$`],
        'Une même évolution répétée $n$ fois a pour coefficient global $CM^n$.',
        `Calcule $${D(1 + t / 100)}^{${n}}$.`,
        `$${D(1 + t / 100)}^{${n}} = ${D(1 + g / 100)}$, soit un taux global de $${S(g)}$ (et non $${S(n * t)}$).`
      );
    }

    // Palier 4 : problèmes
    if (fam === 0) {
      // trois évolutions
      let t1; let t2; let t3; let g;
      do {
        t1 = this.randChoice([-20, -10, 10, 20, 25, 50]);
        t2 = this.randChoice([-50, -20, -10, 10, 20, 50]);
        t3 = this.randChoice([-20, -10, 10, 20, 25]);
        g = this._r(((1 + t1 / 100) * (1 + t2 / 100) * (1 + t3 / 100) - 1) * 100);
      } while (g === 0 || g === t1 + t2 + t3);
      const c = this.randChoice(this._1TC1_CTX);
      return this._xa([this.decText(g), this._TX], T, 4, 'Trois évolutions successives',
        'Enchaîner plusieurs évolutions',
        `${c.s} évolue sur trois ans : $${S(t1)}$ la première année, $${S(t2)}$ la deuxième et $${S(t3)}$ la troisième. Quel est le taux d'évolution global ?`,
        `$${S(g, 3)}$`,
        [`$${S(t1 + t2 + t3 === 0 ? -g : t1 + t2 + t3)}$`, `$${S(-g, 3)}$`, `$${S(this._r(g / 3))}$`],
        'Le coefficient global est le produit des trois coefficients multiplicateurs.',
        `Multiplie $${D(1 + t1 / 100)}$, $${D(1 + t2 / 100)}$ et $${D(1 + t3 / 100)}$.`,
        `$CM = ${D(1 + t1 / 100)} \\times ${D(1 + t2 / 100)} \\times ${D(1 + t3 / 100)} = ${this.dec(1 + g / 100, 6)}$, soit un taux global de $${S(g, 3)}$.`
      );
    }
    if (fam === 1) {
      // évolution manquante pour atteindre un objectif
      const [t1, t2] = this.randChoice([[25, 20], [25, -12], [-20, 25], [-20, 50], [50, -20], [50, 10], [-50, 60], [60, -25], [20, 25], [-25, 60], [-40, 50], [40, -25], [100, -30], [-10, 20], [-60, 75]]);
      const g = this._r(((1 + t1 / 100) * (1 + t2 / 100) - 1) * 100);
      if (g === 0) return this.gen_1TC1(4);
      const c = this.randChoice(this._1TC1_CTX);
      return this._xa([this.decText(t2), this._TX], T, 4, 'Évolution à compléter',
        'Déterminer une évolution manquante',
        `${c.s} ${t1 > 0 ? 'augmente' : 'baisse'} de $${P(Math.abs(t1))}$ une première année. Quelle évolution cette grandeur doit-elle subir la deuxième année pour que l'évolution globale sur deux ans soit de $${S(g)}$ ?`,
        `$${S(t2)}$`,
        [`$${S(this._r(g - t1) || 1)}$`, `$${S(-t2)}$`, `$${S(this._r(t2 / 2))}$`],
        'Le coefficient global est le produit des coefficients : $CM_{\\text{global}} = CM_1 \\times CM_2$.',
        `Calcule $CM_2 = \\frac{${D(1 + g / 100)}}{${D(1 + t1 / 100)}}$.`,
        `$CM_2 = \\frac{${D(1 + g / 100)}}{${D(1 + t1 / 100)}} = ${D(1 + t2 / 100)}$, soit un taux de $${S(t2)}$ (et non $${S(this._r(g - t1) || 1)}$).`
      );
    }
    // proportion d'une proportion inversée
    const [pop, a, sub, b, tous] = this.randChoice(this._1TC1_PROP);
    const pB = this.randChoice([20, 25, 40, 50, 80]);
    const pAB = this.randChoice([10, 20, 30, 40, 60, 70, 90]);
    const pA = this._r(pB * pAB / 100);
    return this._xa([this.decText(pAB), this._PC], T, 4, 'Proportion dans une sous-population',
      'Calculer une proportion dans une sous-population',
      `$${P(pB)}$ ${pop} ${a}. Par ailleurs, $${P(pA)}$ ${tous} ${a} et ${b}. Quelle proportion ${sub} ${b} ?`,
      `$${P(pAB)}$`,
      [`$${P(this._r(pA * pB / 100))}$`, `$${P(pB - pA)}$`, `$${P(pA)}$`],
      'On utilise $p_{A/E} = p_{A/B} \\times p_{B/E}$, où l\'inconnue est $p_{A/B}$.',
      `Calcule $\\frac{${D(pA / 100)}}{${D(pB / 100)}}$.`,
      `$p = \\frac{${D(pA / 100)}}{${D(pB / 100)}} = ${D(pAB / 100)}$, soit $${P(pAB)}$ ${sub}.`
    );
  },

  // =========================================================================
  // Chapitres à compléter (une section par chapitre, même structure que gen_1TC1).
  // Tant qu'une méthode gen_<id> est absente, l'entraînement puise dans MATHS_EXERCISES.
  // =========================================================================
  // ---- 1TC2 : Information chiffrée (tableaux croisés, nuages, ajustement affine) ----
  /** Tableaux croisés 2 × 2 : r = modalités en ligne (« parmi les … »), c = modalités en colonne */
  _1TC2_TAB: [
    { pop: 'salariés d\'une entreprise', u: 'salariés', one: 'un salarié', rows: ['Cadres', 'Non-cadres'], cols: ['Télétravail', 'Pas de télétravail'], r: ['cadres', 'non-cadres'], c: ['salariés en télétravail', 'salariés sans télétravail'] },
    { pop: 'clients d\'une agence de voyages', u: 'clients', one: 'un client', rows: ['Moins de 40 ans', '40 ans ou plus'], cols: ['Réservation en ligne', 'Réservation en agence'], r: ['clients de moins de 40 ans', 'clients de 40 ans ou plus'], c: ['clients ayant réservé en ligne', 'clients ayant réservé en agence'] },
    { pop: 'élèves de Première d\'un lycée', u: 'élèves', one: 'un élève', rows: ['Demi-pensionnaires', 'Externes'], cols: ['Transport scolaire', 'Autre moyen'], r: ['demi-pensionnaires', 'externes'], c: ['élèves venant en transport scolaire', 'élèves venant par un autre moyen'] },
    { pop: 'habitants d\'une commune interrogés lors d\'une enquête', u: 'habitants interrogés', one: 'un habitant', rows: ['Moins de 30 ans', '30 ans ou plus'], cols: ['Pratique un sport', 'Ne pratique pas de sport'], r: ['habitants de moins de 30 ans', 'habitants de 30 ans ou plus'], c: ['sportifs', 'non-sportifs'] },
    { pop: 'adhérents d\'une médiathèque', u: 'adhérents', one: 'un adhérent', rows: ['Moins de 18 ans', '18 ans ou plus'], cols: ['Emprunte des BD', 'N\'emprunte pas de BD'], r: ['adhérents de moins de 18 ans', 'adhérents de 18 ans ou plus'], c: ['emprunteurs de BD', 'adhérents qui n\'empruntent pas de BD'] }
  ],
  /** Séries chronologiques : x = rang de l'année, y = grandeur ; a = pente plausible, b = valeur au rang 0 */
  _1TC2_SER: [
    { s: 'le nombre d\'abonnés (en milliers) d\'un service de vélos en libre-service', g: 'le nombre d\'abonnés', unit: 'milliers d\'abonnés', a: [1.5, 2, 2.5, 3, 3.5, 4], b: [18, 20, 24, 25, 30] },
    { s: 'la production d\'électricité photovoltaïque d\'une région (en GWh)', g: 'la production', fem: true, unit: 'GWh', a: [4, 5, 6, 7.5, 8], b: [60, 75, 80, 90] },
    { s: 'le nombre de visiteurs (en milliers) d\'un parc naturel', g: 'le nombre de visiteurs', unit: 'milliers de visiteurs', a: [1.2, 1.5, 2.5, 3], b: [40, 45, 50, 56] },
    { s: 'la consommation d\'eau (en milliers de mètres cubes) d\'une commune', g: 'la consommation d\'eau', fem: true, unit: 'milliers de mètres cubes', a: [-2.5, -3, -3.5, -4, -1.5], b: [180, 200, 210, 240] },
    { s: 'le nombre de lettres (en milliers par jour) traitées par un centre de tri', g: 'le nombre de lettres traitées', unit: 'milliers de lettres par jour', a: [-0.6, -0.8, -1.2, -1.5], b: [20, 24, 25, 30] }
  ],
  /** Nuages de points « libres » : [x, y, pente, ordonnée à l'origine, plage de x] */
  _1TC2_NUA: [
    { x: 'Durée de révision (en h)', y: 'Note obtenue (sur 20)', a: 1.5, b: 5, xs: [1, 8] },
    { x: 'Température moyenne (en °C)', y: 'Glaces vendues (en centaines)', a: 2, b: 4, xs: [14, 30] },
    { x: 'Âge d\'un arbre (en années)', y: 'Hauteur (en m)', a: 0.5, b: 1, xs: [4, 20] },
    { x: 'Surface d\'un logement (en m²)', y: 'Loyer (en centaines d\'euros)', a: 0.1, b: 2, xs: [20, 90], step: 5 }
  ],

  /** Tableau croisé 2 × 2 tiré au hasard, effectifs entiers, fréquences conditionnelles en lignes « rondes » */
  _1TC2_mk() {
    for (let k = 0; k < 500; k++) {
      const N = this.randChoice([200, 250, 400, 500, 800, 1000]);
      const n1 = N * this.randChoice([30, 40, 45, 55, 60, 70]) / 100;
      const n2 = N - n1;
      const f1 = this.randInt(2, 18) * 5; const f2 = this.randInt(2, 18) * 5;
      const a = n1 * f1 / 100; const c = n2 * f2 / 100;
      if (!Number.isInteger(n1) || !Number.isInteger(a) || !Number.isInteger(c) || f1 === f2) continue;
      return { N, n1, n2, a, b: n1 - a, c, d: n2 - c, k1: a + c, k2: N - a - c, f1, f2 };
    }
    return { N: 200, n1: 80, n2: 120, a: 20, b: 60, c: 60, d: 60, k1: 80, k2: 120, f1: 25, f2: 50 };
  },
  /** p = 100 x / y a-t-il au plus une décimale ? */
  _1TC2_ok(x, y) { const v = 1000 * x / y; return Math.abs(v - Math.round(v)) < 1e-9; },
  _1TC2_tab(C, t) {
    const I = (x) => `$${this._int(x)}$`;
    return this._xtab(['', C.cols[0], C.cols[1], 'Total'], [
      [C.rows[0], I(t.a), I(t.b), I(t.n1)],
      [C.rows[1], I(t.c), I(t.d), I(t.n2)],
      ['Total', I(t.k1), I(t.k2), I(t.N)]
    ]);
  },
  /** équation réduite y = ax + b (a ≠ 0, ±1 exclus par les données) */
  _1TC2_eq(a, b) { return `y = ${this.dec(a, 2)}x ${b < 0 ? '-' : '+'} ${this.dec(Math.abs(b), 2)}`; },
  /** Série de 5 points (x = 0…4) et sa droite des moindres carrés (pente exacte au centième) */
  _1TC2_serie(C) {
    const a0 = this.randChoice(C.a); const b0 = this.randChoice(C.b);
    const amp = Math.max(0.3, Math.abs(a0) * 0.35);
    const ys = [0, 1, 2, 3, 4].map((x) => this._r(Math.round((a0 * x + b0 + (Math.random() * 2 - 1) * amp) * 10) / 10));
    const S = ys.reduce((s, y) => s + y, 0);
    const ym = this._r(S / 5);
    const a = this._r(ys.reduce((s, y, x) => s + (x - 2) * y, 0) / 10);
    const b = this._r(ym - 2 * a);
    return { ys, S: this._r(S), ym, a, b };
  },

  gen_1TC2(tier) {
    const T = '1TC2';
    const I = (x) => this._int(x);
    const D = (x, k = 4) => this.dec(x, k);
    const P = (x) => this._pct(x, 2);
    const pc = (x, y) => this._r(100 * x / y);

    if (tier === 1) {
      const fam = this.randInt(0, 3);
      if (fam === 0 || fam === 1) {
        const C = this.randChoice(this._1TC2_TAB);
        const t = this._1TC2_mk();
        const tab = this._1TC2_tab(C, t);
        if (fam === 0) {
          // fréquence conditionnelle en ligne
          const i = this.randInt(0, 1); const j = this.randInt(0, 1);
          const nij = [[t.a, t.b], [t.c, t.d]][i][j]; const ni = [t.n1, t.n2][i]; const kj = [t.k1, t.k2][j];
          const r = pc(nij, ni);
          return this._xa([this.decText(r), this._PC], T, 1, 'Fréquence conditionnelle',
            'Calculer une fréquence conditionnelle dans un tableau croisé',
            `Le tableau croisé ci-dessous répartit les ${C.pop}.${tab}Quelle est la fréquence des ${C.c[j]} parmi les ${C.r[i]} ?`,
            `$${P(r)}$`,
            [`$${P(pc(nij, t.N))}$`, `$${P(pc(nij, kj))}$`, `$${P(pc(ni, t.N))}$`],
            '« Parmi les … » désigne la population de référence : on divise l\'effectif de la case par l\'effectif total de cette population (et non par l\'effectif total du tableau).',
            `La population de référence est celle des ${C.r[i]} : son effectif est $${I(ni)}$.`,
            `Parmi les $${I(ni)}$ ${C.r[i]}, $${I(nij)}$ sont des ${C.c[j]} : $f = \\frac{${nij}}{${ni}} = ${D(r / 100)}$, soit $${P(r)}$.`
          );
        }
        // fréquence marginale
        const j = this.randInt(0, 1);
        const kj = [t.k1, t.k2][j]; const n1j = [t.a, t.b][j];
        const r = pc(kj, t.N);
        return this._xa([this.decText(r), this._PC], T, 1, 'Fréquence marginale',
          'Calculer une fréquence marginale',
          `Le tableau croisé ci-dessous répartit les ${C.pop}.${tab}Quelle est la fréquence des ${C.c[j]} dans l'ensemble des ${C.u} ?`,
          `$${P(r)}$`,
          [`$${P(pc(n1j, t.N))}$`, `$${P(pc(n1j, kj))}$`, `$${P(100 - r)}$`],
          'Une fréquence marginale se lit dans la ligne ou la colonne « Total » : effectif marginal divisé par l\'effectif total.',
          `L'effectif marginal des ${C.c[j]} est $${I(kj)}$ ; l'effectif total est $${I(t.N)}$.`,
          `$f = \\frac{${kj}}{${t.N}} = ${D(r / 100)}$, soit $${P(r)}$ des ${C.u}.`
        );
      }
      if (fam === 2) {
        // point moyen
        const C = this.randChoice(this._1TC2_NUA);
        const n = this.randChoice([4, 5]);
        const st = C.step || 1;
        const xs = [];
        while (xs.length < n) { const x = C.xs[0] + st * this.randInt(0, (C.xs[1] - C.xs[0]) / st); if (!xs.includes(x)) xs.push(x); }
        xs.sort((p, q) => p - q);
        const ys = xs.map((x) => Math.max(1, Math.round(C.a * x + C.b + this.randInt(-2, 2))));
        const sx = xs.reduce((s, x) => s + x, 0); const sy = ys.reduce((s, y) => s + y, 0);
        const gx = this._r(sx / n); const gy = this._r(sy / n);
        const med = [...ys].sort((p, q) => p - q);
        const my = n % 2 ? med[(n - 1) / 2] : this._r((med[n / 2 - 1] + med[n / 2]) / 2);
        const tab = this._xtab([C.x, ...xs.map((x) => `$${x}$`)], [[C.y, ...ys.map((y) => `$${y}$`)]]);
        return this._xa([`(${this.decText(gx)};${this.decText(gy)})`, 'Saisir les coordonnées sous la forme (x ; y), par exemple (12;7,5).'], T, 1, 'Point moyen d\'un nuage',
          'Calculer les coordonnées du point moyen',
          `On considère la série statistique à deux variables suivante.${tab}Déterminer les coordonnées du point moyen $G$ du nuage de points associé.`,
          `$G(${D(gx)} ; ${D(gy)})$`,
          [`$G(${sx} ; ${sy})$`, `$G(${D(gy)} ; ${D(gx)})$`, `$G(${D(gx)} ; ${D(my)})$`],
          'Le point moyen a pour abscisse la moyenne des $x_i$ et pour ordonnée la moyenne des $y_i$.',
          `La somme des $x_i$ vaut $${sx}$ et celle des $y_i$ vaut $${sy}$ ; il y a $${n}$ points.`,
          `$\\bar{x} = \\frac{${sx}}{${n}} = ${D(gx)}$ et $\\bar{y} = \\frac{${sy}}{${n}} = ${D(gy)}$, donc $G(${D(gx)} ; ${D(gy)})$.`
        );
      }
      // interpolation ou extrapolation
      const C = this.randChoice(this._1TC2_SER);
      const Y0 = this.randChoice([2014, 2015, 2016, 2017]);
      const Y1 = Y0 + this.randInt(6, 8);
      const inside = Math.random() < 0.5;
      const Z = inside ? this.randInt(Y0 + 1, Y1 - 1) : Y1 + this.randInt(2, 8);
      const good = inside ? `Une interpolation, car ${Z} est compris entre ${Y0} et ${Y1}.` : `Une extrapolation, car ${Z} est en dehors de la période allant de ${Y0} à ${Y1}.`;
      return this._xa('keep', T, 1, 'Interpolation ou extrapolation ?',
        'Distinguer interpolation et extrapolation',
        `On dispose de relevés annuels portant sur ${C.s}, de ${Y0} à ${Y1}. On utilise une droite d'ajustement de ce nuage pour estimer ${C.g} en ${Z}. Quelle est la bonne description de cette estimation ?`,
        good,
        [inside ? `Une extrapolation, car ${Z} est compris entre ${Y0} et ${Y1}.` : `Une interpolation, car ${Z} est en dehors de la période allant de ${Y0} à ${Y1}.`,
          inside ? `Une extrapolation, car ${Z} est en dehors de la période allant de ${Y0} à ${Y1}.` : `Une interpolation, car ${Z} est compris entre ${Y0} et ${Y1}.`,
          'Ni l\'une ni l\'autre : une droite d\'ajustement ne permet aucune estimation.'],
        'On parle d\'interpolation lorsque la valeur visée est à l\'intérieur de la plage des données, d\'extrapolation lorsqu\'elle est à l\'extérieur.',
        `Compare l'année ${Z} à la période des relevés.`,
        `Les relevés vont de ${Y0} à ${Y1}. ${good} ${inside ? 'L\'estimation est raisonnablement fiable si le nuage est bien allongé.' : 'Elle suppose que la tendance se maintient : à interpréter avec prudence.'}`
      );
    }

    if (tier === 2) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // fréquence conditionnelle en colonne (piège de la population de référence)
        const C = this.randChoice(this._1TC2_TAB);
        let t; let i; let j; let k = 0;
        do { t = this._1TC2_mk(); i = this.randInt(0, 1); j = this.randInt(0, 1); k++; } while (k < 300 && !this._1TC2_ok([[t.a, t.b], [t.c, t.d]][i][j], [t.k1, t.k2][j]));
        const nij = [[t.a, t.b], [t.c, t.d]][i][j]; const ni = [t.n1, t.n2][i]; const kj = [t.k1, t.k2][j];
        const r = pc(nij, kj);
        return this._xa([this.decText(r), this._PC], T, 2, 'Fréquence parmi une colonne',
          'Choisir la bonne population de référence',
          `Le tableau croisé ci-dessous répartit les ${C.pop}.${this._1TC2_tab(C, t)}Quelle est la fréquence des ${C.r[i]} parmi les ${C.c[j]} ?`,
          `$${P(r)}$`,
          [`$${P(pc(nij, ni))}$`, `$${P(pc(nij, t.N))}$`, `$${P(pc(kj, t.N))}$`],
          'Repère d\'abord la population de référence (celle qui suit « parmi les ») : c\'est l\'effectif total de sa colonne qui va au dénominateur.',
          `La population de référence est celle des ${C.c[j]}, d'effectif $${I(kj)}$.`,
          `Parmi les $${I(kj)}$ ${C.c[j]}, $${I(nij)}$ sont des ${C.r[i]} : $f = \\frac{${nij}}{${kj}} = ${D(r / 100)}$, soit $${P(r)}$ (et non $${P(pc(nij, ni))}$, fréquence parmi les ${C.r[i]}).`
        );
      }
      const C = this.randChoice(this._1TC2_SER);
      const Y0 = this.randChoice([2015, 2016, 2017, 2018]);
      if (fam === 1) {
        // interpolation avec une droite d'ajustement donnée
        const a = this.randChoice(C.a); const b = this.randChoice(C.b) + this.randChoice([0, 0.5, 1.5, 2.5]);
        const x0 = this.randInt(1, 6);
        const y = this._r(a * x0 + b);
        return this._xa([this.decText(y), this._VAL], T, 2, 'Estimation par interpolation',
          'Utiliser une droite d\'ajustement pour interpoler',
          `On étudie ${C.s} de ${Y0} à ${Y0 + 7}. On note $x$ le rang de l'année ($x = 0$ en ${Y0}) et $y$ cette grandeur. Un tableur fournit une droite d'ajustement d'équation $${this._1TC2_eq(a, b)}$. Estimer, à l'aide de cet ajustement, ${C.g} en ${Y0 + x0}.`,
          `$${D(y)}$`,
          [`$${D(this._r(a * x0))}$`, `$${D(this._r(a * (x0 + 1) + b))}$`, `$${D(this._r(b - a * x0))}$`],
          'On remplace $x$ par le rang de l\'année visée (et non par l\'année elle-même) dans l\'équation de la droite.',
          `L'année ${Y0 + x0} correspond au rang $x = ${x0}$.`,
          `${Y0 + x0} correspond à $x = ${x0}$ : $y = ${D(a)} \\times ${x0} ${b < 0 ? '-' : '+'} ${D(Math.abs(b))} = ${D(y)}$. Le modèle estime ${C.g} à environ $${D(y)}$ ${C.unit} en ${Y0 + x0} (interpolation : ${Y0 + x0} est dans la période étudiée).`
        );
      }
      if (fam === 2) {
        // valeur manquante connaissant le point moyen
        const S = this._1TC2_serie(C);
        const k = this.randInt(0, 4);
        const tab = this._xtab(['Année', ...[0, 1, 2, 3, 4].map((x) => String(Y0 + x))], [['Rang $x$', ...[0, 1, 2, 3, 4].map((x) => `$${x}$`)], ['$y$', ...S.ys.map((y, x) => (x === k ? '$m$' : `$${D(y)}$`))]]);
        const other = this._r(S.S - S.ys[k]);
        return this._xa([this.decText(S.ys[k]), this._VAL], T, 2, 'Valeur manquante et point moyen',
          'Utiliser les coordonnées du point moyen',
          `Le tableau donne ${C.s}, une valeur $m$ ayant été effacée.${tab}On sait que le point moyen du nuage est $G(2 ; ${D(S.ym)})$. Déterminer $m$.`,
          `$${D(S.ys[k])}$`,
          [`$${D(this._r(other / 4))}$`, `$${D(this._r(S.ym))}$`, `$${D(this._r(S.S))}$`],
          'L\'ordonnée du point moyen est la moyenne des $y_i$ : la somme des $y_i$ est donc égale au nombre de points multiplié par $\\bar{y}$.',
          `La somme des cinq valeurs vaut $5 \\times ${D(S.ym)}$ ; celle des quatre valeurs connues vaut $${D(other)}$.`,
          `$5 \\times ${D(S.ym)} = ${D(S.S)}$, donc $m = ${D(S.S)} - ${D(other)} = ${D(S.ys[k])}$.`
        );
      }
      // interprétation du coefficient directeur
      const a = this.randChoice(C.a); const b = this.randChoice(C.b);
      const up = a > 0;
      const good = `Selon ce modèle, ${C.g} ${up ? 'augmente' : 'diminue'} d'environ $${D(Math.abs(a))}$ ${C.unit} par an.`;
      return this._xa('keep', T, 2, 'Interpréter un ajustement affine',
        'Interpréter le coefficient directeur d\'un ajustement affine',
        `On étudie ${C.s} depuis ${Y0}. On note $x$ le rang de l'année ($x = 0$ en ${Y0}) et $y$ cette grandeur. Un ajustement affine donne $${this._1TC2_eq(a, b)}$. Quelle interprétation du nombre $${D(a)}$ est correcte ?`,
        good,
        [`Selon ce modèle, ${C.g} ${up ? 'augmente' : 'diminue'} d'environ $${P(Math.abs(a))}$ par an.`,
          `Selon ce modèle, ${C.g} vaut environ $${D(a)}$ ${C.unit} en ${Y0}.`,
          `Selon ce modèle, ${C.g} est ${C.fem ? 'multipliée' : 'multiplié'} par $${D(Math.abs(a))}$ chaque année.`],
        'Dans $y = ax + b$, le coefficient directeur $a$ est la variation de $y$ lorsque $x$ augmente de $1$ ; $b$ est la valeur de $y$ pour $x = 0$.',
        `Ici, $x$ augmente de $1$ quand on passe d'une année à la suivante.`,
        `Quand $x$ augmente de $1$ (une année), $y$ varie de $${D(a)}$ : ${good.charAt(0).toLowerCase() + good.slice(1)} La valeur en ${Y0} est $${D(b)}$ (ordonnée à l'origine) ; il s'agit d'une variation absolue, pas d'un pourcentage.`
      );
    }

    if (tier === 3) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        // ordonnée à l'origine par le point moyen
        const C = this.randChoice(this._1TC2_SER);
        const Y0 = this.randChoice([2018, 2019, 2020]);
        const S = this._1TC2_serie(C);
        if (S.a === 0) return this.gen_1TC2(3);
        const tab = this._xtab(['Année', ...[0, 1, 2, 3, 4].map((x) => String(Y0 + x))], [['Rang $x$', ...[0, 1, 2, 3, 4].map((x) => `$${x}$`)], ['$y$', ...S.ys.map((y) => `$${D(y)}$`)]]);
        return this._xa([this.decText(S.b), this._VAL], T, 3, 'Droite passant par le point moyen',
          'Déterminer un ajustement affine passant par le point moyen',
          `Le tableau donne ${C.s}.${tab}Un tableur fournit une droite d'ajustement de coefficient directeur $${D(S.a)}$, et l'on admet qu'elle passe par le point moyen $G$ du nuage. Déterminer son ordonnée à l'origine $b$.`,
          `$${D(S.b)}$`,
          [`$${D(S.ym)}$`, `$${D(this._r(S.ym + 2 * S.a))}$`, `$${D(this._r(S.ym - S.a))}$`],
          'On calcule d\'abord les coordonnées de $G$, puis on écrit que $G$ appartient à la droite : $\\bar{y} = a\\bar{x} + b$.',
          `$\\bar{x} = 2$ et la somme des $y_i$ vaut $${D(S.S)}$.`,
          `$\\bar{x} = \\frac{0 + 1 + 2 + 3 + 4}{5} = 2$ et $\\bar{y} = \\frac{${D(S.S)}}{5} = ${D(S.ym)}$. Comme $G$ est sur la droite : $${D(S.ym)} = ${D(S.a)} \\times 2 + b$, donc $b = ${D(S.ym)} ${S.a < 0 ? '+' : '-'} ${D(Math.abs(2 * S.a))} = ${D(S.b)}$. Ajustement : $${this._1TC2_eq(S.a, S.b)}$.`
        );
      }
      if (fam === 1) {
        // seuil par extrapolation
        const C = this.randChoice(this._1TC2_SER);
        const Y0 = this.randChoice([2015, 2016, 2017, 2018]);
        const a = this.randChoice(C.a); const b = this.randChoice(C.b);
        let S; let q; let n; let k = 0;
        do {
          const target = a * this.randInt(9, 16) + b;
          S = Math.round(target / 5) * 5 + (a > 0 ? this.randInt(1, 4) : -this.randInt(1, 4));
          q = (S - b) / a;
          n = Math.floor(q + 1e-9) + 1;
          k++;
        } while (k < 200 && (Math.abs(q - Math.round(q)) < 1e-9 || n < 9 || S <= 0));
        const up = a > 0;
        const Yn = Y0 + n;
        const sgn = (v) => (v < 0 ? `- ${D(-v)}` : `+ ${D(v)}`);
        let fn = Math.round(10 * (S - b)); let fd = Math.round(10 * a);
        if (fd < 0) { fn = -fn; fd = -fd; }
        const g = this.gcd(Math.abs(fn), fd); fn /= g; fd /= g;
        const qx = Math.abs(q * 100 - Math.round(q * 100)) < 1e-9;
        const fq = `${fn < 0 ? '-' : ''}\\frac{${Math.abs(fn)}}{${fd}}`;
        return this._xa([String(Yn), 'Saisir l\'année (par exemple 2031).'], T, 3, 'Seuil par extrapolation',
          'Résoudre une inéquation issue d\'un ajustement affine',
          `On étudie ${C.s} depuis ${Y0}. On note $x$ le rang de l'année ($x = 0$ en ${Y0}) et $y$ cette grandeur. Les données de ${Y0} à ${Y0 + 7} sont ajustées par la droite d'équation $${this._1TC2_eq(a, b)}$. En supposant que cette tendance se poursuive, à partir de quelle année ${C.g} ${up ? `dépassera-t-${C.fem ? 'elle' : 'il'}` : `deviendra-t-${C.fem ? 'elle inférieure' : 'il inférieur'} à`} $${S}$ ${C.unit} ?`,
          `$${Yn}$`,
          [`$${Yn - 1}$`, `$${Yn + 1}$`, `$${Y0 + Math.round(q) === Yn ? Yn + 2 : Y0 + Math.round(q)}$`],
          `On résout l'inéquation $ax + b ${up ? '>' : '<'} S$ (attention au sens de l'inégalité si l'on divise par un nombre négatif), puis on prend le plus petit rang entier qui convient.`,
          `L'inéquation s'écrit $${D(a)}x ${sgn(b)} ${up ? '>' : '<'} ${S}$.`,
          `$${D(a)}x ${sgn(b)} ${up ? '>' : '<'} ${S} \\iff ${D(a)}x ${up ? '>' : '<'} ${D(this._r(S - b))} \\iff x > ${fq}$${up ? '' : ' (on divise par un nombre négatif : le sens change)'}, avec $${fq} ${qx ? '=' : '\\approx'} ${D(q, 2)}$. Le plus petit rang entier est $${n}$, c'est-à-dire l'année ${Yn}. C'est une extrapolation : elle n'a de sens que si la tendance se maintient.`
        );
      }
      // fréquences conditionnelles « inversées » à partir de pourcentages
      const C = this.randChoice(this._1TC2_TAB);
      let t; let k = 0;
      do { t = this._1TC2_mk(); k++; } while (k < 400 && !this._1TC2_ok(t.a, t.k1));
      const r = pc(t.a, t.k1);
      const p1 = pc(t.n1, t.N);
      return this._xa([this.decText(r), this._PC], T, 3, 'Retourner une fréquence conditionnelle',
        'Construire un tableau croisé à partir de fréquences',
        `Une étude porte sur $${I(t.N)}$ ${C.pop}. Les ${C.r[0]} représentent $${P(p1)}$ de l'effectif. Parmi les ${C.r[0]}, $${P(t.f1)}$ sont des ${C.c[0]} ; parmi les ${C.r[1]}, $${P(t.f2)}$ sont des ${C.c[0]}. Quelle est la fréquence des ${C.r[0]} parmi les ${C.c[0]} ?`,
        `$${P(r)}$`,
        [`$${P(t.f1)}$`, `$${P(pc(t.a, t.N))}$`, `$${P(this._r(p1 * t.f1 / 100 + 1))}$`],
        'Reconstitue les effectifs du tableau croisé (lignes, puis colonne visée), puis divise par l\'effectif de la nouvelle population de référence.',
        `Il y a $${I(t.n1)}$ ${C.r[0]}, dont $${I(t.a)}$ ${C.c[0]} ; il reste à compter les ${C.c[0]} parmi les $${I(t.n2)}$ ${C.r[1]}.`,
        `${C.r[0].charAt(0).toUpperCase() + C.r[0].slice(1)} : $${D(p1 / 100)} \\times ${I(t.N)} = ${I(t.n1)}$, dont $${D(t.f1 / 100)} \\times ${I(t.n1)} = ${I(t.a)}$ ${C.c[0]}. ${C.r[1].charAt(0).toUpperCase() + C.r[1].slice(1)} : $${I(t.n2)}$, dont $${D(t.f2 / 100)} \\times ${I(t.n2)} = ${I(t.c)}$ ${C.c[0]}. Les ${C.c[0]} sont donc $${I(t.a)} + ${I(t.c)} = ${I(t.k1)}$, et la fréquence cherchée vaut $\\frac{${t.a}}{${t.k1}} = ${D(r / 100)}$, soit $${P(r)}$.`
      );
    }

    // Palier 4
    const fam = this.randInt(0, 2);
    if (fam === 0) {
      // écart relatif entre prévision et observation
      const C = this.randChoice(this._1TC2_SER);
      const Y0 = this.randChoice([2012, 2013, 2014, 2015]);
      const a = this.randChoice(C.a); const b0 = this.randChoice(C.b);
      const xo = this.randInt(9, 12);
      const tg = a * xo + b0;
      const step = Math.abs(tg) >= 50 ? 5 : 1;
      const yo = Math.max(step, Math.round(tg / step) * step);
      const e = this.randChoice([-10, -8, -5, -4, -2, 2, 4, 5, 8, 10]);
      const yh = this._r(yo * (1 + e / 100));
      const b = this._r(yh - a * xo);
      if (b <= 0) return this.gen_1TC2(4);
      return this._xa([this.decText(e), this._TX], T, 4, 'Prévision et valeur observée',
        'Confronter une extrapolation à la réalité',
        `On a ajusté ${C.s} de ${Y0} à ${Y0 + 7} par la droite d'équation $${this._1TC2_eq(a, b)}$, où $x$ est le rang de l'année ($x = 0$ en ${Y0}). En ${Y0 + xo}, la valeur observée est $${D(yo)}$ ${C.unit}. Calculer l'écart relatif entre la prévision du modèle pour ${Y0 + xo} et la valeur observée, c'est-à-dire $\\frac{y_{\\text{modèle}} - y_{\\text{observé}}}{y_{\\text{observé}}}$, en pourcentage.`,
        `$${this._sg(e)}$`,
        [`$${this._sg(-e)}$`, `$${this._sg(this._r(100 * (yh - yo) / yh) || 1, 2)}$`, `$${this._sg(this._r(yh - yo) || 1)}$`],
        'Calcule d\'abord la prévision (le rang de l\'année, pas l\'année, dans l\'équation), puis le taux $\\frac{\\text{prévision} - \\text{observation}}{\\text{observation}}$.',
        `L'année ${Y0 + xo} correspond au rang $x = ${xo}$.`,
        `Prévision : $y = ${D(a)} \\times ${xo} + ${D(b)} = ${D(yh)}$. Écart relatif : $\\frac{${D(yh)} - ${D(yo)}}{${D(yo)}} = ${D(e / 100)}$, soit $${this._sg(e)}$ : le modèle ${e > 0 ? 'surestime' : 'sous-estime'} la valeur observée de $${P(Math.abs(e))}$.`
      );
    }
    if (fam === 1) {
      // tableau à reconstituer à partir de fréquences
      const C = this.randChoice(this._1TC2_TAB);
      let N; let n1; let k1; let p; let a; let c; let n2; let k = 0;
      do {
        N = this.randChoice([400, 500, 800, 1000]);
        n1 = N * this.randChoice([30, 40, 45, 55, 60]) / 100;
        k1 = N * this.randChoice([20, 25, 30, 35, 40, 50, 60]) / 100;
        p = this.randInt(2, 18) * 5;
        a = k1 * p / 100; c = k1 - a; n2 = N - n1;
        k++;
      } while (k < 500 && (!Number.isInteger(a) || a > n1 || c > n2 || c < 1 || !this._1TC2_ok(c, n2) || 100 * c === (100 - p) * n2 || c * n1 === a * n2));
      const r = pc(c, n2);
      return this._xa([this.decText(r), this._PC], T, 4, 'Reconstituer un tableau croisé',
        'Compléter un tableau croisé et calculer une fréquence conditionnelle',
        `Une étude porte sur $${I(N)}$ ${C.pop} : $${I(n1)}$ sont des ${C.r[0]} et $${I(k1)}$ sont des ${C.c[0]}. Parmi les ${C.c[0]}, $${P(p)}$ sont des ${C.r[0]}. Quelle est la fréquence des ${C.c[0]} parmi les ${C.r[1]} ?`,
        `$${P(r)}$`,
        [`$${P(pc(c, N))}$`, `$${P(100 - p)}$`, `$${P(pc(a, n1))}$`],
        'Construis le tableau croisé : place les totaux connus, calcule l\'effectif de la case donnée par la fréquence, puis complète par différences.',
        `Les ${C.c[0]} qui sont des ${C.r[0]} sont $${D(p / 100)} \\times ${I(k1)} = ${I(a)}$.`,
        `Case ${C.r[0]} et ${C.c[0]} : $${D(p / 100)} \\times ${I(k1)} = ${I(a)}$. Case ${C.r[1]} et ${C.c[0]} : $${I(k1)} - ${I(a)} = ${I(c)}$. Effectif des ${C.r[1]} : $${I(N)} - ${I(n1)} = ${I(n2)}$. Fréquence cherchée : $\\frac{${c}}{${n2}} = ${D(r / 100)}$, soit $${P(r)}$.`
      );
    }
    // valeur manquante quand la droite passe par G
    const C = this.randChoice(this._1TC2_SER);
    const Y0 = this.randChoice([2018, 2019, 2020]);
    const S = this._1TC2_serie(C);
    const k = this.randInt(0, 4);
    const other = this._r(S.S - S.ys[k]);
    const tab = this._xtab(['Année', ...[0, 1, 2, 3, 4].map((x) => String(Y0 + x))], [['Rang $x$', ...[0, 1, 2, 3, 4].map((x) => `$${x}$`)], ['$y$', ...S.ys.map((y, x) => (x === k ? '$m$' : `$${D(y)}$`))]]);
    return this._xa([this.decText(S.ys[k]), this._VAL], T, 4, 'Ajustement et donnée manquante',
      'Exploiter le point moyen d\'un ajustement affine',
      `Le tableau donne ${C.s}, une valeur $m$ ayant été effacée.${tab}La droite d'ajustement fournie par un tableur a pour équation $${this._1TC2_eq(S.a, S.b)}$ et passe par le point moyen $G$ du nuage. Déterminer $m$.`,
      `$${D(S.ys[k])}$`,
      [`$${D(this._r(S.a * k + S.b))}$`, `$${D(S.ym)}$`, `$${D(this._r(other / 4))}$`],
      'L\'abscisse de $G$ se calcule avec les rangs ; son ordonnée s\'obtient avec l\'équation de la droite, puis on utilise que $\\bar{y}$ est la moyenne des $y_i$.',
      `$\\bar{x} = 2$, donc $\\bar{y} = ${D(S.a)} \\times 2 ${S.b < 0 ? '-' : '+'} ${D(Math.abs(S.b))}$.`,
      `$\\bar{x} = 2$ et $G$ est sur la droite : $\\bar{y} = ${D(S.a)} \\times 2 ${S.b < 0 ? '-' : '+'} ${D(Math.abs(S.b))} = ${D(S.ym)}$. La somme des cinq valeurs vaut $5 \\times ${D(S.ym)} = ${D(S.S)}$ ; celle des valeurs connues vaut $${D(other)}$, donc $m = ${D(S.S)} - ${D(other)} = ${D(S.ys[k])}$. (Prendre l'ordonnée du point de la droite au rang $${k}$ serait une erreur : les points du nuage ne sont pas sur la droite.)`
    );
  },
  // ---- 1TC3 : Probabilités conditionnelles, indépendance, répétition ----
  /** Arbres à deux niveaux : A puis B */
  _1TC3_ARB: [
    { pop: 'des clients d\'un magasin', A: 'possèdent une carte de fidélité', nA: 'n\'en possèdent pas', B: 'achètent un produit en promotion', one: 'un client', Ad: 'le client possède une carte de fidélité', Bd: 'le client achète un produit en promotion', qAB: 'qu\'un client possède une carte de fidélité et achète un produit en promotion', qBA: 'qu\'un client possédant une carte de fidélité achète un produit en promotion', qAsB: 'qu\'un client ayant acheté un produit en promotion possède une carte de fidélité' },
    { fem: true, pop: 'des pièces produites par une usine', A: 'proviennent de l\'atelier 1', nA: 'proviennent de l\'atelier 2', B: 'sont soumises à un contrôle renforcé', one: 'une pièce', Ad: 'la pièce provient de l\'atelier 1', Bd: 'la pièce est soumise à un contrôle renforcé', qAB: 'qu\'une pièce provienne de l\'atelier 1 et soit soumise à un contrôle renforcé', qBA: 'qu\'une pièce de l\'atelier 1 soit soumise à un contrôle renforcé', qAsB: 'qu\'une pièce soumise à un contrôle renforcé provienne de l\'atelier 1' },
    { pop: 'des abonnés d\'une plateforme de vidéo', A: 'ont un forfait premium', nA: 'ont un forfait standard', B: 'regardent au moins un documentaire par semaine', one: 'un abonné', Ad: 'l\'abonné a un forfait premium', Bd: 'l\'abonné regarde au moins un documentaire par semaine', qAB: 'qu\'un abonné ait un forfait premium et regarde au moins un documentaire par semaine', qBA: 'qu\'un abonné premium regarde au moins un documentaire par semaine', qAsB: 'qu\'un abonné qui regarde au moins un documentaire par semaine ait un forfait premium' },
    { pop: 'des visiteurs d\'un salon', A: 'viennent en train', nA: 'viennent par un autre moyen', B: 'assistent à une conférence', one: 'un visiteur', Ad: 'le visiteur vient en train', Bd: 'le visiteur assiste à une conférence', qAB: 'qu\'un visiteur vienne en train et assiste à une conférence', qBA: 'qu\'un visiteur venu en train assiste à une conférence', qAsB: 'qu\'un visiteur ayant assisté à une conférence soit venu en train' },
    { pop: 'des jours de l\'année dans une ville', A: 'sont pluvieux', nA: 'sont secs', B: 'connaissent un retard du bus de 8 h', one: 'un jour', Ad: 'le jour est pluvieux', Bd: 'le bus de 8 h est en retard', qAB: 'qu\'un jour soit pluvieux et que le bus de 8 h soit en retard', qBA: 'que le bus de 8 h soit en retard un jour de pluie', qAsB: 'qu\'un jour où le bus de 8 h est en retard soit pluvieux' }
  ],
  /** Épreuves de Bernoulli répétées : p en décimal (d) ou en fraction [n, d] (f) */
  _1TC3_BER: [
    { s: 'À chaque tir, un archer atteint la cible avec une probabilité de $P$, indépendamment des autres tirs.', S: 'la flèche atteint la cible', tr: 'tirs', d: [0.6, 0.7, 0.8, 0.9] },
    { s: 'Une graine de tomate germe avec une probabilité de $P$ ; les graines germent indépendamment les unes des autres.', S: 'la graine germe', tr: 'graines semées', d: [0.7, 0.8, 0.9] },
    { s: 'Une machine produit une pièce défectueuse avec une probabilité de $P$ ; les pièces sont défectueuses ou non indépendamment les unes des autres.', S: 'la pièce est défectueuse', tr: 'pièces contrôlées', d: [0.1, 0.2, 0.3] },
    { s: 'On lance un dé équilibré à six faces ; les lancers sont indépendants.', S: 'on obtient $6$', tr: 'lancers', f: [1, 6] },
    { s: 'On lance une pièce de monnaie équilibrée ; les lancers sont indépendants.', S: 'on obtient pile', tr: 'lancers', f: [1, 2] },
    { s: 'Une roue de loterie équilibrée comporte $K$ secteurs identiques dont un seul est gagnant ; les parties sont indépendantes.', S: 'le secteur gagnant sort', tr: 'parties', f: [1, 0] }
  ],
  _XPROB: 'Saisir la valeur exacte : écriture décimale, ou fraction si le résultat ne tombe pas juste (par exemple 0,35 ou 7/30).',
  /** fraction n/d -> { tex, txt } : décimal si exact (au plus 4 décimales), sinon fraction irréductible */
  _1TC3_v(n, d) {
    const g = this.gcd(Math.abs(n), d); n /= g; d /= g;
    const v = n / d;
    if (Math.abs(v * 1e4 - Math.round(v * 1e4)) < 1e-9) return { tex: this.dec(v, 4), txt: this.decText(v, 4), v, n, d };
    return { tex: this.frac(n, d), txt: `${n}/${d}`, v, n, d };
  },
  /** distracteurs de probabilité : valeurs strictement entre 0 et 1, distinctes de la réponse r, complétées si besoin */
  _1TC3_ds(r, list) {
    const out = []; const vals = [r.v];
    const push = (tex) => {
      const v = this.numValue(tex);
      if (v === null || !(v > 0 && v < 1) || vals.some((w) => Math.abs(w - v) < 1e-9)) return;
      vals.push(v); out.push(tex);
    };
    list.forEach(push);
    [this._1TC3_v(r.d - r.n, r.d), this._1TC3_v(r.n, 2 * r.d), this._1TC3_v(r.n * r.n, r.d * r.d), this._1TC3_v(r.n, r.d + 1), this._1TC3_v(r.d - r.n, 2 * r.d), this._1TC3_v(r.n + 1, r.d + 2), this._1TC3_v(1, r.d + 1), this._1TC3_v(3 * r.n, 4 * r.d), this._1TC3_v(2 * r.n, 2 * r.d + 1)]
      .forEach((x) => { if (out.length < 3) push(`$${x.tex}$`); });
    return out.slice(0, 3);
  },
  /** probabilité de succès d'une épreuve de Bernoulli tirée dans un contexte : { n, d, tex, s } */
  _1TC3_p(C) {
    if (C.d) {
      const x = this.randChoice(C.d);
      const n = Math.round(x * 10);
      return { n, d: 10, tex: this.dec(x), s: C.s.replace('$P$', `$${this.dec(x)}$`) };
    }
    if (C.f[1] === 0) {
      const K = this.randChoice([3, 4, 5]);
      return { n: 1, d: K, tex: `\\frac{1}{${K}}`, s: C.s.replace('$K$', `$${K}$`) };
    }
    return { n: C.f[0], d: C.f[1], tex: `\\frac{${C.f[0]}}{${C.f[1]}}`, s: C.s };
  },

  gen_1TC3(tier) {
    const T = '1TC3';
    const D = (x) => this.dec(x, 4);
    const P = (x) => this._pct(x, 2);
    const arb = () => {
      const C = this.randChoice(this._1TC3_ARB);
      const a = this.randInt(2, 8) * 10 + this.randChoice([0, 0, 5]);
      const b = this.randInt(1, 18) * 5;
      let c; do { c = this.randInt(1, 18) * 5; } while (c === b);
      const st = `On s'intéresse aux ${C.pop.replace(/^des /, '')} : $${P(a)}$ d'entre ${C.fem ? 'elles' : 'eux'} ${C.A} et les autres ${C.nA}. Parmi ${C.fem ? 'celles' : 'ceux'} qui ${C.A}, $${P(b)}$ ${C.B} ; parmi ${C.fem ? 'celles' : 'ceux'} qui ${C.nA}, $${P(c)}$ ${C.B}. On choisit ${C.one} au hasard et l'on note $A$ l'événement « ${C.Ad} » et $B$ l'événement « ${C.Bd} ».`;
      return { C, a, b, c, st };
    };
    // valeurs en centièmes / dix-millièmes
    const c2 = (x) => D(x / 100);

    if (tier === 1) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        const { a, b, st } = arb();
        const r = a * b;
        return this._xa([this.decText(r / 10000, 4), this._XPROB], T, 1, 'Probabilité d\'une intersection',
          'Calculer la probabilité d\'un chemin de l\'arbre',
          `${st} Calculer $P(A \\cap B)$.`,
          `$${D(r / 10000)}$`,
          this._1TC3_ds(this._1TC3_v(r, 10000), [`$${c2(b)}$`, `$${D((a + b) / 100) === D(r / 10000) ? D(a * (100 - b) / 10000) : D((a + b) / 100)}$`, `$${D(a * (100 - b) / 10000)}$`, `$${D(this._r(b / a))}$`]),
          'La probabilité d\'un chemin d\'un arbre pondéré est le produit des probabilités portées par ses branches : $P(A \\cap B) = P(A) \\times P_A(B)$.',
          `Sur l'arbre, $P(A) = ${c2(a)}$ et $P_A(B) = ${c2(b)}$.`,
          `$P(A \\cap B) = P(A) \\times P_A(B) = ${c2(a)} \\times ${c2(b)} = ${D(r / 10000)}$.`
        );
      }
      if (fam === 1) {
        const { a, b, c, st } = arb();
        const k = this.randInt(0, 2);
        const lab = ['P(\\overline{A})', 'P_A(\\overline{B})', 'P_{\\overline{A}}(\\overline{B})'][k];
        const base = [a, b, c][k];
        const r = 100 - base;
        return this._xa([this.decText(r / 100), this._XPROB], T, 1, 'Branches complémentaires',
          'Compléter un arbre pondéré',
          `${st} Déterminer $${lab}$.`,
          `$${c2(r)}$`,
          this._1TC3_ds(this._1TC3_v(r, 100), [`$${c2(base)}$`, `$${c2(100 - [b, c, a][k])}$`, `$${D(this._r(base * r / 10000))}$`]),
          'Les probabilités portées par les branches issues d\'un même nœud ont une somme égale à $1$.',
          `La branche voisine, issue du même nœud, porte la probabilité $${c2(base)}$.`,
          `$${lab} = 1 - ${c2(base)} = ${c2(r)}$.`
        );
      }
      if (fam === 2) {
        const C = this.randChoice(this._1TC3_BER);
        const p = this._1TC3_p(C);
        const fail = Math.random() < 0.4;
        const n = fail ? p.d - p.n : p.n;
        const r = this._1TC3_v(n * n, p.d * p.d);
        const q = this._1TC3_v(p.d - p.n, p.d);
        const pk = fail ? q.tex : p.tex;
        return this._xa([r.txt, this._XPROB], T, 1, 'Deux épreuves indépendantes',
          'Calculer la probabilité d\'une issue de deux épreuves indépendantes',
          `${p.s} On répète $2$ fois l'expérience et l'on note $S$ l'événement « ${C.S} ». Quelle est la probabilité que $S$ ${fail ? 'ne soit réalisé à aucune des deux épreuves' : 'soit réalisé aux deux épreuves'} ?`,
          `$${r.tex}$`,
          this._1TC3_ds(r, [`$${this._1TC3_v(2 * n, p.d).tex}$`, `$${fail ? p.tex : q.tex}$`, `$${this._1TC3_v(n, p.d).tex}$`]),
          'Pour des épreuves indépendantes, la probabilité d\'une suite de résultats est le produit des probabilités de chaque résultat.',
          fail ? `À chaque épreuve, $S$ n'est pas réalisé avec la probabilité $1 - ${p.tex} = ${q.tex}$.` : `À chaque épreuve, $S$ est réalisé avec la probabilité $${p.tex}$ ; il faut multiplier deux facteurs.`,
          `${fail ? `$P(\\overline{S}) = 1 - ${p.tex} = ${q.tex}$, d'où` : 'Par indépendance,'} la probabilité cherchée vaut $${pk} \\times ${pk} = ${r.tex}$.`
        );
      }
      // notations : intersection ou conditionnelle
      const C = this.randChoice(this._1TC3_ARB);
      const k = this.randInt(0, 2);
      const opts = ['$P(A \\cap B)$', '$P_A(B)$', '$P_B(A)$'];
      const why = [
        'on demande que les deux événements soient réalisés simultanément, sur l\'ensemble de la population : c\'est l\'intersection',
        'on se restreint à la sous-population où $A$ est réalisé et l\'on cherche la probabilité de $B$ : c\'est la probabilité de $B$ sachant $A$',
        'on se restreint à la sous-population où $B$ est réalisé et l\'on cherche la probabilité de $A$ : c\'est la probabilité de $A$ sachant $B$'
      ];
      return this._xa('keep', T, 1, 'Choisir la bonne notation',
        'Distinguer $P(A \\cap B)$, $P_A(B)$ et $P_B(A)$',
        `On choisit ${C.one} au hasard parmi l'ensemble ${C.pop} et l'on note $A$ l'événement « ${C.Ad} » et $B$ l'événement « ${C.Bd} ». Quelle notation désigne la probabilité ${[C.qAB, C.qBA, C.qAsB][k]} ?`,
        opts[k],
        [...opts.filter((o, i) => i !== k), '$P(A) + P(B)$'],
        'Repère si l\'énoncé impose une condition (« parmi », « sachant que », un sujet déjà restreint) ou demande que deux événements se produisent à la fois.',
        `Demande-toi : la phrase restreint-elle la population de départ ?`,
        `Ici, ${why[k]} : ${opts[k]}.`
      );
    }

    if (tier === 2) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        let o; let r;
        do { o = arb(); r = o.a * o.b + (100 - o.a) * o.c; } while ([o.a, 100 - o.a, o.b, o.c].some((x) => x * 100 === r));
        const { a, b, c, st } = o;
        return this._xa([this.decText(r / 10000, 4), this._XPROB], T, 2, 'Formule des probabilités totales',
          'Calculer une probabilité totale à l\'aide d\'un arbre',
          `${st} Calculer $P(B)$.`,
          `$${D(r / 10000)}$`,
          this._1TC3_ds(this._1TC3_v(r, 10000), [`$${D(a * b / 10000)}$`, `$${D((b + c) / 100)}$`, `$${D((b + c) / 200)}$`]),
          'L\'événement $B$ est réalisé en passant par $A$ ou par $\\overline{A}$ : on additionne les probabilités des deux chemins qui mènent à $B$.',
          `$P(A \\cap B) = ${c2(a)} \\times ${c2(b)}$ et $P(\\overline{A} \\cap B) = ${c2(100 - a)} \\times ${c2(c)}$.`,
          `$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = ${c2(a)} \\times ${c2(b)} + ${c2(100 - a)} \\times ${c2(c)} = ${D(a * b / 10000)} + ${D((100 - a) * c / 10000)} = ${D(r / 10000)}$.`
        );
      }
      if (fam === 1) {
        // tableau croisé d'effectifs
        const C = this.randChoice(this._1TC2_TAB);
        const t = this._1TC2_mk();
        const k = this.randInt(0, 2);
        const lab = ['P_A(B)', 'P_B(A)', 'P(A \\cap B)'][k];
        const den = [t.n1, t.k1, t.N][k];
        const r = this._1TC3_v(t.a, den);
        const wrong = [t.k1, t.n1, t.n1][k];
        return this._xa([r.txt, this._XPROB], T, 2, 'Probabilité conditionnelle et tableau',
          'Calculer une probabilité conditionnelle à partir d\'un tableau croisé',
          `Le tableau croisé ci-dessous répartit les ${C.pop}.${this._1TC2_tab(C, t)}On choisit ${C.one} au hasard. On note $A$ l'événement « faire partie des ${C.r[0]} » et $B$ l'événement « faire partie des ${C.c[0]} ». Calculer $${lab}$.`,
          `$${r.tex}$`,
          this._1TC3_ds(r, [`$${this._1TC3_v(t.a, wrong).tex}$`, `$${this._1TC3_v(t.a, k === 2 ? t.k1 : t.N).tex}$`, `$${this._1TC3_v([t.k1, t.n1, t.k1][k], t.N).tex}$`]),
          'En situation d\'équiprobabilité, une probabilité conditionnelle se calcule comme une fréquence : effectif de l\'intersection divisé par l\'effectif de l\'événement qui sert de condition.',
          k === 2 ? `L'intersection compte $${t.a}$ personnes sur un total de $${t.N}$.` : `L'événement qui sert de condition compte $${den}$ personnes.`,
          `$${lab} = \\frac{${t.a}}{${den}}${r.tex === this.frac(t.a, den) && this.gcd(t.a, den) === 1 ? '' : ` = ${r.tex}`}$.`
        );
      }
      if (fam === 2) {
        const C = this.randChoice(this._1TC3_BER);
        const p = this._1TC3_p(C);
        const none = Math.random() < 0.5;
        const n = none ? p.d - p.n : p.n;
        const r = this._1TC3_v(n ** 3, p.d ** 3);
        const q = this._1TC3_v(p.d - p.n, p.d);
        const pk = none ? q.tex : p.tex;
        return this._xa([r.txt, this._XPROB], T, 2, 'Trois épreuves indépendantes',
          'Utiliser un arbre de trois épreuves de Bernoulli',
          `${p.s} On répète $3$ fois l'expérience et l'on note $S$ l'événement « ${C.S} ». Quelle est la probabilité que $S$ ${none ? 'ne soit réalisé à aucune des trois épreuves' : 'soit réalisé aux trois épreuves'} ?`,
          `$${r.tex}$`,
          this._1TC3_ds(r, [`$${this._1TC3_v(3 * n, p.d).tex}$`, `$${this._1TC3_v(n * n, p.d * p.d).tex}$`, `$${this._1TC3_v(p.d ** 3 - n ** 3, p.d ** 3).tex}$`]),
          'Un seul chemin de l\'arbre convient : sa probabilité est le produit des probabilités de ses trois branches.',
          `Le chemin cherché est ${none ? '$\\overline{S}\\,\\overline{S}\\,\\overline{S}$' : '$SSS$'} ; chaque branche porte la probabilité $${pk}$.`,
          `${none ? `$P(\\overline{S}) = 1 - ${p.tex} = ${q.tex}$. ` : ''}Par indépendance, la probabilité vaut $\\left(${pk}\\right)^3 = ${r.tex}$.`
        );
      }
      // P_A(B) = P(A ∩ B) / P(A)
      const { C } = arb();
      const a = this.randChoice([20, 25, 40, 50, 60, 75, 80]);
      let b; do { b = this.randInt(1, 19) * 5; } while (b === a || b === 100 - a);
      const inter = a * b;
      return this._xa([this.decText(b / 100), this._XPROB], T, 2, 'Calcul de $P_A(B)$',
        'Calculer une probabilité conditionnelle',
        `On choisit ${C.one} au hasard parmi l'ensemble ${C.pop} et l'on note $A$ l'événement « ${C.Ad} » et $B$ l'événement « ${C.Bd} ». On sait que $P(A) = ${c2(a)}$ et $P(A \\cap B) = ${D(inter / 10000)}$. Calculer $P_A(B)$.`,
        `$${c2(b)}$`,
        this._1TC3_ds(this._1TC3_v(b, 100), [`$${D(inter / 10000)}$`, `$${D(this._r(a / 100 - inter / 10000))}$`, `$${c2(100 - b)}$`, `$${D(this._r(inter / 10000 + a / 100))}$`]),
        'Par définition, $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$ lorsque $P(A) \\neq 0$.',
        `Il faut diviser $${D(inter / 10000)}$ par $${c2(a)}$.`,
        `$P_A(B) = \\frac{P(A \\cap B)}{P(A)} = \\frac{${D(inter / 10000)}}{${c2(a)}} = ${c2(b)}$.`
      );
    }

    if (tier === 3) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // indépendance
        const { C } = arb();
        const a = this.randChoice([20, 30, 40, 50, 60, 80]);
        const b = this.randChoice([10, 20, 25, 30, 40, 50, 70]);
        const ind = Math.random() < 0.5;
        const prod = a * b; // dix-millièmes
        const inter = ind ? prod : prod + this.randChoice([-1, 1]) * this.randChoice([100, 200, 300, 500]);
        if (inter <= 0 || inter >= Math.min(a, b) * 100) return this.gen_1TC3(3);
        const yes = `Oui, car $P(A) \\times P(B) = P(A \\cap B)$.`;
        const no = `Non, car $P(A) \\times P(B) \\neq P(A \\cap B)$.`;
        return this._xa('keep', T, 3, 'Événements indépendants ?',
          'Justifier l\'indépendance de deux événements',
          `On choisit ${C.one} au hasard parmi l'ensemble ${C.pop} et l'on note $A$ l'événement « ${C.Ad} » et $B$ l'événement « ${C.Bd} ». On sait que $P(A) = ${c2(a)}$, $P(B) = ${c2(b)}$ et $P(A \\cap B) = ${D(inter / 10000)}$. Les événements $A$ et $B$ sont-ils indépendants ?`,
          ind ? yes : no,
          [ind ? no : yes, 'Non, car $A$ et $B$ peuvent être réalisés en même temps.', `${ind ? 'Non' : 'Oui'}, car $P(A) + P(B) \\neq 1$.`],
          'Deux événements $A$ et $B$ sont indépendants lorsque $P(A \\cap B) = P(A) \\times P(B)$.',
          `Calcule le produit $${c2(a)} \\times ${c2(b)}$ et compare-le à $P(A \\cap B)$.`,
          `$P(A) \\times P(B) = ${c2(a)} \\times ${c2(b)} = ${D(prod / 10000)}$ ${ind ? '$=$' : '$\\neq$'} $${D(inter / 10000)}$ : $A$ et $B$ ${ind ? 'sont' : 'ne sont pas'} indépendants.${ind ? ' Autrement dit, $P_A(B) = P(B)$ : savoir que $A$ est réalisé ne change pas la probabilité de $B$.' : ` On le voit aussi avec $P_A(B) = \\frac{${D(inter / 10000)}}{${c2(a)}} = ${D(this._r(inter / a / 100))}$, différent de $P(B) = ${c2(b)}$.`}`
        );
      }
      if (fam === 1) {
        const C = this.randChoice(this._1TC3_BER);
        const p = this._1TC3_p(C);
        const k = this.randChoice([1, 2]);
        const qn = p.d - p.n;
        const num = 3 * p.n ** k * qn ** (3 - k);
        const r = this._1TC3_v(num, p.d ** 3);
        const one = this._1TC3_v(p.n ** k * qn ** (3 - k), p.d ** 3);
        const q = this._1TC3_v(qn, p.d);
        const chem = k === 1 ? '$S\\overline{S}\\,\\overline{S}$, $\\overline{S}S\\overline{S}$ et $\\overline{S}\\,\\overline{S}S$' : '$SS\\overline{S}$, $S\\overline{S}S$ et $\\overline{S}SS$';
        const prodTex = k === 1 ? `${p.tex} \\times ${q.tex} \\times ${q.tex}` : `${p.tex} \\times ${p.tex} \\times ${q.tex}`;
        return this._xa([r.txt, this._XPROB], T, 3, 'Exactement $k$ succès sur trois épreuves',
          'Dénombrer les chemins d\'un arbre de trois épreuves',
          `${p.s} On répète $3$ fois l'expérience et l'on note $S$ l'événement « ${C.S} ». Quelle est la probabilité que $S$ soit réalisé exactement ${k === 1 ? 'une fois' : 'deux fois'} ?`,
          `$${r.tex}$`,
          this._1TC3_ds(r, [`$${one.tex}$`, `$${this._1TC3_v(3 * p.n ** k, p.d ** k).tex === r.tex ? this._1TC3_v(num * 2, p.d ** 3).tex : this._1TC3_v(p.n ** k, p.d ** k).tex}$`, `$${this._1TC3_v(p.d ** 3 - num, p.d ** 3).tex}$`]),
          'Repère dans l\'arbre tous les chemins qui comportent le nombre de succès voulu : ils ont tous la même probabilité, qu\'on multiplie par leur nombre.',
          `Les chemins qui conviennent sont ${chem}.`,
          `Il y a $3$ chemins favorables (${chem}), chacun de probabilité $${prodTex} = ${one.tex}$. La probabilité cherchée vaut $3 \\times ${one.tex} = ${r.tex}$.`
        );
      }
      if (fam === 2) {
        // probabilité « inversée »
        const { a, b, c, st } = arb();
        const num = a * b; const den = a * b + (100 - a) * c;
        const r = this._1TC3_v(num, den);
        return this._xa([r.txt, this._XPROB], T, 3, 'Retourner un arbre',
          'Calculer $P_B(A)$ à partir d\'un arbre pondéré',
          `${st} Calculer $P_B(A)$.`,
          `$${r.tex}$`,
          this._1TC3_ds(r, [`$${c2(b)}$`, `$${D(num / 10000)}$`, `$${this._1TC3_v(den - num, den).tex}$`]),
          'On calcule $P(B)$ par la formule des probabilités totales, puis on applique la définition $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$.',
          `$P(A \\cap B) = ${c2(a)} \\times ${c2(b)} = ${D(num / 10000)}$ ; calcule ensuite $P(B)$.`,
          `$P(A \\cap B) = ${D(num / 10000)}$ et $P(B) = ${D(num / 10000)} + ${c2(100 - a)} \\times ${c2(c)} = ${D(den / 10000)}$. Donc $P_B(A) = \\frac{${D(num / 10000)}}{${D(den / 10000)}} = ${r.tex}$${r.tex.includes('frac') ? ` (environ $${this.dec(r.v, 3)}$)` : ''}.`
        );
      }
      // au moins un succès
      const C = this.randChoice(this._1TC3_BER);
      const p = this._1TC3_p(C);
      const n = this.randInt(2, 4);
      const qn = p.d - p.n;
      const r = this._1TC3_v(p.d ** n - qn ** n, p.d ** n);
      const q = this._1TC3_v(qn, p.d);
      return this._xa([r.txt, this._XPROB], T, 3, 'Au moins un succès',
        'Utiliser l\'événement contraire',
        `${p.s} On répète $${n}$ fois l'expérience et l'on note $S$ l'événement « ${C.S} ». Quelle est la probabilité que $S$ soit réalisé au moins une fois ?`,
        `$${r.tex}$`,
        this._1TC3_ds(r, [`$${this._1TC3_v(qn ** n, p.d ** n).tex}$`, `$${this._1TC3_v(p.n ** n, p.d ** n).tex}$`, `$${this._1TC3_v(n * p.n, p.d).tex === r.tex ? this._1TC3_v(1, 1).tex : this._1TC3_v(n * p.n, p.d).tex}$`]),
        'L\'événement contraire de « au moins un succès » est « aucun succès », qui correspond à un seul chemin de l\'arbre.',
        `La probabilité de n'obtenir aucun succès est $\\left(${q.tex}\\right)^${n}$.`,
        `Aucun succès : $\\left(${q.tex}\\right)^${n} = ${this._1TC3_v(qn ** n, p.d ** n).tex}$. Donc la probabilité d'au moins un succès vaut $1 - ${this._1TC3_v(qn ** n, p.d ** n).tex} = ${r.tex}$.`
      );
    }

    // Palier 4
    const fam = this.randInt(0, 3);
    if (fam === 0) {
      // test de dépistage (raisonnement sur 10 000 personnes)
      const pr = this.randChoice([1, 2, 4, 5, 10]);
      const se = this.randChoice([90, 95, 98, 99]);
      const sp = this.randChoice([90, 95, 96, 98, 99]);
      const M = 100 * pr; const VP = pr * se; const FP = (100 - pr) * (100 - sp);
      const faux = Math.random() < 0.4;
      const r = this._1TC3_v(faux ? FP : VP, VP + FP);
      const I = (x) => this._int(x);
      return this._xa([r.txt, this._XPROB], T, 4, 'Test de dépistage',
        'Interpréter un test de dépistage (faux positifs)',
        `Une maladie touche $${P(pr)}$ d'une population. Un test de dépistage est positif chez $${P(se)}$ des personnes malades et négatif chez $${P(sp)}$ des personnes non malades. On choisit au hasard une personne dont le test est positif. Quelle est la probabilité qu'elle ${faux ? 'ne soit pas malade (faux positif)' : 'soit malade'} ?`,
        `$${r.tex}$`,
        this._1TC3_ds(r, [`$${c2(faux ? 100 - sp : se)}$`, `$${this._1TC3_v(VP, 10000).tex}$`, `$${this._1TC3_v(faux ? VP : FP, VP + FP).tex}$`]),
        'Raisonne sur une population fictive (par exemple $10\\,000$ personnes) : compte les malades positifs et les non-malades positifs, puis rapporte au nombre total de positifs.',
        `Sur $10\\,000$ personnes, il y a $${I(M)}$ malades, dont $${I(VP)}$ ont un test positif.`,
        `Sur $10\\,000$ personnes : $${I(M)}$ malades, dont $${D(se / 100)} \\times ${I(M)} = ${I(VP)}$ positifs ; $${I(10000 - M)}$ non-malades, dont $${D((100 - sp) / 100)} \\times ${I(10000 - M)} = ${I(FP)}$ positifs. Il y a donc $${I(VP + FP)}$ tests positifs, et la probabilité cherchée vaut $\\frac{${faux ? FP : VP}}{${VP + FP}}${this.gcd(faux ? FP : VP, VP + FP) > 1 || !r.tex.includes('frac') ? ` = ${r.tex}` : ''}$${r.tex.includes('frac') ? ` (environ $${this.dec(r.v, 3)}$)` : ''}. ${faux ? `Environ $${P(Math.round(100 * r.v))}$ des tests positifs sont donc de faux positifs${pr <= 5 ? ' : la maladie étant peu répandue, les non-malades sont très nombreux et leurs erreurs de test pèsent lourd' : ''}.` : 'Un test positif ne signifie pas qu\'on est certainement malade.'}`
      );
    }
    if (fam === 1) {
      // quatre épreuves : exactement 2 ou 3 succès
      const C = this.randChoice(this._1TC3_BER);
      const p = this._1TC3_p(C);
      const k = this.randChoice([2, 3]);
      const nb = k === 2 ? 6 : 4;
      const qn = p.d - p.n;
      const one = this._1TC3_v(p.n ** k * qn ** (4 - k), p.d ** 4);
      const r = this._1TC3_v(nb * p.n ** k * qn ** (4 - k), p.d ** 4);
      const q = this._1TC3_v(qn, p.d);
      return this._xa([r.txt, this._XPROB], T, 4, 'Exactement $k$ succès sur quatre épreuves',
        'Dénombrer les chemins d\'un arbre de quatre épreuves',
        `${p.s} On répète $4$ fois l'expérience et l'on note $S$ l'événement « ${C.S} ». Quelle est la probabilité que $S$ soit réalisé exactement ${k === 2 ? 'deux' : 'trois'} fois ?`,
        `$${r.tex}$`,
        this._1TC3_ds(r, [`$${one.tex}$`, `$${this._1TC3_v((k === 2 ? 4 : 6) * p.n ** k * qn ** (4 - k), p.d ** 4).tex}$`, `$${this._1TC3_v(p.n ** k, p.d ** k).tex}$`]),
        'Compte les chemins de l\'arbre qui comportent exactement le nombre de succès voulu (en listant les positions possibles des succès), puis multiplie ce nombre par la probabilité commune de ces chemins.',
        k === 2 ? 'Les deux succès peuvent occuper les positions 1-2, 1-3, 1-4, 2-3, 2-4 ou 3-4.' : 'L\'unique échec peut se produire à la 1re, 2e, 3e ou 4e épreuve.',
        `Il y a $${nb}$ chemins favorables (${k === 2 ? 'positions des deux succès : 1-2, 1-3, 1-4, 2-3, 2-4, 3-4' : 'position de l\'échec : 1, 2, 3 ou 4'}), chacun de probabilité ${k === 2 ? `$\\left(${p.tex}\\right)^2 \\times \\left(${q.tex}\\right)^2$` : `$\\left(${p.tex}\\right)^3 \\times ${q.tex}$`} $= ${one.tex}$. Probabilité cherchée : $${nb} \\times ${one.tex} = ${r.tex}$.`
      );
    }
    if (fam === 2) {
      // retrouver une branche connaissant P(B)
      const { C } = arb();
      const a = this.randChoice([20, 25, 40, 50, 60, 75, 80]);
      const b = this.randInt(1, 18) * 5;
      let c; do { c = this.randInt(1, 18) * 5; } while (c === b || c === a || c === 100 - a || c * 100 === a * b);
      const PB = a * b + (100 - a) * c;
      return this._xa([this.decText(c / 100), this._XPROB], T, 4, 'Retrouver une probabilité conditionnelle',
        'Utiliser la formule des probabilités totales pour retrouver une branche',
        `On choisit ${C.one} au hasard parmi l'ensemble ${C.pop} et l'on note $A$ l'événement « ${C.Ad} » et $B$ l'événement « ${C.Bd} ». On sait que $P(A) = ${c2(a)}$, $P_A(B) = ${c2(b)}$ et $P(B) = ${D(PB / 10000)}$. Calculer $P_{\\overline{A}}(B)$.`,
        `$${c2(c)}$`,
        this._1TC3_ds(this._1TC3_v(c, 100), [`$${D(this._r((PB - a * b) / 10000))}$`, `$${D(this._r(PB / 10000 - b / 100)) === c2(c) ? c2(100 - c) : D(this._r(Math.abs(PB / 10000 - b / 100)))}$`, `$${c2(100 - c)}$`]),
        'Écris la formule des probabilités totales, $P(B) = P(A)P_A(B) + P(\\overline{A})P_{\\overline{A}}(B)$, puis isole l\'inconnue.',
        `$P(A \\cap B) = ${c2(a)} \\times ${c2(b)} = ${D(a * b / 10000)}$ et $P(\\overline{A}) = ${c2(100 - a)}$.`,
        `$${D(PB / 10000)} = ${D(a * b / 10000)} + ${c2(100 - a)} \\times P_{\\overline{A}}(B)$, donc $P_{\\overline{A}}(B) = \\frac{${D(PB / 10000)} - ${D(a * b / 10000)}}{${c2(100 - a)}} = \\frac{${D((PB - a * b) / 10000)}}{${c2(100 - a)}} = ${c2(c)}$.`
      );
    }
    // nombre minimal de répétitions
    let C; let p; let th; let n; let k = 0;
    do {
      C = this.randChoice(this._1TC3_BER.filter((x) => x.d && x.d[0] >= 0.3 || x.f));
      p = this._1TC3_p(C);
      th = this.randChoice([75, 80, 85, 90, 95]);
      const qv = (p.d - p.n) / p.d;
      n = 1; while (1 - qv ** n < th / 100 - 1e-12 && n < 10) n++;
      k++;
    } while (k < 200 && (n < 2 || n > 4 || Math.abs(1 - ((p.d - p.n) / p.d) ** n - th / 100) < 1e-9));
    const qn = p.d - p.n;
    const lines = [];
    for (let m = 1; m <= n; m++) lines.push(`pour $${m}$ répétition${m > 1 ? 's' : ''}, $1 - ${m === 1 ? this._1TC3_v(qn, p.d).tex : `\\left(${this._1TC3_v(qn, p.d).tex}\\right)^${m}`} = ${this._1TC3_v(p.d ** m - qn ** m, p.d ** m).tex}$`);
    return this._xa([String(n), 'Saisir un nombre entier.'], T, 4, 'Nombre minimal de répétitions',
      'Déterminer un seuil avec des épreuves répétées',
      `${p.s} On note $S$ l'événement « ${C.S} ». Combien de fois au minimum faut-il répéter l'expérience pour que la probabilité que $S$ soit réalisé au moins une fois soit supérieure ou égale à $${c2(th)}$ ?`,
      `$${n}$`,
      [`$${n - 1}$`, `$${n + 1}$`, `$${n + 2}$`],
      'Avec $n$ répétitions indépendantes, la probabilité d\'au moins un succès vaut $1$ moins la probabilité de n\'avoir que des échecs ; on la calcule pour $n = 1, 2, 3\\ldots$ jusqu\'à atteindre le seuil.',
      `La probabilité d'un échec vaut $${this._1TC3_v(qn, p.d).tex}$.`,
      `La probabilité d'au moins un succès vaut $1$ moins la probabilité de n'obtenir que des échecs : ${lines.join(' ; ')}. Avec $${n - 1}$ répétition${n - 1 > 1 ? 's' : ''}, on reste sous $${c2(th)}$ ; le seuil est atteint pour $${n}$ répétitions.`
    );
  },
  // ---- 1TC4 : Croissance linéaire ----
  /** a + b écrit proprement en mode math : _sum(12, -5) -> « 12 - 5 » */
  _1TC4_sum(a, b) { return `${this._int(a)} ${b < 0 ? '-' : '+'} ${this._int(Math.abs(b))}`; },
  /** nombre entre parenthèses s'il est négatif (mode math) */
  _1TC4_pr(x) { return x < 0 ? `(${this._int(x)})` : this._int(x); },
  /** ax + b en mode math (a ≠ 0) et en saisie brute */
  _1TC4_aff(a, b) {
    const c = a === 1 ? '' : a === -1 ? '-' : this.dec(a, 4);
    return b === 0 ? `${c}x` : `${c}x ${b < 0 ? '-' : '+'} ${this.dec(Math.abs(b), 4)}`;
  },
  _1TC4_affIn(a, b) {
    const c = a === 1 ? '' : a === -1 ? '-' : this.decText(a, 4);
    return b === 0 ? `${c}x` : `${c}x${b < 0 ? '-' : '+'}${this.decText(Math.abs(b), 4)}`;
  },
  // Situations de croissance (s = 1) ou de décroissance (s = -1) linéaire
  _1TC4_CTX: [
    { intro: (A, R) => `Une salle d'escalade ouvre avec $${A}$ adhérents ; chaque mois, $${R}$ nouveaux adhérents s'inscrivent et aucun ne part.`,
      def: '$u(n)$ le nombre d\'adhérents $n$ mois après l\'ouverture', unit: 'adhérents', per: 'mois', s: 1,
      u0: [60, 80, 90, 120, 150], r: [6, 8, 9, 12, 15, 18],
      seuil: (S) => `Au bout de combien de mois le nombre d'adhérents dépassera-t-il $${S}$ ?` },
    { intro: (A, R) => `Un lycéen dispose de $${A}$ € sur un livret ; il y dépose $${R}$ € chaque mois et le livret ne rapporte pas d'intérêts.`,
      def: '$u(n)$ la somme disponible, en euros, après $n$ mois', unit: '€', per: 'mois', s: 1,
      u0: [150, 200, 240, 300, 350], r: [20, 25, 30, 35, 40, 45],
      seuil: (S) => `Au bout de combien de mois la somme disponible dépassera-t-elle $${S}$ € ?` },
    { intro: (A, R) => `Un jeune chêne mesure $${A}$ cm lors de sa plantation, puis grandit de $${R}$ cm par an.`,
      def: '$u(n)$ la hauteur du chêne, en cm, $n$ années après la plantation', unit: 'cm', per: 'années', s: 1,
      u0: [40, 50, 60, 75, 80, 90], r: [25, 30, 35, 40, 45],
      seuil: (S) => `Au bout de combien d'années le chêne dépassera-t-il $${S}$ cm de hauteur ?` },
    { intro: (A, R) => `Une cuve de récupération d'eau de pluie contient $${A}$ L. Faute de pluie, on y prélève $${R}$ L chaque jour pour arroser un potager.`,
      def: '$u(n)$ le volume d\'eau, en litres, restant dans la cuve après $n$ jours', unit: 'L', per: 'jours', s: -1,
      u0: [1200, 1500, 1800, 2000, 2400], r: [30, 40, 45, 50, 60, 75],
      seuil: (S) => `Au bout de combien de jours le volume restant passera-t-il sous $${S}$ L ?` },
    { intro: (A, R) => `Un petit glacier de montagne a une épaisseur moyenne de $${A}$ m ; elle diminue de $${R}$ m par an.`,
      def: '$u(n)$ l\'épaisseur moyenne du glacier, en mètres, $n$ années plus tard', unit: 'm', per: 'années', s: -1,
      u0: [60, 75, 80, 90, 120], r: [2, 3, 4],
      seuil: (S) => `Au bout de combien d'années l'épaisseur moyenne passera-t-elle sous $${S}$ m ?` }
  ],
  // Fonctions affines en contexte : [description de f, nom de la variable, a possibles, b possibles, x possibles]
  _1TC4_AFF: [
    { intro: 'Le prix d\'une course de taxi, en euros, est une fonction affine $f$ de la distance parcourue $x$, en km.', a: [1.2, 1.5, 1.6, 1.8, 2], b: [2.5, 3, 3.5, 4, 4.5], x: [3, 4, 5, 6, 8, 10, 12, 15, 20] },
    { intro: 'Le montant annuel d\'une facture d\'eau, en euros, est une fonction affine $f$ du volume consommé $x$, en m³.', a: [3.5, 4, 4.2, 4.5, 5], b: [40, 45, 50, 60, 75], x: [30, 40, 50, 60, 80, 100, 120] },
    { intro: 'La longueur d\'un ressort, en cm, est une fonction affine $f$ de la masse suspendue $x$, en kg.', a: [0.5, 0.8, 1.2, 1.5, 2, 2.5], b: [10, 12, 15, 18, 20], x: [1, 2, 3, 4, 5, 6, 8] },
    { intro: 'Au-dessus d\'une vallée, la température de l\'air, en °C, est modélisée par une fonction affine $f$ de l\'altitude $x$, en km.', a: [-6, -6.5, -7], b: [12, 14, 15, 16, 18, 20], x: [0.5, 1, 1.5, 2, 2.5, 3] }
  ],

  gen_1TC4(tier) {
    const T = '1TC4';
    const I = (x) => this._int(x);
    const D = (x) => this.dec(x, 4);
    const sum = (a, b) => this._1TC4_sum(a, b);
    const pr = (x) => this._1TC4_pr(x);
    const ENT = 'Saisir un nombre entier.';

    if (tier === 1) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // terme de rang n à partir de u(0)
        let u0 = 0; while (u0 === 0) u0 = this.randInt(-20, 90);
        const r = this.randChoice([-9, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15]);
        const n = this.randInt(6, 25);
        const ans = u0 + n * r;
        return this._xa([String(ans), this._VAL], T, 1, 'Terme d\'une suite arithmétique',
          'Calculer un terme d\'une suite arithmétique',
          `La suite $u$ est arithmétique, de premier terme $u(0) = ${u0}$ et de raison $${r}$. Calculer $u(${n})$.`,
          `$${ans}$`,
          [`$${u0 + (n - 1) * r}$`, `$${n * r}$`, `$${u0 + (n + 1) * r}$`, `$${u0 + r}$`],
          'Pour une suite arithmétique, on part de $u(0)$ et on ajoute $n$ fois la raison : $u(n) = u(0) + n \\times r$.',
          `Écris $u(${n}) = ${u0} + ${n} \\times ${pr(r)}$, puis effectue le calcul.`,
          `$u(${n}) = ${u0} + ${n} \\times ${pr(r)} = ${sum(u0, n * r)} = ${ans}$.`
        );
      }
      if (fam === 1) {
        // relation de récurrence d'une situation concrète
        const c = this.randChoice(this._1TC4_CTX);
        const u0 = this.randChoice(c.u0); const r = this.randChoice(c.r);
        const op = c.s > 0 ? '+' : '-';
        return this._xa('keep', T, 1, 'Relation de récurrence',
          'Reconnaître une croissance linéaire',
          `${c.intro(I(u0), I(r))} On note ${c.def}, avec $u(0) = ${I(u0)}$. Quelle relation vérifie la suite $u$ pour tout entier naturel $n$ ?`,
          `$u(n+1) = u(n) ${op} ${I(r)}$`,
          [`$u(n+1) = ${D(1 + c.s * r / 100)} \\times u(n)$`, `$u(n+1) = u(n) ${op} ${I(u0)}$`, `$u(n+1) = ${I(u0)} ${op} ${I(r)}n$`, `$u(n+1) = ${I(r)} \\times u(n)$`],
          'Demande-toi ce qui se passe d\'une étape à la suivante : ajoute-t-on (ou retire-t-on) toujours la même quantité, ou multiplie-t-on par un même nombre ?',
          `Chaque ${c.per === 'mois' ? 'mois' : c.per === 'jours' ? 'jour' : 'année'}, la quantité change de $${I(r)}$ ${c.unit} : exprime $u(n+1)$ à l'aide de $u(n)$.`,
          `Pour passer d'une étape à la suivante, on ${c.s > 0 ? 'ajoute' : 'retire'} toujours $${I(r)}$ : $u(n+1) = u(n) ${op} ${I(r)}$. La suite $u$ est arithmétique de raison $${c.s * r}$ et de premier terme $u(0) = ${I(u0)}$.`
        );
      }
      if (fam === 2) {
        // deux termes consécutifs, puis un terme un peu plus loin
        const k = this.randInt(2, 12);
        const r = this.randChoice([-8, -6, -5, -4, -3, 3, 4, 5, 6, 7, 9, 12]);
        let A = 0; while (A === 0) A = this.randInt(-15, 60);
        const B = A + r; const C = B + r; const ans = C + r;
        return this._xa([String(ans), this._VAL], T, 1, 'Raison et termes suivants',
          'Calculer un terme d\'une suite arithmétique',
          `La suite $u$ est arithmétique et l'on sait que $u(${k}) = ${A}$ et $u(${k + 1}) = ${B}$. Calculer $u(${k + 3})$.`,
          `$${ans}$`,
          [`$${C}$`, `$${B + 3 * r}$`, `$${A + 3}$`, `$${ans + 2 * r}$`],
          'Dans une suite arithmétique, la différence entre deux termes consécutifs est constante : c\'est la raison.',
          `La raison vaut $u(${k + 1}) - u(${k}) = ${B} - ${pr(A)}$ ; ajoute-la autant de fois qu'il le faut à $u(${k + 1})$.`,
          `$r = ${B} - ${pr(A)} = ${r}$. Puis $u(${k + 2}) = ${sum(B, r)} = ${C}$ et $u(${k + 3}) = ${sum(C, r)} = ${ans}$.`
        );
      }
      // sens de variation (suite ou fonction affine)
      const isF = Math.random() < 0.5;
      const r = this.randChoice([-12, -7, -5, -3, -2, -0.5, 0.5, 2, 3, 4, 6, 9]);
      const b = this.randInt(-20, 40) || 5;
      const cr = r > 0;
      if (isF) {
        return this._xa('keep', T, 1, 'Sens de variation d\'une fonction affine',
          'Relier le coefficient directeur et le sens de variation',
          `On considère la fonction affine $f$ définie sur $\\mathbb{R}$ par $f(x) = ${this._1TC4_aff(r, b)}$. Quel est son sens de variation ?`,
          cr ? '$f$ est croissante sur $\\mathbb{R}$' : '$f$ est décroissante sur $\\mathbb{R}$',
          [cr ? '$f$ est décroissante sur $\\mathbb{R}$' : '$f$ est croissante sur $\\mathbb{R}$', '$f$ est constante sur $\\mathbb{R}$', `$f$ change de sens de variation en $x = ${D(b)}$`],
          'Le sens de variation d\'une fonction affine $x \\mapsto ax + b$ ne dépend que du signe de son coefficient directeur $a$.',
          `Le coefficient directeur est $${D(r)}$ : est-il positif ou négatif ?`,
          `Le coefficient directeur $a = ${D(r)}$ est ${cr ? 'positif' : 'négatif'}, donc $f$ est ${cr ? 'croissante' : 'décroissante'} sur $\\mathbb{R}$ (l'ordonnée à l'origine $${D(b)}$ n'intervient pas).`
        );
      }
      const ri = Math.round(r) || 3;
      const cri = ri > 0;
      return this._xa('keep', T, 1, 'Sens de variation d\'une suite arithmétique',
        'Déterminer le sens de variation d\'une suite arithmétique',
        `La suite $u$ est définie par $u(0) = ${b}$ et, pour tout entier naturel $n$, $u(n+1) = u(n) ${ri < 0 ? '-' : '+'} ${Math.abs(ri)}$. Quel est son sens de variation ?`,
        cri ? 'La suite $u$ est croissante' : 'La suite $u$ est décroissante',
        [cri ? 'La suite $u$ est décroissante' : 'La suite $u$ est croissante', 'La suite $u$ est constante', `La suite $u$ est ${b < 0 ? 'croissante' : 'décroissante'} puis ${b < 0 ? 'décroissante' : 'croissante'}`],
        'Une suite arithmétique est croissante si sa raison est positive, décroissante si elle est négative.',
        `Identifie la raison : de combien varie $u(n)$ quand on passe au rang suivant ?`,
        `La suite est arithmétique de raison $${ri}$, ${cri ? 'positive' : 'négative'} : pour tout $n$, $u(n+1) - u(n) = ${ri}$, donc la suite $u$ est ${cri ? 'croissante' : 'décroissante'} (le premier terme n'intervient pas).`
      );
    }

    if (tier === 2) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        // premier terme u(1) : u(n) = u(1) + (n - 1) r
        const ctx = this.randChoice([
          ['Un festival a accueilli', 'spectateurs lors de sa 1re édition', 'spectateurs de plus à chaque édition', 'le nombre de spectateurs de la $n$-ième édition', 'Combien de spectateurs la', 'édition accueillera-t-elle selon ce modèle ?', [1200, 1500, 1800, 2400, 3000], [150, 180, 200, 250, 320]],
          ['Une association a planté', 'arbres la 1re année de son projet', 'arbres de plus chaque année', 'le nombre d\'arbres plantés la $n$-ième année', 'Combien d\'arbres l\'association plantera-t-elle la', 'année du projet selon ce modèle ?', [40, 60, 75, 80, 120], [12, 15, 18, 20, 25]],
          ['Un site de covoiturage a enregistré', 'trajets la 1re semaine', 'trajets de plus chaque semaine', 'le nombre de trajets la $n$-ième semaine', 'Combien de trajets enregistrera-t-il la', 'semaine selon ce modèle ?', [350, 420, 500, 640, 800], [35, 40, 45, 60, 75]]
        ]);
        const u1 = this.randChoice(ctx[6]); const r = this.randChoice(ctx[7]);
        const n = this.randInt(8, 30);
        const ans = u1 + (n - 1) * r;
        return this._xa([String(ans), this._VAL], T, 2, 'Terme de rang n (départ au rang 1)',
          'Calculer un terme d\'une suite arithmétique',
          `${ctx[0]} $${I(u1)}$ ${ctx[1]}. On suppose qu'il y a ensuite $${I(r)}$ ${ctx[2]}. On note $u(n)$ ${ctx[3]}, de sorte que $u(1) = ${I(u1)}$. ${ctx[4]} $${n}$e ${ctx[5]}`,
          `$${I(ans)}$`,
          [`$${I(u1 + n * r)}$`, `$${I(n * r)}$`, `$${I(u1 + (n - 2) * r)}$`, `$${I(u1 * n)}$`],
          'Lorsque la suite commence au rang $1$, on passe de $u(1)$ à $u(n)$ en ajoutant $(n - 1)$ fois la raison : $u(n) = u(1) + (n - 1)r$.',
          `Ici $u(${n}) = ${I(u1)} + (${n} - 1) \\times ${I(r)}$.`,
          `La suite est arithmétique de raison $${I(r)}$ et de premier terme $u(1) = ${I(u1)}$, donc $u(${n}) = ${I(u1)} + ${n - 1} \\times ${I(r)} = ${I(u1)} + ${I((n - 1) * r)} = ${I(ans)}$ (et non $${I(u1 + n * r)}$, qui correspondrait à $${n}$ ajouts de la raison).`
        );
      }
      if (fam === 1) {
        // expression d'une fonction affine à partir de deux valeurs
        const c = this.randChoice(this._1TC4_AFF);
        const a = this.randChoice(c.a); const b = this.randChoice(c.b);
        const [x1, x2] = this.pickDistinct ? this.pickDistinct(c.x, 2).sort((p, q) => p - q) : [c.x[0], c.x[1]];
        const y1 = this._r(a * x1 + b); const y2 = this._r(a * x2 + b);
        const dy = this._r(y2 - y1); const dx = this._r(x2 - x1);
        return this._xa([this._1TC4_affIn(a, b), 'Saisir l\'expression de f(x) sous la forme ax+b (par exemple 2,5x+3).', null, 'developpement'], T, 2, 'Fonction affine définie par deux valeurs',
          'Déterminer une fonction affine à partir de deux valeurs',
          `${c.intro} On sait que $f(${D(x1)}) = ${D(y1)}$ et $f(${D(x2)}) = ${D(y2)}$. Déterminer l'expression de $f(x)$.`,
          `$f(x) = ${this._1TC4_aff(a, b)}$`,
          [`$f(x) = ${this._1TC4_aff(b, a)}$`, `$f(x) = ${this._1TC4_aff(-a, this._r(y1 + a * x1))}$`, `$f(x) = ${this._1TC4_aff(a, this._r(y2 - a * x1))}$`],
          'Le coefficient directeur est le quotient de la variation des images par la variation des abscisses ; on obtient ensuite l\'ordonnée à l\'origine à l\'aide d\'une des deux valeurs.',
          `Calcule $a = \\frac{${D(y2)} - ${this._1TC4_pr(y1)}}{${D(x2)} - ${D(x1)}}$.`,
          `$a = \\frac{${D(y2)} - ${this._1TC4_pr(y1)}}{${D(x2)} - ${D(x1)}} = ${D(dy)} \\div ${D(dx)} = ${D(a)}$. Puis $f(${D(x1)}) = ${D(a)} \\times ${D(x1)} + b = ${D(y1)}$, d'où $b = ${D(y1)} - ${this._1TC4_pr(this._r(a * x1))} = ${D(b)}$. Donc $f(x) = ${this._1TC4_aff(a, b)}$.`
        );
      }
      // raison à partir de deux termes non consécutifs
      const p = this.randInt(1, 6); const q = p + this.randInt(3, 8);
      const r = this.randChoice([-9, -7, -6, -4, -3, 3, 4, 5, 6, 8, 11, 14]);
      let A = 0; while (A === 0) A = this.randInt(-20, 80); const B = A + (q - p) * r;
      return this._xa([String(r), this._VAL], T, 2, 'Raison à partir de deux termes',
        'Déterminer la raison d\'une suite arithmétique',
        `La suite $u$ est arithmétique, avec $u(${p}) = ${A}$ et $u(${q}) = ${B}$. Quelle est sa raison ?`,
        `$${r}$`,
        [`$${B - A}$`, `$${-r}$`, `$${this.frac(B - A, q - p + 1)}$`, `$${this.frac(B, q)}$`],
        'Entre deux termes d\'une suite arithmétique, l\'écart est égal à la raison multipliée par l\'écart entre les rangs.',
        `De $u(${p})$ à $u(${q})$, on ajoute $${q - p}$ fois la raison : $${q - p}r = ${B} - ${pr(A)}$.`,
        `$u(${q}) - u(${p}) = ${q - p}r$, soit $${q - p}r = ${B} - ${pr(A)} = ${B - A}$, donc $r = ${B - A} \\div ${q - p} = ${r}$.`
      );
    }

    if (tier === 3) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        // seuil dans une situation concrète
        const c = this.randChoice(this._1TC4_CTX);
        const u0 = this.randChoice(c.u0); const r = this.randChoice(c.r);
        const k = this.randInt(8, 22);
        const step = u0 >= 500 ? 50 : 10;
        let S = Math.round((u0 + c.s * r * k + c.s * this.randInt(1, r - 1)) / step) * step;
        if (c.s < 0 && S <= 0) S = step;
        let N = 0; while (c.s > 0 ? u0 + r * N <= S : u0 - r * N >= S) N++;
        const lim = this.frac(c.s > 0 ? S - u0 : u0 - S, r);
        const exact = !/frac/.test(lim);
        const ineq = c.s > 0 ? `${I(u0)} + ${I(r)}n > ${I(S)}` : `${I(u0)} - ${I(r)}n < ${I(S)}`;
        return this._xa([String(N), ENT], T, 3, 'Seuil d\'une croissance linéaire',
          'Déterminer un seuil',
          `${c.intro(I(u0), I(r))} On note ${c.def}. ${c.seuil(I(S))}`,
          `$${N}$`,
          [`$${N - 1}$`, `$${N + 1}$`, `$${Math.floor(S / r)}$`, `$${N + 2}$`],
          'Exprime $u(n)$ en fonction de $n$, résous l\'inéquation qui traduit la question, puis retiens le plus petit entier qui convient.',
          `Pour tout $n$, $u(n) = ${c.s > 0 ? sum(u0, r) : sum(u0, -r)}n$ : résous $${ineq}$.`,
          `La suite $u$ est arithmétique de raison $${c.s * r}$, donc $u(n) = ${c.s > 0 ? sum(u0, r) : sum(u0, -r)}n$. Puis $${ineq} \\iff ${I(r)}n > ${I(c.s > 0 ? S - u0 : u0 - S)} \\iff n > ${lim}$.${exact ? ` Pour $n = ${lim}$, on a exactement $u(n) = ${I(S)}$, ce qui ne suffit pas.` : ''} Le plus petit entier qui convient est $${N}$ : $u(${N - 1}) = ${I(u0 + c.s * r * (N - 1))}$ et $u(${N}) = ${I(u0 + c.s * r * N)}$. Réponse : au bout de $${N}$ ${c.per}.`
        );
      }
      if (fam === 1) {
        // terme lointain à partir de deux termes
        const p = this.randInt(2, 6); const q = p + this.randInt(3, 6);
        const r = this.randChoice([-7, -5, -4, -3, -2, 2, 3, 4, 5, 6, 8, 12]);
        let A = 0; while (A === 0) A = this.randInt(-30, 90); const B = A + (q - p) * r;
        const m = this.randInt(20, 60);
        const ans = A + (m - p) * r;
        return this._xa([String(ans), this._VAL], T, 3, 'Terme lointain à partir de deux termes',
          'Calculer un terme d\'une suite arithmétique',
          `La suite $u$ est arithmétique, avec $u(${p}) = ${A}$ et $u(${q}) = ${B}$. Calculer $u(${m})$.`,
          `$${ans}$`,
          [`$${A + m * r}$`, `$${B + (m - p) * r}$`, `$${A + (m - p) * (B - A)}$`, `$${ans - r}$`],
          'Commence par la raison : l\'écart entre deux termes est égal à la raison multipliée par l\'écart entre leurs rangs. Repars ensuite d\'un terme connu.',
          `$${q - p}r = ${B} - ${pr(A)}$ ; ensuite, de $u(${p})$ à $u(${m})$, on ajoute $${m - p}$ fois la raison.`,
          `$${q - p}r = ${B} - ${pr(A)} = ${B - A}$, donc $r = ${r}$. Puis $u(${m}) = u(${p}) + (${m} - ${p}) \\times ${pr(r)} = ${A} + ${m - p} \\times ${pr(r)} = ${ans}$.`
        );
      }
      // comparer deux tarifs affines
      const [serv, unit] = this.randChoice([['Un cinéma', 'séances'], ['Une piscine', 'entrées'], ['Un musée', 'visites'], ['Une patinoire', 'entrées']]);
      let a1; let d; let a2; let b2; let N;
      do {
        a1 = this.randChoice([7, 8, 9, 10, 11, 12]);
        d = this.randChoice([1.5, 2, 2.5, 3, 4]);
        a2 = this._r(a1 - d);
        b2 = this.randChoice([15, 20, 25, 30, 35, 40, 45, 50]);
        N = Math.floor(b2 / d + 1e-9) + 1;
      } while ([a1, a2, b2, d].includes(N));
      const lim = this._r(b2 / d);
      const eq = Math.abs(lim - Math.round(lim)) < 1e-9;
      const limTex = eq ? D(lim) : this.isDecimal(lim, 2) ? D(lim) : this.frac(b2 * 2, Math.round(d * 2));
      return this._xa([String(N), ENT], T, 3, 'Comparer deux tarifs affines',
        'Modéliser une situation de croissance linéaire',
        `${serv} propose deux tarifs : sans abonnement, $${D(a1)}$ € par ${unit === 'séances' ? 'séance' : unit === 'visites' ? 'visite' : 'entrée'} ; avec une carte annuelle à $${b2}$ €, $${D(a2)}$ € par ${unit === 'séances' ? 'séance' : unit === 'visites' ? 'visite' : 'entrée'}. À partir de combien ${/^[aeiouéh]/.test(unit) ? "d'" : "de "}${unit} dans l'année la carte est-elle strictement plus avantageuse ?`,
        `$${N}$`,
        [`$${N - 1}$`, `$${N + 1}$`, `$${Math.floor(b2 / a2) + 1 === N ? N + 2 : Math.floor(b2 / a2) + 1}$`],
        'Exprime le coût de chaque tarif en fonction du nombre $x$ de passages (deux fonctions affines), puis résous l\'inéquation « tarif avec carte < tarif sans carte ».',
        `Sans carte : $f(x) = ${D(a1)}x$ ; avec carte : $g(x) = ${D(a2)}x + ${b2}$. Résous $${D(a2)}x + ${b2} < ${D(a1)}x$.`,
        `$f(x) = ${D(a1)}x$ et $g(x) = ${D(a2)}x + ${b2}$. Puis $${D(a2)}x + ${b2} < ${D(a1)}x \\iff ${b2} < ${D(d)}x \\iff x > ${limTex}$.${eq ? ` Pour $x = ${D(lim)}$, les deux tarifs coûtent autant, ce qui ne suffit pas.` : ''} La carte est strictement plus avantageuse à partir de $${N}$ ${unit}.`
      );
    }

    // Palier 4 : problèmes
    const fam = this.randInt(0, 2);
    if (fam === 0) {
      // deux évolutions linéaires qui se croisent
      const [pop, u] = this.randChoice([['La commune A', 'habitants'], ['Le club A', 'licenciés'], ['Le lycée A', 'élèves']]);
      const big = u === 'habitants';
      const A0 = big ? this.randChoice([3200, 3600, 4000, 4500]) : this.randChoice([320, 360, 400, 450]);
      const B0 = A0 + (big ? this.randChoice([600, 800, 900, 1200]) : this.randChoice([60, 80, 90, 120]));
      const ra = big ? this.randChoice([80, 90, 110, 120, 150]) : this.randChoice([8, 9, 11, 12, 15]);
      const rb = big ? this.randChoice([-40, -25, 10, 20, 30]) : this.randChoice([-4, -3, 2, 3, 5]);
      const dif = ra - rb;
      let N = 0; while (A0 + ra * N <= B0 + rb * N) N++;
      const year = 2026 + N;
      const lim = this.frac(B0 - A0, dif);
      const exact = !/frac/.test(lim);
      const name = pop.replace(' A', '');
      return this._xa([String(year), 'Saisir l\'année (par exemple 2035).'], T, 4, 'Deux croissances linéaires',
        'Modéliser deux évolutions linéaires et comparer',
        `En 2026, ${pop.charAt(0).toLowerCase() + pop.slice(1)} compte $${I(A0)}$ ${u} et gagne $${ra}$ ${u} par an ; ${name.toLowerCase()} B compte $${I(B0)}$ ${u} et ${rb < 0 ? `perd $${-rb}$` : `gagne $${rb}$`} ${u} par an. On suppose que ces évolutions se poursuivent. En quelle année ${name.toLowerCase()} A comptera-t-${/La /.test(pop) ? 'elle' : 'il'} strictement plus ${/^[aeiouéh]/.test(u) ? "d'" : "de "}${u} que ${name.toLowerCase()} B ?`,
        `$${year}$`,
        [`$${year - 1}$`, `$${year + 1}$`, `$${2026 + Math.round((B0 - A0) / ra)}$`],
        'Modélise chaque effectif par une suite arithmétique ($n$ = nombre d\'années après 2026), puis résous l\'inéquation qui compare les deux expressions.',
        `$a(n) = ${I(A0)} + ${ra}n$ et $b(n) = ${sum(B0, rb)}n$ : résous $a(n) > b(n)$.`,
        `Avec $n$ le nombre d'années après 2026 : $a(n) = ${I(A0)} + ${ra}n$ et $b(n) = ${sum(B0, rb)}n$. Puis $a(n) > b(n) \\iff ${dif}n > ${I(B0 - A0)} \\iff n > ${lim}$.${exact ? ` Pour $n = ${lim}$, les deux effectifs sont égaux, ce qui ne suffit pas.` : ''} Le plus petit entier qui convient est $n = ${N}$ : $a(${N}) = ${I(A0 + ra * N)}$ et $b(${N}) = ${I(B0 + rb * N)}$. C'est donc en $${year}$.`
      );
    }
    if (fam === 1) {
      // interpolation / extrapolation affine : antécédent d'une valeur
      const C = this.randChoice([
        { k: 'alt', a: this.randChoice([-0.006, -0.0065]), b: this.randChoice([14, 15, 16, 18, 20]), xs: [200, 400, 600, 800, 1000, 1200, 1400], xr: [2000, 2400, 2600, 3000] },
        { k: 'taxi', a: this.randChoice([1.5, 2, 2.5]), b: this.randChoice([3, 4, 5]), xs: [4, 6, 8, 10, 12], xr: [18, 22, 24, 26, 30] },
        { k: 'res', a: this.randChoice([0.5, 1.5, 2, 2.5]), b: this.randChoice([10, 12, 15, 20]), xs: [1, 2, 3, 4, 5], xr: [8, 10, 12, 14] }
      ]);
      const [x1, x2] = this.pickDistinct(C.xs, 2).sort((p, q) => p - q);
      const X = this.randChoice(C.xr);
      const y1 = this._r(C.a * x1 + C.b); const y2 = this._r(C.a * x2 + C.b); const Y = this._r(C.a * X + C.b);
      const txt = {
        alt: [`Lors d'une randonnée, on relève une température de $${D(y1)}$ °C à $${I(x1)}$ m d'altitude et de $${D(y2)}$ °C à $${I(x2)}$ m. On admet que la température est une fonction affine $f$ de l'altitude $x$ (en m).`, `À quelle altitude, en m, la température est-elle de $${D(Y)}$ °C selon ce modèle ?`, 'm'],
        taxi: [`Une course de taxi de $${x1}$ km coûte $${D(y1)}$ € et une course de $${x2}$ km coûte $${D(y2)}$ €. Le prix est une fonction affine $f$ de la distance $x$ (en km).`, `Quelle distance, en km, peut-on parcourir pour $${D(Y)}$ € ?`, 'km'],
        res: [`Un ressort mesure $${D(y1)}$ cm lorsqu'on y suspend $${x1}$ kg et $${D(y2)}$ cm avec $${x2}$ kg. Sa longueur est une fonction affine $f$ de la masse suspendue $x$ (en kg).`, `Quelle masse, en kg, faut-il suspendre pour que le ressort mesure $${D(Y)}$ cm ?`, 'kg']
      }[C.k];
      return this._xa([this.decText(X), this._VAL], T, 4, 'Interpolation et extrapolation affine',
        'Utiliser un modèle affine pour prévoir',
        `${txt[0]} ${txt[1]}`,
        `$${I(X)}$`,
        [`$${I(this._r((Y - C.b) / -C.a)) === I(X) ? I(X * 2) : I(this._r((Y - C.b) / -C.a))}$`, `$${I(this._r(C.a * Y + C.b))}$`, `$${I(this._r(Y / C.a)) === I(X) ? I(X + x1) : I(this._r(Math.abs(Y / C.a)))}$`],
        'Détermine l\'expression de la fonction affine (coefficient directeur, puis ordonnée à l\'origine), puis résous l\'équation $f(x) =$ valeur imposée.',
        `Le coefficient directeur vaut $\\frac{${D(y2)} - ${this._1TC4_pr(y1)}}{${I(x2)} - ${I(x1)}}$.`,
        `$a = \\frac{${D(y2)} - ${this._1TC4_pr(y1)}}{${I(x2)} - ${I(x1)}} = ${D(this._r(y2 - y1))} \\div ${I(x2 - x1)} = ${D(C.a)}$, puis $b = ${D(y1)} - ${this._1TC4_pr(C.a)} \\times ${I(x1)} = ${D(C.b)}$ : $f(x) = ${this._1TC4_aff(C.a, C.b)}$. Enfin $${this._1TC4_aff(C.a, C.b)} = ${D(Y)} \\iff ${D(C.a)}x = ${D(this._r(Y - C.b))} \\iff x = ${I(X)}$. Réponse : $${I(X)}$ ${txt[2]}.`
      );
    }
    // seuil avec premier terme u(1) et réponse en année
    const C = this.randChoice([
      { s: -1, intro: (A, R) => `En 2026, une usine a émis $${A}$ tonnes de CO$_2$. Grâce à un plan de réduction, ses émissions baissent ensuite de $${R}$ tonnes chaque année.`, q: 'les émissions de la $n$-ième année du plan', u1: [5200, 4800, 6000, 4500], r: [150, 180, 200, 240], ask: (S) => `En quelle année les émissions passeront-elles sous $${S}$ tonnes ?` },
      { s: 1, intro: (A, R) => `En 2026, une coopérative a produit $${A}$ tonnes de pommes biologiques. Sa production augmente ensuite de $${R}$ tonnes chaque année.`, q: 'la production de la $n$-ième année', u1: [320, 400, 450, 500], r: [12, 15, 18, 25], ask: (S) => `En quelle année la production dépassera-t-elle $${S}$ tonnes ?` },
      { s: 1, intro: (A, R) => `En 2026, un réseau de bornes de recharge compte $${A}$ bornes. On en installe ensuite $${R}$ nouvelles chaque année.`, q: 'le nombre de bornes la $n$-ième année', u1: [850, 900, 1200, 1500], r: [60, 75, 80, 120], ask: (S) => `En quelle année le réseau comptera-t-il plus de $${S}$ bornes ?` }
    ]);
    const u1 = this.randChoice(C.u1); const r = this.randChoice(C.r);
    const k = this.randInt(6, 15);
    const step = 50;
    const S = Math.round((u1 + C.s * r * k + C.s * this.randInt(1, r - 1)) / step) * step;
    let n = 1; while (C.s > 0 ? u1 + r * (n - 1) <= S : u1 - r * (n - 1) >= S) n++;
    const year = 2025 + n;
    const lim = this.frac(C.s > 0 ? S - u1 : u1 - S, r);
    const exact = !/frac/.test(lim);
    const ineq = C.s > 0 ? `${I(u1)} + ${r}(n - 1) > ${I(S)}` : `${I(u1)} - ${r}(n - 1) < ${I(S)}`;
    return this._xa([String(year), 'Saisir l\'année (par exemple 2035).'], T, 4, 'Seuil et année correspondante',
      'Déterminer un seuil',
      `${C.intro(I(u1), r)} On note $u(n)$ ${C.q}, de sorte que $u(1)$ correspond à 2026. ${C.ask(I(S))}`,
      `$${year}$`,
      [`$${year - 1}$`, `$${year + 1}$`, `$${2026 + n}$`],
      'Avec un premier terme $u(1)$, on a $u(n) = u(1) + (n - 1)r$ ; résous l\'inéquation, puis traduis le rang trouvé en année (attention au décalage).',
      `$u(n) = ${I(u1)} ${C.s > 0 ? '+' : '-'} ${r}(n - 1)$ ; résous $${ineq}$.`,
      `$u(n) = ${I(u1)} ${C.s > 0 ? '+' : '-'} ${r}(n - 1)$. Puis $${ineq} \\iff ${r}(n - 1) > ${I(C.s > 0 ? S - u1 : u1 - S)} \\iff n - 1 > ${lim}$.${exact ? ` Pour $n - 1 = ${lim}$, on obtient exactement $${I(S)}$, ce qui ne suffit pas.` : ''} Le plus petit entier qui convient est $n = ${n}$ ($u(${n}) = ${I(u1 + C.s * r * (n - 1))}$, alors que $u(${n - 1}) = ${I(u1 + C.s * r * (n - 2))}$). Le rang $1$ correspond à 2026, donc le rang $${n}$ correspond à $2025 + ${n} = ${year}$.`
    );
  },

  // ---- 1TC5 : Modèles quadratiques ----
  /** facteur (x - r) en mode math : « x - 3 », « x + 2 », « x » si r = 0 */
  _1TC5_fx(r) { return r === 0 ? 'x' : `x ${r < 0 ? '+' : '-'} ${this.dec(Math.abs(r), 4)}`; },
  /** a(x - x1)(x - x2) en mode math, sans « 1( », avec « x(x - 5) » si une racine est nulle */
  _1TC5_fact(a, x1, x2) {
    const c = a === 1 ? '' : a === -1 ? '-' : this.dec(a, 4);
    if (x1 === 0) return `${c}x(${this._1TC5_fx(x2)})`;
    if (x2 === 0) return `${c}x(${this._1TC5_fx(x1)})`;
    return `${c}(${this._1TC5_fx(x1)})(${this._1TC5_fx(x2)})`;
  },
  /** même forme en saisie brute : « -2(x-1)(x-5) », « 0,5x(x-8) » */
  _1TC5_factIn(a, x1, x2) {
    const c = a === 1 ? '' : a === -1 ? '-' : this.decText(a, 4);
    const f = (r) => (r === 0 ? 'x' : `x${r < 0 ? '+' : '-'}${this.decText(Math.abs(r), 4)}`);
    if (x1 === 0) return `${c}x(${f(x2)})`;
    if (x2 === 0) return `${c}x(${f(x1)})`;
    return `${c}(${f(x1)})(${f(x2)})`;
  },
  /** ax^2 + bx + c en mode math (a ≠ 0) */
  _1TC5_tri(a, b, c) {
    const lead = a === 1 ? '' : a === -1 ? '-' : this.dec(a, 4);
    let s = `${lead}x^2`;
    if (b) s += ` ${b < 0 ? '-' : '+'} ${Math.abs(b) === 1 ? '' : this.dec(Math.abs(b), 4)}x`;
    if (c) s += ` ${c < 0 ? '-' : '+'} ${this.dec(Math.abs(c), 4)}`;
    return s;
  },
  /** deux racines distinctes triées */
  _1TC5_roots(min = -6, max = 7) {
    let x1; let x2;
    do { x1 = this.randInt(min, max); x2 = this.randInt(min, max); } while (x1 === x2);
    return x1 < x2 ? [x1, x2] : [x2, x1];
  },

  gen_1TC5(tier) {
    const T = '1TC5';
    const D = (x) => this.dec(x, 4);
    const I = (x) => this._int(x);
    const pr = (x) => (x < 0 ? `(${D(x)})` : D(x));
    const F = (a, x1, x2) => this._1TC5_fact(a, x1, x2);
    const val = (a, x1, x2, x) => this._r(a * (x - x1) * (x - x2));
    const NEG = '\\left]-\\infty ; ';
    const POS = ' ; +\\infty\\right[';
    const ca = (p) => (p === 1 ? 'a' : p === -1 ? '-a' : `${p}a`);
    const COUPLE = 'Saisir les coordonnées sous la forme (x ; y), par exemple (2 ; -4,5).';

    if (tier === 1) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // racines d'une forme factorisée
        const [x1, x2] = this._1TC5_roots();
        const a = this.randChoice([-3, -2, -1, 2, 3, 4, 5, -0.5, 0.5]);
        const sw = Math.random() < 0.5;
        const fx = sw ? F(a, x2, x1) : F(a, x1, x2);
        return this._xa('keep', T, 1, 'Racines d\'une forme factorisée',
          'Lire les racines d\'une fonction donnée sous forme factorisée',
          `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = ${fx}$. Quelles sont les solutions de l'équation $f(x) = 0$ ?`,
          `$${x1}$ et $${x2}$`,
          [`$${-x2}$ et $${-x1}$`, a === x1 || a === x2 ? `$${D(a)}$ seulement` : `$${D(a)}$, $${x1}$ et $${x2}$`,`$${x1}$ et $${-x2}$`, `$${-x1}$ et $${x2}$`],
          'Un produit de facteurs est nul si, et seulement si, l\'un de ses facteurs est nul ; le coefficient constant devant les parenthèses ne s\'annule jamais.',
          `Résous séparément $${this._1TC5_fx(x1)} = 0$ et $${this._1TC5_fx(x2)} = 0$.`,
          `D'après la règle du produit nul, $f(x) = 0$ lorsque $${this._1TC5_fx(x1)} = 0$, soit $x = ${x1}$, ou lorsque $${this._1TC5_fx(x2)} = 0$, soit $x = ${x2}$. Le facteur $${D(a)}$ n'est jamais nul. Les solutions sont $${x1}$ et $${x2}$.`
        );
      }
      if (fam === 1) {
        // allure de la parabole de ax^2 + c
        const a = this.randChoice([-3, -2, -1, -0.5, 0.5, 1, 2, 4]);
        const c = this.randChoice([-6, -4, -3, -1, 0, 1, 2, 5, 7]);
        const up = a > 0;
        const top = `$\\left(0 ; ${c}\\right)$`;
        return this._xa('keep', T, 1, 'Allure d\'une parabole',
          'Associer une parabole à une fonction x ↦ ax² + c',
          `La courbe représentative de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = ${this._1TC5_tri(a, 0, c)}$ est une parabole. Laquelle de ces descriptions est correcte ?`,
          `Parabole tournée vers ${up ? 'le haut' : 'le bas'}, de sommet ${top}`,
          [`Parabole tournée vers ${up ? 'le bas' : 'le haut'}, de sommet ${top}`, `Parabole tournée vers ${up ? 'le haut' : 'le bas'}, de sommet $\\left(${c} ; 0\\right)$`, `Parabole tournée vers ${up ? 'le bas' : 'le haut'}, de sommet $\\left(0 ; ${D(a)}\\right)$`],
          'L\'orientation de la parabole dépend du signe du coefficient de $x^2$ ; la courbe est symétrique par rapport à l\'axe des ordonnées, donc son sommet a pour abscisse $0$.',
          `Le coefficient de $x^2$ vaut $${D(a)}$ ; calcule ensuite $f(0)$.`,
          `Le coefficient de $x^2$ est $${D(a)}$, ${up ? 'positif : la parabole est tournée vers le haut' : 'négatif : la parabole est tournée vers le bas'}. Elle est symétrique par rapport à l'axe des ordonnées et $f(0) = ${c}$ : le sommet est ${top}${up ? ', point le plus bas de la courbe' : ', point le plus haut de la courbe'}.`
        );
      }
      if (fam === 2) {
        // image par une forme factorisée
        const [x1, x2] = this._1TC5_roots(-5, 6);
        const a = this.randChoice([-3, -2, -1, 2, 3, 0.5]);
        let x0; do { x0 = this.randInt(-4, 7); } while (x0 === x1 || x0 === x2);
        const ans = val(a, x1, x2, x0);
        return this._xa([this.decText(ans), this._VAL], T, 1, 'Image par une forme factorisée',
          'Calculer une image à partir de la forme factorisée',
          `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = ${F(a, x1, x2)}$. Calculer $f(${x0})$.`,
          `$${D(ans)}$`,
          [`$${D(-ans)}$`, `$${D(this._r((x0 - x1) * (x0 - x2)))}$`, `$${D(this._r(a * (x0 + x1) * (x0 + x2)))}$`, `$${D(this._r(a * (x0 - x1) + (x0 - x2)))}$`],
          'On remplace $x$ par la valeur donnée dans chaque facteur, puis on multiplie les nombres obtenus (attention aux signes).',
          `Calcule d'abord chacune des parenthèses pour $x = ${x0}$.`,
          `$f(${x0}) = ${D(a)} \\times ${pr(x0 - x1)} \\times ${pr(x0 - x2)} = ${D(ans)}$.`
        );
      }
      // associer une expression à une parabole décrite
      const [x1, x2] = this._1TC5_roots(-5, 6);
      const a = this.randChoice([-3, -2, -1, 1, 2, 3]);
      const up = a > 0;
      // racines opposées : (x - r)(x + r) et (x + r)(x - r) sont la même fonction ; on oppose alors
      // la confusion x^2 - r^2 / x^2 + r^2 (parabole qui ne coupe pas l'axe des abscisses)
      const opp = x1 === -x2;
      const sq = (k) => `${k === 1 ? '' : k === -1 ? '-' : D(k)}(x^2 + ${x2 * x2})`;
      const wrong = opp ? [F(-a, x1, x2), sq(a), sq(-a)] : [F(-a, x1, x2), F(a, -x1, -x2), F(-a, -x1, -x2)];
      return this._xa('keep', T, 1, 'Expression d\'une parabole décrite',
        'Associer une parabole à une forme factorisée',
        `Une parabole tournée vers ${up ? 'le haut' : 'le bas'} coupe l'axe des abscisses aux points d'abscisses $${x1}$ et $${x2}$. Laquelle de ces fonctions peut-elle représenter ?`,
        `$f(x) = ${F(a, x1, x2)}$`,
        wrong.map((w) => `$f(x) = ${w}$`),
        'Les abscisses des points d\'intersection avec l\'axe des abscisses sont les racines ; le signe du coefficient placé devant les parenthèses donne l\'orientation de la parabole.',
        `Cherche une expression qui s'annule en $${x1}$ et en $${x2}$, puis regarde le signe du coefficient devant les parenthèses.`,
        `$${F(a, x1, x2)}$ s'annule pour $x = ${x1}$ et pour $x = ${x2}$ (produit nul), et son coefficient $${a}$ est ${up ? 'positif : la parabole est tournée vers le haut' : 'négatif : la parabole est tournée vers le bas'}. ${opp ? `En revanche, $x^2 + ${x2 * x2}$ est toujours strictement positif : $${sq(a)}$ et $${sq(-a)}$ ne s'annulent jamais.` : `L'expression $${F(a, -x1, -x2)}$, elle, s'annule en $${-x1}$ et en $${-x2}$.`}`
      );
    }

    if (tier === 2) {
      const fam = this.randInt(0, 3);
      const [x1, x2] = this._1TC5_roots();
      const a = this.randChoice([-3, -2, -1, -0.5, 0.5, 1, 2, 3]);
      const al = this._r((x1 + x2) / 2);
      const be = val(a, x1, x2, al);
      if (fam === 0) {
        return this._xa([this.decText(al), this._VAL], T, 2, 'Abscisse du sommet',
          'Déterminer l\'axe de symétrie d\'une parabole',
          `On considère $f(x) = ${F(a, x1, x2)}$. Quelle est l'abscisse du sommet de la parabole représentant $f$ ?`,
          `$${D(al)}$`,
          [`$${D(-al)}$`, `$${D(this._r((x2 - x1) / 2))}$`, `$${D(x1 + x2)}$`, `$${D(be)}$`],
          'La parabole est symétrique par rapport à la droite verticale qui passe au milieu des deux racines : l\'abscisse du sommet est la moyenne des racines.',
          `Les racines sont $${x1}$ et $${x2}$ ; calcule leur moyenne.`,
          `$f$ s'annule en $${x1}$ et en $${x2}$. Par symétrie, l'abscisse du sommet est $\\alpha = \\frac{${x1} + ${pr(x2)}}{2} = ${D(al)}$ ; l'axe de symétrie est la droite d'équation $x = ${D(al)}$.`
        );
      }
      if (fam === 1) {
        return this._xa([`(${this.decText(al)};${this.decText(be)})`, COUPLE], T, 2, 'Coordonnées du sommet',
          'Déterminer le sommet d\'une parabole',
          `On considère $f(x) = ${F(a, x1, x2)}$. Quelles sont les coordonnées du sommet $S$ de la parabole représentant $f$ ?`,
          `$S\\left(${D(al)} ; ${D(be)}\\right)$`,
          [`$S\\left(${D(al)} ; ${D(-be)}\\right)$`, `$S\\left(${D(be)} ; ${D(al)}\\right)$`, `$S\\left(${D(-al)} ; ${D(be)}\\right)$`],
          'L\'abscisse du sommet est la moyenne des racines ; son ordonnée est l\'image de cette abscisse.',
          `L'abscisse du sommet est $\\alpha = \\frac{${x1} + ${pr(x2)}}{2}$ ; calcule ensuite $f(\\alpha)$.`,
          `Les racines sont $${x1}$ et $${x2}$, donc $\\alpha = \\frac{${x1} + ${pr(x2)}}{2} = ${D(al)}$. Puis $f(${D(al)}) = ${D(a)} \\times ${pr(this._r(al - x1))} \\times ${pr(this._r(al - x2))} = ${D(be)}$. Le sommet est $S\\left(${D(al)} ; ${D(be)}\\right)$, ${a > 0 ? 'minimum' : 'maximum'} de $f$ puisque $${D(a)} ${a > 0 ? '> 0' : '< 0'}$.`
        );
      }
      if (fam === 2) {
        // signe : ensemble où f(x) >= 0
        const inside = `$\\left[${x1} ; ${x2}\\right]$`;
        const outside = `$${NEG}${x1}\\right] \\cup \\left[${x2}${POS}$`;
        return this._xa('keep', T, 2, 'Signe d\'une forme factorisée',
          'Déterminer le signe d\'une fonction donnée sous forme factorisée',
          `On considère $f(x) = ${F(a, x1, x2)}$. Sur quel ensemble a-t-on $f(x) \\geqslant 0$ ?`,
          a > 0 ? outside : inside,
          [a > 0 ? inside : outside, `$\\left[${-x2} ; ${-x1}\\right]$`, a > 0 ? `$\\left]${x1} ; ${x2}\\right[$` : `$${NEG}${x1}\\right[ \\cup \\left]${x2}${POS}$`],
          'Une expression $a(x - x_1)(x - x_2)$ est du signe de $a$ à l\'extérieur des racines et du signe contraire entre les racines.',
          `Les racines sont $${x1}$ et $${x2}$ et le coefficient $a$ vaut $${D(a)}$.`,
          `Les racines sont $${x1}$ et $${x2}$ et $a = ${D(a)}$ est ${a > 0 ? 'positif' : 'négatif'}. Donc $f(x)$ est ${a > 0 ? 'positif à l\'extérieur des racines et négatif entre elles' : 'négatif à l\'extérieur des racines et positif entre elles'}, et nul en $${x1}$ et $${x2}$ : $f(x) \\geqslant 0$ sur ${a > 0 ? outside : inside}.`
        );
      }
      // sens de variation
      const inc = a > 0 ? `$\\left[${D(al)}${POS}$` : `$${NEG}${D(al)}\\right]$`;
      const dec = a > 0 ? `$${NEG}${D(al)}\\right]$` : `$\\left[${D(al)}${POS}$`;
      return this._xa('keep', T, 2, 'Sens de variation',
        'Dresser le tableau de variations d\'une fonction du second degré',
        `On considère $f(x) = ${F(a, x1, x2)}$. Sur quel intervalle la fonction $f$ est-elle croissante ?`,
        inc,
        [dec, `$\\left[${x1} ; ${x2}\\right]$`, a > 0 ? `$\\left[${x2}${POS}$` : `$${NEG}${x1}\\right]$`],
        'Le sommet de la parabole a pour abscisse la moyenne des racines ; la fonction change de sens de variation en cette abscisse, dans un sens qui dépend du signe de $a$.',
        `L'abscisse du sommet est $\\frac{${x1} + ${pr(x2)}}{2}$ ; la parabole est tournée vers ${a > 0 ? 'le haut' : 'le bas'}.`,
        `L'abscisse du sommet est $\\alpha = \\frac{${x1} + ${pr(x2)}}{2} = ${D(al)}$. Comme $a = ${D(a)}$ est ${a > 0 ? 'positif, $f$ est décroissante puis croissante' : 'négatif, $f$ est croissante puis décroissante'} : $f$ est croissante sur ${inc} et décroissante sur ${dec}.`
      );
    }

    if (tier === 3) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // axe de symétrie de ax^2 + bx + c en résolvant f(x) = c
        const a = this.randChoice([-3, -2, -1, 1, 2, 3, -0.5, 0.5]);
        const al = this.randChoice([-4, -3, -2, -1, 1, 2, 3, 4, 5]);
        const b = this._r(-2 * a * al);
        let c = 0; while (c === 0) c = this.randInt(-9, 12);
        const lead = a === 1 ? '' : a === -1 ? '-' : D(a);
        const lin = `${lead}x ${b < 0 ? '-' : '+'} ${D(Math.abs(b))}`;
        return this._xa([String(al), this._VAL], T, 3, 'Axe de symétrie sans formule',
          'Déterminer l\'axe de symétrie à l\'aide de deux points de même ordonnée',
          `On considère $f(x) = ${this._1TC5_tri(a, b, c)}$. En résolvant l'équation $f(x) = ${c}$, déterminer l'abscisse $\\alpha$ du sommet de la parabole représentant $f$.`,
          `$${al}$`,
          [`$${2 * al}$`, `$${-al}$`, `$${D(this._r(-b))}$`, `$${D(this._r(b / (2 * a)))}$`],
          'Deux points de la parabole qui ont la même ordonnée sont symétriques par rapport à l\'axe : l\'axe passe au milieu de leurs abscisses.',
          `$f(x) = ${c} \\iff ${this._1TC5_tri(a, b, 0)} = 0$ : factorise par $x$.`,
          `$f(x) = ${c} \\iff ${this._1TC5_tri(a, b, 0)} = 0 \\iff x(${lin}) = 0$, donc $x = 0$ ou $x = ${2 * al}$. Les points d'abscisses $0$ et $${2 * al}$ ont la même ordonnée $${c}$ : ils sont symétriques par rapport à l'axe de la parabole. Donc $\\alpha = \\frac{0 + ${pr(2 * al)}}{2} = ${al}$ : l'axe de symétrie est la droite d'équation $x = ${al}$.`
        );
      }
      if (fam === 1) {
        // inéquation produit
        const [x1, x2] = this._1TC5_roots();
        const a = this.randChoice([-3, -2, -1, 1, 2, 3, 0.5]);
        const op = this.randChoice(['\\geqslant', '\\leqslant', '>', '<']);
        const wantPos = op === '\\geqslant' || op === '>';
        const strict = op === '>' || op === '<';
        const posOutside = a > 0;
        const outside = strict ? `$S = ${NEG}${x1}\\right[ \\cup \\left]${x2}${POS}$` : `$S = ${NEG}${x1}\\right] \\cup \\left[${x2}${POS}$`;
        const inside = strict ? `$S = \\left]${x1} ; ${x2}\\right[$` : `$S = \\left[${x1} ; ${x2}\\right]$`;
        const outside2 = !strict ? `$S = ${NEG}${x1}\\right[ \\cup \\left]${x2}${POS}$` : `$S = ${NEG}${x1}\\right] \\cup \\left[${x2}${POS}$`;
        const inside2 = !strict ? `$S = \\left]${x1} ; ${x2}\\right[$` : `$S = \\left[${x1} ; ${x2}\\right]$`;
        const ans = wantPos === posOutside ? outside : inside;
        return this._xa(null, T, 3, 'Inéquation et forme factorisée',
          'Résoudre une inéquation à l\'aide d\'une forme factorisée',
          `Résoudre dans $\\mathbb{R}$ l'inéquation $${F(a, x1, x2)} ${op} 0$.`,
          ans,
          [ans === outside ? inside : outside, ans === outside ? outside2 : inside2, `$S = \\left[${-x2} ; ${-x1}\\right]$`],
          'Une expression $a(x - x_1)(x - x_2)$ est du signe de $a$ à l\'extérieur des racines et du signe contraire entre elles ; attention aux crochets selon que l\'inégalité est stricte ou large.',
          `Les racines sont $${x1}$ et $${x2}$, et le coefficient devant les parenthèses est ${a > 0 ? 'positif' : 'négatif'}.`,
          `Les racines sont $${x1}$ et $${x2}$. Comme $${D(a)}$ est ${a > 0 ? 'positif' : 'négatif'}, l'expression est ${a > 0 ? 'positive' : 'négative'} à l'extérieur de l'intervalle $\\left[${x1} ; ${x2}\\right]$ et ${a > 0 ? 'négative' : 'positive'} entre les racines, où elle s'annule. ${strict ? 'L\'inégalité est stricte : les racines sont exclues.' : 'L\'inégalité est large : les racines sont incluses.'} ${ans}.`
        );
      }
      if (fam === 2) {
        // extremum
        let x1; let x2;
        do { [x1, x2] = this._1TC5_roots(-6, 8); } while ((x2 - x1) % 2 !== 0);
        const a = this.randChoice([-3, -2, -1, -0.5, 0.5, 1, 2, 3]);
        const al = (x1 + x2) / 2;
        const be = val(a, x1, x2, al);
        const kind = a > 0 ? 'minimum' : 'maximum';
        return this._xa([this.decText(be), this._VAL], T, 3, 'Extremum d\'un modèle factorisé',
          'Déterminer l\'extremum d\'une fonction du second degré',
          `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = ${F(a, x1, x2)}$. Elle admet un ${kind}. Quelle est la valeur de ce ${kind} ?`,
          `$${D(be)}$`,
          [`$${D(-be)}$`, `$${D(al)}$`, `$${D(val(a, x1, x2, 0)) === D(be) ? D(be + 1) : D(val(a, x1, x2, 0))}$`],
          'L\'extremum est atteint au sommet de la parabole, dont l\'abscisse est la moyenne des racines ; il vaut l\'image de cette abscisse.',
          `L'abscisse du sommet est $\\frac{${x1} + ${pr(x2)}}{2} = ${D(al)}$ ; calcule son image.`,
          `Les racines sont $${x1}$ et $${x2}$, donc le sommet a pour abscisse $\\alpha = ${D(al)}$. Puis $f(${D(al)}) = ${D(a)} \\times ${pr(al - x1)} \\times ${pr(al - x2)} = ${D(be)}$. Comme $a = ${D(a)}$ est ${a > 0 ? 'positif' : 'négatif'}, c'est un ${kind} : il vaut $${D(be)}$, atteint en $x = ${D(al)}$.`
        );
      }
      // retrouver le coefficient a
      const [x1, x2] = this._1TC5_roots(-5, 6);
      const a = this.randChoice([-3, -2, -1.5, -1, -0.5, 0.5, 1.5, 2, 3]);
      let x0; do { x0 = this.randInt(-4, 7); } while (x0 === x1 || x0 === x2);
      const y0 = val(a, x1, x2, x0);
      const p = (x0 - x1) * (x0 - x2);
      return this._xa([this.decText(a), this._VAL], T, 3, 'Retrouver le coefficient a',
        'Déterminer une forme factorisée à partir de la courbe',
        `Une fonction du second degré $f$ s'écrit $f(x) = a${F(1, x1, x2)}$, et sa parabole passe par le point de coordonnées $\\left(${x0} ; ${D(y0)}\\right)$. Quelle est la valeur de $a$ ?`,
        `$${D(a)}$`,
        [`$${D(-a)}$`, `$${D(this._r(y0 * p))}$`, `$${D(this._r(y0 - p))}$`],
        'Les coordonnées d\'un point de la courbe vérifient l\'équation $y = f(x)$ : on remplace $x$ et $f(x)$ par ces coordonnées, puis on isole $a$.',
        `Remplace $x$ par $${x0}$ : $f(${x0}) = a \\times ${pr(x0 - x1)} \\times ${pr(x0 - x2)}$.`,
        `$f(${x0}) = a \\times ${pr(x0 - x1)} \\times ${pr(x0 - x2)} = ${ca(p)}$. Or $f(${x0}) = ${D(y0)}$, donc $${ca(p)} = ${D(y0)}$ et $a = ${D(y0)} \\div ${pr(p)} = ${D(a)}$.`
      );
    }

    // Palier 4 : problèmes
    const fam = this.randInt(0, 3);
    if (fam === 0) {
      // hauteur maximale d'une trajectoire
      let x1; let x2;
      do { x1 = this.randChoice([0, 0, -1, -2]); x2 = this.randChoice([6, 8, 10, 12, 14, 16, 20]); } while ((x2 - x1) % 2 !== 0);
      const a = this.randChoice([-0.1, -0.2, -0.25, -0.5]);
      const al = (x1 + x2) / 2;
      const be = val(a, x1, x2, al);
      const ctx = this.randChoice([
        'Un ballon est lancé ; sa hauteur, en mètres, est modélisée par',
        'Le jet d\'eau d\'une fontaine suit une trajectoire dont la hauteur, en mètres, est modélisée par',
        'Lors d\'un lancer de poids, la hauteur du poids, en mètres, est modélisée par'
      ]);
      return this._xa([this.decText(be), this._VAL], T, 4, 'Hauteur maximale d\'une trajectoire',
        'Utiliser un modèle quadratique pour résoudre un problème',
        `${ctx} $h(x) = ${F(a, x1, x2)}$, où $x$ est la distance horizontale parcourue, en mètres ($0 \\leqslant x \\leqslant ${x2}$). Quelle hauteur maximale, en mètres, est atteinte ?`,
        `$${D(be)}$`,
        [`$${D(al)}$`, `$${D(val(a, x1, x2, 0)) === D(be) ? D(be * 2) : D(val(a, x1, x2, 0))}$`, `$${D(this._r(-a * al * al))}$`, `$${D(this._r(be / 2))}$`],
        'Le maximum est atteint au sommet de la parabole ; son abscisse est la moyenne des racines de la forme factorisée.',
        `Les racines de $h$ sont $${x1}$ et $${x2}$ : calcule leur moyenne, puis son image par $h$.`,
        `$h(x) = 0$ pour $x = ${x1}$ et $x = ${x2}$. Le sommet a pour abscisse $\\alpha = \\frac{${x1} + ${x2}}{2} = ${D(al)}$, et $h(${D(al)}) = ${D(a)} \\times ${pr(al - x1)} \\times ${pr(al - x2)} = ${D(be)}$. Comme $${D(a)} < 0$, la parabole est tournée vers le bas : la hauteur maximale est $${D(be)}$ m, atteinte à $${D(al)}$ m du point de départ (horizontalement).`
      );
    }
    if (fam === 1) {
      // aire maximale d'un enclos
      const wall = Math.random() < 0.5;
      const L = wall ? this.randChoice([40, 48, 60, 80, 100, 120]) : this.randChoice([24, 32, 40, 48, 60, 80]);
      const k = wall ? 2 : 1;
      const r2 = wall ? L / 2 : L / 2; // racine non nulle
      const al = r2 / 2;
      const be = this._r(k * al * (r2 - al));
      const expr = wall ? `x(${L} - 2x)` : `x(${L / 2} - x)`;
      const fact = wall ? `-2x(x - ${r2})` : `-x(x - ${r2})`;
      return this._xa([this.decText(be), this._VAL], T, 4, 'Aire maximale d\'un enclos',
        'Utiliser un modèle quadratique pour résoudre un problème',
        wall
          ? `Avec $${L}$ m de grillage, on veut clôturer un enclos rectangulaire adossé à un mur (le côté le long du mur ne nécessite pas de grillage). On note $x$ la longueur, en mètres, de chacun des deux côtés perpendiculaires au mur. On admet que l'aire de l'enclos est $A(x) = ${expr}$, pour $0 \\leqslant x \\leqslant ${r2}$. Quelle est l'aire maximale, en m², de l'enclos ?`
          : `Avec $${L}$ m de grillage, on veut clôturer un enclos rectangulaire. On note $x$ la longueur, en mètres, d'un côté. On admet que l'aire de l'enclos est $A(x) = ${expr}$, pour $0 \\leqslant x \\leqslant ${r2}$. Quelle est l'aire maximale, en m², de l'enclos ?`,
        `$${I(be)}$`,
        [`$${I(al)}$`, `$${I(this._r(L * L / 4))}$`, `$${I(this._r(be * 2))}$`, `$${I(this._r(al * al))}$`],
        'Écris $A(x)$ sous la forme $a(x - x_1)(x - x_2)$ : le maximum est atteint au milieu des deux racines.',
        `$A(x) = ${fact}$ : les racines sont $0$ et $${r2}$.`,
        `$A(x) = ${expr} = ${fact}$, qui s'annule en $0$ et en $${r2}$. Comme le coefficient $${wall ? -2 : -1}$ est négatif, $A$ admet un maximum en $\\alpha = \\frac{0 + ${r2}}{2} = ${D(al)}$. Puis $A(${D(al)}) = ${D(al)} \\times ${wall ? `(${L} - ${2 * al})` : `(${L / 2} - ${D(al)})`} = ${I(be)}$. L'aire maximale est $${I(be)}$ m², obtenue pour $x = ${D(al)}$ m.`
      );
    }
    if (fam === 2) {
      // quantités rentables
      const q1 = this.randInt(2, 25);
      const q2 = this.randInt(8, 19) * 5;
      const a = this.randChoice([-0.5, -1, -2]);
      const Q = 100;
      const ans = `$\\left[${q1} ; ${q2}\\right]$`;
      return this._xa(null, T, 4, 'Production rentable',
        'Étudier le signe d\'un modèle quadratique',
        `Un artisan fabrique entre $0$ et $${Q}$ objets par semaine. Son bénéfice hebdomadaire, en euros, pour $x$ objets fabriqués et vendus est modélisé par $B(x) = ${F(a, q1, q2)}$. Pour quelles quantités $x$ de l'intervalle $\\left[0 ; ${Q}\\right]$ le bénéfice est-il positif ou nul ?`,
        ans,
        [`$\\left[0 ; ${q1}\\right] \\cup \\left[${q2} ; ${Q}\\right]$`, `$\\left]${q1} ; ${q2}\\right[$`, `$\\left[${q1} ; ${Q}\\right]$`],
        'Repère les racines de la forme factorisée, puis utilise la règle des signes : du signe de $a$ à l\'extérieur des racines, du signe contraire entre elles.',
        `Les racines sont $${q1}$ et $${q2}$, et le coefficient devant les parenthèses est négatif.`,
        `$B(x) = 0$ pour $x = ${q1}$ et $x = ${q2}$. Comme $${D(a)} < 0$, $B(x)$ est négatif à l'extérieur des racines et positif entre elles. Sur $\\left[0 ; ${Q}\\right]$, le bénéfice est positif ou nul pour $x \\in ${ans.slice(1, -1)}$ : entre $${q1}$ et $${q2}$ objets par semaine.`
      );
    }
    // forme factorisée à partir des racines et du sommet
    let x1; let x2;
    do { [x1, x2] = this._1TC5_roots(-5, 7); } while ((x2 - x1) % 2 !== 0);
    const a = this.randChoice([-3, -2, -1, 1, 2, 3]);
    const al = (x1 + x2) / 2;
    const be = val(a, x1, x2, al);
    const h = (x2 - x1) / 2;
    return this._xa([this._1TC5_factIn(a, x1, x2), 'Écrire f(x) sous forme factorisée, par exemple -3(x+1)(x-4).', null, 'factorisation'], T, 4, 'Forme factorisée à partir du sommet',
      'Déterminer une forme factorisée à partir des éléments d\'une parabole',
      `Une parabole coupe l'axe des abscisses aux points d'abscisses $${x1}$ et $${x2}$, et son sommet a pour ordonnée $${be}$. Elle représente une fonction du second degré $f$. Déterminer la forme factorisée de $f(x)$.`,
      `$f(x) = ${F(a, x1, x2)}$`,
      [`$f(x) = ${F(-a, x1, x2)}$`, `$f(x) = ${F(a, -x2, -x1)}$`, `$f(x) = ${F(be, x1, x2)}$`],
      'Les racines donnent $f(x) = a(x - x_1)(x - x_2)$ ; l\'abscisse du sommet est leur moyenne, et l\'ordonnée connue du sommet permet de trouver $a$.',
      `L'abscisse du sommet est $\\frac{${x1} + ${pr(x2)}}{2} = ${D(al)}$ : écris l'équation $f(${D(al)}) = ${be}$.`,
      `On a $f(x) = a${F(1, x1, x2)}$. Le sommet a pour abscisse $\\alpha = ${D(al)}$, donc $f(${D(al)}) = a \\times ${pr(al - x1)} \\times ${pr(al - x2)} = ${ca(-h * h)}$. Comme $f(${D(al)}) = ${be}$, on obtient $a = ${be} \\div ${pr(-h * h)} = ${a}$. Donc $f(x) = ${F(a, x1, x2)}$.`
    );
  },

  // ---- 1TC6 : Croissance exponentielle ----
  /** contextes d'évolution à taux constant (t en %, signe donné par s) */
  _1TC6_CTX: [
    { s: 1, txt: (t) => `Le nombre d'abonnés d'une médiathèque augmente de $${t}\\,\\%$ par an.`, g: 'le nombre d\'abonnés', per: 'an' },
    { s: 1, txt: (t) => `Le loyer d'un local commercial augmente de $${t}\\,\\%$ chaque année.`, g: 'le loyer', per: 'an' },
    { s: -1, txt: (t) => `La consommation d'eau d'une commune diminue de $${t}\\,\\%$ par an.`, g: 'la consommation d\'eau', per: 'an' },
    { s: -1, txt: (t) => `La valeur d'une voiture diminue de $${t}\\,\\%$ chaque année.`, g: 'la valeur de la voiture', per: 'an' },
    { s: 1, txt: (t) => `Le nombre de visiteurs d'un site internet augmente de $${t}\\,\\%$ chaque mois.`, g: 'le nombre de visiteurs', per: 'mois' }
  ],

  gen_1TC6(tier) {
    const T = '1TC6';
    const D = (x) => { const [i, d] = this.dec(x, 6).split('{,}'); return i.replace(/\B(?=(\d{3})+(?!\d))/g, '\\,') + (d ? `{,}${d}` : ''); };
    const I = D;
    const pr = (x) => (x < 0 ? `(${D(x)})` : D(x));
    const pw = (x, n) => this._r(x ** n);
    const ENT = 'Saisir un nombre entier.';

    if (tier === 1) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // coefficient multiplicateur associé à un taux
        const c = this.randChoice(this._1TC6_CTX);
        const t = this.randChoice([2, 3, 4, 5, 6, 8, 12, 15, 25, 1.5, 2.5, 0.5]);
        const q = this._r(1 + c.s * t / 100);
        return this._xa([this.decText(q, 6), this._VAL], T, 1, 'Coefficient multiplicateur',
          'Associer une évolution à taux constant à une suite géométrique',
          `${c.txt(D(t))} On modélise ${c.g} par une suite géométrique $u$. Quelle est sa raison $q$ ?`,
          `$${D(q)}$`,
          [`$${D(this._r(1 - c.s * t / 100))}$`, `$${D(this._r(t / 100))}$`, `$${D(this._r(1 + c.s * t))}$`],
          'Évoluer de $t\\,\\%$ revient à multiplier par $1 + \\frac{t}{100}$ (hausse) ou par $1 - \\frac{t}{100}$ (baisse).',
          `Il s'agit d'une ${c.s > 0 ? 'hausse' : 'baisse'} de $${D(t)}\\,\\%$ : calcule $1 ${c.s > 0 ? '+' : '-'} ${D(t)} \\div 100$.`,
          `Une ${c.s > 0 ? 'hausse' : 'baisse'} de $${D(t)}\\,\\%$ correspond au coefficient multiplicateur $1 ${c.s > 0 ? '+' : '-'} ${D(t)} \\div 100 = 1 ${c.s > 0 ? '+' : '-'} ${D(this._r(t / 100))} = ${D(q)}$. Chaque ${c.per === 'an' ? 'année' : 'mois'}, ${c.g} est multiplié${/^la /.test(c.g) ? 'e' : ''} par $${D(q)}$ : la suite est géométrique de raison $q = ${D(q)}$.`
        );
      }
      if (fam === 1) {
        // terme d'une suite géométrique
        const [q, n] = this.randChoice([[2, 3], [2, 4], [2, 5], [3, 2], [3, 3], [3, 4], [0.5, 2], [0.5, 3], [10, 3], [5, 2], [4, 3], [1.5, 2]]);
        const u0 = q === 0.5 ? this.randChoice([40, 64, 80, 120, 200, 360]) : q === 1.5 ? this.randChoice([4, 8, 12, 20, 40]) : this.randChoice([2, 3, 4, 5, 6, 7, 12, 15]);
        const ans = this._r(u0 * q ** n);
        return this._xa([this.decText(ans, 6), this._VAL], T, 1, 'Terme d\'une suite géométrique',
          'Calculer un terme d\'une suite géométrique',
          `La suite $u$ est géométrique, de premier terme $u(0) = ${u0}$ et de raison $${D(q)}$. Calculer $u(${n})$.`,
          `$${I(ans)}$`,
          [`$${I(this._r(u0 + n * q))}$`, `$${I(this._r(u0 * q * n))}$`, `$${I(this._r(u0 * q ** (n + 1)))}$`, `$${I(this._r(u0 * q ** (n - 1)))}$`],
          'Pour une suite géométrique, on passe d\'un terme au suivant en multipliant par la raison : $u(n) = u(0) \\times q^n$.',
          `Écris $u(${n}) = ${u0} \\times ${D(q)}^{${n}}$.`,
          `$u(${n}) = u(0) \\times q^{${n}} = ${u0} \\times ${D(q)}^{${n}} = ${u0} \\times ${D(pw(q, n))} = ${I(ans)}$.`
        );
      }
      if (fam === 2) {
        // relation de récurrence
        const c = this.randChoice(this._1TC6_CTX);
        const t = this.randChoice([2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20]);
        const q = this._r(1 + c.s * t / 100);
        return this._xa('keep', T, 1, 'Relation de récurrence géométrique',
          'Modéliser une évolution à taux constant par une suite géométrique',
          `${c.txt(t)} On note $u(n)$ ${c.g} au bout de $n$ ${c.per === 'an' ? 'ans' : 'mois'}. Quelle relation vérifie la suite $u$ pour tout entier naturel $n$ ?`,
          `$u(n+1) = ${D(q)}\\,u(n)$`,
          [`$u(n+1) = u(n) ${c.s > 0 ? '+' : '-'} ${t}$`, `$u(n+1) = u(n) ${c.s > 0 ? '+' : '-'} ${D(t / 100)}$`, `$u(n+1) = ${D(t / 100)}\\,u(n)$`],
          'Une évolution d\'un même pourcentage à chaque étape revient à multiplier par un même coefficient : la suite est géométrique.',
          `Le coefficient multiplicateur vaut $1 ${c.s > 0 ? '+' : '-'} ${t} \\div 100$.`,
          `${c.s > 0 ? 'Augmenter' : 'Diminuer'} de $${t}\\,\\%$ revient à multiplier par $1 ${c.s > 0 ? '+' : '-'} ${t} \\div 100 = 1 ${c.s > 0 ? '+' : '-'} ${D(t / 100)} = ${D(q)}$. Donc $u(n+1) = ${D(q)}\\,u(n)$ : la suite $u$ est géométrique de raison $${D(q)}$. ${c.s > 0 ? 'Ajouter' : 'Retrancher'} $${t}$ ne convient pas : la variation dépend de la valeur atteinte.`
        );
      }
      // sens de variation de x ↦ a^x ou d'une suite géométrique
      const a = this.randChoice([0.2, 0.5, 0.6, 0.75, 0.9, 0.98, 1.02, 1.1, 1.5, 2, 3, 1.05]);
      const k = this.randChoice([1, 2, 3, 5, 10, 50]);
      const suite = Math.random() < 0.5;
      const up = a > 1;
      const right = up ? 'croissante' : 'décroissante';
      return this._xa('keep', T, 1, suite ? 'Variation d\'une suite géométrique' : 'Variation de x ↦ aˣ',
        'Déterminer le sens de variation d\'une fonction exponentielle ou d\'une suite géométrique',
        suite
          ? `La suite $u$ est géométrique, de premier terme $u(0) = ${k}$ et de raison $${D(a)}$. Quel est son sens de variation ?`
          : `On considère la fonction $f$ définie sur $\\left[0 ; +\\infty\\right[$ par $f(x) = ${k === 1 ? '' : `${k} \\times `}${D(a)}^x$. Quel est son sens de variation ?`,
        `${suite ? 'La suite est' : '$f$ est'} ${right}`,
        [`${suite ? 'La suite est' : '$f$ est'} ${up ? 'décroissante' : 'croissante'}`, `${suite ? 'La suite est' : '$f$ est'} constante`, `${suite ? 'La suite' : '$f$'} n'est ni croissante ni décroissante`],
        suite ? 'Pour une suite géométrique de premier terme strictement positif, le sens de variation dépend de la position de la raison par rapport à $1$.' : 'Pour $x \\mapsto k \\times a^x$ avec $k > 0$, le sens de variation dépend de la position de la base $a$ par rapport à $1$.',
        `Compare $${D(a)}$ à $1$.`,
        `$${D(a)} ${up ? '>' : '<'} 1$ et ${suite ? `$u(0) = ${k} > 0$` : k === 1 ? '$f(0) = 1 > 0$' : `le coefficient $${k}$ est positif`} : ${up ? 'chaque multiplication par ce nombre fait augmenter les valeurs' : 'chaque multiplication par ce nombre fait diminuer les valeurs (qui restent positives)'}. ${suite ? 'La suite' : 'La fonction $f$'} est donc ${right}.`
      );
    }

    if (tier === 2) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // valeur après quelques années
        const [t, n] = this.randChoice([[10, 2], [20, 2], [-10, 2], [-20, 2], [10, 3], [50, 2], [-50, 3], [30, 2], [5, 2], [-5, 2]]);
        const q = this._r(1 + t / 100);
        const P0 = this.randChoice([1000, 2000, 2500, 4000, 5000, 8000, 12000, 20000]);
        const ans = this._r(P0 * q ** n);
        const c = this.randChoice(['Un capital', 'Une population d\'insectes', 'Le prix d\'un terrain']);
        const fem = /^Une /.test(c);
        return this._xa([this.decText(ans, 6), this._VAL], T, 2, 'Valeur après plusieurs évolutions',
          'Calculer une valeur à l\'aide d\'une suite géométrique',
          `${c} vaut $${I(P0)}$ ${/insectes/.test(c) ? 'individus' : '€'} au départ et ${t > 0 ? 'augmente' : 'diminue'} de $${Math.abs(t)}\\,\\%$ par an. Quelle sera ${fem ? 'sa taille' : 'sa valeur'} au bout de $${n}$ ans ?`,
          `$${I(ans)}$`,
          [`$${I(this._r(P0 * (1 + n * t / 100)))}$`, `$${I(this._r(P0 * q ** (n + 1)))}$`, `$${I(this._r(P0 * q))}$`],
          'Chaque année, la valeur est multipliée par le même coefficient : après plusieurs années, on multiplie par une puissance de ce coefficient.',
          `Le coefficient multiplicateur annuel est $${D(q)}$ : calcule $${I(P0)} \\times ${D(q)}^{${n}}$.`,
          `Le coefficient annuel est $${D(q)}$. Au bout de $${n}$ ans : $${I(P0)} \\times ${D(q)}^{${n}} = ${I(P0)} \\times ${D(pw(q, n))} = ${I(ans)}$. Attention : ${t > 0 ? 'augmenter' : 'diminuer'} $${n}$ fois de $${Math.abs(t)}\\,\\%$ ne revient pas à ${t > 0 ? 'augmenter' : 'diminuer'} de $${n * Math.abs(t)}\\,\\%$.`
        );
      }
      if (fam === 1) {
        // raison et taux à partir de deux termes consécutifs
        const t = this.randChoice([-25, -20, -15, -12, -8, -5, 4, 5, 6, 8, 12, 15, 20, 25, 40]);
        const q = this._r(1 + t / 100);
        const k = this.randInt(1, 8);
        const A = this.randChoice([200, 400, 500, 600, 800, 1000, 1200, 2000]);
        const B = this._r(A * q);
        return this._xa([String(t), this._TX], T, 2, 'Taux à partir de deux termes',
          'Déterminer la raison et le taux d\'évolution d\'une suite géométrique',
          `La suite $u$ est géométrique, avec $u(${k}) = ${I(A)}$ et $u(${k + 1}) = ${I(B)}$. Quel taux d'évolution, en pourcentage, correspond à sa raison ?`,
          `$${this._sg(t)}$`,
          [`$${this._sg(-t)}$`, `$${this._sg(this._r(B - A))}$`, `$${this._sg(this._r(q * 100))}$`],
          'La raison est le quotient de deux termes consécutifs ; le taux d\'évolution s\'obtient en retranchant $1$ à la raison.',
          `Calcule $q = u(${k + 1}) \\div u(${k}) = ${I(B)} \\div ${I(A)}$.`,
          `$q = ${I(B)} \\div ${I(A)} = ${D(q)}$. Le taux d'évolution est $q - 1 = ${D(this._r(q - 1))}$, soit $${this._sg(t)}$ à chaque étape.`
        );
      }
      if (fam === 2) {
        // remonter au premier terme
        const [q, n] = this.randChoice([[2, 3], [2, 4], [3, 2], [3, 3], [0.5, 2], [0.5, 3], [5, 2], [4, 2], [10, 2], [1.5, 2]]);
        const u0 = q === 1.5 ? this.randChoice([4, 8, 12, 20]) : q === 0.5 ? this.randChoice([8, 16, 24, 40, 64]) : this.randChoice([3, 4, 5, 6, 7, 9, 11]);
        const un = this._r(u0 * q ** n);
        return this._xa([this.decText(u0, 6), this._VAL], T, 2, 'Retrouver le premier terme',
          'Utiliser la forme explicite d\'une suite géométrique',
          `La suite $u$ est géométrique de raison $${D(q)}$, et $u(${n}) = ${I(un)}$. Calculer $u(0)$.`,
          `$${I(u0)}$`,
          [`$${I(this._r(un * q ** n))}$`, `$${I(this._r(un - n * q))}$`, `$${I(this._r(un / (q * n)))}$`],
          'Écris le terme donné à l\'aide du premier terme et d\'une puissance de la raison, puis isole le premier terme par une division.',
          `$u(${n}) = u(0) \\times ${D(q)}^{${n}}$, avec $${D(q)}^{${n}} = ${D(pw(q, n))}$.`,
          `$u(${n}) = u(0) \\times ${D(q)}^{${n}} = ${D(pw(q, n))} \\times u(0)$. Donc $u(0) = ${I(un)} \\div ${D(pw(q, n))} = ${I(u0)}$.`
        );
      }
      // propriétés algébriques des puissances à exposant décimal
      const a = this.randChoice([2, 3, 5, 10]);
      const op = this.randInt(0, 2);
      let x; let y; let res; let tex; let calc;
      if (op === 0) {
        do { x = this.randChoice([0.5, 1.5, 2.5, 0.25, 0.75, 1.25, 1.75, 0.2, 0.8, 1.2, 1.6]); y = this.randChoice([0.5, 1.5, 0.25, 0.75, 1.75, 0.8, 1.8, 2.8, 0.4]); res = this._r(x + y); } while (!Number.isInteger(res) || res < 1 || res > (a === 10 ? 4 : a === 5 ? 3 : a === 3 ? 4 : 6));
        tex = `${a}^{${D(x)}} \\times ${a}^{${D(y)}}`;
        calc = `${a}^{${D(x)} + ${D(y)}} = ${a}^{${res}}`;
      } else if (op === 1) {
        do { x = this.randChoice([3.5, 4.5, 5.25, 2.75, 3.2, 4.6, 6.5, 2.5]); y = this.randChoice([0.5, 1.5, 2.5, 0.25, 0.75, 1.2, 1.6, 2.2]); res = this._r(x - y); } while (!Number.isInteger(res) || res < 1 || res > (a === 10 ? 4 : a === 5 ? 3 : a === 3 ? 4 : 6));
        tex = `\\frac{${a}^{${D(x)}}}{${a}^{${D(y)}}}`;
        calc = `${a}^{${D(x)} - ${D(y)}} = ${a}^{${res}}`;
      } else {
        do { x = this.randChoice([0.5, 1.5, 0.25, 0.75, 2.5, 1.25, 0.2, 0.4]); y = this.randChoice([2, 4, 6, 8, 5, 10]); res = this._r(x * y); } while (!Number.isInteger(res) || res < 1 || res > (a === 10 ? 4 : a === 5 ? 3 : a === 3 ? 4 : 6));
        tex = `\\left(${a}^{${D(x)}}\\right)^{${y}}`;
        calc = `${a}^{${D(x)} \\times ${y}} = ${a}^{${res}}`;
      }
      const ans = a ** res;
      const rule = op === 0 ? 'on additionne les exposants' : op === 1 ? 'on soustrait les exposants' : 'on multiplie les exposants';
      return this._xa([String(ans), this._VAL], T, 2, 'Propriétés des puissances',
        'Utiliser les propriétés algébriques de x ↦ aˣ',
        `Calculer, sans calculatrice, la valeur exacte de $${tex}$.`,
        `$${I(ans)}$`,
        [`$${I(a * res)}$`, `$${I(a ** (res + 1))}$`, `$${I(res)}$`, `$${I(a ** Math.max(1, res - 1))}$`],
        'Les propriétés des puissances à exposant entier restent valables pour des exposants décimaux : produit, quotient et puissance d\'une puissance.',
        `Pour ${op === 0 ? 'un produit de puissances de même base' : op === 1 ? 'un quotient de puissances de même base' : 'une puissance d\'une puissance'}, ${rule}.`,
        `$${tex} = ${calc} = ${I(ans)}$ (${rule}).`
      );
    }

    if (tier === 3) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // taux moyen à partir d'une évolution globale
        const [m, n] = this.randChoice([[1.1, 2], [1.2, 2], [1.3, 2], [1.5, 2], [0.9, 2], [0.8, 2], [0.7, 2], [1.1, 3], [1.2, 3], [0.9, 3], [1.04, 2], [1.05, 2], [0.95, 2], [1.02, 2]]);
        const G = this._r(m ** n);
        const tg = this._r((G - 1) * 100);
        const tm = this._r((m - 1) * 100);
        const what = this.randChoice(['la fréquentation d\'un musée', 'le chiffre d\'affaires d\'une entreprise', 'le nombre d\'adhérents d\'un club', 'la population d\'une ville']);
        return this._xa([String(tm), this._TX], T, 3, 'Taux d\'évolution moyen',
          'Calculer un taux d\'évolution moyen',
          `En $${n}$ ans, ${what} a ${tg > 0 ? 'augmenté' : 'diminué'} de $${this._pct(Math.abs(tg), 4)}$. Quel est le taux d'évolution annuel moyen sur cette période ?`,
          `$${this._sg(tm)}$`,
          [`$${this._sg(this.isDecimal(tg / n, 2) ? this._r(tg / n) : this._r(tm * n))}$`, `$${this._sg(this._r(tm * 2))}$`, `$${this._sg(tg)}$`],
          'Le taux moyen est le taux constant qui, appliqué chaque année, donne la même évolution globale : on cherche le coefficient $q$ tel que $q^n$ soit égal au coefficient global, c\'est-à-dire sa puissance $\\frac{1}{n}$.',
          `Le coefficient global est $${D(G)}$ : cherche le nombre positif $q$ tel que $q^{${n}} = ${D(G)}$.`,
          `Le coefficient multiplicateur global est $1 ${tg > 0 ? '+' : '-'} ${D(Math.abs(this._r(G - 1)))} = ${D(G)}$. Le coefficient moyen $q$ vérifie $q^{${n}} = ${D(G)}$, donc $q = ${D(G)}^{\\frac{1}{${n}}} = ${D(m)}$ car $${D(m)}^{${n}} = ${D(G)}$. Le taux annuel moyen est $${this._sg(tm)}$ (et non $${this._sg(tg)} \\div ${n}$ : les taux successifs ne s'additionnent pas).`
        );
      }
      if (fam === 1) {
        // exposant 1/n
        const [b, n] = this.randChoice([[16, 2], [81, 2], [1.21, 2], [1.44, 2], [0.25, 2], [0.81, 2], [27, 3], [64, 3], [125, 3], [1000, 3], [0.008, 3], [1.331, 3], [16, 4], [81, 4], [625, 4], [32, 5], [1.69, 2], [0.64, 2]]);
        const r = this._r(b ** (1 / n));
        const ctxt = Math.random() < 0.5;
        return this._xa([this.decText(r, 6), this._VAL], T, 3, 'Exposant 1/n',
          'Utiliser la notation a^(1/n)',
          ctxt
            ? `Déterminer le nombre réel positif $x$ tel que $x^{${n}} = ${D(b)}$.`
            : `Calculer, sans calculatrice, la valeur exacte de $${D(b)}^{\\frac{1}{${n}}}$.`,
          `$${D(r)}$`,
          [`$${this.isDecimal(b / n, 4) ? D(this._r(b / n)) : D(this._r(r + 1))}$`, `$${D(pw(b, n))}$`, `$${D(this._r(r * 2))}$`],
          'Pour $a > 0$, le nombre $a^{\\frac{1}{n}}$ est l\'unique nombre positif dont la puissance $n$-ième vaut $a$.',
          `Cherche un nombre positif simple dont la puissance $${n}$ vaut $${D(b)}$.`,
          `$${D(r)}^{${n}} = ${D(b)}$ et $${D(r)} > 0$, donc ${ctxt ? `$x = ${D(b)}^{\\frac{1}{${n}}} = ${D(r)}$` : `$${D(b)}^{\\frac{1}{${n}}} = ${D(r)}$`}. Attention : ce n'est pas $${D(b)} \\div ${n}$.`
        );
      }
      if (fam === 2) {
        // seuil d'une croissance exponentielle (doublement, triplement, moitié)
        const kind = this.randChoice(['x2', 'x2', 'x3', 'half']);
        let u0; let S; let N;
        const q = kind === 'x2' ? 2 : kind === 'x3' ? 3 : 0.5;
        for (;;) {
          u0 = kind === 'half' ? this.randChoice([800, 1200, 1600, 2000, 3200, 5000, 6400]) : this.randChoice([50, 80, 100, 150, 200, 250, 300, 400, 500]);
          S = kind === 'half' ? this.randChoice([10, 20, 30, 40, 50, 75, 100, 150]) : this.randChoice([1000, 2000, 3000, 5000, 8000, 10000, 20000, 50000]);
          N = 0; while (kind === 'half' ? u0 * q ** N >= S : u0 * q ** N <= S) N++;
          const near = Math.min(...[N - 1, N].map((k) => Math.abs(u0 * q ** k - S) / S));
          if (N >= 3 && N <= 10 && near > 0.05) break;
        }
        const ctx = kind === 'half'
          ? { intro: `La masse d'une substance radioactive est divisée par $2$ chaque année. Au départ, elle vaut $${I(u0)}$ mg.`, ask: `Au bout de combien d'années complètes la masse sera-t-elle inférieure à $${I(S)}$ mg ?`, u: 'mg' }
          : kind === 'x3'
            ? { intro: `Une rumeur se propage : le nombre de personnes qui la connaissent est multiplié par $3$ chaque jour. Au départ, $${I(u0)}$ personnes la connaissent.`, ask: `Au bout de combien de jours plus de $${I(S)}$ personnes la connaîtront-elles ?`, u: 'personnes' }
            : { intro: `Une population de bactéries double toutes les heures. Au départ, elle compte $${I(u0)}$ bactéries.`, ask: `Au bout de combien d'heures la population dépassera-t-elle $${I(S)}$ bactéries ?`, u: 'bactéries' };
        const seq = [];
        for (let k = Math.max(0, N - 2); k <= N; k++) seq.push(`u(${k}) = ${I(this._r(u0 * q ** k))}`);
        return this._xa([String(N), ENT], T, 3, 'Seuil d\'une croissance exponentielle',
          'Déterminer un seuil par le calcul',
          `${ctx.intro} ${ctx.ask}`,
          `$${N}$`,
          [`$${N - 1}$`, `$${N + 1}$`, `$${N + 2}$`],
          'Modélise la situation par une suite géométrique (premier terme et raison), puis calcule les termes successifs jusqu\'à franchir le seuil.',
          `On a $u(n) = ${I(u0)} \\times ${D(q)}^n$ : calcule les termes de proche en proche.`,
          `$u(n) = ${I(u0)} \\times ${D(q)}^n$, suite ${kind === 'half' ? 'décroissante' : 'croissante'}. On calcule : $${seq.join('$, $')}$. Le seuil de $${I(S)}$ ${ctx.u} est franchi pour la première fois pour $n = ${N}$.`
        );
      }
      // image d'un exposant décimal
      const [a, rt] = this.randChoice([[4, 2], [9, 3], [16, 4], [0.25, 0.5], [1.21, 1.1], [1.44, 1.2], [0.81, 0.9], [0.64, 0.8], [25, 5]]);
      const x0 = Number.isInteger(a) ? this.randChoice([0.5, 1.5, 2.5]) : this.randChoice([0.5, 1.5]);
      const P0 = this.randChoice([100, 200, 300, 500, 1000, 2000]);
      const ax = this._r(rt ** (2 * x0));
      const ans = this._r(P0 * ax);
      const isInt = Number.isInteger(this._r(ans * 100));
      if (!isInt) return this.gen_1TC6(3);
      const decomp = x0 === 0.5 ? `${D(a)}^{0{,}5} = ${D(rt)}` : `${D(a)}^{${D(x0)}} = ${D(a)}^{${D(x0 - 0.5)}} \\times ${D(a)}^{0{,}5} = ${D(pw(a, x0 - 0.5))} \\times ${D(rt)} = ${D(ax)}`;
      return this._xa([this.decText(ans, 6), this._VAL], T, 3, 'Image par x ↦ k·aˣ',
        'Calculer une image par une fonction exponentielle',
        `Une grandeur est modélisée, pour $x \\geqslant 0$, par $f(x) = ${I(P0)} \\times ${D(a)}^x$. Calculer, sans calculatrice, $f(${D(x0)})$.`,
        `$${I(ans)}$`,
        [`$${I(this._r(P0 * a * x0))}$`, `$${I(this._r(P0 * pw(a, Math.round(x0 + 0.5))))}$`, `$${I(this._r(P0 * pw(a, Math.round(x0 - 0.5)) ))}$`],
        'Décompose l\'exposant en une partie entière et $0{,}5$, puis utilise $a^{x+y} = a^x \\times a^y$ ; $a^{0{,}5}$ est le nombre positif dont le carré vaut $a$.',
        `$${D(a)}^{0{,}5} = ${D(rt)}$ car $${D(rt)}^2 = ${D(a)}$.`,
        `$${decomp}$, donc $f(${D(x0)}) = ${I(P0)} \\times ${D(ax)} = ${I(ans)}$.`
      );
    }

    // Palier 4 : problèmes
    const fam = this.randInt(0, 3);
    if (fam === 0) {
      // modèle linéaire contre modèle exponentiel
      const [t, n] = this.randChoice([[10, 2], [10, 3], [20, 2], [20, 3], [50, 2], [5, 2], [30, 2]]);
      const P0 = this.randChoice([1000, 2000, 5000, 10000, 4000]);
      const q = 1 + t / 100;
      const lin = this._r(P0 + n * P0 * t / 100);
      const ex = this._r(P0 * q ** n);
      const ans = this._r(ex - lin);
      const what = this.randChoice([['une population', 'individus'], ['le nombre d\'abonnés d\'une plateforme', 'abonnés'], ['la production d\'une usine', 'pièces']]);
      return this._xa([this.decText(ans, 6), this._VAL], T, 4, 'Linéaire ou exponentiel',
        'Comparer une croissance linéaire et une croissance exponentielle',
        `Au départ, ${what[0]} vaut $${I(P0)}$ ${what[1]}. Modèle A : elle augmente de $${I(this._r(P0 * t / 100))}$ ${what[1]} chaque année. Modèle B : elle augmente de $${t}\\,\\%$ chaque année. Au bout de $${n}$ ans, de combien la valeur donnée par le modèle B dépasse-t-elle celle du modèle A ?`,
        `$${I(ans)}$`,
        [`$0$`, `$${I(this._r(ex - P0))}$`, `$${I(this._r(P0 * q ** (n - 1) * t / 100))}$`],
        'Le modèle A est une suite arithmétique, le modèle B une suite géométrique ; calcule les deux valeurs au même rang puis compare-les.',
        `Modèle A : $a(n) = ${I(P0)} + ${I(this._r(P0 * t / 100))}n$ ; modèle B : $b(n) = ${I(P0)} \\times ${D(q)}^n$.`,
        `Modèle A (arithmétique) : $a(${n}) = ${I(P0)} + ${n} \\times ${I(this._r(P0 * t / 100))} = ${I(lin)}$. Modèle B (géométrique) : $b(${n}) = ${I(P0)} \\times ${D(q)}^{${n}} = ${I(P0)} \\times ${D(pw(q, n))} = ${I(ex)}$. Écart : $${I(ex)} - ${I(lin)} = ${I(ans)}$. Les deux modèles coïncident la première année, puis le modèle exponentiel prend l'avantage.`
      );
    }
    if (fam === 1) {
      // taux moyen puis prévision
      const [m, n] = this.randChoice([[1.1, 2], [1.2, 2], [1.5, 2], [0.9, 2], [0.8, 2], [1.1, 3], [1.2, 3], [1.3, 2]]);
      let V0; let Vn; let ans;
      do { V0 = this.randChoice([1000, 2000, 5000, 10000, 2500, 4000, 8000, 20000]); Vn = this._r(V0 * m ** n); ans = this._r(Vn * m); } while (!Number.isInteger(ans));
      const yr = this.randChoice([2022, 2023, 2024]);
      return this._xa([this.decText(ans, 6), this._VAL], T, 4, 'Taux moyen et prévision',
        'Utiliser un taux moyen pour faire une prévision',
        `Une association comptait $${I(V0)}$ donateurs en ${yr} et $${I(Vn)}$ en ${yr + n}. On suppose que le nombre de donateurs évolue chaque année selon le même taux, égal au taux annuel moyen de cette période. Combien de donateurs peut-on prévoir en ${yr + n + 1} ?`,
        `$${I(ans)}$`,
        [`$${I(Math.round(Vn + (Vn - V0) / n))}$`, `$${I(Math.round(Vn * m ** n))}$`, `$${I(Math.round(Vn * (1 + (m ** n - 1) / n)))}$`],
        'Calcule le coefficient global sur la période, puis le coefficient moyen annuel (puissance $\\frac{1}{n}$) ; applique-le une fois de plus.',
        `Le coefficient global est $${I(Vn)} \\div ${I(V0)} = ${D(this._r(m ** n))}$, sur $${n}$ ans.`,
        `Coefficient global : $${I(Vn)} \\div ${I(V0)} = ${D(this._r(m ** n))}$. Coefficient moyen : $q = ${D(this._r(m ** n))}^{\\frac{1}{${n}}} = ${D(m)}$ car $${D(m)}^{${n}} = ${D(this._r(m ** n))}$ (taux moyen $${this._sg(this._r((m - 1) * 100))}$). Prévision pour ${yr + n + 1} : $${I(Vn)} \\times ${D(m)} = ${I(ans)}$ donateurs.`
      );
    }
    if (fam === 2) {
      // demi-vie
      const T0 = this.randChoice([3, 4, 5, 6, 8, 12]);
      const k = this.randInt(2, 5);
      const m0 = this.randChoice([80, 160, 240, 320, 400, 640, 800]);
      const mk = this._r(m0 / 2 ** k);
      if (!Number.isInteger(mk * 100)) return this.gen_1TC6(4);
      return this._xa([String(k * T0), ENT], T, 4, 'Demi-vie',
        'Modéliser une décroissance exponentielle',
        `Dans le sang, la quantité d'un médicament est divisée par $2$ toutes les $${T0}$ heures. On en injecte $${m0}$ mg. On admet que la quantité, en mg, au bout de $t$ heures est $m(t) = ${m0} \\times 0{,}5^{\\frac{t}{${T0}}}$. Au bout de combien d'heures reste-t-il $${D(mk)}$ mg ?`,
        `$${k * T0}$`,
        [`$${k}$`, `$${(k + 1) * T0}$`, `$${this._r(m0 / mk) * T0 === k * T0 ? (k - 1) * T0 : this._r(m0 / mk) * T0}$`],
        'Cherche combien de fois il faut diviser par $2$ la quantité initiale pour obtenir la quantité demandée ; chaque division correspond à une même durée.',
        `$${m0} \\div ${D(mk)} = ${2 ** k}$ : écris ce nombre comme une puissance de $2$.`,
        `$\\frac{${m0}}{${D(mk)}} = ${2 ** k} = 2^{${k}}$ : la quantité a été divisée $${k}$ fois par $2$, soit $\\frac{t}{${T0}} = ${k}$. Donc $t = ${k} \\times ${T0} = ${k * T0}$ heures. Vérification : $m(${k * T0}) = ${m0} \\times 0{,}5^{${k}} = ${D(mk)}$.`
      );
    }
    // évolutions successives puis taux moyen
    const PAIRS = [[1.6, 0.9, 1.2], [1.8, 0.8, 1.2], [1.5, 0.96, 1.2], [2, 0.72, 1.2], [1.25, 1.8, 1.5], [2.5, 0.9, 1.5], [0.5, 0.98, 0.7], [0.8, 0.45, 0.6], [0.9, 0.4, 0.6], [0.75, 1.08, 0.9], [0.6, 1.35, 0.9], [0.5, 1.62, 0.9]];
    let [q1, q2, m] = this.randChoice(PAIRS);
    if (Math.random() < 0.5) [q1, q2] = [q2, q1];
    const t1 = this._r((q1 - 1) * 100); const t2 = this._r((q2 - 1) * 100); const tm = this._r((m - 1) * 100);
    const G = this._r(q1 * q2);
    const ev = (t) => (t > 0 ? `augmenté de $${t}\\,\\%$` : `baisé de $${-t}\\,\\%$`).replace('baisé', 'baissé');
    return this._xa([String(tm), this._TX], T, 4, 'Évolutions successives et taux moyen',
      'Calculer un taux d\'évolution moyen',
      `Le prix d'une matière première a ${ev(t1)} la première année, puis ${ev(t2)} la deuxième année. Quel est le taux d'évolution annuel moyen sur ces deux années ?`,
      `$${this._sg(tm)}$`,
      [`$${this._sg(this._r((t1 + t2) / 2))}$`, `$${this._sg(this._r((G - 1) * 100))}$`, `$${this._sg(-tm)}$`],
      'Multiplie les coefficients multiplicateurs pour obtenir le coefficient global, puis cherche le coefficient moyen $q$ tel que $q^2$ soit égal au coefficient global.',
      `Coefficient global : $${D(q1)} \\times ${D(q2)}$.`,
      `Coefficient global : $${D(q1)} \\times ${D(q2)} = ${D(G)}$. Le coefficient moyen vérifie $q^2 = ${D(G)}$, donc $q = ${D(G)}^{0{,}5} = ${D(m)}$ car $${D(m)}^2 = ${D(G)}$. Le taux annuel moyen est $${this._sg(tm)}$ (et non la moyenne des deux taux, $${this._sg(this._r((t1 + t2) / 2))}$).`
    );
  },

  // ---- 1T1 : Automatismes, ensembles et logique ----
  /** Ensemble fini d'entiers en extension (mode math), éléments rangés ; ensemble vide sinon */
  _1T1_set(arr) {
    const s = [...new Set(arr)].sort((a, b) => a - b);
    return s.length ? `\\{${s.join(' ; ')}\\}` : '\\varnothing';
  },
  /** Intervalle : lo/hi = borne incluse (true) ou exclue (false) */
  _1T1_iv(lo, a, b, hi) { return `${lo ? '[' : ']'}${a} ; ${b}${hi ? ']' : '['}`; },
  /** « que » ou « qu' » devant une proposition */
  _1T1_de(w) { return /^[aeiouéèêh]/i.test(w) ? `d'${w}` : `de ${w}`; },
  _1T1_que(s) { return /^(il|elle|on|un|une)\b/.test(s) ? `qu'${s}` : `que ${s}`; },
  /** Propriétés d'entiers (connecteurs logiques) */
  _1T1_PROPS: [
    { t: 'pair', f: (n) => n % 2 === 0 },
    { t: 'impair', f: (n) => n % 2 === 1 },
    { t: 'multiple de $3$', f: (n) => n % 3 === 0 },
    { t: 'multiple de $4$', f: (n) => n % 4 === 0 },
    { t: 'multiple de $5$', f: (n) => n % 5 === 0 },
    { t: 'supérieur ou égal à $20$', f: (n) => n >= 20 },
    { t: 'strictement inférieur à $15$', f: (n) => n < 15 }
  ],
  /** Grandeurs pour les évolutions : [sujet, valeurs initiales] */
  _1T1_EVO: [
    { s: 'Le chiffre d\'affaires mensuel d\'une boulangerie (en euros)', v: [12000, 15000, 18000, 20000, 24000] },
    { s: 'La consommation électrique annuelle d\'un gymnase (en MWh)', v: [80, 120, 150, 200, 250] },
    { s: 'Le nombre de voyageurs quotidiens d\'une ligne de tramway', v: [8000, 12000, 15000, 20000] },
    { s: 'Le prix d\'un ordinateur portable (en euros)', v: [500, 600, 800, 900, 1200] },
    { s: 'Le nombre de colis traités chaque jour par un entrepôt', v: [2000, 2500, 4000, 5000] }
  ],
  /** Dénombrements : deux caractères A et B dans une population */
  _1T1_POP: [
    { pre: 'Un club omnisports compte', who: 'adhérents', A: 'pratiquent la natation', B: 'pratiquent le cyclisme', AB: 'pratiquent les deux sports', onlyA: 'pratiquent seulement la natation', cup: 'pratiquent au moins un des deux sports', none: 'ne pratiquent aucun de ces deux sports', N: [120, 150, 180, 200] },
    { pre: 'Une entreprise de transport emploie', who: 'salariés', A: 'ont le permis poids lourd', B: 'ont le permis transport en commun', AB: 'ont les deux permis', onlyA: 'ont seulement le permis poids lourd', cup: 'ont au moins un des deux permis', none: 'n\'ont aucun de ces deux permis', N: [60, 80, 90, 120] },
    { pre: 'Un samedi, une médiathèque a accueilli', who: 'visiteurs', A: 'ont emprunté un livre', B: 'ont emprunté un DVD', AB: 'ont emprunté les deux', onlyA: 'ont emprunté seulement un livre', cup: 'ont emprunté au moins un livre ou un DVD', none: 'n\'ont emprunté ni livre ni DVD', N: [150, 200, 240, 300] },
    { pre: 'Une classe de Première STMG compte', who: 'élèves', A: 'pratiquent un sport en club', B: 'jouent d\'un instrument de musique', AB: 'sont dans les deux cas', onlyA: 'pratiquent un sport en club sans jouer d\'un instrument', cup: 'pratiquent un sport en club ou jouent d\'un instrument', none: 'ne sont dans aucun des deux cas', N: [28, 30, 32, 35] }
  ],
  /** Implications : [P, Q, non P, non Q, nature] ; nature 'imp' (P ⇒ Q seulement), 'eq' (équivalence), 'ni' */
  _1T1_IMP: [
    ['l\'entier $n$ est multiple de $6$', 'l\'entier $n$ est multiple de $3$', 'l\'entier $n$ n\'est pas multiple de $6$', 'l\'entier $n$ n\'est pas multiple de $3$', 'imp', '$n = 9$ est multiple de $3$ sans être multiple de $6$'],
    ['l\'entier $n$ se termine par $0$', 'l\'entier $n$ est multiple de $5$', 'l\'entier $n$ ne se termine pas par $0$', 'l\'entier $n$ n\'est pas multiple de $5$', 'imp', '$n = 15$ est multiple de $5$ mais ne se termine pas par $0$'],
    ['le réel $x$ est strictement supérieur à $5$', 'le réel $x$ est strictement supérieur à $2$', 'le réel $x$ est inférieur ou égal à $5$', 'le réel $x$ est inférieur ou égal à $2$', 'imp', '$x = 3$ est strictement supérieur à $2$ sans être strictement supérieur à $5$'],
    ['le quadrilatère $ABCD$ est un carré', 'le quadrilatère $ABCD$ est un rectangle', 'le quadrilatère $ABCD$ n\'est pas un carré', 'le quadrilatère $ABCD$ n\'est pas un rectangle', 'imp', 'un rectangle de côtés $2$ et $5$ n\'est pas un carré'],
    ['le réel $x$ est égal à $3$', 'le réel $x$ vérifie $x^2 = 9$', 'le réel $x$ est différent de $3$', 'le réel $x$ vérifie $x^2 \\neq 9$', 'imp', '$x = -3$ vérifie $x^2 = 9$ mais n\'est pas égal à $3$'],
    ['l\'entier $n$ est multiple de $4$', 'l\'entier $n$ est pair', 'l\'entier $n$ n\'est pas multiple de $4$', 'l\'entier $n$ est impair', 'imp', '$n = 6$ est pair sans être multiple de $4$'],
    ['le triangle $ABC$ est équilatéral', 'le triangle $ABC$ est isocèle', 'le triangle $ABC$ n\'est pas équilatéral', 'le triangle $ABC$ n\'est pas isocèle', 'imp', 'un triangle de côtés $5$, $5$ et $3$ est isocèle sans être équilatéral'],
    ['le réel $x$ vérifie $2x + 1 = 7$', 'le réel $x$ est égal à $3$', 'le réel $x$ vérifie $2x + 1 \\neq 7$', 'le réel $x$ est différent de $3$', 'eq', '$2x + 1 = 7$ équivaut à $2x = 6$, c\'est-à-dire à $x = 3$'],
    ['l\'entier $n$ est multiple de $2$ et de $5$', 'l\'entier $n$ est multiple de $10$', 'l\'entier $n$ n\'est pas multiple à la fois de $2$ et de $5$', 'l\'entier $n$ n\'est pas multiple de $10$', 'eq', 'être multiple de $2$ et de $5$ revient à être multiple de $2 \\times 5 = 10$'],
    ['le réel $x$ vérifie $x - 4 > 0$', 'le réel $x$ est strictement supérieur à $4$', 'le réel $x$ vérifie $x - 4 \\leqslant 0$', 'le réel $x$ est inférieur ou égal à $4$', 'eq', '$x - 4 > 0$ équivaut à $x > 4$ (on ajoute $4$ aux deux membres)'],
    ['l\'entier $n$ est pair', 'l\'entier $n$ est multiple de $3$', 'l\'entier $n$ est impair', 'l\'entier $n$ n\'est pas multiple de $3$', 'ni', '$n = 4$ est pair sans être multiple de $3$, et $n = 9$ est multiple de $3$ sans être pair'],
    ['le quadrilatère $ABCD$ est un rectangle', 'le quadrilatère $ABCD$ est un losange', 'le quadrilatère $ABCD$ n\'est pas un rectangle', 'le quadrilatère $ABCD$ n\'est pas un losange', 'ni', 'un rectangle de côtés $2$ et $5$ n\'est pas un losange, et un losange non carré n\'est pas un rectangle']
  ],
  /** Implications vraies et objet concret : [énoncé général, P, Q, non P, non Q] */
  _1T1_DED: [
    ['Si un entier est multiple de $6$, alors il est multiple de $3$.', 'l\'entier $m$', '$m$ est multiple de $6$', '$m$ est multiple de $3$', '$m$ n\'est pas multiple de $6$', '$m$ n\'est pas multiple de $3$'],
    ['Si un quadrilatère est un carré, alors ses diagonales ont la même longueur.', 'le quadrilatère $ABCD$', '$ABCD$ est un carré', 'les diagonales de $ABCD$ ont la même longueur', '$ABCD$ n\'est pas un carré', 'les diagonales de $ABCD$ n\'ont pas la même longueur'],
    ['Si un réel est strictement supérieur à $4$, alors son carré est strictement supérieur à $16$.', 'le réel $a$', '$a$ est strictement supérieur à $4$', '$a^2$ est strictement supérieur à $16$', '$a$ est inférieur ou égal à $4$', '$a^2$ est inférieur ou égal à $16$'],
    ['Si une pièce est conforme, alors sa masse est comprise entre $48$ g et $52$ g.', 'une pièce tirée de la production', 'la pièce est conforme', 'sa masse est comprise entre $48$ g et $52$ g', 'la pièce n\'est pas conforme', 'sa masse n\'est pas comprise entre $48$ g et $52$ g'],
    ['S\'il pleut, alors le terrain de football est mouillé.', 'ce matin', 'il pleut', 'le terrain est mouillé', 'il ne pleut pas', 'le terrain n\'est pas mouillé'],
    ['Si un entier se termine par $5$, alors il est multiple de $5$.', 'l\'entier $m$', '$m$ se termine par $5$', '$m$ est multiple de $5$', '$m$ ne se termine pas par $5$', '$m$ n\'est pas multiple de $5$']
  ],

  gen_1T1(tier) {
    const T = '1T1';
    const P = (x, d) => this._pct(x, d);
    const S = (x, d) => this._sg(x, d);
    const I = (x) => this._int(x);
    const D = (x) => this.dec(x, 4);
    const fam = this.randInt(0, 2);

    if (tier === 1) {
      if (fam === 0) {
        const v = this.randInt(0, 2);
        if (v === 0) {
          // pourcentage d'un effectif
          const N = this.randChoice([400, 500, 600, 800, 1000, 1200]);
          const p = this.randChoice([15, 20, 25, 30, 35, 40, 45, 60]);
          const n = N * p / 100;
          const [grp, what] = this.randChoice([['lycée technologique', 'sont en série STMG'], ['lycée technologique', 'sont demi-pensionnaires'], ['lycée technologique', 'viennent en transport scolaire'], ['entreprise', 'travaillent en équipe de nuit']]);
          const u = grp === 'entreprise' ? 'salariés' : 'élèves';
          return this._xa([String(n), this._VAL], T, 1, 'Appliquer un pourcentage',
            'Calculer un pourcentage d\'un effectif',
            `Un${grp === 'entreprise' ? 'e' : ''} ${grp} compte $${I(N)}$ ${u}, dont $${P(p)}$ ${what}. Combien ${this._1T1_de(u)} cela représente-t-il ?`,
            `$${I(n)}$`,
            [`$${I(N - n)}$`, `$${I(N * p / 10)}$`, `$${I(N + n)}$`],
            'Prendre $t\\,\\%$ d\'un effectif revient à le multiplier par $\\frac{t}{100}$.',
            `Multiplie l'effectif total $${I(N)}$ par $${D(p / 100)}$.`,
            `$${P(p)}$ de $${I(N)}$ : $${D(p / 100)} \\times ${I(N)} = ${I(n)}$ ${u}.`
          );
        }
        if (v === 1) {
          // proportion exprimée en pourcentage
          const N = this.randChoice([20, 25, 40, 50, 200, 250, 400, 500]);
          let p;
          do { p = this.randChoice([4, 8, 10, 12, 15, 20, 24, 30, 35, 40, 45, 60, 64, 75, 80]); } while (!Number.isInteger(N * p / 100));
          const n = N * p / 100;
          const [a, b] = this.randChoice([['Sur', 'pièces contrôlées, $X$ sont défectueuses'], ['Sur', 'clients interrogés, $X$ se déclarent satisfaits'], ['Sur', 'trajets d\'une ligne de bus, $X$ sont arrivés à l\'heure']]);
          return this._xa([String(p), this._PC], T, 1, 'Proportion en pourcentage',
            'Exprimer une proportion en pourcentage',
            `${a} $${I(N)}$ ${b.replace('$X$', `$${I(n)}$`)}. Quelle proportion cela représente-t-il, en pourcentage ?`,
            `$${P(p)}$`,
            [`$${P(this._r(100 * N / n) > 100 ? this._r(100 - p) : this._r(100 * N / n))}$`, `$${P(this._r(100 - p))}$`, `$${P(n)}$`],
            'La proportion d\'une partie dans un tout est $\\frac{\\text{effectif de la partie}}{\\text{effectif total}}$ ; on la multiplie par $100$ pour l\'exprimer en pourcentage.',
            `Calcule le quotient $${I(n)} \\div ${I(N)}$, puis multiplie par $100$.`,
            `$${I(n)} \\div ${I(N)} = ${D(p / 100)}$, soit $${P(p)}$.`
          );
        }
        // fraction -> pourcentage
        const [num, den] = this.randChoice([[1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 8], [3, 8], [5, 8], [7, 8], [1, 20], [3, 20], [7, 20], [9, 25], [1, 40]]);
        const p = this._r(100 * num / den);
        const who = this.randChoice(['des adhérents d\'une association utilisent l\'application de réservation', 'des salariés d\'une PME viennent au travail à vélo', 'des foyers d\'une commune trient leurs biodéchets', 'des élèves d\'un lycée déjeunent à la cantine']);
        return this._xa([this.decText(p), this._PC], T, 1, 'Fraction et pourcentage',
          'Passer d\'une fraction à un pourcentage',
          `Les $\\frac{${num}}{${den}}$ ${who}. Quel pourcentage cela représente-t-il ?`,
          `$${P(p)}$`,
          [`$${P(this._r(num * 100 / (den * 10)) === p ? p + 10 : this._r(num * 10 / den))}$`, `$${P(den)}$`, `$${P(this._r(100 - p))}$`],
          'Un pourcentage est une fraction de dénominateur $100$ : on écrit la fraction sous forme décimale, puis on multiplie par $100$.',
          `Calcule $${num} \\div ${den}$.`,
          `$\\frac{${num}}{${den}} = ${num} \\div ${den} = ${D(num / den)}$, soit $${P(p)}$.`
        );
      }
      if (fam === 1) {
        // intersection, réunion, complémentaire d'ensembles finis
        let A; let B; let inter;
        do {
          A = this.pickDistinct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5);
          B = this.pickDistinct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], this.randInt(4, 5));
          inter = A.filter((x) => B.includes(x));
        } while (inter.length < 1 || inter.length > 3);
        const op = this.randChoice(['cap', 'cup', 'comp']);
        const st = this._1T1_set.bind(this);
        const cup = [...new Set([...A, ...B])];
        const AmB = A.filter((x) => !B.includes(x));
        const BmA = B.filter((x) => !A.includes(x));
        const E = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const comp = E.filter((x) => !A.includes(x));
        const a0 = [...A].sort((x, y) => x - y)[0];
        if (op === 'comp') {
          const extra = [...A].sort((x, y) => x - y)[1];
          return this._xa('keep', T, 1, 'Complémentaire d\'un ensemble',
            'Déterminer le complémentaire d\'un ensemble',
            `On note $E$ l'ensemble des entiers de $1$ à $12$ et $A = ${st(A)}$. Quel est le complémentaire $\\bar{A}$ de $A$ dans $E$ ?`,
            `$\\bar{A} = ${st(comp)}$`,
            [`$\\bar{A} = ${st(comp.slice(1))}$`, `$\\bar{A} = ${st([...comp, extra])}$`, `$\\bar{A} = ${st(E.filter((x) => !B.includes(x)))}$`, `$\\bar{A} = ${st(comp.filter((x) => x % 2 === 0))}$`],
            'Le complémentaire $\\bar{A}$ contient exactement les éléments de $E$ qui n\'appartiennent pas à $A$.',
            `Parcours les entiers de $1$ à $12$ et barre ceux de $A$ : $${a0}$ est barré, par exemple.`,
            `On retire de $E$ les éléments de $A$, à savoir ${[...A].sort((x, y) => x - y).map((x) => `$${x}$`).join(', ')} : $\\bar{A} = ${st(comp)}$. Ces deux ensembles n'ont aucun élément commun et leur réunion est $E$.`
          );
        }
        const isCap = op === 'cap';
        const ans = isCap ? inter : cup;
        const sym = isCap ? '\\cap' : '\\cup';
        const wr = isCap
          ? [cup, AmB, BmA, [...inter, ...AmB.slice(0, 1)]]
          : [inter, [...AmB, ...BmA], cup.filter((x) => x !== a0), A];
        return this._xa('keep', T, 1, isCap ? 'Intersection de deux ensembles' : 'Réunion de deux ensembles',
          isCap ? 'Déterminer une intersection' : 'Déterminer une réunion',
          `On considère les ensembles $A = ${st(A)}$ et $B = ${st(B)}$. Quel est l'ensemble $A ${sym} B$ ?`,
          `$A ${sym} B = ${st(ans)}$`,
          wr.filter((w) => st(w) !== st(ans)).map((w) => `$A ${sym} B = ${st(w)}$`),
          isCap ? 'L\'intersection $A \\cap B$ est formée des éléments qui appartiennent à la fois à $A$ et à $B$.' : 'La réunion $A \\cup B$ est formée des éléments qui appartiennent à $A$ ou à $B$ (ou aux deux), chacun écrit une seule fois.',
          isCap ? `Pour chaque élément de $A$, regarde s'il figure aussi dans $B$ : commence par $${a0}$.` : `Écris tous les éléments de $A$, puis ajoute ceux de $B$ qui n'y figurent pas encore.`,
          isCap
            ? `Les éléments communs à $A$ et à $B$ sont ${inter.sort((x, y) => x - y).map((x) => `$${x}$`).join(', ')} : $A \\cap B = ${st(inter)}$.`
            : `On réunit les éléments des deux ensembles sans répéter les éléments communs (${inter.sort((x, y) => x - y).map((x) => `$${x}$`).join(', ')}) : $A \\cup B = ${st(cup)}$.`
        );
      }
      // connecteurs « et » / « ou »
      for (let k = 0; k < 200; k++) {
        const [p, q] = this.pickDistinct(this._1T1_PROPS, 2);
        const et = Math.random() < 0.5;
        const R = Array.from({ length: 40 }, (_, i) => i + 1);
        const both = R.filter((n) => p.f(n) && q.f(n));
        const onlyP = R.filter((n) => p.f(n) && !q.f(n));
        const onlyQ = R.filter((n) => !p.f(n) && q.f(n));
        const none = R.filter((n) => !p.f(n) && !q.f(n));
        let ans; let wr;
        if (et) {
          if (!both.length || !onlyP.length || !onlyQ.length || !none.length) continue;
          ans = this.randChoice(both);
          wr = [this.randChoice(onlyP), this.randChoice(onlyQ), this.randChoice(none)];
        } else {
          if (none.length < 3 || !(onlyP.length + onlyQ.length)) continue;
          ans = this.randChoice([...onlyP, ...onlyQ]);
          wr = this.pickDistinct(none, 3);
        }
        const conn = et ? 'et' : 'ou';
        const desc = (n) => `$${n}$ ${p.f(n) ? 'est' : 'n\'est pas'} ${p.t} et ${q.f(n) ? 'est' : 'n\'est pas'} ${q.t}`;
        const all = [ans, ...wr].sort((x, y) => x - y);
        return this._xa('keep', T, 1, `Connecteur « ${conn} »`,
          `Utiliser le connecteur logique « ${conn} »`,
          `Lequel des entiers suivants vérifie la proposition « $n$ est ${p.t} ${conn} $n$ est ${q.t} » ?`,
          `$${ans}$`,
          wr.map((w) => `$${w}$`),
          et ? 'Une proposition « $P$ et $Q$ » est vraie seulement lorsque $P$ et $Q$ sont vraies toutes les deux.' : 'Une proposition « $P$ ou $Q$ » est vraie dès que l\'une au moins des deux est vraie : le « ou » mathématique est inclusif.',
          `Pour chacun des quatre entiers, teste d'abord la condition « $n$ est ${p.t} ».`,
          `${all.map(desc).join(' ; ')}. ${et ? `Seul $${ans}$ vérifie les deux conditions à la fois.` : `Seul $${ans}$ vérifie au moins l'une des deux conditions.`}`
        );
      }
      return this.gen_1T1(1);
    }

    if (tier === 2) {
      if (fam === 0) {
        const c = this.randChoice(this._1T1_EVO);
        const V0 = this.randChoice(c.v);
        const t = this.randChoice([-30, -25, -20, -15, -12, -10, -8, -5, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40]);
        const V1 = this._r(V0 * (1 + t / 100));
        if (Math.random() < 0.5) {
          return this._xa([String(t), this._TX], T, 2, 'Taux d\'évolution',
            'Calculer un taux d\'évolution entre deux valeurs',
            `${c.s} passe de $${I(V0)}$ à $${I(V1)}$. Quel est le taux d'évolution ?`,
            `$${S(t)}$`,
            [`$${S(-t)}$`, `$${S(this._r((V1 - V0) / V1 * 100))}$`, `$${S(this._r(100 * V1 / V0))}$`],
            'Le taux d\'évolution d\'une valeur $V_0$ à une valeur $V_1$ est $\\frac{V_1 - V_0}{V_0}$, à écrire ensuite en pourcentage.',
            `Calcule d'abord la variation $V_1 - V_0 = ${I(V1)} - ${I(V0)}$, puis divise par la valeur de départ.`,
            `$\\frac{${I(V1)} - ${I(V0)}}{${I(V0)}} = \\frac{${I(this._r(V1 - V0))}}{${I(V0)}} = ${D(t / 100)}$, soit un taux de $${S(t)}$.`
          );
        }
        return this._xa([this.decText(V1), this._VAL], T, 2, 'Valeur après une évolution',
          'Appliquer un taux d\'évolution',
          `${c.s} vaut $${I(V0)}$, puis ${t > 0 ? 'augmente' : 'diminue'} de $${P(Math.abs(t))}$. Quelle est sa nouvelle valeur ?`,
          `$${I(V1)}$`,
          [`$${I(this._r(V0 * (1 - t / 100)))}$`, `$${I(this._r(V0 * Math.abs(t) / 100))}$`, `$${I(V0 + t)}$`],
          `${t > 0 ? 'Augmenter' : 'Diminuer'} de $t\\,\\%$ revient à multiplier par le coefficient multiplicateur $1 ${t > 0 ? '+' : '-'} \\frac{t}{100}$.`,
          `Le coefficient multiplicateur vaut $${D(1 + t / 100)}$ ; multiplie $${I(V0)}$ par ce nombre.`,
          `$${I(V0)} \\times ${D(1 + t / 100)} = ${I(V1)}$.`
        );
      }
      if (fam === 1) {
        const c = this.randChoice(this._1T1_POP);
        let N; let a; let b; let ab;
        do {
          N = this.randChoice(c.N);
          a = this.randInt(Math.round(N * 0.25), Math.round(N * 0.6));
          b = this.randInt(Math.round(N * 0.2), Math.round(N * 0.5));
          ab = this.randInt(2, Math.min(a, b) - 2);
        } while (a + b - ab >= N || a === b);
        const cupN = a + b - ab;
        const v = this.randInt(0, 2);
        const q = v === 0 ? c.cup : v === 1 ? c.none : c.onlyA;
        const r = v === 0 ? cupN : v === 1 ? N - cupN : a - ab;
        const st = `${c.pre} $${N}$ ${c.who}. Parmi eux, $${a}$ ${c.A}, $${b}$ ${c.B} et $${ab}$ ${c.AB}. Combien ${this._1T1_de(c.who)} ${q} ?`;
        const sol0 = `Notons $A$ l'ensemble des ${c.who} qui ${c.A.replace(/^(\S+)/, '$1')} et $B$ celui des ${c.who} qui ${c.B}. $\\text{Card}(A \\cup B) = \\text{Card}(A) + \\text{Card}(B) - \\text{Card}(A \\cap B) = ${a} + ${b} - ${ab} = ${cupN}$.`;
        return this._xa([String(r), this._VAL], T, 2, v === 0 ? 'Cardinal d\'une réunion' : v === 1 ? 'Complémentaire d\'une réunion' : 'Éléments d\'un seul ensemble',
          'Dénombrer à l\'aide d\'une réunion et d\'une intersection',
          st,
          `$${r}$`,
          v === 0 ? [`$${a + b}$`, `$${N - cupN}$`, `$${a + b - 2 * ab}$`] : v === 1 ? [`$${cupN}$`, `$${N - a - b}$` , `$${N - a - b + 2 * ab}$`] : [`$${a}$`, `$${b - ab}$`, `$${a + ab}$`],
          v === 2 ? 'Les éléments de $A$ se partagent entre ceux qui sont aussi dans $B$ et ceux qui n\'y sont pas : $\\text{Card}(A) = \\text{Card}(A \\cap B) + \\text{Card}(A \\cap \\bar{B})$.' : v === 1 ? 'On dénombre d\'abord la réunion $A \\cup B$ grâce à $\\text{Card}(A \\cup B) = \\text{Card}(A) + \\text{Card}(B) - \\text{Card}(A \\cap B)$, puis on passe au complémentaire dans la population totale.' : 'Pour deux ensembles finis : $\\text{Card}(A \\cup B) = \\text{Card}(A) + \\text{Card}(B) - \\text{Card}(A \\cap B)$, car les éléments communs sont comptés deux fois dans la somme.',
          v === 2 ? `Parmi les $${a}$ ${c.who} concernés, retire ceux qui ${c.AB}.` : `Les $${ab}$ ${c.who} qui ${c.AB} sont comptés deux fois dans $${a} + ${b}$.`,
          v === 0 ? sol0 : v === 1 ? `${sol0} Les autres ${c.who} ${c.none} : $${N} - ${cupN} = ${r}$.` : `Parmi les $${a}$ ${c.who} qui ${c.A}, $${ab}$ ${c.AB} : il en reste $${a} - ${ab} = ${r}$ qui ${c.onlyA}.`
        );
      }
      // intersection / réunion de deux intervalles
      let a; let b; let c; let d;
      do {
        [a, c, b, d] = this.pickDistinct([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4).sort((x, y) => x - y);
      } while (b - c < 1);
      const [il, ih, jl, jh] = [0, 0, 0, 0].map(() => Math.random() < 0.5);
      const iv = this._1T1_iv.bind(this);
      const Itx = iv(il, a, b, ih); const Jtx = iv(jl, c, d, jh);
      const isCap = Math.random() < 0.5;
      const capT = iv(jl, c, b, ih); const cupT = iv(il, a, d, jh);
      const ans = isCap ? capT : cupT;
      const wr = isCap ? [cupT, iv(!jl, c, b, !ih), iv(il, a, c, !jl)] : [capT, iv(!il, a, d, !jh), Itx];
      const sym = isCap ? '\\cap' : '\\cup';
      const inc = (x) => (x ? 'incluse' : 'exclue');
      return this._xa('keep', T, 2, isCap ? 'Intersection d\'intervalles' : 'Réunion d\'intervalles',
        isCap ? 'Déterminer l\'intersection de deux intervalles' : 'Déterminer la réunion de deux intervalles',
        `On considère les intervalles $I = ${Itx}$ et $J = ${Jtx}$. Quel est l'ensemble $I ${sym} J$ ?`,
        `$I ${sym} J = ${ans}$`,
        wr.filter((w) => w !== ans).map((w) => `$I ${sym} J = ${w}$`),
        isCap ? 'Un réel appartient à $I \\cap J$ lorsqu\'il appartient aux deux intervalles : on garde la partie commune, avec ses crochets d\'origine.' : 'Un réel appartient à $I \\cup J$ lorsqu\'il appartient à l\'un au moins des deux intervalles : on regroupe les deux parties.',
        `Place les bornes $${a}$, $${c}$, $${b}$ et $${d}$ sur une droite graduée et colorie chacun des deux intervalles.`,
        isCap
          ? `Les deux intervalles se chevauchent entre $${c}$ et $${b}$. La borne $${c}$ vient de $J$ (${inc(jl)}) et la borne $${b}$ vient de $I$ (${inc(ih)}) : $I \\cap J = ${capT}$.`
          : `Comme $${c} < ${b}$, les deux intervalles se chevauchent et leur réunion est d'un seul tenant, de $${a}$ (borne de $I$, ${inc(il)}) à $${d}$ (borne de $J$, ${inc(jh)}) : $I \\cup J = ${cupT}$.`
      );
    }

    if (tier === 3) {
      if (fam === 0) {
        const c = this.randChoice(this._1T1_EVO);
        if (Math.random() < 0.6) {
          let t1; let t2; let g;
          do {
            t1 = this.randChoice([-40, -30, -25, -20, -10, -5, 5, 10, 20, 25, 30, 40, 50]);
            t2 = this.randChoice([-40, -30, -20, -10, -5, 5, 10, 20, 30, 50]);
            g = this._r(((1 + t1 / 100) * (1 + t2 / 100) - 1) * 100);
          } while (g === 0 || g === t1 + t2);
          return this._xa([this.decText(g), this._TX], T, 3, 'Deux évolutions successives',
            'Calculer un taux d\'évolution global',
            `${c.s} ${t1 > 0 ? 'augmente' : 'diminue'} de $${P(Math.abs(t1))}$ une première année, puis ${t2 > 0 ? 'augmente' : 'diminue'} de $${P(Math.abs(t2))}$ l'année suivante. Quel est le taux d'évolution global sur les deux années ?`,
            `$${S(g)}$`,
            [`$${S(t1 + t2 === 0 ? -g : t1 + t2)}$`, `$${S(-g)}$`, `$${S(this._r(t1 * t2 / 100) || 3)}$`],
            'Le coefficient multiplicateur global d\'évolutions successives est le produit des coefficients multiplicateurs.',
            `Les coefficients sont $${D(1 + t1 / 100)}$ et $${D(1 + t2 / 100)}$ : multiplie-les.`,
            `$CM = ${D(1 + t1 / 100)} \\times ${D(1 + t2 / 100)} = ${D(1 + g / 100)}$, donc le taux global est $${D(1 + g / 100)} - 1 = ${D(g / 100)}$, soit $${S(g)}$. Les taux ne s'additionnent pas : $${S(t1 + t2)}$ serait faux.`
          );
        }
        const [t, r] = this.randChoice([[25, -20], [100, -50], [150, -60], [300, -75], [400, -80], [60, -37.5], [-20, 25], [-50, 100], [-60, 150], [-75, 300], [-80, 400], [-37.5, 60], [-90, 900], [-10, 11.1111]]).filter(() => true);
        if (Math.abs(r - 11.1111) < 1e-3) return this.gen_1T1(3);
        return this._xa([this.decText(r), this._TX], T, 3, 'Évolution réciproque',
          'Calculer un taux réciproque',
          `${c.s} a ${t > 0 ? 'augmenté' : 'diminué'} de $${P(Math.abs(t))}$. De quel pourcentage cette grandeur doit-elle évoluer pour revenir à sa valeur de départ ?`,
          `$${S(r)}$`,
          [`$${S(-t)}$`, `$${S(-r)}$`, `$${S(this._r(-t / 2))}$`],
          'L\'évolution réciproque a pour coefficient multiplicateur l\'inverse du coefficient de départ.',
          `Le coefficient de départ vaut $${D(1 + t / 100)}$ ; calcule son inverse.`,
          `$\\frac{1}{${D(1 + t / 100)}} = ${D(1 + r / 100)}$, donc il faut une évolution de $${D(1 + r / 100)} - 1 = ${D(r / 100)}$, soit $${S(r)}$ (et non $${S(-t)}$).`
        );
      }
      if (fam === 1) {
        const row = this.randChoice(this._1T1_IMP);
        const [p, q, np, nq, kind, why] = row;
        if (Math.random() < 0.5 || kind !== 'imp') {
          // condition nécessaire / suffisante
          const swap = kind === 'imp' && Math.random() < 0.5;
          const [X, Y] = swap ? [q, p] : [p, q];
          const ans = kind === 'eq' ? 'nécessaire et suffisante' : kind === 'ni' ? 'ni nécessaire ni suffisante' : swap ? 'nécessaire mais pas suffisante' : 'suffisante mais pas nécessaire';
          const all = ['suffisante mais pas nécessaire', 'nécessaire mais pas suffisante', 'nécessaire et suffisante', 'ni nécessaire ni suffisante'];
          const expl = kind === 'eq'
            ? `Les deux propositions sont équivalentes : ${why}. Chacune implique l'autre, donc $P$ est une condition nécessaire et suffisante pour $Q$.`
            : kind === 'ni'
              ? `Aucune des deux implications n'est vraie : ${why}. La condition $P$ n'est donc ni nécessaire ni suffisante pour $Q$.`
              : swap
                ? `L'implication « $Q \\Rightarrow P$ » est vraie : dès que ${p}, on a ${q}. Donc $P$ est nécessaire pour $Q$. En revanche « $P \\Rightarrow Q$ » est fausse : ${why}. Donc $P$ n'est pas suffisante.`
                : `L'implication « $P \\Rightarrow Q$ » est vraie : dès que ${p}, on a ${q}. Donc $P$ est suffisante pour $Q$. La réciproque est fausse : ${why}. Donc $P$ n'est pas nécessaire.`;
          return this._xa('keep', T, 3, 'Condition nécessaire, condition suffisante',
            'Distinguer condition nécessaire et condition suffisante',
            `On considère les propositions $P$ : « ${X} » et $Q$ : « ${Y} ». Pour que $Q$ soit vraie, la condition $P$ est :`,
            ans,
            all.filter((x) => x !== ans),
            '$P$ est suffisante pour $Q$ lorsque « $P \\Rightarrow Q$ » est vraie ; $P$ est nécessaire pour $Q$ lorsque « $Q \\Rightarrow P$ » est vraie.',
            'Examine séparément les deux implications « $P \\Rightarrow Q$ » et « $Q \\Rightarrow P$ », en cherchant un contre-exemple pour chacune.',
            expl
          );
        }
        // réciproque ou contraposée
        const rec = Math.random() < 0.5;
        const cap = (s) => `Si ${s.replace(/^le /, 'le ').replace(/^l'/, 'l\'')}`;
        const imp = (u, v) => `${cap(u)}, alors ${v}.`;
        const opts = { rec: imp(q, p), contra: imp(nq, np), inv: imp(np, nq), neg: imp(p, nq) };
        const ans = rec ? opts.rec : opts.contra;
        return this._xa('keep', T, 3, rec ? 'Réciproque d\'une implication' : 'Contraposée d\'une implication',
          rec ? 'Écrire la réciproque d\'une implication' : 'Écrire la contraposée d\'une implication',
          `On considère l'implication « ${imp(p, q).slice(0, -1)} ». Quelle est sa ${rec ? 'réciproque' : 'contraposée'} ?`,
          ans,
          Object.values(opts).filter((x) => x !== ans),
          rec ? 'La réciproque de « si $P$, alors $Q$ » est « si $Q$, alors $P$ » : on échange l\'hypothèse et la conclusion.' : 'La contraposée de « si $P$, alors $Q$ » est « si non $Q$, alors non $P$ » : on échange et on nie l\'hypothèse et la conclusion.',
          `Repère l'hypothèse « ${p} » et la conclusion « ${q} ».`,
          rec
            ? `On échange l'hypothèse et la conclusion : « ${opts.rec} » Ici l'implication de départ est vraie mais sa réciproque est fausse : ${why}.`
            : `On échange l'hypothèse et la conclusion en les niant : « ${opts.contra} » Une implication et sa contraposée sont toujours vraies ou fausses en même temps.`
        );
      }
      // contre-exemple (saisie d'un entier, toutes les bonnes réponses acceptées)
      if (Math.random() < 0.5) {
        const [a, b] = this.randChoice([[6, 4], [4, 8], [9, 6], [10, 4], [15, 10], [6, 9], [8, 12], [12, 8], [10, 15], [14, 4]]);
        const M = 60;
        const ok = (n) => n % a === 0 && n % b !== 0;
        const all = Array.from({ length: M }, (_, i) => i + 1).filter(ok);
        const wr = [b, a * b / this.gcd(a, b), a + 1, 2 * b].filter((x) => x <= M && !ok(x));
        return this._xa([String(a), 'Saisir un entier.', all.slice(1).map(String)], T, 3, 'Trouver un contre-exemple',
          'Réfuter une affirmation par un contre-exemple',
          `On considère l'affirmation : « tout entier multiple de $${a}$ est multiple de $${b}$ ». Quel entier compris entre $1$ et $${M}$ est un contre-exemple à cette affirmation ?`,
          `$${a}$`,
          wr.map((x) => `$${x}$`),
          'Un contre-exemple à « tout objet qui vérifie $P$ vérifie $Q$ » est un objet qui vérifie $P$ mais pas $Q$.',
          `Cherche un multiple de $${a}$ qui n'est pas multiple de $${b}$ : essaie les premiers multiples de $${a}$.`,
          `$${a}$ est multiple de $${a}$ mais n'est pas multiple de $${b}$ : c'est un contre-exemple, et l'affirmation est fausse. (Tout multiple de $${a}$ non multiple de $${b}$ convient, par exemple ${all.slice(1, 3).map((x) => `$${x}$`).join(' ou ')}.)`
        );
      }
      const k = this.randInt(3, 9);
      const all = Array.from({ length: k + 1 }, (_, i) => i);
      return this._xa([String(k), 'Saisir un entier naturel.', all.slice(0, -1).map(String)], T, 3, 'Contre-exemple et inégalité',
        'Réfuter une affirmation par un contre-exemple',
        `On considère l'affirmation : « pour tout entier naturel $n$, $n^2 > ${k}n$ ». Quel entier naturel est un contre-exemple à cette affirmation ?`,
        `$${k}$`,
        [`$${k + 1}$`, `$${k + 2}$`, `$${2 * k}$`],
        'Un contre-exemple est une valeur de $n$ pour laquelle l\'inégalité annoncée est fausse.',
        `Compare $n^2$ et $${k}n$ pour quelques entiers, par exemple $n = 1$, puis $n = ${k + 1}$.`,
        `Pour $n = ${k}$ : $n^2 = ${k * k}$ et $${k}n = ${k * k}$, donc $n^2 > ${k}n$ est fausse. L'affirmation est fausse. (Les entiers de $0$ à $${k}$ sont tous des contre-exemples : pour $n \\geqslant 1$, $n^2 > ${k}n$ équivaut à $n > ${k}$.)`
      );
    }

    // Palier 4
    if (fam === 0) {
      const c = this.randChoice(this._1T1_POP);
      let N; let a; let b; let ab; let none;
      do {
        N = this.randChoice(c.N);
        a = this.randInt(Math.round(N * 0.3), Math.round(N * 0.6));
        b = this.randInt(Math.round(N * 0.25), Math.round(N * 0.55));
        ab = this.randInt(2, Math.min(a, b) - 2);
        none = N - (a + b - ab);
      } while (none < 1 || a === b);
      return this._xa([String(ab), this._VAL], T, 4, 'Retrouver une intersection',
        'Dénombrer une intersection à partir d\'une réunion',
        `${c.pre} $${N}$ ${c.who}. On sait que $${a}$ ${c.A}, que $${b}$ ${c.B} et que $${none}$ ${c.none}. Combien ${this._1T1_de(c.who)} ${c.AB} ?`,
        `$${ab}$`,
        [a + b - N, N - a - b + none, a + b - none].map((v) => `$${v > 0 ? v : a + b}$`),
        'On calcule d\'abord le nombre d\'éléments de la réunion à l\'aide du complémentaire, puis on utilise $\\text{Card}(A \\cap B) = \\text{Card}(A) + \\text{Card}(B) - \\text{Card}(A \\cup B)$.',
        `Les ${c.who} qui ${c.cup} sont au nombre de $${N} - ${none}$.`,
        `$\\text{Card}(A \\cup B) = ${N} - ${none} = ${N - none}$. Donc $\\text{Card}(A \\cap B) = ${a} + ${b} - ${N - none} = ${ab}$ : $${ab}$ ${c.who} ${c.AB}.`
      );
    }
    if (fam === 1) {
      const [t1, t2] = this.randChoice([[20, -25], [-20, 50], [10, -20], [50, -40], [-10, -20], [20, 25], [-25, 20], [40, -50], [-30, 50], [60, -25], [-40, 25], [25, -12], [-20, -25], [30, 10]]);
      const g = this._r(((1 + t1 / 100) * (1 + t2 / 100) - 1) * 100);
      const c = this.randChoice(this._1T1_EVO);
      return this._xa([this.decText(t2), this._TX], T, 4, 'Évolution manquante',
        'Déterminer une évolution connaissant le taux global',
        `${c.s} ${t1 > 0 ? 'augmente' : 'diminue'} de $${P(Math.abs(t1))}$ une première année. Sur les deux années, l'évolution globale est ${g > 0 ? 'une hausse' : 'une baisse'} de $${P(Math.abs(g))}$. Quel a été le taux d'évolution la deuxième année ?`,
        `$${S(t2)}$`,
        [`$${S(this._r(g - t1) || 2)}$`, `$${S(-t2)}$`, `$${S(this._r(t1 - g) || 3)}$`],
        'Le coefficient global est le produit des coefficients annuels : on obtient celui de la deuxième année par un quotient.',
        `Le coefficient global vaut $${D(1 + g / 100)}$ et celui de la première année $${D(1 + t1 / 100)}$.`,
        `$CM_2 = \\frac{${D(1 + g / 100)}}{${D(1 + t1 / 100)}} = ${D(1 + t2 / 100)}$, donc le taux de la deuxième année est $${D(t2 / 100)}$, soit $${S(t2)}$ (on ne soustrait pas les taux).`
      );
    }
    // déduction à partir d'une implication vraie
    const [imp, obj, p, q, np, nq] = this.randChoice(this._1T1_DED);
    const kase = this.randChoice(['P', 'nQ', 'Q', 'nP']);
    const fact = { P: p, nQ: nq, Q: q, nP: np }[kase];
    const rien = 'On ne peut rien en déduire.';
    const ccl = (s) => `On peut en déduire ${this._1T1_que(s)}.`;
    const ans = kase === 'P' ? ccl(q) : kase === 'nQ' ? ccl(np) : rien;
    const pool = [ccl(q), ccl(np), ccl(p), ccl(nq), rien].filter((x) => x !== ans && x !== ccl(fact));
    const objTxt = obj === 'ce matin' ? 'Ce matin' : `Pour ${obj}`;
    const expl = kase === 'P'
      ? `L'hypothèse de l'implication est vérifiée, donc sa conclusion l'est aussi : ${q}.`
      : kase === 'nQ'
        ? `On utilise la contraposée, qui est vraie elle aussi : « si ${nq}, alors ${np} ». Comme ${nq}, on en déduit ${this._1T1_que(np)}.`
        : kase === 'Q'
          ? `Savoir que ${q} ne permet pas de conclure : ce serait utiliser la réciproque, qui n'est pas forcément vraie. On ne peut rien en déduire sur la proposition « ${p} ».`
          : `Savoir que ${np} ne permet pas de conclure : une implication ne dit rien lorsque son hypothèse est fausse. On ne peut rien en déduire sur la proposition « ${q} ».`;
    return this._xa('keep', T, 4, 'Raisonner avec une implication',
      'Utiliser une implication et sa contraposée',
      `On admet la proposition : « ${imp} » ${objTxt}, on sait ${this._1T1_que(fact)}. Que peut-on en déduire ?`,
      ans,
      pool,
      'Une implication vraie « si $P$, alors $Q$ » permet de conclure $Q$ lorsque $P$ est vraie, et non $P$ lorsque $Q$ est fausse (contraposée) ; dans les autres cas, on ne peut rien conclure.',
      `Repère si l'information « ${fact} » correspond à l'hypothèse, à la conclusion ou à la négation de l'une d'elles.`,
      expl
    );
  },
  // ---- 1T2 : Algorithmique Python ----
  /** Bloc de code Python */
  _1T2_py(lines) { return '\n```python\n' + lines.join('\n') + '\n```\n'; },
  /** Code en ligne (options de QCM) */
  _1T2_c(s) { return '`' + s + '`'; },
  /** Option « Remplacer `a` par `b` » */
  _1T2_r(a, b) { return 'Remplacer `' + a + '` par `' + b + '`'; },
  /** Écriture Python d'une liste */
  _1T2_l(L) { return '[' + L.join(', ') + ']'; },
  /** Liste mathématique en mode texte : $3$, $5$ et $8$ */
  _1T2_enum(L) { return L.map((x) => `$${this.dec(x, 4)}$`).join(' + '); },

  gen_1T2(tier) {
    const T = '1T2';
    const py = (l) => this._1T2_py(l);
    const C = (s) => this._1T2_c(s);
    const R = (a, b) => this._1T2_r(a, b);
    const LS = (L) => this._1T2_l(L);
    const N = (x) => this.dec(x, 4);
    const VAL = 'Saisir la valeur (virgule décimale si besoin).';
    const fam = this.randInt(0, 2);

    if (tier === 1) {
      if (fam === 0) {
        // indices d'une liste et longueur
        const n = this.randInt(5, 7);
        const L = this.pickDistinct([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], n);
        const v = this.randInt(0, 2);
        if (v === 2) {
          return this._xa([String(n), VAL], T, 1, 'Longueur d\'une liste',
            'Déterminer la longueur d\'une liste',
            `On considère le programme Python suivant. Quelle valeur affiche-t-il ?${py([`L = ${LS(L)}`, 'print(len(L))'])}`,
            `$${n}$`,
            [`$${n - 1}$`, `$${n + 1}$`, `$${L[n - 1]}$`],
            '`len(L)` renvoie le nombre d\'éléments de la liste `L`.',
            'Compte les éléments séparés par des virgules entre les crochets.',
            `La liste contient $${n}$ éléments, donc \`len(L)\` vaut $${n}$. Ses indices vont de $0$ à $${n - 1}$.`
          );
        }
        const k = v === 0 ? this.randInt(1, n - 2) : -1;
        const idx = v === 0 ? k : n - 1;
        const wr = v === 0 ? [L[k - 1], L[k + 1], k] : [L[0], L[n - 2], n];
        return this._xa([String(L[idx]), VAL], T, 1, v === 0 ? 'Élément d\'une liste' : 'Dernier élément d\'une liste',
          'Accéder à un élément d\'une liste par son indice',
          `On considère le programme Python suivant. Quelle valeur affiche-t-il ?${py([`L = ${LS(L)}`, `print(L[${k}])`])}`,
          `$${L[idx]}$`,
          wr.map((x) => `$${x}$`),
          v === 0 ? 'En Python, les éléments d\'une liste sont numérotés à partir de l\'indice $0$ : `L[0]` est le premier élément.' : 'Un indice négatif compte à partir de la fin : `L[-1]` est le dernier élément de la liste.',
          v === 0 ? `\`L[0]\` vaut $${L[0]}$, \`L[1]\` vaut $${L[1]}$ : continue jusqu'à l'indice demandé.` : 'Repère l\'élément placé juste avant le crochet fermant.',
          v === 0 ? `Les indices commencent à $0$ : \`L[${k}]\` est le ${k + 1}${k === 0 ? 'er' : 'e'} élément de la liste, c'est-à-dire $${L[k]}$.` : `\`L[-1]\` désigne le dernier élément de la liste : $${L[n - 1]}$.`
        );
      }
      if (fam === 1) {
        // affectations successives
        const a0 = this.randInt(2, 9);
        const b0 = this.randInt(2, 9);
        const v = this.randInt(0, 2);
        let lines; let a; let b; let ask; let steps;
        if (v === 0) {
          a = a0 + b0; b = a - b0; a = a - b;
          lines = [`a = ${a0}`, `b = ${b0}`, 'a = a + b', 'b = a - b', 'a = a - b'];
          ask = this.randChoice(['a', 'b']);
          steps = `Après \`a = a + b\`, $a = ${a0 + b0}$ ; après \`b = a - b\`, $b = ${a0 + b0} - ${b0} = ${a0}$ ; après \`a = a - b\`, $a = ${a0 + b0} - ${a0} = ${b0}$.`;
        } else if (v === 1) {
          a = 2 * a0; b = a + b0; a = b * 3;
          lines = [`a = ${a0}`, `b = ${b0}`, 'a = 2 * a', 'b = a + b', 'a = b * 3'];
          ask = this.randChoice(['a', 'b']);
          steps = `Après \`a = 2 * a\`, $a = ${2 * a0}$ ; après \`b = a + b\`, $b = ${2 * a0} + ${b0} = ${2 * a0 + b0}$ ; après \`a = b * 3\`, $a = ${3 * (2 * a0 + b0)}$.`;
        } else {
          b = a0 * a0 - b0; a = b - a0;
          lines = [`a = ${a0}`, `b = ${b0}`, 'b = a ** 2 - b', 'a = b - a'];
          ask = this.randChoice(['a', 'b']);
          steps = `Après \`b = a ** 2 - b\`, $b = ${a0}^2 - ${b0} = ${a0 * a0 - b0}$ ; après \`a = b - a\`, $a = ${a0 * a0 - b0} - ${a0} = ${a0 * a0 - b0 - a0}$.`;
        }
        const r = ask === 'a' ? a : b;
        const other = ask === 'a' ? b : a;
        return this._xa([String(r), VAL], T, 1, 'Affectations successives',
          'Suivre des affectations successives',
          `On exécute le programme Python suivant. Quelle est la valeur de la variable \`${ask}\` à la fin ?${py(lines)}`,
          `$${r}$`,
          [`$${other === r ? r + 2 : other}$`, `$${ask === 'a' ? a0 : b0}$`, `$${r + a0}$`],
          'Les instructions s\'exécutent dans l\'ordre ; une affectation calcule d\'abord le membre de droite avec les valeurs actuelles, puis remplace l\'ancienne valeur de la variable.',
          `Au départ $a = ${a0}$ et $b = ${b0}$ : exécute la troisième ligne avec ces valeurs, puis continue ligne par ligne.`,
          `${steps} À la fin, \`${ask}\` vaut $${r}$.`
        );
      }
      // boucle for simple
      const v = this.randInt(0, 2);
      const n = this.randInt(4, 9);
      if (v === 0) {
        const s0 = this.randInt(1, 20);
        const k = this.randInt(2, 9);
        const r = s0 + n * k;
        return this._xa([String(r), VAL], T, 1, 'Boucle bornée',
          'Exécuter une boucle bornée',
          `Quelle valeur affiche le programme Python suivant ?${py([`s = ${s0}`, `for i in range(${n}):`, `    s = s + ${k}`, 'print(s)'])}`,
          `$${r}$`,
          [`$${s0 + (n - 1) * k}$`, `$${s0 + (n + 1) * k}$`, `$${n * k}$`],
          '`range(n)` fait prendre à `i` les valeurs $0$, $1$, …, $n - 1$ : la boucle est donc répétée $n$ fois.',
          `La boucle est répétée $${n}$ fois et ajoute $${k}$ à chaque passage.`,
          `La boucle ajoute $${n}$ fois $${k}$ à la valeur de départ : $${s0} + ${n} \\times ${k} = ${r}$.`
        );
      }
      if (v === 1) {
        const r = n * (n + 1) / 2;
        return this._xa([String(r), VAL], T, 1, 'Somme des premiers entiers',
          'Exécuter une boucle bornée avec un accumulateur',
          `Quelle valeur affiche le programme Python suivant ?${py(['s = 0', `for i in range(1, ${n + 1}):`, '    s = s + i', 'print(s)'])}`,
          `$${r}$`,
          [`$${r - n}$`, `$${r + n + 1}$`, `$${n + 1}$`],
          '`range(1, m)` fait prendre à `i` les valeurs entières de $1$ à $m - 1$ (la borne de droite est exclue).',
          `\`i\` prend les valeurs $1$, $2$, …, $${n}$ : la variable \`s\` accumule ces valeurs.`,
          `\`s\` reçoit successivement la somme $1 + 2 + \\dots + ${n} = ${r}$.`
        );
      }
      const r = 2 ** n;
      return this._xa([String(r), VAL], T, 1, 'Doublements successifs',
        'Exécuter une boucle bornée avec un produit',
        `Quelle valeur affiche le programme Python suivant ?${py(['p = 1', `for i in range(${n}):`, '    p = 2 * p', 'print(p)'])}`,
        `$${r}$`,
        [`$${2 * n}$`, `$${r / 2}$`, `$${2 * r}$`],
        'La boucle multiplie la variable par le même nombre à chaque passage : on obtient une puissance.',
        `La boucle est répétée $${n}$ fois : \`p\` vaut $1$, puis $2$, puis $4$, et ainsi de suite.`,
        `\`p\` est multiplié $${n}$ fois par $2$ : $p = 2^{${n}} = ${r}$.`
      );
    }

    if (tier === 2) {
      if (fam === 0) {
        const v = this.randInt(0, 2);
        if (v === 2) {
          // moyenne d'une liste
          let L; let s;
          do { L = Array.from({ length: 4 }, () => this.randInt(6, 19)); s = L.reduce((x, y) => x + y, 0); } while (s % 4 === 0 && Math.random() < 0.5);
          const m = s / 4;
          return this._xa([this.decText(m), VAL], T, 2, 'Moyenne des éléments d\'une liste',
            'Calculer une moyenne avec un accumulateur',
            `Quelle valeur contient la variable \`m\` à la fin du programme Python suivant ?${py([`notes = ${LS(L)}`, 's = 0', 'for x in notes:', '    s = s + x', 'm = s / len(notes)'])}`,
            `$${N(m)}$`,
            [`$${s}$`, `$${N(s / 3)}$`, `$${N(m + 1)}$`],
            'La boucle `for x in notes` parcourt les éléments de la liste : `s` accumule leur somme, puis on divise par le nombre d\'éléments.',
            'Additionne les quatre notes pour obtenir `s`, puis divise par `len(notes)`.',
            `$s = ${L.join(' + ')} = ${s}$, et \`len(notes)\` vaut $4$, donc $m = \\frac{${s}}{4} = ${N(m)}$.`
          );
        }
        const prod = v === 1;
        const L = prod ? Array.from({ length: 4 }, () => this.randInt(2, 5)) : Array.from({ length: this.randInt(5, 6) }, () => this.randInt(3, 25));
        const r = prod ? L.reduce((x, y) => x * y, 1) : L.reduce((x, y) => x + y, 0);
        return this._xa([String(r), VAL], T, 2, prod ? 'Accumulateur produit' : 'Accumulateur somme',
          prod ? 'Calculer un produit avec un accumulateur' : 'Calculer une somme avec un accumulateur',
          `Quelle valeur affiche le programme Python suivant ?${py([`L = ${LS(L)}`, prod ? 'p = 1' : 's = 0', 'for x in L:', prod ? '    p = p * x' : '    s = s + x', prod ? 'print(p)' : 'print(s)'])}`,
          `$${r}$`,
          prod ? [`$${L.reduce((x, y) => x + y, 0)}$`, `$${r / L[0]}$`, `$${r * L[0]}$`] : [`$${r - L[L.length - 1]}$`, `$${L.length}$`, `$${r + L[0]}$`],
          prod ? 'Un accumulateur produit est initialisé à $1$ et multiplié par chaque élément parcouru.' : 'Un accumulateur somme est initialisé à $0$ et augmenté de chaque élément parcouru.',
          prod ? 'La variable `p` est multipliée successivement par chacun des éléments de la liste.' : 'La variable `s` reçoit successivement chacun des éléments de la liste.',
          prod ? `$p = ${L.join(' \\times ')} = ${r}$.` : `$s = ${L.join(' + ')} = ${r}$.`
        );
      }
      if (fam === 1) {
        // compteur conditionnel
        const L = Array.from({ length: this.randInt(7, 9) }, () => this.randInt(3, 30));
        const v = this.randInt(0, 2);
        const [cond, txt, f] = v === 0 ? (() => { const s = this.randInt(10, 20); return [`x >= ${s}`, `supérieurs ou égaux à $${s}$`, (x) => x >= s]; })()
          : v === 1 ? ['x % 2 == 0', 'pairs', (x) => x % 2 === 0]
            : (() => { const s = this.randInt(10, 20); return [`x < ${s}`, `strictement inférieurs à $${s}$`, (x) => x < s]; })();
        const c = L.filter(f).length;
        if (c === 0 || c === L.length) return this.gen_1T2(2);
        const near = v === 0 ? L.filter((x) => x === +cond.split(' ')[2]).length : 0;
        return this._xa([String(c), VAL], T, 2, 'Compteur dans une boucle',
          'Compter les éléments qui vérifient une condition',
          `Quelle valeur affiche le programme Python suivant ?${py([`L = ${LS(L)}`, 'c = 0', 'for x in L:', `    if ${cond}:`, '        c = c + 1', 'print(c)'])}`,
          `$${c}$`,
          [`$${L.length - c}$`, `$${L.length}$`, `$${near ? c - near : c + 1}$`],
          'Un compteur est initialisé à $0$ et augmenté de $1$ chaque fois que la condition est vraie.',
          `Parcours la liste et repère les éléments ${txt}${v === 1 ? ' (`x % 2 == 0` teste si le reste de la division par $2$ est nul)' : ''}.`,
          c === 1 ? `Un seul élément vérifie la condition : $${L.filter(f)[0]}$. Le programme affiche donc $1$.` : `Les éléments ${txt} sont ${L.filter(f).map((x) => `$${x}$`).join(', ')} : il y en a $${c}$, donc le programme affiche $${c}$.`
        );
      }
      // construction de liste
      const n = this.randInt(5, 8);
      const v = this.randInt(0, 1);
      const a = this.randInt(2, 6); const b = this.randInt(1, 9);
      const L = v === 0 ? Array.from({ length: n }, (_, i) => a * i + b) : Array.from({ length: n }, (_, i) => i * i + b);
      const k = this.randInt(2, n - 1);
      const code = v === 0 ? ['L = []', `for i in range(${n}):`, `    L.append(${a} * i + ${b})`, `print(L[${k}])`] : [`L = [i ** 2 + ${b} for i in range(${n})]`, `print(L[${k}])`];
      const ex = v === 0 ? `${a} \\times ${k} + ${b}` : `${k}^2 + ${b}`;
      return this._xa([String(L[k]), VAL], T, 2, v === 0 ? 'Liste construite par ajouts' : 'Liste en compréhension',
        v === 0 ? 'Construire une liste avec append' : 'Construire une liste en compréhension',
        `Quelle valeur affiche le programme Python suivant ?${py(code)}`,
        `$${L[k]}$`,
        [`$${L[k - 1]}$`, `$${k < n - 1 ? L[k + 1] : L[k] + a}$`, `$${L[n - 1] === L[k] ? L[k] + 3 : L[n - 1]}$`],
        v === 0 ? '`L.append(valeur)` ajoute une valeur à la fin de la liste ; l\'élément d\'indice $i$ est celui ajouté au passage où la variable de boucle vaut $i$.' : 'La liste `[expression for i in range(n)]` contient les valeurs de l\'expression pour $i$ allant de $0$ à $n - 1$, dans cet ordre.',
        `L'élément d'indice $${k}$ est obtenu pour $i = ${k}$.`,
        `La liste est ${LS(L).replace(/[[\]]/g, '').split(', ').map((x) => `$${x}$`).join(', ')}. L'élément d'indice $${k}$ vaut $${ex} = ${L[k]}$.`
      );
    }

    if (tier === 3) {
      if (fam === 0) {
        // boucle while et seuil
        const geo = Math.random() < 0.45;
        if (geo) {
          const q = this.randChoice([2, 3]);
          const u0 = this.randInt(2, 9);
          const S = this.randChoice([100, 200, 500, 1000, 2000]);
          let u = u0; let n = 0;
          while (u < S) { u *= q; n++; }
          return this._xa([String(n), VAL], T, 3, 'Seuil d\'une suite géométrique',
            'Exécuter une boucle non bornée',
            `Une colonie de bactéries compte $${u0}$ milliers d'individus et ${q === 2 ? 'double' : 'triple'} chaque heure. Quelle valeur affiche le programme Python suivant ?${py([`u = ${u0}`, 'n = 0', `while u < ${S}:`, `    u = ${q} * u`, '    n = n + 1', 'print(n)'])}`,
            `$${n}$`,
            [`$${n - 1}$`, `$${n + 1}$`, `$${u}$`],
            'La boucle `while` se répète tant que sa condition est vraie : ici, chaque passage multiplie `u` par le même nombre et augmente le compteur `n` de $1$.',
            `Écris les valeurs successives de \`u\` : $${u0}$, $${u0 * q}$, $${u0 * q * q}$, … et arrête-toi dès que \`u\` atteint ou dépasse $${S}$.`,
            `Les valeurs successives de \`u\` sont ${Array.from({ length: n + 1 }, (_, i) => `$${this._int(u0 * q ** i)}$`).join(', ')}. La condition \`u < ${S}\` devient fausse après $${n}$ passages : le programme affiche $${n}$ (au bout de $${n}$ heures, la colonie dépasse $${this._int(S)}$ milliers).`
          );
        }
        const u0 = this.randChoice([50, 80, 100, 120, 150]);
        const r = this.randChoice([7, 8, 12, 15, 18, 25]);
        const S = u0 + r * this.randInt(5, 12) + this.randInt(1, r - 1);
        const n = Math.ceil((S - u0) / r);
        return this._xa([String(n), VAL], T, 3, 'Seuil d\'une suite arithmétique',
          'Exécuter une boucle non bornée',
          `Un parc d'activités compte $${u0}$ adhérents et en gagne $${r}$ chaque mois. Quelle valeur affiche le programme Python suivant ?${py([`u = ${u0}`, 'n = 0', `while u < ${S}:`, `    u = u + ${r}`, '    n = n + 1', 'print(n)'])}`,
          `$${n}$`,
          [`$${n - 1}$`, `$${n + 1}$`, `$${u0 + n * r}$`],
          'La boucle `while` se répète tant que la condition est vraie ; `n` compte le nombre de passages.',
          `Après $n$ passages, \`u\` vaut $${u0} + ${r}n$ : cherche le premier entier $n$ pour lequel cette valeur atteint $${S}$.`,
          `Après $${n - 1}$ passages, $u = ${u0 + (n - 1) * r} < ${S}$ ; après $${n}$ passages, $u = ${u0 + n * r} \\geqslant ${S}$. La boucle s'arrête : le programme affiche $${n}$.`
        );
      }
      if (fam === 1) {
        // fonctions
        const v = this.randInt(0, 2);
        if (v === 0) {
          const a = this.randNonZero(-3, 3); const b = this.randNonZero(-6, 6); const c = this.randNonZero(-9, 9); const x = this.randNonZero(-4, 4);
          const r = a * x * x + b * x + c;
          const px = x < 0 ? `(${x})` : `${x}`;
          const pyE = `${a === 1 ? '' : a === -1 ? '-' : a + ' * '}x ** 2${b ? (b > 0 ? ' + ' : ' - ') + Math.abs(b) + ' * x' : ''}${c ? (c > 0 ? ' + ' : ' - ') + Math.abs(c) : ''}`;
          return this._xa([String(r), VAL], T, 3, 'Appeler une fonction',
            'Calculer la valeur renvoyée par une fonction',
            `On définit la fonction Python suivante. Quelle valeur renvoie l'appel \`f(${x})\` ?${py(['def f(x):', `    return ${pyE}`])}`,
            `$${r}$`,
            [`$${a * (2 * x) + b * x + c}$`, `$${-a * x * x + b * x + c}$`, `$${r + 2 * c || r + 5}$`],
            '`return` renvoie la valeur de l\'expression calculée avec la valeur du paramètre donnée lors de l\'appel ; `**` désigne la puissance.',
            `Remplace \`x\` par $${x}$ dans l'expression : la puissance se calcule avant la multiplication.`,
            `$f(${x}) = ${a === 1 ? '' : a === -1 ? '-' : `${a} \\times `}${px}^2 ${b < 0 ? '-' : '+'} ${Math.abs(b)} \\times ${px} ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${a * x * x} ${b * x < 0 ? '-' : '+'} ${Math.abs(b * x)} ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${r}$.`
          );
        }
        if (v === 1) {
          const s = this.randChoice([10, 20, 50]);
          const p1 = this.randChoice([2, 3, 4, 5]);
          const p2 = p1 - this.randChoice([1, 1, 2].filter((d) => d < p1));
          const m = s + this.randInt(3, 30);
          const r = s * p1 + (m - s) * p2;
          return this._xa([String(r), VAL], T, 3, 'Fonction avec un test',
            'Exécuter une fonction contenant une instruction conditionnelle',
            `Une imprimerie facture $${p1}$ € l'affiche jusqu'à $${s}$ affiches, puis $${p2}$ € chaque affiche au-delà. La fonction \`prix\` renvoie le montant en euros pour \`n\` affiches. Quelle valeur renvoie \`prix(${m})\` ?${py(['def prix(n):', `    if n <= ${s}:`, `        return ${p1} * n`, '    else:', `        return ${s * p1} + ${p2} * (n - ${s})`])}`,
            `$${r}$`,
            [`$${m * p1}$`, `$${m * p2}$`, `$${s * p1 + m * p2}$`],
            'On teste d\'abord la condition avec la valeur du paramètre : seule l\'instruction `return` de la branche choisie est exécutée.',
            `Avec \`n\` égal à $${m}$, la condition \`n <= ${s}\` est fausse : on utilise la branche \`else\`.`,
            `$${m} > ${s}$, donc on exécute \`return ${s * p1} + ${p2} * (n - ${s})\` : $${s * p1} + ${p2} \\times ${m - s} = ${r}$ €.`
          );
        }
        const k = this.randInt(3, 6);
        const r = k * (k + 1) * (2 * k + 1) / 6;
        return this._xa([String(r), VAL], T, 3, 'Fonction et boucle',
          'Exécuter une fonction contenant une boucle',
          `On définit la fonction Python suivante. Quelle valeur renvoie l'appel \`g(${k})\` ?${py(['def g(n):', '    s = 0', '    for i in range(1, n + 1):', '        s = s + i ** 2', '    return s'])}`,
          `$${r}$`,
          [`$${r - k * k}$`, `$${k * (k + 1) / 2}$`, `$${r + (k + 1) ** 2}$`],
          'Dans la fonction, la boucle accumule les carrés des entiers de $1$ jusqu\'à la valeur du paramètre (la borne de droite de `range` est exclue).',
          `Pour \`g(${k})\`, \`i\` prend les valeurs $1$, $2$, …, $${k}$ : additionne leurs carrés.`,
          `$g(${k}) = ${Array.from({ length: k }, (_, i) => `${i + 1}^2`).join(' + ')} = ${Array.from({ length: k }, (_, i) => (i + 1) ** 2).join(' + ')} = ${r}$.`
        );
      }
      // compléter un programme
      const v = this.randInt(0, 2);
      const L = Array.from({ length: 5 }, () => this.randInt(2, 20));
      const sum = L.reduce((x, y) => x + y, 0);
      if (v === 0) {
        return this._xa('keep', T, 3, 'Compléter un accumulateur',
          'Compléter un programme utilisant un accumulateur',
          `On veut afficher la somme des éléments de la liste \`L\`, c'est-à-dire $${sum}$. Par quelle instruction faut-il remplacer \`___\` ?${py([`L = ${LS(L)}`, 's = 0', 'for x in L:', '    ___', 'print(s)'])}`,
          C('s = s + x'),
          [C('s = x'), C('s = s + 1'), C('x = s + x')],
          'Un accumulateur somme ajoute, à chaque passage, l\'élément parcouru à la valeur déjà accumulée.',
          'La variable qui reçoit le résultat doit être `s`, à gauche du signe `=`.',
          `À chaque passage, on ajoute l'élément \`x\` à la somme déjà calculée : \`s = s + x\`. Avec \`s = x\`, on garderait seulement le dernier élément ; avec \`s = s + 1\`, on compterait les éléments.`
        );
      }
      if (v === 1) {
        const s = this.randInt(8, 15);
        // la valeur seuil figure dans la liste (sinon `>=` donnerait le même affichage que `>`)
        // et au moins un élément la dépasse (sinon un compteur jamais incrémenté afficherait aussi 0)
        const iS = this.randInt(0, 4);
        L[iS] = s;
        if (!L.some((x) => x > s)) L[(iS + 1 + this.randInt(0, 3)) % 5] = s + this.randInt(1, 5);
        const c = L.filter((x) => x > s).length;
        return this._xa('keep', T, 3, 'Compléter un compteur',
          'Compléter un programme utilisant un compteur',
          `On veut compter les éléments de \`L\` strictement supérieurs à $${s}$ (le programme doit afficher $${c}$). Par quelle instruction faut-il remplacer \`___\` ?${py([`L = ${LS(L)}`, 'c = 0', 'for x in L:', '    ___', '        c = c + 1', 'print(c)'])}`,
          C(`if x > ${s}:`),
          [C(`if x >= ${s}:`), C(`if c > ${s}:`), C(`while x > ${s}:`)],
          'Le compteur ne doit augmenter que pour les éléments qui vérifient la condition : on utilise une instruction conditionnelle sur l\'élément parcouru.',
          '« Strictement supérieur » s\'écrit avec `>` ; la condition porte sur l\'élément `x`, pas sur le compteur.',
          `Il faut tester l'élément parcouru : \`if x > ${s}:\`. Avec \`>=\`, un élément égal à $${s}$ serait compté à tort ; \`while\` créerait une boucle infinie.`
        );
      }
      const n = this.randInt(4, 7);
      return this._xa('keep', T, 3, 'Compléter une construction de liste',
        'Compléter un programme qui construit une liste',
        `On veut construire la liste des carrés des entiers de $0$ à $${n - 1}$. Par quelle instruction faut-il remplacer \`___\` ?${py(['L = []', `for i in range(${n}):`, '    ___', 'print(L)'])}`,
        C('L.append(i ** 2)'),
        [C('L.append(i * 2)'), C('L = i ** 2'), C('L.append(L[i] ** 2)')],
        'Pour ajouter une valeur à la fin d\'une liste, on utilise la méthode `append`.',
        'Le carré de `i` s\'écrit `i ** 2` en Python.',
        `\`L.append(i ** 2)\` ajoute le carré de \`i\` à chaque passage : on obtient ${Array.from({ length: n }, (_, i) => `$${i * i}$`).join(', ')}. \`i * 2\` donnerait le double, et \`L = i ** 2\` remplacerait la liste par un nombre.`
      );
    }

    // Palier 4
    if (fam === 0) {
      // fréquence d'une simulation
      const n = this.randChoice([10, 20, 25]);
      const p = this.randChoice([0.3, 0.4, 0.5, 0.6]);
      let L; let c;
      do { L = Array.from({ length: n }, () => (Math.random() < p ? 1 : 0)); c = L.reduce((x, y) => x + y, 0); } while (c === 0 || c === n || 2 * c === n);
      const f = c / n;
      return this._xa([this.decText(f), VAL], T, 4, 'Fréquence d\'un succès simulé',
        'Calculer une fréquence à partir d\'une liste de résultats',
        `La liste \`R\` contient les résultats de $${n}$ répétitions d'une épreuve de Bernoulli simulée ($1$ pour un succès, $0$ pour un échec). Quelle valeur affiche le programme Python suivant ?${py([`R = ${LS(L)}`, 'c = 0', 'for x in R:', '    if x == 1:', '        c = c + 1', 'print(c / len(R))'])}`,
        `$${N(f)}$`,
        [`$${c}$`, `$${N((n - c) / n)}$`, `$${N(c / (n - c))}$`],
        'La fréquence de succès est le nombre de succès divisé par le nombre total de répétitions.',
        'Compte les $1$ de la liste, puis divise par sa longueur `len(R)`.',
        `La liste contient $${c}$ fois la valeur $1$ et $${n}$ éléments : le programme affiche $\\frac{${c}}{${n}} = ${N(f)}$.`
      );
    }
    if (fam === 1) {
      // comparaison croissance linéaire / exponentielle
      const u0 = this.randChoice([100, 200, 300, 500]);
      const r = this.randChoice([20, 30, 50, 60, 100]);
      const v0 = this.randChoice([1, 2, 3, 5, 10]);
      const q = this.randChoice([2, 3]);
      let u = u0; let v = v0; let n = 0;
      while (v < u) { u += r; v *= q; n++; }
      if (n < 3) return this.gen_1T2(4);
      return this._xa([String(n), VAL], T, 4, 'Comparer deux croissances',
        'Comparer une croissance linéaire et une croissance exponentielle',
        `Deux applications comptent leurs utilisateurs (en milliers). La première en a $${u0}$ et en gagne $${r}$ chaque mois ; la seconde en a $${v0}$ et ce nombre est multiplié par $${q}$ chaque mois. Quelle valeur affiche le programme Python suivant ?${py([`u = ${u0}`, `v = ${v0}`, 'n = 0', 'while v < u:', `    u = u + ${r}`, `    v = ${q} * v`, '    n = n + 1', 'print(n)'])}`,
        `$${n}$`,
        [`$${n - 1}$`, `$${n + 1}$`, `$${v}$`],
        'On fait évoluer les deux variables à chaque passage et l\'on s\'arrête dès que la condition de la boucle devient fausse.',
        'Construis un tableau avec trois colonnes `n`, `u` et `v`, en mettant à jour les deux variables à chaque passage.',
        `${Array.from({ length: n + 1 }, (_, i) => `$n = ${i}$ : $u = ${u0 + i * r}$, $v = ${v0 * q ** i}$`).join(' ; ')}. C'est au passage numéro $${n}$ que $v \\geqslant u$ pour la première fois : le programme affiche $${n}$.`
      );
    }
    // corriger un programme
    const v = this.randInt(0, 2);
    if (v === 0) {
      const n = this.randInt(5, 12);
      const r = n * (n + 1) / 2;
      return this._xa('keep', T, 4, 'Corriger une boucle bornée',
        'Corriger un programme',
        `Ce programme doit afficher la somme des entiers de $1$ à $${n}$, c'est-à-dire $${r}$, mais il affiche $${r - n}$. Quelle correction faut-il faire ?${py(['s = 0', `for i in range(1, ${n}):`, '    s = s + i', 'print(s)'])}`,
        R(`range(1, ${n})`, `range(1, ${n + 1})`),
        [R(`range(1, ${n})`, `range(0, ${n})`), R('s = 0', 's = 1'), R('s = s + i', 's = s + 1')],
        'Dans `range(a, b)`, la borne de droite `b` est exclue.',
        `L'écart entre le résultat attendu et le résultat affiché vaut $${n}$ : quelle valeur de \`i\` manque-t-il ?`,
        `\`range(1, ${n})\` s'arrête à $${n - 1}$ : il manque le terme $${n}$. Il faut écrire \`range(1, ${n + 1})\`. Commencer à $0$ ne change rien, et \`s = 1\` donnerait $${r - n + 1}$.`
      );
    }
    if (v === 1) {
      const L = Array.from({ length: 4 }, () => this.randInt(3, 15));
      const s = L.reduce((x, y) => x + y, 0);
      return this._xa('keep', T, 4, 'Corriger une initialisation',
        'Corriger un programme',
        `Ce programme doit afficher la somme des éléments de \`L\`, c'est-à-dire $${s}$, mais il affiche $${L[3]}$. Quelle correction faut-il faire ?${py([`L = ${LS(L)}`, 'for x in L:', '    s = 0', '    s = s + x', 'print(s)'])}`,
        'Placer `s = 0` avant la boucle',
        [R('s = s + x', 's = x'), R('s = 0', 's = 1'), 'Placer `print(s)` dans la boucle'],
        'Une initialisation doit être faite une seule fois, avant la boucle.',
        'Que devient la valeur de `s` au début de chaque passage ?',
        `\`s = 0\` étant dans la boucle, la somme est remise à zéro à chaque passage : il ne reste que le dernier élément, $${L[3]}$. Il faut initialiser \`s\` avant la boucle.`
      );
    }
    const u0 = this.randChoice([20, 40, 60]);
    const r = this.randChoice([5, 6, 8]);
    const S = u0 + r * this.randInt(4, 8);
    const n = (S - u0) / r;
    return this._xa('keep', T, 4, 'Corriger une condition d\'arrêt',
      'Corriger un programme',
      `Une suite est définie par $u(0) = ${u0}$ et $u(n + 1) = u(n) + ${r}$. Ce programme doit afficher le premier rang $n$ tel que $u(n) > ${S}$, c'est-à-dire $${n + 1}$, mais il affiche $${n}$. Quelle correction faut-il faire ?${py([`u = ${u0}`, 'n = 0', `while u < ${S}:`, `    u = u + ${r}`, '    n = n + 1', 'print(n)'])}`,
      R(`while u < ${S}:`, `while u <= ${S}:`),
      [R(`while u < ${S}:`, `while u > ${S}:`), R(`u = ${u0}`, `u = ${u0 + r}`), R(`u = u + ${r}`, `u = u + ${r + 1}`)],
      'La boucle doit continuer tant que le seuil n\'est pas strictement dépassé : la condition du `while` est la négation de la condition d\'arrêt.',
      `Calcule $u(${n})$ : la boucle s'arrête-t-elle trop tôt ?`,
      `$u(${n}) = ${u0} + ${n} \\times ${r} = ${S}$, qui n'est pas strictement supérieur à $${S}$. Avec \`u < ${S}\`, la boucle s'arrête dès que $u = ${S}$. La négation de « $u > ${S}$ » est « $u \\leqslant ${S}$ » : il faut écrire \`while u <= ${S}:\`.`
    );
  },
  // ---- 1T3 : Suites arithmétiques et géométriques ----
  /** Liste de termes en mode texte : $3$, $5$, $8$ */
  /** Substitution lisible de n = k dans a n^2 + b n + c */
  _1T3_sub(a, b, c, k) {
    const parts = [];
    const push = (v, body) => { if (v) parts.push({ neg: v < 0, txt: body(Math.abs(v)) }); };
    push(a, (v) => (v === 1 ? `${k}^2` : `${v} \\times ${k}^2`));
    push(b, (v) => (v === 1 ? `${k}` : `${v} \\times ${k}`));
    push(c, (v) => `${v}`);
    return parts.map((p, i) => (i === 0 ? (p.neg ? '-' : '') + p.txt : `${p.neg ? '-' : '+'} ${p.txt}`)).join(' ');
  },
  _1T3_terms(L) { return L.map((x) => `$${this.dec(x, 4)}$`).join(', '); },

  gen_1T3(tier) {
    const T = '1T3';
    const N = (x) => this.dec(x, 4);
    const I = (x) => this._int(x);
    const P = (x) => this._pct(x);
    const VAL = this._VAL;
    const RNG = 'Saisir le rang (un entier naturel).';
    const fam = this.randInt(0, 2);

    if (tier === 1) {
      if (fam === 0) {
        const u0 = this.randInt(-10, 20);
        const r = this.randNonZero(-6, 9);
        const k = this.randInt(4, 15);
        const res = u0 + k * r;
        return this._xa([String(res), VAL], T, 1, 'Terme d\'une suite arithmétique',
          'Calculer un terme d\'une suite arithmétique',
          `$(u_n)$ est la suite arithmétique de premier terme $u_0 = ${u0}$ et de raison $${r}$. Calculer $u_{${k}}$.`,
          `$${res}$`,
          [`$${u0 + (k - 1) * r}$`, `$${u0 + (k + 1) * r}$`, `$${u0 * k + r === res ? res + 2 : u0 * k + r}$`],
          'Pour une suite arithmétique de raison $r$ : $u_n = u_0 + n \\times r$.',
          `Ici $u_{${k}} = ${u0} + ${k} \\times ${r < 0 ? `(${r})` : r}$.`,
          `$u_{${k}} = u_0 + ${k} \\times r = ${u0} + ${k} \\times ${r < 0 ? `(${r})` : r} = ${u0} ${k * r < 0 ? '-' : '+'} ${Math.abs(k * r)} = ${res}$.`
        );
      }
      if (fam === 1) {
        const half = Math.random() < 0.3;
        const q = half ? 0.5 : this.randChoice([2, 3]);
        const k = half ? this.randInt(2, 5) : q === 2 ? this.randInt(3, 7) : this.randInt(2, 5);
        const u0 = half ? this.randChoice([64, 96, 160, 320, 480]) : this.randChoice([1, 2, 3, 5, 10]);
        const res = u0 * q ** k;
        return this._xa([this.decText(res), VAL], T, 1, 'Terme d\'une suite géométrique',
          'Calculer un terme d\'une suite géométrique',
          `$(u_n)$ est la suite géométrique de premier terme $u_0 = ${u0}$ et de raison $${N(q)}$. Calculer $u_{${k}}$.`,
          `$${N(res)}$`,
          [`$${N(u0 * q ** (k - 1))}$`, `$${N(u0 + k * q)}$`, `$${N(u0 * q * k)}$`],
          'Pour une suite géométrique de raison $q$ : $u_n = u_0 \\times q^n$.',
          `Ici $u_{${k}} = ${u0} \\times ${N(q)}^{${k}}$.`,
          `$u_{${k}} = u_0 \\times q^{${k}} = ${u0} \\times ${N(q)}^{${k}} = ${u0} \\times ${N(q ** k)} = ${N(res)}$.`
        );
      }
      if (Math.random() < 0.5) {
        const a = this.randChoice([2, 3, -1, -2]);
        const b = this.randNonZero(-5, 5);
        const u0 = this.randInt(-3, 4);
        const u1 = a * u0 + b; const u2 = a * u1 + b; const u3 = a * u2 + b;
        const k = this.randChoice([2, 3]);
        const res = k === 2 ? u2 : u3;
        const bt = `${b < 0 ? '-' : '+'} ${Math.abs(b)}`;
        return this._xa([String(res), VAL], T, 1, 'Suite définie par récurrence',
          'Calculer les termes d\'une suite définie par récurrence',
          `La suite $(u_n)$ est définie par $u_0 = ${u0}$ et, pour tout entier naturel $n$, $u_{n+1} = ${a === -1 ? '-' : a}u_n ${bt}$. Calculer $u_{${k}}$.`,
          `$${res}$`,
          [`$${k === 2 ? u1 : u2}$`, `$${k === 2 ? u3 : u3 + a}$`, `$${a * k + b === res ? res + 1 : a * k + b}$`],
          'Une relation de récurrence donne chaque terme à partir du précédent : on calcule les termes un par un, à partir du premier.',
          `Commence par $u_1 = ${a} \\times (${u0}) ${bt}$.`,
          `$u_1 = ${a} \\times (${u0}) ${bt} = ${u1}$ ; $u_2 = ${a} \\times (${u1}) ${bt} = ${u2}$${k === 3 ? ` ; $u_3 = ${a} \\times (${u2}) ${bt} = ${u3}$` : ''}. Donc $u_{${k}} = ${res}$.`
        );
      }
      const a = this.randNonZero(-3, 3); const b = this.randInt(-6, 6); const c = this.randNonZero(-9, 9);
      const k = this.randInt(2, 8);
      const res = a * k * k + b * k + c;
      const ex = this.poly([[a, 'n^2'], [b, 'n'], [c, '']]);
      return this._xa([String(res), VAL], T, 1, 'Suite définie explicitement',
        'Calculer un terme d\'une suite définie explicitement',
        `La suite $(u_n)$ est définie, pour tout entier naturel $n$, par $u_n = ${ex}$. Calculer $u_{${k}}$.`,
        `$${res}$`,
        [`$${a * 2 * k + b * k + c}$`, `$${a * (k - 1) ** 2 + b * (k - 1) + c}$`, `$${res + 2 * a * k + a + b}$`],
        'Lorsque $u_n$ est donné en fonction de $n$, on obtient un terme en remplaçant $n$ par son rang, comme pour l\'image d\'un nombre par une fonction.',
        `Remplace $n$ par $${k}$ dans l'expression : calcule d'abord le carré, puis les produits.`,
        `$u_{${k}} = ${this._1T3_sub(a, b, c, k)} = ${res}$.`
      );
    }

    if (tier === 2) {
      if (fam === 0) {
        const kind = this.randChoice(['ar', 'geo', 'ni', 'ni2']);
        let L; let ans;
        // quotient exact : écriture décimale courte, sinon fraction irréductible (jamais « 1,3333 »)
        const QF = (x, y) => (y === 0 ? 'Infinity' : this.isDecimal(x / y, 2) ? N(x / y) : this.frac(x, y));
        const r = this.randNonZero(-7, 9);
        const q = this.randChoice([2, 3, 0.5]);
        if (kind === 'ar') { const a = this.randInt(-5, 20); L = [0, 1, 2, 3].map((i) => a + i * r); ans = `arithmétique de raison $${r}$`; }
        else if (kind === 'geo') { const a = q === 0.5 ? this.randChoice([16, 48, 80, 112]) : this.randChoice([1, 2, 3, 5]); L = [0, 1, 2, 3].map((i) => a * q ** i); ans = `géométrique de raison $${N(q)}$`; }
        else if (kind === 'ni') { const a = this.randInt(1, 5); L = [0, 1, 2, 3].map((i) => (a + i) ** 2); ans = 'ni arithmétique ni géométrique'; }
        else { const a = this.randInt(1, 9); const d = this.randInt(1, 4); L = [a, a + d, a + 3 * d, a + 6 * d]; ans = 'ni arithmétique ni géométrique'; }
        const wr = [
          `arithmétique de raison $${L[1] - L[0]}$`,
          `géométrique de raison $${QF(L[1], L[0])}$`,
          'ni arithmétique ni géométrique',
          `arithmétique de raison $${L[0]}$`,
          `géométrique de raison $${N(L[0])}$`,
        `arithmétique de raison $${(L[1] - L[0]) + 1}$`
        ].filter((x, i, arr) => x !== ans && arr.indexOf(x) === i && !/Infinity|NaN/.test(x));
        const diffs = L.slice(1).map((x, i) => x - L[i]);
        const quots = L.slice(1).map((x, i) => (L[i] !== 0 ? QF(x, L[i]) : '?'));
        const expl = kind === 'ar' ? `Les différences entre termes consécutifs valent toutes $${r}$ : on passe d'un terme au suivant en ajoutant $${r}$. Les premiers termes sont ceux d'une suite arithmétique de raison $${r}$.`
          : kind === 'geo' ? `Les quotients de termes consécutifs valent tous $${N(q)}$ : on passe d'un terme au suivant en multipliant par $${N(q)}$. Les premiers termes sont ceux d'une suite géométrique de raison $${N(q)}$.`
            : `Les différences successives valent ${diffs.map((x) => `$${x}$`).join(', ')} : elles ne sont pas constantes, donc la suite n'est pas arithmétique. Les quotients successifs valent ${quots.map((x) => `$${x}$`).join(', ')} : ils ne sont pas constants non plus, donc elle n'est pas géométrique.`;
        return this._xa('keep', T, 2, 'Reconnaître une suite',
          'Reconnaître une suite arithmétique ou géométrique',
          `Les quatre premiers termes d'une suite $(u_n)$ sont ${this._1T3_terms(L)}. D'après ces termes, quelle est la nature de la suite ?`,
          ans,
          wr.slice(0, 3),
          'Une suite est arithmétique lorsque la différence entre deux termes consécutifs est constante, géométrique lorsque leur quotient est constant.',
          'Calcule $u_1 - u_0$, $u_2 - u_1$ et $u_3 - u_2$, puis, si besoin, les quotients $\\frac{u_1}{u_0}$, $\\frac{u_2}{u_1}$ et $\\frac{u_3}{u_2}$.',
          expl
        );
      }
      if (fam === 1) {
        if (Math.random() < 0.5) {
          const r = this.randNonZero(-8, 9);
          const p = this.randInt(1, 6); const m = p + this.randInt(2, 6);
          const up = this.randInt(-20, 40);
          const um = up + (m - p) * r;
          return this._xa([String(r), VAL], T, 2, 'Raison d\'une suite arithmétique',
            'Déterminer la raison d\'une suite arithmétique',
            `$(u_n)$ est une suite arithmétique telle que $u_{${p}} = ${up}$ et $u_{${m}} = ${um}$. Quelle est sa raison ?`,
            `$${r}$`,
            [`$${um - up}$`, `$${-r}$`, `$${r + 1}$`],
            'Entre deux rangs, une suite arithmétique augmente d\'autant de fois la raison qu\'il y a de pas : $u_m - u_p = (m - p) \\times r$.',
            `Il y a $${m} - ${p} = ${m - p}$ pas entre les deux termes donnés.`,
            `$u_{${m}} - u_{${p}} = (${m} - ${p}) \\times r$, donc $${um} - (${up}) = ${m - p}r$, soit $${um - up} = ${m - p}r$ et $r = ${r}$.`
          );
        }
        const q = this.randChoice([2, 3, 4, 5]);
        const u0 = this.randChoice([1, 2, 3, 4, 5, 6]);
        const u2 = u0 * q * q;
        return this._xa([String(q), VAL], T, 2, 'Raison d\'une suite géométrique',
          'Déterminer la raison d\'une suite géométrique',
          `$(u_n)$ est une suite géométrique de raison $q > 0$ telle que $u_0 = ${u0}$ et $u_2 = ${u2}$. Quelle est sa raison ?`,
          `$${q}$`,
          [`$${q * q}$`, `$${2 * q}$`, `$${q + 1}$`],
          'Pour une suite géométrique : $u_2 = u_0 \\times q^2$.',
          `On obtient $q^2 = ${u2} \\div ${u0}$.`,
          `$u_2 = u_0 \\times q^2$, donc $q^2 = ${u2} \\div ${u0} = ${q * q}$. Comme $q > 0$, $q = ${q}$.`
        );
      }
      const v = this.randInt(0, 2);
      const opts = ['strictement croissante', 'strictement décroissante', 'constante', 'ni croissante ni décroissante'];
      if (v === 0) {
        const a = this.randInt(-20, 30); const r = this.randNonZero(-9, 9);
        const ans = r > 0 ? opts[0] : opts[1];
        return this._xa('keep', T, 2, 'Variations d\'une suite arithmétique',
          'Déterminer le sens de variation d\'une suite arithmétique',
          `La suite $(u_n)$ est définie, pour tout entier naturel $n$, par $u_n = ${a} ${r < 0 ? '-' : '+'} ${Math.abs(r) === 1 ? '' : Math.abs(r)}n$. Quel est son sens de variation ?`,
          ans,
          opts.filter((x) => x !== ans),
          'Une suite arithmétique est croissante si sa raison est positive et décroissante si sa raison est négative.',
          'Écris $u_n$ sous la forme $u_0 + nr$ et repère la raison $r$.',
          `$(u_n)$ est arithmétique de raison $${r}$ ($u_{n+1} - u_n = ${r}$ pour tout $n$). La raison est ${r > 0 ? 'strictement positive' : 'strictement négative'}, donc la suite est ${ans}.`
        );
      }
      const q = this.randChoice([0.2, 0.5, 0.8, 0.9, 1.05, 1.2, 1.5, 2, 3]);
      const u0 = this.randChoice([2, 5, 10, 20, 100]);
      const ans = q > 1 ? opts[0] : opts[1];
      const st = v === 1
        ? `La suite $(u_n)$ est définie par $u_0 = ${u0}$ et, pour tout entier naturel $n$, $u_{n+1} = ${N(q)}u_n$.`
        : `La suite $(u_n)$ est définie, pour tout entier naturel $n$, par $u_n = ${u0} \\times ${N(q)}^n$.`;
      return this._xa('keep', T, 2, 'Variations d\'une suite géométrique',
        'Déterminer le sens de variation d\'une suite géométrique',
        `${st} Quel est son sens de variation ?`,
        ans,
        opts.filter((x) => x !== ans),
        'Une suite géométrique de premier terme strictement positif est croissante si sa raison est supérieure à $1$ et décroissante si sa raison est comprise entre $0$ et $1$.',
        'Repère le premier terme et la raison, puis compare la raison à $1$.',
        `$(u_n)$ est géométrique de premier terme $u_0 = ${u0} > 0$ et de raison $${N(q)}$. Comme $${N(q)} ${q > 1 ? '> 1' : '< 1'}$, chaque terme est ${q > 1 ? 'plus grand' : 'plus petit'} que le précédent : la suite est ${ans}.`
      );
    }

    if (tier === 3) {
      if (fam === 0) {
        const up = Math.random() < 0.5;
        if (up) {
          const u0 = this.randChoice([150, 200, 250, 300, 400]);
          const r = this.randChoice([12, 15, 18, 20, 25, 30, 35, 40]);
          const S = u0 + r * this.randInt(6, 20) + this.randInt(1, r - 1);
          const n = Math.floor((S - u0) / r) + 1;
          return this._xa([String(n), RNG], T, 3, 'Seuil d\'une suite arithmétique',
            'Déterminer un seuil pour une suite arithmétique',
            `Une salle de concert compte $${u0}$ abonnés en 2025, et le nombre d'abonnés augmente de $${r}$ chaque année. On note $u_n$ le nombre d'abonnés en $2025 + n$. À partir de quel rang $n$ le nombre d'abonnés dépasse-t-il $${S}$ ?`,
            `$${n}$`,
            [`$${n - 1}$`, `$${n + 1}$`, `$${2025 + n}$`],
            'La suite est arithmétique : on écrit $u_n$ en fonction de $n$, puis on résout l\'inéquation $u_n > S$ dans les entiers naturels.',
            `$u_n = ${u0} + ${r}n$ ; résous $${u0} + ${r}n > ${S}$.`,
            `$u_n = ${u0} + ${r}n$. $${u0} + ${r}n > ${S}$ équivaut à $${r}n > ${S - u0}$, soit $n > \\frac{${S - u0}}{${r}} \\approx ${N(Math.floor((S - u0) / r * 100) / 100)}$. Le plus petit entier qui convient est $n = ${n}$ : $u_{${n - 1}} = ${u0 + (n - 1) * r}$ et $u_{${n}} = ${u0 + n * r}$. Le seuil est dépassé en $${2025 + n}$.`
          );
        }
        const u0 = this.randChoice([800, 1000, 1200, 1500]);
        const r = this.randChoice([35, 45, 55, 60, 70, 80]);
        const S = u0 - r * this.randInt(5, 12) - this.randInt(1, r - 1);
        const n = Math.floor((u0 - S) / r) + 1;
        return this._xa([String(n), RNG], T, 3, 'Seuil d\'une suite arithmétique décroissante',
          'Déterminer un seuil pour une suite arithmétique',
          `Une réserve d'eau contient $${I(u0)}$ m³ au début de l'été et perd $${r}$ m³ chaque semaine. On note $u_n$ le volume, en m³, au bout de $n$ semaines. Au bout de combien de semaines le volume devient-il strictement inférieur à $${I(S)}$ m³ ?`,
          `$${n}$`,
          [`$${n - 1}$`, `$${n + 1}$`, `$${u0 - n * r}$`],
          'La suite est arithmétique de raison négative : on écrit $u_n$ en fonction de $n$ et l\'on résout l\'inéquation dans les entiers naturels.',
          `$u_n = ${I(u0)} - ${r}n$ ; résous $${I(u0)} - ${r}n < ${I(S)}$.`,
          `$${I(u0)} - ${r}n < ${I(S)}$ équivaut à $${r}n > ${u0 - S}$, soit $n > \\frac{${u0 - S}}{${r}} \\approx ${N(Math.floor((u0 - S) / r * 100) / 100)}$. Donc $n = ${n}$ : $u_{${n - 1}} = ${I(u0 - (n - 1) * r)}$ et $u_{${n}} = ${I(u0 - n * r)}$.`
        );
      }
      if (fam === 1) {
        const [t, n, V0] = this.randChoice([[10, 2, 5000], [10, 3, 2000], [20, 2, 1500], [20, 3, 2500], [5, 2, 4000], [-10, 2, 3000], [-20, 2, 2500], [-20, 3, 5000], [50, 2, 400], [-50, 3, 1600], [30, 2, 1000], [-30, 2, 2000], [10, 3, 5000]]);
        const q = 1 + t / 100;
        const res = this._r(V0 * q ** n);
        const [what, unit] = this.randChoice([['La production annuelle d\'une usine de panneaux solaires', 'panneaux'], ['Le nombre d\'abonnés d\'une plateforme de covoiturage', 'abonnés'], ['La quantité de déchets collectés par une commune', 'tonnes']]);
        return this._xa([this.decText(res), VAL], T, 3, 'Évolution à taux constant',
          'Modéliser une évolution à taux constant par une suite géométrique',
          `${what} est de $${I(V0)}$ ${unit} l'année $0$ et ${t > 0 ? 'augmente' : 'diminue'} de $${P(Math.abs(t))}$ par an. On note $u_n$ cette quantité l'année $n$. Calculer $u_{${n}}$.`,
          `$${I(res)}$`,
          [`$${I(this._r(V0 * (1 + n * t / 100)))}$`, `$${I(this._r(V0 * q ** (n - 1)))}$`, `$${I(this._r(V0 * q ** (n + 1)))}$`],
          `${t > 0 ? 'Augmenter' : 'Diminuer'} de $t\\,\\%$ chaque année revient à multiplier par le même coefficient : la suite est géométrique.`,
          `La raison vaut $q = ${N(q)}$ et $u_0 = ${I(V0)}$.`,
          `$(u_n)$ est géométrique de raison $q = 1 ${t > 0 ? '+' : '-'} ${N(Math.abs(t) / 100)} = ${N(q)}$, donc $u_{${n}} = ${I(V0)} \\times ${N(q)}^{${n}} = ${I(V0)} \\times ${N(this._r(q ** n))} = ${I(res)}$ ${unit}. On ne trouve pas $${I(this._r(V0 * (1 + n * t / 100)))}$ : les pourcentages ne s'additionnent pas.`
        );
      }
      if (Math.random() < 0.5) {
        const a = this.randNonZero(-7, 7); const b = this.randInt(-9, 15);
        const ans = `arithmétique de raison $${a}$`;
        const ex = `${a === 1 ? '' : a === -1 ? '-' : a}n${b ? ` ${b < 0 ? '-' : '+'} ${Math.abs(b)}` : ''}`;
        return this._xa('keep', T, 3, 'Démontrer qu\'une suite est arithmétique',
          'Démontrer la nature d\'une suite',
          `La suite $(u_n)$ est définie, pour tout entier naturel $n$, par $u_n = ${ex}$. Que peut-on affirmer ?`,
          ans,
          [`arithmétique de raison $${b === a ? a + 1 : b}$`, `géométrique de raison $${a === 1 || a === 0 ? 2 : a}$`, 'ni arithmétique ni géométrique'],
          'Pour démontrer qu\'une suite est arithmétique, on calcule $u_{n+1} - u_n$ et l\'on vérifie que cette différence ne dépend pas de $n$.',
          `Écris $u_{n+1} = ${a === 1 ? '' : a === -1 ? '-' : a}(n + 1)${b ? ` ${b < 0 ? '-' : '+'} ${Math.abs(b)}` : ''}$ puis calcule la différence avec $u_n$.`,
          `Pour tout entier naturel $n$ : $u_{n+1} - u_n = ${a === 1 ? '' : a === -1 ? '-' : a}(n + 1)${b ? ` ${b < 0 ? '-' : '+'} ${Math.abs(b)}` : ''} - (${ex}) = ${a}$. La différence est constante : $(u_n)$ est arithmétique de raison $${a}$ et de premier terme $u_0 = ${b}$.`
        );
      }
      const q = this.randChoice([2, 3, 4, 5, 0.5, 1.5]);
      const b = this.randChoice([2, 3, 5, 7, 10]);
      const ans = `géométrique de raison $${N(q)}$`;
      return this._xa('keep', T, 3, 'Démontrer qu\'une suite est géométrique',
        'Démontrer la nature d\'une suite',
        `La suite $(u_n)$ est définie, pour tout entier naturel $n$, par $u_n = ${b} \\times ${N(q)}^n$. Que peut-on affirmer ?`,
        ans,
        [`géométrique de raison $${b}$`, `arithmétique de raison $${N(q)}$`, 'ni arithmétique ni géométrique'],
        'Pour démontrer qu\'une suite à termes strictement positifs est géométrique, on calcule $\\frac{u_{n+1}}{u_n}$ et l\'on vérifie que ce quotient ne dépend pas de $n$.',
        `Écris $u_{n+1} = ${b} \\times ${N(q)}^{n+1}$, puis calcule le quotient par $u_n$.`,
        `Pour tout entier naturel $n$, $u_n > 0$ et $\\frac{u_{n+1}}{u_n} = \\frac{${b} \\times ${N(q)}^{n+1}}{${b} \\times ${N(q)}^n} = ${N(q)}$. Le quotient est constant : $(u_n)$ est géométrique de raison $${N(q)}$ et de premier terme $u_0 = ${b}$.`
      );
    }

    // Palier 4
    if (fam === 0) {
      const [t, k] = this.randChoice([[10, 2], [20, 2], [5, 2], [15, 2], [25, 3], [20, 3], [50, 4], [10, 3], [30, 4], [-10, 0.5], [-20, 0.5], [-15, 0.5], [-30, 0.25], [-25, 0.5]]);
      const q = 1 + t / 100;
      const u0 = this.randChoice([100, 200, 500, 1000]);
      let n = 0; let u = u0;
      while (t > 0 ? u < k * u0 : u > k * u0) { u = this._r(u * q); n++; }
      const [what, unit] = t > 0 ? ['Le nombre d\'utilisateurs d\'un service de vélos partagés', 'utilisateurs'] : ['La masse d\'un médicament présente dans le sang', 'mg'];
      const goal = t > 0 ? (k === 2 ? 'aura-t-il doublé' : k === 3 ? 'aura-t-il triplé' : `aura-t-il été multiplié par $${k}$`) : (k === 0.5 ? 'aura-t-elle été divisée par deux' : 'aura-t-elle été divisée par quatre');
      return this._xa([String(n), RNG], T, 4, 'Seuil d\'une suite géométrique',
        'Déterminer un seuil pour une suite géométrique',
        `${what} vaut $${I(u0)}$ ${unit} au départ et ${t > 0 ? 'augmente' : 'diminue'} de $${P(Math.abs(t))}$ ${t > 0 ? 'chaque mois' : 'chaque heure'}. Au bout de combien ${t > 0 ? 'de mois' : 'd\'heures'} ce${t > 0 ? '' : 'tte'} ${t > 0 ? 'nombre' : 'masse'} ${goal} pour la première fois ?`,
        `$${n}$`,
        [`$${n - 1}$`, `$${n + 1}$`, `$${Math.round(Math.abs((k - 1) * 100 / t))}$`],
        'La suite est géométrique ; on calcule ses termes successifs, à la calculatrice ou avec une boucle, jusqu\'à atteindre le seuil.',
        `$u_n = ${I(u0)} \\times ${N(q)}^n$ : compare les termes successifs à $${I(k * u0)}$.`,
        `$u_n = ${I(u0)} \\times ${N(q)}^n$. On trouve $u_{${n - 1}} \\approx ${I(Math.round(u0 * q ** (n - 1) * 100) / 100)}$ et $u_{${n}} \\approx ${I(Math.round(u0 * q ** n * 100) / 100)}$ : le seuil $${I(k * u0)}$ est franchi pour la première fois pour $n = ${n}$.`
      );
    }
    if (fam === 1) {
      const a = this.randChoice([300, 400, 500, 600]);
      const r = this.randChoice([20, 25, 30, 40, 50]);
      const b = this.randChoice([100, 150, 200, 250]);
      const t = this.randChoice([10, 15, 20, 25]);
      const q = 1 + t / 100;
      let n = 0;
      while (b * q ** n <= a + r * n) n++;
      if (n < 3 || n > 14) return this.gen_1T3(4);
      return this._xa([String(n), RNG], T, 4, 'Croissance linéaire et exponentielle',
        'Comparer une croissance linéaire et une croissance exponentielle',
        `Deux villes comptent leurs habitants (en centaines). On note $u_n = ${a} + ${r}n$ et $v_n = ${b} \\times ${N(q)}^n$ les populations au bout de $n$ années. À partir de quelle année $n$ la population $v_n$ dépasse-t-elle $u_n$ ?`,
        `$${n}$`,
        [`$${n - 1}$`, `$${n + 1}$`, `$${Math.ceil((a - b) / r)}$`],
        'Une suite arithmétique croît en ajoutant toujours la même quantité, une suite géométrique de raison supérieure à $1$ finit toujours par la dépasser : on compare les termes rang par rang.',
        `Calcule $u_n$ et $v_n$ pour des valeurs successives de $n$, par exemple dans un tableau à partir de $n = ${Math.max(0, n - 3)}$.`,
        `$u_{${n - 1}} = ${a + r * (n - 1)}$ et $v_{${n - 1}} \\approx ${I(Math.round(b * q ** (n - 1) * 100) / 100)}$, donc $v_{${n - 1}} \\leqslant u_{${n - 1}}$ ; $u_{${n}} = ${a + r * n}$ et $v_{${n}} \\approx ${I(Math.round(b * q ** n * 100) / 100)}$, donc $v_{${n}} > u_{${n}}$. La population $v_n$ dépasse $u_n$ à partir de $n = ${n}$.`
      );
    }
    if (Math.random() < 0.55) {
      const u1 = this.randChoice([20, 30, 40, 50, 60]);
      const r = this.randChoice([5, 10, 15, 20]);
      const n = this.randChoice([6, 8, 10, 12]);
      const un = u1 + (n - 1) * r;
      const S = n * (u1 + un) / 2;
      return this._xa([String(S), VAL], T, 4, 'Somme de termes d\'une suite arithmétique',
        'Calculer une somme de termes consécutifs',
        `Pour économiser, Léa dépose $${u1}$ € le premier mois sur un compte, puis chaque mois $${r}$ € de plus que le mois précédent. On note $u_1$, $u_2$, … les dépôts mensuels. Quel montant total, en euros, aura-t-elle déposé au bout de $${n}$ mois ?`,
        `$${I(S)}$`,
        [`$${I(un)}$`, `$${I(n * u1)}$`, `$${I(S - un)}$`],
        'Les dépôts forment une suite arithmétique : écris-les mois par mois, puis additionne-les (un tableur ou une boucle Python avec un accumulateur fait ce calcul).',
        `Le premier dépôt est $${u1}$, le dernier est $u_{${n}} = ${u1} + ${n - 1} \\times ${r}$. Astuce : le premier et le dernier dépôts, le deuxième et l'avant-dernier, etc., ont toujours la même somme.`,
        `Les dépôts sont ${Array.from({ length: n }, (_, i) => `$${I(u1 + i * r)}$`).join(', ')}. En les regroupant deux par deux (premier et dernier, deuxième et avant-dernier…), on obtient $${n / 2}$ paires valant chacune $${u1} + ${un} = ${u1 + un}$. Total : $${n / 2} \\times ${u1 + un} = ${I(S)}$ €.`
      );
    }
    const u0 = this.randChoice([1, 2, 3, 5]);
    const q = this.randChoice([2, 3]);
    const n = q === 2 ? this.randInt(5, 9) : this.randInt(4, 6);
    const S = u0 * (q ** n - 1) / (q - 1);
    return this._xa([String(S), VAL], T, 4, 'Somme de termes d\'une suite géométrique',
      'Calculer une somme de termes consécutifs',
      `Dans un jeu, on gagne $${u0}$ point${u0 > 1 ? 's' : ''} au premier niveau, puis à chaque niveau ${q === 2 ? 'le double' : 'le triple'} des points du niveau précédent. On note $u_0 = ${u0}$, $u_1$, … les points gagnés à chaque niveau. Quel est le total des points après les $${n}$ premiers niveaux, c'est-à-dire $u_0 + u_1 + \\dots + u_{${n - 1}}$ ?`,
      `$${I(S)}$`,
      [`$${I(u0 * q ** (n - 1))}$`, `$${I(u0 * q ** n)}$`, `$${I(S - u0 * q ** (n - 1))}$`],
      'Les points forment une suite géométrique : écris tous les termes, puis additionne-les (un tableur ou une boucle Python avec un accumulateur fait ce calcul).',
      `Les termes sont $${u0}$, $${u0 * q}$, $${u0 * q * q}$, … jusqu'à $u_{${n - 1}}$.`,
      `Les termes sont ${Array.from({ length: n }, (_, i) => `$${I(u0 * q ** i)}$`).join(', ')}. Leur somme vaut $${Array.from({ length: n }, (_, i) => I(u0 * q ** i)).join(' + ')} = ${I(S)}$.`
    );
  },
  // ---- 1T4 : Fonctions : taux de variation et second degré ----
  /** a(x - x1)(x - x2) en LaTeX, a entier non nul */
  _1T4_fact(a, x1, x2) {
    const f = (r) => (r === 0 ? 'x' : `(x ${r > 0 ? '-' : '+'} ${Math.abs(r)})`);
    const lead = a === 1 ? '' : a === -1 ? '-' : String(a);
    if (x1 === x2) return `${lead}${f(x1) === 'x' ? 'x^2' : `${f(x1)}^2`}`;
    const [p, q] = x1 === 0 ? [x1, x2] : x2 === 0 ? [x2, x1] : [x1, x2];
    return `${lead}${f(p)}${f(q)}`;
  },
  /** Intervalle en LaTeX : bornes infinies gérées */
  _1T4_iv(lo, a, b, hi) {
    const A = a === -Infinity ? '-\\infty' : a;
    const B = b === Infinity ? '+\\infty' : b;
    return `${lo && a !== -Infinity ? '[' : ']'}${A} ; ${B}${hi && b !== Infinity ? ']' : '['}`;
  },
  /** Substitution lisible de x = k dans a x^2 + b x + c (k entier) */
  _1T4_sub(a, b, c, k) {
    const K = k < 0 ? `(${k})` : `${k}`;
    const parts = [];
    const push = (v, body) => { if (v) parts.push({ neg: v < 0, txt: body(Math.abs(v)) }); };
    push(a, (v) => (v === 1 ? `${K}^2` : `${v} \\times ${K}^2`));
    push(b, (v) => (v === 1 ? `${K}` : `${v} \\times ${K}`));
    push(c, (v) => `${v}`);
    return parts.map((q, i) => (i === 0 ? (q.neg ? '-' : '') + q.txt : `${q.neg ? '-' : '+'} ${q.txt}`)).join(' ');
  },
  /** Saisie d'une fraction réduite (outil du lycée) */
  _1T4_xf(n, d) { return window.MathsLyceeGenerators._xf(n, d); },
  /** Forme factorisée complète (outil du lycée) */
  _1T4_xprod(k, facs) { return window.MathsLyceeGenerators._xprod(k, facs); },

  gen_1T4(tier) {
    const T = '1T4';
    const N = (x) => this.dec(x, 4);
    const I = (x) => this._int(x);
    const VAL = this._VAL;
    const PX = (c) => this.polyX(c);
    const FA = (a, x1, x2) => this._1T4_fact(a, x1, x2);
    const par = (v) => (v < 0 ? `(${v})` : `${v}`);
    const fam = this.randInt(0, 2);

    if (tier === 1) {
      if (fam === 0) {
        const x1 = this.randNonZero(-4, 4); const h = this.randInt(1, 5); const x2 = x1 + h;
        const m = this.randNonZero(-6, 6);
        const f1 = this.randNonZero(-10, 15); const f2 = f1 + m * h;
        return this._xa([String(m), VAL], T, 1, 'Taux de variation entre deux valeurs',
          'Calculer un taux de variation',
          `Une fonction $f$ vérifie $f(${x1}) = ${f1}$ et $f(${x2}) = ${f2}$. Calculer le taux de variation de $f$ entre $${x1}$ et $${x2}$.`,
          `$${m}$`,
          [`$${f2 - f1}$`, `$${-m}$`, `$${m * h === m ? m + 1 : this._r((x2 - x1) / (f2 - f1)) === m ? m + 2 : m + h}$`],
          'Le taux de variation de $f$ entre $a$ et $b$ est $\\frac{f(b) - f(a)}{b - a}$ : c\'est la pente de la sécante passant par les points d\'abscisses $a$ et $b$.',
          `Calcule d'abord $f(${x2}) - f(${x1}) = ${f2} - ${par(f1)}$, puis divise par $${x2} - ${par(x1)}$.`,
          `$\\frac{f(${x2}) - f(${x1})}{${x2} - ${par(x1)}} = \\frac{${f2} - ${par(f1)}}{${h}} = \\frac{${f2 - f1}}{${h}} = ${m}$.`.replace(/ = \\frac\{-?\d+\}\{1\}(?= = )/, '')
        );
      }
      if (fam === 1) {
        const a = this.randNonZero(-3, 3); const b = this.randInt(-6, 6); const c = this.randInt(-9, 9);
        const x = this.randNonZero(-4, 4);
        const r = a * x * x + b * x + c;
        return this._xa([String(r), VAL], T, 1, 'Image par une fonction du second degré',
          'Calculer une image par une fonction polynôme du second degré',
          `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${PX([a, b, c])}$. Calculer $f(${x})$.`,
          `$${r}$`,
          [`$${-a * x * x + b * x + c}$`, `$${a * 2 * x + b * x + c}$`, `$${r + 2 * b * x || r + 4}$`],
          'On remplace $x$ par la valeur donnée, en calculant le carré avant de multiplier par le coefficient, et en mettant les nombres négatifs entre parenthèses.',
          `Commence par calculer $${par(x)}^2$.`,
          `$f(${x}) = ${this._1T4_sub(a, b, c, x)} = ${[a * x * x, b * x, c].filter((v) => v !== 0).map((v, k) => (k === 0 ? `${v}` : `${v < 0 ? '-' : '+'} ${Math.abs(v)}`)).join(' ')} = ${r}$.`.replace(/= (-?\d+) = \1\$/, '= $1$')
        );
      }
      const a = this.randNonZero(-4, 4);
      const v = this.randInt(0, 1);
      const x1 = this.randInt(-5, 5); let x2 = this.randInt(-5, 5); if (x2 === x1) x2 = x1 + 3;
      const c = this.randNonZero(-9, 9);
      const ex = v === 0 ? FA(a, x1, x2) : `${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${c < 0 ? '-' : '+'} ${Math.abs(c)}`;
      const opts = ['La parabole est tournée vers le haut : $f$ admet un minimum.', 'La parabole est tournée vers le bas : $f$ admet un maximum.', 'La parabole est tournée vers le haut : $f$ admet un maximum.', 'La parabole est tournée vers le bas : $f$ admet un minimum.'];
      const ans = a > 0 ? opts[0] : opts[1];
      return this._xa('keep', T, 1, 'Allure d\'une parabole',
        'Déterminer l\'allure d\'une parabole selon le signe de a',
        `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${ex}$. Que peut-on dire de sa courbe représentative ?`,
        ans,
        opts.filter((x) => x !== ans),
        'La courbe d\'une fonction polynôme du second degré est une parabole, tournée vers le haut si le coefficient $a$ de $x^2$ est positif, vers le bas s\'il est négatif.',
        'Repère le coefficient de $x^2$ (en développant mentalement si besoin) et son signe.',
        `Le coefficient de $x^2$ est $a = ${a}$, ${a > 0 ? 'positif' : 'négatif'}. La parabole est tournée vers ${a > 0 ? 'le haut' : 'le bas'} et son sommet correspond au ${a > 0 ? 'minimum' : 'maximum'} de $f$.`
      );
    }

    if (tier === 2) {
      if (fam === 0) {
        const a = this.randNonZero(-3, 3); const b = this.randInt(-6, 6); const c = this.randInt(-9, 9);
        const x1 = this.randNonZero(-3, 2); const x2 = x1 + this.randInt(1, 4);
        const f1 = a * x1 * x1 + b * x1 + c; const f2 = a * x2 * x2 + b * x2 + c;
        if (f1 === 0) return this.gen_1T4(2);
        const m = (f2 - f1) / (x2 - x1);
        return this._xa([String(m), VAL], T, 2, 'Taux de variation d\'un trinôme',
          'Calculer un taux de variation d\'une fonction polynôme du second degré',
          `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${PX([a, b, c])}$. Calculer le taux de variation de $f$ entre $${x1}$ et $${x2}$.`,
          `$${m}$`,
          [`$${f2 - f1}$`, `$${-m}$`, `$${m + a}$`],
          'On calcule les deux images, puis le quotient $\\frac{f(b) - f(a)}{b - a}$.',
          `Calcule $f(${x1})$ et $f(${x2})$.`,
          `$f(${x1}) = ${f1}$ et $f(${x2}) = ${f2}$, donc le taux de variation vaut $\\frac{${f2} - ${par(f1)}}{${x2} - ${par(x1)}} = \\frac{${f2 - f1}}{${x2 - x1}} = ${m}$. ${m > 0 ? 'Il est positif : entre ces deux valeurs, $f$ augmente « en moyenne ».' : m < 0 ? 'Il est négatif : entre ces deux valeurs, $f$ diminue « en moyenne ».' : 'Il est nul : $f$ prend la même valeur aux deux bornes.'}`.replace(/ = \\frac\{-?\d+\}\{1\}(?= = )/, '')
        );
      }
      if (fam === 1) {
        const x1 = this.randInt(-6, 4); const x2 = x1 + this.randInt(1, 9);
        const k = this.randInt(-8, 12);
        const al = (x1 + x2) / 2;
        return this._xa([this.decText(al), VAL], T, 2, 'Axe de symétrie d\'une parabole',
          'Déterminer l\'axe de symétrie par symétrie',
          `La courbe d'une fonction polynôme du second degré $f$ passe par les points $A(${x1} ; ${k})$ et $B(${x2} ; ${k})$. Quelle est l'abscisse $\\alpha$ du sommet de la parabole ?`,
          `$${N(al)}$`,
          [`$${N(x2 - x1)}$`, `$${N((x2 - x1) / 2)}$`, `$${k}$`],
          'Deux points d\'une parabole de même ordonnée sont symétriques par rapport à l\'axe de la parabole : l\'axe passe par le milieu de leurs abscisses.',
          `Calcule la moyenne des abscisses $${x1}$ et $${x2}$.`,
          `Comme $f(${x1}) = f(${x2}) = ${k}$, l'axe de symétrie est la droite d'équation $x = \\frac{${x1} + ${x2}}{2}$, soit $x = ${N(al)}$. Le sommet a pour abscisse $\\alpha = ${N(al)}$.`.replace('+ -', '- ')
        );
      }
      const a = this.randNonZero(-4, 4);
      const x1 = this.randNonZero(-7, 7); let x2 = this.randInt(-7, 7); if (x2 === x1 || x2 === -x1) x2 = x1 > 0 ? x1 - 9 : x1 + 9;
      const S = (u, w) => `$\\{${Math.min(u, w)} ; ${Math.max(u, w)}\\}$`;
      const ans = S(x1, x2);
      const wr = [S(-x1, -x2), S(a === x1 ? a + 10 : a, x1 === a ? x2 - 10 : x1), S(x1, -x2)];
      return this._xa('keep', T, 2, 'Racines d\'une forme factorisée',
        'Lire les racines d\'une forme factorisée',
        `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${FA(a, x1, x2)}$. Quel est l'ensemble des solutions de l'équation $f(x) = 0$ ?`,
        ans,
        [...new Set(wr)].filter((w) => w !== ans),
        'Un produit est nul si et seulement si l\'un au moins de ses facteurs est nul ; le coefficient $a$, non nul, ne s\'annule jamais.',
        'Écris l\'équation obtenue en annulant chacun des deux facteurs qui contiennent $x$.',
        `$f(x) = 0$ équivaut à $${x1 === 0 ? 'x' : `x ${x1 > 0 ? '-' : '+'} ${Math.abs(x1)}`} = 0$ ou $x ${x2 > 0 ? '-' : '+'} ${Math.abs(x2)} = 0$, c'est-à-dire $x = ${x1}$ ou $x = ${x2}$. L'ensemble des solutions est ${ans}.`.replace('$x - 0 = 0$', '$x = 0$').replace('$x + 0 = 0$', '$x = 0$')
      );
    }

    if (tier === 3) {
      if (fam === 0) {
        const a = this.randNonZero(-3, 3);
        const x1 = this.randInt(-8, 4); const x2 = x1 + 2 * this.randInt(1, 5);
        const al = (x1 + x2) / 2; const be = a * (al - x1) * (al - x2);
        const mx = a < 0 ? 'maximum' : 'minimum';
        return this._xa([String(be), VAL], T, 3, 'Extremum d\'une forme factorisée',
          'Déterminer l\'extremum d\'une fonction du second degré',
          `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${FA(a, x1, x2)}$. Quelle est la valeur du ${mx} de $f$ ?`,
          `$${be}$`,
          [`$${N(al)}$`, `$${-be}$`, `$${a * (0 - x1) * (0 - x2) === be ? be + 1 : a * x1 * x2}$`],
          'Le sommet de la parabole est sur l\'axe de symétrie, qui passe par le milieu des deux racines ; l\'extremum est l\'image de l\'abscisse du sommet.',
          `Les racines sont $${x1}$ et $${x2}$ : calcule l'abscisse $\\alpha$ du milieu, puis $f(\\alpha)$.`,
          `Les racines sont $${x1}$ et $${x2}$, donc $\\alpha = \\frac{${x1} + ${par(x2)}}{2} = ${al}$. Alors $f(${al}) = ${a === 1 ? '' : `${a} \\times `}${x1 === 0 ? par(al) : `(${al} - ${par(x1)})`} \\times ${x2 === 0 ? par(al) : `(${al} - ${par(x2)})`} = ${a === 1 ? '' : `${a} \\times `}${par(al - x1)} \\times ${par(al - x2)} = ${be}$. Comme $a = ${a} ${a < 0 ? '< 0' : '> 0'}$, c'est un ${mx}, atteint en $x = ${al}$.`
        );
      }
      if (fam === 1) {
        const a = this.randChoice([1, 1, 2, -1, -2, 3]);
        const x1 = this.randChoice([1, -1, 2, -2]);
        let x2 = this.randNonZero(-6, 6); if (x2 === x1) x2 = -3 * x1;
        const b = -a * (x1 + x2); const c = a * x1 * x2;
        const full = this._1T4_xprod(a, [[1, -x1], [1, -x2]]);
        return this._xa([full.plain, 'Écrire la forme factorisée.', null, 'factorisation'], T, 3, 'Factoriser connaissant une racine',
          'Factoriser un polynôme du second degré connaissant une racine',
          `Soit $f(x) = ${PX([a, b, c])}$. Vérifier que $${x1}$ est une racine de $f$, puis factoriser complètement $f(x)$.`,
          `$${full.tex}$`,
          [`$${this._1T4_xprod(a, [[1, x1], [1, x2]]).tex}$`, `$${this._1T4_xprod(1, [[1, -x1], [1, -x2]]).tex === full.tex ? this._1T4_xprod(-a, [[1, -x1], [1, -x2]]).tex : this._1T4_xprod(1, [[1, -x1], [1, -x2]]).tex}$`, `$${this._1T4_xprod(a, [[1, -x1], [1, x2]]).tex}$`],
          'Si $x_1$ est une racine, alors $f(x) = a(x - x_1)(x - x_2)$ ; en développant, le terme constant vaut $a \\times x_1 \\times x_2$, ce qui donne l\'autre racine.',
          `Calcule $f(${x1})$, puis cherche $x_2$ tel que $${a === 1 ? '' : `${a} \\times `}${par(x1)} \\times x_2 = ${c}$.`,
          `$f(${x1}) = ${this._1T4_sub(a, b, c, x1)} = 0$ : $${x1}$ est bien une racine. On écrit $f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}(x ${x1 < 0 ? '+' : '-'} ${Math.abs(x1)})(x - x_2)$ ; le terme constant donne $${a === 1 ? '' : `${a} \\times `}${par(x1)} \\times x_2 = ${c}$, d'où $x_2 = ${x2}$. Donc $f(x) = ${full.tex}$ (on vérifie en développant).`.replace(/ [+-] 0 \\times \S+/, '').replace(/ [+-] 0(?= =)/g, '')
        );
      }
      const a = this.randChoice([1, 2, 3, -1, -2, -3]);
      const x1 = this.randInt(-6, 3); const x2 = x1 + this.randInt(2, 7);
      const op = this.randChoice(['>', '<', '\\geqslant', '\\leqslant']);
      const strict = op === '>' || op === '<';
      const wantPos = op === '>' || op === '\\geqslant';
      const inside = (a > 0) !== wantPos; // signe de f entre les racines : celui de -a
      const iv = this._1T4_iv.bind(this);
      const ins = iv(!strict, x1, x2, !strict);
      const outs = `${iv(false, -Infinity, x1, !strict)} \\cup ${iv(!strict, x2, Infinity, false)}`;
      const ans = `$S = ${inside ? ins : outs}$`;
      const wr = [`$S = ${inside ? outs : ins}$`, `$S = ${inside ? iv(strict, x1, x2, strict) : `${iv(false, -Infinity, x1, strict)} \\cup ${iv(strict, x2, Infinity, false)}`}$`, `$S = ${iv(!strict, -x2, -x1, !strict)}$`];
      return this._xa('keep', T, 3, 'Signe d\'une forme factorisée',
        'Résoudre une inéquation à l\'aide d\'une forme factorisée',
        `Soit $f(x) = ${FA(a, x1, x2)}$. Résoudre dans $\\mathbb{R}$ l'inéquation $f(x) ${op} 0$.`,
        ans,
        wr,
        'Une fonction $a(x - x_1)(x - x_2)$ a le signe de $a$ à l\'extérieur des racines et le signe contraire entre les racines (tableau de signes).',
        `Les racines sont $${x1}$ et $${x2}$ : dresse un tableau de signes en tenant compte du signe de $a = ${a}$.`,
        `Les racines sont $${x1}$ et $${x2}$. Comme $a = ${a}$ est ${a > 0 ? 'positif' : 'négatif'}, $f(x)$ est ${a > 0 ? 'positif' : 'négatif'} à l'extérieur des racines et ${a > 0 ? 'négatif' : 'positif'} entre elles. ${strict ? 'L\'inégalité est stricte : les racines sont exclues.' : 'L\'inégalité est large : les racines sont incluses.'} Donc ${ans}.`
      );
    }

    // Palier 4
    if (fam === 0) {
      const a = this.randChoice([1, 2, 3, 5]);
      const x1 = this.randInt(1, 4); const x2 = x1 + 2 * this.randInt(3, 8);
      const al = (x1 + x2) / 2; const be = -a * (al - x1) * (al - x2);
      const b = a * (x1 + x2); const c = -a * x1 * x2;
      return this._xa([String(be), VAL], T, 4, 'Bénéfice maximal',
        'Optimiser une grandeur modélisée par une fonction du second degré',
        `Une entreprise fabrique entre $0$ et $${x2 + 4}$ centaines d'objets. Son bénéfice, en milliers d'euros, est $B(x) = ${PX([-a, b, c])}$ pour $x$ centaines d'objets. On admet que $B(x) = ${FA(-a, x1, x2)}$. Quel est le bénéfice maximal, en milliers d'euros ?`,
        `$${be}$`,
        [`$${N(al)}$`, `$${-c}$`, `$${-a * al * al + b * al}$`],
        'Le maximum d\'une fonction $a(x - x_1)(x - x_2)$ avec $a < 0$ est atteint au milieu des deux racines.',
        `Les racines sont $${x1}$ et $${x2}$ : calcule l'abscisse du sommet puis son image par $B$.`,
        `$\\alpha = \\frac{${x1} + ${x2}}{2} = ${al}$ et $B(${al}) = ${-a} \\times (${al} - ${x1})(${al} - ${x2}) = ${-a} \\times ${al - x1} \\times (${al - x2}) = ${be}$. Le bénéfice maximal est de $${be}$ milliers d'euros, pour $${al}$ centaines d'objets.`.replace(/^\$\\alpha = .*?= /, (m) => m).replace('-1 \\times', '-1 \\times')
      );
    }
    if (fam === 1) {
      const L = this.randChoice([4, 6, 8, 10, 12, 20]);
      const h = this.randChoice([3, 4, 5, 6, 9, 10, 15]);
      const half = L / 2;
      const d = half * half / this.gcd(h, half * half);
      const tex = this.frac(-h, half * half);
      return this._xa([this._1T4_xf(-h, half * half), this._VAL + ' Une fraction irréductible est acceptée.'], T, 4, 'Modéliser une arche',
        'Déterminer une fonction du second degré à partir de ses racines et d\'un point',
        `Une arche de pont a la forme d'une parabole. Dans un repère (unité : le mètre), ses pieds sont aux points d'abscisses $0$ et $${L}$, et son sommet est à $${h}$ m de hauteur. Elle est représentée par $f(x) = ax(x - ${L})$. Quelle est la valeur de $a$ ?`,
        `$${tex}$`,
        [[h, half * half], [-h, L * L], [-h, half * L], [-2 * h, half * half], [-h, 2 * half * half]].filter(([u, w]) => d === 1 || u % w !== 0).map(([u, w]) => `$${this.frac(u, w)}$`).filter((x, i, arr) => x !== `$${tex}$` && arr.indexOf(x) === i).slice(0, 3),
        'On utilise le sommet : il est sur l\'axe de symétrie, au milieu des racines, et son ordonnée est connue.',
        `Le sommet a pour abscisse $${half}$ ; écris l'équation $f(${half}) = ${h}$.`,
        `Le sommet a pour abscisse $\\frac{0 + ${L}}{2} = ${half}$ et pour ordonnée $${h}$. Donc $a \\times ${half} \\times (${half} - ${L}) = ${h}$, soit $${-half * half}a = ${h}$ et $a = ${tex}$${d === 1 ? '' : ` (${(1000 * h) % (half * half) === 0 ? 'soit' : 'environ'} $${N(Math.round(-h / (half * half) * 1000) / 1000)}$)`}. On a bien $a < 0$ : l'arche est tournée vers le bas.`
      );
    }
    const x1 = this.randChoice([1, 2]);
    const x2 = x1 + this.randInt(4, 9);
    const a = this.randChoice([1, 2]);
    const b = a * (x1 + x2); const c = -a * x1 * x2;
    const M = x2 + this.randInt(2, 5);
    const iv = this._1T4_iv.bind(this);
    const ans = `$${iv(true, x1, x2, true)}$`;
    return this._xa('keep', T, 4, 'Zone de rentabilité',
      'Déterminer le signe d\'une fonction du second degré connaissant une racine',
      `Un artisan produit chaque jour $x$ objets, avec $0 \\leqslant x \\leqslant ${M}$. Son bénéfice quotidien, en dizaines d'euros, est $B(x) = ${PX([-a, b, c])}$. On a $B(${x1}) = 0$. Sur quel intervalle le bénéfice est-il positif ou nul ?`,
      ans,
      [`$${iv(true, 0, x1, true)} \\cup ${iv(true, x2, M, true)}$`, `$${iv(true, x1, x2 + x1, true)}$`, `$${iv(false, x1, x2, false)}$`],
      'Connaissant une racine $x_1$, on écrit $B(x) = a(x - x_1)(x - x_2)$ et l\'on trouve $x_2$ grâce au terme constant ; on étudie ensuite le signe à l\'aide d\'un tableau de signes.',
      `On écrit $B(x) = ${a === 1 ? '-' : -a}(x - ${x1})(x - x_2)$ : en développant, le terme constant vaut $${-a} \\times ${x1} \\times x_2$ et doit être égal à $${c}$.`,
      `On écrit $B(x) = ${a === 1 ? '-' : -a}(x - ${x1})(x - x_2)$. En développant, le terme constant vaut $${-a} \\times ${x1} \\times x_2$ ; l'égalité $${-a} \\times ${x1} \\times x_2 = ${c}$ donne $x_2 = ${x2}$, donc $B(x) = ${FA(-a, x1, x2)}$. Comme $a = ${-a} < 0$, $B(x)$ est positif ou nul entre les racines : le bénéfice est positif ou nul pour $x \\in ${iv(true, x1, x2, true)}$.`
    );
  },
  // ---- 1T5 : Dérivation ----
  /** Polynôme en LaTeX, coefficients entiers ou décimaux (du plus haut degré au terme constant) : [2, -0.5, 0] -> « 2x^2 - 0{,}5x » */
  _1T5_px(cs, v = 'x') {
    const n = cs.length - 1; const out = [];
    cs.forEach((c, i) => {
      const d = n - i;
      if (!c) return;
      const a = Math.abs(c);
      const mon = d === 0 ? '' : d === 1 ? v : `${v}^${d}`;
      const body = a === 1 && d > 0 ? mon : `${this.dec(a, 4)}${mon}`;
      out.push(out.length ? `${c < 0 ? '-' : '+'} ${body}` : `${c < 0 ? '-' : ''}${body}`);
    });
    return out.length ? out.join(' ') : '0';
  },
  /** Valeur d'un polynôme (coefficients du plus haut degré au terme constant) */
  _1T5_ev(cs, x) { return this._r(cs.reduce((s, c) => s * x + c, 0)); },
  /** Coefficients de la dérivée */
  _1T5_der(cs) { const n = cs.length - 1; return cs.slice(0, -1).map((c, i) => this._r(c * (n - i))); },
  /** Forme k(x - r1)(x - r2) en LaTeX (facteur x seul si une racine est nulle, placé en tête) */
  _1T5_fac(k, r1, r2) {
    const f = (r) => (r === 0 ? 'x' : `(x ${r > 0 ? '-' : '+'} ${Math.abs(r)})`);
    const rs = r2 === 0 ? [r2, r1] : [r1, r2];
    return `${k === 1 ? '' : k === -1 ? '-' : k}${rs.map(f).join('')}`;
  },
  /** « y = f'(a)(x - a) + f(a) » écrit simplement (sans « 1(x… » ni « + (-3) ») ; null si c'est déjà la forme réduite */
  _1T5_tanRaw(m, a, fa) {
    if (a === 0 || m === 0) return null;
    const fac = `(x ${a > 0 ? '-' : '+'} ${Math.abs(a)})`;
    const coef = m === 1 ? fac : m === -1 ? `-${fac}` : `${m}${fac}`;
    return fa === 0 ? coef : `${coef} ${fa < 0 ? '-' : '+'} ${Math.abs(fa)}`;
  },
  /** Dérivées terme à terme, rédigées : « $(2x^3)' = 6x^2$, $(-5x)' = -5$ » */
  _1T5_terms(cs) {
    const n = cs.length - 1; const parts = [];
    cs.forEach((c, i) => {
      const d = n - i;
      if (!c || d === 0) return;
      const mono = Array(d + 1).fill(0); mono[0] = c;
      const dm = Array(d).fill(0); dm[0] = c * d;
      parts.push(`$(${this._1T5_px(mono)})' = ${this._1T5_px(dm)}$`);
    });
    return parts.join(', ');
  },
  _1T5_MOB: [
    { s: 'Un scooter démarre à un feu tricolore', a: [1, 1.5, 2], b: [0], tmax: 8 },
    { s: 'Un train accélère en sortie de gare', a: [0.25, 0.5], b: [4, 5, 6], tmax: 20 },
    { s: 'Un cycliste aborde une descente', a: [0.1, 0.2, 0.3], b: [5, 6, 8], tmax: 30 },
    { s: 'Une bille est lâchée sans vitesse initiale depuis un pont', a: [4.9], b: [0], tmax: 3 },
    { s: 'Une voiture s\'insère sur une voie rapide', a: [0.5, 1, 1.5], b: [10, 12, 15], tmax: 10 }
  ],

  gen_1T5(tier) {
    const T = '1T5';
    const px = (cs) => this._1T5_px(cs);
    const D = (x) => this.dec(x, 4);
    const fam = this.randInt(0, 2);

    if (tier === 1) {
      if (fam === 0) {
        // dérivée d'un polynôme de degré 2 ou 3
        const deg = this.randChoice([2, 3, 3]);
        let cs; let ds;
        do {
          cs = deg === 3 ? [this.randNonZero(-5, 5), this.randInt(-6, 6), this.randInt(-9, 9), this.randInt(-9, 9)]
            : [this.randNonZero(-6, 6), this.randInt(-9, 9), this.randInt(-9, 9)];
          ds = this._1T5_der(cs);
        } while (ds.filter((c) => c !== 0).length < 2 || cs[cs.length - 1] === 0);
        const k = cs[cs.length - 1];
        const keepK = `$f'(x) = ${px(ds)} ${k < 0 ? '-' : '+'} ${Math.abs(k)}$`;
        return this._xa([this._xdev(ds), "Écrire $f'(x)$ sous forme développée et réduite.", null, 'developpement'], T, 1, 'Dérivée d\'une fonction polynôme',
          'Calculer la dérivée d\'une fonction polynôme de degré au plus 3',
          `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${px(cs)}$. Déterminer $f'(x)$.`,
          `$f'(x) = ${px(ds)}$`,
          [keepK, `$f'(x) = ${px(cs.slice(0, -1))}$`, `$f'(x) = ${px([...ds, 0])}$`, `$f'(x) = ${px(ds.map((c, i) => (i === 0 ? -c : c)))}$`],
          'On dérive terme à terme : $(x^3)\' = 3x^2$, $(x^2)\' = 2x$, $(x)\' = 1$, une constante a une dérivée nulle, et un coefficient multiplicatif se conserve.',
          `Commence par le terme de plus haut degré : ${this._1T5_terms([cs[0], ...Array(deg).fill(0)])}.`,
          `${this._1T5_terms(cs)} et la constante $${k}$ a une dérivée nulle. Donc $f'(x) = ${px(ds)}$.`
        );
      }
      if (fam === 1) {
        // nombre dérivé en un point
        const cubic = Math.random() < 0.35;
        const cs = cubic ? [this.randNonZero(-2, 2), this.randInt(-3, 3), this.randInt(-6, 6), this.randInt(-5, 5)]
          : [this.randNonZero(-4, 4), this.randInt(-8, 8), this.randInt(-9, 9)];
        const ds = this._1T5_der(cs);
        const a = this.randNonZero(-3, 4);
        const v = this._1T5_ev(ds, a);
        return this._xa([String(v), this._VAL], T, 1, 'Nombre dérivé en un point',
          'Calculer un nombre dérivé à l\'aide de la fonction dérivée',
          `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${px(cs)}$. Calculer $f'(${a})$.`,
          `$f'(${a}) = ${v}$`,
          [`$f'(${a}) = ${this._1T5_ev(cs, a)}$`, `$f'(${a}) = ${this._1T5_ev(ds, -a)}$`, `$f'(${a}) = ${this._1T5_ev(ds, 1)}$`, `$f'(${a}) = ${this._r(v - ds[ds.length - 1])}$`],
          'On détermine d\'abord l\'expression de $f\'(x)$ en dérivant terme à terme, puis on remplace $x$ par la valeur demandée.',
          `On trouve $f'(x) = ${px(ds)}$ ; remplace $x$ par $${a}$.`,
          `$f'(x) = ${px(ds)}$, donc $f'(${a}) = ${px(ds).replace(/x/g, `\\times ${this.paren(a)}`).replace(/(^|\s|-)\\times /g, '$1').replace(/\\times \((-?\d+)\)\^/g, '\\times ($1)^')} = ${v}$.`
            .replace(/(\d)\\times/g, '$1 \\times')
        );
      }
      // coefficient directeur de la tangente lu avec deux points
      const xA = this.randInt(-3, 3); const yA = this.randInt(-4, 6);
      const dx = this.randInt(1, 4); let dy;
      do { dy = this.randInt(-8, 8); } while (dy === 0);
      const xB = xA + dx; const yB = yA + dy;
      const ans = this.frac(dy, dx);
      const sub = (u, w) => (w === 0 ? `${u}` : `${u} - ${this.paren(w)}`);
      return this._xa([window.MathsLyceeGenerators._xf(dy, dx), this._VAL + ' Une fraction irréductible est acceptée.'], T, 1, 'Nombre dérivé et tangente',
        'Interpréter le nombre dérivé comme coefficient directeur de la tangente',
        `La courbe d'une fonction $f$ admet au point $A(${xA} ; ${yA})$ une tangente $T$ qui passe aussi par le point $B(${xB} ; ${yB})$. Déterminer $f'(${xA})$.`,
        `$f'(${xA}) = ${ans}$`,
        [`$f'(${xA}) = ${this.frac(dx, dy)}$`, `$f'(${xA}) = ${this.frac(-dy, dx)}$`, `$f'(${xA}) = ${yA}$`, `$f'(${xA}) = ${dy}$`],
        'Le nombre dérivé $f\'(a)$ est le coefficient directeur de la tangente au point d\'abscisse $a$ : $m = \\frac{y_B - y_A}{x_B - x_A}$.',
        `Ici $y_B - y_A = ${sub(yB, yA)}$ et $x_B - x_A = ${sub(xB, xA)}$.`,
        `$f'(${xA})$ est le coefficient directeur de $T$ : $f'(${xA}) = \\frac{${sub(yB, yA)}}{${sub(xB, xA)}} = ${ans}$.`
      );
    }

    if (tier === 2) {
      if (fam === 0) {
        // équation réduite de la tangente (degré 2)
        let cs; let a; let m; let fa; let p;
        do {
          cs = [this.randNonZero(-3, 3), this.randInt(-6, 6), this.randInt(-6, 6)];
          a = this.randInt(-3, 3);
          m = this._1T5_ev(this._1T5_der(cs), a); fa = this._1T5_ev(cs, a); p = fa - m * a;
        } while (m === 0);
        const eq = (u, w) => `$y = ${this.poly([[u, 'x'], [w, '']])}$`;
        const raw = this._1T5_tanRaw(m, a, fa);
        return this._xa([this._xeq(m, p), this._XDROITE, null, 'equationDroite'], T, 2, 'Équation réduite d\'une tangente',
          'Déterminer l\'équation réduite d\'une tangente',
          `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${px(cs)}$. Déterminer l'équation réduite de la tangente à la courbe de $f$ au point d'abscisse $${a}$.`,
          eq(m, p),
          [eq(m, fa), eq(fa, m), eq(-m, p), eq(m, fa + m * a), eq(m + 1, p)],
          'La tangente au point d\'abscisse $a$ a pour équation $y = f\'(a)(x - a) + f(a)$ : il faut calculer $f(a)$ et $f\'(a)$.',
          `$f'(x) = ${px(this._1T5_der(cs))}$ ; calcule $f(${a})$ et $f'(${a})$.`,
          `$f(${a}) = ${fa}$ et $f'(x) = ${px(this._1T5_der(cs))}$, donc $f'(${a}) = ${m}$. ${raw ? `$y = ${raw}$, soit ` : 'D\'où '}${eq(m, p)}.`
        );
      }
      if (fam === 1) {
        // vitesse instantanée
        const C = this.randChoice(this._1T5_MOB);
        const a = this.randChoice(C.a); const b = this.randChoice(C.b);
        const t0 = this.randInt(2, C.tmax);
        const v = this._r(2 * a * t0 + b);
        const d0 = this._r(a * t0 * t0 + b * t0);
        return this._xa([this.decText(v), this._VAL], T, 2, 'Vitesse instantanée',
          'Interpréter un nombre dérivé comme une vitesse',
          `${C.s}. La distance parcourue (en mètres) au bout de $t$ secondes est $d(t) = ${this._1T5_px([a, b, 0], 't')}$. On admet que la vitesse instantanée (en m/s) à l'instant $t$ est $d'(t)$. Calculer la vitesse à l'instant $t = ${t0}$.`,
          `$${D(v)}$ m/s`,
          [`$${D(this._r(d0 / t0))}$ m/s`, `$${D(d0)}$ m/s`, `$${D(this._r(a * t0 + b))}$ m/s`, `$${D(this._r(2 * a * t0))}$ m/s`].filter((s) => s !== `$${D(v)}$ m/s`),
          'La vitesse instantanée est la dérivée de la distance parcourue : on calcule $d\'(t)$ puis on remplace $t$ par l\'instant demandé.',
          `$d'(t) = ${this._1T5_px([2 * a, b], 't')}$.`,
          `$d'(t) = ${this._1T5_px([this._r(2 * a), b], 't')}$, donc $d'(${t0}) = ${D(this._r(2 * a))} \\times ${t0}${b ? ` + ${D(b)}` : ''} = ${D(v)}$. La vitesse vaut $${D(v)}$ m/s (à ne pas confondre avec la vitesse moyenne $\\frac{d(${t0})}{${t0}}$ depuis le départ).`
        );
      }
      // intervalle de croissance (QCM)
      const a = this.randNonZero(-3, 3); const s = this.randNonZero(-4, 4); const c = this.randInt(-6, 6);
      const cs = [a, -2 * a * s, c];
      const up = Math.random() < 0.5;
      const inc = `$[${s} ; +\\infty[$`; const dec = `$]-\\infty ; ${s}]$`;
      const good = (a > 0) === up ? inc : dec;
      const bad = good === inc ? dec : inc;
      return this.makeMcq(T, 2, 'Sens de variation et signe de la dérivée',
        'Déduire le sens de variation du signe de la dérivée',
        `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${px(cs)}$. Sur quel intervalle $f$ est-elle ${up ? 'croissante' : 'décroissante'} ?`,
        good,
        [bad, `$[${-s} ; +\\infty[$`, `$]-\\infty ; ${-s}]$`, `$[${c} ; +\\infty[$`].filter((o) => o !== good),
        'On étudie le signe de $f\'(x)$ : $f$ est croissante là où $f\'(x) \\geqslant 0$ et décroissante là où $f\'(x) \\leqslant 0$.',
        `$f'(x) = ${px([2 * a, -2 * a * s])}$ s'annule en $x = ${s}$.`,
        `$f'(x) = ${px([2 * a, -2 * a * s])} = ${2 * a}(x ${s > 0 ? '-' : '+'} ${Math.abs(s)})$ est ${a > 0 ? 'négative' : 'positive'} avant $${s}$ et ${a > 0 ? 'positive' : 'négative'} après. Donc $f$ est ${a > 0 ? 'décroissante' : 'croissante'} sur $]-\\infty ; ${s}]$ et ${a > 0 ? 'croissante' : 'décroissante'} sur $[${s} ; +\\infty[$ : la réponse est ${good}.`
      );
    }

    if (tier === 3) {
      if (fam === 0) {
        // extremum d'un polynôme de degré 2
        const a = this.randNonZero(-3, 3); const s = this.randInt(-4, 5); const c = this.randInt(-8, 8);
        const cs = [a, -2 * a * s, c];
        if (cs[1] === 0) return this.gen_1T5(3);
        const m = this._1T5_ev(cs, s);
        const kind = a > 0 ? 'minimum' : 'maximum';
        return this._xa([String(m), this._VAL], T, 3, 'Extremum d\'une fonction du second degré',
          'Déterminer un extremum à l\'aide de la dérivée',
          `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${px(cs)}$. Étudier le signe de $f'(x)$ et en déduire la valeur de l'extremum de $f$.`,
          `$${m}$`,
          [`$${s}$`, `$${this._1T5_ev(cs, -s)}$`, `$${c}$`, `$${this._1T5_ev(cs, s + 1)}$`],
          'L\'extremum est atteint là où $f\'$ s\'annule en changeant de signe ; sa valeur est l\'image de ce nombre par $f$ (et non le nombre lui-même).',
          `$f'(x) = ${px([2 * a, -2 * a * s])}$ ; cherche où elle s'annule.`,
          `$f'(x) = ${px([2 * a, -2 * a * s])}$ s'annule en $x = ${s}$ ; elle est ${a > 0 ? 'négative' : 'positive'} avant et ${a > 0 ? 'positive' : 'négative'} après. Donc $f$ est ${a > 0 ? 'décroissante puis croissante' : 'croissante puis décroissante'} : elle admet un ${kind} en $x = ${s}$, égal à $f(${s}) = ${m}$.`
        );
      }
      if (fam === 1) {
        // maximum (ou minimum) local d'un polynôme de degré 3, dérivée factorisée donnée à vérifier
        let k; let r1; let r2;
        do {
          k = this.randChoice([1, -1, 2, -2]); r1 = this.randInt(-3, 2); r2 = r1 + this.randInt(1, 4);
        } while ((k * (r1 + r2)) % 2 !== 0);
        const cs = [k, -3 * k * (r1 + r2) / 2, 3 * k * r1 * r2, this.randInt(-6, 6)];
        const wantMax = Math.random() < 0.5;
        // k > 0 : f croissante, décroissante sur [r1 ; r2], croissante : max local en r1, min local en r2
        const xm = (k > 0) === wantMax ? r1 : r2; const xo = xm === r1 ? r2 : r1;
        const val = this._1T5_ev(cs, xm);
        const dsx = this._1T5_der(cs);
        return this._xa([String(val), this._VAL], T, 3, 'Extremum local d\'un polynôme de degré 3',
          'Étudier les variations d\'un polynôme de degré 3',
          `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${px(cs)}$. On admet que $f'(x) = ${this._1T5_fac(3 * k, r1, r2)}$. Quelle est la valeur du ${wantMax ? 'maximum' : 'minimum'} local de $f$ ?`,
          `$${val}$`,
          [`$${this._1T5_ev(cs, xo)}$`, `$${xm}$`, `$${cs[3]}$`, `$${this._1T5_ev(cs, -xm)}$`],
          'On dresse le tableau de signes de $f\'(x)$ (signe d\'un produit de facteurs) : un maximum local correspond au passage de $+$ à $-$, un minimum local au passage de $-$ à $+$.',
          `$f'(x)$ s'annule en $${r1}$ et en $${r2}$ ; elle est du signe de $${3 * k}$ à l'extérieur de ces deux nombres.`,
          `En développant, $f'(x) = ${px(dsx)}$, ce qui confirme l'expression donnée. $f'(x)$ est du signe de $${3 * k}$ à l'extérieur de $[${r1} ; ${r2}]$ et du signe contraire entre $${r1}$ et $${r2}$. Donc $f$ est ${k > 0 ? 'croissante, puis décroissante sur' : 'décroissante, puis croissante sur'} $[${r1} ; ${r2}]$, puis ${k > 0 ? 'croissante' : 'décroissante'}. Le ${wantMax ? 'maximum' : 'minimum'} local est atteint en $x = ${xm}$ : $f(${xm}) = ${val}$.`
        );
      }
      // tangente à une courbe de degré 3
      let cs; let a; let m; let fa;
      do {
        cs = [this.randNonZero(-2, 2), this.randInt(-3, 3), this.randInt(-5, 5), this.randInt(-5, 5)];
        a = this.randNonZero(-2, 2);
        m = this._1T5_ev(this._1T5_der(cs), a); fa = this._1T5_ev(cs, a);
      } while (m === 0);
      const p = fa - m * a;
      const eq = (u, w) => `$y = ${this.poly([[u, 'x'], [w, '']])}$`;
      const raw = this._1T5_tanRaw(m, a, fa);
      return this._xa([this._xeq(m, p), this._XDROITE, null, 'equationDroite'], T, 3, 'Tangente à une courbe de degré 3',
        'Déterminer l\'équation réduite d\'une tangente',
        `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${px(cs)}$. Déterminer l'équation réduite de la tangente à la courbe de $f$ au point d'abscisse $${a}$.`,
        eq(m, p),
        [eq(m, fa), eq(fa, m), eq(-m, p), eq(m, fa + m * a)],
        'On applique $y = f\'(a)(x - a) + f(a)$ après avoir calculé $f(a)$ et le nombre dérivé $f\'(a)$.',
        `$f'(x) = ${px(this._1T5_der(cs))}$.`,
        `$f(${a}) = ${fa}$ ; $f'(x) = ${px(this._1T5_der(cs))}$, donc $f'(${a}) = ${m}$. $y = ${raw}$, soit ${eq(m, p)}.`
      );
    }

    // Palier 4 : problèmes
    if (fam === 0) {
      // bénéfice maximal
      let k; let r1; let r2; let cs; let best;
      do {
        k = this.randChoice([-1, -2]); r1 = this.randInt(-4, -1); r2 = this.randInt(3, 8);
        cs = [k, -3 * k * (r1 + r2) / 2, 3 * k * r1 * r2, -this.randChoice([20, 30, 40, 50, 60, 80, 100])];
        best = this._1T5_ev(cs, r2);
      } while (!Number.isInteger(cs[1]) || best <= 0 || best > 400);
      const L = r2 + this.randInt(2, 4);
      return this._xa([String(best), this._VAL], T, 4, 'Bénéfice maximal',
        'Optimiser une grandeur à l\'aide de la dérivée',
        `Une entreprise fabrique et vend $x$ centaines d'objets par mois, avec $0 \\leqslant x \\leqslant ${L}$. Son bénéfice mensuel, en milliers d'euros, est $B(x) = ${px(cs)}$. On admet que $B'(x) = ${this._1T5_fac(3 * k, r1, r2)}$. Quel est le bénéfice maximal, en milliers d'euros ?`,
        `$${best}$`,
        [`$${r2}$`, `$${this._1T5_ev(cs, L)}$`, `$${this._1T5_ev(cs, r2 - 1)}$`, `$${-cs[3]}$`],
        'On étudie le signe de $B\'(x)$ sur l\'intervalle d\'étude ; le maximum est atteint là où $B\'$ passe du signe $+$ au signe $-$.',
        `Sur $[0 ; ${L}]$, le facteur $x ${r1 < 0 ? '+' : '-'} ${Math.abs(r1)}$ est positif : $B'(x)$ a le signe de $${3 * k}(x - ${r2})$.`,
        `Sur $[0 ; ${L}]$, $x ${r1 < 0 ? '+' : '-'} ${Math.abs(r1)} > 0$, donc $B'(x)$ a le signe de $${3 * k}(x - ${r2})$ : positif sur $[0 ; ${r2}[$, négatif sur $]${r2} ; ${L}]$. $B$ est croissante puis décroissante : le bénéfice est maximal pour $x = ${r2}$, soit $${r2 * 100}$ objets, et vaut $B(${r2}) = ${best}$ milliers d'euros.`
      );
    }
    if (fam === 1) {
      // boîte sans couvercle
      const kk = this.randInt(2, 6); const L = 6 * kk; const xs = kk; const V = 16 * kk ** 3;
      const askX = Math.random() < 0.5;
      const V3 = (x) => x * (L - 2 * x) ** 2;
      return this._xa([String(askX ? xs : V), this._VAL], T, 4, askX ? 'Boîte de volume maximal : dimension' : 'Boîte de volume maximal : volume',
        'Optimiser un volume à l\'aide de la dérivée',
        `Dans une plaque carrée de carton de $${L}$ cm de côté, on découpe aux quatre coins des carrés de côté $x$ cm, avec $0 < x < ${L / 2}$, puis on relève les bords pour former une boîte sans couvercle. Son volume est $V(x) = x(${L} - 2x)^2 = ${px([4, -4 * L, L * L, 0])}$ (en cm³). On admet que $V'(x) = (${L} - 2x)(${L} - 6x)$. ${askX ? 'Pour quelle valeur de $x$ (en cm) le volume est-il maximal ?' : 'Quel est le volume maximal de la boîte, en cm³ ?'}`,
        `$${askX ? xs : V}$`,
        askX ? [`$${L / 2}$`, `$${2 * kk}$`, `$${V}$`, `$${kk + 1}$`] : [`$${V3(xs + 1)}$`, `$${V3(2 * kk)}$`, `$${xs}$`, `$${L * L * L / 4}$`],
        askX ? 'On étudie le signe de $V\'(x)$ sur l\'intervalle d\'étude : la valeur cherchée est celle où $V\'$ passe du signe $+$ au signe $-$.' : 'On dresse le tableau de variations de $V$ grâce au signe de $V\'(x)$, puis on calcule l\'image par $V$ de la valeur où le maximum est atteint.',
        askX ? `Sur $]0 ; ${L / 2}[$, le facteur $${L} - 2x$ est strictement positif : le signe de $V'(x)$ est donc celui de $${L} - 6x$. Cherche où ce facteur change de signe.`
          : `Sur $]0 ; ${L / 2}[$, le facteur $${L} - 2x$ est strictement positif ; $${L} - 6x$ s'annule en $x = ${xs}$.`,
        `Sur $]0 ; ${L / 2}[$, $${L} - 2x > 0$, donc $V'(x)$ a le signe de $${L} - 6x$ : positif pour $x < ${xs}$, négatif pour $x > ${xs}$. $V$ est croissante puis décroissante : le volume est maximal pour $x = ${xs}$ cm et vaut $V(${xs}) = ${xs} \\times ${L - 2 * xs}^2 = ${V}$ cm³.`
      );
    }
    // tangente parallèle à une droite donnée
    let cs; let xs; let m; let q;
    do {
      cs = [this.randNonZero(-3, 3), this.randInt(-6, 6), this.randInt(-6, 6)];
      xs = this.randNonZero(-3, 3);
      m = 2 * cs[0] * xs + cs[1]; q = this.randInt(-5, 5);
    } while (m === 0);
    const fx = this._1T5_ev(cs, xs); const p = fx - m * xs;
    if (p === q) return this.gen_1T5(4);
    const eq = (u, w) => `$y = ${this.poly([[u, 'x'], [w, '']])}$`;
    return this._xa([this._xeq(m, p), this._XDROITE, null, 'equationDroite'], T, 4, 'Tangente parallèle à une droite',
      'Utiliser le coefficient directeur d\'une tangente',
      `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${px(cs)}$ et $D$ la droite d'équation $y = ${this.poly([[m, 'x'], [q, '']])}$. La courbe de $f$ admet une tangente parallèle à $D$. Déterminer l'équation réduite de cette tangente.`,
      eq(m, p),
      [eq(m, q), eq(m, fx), eq(xs, fx), eq(m, -p), eq(-m, p), eq(m, p + 1), eq(m + 1, p)],
      'Deux droites sont parallèles lorsqu\'elles ont le même coefficient directeur : on cherche $a$ tel que $f\'(a)$ soit égal au coefficient directeur de $D$.',
      `$f'(x) = ${px(this._1T5_der(cs))}$ ; résous $f'(a) = ${m}$.`,
      `$f'(x) = ${px(this._1T5_der(cs))}$. $f'(a) = ${m} \\iff ${this._1T5_px([2 * cs[0], cs[1]], 'a')} = ${m} \\iff ${this._1T5_px([2 * cs[0], 0], 'a')} = ${m - cs[1]} \\iff a = ${xs}$. Puis $f(${xs}) = ${fx}$, d'où $y = ${this._1T5_tanRaw(m, xs, fx)}$, soit ${eq(m, p)}.`
    );
  },

  // ---- 1T6 : Statistiques à deux variables ----
  /** Nuages : x, y (libellés de colonnes), pente a et ordonnée à l'origine b plausibles, valeurs possibles de x, décimales de y, bruit */
  _1T6_NUA: [
    { x: 'Température extérieure moyenne (en °C)', y: 'Consommation de chauffage (en kWh par jour)', a: [-2.5, -2, -3], b: [55, 60, 65], xs: [-2, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12], d: 1, n: 2, gx: 'la température', gy: 'la consommation', ux: '°C', uy: 'kWh' },
    { x: 'Distance domicile-lycée (en km)', y: 'Durée du trajet (en min)', a: [2, 2.5, 3], b: [4, 5, 6], xs: [1, 2, 3, 4, 5, 6, 8, 10, 12, 15], d: 0, n: 3, gx: 'la distance', gy: 'la durée', ux: 'km', uy: 'min' },
    { x: 'Surface d\'un logement (en m²)', y: 'Loyer mensuel (en euros)', a: [11, 12, 14], b: [120, 150, 180], xs: [20, 25, 30, 35, 40, 45, 50, 60, 70, 80], d: 0, n: 30, gx: 'la surface', gy: 'le loyer', ux: 'm²', uy: 'euros' },
    { x: 'Ensoleillement quotidien (en h)', y: 'Production d\'un panneau solaire (en kWh)', a: [0.3, 0.4, 0.5], b: [0.2, 0.5], xs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], d: 1, n: 0.3, gx: 'l\'ensoleillement', gy: 'la production', ux: 'h', uy: 'kWh' },
    { x: 'Masse d\'un colis (en kg)', y: 'Tarif d\'envoi (en euros)', a: [1.2, 1.5, 2], b: [5, 6, 7], xs: [1, 2, 3, 4, 5, 6, 8, 10], d: 1, n: 0.8, gx: 'la masse', gy: 'le tarif', ux: 'kg', uy: 'euros' }
  ],
  /** Séries chronologiques (x = rang de l'année) */
  _1T6_SER: [
    { s: 'le nombre d\'abonnés (en milliers) d\'un service d\'autopartage', g: 'le nombre d\'abonnés', u: 'milliers d\'abonnés', a: [1.5, 2, 2.5, 3], b: [12, 15, 20], d: 1, up: true },
    { s: 'le chiffre d\'affaires annuel (en milliers d\'euros) d\'une boulangerie', g: 'le chiffre d\'affaires', u: 'milliers d\'euros', a: [6, 8, 10, 12], b: [250, 280, 300], d: 0, up: true },
    { s: 'la consommation d\'énergie (en MWh) d\'un gymnase en cours de rénovation', g: 'la consommation', u: 'MWh', a: [-4, -5, -6], b: [120, 140, 150], d: 0, up: false },
    { s: 'le nombre de bornes de recharge (en centaines) d\'une agglomération', g: 'le nombre de bornes', u: 'centaines de bornes', a: [0.8, 1.2, 1.5], b: [2, 3, 4], d: 1, up: true },
    { s: 'la quantité de déchets non triés (en kg par habitant) d\'une commune', g: 'la quantité de déchets non triés', u: 'kg par habitant', a: [-6, -7.5, -8], b: [260, 280, 300], d: 1, up: false }
  ],
  /** Valeurs y = a x + b + bruit, arrondies à d décimales */
  _1T6_ys(xs, a, b, d, noise) {
    const f = 10 ** d;
    return xs.map((x) => Math.round((a * x + b + (Math.random() * 2 - 1) * noise) * f) / f);
  },
  _1T6_tab(hx, hy, xs, ys) {
    const D = (v) => `$${this.dec(v, 4)}$`;
    return this._xtab([hx, ...xs.map(D)], [[hy, ...ys.map(D)]]);
  },
  /** Moyenne exacte à 1e-6 */
  _1T6_mean(v) { return this._r(v.reduce((s, x) => s + x, 0) / v.length); },
  /** Nuage de n points tiré d'un contexte, x distincts triés ; moyennes à au plus 2 décimales */
  _1T6_cloud(C, n) {
    for (let k = 0; k < 300; k++) {
      const xs = this.pickDistinct(C.xs, n).sort((u, v) => u - v);
      const ys = this._1T6_ys(xs, this.randChoice(C.a), this.randChoice(C.b), C.d, C.n);
      const xm = this._1T6_mean(xs); const ym = this._1T6_mean(ys);
      if (Math.abs(xm * 100 - Math.round(xm * 100)) < 1e-6 && Math.abs(ym * 100 - Math.round(ym * 100)) < 1e-6 && ys.every((y) => y > 0)) return { xs, ys, xm, ym };
    }
    return null;
  },
  _1T6_eq(a, b) { return `y = ${this._1T5_px([a, b])}`; },

  gen_1T6(tier) {
    const T = '1T6';
    const D = (x) => this.dec(x, 4);
    const fam = this.randInt(0, 2);

    if (tier === 1) {
      if (fam === 0) {
        // point moyen
        const C = this.randChoice(this._1T6_NUA);
        const n = this.randChoice([4, 5]);
        const cl = this._1T6_cloud(C, n);
        if (!cl) return this.gen_1T6(1);
        const { xs, ys, xm, ym } = cl;
        const med = (v) => (n === 5 ? v[2] : this._r((v[1] + v[2]) / 2));
        const ysort = ys.slice().sort((u, v) => u - v);
        return this._xa([`(${this.decText(xm)};${this.decText(ym)})`, 'Saisir les coordonnées sous la forme (x ; y), par exemple (4;12,5).'], T, 1, 'Point moyen d\'un nuage',
          'Calculer les coordonnées du point moyen',
          `Le tableau suivant donne, pour $${n}$ relevés, les valeurs de deux variables.${this._1T6_tab(C.x, C.y, xs, ys)}Déterminer les coordonnées du point moyen $G$ du nuage de points.`,
          `$G(${D(xm)} ; ${D(ym)})$`,
          [`$G(${D(ym)} ; ${D(xm)})$`, `$G(${D(med(xs))} ; ${D(med(ysort))})$`, `$G(${D(xm)} ; ${D(this._r(ym * n))})$`, `$G(${D(this._r(xm + 1))} ; ${D(ym)})$`],
          'Le point moyen $G(\\bar{x} ; \\bar{y})$ a pour coordonnées la moyenne des $x_i$ et la moyenne des $y_i$.',
          `$\\bar{x} = \\frac{${xs.map(D).join(' + ')}}{${n}}$.`,
          `$\\bar{x} = \\frac{${xs.map(D).join(' + ')}}{${n}} = ${D(xm)}$ et $\\bar{y} = \\frac{${ys.map(D).join(' + ')}}{${n}} = ${D(ym)}$. Donc $G(${D(xm)} ; ${D(ym)})$.`
        );
      }
      const C = this.randChoice(this._1T6_NUA);
      const a = this.randChoice(C.a); const b = this.randChoice(C.b);
      if (fam === 1) {
        // interpolation avec une droite donnée
        const lo = Math.min(...C.xs); const hi = Math.max(...C.xs);
        let x0;
        do { x0 = this.randChoice(C.xs) + this.randChoice([-1, 1]) * (C.xs[1] - C.xs[0] > 2 ? 2 : 0.5); } while (x0 <= lo || x0 >= hi);
        const y0 = this._r(a * x0 + b);
        return this._xa([this.decText(y0), this._VAL], T, 1, 'Estimation par interpolation',
          'Utiliser un ajustement affine pour estimer une valeur',
          `Pour des relevés où $x$ désigne ${C.gx} (en ${C.ux}) et $y$ ${C.gy} (en ${C.uy}), avec $x$ compris entre $${D(lo)}$ et $${D(hi)}$, un tableur fournit la droite d'ajustement d'équation $${this._1T6_eq(a, b)}$. Estimer ${C.gy} pour $x = ${D(x0)}$.`,
          `$${D(y0)}$`,
          [`$${D(this._r(a * x0))}$`, `$${D(this._r((x0 - b) / a))}$`, `$${D(this._r(b * x0 + a))}$`, `$${D(this._r(a + b))}$`],
          'Pour estimer $y$ à partir d\'une valeur de $x$, on remplace $x$ par cette valeur dans l\'équation de la droite d\'ajustement.',
          `Calcule $${D(a)} \\times ${this.paren(D(x0))} ${b < 0 ? '-' : '+'} ${D(Math.abs(b))}$.`,
          `$y = ${D(a)} \\times ${this.paren(D(x0))} ${b < 0 ? '-' : '+'} ${D(Math.abs(b))} = ${D(y0)}$. Comme $${D(x0)}$ est compris entre $${D(lo)}$ et $${D(hi)}$, il s'agit d'une interpolation : l'estimation est raisonnable, environ $${D(y0)}$ ${C.uy}.`
        );
      }
      // interprétation du coefficient directeur
      const k = this.randChoice([1, 2, 5, 10]);
      const v = this._r(k * a);
      return this._xa([this.decText(v), 'Saisir le nombre, précédé du signe « - » pour une baisse (virgule décimale si besoin).'], T, 1, 'Interpréter le coefficient directeur',
        'Interpréter le coefficient directeur d\'un ajustement affine',
        `Pour des relevés où $x$ désigne ${C.gx} (en ${C.ux}) et $y$ ${C.gy} (en ${C.uy}), on a obtenu la droite d'ajustement d'équation $${this._1T6_eq(a, b)}$. D'après ce modèle, de combien varie ${C.gy} lorsque ${C.gx} augmente de $${k}$ ${C.ux} ?`,
        `$${D(v)}$`,
        [`$${D(this._r(-v))}$`, `$${D(this._r(a * k + b))}$`, `$${D(b)}$`, `$${D(this._r(k * b))}$`].filter((o) => o !== `$${D(v)}$`),
        'Le long d\'une droite $y = ax + b$, quand $x$ augmente de $1$, $y$ varie de $a$ (le coefficient directeur) ; l\'ordonnée à l\'origine $b$ n\'intervient pas.',
        `Quand $x$ augmente de $1$, $y$ varie de $${D(a)}$.`,
        `Quand $x$ augmente de $${k}$, $y$ varie de $${k} \\times ${this.paren(D(a))} = ${D(v)}$ : ${C.gy} ${v > 0 ? 'augmente' : 'diminue'} d'environ $${D(Math.abs(v))}$ ${C.uy}.`.replace(/\$1 \\times \(?([^$]*?)\)? = /, '$')
      );
    }

    const C = this.randChoice(this._1T6_SER);
    const Y0 = this.randChoice([2016, 2017, 2018, 2019]);
    const a = this.randChoice(C.a); const b = this.randChoice(C.b);
    const E = this._1T6_eq(a, b);
    const est = (x) => this._r(a * x + b);

    if (tier === 2) {
      if (fam === 0) {
        // extrapolation à une année
        const yr = Y0 + this.randInt(8, 12);
        const x = yr - Y0 + 1;
        return this._xa([this.decText(est(x)), this._VAL], T, 2, 'Extrapolation',
          'Utiliser un ajustement affine pour une prévision',
          `On étudie ${C.s} à partir de l'année ${Y0}. On note $x$ le rang de l'année ($x = 1$ pour ${Y0}, $x = 2$ pour ${Y0 + 1}, etc.) et $y$ ${C.g}. Un tableur donne la droite d'ajustement d'équation $${E}$. Estimer ${C.g} en ${yr}.`,
          `$${D(est(x))}$`,
          [`$${D(est(x - 1))}$`, `$${D(est(x + 1))}$`, `$${D(this._r(a * (yr - Y0) * 10 + b))}$`, `$${D(this._r(a * x))}$`],
          'On détermine d\'abord le rang de l\'année demandée, puis on le remplace dans l\'équation de la droite.',
          `L'année ${yr} a pour rang $x = ${yr} - ${Y0} + 1$.`,
          `L'année ${yr} a pour rang $x = ${yr} - ${Y0} + 1 = ${x}$. $y = ${D(a)} \\times ${x} ${b < 0 ? '-' : '+'} ${D(Math.abs(b))} = ${D(est(x))}$, soit environ $${D(est(x))}$ ${C.u}. Il s'agit d'une extrapolation : elle suppose que la tendance se maintient jusqu'en ${yr}.`
        );
      }
      if (fam === 1) {
        // écart entre observation et estimation
        const x = this.randInt(2, 6);
        const f = 10 ** C.d;
        let obs;
        do { obs = Math.round((est(x) + (Math.random() * 2 - 1) * Math.abs(a) * 1.5) * f) / f; } while (obs === est(x));
        const e = this._r(obs - est(x));
        return this._xa([this.decText(e), 'Saisir l\'écart (valeur observée moins valeur estimée), précédé du signe « - » s\'il est négatif.'], T, 2, 'Valeur observée et valeur estimée',
          'Comparer une valeur observée à une valeur estimée',
          `On étudie ${C.s}. On note $x$ le rang de l'année ($x = 1$ pour ${Y0}) et $y$ ${C.g}. La droite d'ajustement a pour équation $${E}$. En ${Y0 + x - 1}, la valeur observée était $${D(obs)}$. Calculer l'écart entre la valeur observée et la valeur estimée par l'ajustement (observée moins estimée).`,
          `$${D(e)}$`,
          [`$${D(this._r(-e))}$`, `$${D(est(x))}$`, `$${D(this._r(obs - est(x + 1)))}$`, `$${D(this._r(obs - b))}$`].filter((o) => o !== `$${D(e)}$`),
          'On calcule la valeur estimée en remplaçant $x$ par le rang de l\'année, puis on la soustrait à la valeur observée.',
          `L'année ${Y0 + x - 1} a pour rang $x = ${x}$.`,
          `Rang de ${Y0 + x - 1} : $x = ${x}$. Valeur estimée : $${D(a)} \\times ${x} ${b < 0 ? '-' : '+'} ${D(Math.abs(b))} = ${D(est(x))}$. Écart : $${D(obs)} - ${this.paren(D(est(x)))} = ${D(e)}$ : la valeur observée est ${e > 0 ? 'au-dessus' : 'en dessous'} de l'estimation.`
        );
      }
      // ordonnée à l'origine connaissant la pente et G
      const xm = this.randChoice([3, 3.5, 4, 4.5, 5]);
      const ym = est(xm);
      return this._xa([this.decText(b), this._VAL], T, 2, 'Droite passant par le point moyen',
        'Déterminer une droite d\'ajustement passant par le point moyen',
        `Pour une série où $x$ est le rang de l'année et $y$ ${C.g}, le point moyen est $G(${D(xm)} ; ${D(ym)})$. On ajuste le nuage par la droite de coefficient directeur $${D(a)}$ passant par $G$. Déterminer son ordonnée à l'origine $b$.`,
        `$${D(b)}$`,
        [`$${D(this._r(ym + a * xm))}$`, `$${D(this._r(ym - a))}$`, `$${D(Math.round(ym / xm * 100) / 100)}$`, `$${D(this._r(xm - a * ym))}$`],
        'La droite $y = ax + b$ passe par $G(\\bar{x} ; \\bar{y})$ : on a donc $\\bar{y} = a\\bar{x} + b$, d\'où $b = \\bar{y} - a\\bar{x}$.',
        `Écris $${D(ym)} = ${D(a)} \\times ${D(xm)} + b$.`,
        `$${D(ym)} = ${D(a)} \\times ${D(xm)} + b$, donc $b = ${D(ym)} - ${this.paren(D(this._r(a * xm)))} = ${D(b)}$. La droite a pour équation $${E}$.`
      );
    }

    if (tier === 3) {
      if (fam === 0) {
        // droite passant par G et par un point du nuage
        let xs; let ys; let xm; let ym; let m; let p; let i;
        for (let k = 0; k < 400; k++) {
          xs = [1, 2, 3, 4, 5]; ys = this._1T6_ys(xs, a, b, 0, Math.max(1, Math.abs(a)));
          xm = 3; ym = this._1T6_mean(ys); i = this.randChoice([0, 4]);
          m = this._r((ys[i] - ym) / (xs[i] - xm)); p = this._r(ym - m * xm);
          if (Math.abs(m * 10 - Math.round(m * 10)) < 1e-6 && Math.abs(ym * 10 - Math.round(ym * 10)) < 1e-6 && m !== 0) break;
          m = null;
        }
        if (m === null) return this.gen_1T6(3);
        const eq = `$y = ${this._1T5_px([m, p])}$`;
        const tab = this._1T6_tab('Rang $x$', '$y$', xs, ys);
        return this._xa([`y=${this._1T5_px([m, p]).replace(/\{,\}/g, ',').replace(/\s+/g, '')}`, this._XDROITE, null, 'equationDroite'], T, 3, 'Ajustement par une droite passant par G',
          'Déterminer une droite d\'ajustement passant par le point moyen',
          `Le tableau donne ${C.s} sur cinq années, de ${Y0} (rang $1$) à ${Y0 + 4} (rang $5$).${tab}On ajuste le nuage par la droite passant par le point moyen $G$ et par le point $M_${i + 1}(${xs[i]} ; ${D(ys[i])})$. Déterminer l'équation réduite de cette droite.`,
          eq,
          [`$y = ${this._1T5_px([m, ys[i]])}$`, `$y = ${this._1T5_px([this._r(-m), p])}$`, `$y = ${this._1T5_px([m, this._r(p + m)])}$`, `$y = ${this._1T5_px([this._r(ys[i] / xs[i]), 0])}$`],
          'On calcule le point moyen $G(\\bar{x} ; \\bar{y})$, puis le coefficient directeur $m = \\frac{y_M - y_G}{x_M - x_G}$, et enfin $p$ en écrivant que $G$ est sur la droite.',
          `$\\bar{x} = 3$ ; calcule $\\bar{y}$ (moyenne des cinq valeurs de $y$).`,
          `$\\bar{x} = 3$ et $\\bar{y} = \\frac{${ys.map(D).join(' + ')}}{5} = ${D(ym)}$. Coefficient directeur : $m = \\frac{${D(ys[i])} - ${D(ym)}}{${xs[i]} - 3} = ${D(m)}$. Puis $p = \\bar{y} - m\\bar{x} = ${D(ym)} - ${this.paren(D(m))} \\times 3 = ${D(p)}$. D'où ${eq}.`
        );
      }
      if (fam === 1) {
        // seuil
        const x1 = this.randInt(9, 14);
        const S = C.up ? Math.floor(a * x1 + b - this.randInt(0, Math.floor(Math.abs(a)) - 0.5 > 0 ? 1 : 0) * 0) : Math.ceil(a * x1 + b);
        // premier rang x tel que a x + b dépasse S (hausse) ou passe sous S (baisse)
        let xr = 1;
        while (C.up ? !(est(xr) > S) : !(est(xr) < S)) xr++;
        const yr = Y0 + xr - 1;
        const bound = this._r((S - b) / a);
        return this._xa([String(yr), 'Saisir l\'année.'], T, 3, 'Année de franchissement d\'un seuil',
          'Exploiter un ajustement affine pour atteindre un seuil',
          `On étudie ${C.s}. On note $x$ le rang de l'année ($x = 1$ pour ${Y0}, $x = 2$ pour ${Y0 + 1}, etc.) et $y$ ${C.g}. Un tableur donne la droite d'ajustement d'équation $${E}$. Selon ce modèle, quelle est la première année où ${C.g} ${C.up ? 'dépasse' : 'passe sous'} $${D(S)}$ ${C.u} ?`,
          `${yr}`,
          [`${yr - 1}`, `${yr + 1}`, `${xr}`, `${Y0 + xr}`].filter((o) => o !== String(yr)),
          'On résout l\'inéquation correspondante en $x$, on retient le plus petit rang entier qui convient, puis on le convertit en année.',
          `Résous $${this._1T5_px([a, b])} ${C.up ? '>' : '<'} ${D(S)}$.`,
          `$${this._1T5_px([a, b])} ${C.up ? '>' : '<'} ${D(S)} \\iff ${D(a)}x ${C.up ? '>' : '<'} ${D(this._r(S - b))} \\iff x ${C.up ? '>' : '>'} ${D(bound)}$${C.up ? '' : ' (on divise par un nombre négatif : le sens de l\'inégalité change)'}. Le plus petit rang entier est $x = ${xr}$, ce qui correspond à l'année $${Y0} + ${xr} - 1 = ${yr}$.`
            .replace(/\$(\d{4}) \+ (\d+) - 1 = (\d{4})\$/, '$1 + $2 - 1 = $3').replace(/l'année (\d{4}) \+ (\d+) - 1 = (\d{4})/, 'l\'année $3 ($1 + $2 - 1)')
        );
      }
      // valeur manquante, G connu
      const xs = [1, 2, 3, 4, 5];
      const f = 10 ** C.d;
      let ys; let ym;
      do { ys = this._1T6_ys(xs, a, b, C.d, Math.max(1, Math.abs(a))); ym = this._1T6_mean(ys); } while (Math.abs(ym * 100 - Math.round(ym * 100)) > 1e-6);
      const k = this.randInt(0, 4);
      const other = this._r(ys.reduce((s, y) => s + y, 0) - ys[k]);
      const tab = this._xtab(['Rang $x$', ...xs.map((x) => `$${x}$`)], [['$y$', ...ys.map((y, j) => (j === k ? '$m$' : `$${D(y)}$`))]]);
      void f;
      return this._xa([this.decText(ys[k]), this._VAL], T, 3, 'Donnée manquante et point moyen',
        'Utiliser le point moyen d\'un nuage',
        `Le tableau donne ${C.s} sur cinq années (rang $1$ pour ${Y0}) ; une valeur $m$ a été perdue.${tab}On sait que le point moyen du nuage est $G(3 ; ${D(ym)})$. Déterminer $m$.`,
        `$${D(ys[k])}$`,
        [`$${D(this._r(ym * 4 - other))}$`, `$${D(ym)}$`, `$${D(this._r(5 * ym))}$`, `$${D(this._r(other / 4))}$`],
        'L\'ordonnée du point moyen est la moyenne des $y_i$ : la somme des cinq valeurs vaut donc $5\\bar{y}$.',
        `La somme des cinq valeurs est $5 \\times ${D(ym)}$.`,
        `Somme des cinq valeurs : $5 \\times ${D(ym)} = ${D(this._r(5 * ym))}$. Somme des quatre valeurs connues : $${D(other)}$. Donc $m = ${D(this._r(5 * ym))} - ${D(other)} = ${D(ys[k])}$.`
      );
    }

    // Palier 4
    if (fam === 0) {
      // point moyen, pente du tableur, ordonnée à l'origine puis prévision
      const xs = [1, 2, 3, 4, 5];
      let ys; let ym;
      do { ys = this._1T6_ys(xs, a, b, C.d, Math.max(1, Math.abs(a))); ym = this._1T6_mean(ys); } while (Math.abs(ym * 100 - Math.round(ym * 100)) > 1e-6);
      const bb = this._r(ym - 3 * a);
      const yr = Y0 + this.randInt(7, 10); const x = yr - Y0 + 1;
      const pr = this._r(a * x + bb);
      return this._xa([this.decText(pr), this._VAL], T, 4, 'De la série à la prévision',
        'Construire un ajustement affine et faire une prévision',
        `Le tableau donne ${C.s} de ${Y0} (rang $1$) à ${Y0 + 4} (rang $5$).${this._1T6_tab('Rang $x$', '$y$', xs, ys)}On ajuste le nuage par la droite de coefficient directeur $${D(a)}$ (fourni par un tableur) passant par le point moyen $G$. Selon ce modèle, quelle valeur peut-on prévoir pour ${yr} ?`,
        `$${D(pr)}$`,
        [`$${D(this._r(a * x + b))}$`, `$${D(this._r(a * (x - 1) + bb))}$`, `$${D(this._r(a * x + ym))}$`, `$${D(this._r(ym))}$`],
        'Trois étapes : calcul de $G(\\bar{x} ; \\bar{y})$, puis $b = \\bar{y} - a\\bar{x}$, puis remplacement de $x$ par le rang de l\'année visée.',
        `$\\bar{x} = 3$ et $\\bar{y} = \\frac{${ys.map(D).join(' + ')}}{5}$.`,
        `$\\bar{x} = 3$, $\\bar{y} = ${D(ym)}$. Ordonnée à l'origine : $b = ${D(ym)} - ${this.paren(D(a))} \\times 3 = ${D(bb)}$, d'où la droite $y = ${this._1T5_px([a, bb])}$. L'année ${yr} a pour rang $${x}$ : $y = ${D(a)} \\times ${x}${bb ? ` ${bb < 0 ? '-' : '+'} ${D(Math.abs(bb))}` : ''} = ${D(pr)}$. Prévision : environ $${D(pr)}$ ${C.u}, sous réserve que la tendance se maintienne.`
      );
    }
    if (fam === 1) {
      // deux ajustements : année de croisement
      const P = this.randChoice([
        { s: 'les ventes annuelles de vélos électriques et de vélos classiques (en milliers) d\'une enseigne', A: 'vélos électriques vendus', B: 'vélos classiques vendus', a1: [3, 4, 5], b1: [10, 15, 20], a2: [-2, -1.5, -1], b2: [60, 70, 80], u: 'milliers' },
        { s: 'le nombre d\'abonnements à la fibre et à l\'ADSL (en milliers) d\'un opérateur régional', A: 'abonnements à la fibre', B: 'abonnements à l\'ADSL', a1: [12, 15, 18], b1: [20, 30, 40], a2: [-10, -8, -6], b2: [200, 220, 250], u: 'milliers' },
        { s: 'les entrées annuelles (en milliers) d\'un cinéma en ligne et d\'un cinéma de centre-ville', A: 'entrées du cinéma en ligne', B: 'entrées du cinéma de centre-ville', a1: [6, 8, 9], b1: [5, 10, 12], a2: [-3, -2.5, -2], b2: [80, 90, 95], u: 'milliers' }
      ]);
      const a1 = this.randChoice(P.a1); const b1 = this.randChoice(P.b1); const a2 = this.randChoice(P.a2); const b2 = this.randChoice(P.b2);
      const xc = this._r((b2 - b1) / (a1 - a2));
      const xr = Math.floor(xc) + 1;
      const yr = Y0 + xr - 1;
      return this._xa([String(yr), 'Saisir l\'année.'], T, 4, 'Comparer deux ajustements',
        'Comparer deux tendances modélisées par des ajustements affines',
        `On étudie ${P.s}. Avec $x$ le rang de l'année ($x = 1$ pour ${Y0}), les ajustements obtenus sont $y = ${this._1T5_px([a1, b1])}$ pour les ${P.A} et $y = ${this._1T5_px([a2, b2])}$ pour les ${P.B}. Selon ces modèles, quelle est la première année où le nombre d'${P.A} dépasse celui d'${P.B} ?`,
        `${yr}`,
        [`${yr - 1}`, `${yr + 1}`, `${xr}`, `${Y0 + Math.floor(xc)}` === `${yr}` ? `${yr + 2}` : `${Y0 + Math.floor(xc) - 1}`].filter((o) => o !== String(yr)),
        'On résout l\'inéquation « premier ajustement > second ajustement », on retient le plus petit rang entier solution, puis on le convertit en année.',
        `Résous $${this._1T5_px([a1, b1])} > ${this._1T5_px([a2, b2])}$.`,
        `$${this._1T5_px([a1, b1])} > ${this._1T5_px([a2, b2])} \\iff ${D(this._r(a1 - a2))}x > ${D(this._r(b2 - b1))} \\iff x > ${this.frac(Math.round((b2 - b1) * 10), Math.round((a1 - a2) * 10))}$, et $${this.frac(Math.round((b2 - b1) * 10), Math.round((a1 - a2) * 10))} \\approx ${D(Math.round(xc * 100) / 100)}$. Le plus petit rang entier est $x = ${xr}$, soit l'année ${yr} (${Y0} + ${xr} - 1). Ce résultat repose sur une extrapolation : il est d'autant moins fiable que l'année est lointaine.`
      );
    }
    // droite passant par G et le premier point, puis prévision
    let xs; let ys; let ym; let m; let p;
    for (let k = 0; k < 400; k++) {
      xs = [1, 2, 3, 4, 5]; ys = this._1T6_ys(xs, a, b, 0, Math.max(1, Math.abs(a)));
      ym = this._1T6_mean(ys); m = this._r((ym - ys[0]) / 2); p = this._r(ym - 3 * m);
      if (Math.abs(m * 10 - Math.round(m * 10)) < 1e-6 && Math.abs(ym * 10 - Math.round(ym * 10)) < 1e-6 && m !== 0) break;
      m = null;
    }
    if (m === null) return this.gen_1T6(4);
    const yr = Y0 + this.randInt(7, 10); const x = yr - Y0 + 1;
    const pr = this._r(m * x + p);
    return this._xa([this.decText(pr), this._VAL], T, 4, 'Ajustement au jugé et prévision',
      'Construire une droite d\'ajustement et l\'utiliser',
      `Le tableau donne ${C.s} de ${Y0} (rang $1$) à ${Y0 + 4} (rang $5$).${this._1T6_tab('Rang $x$', '$y$', xs, ys)}On trace la droite passant par le premier point $M_1(1 ; ${D(ys[0])})$ et par le point moyen $G$ du nuage. Selon ce modèle, quelle valeur peut-on prévoir pour ${yr} ?`,
      `$${D(pr)}$`,
      [`$${D(this._r(m * (x - 1) + p))}$`, `$${D(this._r(m * x + ys[0]))}$`, `$${D(this._r(a * x + b))}$`, `$${D(this._r(m * x))}$`],
      'Calcule $G$, puis le coefficient directeur de $(M_1G)$, puis l\'ordonnée à l\'origine ; remplace enfin $x$ par le rang de l\'année visée.',
      `$G(3 ; \\bar{y})$ avec $\\bar{y} = \\frac{${ys.map(D).join(' + ')}}{5}$.`,
      `$\\bar{y} = ${D(ym)}$, donc $G(3 ; ${D(ym)})$. Coefficient directeur : $m = \\frac{${D(ym)} - ${D(ys[0])}}{3 - 1} = ${D(m)}$ ; ordonnée à l'origine : $p = ${D(ym)} - ${this.paren(D(m))} \\times 3 = ${D(p)}$. La droite a pour équation $y = ${this._1T5_px([m, p])}$. Rang de ${yr} : $${x}$, donc $y = ${D(m)} \\times ${x}${p ? ` ${p < 0 ? '-' : '+'} ${D(Math.abs(p))}` : ''} = ${D(pr)}$.`
    );
  },

  // ---- 1T7 : Probabilités et variables aléatoires ----
  /** Arbres : A / non A au premier niveau, B / non B au second */
  _1T7_CTX: [
    { intro: 'Une usine fabrique des pièces sur deux machines. On prélève une pièce au hasard.', A: 'la pièce provient de la machine 1', nA: 'la pièce provient de la machine 2', B: 'la pièce est défectueuse', pA: [0.3, 0.4, 0.45, 0.55, 0.6, 0.7], q: [0.02, 0.03, 0.04, 0.05, 0.06] },
    { intro: 'Dans un lycée, on choisit un élève de Première au hasard.', A: 'l\'élève est demi-pensionnaire', nA: 'l\'élève est externe', B: 'l\'élève vient en transport scolaire', pA: [0.6, 0.65, 0.7, 0.75, 0.8], q: [0.2, 0.25, 0.3, 0.4, 0.45, 0.5] },
    { intro: 'Un magasin de sport interroge ses clients au hasard à la sortie.', A: 'le client possède la carte de fidélité', nA: 'le client ne possède pas la carte', B: 'le client a effectué un achat', pA: [0.25, 0.3, 0.35, 0.4], q: [0.5, 0.6, 0.7, 0.75, 0.8, 0.9] },
    { intro: 'Une plateforme de location de vélos étudie ses trajets. On choisit un trajet au hasard.', A: 'le trajet est effectué avec un vélo électrique', nA: 'le trajet est effectué avec un vélo classique', B: 'le trajet dure plus de 20 minutes', pA: [0.35, 0.4, 0.5, 0.6], q: [0.1, 0.15, 0.2, 0.3, 0.35] }
  ],
  _1T7_JEUX: [
    { s: 'Une association propose un jeu de grattage à un stand de kermesse', g: [[10, 0.05], [5, 0.15], [2, 0.3]] },
    { s: 'Une roue de loterie est partagée en secteurs', g: [[20, 0.05], [8, 0.1], [3, 0.25]] },
    { s: 'Un jeu de fléchettes de fête foraine rapporte selon la zone atteinte', g: [[15, 0.1], [6, 0.2], [1, 0.4]] },
    { s: 'Un jeu en ligne attribue des bons d\'achat', g: [[50, 0.02], [10, 0.1], [4, 0.2]] }
  ],
  _1T7_BER: [
    { s: 'Un joueur de basket réussit un lancer franc', p: [0.6, 0.7, 0.8, 0.9], it: 'lancers francs', cnt: 'lancers francs réussis' },
    { s: 'Une graine de tomate germe', p: [0.7, 0.8, 0.9], it: 'graines semées', cnt: 'graines qui germent' },
    { s: 'Un appel d\'un téléconseiller aboutit à une vente', p: [0.1, 0.2, 0.3, 0.4], it: 'appels', cnt: 'appels conclus par une vente' },
    { s: 'Un composant électronique est défectueux', p: [0.1, 0.2], it: 'composants contrôlés', cnt: 'composants défectueux' },
    { s: 'Un tir au but d\'une joueuse de handball est réussi', p: [0.5, 0.6, 0.7], it: 'tirs', cnt: 'tirs réussis' }
  ],
  /** Loi en tableau Markdown */
  _1T7_loi(xs, ps) {
    const D = (v) => `$${this.dec(v, 4)}$`;
    return this._xtab(['$x_i$', ...xs.map(D)], [['$P(X = x_i)$', ...ps.map((p) => (p === null ? '$p$' : D(p)))]]);
  },

  gen_1T7(tier) {
    const T = '1T7';
    const D = (x) => this.dec(x, 4);
    const fam = this.randInt(0, 2);
    const C = this.randChoice(this._1T7_CTX);
    const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    const ev = `On note $A$ l'évènement « ${C.A} » et $B$ l'évènement « ${C.B} ».`;

    if (tier === 1) {
      if (fam === 0) {
        // P_A(B) à partir de P(A ∩ B) et P(A)
        const pA = this.randChoice([0.2, 0.25, 0.4, 0.5, 0.8]);
        const q = this.randChoice([0.1, 0.15, 0.2, 0.3, 0.35, 0.4, 0.45, 0.6, 0.7, 0.75, 0.9]);
        const pAB = this._r(pA * q);
        return this._xa([this.decText(q), this._VAL], T, 1, 'Probabilité conditionnelle',
          'Calculer une probabilité conditionnelle',
          `${C.intro} ${ev} On sait que $P(A) = ${D(pA)}$ et $P(A \\cap B) = ${D(pAB)}$. Calculer $P_A(B)$.`,
          `$P_A(B) = ${D(q)}$`,
          [`$P_A(B) = ${D(this._r(pA * pAB))}$`, `$P_A(B) = ${D(pAB)}$`, `$P_A(B) = ${D(this._r(pA - pAB))}$`, `$P_A(B) = ${D(this._r(1 - q))}$`],
          'Par définition, $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$ (lorsque $P(A) \\neq 0$).',
          `Divise $${D(pAB)}$ par $${D(pA)}$.`,
          `$P_A(B) = \\frac{P(A \\cap B)}{P(A)} = \\frac{${D(pAB)}}{${D(pA)}} = ${D(q)}$ : sachant que $A$ est réalisé, la probabilité de $B$ vaut $${D(q)}$.`
        );
      }
      if (fam === 1) {
        // P(A ∩ B) sur un arbre
        const pA = this.randChoice(C.pA); const q = this.randChoice(C.q);
        const pAB = this._r(pA * q);
        return this._xa([this.decText(pAB), this._VAL], T, 1, 'Probabilité d\'une intersection',
          'Utiliser un arbre pondéré',
          `${C.intro} ${ev} On sait que $P(A) = ${D(pA)}$ et que $P_A(B) = ${D(q)}$. Calculer la probabilité $P(A \\cap B)$ que les deux évènements soient réalisés.`,
          `$P(A \\cap B) = ${D(pAB)}$`,
          [`$P(A \\cap B) = ${D(this._r(pA + q))}$`, `$P(A \\cap B) = ${D(this._r(q / pA))}$`, `$P(A \\cap B) = ${D(this._r((1 - pA) * q))}$`, `$P(A \\cap B) = ${D(q)}$`].filter((o) => !/= 1$|= [1-9]\d*\{,\}/.test(o.slice(0, -1)) || true),
          'Sur un arbre pondéré, la probabilité d\'un chemin est le produit des probabilités portées par ses branches : $P(A \\cap B) = P(A) \\times P_A(B)$.',
          `Le chemin passe par la branche $A$ puis par la branche $B$.`,
          `$P(A \\cap B) = P(A) \\times P_A(B) = ${D(pA)} \\times ${D(q)} = ${D(pAB)}$.`
        );
      }
      // évènements {X ≤ a} / {X ≥ a}
      const xs = this.randChoice([[0, 1, 2, 3], [-2, 0, 3, 5], [1, 2, 3, 4], [-5, -1, 2, 10], [0, 2, 5, 10]]);
      let ps;
      do { const u = [this.randInt(1, 7), this.randInt(1, 7), this.randInt(1, 7)]; const s = u.reduce((x, y) => x + y, 0); if (s >= 20) continue; ps = [...u, 20 - s].map((v) => v * 5 / 100); } while (!ps || ps[3] <= 0);
      ps = ps.map((v) => this._r(v));
      const k = this.randInt(1, 2); const le = Math.random() < 0.5;
      const pr = this._r(le ? ps.slice(0, k + 1).reduce((s, v) => s + v, 0) : ps.slice(k).reduce((s, v) => s + v, 0));
      const strictPr = this._r(le ? pr - ps[k] : pr - ps[k]);
      const sym = le ? '\\leqslant' : '\\geqslant';
      return this._xa([this.decText(pr), this._VAL], T, 1, 'Évènement associé à une variable aléatoire',
        'Calculer la probabilité d\'un évènement {X ≤ a} ou {X ≥ a}',
        `Une variable aléatoire $X$ a la loi suivante.${this._1T7_loi(xs, ps)}Calculer $P(X ${sym} ${xs[k]})$.`,
        `$${D(pr)}$`,
        [`$${D(strictPr)}$`, `$${D(ps[k])}$`, `$${D(this._r(1 - pr))}$`, `$${D(this._r(1 - strictPr))}$`].filter((o) => o !== `$${D(pr)}$`),
        `L'évènement $\\{X ${sym} a\\}$ regroupe toutes les valeurs ${le ? 'inférieures' : 'supérieures'} ou égales à $a$ : on additionne leurs probabilités.`,
        `Les valeurs concernées sont ${(le ? xs.slice(0, k + 1) : xs.slice(k)).map((x) => `$${x}$`).join(', ')}.`,
        `$P(X ${sym} ${xs[k]}) = ${(le ? ps.slice(0, k + 1) : ps.slice(k)).map(D).join(' + ')} = ${D(pr)}$ (la valeur $${xs[k]}$ est comprise).`
      );
    }

    if (tier === 2) {
      if (fam === 0) {
        // probabilités totales
        const pA = this.randChoice(C.pA); const q1 = this.randChoice(C.q);
        let q2; do { q2 = this.randChoice(C.q); } while (q2 === q1);
        const pB = this._r(pA * q1 + (1 - pA) * q2);
        return this._xa([this.decText(pB), this._VAL], T, 2, 'Formule des probabilités totales',
          'Calculer une probabilité à l\'aide des probabilités totales',
          `${C.intro} ${ev} On sait que $P(A) = ${D(pA)}$, $P_A(B) = ${D(q1)}$ et $P_{\\overline{A}}(B) = ${D(q2)}$. Calculer $P(B)$.`,
          `$P(B) = ${D(pB)}$`,
          [`$P(B) = ${D(this._r(q1 + q2))}$`, `$P(B) = ${D(this._r(pA * q1))}$`, `$P(B) = ${D(this._r((q1 + q2) / 2))}$`, `$P(B) = ${D(this._r(pA * q2 + (1 - pA) * q1))}$`],
          'Les évènements $A$ et $\\overline{A}$ partagent l\'univers : $P(B) = P(A \\cap B) + P(\\overline{A} \\cap B)$, chaque terme se calculant le long d\'un chemin de l\'arbre.',
          `Commence par $P(\\overline{A}) = 1 - ${D(pA)}$, puis calcule $P(A \\cap B)$ et $P(\\overline{A} \\cap B)$.`,
          `$P(A \\cap B) = ${D(pA)} \\times ${D(q1)} = ${D(this._r(pA * q1))}$ et $P(\\overline{A} \\cap B) = ${D(this._r(1 - pA))} \\times ${D(q2)} = ${D(this._r((1 - pA) * q2))}$. Donc $P(B) = ${D(this._r(pA * q1))} + ${D(this._r((1 - pA) * q2))} = ${D(pB)}$.`
        );
      }
      if (fam === 1) {
        // espérance d'un gain (perte = mise)
        const J = this.randChoice(this._1T7_JEUX);
        const mise = this.randChoice([2, 3, 4, 5]);
        const gs = J.g.map(([g, p]) => [g - mise, p]);
        const pl = this._r(1 - J.g.reduce((s, [, p]) => s + p, 0));
        const xs = [...gs.map(([g]) => g), -mise]; const ps = [...gs.map(([, p]) => p), pl];
        const E = this._r(xs.reduce((s, x, i) => s + x * ps[i], 0));
        const terms = xs.map((x, i) => `${this.paren(x)} \\times ${D(ps[i])}`).join(' + ');
        return this._xa([this.decText(E), 'Saisir l\'espérance en euros, précédée du signe « - » si elle est négative.'], T, 2, 'Espérance d\'un gain',
          'Calculer et interpréter une espérance',
          `${J.s}. La participation coûte $${mise}$ €. On note $X$ le gain algébrique du joueur (lot moins participation), en euros. Sa loi est donnée ci-dessous.${this._1T7_loi(xs, ps.map((p, i) => (i === 3 ? null : p)))}Calculer $p$, puis l'espérance $E(X)$.`,
          `$E(X) = ${D(E)}$`,
          [`$E(X) = ${D(this._r(E + mise))}$`, `$E(X) = ${D(this._r(xs.reduce((s, x) => s + x, 0) / 4))}$`, `$E(X) = ${D(this._r(E - mise))}$`, `$E(X) = ${D(this._r(xs.slice(0, 3).reduce((s, x, i) => s + x * ps[i], 0)))}$`],
          'La somme des probabilités d\'une loi vaut $1$ ; l\'espérance est $E(X) = \\sum x_i \\, P(X = x_i)$.',
          `$p = 1 - (${ps.slice(0, 3).map(D).join(' + ')})$.`,
          `$p = 1 - (${ps.slice(0, 3).map(D).join(' + ')}) = ${D(pl)}$. $E(X) = ${terms} = ${D(E)}$. En moyenne, sur un grand nombre de parties, le joueur ${E < 0 ? `perd environ $${D(-E)}$ € par partie : le jeu est favorable à l'organisateur` : E > 0 ? `gagne environ $${D(E)}$ € par partie` : 'ne gagne ni ne perd : le jeu est équitable'}.`
        );
      }
      // indépendance (QCM)
      const pA = this.randChoice([0.2, 0.25, 0.4, 0.5, 0.6, 0.8]);
      const pB = this.randChoice([0.1, 0.2, 0.3, 0.4, 0.5, 0.6]);
      const indep = Math.random() < 0.5;
      let pAB = this._r(pA * pB);
      if (!indep) pAB = this._r(pA * this.randChoice([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7].filter((v) => v !== pB)));
      const q = this._r(pAB / pA);
      const yes = 'Oui, car $P_A(B) = P(B)$';
      const no = 'Non, car $P_A(B) \\neq P(B)$';
      return this.makeMcq(T, 2, 'Évènements indépendants',
        'Reconnaître deux évènements indépendants',
        `${C.intro} ${ev} On sait que $P(A) = ${D(pA)}$, $P(B) = ${D(pB)}$ et $P(A \\cap B) = ${D(pAB)}$. Les évènements $A$ et $B$ sont-ils indépendants ?`,
        indep ? yes : no,
        [indep ? no : yes, 'Oui, car $P(A \\cap B) \\neq 0$', 'Non, car $P(A) \\neq P(B)$', 'On ne peut pas conclure sans arbre'],
        'Deux évènements sont indépendants lorsque savoir que l\'un est réalisé ne modifie pas la probabilité de l\'autre : on compare la probabilité de $B$ sachant $A$ à la probabilité de $B$.',
        `Calcule $P_A(B) = \\frac{${D(pAB)}}{${D(pA)}}$.`,
        `$P_A(B) = \\frac{${D(pAB)}}{${D(pA)}} = ${D(q)} ${indep ? '=' : '\\neq'} P(B)$ car $P(B) = ${D(pB)}$. ${indep ? 'Les évènements sont indépendants.' : 'Les évènements ne sont pas indépendants.'}`
      );
    }

    if (tier === 3) {
      if (fam === 0) {
        // répétition de 3 épreuves de Bernoulli : exactement k succès
        const B = this.randChoice(this._1T7_BER);
        const p = this.randChoice(B.p); const k = this.randChoice([1, 2]);
        const r = this._r(3 * p ** k * (1 - p) ** (3 - k));
        const one = this._r(p ** k * (1 - p) ** (3 - k));
        return this._xa([this.decText(r), this._VAL], T, 3, 'Répétition d\'épreuves de Bernoulli',
          'Modéliser une répétition d\'épreuves de Bernoulli par un arbre',
          `${B.s} avec la probabilité $${D(p)}$. On considère $3$ ${B.it}, les résultats étant indépendants. Quelle est la probabilité que le nombre ${/^[aeiouéh]/i.test(B.cnt) ? "d'" : "de "}${B.cnt} soit égal à $${k}$ ?`,
          `$${D(r)}$`,
          [`$${D(one)}$`, `$${D(this._r(p ** k))}$`, `$${D(this._r(3 * p ** (3 - k) * (1 - p) ** k))}$`, `$${D(this._r(p * (1 - p)))}$`].filter((o) => o !== `$${D(r)}$`),
          'On construit l\'arbre des $3$ épreuves (succès S, échec E) ; on compte les chemins réalisant l\'évènement et chacun a pour probabilité le produit des probabilités de ses branches.',
          `${k === 2 ? 'Les chemins SSE, SES et ESS' : 'Les chemins SEE, ESE et EES'} conviennent.`,
          `Trois chemins conviennent (${k === 2 ? 'SSE, SES, ESS' : 'SEE, ESE, EES'}), chacun de probabilité $${k === 2 ? `${D(p)}^2 \\times ${D(this._r(1 - p))}` : `${D(p)} \\times ${D(this._r(1 - p))}^2`} = ${D(one)}$. La probabilité cherchée vaut $3 \\times ${D(one)} = ${D(r)}$.`
        );
      }
      if (fam === 1) {
        // P_B(A) (inversion du conditionnement)
        let a; let b; let c; let r;
        for (let k = 0; k < 500; k++) {
          a = Math.round(this.randChoice(C.pA) * 100); b = Math.round(this.randChoice(C.q) * 100); c = Math.round(this.randChoice(C.q) * 100);
          if (b === c) continue;
          r = (a * b) / (a * b + (100 - a) * c);
          if (Math.abs(r * 1000 - Math.round(r * 1000)) < 1e-9) break;
          r = null;
        }
        if (r === null) return this.gen_1T7(3);
        const pAB = this._r(a * b / 1e4); const pB = this._r((a * b + (100 - a) * c) / 1e4);
        return this._xa([this.decText(this._r(r)), this._VAL], T, 3, 'Probabilité conditionnelle « inversée »',
          'Calculer une probabilité conditionnelle à l\'aide d\'un arbre',
          `${C.intro} ${ev} On sait que $P(A) = ${D(a / 100)}$, $P_A(B) = ${D(b / 100)}$ et $P_{\\overline{A}}(B) = ${D(c / 100)}$. Calculer $P_B(A)$, probabilité de l'évènement $A$ sachant que $B$ est réalisé.`,
          `$P_B(A) = ${D(this._r(r))}$`,
          [`$P_B(A) = ${D(b / 100)}$`, `$P_B(A) = ${D(pAB)}$`, `$P_B(A) = ${D(pB)}$`, `$P_B(A) = ${D(this._r(1 - r))}$`],
          'On utilise $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$, où $P(B)$ s\'obtient par la formule des probabilités totales.',
          `$P(A \\cap B) = ${D(a / 100)} \\times ${D(b / 100)} = ${D(pAB)}$.`,
          `$P(A \\cap B) = ${D(a / 100)} \\times ${D(b / 100)} = ${D(pAB)}$ et $P(B) = ${D(pAB)} + ${D(this._r(1 - a / 100))} \\times ${D(c / 100)} = ${D(pB)}$. Donc $P_B(A) = \\frac{${D(pAB)}}{${D(pB)}} = ${D(this._r(r))}$.`
        );
      }
      // mise équitable
      const J = this.randChoice(this._1T7_JEUX);
      const m = this._r(J.g.reduce((s, [g, p]) => s + g * p, 0));
      return this._xa([this.decText(m), 'Saisir la mise en euros (virgule décimale si besoin).'], T, 3, 'Jeu équitable',
        'Utiliser l\'espérance pour rendre un jeu équitable',
        `${J.s} : on gagne $${J.g[0][0]}$ € avec la probabilité $${D(J.g[0][1])}$, $${J.g[1][0]}$ € avec la probabilité $${D(J.g[1][1])}$, $${J.g[2][0]}$ € avec la probabilité $${D(J.g[2][1])}$, et rien sinon. Le joueur paie une mise de $m$ euros. Pour quelle valeur de $m$ le jeu est-il équitable, c'est-à-dire d'espérance de gain nulle ?`,
        `$m = ${D(m)}$`,
        [`$m = ${D(this._r(J.g[0][0] * J.g[0][1]))}$`, `$m = ${D(this._r((J.g[0][0] + J.g[1][0] + J.g[2][0]) / 4))}$`, `$m = ${D(this._r(m * 2))}$`, `$m = ${D(J.g[2][0])}$`],
        'Le gain algébrique est « lot moins mise » : son espérance vaut l\'espérance du lot diminuée de $m$. Le jeu est équitable lorsque cette espérance est nulle.',
        `Calcule l'espérance du lot : $${J.g.map(([g, p]) => `${g} \\times ${D(p)}`).join(' + ')}$.`,
        `Espérance du lot : $${J.g.map(([g, p]) => `${g} \\times ${D(p)}`).join(' + ')} = ${D(m)}$ (les issues sans lot comptent pour $0$). L'espérance du gain vaut $${D(m)} - m$ ; elle est nulle pour $m = ${D(m)}$ €.`
      );
    }

    // Palier 4
    if (fam === 0) {
      const B = this.randChoice(this._1T7_BER);
      const p = this.randChoice(B.p);
      if (Math.random() < 0.5) {
        // au moins un succès sur 4 épreuves
        const r = this._r(1 - (1 - p) ** 4);
        return this._xa([this.decText(r), this._VAL], T, 4, 'Au moins un succès',
          'Utiliser l\'évènement contraire dans une répétition d\'épreuves',
          `${B.s} avec la probabilité $${D(p)}$. On considère $4$ ${B.it}, les résultats étant indépendants. Quelle est la probabilité que le nombre ${/^[aeiouéh]/i.test(B.cnt) ? "d'" : "de "}${B.cnt} soit supérieur ou égal à $1$ ?`,
          `$${D(r)}$`,
          [`$${D(this._r(p ** 4))}$`, `$${D(this._r((1 - p) ** 4))}$`, `$${D(this._r(Math.min(0.99, 4 * p * (1 - p) ** 3)))}$`, `$${D(this._r(1 - p ** 4))}$`].filter((o) => o !== `$${D(r)}$`),
          'L\'évènement contraire de « au moins un succès » est « aucun succès » : on calcule sa probabilité (un seul chemin de l\'arbre) puis on la retranche à $1$.',
          `Le chemin « aucun succès » a pour probabilité $${D(this._r(1 - p))}^4$.`,
          `Aucun succès : $${D(this._r(1 - p))}^4 = ${D(this._r((1 - p) ** 4))}$. Au moins un succès : $1 - ${D(this._r((1 - p) ** 4))} = ${D(r)}$.`
        );
      }
      // au moins 2 succès sur 3 épreuves
      const r = this._r(3 * p * p * (1 - p) + p ** 3);
      return this._xa([this.decText(r), this._VAL], T, 4, 'Au moins deux succès sur trois',
        'Calculer une probabilité dans une répétition d\'épreuves',
        `${B.s} avec la probabilité $${D(p)}$. On considère $3$ ${B.it}, les résultats étant indépendants, et on note $X$ le nombre ${/^[aeiouéh]/i.test(B.cnt) ? "d'" : "de "}${B.cnt}. Calculer $P(X \\geqslant 2)$.`,
        `$P(X \\geqslant 2) = ${D(r)}$`,
        [`$P(X \\geqslant 2) = ${D(this._r(3 * p * p * (1 - p)))}$`, `$P(X \\geqslant 2) = ${D(this._r(p * p * (1 - p) + p ** 3))}$`, `$P(X \\geqslant 2) = ${D(this._r(p ** 3))}$`, `$P(X \\geqslant 2) = ${D(this._r(1 - r))}$`],
        '$\\{X \\geqslant 2\\} = \\{X = 2\\} \\cup \\{X = 3\\}$ : on additionne les probabilités des chemins de l\'arbre comportant au moins deux succès.',
        `Trois chemins comportent exactement deux succès et un seul en comporte trois.`,
        `$P(X = 2) = 3 \\times ${D(p)}^2 \\times ${D(this._r(1 - p))} = ${D(this._r(3 * p * p * (1 - p)))}$ et $P(X = 3) = ${D(p)}^3 = ${D(this._r(p ** 3))}$. Donc $P(X \\geqslant 2) = ${D(this._r(3 * p * p * (1 - p)))} + ${D(this._r(p ** 3))} = ${D(r)}$.`
      );
    }
    if (fam === 1) {
      // échantillonnage : dispersion et taille
      const n = this.randChoice([25, 50, 100, 200, 400]);
      const k = this.randChoice([2, 3, 4, 5]);
      if (Math.random() < 0.5) {
        return this._xa([String(n * k * k), this._VAL], T, 4, 'Taille d\'échantillon et dispersion',
          'Relier la taille des échantillons à la dispersion des fréquences',
          `On simule un grand nombre d'échantillons de taille $${n}$ d'une épreuve de Bernoulli et on observe la dispersion des fréquences de succès autour de $p$. On admet que l'écart type de ces fréquences est de l'ordre de $\\frac{1}{\\sqrt{n}}$. Quelle taille d'échantillon faut-il choisir pour diviser cette dispersion par $${k}$ ?`,
          `$${n * k * k}$`,
          [`$${n * k}$`, `$${Math.round(n / k)}$` === `$${n * k * k}$` ? `$${n + k}$` : `$${n * 2 * k}$`, `$${n * k * k * k}$`, `$${n + k * k}$`],
          'L\'écart type des fréquences est proportionnel à $\\frac{1}{\\sqrt{n}}$ : pour le diviser par $k$, il faut multiplier la taille $n$ par $k^2$.',
          `Il faut multiplier $${n}$ par $${k}^2$.`,
          `Diviser $\\frac{1}{\\sqrt{n}}$ par $${k}$ revient à multiplier $\\sqrt{n}$ par $${k}$, donc $n$ par $${k}^2 = ${k * k}$ : il faut des échantillons de taille $${n} \\times ${k * k} = ${n * k * k}$.`
        );
      }
      const p = this.randChoice([0.2, 0.3, 0.4, 0.5, 0.6, 0.7]);
      const s = this.randChoice([0.01, 0.02, 0.025, 0.03, 0.04, 0.05]);
      const lo = this._r(p - 2 * s); const hi = this._r(p + 2 * s);
      return this._xa([`(${this.decText(lo)};${this.decText(hi)})`, 'Saisir les deux bornes dans l\'ordre croissant, sous la forme (a ; b), par exemple (0,35;0,45).'], T, 4, 'Fluctuation d\'échantillonnage',
        'Exploiter la dispersion des fréquences d\'échantillons',
        `On simule $1\\,000$ échantillons d'une épreuve de Bernoulli de paramètre $p = ${D(p)}$. L'écart type des fréquences de succès observées vaut $s = ${D(s)}$. On sait qu'environ $95\\,\\%$ des fréquences se trouvent à une distance de $p$ inférieure à $2s$. Déterminer les bornes de l'intervalle $[p - 2s ; p + 2s]$.`,
        `$(${D(lo)} ; ${D(hi)})$`,
        [`$(${D(this._r(p - s))} ; ${D(this._r(p + s))})$`, `$(${D(this._r(p - 3 * s))} ; ${D(this._r(p + 3 * s))})$`, `$(${D(this._r(p - 2 * s * s))} ; ${D(this._r(p + 2 * s * s))})$`],
        'Les bornes sont $p - 2s$ et $p + 2s$ ; environ $95\\,\\%$ des fréquences observées s\'y trouvent (environ $68\\,\\%$ à moins de $s$ et presque toutes à moins de $3s$).',
        `$2s = 2 \\times ${D(s)} = ${D(this._r(2 * s))}$.`,
        `$2s = ${D(this._r(2 * s))}$, donc $p - 2s = ${D(p)} - ${D(this._r(2 * s))} = ${D(lo)}$ et $p + 2s = ${D(p)} + ${D(this._r(2 * s))} = ${D(hi)}$. Environ $950$ des $1\\,000$ fréquences simulées devraient se trouver dans $[${D(lo)} ; ${D(hi)}]$.`
      );
    }
    // probabilités totales à l'envers : P_Abar(B)
    let a; let b; let c;
    do { a = Math.round(this.randChoice(C.pA) * 100); b = Math.round(this.randChoice(C.q) * 100); c = Math.round(this.randChoice(C.q) * 100); } while (b === c);
    const pB = this._r((a * b + (100 - a) * c) / 1e4);
    const pAB = this._r(a * b / 1e4);
    return this._xa([this.decText(c / 100), this._VAL], T, 4, 'Retrouver une probabilité conditionnelle',
      'Exploiter la formule des probabilités totales',
      `${C.intro} ${ev} On sait que $P(A) = ${D(a / 100)}$, $P_A(B) = ${D(b / 100)}$ et $P(B) = ${D(pB)}$. Calculer $P_{\\overline{A}}(B)$.`,
      `$P_{\\overline{A}}(B) = ${D(c / 100)}$`,
      [`$P_{\\overline{A}}(B) = ${D(this._r(pB - pAB))}$`, `$P_{\\overline{A}}(B) = ${D(this._r(1 - b / 100))}$`, `$P_{\\overline{A}}(B) = ${D(this._r(pB - b / 100 < 0 ? b / 100 - pB : pB - b / 100))}$`, `$P_{\\overline{A}}(B) = ${D(this._r(1 - pB))}$`],
      'On écrit la formule des probabilités totales $P(B) = P(A) \\times P_A(B) + P(\\overline{A}) \\times P_{\\overline{A}}(B)$, où la seule inconnue est $P_{\\overline{A}}(B)$.',
      `Commence par $P(A \\cap B) = ${D(a / 100)} \\times ${D(b / 100)}$, puis déduis-en $P(\\overline{A} \\cap B)$.`,
      `$P(A \\cap B) = ${D(pAB)}$, donc $P(\\overline{A} \\cap B) = ${D(pB)} - ${D(pAB)} = ${D(this._r(pB - pAB))}$. Comme $P(\\overline{A}) = ${D(this._r(1 - a / 100))}$, on obtient $P_{\\overline{A}}(B) = \\frac{${D(this._r(pB - pAB))}}{${D(this._r(1 - a / 100))}} = ${D(c / 100)}$.`
    );
  },
};

// Outils délégués (résolus à l'appel, quel que soit l'ordre de chargement) :
// - helpers communs : window.MathsGenUtils (advancedGenerators.js) ;
// - outils de saisie exacte du lycée : window.MathsLyceeGenerators (lyceeGenerators.js).
['randInt', 'randNonZero', 'randChoice', 'shuffleArray', 'pickDistinct', 'gcd', 'lcm', 'frac', 'simplifyFrac',
  'dec', 'decText', 'isDecimal', 'formatSign', 'paren', 'poly', 'polyX', 'polyPlain', 'coefStr', 'pow', 'numValue',
  'normOption', 'makeMcq', 'makeExact'].forEach((name) => {
  window.MathsPremiereVoiesGenerators[name] = function (...args) {
    return window.MathsGenUtils[name](...args);
  };
});
['_xa', '_Tx', '_xIv', '_xeq', '_xdev', '_xd', '_xtab', '_XDEV', '_XDROITE'].forEach((name) => {
  Object.defineProperty(window.MathsPremiereVoiesGenerators, name, {
    configurable: true,
    get() {
      const L = window.MathsLyceeGenerators;
      const v = L ? L[name] : undefined;
      return typeof v === 'function' ? v.bind(L) : v;
    }
  });
});
