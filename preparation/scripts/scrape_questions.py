import urllib.request
import json
import time
import os

select_query = "*,question_type:question_types_multi(id,name),subject:subjects_multi(id,name),topic:topics_multi(id,name),difficulty:difficulty_levels_multi(id,name,level_order),cognitive_level:cognitive_level_multi(id,name,level_order),exam:exams_multi(id,name),examination_type:examination_types_multi(id,name),outcome_linking:outcome_linking_multi(id,code,name),age_group:age_groups_multi(id,name),programming_language:programming_languages_multi(id,name),question_source:question_sources_multi(id,name),exam_mode:exam_modes_multi(id,name),exams:multi_questions_exams(exam:exams_multi(id,name)),examination_types:multi_questions_examination_types(examination_type:examination_types_multi(id,name)),options:question_options_multi(*)"

# URL encode the select query
import urllib.parse
encoded_select = urllib.parse.quote(select_query)

url_base = f"https://qlsxcgzqbeewuiunmwij.supabase.co/rest/v1/multi_questions_bank?select={encoded_select}&order=created_at.desc&is_deleted=eq.false"
headers = {
    "apikey": "sb_publishable_tQjldFQWZsxbPWw3jmOptQ_9NeOYq3g",
    "authorization": "Bearer eyJhbGciOiJFUzI1NiIsImtpZCI6ImEyZjlhMGZhLTAzMTQtNDcxZC1hMzBhLWEyOTM0MmM2MmI4OSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Fsc3hjZ3pxYmVld3VpdW5td2lqLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJiYjE1ZWY0Zi1iYTRiLTRlMzQtODNlYy00MGZhM2NmMDM2MTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzc5NDM0MDIyLCJpYXQiOjE3Nzk0MzA0MjIsImVtYWlsIjoiYmV0bjFjczIzMDcxQGl0bXVuaXZlcnNpdHkuYWMuaW4iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImNvdW50cnlfY29kZSI6Iis5MSIsImVtYWlsIjoiYmV0bjFjczIzMDcxQGl0bXVuaXZlcnNpdHkuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiU2hpdmFtIEd1cHRhIiwicGhvbmUiOiIiLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6ImJiMTVlZjRmLWJhNGItNGUzNC04M2VjLTQwZmEzY2YwMzYxNSIsInVzZXJfdHlwZSI6InN1cGVyX2FkbWluIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Nzk0MzA0MjJ9XSwic2Vzc2lvbl9pZCI6Ijc5ZjdjN2UxLWU3ZTctNDdjZC05NmRiLTdmMWNmYzFlNTYwNSIsImlzX2Fub255bW91cyI6ZmFsc2V9.hxOhUFVZolVTFiLuEJKSk2_eEQ79k0m54kBh9KETBN0wYdxd_Da8BT5xZ1y2R0b66P9m5536pQf-NmWEF8ANYw",
    "accept": "application/json"
}

all_questions = []
limit = 1000
offset = 0

print("Starting to scrape multi_questions_bank with full table joins...")

while True:
    url = f"{url_base}&limit={limit}&offset={offset}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if not data:
                break
            
            all_questions.extend(data)
            print(f"Fetched {len(data)} questions. Total so far: {len(all_questions)}")
            
            if len(data) < limit:
                break
            
            offset += limit
            time.sleep(0.5) # Be nice to the API
    except Exception as e:
        print(f"Error occurred at offset {offset}: {e}")
        # Print error body if available
        if hasattr(e, 'read'):
            print(e.read().decode())
        break

print(f"Finished scraping. Total questions fetched: {len(all_questions)}")

file_name = "simplifying_skills_all_24k_questions_detailed.json"
with open(file_name, "w", encoding="utf-8") as f:
    json.dump(all_questions, f, ensure_ascii=False, indent=2)

print(f"Data saved to {file_name}")
# Optional: print size
size_mb = os.path.getsize(file_name) / (1024 * 1024)
print(f"File size: {size_mb:.2f} MB")
