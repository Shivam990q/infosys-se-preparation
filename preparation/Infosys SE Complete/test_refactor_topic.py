import os, sys, json, re, html

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\01_Topicwise_Mock_Tests'
vault_dir = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\Infosys_SE_Elite_Crack_Vault\09_Mock_Test_Series\01_Topicwise_Mock_Tests'

topics = [
    'Blood_Relation',
    'Coding_Decoding',
    'Direction_Sense',
    'Critical_Reasoning',
    'Data_Sufficiency',
    'Inequalities',
    'Ranking_Test'
]

def clean_text(text):
    if not text:
        return ""
    # unescape html
    t = html.unescape(text)
    # remove html tags
    t = re.sub(r'<[^>]+>', ' ', t)
    # fix broken linebreaks inside common phrases
    t = re.sub(r'Brother\s*\n\s*in\s*\n?\s*law', 'Brother-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Sister\s*\n\s*in\s*\n?\s*law', 'Sister-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Mother\s*\n\s*in\s*\n?\s*law', 'Mother-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Father\s*\n\s*in\s*\n?\s*law', 'Father-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Daughter\s*\n\s*in\s*\n?\s*law', 'Daughter-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Son\s*\n\s*in\s*\n?\s*law', 'Son-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Can’t\s*\n\s*be\s*\n?\s*determined', 'Cannot be determined', t, flags=re.IGNORECASE)
    t = re.sub(r'Can\'t\s*\n\s*be\s*\n?\s*determined', 'Cannot be determined', t, flags=re.IGNORECASE)
    # clean extra whitespace
    t = ' '.join(t.split())
    return t

print("Script template ready.")

