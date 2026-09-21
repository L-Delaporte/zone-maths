#!/usr/bin/env python3
"""
Enrichit les fichiers de données data_5eme.js, data_4eme.js et randomGenerators.js
pour atteindre 100% de couverture sur tous les 48 chapitres du Cycle 4.
"""

import json
import re

# =============================================================================
# 1. DONNÉES DE COURS SUPPLÉMENTAIRES (5ÈME)
# =============================================================================
COURSES_5E_ADD = {
    "5N4": {
        "title": "5N4 : Puissances simples et carrés",
        "domain": "Nombres et Calculs",
        "objectives": [
            "Connaître et utiliser la notation puissance (carré $a^2$, cube $a^3$).",
            "Calculer des puissances de 10 d'exposant positif ($10^n$).",
            "Appliquer les règles de priorité relatives aux puissances."
        ],
        "keyPoints": [
            {
                "title": "1. Le carré et le cube d'un nombre",
                "content": "• Le carré de $a$ est le produit de $a$ par lui-même : $a^2 = a \\times a$.\n• Le cube de $a$ est le produit de trois facteurs égaux à $a$ : $a^3 = a \\times a \\times a$.\nExemples : $7^2 = 7 \\times 7 = 49$ et $2^3 = 2 \\times 2 \\times 2 = 8$."
            },
            {
                "title": "2. Puissances de 10",
                "content": "Pour tout entier $n \\ge 1$, $10^n$ s'écrit avec un 1 suivi de $n$ zéros :\n$$10^1 = 10, \\quad 10^2 = 100, \\quad 10^3 = 1000, \\quad 10^6 = 1\\,000\\,000$$\nPar convention : $10^0 = 1$ et pour tout nombre non nul, $a^0 = 1$."
            },
            {
                "title": "3. Priorité des puissances",
                "content": "Dans une chaîne de calculs, **les puissances sont prioritaires** sur la multiplication, la division, l'addition et la soustraction :\n$$3 \\times 2^3 = 3 \\times 8 = 24 \\quad (\\text{et non } 6^3 = 216)$$"
            }
        ],
        "methods": [
            {
                "title": "Méthode : Calculer avec des puissances",
                "example": "Calculer $A = 5 + 2 \\times 3^2$.",
                "steps": [
                    "**Étape 1 (Puissance)** : On calcule en priorité la puissance : $3^2 = 9$.",
                    "**Étape 2 (Multiplication)** : On effectue la multiplication : $2 \\times 9 = 18$.",
                    "**Étape 3 (Addition)** : On additionne : $A = 5 + 18 = 23$."
                ]
            }
        ],
        "traps": [
            "⚠️ Ne pas confondre $3^2$ et $3 \\times 2$ ! $3^2 = 9$ alors que $3 \\times 2 = 6$.",
            "⚠️ Attention au signe : $(-4)^2 = (-4) \\times (-4) = 16$ alors que $-4^2 = -(4 \\times 4) = -16$."
        ],
        "flashcards": [
            {"q": "Que vaut $5^3$ ?", "a": "$5 \\times 5 \\times 5 = 125$."},
            {"q": "Combien de zéros compte le nombre $10^5$ ?", "a": "5 zéros, soit $100\\,000$."}
        ]
    },
    "5N5": {
        "title": "5N5 : Calcul littéral et initiation aux équations",
        "domain": "Nombres et Calculs",
        "objectives": [
            "Simplifier les écritures littérales en omettant le signe $\\times$.",
            "Substituer un nombre à une lettre pour calculer la valeur d'une expression.",
            "Tester si une égalité est vraie pour des valeurs numériques données.",
            "Résoudre des équations simples du type $x + a = b$ et $a \\times x = b$."
        ],
        "keyPoints": [
            {
                "title": "1. Conventions d'écriture littérale",
                "content": "On peut supprimer le signe $\\times$ devant une lettre ou une parenthèse :\n• $3 \\times x = 3x$\n• $1 \\times x = x$\n• $x \\times x = x^2$\n• $4 \\times (a + 2) = 4(a + 2)$"
            },
            {
                "title": "2. Substitution numérique",
                "content": "Pour calculer la valeur d'une expression littérale pour une valeur donnée, on remplace la lettre par ce nombre en rétablissant les signes $\\times$ sous-entendus.\nExemple pour $x = 4$ dans $A = 3x^2 - 5$ :\n$$A = 3 \\times 4^2 - 5 = 3 \\times 16 - 5 = 48 - 5 = 43$$"
            },
            {
                "title": "3. Tester une égalité",
                "content": "Une égalité est vraie pour une valeur si les deux membres calculés séparément donnent le même résultat."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Tester si un nombre est solution d'une équation",
                "example": "Le nombre 3 est-il solution de l'équation $2x + 5 = 11$ ?",
                "steps": [
                    "**Membre de gauche** : Pour $x = 3$, $2 \\times 3 + 5 = 6 + 5 = 11$.",
                    "**Membre de droite** : $11$.",
                    "**Conclusion** : Les deux membres sont égaux, donc 3 est bien solution de l'équation."
                ]
            }
        ],
        "traps": [
            "⚠️ Attention lors du remplacement : si $x = 3$, $2x$ ne vaut pas $23$, mais bien $2 \\times 3 = 6$ !",
            "⚠️ On ne peut pas additionner des termes de nature différente : $3x + 5 \\neq 8x$."
        ],
        "flashcards": [
            {"q": "Comment simplifier l'écriture $x \\times 5$ ?", "a": "On écrit $5x$ (le coefficient numérique se place devant la lettre)."},
            {"q": "Que vaut $2x + 3$ pour $x = 4$ ?", "a": "$2 \\times 4 + 3 = 8 + 3 = 11$."}
        ]
    },
    "5G4": {
        "title": "5G4 : Triangles : constructions, droites remarquables et aire",
        "domain": "Espace et Géométrie",
        "objectives": [
            "Vérifier l'inégalité triangulaire pour savoir si un triangle est constructible.",
            "Construire un triangle connaissant les longueurs de ses côtés ou ses angles.",
            "Tracer les médiatrices (cercle circonscrit) et les hauteurs d'un triangle.",
            "Calculer l'aire d'un triangle : $\\text{Aire} = \\frac{\\text{base} \\times \\text{hauteur}}{2}$."
        ],
        "keyPoints": [
            {
                "title": "1. Inégalité triangulaire",
                "content": "Dans un triangle, la longueur de chaque côté est **strictement inférieure à la somme** des deux autres. Pour vérifier la constructibilité, il suffit de tester si le plus grand côté est inférieur à la somme des deux plus petits."
            },
            {
                "title": "2. Droites remarquables",
                "content": "• **Médiatrice** : droite perpendiculaire à un segment passant par son milieu. Les 3 médiatrices d'un triangle sont concourantes au **centre du cercle circonscrit**.\n• **Hauteur** : droite passant par un sommet et perpendiculaire au côté opposé. Les 3 hauteurs sont concourantes à l'orthocentre."
            },
            {
                "title": "3. Aire d'un triangle",
                "content": "$$\\text{Aire} = \\frac{b \\times h}{2}$$\noù $h$ est la hauteur relative à la base $b$."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Calculer l'aire d'un triangle",
                "example": "Calculer l'aire d'un triangle dont une base mesure $8\\text{ cm}$ et la hauteur correspondante $5\\text{ cm}$.",
                "steps": [
                    "**Formule** : $\\text{Aire} = \\frac{b \\times h}{2}$.",
                    "**Calcul** : $\\text{Aire} = \\frac{8 \\times 5}{2} = \\frac{40}{2} = 20\\text{ cm}^2$."
                ]
            }
        ],
        "traps": [
            "⚠️ Ne pas oublier de diviser par 2 dans le calcul de l'aire du triangle !",
            "⚠️ Si le plus grand côté est égal à la somme des deux autres, les points sont alignés et le triangle est plat."
        ],
        "flashcards": [
            {"q": "Un triangle de côtés 3 cm, 4 cm et 8 cm est-il constructible ?", "a": "Non, car $3 + 4 = 7 < 8$ (le plus grand côté est trop long)."},
            {"q": "Quelle est la formule de l'aire d'un triangle ?", "a": "$\\text{Aire} = \\frac{\\text{base} \\times \\text{hauteur}}{2}$."}
        ]
    },
    "5G5": {
        "title": "5G5 : Parallélogrammes et quadrilatères particuliers",
        "domain": "Espace et Géométrie",
        "objectives": [
            "Caractériser le parallélogramme par ses côtés, angles, diagonales et son centre de symétrie.",
            "Reconnaître et construire les quadrilatères particuliers (rectangle, losange, carré).",
            "Calculer le périmètre et l'aire d'un parallélogramme : $\\text{Aire} = b \\times h$."
        ],
        "keyPoints": [
            {
                "title": "1. Propriétés du parallélogramme",
                "content": "Un parallélogramme est un quadrilatère qui possède un centre de symétrie (l'intersection des diagonales). Ses conséquences :\n• Les côtés opposés sont parallèles et de même longueur.\n• Les diagonales se coupent en leur milieu.\n• Les angles opposés ont la même mesure."
            },
            {
                "title": "2. Quadrilatères particuliers",
                "content": "• **Rectangle** : parallélogramme avec un angle droit (ou diagonales de même longueur).\n• **Losange** : parallélogramme avec deux côtés consécutifs égaux (ou diagonales perpendiculaires).\n• **Carré** : à la fois rectangle et losange."
            },
            {
                "title": "3. Aire du parallélogramme",
                "content": "$$\\text{Aire} = b \\times h$$\noù $h$ est la hauteur relative à la base $b$."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Prouver qu'un quadrilatère est un parallélogramme",
                "example": "Démontrer que $ABCD$ est un parallélogramme sachant que ses diagonales se coupent en leur milieu $O$.",
                "steps": [
                    "**Propriété** : Si les diagonales d'un quadrilatère ont le même milieu, alors c'est un parallélogramme.",
                    "**Données** : Les segments $[AC]$ et $[BD]$ ont pour milieu commun $O$.",
                    "**Conclusion** : Donc $ABCD$ est un parallélogramme."
                ]
            }
        ],
        "traps": [
            "⚠️ Attention à l'ordre des lettres : le quadrilatère $ABCD$ a pour diagonales $[AC]$ et $[BD]$ (et non $[AB]$).",
            "⚠️ L'aire du parallélogramme est $b \\times h$ et NON le produit de deux côtés consécutifs !"
        ],
        "flashcards": [
            {"q": "Quelle est la propriété des diagonales d'un parallélogramme ?", "a": "Elles se coupent en leur milieu."},
            {"q": "Qu'est-ce qu'un losange ?", "a": "Un parallélogramme qui a ses 4 côtés de même longueur (ou ses diagonales perpendiculaires)."}
        ]
    },
    "5G6": {
        "title": "5G6 : Espace : prismes droits, cylindres et volumes",
        "domain": "Espace et Géométrie",
        "objectives": [
            "Identifier et décrire un prisme droit et un cylindre de révolution.",
            "Dessiner en perspective cavalière et construire des patrons de prismes et cylindres.",
            "Calculer le volume d'un prisme droit et d'un cylindre : $V = B \\times h$."
        ],
        "keyPoints": [
            {
                "title": "1. Prisme droit",
                "content": "Un prisme droit possède :\n• Deux bases parallèles qui sont des polygones superposables.\n• Des faces latérales rectangulaires perpendiculaires aux bases."
            },
            {
                "title": "2. Cylindre de révolution",
                "content": "Un cylindre possède deux bases en forme de disques superposables et parallèles de rayon $R$, et une surface latérale qui se déroule en un rectangle de longueur $2\\pi R$ et de hauteur $h$."
            },
            {
                "title": "3. Volume d'un prisme ou cylindre",
                "content": "$$V = \\text{Aire de la base} \\times \\text{hauteur} = B \\times h$$\nPour le cylindre : $V = \\pi \\times R^2 \\times h$."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Calculer le volume d'un cylindre",
                "example": "Calculer le volume d'un cylindre de rayon $R = 3\\text{ cm}$ et de hauteur $h = 10\\text{ cm}$ (valeur approchée au dixième).",
                "steps": [
                    "**Aire de la base** : $B = \\pi \\times R^2 = \\pi \\times 3^2 = 9\\pi\\text{ cm}^2$.",
                    "**Volume exact** : $V = B \\times h = 9\\pi \\times 10 = 90\\pi\\text{ cm}^3$.",
                    "**Valeur approchée** : $90 \\times 3,1416 \\approx 282,7\\text{ cm}^3$."
                ]
            }
        ],
        "traps": [
            "⚠️ Ne pas confondre le rayon $R$ et le diamètre $D$ ($R = D/2$) !",
            "⚠️ $1\\text{ L} = 1\\text{ dm}^3 = 1000\\text{ cm}^3$ et $1\\text{ m}^3 = 1000\\text{ L}$."
        ],
        "flashcards": [
            {"q": "Quelle est la formule du volume d'un prisme droit ?", "a": "$V = \\text{Aire de la base} \\times \\text{hauteur}$ ($V = B \\times h$)."},
            {"q": "Quelle est l'aire de la base d'un cylindre de rayon 4 cm ?", "a": "$\\pi \\times 4^2 = 16\\pi\\text{ cm}^2$."}
        ]
    },
    "5D1": {
        "title": "5D1 : Statistiques : effectifs, fréquences et diagrammes",
        "domain": "Organisation et Gestion de Données",
        "objectives": [
            "Organiser des données en tableau d'effectifs et calculer des fréquences.",
            "Représenter des données sous forme de diagrammes en bâtons ou circulaires.",
            "Calculer la moyenne simple d'une série statistique."
        ],
        "keyPoints": [
            {
                "title": "1. Effectif et fréquence",
                "content": "• L'**effectif** est le nombre de fois où une valeur apparaît.\n• L'**effectif total** $N$ est la somme de tous les effectifs.\n• La **fréquence** est le quotient de l'effectif par l'effectif total :\n$$\\text{Fréquence} = \\frac{\\text{Effectif}}{\\text{Effectif total}}$$\nElle s'exprime sous forme de fraction, de décimal ou de pourcentage ($f \\times 100$)."
            },
            {
                "title": "2. Moyenne simple",
                "content": "La moyenne d'une série est égale à la somme de toutes les valeurs divisée par l'effectif total :\n$$\\bar{x} = \\frac{\\text{Somme des valeurs}}{N}$$"
            }
        ],
        "methods": [
            {
                "title": "Méthode : Calculer une moyenne simple",
                "example": "Calculer la moyenne des notes : 12, 15, 14, 11, 18.",
                "steps": [
                    "**Somme des valeurs** : $12 + 15 + 14 + 11 + 18 = 70$.",
                    "**Nombre de valeurs** : $N = 5$.",
                    "**Moyenne** : $\\bar{x} = \\frac{70}{5} = 14$."
                ]
            }
        ],
        "traps": [
            "⚠️ La somme des fréquences en pourcentages doit toujours être égale à 100%.",
            "⚠️ Dans un diagramme circulaire, les angles sont proportionnels aux effectifs ($360^\\circ$ pour le total)."
        ],
        "flashcards": [
            {"q": "Comment convertir une fréquence de 0,35 en pourcentage ?", "a": "$0,35 \\times 100 = 35\\%$."},
            {"q": "Quel angle représente 25% dans un diagramme circulaire ?", "a": "$25\\% \\times 360^\\circ = 90^\\circ$ (un quart de cercle)."}
        ]
    },
    "5D2": {
        "title": "5D2 : Probabilités : découverte du hasard et événements",
        "domain": "Organisation et Gestion de Données",
        "objectives": [
            "Comprendre la notion d'expérience aléatoire et d'issues possibles.",
            "Calculer des probabilités dans des situations simples d'équiprobabilité.",
            "Utiliser le vocabulaire : événement impossible, certain, élémentaire."
        ],
        "keyPoints": [
            {
                "title": "1. Expérience aléatoire et issues",
                "content": "Une expérience est dite **aléatoire** si elle dépend du hasard et qu'on ne peut pas prévoir son résultat à l'avance, bien qu'on connaisse la liste de tous les résultats possibles (les **issues**)."
            },
            {
                "title": "2. Probabilité et équiprobabilité",
                "content": "Dans une situation d'équiprobabilité (toutes les issues ont la même chance de se produire) :\n$$P(\\text{Événement}) = \\frac{\\text{Nombre d'issues favorables}}{\\text{Nombre total d'issues possibles}}$$\nUne probabilité est un nombre compris entre 0 et 1 (souvent exprimé en fraction ou en pourcentage)."
            },
            {
                "title": "3. Événement impossible et certain",
                "content": "• Un événement impossible a une probabilité égale à 0 ($P = 0$).\n• Un événement certain a une probabilité égale à 1 ($P = 1$)."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Calculer une probabilité",
                "example": "On tire une boule au hasard dans une urne contenant 4 boules bleues et 6 boules rouges. Quelle est la probabilité de tirer une boule bleue ?",
                "steps": [
                    "**Nombre total d'issues** : $4 + 6 = 10$ boules au total.",
                    "**Issues favorables** : 4 boules bleues.",
                    "**Probabilité** : $P(\\text{Bleue}) = \\frac{4}{10} = \\frac{2}{5} = 0,4 = 40\\%$."
                ]
            }
        ],
        "traps": [
            "⚠️ Une probabilité ne peut JAMAIS être supérieure à 1 ni inférieure à 0 !",
            "⚠️ Le hasard n'a pas de mémoire : si un dé donne 6 trois fois de suite, la probabilité d'avoir 6 au coup suivant reste toujours $\\frac{1}{6}$."
        ],
        "flashcards": [
            {"q": "Quelle est la probabilité d'obtenir un 5 sur un dé équilibré à 6 faces ?", "a": "$\\frac{1}{6}$."},
            {"q": "Quelle est la probabilité d'un événement impossible ?", "a": "0."}
        ]
    },
    "5P2": {
        "title": "5P2 : Dépendance entre grandeurs et formules",
        "domain": "Organisation et Gestion de Données",
        "objectives": [
            "Exprimer une grandeur en fonction d'une autre à l'aide d'une formule.",
            "Lire, compléter et interpréter un tableau de valeurs liant deux grandeurs.",
            "Représenter graphiquement une grandeur en fonction d'une autre dans un repère."
        ],
        "keyPoints": [
            {
                "title": "1. Formules littérales et dépendance",
                "content": "Dire qu'une grandeur $y$ dépend d'une grandeur $x$ signifie que la connaissance de $x$ permet de déterminer la valeur de $y$.\nExemples de formules courantes :\n• Périmètre d'un carré : $P = 4c$\n• Distance parcourue à vitesse constante : $d = v \\times t$"
            },
            {
                "title": "2. Tableau de valeurs et graphique",
                "content": "On place en abscisse la grandeur variable choisie ($x$) et en ordonnée la grandeur dépendante ($y$). Les points $(x ; y)$ sont ensuite reliés si la grandeur varie de façon continue."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Utiliser la relation distance-vitesse-temps",
                "example": "Un train roule à la vitesse constante de $120\\text{ km/h}$. Quelle distance parcourt-il en $2\\text{ h } 30\\text{ min}$ ?",
                "steps": [
                    "**Conversion du temps** : $2\\text{ h } 30\\text{ min} = 2,5\\text{ heures}$.",
                    "**Formule** : $d = v \\times t$.",
                    "**Calcul** : $d = 120 \\times 2,5 = 300\\text{ km}$."
                ]
            }
        ],
        "traps": [
            "⚠️ Ne pas écrire $2\\text{ h } 30\\text{ min} = 2,3\\text{ h}$ ! Il faut convertir les minutes en fraction d'heure : $\\frac{30}{60} = 0,5\\text{ h}$, donc $2,5\\text{ h}$.",
            "⚠️ Une relation de dépendance n'est pas obligatoirement une situation de proportionnalité."
        ],
        "flashcards": [
            {"q": "Quelle est la formule liant distance, vitesse et temps ?", "a": "$d = v \\times t$."},
            {"q": "Comment convertir 15 minutes en heure décimale ?", "a": "$\\frac{15}{60} = 0,25\\text{ h}$."}
        ]
    },
    "5A1": {
        "title": "5A1 : Algorithmique et pensée informatique avec Scratch",
        "domain": "Algorithmique et Programmation",
        "objectives": [
            "Décomposer un problème en une suite ordonnée d'instructions (algorithme).",
            "Utiliser les blocs d'action, de déplacement et d'orientation dans Scratch.",
            "Utiliser une boucle bornée (« répéter n fois ») pour tracer des figures régulières.",
            "Calculer l'angle de rotation extérieur pour un polygone régulier : $\\frac{360^\\circ}{n}$."
        ],
        "keyPoints": [
            {
                "title": "1. Les bases de Scratch",
                "content": "• **Lutin** : personnage qui exécute le script sur la scène.\n• **Stylo** : permet de tracer des motifs lors des déplacements (« stylo en position d'écriture »).\n• **Instructions de base** : « avancer de $x$ pas », « tourner à droite de $\\alpha$ degrés »."
            },
            {
                "title": "2. La boucle « Répéter N fois »",
                "content": "Permet de condenser l'écriture lorsqu'une même série d'actions doit être répétée plusieurs fois.\nPour un polygone régulier à $n$ côtés de longueur $L$ :\n• Répéter $n$ fois : avancer de $L$, tourner de $\\frac{360^\\circ}{n}$."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Déterminer l'angle de rotation d'un polygone régulier",
                "example": "Quel angle de rotation faut-il programmer pour tracer un pentagone régulier (5 côtés) ?",
                "steps": [
                    "**Règle** : Pour faire un tour complet et fermer la figure, la somme des rotations extérieures vaut $360^\\circ$.",
                    "**Calcul** : $\\text{Angle} = \\frac{360^\\circ}{5} = 72^\\circ$.",
                    "**Script** : Répéter 5 fois : avancer de $L$, tourner de $72^\\circ$."
                ]
            }
        ],
        "traps": [
            "⚠️ Pour tracer un triangle équilatéral, l'angle de rotation dans Scratch est l'angle **extérieur** ($180^\\circ - 60^\\circ = 120^\\circ$) et non l'angle intérieur de $60^\\circ$ !",
            "⚠️ Bien penser à réinitialiser la position (« aller à x:0, y:0 » et « effacer tout ») au début de chaque script."
        ],
        "flashcards": [
            {"q": "De quel angle doit-on tourner pour tracer un carré dans Scratch ?", "a": "$90^\\circ$ (car $\\frac{360^\\circ}{4} = 90^\\circ$)."},
            {"q": "De quel angle doit-on tourner pour tracer un triangle équilatéral ?", "a": "$120^\\circ$ (car $\\frac{360^\\circ}{3} = 120^\\circ$)."}
        ]
    }
}

