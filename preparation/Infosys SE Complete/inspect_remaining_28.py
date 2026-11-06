import sys, re

sys.stdout.reconfigure(encoding='utf-8')

comp = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\03_Full_Length_Mock_Tests\02_Master_CampusMonk_Day01_to_Day09_Simulation_Compendium.md'

with open(comp, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# find each occurrence of 'evaluation criteria' and print its question context
blocks = text.split('### Question ')
print(f"Total question blocks in compendium: {len(blocks)}")

boiler_blocks = []
for b in blocks[1:]:
    if 'evaluation criteria' in b:
        # extract q num, sec name, problem statement, answer
        m_head = re.match(r'(\d+)\s*\((Mock Global Q\d+)\)', b)
        q_label = m_head.group(0) if m_head else "Unknown"
        
        m_sec = re.search(r'\*\*Mock Source\*\*:\s*([^\n]+)', b)
        sec_name = m_sec.group(1).strip() if m_sec else "Unknown"
        
        m_prob = re.search(r'#### Problem Statement\s*\n(.*?)(?=#### Options|#### Verified Answer)', b, flags=re.DOTALL)
        prob_text = m_prob.group(1).strip() if m_prob else ""
        prob_text = ' '.join(prob_text.split())
        
        m_ans = re.search(r'#### Verified Answer\s*\n(.*?)(?=#### Step-by-Step)', b, flags=re.DOTALL)
        ans_text = m_ans.group(1).strip() if m_ans else ""
        ans_text = ' '.join(ans_text.split())
        
        boiler_blocks.append((q_label, sec_name, prob_text[:120], ans_text))

print(f"\nTotal questions with boilerplate: {len(boiler_blocks)}")
for ql, sn, pt, at in boiler_blocks:
    print(f"[{sn}] {ql} | Ans: {at} | Prob: {pt}...")

