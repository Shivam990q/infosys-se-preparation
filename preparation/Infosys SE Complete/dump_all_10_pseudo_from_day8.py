import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

f = r'preparation/Infosys SE Complete/09_Mock_Test_Series/04_CampusMonk_47_Mock_Tests/Day 08/Mock_03/Technical MCQ - Pseudo Codes Based on PYQ 01 - Solutions.md'
with open(f, 'r', encoding='utf-8') as fl:
    txt = fl.read()

questions = re.split(r'\n(?=### Question \d+)', txt)
for i, q in enumerate(questions[1:11], 1):
    print(f'=== Q{i} ===')
    lines = [l for l in q.splitlines() if l.strip()]
    for l in lines[:10]:
        print('  ', l[:100])

