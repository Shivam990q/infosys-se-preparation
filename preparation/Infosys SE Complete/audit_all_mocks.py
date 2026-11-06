import os, sys, json, re

sys.stdout.reconfigure(encoding='utf-8')
base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series'

categories = [
    '01_Topicwise_Mock_Tests',
    '02_Sectional_Mock_Tests',
    '03_Full_Length_Mock_Tests',
    '04_CampusMonk_47_Mock_Tests',
    '05_OnlineStudy4U_Mock_Tests',
    '06_College_ITM_and_External_Mocks'
]

print("=== MOCK TEST SERIES CENSUS ===")
for cat in categories:
    cat_path = os.path.join(base, cat)
    if not os.path.exists(cat_path):
        continue
    items = sorted(os.listdir(cat_path))
    print(f"\nCategory: {cat} (Total items: {len(items)})")
    for item in items[:5]:
        item_path = os.path.join(cat_path, item)
        if os.path.isdir(item_path):
            files = os.listdir(item_path)
            mds = [f for f in files if f.endswith('.md')]
            pdfs = [f for f in files if f.endswith('.pdf')]
            jsons = [f for f in files if f.endswith('.json')]
            print(f"  Folder: {item} -> MDs: {len(mds)}, PDFs: {len(pdfs)}, JSONs: {len(jsons)}")
        else:
            print(f"  File: {item}")

