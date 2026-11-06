import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

f_comp = r'preparation/Infosys SE Complete/09_Mock_Test_Series/03_Full_Length_Mock_Tests/02_Master_CampusMonk_Day01_to_Day09_Simulation_Compendium.md'
with open(f_comp, 'r', encoding='utf-8') as fl:
    comp_txt = fl.read()

comp_items = []
raw_q_blocks = re.split(r'\n(?=### Question \d+)', comp_txt)
for b in raw_q_blocks[1:]:
    stmt_m = re.search(r'#### Problem Statement\s*\n(.*?)(?=\n#### Options|\n###|\Z)', b, re.S)
    sol_m = re.search(r'#### Step-by-Step Solution & Rationale\s*\n(.*?)(?=\n\*\*Official Video|\n---|\n### Question|\Z)', b, re.S)
    if stmt_m and sol_m:
        s_text = stmt_m.group(1).strip()
        sol_text = sol_m.group(1).strip()
        if 'evaluation criteria' not in sol_text.lower():
            comp_items.append((s_text, sol_text))

print(f'Total compendium items loaded: {len(comp_items)}')

f_mock3 = r'preparation/Infosys SE Complete/Infosys_SE_Elite_Crack_Vault/09_Mock_Test_Series/03_Infosys_SE_Full_Length_Mock_Exam_03_Elite.md'
with open(f_mock3, 'r', encoding='utf-8') as fl:
    m3_txt = fl.read()

problems = re.split(r'\n(?=### Problem \d+:)', m3_txt)
matched = 0
unmatched = []

for i, p in enumerate(problems[1:], 1):
    stmt = re.search(r'\*\*Question Statement & Options:\*\*\s*\n+(.*?)(?=\n\(?[a-d]\)|\n###|\Z)', p, re.S)
    if not stmt:
        stmt = re.search(r'#### Problem Statement\s*\n+(.*?)(?=\n#### Options|\n###|\Z)', p, re.S)
    if stmt:
        q_clean = re.sub(r'[^a-zA-Z0-9]', '', stmt.group(1).lower())[:35]
        found = False
        for c_stmt, c_sol in comp_items:
            c_clean = re.sub(r'[^a-zA-Z0-9]', '', c_stmt.lower())
            if q_clean in c_clean or (len(c_clean) > 20 and c_clean[:35] in q_clean):
                matched += 1
                found = True
                break
        if not found:
            unmatched.append((i, stmt.group(1).strip()[:80]))

print(f'Mock 03 matched: {matched} / {len(problems)-1}')
if unmatched:
    print('Unmatched problems in Mock 03:')
    for u in unmatched:
        print(f'   P{u[0]:02d}: {u[1]}')