# =============================================================================
# 2. EXERCICES SUPPLÉMENTAIRES (5ÈME)
# =============================================================================
EXERCISES_5E_ADD = {
    "5N5": [
        {
            "id": "5N5-1",
            "chapterId": "5N5",
            "tier": 1,
            "title": "Réduction d'écriture littérale",
            "statement": "Réduire l'expression littérale suivante :\n$$A = 4x + 7x$$",
            "type": "exact",
            "answer": "11x",
            "placeholder": "Ex: 11x",
            "hint1": "On met $x$ en facteur : $(4 + 7)x$.",
            "solution": "$$A = (4 + 7)x = 11x$$",
            "skill": "Calculer"
        },
        {
            "id": "5N5-2",
            "chapterId": "5N5",
            "tier": 2,
            "title": "Calcul de la valeur d'une expression",
            "statement": "Calculer la valeur numérique de l'expression $B = 3x - 5$ pour $x = 6$ :",
            "type": "exact",
            "answer": "13",
            "placeholder": "Ex: 13",
            "hint1": "Remplace $x$ par 6 en rétablissant la multiplication : $3 \\times 6 - 5$.",
            "solution": "$$B = 3 \\times 6 - 5 = 18 - 5 = 13$$",
            "skill": "Calculer"
        },
        {
            "id": "5N5-3",
            "chapterId": "5N5",
            "tier": 3,
            "title": "Tester une égalité",
            "statement": "On considère l'égalité $2x + 7 = 19$. Le nombre 6 est-il solution de cette équation ?",
            "type": "mcq",
            "options": [
                "Oui, car $2 \\times 6 + 7 = 12 + 7 = 19$",
                "Non, car $2 \\times 6 + 7 = 26$",
                "Non, car $19 - 7 = 11$",
                "Oui, car $6 + 7 = 13$"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : en remplaçant x par 6, le membre de gauche vaut 19, égal au membre de droite.",
                "Erreur : 2x signifie 2 multiplié par x et non 2 collé à 6.",
                "Erreur de calcul : 19 - 7 = 12.",
                "Erreur d'inattention."
            ],
            "hint1": "Calcule $2 \\times 6 + 7$ et compare avec 19.",
            "solution": "Pour $x = 6$, $2 \\times 6 + 7 = 12 + 7 = 19$. L'égalité est vérifiée, 6 est bien solution.",
            "skill": "Raisonner"
        },
        {
            "id": "5N5-4",
            "chapterId": "5N5",
            "tier": 4,
            "title": "Défi 4ème : Résolution d'équation",
            "statement": "Résoudre l'équation suivante d'inconnue $x$ :\n$$5x = 45$$",
            "type": "exact",
            "answer": "9",
            "placeholder": "Ex: 9",
            "hint1": "Divise les deux côtés de l'égalité par 5.",
            "solution": "$$x = \\frac{45}{5} = 9$$",
            "skill": "Résoudre"
        }
    ],
    "5G1": [
        {
            "id": "5G1-1",
            "chapterId": "5G1",
            "tier": 1,
            "title": "Abscisse sur une droite graduée",
            "statement": "Sur une droite graduée d'origine $O$, le point $A$ a pour abscisse $-4$. Quelle est la distance $OA$ ?",
            "type": "exact",
            "answer": "4",
            "placeholder": "Ex: 4",
            "hint1": "La distance à zéro d'un nombre est toujours positive.",
            "solution": "La distance entre l'origine et le point d'abscisse $-4$ est égale à $4$ unités.",
            "skill": "Représenter"
        },
        {
            "id": "5G1-2",
            "chapterId": "5G1",
            "tier": 2,
            "title": "Lecture de coordonnées dans le plan",
            "statement": "Dans un repère orthogonal, le point $M$ a pour coordonnées $(3 ; -5)$. Quelle est l'ordonnée de ce point ?",
            "type": "exact",
            "answer": "-5",
            "placeholder": "Ex: -5",
            "hint1": "Les coordonnées s'écrivent sous la forme $(\\text{abscisse} ; \\text{ordonnée})$.",
            "solution": "L'abscisse est 3 (axe horizontal) et l'ordonnée est $-5$ (axe vertical).",
            "skill": "Représenter"
        },
        {
            "id": "5G1-3",
            "chapterId": "5G1",
            "tier": 3,
            "title": "Symétrie par rapport aux axes",
            "statement": "Dans un repère orthogonal, le point $A$ a pour coordonnées $(2 ; 5)$. Quelles sont les coordonnées de son symétrique $A'$ par rapport à l'axe des abscisses ?",
            "type": "mcq",
            "options": [
                "(2 ; -5)",
                "(-2 ; 5)",
                "(-2 ; -5)",
                "(5 ; 2)"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : la symétrie par rapport à l'axe des abscisses conserve l'abscisse et change le signe de l'ordonnée.",
                "Ceci est le symétrique par rapport à l'axe des ordonnées.",
                "Ceci est le symétrique par rapport à l'origine.",
                "Ceci est une permutation des coordonnées."
            ],
            "hint1": "Le point reste au même niveau horizontal mais passe de l'autre côté de l'axe des abscisses.",
            "solution": "L'abscisse reste $x = 2$ et l'ordonnée devient l'opposée : $y = -5$, donc $A'(2 ; -5)$.",
            "skill": "Raisonner"
        },
        {
            "id": "5G1-4",
            "chapterId": "5G1",
            "tier": 4,
            "title": "Défi 4ème : Milieu d'un segment",
            "statement": "Dans un repère, on donne $A(2 ; 4)$ et $B(8 ; 10)$. Quelle est l'abscisse du milieu $I$ du segment $[AB]$ ?",
            "type": "exact",
            "answer": "5",
            "placeholder": "Ex: 5",
            "hint1": "L'abscisse du milieu est la moyenne des abscisses : $\\frac{x_A + x_B}{2}$.",
            "solution": "$$x_I = \\frac{2 + 8}{2} = \\frac{10}{2} = 5$$",
            "skill": "Calculer"
        }
    ],
    "5G2": [
        {
            "id": "5G2-1",
            "chapterId": "5G2",
            "tier": 1,
            "title": "Définition de la symétrie centrale",
            "statement": "Si le point $B$ est le symétrique du point $A$ par rapport au point $O$, que peut-on affirmer ?",
            "type": "mcq",
            "options": [
                "Le point O est le milieu du segment [AB]",
                "Le point A est le milieu du segment [OB]",
                "Les droites (AB) et (AO) sont perpendiculaires",
                "Le segment [AB] mesure la moitié de [OA]"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : par définition de la symétrie de centre O, O est le milieu du segment formé par le point et son image.",
                "Faux, c'est O qui est au milieu.",
                "Faux, les points A, O et B sont alignés.",
                "Faux, AB mesure le double de OA."
            ],
            "hint1": "La symétrie centrale est un demi-tour autour du centre O.",
            "solution": "Par définition, $O$ est le milieu du segment $[AB]$.",
            "skill": "Raisonner"
        },
        {
            "id": "5G2-2",
            "chapterId": "5G2",
            "tier": 2,
            "title": "Conservation des longueurs",
            "statement": "Un segment $[AB]$ mesure $7,5\\text{ cm}$. Par la symétrie centrale de centre $O$, quelle est la longueur de son symétrique $[A'B']$ en cm ?",
            "type": "exact",
            "answer": "7.5",
            "placeholder": "Ex: 7.5",
            "hint1": "La symétrie centrale conserve les longueurs.",
            "solution": "La symétrie centrale est une isométrie : elle conserve les distances, donc $A'B' = AB = 7,5\\text{ cm}$.",
            "skill": "Raisonner"
        },
        {
            "id": "5G2-3",
            "chapterId": "5G2",
            "tier": 3,
            "title": "Conservation des angles et des aires",
            "statement": "Un triangle a une aire de $18\\text{ cm}^2$ et possède un angle de $52^\\circ$. Quelles sont l'aire et la mesure de l'angle homologue dans le triangle symétrique ?",
            "type": "mcq",
            "options": [
                "Aire = 18 cm² et angle = 52°",
                "Aire = 36 cm² et angle = 104°",
                "Aire = 9 cm² et angle = 26°",
                "Aire = 18 cm² et angle = 128°"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : la symétrie centrale conserve les angles et les aires.",
                "Faux : il n'y a pas d'agrandissement.",
                "Faux : il n'y a pas de réduction.",
                "Faux : l'angle n'est pas modifié."
            ],
            "hint1": "La symétrie centrale ne déforme pas les figures.",
            "solution": "La symétrie centrale conserve les mesures d'angles et les aires, donc l'aire reste $18\\text{ cm}^2$ et l'angle $52^\\circ$.",
            "skill": "Raisonner"
        },
        {
            "id": "5G2-4",
            "chapterId": "5G2",
            "tier": 4,
            "title": "Défi : Centre de symétrie d'un quadrilatère",
            "statement": "Un quadrilatère possède un centre de symétrie qui est le point d'intersection de ses diagonales. Il s'agit obligatoirement d'un...",
            "type": "mcq",
            "options": [
                "Parallélogramme",
                "Trapèze quelconque",
                "Cerf-volant",
                "Triangle"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : tout quadrilatère ayant un centre de symétrie est un parallélogramme.",
                "Un trapèze n'a pas de centre de symétrie en général.",
                "Un cerf-volant a un axe de symétrie mais pas de centre.",
                "Un triangle n'a pas 4 côtés."
            ],
            "hint1": "Les côtés opposés sont symétriques et donc parallèles et de même longueur.",
            "solution": "Un quadrilatère qui admet un centre de symétrie est un parallélogramme.",
            "skill": "Raisonner"
        }
    ],
    "5G5": [
        {
            "id": "5G5-1",
            "chapterId": "5G5",
            "tier": 1,
            "title": "Propriété des côtés d'un parallélogramme",
            "statement": "Dans un parallélogramme $ABCD$, on sait que $AB = 9\\text{ cm}$ et $BC = 5\\text{ cm}$. Quelle est la longueur du côté $CD$ en cm ?",
            "type": "exact",
            "answer": "9",
            "placeholder": "Ex: 9",
            "hint1": "Dans un parallélogramme, les côtés opposés ont la même longueur.",
            "solution": "Les côtés opposés $[AB]$ et $[CD]$ ont la même longueur, donc $CD = AB = 9\\text{ cm}$.",
            "skill": "Calculer"
        },
        {
            "id": "5G5-2",
            "chapterId": "5G5",
            "tier": 2,
            "title": "Aire d'un parallélogramme",
            "statement": "Calculer l'aire d'un parallélogramme de base $b = 8\\text{ cm}$ et de hauteur relative $h = 4,5\\text{ cm}$ en $\\text{cm}^2$ :",
            "type": "exact",
            "answer": "36",
            "placeholder": "Ex: 36",
            "hint1": "Formule : $\\text{Aire} = \\text{base} \\times \\text{hauteur}$.",
            "solution": "$$\\text{Aire} = 8 \\times 4,5 = 36\\text{ cm}^2$$",
            "skill": "Calculer"
        },
        {
            "id": "5G5-3",
            "chapterId": "5G5",
            "tier": 3,
            "title": "Reconnaître un losange",
            "statement": "Un parallélogramme dont les diagonales sont perpendiculaires est un...",
            "type": "mcq",
            "options": [
                "Losange",
                "Rectangle",
                "Trapèze",
                "Cône"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : les diagonales perpendiculaires caractérisent le losange parmi les parallélogrammes.",
                "Le rectangle a des diagonales de même longueur.",
                "Un trapèze n'est pas forcément un parallélogramme.",
                "Un cône est un solide 3D."
            ],
            "hint1": "Pense aux propriétés des diagonales du losange.",
            "solution": "Si un parallélogramme a ses diagonales perpendiculaires, alors c'est un losange.",
            "skill": "Raisonner"
        },
        {
            "id": "5G5-4",
            "chapterId": "5G5",
            "tier": 4,
            "title": "Défi : Diagonales du rectangle et cercle",
            "statement": "Dans un rectangle $ABCD$ de centre $O$, la diagonale $[AC]$ mesure $10\\text{ cm}$. Que vaut la longueur $OB$ en cm ?",
            "type": "exact",
            "answer": "5",
            "placeholder": "Ex: 5",
            "hint1": "Les diagonales d'un rectangle ont la même longueur et se coupent en leur milieu.",
            "solution": "Les diagonales ont même longueur ($BD = AC = 10\\text{ cm}$) et se coupent en leur milieu $O$, donc $OB = \\frac{10}{2} = 5\\text{ cm}$.",
            "skill": "Calculer"
        }
    ],
    "5D2": [
        {
            "id": "5D2-1",
            "chapterId": "5D2",
            "tier": 1,
            "title": "Probabilité élémentaire avec un dé",
            "statement": "On lance un dé équilibré à 6 faces numérotées de 1 à 6. Quelle est la probabilité d'obtenir le chiffre 4 ?",
            "type": "mcq",
            "options": [
                "1/6",
                "4/6",
                "1/4",
                "1/2"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : il y a 1 face avec le 4 sur 6 faces au total.",
                "Erreur : 4 est la valeur sur la face, pas le nombre d'issues favorables.",
                "Erreur de dénominateur.",
                "Erreur."
            ],
            "hint1": "Une seule face porte le chiffre 4 sur un total de 6 faces.",
            "solution": "$$P(4) = \\frac{1}{6}$$",
            "skill": "Calculer"
        },
        {
            "id": "5D2-2",
            "chapterId": "5D2",
            "tier": 2,
            "title": "Tirage dans une urne",
            "statement": "Une boîte contient 3 jetons rouges, 5 jetons verts et 2 jetons jaunes. On tire un jeton au hasard. Quelle est la probabilité de tirer un jeton vert sous forme décimale ?",
            "type": "exact",
            "answer": "0.5",
            "placeholder": "Ex: 0.5",
            "hint1": "Nombre total de jetons : $3 + 5 + 2 = 10$.",
            "solution": "$$P(\\text{Vert}) = \\frac{5}{10} = 0,5$$",
            "skill": "Calculer"
        },
        {
            "id": "5D2-3",
            "chapterId": "5D2",
            "tier": 3,
            "title": "Événement certain et impossible",
            "statement": "On lance un dé à 6 faces numérotées de 1 à 6. Quelle est la probabilité d'obtenir un nombre strictement supérieur à 6 ?",
            "type": "exact",
            "answer": "0",
            "placeholder": "Ex: 0",
            "hint1": "C'est un événement impossible.",
            "solution": "Aucune face ne porte un nombre supérieur à 6, c'est un événement impossible : $P = 0$.",
            "skill": "Raisonner"
        },
        {
            "id": "5D2-4",
            "chapterId": "5D2",
            "tier": 4,
            "title": "Défi 4ème : Nombre pair sur un dé",
            "statement": "On lance un dé équilibré à 6 faces. Quelle est la probabilité en pourcentage d'obtenir un nombre pair (2, 4 ou 6) ?",
            "type": "exact",
            "answer": "50",
            "placeholder": "Ex: 50",
            "hint1": "Il y a 3 issues paires sur 6 au total : $\\frac{3}{6} = \\frac{1}{2}$.",
            "solution": "$$P(\\text{Pair}) = \\frac{3}{6} = 0,5 = 50\\%$$",
            "skill": "Calculer"
        }
    ],
    "5P2": [
        {
            "id": "5P2-1",
            "chapterId": "5P2",
            "tier": 1,
            "title": "Calcul de distance à vitesse constante",
            "statement": "Un cycliste roule à la vitesse constante de $20\\text{ km/h}$. Quelle distance en km parcourt-il en $3\\text{ heures}$ ?",
            "type": "exact",
            "answer": "60",
            "placeholder": "Ex: 60",
            "hint1": "Formule : $d = v \\times t$.",
            "solution": "$$d = 20 \\times 3 = 60\\text{ km}$$",
            "skill": "Calculer"
        },
        {
            "id": "5P2-2",
            "chapterId": "5P2",
            "tier": 2,
            "title": "Périmètre d'un rectangle en fonction de sa longueur",
            "statement": "Un rectangle a une largeur fixe de $4\\text{ cm}$ et une longueur notée $L$. Quelle est l'expression de son périmètre en fonction de $L$ ?",
            "type": "mcq",
            "options": [
                "2L + 8",
                "4L",
                "L + 8",
                "2L + 4"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : $P = 2 \\times (L + 4) = 2L + 8$.",
                "Ceci est l'aire.",
                "Erreur de formule de périmètre.",
                "Erreur de distributivité."
            ],
            "hint1": "Le périmètre est $2 \\times (\\text{longueur} + \\text{largeur})$.",
            "solution": "$$P = 2 \\times (L + 4) = 2L + 8$$",
            "skill": "Modéliser"
        },
        {
            "id": "5P2-3",
            "chapterId": "5P2",
            "tier": 3,
            "title": "Tarif avec partie fixe et variable",
            "statement": "Un artisan facture un forfait fixe de déplacement de $30\\text{ €}$ plus $25\\text{ €}$ par heure travaillée $t$. Quel est le montant de la facture en € pour une intervention de $4\\text{ heures}$ ?",
            "type": "exact",
            "answer": "130",
            "placeholder": "Ex: 130",
            "hint1": "Prix $= 30 + 25 \\times t$.",
            "solution": "$$\\text{Prix} = 30 + 25 \\times 4 = 30 + 100 = 130\\text{ €}$$",
            "skill": "Calculer"
        },
        {
            "id": "5P2-4",
            "chapterId": "5P2",
            "tier": 4,
            "title": "Défi : Vitesse moyenne avec conversion",
            "statement": "Une voiture parcourt $45\\text{ km}$ en $30\\text{ minutes}$. Quelle est sa vitesse moyenne en $\\text{km/h}$ ?",
            "type": "exact",
            "answer": "90",
            "placeholder": "Ex: 90",
            "hint1": "30 minutes correspondent à 0,5 heure. $v = \\frac{d}{t}$.",
            "solution": "$$v = \\frac{45}{0,5} = 90\\text{ km/h}$$",
            "skill": "Calculer"
        }
    ],
    "5A1": [
        {
            "id": "5A1-1",
            "chapterId": "5A1",
            "tier": 1,
            "title": "Tracé d'un carré dans Scratch",
            "statement": "Dans Scratch, pour tracer un carré avec une boucle « répéter 4 fois : avancer de 50, tourner de ... degrés », de quel angle doit-on tourner ?",
            "type": "exact",
            "answer": "90",
            "placeholder": "Ex: 90",
            "hint1": "La somme des 4 rotations fait $360^\\circ$.",
            "solution": "$$\\text{Angle} = \\frac{360^\\circ}{4} = 90^\\circ$$",
            "skill": "Représenter"
        },
        {
            "id": "5A1-2",
            "chapterId": "5A1",
            "tier": 2,
            "title": "Distance totale parcourue",
            "statement": "Un lutin exécute le script : « répéter 6 fois : avancer de 15 pas ». Quelle distance totale en pas a-t-il parcourue ?",
            "type": "exact",
            "answer": "90",
            "placeholder": "Ex: 90",
            "hint1": "Multiplie le nombre de répétitions par le nombre de pas.",
            "solution": "$$6 \\times 15 = 90\\text{ pas}$$",
            "skill": "Calculer"
        },
        {
            "id": "5A1-3",
            "chapterId": "5A1",
            "tier": 3,
            "title": "Triangle équilatéral dans Scratch",
            "statement": "Pour faire tracer un triangle équilatéral à un lutin avec le bloc « répéter 3 fois », quel doit être l'angle de rotation extérieur en degrés ?",
            "type": "exact",
            "answer": "120",
            "placeholder": "Ex: 120",
            "hint1": "Attention : l'angle extérieur vaut $\\frac{360^\\circ}{3}$.",
            "solution": "$$\\text{Angle} = \\frac{360^\\circ}{3} = 120^\\circ$$",
            "skill": "Raisonner"
        },
        {
            "id": "5A1-4",
            "chapterId": "5A1",
            "tier": 4,
            "title": "Défi : Reconnaissance de polygone régulier",
            "statement": "Quel polygone régulier le lutin trace-t-il avec ce script : « répéter 6 fois : avancer de 40, tourner de 60 degrés » ?",
            "type": "mcq",
            "options": [
                "Un hexagone régulier (6 côtés)",
                "Un octogone régulier (8 côtés)",
                "Un pentagone régulier (5 côtés)",
                "Un carré (4 côtés)"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : la boucle est répétée 6 fois et $6 \\times 60^\\circ = 360^\\circ$, c'est un hexagone régulier.",
                "Un octogone nécessiterait 8 répétitions.",
                "Un pentagone a 5 côtés.",
                "Un carré a 4 côtés."
            ],
            "hint1": "Compte le nombre de répétitions de la boucle.",
            "solution": "Le script effectue 6 côtés identiques et 6 rotations de $60^\\circ$, il s'agit d'un hexagone régulier.",
            "skill": "Raisonner"
        }
    ]
}

