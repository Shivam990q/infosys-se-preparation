import json, os, sys, shutil

sys.stdout.reconfigure(encoding='utf-8')

base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\05_OnlineStudy4U_Mock_Tests'
img_source = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\images'

for t in ['INFOSYS_TEST_SERIES-1', 'INFOSYS_TEST_SERIES-2']:
    t_dir = os.path.join(base, t)
    target_img_dir = os.path.join(t_dir, 'images')
    os.makedirs(target_img_dir, exist_ok=True)
    
    p = os.path.join(t_dir, f"{t.replace('_', ' ')} - Solutions.json")
    with open(p, 'r', encoding='utf-8') as f:
        d = json.load(f)
    qs = d['sections'][0]['questions']
    
    print(f"\n====================== {t} ======================")
    for i, q in enumerate(qs):
        raw_name = q.get('name', '')
        sol = q.get('solution', '')
        opts = [o.get('nameText', '').strip() for o in q.get('options', [])]
        correct_idx = [idx for idx, o in enumerate(q.get('options', [])) if o.get('isCorrect')]
        
        # copy image
        import re
        imgs = re.findall(r'src=["\']images/([^"\']+)["\']', raw_name)
        for img_name in imgs:
            src_file = os.path.join(img_source, img_name)
            dst_file = os.path.join(target_img_dir, img_name)
            if os.path.exists(src_file) and not os.path.exists(dst_file):
                shutil.copy2(src_file, dst_file)
                print(f"Copied {img_name} to {dst_file}")
            
        print(f"Q{i+1}: imgs={imgs}")
        print(f"     Options: {opts} | Correct: {correct_idx}")
        clean_sol = ' '.join(re.sub(r'<[^>]+>', ' ', sol).split())
        print(f"     Sol: {clean_sol}")

