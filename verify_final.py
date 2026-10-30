import json

with open("examfree_ccao_f_questions.json", "r", encoding="utf-8") as f:
    bundle = json.load(f)

meta = bundle["metadata"]
questions = bundle["questions"]

print(f"Metadata Exam: {meta['examName']} ({meta['examCode']})")
print(f"Total Questions: {len(questions)}")
print(f"Unlocked: {meta['unlockedQuestionsCount']}")
print(f"Paywalled: {meta['paywalledQuestionsCount']}")

qnums = [q['num'] for q in questions]
assert len(qnums) == 172, "Total questions must be 172"
assert qnums == list(range(1, 173)), "Question numbers must be contiguous 1 to 172"

# Check for any remaining $ref strings in explanations
unresolved = []
for q in questions:
    exp = q.get('explanation') or ""
    if exp.startswith('$'):
        unresolved.append((q['num'], exp))

print(f"Unresolved explanations count: {len(unresolved)}")
assert len(unresolved) == 0, f"Found unresolved explanations: {unresolved}"

# Inspect samples
for test_q in [1, 4, 50, 121, 122, 172]:
    q = questions[test_q - 1]
    print(f"\n--- Question #{q['num']} ---")
    print("URL:", q['url'])
    print("Type:", q['questionType'])
    print("Question:", q['question'][:100] + "...")
    print("Options count:", len(q['options']))
    print("Options keys:", list(q['options'].keys()))
    print("Correct Answer:", q['correctAnswer'])
    print("Status:", q['status'])
    print("Explanation snippet:", (q['explanation'][:120] if q['explanation'] else 'None') + "...")
    if "expertAnalysis" in q:
        print("Expert Analysis Domain:", q['expertAnalysis']['domain'])
        print("Expert Recommended Answer:", q['expertAnalysis']['recommendedAnswer'])

print("\nALL VERIFICATIONS PASSED SUCCESSFULLY!")

