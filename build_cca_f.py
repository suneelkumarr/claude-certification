# -*- coding: utf-8 -*-
"""
Parser and builder for Anthropic Claude Certified Architect — Foundations (CCA-F)
Primary source: cca-f-premium.pdf (85 Questions)
"""

import re, json

with open('cca_f_cleaned.txt', 'r', encoding='utf-8') as f:
    text = f.read().replace('\t', ' ')

ans_pattern = re.compile(r'\nAnswer:\s*([A-E])\s*\nExplanation:\s*', re.MULTILINE)
splits = list(ans_pattern.finditer(text))

print(f'Total splits in cca-f: {len(splits)}')

parsed_questions = []

for i in range(len(splits)):
    q_num = i + 1
    ans_letter = splits[i].group(1).strip()
    
    # 1. Get raw block containing question + options
    if i == 0:
        chunk = text[:splits[i].start()].strip()
        lines = [l.strip() for l in chunk.split('\n') if l.strip()]
        
        # Options D, C, B, A
        d_idx = [j for j, l in enumerate(lines) if re.match(r'^D\.\s*$', l) or re.match(r'^D\.\s+[A-Za-z]', l)][-1]
        c_idx = [j for j in range(d_idx) if re.match(r'^C\.\s*$', lines[j]) or re.match(r'^C\.\s+[A-Za-z]', lines[j])][-1]
        b_idx = [j for j in range(c_idx) if re.match(r'^B\.\s*$', lines[j]) or re.match(r'^B\.\s+[A-Za-z]', lines[j])][-1]
        a_idx = [j for j in range(b_idx) if re.match(r'^A\.\s*$', lines[j]) or re.match(r'^A\.\s+[A-Za-z]', lines[j])][-1]
        
        q_text = ' '.join(lines[:a_idx])
        
        # Options
        opt_a = lines[a_idx].replace('A.', '').strip() + ' ' + ' '.join(lines[a_idx+1:b_idx])
        opt_b = lines[b_idx].replace('B.', '').strip() + ' ' + ' '.join(lines[b_idx+1:c_idx])
        opt_c = lines[c_idx].replace('C.', '').strip() + ' ' + ' '.join(lines[c_idx+1:d_idx])
        opt_d = lines[d_idx].replace('D.', '').strip() + ' ' + ' '.join(lines[d_idx+1:])
        
    else:
        between = text[splits[i-1].end():splits[i].start()].strip()
        lines = [l.strip() for l in between.split('\n') if l.strip()]
        
        # Find options D, C, B, A from the bottom
        d_idx = [j for j, l in enumerate(lines) if re.match(r'^D\.\s*$', l) or re.match(r'^D\.\s+[A-Za-z]', l)][-1]
        c_idx = [j for j in range(d_idx) if re.match(r'^C\.\s*$', lines[j]) or re.match(r'^C\.\s+[A-Za-z]', lines[j])][-1]
        b_idx = [j for j in range(c_idx) if re.match(r'^B\.\s*$', lines[j]) or re.match(r'^B\.\s+[A-Za-z]', lines[j])][-1]
        a_idx = [j for j in range(b_idx) if re.match(r'^A\.\s*$', lines[j]) or re.match(r'^A\.\s+[A-Za-z]', lines[j])][-1]
        
        pre_a = lines[:a_idx]
        # Find last mark line (❌ or ✅ or Correct. or Incorrect.)
        mark_indices = [j for j, l in enumerate(pre_a) if '❌' in l or '✅' in l or 'Correct.' in l or 'Incorrect.' in l]
        last_mark_idx = mark_indices[-1]
        
        # The explanation ends where the sentence ends
        # Lines after last_mark_idx:
        # line last_mark_idx is 'Correct.' or 'Incorrect.'
        # line last_mark_idx + 1 .. until sentence finishes
        k = last_mark_idx + 1
        while k < len(pre_a) and not (pre_a[k-1].endswith('.') or pre_a[k-1].endswith('."') or pre_a[k-1].endswith('.)')):
            k += 1
            
        # The question text starts at k!
        q_text = ' '.join(pre_a[k:])
        
        # Options
        opt_a = lines[a_idx].replace('A.', '').strip() + ' ' + ' '.join(lines[a_idx+1:b_idx])
        opt_b = lines[b_idx].replace('B.', '').strip() + ' ' + ' '.join(lines[b_idx+1:c_idx])
        opt_c = lines[c_idx].replace('C.', '').strip() + ' ' + ' '.join(lines[c_idx+1:d_idx])
        opt_d = lines[d_idx].replace('D.', '').strip() + ' ' + ' '.join(lines[d_idx+1:])

    # 2. Extract explanation for this question
    # Starts at splits[i].end()
    if i == len(splits) - 1:
        exp_chunk = text[splits[i].end():].strip()
    else:
        exp_between = text[splits[i].end():splits[i+1].start()].strip()
        # Find option A of question i+1 to know where explanation ends
        exp_lines = [l.strip() for l in exp_between.split('\n') if l.strip()]
        d_matches = [j for j, l in enumerate(exp_lines) if re.match(r'^D\.\s*$', l) or re.match(r'^D\.\s+[A-Za-z]', l)]
        if d_matches:
            d_i = d_matches[-1]
            c_i = [j for j in range(d_i) if re.match(r'^C\.\s*$', exp_lines[j]) or re.match(r'^C\.\s+[A-Za-z]', exp_lines[j])][-1]
            b_i = [j for j in range(c_i) if re.match(r'^B\.\s*$', exp_lines[j]) or re.match(r'^B\.\s+[A-Za-z]', exp_lines[j])][-1]
            a_i = [j for j in range(b_i) if re.match(r'^A\.\s*$', exp_lines[j]) or re.match(r'^A\.\s+[A-Za-z]', exp_lines[j])][-1]
            
            p_a = exp_lines[:a_i]
            m_indices = [j for j, l in enumerate(p_a) if '❌' in l or '✅' in l or 'Correct.' in l or 'Incorrect.' in l]
            l_mark = m_indices[-1]
            
            k2 = l_mark + 1
            while k2 < len(p_a) and not (p_a[k2-1].endswith('.') or p_a[k2-1].endswith('."') or p_a[k2-1].endswith('.)')):
                k2 += 1
            exp_chunk = '\n'.join(exp_lines[:k2])
        else:
            exp_chunk = exp_between
            
    # Clean up options dict
    options = {
        'A': re.sub(r'\s+', ' ', opt_a).strip(),
        'B': re.sub(r'\s+', ' ', opt_b).strip(),
        'C': re.sub(r'\s+', ' ', opt_c).strip(),
        'D': re.sub(r'\s+', ' ', opt_d).strip()
    }
    
    # Extract option breakdown from exp_chunk
    wrong_options = {}
    why_correct = ''
    
    opt_blocks = list(re.finditer(r'([A-D])\.\s+(.*?)(?=[A-D]\.\s+|$)', exp_chunk, re.DOTALL))
    for ob in opt_blocks:
        letter = ob.group(1)
        content = ob.group(2).strip()
        # Clean ❌ / ✅ / Correct / Incorrect
        clean_content = content.replace('❌', '').replace('✅', '').replace('Incorrect.', '').replace('Correct.', '').strip()
        clean_content = re.sub(r'\s+', ' ', clean_content)
        
        if letter == ans_letter:
            why_correct = clean_content
        else:
            wrong_options[letter] = clean_content

    # Assign Concept Category
    q_lower = (q_text + ' ' + str(options)).lower()
    if 'orchestrat' in q_lower or 'coordinator' in q_lower or 'subagent' in q_lower or 'synthesis agent' in q_lower:
        concept_id = 'multi-agent-orchestration'
    elif 'parallel' in q_lower or 'concurrent' in q_lower or 'tool' in q_lower or 'latency' in q_lower:
        concept_id = 'tools-concurrency'
    elif 'state' in q_lower or 'crash' in q_lower or 'persist' in q_lower or 'vector' in q_lower or 'resume' in q_lower:
        concept_id = 'state-persistence'
    elif 'temporal' in q_lower or 'date' in q_lower or 'conflict' in q_lower or 'uncertainty' in q_lower:
        concept_id = 'data-synthesis-conflicts'
    elif 'routing' in q_lower or 'classify' in q_lower or 'pipeline' in q_lower or 'dynamic' in q_lower:
        concept_id = 'routing-pipelines'
    else:
        concept_id = 'context-architecture'

    parsed_questions.append({
        'num': q_num,
        'title': f'Architect Decision: {q_text[:40]}...',
        'conceptId': concept_id,
        'question': re.sub(r'\s+', ' ', q_text).strip(),
        'options': options,
        'correctAnswer': ans_letter,
        'explanation': exp_chunk,
        'whyCorrect': why_correct or f'Option {ans_letter} is the architecturally correct choice as documented in the Anthropic CCA-F framework.',
        'wrongOptions': wrong_options,
        'isMulti': False
    })

