import json

print("Loading 24k questions data...", flush=True)
with open("simplifying_skills_all_24k_questions_detailed.json", "r", encoding="utf-8") as f:
    questions_data = json.load(f)

# Create a lookup dictionary for fast access
questions_map = {q["id"]: q for q in questions_data}

print("Loading multi-exams data...", flush=True)
with open("simplifying_skills_multi_exams.json", "r", encoding="utf-8") as f:
    exams_data = json.load(f)

print("Merging questions into exams...", flush=True)
for exam in exams_data:
    for section in exam.get("sections", []):
        populated_questions = []
        for q_ref in section.get("questions", []):
            q_id = q_ref.get("question_id")
            if q_id in questions_map:
                full_question = questions_map[q_id].copy()
                full_question["display_order"] = q_ref.get("display_order")
                populated_questions.append(full_question)
            else:
                # If question not found for some reason, keep the reference
                populated_questions.append(q_ref)
        
        section["questions"] = populated_questions

print("Saving merged data...", flush=True)
with open("simplifying_skills_exams_full_data.json", "w", encoding="utf-8") as f:
    json.dump(exams_data, f, indent=2)

print("Successfully created simplifying_skills_exams_full_data.json!", flush=True)
