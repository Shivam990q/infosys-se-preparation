import os, sys, textwrap

files = [
    r'preparation/Infosys SE Complete/05_Puzzle_Solving/11_Master_Consolidated_Puzzle_Solving_Unique/11_Master_Consolidated_Puzzle_Solving_Unique_Vault.md',
    r'preparation/Infosys SE Complete/08_Previous_Year_Questions_PYQs/04_Infosys_SE_Actual_Exam_26_Sep/04_Infosys_SE_Actual_Exam_26_Sep_2025_Grand_Master_Question_Bank.md'
]

for f in files:
    with open(f, 'r', encoding='utf-8') as fl:
        lines = fl.readlines()
    
    new_lines = []
    in_code = False
    for l in lines:
        if l.startswith('```'):
            in_code = not in_code
            new_lines.append(l)
            continue
        if in_code and l.startswith('Set ') and len(l) > 100:
            # Wrap to 80 chars
            wrapped = textwrap.fill(l.strip(), width=80)
            new_lines.append(wrapped + '\n')
        else:
            new_lines.append(l)
            
    with open(f, 'w', encoding='utf-8') as fl:
        fl.writelines(new_lines)
    print(f'Cleaned long code lines in {os.path.basename(f)}')

