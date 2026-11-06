import os, sys, json, re

sys.stdout.reconfigure(encoding='utf-8')
base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\01_Topicwise_Mock_Tests'

topics = ['Blood_Relation', 'Coding_Decoding', 'Critical_Reasoning', 'Data_Sufficiency', 'Direction_Sense', 'Inequalities', 'Ranking_Test']

for t in topics:
    name = t.replace('_', ' ')
    json_path = os.path.join(base, t, f"{name} - Solutions.json")
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    questions = data['sections'][0]['questions']
    
    empty_sols = 0
    short_sols = 0
    for q in questions:
        sol = re.sub(r'<[^>]+>', ' ', q.get('solution', '')).strip()
        if not sol or sol == '...':
            empty_sols += 1
        elif len(sol) < 50:
            short_sols += 1
    print(f"{t}: {len(questions)} total Qs | {empty_sols} empty solutions | {short_sols} short (<50 chars) solutions")

