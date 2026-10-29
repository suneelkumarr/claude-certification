# -*- coding: utf-8 -*-
"""
Enhanced build_data.py
Enriches ALL 10 Core Topics with:
- Master Formulas
- Quick Revision Matrices
- Beginner-friendly Hinglish definitions & analogies
- Comprehensive Question Breakdowns ('Option' | 'Kyun Galat Hai')
- Earlier vs Repeated mappings for all 110 questions
"""

import json

with open('parsed_questions.json', 'r', encoding='utf-8') as f:
    raw_questions = json.load(f)

# Comprehensive option-by-option breakdown rules and curated questions
QUESTION_ENRICHMENTS = {
    # 1. Prompt Clarity & Constraints
    20: {
        "title": "Recurring Task Inconsistent Output",
        "hinglishQ": "Ek knowledge worker har hafte same prompt run karta hai weekly report ke liye. Inputs ka structure same rehta hai, lekin outputs inconsistent aate hain — kabhi tone galat hoti hai, kabhi koi section gayab ho jata hai. Sabse pehle kya investigate karna chahiye?",
        "whyCorrect": "Prompt ne audience, tone, format aur required sections ko clearly specify nahi kiya (Under-specified). Jab ye cheezein missing hoti hain, toh model har run mein alag cheez prioritize karta hai. Sabse pehla aur lowest-cost fix prompt ko tighten karna hai.",
        "wrongOptions": {
            "A": "Tone aur structure ke liye alag prompts banana zaroori nahi hai; dono constraints ek hi prompt mein asani se specify ho sakte hain.",
            "B": "Non-determinism sach hai, lekin inconsistency accept kar lena galat practice hai; prompt improve karke variance khatam ki ja sakti hai.",
            "D": "Input ka format structured hai, problem prompt ke under-specification mein hai, inputs mein nahi."
        },
        "examTip": "Inconsistency = Under-specification! Jab bhi output har run mein fluctuate kare, prompt ke missing constraints ko tighten karo."
    },
    34: {
        "title": "Prompt-Quality Review Checklist (Select TWO)",
        "hinglishQ": "Aap project manager hain aur prompt quality review ke liye checklist bana rahe hain. Kaunse do items is checklist mein shamil hone chahiye?",
        "whyCorrect": "High-quality prompt ke do main pillars hote hain: 1) Clear task with required deliverable (Option D) aur 2) Relevant context including audience and goal (Option C).",
        "wrongOptions": {
            "A": "Author ka favorite opening phrase personal preference hai, prompt quality ka standard nahi.",
            "B": "1000 words reach karna ek arbitrary quota hai; prompt jitna concise aur clear ho utna behtar hota hai.",
            "E": "Department ke sabhi logon ke naam daalna irrelevant clutter hai."
        },
        "examTip": "Prompt Checklist mein sirf PURPOSE-DRIVEN cheezein aati hain: Task + Context + Deliverable Constraints. Personal styling ya word length quotas NAHI!"
    },
    43: {
        "title": "Claude Skipping Required Questions (Missing Element)",
        "hinglishQ": "Claude ne 3 required questions mein se 2 ka answer diya aur 1 question skip kar diya. Prompt ke kis element ko strengthen karna chahiye?",
        "whyCorrect": "Task statement ko explicitly enumerate karo ki teeno questions ka jawab dena mandatory hai. Missing output ka matlab hai task statement mein explicit instruction missing thi.",
        "wrongOptions": {
            "A": "Role ya persona change karne se missing question automatically include nahi hoga.",
            "B": "Output format ko Claude par chhodna aur bhi risky hai, isse Claude dobara koi section chhod sakta hai.",
            "C": "Subject matter ka background context badhane se missing task solve nahi hota."
        },
        "examTip": "Missing output = Missing instruction! Agar Claude koi question chhod de, toh Task Statement ko 1, 2, 3 karke explicitly enumerate karo."
    },
    50: {
        "title": "Constrained Brainstorming (10 Ideas, Segments, Budget Bands)",
        "hinglishQ": "Marketing manager ko 10 campaign ideas chahiye, har idea ek audience segment aur 3 budget bands mein fit hona chahiye. Kaunsa prompting approach sabse best hai?",
        "whyCorrect": "Success criteria ko prompt ke andar hi encode karo: exactly 10 distinct ideas maango, audience + budget constraints prompt mein mention karo, aur har idea se declare karwao ki wo kis segment aur budget band ka hai.",
        "wrongOptions": {
            "A": "30 ideas maang kar filter karna unnecessary extra tokens aur latency waste karta hai.",
            "B": "Bina budget constraint ke generate karke baad mein filter karna prompt ki responsibility shift kar deta hai aur effort waste karta hai.",
            "D": "Budget ko unconstrained chhodna non-compliant ideas produce karega."
        },
        "examTip": "Constraints ko prompt ke andar hi daalo! Generation ke baad filter karna inefficient aur risky hota hai."
    },
    73: {
        "title": "Constrained Brainstorming: 8 Ideas across 4 Segments (Repeated Concept)",
        "hinglishQ": "Brainstorming task jisme exactly 8 ideas chahiye, aur 4 predefined customer segments mein distribute karna hai. Best approach kya hai?",
        "whyCorrect": "Exact count (8 ideas) aur exact segments (4 segments) prompt mein specify karo aur har idea se apna segment name karwao.",
        "wrongOptions": {
            "A": "20 ideas maang kar baad mein filter karna inefficient hai.",
            "C": "Constraints hata dena task ki core requirement ko tod deta hai.",
            "D": "Unbounded list se Claude ko choose karne kehna random result deta hai."
        },
        "examTip": "Exact Count + Predefined Categories = Hard Constraints in Prompt! Yeh Question 50 ka direct reinforcement hai."
    },
    77: {
        "title": "Prompt-Quality Checklist Items (Repeated Concept - Select TWO)",
        "hinglishQ": "Kaunse do items prompt-quality checklist par hone chahiye? (Select two)",
        "whyCorrect": "Option B (Clear task & required deliverable) aur Option C (Relevant context: audience, goal, constraints).",
        "wrongOptions": {
            "A": "Author ki favorite quote prompt quality se irrelevant hai.",
            "D": "800 words se lamba hona koi quality benchmark nahi hai.",
            "E": "Har team member ka email address prompt mein unnecessary noise hai."
        },
        "examTip": "Yeh Question 34 ka exact repeat hai! Formula: Clear Task + Context (Audience, Goal, Constraints)."
    },
    92: {
        "title": "Well-Structured Business Prompt Elements (Repeated Concept - Select TWO)",
        "hinglishQ": "Business task ke well-structured prompt mein kaunse 2 elements aate hain? (Select two)",
        "whyCorrect": "Option A (A clear statement of the task) aur Option C (Relevant context such as audience and goal).",
        "wrongOptions": {
            "B": "Har company product ka pura catalog daalna noise aur context window waste karta hai.",
            "D": "Personal anecdote prompt ko friendly dikha sakti hai par quality nahi badhati.",
            "E": "Har audience ke liye casual tone force karna unprofessional aur wrong constraint hai."
        },
        "examTip": "Task clarity + Relevant context hi business prompt ka core foundation hai. Extra catalog ya stories distraction hain."
    },
    105: {
        "title": "Missing Question in Output (Repeated Concept)",
        "hinglishQ": "Jab Claude 3 required questions mein se 1 skip kar de, toh sabse pehle kya fix karein?",
        "whyCorrect": "Task statement ko explicitly update karo taaki wo teeno questions enumerate kare aur har ek ka jawab mandatory kare.",
        "wrongOptions": {
            "A": "Persona change karne se missing question solve nahi hota.",
            "C": "Temperature badlane ya ghatane se task completeness guarantee nahi hoti.",
            "D": "System prompt lamba karne se specific task ki kami puri nahi hoti."
        },
        "examTip": "Yeh Question 43 ka exact repeat hai! Jab bhi answer skip ho: Task statement = Explicit Enumeration."
    },
    # 2. Context Windows & Models
    16: {
        "title": "Context Window Definition",
        "hinglishQ": "Ek knowledge worker apne teammate ko context window samjha raha hai. Kaunsa statement context window ko accurately describe karta hai?",
        "whyCorrect": "Context window ek bounded token budget hota hai jisme model single turn mein conversation history, system prompt, attached documents aur current input ko dekhta hai.",
        "wrongOptions": {
            "A": "Context window sessions ke beech persist nahi karta; har chat thread fresh slate hota hai.",
            "B": "Context window koi user-adjustable slider nahi hota jo per chat change ho.",
            "D": "Model khud se subset select karke context limit cross nahi kar sakta; hard token budget hota hai."
        },
        "examTip": "Context Window = Fixed token budget for a single turn (System prompt + History + Files + User input)."
    },
    75: {
        "title": "Context Window Limits (Repeated Concept)",
        "hinglishQ": "Kaunsa statement context window ko accurately describe karta hai?",
        "whyCorrect": "Option B: A fixed token budget that includes system instructions, history, attachments, and current message.",
        "wrongOptions": {
            "A": "Unlimited conversation history nahi hoti.",
            "C": "User-adjustable slider nahi hota.",
            "D": "Claude limit se exceed nahi kar sakta."
        },
        "examTip": "Q16 ka exact repeat hai. Yaad rakhein: Fixed token limit per turn!"
    },
    5: {
        "title": "Model Selection: Complex Multi-step Reasoning",
        "hinglishQ": "Ek analyst one-off complex problem par kaam kar raha hai jisme multi-step extended chain of thought chahiye. Kaunsa model best hai?",
        "whyCorrect": "Opus Anthropic ka highest-capability model hai jo advanced reasoning aur complex multi-step tasks ke liye best suited hai.",
        "wrongOptions": {
            "A": "Haiku speed aur cost ke liye best hai, par deep complex reasoning mein Opus se piche hai.",
            "C": "Sonnet mid-tier hai, par jab task genuinely deep reasoning maange toh Opus recommended hota hai.",
            "D": "One-off complex task mein latency secondary hoti hai, quality primary hoti hai."
        },
        "examTip": "One-off Deep Multi-step Reasoning = Claude Opus! Cost & Speed = Claude Haiku!"
    },
    32: {
        "title": "Model Trade-offs: Speed, Cost, Quality",
        "hinglishQ": "Claude models ke cost, speed aur quality trade-offs ko kaunsa statement sahi describe karta hai?",
        "whyCorrect": "More capable models (Opus) generally consume more rate limit and run more slowly, while lighter models (Haiku) are faster and consume less rate limit.",
        "wrongOptions": {
            "A": "Capable models kam rate limit nahi lete, balki zyada tokens aur compute lete hain.",
            "C": "Lighter models per request kam rate limit consume karte hain.",
            "D": "Speed aur rate limit model capability se completely linked hain, independent nahi hain."
        },
        "examTip": "Higher Capability = Higher Latency + Higher Rate Limit Usage (Opus). Lighter = Faster + Cheaper (Haiku)."
    },
    # 3. Data Privacy
    22: {
        "title": "Identifying Sensitive Data for Redaction",
        "hinglishQ": "Aap Claude prompt ke liye input prepare kar rahe hain. Kaunsa data type clearly redaction ya anonymization maangta hai?",
        "whyCorrect": "Option D: Customer government identifiers aur full payment-card numbers tied to named individuals highly sensitive PII/PCI data hain.",
        "wrongOptions": {
            "A": "Generic product descriptions public marketing data hain, safe hain.",
            "B": "Published press releases already public information hain.",
            "C": "Company public org chart ke job titles public hain."
        },
        "examTip": "Govt IDs, Credit Cards, Named Salaries = STRICT REDACTION BEFORE PROMPT!"
    },
    26: {
        "title": "Ongoing Investigation Policy Violation",
        "hinglishQ": "HR policy explicitly mana karti hai ki ongoing investigation ka data AI tools mein na dala jaye. Compliant action kya hai?",
        "whyCorrect": "Matter ko HR leadership ko escalate karo aur investigation-related info Claude mein bilkul mat daalo (Non-entry).",
        "wrongOptions": {
            "B": "Incognito chat policy ban ko override nahi karta.",
            "C": "Investigation close hone se pehle enter karne ki planning policy bypass nahi kar sakti.",
            "D": "Paraphrasing karke details chupana explicit ban ko bypass nahi karta."
        },
        "examTip": "Explicit policy prohibition leaves NO WORKAROUNDS. Non-entry + Escalation is the ONLY compliant path!"
    },
    # 4. Code Execution
    27: {
        "title": "Sales Statistics & Chart Generation",
        "hinglishQ": "Sales data file se summary statistics aur weekly chart banana hai. Kaunsa approach best hai?",
        "whyCorrect": "Code Execution use karo calculations aur charts generate karne ke liye, fir human results ko source data se verify kare.",
        "wrongOptions": {
            "A": "Chat narrative general trends deta hai, exact verifiable math nahi.",
            "B": "Written description chart ka substitute nahi hai.",
            "C": "Brief preview se estimate karna hallucination aur errors create karta hai."
        },
        "examTip": "Exact calculations, statistics aur charts = CODE EXECUTION sandbox!"
    },
    51: {
        "title": "Multi-tab Spreadsheet Arithmetic",
        "hinglishQ": "Multi-tab spreadsheet ke cross-sheet totals deterministic calculations se nikalne hain. Kaunsa feature use karein?",
        "whyCorrect": "Code Execution sandbox mein Python code spreadsheet par run karta hai aur mathematically verified output deta hai.",
        "wrongOptions": {
            "A": "Standard chat prompt LLM arithmetic par depend karta hai jo multi-tab mein errors de sakta hai.",
            "B": "Research feature web/docs gather karta hai, multi-sheet calculation nahi.",
            "C": "Artifacts UI document render karta hai par backend calculation sandbox Code Execution hai."
        },
        "examTip": "Deterministic math across files/tabs = Code Execution!"
    },
    # 5. Primary Source Verification
    33: {
        "title": "Conflicting Dates in Secondary Sources",
        "hinglishQ": "Claude report mein do cited sources same event ke liye alag-alag dates de rahe hain. Correct approach kya hai?",
        "whyCorrect": "Locate a primary or authoritative source for the event and use the date that source confirms.",
        "wrongOptions": {
            "A": "Recency heuristic (later source) galat assumption hai; naye articles bhi galat copy kar sakte hain.",
            "C": "Do conflicting dates ka average nikalna guessing hai, verification nahi.",
            "D": "Lamba citation hona factual accuracy ki guarantee nahi hai."
        },
        "examTip": "Secondary sources conflict karein toh HAMESHA Primary Authoritative Source locate karo!"
    },
    35: {
        "title": "Unlinked Figures in Trade Press",
        "hinglishQ": "Growth figure teen trade-press articles mein repeat ho raha hai par underlying study ka link nahi hai. Correct validation step?",
        "whyCorrect": "Locate the original study referenced by the trade-press articles and verify the figure in the primary source.",
        "wrongOptions": {
            "B": "Secondary repetition verification nahi hoti; 3 articles ek hi galat number repeat kar sakte hain.",
            "C": "Highest figure choose karna false representation hai.",
            "D": "Source attribution hatakar common knowledge bolna intellectual dishonesty hai."
        },
        "examTip": "Secondary repetition is NOT verification. Original primary source verify karo!"
    },
    # 6. Project Configuration
    65: {
        "title": "12-Person Team Consistency in Project",
        "hinglishQ": "12 logon ki team ke weekly status reports mein consistency lane ke liye Project ki best configuration kya hai?",
        "whyCorrect": "Role, required sections, tone aur length constraints ko Project ke Custom Instructions mein place karo.",
        "wrongOptions": {
            "A": "Custom instructions empty chhodne se har banda alag prompt likhega aur output drift hoga.",
            "C": "Slack channel external reminder hai, model ko directly govern nahi karta.",
            "D": "12 alag Projects banana team fragmentation aur maintenance nightmare banata hai."
        },
        "examTip": "Team Consistency = Place Role + Sections + Tone + Constraints into Project Custom Instructions!"
    },
    15: {
        "title": "Project Configuration Drift Signal",
        "hinglishQ": "Project kai mahino se chal raha hai. Kaunsa signal sabse directly batata hai ki configuration update mang rahi hai?",
        "whyCorrect": "Project outputs increasingly reference terminology, sources, or guidance that no longer reflects current practice.",
        "wrongOptions": {
            "B": "Chat volume decrease hona indirect ya seasonable factor ho sakta hai.",
            "C": "Ad-hoc chats use karna signal hai, par outputs mein outdated guidance direct evidence hai.",
            "D": "Output length increase hona direct quality-drift signal nahi hai."
        },
        "examTip": "Direct drift signal = Outputs referencing outdated terminology or retired guidance!"
    },
    # 7. Recovering Degraded Conversations
    4: {
        "title": "Conversation Quality Degradation Recovery",
        "hinglishQ": "Jab Claude chat ki quality degrade hone lage, sabse pehla recovery action kya hona chahiye?",
        "whyCorrect": "Summarize the current state and continue with a focused follow-up prompt.",
        "wrongOptions": {
            "A": "Senior architect ko escalate karna overreaction aur heavy step hai.",
            "B": "Model vendor turant badalna disruptive aur last-resort action hai.",
            "C": "Poori chat discard karke scratch se shuru karna time waste karta hai."
        },
        "examTip": "First recovery action = Summarize current state + Focused follow-up prompt!"
    },
    # 8. Iteration & Diminishing Returns
    17: {
        "title": "First Step in Iterative Refinement",
        "hinglishQ": "Jab output umeed ke mutabiq na ho, prompt refinement mein pehla step kya hona chahiye?",
        "whyCorrect": "Identify the specific weaknesses in the current output (Diagnosis precedes intervention).",
        "wrongOptions": {
            "A": "Bina samjhe revised prompt submit karna andhere mein teer chalana hai.",
            "B": "Naye output ko compare tab karoge jab naya output bane; pehle current ki kami samjho.",
            "D": "Prompt tab tak modify nahi kar sakte jab tak weak points diagnose na hon."
        },
        "examTip": "Diagnosis precedes intervention! Pehle current output ki deficiency pinpoint karo."
    },
    60: {
        "title": "Prompting Plateau & Diminishing Returns",
        "hinglishQ": "Aapne prompt 8 baar iterate kiya aur pichle 4 baar se quality plateau ho chuki hai. Sahi conclusion kya hai?",
        "whyCorrect": "Iteration has reached diminishing returns and the next step is human review or a different approach.",
        "wrongOptions": {
            "B": "Plateau aane ke baad same prompting continue karna effort waste karta hai.",
            "C": "Task silently abandon karna unprofessional hai.",
            "D": "Kharab output accept kar lena quality standard ko compromise karta hai."
        },
        "examTip": "Prompting Plateau = Diminishing returns! Stop prompting, switch to human review/different strategy."
    },
    # 9. Workflow Decomposition
    58: {
        "title": "Decomposition Trigger: Distinct Deliverables",
        "hinglishQ": "Redesign new-hire onboarding task ko decompose karne ka sabse strong indicator kya hai?",
        "whyCorrect": "The request requires multiple distinct outputs: a process map, supporting materials, and a measurement plan.",
        "wrongOptions": {
            "A": "Single well-defined output single prompt mein ho sakta hai, decompose ki zarurat nahi.",
            "C": "Familiar content decomposition demand nahi karta.",
            "D": "Single structured document single prompt se ho sakta hai."
        },
        "examTip": "Multiple distinct deliverables = DECOMPOSE! Single deliverable = Keep in one prompt."
    },
    25: {
        "title": "Over-decomposition Remedy",
        "hinglishQ": "15 tiny steps mein todne se board memo disjointed aur fragmented ho gaya. Best remedy kya hai?",
        "whyCorrect": "Consolidate related steps into fewer cohesive sections that group naturally connected ideas.",
        "wrongOptions": {
            "B": "Order ke hisab se group karne se ideas ka connection restore nahi hota.",
            "C": "Sequence merge karne se narrative flow solve nahi hota.",
            "D": "Headings add karne se underlying fragmentation theek nahi hoti."
        },
        "examTip": "Over-decomposition fix = Consolidate into fewer cohesive sections!"
    },
    # 10. Human Oversight & Delegation
    44: {
        "title": "Delegation Criteria in AI Fluency (Select TWO)",
        "hinglishQ": "AI Fluency Framework ke Delegation competency ke mutabiq, kaunse 2 criteria decide karte hain ki task AI ko dena hai ya human ko? (Select two)",
        "whyCorrect": "Option D (Need for human creativity, empathy, or judgment) aur Option E (Reversibility of the task and consequence of an error).",
        "wrongOptions": {
            "A": "Diagram ki visual complexity primary criterion nahi hai.",
            "B": "Team member ki seniority authority se judi hai, task appropriateness se nahi.",
            "C": "Process kitna purana hai ye delegation safety decide nahi karta."
        },
        "examTip": "Delegation Formula = Human empathy/judgment needed + Reversibility × Consequence of error!"
    },
    13: {
        "title": "High-Severity Ethical Risks in HR (Select TWO)",
        "hinglishQ": "HR workflow mein kaunse 2 risks highest ethical concern pose karte hain? (Select two)",
        "whyCorrect": "Option A (Decisions that materially affect a person's employment without human accountability) aur Option C (Outputs that systematically disadvantage members of a protected group).",
        "wrongOptions": {
            "B": "Inconsistent tone formatting quality issue hai, ethical risk nahi.",
            "D": "Dash style formatting issue hai.",
            "E": "Calendar invite typo clerical mistake hai."
        },
        "examTip": "Ethical Risks = Unaccountable employment decisions + Systematic bias against protected groups!"
    }
}