# =============================================================================
# 3. DONNÉES DE COURS SUPPLÉMENTAIRES (4ÈME)
# =============================================================================
COURSES_4E_ADD = {
    "4G2": {
        "title": "4G2 : Triangle rectangle, cercle circonscrit et droite des milieux",
        "domain": "Espace et Géométrie",
        "objectives": [
            "Caractériser le triangle rectangle par son cercle circonscrit (hypoténuse = diamètre).",
            "Utiliser la médiane issue de l'angle droit ($AM = \\frac{BC}{2}$).",
            "Appliquer le théorème de la droite des milieux dans un triangle."
        ],
        "keyPoints": [
            {
                "title": "1. Triangle rectangle et cercle circonscrit",
                "content": "• **Propriété directe** : Si un triangle est rectangle, alors son cercle circonscrit a pour diamètre son hypoténuse. Le centre du cercle est le milieu de l'hypoténuse.\n• **Réciproque** : Si un triangle est inscrit dans un cercle ayant pour diamètre l'un de ses côtés, alors ce triangle est rectangle (l'hypoténuse est ce diamètre)."
            },
            {
                "title": "2. Médiane issue de l'angle droit",
                "content": "Dans un triangle $ABC$ rectangle en $A$, la médiane $[AM]$ relative à l'hypoténuse $[BC]$ a pour longueur la moitié de l'hypoténuse :\n$$AM = \\frac{BC}{2}$$"
            },
            {
                "title": "3. Théorème de la droite des milieux",
                "content": "Dans un triangle, le segment qui joint les milieux de deux côtés est parallèle au troisième côté et sa longueur est égale à la **moitié** de celle du troisième côté :\n$$MN = \\frac{1}{2} BC$$"
            }
        ],
        "methods": [
            {
                "title": "Méthode : Démontrer qu'un triangle est rectangle avec un cercle",
                "example": "Le triangle $EFG$ est inscrit dans un cercle de diamètre $[EF]$. Démontrer qu'il est rectangle.",
                "steps": [
                    "**Données** : Le triangle $EFG$ est inscrit dans le cercle de diamètre $[EF]$.",
                    "**Propriété** : Si un triangle est inscrit dans un cercle dont un diamètre est l'un de ses côtés, alors il est rectangle.",
                    "**Conclusion** : Donc $EFG$ est un triangle rectangle en $G$."
                ]
            }
        ],
        "traps": [
            "⚠️ Le sommet de l'angle droit est TOUJOURS le point qui n'appartient pas au diamètre !",
            "⚠️ La droite des milieux ne s'applique que si l'on sait au départ que les points sont les milieux."
        ],
        "flashcards": [
            {"q": "Où se situe le centre du cercle circonscrit à un triangle rectangle ?", "a": "Au milieu de son hypoténuse."},
            {"q": "Dans un triangle rectangle d'hypoténuse 12 cm, que vaut la médiane issue de l'angle droit ?", "a": "$\\frac{12}{2} = 6\\text{ cm}$."}
        ]
    },
    "4G3": {
        "title": "4G3 : Translations et transformations du plan",
        "domain": "Espace et Géométrie",
        "objectives": [
            "Comprendre la notion de translation (glissement sans déformation ni rotation).",
            "Caractériser une translation par sa direction, son sens et sa longueur (vecteur).",
            "Construire l'image d'une figure par une translation et utiliser ses propriétés de conservation."
        ],
        "keyPoints": [
            {
                "title": "1. Définition de la translation",
                "content": "La translation qui transforme $A$ en $B$ associe à tout point $C$ le point $D$ tel que le quadrilatère $ABDC$ soit un **parallélogramme** (éventuellement aplati).\nElle correspond à un glissement caractérisé par :\n• Une **direction** (la droite $(AB)$),\n• Un **sens** (de $A$ vers $B$),\n• Une **longueur** (la distance $AB$)."
            },
            {
                "title": "2. Propriétés de conservation",
                "content": "La translation conserve les longueurs, les mesures d'angles, les aires, l'alignement et le parallélisme. La figure image est superposable à la figure d'origine."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Construire l'image d'un point par translation",
                "example": "Construire le point $D$, image de $C$ par la translation qui transforme $A$ en $B$.",
                "steps": [
                    "On trace la parallèle à $(AB)$ passant par $C$.",
                    "Sur cette droite, on reporte la distance $AB$ à partir de $C$ dans le même sens que de $A$ vers $B$.",
                    "On vérifie que $ABDC$ forme un parallélogramme."
                ]
            }
        ],
        "traps": [
            "⚠️ Attention à l'ordre des sommets du parallélogramme : si la translation envoie $A$ sur $B$ et $C$ sur $D$, le parallélogramme est $ABDC$ (et non $ABCD$) !",
            "⚠️ Ne pas confondre la direction (la pente de la droite) et le sens (vers le haut, vers le bas...)."
        ],
        "flashcards": [
            {"q": "Quels sont les 3 éléments qui définissent une translation ?", "a": "Une direction, un sens et une longueur."},
            {"q": "Une translation modifie-t-elle l'aire d'une figure ?", "a": "Non, elle conserve parfaitement les aires."}
        ]
    },
    "4G4": {
        "title": "4G4 : Espace : pyramides, cônes de révolution et volumes",
        "domain": "Espace et Géométrie",
        "objectives": [
            "Identifier et décrire une pyramide (sommet, base polygonale, faces latérales triangulaires).",
            "Identifier et décrire un cône de révolution (sommet, base circulaire, génératrice).",
            "Calculer le volume d'une pyramide et d'un cône : $V = \\frac{1}{3} B \\times h$."
        ],
        "keyPoints": [
            {
                "title": "1. Pyramide",
                "content": "Une pyramide est un polyèdre dont une face est un polygone (la base) et dont les autres faces sont des triangles ayant un sommet commun (le sommet de la pyramide). La hauteur est le segment perpendiculaire à la base issu du sommet."
            },
            {
                "title": "2. Cône de révolution",
                "content": "Un cône de révolution est obtenu en faisant tourner un triangle rectangle autour d'un des côtés de l'angle droit. Sa base est un disque de rayon $R$ et sa hauteur $h$ est perpendiculaire à la base."
            },
            {
                "title": "3. Formule du volume (Pyramide et Cône)",
                "content": "$$V = \\frac{1}{3} \\times \\text{Aire de la base} \\times \\text{hauteur} = \\frac{B \\times h}{3}$$\nPour le cône de base de rayon $R$ :\n$$V = \\frac{1}{3} \\times \\pi R^2 \\times h$$"
            }
        ],
        "methods": [
            {
                "title": "Méthode : Calculer le volume d'une pyramide",
                "example": "Calculer le volume d'une pyramide de hauteur $h = 6\\text{ cm}$ dont la base est un rectangle de $5\\text{ cm}$ sur $4\\text{ cm}$.",
                "steps": [
                    "**Aire de la base** : $B = 5 \\times 4 = 20\\text{ cm}^2$.",
                    "**Volume** : $V = \\frac{1}{3} \\times B \\times h = \\frac{1}{3} \\times 20 \\times 6 = \\frac{120}{3} = 40\\text{ cm}^3$."
                ]
            }
        ],
        "traps": [
            "⚠️ Ne pas oublier le facteur $\\frac{1}{3}$ ! Le volume d'une pyramide est trois fois plus petit que celui d'un prisme de même base et même hauteur.",
            "⚠️ La hauteur doit être perpendiculaire à la base (ce n'est pas la longueur d'une arête latérale)."
        ],
        "flashcards": [
            {"q": "Quelle est la formule du volume d'une pyramide ?", "a": "$V = \\frac{1}{3} \\times B \\times h$."},
            {"q": "Que vaut le volume d'un cône de base d'aire 30 cm² et de hauteur 5 cm ?", "a": "$\\frac{30 \\times 5}{3} = 50\\text{ cm}^3$."}
        ]
    },
    "4D2": {
        "title": "4D2 : Probabilités : événements contraires et 2 épreuves",
        "domain": "Organisation et Gestion de Données",
        "objectives": [
            "Définir l'événement contraire $\\bar{A}$ (« non $A$ ») et utiliser la formule $P(\\bar{A}) = 1 - P(A)$.",
            "Représenter des expériences aléatoires à deux épreuves à l'aide d'un arbre ou d'un tableau.",
            "Calculer des probabilités à deux épreuves par le principe multiplicatif."
        ],
        "keyPoints": [
            {
                "title": "1. Événement contraire",
                "content": "L'événement contraire de $A$, noté $\\bar{A}$ ou « non $A$ », est l'événement qui se réalise lorsque $A$ ne se réalise pas. Ses issues sont toutes celles qui ne sont pas dans $A$.\n$$\\mathbf{P(\\bar{A}) = 1 - P(A)}$$"
            },
            {
                "title": "2. Expérience à deux épreuves et arbres",
                "content": "Dans un arbre de probabilités :\n• La somme des probabilités des branches issues d'un même nœud est égale à 1.\n• La probabilité d'une issue composée est le produit des probabilités rencontrées le long du chemin."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Utiliser l'événement contraire",
                "example": "La probabilité de tirer une carte de cœur dans un jeu est $P(C) = \\frac{1}{4}$. Quelle est la probabilité de ne pas tirer de cœur ?",
                "steps": [
                    "**Formule** : $P(\\bar{C}) = 1 - P(C)$.",
                    "**Calcul** : $P(\\bar{C}) = 1 - \\frac{1}{4} = \\frac{3}{4} = 0,75 = 75\\%$."
                ]
            }
        ],
        "traps": [
            "⚠️ Le contraire de « au moins un » est « aucun » (et non « au plus un ») !",
            "⚠️ Dans un arbre, on multiplie les probabilités le long d'un chemin, on ne les additionne pas."
        ],
        "flashcards": [
            {"q": "Si $P(A) = 0,28$, que vaut $P(\\text{non } A)$ ?", "a": "$1 - 0,28 = 0,72$."},
            {"q": "Que vaut la somme de toutes les probabilités des issues d'une expérience ?", "a": "Exactement 1."}
        ]
    },
    "4P1": {
        "title": "4P1 : Proportionnalité, ratios et pourcentages",
        "domain": "Organisation et Gestion de Données",
        "objectives": [
            "Comprendre et utiliser la notion de ratio ($a : b$ ou $a : b : c$).",
            "Partager une quantité selon un ratio donné.",
            "Appliquer des pourcentages d'augmentation et de réduction avec coefficients multiplicateurs."
        ],
        "keyPoints": [
            {
                "title": "1. Notion de ratio",
                "content": "Deux nombres $x$ et $y$ sont dans le ratio $a : b$ (se lit « dans le ratio a pour b ») si :\n$$\\frac{x}{a} = \\frac{y}{b}$$\nPour partager une somme totale $S$ dans le ratio $a : b$, on calcule la valeur d'une part : $\\frac{S}{a + b}$, puis on multiplie par $a$ et par $b$."
            },
            {
                "title": "2. Pourcentages et coefficients",
                "content": "• Augmenter de $t\\%$ revient à multiplier par $(1 + \\frac{t}{100})$.\n• Diminuer de $t\\%$ revient à multiplier par $(1 - \\frac{t}{100})$."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Partager une somme selon un ratio",
                "example": "Partager $120\\text{ €}$ entre Léo et Maya dans le ratio $2 : 3$.",
                "steps": [
                    "**Nombre de parts** : $2 + 3 = 5$ parts au total.",
                    "**Valeur d'une part** : $\\frac{120}{5} = 24\\text{ €}$.",
                    "**Part de Léo** : $2 \\times 24 = 48\\text{ €}$.",
                    "**Part de Maya** : $3 \\times 24 = 72\\text{ €}$. (Vérification : $48 + 72 = 120$)."
                ]
            }
        ],
        "traps": [
            "⚠️ Dans un ratio $2 : 3$, il y a 5 parts au total (et non 2 ou 3) !",
            "⚠️ Une hausse de 20% suivie d'une baisse de 20% ne redonne PAS le prix initial : $1,20 \\times 0,80 = 0,96$ (baisse de 4%)."
        ],
        "flashcards": [
            {"q": "Combien de parts au total dans le ratio 3 : 4 : 5 ?", "a": "$3 + 4 + 5 = 12$ parts."},
            {"q": "Par quel nombre multiplie-t-on pour une augmentation de 15% ?", "a": "$1 + \\frac{15}{100} = 1,15$."}
        ]
    },
    "4P2": {
        "title": "4P2 : Notion de fonction et programmes de calcul",
        "domain": "Organisation et Gestion de Données",
        "objectives": [
            "Comprendre la notion de fonction comme un processus qui à un nombre associe un unique résultat.",
            "Utiliser le vocabulaire et les notations : $f : x \\mapsto f(x)$, image et antécédent.",
            "Traduire un programme de calcul par une formule littérale."
        ],
        "keyPoints": [
            {
                "title": "1. Définition et notations",
                "content": "Une fonction $f$ est une « machine » mathématique qui prend un nombre $x$ en entrée et renvoie un nombre $f(x)$ en sortie :\n• $f(x)$ est l'**image** de $x$ par $f$.\n• $x$ est un **antécédent** de $f(x)$ par $f$."
            },
            {
                "title": "2. Image et antécédent",
                "content": "L'égalité $f(3) = 7$ se lit :\n• « L'image de 3 par $f$ est 7 » (calcul direct : on remplace $x$ par 3).\n• « 3 est un antécédent de 7 par $f$ » (résolution d'équation : $f(x) = 7$)."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Calculer une image",
                "example": "Soit la fonction $f(x) = 4x - 9$. Calculer l'image de 5.",
                "steps": [
                    "On remplace $x$ par 5 dans l'expression de $f(x)$ :",
                    "$f(5) = 4 \\times 5 - 9 = 20 - 9 = 11$.",
                    "L'image de 5 par $f$ est 11."
                ]
            }
        ],
        "traps": [
            "⚠️ Ne pas confondre image (résultat obtenu en sortie) et antécédent (valeur de départ) !",
            "⚠️ Un nombre a une UNIQUE image, mais peut avoir PLUSIEURS antécédents (ex: $x^2 = 9$ a pour antécédents 3 et -3)."
        ],
        "flashcards": [
            {"q": "Si $f(2) = 8$, qui est l'image et qui est l'antécédent ?", "a": "8 est l'image de 2, et 2 est un antécédent de 8."},
            {"q": "Quelle est l'image de 3 par la fonction $f(x) = 2x + 1$ ?", "a": "$2 \\times 3 + 1 = 7$."}
        ]
    },
    "4A1": {
        "title": "4A1 : Algorithmique : conditions et variables Scratch",
        "domain": "Algorithmique et Programmation",
        "objectives": [
            "Créer et manipuler des variables informatiques dans Scratch pour stocker des valeurs.",
            "Utiliser l'instruction conditionnelle « Si <condition> alors ... sinon ... ».",
            "Programmer et tester des conditions logiques et des programmes de calcul."
        ],
        "keyPoints": [
            {
                "title": "1. Les variables dans Scratch",
                "content": "Une **variable** est une case mémoire étiquetée qui stocke une valeur modifiable au cours de l'exécution du programme :\n• « Mettre [variable] à [valeur] » (affectation),\n• « Ajouter [x] à [variable] » (incrémentation)."
            },
            {
                "title": "2. Le bloc conditionnel « Si ... alors ... sinon »",
                "content": "Permet d'orienter le déroulement du script selon qu'une condition logique est vraie ou fausse :\n• Si la condition est VRAIE, le bloc « alors » est exécuté.\n• Si elle est FAUSSE, le bloc « sinon » est exécuté."
            }
        ],
        "methods": [
            {
                "title": "Méthode : Dérouler un algorithme avec variable",
                "example": "Mettre X à 5. Ajouter 3 à X. Mettre X à X * 2. Quelle est la valeur de X ?",
                "steps": [
                    "**Initialisation** : $X = 5$.",
                    "**Incrémentation** : $X = 5 + 3 = 8$.",
                    "**Multiplication** : $X = 8 \\times 2 = 16$.",
                    "La valeur finale de la variable $X$ est 16."
                ]
            }
        ],
        "traps": [
            "⚠️ Le bloc « ajouter 1 à X » augmente la variable, alors que « mettre X à 1 » écrase son ancienne valeur !",
            "⚠️ Respecter scrupuleusement l'ordre chronologique des instructions pas à pas."
        ],
        "flashcards": [
            {"q": "Quelle est la différence entre « mettre x à 5 » et « ajouter 5 à x » ?", "a": "« Mettre » donne la valeur 5, « ajouter » additionne 5 à la valeur actuelle."},
            {"q": "À quoi sert le bloc « Si ... alors ... sinon » ?", "a": "À exécuter des instructions différentes selon qu'une condition est vraie ou fausse."}
        ]
    }
}

