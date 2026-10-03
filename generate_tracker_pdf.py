import os
import subprocess

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Infosys Systems Engineer (SE) Master Preparation Tracker</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  @page {
    size: A4 portrait;
    margin: 8mm 8mm 8mm 8mm;
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
    font-size: 8.5pt;
    line-height: 1.35;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .page {
    width: 100%;
    min-height: 275mm;
    page-break-after: always;
    position: relative;
    padding-bottom: 12mm;
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
    padding-bottom: 4px;
    margin-bottom: 8px;
    font-size: 7pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #0369a1;
  }

  .page-footer {
    position: absolute;
    bottom: 2mm;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #cbd5e1;
    padding-top: 4px;
    font-size: 7pt;
    color: #64748b;
  }

  /* Hero Banner on Page 1 */
  .hero-banner {
    background: linear-gradient(135deg, #003366 0%, #00509d 50%, #0284c7 100%);
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .hero-title {
    font-size: 15pt;
    font-weight: 800;
    letter-spacing: -0.3px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .hero-sub {
    font-size: 8pt;
    opacity: 0.9;
    margin-top: 3px;
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
    padding: 6px 10px;
    border-radius: 6px;
    margin-top: 8px;
    margin-bottom: 6px;
    font-size: 9.5pt;
    font-weight: 700;
  }

  .sec-badge {
    background: #f59e0b;
    color: #000;
    font-size: 7pt;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: 4px;
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
    gap: 8px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
  }

  .card {
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 7px 9px;
    background: #ffffff;
    margin-bottom: 6px;
  }

  .card.priority-high {
    border-left: 4px solid #ef4444;
    background: #fffafa;
  }

  .card.priority-med {
    border-left: 4px solid #f59e0b;
    background: #fffdf5;
  }

  .card.priority-normal {
    border-left: 4px solid #0284c7;
    background: #f8fafc;
  }

  /* Table styling */
  table.tracker-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 8px;
    font-size: 8pt;
  }

  table.tracker-table th {
    background: #1e293b;
    color: white;
    text-align: left;
    padding: 5px 6px;
    font-weight: 700;
    font-size: 7.5pt;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  table.tracker-table td {
    padding: 4.5px 6px;
    border-bottom: 1px solid #e2e8f0;
    vertical-align: middle;
  }

  table.tracker-table tr:nth-child(even) td {
    background: #f8fafc;
  }

  /* Checkbox styling */
  .chk {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1.5px solid #64748b;
    border-radius: 2px;
    margin-right: 3px;
    vertical-align: middle;
    background: #fff;
  }

  .chk-group {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 7pt;
    font-weight: 600;
    color: #475569;
  }

  .topic-name {
    font-weight: 700;
    color: #0f172a;
    font-size: 8pt;
  }

  .topic-sub {
    font-size: 7pt;
    color: #64748b;
    margin-top: 1px;
    line-height: 1.25;
  }

  .fire-icon {
    color: #ef4444;
    font-weight: 800;
  }

  .star-icon {
    color: #f59e0b;
    font-weight: 800;
  }

  .weight-tag {
    display: inline-block;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 6.5pt;
    font-weight: 800;
    text-transform: uppercase;
  }

  .weight-2-5 { background: #fee2e2; color: #991b1b; border: 1px solid #f87171; }
  .weight-2-0 { background: #fef3c7; color: #92400e; border: 1px solid #fbbf24; }
  .weight-1-0 { background: #e0f2fe; color: #075985; border: 1px solid #38bdf8; }

  /* Callout Boxes */
  .callout {
    border-radius: 6px;
    padding: 6px 10px;
    margin: 6px 0;
    font-size: 7.5pt;
    display: flex;
    gap: 8px;
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
    font-size: 7.5pt;
    background: #f1f5f9;
    padding: 1px 3px;
    border-radius: 3px;
    color: #0f172a;
  }

  /* Micro stats */
  .stat-badge {
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    padding: 4px 6px;
    text-align: center;
  }
  .stat-val { font-size: 11pt; font-weight: 800; color: #0284c7; }
  .stat-lbl { font-size: 6.5pt; text-transform: uppercase; color: #64748b; font-weight: 600; }
</style>
</head>
<body>

<!-- ==========================================
     PAGE 1: MASTER BLUEPRINT & SCORECARD
     ========================================== -->
<div class="page">
  <div class="page-header">
    <span>Infosys Systems Engineer (SE) Recruitment • Master Preparation Tracker</span>
    <span>Target Drive: ~Oct 05 • 60 Qs • 75+ Marks</span>
  </div>

  <div class="hero-banner">
    <div class="hero-title">
      <span>🚀 INFOSYS SE 100% BULLETPROOF SYLLABUS TRACKER</span>
    </div>
    <div class="hero-sub">
      <span>Role: Systems Engineer (₹3.6 LPA) • DSE Upgrade (₹6.5 LPA) • SP Upgrade (₹9.5 LPA)</span>
      <span>Official TAP Cell Verified 7-Section Blueprint</span>
    </div>
  </div>

  <div class="grid-3" style="margin-bottom: 8px;">
    <div class="stat-badge">
      <div class="stat-val">60 Qs / 75+ M</div>
      <div class="stat-lbl">Exam Size (120 Mins)</div>
    </div>
    <div class="stat-badge">
      <div class="stat-val">~42 - 46 Marks</div>
      <div class="stat-lbl">Target Passing Cutoff (~60-65%)</div>
    </div>
    <div class="stat-badge">
      <div class="stat-val">14 Qs = 30 M</div>
      <div class="stat-lbl">High-ROI Core (Sec 4, 5, 6: 40% Marks!)</div>
    </div>
  </div>

  <div class="sec-heading">
    <span>📋 OFFICIAL 7-SECTION EXAM ARCHITECTURE & WEIGHTAGE MATRIX</span>
    <span class="sec-badge star-badge">Mandatory Sectional Cutoffs</span>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 25%;">Section Name</th>
        <th style="width: 8%;">Qs</th>
        <th style="width: 8%;">Marks</th>
        <th style="width: 10%;">Time</th>
        <th style="width: 12%;">Weightage</th>
        <th style="width: 12%;">Safe Cutoff</th>
        <th style="width: 25%;">Primary Strategy & Focus</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>1. Reasoning Ability</b></td>
        <td>15</td>
        <td>15 M</td>
        <td>25 min</td>
        <td><span class="weight-tag weight-1-0">1.0 M / Q</span></td>
        <td><b>10+ Qs</b> (10 M)</td>
        <td>Syllogisms, Seating Arrangement, Data Sufficiency</td>
      </tr>
      <tr>
        <td><b>2. Technical Ability (Quant)</b></td>
        <td>10</td>
        <td>10 M</td>
        <td>35 min</td>
        <td><span class="weight-tag weight-1-0">1.0 M / Q</span></td>
        <td><b>7+ Qs</b> (7 M)</td>
        <td>Time & Work, TSD, PnC, Probability (3.5 mins/Q!)</td>
      </tr>
      <tr>
        <td><b>3. Verbal Ability</b></td>
        <td>20</td>
        <td>20 M</td>
        <td>20 min</td>
        <td><span class="weight-tag weight-1-0">1.0 M / Q</span></td>
        <td><b>13+ Qs</b> (13 M)</td>
        <td>Fast skimming RC, Fillers, Para Jumbles (1 min/Q)</td>
      </tr>
      <tr style="background: #fff1f2;">
        <td><b>4. Pseudo Code 🔥🔥🔥</b></td>
        <td><b>5</b></td>
        <td><b>10 M</b></td>
        <td><b>10 min</b></td>
        <td><span class="weight-tag weight-2-0">2.0 M / Q</span></td>
        <td><b>3+ Qs</b> (6 M)</td>
        <td><b>Double Weightage!</b> Bitwise, Recursion, Trace Ledger</td>
      </tr>
      <tr style="background: #fef2f2;">
        <td><b>5. Numeric Puzzle Solving 🔥🔥🔥</b></td>
        <td><b>4</b></td>
        <td><b>10 M</b></td>
        <td><b>10 min</b></td>
        <td><span class="weight-tag weight-2-5">2.5 M / Q</span></td>
        <td><b>2+ Qs</b> (5 M)</td>
        <td><b>Highest Weightage!</b> Number wheels, 3x3 grids, triangles</td>
      </tr>
      <tr style="background: #fffbeb;">
        <td><b>6. English Grammar 🔥🔥🔥</b></td>
        <td><b>5</b></td>
        <td><b>10 M</b></td>
        <td><b>10 min</b></td>
        <td><span class="weight-tag weight-2-0">2.0 M / Q</span></td>
        <td><b>4+ Qs</b> (8 M)</td>
        <td><b>Double Weightage!</b> Subject-Verb Agreement, Parallelism</td>
      </tr>
      <tr>
        <td><b>7. English Writing</b></td>
        <td>1</td>
        <td>Qual.</td>
        <td>10 min</td>
        <td>Subjective</td>
        <td>Clear</td>
        <td>Structured Email/Short Essay (100-150 words, Hook+Body+CTA)</td>
      </tr>
      <tr style="font-weight: 800; background: #e2e8f0;">
        <td>TOTAL / AGGREGATE</td>
        <td>60</td>
        <td>75+ M</td>
        <td>120 min</td>
        <td>—</td>
        <td><b>48+ Marks</b></td>
        <td><b>Guarantees Top 5% Selection & Interview Call!</b></td>
      </tr>
    </tbody>
  </table>

  <div class="callout callout-danger">
    <div>⚠️</div>
    <div>
      <b>THE 4 NON-NEGOTIABLE EXAM PLATFORM LAWS (DO NOT FORGET):</b><br>
      <b>1. Zero Negative Marking:</b> Har sawal me answer mark karna mandatory hai. Timer khatam hone se pehle best guess zaroor lagayein!<br>
      <b>2. Strict Forward Navigation:</b> Ek baar "NEXT" click kiya toh peeche wapas nahi aa sakte! Section ke andar bhi backward lock hota hai.<br>
      <b>3. No On-Screen Calculator:</b> Sab kuch rough register sheet par manually multiply/divide karna hoga.<br>
      <b>4. AI Eye/Head Proctoring:</b> Rough sheet ko keyboard ke theek aage rakhein taaki aapka face webcam frame se bahar na dikhe.
    </div>
  </div>

  <div class="sec-heading">
    <span>🎯 HOW TO USE THIS MASTER TRACKER (THE 30-70 RULE)</span>
    <span class="sec-badge">Daily Protocol</span>
  </div>

  <div class="grid-2">
    <div class="card priority-high">
      <b>📖 30% Theory & Lectures (Max 2 Hours/Day)</b>
      <p style="font-size: 7.2pt; color: #475569; margin-top: 2px;">
        Sirf formulas, logic, aur bitwise/grammar ke core rules samajhne ke liye video dekhein. Notes register me table format me banayein.
      </p>
    </div>
    <div class="card priority-med">
      <b>✍️ 70% Physical Register Practice (5 to 6 Hours/Day)</b>
      <p style="font-size: 7.2pt; color: #475569; margin-top: 2px;">
        Haath se calculation karein. Har topic ke kam se kam 25-30 sawal rough sheet par nikaalein bina kisi calculator ke.
      </p>
    </div>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Confidential & Student Exclusive</span>
    <span>Page 1 of 8</span>
  </div>
</div>


<!-- ==========================================
     PAGE 2: SECTION 4 - PSEUDO CODE (2 MARKS)
     ========================================== -->
<div class="page">
  <div class="page-header">
    <span>Section 4: Pseudo Code • 5 Questions • 10 Marks • 10 Mins • Double Weightage (2 M / Q)</span>
    <span>Vault: Section III - Pseudo Codes</span>
  </div>

  <div class="sec-heading">
    <span>💻 SECTION 4: PSEUDO CODE (THE HIGHEST ROI TECHNICAL SCORER)</span>
    <span class="sec-badge fire-badge">🔥🔥🔥 2.0 MARKS PER QUESTION</span>
  </div>

  <div class="callout callout-gold">
    <div>💡</div>
    <div>
      <b>THE SECRET WEAPON: "THE VARIABLE TRACE LEDGER"</b><br>
      Dimaag me dry run mat karo! Apne register me 3-4 columns banao: <span class="mono">| Line No | a | b | c | Condition (T/F) |</span>. Har step par variable ki value strike-through karke nayi value likho. 100% accuracy guaranteed.
    </div>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 25%;">Subtopic & Syntax Pattern</th>
        <th style="width: 14%;">Yield Rating</th>
        <th style="width: 33%;">Key Logic & Recurring Traps to Master</th>
        <th style="width: 14%;">Register Target</th>
        <th style="width: 14%;">Revision Check</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Bitwise Operators</div>
          <div class="topic-sub">XOR (^), AND (&), OR (|), NOT (~), Shifts (<<, >>)</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <span class="mono">a ^ a = 0</span>, <span class="mono">a ^ 0 = a</span>, commutative & associative.<br>
          • <span class="mono">a & (a - 1)</span> clears the lowest set bit.<br>
          • Left Shift <span class="mono">a &lt;&lt; k = a * 2^k</span>, Right Shift <span class="mono">a &gt;&gt; k = floor(a / 2^k)</span>.<br>
          • Bitwise operator precedence: lower than relational operators (<, >)!
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 20 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 3)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. Recursion & Call Trees</div>
          <div class="topic-sub">Base cases, Multiple tree branches, Accumulator returns</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • Draw recursion trees on paper with return values.<br>
          • Trap: Tail call vs Head call (Order of execution changes).<br>
          • Global / Static variables inside recursion retain modified values!<br>
          • Base condition checks: <span class="mono">if (n &lt;= 1) return n;</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 4)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 9)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. Nested Loops & Iteration</div>
          <div class="topic-sub">Dependent inner loops, Step intervals, Jump breaks</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Outer loop <span class="mono">for i = 1 to n</span>, inner loop <span class="mono">for j = i to n</span>.<br>
          • Trap: <span class="mono">continue</span> skips remainder of current iteration.<br>
          • Step changes: <span class="mono">i = i + 2</span> or <span class="mono">i = i * 2</span> (logarithmic steps).<br>
          • Track final value of loop counter after loop termination!
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 4)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 9)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">4. Arrays & Pointer Math</div>
          <div class="topic-sub">1-based vs 0-based index traps, Matrix indexing</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Infosys pseudocode often uses <b>1-based indexing</b>: <span class="mono">arr[1]</span> is the first element!<br>
          • Array boundary overflow: <span class="mono">arr[i + 1]</span> when <span class="mono">i = n</span>.<br>
          • Swapping logic without third variable: <span class="mono">a = a ^ b; b = a ^ b; a = a ^ b;</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 12 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 5)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 9)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Modulo & Integer Division</div>
          <div class="topic-sub">Truncation, % operator with negative numbers, Parity</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Integer division truncates towards zero: <span class="mono">7 / 2 = 3</span>.<br>
          • Modulo with power of 2: <span class="mono">n % 8 == n & 7</span>.<br>
          • Parity checks: <span class="mono">if (n & 1)</span> means odd number!
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 10 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 5)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 9)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">6. Conditional Short-Circuiting</div>
          <div class="topic-sub">Logical AND / OR evaluation order and side-effects</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • In <span class="mono">(A && ++b)</span>: If A is False, <span class="mono">++b</span> is NEVER executed!<br>
          • In <span class="mono">(A || ++b)</span>: If A is True, <span class="mono">++b</span> is NEVER executed!<br>
          • Infosys loves testing whether a variable incremented or stayed unchanged.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 10 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 6)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 9)</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="card priority-normal">
    <b>📂 DIRECTORY VAULT FOR PSEUDO CODE:</b><br>
    <span class="mono">Course_844567_Full\2. Infosys System Eng Prep- Apti + Pseudo\Section III - Pseudo Codes\1. Pseudo Codes Technical ebook.pdf</span><br>
    <span style="font-size: 7.2pt; color: #475569;">Is PDF ke pehle 60 solved questions seedha register me bina dekhe solve karo.</span>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 4 Pseudo Code</span>
    <span>Page 2 of 8</span>
  </div>
