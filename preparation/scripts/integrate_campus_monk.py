import os
import glob
import json
import shutil
import re
import uuid

BASE_DIR = os.path.abspath("c:/Users/Rose/Videos/Projects & Development Repositories/simplifying-skills/preparation")
COURSE_DIR = os.path.join(BASE_DIR, "Course_844567_Full")
PUBLIC_IMAGES_DIR = os.path.join(BASE_DIR, "public", "images")
DATA_DIR = os.path.join(BASE_DIR, "public", "data")
CHUNKS_DIR = os.path.join(DATA_DIR, "chunks")

os.makedirs(PUBLIC_IMAGES_DIR, exist_ok=True)

# 1. Copy all images to public/images
print("Copying images to public/images/ ...")
image_files = glob.glob(os.path.join(COURSE_DIR, "**", "images", "*.*"), recursive=True)
copied_img_count = 0
for img_path in image_files:
    fname = os.path.basename(img_path)
    dest_path = os.path.join(PUBLIC_IMAGES_DIR, fname)
    if not os.path.exists(dest_path):
        shutil.copy2(img_path, dest_path)
        copied_img_count += 1
print(f"Total images checked: {len(image_files)}, new images copied: {copied_img_count}")

def fix_image_paths(html_text):
    if not html_text:
        return html_text
    # Replace relative images/ with /images/
    html_text = re.sub(r'src=["\'](?:./)?images/([^"\']+)["\']', r'src="/images/\1"', html_text)
    return html_text

def determine_subject_and_topic(rel_path, section_name, test_name):
    # Subject determination
    lower_path = rel_path.lower()
    lower_sec = (section_name or "").lower()
    lower_test = (test_name or "").lower()

    subject = "Logical Reasoning"
    topic = "General Aptitude"

    if "pseudo" in lower_sec or "pseudo" in lower_test or "technical" in lower_sec:
        subject = "Technical Awareness"
        topic = "Pseudo Code"
    elif "mathematical" in lower_sec or "quantitative" in lower_sec or "numerical" in lower_sec or "section ii" in lower_path or "aptitude" in lower_test:
        subject = "Quantitative Aptitude"
        topic = "Numerical Ability"
    elif "english" in lower_sec or "verbal" in lower_sec or "reading" in lower_sec or "vocab" in lower_sec or "section iv" in lower_path:
        subject = "Verbal Ability"
        topic = "Verbal Comprehension"
    elif "puzzle" in lower_sec or "puzzle" in lower_test:
        subject = "Analytical & Critical Reasoning"
        topic = "Puzzles & Patterns"
    elif "logical" in lower_sec or "logical" in lower_test or "section i" in lower_path:
        subject = "Logical Reasoning"
        topic = "Deductive Reasoning"

    # Specific topic detection
    if "coding decoding" in lower_path or "coding decoding" in lower_test:
        topic = "Coding-Decoding"
    elif "distance and direction" in lower_path or "distance" in lower_test:
        topic = "Direction Sense"
    elif "blood relation" in lower_path or "blood" in lower_test:
        topic = "Blood Relation"
    elif "syllogism" in lower_path or "syllogism" in lower_test:
        topic = "Assumptions & Conclusions"
    elif "mirror" in lower_path or "mirror" in lower_test:
        topic = "Mirror Image"
    elif "water image" in lower_path or "water" in lower_test:
        topic = "Water Image"
    elif "paper folding" in lower_path or "paper" in lower_test:
        topic = "Paper Folding"
    elif "clock" in lower_path or "calendar" in lower_path or "calenadar" in lower_path:
        topic = "Calendar & Clock"
    elif "percentage" in lower_path or "percentage" in lower_test:
        topic = "Percentage"
    elif "mensuration" in lower_path or "mensuration" in lower_test:
        topic = "Mensuration"
    elif "partnership" in lower_path or "partnership" in lower_test:
        topic = "Partnership & Average"
    elif "synonym" in lower_path or "vocab" in lower_path:
        topic = "Vocabulary"
    elif "rc" in lower_path or "reading comprehension" in lower_path:
        topic = "Reading Comprehension"
    elif "pseudo" in lower_test or "pseudo" in lower_sec:
        topic = "Pseudo Code (C/C++/Java)"
    elif "mock" in lower_path:
        topic = f"Infosys PYQ Mock ({section_name or 'General'})"

    return subject, topic

# 2. Extract questions from all 47 tests
qp_files = glob.glob(os.path.join(COURSE_DIR, "**", "* - Question Paper.json"), recursive=True)
print(f"Found {len(qp_files)} Question Paper files.")

converted_questions = []
seen_qids = set()

