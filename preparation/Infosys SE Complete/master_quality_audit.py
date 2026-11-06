import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

roots = [
    r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete',
    r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\Infosys_SE_Elite_Crack_Vault'
]

total_md_files = 0
flagged_files = []

for r in roots:
    print(f"\n================ AUDITING ROOT: {os.path.basename(r)} ================")
    for dirpath, dirnames, filenames in os.walk(r):
        if '.git' in dirpath:
            continue
        for f in filenames:
            if not f.endswith('.md'):
                continue
            total_md_files += 1
            fpath = os.path.join(dirpath, f)
            with open(fpath, 'r', encoding='utf-8', errors='ignore') as fl:
                txt = fl.read()
            
            lines = txt.splitlines()
            
            # Check 1: Lines > 1500 chars (excluding tables)
            long_lines = [i+1 for i, l in enumerate(lines) if len(l) > 1500 and not l.startswith('|')]
            
            # Check 2: Dummy explanations
            dummy_ans = len(re.findall(r'\*\*Explanation.*?\*\*:\s*Ans\s*-\s*[A-E]\s*$', txt, flags=re.MULTILINE))
            
            # Check 3: Generic filler
            generic_filler = len(re.findall(r'satisfies the exact geometric, spatial, or logical constraints', txt))
            
            # Check 4: Unfenced run-on code
            unfenced_code = len(re.findall(r'```[a-z]*\s*(?:int|Set|Print)[^\n]{150,}', txt))
            
            if long_lines or dummy_ans > 0 or generic_filler > 0 or unfenced_code > 0:
                rel = os.path.relpath(fpath, r)
                flagged_files.append((rel, len(long_lines), dummy_ans, generic_filler, unfenced_code))

print(f"\nTotal Markdown Files Scanned: {total_md_files}")
print(f"Total Flagged Files: {len(flagged_files)}")
for item in flagged_files:
    print(f"FLAGGED: {item[0]} -> Long lines: {item[1]}, Dummy Ans: {item[2]}, Generic Filler: {item[3]}, Unfenced Code: {item[4]}")

