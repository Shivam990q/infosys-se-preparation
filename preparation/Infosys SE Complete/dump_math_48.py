import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

f_math = r'preparation/Infosys SE Complete/02_Mathematical_Ability/14_Master_Consolidated_Aptitude_and_Numerical_Unique/14_Master_Consolidated_Aptitude_and_Numerical_Unique_Vault.md'
with open(f_math, 'r', encoding='utf-8', errors='ignore') as fl:
    txt = fl.read()

sections = re.split(r'\n(?=### Question )', txt)
hits = [s for s in sections if 'evaluation criteria' in s.lower()]
print(f'Math hits: {len(hits)}')
for i, h in enumerate(hits, 1):
    q_num = re.search(r'### Question (\d+)', h)
    ans = re.search(r'#### Verified Answer\s*\n([^\n]+)', h)
    if not ans:
        ans = re.search(r'> \*\*Verified Answer Key:\*\*\s*([^\n]+)', h)
    stmt = re.search(r'#### Problem Statement\s*\n(.*?)(?=\n#### Options|\n##|\Z)', h, re.S)
    stmt_str = stmt.group(1).strip()[:70].replace('\n', ' ') if stmt else '?'
    print(f'Math Q{q_num.group(1) if q_num else "?"}: Ans={ans.group(1) if ans else "?"} | Stmt: {stmt_str}')