# =============================================================================
# 4. EXERCICES SUPPLÉMENTAIRES (4ÈME)
# =============================================================================
EXERCISES_4E_ADD = {
    "4G2": [
        {
            "id": "4G2-1",
            "chapterId": "4G2",
            "tier": 1,
            "title": "Rayon du cercle circonscrit à un triangle rectangle",
            "statement": "Un triangle rectangle a une hypoténuse mesurant $16\\text{ cm}$. Quel est le rayon de son cercle circonscrit en cm ?",
            "type": "exact",
            "answer": "8",
            "placeholder": "Ex: 8",
            "hint1": "Le centre du cercle circonscrit est le milieu de l'hypoténuse, donc le rayon vaut la moitié de l'hypoténuse.",
            "solution": "$$R = \\frac{\\text{Hypoténuse}}{2} = \\frac{16}{2} = 8\\text{ cm}$$",
            "skill": "Calculer"
        },
        {
            "id": "4G2-2",
            "chapterId": "4G2",
            "tier": 2,
            "title": "Longueur de la médiane issue de l'angle droit",
            "statement": "Dans un triangle $ABC$ rectangle en $A$, on donne $BC = 13\\text{ cm}$. La médiane issue du sommet $A$ coupe $[BC]$ en $M$. Quelle est la longueur $AM$ en cm ?",
            "type": "exact",
            "answer": "6.5",
            "placeholder": "Ex: 6.5",
            "hint1": "Dans un triangle rectangle, la médiane relative à l'hypoténuse mesure la moitié de l'hypoténuse.",
            "solution": "$$AM = \\frac{BC}{2} = \\frac{13}{2} = 6,5\\text{ cm}$$",
            "skill": "Calculer"
        },
        {
            "id": "4G2-3",
            "chapterId": "4G2",
            "tier": 3,
            "title": "Théorème de la droite des milieux",
            "statement": "Dans un triangle $ABC$, $I$ est le milieu de $[AB]$ et $J$ est le milieu de $[AC]$. Sachant que $BC = 18\\text{ cm}$, quelle est la longueur du segment $[IJ]$ en cm ?",
            "type": "exact",
            "answer": "9",
            "placeholder": "Ex: 9",
            "hint1": "D'après le théorème des milieux, la droite des milieux mesure la moitié du 3ème côté.",
            "solution": "$$IJ = \\frac{BC}{2} = \\frac{18}{2} = 9\\text{ cm}$$",
            "skill": "Calculer"
        },
        {
            "id": "4G2-4",
            "chapterId": "4G2",
            "tier": 4,
            "title": "Défi : Démontrer qu'un triangle est rectangle",
            "statement": "Le triangle $RST$ est inscrit dans un cercle ayant pour diamètre le segment $[RS]$. Que peut-on affirmer avec certitude ?",
            "type": "mcq",
            "options": [
                "Le triangle RST est rectangle en T",
                "Le triangle RST est équilatéral",
                "Le triangle RST est rectangle en R",
                "Le point T est le centre du cercle"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : un triangle inscrit dans un cercle dont un côté est le diamètre est rectangle au sommet opposé.",
                "Rien n'indique que ses trois côtés sont égaux.",
                "L'angle droit est au sommet opposé au diamètre, c'est-à-dire en T.",
                "Le centre est le milieu de [RS], pas T."
            ],
            "hint1": "Le sommet opposé au diamètre est le sommet de l'angle droit.",
            "solution": "Comme $[RS]$ est un diamètre du cercle circonscrit, le triangle $RST$ est rectangle en $T$.",
            "skill": "Raisonner"
        }
    ],
    "4G3": [
        {
            "id": "4G3-1",
            "chapterId": "4G3",
            "tier": 1,
            "title": "Conservation des distances par translation",
            "statement": "Par la translation qui transforme le point $A$ en $B$, l'image d'un segment $[EF]$ de longueur $8,4\\text{ cm}$ mesure en cm :",
            "type": "exact",
            "answer": "8.4",
            "placeholder": "Ex: 8.4",
            "hint1": "La translation est un glissement qui conserve les longueurs.",
            "solution": "La translation conserve les distances, donc $E'F' = EF = 8,4\\text{ cm}$.",
            "skill": "Raisonner"
        },
        {
            "id": "4G3-2",
            "chapterId": "4G3",
            "tier": 2,
            "title": "Nature du quadrilatère formé",
            "statement": "Si le point $D$ est l'image du point $C$ par la translation qui transforme $A$ en $B$, quelle est la nature du quadrilatère $ABDC$ ?",
            "type": "mcq",
            "options": [
                "Un parallélogramme",
                "Un losange",
                "Un trapèze quelconque",
                "Un rectangle"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : par définition de la translation, ABDC est un parallélogramme.",
                "Il faudrait que AB = AC, ce qui n'est pas précisé.",
                "Faux, ses côtés opposés sont parallèles.",
                "Il faudrait un angle droit, ce qui n'est pas garanti."
            ],
            "hint1": "Les segments $[AB]$ et $[CD]$ ont même direction, même sens et même longueur.",
            "solution": "Par définition de la translation, $ABDC$ est un parallélogramme.",
            "skill": "Raisonner"
        },
        {
            "id": "4G3-3",
            "chapterId": "4G3",
            "tier": 3,
            "title": "Image d'une figure géométrique",
            "statement": "Un cercle de rayon $5\\text{ cm}$ et de centre $O$ a pour image par une translation un cercle de centre $O'$. Quel est le rayon du cercle image en cm ?",
            "type": "exact",
            "answer": "5",
            "placeholder": "Ex: 5",
            "hint1": "La translation conserve les dimensions des figures.",
            "solution": "La translation conserve les rayons des cercles, donc le rayon reste de $5\\text{ cm}$.",
            "skill": "Raisonner"
        },
        {
            "id": "4G3-4",
            "chapterId": "4G3",
            "tier": 4,
            "title": "Défi : Translation et repère",
            "statement": "Dans un repère, la translation transforme l'origine $O(0;0)$ en $T(3;4)$. Quelles sont les coordonnées de l'image du point $M(2;1)$ ?",
            "type": "mcq",
            "options": [
                "(5 ; 5)",
                "(1 ; 3)",
                "(6 ; 4)",
                "(-1 ; -3)"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : on ajoute 3 à l'abscisse (2 + 3 = 5) et 4 à l'ordonnée (1 + 4 = 5).",
                "Erreur de soustraction au lieu d'addition.",
                "Erreur de calcul.",
                "Erreur."
            ],
            "hint1": "Ajoute les composantes du déplacement (3 en x, 4 en y) aux coordonnées de M.",
            "solution": "$$x' = 2 + 3 = 5 \\quad \\text{et} \\quad y' = 1 + 4 = 5 \\implies M'(5 ; 5)$$",
            "skill": "Calculer"
        }
    ],
    "4D2": [
        {
            "id": "4D2-1",
            "chapterId": "4D2",
            "tier": 1,
            "title": "Calcul de l'événement contraire",
            "statement": "La probabilité qu'il pleuve demain est estimée à $P(E) = 0,35$. Quelle est la probabilité qu'il ne pleuve pas demain ?",
            "type": "exact",
            "answer": "0.65",
            "placeholder": "Ex: 0.65",
            "hint1": "Formule de l'événement contraire : $P(\\bar{E}) = 1 - P(E)$.",
            "solution": "$$P(\\bar{E}) = 1 - 0,35 = 0,65$$",
            "skill": "Calculer"
        },
        {
            "id": "4D2-2",
            "chapterId": "4D2",
            "tier": 2,
            "title": "Tirage sans succès",
            "statement": "Une tombola contient 200 billets, dont 20 sont gagnants. Quelle est la probabilité de tirer un billet perdant sous forme décimale ?",
            "type": "exact",
            "answer": "0.9",
            "placeholder": "Ex: 0.9",
            "hint1": "Nombre de billets perdants : $200 - 20 = 180$. Ou $1 - \\frac{20}{200}$.",
            "solution": "$$P(\\text{Perdant}) = 1 - \\frac{20}{200} = 1 - 0,1 = 0,9$$",
            "skill": "Calculer"
        },
        {
            "id": "4D2-3",
            "chapterId": "4D2",
            "tier": 3,
            "title": "Expérience à deux épreuves (pièces)",
            "statement": "On lance deux pièces de monnaie équilibrées consécutivement. Quelle est la probabilité d'obtenir deux fois « Pile » ?",
            "type": "mcq",
            "options": [
                "1/4",
                "1/2",
                "2/4",
                "1/3"
            ],
            "correctIndex": 0,
            "explanations": [
                "Exact : les 4 issues équiprobables sont (P,P), (P,F), (F,P), (F,F). P(P,P) = 1/4 = 0,25.",
                "Erreur fréquente : 1/2 est la probabilité pour une seule pièce.",
                "2/4 = 1/2.",
                "Erreur de dénombrement."
            ],
            "hint1": "Dresse la liste des 4 issues possibles : (P,P), (P,F), (F,P), (F,F).",
            "solution": "$$P(\\text{Pile, Pile}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$",
            "skill": "Calculer"
        },
        {
            "id": "4D2-4",
            "chapterId": "4D2",
            "tier": 4,
            "title": "Défi : Tirage avec remise",
            "statement": "Une urne contient 2 boules vertes et 3 boules blanches. On tire successivement 2 boules avec remise. Quelle est la probabilité de tirer 2 boules blanches sous forme d'une fraction irréductible ?",
            "type": "exact",
            "answer": "9/25",
            "placeholder": "Ex: 9/25",
            "hint1": "Probabilité au premier tirage : $\\frac{3}{5}$. Même chose au deuxième tirage.",
            "solution": "$$P(\\text{Blanche, Blanche}) = \\frac{3}{5} \\times \\frac{3}{5} = \\frac{9}{25}$$",
            "skill": "Calculer"
        }
    ],
    "4P2": [
        {
            "id": "4P2-1",
            "chapterId": "4P2",
            "tier": 1,
            "title": "Calcul direct d'une image",
            "statement": "Soit la fonction définie par $f(x) = 5x - 7$. Calculer l'image de 4 par la fonction $f$ :",
            "type": "exact",
            "answer": "13",
            "placeholder": "Ex: 13",
            "hint1": "Remplace $x$ par 4 dans l'expression : $5 \\times 4 - 7$.",
            "solution": "$$f(4) = 5 \\times 4 - 7 = 20 - 7 = 13$$",
            "skill": "Calculer"
        },
        {
            "id": "4P2-2",
            "chapterId": "4P2",
            "tier": 2,
            "title": "Programme de calcul et fonction",
            "statement": "On donne le programme : « Choisir un nombre, lui ajouter 3, multiplier le résultat par 4 ». Si l'on choisit le nombre 5 au départ, quel résultat obtient-on ?",
            "type": "exact",
            "answer": "32",
            "placeholder": "Ex: 32",
            "hint1": "Calcul : $(5 + 3) \\times 4$.",
            "solution": "$$(5 + 3) \\times 4 = 8 \\times 4 = 32$$",
            "skill": "Calculer"
        },
        {
            "id": "4P2-3",
            "chapterId": "4P2",
            "tier": 3,
            "title": "Recherche d'un antécédent",
            "statement": "Soit la fonction $g(x) = 3x + 5$. Déterminer l'antécédent de 26 par la fonction $g$ :",
            "type": "exact",
            "answer": "7",
            "placeholder": "Ex: 7",
            "hint1": "Résous l'équation $3x + 5 = 26$.",
            "solution": "$$3x + 5 = 26 \\implies 3x = 21 \\implies x = \\frac{21}{3} = 7$$",
            "skill": "Résoudre"
        },
        {
            "id": "4P2-4",
            "chapterId": "4P2",
            "tier": 4,
            "title": "Défi : Image d'un nombre négatif avec carré",
            "statement": "Soit la fonction $h(x) = x^2 - 10$. Calculer la valeur de $h(-4)$ :",
            "type": "exact",
            "answer": "6",
            "placeholder": "Ex: 6",
            "hint1": "Attention au carré d'un nombre négatif : $(-4)^2 = +16$.",
            "solution": "$$h(-4) = (-4)^2 - 10 = 16 - 10 = 6$$",
            "skill": "Calculer"
        }
    ],
    "4A1": [
        {
            "id": "4A1-1",
            "chapterId": "4A1",
            "tier": 1,
            "title": "Valeur d'une variable après affectation",
            "statement": "Dans un script Scratch : « mettre V à 8 », puis « ajouter 7 à V ». Quelle est la valeur finale de la variable V ?",
            "type": "exact",
            "answer": "15",
            "placeholder": "Ex: 15",
            "hint1": "La variable commence à 8 puis augmente de 7.",
            "solution": "$$V = 8 + 7 = 15$$",
            "skill": "Calculer"
        },
        {
            "id": "4A1-2",
            "chapterId": "4A1",
            "tier": 2,
            "title": "Instruction conditionnelle « Si ... alors ... sinon »",
            "statement": "On exécute le bloc : « Si N > 10 alors mettre R à 20 sinon mettre R à 5 ». Si la variable N vaut 7, quelle sera la valeur de R ?",
            "type": "exact",
            "answer": "5",
            "placeholder": "Ex: 5",
            "hint1": "Le test 7 > 10 est FAUX, donc on exécute la branche « sinon ».",
            "solution": "Comme 7 n'est pas supérieur à 10, la condition est fausse et la variable $R$ prend la valeur 5.",
            "skill": "Raisonner"
        },
        {
            "id": "4A1-3",
            "chapterId": "4A1",
            "tier": 3,
            "title": "Programme de calcul Scratch",
            "statement": "Un script Scratch demande un nombre $x$. Si $x \\ge 0$, il calcule $2x$, sinon il calcule $x + 10$. Quelle est la valeur de sortie pour $x = -4$ ?",
            "type": "exact",
            "answer": "6",
            "placeholder": "Ex: 6",
            "hint1": "$-4 < 0$, donc la condition $x \\ge 0$ est fausse. Calcule $-4 + 10$.",
            "solution": "Comme $-4 < 0$, on effectue le calcul de la branche sinon : $-4 + 10 = 6$.",
            "skill": "Calculer"
        },
        {
            "id": "4A1-4",
            "chapterId": "4A1",
            "tier": 4,
            "title": "Défi : Boucle conditionnelle avec compteur",
            "statement": "Compteur commence à 0. On exécute : « répéter jusqu'à Compteur >= 25 : ajouter 6 à Compteur ». Quelle est la valeur finale de Compteur à la fin de la boucle ?",
            "type": "exact",
            "answer": "30",
            "placeholder": "Ex: 30",
            "hint1": "Valeurs successives : 0, 6, 12, 18, 24, 30. La boucle s'arrête dès que la condition est vraie.",
            "solution": "À 24, la condition $24 \\ge 25$ est fausse, on ajoute encore 6 : Compteur passe à 30 ($30 \\ge 25$ est vrai, la boucle s'arrête).",
            "skill": "Raisonner"
        }
    ]
}