</div>


<!-- ==========================================
     PAGE 3: SECTION 5 - NUMERIC PUZZLES (2.5 M)
     ========================================== -->
<div class="page">
  <div class="page-header">
    <span>Section 5: Numeric Puzzle Solving • 4 Questions • 10 Marks • 10 Mins • HIGHEST WEIGHTAGE (2.5 M / Q)</span>
    <span>Vault: Section VI - Puzzle Solving</span>
  </div>

  <div class="sec-heading">
    <span>🧩 SECTION 5: NUMERIC PUZZLE SOLVING (MAX MARKS PER QUESTION)</span>
    <span class="sec-badge fire-badge">🔥🔥🔥 2.5 MARKS PER QUESTION</span>
  </div>

  <div class="callout callout-danger">
    <div>⚡</div>
    <div>
      <b>WHY THIS SECTION DECIDES YOUR INTERVIEW SHORTLIST:</b><br>
      Sirf 4 questions hain lekin <b>10 Marks</b> carry karte hain! Agar aapne 3 questions bhi sahi nikaal liye toh aapke <b>7.5 marks</b> confirm ho jate hain, jo akele sectional cutoff ko 150% paar kara deta hai.
    </div>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 25%;">Puzzle Family & Shape</th>
        <th style="width: 14%;">Yield Rating</th>
        <th style="width: 33%;">Pattern Recognition Framework & Logic</th>
        <th style="width: 14%;">Register Target</th>
        <th style="width: 14%;">Revision Check</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Circular Wheel Puzzles</div>
          <div class="topic-sub">Clockwise jumps, Opposite sector math, Multi-tier wheels</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Opposite Number Rule:</b> <span class="mono">Opposite = n^2 + 1</span>, <span class="mono">n^3 - 1</span>, or <span class="mono">2n + 3</span>.<br>
          • <b>Clockwise Progression:</b> Constant multiplication + alternating addition (<span class="mono">*2+1, *2-1</span>).<br>
          • <b>Prime Numbers Circle:</b> 2, 3, 5, 7, 11, 13, 17, 19 in consecutive sectors.<br>
          • Inner wheel vs Outer wheel: Difference or product of corresponding segments.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Puzzles</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 3)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. 3x3 & 4x4 Grid Matrices</div>
          <div class="topic-sub">Row-wise operations, Column-wise products, Cross math</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • Check <b>Row-wise Sum</b> vs <b>Column-wise Sum</b> (Is it constant, e.g., 25 or 50?).<br>
          • <b>Third Column Rule:</b> <span class="mono">(Col 1 * Col 2) / 2 = Col 3</span> or <span class="mono">Col 1^2 + Col 2^2 = Col 3</span>.<br>
          • <b>Diagonal Symmetry:</b> Sum of main diagonals equals center element * 2.<br>
          • Average rule: Center element is average of 4 surrounding numbers.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Puzzles</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 4)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. Geometric Vertex Puzzles</div>
          <div class="topic-sub">Triangles, Stars, Quadrilaterals with center value</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Triangle Center:</b> <span class="mono">Center = (Vertex 1 * Vertex 2) - Vertex 3</span>.<br>
          • <b>Sum of Squares:</b> <span class="mono">Center = sqrt(A^2 + B^2 + C^2)</span>.<br>
          • <b>Star Shapes (5 or 6 points):</b> Opposite points sum or difference equals inner point.<br>
          • Multiplier rule: <span class="mono">(A + B + C) * constant = Center</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 12 Puzzles</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 5)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 9)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">4. Matchstick & Shape Logic</div>
          <div class="topic-sub">Move 1 or 2 sticks, Count of squares/rectangles</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Converting digits: 6 into 9, 8 into 0 or 9, 3 into 5, 7 into 1.<br>
          • Arithmetic equation balances: e.g., <span class="mono">6 + 4 = 4</span> -> move 1 stick to make <span class="mono">0 + 4 = 4</span> or <span class="mono">5 + 4 = 9</span>.<br>
          • Grid counting formula: Total squares in <span class="mono">n x m</span> grid = <span class="mono">sum(i * j)</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 10 Puzzles</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 6)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 9)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Number Series with Missing Terms</div>
          <div class="topic-sub">Alternating two series, Fibonacci derivatives, Cube differences</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Double difference: If first difference is not constant, check difference of differences.<br>
          • Geometric jumps: <span class="mono">*1 + 1, *2 + 2, *3 + 3, *4 + 4</span>.<br>
          • Alternating odd-even positions: Separate odd indexed series and even indexed series.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Series</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 6)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 9)</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="card priority-normal">
    <b>📂 DIRECTORY VAULT FOR NUMBER PUZZLES:</b><br>
    <span class="mono">Course_844567_Full\2. Infosys System Eng Prep- Apti + Pseudo\Section VI - Puzzle Solving\Number Puzzles Infosys & Other.pdf</span><br>
    <span class="mono">Course_844567_Full\2. Infosys System Eng Prep- Apti + Pseudo\Section VI - Puzzle Solving\LR (Number Puzzle Questions) - Solutions.md</span>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 5 Numeric Puzzle Solving</span>
    <span>Page 3 of 8</span>
  </div>
