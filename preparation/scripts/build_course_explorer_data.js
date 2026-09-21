import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PREP_DIR = path.resolve(__dirname, '..');
const COURSE_DIR = path.join(PREP_DIR, 'Course_844567_Full');
const MANIFEST_PATH = path.join(COURSE_DIR, 'Course Catalogs and Indexes', 'Complete Course Manifest.json');
const API_FOLDERS_PATH = path.join(COURSE_DIR, 'Course Catalogs and Indexes', 'Original API Folders.json');
const OUTPUT_PATH = path.join(PREP_DIR, 'public', 'data', 'course_explorer.json');

console.log('Loading manifest and folders...');
const manifest = fs.existsSync(MANIFEST_PATH) ? JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')) : { videos: [], documents: [], tests: [] };
const apiFolders = fs.existsSync(API_FOLDERS_PATH) ? JSON.parse(fs.readFileSync(API_FOLDERS_PATH, 'utf8')) : {};

// Normalization helper
function norm(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[:_\-\.\(\)]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Map manifest videos by normalized folder path segment
const videosByFolder = new Map();
for (const v of manifest.videos || []) {
  const relPath = v.path.replace(/^.*Course_844567_Full[\\\/]?/, '');
  const normPath = norm(relPath);
  if (!videosByFolder.has(normPath)) videosByFolder.set(normPath, []);
  videosByFolder.get(normPath).push(v);
}

// Map manifest docs by normalized folder path segment
const docsByFolder = new Map();
for (const d of manifest.documents || []) {
  const relPath = d.path.replace(/^.*Course_844567_Full[\\\/]?/, '');
  const normPath = norm(relPath);
  if (!docsByFolder.has(normPath)) docsByFolder.set(normPath, []);
  docsByFolder.get(normPath).push(d);
}

// Map manifest tests
const testsByFolder = new Map();
for (const t of manifest.tests || []) {
  const relPath = t.path.replace(/^.*Course_844567_Full[\\\/]?/, '');
  const normPath = norm(relPath);
  if (!testsByFolder.has(normPath)) testsByFolder.set(normPath, []);
  testsByFolder.get(normPath).push(t);
}

console.log(`Indexed ${manifest.videos.length} videos, ${manifest.documents.length} docs, ${manifest.tests.length} tests.`);

// Recursive scanner of disk directory
function scanDir(dirPath, relDirPath = '') {
  const folderName = path.basename(dirPath);
  const normFolder = norm(folderName);
  const normRel = norm(relDirPath);

  const node = {
    id: normRel || 'root',
    name: folderName,
    relPath: relDirPath.replace(/\\/g, '/'),
    subfolders: [],
    videos: [],
    documents: [],
    tests: [],
    stats: { videos: 0, files: 0, tests: 0 }
  };

  // Find manifest videos for this folder
  const matchedVids = videosByFolder.get(normRel) || [];
  for (const mv of matchedVids) {
    node.videos.push({
      id: mv.id || mv.name,
      name: mv.name,
      duration: mv.duration || 'Video',
      description: mv.description || '',
      status: mv.status || 'available',
      manifestUrl: mv.manifestUrl || '',
      type: 'video'
    });
  }

  // Scan items on disk
  if (fs.existsSync(dirPath)) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const ent of entries) {
      if (ent.name === 'images' || ent.name === 'Course Catalogs and Indexes') continue;

      const fullItemPath = path.join(dirPath, ent.name);
      const relItemPath = path.join(relDirPath, ent.name).replace(/\\/g, '/');

      if (ent.isDirectory()) {
        const sub = scanDir(fullItemPath, path.join(relDirPath, ent.name));
        node.subfolders.push(sub);
      } else {
        const ext = path.extname(ent.name).toLowerCase();
        const baseName = path.basename(ent.name, ext);

        if (ext === '.pdf') {
          node.documents.push({
            name: ent.name,
            size: fs.statSync(fullItemPath).size,
            url: `/Course_844567_Full/${relItemPath}`,
            type: 'pdf'
          });
        } else if (ext === '.mp4') {
          node.videos.push({
            name: ent.name,
            duration: 'Full Video',
            url: `/Course_844567_Full/${relItemPath}`,
            type: 'video',
            isLocal: true
          });
        } else if (ext === '.json' && ent.name.includes('Question Paper')) {
          const testName = ent.name.replace(' - Question Paper.json', '');
          const solJson = path.join(dirPath, `${testName} - Solutions.json`);
          const qpHtml = `/Course_844567_Full/${path.join(relDirPath, `${testName} - Question Paper.html`).replace(/\\/g, '/')}`;
          const solHtml = `/Course_844567_Full/${path.join(relDirPath, `${testName} - Solutions.html`).replace(/\\/g, '/')}`;
          const qpJsonUrl = `/Course_844567_Full/${relItemPath}`;

          let questionCount = 0;
          try {
            const qData = JSON.parse(fs.readFileSync(fullItemPath, 'utf8'));
            questionCount = Array.isArray(qData) ? qData.length : (qData.questions ? qData.questions.length : 0);
          } catch (e) {}

          node.tests.push({
            name: testName,
            questionCount: questionCount,
            qpJson: qpJsonUrl,
            qpHtml: qpHtml,
            solHtml: solHtml,
            hasSolutions: fs.existsSync(solJson),
            type: 'test'
          });
        }
      }
    }
  }

  // Also check manifest docs that might not be on disk
  const matchedDocs = docsByFolder.get(normRel) || [];
  for (const md of matchedDocs) {
    if (!node.documents.some(d => norm(d.name) === norm(md.name))) {
      node.documents.push({
        name: md.name,
        size: 0,
        url: '',
        type: 'pdf'
      });
    }
  }

  // Check manifest tests that might not be on disk
  const matchedTests = testsByFolder.get(normRel) || [];
  for (const mt of matchedTests) {
    if (!node.tests.some(t => norm(t.name) === norm(mt.name))) {
      node.tests.push({
        name: mt.name,
        questionCount: 0,
        type: 'test'
      });
    }
  }

  // Calculate rolled-up stats
  let totalVids = node.videos.length;
  let totalFiles = node.documents.length;
  let totalTests = node.tests.length;

  for (const sub of node.subfolders) {
    totalVids += sub.stats.videos;
    totalFiles += sub.stats.files;
    totalTests += sub.stats.tests;
  }

  node.stats = {
    videos: totalVids,
    files: totalFiles,
    tests: totalTests
  };

  return node;
}

