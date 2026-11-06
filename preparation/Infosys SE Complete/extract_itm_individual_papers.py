import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\06_College_ITM_and_External_Mocks'
vault = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\Infosys_SE_Elite_Crack_Vault\09_Mock_Test_Series\06_College_ITM_and_External_Mocks'

topic08_path = os.path.join(base, 'Topic_08_Master_ITM_Papers_01_to_07_Full_Exam_Simulations.md')
with open(topic08_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Pattern for Mock Exam Paper
parts = re.split(r'(## Mock Exam Paper 0[1-7]: Infosys System Engineer ITM Mock Paper [1-7])', text)

header = parts[0]

# Mapping
paper_names = [
    'Infosys_SE_Mock_Paper.md',
    'Infosys_SE_Mock_Paper_2.md',
    'Infosys_SE_Mock_Paper_3.md',
    'Infosys_SE_Mock_Paper_4.md',
    'Infosys_SE_Mock_Paper_5.md',
    'Infosys_SE_Mock_Paper_6.md',
    'Infosys_SE_Mock_Paper_7.md'
]

cur_idx = 0
for i in range(1, len(parts), 2):
    paper_title = parts[i]
    paper_content = parts[i+1]
    filename = paper_names[cur_idx]
    
    full_content = f"# {paper_title.replace('## ', '')}\n\n{paper_content.strip()}\n"
    
    p1 = os.path.join(base, filename)
    p2 = os.path.join(vault, filename)
    
    with open(p1, 'w', encoding='utf-8') as f:
        f.write(full_content)
    with open(p2, 'w', encoding='utf-8') as f:
        f.write(full_content)
        
    print(f"Extracted {filename}: {len(full_content)} chars")
    cur_idx += 1

print("All 7 ITM individual mock papers created and mirrored successfully!")