</div>


<!-- ==========================================
     PAGE 4: SECTION 6 - ENGLISH GRAMMAR (2 M)
     ========================================== -->
<div class="page">
  <div class="page-header">
    <span>Section 6: English Grammar • 5 Questions • 10 Marks • 10 Mins • Double Weightage (2 M / Q)</span>
    <span>Vault: Section IV & V - English & Grammar</span>
  </div>

  <div class="sec-heading">
    <span>✍️ SECTION 6: ENGLISH GRAMMAR (FASTEST 10 MARKS IN THE EXAM)</span>
    <span class="sec-badge fire-badge">🔥🔥🔥 2.0 MARKS PER QUESTION</span>
  </div>

  <div class="callout callout-info">
    <div>⏱️</div>
    <div>
      <b>TIME LEVERAGE:</b> Grammar questions take only <b>40 to 60 seconds</b> each! If you know the 15 Golden Rules below, you will score <b>8 to 10 marks in under 5 minutes</b>, giving you spare mental energy for the rest of the test.
    </div>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 25%;">Grammar Core Pillar</th>
        <th style="width: 14%;">Yield Rating</th>
        <th style="width: 33%;">The Non-Negotiable Rule & Infosys Trap</th>
        <th style="width: 14%;">Register Target</th>
        <th style="width: 14%;">Revision Check</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Subject-Verb Agreement (SVA)</div>
          <div class="topic-sub">Distance traps, Compound subjects, Collective nouns</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Intervening Phrases:</b> Words like <i>"along with", "as well as", "together with", "in addition to"</i> do NOT change the subject number! Verb agrees with the first subject.<br>
          • <b>Either/Or, Neither/Nor:</b> Verb agrees with the <b>closest</b> subject.<br>
          • Indefinite Pronouns: <i>"Each, Every, Everyone, Neither of, One of the"</i> take a <b>singular verb</b>!
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 20 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 2)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 7)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. Parallelism & Correlative Pairs</div>
          <div class="topic-sub">"Not only...but also", Series of actions, Comparison match</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • Structure following <i>"Not only"</i> MUST match structure following <i>"But also"</i> (Noun with Noun, Verb with Verb, Preposition with Preposition).<br>
          • Series consistency: <i>"She likes hiking, swimming, and to run"</i> ❌ -> <i>"and running"</i> ✅.<br>
          • Comparisons: Compare like things! <i>"The screen of phone A is better than phone B"</i> ❌ -> <i>"than that of phone B"</i> ✅.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 3)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 7)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. Conditional Sentences & Tense</div>
          <div class="topic-sub">Type 1, Type 2, Type 3 conditionals, Past Perfect</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Type 3 Trap:</b> <span class="mono">If + Past Perfect (had + V3) ... would have + V3</span>.<br>
          • Never use <i>"would have"</i> inside the <i>"if-clause"</i>!<br>
          • <b>Past of the Past:</b> In two completed past events, earlier event = <i>had + V3</i>, later event = <i>simple past (V2)</i>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 4)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">4. Modifiers & Dangling Participles</div>
          <div class="topic-sub">Introductory participial phrases, Misplaced adverbs</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Introductory phrase MUST be immediately followed by the noun it actually modifies.<br>
          • ❌ <i>"Walking down the garden, a snake bit him."</i> (The snake was not walking down the garden!).<br>
          • ✅ <i>"While he was walking down the garden, a snake bit him."</i>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 12 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 4)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Articles & Preposition Collocations</div>
          <div class="topic-sub">Definite article 'the', Fixed prepositions (senior to, fond of)</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Latin adjectives ending in <i>-ior</i> take <i>"to"</i>, NEVER <i>"than"</i>: <i>senior to, junior to, superior to, prefer to</i>.<br>
          • <i>"Between"</i> for 2 entities; <i>"Among"</i> for 3 or more.<br>
          • Zero article before languages, meals, sports unless specified.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 5)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="card priority-normal">
    <b>📂 DIRECTORY VAULT FOR ENGLISH GRAMMAR:</b><br>
    <span class="mono">Course_844567_Full\2. Infosys System Eng Prep- Apti + Pseudo\Section IV & V - English & Grammar\Module 4 - Error Detection- SVA\</span><br>
    <span class="mono">Course_844567_Full\2. Infosys System Eng Prep- Apti + Pseudo\Section IV & V - English & Grammar\Module 6 - Error- Parallelism\</span>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 6 English Grammar</span>
    <span>Page 4 of 8</span>
  </div>
