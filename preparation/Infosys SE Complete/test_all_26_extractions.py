import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\04_CampusMonk_47_Mock_Tests'

def extract_sols_from_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        txt = f.read()
    
    q_blocks = re.split(r'\n### Question (\d+)', txt)
    sols = {}
    for i in range(1, len(q_blocks), 2):
        q_num = int(q_blocks[i])
        body = q_blocks[i+1]
        
        # search for solution start
        m = re.search(r'(?:#{3,4}\s*Step-by-Step[^\n]*|\*\*Detailed Step-by-Step[^\n]*\*\*|\*\*Step-by-Step[^\n]*\*\*|\*\*Explanation[^\n]*\*\*|\*\*Execution Trace[^\n]*\*\*):?\s*\n(.*)', body, flags=re.DOTALL | re.IGNORECASE)
        if m:
            sol_content = m.group(1).split('\n---')[0].strip()
            # remove video links if any at the bottom
            sol_content = re.sub(r'\n\*\*Official Video Solution Link\*\*:[^\n]*', '', sol_content).strip()
            if sol_content:
                sols[q_num] = sol_content
    return sols

total_extracted = 0
for root, dirs, files in sorted(os.walk(base_dir)):
    sol_files = [f for f in files if f.endswith('Solutions.md')]
    for sf in sol_files:
        fp = os.path.join(root, sf)
        rel = os.path.relpath(fp, base_dir)
        sols = extract_sols_from_file(fp)
        total_extracted += len(sols)
        print(f"[{rel}] -> {len(sols)} solutions extracted")

print(f"\nTotal solutions successfully extracted across all files: {total_extracted}")

