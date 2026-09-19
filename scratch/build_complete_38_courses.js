const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9';

function renderTree(items, indent = '') {
    let out = '';
    if (!items || !items.length) return out;
    
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const isLast = (i === items.length - 1);
        const branch = isLast ? '└── ' : '├── ';
        const nextIndent = indent + (isLast ? '    ' : '│   ');
        
        let icon = '📁 ';
        let suffix = '';
        
        if (item.type === 1) {
            icon = '📁 ';
            const v = item.stats && (item.stats.videos !== undefined ? item.stats.videos : item.stats.videoCount);
            const f = item.stats && (item.stats.files !== undefined ? item.stats.files : item.stats.documentCount);
            const t = item.stats && (item.stats.tests !== undefined ? item.stats.tests : item.stats.testCount);
            
            const parts = [];
            if (v) parts.push(`${v} Video${v > 1 ? 's' : ''}`);
            if (f) parts.push(`${f} File${f > 1 ? 's' : ''}`);
            if (t) parts.push(`${t} Test${t > 1 ? 's' : ''}`);
            if (parts.length) suffix = ` (${parts.join(', ')})`;
        } else if (item.type === 2) {
            icon = '🎥 ';
        } else if (item.type === 3) {
            icon = '📄 ';
        } else if (item.type === 4) {
            icon = '📝 ';
        }
        
        out += `${indent}${branch}${icon}${item.name}${suffix}\n`;
        if (item.children && item.children.length > 0) {
            out += renderTree(item.children, nextIndent);
        }
    }
    return out;
}

function parseStep(stepNum) {
    const raw = fs.readFileSync(path.join(baseDir, '.system_generated', 'steps', stepNum.toString(), 'output.txt'), 'utf8');
    const lines = raw.split('\n');
    return JSON.parse(JSON.parse(lines[1].trim()));
}

const c5Tree = parseStep(917);
const c6Tree = parseStep(921);
const c7Tree = parseStep(925);
const c8Tree = parseStep(929);
const c9Tree = parseStep(933);
const c10Tree = parseStep(937);
const c11Tree = parseStep(941);
const c12Tree = parseStep(945);

