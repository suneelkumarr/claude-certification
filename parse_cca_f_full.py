import pypdf, re, json

reader = pypdf.PdfReader('cca-f-premium.pdf')
print("Total pages in cca-f:", len(reader.pages))

# Dump pages 4 to 67 text to examine patterns
all_text = ""
for i in range(3, len(reader.pages)):
    t = reader.pages[i].extract_text()
    # Normalize tabs to space
    t = t.replace('\t', ' ')
    all_text += f"\n=== PAGE {i+1} ===\n" + t

with open('cca_f_raw_dump.txt', 'w', encoding='utf-8') as f:
    f.write(all_text)

print("Saved cca_f_raw_dump.txt. Size:", len(all_text))

# Let's count how many questions are in cca_f_raw_dump
q_headers = list(re.finditer(r'Question:\s*(\d+)', all_text))
print("Found Question: X headers:", len(q_headers))
if q_headers:
    print("First 10 questions:", [int(m.group(1)) for m in q_headers[:10]])
    print("Last 10 questions:", [int(m.group(1)) for m in q_headers[-10:]])