</div>


<!-- ==========================================
     PAGE 5: SECTION 2 - TECHNICAL QUANT (10 Q)
     ========================================== -->
<div class="page">
  <div class="page-header">
    <span>Section 2: Technical Ability (Quant) • 10 Questions • 10 Marks • 35 Mins • ~3.5 Mins / Question</span>
    <span>Vault: Section II - Technical Ability ( Numerical )</span>
  </div>

  <div class="sec-heading">
    <span>📐 SECTION 2: QUANTITATIVE APTITUDE (DEEP CONCEPTS & TIME SURPLUS)</span>
    <span class="sec-badge">10 Qs • 35 MINS (3.5 MIN/Q)</span>
  </div>

  <div class="callout callout-gold">
    <div>💡</div>
    <div>
      <b>GOLDEN ADVANTAGE:</b> You have <b>3.5 minutes per question</b> in Quant! There is zero rush. Read the question twice, write down the variables clearly in your register, and solve step-by-step.
    </div>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 25%;">Aptitude Core Domain</th>
        <th style="width: 14%;">Yield Rating</th>
        <th style="width: 33%;">Formula & Shortcuts for Fast Register Solving</th>
        <th style="width: 14%;">Register Target</th>
        <th style="width: 14%;">Revision Check</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Time & Work, Pipes & Cisterns</div>
          <div class="topic-sub">LCM work method, Efficiency ratios, Alternate days</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • Assume Total Work = <span class="mono">LCM(days)</span>.<br>
          • Efficiency = <span class="mono">Total Work / Days</span>. Add efficiencies directly.<br>
          • Negative efficiency for emptying pipe: <span class="mono">Eff_net = Inflow - Outflow</span>.<br>
          • Work equivalence formula: <span class="mono">M1 * D1 * H1 / W1 = M2 * D2 * H2 / W2</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 25 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 2)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 6)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. Time, Speed & Distance, Trains</div>
          <div class="topic-sub">Relative speed, Boats & Streams, Harmonic average</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <span class="mono">km/hr -> m/s: multiply by 5/18</span>; <span class="mono">m/s -> km/hr: multiply by 18/5</span>.<br>
          • Average Speed for equal distances = <span class="mono">2xy / (x + y)</span>.<br>
          • Relative Speed: Same direction <span class="mono">(u - v)</span>; Opposite direction <span class="mono">(u + v)</span>.<br>
          • Boats: Downstream = <span class="mono">u + v</span>, Upstream = <span class="mono">u - v</span>; <span class="mono">Boat = (D + U)/2</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 25 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 3)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 6)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. Permutation & Combination</div>
          <div class="topic-sub">Vowels together/separated, Handshakes, Digits</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Vowels Together (Tie Method):</b> Treat all vowels as 1 single entity.<br>
          • <b>Vowels Never Together:</b> Total arrangements minus "Vowels Together".<br>
          • Circular Permutation: <span class="mono">(n - 1)!</span> for people around table.<br>
          • Handshake formula: <span class="mono">nC2 = n(n - 1) / 2</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 20 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 3)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 7)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">4. Probability (Bags & Dice)</div>
          <div class="topic-sub">At least one, Without replacement, Conditional</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>"At least one" shortcut:</b> <span class="mono">P(at least 1) = 1 - P(none)</span>.<br>
          • Marbles from bag without replacement: denominators decrease by 1 each pick.<br>
          • Two dice sum of 7: 6 outcomes out of 36 (<span class="mono">6/36 = 1/6</span>).
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 20 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 4)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 7)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Percentages, Profit & Loss</div>
          <div class="topic-sub">Successive %, False weights, Discount vs Markup</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Successive % formula: <span class="mono">Net = a + b + (ab / 100)</span>.<br>
          • Dishonest Dealer: <span class="mono">Gain % = (Error / (True Value - Error)) * 100</span>.<br>
          • Fraction shortcuts: <span class="mono">1/6 = 16.67%</span>, <span class="mono">1/7 = 14.28%</span>, <span class="mono">1/8 = 12.5%</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 20 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 2)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 6)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">6. Mixtures & Alligations</div>
          <div class="topic-sub">Rule of alligation, Repeated replacement formula</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Repeated dilution: <span class="mono">Remaining Pure Liquid = Initial * (1 - y / x)^n</span>.<br>
          • Cross ratio method for weighted averages: <span class="mono">(c - m) / (m - d) = q_d / q_c</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 4)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 7)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">7. Mensuration 2D & 3D</div>
          <div class="topic-sub">Cylinders, Cones, Spheres, Area/Volume % changes</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Cylinder Volume: <span class="mono">pi * r^2 * h</span>. Cone Volume: <span class="mono">(1/3) * pi * r^2 * h</span>.<br>
          • If radius increases by 10% and height decreases by 10%: <span class="mono">Net Vol = 1.1 * 1.1 * 0.9 = 1.089 (+8.9%)</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 5)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">8. Simple & Compound Interest</div>
          <div class="topic-sub">Difference between CI & SI for 2 and 3 years</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Difference for 2 years: <span class="mono">CI - SI = P * (R / 100)^2</span>.<br>
          • Difference for 3 years: <span class="mono">P * (R/100)^2 * ((300 + R) / 100)</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 12 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 5)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="card priority-normal">
    <b>📂 DIRECTORY VAULT FOR QUANTITATIVE APTITUDE:</b><br>
    <span class="mono">Course_844567_Full\2. Infosys System Eng Prep- Apti + Pseudo\Section II - Technical Ability ( Numerical )\2. Numerical ability - Quantitative Aptitude\</span><br>
    <span class="mono">Course_844567_Full\Purchased Documents\250 + Video Solution Quant Assorted Book.pdf</span>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 2 Technical Quant</span>
    <span>Page 5 of 8</span>
  </div>