console.log('Building course directory hierarchy...');
const rootTree = scanDir(COURSE_DIR, '');

// Sort top-level folders to match CampusMonk UI exactly:
// 1. RoadMap : Induction Imp
// 2. Infosys System Eng Prep- Apti + Pseudo
// 3. Infosys DSE & SP Role Prep
// 4. Infosys Mock Test Series
const priority = [
  'roadmap',
  'infosys system eng',
  'infosys dse',
  'infosys mock test',
  'purchased documents'
];

rootTree.subfolders.sort((a, b) => {
  const normA = norm(a.name);
  const normB = norm(b.name);
  const idxA = priority.findIndex(p => normA.includes(p));
  const idxB = priority.findIndex(p => normB.includes(p));
  if (idxA !== -1 && idxB !== -1) return idxA - idxB;
  if (idxA !== -1) return -1;
  if (idxB !== -1) return 1;
  return a.name.localeCompare(b.name);
});

const courseData = {
  courseId: '844567',
  courseTitle: 'NEW Infosys -SE , DSE & SP -Updated Pattern + PYQ + Infosys test Series with Video sol',
  updatedAt: new Date().toISOString(),
  totalStats: rootTree.stats,
  tree: rootTree
};

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(courseData, null, 2), 'utf8');
console.log(`Generated ${OUTPUT_PATH} successfully!`);
console.log('Top level folders summary:');
for (const sub of rootTree.subfolders) {
  console.log(`- ${sub.name}: ${sub.stats.videos} videos, ${sub.stats.files} files, ${sub.stats.tests} tests`);
}
