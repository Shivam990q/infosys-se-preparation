import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

f_mock3 = r'preparation/Infosys SE Complete/Infosys_SE_Elite_Crack_Vault/09_Mock_Test_Series/03_Infosys_SE_Full_Length_Mock_Exam_03_Elite.md'
with open(f_mock3, 'r', encoding='utf-8') as fl:
    txt = fl.read()

# Split into problems
problems = re.split(r'\n(?=### Problem \d+:)', txt)
print(f'Total sections: {len(problems)}')

for i, p in enumerate(problems[1:], 1):
    hdr = p.splitlines()[0]
    src = re.search(r'\*\*Source:\*\*\s*`?([^`\n]+)`?', p)
    src_str = src.group(1) if src else '?'
    stmt = re.search(r'\*\*Question Statement & Options:\*\*\s*\n+(.*?)(?=\n\(?[a-d]\)|\n###|\Z)', p, re.S)
    stmt_str = stmt.group(1).strip()[:80].replace('\n', ' ') if stmt else '?'
    ans = re.search(r'\*\*Verified Answer Key\*\*:\s*Option\s*([^\n]+)', p)
    ans_str = ans.group(1) if ans else '?'
    print(f'P{i:02d}: {hdr[:40]} | Src: {src_str[:30]} | Ans: {ans_str} | Stmt: {stmt_str[:50]}')

