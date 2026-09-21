import fs from 'fs';
import path from 'path';

const DATA_DIR = 'c:/Users/Rose/Videos/FUTURE/simplifying skills/preparation/public/data';
const SOURCE_FILE = path.join(DATA_DIR, 'questions.json');
const OUTPUT_DIR = path.join(DATA_DIR, 'chunks');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

console.log('Reading large JSON file...');
const data = JSON.parse(fs.readFileSync(SOURCE_FILE, 'utf8'));
console.log(`Total questions: ${data.length}`);

const CHUNK_SIZE = 1000;
const totalChunks = Math.ceil(data.length / CHUNK_SIZE);

const index = {
  total: data.length,
  chunkSize: CHUNK_SIZE,
  totalChunks: totalChunks,
  subjects: [...new Set(data.map(q => q.subject?.name).filter(Boolean))],
  difficulties: [...new Set(data.map(q => q.difficulty?.name).filter(Boolean))],
  cognitiveLevels: [...new Set(data.map(q => q.cognitive_level?.name).filter(Boolean))],
};

fs.writeFileSync(path.join(DATA_DIR, 'index.json'), JSON.stringify(index, null, 2));

for (let i = 0; i < totalChunks; i++) {
  const start = i * CHUNK_SIZE;
  const end = start + CHUNK_SIZE;
  const chunk = data.slice(start, end);
  fs.writeFileSync(path.join(OUTPUT_DIR, `chunk_${i}.json`), JSON.stringify(chunk));
  console.log(`Wrote chunk ${i} (${chunk.length} items)`);
}

console.log('Data splitting complete.');
