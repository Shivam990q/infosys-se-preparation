import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')
base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\05_OnlineStudy4U_Mock_Tests'

dirs = sorted(os.listdir(base))
print(f"Total dirs in 05_OnlineStudy4U: {len(dirs)}")

for d in dirs:
    dp = os.path.join(base, d)
    if not os.path.isdir(dp):
        continue
    files = os.listdir(dp)
    sol_mds = [f for f in files if 'Solutions.md' in f]
    if sol_mds:
        fpath = os.path.join(dp, sol_mds[0])
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            txt = f.read()
        lines = txt.splitlines()
        
        # check max line length
        max_len = max(len(l) for l in lines) if lines else 0
        long_lines = sum(1 for l in lines if len(l) > 300)
        
        # check for boilerplate or placeholder
        dummy_ans = len(re.findall(r'Ans\s*-\s*[A-E]', txt))
        satisfies_count = len(re.findall(r'satisfies the exact', txt))
        
        print(f"[{d}] {sol_mds[0]} -> {len(lines)} lines, max line: {max_len}, >300 chars: {long_lines}, 'Ans - X': {dummy_ans}, 'satisfies': {satisfies_count}")
        # print sample first 5 lines
        for l in lines[8:15]:
            print(f"   {l[:80]}")

