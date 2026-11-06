import sys, re
sys.stdout.reconfigure(encoding='utf-8')

def inspect_file(fpath, label):
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fl:
        txt = fl.read()
    sections = re.split(r'\n(?=### Question )', txt)
    hits = [s for s in sections if 'evaluation criteria' in s.lower()]
    print(f'=== {label} (Total hits: {len(hits)}) ===')
    for h in hits:
        q_num = re.search(r'### Question (\d+)', h)
        q_id = re.search(r'\*\*ID\*\*:\s*`?([^\n`]+)`?', h)
        num_str = q_num.group(1) if q_num else '?'
        id_str = q_id.group(1) if q_id else '?'
        stmt = re.search(r'#### Problem Statement\s*\n(.*?)(?=\n#### Options|\n##|\Z)', h, re.S)
        stmt_preview = stmt.group(1).strip()[:100].replace('\n', ' ') if stmt else ''
        print(f'   Q{num_str} | ID: {id_str} | {stmt_preview}')

inspect_file(r'preparation/Infosys SE Complete/01_Reasoning_Ability/11_Master_Consolidated_Reasoning_and_Analytical_Unique/11_Master_Consolidated_Reasoning_and_Analytical_Unique_Vault.md', 'Reasoning Vault')
inspect_file(r'preparation/Infosys SE Complete/04_Pseudocode_and_Technical/11_Master_Pseudocode_Unique/11_Master_Consolidated_Pseudocode_and_Technical_Unique_Vault.md', 'Pseudocode Vault')
inspect_file(r'preparation/Infosys SE Complete/02_Mathematical_Ability/14_Master_Consolidated_Aptitude_and_Numerical_Unique/14_Master_Consolidated_Aptitude_and_Numerical_Unique_Vault.md', 'Math Vault')