</div>


<!-- ==========================================
     PAGE 6: SECTION 1 - REASONING ABILITY (15 Q)
     ========================================== -->
<div class="page">
  <div class="page-header">
    <span>Section 1: Reasoning Ability • 15 Questions • 15 Marks • 25 Mins • 1.6 Mins / Question</span>
    <span>Vault: Section I - Logical Reasoning & Puzzle</span>
  </div>

  <div class="sec-heading">
    <span>🧠 SECTION 1: REASONING ABILITY (LOGICAL & ANALYTICAL THINKING)</span>
    <span class="sec-badge">15 Qs • 25 MINS (1.6 MIN/Q)</span>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 25%;">Logical Domain</th>
        <th style="width: 14%;">Yield Rating</th>
        <th style="width: 33%;">Solving Technique & Venn / Matrix Rules</th>
        <th style="width: 14%;">Register Target</th>
        <th style="width: 14%;">Revision Check</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Syllogisms & Logical Deduction</div>
          <div class="topic-sub">Only a few, Some not, Either-Or conditions</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>"Only a few A are B":</b> Means BOTH <i>"Some A are B"</i> AND <i>"Some A are NOT B"</i>.<br>
          • <b>Either-Or 3 Conditions:</b> 1) Both conclusions false individually, 2) Same elements, 3) Complementary pair (Some + No, All + Some not).<br>
          • Possibility statements: If true in even 1 valid Venn diagram, possibility is TRUE!
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 25 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 1)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 5)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. Seating Arrangements</div>
          <div class="topic-sub">Circular (in/out), Linear dual row, Square table</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • Draw 2 parallel cases simultaneously in your register.<br>
          • Facing Center: Clockwise = Left, Anticlockwise = Right.<br>
          • Facing Outside: Clockwise = Right, Anticlockwise = Left.<br>
          • Start with the <b>definite anchor clue</b> (e.g., <i>"A sits 3rd to right of B who faces center"</i>).
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Sets Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 2)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 6)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. Data Sufficiency</div>
          <div class="topic-sub">Statement I alone, Statement II alone, Both combined</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>DO NOT CALCULATE THE EXACT ANSWER!</b> Just check if a unique answer is determinable.<br>
          • Evaluate Statement 1 independently -> Evaluate Statement 2 independently -> Combine only if both fail individually.<br>
          • Trap: If a quadratic gives 2 different positive values, it is NOT sufficient!
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 20 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 3)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 7)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">4. Blood Relations</div>
          <div class="topic-sub">Coded relations (A + B), Family tree generation</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Use standard symbols: Square = Male, Circle = Female, Double line = Couple, Single vertical = Parent-Child.<br>
          • Never assume gender from name (e.g., Kiran/Alex can be male or female)!<br>
          • Coded relations: Work from right to left: <span class="mono">P + Q * R - S</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 20 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 1)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 5)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Direction & Distance Sense</div>
          <div class="topic-sub">Pythagorean theorem, Shadow at sunrise/sunset</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Sunrise shadow falls towards <b>WEST</b>. Sunset shadow falls towards <b>EAST</b>.<br>
          • At 12 Noon, there is no shadow.<br>
          • Shortest distance displacement: Always use Pythagoras <span class="mono">sqrt(dx^2 + dy^2)</span>.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 2)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 6)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">6. Visual Reasoning & Dice</div>
          <div class="topic-sub">Unfolded dice, Mirror & Water images, Pattern rotation</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Unfolded Dice Rule:</b> Alternate faces are opposite to each other (1 face gap between them).<br>
          • Two faces sharing an edge can NEVER be opposite!<br>
          • Water image = inverted vertically; Mirror image = inverted horizontally.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 15 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 4)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">7. Clocks & Calendars</div>
          <div class="topic-sub">Angle between hands, Day of week on arbitrary date</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Angle formula: <span class="mono">theta = |30H - 5.5M|</span>.<br>
          • Hands coincide 22 times in 24 hours (not 24 times!).<br>
          • Century leap years: 1600, 2000, 2400 (divisible by 400).
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> 12 Qs Solved</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 5)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="card priority-normal">
    <b>📂 DIRECTORY VAULT FOR LOGICAL REASONING:</b><br>
    <span class="mono">Course_844567_Full\2. Infosys System Eng Prep- Apti + Pseudo\Section I - Logical Reasoning & Puzzle\</span>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 1 Reasoning Ability</span>
    <span>Page 6 of 8</span>
  </div>
