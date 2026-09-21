#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de compilation de la base de données pédagogique pour le site web adaptatif Maths 3ème.
Génère:
- Site/js/data/chapters.js
- Site/js/data/courses.js
- Site/js/data/worksheets.js
- Site/js/data/exercises.js
"""

import os
import re
import json
import glob

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
FICHES_DIR = os.path.join(BASE_DIR, "Cours/3e - fiches_exercices")
SITE_DATA_DIR = os.path.join(BASE_DIR, "Site/js/data")

os.makedirs(SITE_DATA_DIR, exist_ok=True)

CHAPTERS_CONFIG = [
    # --- DOMAINE : Nombres et Calculs ---
    {
        "id": "N1",
        "domain": "nombres",
        "domainName": "Nombres et Calculs",
        "folder": "N1_Nombres_et_fractions",
        "num": "N1",
        "title": "Ensemble de nombres et fractions",
        "shortTitle": "Nombres & Fractions",
        "icon": "divide",
        "badge": "Calculateur d'élite",
        "color": "#2563eb",
        "description": "Ensembles de nombres (N, Z, D, Q, R), 4 opérations sur les fractions et priorités opératoires.",
        "skills": ["Calculer avec les relatifs et fractions", "Identifier la nature d'un nombre", "Rendre une fraction irréductible"]
    },
    {
        "id": "N2",
        "domain": "nombres",
        "domainName": "Nombres et Calculs",
        "folder": "N2_Calcul_litteral",
        "num": "N2",
        "title": "Calcul littéral et Identités remarquables",
        "shortTitle": "Calcul littéral",
        "icon": "variable",
        "badge": "Al-Khwarizmi",
        "color": "#3b82f6",
        "description": "Distributivité simple et double, 3 identités remarquables, factorisations et réductions.",
        "skills": ["Développer et réduire", "Factoriser (facteur commun & identités)", "Calculer la valeur numérique"]
    },
    {
        "id": "N3",
        "domain": "nombres",
        "domainName": "Nombres et Calculs",
        "folder": "N3_Puissances",
        "num": "N3",
        "title": "Puissances et Notation scientifique",
        "shortTitle": "Puissances & Ordres",
        "icon": "superscript",
        "badge": "Maître de l'infiniment grand",
        "color": "#1d4ed8",
        "description": "Puissances d'un nombre, puissances de 10, règles de calcul et écriture scientifique normalisée.",
        "skills": ["Appliquer les règles sur les puissances", "Écrire en notation scientifique", "Utiliser les préfixes métriques"]
    },
    {
        "id": "N4",
        "domain": "nombres",
        "domainName": "Nombres et Calculs",
        "folder": "N4_Equations",
        "num": "N4",
        "title": "Équations et Résolution de problèmes",
        "shortTitle": "Équations",
        "icon": "equal",
        "badge": "Solveur d'équations",
        "color": "#1e40af",
        "description": "Équations du 1er degré, équations produit-nul, équations x² = a et inéquations.",
        "skills": ["Résoudre ax+b = cx+d", "Résoudre (ax+b)(cx+d) = 0", "Résoudre x² = a", "Modéliser un problème"]
    },
    {
        "id": "N5",
        "domain": "nombres",
        "domainName": "Nombres et Calculs",
        "folder": "N5_Arithmetique",
        "num": "N5",
        "title": "Arithmétique et Nombres premiers",
        "shortTitle": "Arithmétique",
        "icon": "hash",
        "badge": "Décrypteur d'Euclide",
        "color": "#172554",
        "description": "Divisibilité, nombres premiers, décomposition en produit de facteurs premiers et simplification.",
        "skills": ["Critères de divisibilité", "Décomposition en facteurs premiers", "Rendre irréductible", "Problèmes de partage"]
    },

    # --- DOMAINE : Espace et Géométrie ---
    {
        "id": "G0",
        "domain": "geometrie",
        "domainName": "Espace et Géométrie",
        "folder": "G0_Pythagore",
        "num": "G0",
        "title": "Théorème de Pythagore et Propriétés",
        "shortTitle": "Pythagore",
        "icon": "triangle",
        "badge": "Disciple de Samos",
        "color": "#059669",
        "description": "Théorème direct pour calculer une longueur, réciproque et contraposée pour prouver l'orthogonalité.",
        "skills": ["Calculer l'hypoténuse", "Calculer un côté de l'angle droit", "Démontrer qu'un triangle est rectangle ou non"]
    },
    {
        "id": "G1",
        "domain": "geometrie",
        "domainName": "Espace et Géométrie",
        "folder": "G1_Thales",
        "num": "G1",
        "title": "Théorème de Thalès et Réciproque",
        "shortTitle": "Thalès",
        "icon": "git-fork",
        "badge": "Géomètre de Milet",
        "color": "#10b981",
        "description": "Configurations en triangles emboîtés et papillon, calcul de longueurs, réciproque et alignement ordonné.",
        "skills": ["Écrire les rapports égaux", "Calculer une longueur inconnue", "Démontrer que deux droites sont parallèles"]
    },
    {
        "id": "G2",
        "domain": "geometrie",
        "domainName": "Espace et Géométrie",
        "folder": "G2_Trigonometrie",
        "num": "G2",
        "title": "Trigonométrie dans le triangle rectangle",
        "shortTitle": "Trigonométrie",
        "icon": "compass",
        "badge": "Navigateur Trigonométrique",
        "color": "#047857",
        "description": "Cosinus, sinus et tangente (CAH-SOH-TOA), calcul de longueurs et détermination d'angles au degré près.",
        "skills": ["Identifier adjacent, opposé, hypoténuse", "Calculer une longueur avec cos/sin/tan", "Déterminer un angle avec Arccos/Arcsin/Arctan"]
    },
    {
        "id": "G3",
        "domain": "geometrie",
        "domainName": "Espace et Géométrie",
        "folder": "G3_Homotheties",
        "num": "G3",
        "title": "Homothéties et Effets d'échelle",
        "shortTitle": "Homothéties",
        "icon": "maximize-2",
        "badge": "Architecte de l'Échelle",
        "color": "#065f46",
        "description": "Centre et rapport d'homothétie (positif ou négatif), multiplication des longueurs (|k|), aires (k²) et volumes (|k|³).",
        "skills": ["Construire l'image par homothétie", "Comprendre le rapport négatif", "Calculer l'impact sur longueurs, aires et volumes"]
    },
    {
        "id": "G4",
        "domain": "geometrie",
        "domainName": "Espace et Géométrie",
        "folder": "G4_Sphere_et_boule",
        "num": "G4",
        "title": "Sphère, Boule et Repérage terrestre",
        "shortTitle": "Sphère & Boule",
        "icon": "globe",
        "badge": "Cartographe Planétaire",
        "color": "#064e3b",
        "description": "Aire de la sphère (4πR²), volume de la boule (4/3 πR³), section plane et repérage par latitude et longitude.",
        "skills": ["Calculer l'aire et le volume", "Section d'une sphère par un plan", "Repérer un point sur Terre (latitude, longitude)"]
    },
    {
        "id": "G5",
        "domain": "geometrie",
        "domainName": "Espace et Géométrie",
        "folder": "G5_Geometrie_espace_sections",
        "num": "G5",
        "title": "Géométrie dans l'espace et Sections planes",
        "shortTitle": "Espace & Sections",
        "icon": "box",
        "badge": "Maître de la 3D",
        "color": "#0f766e",
        "description": "Solides usuels (pavé, prisme, cylindre, pyramide, cône), volumes et sections par un plan parallèle à une face/base.",
        "skills": ["Identifier la nature d'une section", "Calculer des volumes de solides", "Patrons et repérage dans un pavé droit"]
    },
    {
        "id": "G6",
        "domain": "geometrie",
        "domainName": "Espace et Géométrie",
        "folder": "G6_Rotations",
        "num": "G6",
        "title": "Rotations et Transformations du plan",
        "shortTitle": "Rotations",
        "icon": "rotate-cw",
        "badge": "Maître du Mouvement",
        "color": "#0d9488",
        "description": "Centre, angle et sens de rotation (horaire/anti-horaire), frises, pavages et conservation des longueurs et angles.",
        "skills": ["Construire l'image par rotation", "Identifier une transformation", "Propriétés d'invariance"]
    },
    {
        "id": "G7",
        "domain": "geometrie",
        "domainName": "Espace et Géométrie",
        "folder": "G7_Triangles_semblables",
        "num": "G7",
        "title": "Triangles semblables",
        "shortTitle": "Triangles semblables",
        "icon": "shapes",
        "badge": "Expert des Proportions",
        "color": "#14b8a6",
        "description": "Définition, angles homologues deux à deux égaux, côtés proportionnels et coefficient d'agrandissement/réduction.",
        "skills": ["Démontrer que deux triangles sont semblables", "Associer sommets et côtés homologues", "Calculer des longueurs"]
    },

    # --- DOMAINE : Organisation de données et Fonctions ---
    {
        "id": "Org1",
        "domain": "fonctions",
        "domainName": "Organisation et Fonctions",
        "folder": "Org1_Fonctions",
        "num": "Org1",
        "title": "Notion de fonction",
        "shortTitle": "Notion de fonction",
        "icon": "trending-up",
        "badge": "Analyste Graphique",
        "color": "#d97706",
        "description": "Vocabulaire (image, antécédent), tableau de valeurs, formule f(x) et courbe représentative dans un repère.",
        "skills": ["Calculer une image par une formule", "Lire une image et un antécédent sur un graphique", "Interpréter un tableau de valeurs"]
    },
    {
        "id": "Org2",
        "domain": "fonctions",
        "domainName": "Organisation et Fonctions",
        "folder": "Org2_Statistiques",
        "num": "Org2",
        "title": "Statistiques et Analyse de données",
        "shortTitle": "Statistiques",
        "icon": "bar-chart-2",
        "badge": "Data Scientist du Collège",
        "color": "#b45309",
        "description": "Moyenne simple et pondérée, médiane, étendue, effectifs cumulés et fréquences.",
        "skills": ["Calculer une moyenne pondérée", "Déterminer la médiane d'une série", "Calculer l'étendue", "Interpréter des données"]
    },
    {
        "id": "Org3",
        "domain": "fonctions",
        "domainName": "Organisation et Fonctions",
        "folder": "Org3_Fonctions_lineaires_affines",
        "num": "Org3",
        "title": "Fonctions linéaires et affines",
        "shortTitle": "Fonctions affines",
        "icon": "activity",
        "badge": "Pionnier des Droites",
        "color": "#92400e",
        "description": "Fonction linéaire f(x)=ax et proportionnalité, fonction affine f(x)=ax+b, coefficient directeur et ordonnée à l'origine.",
        "skills": ["Tracer une droite représentative", "Lire le coefficient directeur et l'ordonnée à l'origine", "Déterminer l'expression d'une fonction"]
    },
    {
        "id": "Org4",
        "domain": "fonctions",
        "domainName": "Organisation et Fonctions",
        "folder": "Org4_Probabilites",
        "num": "Org4",
        "title": "Probabilités et Expériences aléatoires",
        "shortTitle": "Probabilités",
        "icon": "dices",
        "badge": "Stratège Aléatoire",
        "color": "#78350f",
        "description": "Événements élémentaires, équiprobabilité, événement contraire P(non A)=1-P(A), arbres pondérés à une et deux épreuves.",
        "skills": ["Calculer la probabilité d'un événement", "Construire et utiliser un arbre de probabilités", "Règle du produit et de la somme"]
    },

    # --- DOMAINE : Algorithmique et Outils Numériques ---
    {
        "id": "Algo",
        "domain": "algo",
        "domainName": "Algorithmique et Outils",
        "folder": "Algo_Tableur_et_Scratch",
        "num": "Algo",
        "title": "Algorithmique, Scratch et Tableur",
        "shortTitle": "Scratch & Tableur",
        "icon": "terminal",
        "badge": "Hacker Algorithmique",
        "color": "#7c3aed",
        "description": "Formules du tableur (=SOMME, =MOYENNE, étirement de cellules), algorithmique Scratch (variables, boucles, conditions).",
        "skills": ["Saisir et étirer des formules de tableur", "Comprendre un script Scratch avec variables", "Résoudre un problème type Brevet croisé"]
    }
]

def load_worksheets():
    worksheets = {}
    for chap in CHAPTERS_CONFIG:
        cid = chap["id"]
        folder_path = os.path.join(FICHES_DIR, chap["folder"])
        worksheets[cid] = []
        if not os.path.isdir(folder_path):
            continue
        md_files = sorted(glob.glob(os.path.join(folder_path, "*.md")))
        for mdf in md_files:
            bname = os.path.basename(mdf)
            with open(mdf, "r", encoding="utf-8") as fp:
                raw_text = fp.read()
            
            title = bname.replace(".md", "").replace("_", " ")
            if "Automatismes" in bname:
                sheet_type = "automatismes"
                title_clean = "Fiche Automatismes & Calculs Flash"
            elif "Fiche_1" in bname or "Exercices_Tableur" in bname:
                sheet_type = "brevet_entrainement"
                title_clean = "Fiche 1 : Entraînement progressif (Brevet)"
            elif "Fiche_2" in bname or "Exercices_Scratch" in bname:
                sheet_type = "seconde_approfondissement"
                title_clean = "Fiche 2 : Approfondissement (Passerelle Seconde)"
            elif "Fiche_3" in bname:
                sheet_type = "brevet_croise"
                title_clean = "Fiche 3 : Épreuve croisée Type Brevet"
            elif "Cours_Tableur" in bname:
                sheet_type = "cours"
                title_clean = "Cours de Référence : Tableur & Scratch"
            else:
                sheet_type = "autre"
                title_clean = title

            # Split exercises vs correction if present
            split_patterns = ["## Correction détaillée", "## Correction", "## CORRECTION DÉTAILLÉE", "## CORRECTION"]
            statement_part = raw_text
            solution_part = ""
            for sp in split_patterns:
                if sp in raw_text:
                    parts = raw_text.split(sp, 1)
                    statement_part = parts[0].strip()
                    solution_part = (sp + "\n" + parts[1]).strip()
                    break

            worksheets[cid].append({
                "id": f"{cid}-{sheet_type}",
                "filename": bname,
                "type": sheet_type,
                "title": title_clean,
                "statement": statement_part,
                "solution": solution_part,
                "fullText": raw_text
            })
    return worksheets

print("Chargement des fiches d'exercices...")
worksheets_data = load_worksheets()
print(f"Total chapitres indexés pour fiches: {len(worksheets_data)}")

# Write chapters.js
with open(os.path.join(SITE_DATA_DIR, "chapters.js"), "w", encoding="utf-8") as fp:
    fp.write("// Métadonnées des 18 chapitres et 4 domaines du Cycle 4 (3ème)\n")
    fp.write("window.MATHS_CHAPTERS = ")
    json.dump(CHAPTERS_CONFIG, fp, ensure_ascii=False, indent=2)
    fp.write(";\n")
print("Génération de chapters.js terminée.")

# Write worksheets.js
with open(os.path.join(SITE_DATA_DIR, "worksheets.js"), "w", encoding="utf-8") as fp:
    fp.write("// Fiches de travail complètes (énoncés et corrections détaillées) pour chaque chapitre\n")
    fp.write("window.MATHS_WORKSHEETS = ")
    json.dump(worksheets_data, fp, ensure_ascii=False, indent=2)
    fp.write(";\n")
print("Génération de worksheets.js terminée.")