# 10 Core Concepts Data
CONCEPTS = [
    {
        "id": "prompt-clarity",
        "title": "1. Prompt Clarity & Constraints",
        "subtitle": "Spasht Hidayatein aur Boundings (Audience, Tone, Format, Count)",
        "earlier": [20, 34, 43, 50],
        "repeated": [73, 77, 92, 105],
        "other": [2, 57],
        "meaning": "Claude ko hawa mein instruction dene ke bajaye bilkul saaf (clear) shabdon mein Task, Audience, Tone, aur Boundings (limits) dena taaki output 100% predictable aur reliable ho.",
        "beginnerExplanation": "Agar aap Claude ko bologe 'Ek report likho', toh ye ek Vague/Under-specified prompt hai. Claude confuse ho jayega ki kiske liye likhe aur kitna lamba likhe. Iska result ye hota hai ki har run mein alag output aata hai. Jab aap Clear Task, Context (Audience + Goal), aur Explicit Constraints (Exact count, format, tone) dete ho, toh result consistent banta hai.",
        "dailyAnalogy": "Hotel mein 'Kuch tasty khana lao' (vague) bolne par waiter kuch bhi le aayega. Lekin 'Bina pyaaz-lehsun ki dal-tadka aur 2 plain roti lao' (constrained) bologe toh hamesha perfect khana aayega.",
        "masterFormula": "GOOD PROMPT = CLEAR TASK (kya karna hai) + CONTEXT (audience + goal) + CONSTRAINTS (count, tone, format, sections) + DELIVERABLE (output structure)",
        "revisionTable": [
            {"concept": "Inconsistent Output", "problem": "Under-specified prompt", "solution": "Audience, tone, format aur required sections specify karo (Q20)"},
            {"concept": "Missing Questions", "problem": "Weak task statement", "solution": "Task statement mein all questions explicitly enumerate karo (Q43, Q105)"},
            {"concept": "Non-compliant Ideas", "problem": "Constraints missing", "solution": "Exact count (e.g. 8 ideas) aur categories prompt mein daalo (Q50, Q73)"},
            {"concept": "Prompt Checklist", "problem": "Adding personal fluff", "solution": "Sirf Task + Context + Constraints validate karo (Q34, Q77, Q92)"}
        ],
        "practicalExample": {
            "bad": "Draft a marketing campaign for product launch.",
            "badReason": "Na budget pata hai, na target audience, na count. Claude randomly kuch bhi 20 generic lines generate kar dega.",
            "good": "Generate exactly 8 campaign ideas for our product launch. Group them across our 4 predefined customer segments (2 ideas per segment). For each idea, specify the budget band (Low, Mid, High) and expected timeline.",
            "goodReason": "Exact count (8), clear segments (4), budget bands define hain. Output 100% structured aur predictable hoga."
        },
        "examRule": "Inconsistency = Under-specification! Missing element = Task statement mein explicitly enumerate karo! Constraints hamesha prompt ke andar hone chahiye!"
    },
    {
        "id": "context-windows",
        "title": "2. Context Windows & Models",
        "subtitle": "Token Budget aur Model ki Yaad-dasht ki Seema",
        "earlier": [16],
        "repeated": [75],
        "other": [30, 103, 5, 32, 98],
        "meaning": "Context Window ek fixed token budget hota hai jo Claude ek single turn (request-response) mein process kar sakta hai. Isme System prompt, conversation history, attached files aur current user input sab shamil hota hai.",
        "beginnerExplanation": "Context window chats ke beech persist nahi karta. Har session ka ek finite token budget hota hai. Memory Imports ek experimental feature hai — agar imported details gayab hon toh unhe Settings mein manually add karna padta hai.",
        "dailyAnalogy": "Ek desk par ek waqt mein sirf 5 books rakhne ki jagah hai. Nayi book rakhne par purani hatani padegi.",
        "masterFormula": "CONTEXT WINDOW = System Prompt + Conversation History + Attachments + Current Input (Single-turn fixed token limit)",
        "revisionTable": [
            {"concept": "Context Window Definition", "problem": "Thinking it is unlimited", "solution": "Fixed token budget on what Claude can attend to in a single turn (Q16, Q75)"},
            {"concept": "Memory Imports", "problem": "Missing imported context", "solution": "Imports are experimental; manual addition in Settings is the fallback (Q30, Q103)"},
            {"concept": "Model Selection (Opus vs Haiku)", "problem": "Using Opus for simple tasks", "solution": "Opus for complex deep reasoning (Q5); Haiku for fast, low-cost high volume (Q32, Q98)"}
        ],
        "practicalExample": {
            "bad": "Assuming Claude remembers a PDF uploaded 2 weeks ago in another chat.",
            "badReason": "Context window chats ke beech persist nahi karta.",
            "good": "Adding standard reference guidelines to a Claude Project Knowledge base.",
            "goodReason": "Project knowledge automatically provides standard context to every new conversation."
        },
        "examRule": "Context Window is a bounded token budget per turn. Memory imports are experimental (fallback: Settings). Opus = high capability & latency; Haiku = fast & low rate-limit consumption."
    },
    {
        "id": "data-privacy",
        "title": "3. Data Privacy & Redaction",
        "subtitle": "Sensitive Data (PII/PCI/Salary) ko Hatana aur Chupana",
        "earlier": [22, 54, 66],
        "repeated": [76, 89],
        "other": [18, 26, 109],
        "meaning": "Claude mein sensitive information (employee salaries, government IDs, credit cards, ongoing investigation details) submit karne se pehle sanitize karna.",
        "beginnerExplanation": "Always follow the 'Minimum Necessary Data' rule. Mixed-sensitivity documents mein pehla step CLASSIFY karna hota hai (kya sensitive hai), fir REDACT karna. Ongoing HR investigations ka data AI mein daalna policy dwara STRICTLY PROHIBITED hota hai — Incognito ya paraphrasing se bypass nahi hota!",
        "dailyAnalogy": "Bank counter par form bharte waqt account number aur name likhte hain, ATM PIN courier ya form par publicly nahi likhte.",
        "masterFormula": "DATA PRIVACY = Classify First ➜ Redact PII/PCI/Salaries ➜ Supply Anonymized Policies/Structure ONLY. (Investigations data = STRICT ESCALATION, NO ENTRY!)",
        "revisionTable": [
            {"concept": "Mixed-sensitivity Doc", "problem": "Redacting before reading", "solution": "First step is always CLASSIFY content (Q18)"},
            {"concept": "HR Compensation Task", "problem": "Pasting named employee salaries", "solution": "Redact names and exact figures; supply policy logic only (Q22, Q76)"},
            {"concept": "Confidential Spreadsheet", "problem": "Uploading full file and saying 'ignore'", "solution": "Redact or exclude non-required confidential cells (Q66)"},
            {"concept": "Ongoing Investigation", "problem": "Using Incognito or paraphrasing", "solution": "Strict ban: Escalate to leadership and do NOT enter into AI (Q26, Q109)"}
        ],
        "practicalExample": {
            "bad": "Uploading spreadsheet with employee names and bonus amounts to draft letters.",
            "badReason": "Severe privacy violation of personal compensation data.",
            "good": "Supplying anonymized letter template with policy calculation brackets.",
            "goodReason": "Protects PII while achieving the drafting goal."
        },
        "examRule": "Safe: Anonymized policies, redacted job descriptions. BANNED: Named salaries, Govt IDs, Credit cards, Ongoing investigations. Incognito is NOT a policy workaround!"
    },
    {
        "id": "code-execution",
        "title": "4. Code Execution for Exact Calculations",
        "subtitle": "Deterministic Math, Spreadsheets aur Charts ke liye Code Sandbox",
        "earlier": [27, 51],
        "repeated": [69, 86],
        "other": [],
        "meaning": "Multi-tab Excel workbooks, exact statistics, aur charts ke liye Claude ki text generation ke bajaye Python Code Execution environment use karna.",
        "beginnerExplanation": "LLMs text mein zabardast hote hain, par 20,000 rows ya multi-sheet calculation mein arithmetic errors kar sakte hain. Code Execution mein real Python code sandbox mein run hota hai jo exact (deterministic) numbers deta hai, jise human verify karta hai.",
        "dailyAnalogy": "Lakhon rupaye ke GST aur tax calculation zabaani guess karne ke bajaye Tally ya Excel formulas se karna.",
        "masterFormula": "EXACT MATH / MULTI-TAB CSV / SPREADSHEET = Code Execution Sandbox + Human Verification of Results",
        "revisionTable": [
            {"concept": "Multi-sheet Spreadsheet", "problem": "Asking chat prompt to sum rows", "solution": "Code Execution runs actual Python code on uploaded file (Q51, Q86)"},
            {"concept": "Weekly Sales Stats & Chart", "problem": "Asking for text description", "solution": "Code Execution generates verifiable numbers and visualizations (Q27)"},
            {"concept": "CSV Arithmetic Reconciliation", "problem": "Relying on LLM arithmetic", "solution": "Deterministic sandbox execution avoids calculation hallucination (Q69)"}
        ],
        "practicalExample": {
            "bad": "Prompting chat: 'Calculate the total expense across these 5 Excel tabs.'",
            "badReason": "Model can drop rows or miscalculate.",
            "good": "Using Code Execution so Claude runs python script to sum exact columns.",
            "goodReason": "Produces 100% mathematically verifiable totals."
        },
        "examRule": "Deterministic calculations, multi-tab workbooks, exact statistics & charts = HAMESHA 'Code Execution'!"
    },
    {
        "id": "primary-source",
        "title": "5. Primary-Source Verification & Hallucinations",
        "subtitle": "Asli Source se Fact-Check karna aur Hallucination rokna",
        "earlier": [33, 35],
        "repeated": [78, 99],
        "other": [28, 47, 83],
        "meaning": "Jab Claude facts introduce kare ya secondary sources mein alag dates hon, toh hamesha Primary Authoritative Source se verify karna.",
        "beginnerExplanation": "Teen blogs ka ek hi baat repeat karna 'proof' nahi hota (Secondary repetition). Asli verification tab hoti hai jab aap primary research study check karein. Agar Claude unsupported claims generate kar raha hai, toh root cause hota hai: prompt mein source boundary constraint missing hona! Aur hallucination suspect ho toh pehla step claim ko LOCALIZE (pinpoint) karna hai.",
        "dailyAnalogy": "Social media rumors ko dekhne ke bajaye court order ya government gazette (Primary Source) check karna.",
        "masterFormula": "VERIFICATION = Primary/Authoritative Source. (Secondary repetition ≠ Verification). HALLUCINATION FIX = Source Boundary Constraint ('use ONLY supplied source'). FIRST STEP = Pinpoint/Localize unsupported claim.",
        "revisionTable": [
            {"concept": "Conflicting Dates in Secondary Sources", "problem": "Averaging or picking most recent", "solution": "Locate primary authoritative source to confirm date (Q33, Q99)"},
            {"concept": "Unlinked Growth Figures in News", "problem": "Accepting because 3 articles agree", "solution": "Locate original primary study referenced (Q35, Q78)"},
            {"concept": "Model Inventing Facts", "problem": "Persona forced it", "solution": "Prompt lacks constraint to use ONLY facts in supplied source (Q47, Q83)"},
            {"concept": "Suspected Hallucination", "problem": "Discarding entire output immediately", "solution": "First pinpoint/localize the specific unsupported claim (Q28)"}
        ],
        "practicalExample": {
            "bad": "Prompt: 'Act as a researcher and write about tech trends.'",
            "badReason": "Allows Claude to invent plausible-sounding facts.",
            "good": "Prompt: 'Using ONLY the attached quarterly report, summarize growth. Do not include external facts.'",
            "goodReason": "Strictly bounds Claude to the evidence."
        },
        "examRule": "Never average conflicting sources! Locate the PRIMARY source. Hallucination root cause = lack of source-boundary constraint in prompt!"
    },
    {
        "id": "project-config",
        "title": "6. Project Configuration & Maintenance",
        "subtitle": "Claude Projects, Custom Instructions, Knowledge Base aur Drift Se Bachav",
        "earlier": [15, 23, 65, 67],
        "repeated": [79, 100, 106, 110],
        "other": [7, 8, 36, 41, 45, 10, 52, 87],
        "meaning": "Claude Projects mein reusable system instructions, role, tone aur knowledge set karna, aur samay ke sath unhe review karke maintain karna.",
        "beginnerExplanation": "Agar 12 log alag-alag prompts likhenge toh inconsistency aayegi. Project Custom Instructions mein Role, Tone, Required Sections aur Rules lock kar diye jaate hain. Lekin dhyan rahe: 'If it works once, it works forever' ek bohot bada misconception hai! Real world mein policies badalti hain, isliye Projects ko periodically update karna padta hai.",
        "dailyAnalogy": "Company SOP manual: har saal process badalta hai toh manual update karna padta hai, purana manual follow karoge toh galtiyan hongi.",
        "masterFormula": "PROJECT CONSISTENCY = Custom Instructions (Role + Tone + Format + Rules) + Knowledge Sources. MAINTENANCE = Periodic review to prevent configuration drift.",
        "revisionTable": [
            {"concept": "Team Consistency (12 users)", "problem": "Leaving instructions empty", "solution": "Put role, sections, tone and constraints in Project instructions (Q65)"},
            {"concept": "'Works once, works forever'", "problem": "Never updating configurations", "solution": "Periodically review & update as real-world policies evolve (Q23, Q106)"},
            {"concept": "Signal of Project Drift", "problem": "Relying on chat volume changes", "solution": "Outputs citing retired guides OR users bypassing Project via ad-hoc chats (Q15, Q67, Q110)"},
            {"concept": "Living Operating Procedure (SOP)", "problem": "Copy-pasting in chat transcript", "solution": "Use Artifacts for durable, editable, versionable documents (Q36, Q79)"}
        ],
        "practicalExample": {
            "bad": "Telling Claude: 'Please consult the brand guide attached in knowledge.'",
            "badReason": "Vague hope; model might ignore it.",
            "good": "Writing concrete instructions: 'Tone: Formal, no contractions. Minimum length: 150 words. Offer credit ONLY if Section 2 criteria met.'",
            "goodReason": "Enforceable rules baked directly into custom instructions."
        },
        "examRule": "Living reusable document = ARTIFACT! Project drift signals = Retired terminology citations OR users resorting to ad-hoc chats. Never leave configurations static forever!"
    },
    {
        "id": "degraded-conversations",
        "title": "7. Recovering Degraded Conversations",
        "subtitle": "Jab Chat lambi hokar bhatak jaye toh First Recovery Action",
        "earlier": [4, 62],
        "repeated": [101],
        "other": [],
        "meaning": "Jab lambi chat mein context window bhatak jaye aur model purani baatein repeat karne lage ya latest prompt ignore kare, toh least-disruptive first step lena.",
        "beginnerExplanation": "Lambi chat mein irrelevant history accumulate ho jati hai (Context Degradation). Aise waqt par turant doosre vendor par jump karna ya architecture ko escalate karna overreaction hai. FIRST STEP: Ab tak ke key decisions ko summarize karo aur ek fresh, focused prompt ke sath aage badho!",
        "dailyAnalogy": "Lambi meeting mein jab log mudde se bhatak jayein, toh chair bolta hai: 'Chalo ab tak ki 3 baatein summarize karke agle topic par aate hain.'",
        "masterFormula": "FIRST RECOVERY STEP = Summarize current state/decisions and issue a focused follow-up prompt. (Last resort = Vendor switch or full restart).",
        "revisionTable": [
            {"concept": "Conversation Quality Degrades", "problem": "Escalating to architect or restarting", "solution": "Summarize current state and continue with focused follow-up (Q4)"},
            {"concept": "Repeating Old Points in Long Chat", "problem": "Increasing temperature", "solution": "Summarize key decisions so far and re-anchor with fresh prompt (Q62)"},
            {"concept": "Least Appropriate First Action", "problem": "Overreacting immediately", "solution": "Immediately replacing Claude with a competitor is LEAST appropriate (Q101)"}
        ],
        "practicalExample": {
            "bad": "Discarding 2 weeks of collaborative drafting after Claude misses one prompt.",
            "badReason": "Wastes huge effort.",
            "good": "Prompt: 'Here is what we have locked in: [Points 1-3]. Now let us focus strictly on Section 4 with these constraints...'",
            "goodReason": "Re-anchors the model cleanly without disruption."
        },
        "examRule": "First recovery action = SUMMARIZE AND ISSUE FOCUSED PROMPT. Least appropriate first action = Switch model vendor!"
    },
    {
        "id": "iteration-diminishing",
        "title": "8. Iteration, Feedback & Diminishing Returns",
        "subtitle": "Output ko Sudharna, Plateau Pehchanna aur Kab Rukna",
        "earlier": [17, 60],
        "repeated": [70, 95],
        "other": [6, 14, 21, 74],
        "meaning": "Prompt refinement ka sahi sequence follow karna aur ye samajhna ki prompt iteration kab band karke human review ya different approach par jana hai.",
        "beginnerExplanation": "1) Diagnosis precedes intervention: output kharab ho toh pehle deficiency identify karo, seedha scratch se rewrite mat karo. 2) Targeted fixes: Jo part pass ho gaya usko mat chhedo, sirf concerned issue fix karo. 3) Diminishing returns: 8 baar prompt change karne ke baad bhi plateau hai, toh prompting stop karo aur human review ya new approach lo.",
        "dailyAnalogy": "Khaane mein namak kam hai toh sirf namak daalo (targeted fix), poora khana fek kar dubara banana ya bina taste kiye masale daalna galat hai.",
        "masterFormula": "REFINEMENT = 1. Identify specific deficiencies (Diagnosis) ➜ 2. Targeted fix (preserve accepted parts). PLATEAU = Stop prompting ➜ Move to human review or alternate strategy.",
        "revisionTable": [
            {"concept": "Output Doesn't Meet Expectations", "problem": "Rewriting entire prompt immediately", "solution": "First identify specific weaknesses/deficiencies in current output (Q17, Q70)"},
            {"concept": "Stakeholder Flags 2 Concerns", "problem": "Rewriting prototype from scratch", "solution": "Address specific concerns directly; leave accepted parts unchanged (Q14)"},
            {"concept": "Prompting Plateau (4+ tries)", "problem": "Looping continuously", "solution": "Recognize diminishing returns; move to human review (Q60, Q95)"},
            {"concept": "Pilot Success with 2 Opportunities", "problem": "Delaying rollout for new full pilot", "solution": "Incorporate improvements and proceed to broader rollout with monitoring (Q21, Q74)"}
        ],
        "practicalExample": {
            "bad": "Rewriting a full 10-page spec because the executive summary had 1 typo.",
            "badReason": "Risks breaking the remaining 9 approved pages.",
            "good": "Targeted prompt: 'Revise only the executive summary to correct the figure to $5M.'",
            "goodReason": "Keeps the change set reviewable and safe."
        },
        "examRule": "First step in prompt refinement: Identify specific deficiencies! When quality plateaus after multiple iterations: Stop prompting, move to human review!"
    },
    {
        "id": "workflow-decomposition",
        "title": "9. Workflow Decomposition & Formatting",
        "subtitle": "Bade Kaam ko Chhote Tukdo mein Todna (aur Over-decomposition se Bachna)",
        "earlier": [25, 58],
        "repeated": [93, 102, 108],
        "other": [1, 19, 48, 56, 84, 91, 3, 42, 49, 53, 59, 64, 85, 94],
        "meaning": "Bade complex workflows ko logically separate deliverables mein todna, aur over-decomposition se flow kharab hone par re-consolidate karna.",
        "beginnerExplanation": "Decomposition kab chahiye? Jab ek request mein multiple distinct deliverables hon (jaise process map + training doc + measurement plan). Agar single coherent deliverable hai toh decomposition ki zarurat nahi hoti. Agar 15 nanhe steps mein tod diya aur output disjointed ho gaya (Over-decomposition), toh related steps ko cohesive sections mein wapas consolidate karo.",
        "dailyAnalogy": "Ghar banane ke alag phases: Foundation, Walls, Roof (good decomposition). Lekin ek-ek int lagane ke liye alag contract banana = over-decomposition.",
        "masterFormula": "DECOMPOSITION TRIGGER = Multiple distinct deliverables / separate quality criteria. OVER-DECOMPOSITION REMEDY = Consolidate related steps into fewer cohesive sections.",
        "revisionTable": [
            {"concept": "Multiple Distinct Outputs", "problem": "One massive prompt", "solution": "Decompose into separate outputs before prompting (Q58, Q93)"},
            {"concept": "Single Familiar Deliverable", "problem": "Decomposing unnecessarily", "solution": "Single deliverable can usually be handled in one well-structured prompt (Q102)"},
            {"concept": "Output Feels Disjointed (15 steps)", "problem": "Adding even more steps", "solution": "Consolidate related steps into fewer cohesive sections (Q25, Q108)"},
            {"concept": "200 Weekly Regional Records", "problem": "Prose narrative paragraphs", "solution": "Structured table with 1 row per record & columns for metrics (Q56, Q91)"},
            {"concept": "Investor Update Structure", "problem": "Chronological narrative", "solution": "Lead with headline result ➜ concise drivers ➜ forward outlook (Q48, Q84)"}
        ],
        "practicalExample": {
            "bad": "Prompting: 'Build our complete HR portal, write the policies, design the database, and make employee training slides in one go.'",
            "badReason": "Output will be shallow and miss critical depth.",
            "good": "Decomposing into: Step 1 (Process Map), Step 2 (Policy Text), Step 3 (Training Plan).",
            "goodReason": "Each deliverable gets focused attention and dedicated quality criteria."
        },
        "examRule": "Distinct deliverables = Decompose! Disjointed output from over-decomposition = Consolidate into fewer cohesive sections! Tabular metrics = Structured Table!"
    },
    {
        "id": "human-oversight",
        "title": "10. Human Oversight, Ethical Risks & AI Fluency",
        "subtitle": "AI Fluency Framework (Delegation, Diligence, Description) aur High-Stakes Decisions",
        "earlier": [13, 44, 68],
        "repeated": [71, 72, 82, 96, 97],
        "other": [9, 11, 12, 24, 28, 29, 31, 38, 39, 40, 63, 80, 81, 88, 104, 107],
        "meaning": "AI Fluency Framework ke teeno core principles (Delegation, Diligence, Description), ethical guardrails aur human accountability ensure karna.",
        "beginnerExplanation": "1) Delegation: Uniquely human capabilities (empathy, judgment) aur risk profile (reversibility x consequence) par depend karta hai. Employment promotion/firing decisions ya binding contracts kabhi AI par nahi chhod sakte! 2) Diligence: Policy compliance ek sustained professional habit hai, one-time onboarding checklist nahi. 3) Description: Capabilities aur limitations dono ko accurately communicate karna. Demographic stereotypes ko data-backed behaviors se replace karo.",
        "dailyAnalogy": "Autopilot plane udayega, par pilot cabin mein rehta hai aur takeoff/landing aur emergency decisions pilot hi leta hai.",
        "masterFormula": "DELEGATION CRITERIA = Need for human empathy/judgment + Reversibility of task & consequence of error. (High stakes = MANDATORY HUMAN ACCOUNTABILITY).",
        "revisionTable": [
            {"concept": "Delegation Criteria", "problem": "Diagram complexity or seniority", "solution": "Human empathy/judgment needed + Reversibility & consequence of error (Q44, Q82)"},
            {"concept": "Ethical Risks in HR", "problem": "Typos or Oxford comma formatting", "solution": "Employment decisions without accountability + Systematic bias against protected groups (Q13, Q71)"},
            {"concept": "External Press Release", "problem": "Publishing directly without human review", "solution": "High-visibility external comms require human review and approval (Q96)"},
            {"concept": "Demographic Generalization in Brief", "problem": "Adding disclaimer or keeping it", "solution": "Revise to focus on observed data-backed behaviors (Q24, Q107)"},
            {"concept": "AI Fluency - Description", "problem": "Hiding limits or overselling", "solution": "Balanced framing: reliable capabilities + known limits + human oversight (Q9, Q38, Q72)"},
            {"concept": "AI Fluency - Diligence", "problem": "Treating policy as one-time onboarding", "solution": "Sustained professional habit of aligning practice with policy and closing gaps (Q31, Q97)"}
        ],
        "practicalExample": {
            "bad": "Using Claude to rank employees and automatically issue termination letters.",
            "badReason": "Catastrophic ethical and legal violation of human accountability.",
            "good": "Claude synthesizes themes from approved customer feedback or drafts an internal training guide for human review.",
            "goodReason": "Human supervised, low risk, human retains decision authority."
        },
        "examRule": "High stakes (employment, legal commitments, medical diagnosis, external press release) = Mandatory human sign-off! Diligence = Ongoing habit, not one-time check!"
    }
]

