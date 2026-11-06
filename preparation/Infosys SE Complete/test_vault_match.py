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

def test_vault(fpath, label):
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fl:
        txt = fl.read()
    sections = re.split(r'\n(?=### Question )', txt)
    hits = [s for s in sections if 'evaluation criteria' in s.lower()]
    matched = 0
    unmatched = []
    for h in hits:
        q_num = re.search(r'### Question (\d+)', h)
        q_id = q_num.group(1) if q_num else '?'
        stmt = re.search(r'#### Problem Statement\s*\n(.*?)(?=\n#### Options|\n##|\Z)', h, re.S)
        if not stmt:
            stmt = re.search(r'#### Options\s*\n(.*?)(?=\n#### Verified|\n##|\Z)', h, re.S)
        if stmt:
            clean = re.sub(r'[^a-zA-Z0-9]', '', stmt.group(1).lower())[:30]
            found = False
            for c_stmt, c_sol in comp_items:
                c_clean = re.sub(r'[^a-zA-Z0-9]', '', c_stmt.lower())
                if clean in c_clean or (len(c_clean) > 20 and c_clean[:30] in clean):
                    matched += 1
                    found = True
                    break
            if not found:
                unmatched.append((q_id, stmt.group(1).strip()[:60].replace('\n', ' ')))
    print(f'=== {label} ===')
    print(f'Total hits: {len(hits)}, Matched: {matched}')
    if unmatched:
        print('Unmatched samples:')
        for u in unmatched[:5]:
            print(f'   Q{u[0]}: {u[1]}')

test_vault(r'preparation/Infosys SE Complete/01_Reasoning_Ability/11_Master_Consolidated_Reasoning_and_Analytical_Unique/11_Master_Consolidated_Reasoning_and_Analytical_Unique_Vault.md', 'Reasoning Vault')
test_vault(r'preparation/Infosys SE Complete/04_Pseudocode_and_Technical/11_Master_Pseudocode_Unique/11_Master_Consolidated_Pseudocode_and_Technical_Unique_Vault.md', 'Pseudocode Vault')
test_vault(r'preparation/Infosys SE Complete/02_Mathematical_Ability/14_Master_Consolidated_Aptitude_and_Numerical_Unique/14_Master_Consolidated_Aptitude_and_Numerical_Unique_Vault.md', 'Math Vault')

