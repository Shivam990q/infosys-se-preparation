import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\04_CampusMonk_47_Mock_Tests'
compendium_path = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\03_Full_Length_Mock_Tests\02_Master_CampusMonk_Day01_to_Day09_Simulation_Compendium.md'

with open(compendium_path, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# find all '## Day ...'
sections = re.findall(r'^## (Day \d{2} — [^\n]+)', text, flags=re.MULTILINE)
print(f"Total sections in compendium: {len(sections)}")

for sec in sections:
    print("Sec:", sec)

