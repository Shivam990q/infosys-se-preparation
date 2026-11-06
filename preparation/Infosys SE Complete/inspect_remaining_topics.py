import os, sys, json, re

sys.stdout.reconfigure(encoding='utf-8')
base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\01_Topicwise_Mock_Tests'

topics = ['Blood_Relation', 'Coding_Decoding', 'Critical_Reasoning', 'Data_Sufficiency', 'Direction_Sense', 'Inequalities', 'Ranking_Test']

for t in topics:
    name = t.replace('_', ' ')
    json_path = os.path.join(base, t, f"{name} - Solutions.json")
    if not os.path.exists(json_path):
        print(f"Missing JSON: {json_path}")
        continue
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    sections = data.get('sections', [])
    if not sections:
        continue
    questions = sections[0].get('questions', [])
    print(f"\n=================== {t} ({len(questions)} Qs) ===================")
    for i, q in enumerate(questions[:3]):
        raw_text = q.get('nameText', q.get('name', '')).strip()
        # clean html
        clean_text = re.sub(r'<[^>]+>', ' ', raw_text)
        clean_text = ' '.join(clean_text.split())
        
        raw_sol = q.get('solution', '')
        clean_sol = re.sub(r'<[^>]+>', ' ', raw_sol)
        clean_sol = ' '.join(clean_sol.split())
        
        # correct option
        opts = q.get('options', [])
        correct_idx = -1
        correct_txt = ""
        for idx, opt in enumerate(opts):
            if opt.get('isCorrect'):
                correct_idx = idx
                otxt = opt.get('nameText', opt.get('name', ''))
                correct_txt = ' '.join(re.sub(r'<[^>]+>', ' ', otxt).split())
                break
        char_opt = chr(65 + correct_idx) if correct_idx >= 0 else '?'
        print(f"Q{i+1}: {clean_text[:120]}...")
        print(f"     Ans: ({char_opt}) {correct_txt[:60]} | Sol: {clean_sol[:100]}...")

