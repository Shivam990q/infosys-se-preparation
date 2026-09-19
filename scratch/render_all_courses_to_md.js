const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9';
const coursesDir = path.join(baseDir, 'scratch', 'courses');

const COURSES = [
    { id: '844567', name: 'NEW Infosys -SE , DSE & SP - Updated Pattern + PYQ + Test Series', price: '₹963 (~₹999)', validity: '4 Months', coupon: 'INFOSYS (₹195 OFF)' },
    { id: '830023', name: 'AARAMBH 1.0 – Fully Recorded Placement Batch', price: '₹1,209 Net', validity: '8 Months', coupon: 'AARAMBH (₹109 OFF)' },
    { id: '876354', name: 'New Sankalp 9.0 Batch Exclusive for 2027 Passing Batch (TCS & Other)+ Certificate', price: '₹1,858 Net', validity: '8 Months', coupon: 'NEWSANKALP9 (₹60 OFF)' },
    { id: '844819', name: 'NEW Infosys Mock Test Series + Ebook + Puzzle One Shot', price: '₹472 Net', validity: '2 Months', coupon: 'None' },
    { id: '844827', name: 'NEW ACCENTURE UPDATED PREPARATION', price: '₹768 Net', validity: '4 Months', coupon: 'ACCENTURE (₹200 OFF)' },
    { id: '844812', name: 'NEW Capgemini Preparation: Pseudo Codes + Technical + Game Based', price: '₹768 Net', validity: '4 Months', coupon: 'None' },
    { id: '844607', name: 'New Cognizant Updated Preparation', price: '₹671 Net', validity: '4 Months', coupon: 'None' },
    { id: '843502', name: 'NEW TCS: Recorded + Lakshya Mock Series Course', price: '₹768 Net', validity: '4 Months', coupon: 'None' },
    { id: '844514', name: 'NEW Aptitude Course ( Quantitative Aptitude + Logical Reasoning + Verbal Ability)', price: '₹963 Net', validity: '6 Months', coupon: 'None' },
    { id: '844531', name: '1:1 Interview & Live Classes - TCS and Other Interview Preparation', price: '₹476 Net', validity: '1 Month', coupon: 'None' },
    { id: '877885', name: 'New Sankalp Batch Exclusive for 2028 Passing Batch (TCS & Other)+ Certificate', price: '₹1,999 Net', validity: '12 Months', coupon: 'SANKALP2028 (₹63 OFF)' },
    { id: '715450', name: 'New Sankalp 7.0 (2025/26 Batch) Archived Senior Batch', price: '₹1,649 Net', validity: '6 Months', coupon: 'None' }
];

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

function countNodes(nodes) {
    let folders = 0, videos = 0, files = 0, tests = 0;
    function recurse(list) {
        for (const n of list) {
            if (n.type === 1) {
                folders++;
                if (n.children) recurse(n.children);
            } else if (n.type === 2) videos++;
            else if (n.type === 3) files++;
            else if (n.type === 4) tests++;
        }
    }
    recurse(nodes);
    return { folders, videos, files, tests, totalLeaves: videos + files + tests };
}

