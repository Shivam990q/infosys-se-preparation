import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

f_comp = r'preparation/Infosys SE Complete/09_Mock_Test_Series/03_Full_Length_Mock_Tests/02_Master_CampusMonk_Day01_to_Day09_Simulation_Compendium.md'
with open(f_comp, 'r', encoding='utf-8') as fl:
    comp_txt = fl.read()

# Build dictionary of solutions by MOCK_SERIES_Qxxx
comp_sols = {}
matches = re.finditer(r'\*\*ID\*\*:\s*`?(MOCK_SERIES_Q\d+)`?.*?#### Step-by-Step Solution & Rationale\s*\n(.*?)(?=\n\*\*Official Video|\n---|\n### Question|\Z)', comp_txt, re.S)
for m in matches:
    qid = m.group(1)
    sol = m.group(2).strip()
    if 'evaluation criteria' not in sol.lower():
        comp_sols[qid] = sol

print(f'Compendium solutions available: {len(comp_sols)}')

def replace_in_file(fpath):
    with open(fpath, 'r', encoding='utf-8') as fl:
        txt = fl.read()
    
    initial_hits = len(re.findall(r'evaluation criteria', txt, re.I))
    replaced = 0

    # We can split by problem / question
    # Each problem has **ID**: `MOCK_SERIES_Qxxx`
    for qid, sol in comp_sols.items():
        # Match from ID to Step-by-Step Solution & Rationale
        pattern = re.compile(
            r'(\*\*ID\*\*:\s*`?' + re.escape(qid) + r'`?.*?#### Step-by-Step Solution & Rationale\s*\n)[^\n]*evaluation criteria[^\n]*',
            re.S
        )
        if pattern.search(txt):
            txt = pattern.sub(lambda m: m.group(1) + sol, txt, count=1)
            replaced += 1
            
    final_hits = len(re.findall(r'evaluation criteria', txt, re.I))
    print(f'File: {os.path.basename(fpath)}')
    print(f'   Initial hits: {initial_hits}, Replaced: {replaced}, Remaining: {final_hits}')
    
    with open(fpath, 'w', encoding='utf-8') as fl:
        fl.write(txt)
    return txt

# Replace in Mock 02
f_mock2 = r'preparation/Infosys SE Complete/Infosys_SE_Elite_Crack_Vault/09_Mock_Test_Series/02_Infosys_SE_Full_Length_Mock_Exam_02_Elite.md'
m2_txt = replace_in_file(f_mock2)

# Also mirror to Infosys SE Complete if it exists
f_mock2_root = r'preparation/Infosys SE Complete/09_Mock_Test_Series/02_Infosys_SE_Full_Length_Mock_Exam_02_Elite.md'
if os.path.exists(os.path.dirname(f_mock2_root)):
    with open(f_mock2_root, 'w', encoding='utf-8') as fl:
        fl.write(m2_txt)
    print(f'Mirrored to {f_mock2_root}')

# Replace in Verbal 111Q Vault
f_verbal = r'preparation/Infosys SE Complete/Infosys_SE_Elite_Crack_Vault/English_Grammar_Verbal_Ability_and_Writing_Complete_Vault/15_CampusMonk_Day_01_to_Day_09_Full_Length_Simulation_Verbal_Vault_111Q.md'
v_txt = replace_in_file(f_verbal)

# Also mirror
f_verbal_root = r'preparation/Infosys SE Complete/English_Grammar_Verbal_Ability_and_Writing_Complete_Vault/15_CampusMonk_Day_01_to_Day_09_Full_Length_Simulation_Verbal_Vault_111Q.md'
if os.path.exists(os.path.dirname(f_verbal_root)):
    with open(f_verbal_root, 'w', encoding='utf-8') as fl:
        fl.write(v_txt)
    print(f'Mirrored to {f_verbal_root}')

