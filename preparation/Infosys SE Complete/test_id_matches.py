import sys, re
sys.stdout.reconfigure(encoding='utf-8')

f_comp = r'preparation/Infosys SE Complete/09_Mock_Test_Series/03_Full_Length_Mock_Tests/02_Master_CampusMonk_Day01_to_Day09_Simulation_Compendium.md'
with open(f_comp, 'r', encoding='utf-8') as fl:
    comp_txt = fl.read()

# Build a dictionary of solutions by MOCK_SERIES_Qxxx
comp_sols = {}
matches = re.finditer(r'\*\*ID\*\*:\s*`?(MOCK_SERIES_Q\d+)`?.*?#### Step-by-Step Solution & Rationale\s*\n(.*?)(?=\n\*\*Official Video|\n---|\n### Question|\Z)', comp_txt, re.S)
for m in matches:
    qid = m.group(1)
    sol = m.group(2).strip()
    if 'evaluation criteria' not in sol.lower():
        comp_sols[qid] = sol

print(f'Total valid solutions extracted by MOCK_SERIES ID from compendium: {len(comp_sols)}')

# Now test on 02_Infosys_SE_Full_Length_Mock_Exam_02_Elite.md
f_mock2 = r'preparation/Infosys SE Complete/Infosys_SE_Elite_Crack_Vault/09_Mock_Test_Series/02_Infosys_SE_Full_Length_Mock_Exam_02_Elite.md'
with open(f_mock2, 'r', encoding='utf-8') as fl:
    m2_txt = fl.read()

m2_ids = re.findall(r'\*\*ID\*\*:\s*`?(MOCK_SERIES_Q\d+)`?', m2_txt)
print(f'Mock 02 total IDs: {len(m2_ids)}')
matched_m2 = [qid for qid in m2_ids if qid in comp_sols]
print(f'Mock 02 matched IDs in compendium: {len(matched_m2)} / {len(m2_ids)}')

# Now test on 03_Infosys_SE_Full_Length_Mock_Exam_03_Elite.md
f_mock3 = r'preparation/Infosys SE Complete/Infosys_SE_Elite_Crack_Vault/09_Mock_Test_Series/03_Infosys_SE_Full_Length_Mock_Exam_03_Elite.md'
with open(f_mock3, 'r', encoding='utf-8') as fl:
    m3_txt = fl.read()

m3_ids = re.findall(r'\*\*ID\*\*:\s*`?(MOCK_SERIES_Q\d+)`?', m3_txt)
print(f'Mock 03 total IDs: {len(m3_ids)}')
matched_m3 = [qid for qid in m3_ids if qid in comp_sols]
print(f'Mock 03 matched IDs in compendium: {len(matched_m3)} / {len(m3_ids)}')

# Now test on 15_CampusMonk_Day_01_to_Day_09_Full_Length_Simulation_Verbal_Vault_111Q.md
f_verb = r'preparation/Infosys SE Complete/Infosys_SE_Elite_Crack_Vault/English_Grammar_Verbal_Ability_and_Writing_Complete_Vault/15_CampusMonk_Day_01_to_Day_09_Full_Length_Simulation_Verbal_Vault_111Q.md'
with open(f_verb, 'r', encoding='utf-8') as fl:
    verb_txt = fl.read()

verb_ids = re.findall(r'\*\*ID\*\*:\s*`?(MOCK_SERIES_Q\d+)`?', verb_txt)
print(f'Verbal Vault total IDs: {len(verb_ids)}')
matched_verb = [qid for qid in verb_ids if qid in comp_sols]
print(f'Verbal Vault matched IDs in compendium: {len(matched_verb)} / {len(verb_ids)}')

