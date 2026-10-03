import subprocess
import os
import shutil

html_path = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\INFOSYS_SE_MASTER_SYLLABUS_TRACKER.html"
pdf_path1 = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\INFOSYS_SE_MASTER_SYLLABUS_TRACKER.pdf"
pdf_path2 = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\INFOSYS_SE_MASTER_SYLLABUS_TRACKER.pdf"
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

print("Compiling 10-Page Ultra-Exhaustive Master Tracker...")

cmd = [
    chrome_path,
    "--headless=new",
    f"--print-to-pdf={pdf_path1}",
    "--no-pdf-header-footer",
    "--disable-gpu",
    html_path
]

subprocess.run(cmd, check=True)
shutil.copyfile(pdf_path1, pdf_path2)

import fitz
doc = fitz.open(pdf_path1)
print(f"Compilation Successful! Total Pages: {len(doc)}")
for i, page in enumerate(doc):
    text = page.get_text()
    first_line = text.split("\n")[0] if text else ""
    print(f"Page {i+1}: {len(text)} chars | {first_line[:55]}")
