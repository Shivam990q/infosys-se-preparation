import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')
base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\05_OnlineStudy4U_Mock_Tests'

dirs = [d for d in sorted(os.listdir(base)) if 'Full_Length' in d]
print(f"Inspecting {len(dirs)} Full Length Mocks...")

for d in dirs:
    dp = os.path.join(base, d)
    sol_md = [f for f in os.listdir(dp) if 'Solutions.md' in f][0]
    fp = os.path.join(dp, sol_md)
    with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
        txt = f.read()
    
    # check for broken lines or run-on code
    run_on_code = len(re.findall(r'```[a-z]*\s*(?:int|Set|Print)[^\n]{100,}', txt))
    empty_sols = len(re.findall(r'\*\*Explanation.*?\*\*:\s*\n\s*---', txt))
    
    print(f"[{d}]: run-on code blocks: {run_on_code}, empty sols: {empty_sols}")

