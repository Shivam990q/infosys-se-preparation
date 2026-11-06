import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete'
vault_dir = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\Infosys_SE_Elite_Crack_Vault'

compendium_rel = r'09_Mock_Test_Series\03_Full_Length_Mock_Tests\02_Master_CampusMonk_Day01_to_Day09_Simulation_Compendium.md'
comp_file_base = os.path.join(base_dir, compendium_rel)
comp_file_vault = os.path.join(vault_dir, compendium_rel)

cm_base = os.path.join(base_dir, r'09_Mock_Test_Series\04_CampusMonk_47_Mock_Tests')

sec_to_file = {
    'Day 01 — 1. Full Length Logical Reasoning Mock ( Video Sol)': r'Day 01\1. Full Length Logical Reasoning Mock ( Video Sol) - Solutions.md',
    'Day 01 — 1. Full Length Numerical Ability with Video Solution- Level -Medium': r'Day 01\1. Full Length Numerical Ability with Video Solution- Level -Medium - Solutions.md',
    'Day 01 — 1. Full length verbal ability': r'Day 01\1. Full length verbal ability - Solutions.md',
    'Day 02 — 2. Full length Logical Reasoning (with sol)': r'Day 02\2. Full length Logical Reasoning (with sol) - Solutions.md',
    'Day 02 — 2. Full length Quantitative Aptitude (with sol) Level -2': r'Day 02\2. Full length Quantitative Aptitude (with sol) Level -2 - Solutions.md',
    'Day 02 — 2. Full length Verbal Ability': r'Day 02\2. Full length Verbal Ability - Solutions.md',
    'Day 03 — 3. Full Length Logical Reasoning Mock(with sol)': r'Day 03\3. Full Length Logical Reasoning Mock(with sol) - Solutions.md',
    'Day 03 — 3. Full length Quantitative Aptitude (with sol) Level -1-2': r'Day 03\3. Full length Quantitative Aptitude (with sol) Level -1-2 - Solutions.md',
    'Day 03 — 3. Full Length Verbala Ability Mock': r'Day 03\3. Full Length Verbala Ability Mock - Solutions.md',
    'Day 04 — 4. Full Length Logical Reasoning(with sol)': r'Day 04\4. Full Length Logical Reasoning(with sol) - Solutions.md',
    'Day 04 — 4. Full Length Verbal Ability': r'Day 04\4. Full Length Verbal Ability - Solutions.md',
    'Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol': r'Day 04\Technical MCQ - Pseudo Codes Based on PYQ With Video Sol - Solutions.md',
    'Day 05 — 5 Ful length Logical Reasoning Mock': r'Day 05\5 Ful length Logical Reasoning Mock - Solutions.md',
    'Day 05 — 5 Ful length Verbal Ability': r'Day 05\5 Ful length Verbal Ability - Solutions.md',
    'Day 06 — Logical Puzzle': r'Day 06\Mock_01\Logical Puzzle - Solutions.md',
    'Day 06 — Pseudo Code': r'Day 06\Mock_01\Pseudo Code - Solutions.md',
    'Day 06 — Quantitative Aptitude_Technical Abilty': r'Day 06\Mock_01\Quantitative Aptitude - Technical Abilty - Solutions.md',
    'Day 06 — Verbal Ability': r'Day 06\Mock_01\Verbal Ability - Solutions.md',
    'Day 07 — Section III _ Pseudo Codes Based on PYQ': r'Day 07\Mock_02\Section III - Pseudo Codes Based on PYQ - Solutions.md',
    'Day 07 — Section IV_ Puzzle Solving': r'Day 07\Mock_02\Section IV - Puzzle Solving - Solutions.md',
    'Day 07 — SECTION-I_ MATHEMATICAL ABILITY': r'Day 07\Mock_02\SECTION-I - MATHEMATICAL ABILITY - Solutions.md',
    'Day 07 — SECTION-II_ ANALYTICAL THINKING': r'Day 07\Mock_02\SECTION-II - ANALYTICAL THINKING - Solutions.md',
    'Day 08 — Aptitude 01 - All India Mock 01': r'Day 08\Mock_03\Aptitude 01 - All India Mock 01 - Solutions.md',
    'Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01': r'Day 08\Mock_03\Technical MCQ - Pseudo Codes Based on PYQ 01 - Solutions.md',
    'Day 09 — Aptitude 02 - All India Mock': r'Day 09\Mock_04\Aptitude 02 - All India Mock - Solutions.md',
    'Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02': r'Day 09\Mock_04\Technical MCQ - Pseudo Codes Based on PYQ 02 - Solutions.md'
}

