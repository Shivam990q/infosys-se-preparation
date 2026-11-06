import os, sys

sys.stdout.reconfigure(encoding='utf-8')

base = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete'
vault = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\Infosys_SE_Elite_Crack_Vault'

f1_base = os.path.join(base, r'09_Mock_Test_Series\04_CampusMonk_47_Mock_Tests\Day 07\Mock_02\Infosys Mock Test Video Solution.md')
f1_vault = os.path.join(vault, r'09_Mock_Test_Series\04_CampusMonk_47_Mock_Tests\Day 07\Mock_02\Infosys Mock Test Video Solution.md')

f2_base = os.path.join(base, r'09_Mock_Test_Series\04_CampusMonk_47_Mock_Tests\Day 08\Mock_03\Solution Link.md')
f2_vault = os.path.join(vault, r'09_Mock_Test_Series\04_CampusMonk_47_Mock_Tests\Day 08\Mock_03\Solution Link.md')

c1 = """# Infosys Mock Test Video Solution Guide — Day 07 (Mock 02)

**Source Document:** `Infosys Mock Test Video Solution.pdf`  
**Parent Module:** CampusMonk 47 Mock Tests Series (Day 07, Mock 02)  

---

### Overview & Access Information
This module provides video walkthroughs and question-by-question explanations for the timed test series in Day 07 Mock 02:
- **Numerical Ability (Quant):** Video solutions covering time-and-work, speed-distance-time, percentages, profit-and-loss, and mixtures.
- **Logical Reasoning:** Step-by-step video deduction of seating arrangements, syllogisms, and direction sense.
- **Verbal Ability:** Grammatical analysis, sentence completion, and reading comprehension pacing.
- **Technical MCQ & Pseudo Code:** Line-by-line tracing of iterative loops, conditional branching, and variable scoping.

> **Note:** All written questions, verified options, and complete mathematical & algorithmic step-by-step solutions for Day 07 are fully documented in the companion files in this folder:
> - `Infosys Mock Test 1 - Solutions.md`
> - `Technical MCQ - Solutions.md`
"""

c2 = """# Infosys Solutions & Online Portal Guide — Day 08 (Mock 03)

**Source Document:** `Solution Link.pdf`  
**Parent Module:** CampusMonk 47 Mock Tests Series (Day 08, Mock 03)  

---

### Test Access & Sectional Links
This document connects to the interactive online portal for timed test taking:
1. **Section 1: Quantitative Aptitude** — Timed calculation practice.
2. **Section 2: Logical Reasoning** — Deductive logic, blood relations, and seating arrangements.
3. **Section 3: Verbal Ability** — Grammar, syntax rules, and comprehension passages.
4. **Section 4: Technical MCQ & Pseudo Code** — Recursive functions, bitwise operations, and control flow.

> **Note:** For offline study and complete self-paced preparation, all written questions, verified answers, and comprehensive line-by-line solutions are fully detailed in:
> - `Infosys Mock Test 1 - Solutions.md`
> - `Technical MCQ - Solutions.md`
"""

for p, c in [(f1_base, c1), (f1_vault, c1), (f2_base, c2), (f2_vault, c2)]:
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f"Written {p}")

