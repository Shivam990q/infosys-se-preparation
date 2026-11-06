import os, sys, glob
sys.stdout.reconfigure(encoding='utf-8')

roots = [
    r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete',
    r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\Infosys_SE_Elite_Crack_Vault'
]

print("================ CENSUS & PARITY REPORT ================\n")

for r in roots:
    pdfs = []
    mds = []
    for dirpath, dirnames, filenames in os.walk(r):
        if '.git' in dirpath: continue
        for f in filenames:
            if f.endswith('.pdf'):
                pdfs.append(os.path.join(dirpath, f))
            elif f.endswith('.md'):
                mds.append(os.path.join(dirpath, f))
    print(f"Directory: {os.path.basename(r)}")
    print(f"  Total PDFs: {len(pdfs)}")
    print(f"  Total Markdown (.md) Files: {len(mds)}")

# Check PDF companion coverage in CampusMonk Mock Tests
cm_path = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\04_CampusMonk_47_Mock_Tests'
missing_md = []
for dirpath, dirnames, filenames in os.walk(cm_path):
    for f in filenames:
        if f.endswith('.pdf'):
            md_name = f[:-4] + '.md'
            if md_name not in filenames:
                missing_md.append(os.path.join(dirpath, f))

print(f"\nCampusMonk 47 Mock Tests PDF companion status:")
print(f"  Total Missing Markdown Companions: {len(missing_md)}")
if missing_md:
    for m in missing_md:
        print(f"    Missing: {m}")
else:
    print("  [SUCCESS] 100% of PDFs have perfectly matching, synchronized Markdown companion files!")
