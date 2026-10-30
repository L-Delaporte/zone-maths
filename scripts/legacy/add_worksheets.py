#!/usr/bin/env python3
"""
Ajoute des fiches d'entraînement imprimables (Worksheets) de haute qualité
pour la 5ème et la 4ème dans data_5eme.js et data_4eme.js.
"""

import json

WS_5E = {
  "5N1": [
    {
      "id": "5N1-devoir_maison",
      "filename": "Fiche_5e_Priorites_Operatoires.md",
      "type": "devoir_entrainement",
      "title": "Fiche 5ème : Priorités opératoires & Nombres entiers",
      "statement": """# Classe de 5ème — Mathématiques
## Fiche d'entraînement : Priorités opératoires et divisibilité

### Exercice 1 : Calculs sans calculatrice (6 points)
Calculer en détaillant les étapes :
1. $A = 12 + 3 \\times 7$
2. $B = 35 - 5 \\times (4 + 2)$
3. $C = 48 \\div 6 + 3 \\times 4 - 2$

### Exercice 2 : Problème concret (4 points)
Lucas achète 3 classeurs à 4,50 € l'un et 5 stylos à 1,20 € l'un. Il paye avec un billet de 50 €.
1. Écrire une seule expression numérique permettant de calculer la monnaie rendue à Lucas.
2. Effectuer le calcul.

---
## Corrigé détaillé

### Exercice 1
1. $A = 12 + 21 = 33$.
2. $B = 35 - 5 \\times 6 = 35 - 30 = 5$.
3. $C = 8 + 12 - 2 = 20 - 2 = 18$.

### Exercice 2
1. Expression : $M = 50 - (3 \\times 4,50 + 5 \\times 1,20)$.
2. $M = 50 - (13,50 + 6,00) = 50 - 19,50 = 30,50$ €.""",
      "solution": ""
    }
  ],
  "5N2": [
    {
      "id": "5N2-devoir_relatifs",
      "filename": "Fiche_5e_Nombres_Relatifs.md",
      "type": "devoir_entrainement",
      "title": "Fiche 5ème : Nombres relatifs et repérage",
      "statement": """# Classe de 5ème — Mathématiques
## Fiche d'entraînement : Nombres relatifs et opérations

### Exercice 1 : Comparaison et repérage (4 points)
1. Ranger par ordre croissant : $-5 \\quad ; \\quad +3{,}2 \\quad ; \\quad -8{,}5 \\quad ; \\quad 0 \\quad ; \\quad -1{,}2 \\quad ; \\quad +4$.
2. Donner l'opposé et la distance à zéro de chacun des nombres : $-7{,}4$ et $+5$.

### Exercice 2 : Additions et soustractions (6 points)
Calculer en détaillant les étapes de calcul :
1. $A = (-8) + (+15)$
2. $B = (-12) + (-9)$
3. $C = (+7) - (-11)$
4. $D = (-14) - (+6)$

---
## Corrigé détaillé

### Exercice 1
1. Ordre croissant : $-8{,}5 < -5 < -1{,}2 < 0 < +3{,}2 < +4$.
2. Pour $-7{,}4$ : opposé $= +7{,}4$, distance à zéro $= 7{,}4$.
Pour $+5$ : opposé $= -5$, distance à zéro $= 5$.

### Exercice 2
1. $A = +(15 - 8) = 7$.
2. $B = -(12 + 9) = -21$.
3. $C = 7 + 11 = 18$.
4. $D = -14 + (-6) = -20$.""",
      "solution": ""
    }
  ],
  "5G3": [
    {
      "id": "5G3-devoir_angles",
      "filename": "Fiche_5e_Angles_Triangles.md",
      "type": "devoir_entrainement",
      "title": "Fiche 5ème : Angles et triangles",
      "statement": """# Classe de 5ème — Mathématiques
## Fiche d'entraînement : Angles, parallélisme et triangles

### Exercice 1 : Somme des angles d'un triangle (5 points)
1. Dans un triangle $ABC$, on donne $\\widehat{A} = 48^\\circ$ et $\\widehat{B} = 72^\\circ$. Calculer la mesure de $\\widehat{C}$.
2. Un triangle peut-il avoir des angles de $65^\\circ$, $45^\\circ$ et $75^\\circ$ ? Justifier soigneusement.

### Exercice 2 : Angles alternes-internes (5 points)
Deux droites parallèles $(d_1)$ et $(d_2)$ sont coupées par une sécante $(d)$. Un des angles alternes-internes mesure $56^\\circ$.
1. Quelle est la mesure de l'autre angle alterne-interne ?
2. Énoncer la propriété du cours qui justifie votre réponse.

---
## Corrigé détaillé

### Exercice 1
1. Dans un triangle, la somme des trois angles vaut $180^\\circ$ :
$$\\widehat{C} = 180^\\circ - (48^\\circ + 72^\\circ) = 180^\\circ - 120^\\circ = 60^\\circ$$
2. Somme des angles proposés : $65^\\circ + 45^\\circ + 75^\\circ = 185^\\circ \\neq 180^\\circ$. Ce triangle ne peut pas être construit.

### Exercice 2
1. L'autre angle alterne-interne mesure également $56^\\circ$.
2. Propriété : Si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes qu'elles forment ont la même mesure.""",
      "solution": ""
    }
  ]
}

