const fs = require('fs');
const path = require('path');

const coursesDir = path.join(__dirname, 'courses');
if (!fs.existsSync(coursesDir)) {
    fs.mkdirSync(coursesDir, { recursive: true });
}

const COURSES = [
    { id: '844567', name: 'NEW Infosys -SE , DSE & SP', price: '₹963', validity: '4 Months' },
    { id: '830023', name: 'AARAMBH 1.0 – Fully Recorded Placement Batch', price: '₹1,209', validity: '8 Months' },
    { id: '876354', name: 'New Sankalp 9.0 Batch (2027 Passing)', price: '₹1,858', validity: '8 Months' },
    { id: '844819', name: 'NEW Infosys Mock Test Series', price: '₹472', validity: '2 Months' },
    { id: '844827', name: 'NEW ACCENTURE UPDATED PREPARATION', price: '₹768', validity: '4 Months' },
    { id: '844812', name: 'NEW Capgemini Preparation', price: '₹768', validity: '4 Months' },
    { id: '844607', name: 'New Cognizant Updated Preparation', price: '₹671', validity: '4 Months' },
    { id: '843502', name: 'NEW TCS: Recorded + Lakshya Mock Series Course', price: '₹768', validity: '4 Months' },
    { id: '844514', name: 'NEW Aptitude Course', price: '₹963', validity: '6 Months' },
    { id: '844531', name: '1:1 Interview & Live Classes', price: '₹476', validity: '1 Month' },
    { id: '877885', name: 'New Sankalp Batch (2028 Passing)', price: '₹1,999', validity: '12 Months' },
    { id: '715450', name: 'New Sankalp 7.0 (2025/26 Batch)', price: '₹1,649', validity: '6 Months' }
];

async function fetchFolderContents(courseId, folderId) {
    const hash = Buffer.from(JSON.stringify({
        courseId: courseId.toString(),
        tutorId: null,
        orgId: 44032,
        categoryId: null
    })).toString('base64');
    
    let allItems = [];
    let offset = 0;
    const limit = 100;
    
    while (true) {
        const url = `https://api.classplusapp.com/v2/course/preview/content/list/${hash}?folderId=${folderId}&limit=${limit}&offset=${offset}`;
        let res = null;
        for (let retry = 0; retry < 3; retry++) {
            try {
                res = await fetch(url, { headers: { 'accept': 'application/json' } }).then(r => r.json());
                if (res && res.data) break;
            } catch (e) {
                await new Promise(r => setTimeout(r, 200 * (retry + 1)));
            }
        }
        
        if (!res || !res.data || !res.data.length) break;
        allItems = allItems.concat(res.data);
        if (res.data.length < limit) break;
        offset += limit;
    }
    return allItems;
}

async function crawlFolder(courseId, folderId, depth = 0, maxDepth = 15) {
    if (depth > maxDepth) return [];
    const items = await fetchFolderContents(courseId, folderId);
    const result = [];
    
    for (const item of items) {
        const entry = {
            id: item.id,
            name: item.name,
            type: item.contentType, // 1: folder, 2: video, 3: pdf/file, 4: test
            stats: item.resources || { videos: item.videoCount, files: item.documentCount, tests: item.testCount }
        };
        
        if (item.contentType === 1) {
            entry.children = await crawlFolder(courseId, item.id, depth + 1, maxDepth);
        }
        result.push(entry);
    }
    return result;
}

async function run() {
    console.log(`Starting exhaustive crawl for all ${COURSES.length} courses...`);
    const summary = [];
    
    for (const course of COURSES) {
        const filePath = path.join(coursesDir, `${course.id}.json`);
        console.log(`\n--------------------------------------------------`);
        console.log(`Crawling Course ${course.id}: ${course.name}...`);
        const t0 = Date.now();
        const tree = await crawlFolder(course.id, 0);
        const duration = ((Date.now() - t0) / 1000).toFixed(1);
        
        // Count stats
        let folders = 0, videos = 0, files = 0, tests = 0;
        function count(nodes) {
            for (const n of nodes) {
                if (n.type === 1) {
                    folders++;
                    if (n.children) count(n.children);
                } else if (n.type === 2) videos++;
                else if (n.type === 3) files++;
                else if (n.type === 4) tests++;
            }
        }
        count(tree);
        
        fs.writeFileSync(filePath, JSON.stringify(tree, null, 2), 'utf8');
        console.log(`Done in ${duration}s! Folders: ${folders}, Videos: ${videos}, Files: ${files}, Tests: ${tests}, Total Leaves: ${videos + files + tests}`);
        
        summary.push({
            id: course.id,
            name: course.name,
            duration: `${duration}s`,
            folders,
            videos,
            files,
            tests,
            totalLeaves: videos + files + tests
        });
    }
    
    console.log(`\n==================================================`);
    console.log(`ALL 12 COURSES EXHAUSTIVELY CRAWLED AND SAVED!`);
    console.table(summary);
}

run().catch(console.error);
