const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9';

// Function to render items as ASCII tree
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

// Read steps outputs
function readStepOutput(stepNumber) {
    const p = path.join(baseDir, '.system_generated', 'steps', stepNumber.toString(), 'output.txt');
    if (!fs.existsSync(p)) return null;
    const raw = fs.readFileSync(p, 'utf8');
    const match = raw.match(/Execution result:\s*"([\s\S]*)"\s*Console output:/) || raw.match(/Execution result:\s*([\s\S]*)/);
    if (!match) return null;
    try {
        // If stringified JSON
        let str = match[1].trim();
        if (str.startsWith('"') && str.endsWith('"')) {
            str = JSON.parse(str);
        }
        return JSON.parse(str);
    } catch (e) {
        console.error(`Error parsing step ${stepNumber}:`, e.message);
        return null;
    }
}

const c5Data = readStepOutput(917); // Accenture 844827
const c6Data = readStepOutput(921); // Capgemini 844812
const c7Data = readStepOutput(925); // Cognizant 844607
const c8Data = readStepOutput(929); // TCS 843502
const c9Data = readStepOutput(933); // Aptitude 844514
const c10Data = readStepOutput(937); // 1:1 Interview 844531
const c11Data = readStepOutput(941); // Sankalp 2028 877885
const c12Data = readStepOutput(945); // Sankalp 7.0 715450

console.log('C5 (Accenture) loaded:', !!c5Data, c5Data ? c5Data.length : 0);
console.log('C6 (Capgemini) loaded:', !!c6Data, c6Data ? c6Data.length : 0);
console.log('C7 (Cognizant) loaded:', !!c7Data, c7Data ? c7Data.length : 0);
console.log('C8 (TCS) loaded:', !!c8Data, c8Data ? c8Data.length : 0);
console.log('C9 (Aptitude) loaded:', !!c9Data, c9Data ? c9Data.length : 0);
console.log('C10 (1:1 Interview) loaded:', !!c10Data, c10Data ? c10Data.length : 0);
console.log('C11 (Sankalp 2028) loaded:', !!c11Data, c11Data ? c11Data.length : 0);
console.log('C12 (Sankalp 7.0) loaded:', !!c12Data, c12Data ? c12Data.length : 0);