# Process all questions
processed_questions = []
for q in raw_questions:
    num = q['num']
    c_id = 'human-oversight'
    for c in CONCEPTS:
        if num in c['earlier'] or num in c['repeated'] or num in c.get('other', []):
            c_id = c['id']
            break
            
    enrichment = QUESTION_ENRICHMENTS.get(num, None)
    
    q_obj = {
        'num': num,
        'conceptId': c_id,
        'question': q['question'],
        'options': q['options'],
        'correctAnswer': q['correctAnswer'],
        'explanation': q['explanation'],
        'isMulti': q['isMulti']
    }
    
    if enrichment:
        q_obj['title'] = enrichment['title']
        q_obj['hinglishQ'] = enrichment['hinglishQ']
        q_obj['whyCorrect'] = enrichment['whyCorrect']
        q_obj['wrongOptions'] = enrichment['wrongOptions']
        q_obj['examTip'] = enrichment['examTip']
        
    processed_questions.append(q_obj)

js_content = f"""// CCAO-F Complete Enriched Study Data
const CONCEPTS_DATA = {json.dumps(CONCEPTS, ensure_ascii=False, indent=2)};
const QUESTIONS_DATA = {json.dumps(processed_questions, ensure_ascii=False, indent=2)};
"""

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f'Successfully built enriched data.js with {len(processed_questions)} questions across all 10 topics.')
