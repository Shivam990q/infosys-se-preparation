import json, os, sys, re, html

sys.stdout.reconfigure(encoding='utf-8')
p = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\04_CampusMonk_47_Mock_Tests\Day 01\1. Full Length Numerical Ability with Video Solution- Level -Medium - Solutions.json'

with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

qs = d['sections'][0]['questions']
print(f"Total questions in Day 01 Num JSON: {len(qs)}")

for i in [10, 11, 12, 13, 15, 16, 17, 18, 19]:
    q = qs[i]
    q_txt = html.unescape(re.sub(r'<[^>]+>', ' ', q.get('nameText', q.get('name', ''))))
    q_txt = ' '.join(q_txt.split())
    sol = html.unescape(re.sub(r'<[^>]+>', ' ', q.get('solution', '')))
    sol = ' '.join(sol.split())
    opts = [html.unescape(re.sub(r'<[^>]+>', ' ', o.get('nameText', o.get('name', '')))).strip() for o in q.get('options', [])]
    c_idx = [idx for idx, o in enumerate(q.get('options', [])) if o.get('isCorrect')]
    print(f"\n[Q{i+1}] {q_txt[:120]}")
    print(f"     Opts: {opts} | Correct: {c_idx}")
    print(f"     Sol: {sol[:120]}")