</div>


<!-- ==========================================
     PAGE 7: SECTION 3 & 7 - VERBAL & ESSAY
     ========================================== -->
<div class="page">
  <div class="page-header">
    <span>Section 3 & 7: Verbal Ability & English Writing • 20 Qs + 1 Prompt • 30 Mins Combined</span>
    <span>Vault: Section IV & V and Section VII</span>
  </div>

  <div class="sec-heading">
    <span>📖 SECTION 3: VERBAL ABILITY (20 QUESTIONS • 20 MINS)</span>
    <span class="sec-badge">1.0 M / Q • Speed Skimming</span>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 25%;">Verbal Subtopic</th>
        <th style="width: 14%;">Yield Rating</th>
        <th style="width: 33%;">Exam Strategy & Skimming Hacks</th>
        <th style="width: 14%;">Register Target</th>
        <th style="width: 14%;">Revision Check</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Reading Comprehension</div>
          <div class="topic-sub">1 long passage (5-6 Qs) + 1 short passage (3-4 Qs)</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Questions First Rule:</b> Always read question stems before reading the passage.<br>
          • Look for keywords and transition words: <i>"However, Nonetheless, Despite, Consequently"</i>.<br>
          • Fact vs Inference: Never select an option requiring outside assumptions!
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> 8 Passages</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 3)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 7)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. Para Jumbles / Sentence Order</div>
          <div class="topic-sub">4-5 sentences rearrangement (A-B-C-D)</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Find the Opening Sentence:</b> Must introduce the noun/concept independently.<br>
          • <b>Identify Mandatory Pairs:</b> Look for Noun -> Pronoun pairs (e.g., <i>"Tesla ... He"</i>).<br>
          • Look at option choices! If 3 options start with B, check B first.
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> 15 Sets</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 4)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. Sentence Completion & Fillers</div>
          <div class="topic-sub">Single & double blanks with contextual vocabulary</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Determine the tone of sentence: Positive, Negative, or Contrast.<br>
          • Eliminate options by testing second blank first (often much easier to spot).
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> 25 Qs</div>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> R1 (Day 5)</div>
          <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> R2 (Day 8)</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="sec-heading" style="margin-top: 10px;">
    <span>📝 SECTION 7: ENGLISH WRITING TEST (1 PROMPT • 10 MINS)</span>
    <span class="sec-badge star-badge">AI Evaluated Subjective Round</span>
  </div>

  <div class="callout callout-gold">
    <div>🤖</div>
    <div>
      <b>INFOSYS AI SCORING ALGORITHM CRITERIA:</b><br>
      Automated NLP engine evaluates your submission on 4 pillars: <b>1) Word Count (100 - 150 words)</b>, <b>2) Spelling & Grammar (Zero typos!)</b>, <b>3) Structural Coherence (Paragraph transitions)</b>, and <b>4) Lexical Diversity (Rich formal vocabulary)</b>.
    </div>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 25%;">Writing Component</th>
        <th style="width: 40%;">Standard Professional Email / Essay Framework</th>
        <th style="width: 35%;">Register Practice & Checklist</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>1. Subject Line & Salutation</b></td>
        <td>Clear, concise subject line: <span class="mono">Subject: Request for Project Deadline Extension</span>. Formal salutation: <span class="mono">Dear Mr. Sharma / Dear Hiring Manager</span>.</td>
        <td><div class="chk-group"><span class="chk"></span> Mastered 5 formal salutations</div></td>
      </tr>
      <tr>
        <td><b>2. Paragraph 1: The Hook</b></td>
        <td>State the primary purpose directly in 1-2 sentences: <span class="mono">I am writing to formally request... / This essay examines the transformative role of AI in workplace productivity...</span></td>
        <td><div class="chk-group"><span class="chk"></span> Written 3 opening hooks</div></td>
      </tr>
      <tr>
        <td><b>3. Paragraph 2: Core Body</b></td>
        <td>Provide 2-3 logical arguments with concrete rationale. Use connectors: <i>"Furthermore, Consequently, On one hand, In addition"</i>.</td>
        <td><div class="chk-group"><span class="chk"></span> Practiced transition connectors</div></td>
      </tr>
      <tr>
        <td><b>4. Paragraph 3: CTA & Sign-off</b></td>
        <td>Call to Action + Professional closing: <span class="mono">Looking forward to your favorable response. Sincerely, [Your Name]</span>.</td>
        <td><div class="chk-group"><span class="chk"></span> Checked 0 spelling errors rule</div></td>
      </tr>
    </tbody>
  </table>

  <div class="card priority-normal">
    <b>📂 TOP REPEATED ESSAY TOPICS IN INFOSYS:</b><br>
    1) Remote Work vs Hybrid Culture • 2) Artificial Intelligence: Boom or Bane for Software Engineering? • 3) Cybersecurity Awareness in Modern Banking • 4) Sustainable Energy & Corporate Responsibility.<br>
    <span class="mono">Course_844567_Full\2. Infosys System Eng Prep- Apti + Pseudo\Section VII - Essay Writing\Infosys Essay Writing topics.pdf</span>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 3 & 7 Verbal & Essay</span>
    <span>Page 7 of 8</span>
  </div>
