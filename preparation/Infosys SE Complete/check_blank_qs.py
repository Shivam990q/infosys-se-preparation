import json, re, sys, os

sys.stdout.reconfigure(encoding='utf-8')
base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\05_OnlineStudy4U_Mock_Tests'

for test_dir in ['INFOSYS_TEST_SERIES-1', 'INFOSYS_TEST_SERIES-2']:
    p = os.path.join(base, test_dir, f"{test_dir.replace('_', ' ')} - Solutions.json")
    if not os.path.exists(p):
        continue
    with open(p, 'r', encoding='utf-8') as f:
        d = json.load(f)
    qs = d['sections'][0]['questions']
    print(f"\n=== {test_dir} (Total {len(qs)} Qs) ===")
    blank_q = []
    for i, q in enumerate(qs):
        name_txt = q.get('nameText', '').strip()
        raw_name = q.get('name', '')
        if not name_txt:
            imgs = re.findall(r'src=["\']([^"\']+)["\']', raw_name)
            sol = ' '.join(re.sub(r'<[^>]+>', ' ', q.get('solution', '')).split())
            blank_q.append((i+1, imgs, sol))
    print(f"Blank questions count: {len(blank_q)}")
    for num, imgs, sol in blank_q:
        print(f"  Q{num}: imgs={imgs} | sol={sol[:90]}")