for qp_path in sorted(qp_files):
    sol_path = qp_path.replace(" - Question Paper.json", " - Solutions.json")
    sol_lookup = {}
    if os.path.exists(sol_path):
        try:
            with open(sol_path, "r", encoding="utf-8") as sf:
                sol_data = json.load(sf)
                for sec in sol_data.get("sections", []):
                    for q in sec.get("questions", []):
                        sol_lookup[q.get("_id")] = q
        except Exception as e:
            print(f"Error loading solution {sol_path}: {e}")

    try:
        with open(qp_path, "r", encoding="utf-8") as qf:
            qp_data = json.load(qf)
    except Exception as e:
        print(f"Error loading QP {qp_path}: {e}")
        continue

    test_meta = qp_data.get("test", {})
    test_title = test_meta.get("name") or os.path.basename(os.path.dirname(qp_path))
    rel_path = os.path.relpath(qp_path, COURSE_DIR)

    exam_category = "Campus Monk - Infosys Mock Test Series" if "Mock Test Series" in rel_path else "Campus Monk - Infosys System Eng Prep"

    for sec in qp_data.get("sections", []):
        sec_name = sec.get("name", "General")
        subject, topic = determine_subject_and_topic(rel_path, sec_name, test_title)

        for q in sec.get("questions", []):
            qid = q.get("_id")
            if not qid:
                qid = str(uuid.uuid4())

            # Merge with solution info if available
            sol_q = sol_lookup.get(qid, {})

            q_text = fix_image_paths(q.get("name") or q.get("nameText") or sol_q.get("name") or "")
            solution_text = fix_image_paths(sol_q.get("solution") or q.get("solution") or "")

            # If comprehension passage exists
            passage = q.get("paragraph") or q.get("paragraphText")
            if passage:
                q_text = f"<div class='comprehension-passage p-4 mb-4 bg-gray-800/40 rounded-xl border border-gray-700/50'>{fix_image_paths(passage)}</div><div class='question-content'>{q_text}</div>"

            # Parse options
            raw_options = sol_q.get("options") or q.get("options") or []
            parsed_options = []
            for idx, opt in enumerate(raw_options):
                opt_text = fix_image_paths(opt.get("name") or opt.get("nameText") or "")
                is_corr = opt.get("isCorrect", False)
                parsed_options.append({
                    "id": opt.get("_id") or f"{qid}_opt_{idx}",
                    "option_text": opt_text,
                    "is_correct": bool(is_corr),
                    "display_order": idx
                })

            diff_level = sol_q.get("difficultyLevel") or q.get("difficultyLevel") or "Medium"
            if diff_level.lower() in ["easy", "low"]:
                diff_name = "Easy"
                level_order = 1
            elif diff_level.lower() in ["hard", "high"]:
                diff_name = "Hard"
                level_order = 3
            else:
                diff_name = "Medium"
                level_order = 2

            unique_qid = f"campus_monk_{qid}"
            if unique_qid in seen_qids:
                continue
            seen_qids.add(unique_qid)

            item = {
                "id": unique_qid,
                "question_text": q_text,
                "options": parsed_options,
                "solution": solution_text,
                "explanation": solution_text,
                "subject": {
                    "id": f"subj_{subject.lower().replace(' ', '_')}",
                    "name": subject
                },
                "topic": {
                    "id": f"topic_{topic.lower().replace(' ', '_')}",
                    "name": topic
                },
                "difficulty": {
                    "id": f"diff_{diff_name.lower()}",
                    "name": diff_name,
                    "level_order": level_order
                },
                "cognitive_level": {
                    "id": "cog_apply",
                    "name": "Apply",
                    "level_order": 3
                },
                "exam": {
                    "id": f"exam_{exam_category.lower().replace(' ', '_')}",
                    "name": exam_category
                },
                "examination_types": [
                    {
                        "examination_type": {
                            "id": "exam_type_campus_monk",
                            "name": "Infosys Recruitment (Campus Monk)"
                        }
                    }
                ],
                "question_type": {
                    "id": "qt_mcq",
                    "name": "Multiple Choice"
                },
                "marks": q.get("marks") or 1,
                "negative_marks": 0,
                "time_to_solve": q.get("timeTaken") or 60,
                "pyq": True,
                "years": ["2024", "2025"],
                "source": "Campus Monk - Course 844567",
                "test_name": test_title
            }
            converted_questions.append(item)

print(f"Total converted unique Campus Monk questions: {len(converted_questions)}")

# 3. Read index.json and integrate
with open(os.path.join(DATA_DIR, "index.json"), "r", encoding="utf-8") as f:
    index_data = json.load(f)

old_total = index_data.get("total", 26313)
old_total_chunks = index_data.get("totalChunks", 27)
chunk_size = index_data.get("chunkSize", 1000)

new_chunk_index = old_total_chunks
new_chunk_filename = f"chunk_{new_chunk_index}.json"
new_chunk_path = os.path.join(CHUNKS_DIR, new_chunk_filename)

with open(new_chunk_path, "w", encoding="utf-8") as f:
    json.dump(converted_questions, f, ensure_ascii=False)
print(f"Wrote new chunk {new_chunk_filename} with {len(converted_questions)} questions at {new_chunk_path}")

# Update index.json
index_data["total"] = old_total + len(converted_questions)
index_data["totalChunks"] = old_total_chunks + 1

# Update subject counts
subject_counts = index_data.get("subjectCounts", {})
for q in converted_questions:
    s_name = q["subject"]["name"]
    subject_counts[s_name] = subject_counts.get(s_name, 0) + 1
index_data["subjectCounts"] = subject_counts

# Update topics
existing_topics = set(index_data.get("topics", []))
for q in converted_questions:
    existing_topics.add(q["topic"]["name"])
index_data["topics"] = sorted(list(existing_topics))

# Update exams list
existing_exams = set(index_data.get("exams", []))
for q in converted_questions:
    existing_exams.add(q["exam"]["name"])
index_data["exams"] = sorted(list(existing_exams))

# Update exam types
existing_exam_types = set(index_data.get("examTypes", []))
existing_exam_types.add("Infosys Recruitment (Campus Monk)")
index_data["examTypes"] = sorted(list(existing_exam_types))

with open(os.path.join(DATA_DIR, "index.json"), "w", encoding="utf-8") as f:
    json.dump(index_data, f, indent=2, ensure_ascii=False)

print("Updated index.json successfully!")
print(f"New total questions in PrepDash: {index_data['total']} across {index_data['totalChunks']} chunks.")