function main() {
    console.log('Generating complete exhaustive 38_courses.md from JSON trees...');
    
    // Check all files exist
    for (const c of COURSES) {
        const p = path.join(coursesDir, `${c.id}.json`);
        if (!fs.existsSync(p)) {
            console.error(`Missing JSON for course ${c.id}: ${c.name}`);
            return;
        }
    }
    
    let md = `# 38_courses.md: Complete Campusmonk Forensic Catalog & All 12 Courses Recursive Subfolder Trees (Unlimited Depth)

---

## 1. Executive Master Catalog Matrix (All 12 Commercial Courses on Platform)

Yeh table **Campusmonk (\`bfwhv.courses.store/gallery\`)** ke **tamam 12 active commercial courses** ki verified live pricing, course IDs, validities aur total video/file/test assets ka exhaustive forensic audit hai:

| # | Course Title | Course ID | Live Price | Validity | Total Folders | Videos | Files | Tests | Total Assets | Core Focus & Buying Advice |
| :-: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
`;

    // Compute stats for table
    const courseDataMap = {};
    for (let i = 0; i < COURSES.length; i++) {
        const c = COURSES[i];
        const raw = fs.readFileSync(path.join(coursesDir, `${c.id}.json`), 'utf8');
        const tree = JSON.parse(raw);
        const counts = countNodes(tree);
        courseDataMap[c.id] = { tree, counts };
        
        let focus = '';
        if (c.id === '844567') focus = '**100% Dedicated Infosys:** 7-Section Pattern, Puzzles, DI, Essay, DSE Coding, 47 Mocks.';
        else if (c.id === '830023') focus = '**Multi-Company Giant (Best Overall ROI):** Pre-bundles Infosys (246v) + Accenture + CapG + Cognizant + TCS!';
        else if (c.id === '876354') focus = '**Daily Live Streams:** General Apti + TCS live stream. *(Infosys 7-section specific folder missing).*';
        else if (c.id === '844819') focus = '**Mock Only Pack:** Days 01–09 Full Mocks + 7 E-books. *(No concept lectures; direct subset of Course 01).*';
        else if (c.id === '844827') focus = '**Accenture Dedicated:** Cognitive, Technical MS Office, Networking, Pseudocode & Coding.';
        else if (c.id === '844812') focus = '**Capgemini Dedicated:** Game-Based Apti, Essay Writing, Technical MCQs & Coding Sheets.';
        else if (c.id === '844607') focus = '**Cognizant Dedicated:** Numerical, Communication, Gamified, Java 0-Hero, Python.';
        else if (c.id === '843502') focus = '**TCS NQT Dedicated:** 250+ PYQ Marathon, Advanced Quants, Coding Blackbook, 8 Mocks.';
        else if (c.id === '844514') focus = '**Pure General Aptitude:** Rachit Sir Daily Live (25 Days) + Pre-recorded + Interview Pack.';
        else if (c.id === '844531') focus = '**Interview Special:** 1:1 Live Mock Interviews, HR/Tech/Managerial FAQs, Kajal Ma OOPs.';
        else if (c.id === '877885') focus = '**Long-Term Foundation (2028 Batch):** Live + Full Recorded + Company Specific Suite (1004v).';
        else if (c.id === '715450') focus = '**Archived Senior Batch:** 2025/2026 passed-out repository with previous year recorded marathons.';
        
        const numStr = (i + 1).toString().padStart(2, '0');
        md += `| **${numStr}** | **${c.name}** | \`${c.id}\` | **${c.price}** | ${c.validity} | ${counts.folders} | ${counts.videos} | ${counts.files} | ${counts.tests} | **${counts.totalLeaves}** | ${focus} |\n`;
    }

    md += `\n---\n\n`;

    // Now render each course deep-tree
    for (let i = 0; i < COURSES.length; i++) {
        const c = COURSES[i];
        const { tree, counts } = courseDataMap[c.id];
        const numStr = (i + 1).toString().padStart(2, '0');
        
        md += `## ${i + 2}. RECURSIVE DEEP-TREE: \`${c.name}\` (Course ID: \`${c.id}\`)\n\n`;
        md += `* **Net Live Price:** ${c.price} | **Coupon:** \`${c.coupon}\` | **Validity:** ${c.validity}\n`;
        md += `* **Total Content Breakdown:** **${counts.folders} Subfolders**, **${counts.videos} Videos**, **${counts.files} Files/PDFs**, **${counts.tests} Tests** (**${counts.totalLeaves} Total Learning Assets**)\n`;
        md += `* **Full Recursive Folder-to-Subfolder-to-File Architecture (No Limits):**\n\n`;
        md += `\`\`\`\n`;
        md += `📁 ${c.name} (${counts.videos} Videos, ${counts.files} Files, ${counts.tests} Tests)\n`;
        md += renderTree(tree);
        md += `\`\`\`\n\n---\n\n`;
    }

    // Add Buying Decision Matrix
    md += `## 14. The Definitive Placement Buying Decision Matrix

Aapke exam timeline, target companies aur preparation requirements ke hisaab se final mathematical verdict:

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

### Direct Store Links:
1. **[NEW Infosys -SE , DSE & SP Course](https://bfwhv.courses.store/courses/844567)** $\\to$ Apply Coupon Code \`INFOSYS\` $\\to$ **₹963**
2. **[AARAMBH 1.0 Batch](https://bfwhv.courses.store/courses/830023)** $\\to$ Apply Coupon Code \`AARAMBH\` $\\to$ **₹1,209**

---
*End of Module 38. Linked from [01_index.md](file:///C:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9/01_index.md).*
`;

    const targetFile = path.join(baseDir, '02_exam', 'strategy', '38_courses.md');
    fs.writeFileSync(targetFile, md, 'utf8');
    console.log(`Successfully generated exhaustive 38_courses.md! File size: ${md.length} bytes`);
}

main();
