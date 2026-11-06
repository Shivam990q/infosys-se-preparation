import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

f_reas = r'preparation/Infosys SE Complete/01_Reasoning_Ability/11_Master_Consolidated_Reasoning_and_Analytical_Unique/11_Master_Consolidated_Reasoning_and_Analytical_Unique_Vault.md'
with open(f_reas, 'r', encoding='utf-8', errors='ignore') as fl:
    txt = fl.read()

sections = re.split(r'\n(?=### Question )', txt)
hits = [s for s in sections if 'evaluation criteria' in s.lower()]
print(f'Reasoning hits: {len(hits)}')
for i, h in enumerate(hits, 1):
    q_num = re.search(r'### Question (\d+)', h)
    ans = re.search(r'#### Verified Answer\s*\n([^\n]+)', h)
    print(f'Reasoning Q{q_num.group(1) if q_num else "?"}: Ans={ans.group(1) if ans else "?"}')
    lines = [l for l in h.splitlines() if l.strip()]
    for l in lines[1:5]:
        print('   ', l[:90])

