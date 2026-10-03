import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('update_all_resources_pdf.py', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect the page blocks
pages = re.findall(r'p\d+\s*=\s*"""(.*?)"""', text, re.DOTALL)
print(f'Total page variables found: {len(pages)}')

for idx, p in enumerate(pages):
    h2 = re.findall(r'class="sec-heading".*?<span>(.*?)</span>', p, re.DOTALL)
    heading = h2[0] if h2 else "Page " + str(idx+1)
    # clean heading
    heading = re.sub(r'<.*?>', '', heading).strip()
    print(f"\n==================== PAGE {idx+1}: {heading} ====================")
    topics = re.findall(r'<div class="topic-name">(.*?)</div>', p, re.DOTALL)
    for t in topics:
        t_clean = re.sub(r'<.*?>', '', t).strip()
        print(f"  • {t_clean}")
