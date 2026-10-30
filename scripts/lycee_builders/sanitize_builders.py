# -*- coding: utf-8 -*-
"""
Nettoyage et fiabilisation des chaînes JavaScript dans build_2nde.py, build_1ere.py, build_tale.py.
Remplace systématiquement les délimiteurs de chaînes contenant des apostrophes pour éviter toute collision syntaxique.
"""

import re

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Si une ligne commence par ' ou [' et contient $f' ou f'' ou d' ou l',
    # on remplace $f'' par $f^{\\prime\\prime}$ et $f' par $f^{\\prime}$
    # et on remplace les apostrophes non échappées dans les chaînes JS.
    def replace_line(line):
        stripped = line.strip()
        # Traitement des lignes d'options ou d'arguments de makeMcq
        if stripped.startswith("'") and stripped.endswith("',") or stripped.startswith("'") and stripped.endswith("'"):
            # Ligne délimitée par des simples quotes
            # Retirons les quotes de début et fin
            trailing = "'," if stripped.endswith("',") else "'"
            inner = stripped[1:-len(trailing)]
            # Remplacer les notations de dérivée par \prime en KaTeX pour éviter les conflits d'apostrophe
            inner = inner.replace("f''", "f^{\\prime\\prime}").replace("f'", "f^{\\prime}")
            inner = inner.replace("y'", "y^{\\prime}").replace("u'", "u^{\\prime}").replace("v'", "v^{\\prime}")
            # Si inner contient une apostrophe non échappée (ex: l'inéquation, d'un, s'annule)
            # entourons plutôt de doubles quotes !
            # Échappons les éventuels guillemets internes
            inner_clean = inner.replace('\\"', '"').replace('"', '\\"')
            # Unescape \' en ' pour le français
            inner_clean = inner_clean.replace("\\'", "'")
            # indent
            indent = line[:len(line) - len(line.lstrip())]
            comma = "," if trailing.endswith(",") else ""
            return f'{indent}"{inner_clean}"{comma}\n'
        return line

    new_lines = [replace_line(l) for l in content.splitlines()]
    fixed_content = '\n'.join(new_lines)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(fixed_content)

if __name__ == '__main__':
    for p in ['Site/scripts/lycee_builders/build_2nde.py',
              'Site/scripts/lycee_builders/build_1ere.py',
              'Site/scripts/lycee_builders/build_tale.py']:
        print(f'Sanitizing {p}...')
        fix_file(p)
    print('Sanitization done.')
