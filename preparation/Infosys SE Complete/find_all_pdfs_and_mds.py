import os, sys

sys.stdout.reconfigure(encoding='utf-8')
base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete'

pdf_census = []

for root, dirs, files in os.walk(base):
    # skip images or git
    if '.git' in root or 'images' in root:
        continue
    pdfs = [f for f in files if f.endswith('.pdf')]
    mds = [f for f in files if f.endswith('.md')]
    if pdfs:
        rel_path = os.path.relpath(root, base)
        pdf_census.append((rel_path, pdfs, mds))

print(f"=== COMPLETE PDF CENSUS (Total folders with PDFs: {len(pdf_census)}) ===")
for rel_path, pdfs, mds in pdf_census:
    print(f"\nFolder: [{rel_path}]")
    print(f"  PDFs ({len(pdfs)}): {pdfs[:5]}{'...' if len(pdfs) > 5 else ''}")
    print(f"  MDs  ({len(mds)}): {mds[:5]}{'...' if len(mds) > 5 else ''}")