WS_4E = {
  "4G1": [
    {
      "id": "4G1-devoir_pythagore",
      "filename": "Fiche_4e_Theoreme_Pythagore.md",
      "type": "devoir_entrainement",
      "title": "Fiche 4ème : Le Théorème de Pythagore & Applications",
      "statement": """# Classe de 4ème — Mathématiques
## Fiche d'entraînement : Théorème de Pythagore et Réciproque

### Exercice 1 : Calculs de longueurs (6 points)
1. Soit $ABC$ un triangle rectangle en $B$ tel que $AB = 4{,}8\\text{ cm}$ et $BC = 6{,}4\\text{ cm}$. Calculer $AC$.
2. Soit $MNP$ rectangle en $M$ tel que $NP = 15\\text{ cm}$ et $MN = 9\\text{ cm}$. Calculer $MP$.

### Exercice 2 : Réciproque et contraposée (4 points)
Un maçon veut vérifier si l'angle d'un mur est bien droit. Il mesure une distance de $60\\text{ cm}$ sur un mur, $80\\text{ cm}$ sur l'autre mur, et constate que la diagonale mesure $100\\text{ cm}$.
L'angle est-il parfaitement droit ? Rédiger la démonstration avec rigueur.

---
## Corrigé détaillé

### Exercice 1
1. Le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore :
$$AC^2 = AB^2 + BC^2 = 4{,}8^2 + 6{,}4^2 = 23{,}04 + 40{,}96 = 64$$
Comme $AC > 0$, $AC = \\sqrt{64} = 8\\text{ cm}$.

2. Le triangle $MNP$ est rectangle en $M$ :
$$NP^2 = MN^2 + MP^2 \\implies MP^2 = NP^2 - MN^2 = 15^2 - 9^2 = 225 - 81 = 144$$
Comme $MP > 0$, $MP = \\sqrt{144} = 12\\text{ cm}$.

### Exercice 2
Le plus grand côté est $100\\text{ cm}$.
• $100^2 = 10\\,000$
• $60^2 + 80^2 = 3\\,600 + 6\\,400 = 10\\,000$
On constate que $100^2 = 60^2 + 80^2$. D'après la réciproque du théorème de Pythagore, le triangle formé est rectangle. Le mur forme bien un angle droit.""",
      "solution": ""
    }
  ],
  "4N1": [
    {
      "id": "4N1-devoir_relatifs",
      "filename": "Fiche_4e_Relatifs_Operations.md",
      "type": "devoir_entrainement",
      "title": "Fiche 4ème : Multiplication et division des relatifs",
      "statement": """# Classe de 4ème — Mathématiques
## Fiche d'entraînement : Règle des signes et priorités

### Exercice 1 : Calculs directs (5 points)
Calculer les produits et quotients suivants :
1. $A = (-6) \\times (-7)$
2. $B = (-8) \\times (+5)$
3. $C = \\frac{-36}{-4}$
4. $D = \\frac{42}{-7}$
5. $E = (-2) \\times (-3) \\times (-5)$

### Exercice 2 : Enchaînement d'opérations (5 points)
Calculer en respectant les priorités opératoires :
1. $F = 15 - 4 \\times (-3)$
2. $G = (-5) \\times [12 - (-3) \\times 4]$

---
## Corrigé détaillé

### Exercice 1
1. $A = +42$ (produit de deux négatifs = positif).
2. $B = -40$ (signes contraires = négatif).
3. $C = +9$.
4. $D = -6$.
5. $E = (-2 \\times -3) \\times -5 = 6 \\times -5 = -30$ (3 facteurs négatifs = résultat négatif).

### Exercice 2
1. $F = 15 - (-12) = 15 + 12 = 27$.
2. Intérieur du crochet : $12 - (-12) = 12 + 12 = 24$.
$G = (-5) \\times 24 = -120$.""",
      "solution": ""
    }
  ],
  "4N5": [
    {
      "id": "4N5-devoir_equations",
      "filename": "Fiche_4e_Equations.md",
      "type": "devoir_entrainement",
      "title": "Fiche 4ème : Calcul littéral et équations",
      "statement": """# Classe de 4ème — Mathématiques
## Fiche d'entraînement : Équations du premier degré

### Exercice 1 : Résolutions d'équations (6 points)
Résoudre les équations suivantes d'inconnue $x$ :
1. $3x + 7 = 22$
2. $5x - 8 = -23$
3. $7x + 2 = 4x + 17$

### Exercice 2 : Problème à mettre en équation (4 points)
Le triple d'un nombre augmenté de 5 est égal à ce nombre augmenté de 19.
1. Traduire cette situation par une équation.
2. Déterminer la valeur de ce nombre.

---
## Corrigé détaillé

### Exercice 1
1. $3x + 7 = 22 \\implies 3x = 22 - 7 = 15 \\implies x = \\frac{15}{3} = 5$.
2. $5x - 8 = -23 \\implies 5x = -23 + 8 = -15 \\implies x = \\frac{-15}{5} = -3$.
3. $7x - 4x = 17 - 2 \\implies 3x = 15 \\implies x = 5$.

### Exercice 2
1. Soit $x$ le nombre cherché : $3x + 5 = x + 19$.
2. $3x - x = 19 - 5 \\implies 2x = 14 \\implies x = 7$.
Le nombre cherché est 7.""",
      "solution": ""
    }
  ]
}

def update_file(path, ws_dict, var_name):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Remplacer le bloc var_name = { ... };
    pattern = rf"(window\.{var_name}\s*=\s*\{{).*?(\n\}};\s*\n// Fusion)"
    replacement = rf"\1\n" + ",\n".join([f'  "{k}": {json.dumps(v, ensure_ascii=False, indent=4)}' for k, v in ws_dict.items()]) + rf"\2"
    new_content, count = re.subn(pattern, replacement, content, flags=re.DOTALL)
    if count == 0:
        print(f"ATTENTION: motif non trouvé dans {path}")
    else:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"{path} mis à jour avec {len(ws_dict)} fiches d'exercices !")

if __name__ == "__main__":
    import re
    update_file("Site/js/data/data_5eme.js", WS_5E, "MATHS_WORKSHEETS_5E")
    update_file("Site/js/data/data_4eme.js", WS_4E, "MATHS_WORKSHEETS_4E")
