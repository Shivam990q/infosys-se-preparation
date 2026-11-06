import os, sys, json, re, html

sys.stdout.reconfigure(encoding='utf-8')
base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\01_Topicwise_Mock_Tests'

def dump_topic(topic):
    name = topic.replace('_', ' ')
    p = os.path.join(base, topic, f"{name} - Solutions.json")
    with open(p, 'r', encoding='utf-8') as f:
        d = json.load(f)
    qs = d['sections'][0]['questions']
    print(f"\n==================== {topic} ====================")
    for i, q in enumerate(qs):
        q_raw = q.get('nameText', q.get('name', ''))
        q_clean = html.unescape(re.sub(r'<[^>]+>', ' ', q_raw))
        q_clean = ' '.join(q_clean.split())
        
        opts = []
        c_idx = -1
        for idx, o in enumerate(q.get('options', [])):
            otxt = html.unescape(re.sub(r'<[^>]+>', ' ', o.get('nameText', o.get('name', ''))))
            otxt = ' '.join(otxt.split())
            opts.append(otxt)
            if o.get('isCorrect'):
                c_idx = idx
        
        sol_raw = q.get('solution', '')
        sol_clean = html.unescape(re.sub(r'<[^>]+>', ' ', sol_raw))
        sol_clean = ' '.join(sol_clean.split())
        
        print(f"[{i+1}] {q_clean}")
        for idx, opt in enumerate(opts):
            is_c = "(*)" if idx == c_idx else "   "
            print(f"    {is_c} ({chr(65+idx)}) {opt}")
        if sol_clean:
            print(f"    Raw Sol: {sol_clean[:120]}...")

dump_topic('Coding_Decoding')

