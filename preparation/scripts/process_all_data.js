import fs from 'fs';
import path from 'path';

const DATA_DIR = 'public/data';
const OUTPUT_DIR = path.join(DATA_DIR, 'chunks');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('Loading datasets...');

const codingExams = JSON.parse(fs.readFileSync('src/data/Coding Exams/simplifying_skills_exams_full_data.json', 'utf8'));
const multiExams = JSON.parse(fs.readFileSync('src/data/Multi QB Exams/simplifying_skills_all_exams_full_data.json', 'utf8'));
const questions24k = JSON.parse(fs.readFileSync('src/data/Multi-Questions Bank/simplifying_skills_all_24k_questions_detailed.json', 'utf8'));

let allQuestions = [];

// 1. Process 24k Questions
questions24k.forEach(q => {
  allQuestions.push(q);
});

console.log(`Loaded ${allQuestions.length} standard questions.`);

// 2. Process Multi QB Exams
// Many questions in Multi QB Exams might just be duplicates or references to 24k questions.
// To allow filtering by specific exam name, we can add them as separate entries OR append the exam name.
// Since users want mock tests per exam, we'll add them with specific `exam` tags.
let multiExamCount = 0;
multiExams.forEach(exam => {
  const examName = exam.exam_name;
  if (!exam.sections) return;
  exam.sections.forEach(section => {
    if (!section.questions) return;
    section.questions.forEach(q => {
      // Clone question
      const newQ = { ...q };
      // Override exam name
      newQ.exam = { name: examName };
      newQ.id = newQ.id + '_exam_' + exam.id; // ensure unique ID
      allQuestions.push(newQ);
      multiExamCount++;
    });
  });
});
console.log(`Added ${multiExamCount} questions from Multi QB Exams.`);

// 3. Process Coding Exams
let codingCount = 0;
codingExams.forEach(exam => {
  const examName = exam.title;
  if (!exam.questions) return;
  exam.questions.forEach(q => {
    // Construct question_text from coding fields
    let qText = `<h3>${q.title || 'Coding Challenge'}</h3>`;
    if (q.problem_statement) qText += `<div class="mb-4">${q.problem_statement}</div>`;
    if (q.input_format) qText += `<div class="mb-2"><strong>Input Format:</strong><br/>${q.input_format}</div>`;
    if (q.output_format) qText += `<div class="mb-2"><strong>Output Format:</strong><br/>${q.output_format}</div>`;
    if (q.constraints) qText += `<div class="mb-4"><strong>Constraints:</strong><br/>${q.constraints}</div>`;
    
    // Test cases as HTML
    if (q.sample_test_cases && q.sample_test_cases.length > 0) {
      qText += `<div class="mt-4"><strong>Sample Test Cases:</strong>`;
      q.sample_test_cases.forEach((tc) => {
        qText += `<div class="p-3 bg-gray-800 rounded mt-2 text-sm font-mono">
          <div><strong>Input:</strong><br/>${tc.input}</div>
          <div class="mt-1"><strong>Output:</strong><br/>${tc.expected_output}</div>
          ${tc.explanation ? `<div class="mt-1 text-gray-400"><em>Explanation:</em> ${tc.explanation}</div>` : ''}
        </div>`;
      });
      qText += `</div>`;
    }

    const newQ = {
      id: q.id + '_coding',
      question_text: qText,
      subject: { name: 'Coding' },
      difficulty: { name: q.difficulty_level },
      topic: { name: q.function_name || 'Algorithms' },
      question_type: { name: 'Coding' },
      exam: { name: examName },
      cognitive_level: { name: 'Application' },
      starter_code: q.starter_code ? `<pre><code>${q.starter_code}</code></pre>` : '',
      time_limit_seconds: q.time_limit_seconds,
      memory_limit_mb: q.memory_limit_mb,
      language: q.language,
      marks: q.marks,
    };
    allQuestions.push(newQ);
    codingCount++;
  });
});
console.log(`Added ${codingCount} questions from Coding Exams.`);

console.log(`Total combined questions: ${allQuestions.length}`);

// Write index.json and chunk files

const CHUNK_SIZE = 1000;
const totalChunks = Math.ceil(allQuestions.length / CHUNK_SIZE);

// Calculate subject counts
const subjectCounts = {};
allQuestions.forEach(q => {
  const subjName = q.subject?.name;
  if (subjName) {
    subjectCounts[subjName] = (subjectCounts[subjName] || 0) + 1;
  }
});

const index = {
  total: allQuestions.length,
  chunkSize: CHUNK_SIZE,
  totalChunks: totalChunks,
  subjects: [...new Set(allQuestions.map(q => q.subject?.name).filter(Boolean))].sort(),
  subjectCounts: subjectCounts,
  difficulties: [...new Set(allQuestions.map(q => q.difficulty?.name).filter(Boolean))].sort(),
  cognitiveLevels: [...new Set(allQuestions.map(q => q.cognitive_level?.name).filter(Boolean))].sort(),
  topics: [...new Set(allQuestions.map(q => q.topic?.name).filter(Boolean))].sort(),
  questionTypes: [...new Set(allQuestions.map(q => q.question_type?.name).filter(Boolean))].sort(),
  exams: [...new Set(allQuestions.map(q => q.exam?.name).filter(Boolean))].sort(),
  examTypes: [...new Set(allQuestions.map(q => {
    if (q.examination_types && q.examination_types.length > 0) {
      return q.examination_types[0].examination_type?.name;
    }
    return q.examination_type?.name;
  }).filter(Boolean))].sort()
};

fs.writeFileSync(path.join(DATA_DIR, 'index.json'), JSON.stringify(index, null, 2));

// Clean old chunks
const oldChunks = fs.readdirSync(OUTPUT_DIR);
for (const file of oldChunks) {
  if (file.endsWith('.json')) {
    fs.unlinkSync(path.join(OUTPUT_DIR, file));
  }
}

for (let i = 0; i < totalChunks; i++) {
  const start = i * CHUNK_SIZE;
  const end = start + CHUNK_SIZE;
  const chunk = allQuestions.slice(start, end);
  fs.writeFileSync(path.join(OUTPUT_DIR, `chunk_${i}.json`), JSON.stringify(chunk));
}

console.log('Data processing and splitting complete.');
