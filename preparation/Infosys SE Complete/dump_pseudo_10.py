import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

f_pseudo = r'preparation/Infosys SE Complete/04_Pseudocode_and_Technical/11_Master_Pseudocode_Unique/11_Master_Consolidated_Pseudocode_and_Technical_Unique_Vault.md'
with open(f_pseudo, 'r', encoding='utf-8', errors='ignore') as fl:
    txt = fl.read()

sections = re.split(r'\n(?=### Question )', txt)
hits = [s for s in sections if 'evaluation criteria' in s.lower()]

print(f'Pseudocode hits count: {len(hits)}')
for i, h in enumerate(hits, 1):
    q_num = re.search(r'### Question (\d+)', h)
    ans = re.search(r'#### Verified Answer\s*\n([^\n]+)', h)
    print(f'--- HIT {i} (Q{q_num.group(1) if q_num else "?"}) ---')
    print('Ans:', ans.group(1) if ans else '?')
    lines = [l for l in h.splitlines() if l.strip()]
    print('Preview lines:')
    for l in lines[:12]:
        print('  ', l[:100])

