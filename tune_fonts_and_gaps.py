import os
import subprocess
import shutil
import pymupdf

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
html_path = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\test_tune.html"
pdf_path = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\test_tune.pdf"

with open("compile_complete_tracker.py", "r", encoding="utf-8") as f:
    orig = f.read()

# Let's extract full_html generation parts or replace the head_style
# Let's inspect head_style in compile_complete_tracker.py
new_head_style = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Infosys Systems Engineer (SE) Master Preparation Tracker & Resource Vault</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  @page {
    size: A4 portrait;
    margin: 4mm 5mm 4mm 5mm;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #0f172a;
    background: #ffffff;
    font-size: 7.4pt;
    line-height: 1.28;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .page {
    width: 100%;
    min-height: 285mm;
    page-break-after: always;
    position: relative;
    padding-bottom: 7.5mm;
  }

  .page:last-child {
    page-break-after: auto;
  }

  /* Header & Footer */
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1.5px solid #0284c7;
    padding-bottom: 2.5px;
    margin-bottom: 4.5px;
    font-size: 6.8pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #0369a1;
  }

  .page-footer {
    position: absolute;
    bottom: 1mm;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #cbd5e1;
    padding-top: 2.5px;
    font-size: 6.3pt;
    color: #64748b;
  }

  /* Hero Banner */
  .hero-banner {
    background: linear-gradient(135deg, #002b49 0%, #00509d 50%, #0284c7 100%);
    color: white;
    padding: 8.5px 12px;
    border-radius: 4.5px;
    margin-bottom: 4.5px;
  }

  .hero-title {
    font-size: 13pt;
    font-weight: 800;
    letter-spacing: -0.3px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .hero-sub {
    font-size: 7.2pt;
    opacity: 0.92;
    margin-top: 2px;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
  }

  /* Section Titles */
  .sec-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0f172a;
    color: white;
    padding: 4px 7px;
    border-radius: 3.5px;
    margin-top: 4px;
    margin-bottom: 3.5px;
    font-size: 8.5pt;
    font-weight: 700;
  }

  .sec-badge {
    background: #f59e0b;
    color: #000;
    font-size: 6.3pt;
    font-weight: 800;
    padding: 1.2px 4px;
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .sec-badge.fire-badge {
    background: #ef4444;
    color: #fff;
  }

  .sec-badge.star-badge {
    background: #10b981;
    color: #fff;
  }

  /* Grid & Cards */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4.5px;
  }

  .grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 4.5px;
  }

  .card {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    padding: 4.5px 6.5px;
  }

  .card-header {
    font-size: 7.2pt;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 2.5px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* Tables with slightly increased gapings */
  table.tracker-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2.5px;
    margin-bottom: 3.5px;
  }

  table.tracker-table th {
    background: #0f172a;
    color: #ffffff;
    font-size: 6.7pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    padding: 3.2px 5px;
    text-align: left;
    border: 1px solid #0f172a;
  }

  table.tracker-table td {
    padding: 2.6px 4px;
    border: 1px solid #e2e8f0;
    font-size: 7.1pt;
    line-height: 1.25;
    border-bottom: 1px solid #e2e8f0;
    vertical-align: middle;
  }

  table.tracker-table tr:nth-child(even) td {
    background: #f8fafc;
  }

  /* Checkbox styling */
  .chk {
    display: inline-block;
    width: 9.5px;
    height: 9.5px;
    border: 1.2px solid #64748b;
    border-radius: 2px;
    margin-right: 2.5px;
    vertical-align: middle;
    background: #fff;
  }

  .chk-group {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 6.4pt;
    font-weight: 600;
    color: #475569;
  }

  .topic-name {
    font-weight: 700;
    color: #0f172a;
    font-size: 7.3pt;
  }

  .topic-sub {
    font-size: 6.2pt;
    color: #64748b;
    margin-top: 0.8px;
    line-height: 1.15;
  }

  .fire-icon {
    color: #ef4444;
    font-weight: 800;
    font-size: 7.0pt;
  }

  .star-icon {
    color: #f59e0b;
    font-weight: 800;
    font-size: 7.0pt;
  }

  .weight-tag {
    display: inline-block;
    padding: 1px 3.5px;
    border-radius: 2px;
    font-size: 5.8pt;
    font-weight: 800;
    text-transform: uppercase;
  }

  .weight-2-5 { background: #fee2e2; color: #991b1b; border: 1px solid #f87171; }
  .weight-2-0 { background: #fef3c7; color: #92400e; border: 1px solid #fbbf24; }
  .weight-1-0 { background: #e0f2fe; color: #075985; border: 1px solid #38bdf8; }

  /* Folder Tag */
  .folder-tag {
    display: block;
    background: #eef2ff;
    border: 1px solid #c7d2fe;
    color: #3730a3;
    font-family: 'JetBrains Mono', monospace;
    font-size: 5.9pt;
    padding: 1.2px 3.5px;
    border-radius: 2px;
    margin-top: 1.2px;
    word-break: break-all;
  }

  .file-tag {
    display: block;
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    color: #0f172a;
    font-family: 'JetBrains Mono', monospace;
    font-size: 5.9pt;
    padding: 1.2px 3.5px;
    border-radius: 2px;
    margin-top: 1px;
    word-break: break-all;
  }

  /* Callout Boxes */
  .callout {
    border-radius: 4px;
    padding: 3.5px 6.5px;
    margin: 3.5px 0;
    font-size: 6.8pt;
    display: flex;
    gap: 4.5px;
    align-items: flex-start;
  }

  .callout-danger {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #991b1b;
  }

  .callout-info {
    background: #f0f9ff;
    border: 1px solid #bae6fd;
    color: #0369a1;
  }

  .callout-gold {
    background: #fefce8;
    border: 1px solid #fef08a;
    color: #854d0e;
  }

  .mono {
    font-family: 'JetBrains Mono', monospace;
    font-size: 6.6pt;
    background: #f1f5f9;
    padding: 0.5px 2.5px;
    border-radius: 2px;
    color: #0f172a;
  }

  /* Micro stats */
  .stat-badge {
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 3px;
    padding: 2.5px 4.5px;
    text-align: center;
  }
  .stat-val { font-size: 9.0pt; font-weight: 800; color: #0284c7; }
  .stat-lbl { font-size: 5.8pt; text-transform: uppercase; color: #64748b; font-weight: 600; }

  /* External Resource Box */
  .ext-box {
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    border-left: 3.5px solid #4f46e5;
    border-radius: 4px;
    padding: 4px 7px;
    margin-top: 3.5px;
  }
  .ext-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
  }
  .ext-title {
    font-size: 7.0pt;
    font-weight: 800;
    color: #3730a3;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .ext-badge {
    font-size: 5.7pt;
    background: #e0e7ff;
    color: #312e81;
    font-weight: 700;
    padding: 1px 3.5px;
    border-radius: 2px;
    text-transform: uppercase;
  }
  .ext-col {
    font-size: 6.0pt;
    color: #334155;
    line-height: 1.22;
  }
  .ext-col b {
    font-size: 6.2pt;
    display: block;
    margin-bottom: 1.5px;
  }
</style>
</head>
<body>
"""

# Let's replace head_style in the script
import re
new_code = re.sub(r'head_style = """.*?"""\n\np1', 'head_style = """' + new_head_style + '"""\n\np1', orig, flags=re.DOTALL)

with open("test_compile.py", "w", encoding="utf-8") as f:
    f.write(new_code)

print("Wrote test_compile.py")