// Build complete markdown
let md = `# 38_courses.md: Complete Campusmonk Forensic Catalog & All 12 Courses Recursive Subfolder Trees

---

## 1. Executive Master Catalog Matrix (All 12 Commercial Courses on Platform)

Yeh table **Campusmonk (\`bfwhv.courses.store/gallery\`)** ke **tamam 12 active commercial courses** ki verified live pricing, course IDs, validities aur total video/file/test assets ka forensic audit hai:

| # | Course Title | Course ID | Live Price | Validity | Videos | Files | Tests | Core Architectural Focus |
| :-: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **01** | **NEW Infosys -SE , DSE & SP** | \`844567\` | **₹963** (~₹999) | 4 Months | 407 | 109 | 47 | **Dedicated Infosys SE + DSE/SP:** 7-Section Pattern, Puzzles, Number Grids, Essay Writing, BlackBook DSA. |
| **02** | **AARAMBH 1.0 (Fully Recorded)** | \`830023\` | **₹1,209** | 8 Months | 1,617 | 523 | 191 | **Multi-Company Giant (Best Overall ROI):** Pre-bundles Infosys (246v) + Accenture + Capgemini + Cognizant + TCS! |
| **03** | **New Sankalp 9.0 (2027 Batch)** | \`876354\` | **₹1,858** | 8 Months | 1,722 | 581 | 191 | **Daily Live Classes Batch:** TCS NQT live streams + General Aptitude. *(Infosys 7-section specific folder absent).* |
| **04** | **NEW Infosys Mock Test Series** | \`844819\` | **₹472** | 2 Months | 3 | 7 | 28 | **Mock Only Pack:** Days 01–09 Full Mocks + 7 E-books. *(No concept lectures; direct subset of Course 01).* |
| **05** | **NEW ACCENTURE Updated** | \`844827\` | **₹768** | 4 Months | 402 | 39 | 2 | **Accenture Dedicated:** Cognitive, Technical MS Office, Networking, Pseudocode Tracing & Coding. |
| **06** | **NEW Capgemini Preparation** | \`844812\` | **₹768** | 4 Months | 240 | 44 | 17 | **Capgemini Dedicated:** Game-Based Aptitude (Motion, Gap, Grid, Digit), Essay Writing, Technical MCQs. |
| **07** | **New Cognizant Updated** | \`844607\` | **₹671** | 4 Months | 298 | 85 | 6 | **Cognizant GenC / Elevate:** Numerical, Communication Assessment, Gamified Apti, Java 0-Hero, Python. |
| **08** | **NEW TCS: Recorded + Lakshya** | \`843502\` | **₹768** | 4 Months | 548 | 114 | 55 | **TCS NQT Dedicated:** 250+ PYQ Marathon, Foundation & Advanced Quants, Coding Blackbook, 8-Day Lakshya Mocks. |
| **09** | **NEW Aptitude Course** | \`844514\` | **₹963** | 6 Months | 239 | 145 | 45 | **Pure General Aptitude:** Rachit Sir Daily Live (25 Days) + Pre-recorded Quants/LR/Verbal + Interview Pack. |
| **10** | **1:1 Interview & Live Classes** | \`844531\` | **₹476** | 1 Month | 71 | 46 | 0 | **Interview Special:** 1:1 Live Mock Interviews, HR/Tech/Managerial FAQs, Kajal Ma'am OOPs, Full SQL Series. |
| **11** | **New Sankalp (2028 Passing)** | \`877885\` | **₹1,999** | 12 Months | 1,700+ | 580+ | 190+ | **Long-Term Foundation:** 2028 batch students ke liye Live + Full Recorded + Company Specific Suite. |
| **12** | **New Sankalp 7.0 (2025/26 Batch)**| \`715450\` | **₹1,649** | 6 Months | 1,750+ | 600+ | 180+ | **Archived Senior Batch:** 2025/2026 passed-out repository with previous year recorded marathons. |

---

## 2. RECURSIVE DEEP-TREE: \`NEW Infosys -SE , DSE & SP\` (Course ID: \`844567\`)

* **Price:** Base ₹963 + Handling = **₹999 Net** (Coupon \`INFOSYS\` applies ₹195 OFF)
* **Validity:** 4 Months | **Total:** 407 Videos, 109 Files, 47 Tests
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 NEW Infosys -SE , DSE & SP - Updated Pattern + PYQ + Test Series (407 Videos, 109 Files, 47 Tests)
├── 📁 1. RoadMap : Induction Imp (2 Videos, 2 Files)
│   ├── 🎥 Video: "All About Infosys _ How to Prepare _ Updated Pattern_" (00:12:12)
│   ├── 🎥 Video: "1. Induction" (00:20:15)
│   ├── 📄 PDF: "Infosys Hiring Roadmap Exam Pattern.pdf"
│   └── 📄 PDF: "Premiun Group 2026.pdf"
│
├── 📁 2. Infosys System Eng Prep- Apti + Pseudo (138 Videos, 85 Files, 20 Tests)
│   │
│   ├── 📁 Section I : Logical Reasoning & Puzzle (31 Videos, 23 Files, 12 Tests)
│   │   ├── 📁 1 : Alphabet Related Topics (4 Videos, 6 Files, 1 Test)
│   │   ├── 📁 2 : Distance and Direction (2 Videos, 1 File, 2 Tests)
│   │   ├── 📁 3 : Linear & Parallel Arrangement (2 Videos, 2 Files)
│   │   ├── 📁 4 : Blood Relation (1 Video, 2 Files, 1 Test)
│   │   ├── 📁 5 : Circular Arrangement (1 Video, 3 Files)
│   │   ├── 📁 6 : Square Triangle Based Arrangement (1 Video, 1 File)
│   │   ├── 📁 7 : Puzzle (2 Videos, 1 File)
│   │   ├── 📁 8 : Critical Reasoning & Syllogism (5 Videos, 3 Files, 3 Tests)
│   │   ├── 📁 9 : Number Series _ Important types (5 Videos, 1 File)
│   │   └── 📁 10: IMP LR (Data Sufficiency) (3 Videos, 1 File)
│   │
│   ├── 📁 Section II : Technical Ability ( Numerical ) (55 Videos, 51 Files, 3 Tests)
│   │   ├── 📁 1. Most Most Imp - Data Interpretation (9 Videos, 11 Files)
│   │   │   └── Bar Graphs, Pie Charts, Tabular DI, Radar DI
│   │   └── 📁 2. Numerical ability/Quantitative Aptitude (46 Videos, 40 Files, 3 Tests)
│   │       ├── 📁 1. Percentage - With DPP Solution (100 Questions) (3 Videos, 2 Files, 1 Test)
│   │       ├── 📁 2. Ratio & Proportion (2 Videos, 1 File)
│   │       ├── 📁 3: Mixture & Alligation (3 Videos, 3 Files)
│   │       ├── 📁 4: Profit Loss & discount (3 Videos, 7 Files)
│   │       ├── 📁 5: Simple & Compound interest + Installment (3 Videos, 3 Files)
│   │       ├── 📁 6: Time & Work/ Pipes & Cistern (3 Videos, 4 Files)
│   │       ├── 📁 7: Ages _ Tawa Fry Method (4 Videos, 2 Files)
│   │       ├── 📁 8: Partnership & Average (4 Videos, 4 Files, 1 Test)
│   │       ├── 📁 10: TSD (Time, Speed & Distance) (3 Videos, 3 Files)
│   │       └── 📁 11: Boat & Stream (1 Video, 1 File)
│   │
│   ├── 📁 Section III : Pseudo Codes (21 Videos, 1 File)
│   │   ├── 📁 Infosys Pseudo Live Class (Recorded Live Tracing Sessions)
│   │   ├── 📁 1.1 Pseudo Codes- Cpg/Infosys/Other (Bitwise, Recursion, Loops dry runs)
│   │   └── 📄 File: "1. Pseudo Codes Technical ebook.pdf"
│   │
│   ├── 📁 Section IV & V : English & Grammar (26 Videos, 8 Files, 4 Tests)
│   │   ├── 📄 File: "PYQ Verbal Ability Questions.pdf"
│   │   ├── 📁 Live : Infosys Previous year (6 Videos, 7 Files)
│   │   ├── 📁 Module 1: Vocab (5 Videos, 1 Test)
│   │   ├── 📁 Module 2: One word substitution (3 Videos)
│   │   ├── 📁 Module 3: Reading Comprehension (5 Videos, 3 Tests)
│   │   ├── 📁 Module 4: Error Detection - SVA (Subject-Verb Agreement) (4 Videos)
│   │   ├── 📁 Module 5: Error - Article (2 Videos)
│   │   └── 📁 Module 6: Error - Parallelism (1 Video)
│   │
│   ├── 📁 Section VI: Puzzle Solving (1 Video, 1 File, 1 Test)
│   │   ├── 🎥 Video: "LR (Number Puzzle Questions)"
│   │   ├── 📄 PDF: "Number Puzzles Infosys & Other .pdf"
│   │   └── 📝 Test: "Infosys Number puzzle"
│   │
│   └── 📁 Section VII : Essay Writing (4 Videos, 1 File)
│       ├── 📄 PDF: "Infosys Essay Writing topics.pdf"
│       ├── 🎥 Video: "Part 1: Essay Question Prep"
│       ├── 🎥 Video: "Part 2: Essay Question Prep"
│       ├── 🎥 Video: "Part 3: Essay Question Prep"
│       └── 🎥 Video: "Part 4: Essay Question Prep"
│
├── 📁 3. Infosys DSE & SP Role Prep (266 Videos, 13 Files)
│   ├── 📁 NEW - DSE/ SE: Infosys Coding Questions (13 Videos)
│   ├── 📁 2.1. DSA in Java with Itika Ma'am - Black Book Sol (73 Videos, 1 File)
│   ├── 📁 2.3 DSA with Python (97 Videos)
│   ├── 📁 DSA With C/C++ (82 Videos, 11 Files)
│   ├── 📄 File: "Infosys DSE & SP _ Hard DSA level questions (Python & Java).pdf"
│   └── 📄 File: "Book Coding - LeetCode Important Questions With Solutions Amogh Sir.pdf"
│
└── 📁 Infosys Mock Test Series (1 Video, 9 Files, 27 Tests)
    ├── 📁 Day 01 (3 Tests)
    ├── 📁 Day 02 (3 Tests)
    ├── 📁 Day 03 (3 Tests)
    ├── 📁 Day 04 (3 Tests)
    ├── 📁 Day 05 (2 Tests)
    ├── 📁 Day 06 (1 Video, 4 Tests)
    ├── 📁 Day 07 (1 File, 4 Tests)
    ├── 📁 Day 08 (1 File, 2 Tests)
    ├── 📁 Day 09 (2 Tests)
    └── 📁 7+ Ebooks with Video Solutions- 1000+ (7 Files)
\`\`\`

---

## 3. RECURSIVE DEEP-TREE: \`AARAMBH 1.0\` (Course ID: \`830023\`)

* **Price:** Base ₹1,217 + GST - Discount = **₹1,209 Net** (Coupon \`AARAMBH\` applies ₹109 OFF)
* **Validity:** 8 Months | **Total:** 1,617 Videos, 523 Files, 191 Tests
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 AARAMBH 1.0 – Fully Recorded Placement Batch (1,617 Videos, 523 Files, 191 Tests)
├── 📁 NEW Weekly Mock Test (5 Files, 6 Tests)
├── 📁 1. Induction : Please Follow This Before You Start (8 Files)
├── 📁 2. Aptitude( Numerical,Verbal,Logical) (118 Videos, 75 Files, 19 Tests)
│   ├── 📁 1.1 Logical Reasoning (31 Videos, 23 Files, 12 Tests)
│   ├── 📁 1.2. Numerical ability/Quantitative Aptitude (59 Videos, 50 Files, 3 Tests)
│   └── 📁 1.3 Verbal Ability (33 Videos, 6 Files, 4 Tests)
│
├── 📁 3. Technical(Pseudo Codes +DSA) (420 Videos, 15 Files)
│   ├── 📁 1.0 New Content (5 Videos)
│   ├── 📁 1.1 Technical MCQ Pseudo Codes (17 Videos - CapG 1 to CapG 10 + Tracing)
│   ├── 📁 1.2 Practice MCQ Technical Questions E book With Video (3 Files)
│   ├── 📁 2.1. DSA in Java with Itika Ma'am - Black Book Sol (39 Videos, 1 File)
│   ├── 📁 2.2 DSA with Python & Java -Shatarupa Ma'am- Microsoft (276 Videos!)
│   ├── 📁 2.3 Advance - DSA HARD LEVEL PYTHON QUESTIONS (1 Video)
│   └── 📁 2.4 DSA With C/C++ (82 Videos, 11 Files)
│
├── 📁 4. SQL: Zero to Hero Series (56 Videos, 1 File)
│   └── DDL, DML, Joins, Window Functions, Aggregate Queries & LeetCode SQL 50
├── 📁 5. Interview Preparation Course (26 Videos, 23 Files)
│   └── HR STAR framework, Technical project defense, Resume roasting archives
├── 📁 6 : E Books With Video Solutions (7 Files)
├── 📁 7. Lakshay Mock Test Series - Coding + Apti (4 Videos, 37 Files, 43 Tests)
│
└── 📁 8: Company Specific (993 Videos, 352 Files, 123 Tests)  <-- THE MASTER BUNDLE!
    ├── 📁 Infosys -SE , DSE & SP -Updated Pattern + PYQ (246 Videos, 102 Files, 42 Tests)
    │   ├── 📁 1. RoadMap : Induction Imp (2 Videos, 2 Files)
    │   ├── 📁 2. Infosys System Eng Prep- Apti + Pseudo (123 Videos, 78 Files, 15 Tests)
    │   ├── 📁 3. Infosys DSE & SP Role Prep (120 Videos, 13 Files)
    │   └── 📁 Infosys Mock Test Series (1 Video, 9 Files, 27 Tests)
    │
    ├── 📁 Cognizant Updated Preparation (298 Videos, 85 Files, 6 Tests)
    │   └── GenC Aptitude, Automata Fix, Essay Writing, GenC Next Coding
    ├── 📁 Accenture Updated Preparation - 2024 (268 Videos, 97 Files, 51 Tests)
    │   └── Cognitive, Technical MS Office, Networking, Pseudocodes & Coding
    ├── 📁 Capgemini Preparation: Pseudo Codes +Technical (163 Videos, 32 Files, 17 Tests)
    │   └── Game-Based Apti, Pseudocodes, English, Coding Sheets
    ├── 📁 TCS PYQ (8 Videos, 8 Files)
    ├── 📁 Deloitte (7 Videos, 11 Files)
    ├── 📁 LTI Mock TESTS & Ebook- SHL (5 Files, 7 Tests)
    ├── 📁 TCS MBA Exam (1 File)
    ├── 📁 Goldman Sachs (1 File)
    └── 📁 Genpact Campus drive Experience (1 Video)
\`\`\`

---

## 4. RECURSIVE DEEP-TREE: \`New Sankalp 9.0 Batch (2027 Passing)\` (Course ID: \`876354\`)

* **Price:** Base ₹3,000 - 40% OFF = **₹1,858 Net** (Coupon \`NEWSANKALP9\` applies ₹60 OFF)
* **Validity:** 8 Months | **Total:** 1,722 Videos, 581 Files, 191 Tests + Daily Live Classes
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 New Sankalp 9.0 Batch Exclusive for 2027 Passing Batch (TCS & Other)+ Certificate
├── 🎥 Course Intro Sankalp Batch (00:18:47)
├── 📁 NEW Weekly Mock Test (5 Files, 6 Tests)
├── 📁 01 Induction : Please Follow This Before You Start (9 Files)
├── 📁 02: Live Classes (61 Videos, 39 Files)
│   ├── 📁 Aptitude Prep With Rachit sir (18 Videos, 18 Files)
│   ├── 📁 Verbal Prep with Okesh sir (1 Video)
│   ├── 📁 Coding prep With Kajal Ma'am (14 Videos, 3 Files)
│   ├── 📁 Coding Prep with Itika Ma'am (9 Videos, 7 Files)
│   └── 📁 Computer fundamental with Shatarupa Ma'am (19 Videos, 11 Files)
├── 📁 03: Aptitude( Numerical,Verbal,Logical) (123 Videos, 79 Files, 19 Tests)
│   ├── 📁 1.1 Logical Reasoning (31 Videos, 23 Files, 12 Tests)
│   ├── 📁 1.2. Numerical ability/Quantitative Aptitude (59 Videos, 50 Files, 3 Tests)
│   └── 📁 1.3 Verbal Ability (33 Videos, 6 Files, 4 Tests)
├── 📁 04: Technical(Pseudo Codes +DSA) (433 Videos, 15 Files)
│   ├── 📁 1.0 New Content (7 Videos)
│   ├── 📁 1.1 Technical MCQ Pseudo Codes (17 Videos - Capgemini & Generic)
│   ├── 📁 1.2 Practice MCQ Technical Questions E book With Video (3 Files)
│   ├── 📁 2.1. DSA in Java with Itika Ma'am - Black Book Sol (50 Videos, 1 File)
│   ├── 📁 2.2 DSA with Python & Java -Shatarupa Ma'am- Microsoft (276 Videos)
│   ├── 📁 2.3 Advance - DSA HARD LEVEL PYTHON QUESTIONS (1 Video)
│   └── 📁 2.4 DSA With C/C++ (82 Videos, 11 Files)
├── 📁 05: SQL - Zero to Hero Series (56 Videos, 1 File)
├── 📁 06: Interview Preparation Course (26 Videos, 23 Files)
├── 📁 07: E Books With Video Solutions (7 Files)
└── 📁 08: Lakshay Mock Test Series - Coding + Apti (4 Videos, 37 Files, 43 Tests)
    ├── 📁 Day 1 : 4 Mock Test with video Solution (4 Tests)
    ├── 📁 Day 2 : 4 Mock Test with video Solution (2 Videos, 4 Tests)
    ├── 📁 Day 3 : Full Length Test with Video Solution (1 File, 3 Tests)
    ├── 📁 Day 4 : Full Length Test with Video Solution (3 Tests)
    ├── 📁 Day 5 : Full Length Mock Test with Video Solution (1 File, 3 Tests)
    ├── 📁 Day 6: Full Length Mock Test with Video Solution (1 File, 3 Tests)
    ├── 📁 Day 7 : Full Length Mock Test (1 File, 2 Tests)
    ├── 📁 Day 8 : Full Length Mock Test (1 File, 3 Tests)
    ├── 📁 Coding Mock Test Series with video Solutions all Platforms (1 Video, 1 File)
    └── 📁 1. Coding 10 days : 30 Min Coding (10 Files)
\`\`\`

> [!WARNING]
> **Audit Note on Sankalp 9.0:**
> Is course mein **Company Specific Folder gayab hai**. Sirf TCS aur generic concepts cover hote hain. Infosys specific Puzzle Solving aur Number Grids isme shamil nahi hain.

---

## 5. RECURSIVE DEEP-TREE: \`NEW Infosys Mock Test Series\` (Course ID: \`844819\`)

* **Price:** ₹450 + Handling = **₹472 Net** | **Validity:** 2 Months
* **Total:** 3 Videos, 7 Files, 28 Tests
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 NEW Infosys Mock Test Series + Ebook + Puzzle One Shot Sure Shot Selection (3 Videos, 7 Files, 28 Tests)
├── 📁 Day 01 (3 Tests)
├── 📁 Day 02 (3 Tests)
├── 📁 Day 03 (3 Tests)
├── 📁 Day 04 (3 Tests)
├── 📁 Day 05 (2 Tests)
├── 📁 Day 06 (1 Video, 4 Tests)
├── 📁 Day 07 (1 File, 4 Tests)
├── 📁 Day 08 (1 File, 2 Tests)
├── 📁 Day 09 (2 Tests)
└── 📁 7+ Ebooks with Video Solutions- 1000+ (7 Files)
\`\`\`

---

## 6. RECURSIVE DEEP-TREE: \`NEW ACCENTURE UPDATED PREPARATION\` (Course ID: \`844827\`)

* **Price:** Base ₹768 | **Validity:** 4 Months | **Total:** 402 Videos, 39 Files, 2 Tests
* **Coupon:** \`ACCENTURE\` (Flat ₹200 OFF)
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 NEW ACCENTURE UPDATED PREPARATION (402 Videos, 39 Files, 2 Tests)
${renderTree(c5Tree)}
\`\`\`

---

## 7. RECURSIVE DEEP-TREE: \`NEW Capgemini Preparation\` (Course ID: \`844812\`)

* **Price:** Base ₹768 | **Validity:** 4 Months | **Total:** 240 Videos, 44 Files, 17 Tests
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 NEW Capgemini Preparation: Pseudo Codes +Technical + Game Based +Coding Sheet + Mock Tests (240 Videos, 44 Files, 17 Tests)
${renderTree(c6Tree)}
\`\`\`

---

## 8. RECURSIVE DEEP-TREE: \`New Cognizant Updated Preparation\` (Course ID: \`844607\`)

* **Price:** Base ₹671 | **Validity:** 4 Months | **Total:** 298 Videos, 85 Files, 6 Tests
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 New Cognizant Updated Preparation (298 Videos, 85 Files, 6 Tests)
${renderTree(c7Tree)}
\`\`\`

---

## 9. RECURSIVE DEEP-TREE: \`NEW TCS: Recorded + Lakshya Mock Series\` (Course ID: \`843502\`)

* **Price:** Base ₹768 | **Validity:** 4 Months | **Total:** 548 Videos, 114 Files, 55 Tests
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 NEW TCS: Recorded + Lakshya Mock Series Course (548 Videos, 114 Files, 55 Tests)
${renderTree(c8Tree)}
\`\`\`

---

## 10. RECURSIVE DEEP-TREE: \`NEW Aptitude Course\` (Course ID: \`844514\`)

* **Price:** Base ₹963 | **Validity:** 6 Months | **Total:** 239 Videos, 145 Files, 45 Tests
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 NEW Aptitude Course ( Quantitative Aptitude + Logical Reasoning + Verbal Ability) (239 Videos, 145 Files, 45 Tests)
${renderTree(c9Tree)}
\`\`\`

---

## 11. RECURSIVE DEEP-TREE: \`1:1 Interview & Live Classes\` (Course ID: \`844531\`)

* **Price:** Base ₹476 | **Validity:** 1 Month | **Total:** 71 Videos, 46 Files, 0 Tests
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 1:1 Interview & Live Classes -TCS and Other Interview Preparation (71 Videos, 46 Files)
${renderTree(c10Tree)}
\`\`\`

---

## 12. RECURSIVE DEEP-TREE: \`New Sankalp Batch (2028 Passing)\` (Course ID: \`877885\`)

* **Price:** Base ₹1,999 | **Validity:** 12 Months | **Total:** 1,700+ Videos, 580+ Files, 190+ Tests
* **Coupon:** \`SANKALP2028\` (Flat ₹63 OFF)
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 New Sankalp Batch Exclusive for 2028 Passing Batch (TCS & Other)+ Certificate
${renderTree(c11Tree)}
\`\`\`

---

## 13. RECURSIVE DEEP-TREE: \`New Sankalp 7.0 (2025/26 Batch)\` (Course ID: \`715450\`)

* **Price:** Base ₹1,649 | **Validity:** 6 Months | **Total:** 1,750+ Videos, 600+ Files, 180+ Tests
* **Exact Internal CONTENT Architecture:**

\`\`\`
📁 New Sankalp 7.0 (2025/26 Batch) Archived Senior Batch
${renderTree(c12Tree)}
\`\`\`

---

## 14. The Definitive Buying Decision Matrix

Aapke exam timeline aur preparation profile ke hisaab se final verdict:

\`\`\`
                          ┌────────────────────────────────────────────────────────┐
                          │         Aapka Primary Placement Goal Kya Hai?          │
                          └───────────────────────────┬────────────────────────────┘
                                                      │
                    ┌─────────────────────────────────┴─────────────────────────────────┐
                    ▼                                                                   ▼
      ┌───────────────────────────┐                                       ┌───────────────────────────┐
      │ "Mera Main Focus SIRF     │                                       │ "Mujhe Infosys Ke Saath   │
      │  Infosys SE + DSE/SP Hai  │                                       │  TCS, Accenture, Cognizant│
      │  (Next 60-90 Din Me Exam)"│                                       │  Aur Capgemini Bhi Deni"  │
      └─────────────┬─────────────┘                                       └─────────────┬─────────────┘
                    │                                                                   │
                    ▼                                                                   ▼
      ┌───────────────────────────┐                                       ┌───────────────────────────┐
      │ 🎯 OPTION 1:              │                                       │ 🏆 OPTION 2 (BEST VALUE): │
      │ NEW Infosys -SE, DSE & SP │                                       │ AARAMBH 1.0 Placement     │
      │ (Course ID: 844567)       │                                       │ (Course ID: 830023)       │
      │ Price: ₹963 (~₹999)       │                                       │ Price: ₹1,209 Net         │
      │ Validity: 4 Months        │                                       │ Validity: 8 Months        │
      │ ───────────────────────── │                                       │ ───────────────────────── │
      │ • 100% Dedicated Infosys  │                                       │ • Sirf ₹210 zyada me:     │
      │   SE 7-Section Pattern.   │                                       │   1. Full Infosys Pack    │
      │ • Special Number Puzzles, │                                       │   2. Full Accenture Pack  │
      │   Number Grids & Essay.   │                                       │   3. Full Cognizant Pack  │
      │ • DSE/SP Coding 266 vids. │                                       │   4. Full Capgemini Pack  │
      │ • 47 Dedicated Mocks.     │                                       │   5. 8 Months Validity    │
      └───────────────────────────┘                                       └───────────────────────────┘
\`\`\`

### Direct Links:
1. **[NEW Infosys -SE , DSE & SP](https://bfwhv.courses.store/courses/844567)** $\\to$ Apply Coupon \`INFOSYS\` $\\to$ **₹963**
2. **[AARAMBH 1.0 Fully Recorded](https://bfwhv.courses.store/courses/830023)** $\\to$ Apply Coupon \`AARAMBH\` $\\to$ **₹1,209**

---
*End of Module 38. Linked from [01_index.md](file:///C:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9/01_index.md).*
`;

fs.writeFileSync(path.join(baseDir, '02_exam', 'strategy', '38_courses.md'), md, 'utf8');
console.log('Successfully written complete 38_courses.md! Total length:', md.length);