print(f'Successfully parsed all {len(parsed_questions)} questions from cca-f-premium.pdf!')

# 6 Core Architect Concepts for CCA-F
CCA_F_CONCEPTS = [
    {
        "id": "multi-agent-orchestration",
        "title": "1. Multi-Agent Orchestration & Coordinators",
        "subtitle": "Coordinator Agent, Subagents aur Prompt-Based Context Passing",
        "earlier": [1, 2, 3],
        "repeated": [10, 20, 30],
        "other": [],
        "meaning": "Multi-agent systems mein Coordinator agent orchestration sambhalta hai. Subagents aapas mein directly conversation history share nahi karte — context hamesha Coordinator ke through prompts mein explicitly pass kiya jata hai.",
        "beginnerExplanation": "Agar aapke paas 3 agents hain (Web Search, Document Analyzer, Synthesis), toh Web Search agent seedha Synthesis agent ko data nahi bhejta. Coordinator dono se result leta hai aur fir Synthesis agent ke prompt mein daalta hai. Agar Coordinator data pass karna bhool jaye, toh Synthesis agent bolega 'No research findings were provided'.",
        "dailyAnalogy": "Project Manager (Coordinator) do alag developers (Subagents) se report leta hai aur client briefing (Synthesis) banata hai. Developers aapas mein direct client call nahi karte.",
        "masterFormula": "AGENT COMMUNICATION = Centralized Coordinator + Explicit Prompt Passing. (Subagents do NOT require direct access to other agents' conversation histories!)",
        "revisionTable": [
            {"concept": "Synthesis Agent Missing Data", "problem": "Thinking context window is full", "solution": "Coordinator did not include prior agent outputs in synthesis prompt (Q1)"},
            {"concept": "Discovered Gaps During Analysis", "problem": "Letting analysis agent control workflow", "solution": "Coordinator evaluates gaps and re-invokes targeted search (Q3)"},
            {"concept": "Subagent Direct Communication", "problem": "Sharing single API connection", "solution": "Communication is prompt-based through coordinator; shared connections are unnecessary"}
        ],
        "practicalExample": {
            "bad": "Allowing subagents to query each other's raw conversation threads.",
            "badReason": "Creates tight coupling, uncontrolled token inflation, and breaks centralized control.",
            "good": "Coordinator receives structured output from Agent A and explicitly injects it into Agent B's task prompt.",
            "goodReason": "Clear boundaries, token efficiency, and auditable orchestration."
        },
        "examRule": "Subagents do NOT share conversation history or API connections! The Coordinator must explicitly pass outputs in the prompt!"
    },
    {
        "id": "tools-concurrency",
        "title": "2. Parallel Execution & Tool Concurrency",
        "subtitle": "Latency Ghatane ke liye Independent Subagents ko Concurrently Chalana",
        "earlier": [6, 7],
        "repeated": [15, 25],
        "other": [],
        "meaning": "Jab do ya do se zyada subagents ke tasks ek doosre par depend na karte hon (independent hon), toh unhe sequentially chalana time waste karta hai. Coordinator ko unhe parallel / concurrently invoke karna chahiye.",
        "beginnerExplanation": "Maan lijiye aapko Web Search bhi karna hai aur internal legal document bhi analyze karna hai. Agar dono ko ek ke baad ek chalaoge toh 3 minute lagenge. Agar Coordinator dono tool calls ek hi turn mein de kar concurrently run karega, toh kaam 1 minute mein ho jayega!",
        "dailyAnalogy": "Ek cook pehle sabzi banne ka intezar kare fir roti sekhe vs do chulhe par ek sath sabzi aur roti banana (parallel execution).",
        "masterFormula": "INDEPENDENT TASKS = Parallel Tool Execution / Concurrent Subagent Invocation. (Reduces latency while preserving centralized orchestration).",
        "revisionTable": [
            {"concept": "Independent Search & Doc Analysis", "problem": "Running sequentially and waiting", "solution": "Issue multiple tool calls concurrently in a single coordinator turn (Q7)"},
            {"concept": "Complex Precedents Legal Analysis", "problem": "Analyzing 12 precedents one by one", "solution": "Parallel subagent processing reduces latency from minutes to seconds (Q6)"}
        ],
        "practicalExample": {
            "bad": "Invoking search agent, waiting for response, then invoking document analysis agent sequentially.",
            "badReason": "Wastes huge latency on completely independent data gathering.",
            "good": "Coordinator issues both tool calls in parallel and gathers results together before invoking synthesis.",
            "goodReason": "Minimizes total wall-clock time while maintaining clean coordinator visibility."
        },
        "examRule": "Independent tasks must be run in PARALLEL. Issue tool calls concurrently in one coordinator response!"
    },
    {
        "id": "state-persistence",
        "title": "3. State Management & Pipeline Recovery",
        "subtitle": "Pipeline Crash ke baad bina dobara kaam kiye Resume karna",
        "earlier": [4],
        "repeated": [14, 24],
        "other": [],
        "meaning": "Jab bada multi-agent pipeline crash ho jaye (e.g. 28 mein se 12 documents process karne ke baad), toh work repeat kiye bina structured manifest ke zariye exact state resume karna.",
        "beginnerExplanation": "Agar aap 50 files process kar rahe the aur 25th par crash ho gaya, toh dubara 1 se 50 shuru karna bohot mehenga padega. Har agent apna structured state export karta hai aur Coordinator ek central manifest file maintain karta hai, taaki resume karne par Coordinator directly uncompleted files se start kare.",
        "dailyAnalogy": "Video game ka Save Game checkpoint: marne ke baad game shuru se nahi, last checkpoint se shuru hota hai.",
        "masterFormula": "RESUME AFTER CRASH = Structured Export Manifest + Coordinator Injects State. (Vector stores introduce probabilistic distortion; deterministic manifests are required).",
        "revisionTable": [
            {"concept": "Pipeline Crash Recovery", "problem": "Using vector store semantic search to guess prior work", "solution": "Persist structured exports to known location; coordinator manifest injects state (Q4)"},
            {"concept": "Repeating Work Prevention", "problem": "Re-running entire pipeline from scratch", "solution": "Deterministic checkpointing ensures zero duplicated API costs"}
        ],
        "practicalExample": {
            "bad": "Relying on a vector database to search previous agent history during crash recovery.",
            "badReason": "Vector stores are probabilistic and can miss or distort critical state.",
            "good": "Saving structured JSON checkpoints with status per document ID.",
            "goodReason": "100% deterministic, exact restart from last successful checkpoint."
        },
        "examRule": "Never use vector search for pipeline crash recovery! Use deterministic structured exports & coordinator manifest!"
    },
    {
        "id": "data-synthesis-conflicts",
        "title": "4. Temporal & Conflicting Data Synthesis",
        "subtitle": "Timestamps ke sath Trend Pehchanna aur Discrepancies Handle karna",
        "earlier": [2, 8],
        "repeated": [18, 28],
        "other": [],
        "meaning": "Jab do agents alag-alag numbers layein (e.g. 2022 mein 18% adoption, 2024 mein 35% adoption), toh unhe contradiction manne ke bajaye temporal trend (growth) samajhna, jiske liye structured timestamps zaroori hain.",
        "beginnerExplanation": "Ek agent ne purana document padha (18%), doosre ne latest news padhi (35%). Dono sahi hain! Farq sirf waqt ka hai. Agar aap subagents se timestamps (dates) maangoge, toh synthesis agent samajh jayega ki yeh growth trend hai, aapas ka jhagda (contradiction) nahi.",
        "dailyAnalogy": "Aapka vajan 2020 mein 60kg tha aur 2024 mein 70kg tha. Yeh jhooth nahi hai, yeh time ke sath badlav (temporal growth) hai.",
        "masterFormula": "TEMPORAL DIFFERENCES = Mandatory Timestamps / Data Collection Dates in Structured Output. (Prevents false contradiction flags).",
        "revisionTable": [
            {"concept": "Conflicting Numbers Across Years", "problem": "Discarding older data as contradiction", "solution": "Require publication/collection dates in structured outputs (Q2)"},
            {"concept": "Uncertainty in Final Reports", "problem": "Arbitrarily picking one source or producing vague statements", "solution": "Include explicit confidence metadata and methodology qualifications (Q8)"}
        ],
        "practicalExample": {
            "bad": "Discarding 2022 data because 2024 data exists.",
            "badReason": "Destroys historical trend and context.",
            "good": "Subagent returns `{ metric: 'adoption', value: '35%', date: '2024' }`.",
            "goodReason": "Synthesis agent correctly graphs the multi-year growth trajectory."
        },
        "examRule": "Resolve cross-agent contradictions by adding TIMESTAMPS to structured outputs! Never discard historical data!"
    },
    {
        "id": "routing-pipelines",
        "title": "5. Dynamic Routing vs Static Pipelines",
        "subtitle": "Query Complexity ke hisab se Routing karna (Latency aur Cost Bachana)",
        "earlier": [9, 10],
        "repeated": [19, 29],
        "other": [],
        "meaning": "Har query ko 4 subagents ke lambe pipeline mein bhejne ke bajaye Classifier/Router use karke simple queries ko direct fast path dena.",
        "beginnerExplanation": "Agar user ne pucha 'Who signed the Treaty of Versailles?', toh iske liye 4 subagents, document analyzer aur deep synthesizer chalana 40 seconds aur hazaron tokens waste karega. Ek router agent pehle query classify karega: Simple fact -> Single quick search; Complex comparative research -> Full multi-agent pipeline.",
        "dailyAnalogy": "Hospital triage: chhot lagne par direct dressing room (fast path), bada operation hone par hi ICU team bulana (deep pipeline).",
        "masterFormula": "ROUTING = Dynamic Classifier / Query Triage ➜ Fast Path for Facts vs Multi-Agent Pipeline for In-depth Research.",
        "revisionTable": [
            {"concept": "Simple Fact Traverses 4 Subagents", "problem": "Fixed rigid sequential pipeline for all queries", "solution": "Add dynamic query classification router to route simple queries to fast path (Q9)"},
            {"concept": "Multi-format Output Synthesis", "problem": "Collapsing financial tables into prose bullets", "solution": "Preserve modality-specific structured representations in final briefing (Q10)"}
        ],
        "practicalExample": {
            "bad": "Running full 4-agent sequential pipeline for every query regardless of complexity.",
            "badReason": "Consumes 40+ seconds and massive tokens on simple 1-line factual questions.",
            "good": "Classifier routes simple lookup to single tool, and complex strategy requests to multi-agent swarm.",
            "goodReason": "Blazing fast response times and massive cost savings."
        },
        "examRule": "Never run full heavy multi-agent pipelines for simple lookups! Use a dynamic routing classifier!"
    },
    {
        "id": "context-architecture",
        "title": "6. Context Window & Information Flow",
        "subtitle": "Subagent Prompts mein Context Overload se Bachna",
        "earlier": [5],
        "repeated": [15],
        "other": [],
        "meaning": "Synthesis agent aur subagents ke prompts mein sirf wahi filtered context bhejna jo zaroori ho, raw uncompressed logs dump karne se bachna.",
        "beginnerExplanation": "Agar Coordinator har subagent ka 50 page ka raw history agle agent ko bhejega, toh context window jaldi bhar jayega aur model confuse ho jayega. Coordinator ka kaam hai uncompressed logs ko filter karke sirf relevant structured facts agle agent ko pass karna.",
        "dailyAnalogy": "Executive summary bhejna, na ki 500 email ka poora inbox forward kar dena.",
        "masterFormula": "INFORMATION FLOW = Structured Synthesis & Summarized Payloads. (Never dump uncompressed agent conversation logs).",
        "revisionTable": [
            {"concept": "Context Saturation in Agents", "problem": "Passing entire conversation history of previous agents", "solution": "Extract structured facts and inject only relevant payload into agent prompt"},
            {"concept": "Architectural Control", "problem": "Subagent deciding orchestration", "solution": "Centralized coordinator maintains exclusive decision authority"}
        ],
        "practicalExample": {
            "bad": "Dumping 30,000 tokens of raw tool conversation logs into the synthesis agent prompt.",
            "badReason": "Wastes context window, increases latency, and causes focus degradation.",
            "good": "Passing structured key findings: `{ findings: [...], confidence: 0.95 }`.",
            "goodReason": "Keeps agent focused, lightweight, and ultra-accurate."
        },
        "examRule": "Filter and structure data before passing between agents! Centralized coordinator maintains exclusive orchestration authority!"
    }
]

# Write to src/data/exams/cca-f.js
file_content = f"""// Anthropic Claude Certified Architect — Foundations (CCA-F)
// Primary Source: cca-f-premium.pdf (85 Questions)

export const CONCEPTS_DATA = {json.dumps(CCA_F_CONCEPTS, ensure_ascii=False, indent=2)};
export const QUESTIONS_DATA = {json.dumps(parsed_questions, ensure_ascii=False, indent=2)};
"""

with open('src/data/exams/cca-f.js', 'w', encoding='utf-8') as f:
    f.write(file_content)

print(f'Successfully built src/data/exams/cca-f.js with {len(parsed_questions)} questions and 6 core concepts!')
