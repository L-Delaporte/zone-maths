# -*- coding: utf-8 -*-
"""
Double all single LaTeX backslashes in lyceeGenerators.js so they parse cleanly in JS.
"""
import re
import os

TARGET = os.path.join(os.path.dirname(__file__), "../../js/lyceeGenerators.js")

def main():
    with open(TARGET, "r", encoding="utf-8") as f:
        content = f.read()

    latex_keywords = [
        'frac', 'le', 'ge', 'times', 'cdot', 'vec', 'sqrt', 'cos', 'sin', 'tan', 'pi', 'theta',
        'alpha', 'beta', 'gamma', 'delta', 'lambda', 'sigma', 'mu', 'ln', 'exp', 'lim', 'sum', 'int',
        'infty', 'cup', 'cap', 'in', 'subset', 'neq', 'approx', 'equiv', 'pmod', 'forall', 'exists',
        'implies', 'iff', 'to', 'mathbb', 'mathcal', 'mathbf', 'text', 'left', 'right', 'begin', 'end',
        'pmatrix', 'binom', 'det', 'ker', 'dim', 'overline', 'underline', 'emptyset', 'pm', 'mp',
        'partial', 'nabla', 'sim', 'perp', 'parallel', 'omega', 'Omega', 'Delta', 'Sigma', 'Pi',
        'Phi', 'Psi', 'phi', 'psi', 'zeta', 'eta', 'tau', 'xi', 'nu', 'epsilon', 'varepsilon',
        'arg', 'Re', 'Im', 'circ', 'bullet', 'vee', 'wedge', 'oplus', 'otimes', 'mid', 'nmid', 'prime'
    ]

    count = 0
    # Regexp: (?<!\\)\\(kw)(?![a-zA-Z])
    for kw in latex_keywords:
        pattern = re.compile(r'(?<!\\)\\' + kw + r'(?![a-zA-Z])')
        def make_repl(m):
            nonlocal count
            count += 1
            return '\\' + m.group(0)
        content = pattern.sub(make_repl, content)

    # Braces and special symbols
    for sym in [r'\{', r'\}', r'\,', r'\;', r'\!', r'\ ']:
        pattern = re.compile(r'(?<!\\)' + re.escape(sym))
        def make_repl_sym(m):
            nonlocal count
            count += 1
            return '\\' + m.group(0)
        content = pattern.sub(make_repl_sym, content)

    print(f"Total single backslashes doubled: {count}")
    with open(TARGET, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    main()
