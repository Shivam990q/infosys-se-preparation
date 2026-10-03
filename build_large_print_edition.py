import os
import subprocess
import shutil
import pymupdf

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
html_path = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\INFOSYS_SE_MASTER_PRINT_EDITION.html"
pdf_path1 = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\INFOSYS_SE_MASTER_SYLLABUS_TRACKER.pdf"
pdf_path2 = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\INFOSYS_SE_MASTER_SYLLABUS_TRACKER.pdf"

head_style = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Infosys Systems Engineer (SE) Master Preparation Tracker - High Legibility Print Edition</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap');

  @page {
    size: A4 portrait;
    margin: 6mm 7.5mm 6mm 7.5mm;
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
    font-size: 8.8pt;
    line-height: 1.34;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .page {
    width: 100%;
    min-height: 283mm;
    page-break-after: always;
    position: relative;
    padding-bottom: 8.5mm;
  }

  .page:last-child {
    page-break-after: auto;
  }

  /* Header & Footer */
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #0284c7;
    padding-bottom: 3px;
    margin-bottom: 5px;
    font-size: 7.6pt;
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
    border-top: 1.5px solid #cbd5e1;
    padding-top: 3px;
    font-size: 7.2pt;
    color: #64748b;
    font-weight: 600;
  }

  /* Hero Banner */
  .hero-banner {
    background: linear-gradient(135deg, #002b49 0%, #00509d 50%, #0284c7 100%);
    color: white;
    padding: 10px 14px;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  .hero-title {
    font-size: 14.5pt;
    font-weight: 800;
    letter-spacing: -0.3px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .hero-sub {
    font-size: 8.2pt;
    opacity: 0.95;
    margin-top: 2.5px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }

  /* Section Titles */
  .sec-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0f172a;
    color: white;
    padding: 5px 9px;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 4.5px;
    font-size: 9.8pt;
    font-weight: 800;
  }

  .sec-badge {
    background: #f59e0b;
    color: #000;
    font-size: 7.2pt;
    font-weight: 800;
    padding: 1.5px 5px;
    border-radius: 2.5px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
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
    gap: 6px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
  }

  .card {
    background: #ffffff;
    border: 1.5px solid #cbd5e1;
    border-radius: 4px;
    padding: 5.5px 8px;
  }

  .card-header {
    font-size: 8.4pt;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  /* Large Print Tables */
  table.tracker-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 3.5px;
    margin-bottom: 4.5px;
  }

  table.tracker-table th {
    background: #0f172a;
    color: #ffffff;
    font-size: 7.8pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 4px 6px;
    text-align: left;
    border: 1px solid #0f172a;
  }

  table.tracker-table td {
    padding: 4px 5.5px;
    border: 1px solid #cbd5e1;
    font-size: 8.5pt;
    line-height: 1.32;
    vertical-align: middle;
  }

  table.tracker-table tr:nth-child(even) td {
    background: #f8fafc;
  }

  /* Checkbox styling - LARGE FOR PEN TICKING */
  .chk {
    display: inline-block;
    width: 12.0px;
    height: 12.0px;
    border: 1.6px solid #475569;
    border-radius: 2.5px;
    margin-right: 3px;
    vertical-align: middle;
    background: #fff;
  }

  .chk-group {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 7.8pt;
    font-weight: 700;
    color: #334155;
  }

  .topic-name {
    font-weight: 800;
    color: #0f172a;
    font-size: 9.0pt;
    line-height: 1.25;
  }

  .topic-sub {
    font-size: 7.5pt;
    color: #64748b;
    margin-top: 1.5px;
    line-height: 1.20;
    font-weight: 500;
  }

  .fire-icon {
    color: #ef4444;
    font-weight: 800;
    font-size: 8.5pt;
  }

  .star-icon {
    color: #f59e0b;
    font-weight: 800;
    font-size: 8.5pt;
  }

  .weight-tag {
    display: inline-block;
    padding: 1.5px 4.5px;
    border-radius: 2.5px;
    font-size: 6.8pt;
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
    border: 1.2px solid #c7d2fe;
    color: #312e81;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.0pt;
    font-weight: 600;
    padding: 1.5px 4px;
    border-radius: 2.5px;
    margin-top: 2px;
    word-break: break-all;
  }

  .file-tag {
    display: block;
    background: #f1f5f9;
    border: 1.2px solid #cbd5e1;
    color: #0f172a;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.0pt;
    font-weight: 600;
    padding: 1.5px 4px;
    border-radius: 2.5px;
    margin-top: 1.5px;
    word-break: break-all;
  }

  /* Callout Boxes */
  .callout {
    border-radius: 4px;
    padding: 4.5px 8px;
    margin: 4.5px 0;
    font-size: 8.2pt;
    line-height: 1.32;
    display: flex;
    gap: 5px;
    align-items: flex-start;
  }

  .callout-danger {
    background: #fef2f2;
    border: 1.2px solid #fecaca;
    color: #991b1b;
  }

  .callout-info {
    background: #f0f9ff;
    border: 1.2px solid #bae6fd;
    color: #0369a1;
  }

  .callout-gold {
    background: #fefce8;
    border: 1.2px solid #fef08a;
    color: #854d0e;
  }

  .mono {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.8pt;
    font-weight: 600;
    background: #e2e8f0;
    padding: 0.5px 3px;
    border-radius: 2px;
    color: #0f172a;
  }

  /* Micro stats */
  .stat-badge {
    background: #f8fafc;
    border: 1.5px solid #cbd5e1;
    border-radius: 4px;
    padding: 3.5px 6px;
    text-align: center;
  }
  .stat-val { font-size: 10.5pt; font-weight: 800; color: #0284c7; }
  .stat-lbl { font-size: 6.6pt; text-transform: uppercase; color: #64748b; font-weight: 700; }

  /* External Resource Box */
  .ext-box {
    background: #f8fafc;
    border: 1.2px solid #cbd5e1;
    border-left: 4px solid #4f46e5;
    border-radius: 4px;
    padding: 5px 8px;
    margin-top: 4.5px;
  }
  .ext-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5px;
  }
  .ext-title {
    font-size: 8.0pt;
    font-weight: 800;
    color: #3730a3;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .ext-badge {
    font-size: 6.6pt;
    background: #e0e7ff;
    color: #312e81;
    font-weight: 800;
    padding: 1.2px 4px;
    border-radius: 2px;
    text-transform: uppercase;
  }
  .ext-col {
    font-size: 7.2pt;
    color: #334155;
    line-height: 1.26;
  }
  .ext-col b {
    font-size: 7.6pt;
    display: block;
    margin-bottom: 1.5px;
  }
</style>
</head>
<body>
"""

print("Base large styles ready.")
