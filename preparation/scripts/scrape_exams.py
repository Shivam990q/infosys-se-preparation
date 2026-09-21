import urllib.request
import json
import time
import os

headers = {
    "apikey": "sb_publishable_tQjldFQWZsxbPWw3jmOptQ_9NeOYq3g",
    "authorization": "Bearer eyJhbGciOiJFUzI1NiIsImtpZCI6ImEyZjlhMGZhLTAzMTQtNDcxZC1hMzBhLWEyOTM0MmM2MmI4OSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Fsc3hjZ3pxYmVld3VpdW5td2lqLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJiYjE1ZWY0Zi1iYTRiLTRlMzQtODNlYy00MGZhM2NmMDM2MTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzc5NDM2MjMwLCJpYXQiOjE3Nzk0MzI2MzAsImVtYWlsIjoiYmV0bjFjczIzMDcxQGl0bXVuaXZlcnNpdHkuYWMuaW4iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImNvdW50cnlfY29kZSI6Iis5MSIsImVtYWlsIjoiYmV0bjFjczIzMDcxQGl0bXVuaXZlcnNpdHkuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiU2hpdmFtIEd1cHRhIiwicGhvbmUiOiIiLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6ImJiMTVlZjRmLWJhNGItNGUzNC04M2VjLTQwZmEzY2YwMzYxNSIsInVzZXJfdHlwZSI6InN1cGVyX2FkbWluIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Nzk0MzI2MzB9XSwic2Vzc2lvbl9pZCI6IjJhYzhmNjhiLTI3ZWYtNDQ2NC04ZTk5LWJhNzVjN2RiM2NjZiIsImlzX2Fub255bW91cyI6ZmFsc2V9.es_x0-hp1pv2GgaUei3x4-uVyPgSzXjw5sMTw3CNyTCeDcgyD7zJL0Fo0Gh58FWQJE0hR8xXni6j8WwzKEYpfA",
    "accept": "application/json"
}

def fetch_json(url):
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        if hasattr(e, 'read'):
            print(e.read().decode())
        return None

print("Fetching all Multi QB Exams...", flush=True)
exams_url = "https://qlsxcgzqbeewuiunmwij.supabase.co/rest/v1/exams_qb?select=*&is_multi_qb=eq.true&order=created_at.desc"
exams = fetch_json(exams_url)

if not exams:
    print("No exams found or error fetching.", flush=True)
    exit()

print(f"Found {len(exams)} exams. Fetching sections and details...", flush=True)

for exam in exams:
    exam_id = exam['id']
    print(f"Fetching sections for Exam: {exam.get('exam_name')} ({exam_id})", flush=True)
    
    sections_url = f"https://qlsxcgzqbeewuiunmwij.supabase.co/rest/v1/exam_sections_qb?select=*&exam_id=eq.{exam_id}&order=display_order.asc"
    sections = fetch_json(sections_url) or []
    exam['sections'] = sections
    
    for section in sections:
        section_id = section['id']
        print(f"  Fetching filters for Section: {section_id}", flush=True)
        filters_url = f"https://qlsxcgzqbeewuiunmwij.supabase.co/rest/v1/exam_section_filters_qb?select=*&section_id=eq.{section_id}"
        filters = fetch_json(filters_url) or []
        section['filters'] = filters
        
        print(f"  Fetching questions for Section: {section_id}", flush=True)
        questions_url = f"https://qlsxcgzqbeewuiunmwij.supabase.co/rest/v1/multi_exam_section_questions?select=question_id,display_order&section_id=eq.{section_id}&order=display_order.asc"
        questions = fetch_json(questions_url) or []
        section['questions'] = questions

file_name = "simplifying_skills_multi_exams.json"
with open(file_name, "w", encoding="utf-8") as f:
    json.dump(exams, f, ensure_ascii=False, indent=2)

print(f"Data saved to {file_name}", flush=True)
size_mb = os.path.getsize(file_name) / (1024 * 1024)
print(f"File size: {size_mb:.2f} MB", flush=True)
