import os, sys, json

sys.stdout.reconfigure(encoding='utf-8')
base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series'

print("=== 06_College_ITM_and_External_Mocks ===")
itm_path = os.path.join(base, '06_College_ITM_and_External_Mocks')
if os.path.exists(itm_path):
    files = sorted(os.listdir(itm_path))
    for f in files:
        fp = os.path.join(itm_path, f)
        size = os.path.getsize(fp) // 1024
        print(f"  {f} ({size} KB)")

print("\n=== 05_OnlineStudy4U_Mock_Tests ===")
os4u_path = os.path.join(base, '05_OnlineStudy4U_Mock_Tests')
if os.path.exists(os4u_path):
    folders = sorted(os.listdir(os4u_path))
    for f in folders:
        fp = os.path.join(os4u_path, f)
        if os.path.isdir(fp):
            subfiles = os.listdir(fp)
            print(f"  {f}: {subfiles}")

print("\n=== Day 01 CampusMonk PDFs vs MDs ===")
day1_path = os.path.join(base, '04_CampusMonk_47_Mock_Tests', 'Day 01')
if os.path.exists(day1_path):
    for f in sorted(os.listdir(day1_path)):
        print(f"  {f}")

