import sys, fitz, re
from pathlib import Path

base = Path(r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete')
pdf_path = base / 'INFOSYS_SE_MASTER_ONE_LINER_VOCABULARY_POCKET_BIBLE.pdf'
out_path1 = base / 'INFOSYS_SE_MASTER_ONE_LINER_VOCABULARY_POCKET_BIBLE.md'
out_path2 = base / 'Infosys_SE_Elite_Crack_Vault' / 'INFOSYS_SE_MASTER_ONE_LINER_VOCABULARY_POCKET_BIBLE.md'

doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")

# Build markdown document
md = []
md.append("# 📖 Infosys SE Master 1-Liner Vocabulary Pocket Bible")
md.append("**Source Authority:** Infosys Systems Engineer (SE) Campus Placement Drive Master Vault  ")
md.append("**Coverage:** 590 High-Yield Words • 27 Greek/Latin Roots • 40 Idioms • 40 Prepositions • 40 OWS • 10 Homophones • RC Author Tones  ")
md.append("**Formatting:** Strict GitHub Flavored Markdown Tables with Hindi Meanings, Synonyms/Antonyms & Mnemonic Hooks\n")
md.append("---\n")

# Process pages
full_text = []
for p in range(len(doc)):
    txt = doc[p].get_text()
    # clean running page header
    txt = re.sub(r'Page \d+ of \d+\n', '', txt)
    txt = re.sub(r'INFOSYS SE MASTER 1-LINER VOCABULARY POCKET BIBLE\n', '', txt)
    txt = re.sub(r'Placement Drive.*?\n', '', txt)
    txt = re.sub(r'SYSTEMS ENGINEER PREP\n', '', txt)
    full_text.append(txt)

combined_text = '\n'.join(full_text)

# We can format the sections by Part
parts_splits = re.split(r'(📖 PART 1:[\s\S]*?|🌿 PART 2:[\s\S]*?|💡 PART 3:[\s\S]*?|🎯 PART 4:[\s\S]*?|⚡ PART 5:[\s\S]*?|⚖️ PART 6:[\s\S]*?|🎨 PART 7:[\s\S]*?)(?=(?:📖 PART|🌿 PART|💡 PART|🎯 PART|⚡ PART|⚖️ PART|🎨 PART|\Z))', combined_text)

print(f"Detected sections: {len(parts_splits)}")

for section in parts_splits:
    if not section.strip():
        continue
    first_line = section.strip().split('\n')[0]
    md.append(f"\n## {first_line}\n")
    
    # Check if this is the master vocabulary table (Part 1)
    if 'PART 1' in first_line:
        md.append("| # | Word & POS | Hindi Meaning | 1-Liner Definition | Synonyms / Antonyms | Mnemonic / Exam Hook |")
        md.append("|:---:|:---|:---|:---|:---|:---|")
        
        # Regex to match vocabulary entries:
        # Number, Word (POS), Hindi, Definition, Synonyms/Antonyms, Mnemonic
        # Let's extract lines
        lines = [l.strip() for l in section.split('\n') if l.strip()]
        i = 0
        while i < len(lines):
            # check if line is an integer entry number
            if re.match(r'^\d+$', lines[i]):
                num = lines[i]
                i += 1
                word = lines[i] if i < len(lines) else ''
                i += 1
                hindi = lines[i] if i < len(lines) else ''
                i += 1
                definition = lines[i] if i < len(lines) else ''
                i += 1
                syn_ant = lines[i] if i < len(lines) else ''
                i += 1
                mnemonic = lines[i] if i < len(lines) else ''
                i += 1
                
                # clean pipes
                word = word.replace('|', '\\|')
                hindi = hindi.replace('|', '\\|')
                definition = definition.replace('|', '\\|')
                syn_ant = syn_ant.replace('|', '\\|')
                mnemonic = mnemonic.replace('|', '\\|')
                
                md.append(f"| {num} | **{word}** | {hindi} | {definition} | {syn_ant} | {mnemonic} |")
            else:
                i += 1
                
    elif 'PART 2' in first_line:
        md.append("| Root / Morpheme | Origin & Core Meaning | High-Frequency Exam Derivatives & Meaning |")
        md.append("|:---|:---|:---|")
        lines = [l.strip() for l in section.split('\n') if l.strip()]
        for l in lines[1:]:
            if l not in ['ROOT / MORPHEME', 'ORIGIN & CORE MEANING', 'DERIVATIVES & MEANING']:
                # format clean rows
                parts = l.split(' — ')
                if len(parts) >= 2:
                    md.append(f"| **{parts[0]}** | {parts[1]} | {parts[2] if len(parts) > 2 else ''} |")
                else:
                    md.append(f"- {l}")
                    
    else:
        # Format other parts as structured lists or tables
        lines = [l.strip() for l in section.split('\n') if l.strip()]
        for l in lines[1:]:
            if l.startswith('#') or l.startswith('WORD') or l.startswith('IDIOM') or l.startswith('COLLOCATION'):
                continue
            if re.match(r'^\d+\.?\s+', l):
                md.append(f"\n### {l}\n")
            elif ':' in l and len(l) < 80:
                md.append(f"- **{l}**")
            else:
                md.append(f"{l}\n")

final_md = '\n'.join(md)
out_path1.write_text(final_md, encoding='utf-8')
out_path2.write_text(final_md, encoding='utf-8')
print(f"Vocabulary Bible MD written: {len(final_md)} characters!")

