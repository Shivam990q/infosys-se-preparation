import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

# Test extracting solutions from Day 01 Numerical Ability
day1_num_file = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\04_CampusMonk_47_Mock_Tests\Day 01\1. Full Length Numerical Ability with Video Solution- Level -Medium - Solutions.md'

with open(day1_num_file, 'r', encoding='utf-8') as f:
    day1_txt = f.read()

# split by '### Question '
q_blocks = re.split(r'\n### Question (\d+)\n', day1_txt)
print(f"Total parts in Day 1 Num: {len(q_blocks)}")

sols_by_q = {}
for i in range(1, len(q_blocks), 2):
    q_num = int(q_blocks[i])
    q_body = q_blocks[i+1]
    
    # extract solution after '**Detailed Step-by-Step...' or '**Step-by-Step Solution...'
    sol_match = re.search(r'\*\*(?:Detailed Step-by-Step|Step-by-Step Solution|Execution Trace)[^\n]*\*\*:\s*\n(.*)', q_body, flags=re.DOTALL)
    if sol_match:
        sol_text = sol_match.group(1).split('\n---')[0].strip()
        sols_by_q[q_num] = sol_text

print(f"Extracted solutions for {len(sols_by_q)} questions:")
for qn in sorted(sols_by_q.keys())[:3]:
    print(f"Q{qn}: {sols_by_q[qn][:100]}...")