# =============================================================================
# 5. INJECTION DANS data_5eme.js
# =============================================================================
def enrich_5eme():
    path = "Site/js/data/data_5eme.js"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Enrichir window.MATHS_COURSES_5E
    match_c = re.search(r"window\.MATHS_COURSES_5E\s*=\s*(\{.*?\n\};)", content, re.DOTALL)
    if match_c:
        block = match_c.group(1)
        # Parse existing or insert before ending '};'
        add_json = ",\n" + ",\n".join([f'  "{k}": {json.dumps(v, ensure_ascii=False, indent=2)}' for k, v in COURSES_5E_ADD.items()])
        idx = block.rfind("};")
        new_block = block[:idx].rstrip() + add_json + "\n};"
        content = content[:match_c.start(1)] + new_block + content[match_c.end(1):]

    # Enrichir window.MATHS_EXERCISES_5E
    match_e = re.search(r"window\.MATHS_EXERCISES_5E\s*=\s*(\{.*?\n\};)", content, re.DOTALL)
    if match_e:
        block = match_e.group(1)
        add_json = ",\n" + ",\n".join([f'  "{k}": {json.dumps(v, ensure_ascii=False, indent=2)}' for k, v in EXERCISES_5E_ADD.items()])
        idx = block.rfind("};")
        new_block = block[:idx].rstrip() + add_json + "\n};"
        content = content[:match_e.start(1)] + new_block + content[match_e.end(1):]

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("data_5eme.js enrichi avec succès !")

