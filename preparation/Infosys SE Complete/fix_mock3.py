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

f_mock3 = r'preparation/Infosys SE Complete/Infosys_SE_Elite_Crack_Vault/09_Mock_Test_Series/03_Infosys_SE_Full_Length_Mock_Exam_03_Elite.md'
with open(f_mock3, 'r', encoding='utf-8') as fl:
    m3_txt = fl.read()

p53_sol = """1. **Mathematical Invariant & Row-Wise Relation Analysis:**
   - Let the entries in each row of the matrix be denoted as $A$, $B$, $C$, and $D$ (where $D$ is the resulting value).
   - **Row 1:** $A = 8, B = 5, C = 6 \implies (A \\times C) + B = (8 \\times 6) + 5 = 48 + 5 = 53$. (Matches $D = 53$)
   - **Row 2:** $A = 7, B = 4, C = 8 \implies (A \\times C) + B = (7 \\times 8) + 4 = 56 + 4 = 60$. (Matches $D = 60$)
   - **Row 3:** $A = 5, B = 7, C = 9 \implies (A \\times C) + B = (5 \\times 9) + 7 = 45 + 7 = 52$. (Matches $D = 52$)
2. **Missing Term Computation for Row 4:**
   - For the final row: $A = 6, B = 9, C = 8$:
     $$\\text{Result} = (A \\times C) + B = (6 \\times 8) + 9 = 48 + 9 = 57$$
3. **Conclusion:**
   - The verified missing number replacing the question mark (?) is **57** (**Option A**)."""

# We process problem by problem
problems = re.split(r'\n(?=### Problem \d+:)', m3_txt)
new_problems = [problems[0]]
replaced_count = 0

for i, p in enumerate(problems[1:], 1):
    stmt = re.search(r'\*\*Question Statement & Options:\*\*\s*\n+(.*?)(?=\n\(?[a-d]\)|\n###|\Z)', p, re.S)
    if not stmt:
        stmt = re.search(r'#### Problem Statement\s*\n+(.*?)(?=\n#### Options|\n###|\Z)', p, re.S)
    
    sol_to_use = None
    if i == 53:
        sol_to_use = p53_sol
    elif stmt:
        q_clean = re.sub(r'[^a-zA-Z0-9]', '', stmt.group(1).lower())[:35]
        for c_stmt, c_sol in comp_items:
            c_clean = re.sub(r'[^a-zA-Z0-9]', '', c_stmt.lower())
            if q_clean in c_clean or (len(c_clean) > 20 and c_clean[:35] in q_clean):
                sol_to_use = c_sol
                break
    
    if sol_to_use:
        # replace Step-by-Step Solution & Rationale in p
        # Notice in Mock 03 header might be:
        # ### Step-by-Step Mathematical & Logical Derivation
        # Correct Answer: Option C: 102. Solved following standard Infosys System Engineer evaluation criteria.
        sub_pat = re.compile(r'(### Step-by-Step Mathematical & Logical Derivation\s*\n)[^\n]*evaluation criteria[^\n]*', re.S)
        if sub_pat.search(p):
            p = sub_pat.sub(lambda m: m.group(1) + sol_to_use, p)
            replaced_count += 1
        else:
            sub_pat2 = re.compile(r'(#### Step-by-Step Solution & Rationale\s*\n)[^\n]*evaluation criteria[^\n]*', re.S)
            if sub_pat2.search(p):
                p = sub_pat2.sub(lambda m: m.group(1) + sol_to_use, p)
                replaced_count += 1
    
    new_problems.append(p)

new_m3_txt = '\n'.join(new_problems)
print(f'Mock 03 replaced: {replaced_count} / 54')
print('Remaining evaluation criteria in Mock 03:', len(re.findall(r'evaluation criteria', new_m3_txt, re.I)))

with open(f_mock3, 'w', encoding='utf-8') as fl:
    fl.write(new_m3_txt)

f_mock3_root = r'preparation/Infosys SE Complete/09_Mock_Test_Series/03_Infosys_SE_Full_Length_Mock_Exam_03_Elite.md'
if os.path.exists(os.path.dirname(f_mock3_root)):
    with open(f_mock3_root, 'w', encoding='utf-8') as fl:
        fl.write(new_m3_txt)
    print(f'Mirrored to {f_mock3_root}')