</div>


<!-- ==========================================
     PAGE 8: INTERVIEWS & 10-DAY COUNTDOWN SPRINT
     ========================================== -->
<div class="page">
  <div class="page-header">
    <span>Technical & HR Interview Readiness • 10-Day Countdown Sprint to October 05</span>
    <span>Final Milestone to Infosys System Engineer Offer</span>
  </div>

  <div class="sec-heading">
    <span>💼 TECHNICAL & HR INTERVIEW READINESS TRACKER</span>
    <span class="sec-badge star-badge">Mandatory Round 2</span>
  </div>

  <div class="grid-2">
    <div class="card priority-high">
      <b>Core Technical Interview Topics (25-30 Mins)</b>
      <div style="font-size: 7.2pt; color: #334155; margin-top: 4px;">
        <div class="chk-group"><span class="chk"></span> <b>OOPs 4 Pillars:</b> Real-world examples of Abstraction vs Interface</div>
        <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> <b>Polymorphism:</b> Overloading (Compile) vs Overriding (Runtime)</div>
        <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> <b>DBMS:</b> ACID Properties, 1NF to 3NF, Joins (INNER, LEFT, RIGHT)</div>
        <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> <b>SQL:</b> GROUP BY vs HAVING, Subqueries, Primary vs Foreign Key</div>
        <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> <b>OS & CN:</b> Process vs Thread, Deadlock 4 conditions, OSI 7 Layers</div>
        <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> <b>Final Year Project:</b> Architecture, tech stack, individual contribution</div>
      </div>
    </div>

    <div class="card priority-med">
      <b>HR Round & Infosys Culture (10-15 Mins)</b>
      <div style="font-size: 7.2pt; color: #334155; margin-top: 4px;">
        <div class="chk-group"><span class="chk"></span> <b>Infosys C-LIFE Values:</b> Customer delight, Leadership, Integrity, Fairness, Excellence</div>
        <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> <b>Relocation:</b> 100% enthusiastic willingness for Mysore Training & Pan-India DC</div>
        <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> <b>Shift Flexibility:</b> Comfortable with rotational shifts & support projects</div>
        <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> <b>Strengths & Weakness:</b> Structured answer with improvement action plan</div>
        <div class="chk-group" style="margin-top:2px;"><span class="chk"></span> <b>Why Infosys?:</b> Global brand, Mysore training facility, learning ecosystem</div>
      </div>
    </div>
  </div>

  <div class="sec-heading">
    <span>📅 10-DAY COUNTDOWN BATTLE SPRINT SCHEDULE (ROAD TO SE OFFER)</span>
    <span class="sec-badge fire-badge">Target: 50 Questions / Day</span>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 12%;">Day / Date</th>
        <th style="width: 28%;">Morning Drill (Quant & Reasoning)</th>
        <th style="width: 28%;">Evening Drill (Pseudocode & Puzzles)</th>
        <th style="width: 18%;">Night Drill (Verbal/Mock)</th>
        <th style="width: 14%;">Audit Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>DAY 01</b></td>
        <td>Syllogisms (25 Qs) + Blood Relations (20 Qs)</td>
        <td>Bitwise Operators & Shifts (20 Qs)</td>
        <td>SVA Grammar Rules + 1 Essay</td>
        <td><div class="chk-group"><span class="chk"></span> 50 Qs Done</div></td>
      </tr>
      <tr>
        <td><b>DAY 02</b></td>
        <td>Time & Work, Pipes (25 Qs) + Percentages (20 Qs)</td>
        <td>Circular Wheel Number Puzzles (15 Puzzles)</td>
        <td>Parallelism Grammar + 2 RC</td>
        <td><div class="chk-group"><span class="chk"></span> 50 Qs Done</div></td>
      </tr>
      <tr>
        <td><b>DAY 03</b></td>
        <td>TSD, Trains, Boats & Streams (25 Qs)</td>
        <td>Recursion Tracing & Trees (15 Qs)</td>
        <td>Conditionals Grammar + Vocab</td>
        <td><div class="chk-group"><span class="chk"></span> 50 Qs Done</div></td>
      </tr>
      <tr>
        <td><b>DAY 04</b></td>
        <td>P&C (20 Qs) + Probability Bags/Dice (20 Qs)</td>
        <td>3x3 & 4x4 Grid Matrix Puzzles (15 Puzzles)</td>
        <td>Para Jumbles + 2 RC Passages</td>
        <td><div class="chk-group"><span class="chk"></span> 50 Qs Done</div></td>
      </tr>
      <tr>
        <td><b>DAY 05</b></td>
        <td>Seating Arrangements (15 Sets) + Direction (15 Qs)</td>
        <td>Nested Loops & Variable Tracing (15 Qs)</td>
        <td>Full Sectional Mock 1 (Quant + LR)</td>
        <td><div class="chk-group"><span class="chk"></span> 50 Qs Done</div></td>
      </tr>
      <tr>
        <td><b>DAY 06</b></td>
        <td>Mensuration 3D + Mixtures & Alligations (25 Qs)</td>
        <td>Geometric Vertex & Matchstick Puzzles (15 Puzzles)</td>
        <td>Full Sectional Mock 2 (Pseudo+Puzzles)</td>
        <td><div class="chk-group"><span class="chk"></span> 50 Qs Done</div></td>
      </tr>
      <tr>
        <td><b>DAY 07</b></td>
        <td>Data Sufficiency (25 Qs) + Visual Reasoning (15 Qs)</td>
        <td>Array Pointer & Boundary Tracing (15 Qs)</td>
        <td>Fillers & Sentence Completion</td>
        <td><div class="chk-group"><span class="chk"></span> 50 Qs Done</div></td>
      </tr>
      <tr>
        <td><b>DAY 08</b></td>
        <td>FULL LENGTH CBT MOCK TEST 01 (120 Mins)</td>
        <td>In-depth Mistake Analysis in Register</td>
        <td>Revise High-Yield Formula Book</td>
        <td><div class="chk-group"><span class="chk"></span> Mock 1 Analyzed</div></td>
      </tr>
      <tr>
        <td><b>DAY 09</b></td>
        <td>FULL LENGTH CBT MOCK TEST 02 (120 Mins)</td>
        <td>Speed Drill: Puzzles + Pseudocode (30 Qs)</td>
        <td>OOPs & DBMS Interview Flashcards</td>
        <td><div class="chk-group"><span class="chk"></span> Mock 2 Analyzed</div></td>
      </tr>
      <tr style="background: #f0fdf4;">
        <td><b>DAY 10</b></td>
        <td>Final Formula Sheet & Variable Ledger Revision</td>
        <td>Light Practice + Technical Project Walkthrough</td>
        <td>Relax, Rest, WebCam & System Setup</td>
        <td><div class="chk-group"><span class="chk"></span> READY TO CRACK!</div></td>
      </tr>
    </tbody>
  </table>

  <div class="callout callout-gold" style="margin-top: 6px;">
    <div>🏆</div>
    <div>
      <b>THE CANDIDATE'S PLEDGE:</b><br>
      <i>"I have physically worked through every formula, traced every pseudocode loop, cracked every numeric pattern, and audited every question in my register. My preparation is 100% complete and airtight. I am ready to crack Infosys Systems Engineer!"</i>
    </div>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Final Sprint Schedule</span>
    <span>Page 8 of 8</span>
  </div>
</div>

</body>
</html>
"""

html_path = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\INFOSYS_SE_MASTER_SYLLABUS_TRACKER.html"
pdf_path1 = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\INFOSYS_SE_MASTER_SYLLABUS_TRACKER.pdf"
pdf_path2 = r"C:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\INFOSYS_SE_MASTER_SYLLABUS_TRACKER.pdf"
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print("Saved HTML tracker template.")

cmd = [
    chrome_path,
    "--headless=new",
    f"--print-to-pdf={pdf_path1}",
    "--no-pdf-header-footer",
    "--disable-gpu",
    html_path
]

print("Rendering PDF via Headless Chrome...")
subprocess.run(cmd, check=True)

# Copy to preparation folder
with open(pdf_path1, "rb") as src, open(pdf_path2, "wb") as dst:
    dst.write(src.read())

print("PDF generated successfully at both locations:")
print(f"1. {pdf_path1}")
print(f"2. {pdf_path2}")
print(f"File size: {os.path.getsize(pdf_path1):,} bytes")
