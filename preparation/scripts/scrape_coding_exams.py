import urllib.request
import json
import os

headers = {
    'apikey': 'sb_publishable_tQjldFQWZsxbPWw3jmOptQ_9NeOYq3g',
    'authorization': 'Bearer eyJhbGciOiJFUzI1NiIsImtpZCI6ImEyZjlhMGZhLTAzMTQtNDcxZC1hMzBhLWEyOTM0MmM2MmI4OSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Fsc3hjZ3pxYmVld3VpdW5td2lqLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJiYjE1ZWY0Zi1iYTRiLTRlMzQtODNlYy00MGZhM2NmMDM2MTUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzc5NDM2MjMwLCJpYXQiOjE3Nzk0MzI2MzAsImVtYWlsIjoiYmV0bjFjczIzMDcxQGl0bXVuaXZlcnNpdHkuYWMuaW4iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImNvdW50cnlfY29kZSI6Iis5MSIsImVtYWlsIjoiYmV0bjFjczIzMDcxQGl0bXVuaXZlcnNpdHkuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiU2hpdmFtIEd1cHRhIiwicGhvbmUiOiIiLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6ImJiMTVlZjRmLWJhNGItNGUzNC04M2VjLTQwZmEzY2YwMzYxNSIsInVzZXJfdHlwZSI6InN1cGVyX2FkbWluIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Nzk0MzI2MzB9XSwic2Vzc2lvbl9pZCI6IjJhYzhmNjhiLTI3ZWYtNDQ2NC04ZTk5LWJhNzVjN2RiM2NjZiIsImlzX2Fub255bW91cyI6ZmFsc2V9.es_x0-hp1pv2GgaUei3x4-uVyPgSzXjw5sMTw3CNyTCeDcgyD7zJL0Fo0Gh58FWQJE0hR8xXni6j8WwzKEYpfA',
    'accept': 'application/json'
}

def fetch_table(table_name, params=""):
    url = f'https://qlsxcgzqbeewuiunmwij.supabase.co/rest/v1/{table_name}?select=*{params}'
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode('utf-8'))
    except Exception as e:
        print(f"Error fetching {table_name}: {e}")
        return []

def main():
    print("Fetching coding exams...")
    exams = fetch_table('coding_exams', '&order=created_at.desc')
    print(f"Found {len(exams)} exams.")

    for exam in exams:
        print(f"  Fetching questions for exam: {exam['title']} ({exam['id']})")
        questions = fetch_table('coding_questions', f'&exam_id=eq.{exam["id"]}&order=question_number.asc')
        print(f"    Found {len(questions)} questions.")
        
        for question in questions:
            print(f"      Fetching test cases for question: {question.get('title', 'Unknown')} ({question['id']})")
            
            sample_tests = fetch_table('sample_test_cases', f'&question_id=eq.{question["id"]}&order=test_case_number.asc')
            hidden_tests = fetch_table('hidden_test_cases', f'&question_id=eq.{question["id"]}&order=test_case_number.asc')
            
            question['sample_test_cases'] = sample_tests
            question['hidden_test_cases'] = hidden_tests
            
        exam['questions'] = questions

    out_path = os.path.join('coding exams', 'coding_exams_full_data.json')
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(exams, f, indent=4)
        
    print(f"Successfully saved full coding exams data to {out_path}")

if __name__ == '__main__':
    main()
