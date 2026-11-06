import re, sys

sys.stdout.reconfigure(encoding='utf-8')

fpaths = [
    r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\04_Pseudocode_and_Technical\11_Master_Pseudocode_Unique\11_Master_Consolidated_Pseudocode_and_Technical_Unique_Vault.md',
    r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\05_Puzzle_Solving\11_Master_Consolidated_Puzzle_Solving_Unique\11_Master_Consolidated_Puzzle_Solving_Unique_Vault.md',
    r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\08_Previous_Year_Questions_PYQs\04_Infosys_SE_Actual_Exam_26_Sep\04_Infosys_SE_Actual_Exam_26_Sep_2025_Grand_Master_Question_Bank.md'
]

for p in fpaths:
    with open(p, 'r', encoding='utf-8', errors='ignore') as f:
        txt = f.read()
    matches = re.findall(r'(```[a-z]*\s*(?:int|Set|Print)[^\n]{150,})', txt)
    print(f"=== {p.split(chr(92))[-1]} === (matches: {len(matches)})")
    for m in matches[:3]:
        print("  Snippet:", m[:200])