def extract_sols(rel_path):
    fp = os.path.join(cm_base, rel_path)
    if not os.path.exists(fp):
        print(f"Warning: file not found: {fp}")
        return {}
    with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
        txt = f.read()
    
    q_blocks = re.split(r'\n### Question (\d+)', txt)
    sols = {}
    for i in range(1, len(q_blocks), 2):
        q_num = int(q_blocks[i])
        body = q_blocks[i+1]
        
        m = re.search(r'(?:#{3,4}\s*(?:Step-by-Step|Grammatical Rule)[^\n]*|\*\*(?:Detailed Step-by-Step|Step-by-Step Solution|Execution Trace|Explanation)[^\n]*\*\*):?\s*\n(.*)', body, flags=re.DOTALL | re.IGNORECASE)
        if m:
            sol_content = m.group(1).split('\n---')[0].strip()
            sol_content = re.sub(r'\n\*\*Official Video Solution Link\*\*:[^\n]*', '', sol_content).strip()
            if sol_content:
                sols[q_num] = sol_content
    return sols

all_solutions = {}
for sec_name, rel_file in sec_to_file.items():
    sols = extract_sols(rel_file)
    all_solutions[sec_name] = sols

with open(comp_file_base, 'r', encoding='utf-8', errors='ignore') as f:
    comp_text = f.read()

initial_boilerplate_count = comp_text.count('evaluation criteria')
print(f"Initial boilerplate count: {initial_boilerplate_count}")

sec_splits = re.split(r'(^## Day \d{2} — [^\n]+)', comp_text, flags=re.MULTILINE)
new_parts = [sec_splits[0]]

replaced_total = 0

for i in range(1, len(sec_splits), 2):
    sec_header = sec_splits[i]
    sec_body = sec_splits[i+1]
    
    sec_name = sec_header.replace('## ', '').strip()
    sols_dict = all_solutions.get(sec_name, {})
    
    q_parts = re.split(r'(?=### Question \d+)', sec_body)
    new_q_parts = []
    for qp in q_parts:
        if qp.startswith('### Question '):
            qm = re.match(r'### Question (\d+)', qp)
            if qm:
                q_num = int(qm.group(1))
                if q_num in sols_dict:
                    real_sol = sols_dict[q_num]
                    pattern = r'(#### Step-by-Step Solution & Rationale\s*\n)(?:Correct Answer:[^\n]*evaluation criteria\.[^\n]*\n?)'
                    if re.search(pattern, qp):
                        qp = re.sub(pattern, lambda m, s=real_sol: m.group(1) + s + '\n\n', qp)
                        replaced_total += 1
        new_q_parts.append(qp)
    
    new_sec_body = "".join(new_q_parts)
    new_parts.append(sec_header)
    new_parts.append(new_sec_body)

updated_comp_text = "".join(new_parts)
final_boilerplate_count = updated_comp_text.count('evaluation criteria')

print(f"\nReplaced {replaced_total} boilerplate solutions with comprehensive step-by-step solutions!")
print(f"Remaining boilerplate count: {final_boilerplate_count}")
print(f"New Compendium length: {len(updated_comp_text)} chars")

with open(comp_file_base, 'w', encoding='utf-8') as f:
    f.write(updated_comp_text)
print(f"Saved to {comp_file_base}")

with open(comp_file_vault, 'w', encoding='utf-8') as f:
    f.write(updated_comp_text)
print(f"Saved to {comp_file_vault}")