# =============================================================================
# 6. INJECTION DANS data_4eme.js
# =============================================================================
def enrich_4eme():
    path = "Site/js/data/data_4eme.js"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Enrichir window.MATHS_COURSES_4E
    match_c = re.search(r"window\.MATHS_COURSES_4E\s*=\s*(\{.*?\n\};)", content, re.DOTALL)
    if match_c:
        block = match_c.group(1)
        add_json = ",\n" + ",\n".join([f'  "{k}": {json.dumps(v, ensure_ascii=False, indent=2)}' for k, v in COURSES_4E_ADD.items()])
        idx = block.rfind("};")
        new_block = block[:idx].rstrip() + add_json + "\n};"
        content = content[:match_c.start(1)] + new_block + content[match_c.end(1):]

    # Enrichir window.MATHS_EXERCISES_4E
    match_e = re.search(r"window\.MATHS_EXERCISES_4E\s*=\s*(\{.*?\n\};)", content, re.DOTALL)
    if match_e:
        block = match_e.group(1)
        add_json = ",\n" + ",\n".join([f'  "{k}": {json.dumps(v, ensure_ascii=False, indent=2)}' for k, v in EXERCISES_4E_ADD.items()])
        idx = block.rfind("};")
        new_block = block[:idx].rstrip() + add_json + "\n};"
        content = content[:match_e.start(1)] + new_block + content[match_e.end(1):]

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("data_4eme.js enrichi avec succès !")

if __name__ == "__main__":
    enrich_5eme()
    enrich_4eme()
