import os

def create_10page_html():
    p1 = """
<div class="page">
  <div class="page-header">
    <span>Infosys Systems Engineer (SE) • 100% Comprehensive Master Syllabus & Hardware Blueprint</span>
    <span>Target Drive: ~Oct 05 • 60 Qs • 75+ Marks • 120 Mins</span>
  </div>

  <div class="hero-banner">
    <div class="hero-title">
      <span>🚀 INFOSYS SE 100% FORENSIC PREPARATION TRACKER</span>
    </div>
    <div class="hero-sub">
      <span>Role: Systems Engineer (₹3.6 LPA) • DSE Upgrade (₹6.5 LPA) • SP Upgrade (₹9.5 LPA)</span>
      <span>Official TAP Cell 7-Section Blueprint • 100% Local Disk Vault Mapping • Zero Blindspots</span>
    </div>
  </div>

  <div class="grid-3" style="margin-bottom: 4px;">
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
    <span>📋 OFFICIAL 7-SECTION EXAM ARCHITECTURE & LOCAL VAULT MAPPING</span>
    <span class="sec-badge star-badge">Mandatory Sectional Cutoffs</span>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 20%;">Section Name</th>
        <th style="width: 6%;">Qs</th>
        <th style="width: 6%;">Marks</th>
        <th style="width: 8%;">Time</th>
        <th style="width: 10%;">Weightage</th>
        <th style="width: 10%;">Safe Cutoff</th>
        <th style="width: 40%;">Physical Local Vault Folder Location (On Your PC)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>1. Reasoning Ability</b></td>
        <td>15</td>
        <td>15 M</td>
        <td>25 min</td>
        <td><span class="weight-tag weight-1-0">1.0 M / Q</span></td>
        <td><b>10+ Qs</b></td>
        <td><span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\</span></td>
      </tr>
      <tr>
        <td><b>2. Technical Ability (Quant)</b></td>
        <td>10</td>
        <td>10 M</td>
        <td>35 min</td>
        <td><span class="weight-tag weight-1-0">1.0 M / Q</span></td>
        <td><b>7+ Qs</b></td>
        <td><span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\</span></td>
      </tr>
      <tr>
        <td><b>3. Verbal Ability</b></td>
        <td>20</td>
        <td>20 M</td>
        <td>20 min</td>
        <td><span class="weight-tag weight-1-0">1.0 M / Q</span></td>
        <td><b>13+ Qs</b></td>
        <td><span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\</span></td>
      </tr>
      <tr style="background: #fff1f2;">
        <td><b>4. Pseudo Code 🔥🔥🔥</b></td>
        <td><b>5</b></td>
        <td><b>10 M</b></td>
        <td><b>10 min</b></td>
        <td><span class="weight-tag weight-2-0">2.0 M / Q</span></td>
        <td><b>3+ Qs</b></td>
        <td><span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section III - Pseudo Codes\\</span></td>
      </tr>
      <tr style="background: #fef2f2;">
        <td><b>5. Numeric Puzzle Solving 🔥🔥🔥</b></td>
        <td><b>4</b></td>
        <td><b>10 M</b></td>
        <td><b>10 min</b></td>
        <td><span class="weight-tag weight-2-5">2.5 M / Q</span></td>
        <td><b>2+ Qs</b></td>
        <td><span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section VI - Puzzle Solving\\</span></td>
      </tr>
      <tr style="background: #fffbeb;">
        <td><b>6. English Grammar 🔥🔥🔥</b></td>
        <td><b>5</b></td>
        <td><b>10 M</b></td>
        <td><b>10 min</b></td>
        <td><span class="weight-tag weight-2-0">2.0 M / Q</span></td>
        <td><b>4+ Qs</b></td>
        <td><span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\Module 4, 5, 6\\</span></td>
      </tr>
      <tr>
        <td><b>7. English Writing</b></td>
        <td>1</td>
        <td>Qual.</td>
        <td>10 min</td>
        <td>Subjective</td>
        <td>Clear</td>
        <td><span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section VII - Essay Writing\\</span></td>
      </tr>
      <tr style="font-weight: 800; background: #e2e8f0;">
        <td>TOTAL / AGGREGATE</td>
        <td>60</td>
        <td>75+ M</td>
        <td>120 min</td>
        <td>—</td>
        <td><b>48+ Marks</b></td>
        <td><b>Mock Series: Course_844567_Full\\Infosys Mock Test Series\\ (Day 01 to Day 09)</b></td>
      </tr>
    </tbody>
  </table>

  <div class="sec-heading">
    <span>🔒 AI PROCTORING & HARDWARE COMPLIANCE SPECIFICATIONS (MANDATORY CHECKS)</span>
    <span class="sec-badge fire-badge">Zero Disqualification Rule</span>
  </div>

  <div class="grid-2">
    <div class="card priority-high">
      <b>1. Screen & Hardware Rules:</b>
      <p style="font-size: 6.8pt; color: #334155; margin-top: 1.5px;">
        • <b>Dual Monitor Ban:</b> External monitor cable physically unplug karein. Virtual display driver detected = instant termination.<br>
        • <b>Browser Lockdown:</b> Use latest Google Chrome. Close AnyDesk, TeamViewer, Skype, WhatsApp, Discord via Task Manager.<br>
        • <b>Extensions:</b> Disable Grammarly, AdBlockers, Screen Recorders before launching assessment.
      </p>
    </div>
    <div class="card priority-med">
      <b>2. Camera, Audio & Rough Sheet Positioning:</b>
      <p style="font-size: 6.8pt; color: #334155; margin-top: 1.5px;">
        • <b>Front Lighting:</b> Light source aapke chehre ke saamne hona chahiye (piche khidki/bulb se face dark ho jata hai).<br>
        • <b>Audio Threshold:</b> No whispering, no reading questions aloud. Headphones/Earphones are strictly prohibited.<br>
        • <b>Rough Sheet Placement:</b> A4 sheet ko keyboard ke theek aage rakhein taaki downward glance naturally camera zone me rahe.
      </p>
    </div>
  </div>

  <div class="callout callout-danger" style="margin-top: 4px;">
    <div>⚠️</div>
    <div>
      <b>THE 2 GOLDEN TEST PLATFORM LAWS:</b><br>
      <b>1. ZERO Negative Marking:</b> Har sawal me answer mark karna mandatory hai. Timer khatam hone se pehle best guess zaroor lagayein!<br>
      <b>2. STRICT Forward Navigation:</b> Ek baar "NEXT" click kiya toh peeche wapas nahi aa sakte! Section ke andar bhi backward lock hota hai.
    </div>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Blueprint & Hardware Compliance</span>
    <span>Page 1 of 10</span>
  </div>
</div>
"""

    p2 = """
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
      Dimaag me dry run mat karo! Apne register me 4 columns banao: <span class="mono">| Line No | a | b | c | Condition (T/F) |</span>. Har step par variable ki value strike-through karke nayi value likho. 100% accuracy guaranteed.
    </div>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 22%;">Subtopic & Syntax Pattern</th>
        <th style="width: 10%;">Yield</th>
        <th style="width: 28%;">Key Logic & Recurring Traps to Master</th>
        <th style="width: 26%;">Exact Folder & File Resource (Vault)</th>
        <th style="width: 14%;">Register Tracker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Bitwise Operators</div>
          <div class="topic-sub">XOR (^), AND (&), OR (|), Shifts (&lt;&lt;, &gt;&gt;)</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <span class="mono">a ^ a = 0</span>, <span class="mono">a ^ 0 = a</span>.<br>
          • <span class="mono">a & (a - 1)</span> clears lowest set bit.<br>
          • Left Shift: <span class="mono">a &lt;&lt; k = a * 2^k</span>.<br>
          • Right Shift: <span class="mono">a &gt;&gt; k = a / 2^k</span>.<br>
          • Bitwise precedence is LOWER than relational!
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section III - Pseudo Codes\\</span>
          <span class="file-tag">📄 1. Pseudo Codes Technical ebook.pdf (Q1 - Q30)</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\Day 04\\</span>
          <span class="file-tag">📄 Technical MCQ - Pseudo Codes.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 20 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. Recursion & Call Trees</div>
          <div class="topic-sub">Base cases, Multiple branches, Tree accumulation</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • Draw recursion trees on paper with return values.<br>
          • Trap: Tail call vs Head call (Order changes).<br>
          • Global/Static variables retain modified values!<br>
          • Base condition checks: <span class="mono">if (n &lt;= 1) return n</span>
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section III - Pseudo Codes\\Infosys Pseudo Live Class\\</span>
          <span class="file-tag">📄 1. Pseudo Codes Technical ebook.pdf (Q31 - Q60)</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\Day 06\\</span>
          <span class="file-tag">📄 Pseudo Code - Solutions.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. Nested Loops & Iteration</div>
          <div class="topic-sub">Dependent inner loops, Step skips, Jump breaks</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Outer loop <span class="mono">i = 1 to n</span>, inner loop <span class="mono">j = i to n</span>.<br>
          • Trap: <span class="mono">continue</span> skips rest of current step.<br>
          • Step changes: <span class="mono">i = i * 2</span> (logarithmic steps).<br>
          • Track final loop counter value after exit!
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section III - Pseudo Codes\\1.1 Pseudo Codes- Cpg - Infosys - Other\\</span>
          <span class="file-tag">📄 1. Pseudo Codes Technical ebook.pdf (Q61 - Q90)</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\Day 07\\</span>
          <span class="file-tag">📄 Section III - Pseudo Codes Based on PYQ.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
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
          • Infosys pseudocode often uses <b>1-based indexing</b>: <span class="mono">arr[1]</span> is first element!<br>
          • Array boundary overflow: <span class="mono">arr[i + 1]</span> when <span class="mono">i = n</span>.<br>
          • Swap without temp: <span class="mono">a ^= b; b ^= a; a ^= b;</span>
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section III - Pseudo Codes\\</span>
          <span class="file-tag">📄 1. Pseudo Codes Technical ebook.pdf (Q91 - Q120)</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\Day 08\\</span>
          <span class="file-tag">📄 Technical MCQ - Pseudo Codes Based on PYQ 01.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 12 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Modulo & Integer Division</div>
          <div class="topic-sub">Truncation, % with negatives, Parity bit checks</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Integer division truncates: <span class="mono">7 / 2 = 3</span>.<br>
          • Modulo power of 2: <span class="mono">n % 8 == n & 7</span>.<br>
          • Parity checks: <span class="mono">if (n & 1)</span> means odd!
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section III - Pseudo Codes\\</span>
          <span class="file-tag">📄 1. Pseudo Codes Technical ebook.pdf (Q121 - Q150)</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\Day 09\\</span>
          <span class="file-tag">📄 Technical MCQ - Pseudo Codes Based on PYQ 02.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 10 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">6. Conditional Short-Circuit</div>
          <div class="topic-sub">Logical AND / OR evaluation order & side-effects</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • In <span class="mono">(A && ++b)</span>: If A is False, <span class="mono">++b</span> NEVER executes!<br>
          • In <span class="mono">(A || ++b)</span>: If A is True, <span class="mono">++b</span> NEVER executes!<br>
          • Infosys tests if variable incremented or not.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section III - Pseudo Codes\\</span>
          <span class="file-tag">📄 1. Pseudo Codes Technical ebook.pdf (PYQ Set 2)</span>
          <span class="file-tag">💻 PrepDash App: http://localhost:5173/ (Questions Tab)</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 10 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="card priority-normal">
    <b>📂 MASTER VAULT FOR PSEUDO CODE:</b><br>
    <span class="mono">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section III - Pseudo Codes\\1. Pseudo Codes Technical ebook.pdf</span><br>
    <span style="font-size: 6.8pt; color: #475569;">Is PDF ke 150 questions aur Mock Day 04, 06, 07, 08, 09 ke pseudocodes seedha register me bina dekhe solve karo.</span>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 4 Pseudo Code</span>
    <span>Page 2 of 10</span>
  </div>
</div>
"""

    p3 = """
<div class="page">
  <div class="page-header">
    <span>Section 5: Numeric Puzzle Solving • 4 Questions • 10 Marks • 10 Mins • HIGHEST WEIGHTAGE (2.5 M / Q)</span>
    <span>Vault: Section VI - Puzzle Solving</span>
  </div>

  <div class="sec-heading">
    <span>🧩 SECTION 5: NUMERIC PUZZLE SOLVING & CRYPTARITHMETIC</span>
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
        <th style="width: 22%;">Puzzle Family & Shape</th>
        <th style="width: 10%;">Yield</th>
        <th style="width: 28%;">Pattern Recognition Framework & Logic</th>
        <th style="width: 26%;">Exact Folder & File Resource (Vault)</th>
        <th style="width: 14%;">Register Tracker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Circular Wheel Puzzles</div>
          <div class="topic-sub">Clockwise jumps, Opposite sector math, Multi-tier</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Opposite Number Rule:</b> <span class="mono">n^2 + 1</span>, <span class="mono">n^3 - 1</span>, or <span class="mono">2n + 3</span>.<br>
          • <b>Clockwise Progression:</b> <span class="mono">*2+1, *2-1</span> alternating.<br>
          • <b>Prime Numbers Circle:</b> 2, 3, 5, 7, 11, 13, 17, 19.<br>
          • Inner wheel vs Outer: Diff or product of sectors.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section VI - Puzzle Solving\\</span>
          <span class="file-tag">📄 Number Puzzles Infosys & Other.pdf (Wheel Section)</span>
          <span class="file-tag">📄 LR (Number Puzzle Questions) - Question Paper.md</span>
          <span class="file-tag">📄 LR (Number Puzzle Questions) - Solutions.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Puzzles</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
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
          • Check <b>Row-wise Sum</b> vs <b>Column Sum</b> (Is it constant?).<br>
          • <b>Third Column Rule:</b> <span class="mono">(Col 1 * Col 2) / 2 = Col 3</span> or <span class="mono">Col 1^2 + Col 2^2 = Col 3</span>.<br>
          • <b>Diagonal Symmetry:</b> Sum of main diagonals = center * 2.<br>
          • Center element is average of 4 surrounding numbers.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section VI - Puzzle Solving\\</span>
          <span class="file-tag">📄 Number Puzzles Infosys & Other.pdf (Matrix Grids)</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\Day 06\\</span>
          <span class="file-tag">📄 Logical Puzzle - Question Paper.md & Solutions.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Puzzles</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
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
          • <b>Triangle Center:</b> <span class="mono">(Vertex 1 * Vertex 2) - Vertex 3</span>.<br>
          • <b>Sum of Squares:</b> <span class="mono">Center = sqrt(A^2 + B^2 + C^2)</span>.<br>
          • <b>Star Shapes (5 or 6 points):</b> Opposite points sum/diff equals inner point.<br>
          • Multiplier rule: <span class="mono">(A + B + C) * constant = Center</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section VI - Puzzle Solving\\</span>
          <span class="file-tag">📄 Number Puzzles Infosys & Other.pdf (Geometric Puzzles)</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\Day 07\\</span>
          <span class="file-tag">📄 Section IV - Puzzle Solving - Question Paper.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 12 Puzzles</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">4. Cryptarithmetic Addition</div>
          <div class="topic-sub">SEND + MORE = MONEY, TO + GO = OUT</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Carry Rule:</b> Leading carry of (n+1) digit sum is ALWAYS <b>1</b> (e.g. M = 1).<br>
          • Distinct letters represent distinct digits (0 to 9).<br>
          • Leading letters (S, M, T) can NEVER be 0.<br>
          • If <span class="mono">A + B = A</span>, then either B = 0 or carry involved.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\7. Puzzle\\</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\7+ Ebooks\\</span>
          <span class="file-tag">📄 7. SOLUTION LOGIC.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 10 Cryptarithms</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Matchstick & Missing Series</div>
          <div class="topic-sub">Move 1 or 2 sticks, Count of squares, Alternating series</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Converting digits: 6 -> 9, 8 -> 0 or 9, 3 -> 5.<br>
          • Equation balance: e.g. <span class="mono">6 + 4 = 4</span> -> move 1 to make <span class="mono">0 + 4 = 4</span>.<br>
          • Alternating series: Separate odd/even index steps.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\9. Number Series - Important types\\</span>
          <span class="file-tag">📄 Purchased Documents\\Best 250+ Sure Shot -01 (1).pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Series</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="card priority-normal">
    <b>📂 MASTER VAULT FOR NUMBER PUZZLES:</b><br>
    <span class="mono">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section VI - Puzzle Solving\\Number Puzzles Infosys & Other.pdf</span><br>
    <span class="mono">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section VI - Puzzle Solving\\LR (Number Puzzle Questions) - Solutions.md</span>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 5 Numeric Puzzle Solving</span>
    <span>Page 3 of 10</span>
  </div>
</div>
"""

    p4 = """
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
        <th style="width: 22%;">Grammar Core Pillar</th>
        <th style="width: 10%;">Yield</th>
        <th style="width: 28%;">The Non-Negotiable Rule & Infosys Trap</th>
        <th style="width: 26%;">Exact Folder & File Resource (Vault)</th>
        <th style="width: 14%;">Register Tracker</th>
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
          • <b>Intervening Phrases:</b> <i>"along with", "as well as", "together with", "in addition to"</i> do NOT change subject number! Verb agrees with first subject.<br>
          • <b>Either/Or, Neither/Nor:</b> Verb agrees with <b>closest</b> subject.<br>
          • <i>"Each, Every, Neither of, One of the"</i> take <b>singular verb</b>!
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\Module 4 - Error Detection- SVA\\</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\</span>
          <span class="file-tag">📄 Infosys English Question asked on 4 Oct 2025 - Question Paper.md</span>
          <span class="file-tag">📄 Infosys English Question asked on 4 Oct 2025 - Solutions.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 20 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
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
          • Structure following <i>"Not only"</i> MUST match structure following <i>"But also"</i> (Noun with Noun, Verb with Verb).<br>
          • Series consistency: <i>"She likes hiking, swimming, and to run"</i> ❌ -> <i>"and running"</i> ✅.<br>
          • Comparison match: <i>"The screen of phone A is better than phone B"</i> ❌ -> <i>"than that of phone B"</i> ✅.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\Module 6 - Error- Parallelism\\</span>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\Live - Infosys Previous year\\</span>
          <span class="file-tag">📄 PYQ Verbal Ability Questions\\Verbal Ability.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. Conditionals & Tense</div>
          <div class="topic-sub">Type 1, Type 2, Type 3 conditionals, Past Perfect</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Type 3 Trap:</b> <span class="mono">If + Past Perfect (had + V3) ... would have + V3</span>.<br>
          • Never use <i>"would have"</i> inside the <i>"if-clause"</i>!<br>
          • In two completed past events: earlier event = <i>had + V3</i>, later event = <i>simple past (V2)</i>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\7+ Ebooks with Video Solutions- 1000+\\</span>
          <span class="file-tag">📄 3. Verbal Ability.pdf (Tense & Errors)</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">4. Modifiers & Participles</div>
          <div class="topic-sub">Introductory participial phrases, Misplaced adverbs</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Introductory phrase MUST be immediately followed by the noun it actually modifies.<br>
          • ❌ <i>"Walking down the garden, a snake bit him."</i><br>
          • ✅ <i>"While he was walking down the garden, a snake bit him."</i>
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\Day 01\\</span>
          <span class="file-tag">📄 1. Full length verbal ability - Question Paper.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 12 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Articles, Prepositions & Phrasal Verbs</div>
          <div class="topic-sub">Fixed prepositions, Phrasal verbs (look forward to)</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Adjectives ending in <i>-ior</i> take <i>"to"</i>: <i>senior to, prefer to</i>.<br>
          • <i>"Look forward to + V1+ing"</i>: takes gerund! (e.g. <i>look forward to meeting you</i>).<br>
          • <i>"Between"</i> for 2 entities; <i>"Among"</i> for 3 or more.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\Module 5 - Error - Article\\</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\Day 02\\</span>
          <span class="file-tag">📄 2. Full length Verbal Ability - Question Paper.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="card priority-normal">
    <b>📂 MASTER VAULT FOR ENGLISH GRAMMAR:</b><br>
    <span class="mono">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\Module 4 - Error Detection- SVA\\</span><br>
    <span class="mono">Course_844567_Full\\Infosys Mock Test Series\\Infosys English Question asked on 4 Oct 2025 - Question Paper.md</span>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 6 English Grammar</span>
    <span>Page 4 of 10</span>
  </div>
</div>
"""

    p5 = """
<div class="page">
  <div class="page-header">
    <span>Section 2: Technical Ability (Quant) Part 1 • Arithmetic & Combinatorics • 35 Mins (3.5 Min/Q)</span>
    <span>Vault: Section II - Technical Ability ( Numerical )</span>
  </div>

  <div class="sec-heading">
    <span>📐 SECTION 2: QUANT PART 1 (ARITHMETIC, P&C & PROBABILITY)</span>
    <span class="sec-badge">10 Qs • 35 MINS TOTAL (3.5 MIN/Q)</span>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 22%;">Aptitude Core Domain</th>
        <th style="width: 10%;">Yield</th>
        <th style="width: 28%;">Formula & Shortcuts for Fast Register Solving</th>
        <th style="width: 26%;">Exact Folder & File Resource (Vault)</th>
        <th style="width: 14%;">Register Tracker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Time & Work, Pipes & Cisterns</div>
          <div class="topic-sub">LCM work method, Efficiencies, Alternate days</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • Total Work = <span class="mono">LCM(days)</span>.<br>
          • Efficiency = <span class="mono">Work / Days</span>.<br>
          • Emptying pipe negative efficiency: <span class="mono">Inflow - Outflow</span>.<br>
          • Equivalence: <span class="mono">M1*D1*H1/W1 = M2*D2*H2/W2</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\6. Time & Work - Pipes & Cistern\\</span>
          <span class="file-tag">📄 Purchased Documents\\250 + Video Solution Quant Assorted Book.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 25 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. Time, Speed & Distance, Boats</div>
          <div class="topic-sub">Relative speed, Boats & Streams, Harmonic average</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <span class="mono">km/hr -> m/s: * 5/18</span>; <span class="mono">m/s -> km/hr: * 18/5</span>.<br>
          • Avg Speed equal distances = <span class="mono">2xy / (x + y)</span>.<br>
          • Relative Speed: Same <span class="mono">u - v</span>; Opp <span class="mono">u + v</span>.<br>
          • Boats: <span class="mono">D = u + v</span>, <span class="mono">U = u - v</span>; <span class="mono">Boat = (D+U)/2</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\10. Time, Speed and Distance\\</span>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\11. Boat & Stream\\</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 25 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
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
          • <b>Tie Method:</b> Treat vowels together as 1 unit.<br>
          • <b>Never Together:</b> Total minus "Together".<br>
          • Circular: <span class="mono">(n - 1)!</span> around circle.<br>
          • Handshakes: <span class="mono">nC2 = n(n - 1) / 2</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\14. Permutation & Combination\\</span>
          <span class="file-tag">📄 Purchased Documents\\PnC.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 20 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
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
          • <b>At least one:</b> <span class="mono">P(at least 1) = 1 - P(none)</span>.<br>
          • Marbles without replacement: denominators decrease by 1 each draw.<br>
          • Two dice sum of 7: 6 outcomes (<span class="mono">6/36 = 1/6</span>).
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\15. Probability Questions prep\\</span>
          <span class="file-tag">📄 Purchased Documents\\Probability Type Bag Based.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 20 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Percentages & Profit/Loss</div>
          <div class="topic-sub">Successive %, False weights, Discount vs Markup</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Successive %: <span class="mono">Net = a + b + (ab / 100)</span>.<br>
          • Dishonest Dealer: <span class="mono">(Error / (True - Error)) * 100</span>.<br>
          • Fractions: <span class="mono">1/6 = 16.67%</span>, <span class="mono">1/7 = 14.28%</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\1. Percentage - With DPP Solution\\</span>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\4. Profit Loss & discount\\</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 20 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">6. Ages, Partnership & Averages</div>
          <div class="topic-sub">Tawa Fry Method, Capital-time ratio profit</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Age difference between two people remains CONSTANT over time!<br>
          • Profit Ratio = <span class="mono">(C1 * T1) : (C2 * T2) : (C3 * T3)</span>.<br>
          • Average deviation shortcut: <span class="mono">New Avg = Old Avg + (Net Change / n)</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\7 Ages - Tawa Fry Method\\</span>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\8 Partnership & Average\\</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 2 Technical Quant (Part 1)</span>
    <span>Page 5 of 10</span>
  </div>
</div>
"""

    p6 = """
<div class="page">
  <div class="page-header">
    <span>Section 2: Technical Ability (Quant) Part 2 • Advanced Quant, Numbers & DI</span>
    <span>Vault: Section II - Technical Ability & Purchased Documents</span>
  </div>

  <div class="sec-heading">
    <span>📊 SECTION 2: QUANT PART 2 (DATA INTERPRETATION, NUMBERS & MENSURATION)</span>
    <span class="sec-badge star-badge">High Accuracy Scoring</span>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 22%;">Advanced Quant Domain</th>
        <th style="width: 10%;">Yield</th>
        <th style="width: 28%;">Formulas, Tricks & Pattern Rules</th>
        <th style="width: 26%;">Exact Folder & File Resource (Vault)</th>
        <th style="width: 14%;">Register Tracker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Data Interpretation (DI)</div>
          <div class="topic-sub">Pie Charts, Radar DI, Caselet DI, Missing DI</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • Pie Chart Angle conversion: <span class="mono">100% = 360 degrees</span>; <span class="mono">1% = 3.6 deg</span>.<br>
          • Growth Rate: <span class="mono">((Final - Initial) / Initial) * 100</span>.<br>
          • Missing DI: Fill table cells using row/col totals before reading questions.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\1. Most Most Imp - Data Interpretation\\</span>
          <span class="file-tag">📁 1.Pie Chart • 📁 3. Advance Radar D. I • 📁 4. Caselet based D.I • 📁 5. Advance Missing D.I</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Sets Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. Number System & Remainder</div>
          <div class="topic-sub">Divisibility, Units digit cyclicity, LCM-HCF</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Units digit cyclicity of 2, 3, 7, 8 is <b>4</b>.<br>
          • Units digit of 4, 9 cyclicity is <b>2</b>.<br>
          • <span class="mono">HCF * LCM = Product of two numbers</span>.<br>
          • Divisibility by 11: <span class="mono">|Sum(odd digits) - Sum(even digits)| = 0 or 11k</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\12. Number System from basic\\</span>
          <span class="file-tag">📄 Purchased Documents\\Number System Day 01.pdf & LCM HCF.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 20 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. Quadratic Equations</div>
          <div class="topic-sub">Sign comparison shortcuts, Nature of roots</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Sign Rule:</b> <span class="mono">ax^2 - bx + c = 0 -> (+, +)</span> roots.<br>
          • <span class="mono">ax^2 + bx + c = 0 -> (-, -)</span> roots.<br>
          • If both constant terms are negative (<span class="mono">-c</span> in both): Relationship is <b>CANNOT BE DETERMINED</b>!
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\18. Quadratic Equations\\</span>
          <span class="file-tag">📄 Purchased Documents\\01 Quadratic Equations - New.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">4. Mixtures & Alligations</div>
          <div class="topic-sub">Rule of alligation, Repeated dilution formula</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Dilution: <span class="mono">Remaining = Initial * (1 - y / x)^n</span>.<br>
          • Cross ratio method for weighted averages: <span class="mono">(c - m) / (m - d) = q_d / q_c</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\3. Mixture & Alligation\\</span>
          <span class="file-tag">📄 Purchased Documents\\Aptitude 250.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Mensuration 2D & 3D</div>
          <div class="topic-sub">Cylinders, Cones, Spheres, Area/Volume % changes</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Cylinder Vol: <span class="mono">pi * r^2 * h</span>. Cone Vol: <span class="mono">(1/3) pi * r^2 * h</span>.<br>
          • Sphere Vol: <span class="mono">(4/3) pi * r^3</span>; Surface Area: <span class="mono">4 pi * r^2</span>.<br>
          • If radius +10%, height -10%: <span class="mono">1.1 * 1.1 * 0.9 = 1.089 (+8.9%)</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\16. Mensuration\\</span>
          <span class="file-tag">📄 Purchased Documents\\mensuration3D.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">6. Simple & Compound Interest</div>
          <div class="topic-sub">Difference between CI & SI for 2 and 3 years, Installments</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • 2 Years: <span class="mono">CI - SI = P * (R / 100)^2</span>.<br>
          • 3 Years: <span class="mono">P * (R/100)^2 * ((300 + R) / 100)</span>.<br>
          • Compounded half-yearly: <span class="mono">Rate = R/2, Time = 2n</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section II - Technical Ability ( Numerical )\\2. Numerical ability - Quantitative Aptitude\\5. Simple & Compound interest + Installment\\</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 12 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 2 Technical Quant (Part 2)</span>
    <span>Page 6 of 10</span>
  </div>
</div>
"""

    p7 = """
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
        <th style="width: 22%;">Logical Domain</th>
        <th style="width: 10%;">Yield</th>
        <th style="width: 28%;">Solving Technique & Venn / Matrix Rules</th>
        <th style="width: 26%;">Exact Folder & File Resource (Vault)</th>
        <th style="width: 14%;">Register Tracker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. Syllogisms & Critical Reasoning</div>
          <div class="topic-sub">Only a few, Either-Or, Statement & Assumption/Argument</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>"Only a few A are B":</b> Means BOTH <i>"Some A are B"</i> AND <i>"Some A are NOT B"</i>.<br>
          • <b>Either-Or 3 Conditions:</b> 1) Both false individually, 2) Same elements, 3) Complementary pair.<br>
          • Assumption is implicit; Argument must be strong.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\8. Critical Reasoning & Syllogism\\</span>
          <span class="file-tag">📁 Syllogism • 📁 Assumption Argument C.R</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 25 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
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
          • Draw 2 parallel cases simultaneously.<br>
          • Facing Center: Clockwise = Left, Anticlockwise = Right.<br>
          • Facing Outside: Clockwise = Right, Anticlockwise = Left.<br>
          • Start with the <b>definite anchor clue</b>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\3. Linear & Parallel Arrangement\\</span>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\5 Circular Arrangement\\</span>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\6 Square Triangle Based Arrangement\\</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Sets Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
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
          • <b>DO NOT CALCULATE EXACT ANSWER!</b> Just check if unique answer is determinable.<br>
          • Evaluate Statement 1 independently -> Statement 2 independently -> Combine only if both fail individually.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\10. IMP LR (Data Sufficiency)\\</span>
          <span class="file-tag">📄 Infosys Mock Test Series\\7+ Ebooks\\6 Book Logical PYQ Imp.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 20 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
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
          • Symbols: Square = Male, Circle = Female, Double = Couple, Vertical = Parent-Child.<br>
          • Never assume gender from name!<br>
          • Coded relations: Work right to left: <span class="mono">P + Q * R - S</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\4. Blood Relation\\</span>
          <span class="file-tag">📁 Concept Video Blood Relation - Live • 📁 Topic Mock Test</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 20 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">5. Direction, Distance & Shadows</div>
          <div class="topic-sub">Pythagorean theorem, Shadow at sunrise/sunset</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Sunrise shadow falls towards <b>WEST</b>. Sunset shadow falls towards <b>EAST</b>.<br>
          • At 12 Noon, there is no shadow.<br>
          • Displacement: Pythagoras <span class="mono">sqrt(dx^2 + dy^2)</span>.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\2. Distance and Direction\\</span>
          <span class="file-tag">📄 Infosys Mock Test Series\\Day 02\\2. Full length Logical Reasoning.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">6. Visual Reasoning, Dice & Paper</div>
          <div class="topic-sub">Unfolded dice, Mirror/Water images, Paper folding</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Unfolded Dice:</b> Alternate faces are opposite (1 face gap).<br>
          • Faces sharing edge can NEVER be opposite!<br>
          • Paper folding: Trace punched hole symmetry along fold lines.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\Module 11 - Dice Mirror Image Water\\</span>
          <span class="file-tag">📁 Dice • 📁 Paper Folding • 📁 images</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 15 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">7. Clocks & Calendars</div>
          <div class="topic-sub">Angle between hands, Day on arbitrary date</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Angle formula: <span class="mono">theta = |30H - 5.5M|</span>.<br>
          • Hands coincide 22 times in 24 hours.<br>
          • Century leap years: 1600, 2000, 2400 (divisible by 400).
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section I - Logical Reasoning & Puzzle\\Module 12 - Clocks & Calendar\\</span>
          <span class="file-tag">📄 Purchased Documents\\Clocks Class Solution.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Concept</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> 12 Qs Solved</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 1 Reasoning Ability</span>
    <span>Page 7 of 10</span>
  </div>
</div>
"""

    p8 = """
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
        <th style="width: 22%;">Verbal Subtopic</th>
        <th style="width: 10%;">Yield</th>
        <th style="width: 28%;">Exam Strategy & Skimming Hacks</th>
        <th style="width: 26%;">Exact Folder & File Resource (Vault)</th>
        <th style="width: 14%;">Register Tracker</th>
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
          • <b>Questions First Rule:</b> Always read question stems first.<br>
          • Look for transition words: <i>"However, Nonetheless, Despite, Consequently"</i>.<br>
          • Fact vs Inference: Never select option requiring outside assumptions!
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\Module 3 - Reading Comprehension\\</span>
          <span class="file-tag">📄 VERBAL ABILITY - RC 01 - Question Paper.md</span>
          <span class="file-tag">📄 VERBAL ABILITY - RC 02 - Question Paper.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> 8 Passages</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. Para Jumbles / Order</div>
          <div class="topic-sub">4-5 sentences rearrangement (A-B-C-D)</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • <b>Find Opening Sentence:</b> Must introduce noun independently.<br>
          • <b>Mandatory Pairs:</b> Noun -> Pronoun pairs (<i>"Tesla ... He"</i>).<br>
          • Look at option choices! If 3 options start with B, test B first.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\Live - Infosys Previous year\\</span>
          <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\Day 05\\</span>
          <span class="file-tag">📄 5 Ful length Verbal Ability - Question Paper.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> 15 Sets</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. Fillers & Vocab</div>
          <div class="topic-sub">Single & double blanks, One-word substitution</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐</span>
        </td>
        <td>
          • Determine sentence tone: Positive, Negative, or Contrast.<br>
          • Eliminate options by testing second blank first (often much easier to spot).
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\Module 1 - Vocab\\</span>
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section IV & V - English & Grammar\\Module 2 - One word substitution\\</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> 25 Qs</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> R1 &nbsp; <span class="chk"></span> R2</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="sec-heading" style="margin-top: 5px;">
    <span>📝 SECTION 7: ENGLISH WRITING TEST (1 PROMPT • 10 MINS)</span>
    <span class="sec-badge star-badge">AI Evaluated Subjective Round</span>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 22%;">Writing Component</th>
        <th style="width: 36%;">Standard Professional Framework</th>
        <th style="width: 28%;">Exact Vault Location</th>
        <th style="width: 14%;">Audit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>1. Subject Line & Salutation</b></td>
        <td>Concise subject: <span class="mono">Subject: Request for Project Deadline Extension</span>. Formal salutation: <span class="mono">Dear Mr. Sharma / Dear Hiring Manager</span>.</td>
        <td rowspan="4">
          <span class="folder-tag">Course_844567_Full\\2. Infosys System Eng Prep- Apti + Pseudo\\Section VII - Essay Writing\\</span>
          <span class="file-tag">📄 Infosys Essay Writing topics.pdf</span>
          <span style="font-size: 6.2pt; color: #475569; display: block; margin-top: 2px;">
            <b>Repeated Topics:</b><br>
            • Remote vs Hybrid Culture<br>
            • AI: Boom or Bane in IT<br>
            • Cyber Security in Banking<br>
            • Sustainable Green Energy
          </span>
        </td>
        <td><div class="chk-group"><span class="chk"></span> Salutations</div></td>
      </tr>
      <tr>
        <td><b>2. Paragraph 1: Hook</b></td>
        <td>State purpose in 1-2 sentences: <span class="mono">I am writing to formally request... / This essay examines the role of AI...</span></td>
        <td><div class="chk-group"><span class="chk"></span> 3 Hooks</div></td>
      </tr>
      <tr>
        <td><b>3. Paragraph 2: Core Body</b></td>
        <td>2-3 logical points. Connectors: <i>"Furthermore, Consequently, On one hand, In addition"</i>. Zero grammatical errors!</td>
        <td><div class="chk-group"><span class="chk"></span> Connectors</div></td>
      </tr>
      <tr>
        <td><b>4. Paragraph 3: CTA</b></td>
        <td>Call to Action + Professional closing: <span class="mono">Looking forward to your favorable response. Sincerely, [Name]</span>.</td>
        <td><div class="chk-group"><span class="chk"></span> 0 Typos Rule</div></td>
      </tr>
    </tbody>
  </table>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Section 3 & 7 Verbal & Essay</span>
    <span>Page 8 of 10</span>
  </div>
</div>
"""

    p9 = """
<div class="page">
  <div class="page-header">
    <span>Round 2: Technical Interview, Coding Upgrade & HR Round Mastery</span>
    <span>Final Milestone to Infosys System Engineer Offer Letter</span>
  </div>

  <div class="sec-heading">
    <span>💼 TECHNICAL INTERVIEW MASTERY (OOPs, DBMS, OS, NETWORKS & CODING)</span>
    <span class="sec-badge fire-badge">Mandatory Round 2 (25-35 Mins)</span>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 22%;">Technical Domain</th>
        <th style="width: 10%;">Yield</th>
        <th style="width: 32%;">Core Technical Concepts & Questions Asked</th>
        <th style="width: 22%;">Exact Vault Folder</th>
        <th style="width: 14%;">Interview Check</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="topic-name">1. OOPs Fundamentals</div>
          <div class="topic-sub">4 Pillars, Diamond Problem, Real code</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • Abstraction (Abstract class vs Interface).<br>
          • Polymorphism: Compile-time (Overloading) vs Runtime (Overriding / Virtual).<br>
          • Diamond problem in multiple inheritance & interface solution.<br>
          • Encapsulation with private getters/setters.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\3. Infosys DSE & SP Role Prep\\</span>
          <span class="file-tag">📄 LeetCode Important Questions Amogh Sir.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> 4 Pillars</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> Code Ready</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">2. DBMS & SQL Queries</div>
          <div class="topic-sub">ACID, Normalization, Joins, 2nd Highest Salary</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • ACID properties with bank transaction example.<br>
          • 1NF, 2NF, 3NF, BCNF anomalies.<br>
          • SQL Query: 2nd highest salary using <span class="mono">DENSE_RANK()</span> or subquery.<br>
          • INNER vs LEFT vs RIGHT vs FULL OUTER JOIN.<br>
          • GROUP BY vs HAVING difference.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\3. Infosys DSE & SP Role Prep\\</span>
          <span class="file-tag">📁 NEW - DSE - SE - Infosys Coding Questions\\</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> ACID / 3NF</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> SQL Queries</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">3. OS & Computer Networks</div>
          <div class="topic-sub">Process/Thread, Deadlocks, OSI 7 Layers, TCP/UDP</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐</span>
        </td>
        <td>
          • Process vs Thread (Memory space sharing).<br>
          • Deadlock 4 Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.<br>
          • OSI 7 Layers (Physical to Application).<br>
          • TCP (Connection-oriented, 3-way handshake) vs UDP.
        </td>
        <td>
          <span class="folder-tag">Course_844567_Full\\1. RoadMap - Induction Imp\\</span>
          <span class="file-tag">📄 Infosys Hiring Roadmap Exam Pattern.pdf</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> Deadlocks</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> OSI Layers</div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="topic-name">4. Final Year Project Defense</div>
          <div class="topic-sub">Architecture, Tech stack, Individual role, Bugs</div>
        </td>
        <td>
          <span class="fire-icon">🔥🔥🔥</span><br>
          <span class="star-icon">⭐⭐⭐⭐⭐</span>
        </td>
        <td>
          • Explain 2-minute project elevator pitch.<br>
          • Draw system architecture & DB schema on paper.<br>
          • What was your SPECIFIC contribution?<br>
          • What was the biggest bug or technical challenge you faced?
        </td>
        <td>
          <span class="folder-tag">preparation\\src\\company preperation pure placement oriented\\</span>
          <span class="file-tag">📄 roadmap.md</span>
        </td>
        <td>
          <div class="chk-group"><span class="chk"></span> 2-min Pitch</div>
          <div class="chk-group" style="margin-top:1.5px;"><span class="chk"></span> DB Schema</div>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="sec-heading" style="margin-top: 5px;">
    <span>🤝 HR ROUND & INFOSYS C-LIFE CULTURE FITMENT</span>
    <span class="sec-badge star-badge">10-15 Mins Behavioral</span>
  </div>

  <div class="grid-2">
    <div class="card priority-med">
      <b>Infosys C-LIFE Core Values:</b>
      <p style="font-size: 6.8pt; color: #334155; margin-top: 1.5px;">
        • <b>C:</b> Customer Delight • <b>L:</b> Leadership by Example • <b>I:</b> Integrity & Transparency • <b>F:</b> Fairness • <b>E:</b> Pursuit of Excellence.<br>
        • Quote at least 2 values during your behavioral answers.
      </p>
    </div>
    <div class="card priority-high">
      <b>3 Non-Negotiable HR Affirmations:</b>
      <p style="font-size: 6.8pt; color: #334155; margin-top: 1.5px;">
        • <b>Relocation to Mysore & DC:</b> Say "YES, 100% eager to train at the world-class Mysore campus!"<br>
        • <b>Rotational / Night Shifts:</b> Say "YES, fully flexible and comfortable with project requirements."<br>
        • <b>5-Year Vision:</b> Transition from SE to Senior Developer / Tech Lead within Infosys.
      </p>
    </div>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Round 2 Technical & HR Interview</span>
    <span>Page 9 of 10</span>
  </div>
</div>
"""

    p10 = """
<div class="page">
  <div class="page-header">
    <span>10-Day Countdown Sprint & Complete Master Vault Directory</span>
    <span>Physical Location Map on Local PC • 100% Complete</span>
  </div>

  <div class="sec-heading">
    <span>📅 10-DAY COUNTDOWN BATTLE SPRINT SCHEDULE (ROAD TO SE OFFER)</span>
    <span class="sec-badge fire-badge">Target: 50 Questions / Day</span>
  </div>

  <table class="tracker-table">
    <thead>
      <tr>
        <th style="width: 10%;">Day / Date</th>
        <th style="width: 25%;">Morning Drill (Quant & Reasoning)</th>
        <th style="width: 25%;">Evening Drill (Pseudocode & Puzzles)</th>
        <th style="width: 25%;">Night Drill (Verbal/Mock)</th>
        <th style="width: 15%;">Audit Status</th>
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

  <div class="sec-heading" style="margin-top: 5px;">
    <span>🗂️ MASTER RESOURCE VAULT DIRECTORY (ALL MEANS ALL)</span>
    <span class="sec-badge star-badge">Permanent Local Archive</span>
  </div>

  <div class="grid-2">
    <div class="card priority-high">
      <b>📁 1. INFOSYS MOCK TEST SERIES (DAY 01 - 09)</b>
      <div style="font-size: 6.2pt; color: #334155; margin-top: 1.5px;">
        <span class="folder-tag">Course_844567_Full\\Infosys Mock Test Series\\</span>
        • Day 01 to Day 09 Full CBT Mock Tests with Video Solutions.<br>
        • Real Exam: <span class="mono">Infosys English Question asked on 4 Oct 2025.md</span>.<br>
        • 7+ Ebooks with 1000+ Solutions: Logical, Quant, Verbal, DI, Pseudo.
      </div>
    </div>
    <div class="card priority-med">
      <b>📁 2. PURCHASED DOCUMENTS & DSA STUDIO</b>
      <div style="font-size: 6.2pt; color: #334155; margin-top: 1.5px;">
        <span class="folder-tag">Course_844567_Full\\Purchased Documents\\</span>
        • 250+ Quant Assorted Book, PnC, Probability, Mensuration 3D, LCM-HCF, Quadratic.<br>
        • <b>PrepDash App (http://localhost:5173/):</b> Codeforces 617A & 546A Visualizers, 27k Question Bank.
      </div>
    </div>
  </div>

  <div class="callout callout-info" style="margin-top: 4px;">
    <div>🏆</div>
    <div>
      <b>THE 1000% ASSURANCE:</b> Every single concept, formula, puzzle, pseudocode trick, grammar rule, essay structure, interview answer, and disk folder path is documented in this tracker. <b>You are completely ready. Go crack Infosys Systems Engineer!</b>
    </div>
  </div>

  <div class="page-footer">
    <span>Infosys SE Complete Syllabus Tracker • Final Sprint & Complete Vault Map</span>
    <span>Page 10 of 10</span>
  </div>
</div>
"""

    with open('INFOSYS_SE_MASTER_SYLLABUS_TRACKER.html', 'r', encoding='utf-8') as f:
        existing = f.read()

    # Extract head and styles
    head = existing.split('</head>')[0] + '</head>\n<body>\n'
    tail = '\n</body>\n</html>'

    full_html = head + p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + tail

    with open('INFOSYS_SE_MASTER_SYLLABUS_TRACKER.html', 'w', encoding='utf-8') as f:
        f.write(full_html)

    print("Generated 10-page HTML successfully!")

if __name__ == '__main__':
    create_10page_html()
