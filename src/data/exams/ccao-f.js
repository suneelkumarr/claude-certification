// Anthropic Claude Certified Associate — Foundations (CCAO-F)
// Primary Source: ccao-f-questions.json (181 Questions)

export const CONCEPTS_DATA = [
  {
    "id": "prompt-clarity",
    "title": "1. Prompt Clarity & Constraints",
    "subtitle": "Spasht Hidayatein aur Boundings (Audience, Tone, Format, Count)",
    "earlier": [
      4,
      10,
      18,
      20
    ],
    "repeated": [
      28,
      29,
      41,
      47
    ],
    "other": [
      51,
      52,
      53,
      54,
      58,
      60,
      61,
      75,
      77,
      84,
      89,
      96,
      99,
      103,
      111,
      118,
      122,
      132,
      135,
      136,
      140,
      141,
      144,
      147,
      163,
      165,
      170
    ],
    "meaning": "Claude ko hawa mein instruction dene ke bajaye bilkul saaf (clear) shabdon mein Task, Audience, Tone, aur Boundings (limits) dena taaki output 100% predictable aur reliable ho.",
    "beginnerExplanation": "Agar aap Claude ko bologe 'Ek report likho', toh ye ek Vague/Under-specified prompt hai. Claude confuse ho jayega ki kiske liye likhe aur kitna lamba likhe. Iska result ye hota hai ki har run mein alag output aata hai. Jab aap Clear Task, Context (Audience + Goal), aur Explicit Constraints (Exact count, format, tone) dete ho, toh result consistent banta hai.",
    "dailyAnalogy": "Hotel mein 'Kuch tasty khana lao' (vague) bolne par waiter kuch bhi le aayega. Lekin 'Bina pyaaz-lehsun ki dal-tadka aur 2 plain roti lao' (constrained) bologe toh hamesha perfect khana aayega.",
    "masterFormula": "GOOD PROMPT = CLEAR TASK (kya karna hai) + CONTEXT (audience + goal) + CONSTRAINTS (count, tone, format, sections) + DELIVERABLE (output structure)",
    "revisionTable": [
      {
        "concept": "Inconsistent Output",
        "problem": "Under-specified prompt",
        "solution": "Audience, tone, format aur required sections specify karo (Q20)"
      },
      {
        "concept": "Missing Questions",
        "problem": "Weak task statement",
        "solution": "Task statement mein all questions explicitly enumerate karo (Q43, Q105)"
      },
      {
        "concept": "Non-compliant Ideas",
        "problem": "Constraints missing",
        "solution": "Exact count (e.g. 8 ideas) aur categories prompt mein daalo (Q50, Q73)"
      },
      {
        "concept": "Prompt Checklist",
        "problem": "Adding personal fluff",
        "solution": "Sirf Task + Context + Constraints validate karo (Q34, Q77, Q92)"
      }
    ],
    "practicalExample": {
      "bad": "Draft a marketing campaign for product launch.",
      "badReason": "Na budget pata hai, na target audience, na count. Claude randomly kuch bhi 20 generic lines generate kar dega.",
      "good": "Generate exactly 8 campaign ideas for our product launch. Group them across our 4 predefined customer segments (2 ideas per segment). For each idea, specify the budget band (Low, Mid, High) and expected timeline.",
      "goodReason": "Exact count (8), clear segments (4), budget bands define hain. Output 100% structured aur predictable hoga."
    },
    "examRule": "Inconsistency = Under-specification! Missing element = Task statement mein explicitly enumerate karein. Constraints ko clear context aur output boundaries ke sath define karein."
  },
  {
    "id": "context-windows",
    "title": "2. Context Windows & Models",
    "subtitle": "Token Budget aur Model ki Yaad-dasht ki Seema",
    "earlier": [
      7,
      13,
      17,
      26
    ],
    "repeated": [
      42,
      67,
      68,
      71
    ],
    "other": [
      127,
      129,
      134,
      148,
      149,
      150,
      168
    ],
    "meaning": "Context Window ek fixed token budget hota hai jo Claude ek single turn (request-response) mein process kar sakta hai. Isme System prompt, conversation history, attached files aur current user input sab shamil hota hai.",
    "beginnerExplanation": "Context window chats ke beech persist nahi karta. Har session ka ek finite token budget hota hai. Memory Imports ek experimental feature hai — agar imported details gayab hon toh unhe Settings mein manually add karna padta hai.",
    "dailyAnalogy": "Ek desk par ek waqt mein sirf 5 books rakhne ki jagah hai. Nayi book rakhne par purani hatani padegi.",
    "masterFormula": "CONTEXT WINDOW = System Prompt + Conversation History + Attachments + Current Input (Single-turn fixed token limit)",
    "revisionTable": [
      {
        "concept": "Context Window Definition",
        "problem": "Thinking it is unlimited",
        "solution": "Fixed token budget on what Claude can attend to in a single turn (Q16, Q75)"
      },
      {
        "concept": "Memory Imports",
        "problem": "Missing imported context",
        "solution": "Imports are experimental; manual addition in Settings is the fallback (Q30, Q103)"
      },
      {
        "concept": "Model Selection (Opus vs Haiku)",
        "problem": "Using Opus for simple tasks",
        "solution": "Opus for complex deep reasoning (Q5); Haiku for fast, low-cost high volume (Q32, Q98)"
      }
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
    "earlier": [
      14,
      19,
      30,
      73
    ],
    "repeated": [
      79,
      85,
      94,
      102
    ],
    "other": [
      113,
      160,
      162,
      166
    ],
    "meaning": "Claude mein sensitive information (employee salaries, government IDs, credit cards, ongoing investigation details) submit karne se pehle sanitize karna.",
    "beginnerExplanation": "Always follow the 'Minimum Necessary Data' rule. Mixed-sensitivity documents mein pehla step CLASSIFY karna hota hai (kya sensitive hai), fir REDACT karna. Ongoing HR investigations ka data AI mein daalna policy dwara STRICTLY PROHIBITED hota hai — Incognito ya paraphrasing se bypass nahi hota!",
    "dailyAnalogy": "Bank counter par form bharte waqt account number aur name likhte hain, ATM PIN courier ya form par publicly nahi likhte.",
    "masterFormula": "DATA PRIVACY = Classify First ➜ Redact PII/PCI/Salaries ➜ Supply Anonymized Policies/Structure ONLY. (Investigations data = STRICT ESCALATION, NO ENTRY!)",
    "revisionTable": [
      {
        "concept": "Mixed-sensitivity Doc",
        "problem": "Redacting before reading",
        "solution": "First step is always CLASSIFY content (Q18)"
      },
      {
        "concept": "HR Compensation Task",
        "problem": "Pasting named employee salaries",
        "solution": "Redact names and exact figures; supply policy logic only (Q22, Q76)"
      },
      {
        "concept": "Confidential Spreadsheet",
        "problem": "Uploading full file and saying 'ignore'",
        "solution": "Redact or exclude non-required confidential cells (Q66)"
      },
      {
        "concept": "Ongoing Investigation",
        "problem": "Using Incognito or paraphrasing",
        "solution": "Strict ban: Escalate to leadership and do NOT enter into AI (Q26, Q109)"
      }
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
    "earlier": [
      27,
      70
    ],
    "repeated": [
      108,
      181
    ],
    "other": [],
    "meaning": "Multi-tab Excel workbooks, exact statistics, aur charts ke liye Claude ki text generation ke bajaye Python Code Execution environment use karna.",
    "beginnerExplanation": "LLMs text mein zabardast hote hain, par 20,000 rows ya multi-sheet calculation mein arithmetic errors kar sakte hain. Code Execution mein real Python code sandbox mein run hota hai jo exact (deterministic) numbers deta hai, jise human verify karta hai.",
    "dailyAnalogy": "Lakhon rupaye ke GST aur tax calculation zabaani guess karne ke bajaye Tally ya Excel formulas se karna.",
    "masterFormula": "EXACT MATH / MULTI-TAB CSV / SPREADSHEET = Code Execution Sandbox + Human Verification of Results",
    "revisionTable": [
      {
        "concept": "Multi-sheet Spreadsheet",
        "problem": "Asking chat prompt to sum rows",
        "solution": "Code Execution runs actual Python code on uploaded file (Q51, Q86)"
      },
      {
        "concept": "Weekly Sales Stats & Chart",
        "problem": "Asking for text description",
        "solution": "Code Execution generates verifiable numbers and visualizations (Q27)"
      },
      {
        "concept": "CSV Arithmetic Reconciliation",
        "problem": "Relying on LLM arithmetic",
        "solution": "Deterministic sandbox execution avoids calculation hallucination (Q69)"
      }
    ],
    "practicalExample": {
      "bad": "Prompting chat: 'Calculate the total expense across these 5 Excel tabs.'",
      "badReason": "Model can drop rows or miscalculate.",
      "good": "Using Code Execution so Claude runs python script to sum exact columns.",
      "goodReason": "Produces 100% mathematically verifiable totals."
    },
    "examRule": "Deterministic calculations, multi-tab workbooks, exact statistics & charts ke liye Code Execution use karein kyunki LLM linguistic generation math mein drift ho sakti hai."
  },
  {
    "id": "primary-source",
    "title": "5. Primary-Source Verification & Hallucinations",
    "subtitle": "Asli Source se Fact-Check karna aur Hallucination rokna",
    "earlier": [
      3,
      40,
      56,
      83
    ],
    "repeated": [
      88,
      100,
      117,
      130
    ],
    "other": [
      142,
      145,
      178
    ],
    "meaning": "Jab Claude facts introduce kare ya secondary sources mein alag dates hon, toh hamesha Primary Authoritative Source se verify karna.",
    "beginnerExplanation": "Teen blogs ka ek hi baat repeat karna 'proof' nahi hota (Secondary repetition). Asli verification tab hoti hai jab aap primary research study check karein. Agar Claude unsupported claims generate kar raha hai, toh root cause hota hai: prompt mein source boundary constraint missing hona! Aur hallucination suspect ho toh pehla step claim ko LOCALIZE (pinpoint) karna hai.",
    "dailyAnalogy": "Social media rumors ko dekhne ke bajaye court order ya government gazette (Primary Source) check karna.",
    "masterFormula": "VERIFICATION = Primary/Authoritative Source. (Secondary repetition ≠ Verification). HALLUCINATION FIX = Source Boundary Constraint ('use ONLY supplied source'). FIRST STEP = Pinpoint/Localize unsupported claim.",
    "revisionTable": [
      {
        "concept": "Conflicting Dates in Secondary Sources",
        "problem": "Averaging or picking most recent",
        "solution": "Locate primary authoritative source to confirm date (Q33, Q99)"
      },
      {
        "concept": "Unlinked Growth Figures in News",
        "problem": "Accepting because 3 articles agree",
        "solution": "Locate original primary study referenced (Q35, Q78)"
      },
      {
        "concept": "Model Inventing Facts",
        "problem": "Persona forced it",
        "solution": "Prompt lacks constraint to use ONLY facts in supplied source (Q47, Q83)"
      },
      {
        "concept": "Suspected Hallucination",
        "problem": "Discarding entire output immediately",
        "solution": "First pinpoint/localize the specific unsupported claim (Q28)"
      }
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
    "earlier": [
      5,
      16,
      25,
      45
    ],
    "repeated": [
      46,
      50,
      55,
      57
    ],
    "other": [
      63,
      66,
      81,
      82,
      93,
      97,
      107,
      109,
      116,
      123,
      126,
      131,
      157,
      158,
      159,
      169,
      175,
      180
    ],
    "meaning": "Claude Projects mein reusable system instructions, role, tone aur knowledge set karna, aur samay ke sath unhe review karke maintain karna.",
    "beginnerExplanation": "Agar 12 log alag-alag prompts likhenge toh inconsistency aayegi. Project Custom Instructions mein Role, Tone, Required Sections aur Rules lock kar diye jaate hain. Lekin dhyan rahe: 'If it works once, it works forever' ek bohot bada misconception hai! Real world mein policies badalti hain, isliye Projects ko periodically update karna padta hai.",
    "dailyAnalogy": "Company SOP manual: har saal process badalta hai toh manual update karna padta hai, purana manual follow karoge toh galtiyan hongi.",
    "masterFormula": "PROJECT CONSISTENCY = Custom Instructions (Role + Tone + Format + Rules) + Knowledge Sources. MAINTENANCE = Periodic review to prevent configuration drift.",
    "revisionTable": [
      {
        "concept": "Team Consistency (12 users)",
        "problem": "Leaving instructions empty",
        "solution": "Put role, sections, tone and constraints in Project instructions (Q65)"
      },
      {
        "concept": "'Works once, works forever'",
        "problem": "Never updating configurations",
        "solution": "Periodically review & update as real-world policies evolve (Q23, Q106)"
      },
      {
        "concept": "Signal of Project Drift",
        "problem": "Relying on chat volume changes",
        "solution": "Outputs citing retired guides OR users bypassing Project via ad-hoc chats (Q15, Q67, Q110)"
      },
      {
        "concept": "Living Operating Procedure (SOP)",
        "problem": "Copy-pasting in chat transcript",
        "solution": "Use Artifacts for durable, editable, versionable documents (Q36, Q79)"
      }
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
    "earlier": [
      11,
      43
    ],
    "repeated": [
      72,
      114
    ],
    "other": [
      133,
      146
    ],
    "meaning": "Jab lambi chat mein context window bhatak jaye aur model purani baatein repeat karne lage ya latest prompt ignore kare, toh least-disruptive first step lena.",
    "beginnerExplanation": "Lambi chat mein irrelevant history accumulate ho jati hai (Context Degradation). Aise waqt par turant doosre vendor par jump karna ya architecture ko escalate karna overreaction hai. FIRST STEP: Ab tak ke key decisions ko summarize karo aur ek fresh, focused prompt ke sath aage badho!",
    "dailyAnalogy": "Lambi meeting mein jab log mudde se bhatak jayein, toh chair bolta hai: 'Chalo ab tak ki 3 baatein summarize karke agle topic par aate hain.'",
    "masterFormula": "FIRST RECOVERY STEP = Summarize current state/decisions and issue a focused follow-up prompt. (Last resort = Vendor switch or full restart).",
    "revisionTable": [
      {
        "concept": "Conversation Quality Degrades",
        "problem": "Escalating to architect or restarting",
        "solution": "Summarize current state and continue with focused follow-up (Q4)"
      },
      {
        "concept": "Repeating Old Points in Long Chat",
        "problem": "Increasing temperature",
        "solution": "Summarize key decisions so far and re-anchor with fresh prompt (Q62)"
      },
      {
        "concept": "Least Appropriate First Action",
        "problem": "Overreacting immediately",
        "solution": "Immediately replacing Claude with a competitor is LEAST appropriate (Q101)"
      }
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
    "earlier": [
      1,
      6,
      9,
      21
    ],
    "repeated": [
      22,
      31,
      59,
      62
    ],
    "other": [
      74,
      76,
      78,
      80,
      86,
      92,
      95,
      104,
      105,
      115,
      138,
      153,
      171
    ],
    "meaning": "Prompt refinement ka sahi sequence follow karna aur ye samajhna ki prompt iteration kab band karke human review ya different approach par jana hai.",
    "beginnerExplanation": "1) Diagnosis precedes intervention: output kharab ho toh pehle deficiency identify karo, seedha scratch se rewrite mat karo. 2) Targeted fixes: Jo part pass ho gaya usko mat chhedo, sirf concerned issue fix karo. 3) Diminishing returns: 8 baar prompt change karne ke baad bhi plateau hai, toh prompting stop karo aur human review ya new approach lo.",
    "dailyAnalogy": "Khaane mein namak kam hai toh sirf namak daalo (targeted fix), poora khana fek kar dubara banana ya bina taste kiye masale daalna galat hai.",
    "masterFormula": "REFINEMENT = 1. Identify specific deficiencies (Diagnosis) ➜ 2. Targeted fix (preserve accepted parts). PLATEAU = Stop prompting ➜ Move to human review or alternate strategy.",
    "revisionTable": [
      {
        "concept": "Output Doesn't Meet Expectations",
        "problem": "Rewriting entire prompt immediately",
        "solution": "First identify specific weaknesses/deficiencies in current output (Q17, Q70)"
      },
      {
        "concept": "Stakeholder Flags 2 Concerns",
        "problem": "Rewriting prototype from scratch",
        "solution": "Address specific concerns directly; leave accepted parts unchanged (Q14)"
      },
      {
        "concept": "Prompting Plateau (4+ tries)",
        "problem": "Looping continuously",
        "solution": "Recognize diminishing returns; move to human review (Q60, Q95)"
      },
      {
        "concept": "Pilot Success with 2 Opportunities",
        "problem": "Delaying rollout for new full pilot",
        "solution": "Incorporate improvements and proceed to broader rollout with monitoring (Q21, Q74)"
      }
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
    "earlier": [
      12,
      24,
      32,
      33
    ],
    "repeated": [
      35,
      38,
      48,
      64
    ],
    "other": [
      91,
      101,
      120,
      125,
      139,
      143,
      152,
      155,
      167
    ],
    "meaning": "Bade complex workflows ko logically separate deliverables mein todna, aur over-decomposition se flow kharab hone par re-consolidate karna.",
    "beginnerExplanation": "Decomposition kab chahiye? Jab ek request mein multiple distinct deliverables hon (jaise process map + training doc + measurement plan). Agar single coherent deliverable hai toh decomposition ki zarurat nahi hoti. Agar 15 nanhe steps mein tod diya aur output disjointed ho gaya (Over-decomposition), toh related steps ko cohesive sections mein wapas consolidate karo.",
    "dailyAnalogy": "Ghar banane ke alag phases: Foundation, Walls, Roof (good decomposition). Lekin ek-ek int lagane ke liye alag contract banana = over-decomposition.",
    "masterFormula": "DECOMPOSITION TRIGGER = Multiple distinct deliverables / separate quality criteria. OVER-DECOMPOSITION REMEDY = Consolidate related steps into fewer cohesive sections.",
    "revisionTable": [
      {
        "concept": "Multiple Distinct Outputs",
        "problem": "One massive prompt",
        "solution": "Decompose into separate outputs before prompting (Q58, Q93)"
      },
      {
        "concept": "Single Familiar Deliverable",
        "problem": "Decomposing unnecessarily",
        "solution": "Single deliverable can usually be handled in one well-structured prompt (Q102)"
      },
      {
        "concept": "Output Feels Disjointed (15 steps)",
        "problem": "Adding even more steps",
        "solution": "Consolidate related steps into fewer cohesive sections (Q25, Q108)"
      },
      {
        "concept": "200 Weekly Regional Records",
        "problem": "Prose narrative paragraphs",
        "solution": "Structured table with 1 row per record & columns for metrics (Q56, Q91)"
      },
      {
        "concept": "Investor Update Structure",
        "problem": "Chronological narrative",
        "solution": "Lead with headline result ➜ concise drivers ➜ forward outlook (Q48, Q84)"
      }
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
    "earlier": [
      2,
      8,
      15,
      23
    ],
    "repeated": [
      34,
      36,
      37,
      39
    ],
    "other": [
      44,
      49,
      65,
      69,
      87,
      90,
      98,
      106,
      110,
      112,
      119,
      121,
      124,
      128,
      137,
      151,
      154,
      156,
      161,
      164,
      172,
      173,
      174,
      176,
      177,
      179
    ],
    "meaning": "AI Fluency Framework ke teeno core principles (Delegation, Diligence, Description), ethical guardrails aur human accountability ensure karna.",
    "beginnerExplanation": "1) Delegation: Uniquely human capabilities (empathy, judgment) aur risk profile (reversibility x consequence) par depend karta hai. Employment promotion/firing decisions ya binding contracts kabhi AI par nahi chhod sakte! 2) Diligence: Policy compliance ek sustained professional habit hai, one-time onboarding checklist nahi. 3) Description: Capabilities aur limitations dono ko accurately communicate karna. Demographic stereotypes ko data-backed behaviors se replace karo.",
    "dailyAnalogy": "Autopilot plane udayega, par pilot cabin mein rehta hai aur takeoff/landing aur emergency decisions pilot hi leta hai.",
    "masterFormula": "DELEGATION CRITERIA = Need for human empathy/judgment + Reversibility of task & consequence of error. (High stakes = MANDATORY HUMAN ACCOUNTABILITY).",
    "revisionTable": [
      {
        "concept": "Delegation Criteria",
        "problem": "Diagram complexity or seniority",
        "solution": "Human empathy/judgment needed + Reversibility & consequence of error (Q44, Q82)"
      },
      {
        "concept": "Ethical Risks in HR",
        "problem": "Typos or Oxford comma formatting",
        "solution": "Employment decisions without accountability + Systematic bias against protected groups (Q13, Q71)"
      },
      {
        "concept": "External Press Release",
        "problem": "Publishing directly without human review",
        "solution": "High-visibility external comms require human review and approval (Q96)"
      },
      {
        "concept": "Demographic Generalization in Brief",
        "problem": "Adding disclaimer or keeping it",
        "solution": "Revise to focus on observed data-backed behaviors (Q24, Q107)"
      },
      {
        "concept": "AI Fluency - Description",
        "problem": "Hiding limits or overselling",
        "solution": "Balanced framing: reliable capabilities + known limits + human oversight (Q9, Q38, Q72)"
      },
      {
        "concept": "AI Fluency - Diligence",
        "problem": "Treating policy as one-time onboarding",
        "solution": "Sustained professional habit of aligning practice with policy and closing gaps (Q31, Q97)"
      }
    ],
    "practicalExample": {
      "bad": "Using Claude to rank employees and automatically issue termination letters.",
      "badReason": "Catastrophic ethical and legal violation of human accountability.",
      "good": "Claude synthesizes themes from approved customer feedback or drafts an internal training guide for human review.",
      "goodReason": "Human supervised, low risk, human retains decision authority."
    },
    "examRule": "High stakes (employment, legal commitments, medical diagnosis, external press release) = Mandatory human sign-off! Diligence = Ongoing habit, not one-time check!"
  }
];

export const QUESTIONS_DATA = [
  {
    "num": 1,
    "conceptId": "iteration-diminishing",
    "question": "You are a Claude associate troubleshooting a recurring poor output. Which is the correct order of diagnostic steps? (1) Form a hypothesis about which prompt element most likely caused the deficiency. (2) Apply a single targeted change and observe the effect on the output. (3) Read the output end to end and identify the specific deficiency. (4) Compare the deficient output to the prompt to spot mismatches between input and output. (5) Document the root cause and the resolution for future reference.",
    "options": {
      "A": "1, 3, 4, 2, 5",
      "B": "4, 3, 1, 2, 5",
      "C": "3, 1, 4, 2, 5",
      "D": "3, 4, 1, 2, 5"
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D - Under the objective Identify, diagnose, and resolve issues with underperforming prompts and/or poor outputs (Domain 7: Troubleshooting and Optimization), troubleshooting follows a structured diagnostic protocol. The troubleshooting sequence begins with symptom identification: reading the output end-to-end to categorize the exact flaw (e.g., factual error, structural omission, tone mismatch) (Step 3). Second, the practitioner performs an input-output diff: comparing the deficient output against the prompt instructions to spot instruction omissions or ambiguities (Step 4). Third, the practitioner forms a testable hypothesis regarding which prompt element caused the failure (Step 1). Fourth, they execute a controlled experiment by applying a single targeted prompt adjustment and observing the revised output (Step 2). Finally, they document the verified root cause and solution (Step 5). This establishes the order 3, 4, 1, 2, 5 .",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D - Under the objective Identify, diagnose, and resolve issues with underperforming prompts and/or poor outputs (Domain 7: Troubleshooting and Optimization), troubleshooting follows a structured diagnostic protocol. The troubleshooting sequence begins with symptom identification: reading the output end-to-end to categorize the exact flaw (e.g., factual error, structural omission, tone mismatch) (Step 3). Second, the practitioner performs an input-output diff: comparing the deficient output against the prompt instructions to spot instruction omissions or ambiguities (Step 4). Third, the practitioner forms a testable hypothesis regarding which prompt element caused the failure (Step 1). Fourth, they execute a controlled experiment by applying a single targeted prompt adjustment and observing the revised output (Step 2). Finally, they document the verified root cause and solution (Step 5). This establishes the order 3, 4, 1, 2, 5 . Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'1, 3, 4, 2, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'4, 3, 1, 2, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'3, 1, 4, 2, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D - Under the objective Identify, diagnose, and resolve issues with underperforming prompts and/or poor outputs (Domain 7: Troubleshooting and Optimization), troubleshooting follows a structured diagnostic protocol."
  },
  {
    "num": 2,
    "conceptId": "human-oversight",
    "question": "You are a project manager reviewing stakeholder messages that teammates have drafted about Claude’s role in a workflow. Which two messages are appropriate for stakeholder communication about Claude? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "A claim that Claude will handle every task without any human involvement.",
      "B": "A claim that the model never makes errors and requires no quality review.",
      "C": "An honest description of where Claude assists and where humans retain decisions.",
      "D": "A clear statement of the limits and known failure modes of the integration.",
      "E": "A vague reassurance that 'the AI is taking care of it' without further detail."
    },
    "correctAnswer": "C, D",
    "explanation": "Honest description of Claude's role and clear statement of limits/failure modes are appropriate for stakeholder communication.",
    "isMulti": true,
    "whyCorrect": "Honest description of Claude's role and clear statement of limits/failure modes are appropriate for stakeholder communication. Isiliye correct answer C, D hai.",
    "wrongOptions": {
      "A": "'A claim that Claude will handle every task without any human...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'A claim that the model never makes errors and requires no qu...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'A vague reassurance that 'the AI is taking care of it' witho...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Honest description of Claude's role and clear statement of limits/failure modes are appropriate for stakeholder communication."
  },
  {
    "num": 3,
    "conceptId": "primary-source",
    "question": "You are reviewing a Claude-generated competitor brief for unsupported claims. Which is the correct order of review steps? (1) Cross-check each specific claim against the supplied source material or trusted external references. (2) Decide whether to correct, re-prompt, or escalate based on findings. (3) Document each unsupported or inconsistent claim with location and severity. (4) Identify the specific factual claims, statistics, and citations in the brief. (5) Read the brief end to end and flag any claims that feel surprising.",
    "options": {
      "A": "1, 4, 5, 3, 2",
      "B": "4, 5, 1, 3, 2",
      "C": "5, 1, 4, 3, 2",
      "D": "5, 4, 1, 3, 2"
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D (Official ExamTopics Suggested Answer)",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D (Official ExamTopics Suggested Answer) Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'1, 4, 5, 3, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'4, 5, 1, 3, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'5, 1, 4, 3, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D (Official ExamTopics Suggested Answer)."
  },
  {
    "num": 4,
    "conceptId": "prompt-clarity",
    "question": "A marketing manager is preparing a constrained brainstorming task: produce ten campaign ideas, each tied to a stated audience segment and each fitting one of three defined budget bands. Which prompting approach fits the task?",
    "options": {
      "A": "Ask Claude for ten distinct ideas, stating the audience constraints in the prompt and leaving the budget unconstrained so creativity is not limited at the ideation stage.",
      "B": "Ask Claude for ten distinct ideas with the audience and budget constraints stated in the prompt, and require each idea to name which audience and budget band it addresses.",
      "C": "Ask Claude for thirty ideas with the audience and budget constraints stated in the prompt, then keep the strongest ten so a wider initial pool produces stronger finalists.",
      "D": "Ask Claude for ten distinct ideas without budget constraints, then filter the output afterward to keep only the ideas that fit the three budget bands."
    },
    "correctAnswer": "B",
    "explanation": "The correct answer is B: B. Ask Claude for ten distinct ideas with the audience and budget constraints stated in the prompt, and require each idea to name which audience and budget band it addresses..",
    "isMulti": false,
    "whyCorrect": "The correct answer is B: B. Ask Claude for ten distinct ideas with the audience and budget constraints stated in the prompt, and require each idea to name which audience and budget band it addresses.. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Ask Claude for ten distinct ideas, stating the audience cons...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask Claude for thirty ideas with the audience and budget con...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ask Claude for ten distinct ideas without budget constraints...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is B: B."
  },
  {
    "num": 5,
    "conceptId": "project-config",
    "question": "A learning specialist is configuring a Project for course-design work. Their organization has an internal instructional-design standard and a preferred output structure for lesson outlines. Which custom-instruction set best supports this use case?",
    "options": {
      "A": "Name Claude's role as a course designer, require alignment with the organization's instructional-design standards, and specify the preferred output structure for lesson outlines.",
      "B": "Name Claude's role as a course designer and require alignment with the organization's instructional- design standards; leave the output structure to Claude based on each lesson's topic.",
      "C": "Specify only the preferred output structure for lesson outlines, since the structure carries the standards implicitly and naming the role adds no value.",
      "D": "Name Claude's role as a course designer; let each chat prompt specify the standards and output structure for that lesson, since lessons vary widely."
    },
    "correctAnswer": "A",
    "explanation": "The correct answer is A: A. Name Claude's role as a course designer, require alignment with the organization's instructional-design standards, and specify the preferred output structure for lesson outlines..",
    "isMulti": false,
    "whyCorrect": "The correct answer is A: A. Name Claude's role as a course designer, require alignment with the organization's instructional-design standards, and specify the preferred output structure for lesson outlines.. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Name Claude's role as a course designer and require alignmen...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Specify only the preferred output structure for lesson outli...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Name Claude's role as a course designer; let each chat promp...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is A: A."
  },
  {
    "num": 6,
    "conceptId": "iteration-diminishing",
    "question": "You are designing a checklist for evaluating Claude outputs and must complete the upstream steps before scoring an output. Which two steps must be completed BEFORE scoring a Claude output against the checklist? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Promote the approved output into the downstream production process.",
      "B": "Define the evaluation criteria that matter for the task at hand.",
      "C": "Specify the threshold that distinguishes acceptable from unacceptable output.",
      "D": "Forward unacceptable outputs to a senior reviewer for second-pass review.",
      "E": "Document the final score and the reviewer comments for the audit trail."
    },
    "correctAnswer": "B, C",
    "explanation": "Before scoring, define evaluation criteria (B) and specify the acceptable/unacceptable threshold (C).",
    "isMulti": true,
    "whyCorrect": "Before scoring, define evaluation criteria (B) and specify the acceptable/unacceptable threshold (C). Isiliye correct answer B, C hai.",
    "wrongOptions": {
      "A": "'Promote the approved output into the downstream production p...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Forward unacceptable outputs to a senior reviewer for second...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Document the final score and the reviewer comments for the a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Before scoring, define evaluation criteria (B) and specify the acceptable/unacceptable threshold (C)."
  },
  {
    "num": 7,
    "conceptId": "context-windows",
    "question": "You are a business analyst deciding which output formatting and context-window practices to recommend to teammates. Which two practices represent effective use of the context window? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Reuse the same context block across multiple requests to avoid rebuilding it each time.",
      "B": "Paste full email threads related to the project into the context so the model has the complete conversational history.",
      "C": "Concatenate all source documents end-to-end with no separators between them.",
      "D": "Trim irrelevant material before submitting the request to keep the context focused.",
      "E": "Use clear section headers to separate different parts of the input material."
    },
    "correctAnswer": "D, E",
    "explanation": "Trimming irrelevant material (D) and using clear section headers (E) are effective context-window practices.",
    "isMulti": true,
    "whyCorrect": "Trimming irrelevant material (D) and using clear section headers (E) are effective context-window practices. Isiliye correct answer D, E hai.",
    "wrongOptions": {
      "A": "'Reuse the same context block across multiple requests to avo...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Paste full email threads related to the project into the con...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Concatenate all source documents end-to-end with no separato...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Trimming irrelevant material (D) and using clear section headers (E) are effective context-window practices."
  },
  {
    "num": 8,
    "conceptId": "human-oversight",
    "question": "Preparing an AI-assisted work product for external delivery, a senior manager is applying the AI Fluency Framework Diligence competency. Which step best reflects Diligence principles?",
    "options": {
      "A": "Deliver the work product without independent verification on the basis that AI assistance shifts accountability away from the human, even though Diligence holds the human fully accountable for the output.",
      "B": "Delegate accountability for the AI-assisted work product to Claude itself rather than retaining it as a human obligation, contrary to the Diligence principle that humans remain accountable for AI-assisted outputs.",
      "C": "Skip verification of any element on the assumption that fluent output implies accuracy, even though Diligence requires the human to verify and correct AI-assisted outputs before they are acted upon.",
      "D": "Identify the elements of the work product that must be independently verified or corrected before delivery, and take ownership of those verifications as a professional accountability obligation."
    },
    "correctAnswer": "D",
    "explanation": "Diligence requires the human to identify elements needing independent verification and take ownership of those verifications as a professional accountability obligation before external delivery.",
    "isMulti": false,
    "whyCorrect": "Diligence requires the human to identify elements needing independent verification and take ownership of those verifications as a professional accountability obligation before external delivery. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Deliver the work product without independent verification on...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Delegate accountability for the AI-assisted work product to ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Skip verification of any element on the assumption that flue...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Diligence requires the human to identify elements needing independent verification and take ownership of those verifications as a professional accountability obligation before external delivery."
  },
  {
    "num": 9,
    "conceptId": "iteration-diminishing",
    "question": "You are reviewing claims about prompt iteration that colleagues have made in a recent training. Which two claims about prompt iteration are accurate? (Choose two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "Repeated resubmission of the same prompt is the most reliable way to improve output.",
      "B": "Output comparison against original criteria validates whether iteration helped.",
      "C": "Iteration is most productive when each change targets a specific diagnosed weakness.",
      "D": "Iteration should stop only after every possible alternative phrasing has been tried.",
      "E": "More iterations always produce a better output regardless of what was changed."
    },
    "correctAnswer": "B",
    "explanation": "Discussion:\nSelected Answer: BC We should iteration when ever required. upvoted 1 time Submit Cancel\n\n---\n\nWe should iteration when ever required.",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: BC We should iteration when ever required. upvoted 1 time Submit Cancel\n\n---\n\nWe should iteration when ever required. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Repeated resubmission of the same prompt is the most reliabl...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Iteration is most productive when each change targets a spec...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Iteration should stop only after every possible alternative ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'More iterations always produce a better output regardless of...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: BC We should iteration when ever required."
  },
  {
    "num": 10,
    "conceptId": "prompt-clarity",
    "question": "A Claude associate is reviewing a Claude-drafted set of customer-segment descriptions for an internal marketing brief. One description applies a generalization about a demographic group’s purchasing behavior that does not hold for individual customers in the segment. Which response is most appropriate?",
    "options": {
      "A": "Revise the description to focus on observed behaviors rather than generalizations about people, and validate the revision against actual customer data.",
      "B": "Remove the entire customer-segment description from the brief, since any segmentation that involves demographic characteristics is likely to introduce similar issues.",
      "C": "Keep the description as written for the internal brief, since internal use does not carry the same risk as external publication of demographic generalizations.",
      "D": "Add a disclaimer to the description, noting that the generalization may not apply to all individuals in the segment, and keep the underlying description unchanged."
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D Claude does not change the outcome for single customer that too considering its marketing upvoted 1 time Submit Cancel\n\n---\n\nClaude does not change the outcome for single customer that too considering its marketing\n\n---\n\nSelected Answer: D adding disclaimer helps in this case. upvoted 2 times Submit Cancel\n\n---\n\nadding disclaimer helps in this case.",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D Claude does not change the outcome for single customer that too considering its marketing upvoted 1 time Submit Cancel\n\n---\n\nClaude does not change the outcome for single customer that too considering its marketing\n\n---\n\nSelected Answer: D adding disclaimer helps in this case. upvoted 2 times Submit Cancel\n\n---\n\nadding disclaimer helps in this case. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Revise the description to focus on observed behaviors rather...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Remove the entire customer-segment description from the brie...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Keep the description as written for the internal brief, sinc...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D Claude does not change the outcome for single customer that too considering its marketing upvoted 1 time Submit Cancel\n\n---\n\nClaude does not change the outcome for single customer that too considering its marketing\n\n---\n\nSelected Answer: D adding disclaimer helps in this case."
  },
  {
    "num": 11,
    "conceptId": "degraded-conversations",
    "question": "An analyst is working in a long Claude conversation. The conversation contains roughly 60 turns covering an initial requirements analysis, several rounds of data review, and a current drafting phase. Recent responses have started to drift from the agreed requirements. Which step most directly addresses the drift while preserving the analyst's progress?",
    "options": {
      "A": "Switch the conversation to a model with a larger context window so the accumulated history no longer causes drift, and continue without restructuring the inputs.",
      "B": "Open a new chat and paste only the current draft, then continue refining it there without the prior requirements and data-review context.",
      "C": "Move the source data and requirements into a Project knowledge base, then continue the drafting work in a new chat inside that Project.",
      "D": "Summarize the agreed requirements, key data findings, and current draft state, then continue in the same chat by reasserting the summary as the working context."
    },
    "correctAnswer": "D",
    "explanation": "The correct answer is D: D. Summarize the agreed requirements, key data findings, and current draft state, then continue in the same chat by reasserting the summary as the working context..",
    "isMulti": false,
    "whyCorrect": "The correct answer is D: D. Summarize the agreed requirements, key data findings, and current draft state, then continue in the same chat by reasserting the summary as the working context.. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Switch the conversation to a model with a larger context win...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Open a new chat and paste only the current draft, then conti...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Move the source data and requirements into a Project knowled...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is D: D."
  },
  {
    "num": 12,
    "conceptId": "workflow-decomposition",
    "question": "You are running an optimization pass on a recurring workflow. Which is the correct order of optimization steps? (1) Apply targeted optimization to the bottleneck step (2) Roll out the optimized workflow to the broader team and document the change (3) Identify the bottleneck step using measured time per step and queue length (4) Map the current workflow steps, owners, and decision points (5) Pilot the change with a small group and measure the effect against the prior baseline",
    "options": {
      "A": "4, 1, 3, 5, 2",
      "B": "4, 3, 1, 5, 2",
      "C": "3, 4, 1, 5, 2",
      "D": "1, 4, 3, 5, 2"
    },
    "correctAnswer": "B",
    "explanation": "Discussion:\nSelected Answer: B (Official ExamTopics Suggested Answer)",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: B (Official ExamTopics Suggested Answer) Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'4, 1, 3, 5, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'3, 4, 1, 5, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'1, 4, 3, 5, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: B (Official ExamTopics Suggested Answer)."
  },
  {
    "num": 13,
    "conceptId": "context-windows",
    "question": "You are a customer-success lead running an interactive workflow where each turn must respond quickly and the per-turn reasoning is light. Which selection best aligns to the requirements?",
    "options": {
      "A": "Choose any model because latency does not vary by model.",
      "B": "Choose Haiku to keep latency low and to handle a light reasoning load efficiently at scale.",
      "C": "Choose Opus to maximize reasoning depth despite higher latency.",
      "D": "Choose a model based on the alphabetical order of its name."
    },
    "correctAnswer": "B",
    "explanation": "Discussion:\nSelected Answer: B Haiku is a lightweight model where it can provide response quickly &lt;img src=x onerror=alert(1)&gt; upvoted 2 times Submit Cancel\n\n---\n\nHaiku is a lightweight model where it can provide response quickly &lt;img src=x onerror=alert(1)&gt;\n\n---\n\nSelected Answer: B Haiku goes well when the volume of data is high, and reasoning is little and less complex. upvoted 1 time Submit Cancel\n\n---\n\nHaiku goes well when the volume of data is high, and reasoning is little and less complex.",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: B Haiku is a lightweight model where it can provide response quickly &lt;img src=x onerror=alert(1)&gt; upvoted 2 times Submit Cancel\n\n---\n\nHaiku is a lightweight model where it can provide response quickly &lt;img src=x onerror=alert(1)&gt;\n\n---\n\nSelected Answer: B Haiku goes well when the volume of data is high, and reasoning is little and less complex. upvoted 1 time Submit Cancel\n\n---\n\nHaiku goes well when the volume of data is high, and reasoning is little and less complex. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Choose any model because latency does not vary by model.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Choose Opus to maximize reasoning depth despite higher laten...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Choose a model based on the alphabetical order of its name.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: B Haiku is a lightweight model where it can provide response quickly &lt;img src=x onerror=alert(1)&gt; upvoted 2 times Submit Cancel\n\n---\n\nHaiku is a lightweight model where it can provide response quickly &lt;img src=x onerror=alert(1)&gt;\n\n---\n\nSelected Answer: B Haiku goes well when the volume of data is high, and reasoning is little and less complex."
  },
  {
    "num": 14,
    "conceptId": "data-privacy",
    "question": "A knowledge worker notices that a Claude output may have repeated a confidential financial figure from an internal source that the user was told to treat as restricted. The output has not yet been shared outside the user. Which immediate action is most appropriate?",
    "options": {
      "A": "Stop using the output, document the issue-including the prompt and the source-and report it through the documented governance or incident channel.",
      "B": "Edit the output to remove the figure, save the edited version for the intended use, and document the change in a personal log without involving the governance channel.",
      "C": "Stop using the output and start a new chat with a more carefully scoped prompt, since the issue is resolved as long as the original output is not used.",
      "D": "Continue using the output for the intended internal purpose, since the figure has not left the user's possession and no external disclosure has occurred."
    },
    "correctAnswer": "A",
    "explanation": "The correct answer is A: A. Stop using the output, document the issue-including the prompt and the source-and report it through the documented governance or incident channel..",
    "isMulti": false,
    "whyCorrect": "The correct answer is A: A. Stop using the output, document the issue-including the prompt and the source-and report it through the documented governance or incident channel.. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Edit the output to remove the figure, save the edited versio...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Stop using the output and start a new chat with a more caref...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Continue using the output for the intended internal purpose,...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is A: A."
  },
  {
    "num": 15,
    "conceptId": "human-oversight",
    "question": "As part of a workflow redesign, a process analyst is applying the AI Fluency Framework Delegation competency. Which two criteria most directly inform Delegation decisions? (Choose two.)",
    "options": {
      "A": "The reversibility of the task and the consequence of an error, which together indicate whether the step is safe to delegate to Claude or should be retained for human decision-making.",
      "B": "The need for human creativity, empathy, or judgment in the step, which indicates whether the task is appropriate for AI delegation or requires the human capabilities Claude cannot provide.",
      "C": "The visual complexity of the workflow diagram, since steps with more connections and dependencies are more likely to require human oversight.",
      "D": "The seniority of the team member who currently performs the step, since more senior roles typically involve higher-stakes tasks that warrant human retention.",
      "E": "The length of time the workflow has existed in its current form, since well-established processes have been sufficiently validated for AI delegation."
    },
    "correctAnswer": "A, B",
    "explanation": "Delegation decisions are informed by: (A) the reversibility of the task and consequence of error, indicating safety of delegation; and (B) the need for human creativity, empathy, or judgment that Claude cannot provide.",
    "isMulti": true,
    "whyCorrect": "Delegation decisions are informed by: (A) the reversibility of the task and consequence of error, indicating safety of delegation; and (B) the need for human creativity, empathy, or judgment that Claude cannot provide. Isiliye correct answer A, B hai.",
    "wrongOptions": {
      "C": "'The visual complexity of the workflow diagram, since steps w...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The seniority of the team member who currently performs the ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'The length of time the workflow has existed in its current f...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Delegation decisions are informed by: (A) the reversibility of the task and consequence of error, indicating safety of delegation; and (B) the need for human creativity, empathy, or judgment that Claude cannot provide."
  },
  {
    "num": 16,
    "conceptId": "project-config",
    "question": "A Claude associate is evaluating whether to enable a Skill that was provided by an unfamiliar third party. Which two checks best support a sound trust decision? (Choose two.)",
    "options": {
      "A": "Verify the source of the Skill against the organization’s approved-Skill list before enabling it within claude.ai or any Project the team uses for its work.",
      "B": "Treat the Skill's appearance in a public listing as sufficient validation, without confirming the source, the requested permissions, or alignment with the organization’s approved-Skill list.",
      "C": "Skip permission review on the assumption that the Skill cannot exceed the boundaries of the workflow, even though Skills can request access that the task does not require.",
      "D": "Review the permissions and capabilities the Skill requests and confirm that the requested access is appropriate for the task the Skill is intended to perform.",
      "E": "Enable the Skill immediately on the basis of strong external reviews, even though the source has not been validated against the organization’s approved-Skill list and the permissions remain unverified."
    },
    "correctAnswer": "A, D",
    "explanation": "Verify the Skill source against the organization's approved-Skill list (A) and review the permissions and capabilities the Skill requests to confirm appropriateness (D).",
    "isMulti": true,
    "whyCorrect": "Verify the Skill source against the organization's approved-Skill list (A) and review the permissions and capabilities the Skill requests to confirm appropriateness (D). Isiliye correct answer A, D hai.",
    "wrongOptions": {
      "B": "'Treat the Skill's appearance in a public listing as sufficie...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Skip permission review on the assumption that the Skill cann...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Enable the Skill immediately on the basis of strong external...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Verify the Skill source against the organization's approved-Skill list (A) and review the permissions and capabilities the Skill requests to confirm appropriateness (D)."
  },
  {
    "num": 17,
    "conceptId": "context-windows",
    "question": "You are a research associate preparing inputs for a long task that references two lengthy regulatory documents, but only specific sections apply. Which approach best preserves context-window capacity?",
    "options": {
      "A": "Skip the documents entirely and rely on Claude to invent the missing context.",
      "B": "Split each document into one-character pieces and feed them one at a time.",
      "C": "Extract only the relevant sections from each document and include those, omitting unrelated chapters.",
      "D": "Paste the full text of both documents without trimming to maximize available material."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C (Official ExamTopics Suggested Answer)",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C (Official ExamTopics Suggested Answer) Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Skip the documents entirely and rely on Claude to invent the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Split each document into one-character pieces and feed them ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Paste the full text of both documents without trimming to ma...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C (Official ExamTopics Suggested Answer)."
  },
  {
    "num": 18,
    "conceptId": "prompt-clarity",
    "question": "You are a project lead reviewing a teammate’s habit of using the same prompt template for every task regardless of type. Which feedback is most warranted?",
    "options": {
      "A": "The prompting strategy should be adapted to each task type because one template does not produce equally strong outputs across all tasks.",
      "B": "The prompting strategy should not change between tasks because adapting it wastes time and adds no value.",
      "C": "The habit is ideal because a single template guarantees consistent quality across all task types.",
      "D": "Task type has no effect on the appropriate prompting strategy."
    },
    "correctAnswer": "A",
    "explanation": "Prompting strategy should be adapted to each task type because different tasks benefit from different approaches.",
    "isMulti": false,
    "whyCorrect": "Prompting strategy should be adapted to each task type because different tasks benefit from different approaches. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'The prompting strategy should not change between tasks becau...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The habit is ideal because a single template guarantees cons...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Task type has no effect on the appropriate prompting strateg...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Prompting strategy should be adapted to each task type because different tasks benefit from different approaches."
  },
  {
    "num": 19,
    "conceptId": "data-privacy",
    "question": "You are an HR specialist reviewing data items proposed for inclusion in a Claude prompt. Which two data items are appropriate to include in a Claude prompt for a routine task? (Choose two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "a redacted job description that the model will adapt for a posting",
      "B": "accommodation request notes from an employee’s HR file needed to draft a role adjustment memo",
      "C": "employee ID numbers and hire dates for the team roster included to help Claude personalize onboarding communications",
      "D": "a compensation band summary that includes employee names and current salary figures for a specific team",
      "E": "an anonymized summary of an HR policy that the model will rephrase"
    },
    "correctAnswer": "A, B",
    "explanation": "Redacted job descriptions (A) and anonymized HR policy summaries (B) are appropriate for inclusion. Sensitive personal data like accommodation notes, salary figures, and employee IDs must not be included in prompts.",
    "isMulti": true,
    "whyCorrect": "Redacted job descriptions (A) and anonymized HR policy summaries (B) are appropriate for inclusion. Sensitive personal data like accommodation notes, salary figures, and employee IDs must not be included in prompts. Isiliye correct answer A, B hai.",
    "wrongOptions": {
      "C": "'employee ID numbers and hire dates for the team roster inclu...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'a compensation band summary that includes employee names and...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'an anonymized summary of an HR policy that the model will re...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Redacted job descriptions (A) and anonymized HR policy summaries (B) are appropriate for inclusion."
  },
  {
    "num": 20,
    "conceptId": "prompt-clarity",
    "question": "A knowledge worker is defining what \"workflow optimization\" means at the Associate level for the team's recurring AI-supported workflows. Which description is most accurate?",
    "options": {
      "A": "Reducing the number of steps in the workflow to the smallest possible count, since fewer steps mean faster cycle time and lower error rates.",
      "B": "Reducing redundancy, removing low-value steps, and applying Claude where it adds measurable value, while keeping required reviews and quality gates.",
      "C": "Replacing manual steps with Claude-supported steps wherever possible, since each replacement adds value by reducing the time the team spends on the workflow.",
      "D": "Standardizing every step of the workflow to a fixed template so each run produces identical output, without adjusting for variation in the workflow's inputs."
    },
    "correctAnswer": "B",
    "explanation": "The correct answer is B: B. Reducing redundancy, removing low-value steps, and applying Claude where it adds measurable value, while keeping required reviews and quality gates..",
    "isMulti": false,
    "whyCorrect": "The correct answer is B: B. Reducing redundancy, removing low-value steps, and applying Claude where it adds measurable value, while keeping required reviews and quality gates.. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Reducing the number of steps in the workflow to the smallest...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Replacing manual steps with Claude-supported steps wherever ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Standardizing every step of the workflow to a fixed template...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is B: B."
  },
  {
    "num": 21,
    "conceptId": "iteration-diminishing",
    "question": "The first output from Claude is partially useful but has tone and detail issues. Which two refinement actions are most likely to produce a meaningfully better output? (Choose two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "Provide an example of an output that meets the desired standard.",
      "B": "Append the phrase “please do better” to the end of the original prompt.",
      "C": "Add a specific tone descriptor and a concrete audience to the prompt.",
      "D": "Increase the temperature setting and resubmit the unchanged prompt.",
      "E": "Resubmit the same prompt several times and select the best response."
    },
    "correctAnswer": "A, C",
    "explanation": "Providing an example of desired output (A) sets clear expectations, and adding specific tone descriptor and concrete audience (C) provides crucial framing for better-aligned responses.",
    "isMulti": true,
    "whyCorrect": "Providing an example of desired output (A) sets clear expectations, and adding specific tone descriptor and concrete audience (C) provides crucial framing for better-aligned responses. Isiliye correct answer A, C hai.",
    "wrongOptions": {
      "B": "'Append the phrase “please do better” to the end of the origi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Increase the temperature setting and resubmit the unchanged ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Resubmit the same prompt several times and select the best r...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Providing an example of desired output (A) sets clear expectations, and adding specific tone descriptor and concrete audience (C) provides crucial framing for better-aligned responses."
  },
  {
    "num": 22,
    "conceptId": "iteration-diminishing",
    "question": "You are reviewing colleagues’ responses to feedback received on Claude-drafted communications. Which two feedback responses are productive? (Choose two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "declining to revise sections that were generated by Claude on the basis that the model’s output should be trusted as written",
      "B": "incorporating all feedback received, including contradictory suggestions, into the next draft simultaneously",
      "C": "deferring all feedback to a later revision cycle to avoid disrupting the current draft’s consistency",
      "D": "asking clarifying questions when feedback is ambiguous before acting on it",
      "E": "mapping each piece of feedback to the specific change made in the next draft"
    },
    "correctAnswer": "D, E",
    "explanation": "Asking clarifying questions when feedback is ambiguous (D) and mapping each piece of feedback to the specific change made in the next draft (E) are productive feedback response practices.",
    "isMulti": true,
    "whyCorrect": "Asking clarifying questions when feedback is ambiguous (D) and mapping each piece of feedback to the specific change made in the next draft (E) are productive feedback response practices. Isiliye correct answer D, E hai.",
    "wrongOptions": {
      "A": "'declining to revise sections that were generated by Claude o...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'incorporating all feedback received, including contradictory...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'deferring all feedback to a later revision cycle to avoid di...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Asking clarifying questions when feedback is ambiguous (D) and mapping each piece of feedback to the specific change made in the next draft (E) are productive feedback response practices."
  },
  {
    "num": 23,
    "conceptId": "human-oversight",
    "question": "A project manager is defining how Claude can support requirements analysis for an upcoming engagement. Their team will conduct stakeholder interviews and review existing process documentation as part of discovery. Which activity fits this domain?",
    "options": {
      "A": "Use Claude to generate a complete requirements list from the project name and a short description, since requirements for similar engagements are largely standard.",
      "B": "Use Claude to prioritize the requirements the team has already gathered, leaving the gathering itself to manual analyst work since prioritization is more time-consuming.",
      "C": "Use Claude to synthesize stakeholder inputs and existing process documentation into a structured list of requirements with traceability to each source.",
      "D": "Use Claude to conduct the stakeholder interviews directly, with the analyst reviewing the recordings afterward to confirm the requirements Claude extracted."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C (Official ExamTopics Suggested Answer)",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C (Official ExamTopics Suggested Answer) Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Use Claude to generate a complete requirements list from the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Use Claude to prioritize the requirements the team has alrea...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Use Claude to conduct the stakeholder interviews directly, w...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C (Official ExamTopics Suggested Answer)."
  },
  {
    "num": 24,
    "conceptId": "workflow-decomposition",
    "question": "An account manager has used Claude to extract requirements from stakeholder notes. Three requirements appear to conflict: two stakeholders specified mutually exclusive workflow steps, and a third requirement assumes an outcome the first two would prevent. Which step is most appropriate?",
    "options": {
      "A": "Present all three conflicting requirements as alternative options in the requirements document, leaving the resolution to the project’s decision-making process later.",
      "B": "Apply Claude to propose a compromise wording for each conflict and submit the compromise to stakeholders as the proposed resolution.",
      "C": "Select the requirement that has the strongest business justification in the source notes, set the conflicting requirements aside, and proceed with the selected one.",
      "D": "Flag the conflicts in the requirements document, document the source for each side, and route the conflicts back to the originating stakeholders for resolution."
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D (Official ExamTopics Suggested Answer)",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D (Official ExamTopics Suggested Answer) Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Present all three conflicting requirements as alternative op...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Apply Claude to propose a compromise wording for each confli...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Select the requirement that has the strongest business justi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D (Official ExamTopics Suggested Answer)."
  },
  {
    "num": 25,
    "conceptId": "project-config",
    "question": "You are a marketing manager deciding what to include in custom instructions for a writing-focused Project. Which two items belong in the custom instructions? (Select two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "The prompt author's preferred response length for internal messages unrelated to external deliverables.",
      "B": "The standard structure and length expectations for typical deliverables.",
      "C": "The brand voice and tonal expectations the writing must follow.",
      "D": "The preferred writing style of the marketing manager who will review all final deliverables.",
      "E": "A representative sample of past writing that reflects the team's preferred style and structure."
    },
    "correctAnswer": "B, C",
    "explanation": "Correct answers: B, C. B. The standard structure and length expectations for typical deliverables.; C. The brand voice and tonal expectations the writing must follow..",
    "isMulti": true,
    "whyCorrect": "Correct answers: B, C. B. The standard structure and length expectations for typical deliverables.; C. The brand voice and tonal expectations the writing must follow.. Isiliye correct answer B, C hai.",
    "wrongOptions": {
      "A": "'The prompt author's preferred response length for internal m...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The preferred writing style of the marketing manager who wil...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'A representative sample of past writing that reflects the te...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct answers: B, C."
  },
  {
    "num": 26,
    "conceptId": "context-windows",
    "question": "A knowledge worker is explaining the cost, speed, and quality trade-offs across Claude models to a colleague. Which generalization correctly describes the trade-off?",
    "options": {
      "A": "Speed and rate-limit consumption are independent of model capability; the difference between Haiku, Sonnet, and Opus is reasoning depth alone.",
      "B": "More capable models generally consume more of the rate limit and run more slowly, while lighter models are faster and consume less of the rate limit.",
      "C": "More capable models generally consume less of the rate limit because their reasoning is more efficient, even though they run more slowly than lighter models.",
      "D": "Lighter models consume more of the rate limit per request than more capable models, since lighter models require multiple passes to match heavier-model quality."
    },
    "correctAnswer": "B",
    "explanation": "Discussion:\nSelected Answer: B (Official ExamTopics Suggested Answer)",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: B (Official ExamTopics Suggested Answer) Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Speed and rate-limit consumption are independent of model ca...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'More capable models generally consume less of the rate limit...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Lighter models consume more of the rate limit per request th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: B (Official ExamTopics Suggested Answer)."
  },
  {
    "num": 27,
    "conceptId": "code-execution",
    "question": "A finance manager must select a Claude feature for a task that requires deterministic calculations across a multi-tab spreadsheet. Which selection best fits the requirement?",
    "options": {
      "A": "Use an Artifact alone for the calculations, which provides a stable editable surface for the result but does not perform the deterministic computation that Code Execution would run.",
      "B": "Use Code Execution, which runs code in a sandbox to perform calculations on the uploaded file and produce verified outputs the associate can check.",
      "C": "Use the Research feature for the calculations, which gathers and synthesizes external sources and is not the appropriate feature for deterministic computation on an uploaded spreadsheet.",
      "D": "Use a standard chat prompt for the calculations, which generates text without running code and does not produce the verified deterministic output the multi-tab calculation task requires."
    },
    "correctAnswer": "B",
    "explanation": "Discussion:\nSelected Answer: B Code Execution gives deterministic results upvoted 1 time Submit Cancel\n\n---\n\nCode Execution gives deterministic results",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: B Code Execution gives deterministic results upvoted 1 time Submit Cancel\n\n---\n\nCode Execution gives deterministic results Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Use an Artifact alone for the calculations, which provides a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Use the Research feature for the calculations, which gathers...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Use a standard chat prompt for the calculations, which gener...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: B Code Execution gives deterministic results upvoted 1 time Submit Cancel\n\n---\n\nCode Execution gives deterministic results."
  },
  {
    "num": 28,
    "conceptId": "prompt-clarity",
    "question": "A Claude associate is troubleshooting a Claude response that addressed only one of three required questions in a prompt. The prompt listed all three questions in a single paragraph separated by commas. Which root cause is most likely?",
    "options": {
      "A": "The prompt was too long and Claude focused on the question with the strongest grounding in the surrounding context.",
      "B": "The prompt’s required questions were addressed implicitly across the response, even though the response did not visibly answer each question.",
      "C": "The prompt’s task statement did not enumerate the three required questions explicitly enough for Claude to address each one in turn.",
      "D": "The prompt’s audience and tone specification overshadowed the task statement, so Claude prioritized voice over coverage."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C (Official ExamTopics Suggested Answer)",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C (Official ExamTopics Suggested Answer) Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'The prompt was too long and Claude focused on the question w...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'The prompt’s required questions were addressed implicitly ac...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The prompt’s audience and tone specification overshadowed th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C (Official ExamTopics Suggested Answer)."
  },
  {
    "num": 29,
    "conceptId": "prompt-clarity",
    "question": "A knowledge worker has noticed that the same prompt for a recurring weekly task produces inconsistent outputs across runs. Some weeks the output uses the right sections but the wrong tone; other weeks the tone is right but a section is missing. The source inputs change each week but follow the same structure. Which cause is most worth investigating first?",
    "options": {
      "A": "The recurring prompt under-specifies the audience, tone, format, and required sections, so each run drifts depending on what the model emphasizes that time.",
      "B": "The model is non-deterministic, so identical prompts naturally produce different outputs even when the prompt itself is well-written, and the team should accept the variation.",
      "C": "The source inputs vary too much from week to week, and the team should standardize the inputs before changing the prompt.",
      "D": "The team should split the prompt into separate prompts for tone and structure, since combining both in one prompt produces the mixed inconsistency the team is seeing."
    },
    "correctAnswer": "A",
    "explanation": "The correct answer is A: A. The recurring prompt under-specifies the audience, tone, format, and required sections, so each run drifts depending on what the model emphasizes that time..",
    "isMulti": false,
    "whyCorrect": "The correct answer is A: A. The recurring prompt under-specifies the audience, tone, format, and required sections, so each run drifts depending on what the model emphasizes that time.. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'The model is non-deterministic, so identical prompts natural...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The source inputs vary too much from week to week, and the t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The team should split the prompt into separate prompts for t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is A: A."
  },
  {
    "num": 30,
    "conceptId": "data-privacy",
    "question": "Before uploading a customer file for a Code Execution analysis, a customer-success associate at Noventra, Ltd. is reviewing the planned task. Which two practices best align with sound data handling? (Select two.)",
    "options": {
      "A": "Skip the upload review entirely on the basis of urgency, even though the file might contain regulated fields that organizational policy requires the user to redact before any Code Execution.",
      "B": "Confirm that the planned Code Execution task aligns with the organization's data-classification policy and escalate to the appropriate contact if the data sensitivity exceeds approved use.",
      "C": "Upload the full unredacted customer file without review, on the assumption that a sandboxed execution environment removes the need to apply the organization's data-classification policy.",
      "D": "Bypass the data-classification policy because the task is internal, treating sandboxed processing as an exemption from the review that the policy requires before sensitive data is uploaded.",
      "E": "Review the file for sensitive, confidential, or regulated fields before upload, and remove or redact any fields that are not required for the planned Code Execution analysis."
    },
    "correctAnswer": "B, E",
    "explanation": "Correct answers: B, E. B. Confirm that the planned Code Execution task aligns with the organization's data-classification policy and escalate to the appropriate contact if the data sensitivity exceeds approved use.; E. Review the file for sensitive, confidential, or regulated fields before upload, and remove or redact any fields that are not required for the planned Code Execution analysis..",
    "isMulti": true,
    "whyCorrect": "Correct answers: B, E. B. Confirm that the planned Code Execution task aligns with the organization's data-classification policy and escalate to the appropriate contact if the data sensitivity exceeds approved use.; E. Review the file for sensitive, confidential, or regulated fields before upload, and remove or redact any fields that are not required for the planned Code Execution analysis.. Isiliye correct answer B, E hai.",
    "wrongOptions": {
      "A": "'Skip the upload review entirely on the basis of urgency, eve...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Upload the full unredacted customer file without review, on ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Bypass the data-classification policy because the task is in...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct answers: B, E."
  },
  {
    "num": 31,
    "conceptId": "iteration-diminishing",
    "question": "A sales manager is iterating on a Claude-generated solution prototype after a stakeholder review identified two specific concerns. The rest of the prototype was accepted as written. Which iteration approach is most likely to produce a strong next version?",
    "options": {
      "A": "Rewrite the prototype from scratch incorporating the two specific concerns, since starting fresh integrates the feedback more cleanly than targeted edits.",
      "B": "Address the two specific concerns and add a third improvement the associate identified, since combining stakeholder feedback with self- identified improvements is more efficient.",
      "C": "Address the two specific concerns directly, leave unrelated parts unchanged, and document the changes for the next review.",
      "D": "Address the two specific concerns and also revise unrelated sections to maintain consistent voice across the prototype after the edits."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C Incorporates the stakeholder’s feedback precisely Preserves the portions of the prototype that were already accepted. Avoids unnecessary changes that could introduce new issues. Makes the revisions transparent and easy to review. upvoted 2 times Submit Cancel\n\n---\n\nIncorporates the stakeholder’s feedback precisely Preserves the portions of the prototype that were already accepted. Avoids unnecessary changes that could introduce new issues. Makes the revisions transparent and easy to review.",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Incorporates the stakeholder’s feedback precisely Preserves the portions of the prototype that were already accepted. Avoids unnecessary changes that could introduce new issues. Makes the revisions transparent and easy to review. upvoted 2 times Submit Cancel\n\n---\n\nIncorporates the stakeholder’s feedback precisely Preserves the portions of the prototype that were already accepted. Avoids unnecessary changes that could introduce new issues. Makes the revisions transparent and easy to review. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Rewrite the prototype from scratch incorporating the two spe...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Address the two specific concerns and add a third improvemen...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Address the two specific concerns and also revise unrelated ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C Incorporates the stakeholder’s feedback precisely Preserves the portions of the prototype that were already accepted."
  },
  {
    "num": 32,
    "conceptId": "workflow-decomposition",
    "question": "You are a senior analyst using Claude to analyze requirements from several stakeholder sources. Which is the correct order of steps? (1) Group related requirements and flag conflicts or ambiguities for stakeholder review. (2) Validate the structured output against the original sources for accuracy and completeness. (3) Submit the consolidated inputs to Claude with a structured extraction prompt. (4) Gather and label the source materials so each requirement can be traced. (5) Document the final requirements set with source traceability and status.",
    "options": {
      "A": "4, 1, 3, 2, 5",
      "B": "4, 3, 1, 2, 5",
      "C": "1, 4, 3, 2, 5",
      "D": "3, 4, 1, 2, 5"
    },
    "correctAnswer": "A",
    "explanation": "The correct answer is A: A. 4, 1, 3, 2, 5.",
    "isMulti": false,
    "whyCorrect": "The correct answer is A: A. 4, 1, 3, 2, 5. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'4, 3, 1, 2, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'1, 4, 3, 2, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'3, 4, 1, 2, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is A: A."
  },
  {
    "num": 33,
    "conceptId": "workflow-decomposition",
    "question": "You are evaluating whether a “redesign new-hire onboarding” request should be decomposed before prompting Claude. Which feature of the request most strongly indicates decomposition will help?",
    "options": {
      "A": "The request involves content the associate has produced many times before and knows can be handled in a single well-structured prompt.",
      "B": "The request requires multiple distinct outputs: a process map, supporting materials, and a measurement plan.",
      "C": "The request is for a single structured document that can be produced from one set of inputs in one prompt.",
      "D": "The request involves a single well-defined output with a clear input and a familiar format."
    },
    "correctAnswer": "B",
    "explanation": "Multiple distinct outputs (process map, materials, measurement plan) strongly indicate decomposition is needed.",
    "isMulti": false,
    "whyCorrect": "Multiple distinct outputs (process map, materials, measurement plan) strongly indicate decomposition is needed. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'The request involves content the associate has produced many...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The request is for a single structured document that can be ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The request involves a single well-defined output with a cle...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Multiple distinct outputs (process map, materials, measurement plan) strongly indicate decomposition is needed."
  },
  {
    "num": 34,
    "conceptId": "human-oversight",
    "question": "A Claude associate is applying the AI Fluency Framework Diligence competency to ongoing Claude usage. Which practice best reflects Diligence in a governance context?",
    "options": {
      "A": "Apply organizational AI policies consistently as a sustained professional habit, identify gaps between actual usage and the policies, and take corrective action to close those gaps over time.",
      "B": "Apply organizational AI policies only in high-visibility situations where usage is likely to be observed or reviewed by others.",
      "C": "Apply organizational AI policies during onboarding as a foundational training step, document that each associate has reviewed them, and treat that record as evidence of ongoing compliance.",
      "D": "Defer all policy application to a centralized compliance team, treating individual usage as outside personal responsibility."
    },
    "correctAnswer": "A",
    "explanation": "Diligence means consistently applying policies as a habit, identifying gaps, and taking corrective action over time.",
    "isMulti": false,
    "whyCorrect": "Diligence means consistently applying policies as a habit, identifying gaps, and taking corrective action over time. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Apply organizational AI policies only in high-visibility sit...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Apply organizational AI policies during onboarding as a foun...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Defer all policy application to a centralized compliance tea...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Diligence means consistently applying policies as a habit, identifying gaps, and taking corrective action over time."
  },
  {
    "num": 35,
    "conceptId": "workflow-decomposition",
    "question": "You are a procurement associate decomposing a vendor-evaluation task. Which dependency ordering reflects sound sequencing?",
    "options": {
      "A": "Define evaluation criteria first, gather vendor data against those criteria, then score and rank the vendors.",
      "B": "Skip the criteria and ask Claude to produce a vendor recommendation without any inputs.",
      "C": "Score the vendors first and decide on the criteria afterward.",
      "D": "Rank the vendors before collecting any data."
    },
    "correctAnswer": "A",
    "explanation": "Sound sequencing: define criteria first, then gather data, then score and rank.",
    "isMulti": false,
    "whyCorrect": "Sound sequencing: define criteria first, then gather data, then score and rank. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Skip the criteria and ask Claude to produce a vendor recomme...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Score the vendors first and decide on the criteria afterward...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Rank the vendors before collecting any data.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Sound sequencing: define criteria first, then gather data, then score and rank."
  },
  {
    "num": 36,
    "conceptId": "human-oversight",
    "question": "You are a marketing manager using Claude to ideate concepts for a campaign and must complete the framing steps before generating concepts. Which two framing steps must be completed BEFORE asking Claude to generate concepts? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Define the goal of the campaign and its success metrics.",
      "B": "Select a finalist concept and prepare it for stakeholder approval.",
      "C": "Review the Claude-generated concepts and select the two strongest for further development.",
      "D": "Define the brand voice and the audience the concepts will address.",
      "E": "Schedule the campaign launch and rollout dates with the agency."
    },
    "correctAnswer": "A, D",
    "explanation": "Before generating concepts, define the campaign goal/success metrics (A) and the brand voice/audience (D).",
    "isMulti": true,
    "whyCorrect": "Before generating concepts, define the campaign goal/success metrics (A) and the brand voice/audience (D). Isiliye correct answer A, D hai.",
    "wrongOptions": {
      "B": "'Select a finalist concept and prepare it for stakeholder app...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Review the Claude-generated concepts and select the two stro...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Schedule the campaign launch and rollout dates with the agen...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Before generating concepts, define the campaign goal/success metrics (A) and the brand voice/audience (D)."
  },
  {
    "num": 37,
    "conceptId": "human-oversight",
    "question": "You are a knowledge worker deciding whether to escalate a Claude-generated output. Which is the correct order of decision steps? (1) Identify the audience and the impact of the output if it is wrong. (2) Document the decision and the rationale for traceability. (3) Compare the output’s risk profile to the organization’s escalation criteria. (4) Decide whether to use, iterate further, or escalate. (5) Assess the output’s accuracy, completeness, and any unverified claims.",
    "options": {
      "A": "1, 3, 5, 4, 2",
      "B": "4, 3, 2, 1, 5",
      "C": "3, 1, 5, 4, 2",
      "D": "5, 1, 3, 4, 2"
    },
    "correctAnswer": "D",
    "explanation": "Correct order: assess accuracy (5), identify audience/impact (1), compare to escalation criteria (3), decide (4), document (2).",
    "isMulti": false,
    "whyCorrect": "Correct order: assess accuracy (5), identify audience/impact (1), compare to escalation criteria (3), decide (4), document (2). Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'1, 3, 5, 4, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'4, 3, 2, 1, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'3, 1, 5, 4, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct order: assess accuracy (5), identify audience/impact (1), compare to escalation criteria (3), decide (4), document (2)."
  },
  {
    "num": 38,
    "conceptId": "workflow-decomposition",
    "question": "You are a product designer using Claude in a solution design exercise. Which solution-design step should be performed first when using Claude?",
    "options": {
      "A": "Articulate the problem the solution must address and the constraints in play.",
      "B": "Compare the candidate concepts against the constraints and select a finalist.",
      "C": "Produce detailed mock-ups of the chosen solution for stakeholder review.",
      "D": "Generate candidate solution concepts using Claude across diverse styles."
    },
    "correctAnswer": "A",
    "explanation": "Discussion:\nSelected Answer: A",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: A Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Compare the candidate concepts against the constraints and s...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Produce detailed mock-ups of the chosen solution for stakeho...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Generate candidate solution concepts using Claude across div...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: A."
  },
  {
    "num": 39,
    "conceptId": "human-oversight",
    "question": "You are an HR specialist sorting potential ethical risks of a Claude-supported workflow. Which two risks pose the highest ethical concern in an HR-adjacent workflow? (Select two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "decisions that materially affect a person's employment without human accountability",
      "B": "a clerical typo in a routine internal calendar invitation",
      "C": "inconsistent tone and formatting across internal HR communications sent to employees",
      "D": "inconsistent use of the company's preferred dash style across documents",
      "E": "outputs that systematically disadvantage members of a protected group"
    },
    "correctAnswer": "A, E",
    "explanation": "Correct answers: A, E. A. decisions that materially affect a person's employment without human accountability; E. outputs that systematically disadvantage members of a protected group.",
    "isMulti": true,
    "whyCorrect": "Correct answers: A, E. A. decisions that materially affect a person's employment without human accountability; E. outputs that systematically disadvantage members of a protected group. Isiliye correct answer A, E hai.",
    "wrongOptions": {
      "B": "'a clerical typo in a routine internal calendar invitation' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'inconsistent tone and formatting across internal HR communic...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'inconsistent use of the company's preferred dash style acros...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct answers: A, E."
  },
  {
    "num": 40,
    "conceptId": "primary-source",
    "question": "You are reviewing a Claude-generated competitor brief for unsupported claims. Which is the correct order of review steps? (1) Cross-check each specific claim against the supplied source material or trusted external references. (2) Decide whether to correct, re-prompt, or escalate based on the findings. (3) Document each unsupported or inconsistent claim with its location and severity. (4) Identify the specific factual claims, statistics, and citations in the brief. (5) Read the brief from beginning to end and flag any claims that feel surprising.",
    "options": {
      "A": "5, 1, 4, 3, 2",
      "B": "1, 4, 5, 3, 2",
      "C": "5, 4, 1, 3, 2",
      "D": "4, 5, 1, 3, 2"
    },
    "correctAnswer": "C",
    "explanation": "The correct answer is C: C. 5, 4, 1, 3, 2.",
    "isMulti": false,
    "whyCorrect": "The correct answer is C: C. 5, 4, 1, 3, 2. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'5, 1, 4, 3, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'1, 4, 5, 3, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'4, 5, 1, 3, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is C: C."
  },
  {
    "num": 41,
    "conceptId": "prompt-clarity",
    "question": "You are an operations lead and notice that a Project’s outputs have been drifting from the team’s current expectations. Which maintenance action should be tried first?",
    "options": {
      "A": "Retire the Project and rebuild a new one from scratch with fresh content.",
      "B": "Switch the Project to a different Claude model in the hope it behaves better.",
      "C": "Review the Project's instructions and reference materials against current standards.",
      "D": "Continue using the Project and accept the drift as the new baseline of behavior."
    },
    "correctAnswer": "C",
    "explanation": "First review instructions and reference materials against current standards before taking more drastic action.",
    "isMulti": false,
    "whyCorrect": "First review instructions and reference materials against current standards before taking more drastic action. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Retire the Project and rebuild a new one from scratch with f...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Switch the Project to a different Claude model in the hope i...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Continue using the Project and accept the drift as the new b...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: First review instructions and reference materials against current standards before taking more drastic action."
  },
  {
    "num": 42,
    "conceptId": "context-windows",
    "question": "You are a knowledge manager structuring source material in the context window for a long Claude evaluation task. Which two practices produce a more effective use of the context window? (Select two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "Paste every available document into context regardless of relevance to the task.",
      "B": "Mark each source clearly with delimiters so the model can attribute claims correctly.",
      "C": "Repeat the same instruction at the start, middle, and end to reinforce it.",
      "D": "Mix sources together in a single block so the model can synthesize them freely.",
      "E": "Place the most reference-critical material near the beginning or end of context."
    },
    "correctAnswer": "B, E",
    "explanation": "Correct answers: B, E. B. Mark each source clearly with delimiters so the model can attribute claims correctly.; E. Place the most reference-critical material near the beginning or end of context..",
    "isMulti": true,
    "whyCorrect": "Correct answers: B, E. B. Mark each source clearly with delimiters so the model can attribute claims correctly.; E. Place the most reference-critical material near the beginning or end of context.. Isiliye correct answer B, E hai.",
    "wrongOptions": {
      "A": "'Paste every available document into context regardless of re...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Repeat the same instruction at the start, middle, and end to...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Mix sources together in a single block so the model can synt...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct answers: B, E."
  },
  {
    "num": 43,
    "conceptId": "degraded-conversations",
    "question": "You are a knowledge worker transitioning from a long, drifting conversation into a fresh focused session. Which is the correct order of transition steps? (1) Begin a new chat and paste the summary as its starting context. (2) Summarize the goals, key decisions, and open questions from the long conversation. (3) Identify which references should persist beyond the current chat. (4) Move persistent references into a Project’s knowledge base or attach them as needed. (5) Confirm the new chat is on-task before continuing the work.",
    "options": {
      "A": "3, 2, 4, 1, 5",
      "B": "4, 3, 2, 1, 5",
      "C": "1, 2, 3, 4, 5",
      "D": "2, 3, 4, 1, 5"
    },
    "correctAnswer": "A",
    "explanation": "Correct order: identify persistent references (3), summarize goals/decisions/questions (2), move references to Project knowledge (4), start new chat with summary (1), confirm on-task (5).",
    "isMulti": false,
    "whyCorrect": "Correct order: identify persistent references (3), summarize goals/decisions/questions (2), move references to Project knowledge (4), start new chat with summary (1), confirm on-task (5). Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'4, 3, 2, 1, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'1, 2, 3, 4, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'2, 3, 4, 1, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct order: identify persistent references (3), summarize goals/decisions/questions (2), move references to Project knowledge (4), start new chat with summary (1), confirm on-task (5)."
  },
  {
    "num": 44,
    "conceptId": "human-oversight",
    "question": "A knowledge worker is applying the AI Fluency Framework Description competency while revising an underperforming prompt. Which revision best reflects Description principles?",
    "options": {
      "A": "Remove the existing context from the prompt and submit only the bare task statement, eliminating the audience, format, and constraint information that Description principles call for in a clear specification.",
      "B": "Specify the task scope, required output format, audience, and relevant constraints with sufficient clarity that the prompt produces a useful, reliable output on the next run.",
      "C": "Replace the specific instructions with generic phrasing that broadens the task scope, undoing the specification work that Description principles require for a reliable, useful output.",
      "D": "Add length to the prompt by inserting filler text that does not specify task scope, output format, audience, or constraints, leaving the original specification gaps unaddressed."
    },
    "correctAnswer": "B",
    "explanation": "The correct answer is B: B. Specify the task scope, required output format, audience, and relevant constraints with sufficient clarity that the prompt produces a useful, reliable output on the next run..",
    "isMulti": false,
    "whyCorrect": "The correct answer is B: B. Specify the task scope, required output format, audience, and relevant constraints with sufficient clarity that the prompt produces a useful, reliable output on the next run.. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Remove the existing context from the prompt and submit only ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Replace the specific instructions with generic phrasing that...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Add length to the prompt by inserting filler text that does ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is B: B."
  },
  {
    "num": 45,
    "conceptId": "project-config",
    "question": "A manager is deciding what changes to make while conducting a memory maintenance review for a long-running workflow. Which two actions best support memory quality over time? (Choose two.)",
    "options": {
      "A": "Delete all memories as the maintenance action to ensure a clean slate, then allow Claude to rebuild context organically through subsequent workflow runs.",
      "B": "Disable Memory entirely to eliminate the risk of stale entries surfacing in future workflow runs.",
      "C": "Identify and edit or delete entries that are stale, inaccurate, or no longer relevant, and add context Claude has not automatically captured but the workflow continues to need.",
      "D": "Leave all memories untouched on the basis that the workflow has been running consistently and no output quality issues have been reported.",
      "E": "Export the current memories as a backup before making changes, so prior context can be restored if a maintenance edit unintentionally removes information the workflow still depends on."
    },
    "correctAnswer": "C, E",
    "explanation": "Discussion:\nSelected Answer: CE",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: CE Isiliye correct answer C, E hai.",
    "wrongOptions": {
      "A": "'Delete all memories as the maintenance action to ensure a cl...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Disable Memory entirely to eliminate the risk of stale entri...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Leave all memories untouched on the basis that the workflow ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: CE."
  },
  {
    "num": 46,
    "conceptId": "project-config",
    "question": "An HR business partner is building a long-running workspace where a team handbook, a leveling guide, and a policies-FAQ document will be referenced across many separate chats by several team members. Which Claude feature is designed for this use case?",
    "options": {
      "A": "Connect the team’s Google Drive folder where the three documents live, so the connector surfaces them inside each chat at the moment the chat needs them.",
      "B": "Generate an Artifact containing the three documents, which gives the team an editable surface for the reference content that persists across chats.",
      "C": "Create a Project, which provides a persistent workspace with its own knowledge base and custom instructions shared across chats and members.",
      "D": "Attach all three documents to each chat as needed, since per-chat attachments give the chat direct access to the documents without additional setup."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Connect the team’s Google Drive folder where the three docum...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Generate an Artifact containing the three documents, which g...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Attach all three documents to each chat as needed, since per...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 47,
    "conceptId": "prompt-clarity",
    "question": "You are an analyst fact-checking a Claude-generated report. Two cited sources give conflicting dates for the same event. Which approach is correct?",
    "options": {
      "A": "Publish both dates without resolving the conflict and let the reader choose.",
      "B": "Average the two conflicting dates and use the average.",
      "C": "Locate a primary or authoritative source for the event and use the date that source confirms.",
      "D": "Choose the more recent date on the basis that later sources typically reflect updated or corrected information."
    },
    "correctAnswer": "C",
    "explanation": "Locate a primary/authoritative source to resolve the conflict rather than averaging or picking arbitrarily.",
    "isMulti": false,
    "whyCorrect": "Locate a primary/authoritative source to resolve the conflict rather than averaging or picking arbitrarily. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Publish both dates without resolving the conflict and let th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Average the two conflicting dates and use the average.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Choose the more recent date on the basis that later sources ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Locate a primary/authoritative source to resolve the conflict rather than averaging or picking arbitrarily."
  },
  {
    "num": 48,
    "conceptId": "workflow-decomposition",
    "question": "A business analyst is converting a sticky-note request from a stakeholder into a structured prompt for Claude. Which is the correct order of conversion steps? (1) Confirm the audience and the decision the response must support. (2) Submit the structured prompt to Claude. (3) Identify the underlying task hidden in the sticky-note language. (4) Specify the desired length, tone, and output format. (5) Add the supporting facts and constraints relevant to the task.",
    "options": {
      "A": "3, 5, 1, 4, 2",
      "B": "1, 3, 5, 4, 2",
      "C": "3, 1, 5, 4, 2",
      "D": "2, 3, 1, 5, 4"
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'3, 5, 1, 4, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'1, 3, 5, 4, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'2, 3, 1, 5, 4' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 49,
    "conceptId": "human-oversight",
    "question": "You are a bank manager presented with a request to use Claude as the sole decision-maker on customer credit-line approvals. Which response is most appropriate?",
    "options": {
      "A": "Accept the sole-decision-maker design because Claude can process applications faster than a human review team.",
      "B": "Expand the design so Claude both evaluates applications and issues final approval notices to customers directly.",
      "C": "Implement the design on a pilot basis and notify compliance only if issues arise during production use.",
      "D": "Decline the sole-decision-maker design and propose Claude assisting analysts who retain decision authority."
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Accept the sole-decision-maker design because Claude can pro...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Expand the design so Claude both evaluates applications and ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Implement the design on a pilot basis and notify compliance ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D."
  },
  {
    "num": 50,
    "conceptId": "project-config",
    "question": "After importing context from another AI platform into Claude's Memory, a knowledge worker notices that some imported details did not appear in subsequent responses. Which explanation is most accurate?",
    "options": {
      "A": "The import transfers every detail as a rule, and any missing content reflects a deliberate choice by Claude to omit the information rather than the documented experimental nature of imports.",
      "B": "Memory imports overwrite all prior memories on completion, so any details that appear missing must have been deleted by the import process rather than not incorporated during the import itself.",
      "C": "Memory imports are experimental, and Claude might not successfully incorporate all imported content; missing details can be added manually through Settings > Capabilities as a fallback.",
      "D": "Imported memories are stored separately from regular memories and cannot be referenced in any chat, so missing details reflect an architectural separation rather than imperfect import incorporation."
    },
    "correctAnswer": "C",
    "explanation": "The correct answer is C: C. Memory imports are experimental, and Claude might not successfully incorporate all imported content; missing details can be added manually through Settings > Capabilities as a fallback..",
    "isMulti": false,
    "whyCorrect": "The correct answer is C: C. Memory imports are experimental, and Claude might not successfully incorporate all imported content; missing details can be added manually through Settings > Capabilities as a fallback.. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'The import transfers every detail as a rule, and any missing...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Memory imports overwrite all prior memories on completion, s...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Imported memories are stored separately from regular memorie...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is C: C."
  },
  {
    "num": 51,
    "conceptId": "prompt-clarity",
    "question": "A Claude associate is identifying the bottleneck in a content workflow that takes too long to publish. The workflow has five steps: research, drafting, internal review, legal review, and publication. There is cycle-time data for each step from the past month. Which signal most directly identifies the bottleneck?",
    "options": {
      "A": "the step where individual contributors report the highest workload based on their weekly status updates",
      "B": "the step most recently added to the workflow, based on the assumption that process changes introduce the most friction",
      "C": "the step with the longest queue or the largest backlog of items waiting to enter it",
      "D": "the step with the highest average cycle time per item across the past month’s runs"
    },
    "correctAnswer": "D",
    "explanation": "The correct answer is D: D. the step with the highest average cycle time per item across the past month’s runs.",
    "isMulti": false,
    "whyCorrect": "The correct answer is D: D. the step with the highest average cycle time per item across the past month’s runs. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'the step where individual contributors report the highest wo...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'the step most recently added to the workflow, based on the a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'the step with the longest queue or the largest backlog of it...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is D: D."
  },
  {
    "num": 52,
    "conceptId": "prompt-clarity",
    "question": "You are configuring a new Claude Project for a specific recurring workload. Which Project configuration step should be performed first?",
    "options": {
      "A": "Define the purpose of the Project and the recurring tasks it must support.",
      "B": "Invite collaborators to the Project and confirm the appropriate access levels.",
      "C": "Add reference materials and instructions that the Project will rely on.",
      "D": "Test the configured Project on a representative request from the workload."
    },
    "correctAnswer": "A",
    "explanation": "Discussion:\nSelected Answer: A",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: A Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Invite collaborators to the Project and confirm the appropri...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Add reference materials and instructions that the Project wi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Test the configured Project on a representative request from...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: A."
  },
  {
    "num": 53,
    "conceptId": "prompt-clarity",
    "question": "You are a business analyst reviewing prompt drafts written by teammates. Which two elements belong in a well-structured prompt for a business task? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Whether the prompt uses the author's favorite opening phrase as a signature.",
      "B": "Whether the prompt reaches a thousand words, regardless of what it actually says.",
      "C": "Whether the prompt provides relevant context, including the audience and goal.",
      "D": "Whether the prompt includes the names of every person in the department.",
      "E": "Whether the prompt states a specific task with the required deliverable."
    },
    "correctAnswer": "C, E",
    "explanation": "A prompt-quality checklist should include relevant context (audience, goal) and a specific task with required deliverable.",
    "isMulti": true,
    "whyCorrect": "A prompt-quality checklist should include relevant context (audience, goal) and a specific task with required deliverable. Isiliye correct answer C, E hai.",
    "wrongOptions": {
      "A": "'Whether the prompt uses the author's favorite opening phrase...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Whether the prompt reaches a thousand words, regardless of w...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Whether the prompt includes the names of every person in the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: A prompt-quality checklist should include relevant context (audience, goal) and a specific task with required deliverable."
  },
  {
    "num": 54,
    "conceptId": "prompt-clarity",
    "question": "A project lead is evaluating a Claude-generated status report against the project charter. The report will be delivered to a steering committee, which expects accurate status against committed milestones. Which set of criteria provides the strongest evaluation frame?",
    "options": {
      "A": "length, formatting consistency, and tone appropriateness for a steering committee audience",
      "B": "accuracy of facts against the charter, completeness against required reporting fields, and relevance to the audience receiving the report",
      "C": "readability, narrative flow, and whether the report tells a coherent story about the project’s progress",
      "D": "match to the prior status report’s structure, since the steering committee expects consistent reporting from period to period"
    },
    "correctAnswer": "B",
    "explanation": "Discussion:\nSelected Answer: B",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: B Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'length, formatting consistency, and tone appropriateness for...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'readability, narrative flow, and whether the report tells a ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'match to the prior status report’s structure, since the stee...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: B."
  },
  {
    "num": 55,
    "conceptId": "project-config",
    "question": "A senior manager is reviewing a colleague’s habit of never updating their team’s Project configurations because “if it works once, it works forever.” Which feedback is most warranted?",
    "options": {
      "A": "Configurations should be updated on a fixed schedule regardless of whether the underlying policies and source documents have changed, since regular maintenance prevents drift.",
      "B": "Configurations should be updated only when output quality visibly degrades, since proactive updates risk introducing regressions in working configurations.",
      "C": "Configurations should be reviewed and updated periodically because policies, terminology, and source documents change over time, even when output quality has not visibly degraded.",
      "D": "Configurations should be left alone if the team is satisfied with current outputs, and any required updates should be handled at the chat level rather than the Project level."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Configurations should be updated on a fixed schedule regardl...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Configurations should be updated only when output quality vi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Configurations should be left alone if the team is satisfied...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 56,
    "conceptId": "primary-source",
    "question": "You are evaluating proposed workflow changes against whether they meaningfully improve the workflow. Which two proposed changes meaningfully improve a recurring Claude workflow? (Select two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "updating the team's shared workspace name to reflect the new workflow process",
      "B": "labeling each workflow step with descriptive names to improve readability for new team members",
      "C": "extracting the standard reference material into a Project to avoid repeating it",
      "D": "reorganizing the workflow document's section headings to improve navigation",
      "E": "adding a quality check on outputs before they enter the downstream process"
    },
    "correctAnswer": "C, E",
    "explanation": "Discussion:\nSelected Answer: C,E - Under the objective Optimize workflows for efficiency and effectiveness , meaningful operational improvements must deliver measurable gains in throughput, token efficiency, or output reliability. Option C provides major efficiency gains by moving recurring reference documentation into a persistent Claude Project knowledge base, eliminating redundant token overhead and manual copy-pasting across dozens of daily chats. Option E provides vital effectiveness and risk mitigation by establishing a standardized human-in-the-loop quality gate, preventing defective or hallucinated outputs from propagating into downstream operational pipelines. In contrast, renaming workspaces (Option A), re-labeling steps for cosmetic readability (Option B), or shuffling documentation headings (Option D) represent superficial administrative edits that do not improve execution speed, cost, or output quality.",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: C,E - Under the objective Optimize workflows for efficiency and effectiveness , meaningful operational improvements must deliver measurable gains in throughput, token efficiency, or output reliability. Option C provides major efficiency gains by moving recurring reference documentation into a persistent Claude Project knowledge base, eliminating redundant token overhead and manual copy-pasting across dozens of daily chats. Option E provides vital effectiveness and risk mitigation by establishing a standardized human-in-the-loop quality gate, preventing defective or hallucinated outputs from propagating into downstream operational pipelines. In contrast, renaming workspaces (Option A), re-labeling steps for cosmetic readability (Option B), or shuffling documentation headings (Option D) represent superficial administrative edits that do not improve execution speed, cost, or output quality. Isiliye correct answer C, E hai.",
    "wrongOptions": {
      "A": "'updating the team's shared workspace name to reflect the new...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'labeling each workflow step with descriptive names to improv...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'reorganizing the workflow document's section headings to imp...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C,E - Under the objective Optimize workflows for efficiency and effectiveness , meaningful operational improvements must deliver measurable gains in throughput, token efficiency, or output reliability."
  },
  {
    "num": 57,
    "conceptId": "project-config",
    "question": "You are organizing connected data sources for a team and must complete the planning steps before authorizing any connection. Which two planning steps must be completed BEFORE authorizing a new Connector? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Migrate every existing report off the prior data source onto the new Connector.",
      "B": "Confirm the Connector is on the approved-vendor list maintained by IT.",
      "C": "Confirm the data classification of the source and the team’s permission to use it.",
      "D": "Train every team member on the new Connector through formal training sessions.",
      "E": "Decommission any unused legacy connectors that may still be authorized."
    },
    "correctAnswer": "B, C",
    "explanation": "Before authorizing any connection, first confirm the Connector is on the approved-vendor list (B) and confirm the data classification of the source along with the team's permission to use it (C). These are prerequisite planning steps. Migration, training, and decommissioning come later.",
    "isMulti": true,
    "whyCorrect": "Before authorizing any connection, first confirm the Connector is on the approved-vendor list (B) and confirm the data classification of the source along with the team's permission to use it (C). These are prerequisite planning steps. Migration, training, and decommissioning come later. Isiliye correct answer B, C hai.",
    "wrongOptions": {
      "A": "'Migrate every existing report off the prior data source onto...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Train every team member on the new Connector through formal ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Decommission any unused legacy connectors that may still be ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Before authorizing any connection, first confirm the Connector is on the approved-vendor list (B) and confirm the data classification of the source along with the team's permission to use it (C)."
  },
  {
    "num": 58,
    "conceptId": "prompt-clarity",
    "question": "You are a Claude associate running an ethics review on a Claude-assisted deliverable before publication. Which is the correct order of review steps? (1) Confirm that transparency requirements are met for the audience receiving the deliverable. (2) Document the review outcome and any changes made. (3) Identify the audience and the potential impact of the deliverable on that audience. (4) Make targeted revisions or escalate if a concern requires more authority to resolve. (5) Examine the content for unsupported generalizations, fairness concerns, and accuracy issues.",
    "options": {
      "A": "3, 5, 1, 4, 2",
      "B": "3, 1, 5, 4, 2",
      "C": "5, 3, 1, 4, 2",
      "D": "1, 3, 5, 4, 2"
    },
    "correctAnswer": "A",
    "explanation": "Correct order: identify audience/impact (3), examine content for issues (5), confirm transparency (1), revise or escalate (4), document (2).",
    "isMulti": false,
    "whyCorrect": "Correct order: identify audience/impact (3), examine content for issues (5), confirm transparency (1), revise or escalate (4), document (2). Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'3, 1, 5, 4, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'5, 3, 1, 4, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'1, 3, 5, 4, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct order: identify audience/impact (3), examine content for issues (5), confirm transparency (1), revise or escalate (4), document (2)."
  },
  {
    "num": 59,
    "conceptId": "iteration-diminishing",
    "question": "You are a business analyst evaluating a Claude-generated business case against the agreed acceptance criteria. Which is the correct order of evaluation steps? (1) Compare the business case to the source data and required topics. (2) Document gaps and inaccuracies for follow-up or correction. (3) Restate the acceptance criteria for the business case. (4) Decide whether to use the business case, iterate, or escalate. (5) Read the business case end to end to form an initial impression.",
    "options": {
      "A": "3, 1, 5, 2, 4",
      "B": "1, 3, 5, 2, 4",
      "C": "5, 3, 1, 2, 4",
      "D": "3, 5, 1, 2, 4"
    },
    "correctAnswer": "D",
    "explanation": "The correct answer is D: D. 3, 5, 1, 2, 4.",
    "isMulti": false,
    "whyCorrect": "The correct answer is D: D. 3, 5, 1, 2, 4. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'3, 1, 5, 2, 4' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'1, 3, 5, 2, 4' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'5, 3, 1, 2, 4' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is D: D."
  },
  {
    "num": 60,
    "conceptId": "prompt-clarity",
    "question": "A project manager is transforming a Claude-generated draft into a polished board memo. The board reads the memo before the meeting and expects it to be scannable, factually verified, and consistent with the organization’s standard terminology. Which set of refinements is most appropriate?",
    "options": {
      "A": "Apply consistent headings, tighten wording for executive scanability, align terminology with the organization’s standards, and verify each fact against source data.",
      "B": "Apply consistent headings, expand each section to give the board full context, and align terminology with the organization's standards.",
      "C": "Tighten wording for executive scanability and verify each fact against source data; leave heading structure and terminology as written to preserve the draft’s voice.",
      "D": "Apply consistent headings and align terminology with the organization’s standards; rely on Claude’s verification of facts, since the draft was generated from the source data."
    },
    "correctAnswer": "A",
    "explanation": "Discussion:\nSelected Answer: A",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: A Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Apply consistent headings, expand each section to give the b...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Tighten wording for executive scanability and verify each fa...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Apply consistent headings and align terminology with the org...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: A."
  },
  {
    "num": 61,
    "conceptId": "prompt-clarity",
    "question": "You are an operations lead evaluating prompting strategies that teammates have proposed for various task types. Which two strategies represent appropriate matches between strategy and task type? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "rigid templated prompting for early-stage creative naming and tagline ideation",
      "B": "open exploratory prompting for legal contract redlining against a clause library",
      "C": "open exploratory prompting for early-stage strategic brainstorming on a new market",
      "D": "rigid templated prompting for casual customer-feedback summarization with no schema",
      "E": "rigid templated prompting for monthly compliance reports against a fixed schema"
    },
    "correctAnswer": "C, E",
    "explanation": "Discussion:\nSelected Answer: CE",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: CE Isiliye correct answer C, E hai.",
    "wrongOptions": {
      "A": "'rigid templated prompting for early-stage creative naming an...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'open exploratory prompting for legal contract redlining agai...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'rigid templated prompting for casual customer-feedback summa...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: CE."
  },
  {
    "num": 62,
    "conceptId": "iteration-diminishing",
    "question": "You are optimizing a recurring Claude workflow and must complete the diagnostic steps before changing the workflow. Which two diagnostic steps must be completed BEFORE changing the recurring workflow? (Select two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Notify executive leadership of the projected savings from the optimization.",
      "B": "Identify the steps that contribute most to time, cost, or quality issues.",
      "C": "Deploy the updated workflow across the team and monitor for adoption issues.",
      "D": "Measure the current workflow's quality, time, and cost across recent runs.",
      "E": "Document the revised workflow steps and update the team's standard operating procedures."
    },
    "correctAnswer": "B, D",
    "explanation": "Discussion:\nSelected Answer: B,D - Under the objective Identify, diagnose, and resolve issues with underperforming prompts and/or poor outputs , workflow optimization must be rooted in evidence-based diagnostics before making modifications to system instructions or prompt chains. The diagnostic phase requires two prerequisite steps: establishing a quantitative baseline by measuring quality metrics, latency, token spend, and human intervention frequency across recent historical runs (Option D), and conducting a bottleneck analysis to pinpoint the exact sub-steps responsible for performance degradation, excessive token cost, or quality defects (Option B). Implementing changes without these baseline diagnostics leads to blind iterations. Deployment (Option C) and SOP updates (Option E) are downstream execution phases, while leadership notifications (Option A) occur after solutions are verified.",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: B,D - Under the objective Identify, diagnose, and resolve issues with underperforming prompts and/or poor outputs , workflow optimization must be rooted in evidence-based diagnostics before making modifications to system instructions or prompt chains. The diagnostic phase requires two prerequisite steps: establishing a quantitative baseline by measuring quality metrics, latency, token spend, and human intervention frequency across recent historical runs (Option D), and conducting a bottleneck analysis to pinpoint the exact sub-steps responsible for performance degradation, excessive token cost, or quality defects (Option B). Implementing changes without these baseline diagnostics leads to blind iterations. Deployment (Option C) and SOP updates (Option E) are downstream execution phases, while leadership notifications (Option A) occur after solutions are verified. Isiliye correct answer B, D hai.",
    "wrongOptions": {
      "A": "'Notify executive leadership of the projected savings from th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Deploy the updated workflow across the team and monitor for ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Document the revised workflow steps and update the team's st...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: B,D - Under the objective Identify, diagnose, and resolve issues with underperforming prompts and/or poor outputs , workflow optimization must be rooted in evidence-based diagnostics before making modifications to system instructions or prompt chains."
  },
  {
    "num": 63,
    "conceptId": "project-config",
    "question": "A learning specialist is configuring a Claude Project for a recurring course-design workflow. Which configuration approach best leverages a Skill alongside other Project elements?",
    "options": {
      "A": "Configure the Project with custom instructions that contradict the Skill’s documented purpose, creating ambiguity about which guidance Claude should follow within the recurring course-design workflow.",
      "B": "Add the relevant Skill to the Project, upload the supporting knowledge sources, and write custom instructions that reference both the Skill and the knowledge.",
      "C": "Upload the supporting knowledge sources but disable the relevant Skill, eliminating the packaged capability the workflow needs and forcing each chat to reconstruct the procedure manually.",
      "D": "Add the Skill to the Project but omit the supporting knowledge sources and any custom instructions, so the Project lacks the reference content and persistent guidance the workflow requires."
    },
    "correctAnswer": "B",
    "explanation": "Discussion:\nSelected Answer: B",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: B Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Configure the Project with custom instructions that contradi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Upload the supporting knowledge sources but disable the rele...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Add the Skill to the Project but omit the supporting knowled...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: B."
  },
  {
    "num": 64,
    "conceptId": "workflow-decomposition",
    "question": "An operations assistant is using Claude to support process optimization for an existing intake workflow. The assistant has access to the current process documentation and recent cycle-time data. Which activity best uses Claude to support this process optimization task?",
    "options": {
      "A": "Generate an optimized version of the intake process based on industry benchmarks, then compare it to the current process to identify gaps.",
      "B": "Apply Claude to predict the cycle-time impact of each proposed change and rank them so the team can implement improvements in priority order.",
      "C": "Map the current intake process, identify likely bottlenecks based on the cycle-time data, and propose optimization options for human review.",
      "D": "Use Claude to interview each team member who works on the intake process and synthesize the interview output into a redesigned workflow."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Generate an optimized version of the intake process based on...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Apply Claude to predict the cycle-time impact of each propos...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Use Claude to interview each team member who works on the in...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 65,
    "conceptId": "human-oversight",
    "question": "An associate is responding to an executive who claims that Claude will eliminate the need for any human review on customer-facing content. The executive is the budget approver for the team’s AI tools. Which response is most appropriate?",
    "options": {
      "A": "Escalate the executive’s claim to a senior leader outside the team before responding directly, since the issue affects more than just the associate’s team.",
      "B": "Pilot the executive’s proposal on a low-risk subset of customer-facing content first, and use the pilot results to make the case for retaining human review on higher-risk content.",
      "C": "Defer to the executive’s authority and remove the human review step from customer-facing content, monitoring the results closely for the first several weeks.",
      "D": "Acknowledge the productivity gains, then explain that human review remains essential on customer-facing content because of accuracy and brand risk, with specific examples."
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Escalate the executive’s claim to a senior leader outside th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Pilot the executive’s proposal on a low-risk subset of custo...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Defer to the executive’s authority and remove the human revi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D."
  },
  {
    "num": 66,
    "conceptId": "project-config",
    "question": "A support representative is configuring a Project for drafting customer-facing apology emails after service outages. The current custom instructions tell Claude to “be empathetic and casual, keep it short, and offer a goodwill credit.” The customer-service team has flagged that recent drafts have been too brief, have offered goodwill credits in cases where policy does not allow them, and have used contractions that the brand voice guide prohibits. Which adjustment best aligns the configuration to the use case?",
    "options": {
      "A": "Replace “be empathetic and casual” with “match the brand voice guide,” remove the instruction to offer goodwill credits, and let each draft determine its own length based on the incident.",
      "B": "Move the brand voice guide and the goodwill-credit policy into the Project knowledge base and rely on the documents alone to govern tone, length, and credit decisions, without changing the custom instructions.",
      "C": "Specify the brand voice attributes (empathetic, formal, no contractions), set a minimum length, and instruct Claude to recommend a goodwill credit only when the attached eligibility policy permits one.",
      "D": "Keep the existing instructions and add a sentence telling Claude to consult the brand voice guide and the goodwill-credit policy that are attached to the Project knowledge base."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Replace “be empathetic and casual” with “match the brand voi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Move the brand voice guide and the goodwill-credit policy in...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Keep the existing instructions and add a sentence telling Cl...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 67,
    "conceptId": "context-windows",
    "question": "You are an HR specialist reviewing model choices made by colleagues for various tasks. Which two model choices represent appropriate matches between the model and the task? (Choose two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "a higher-capability model selected solely because it is the most expensive option",
      "B": "a higher-capability model for one-line keyword extraction at high request volume",
      "C": "a higher-capability model for complex multi-step legal reasoning under review",
      "D": "a lighter, faster model for nuanced multi-document strategic synthesis",
      "E": "a lighter, faster model for routine FAQ-style replies under tight latency budgets"
    },
    "correctAnswer": "C, E",
    "explanation": "Discussion:\nSelected Answer: CE",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: CE Isiliye correct answer C, E hai.",
    "wrongOptions": {
      "A": "'a higher-capability model selected solely because it is the ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'a higher-capability model for one-line keyword extraction at...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'a lighter, faster model for nuanced multi-document strategic...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: CE."
  },
  {
    "num": 68,
    "conceptId": "context-windows",
    "question": "You are a project manager at Orinexa, Inc. You are picking a Claude model for a new production workload and must complete the requirements steps before testing candidates. Which two steps must be completed BEFORE testing candidate models on a representative sample? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Define the quality bar, the latency tolerance, and the expected request volume.",
      "B": "Retest the selected model whenever a new model version is released.",
      "C": "Choose a candidate model based on the requirements profile and known capabilities.",
      "D": "Promote the selected model to production traffic for the workload.",
      "E": "Sign off on the production rollout plan with the platform and security teams."
    },
    "correctAnswer": "A, C",
    "explanation": "Discussion:\nSelected Answer: AC",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: AC Isiliye correct answer A, C hai.",
    "wrongOptions": {
      "B": "'Retest the selected model whenever a new model version is re...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Promote the selected model to production traffic for the wor...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Sign off on the production rollout plan with the platform an...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: AC."
  },
  {
    "num": 69,
    "conceptId": "human-oversight",
    "question": "You are a communications specialist preparing to describe Claude’s role in a workflow to multiple stakeholder groups and must complete the preparation steps before drafting messages. Which two preparation steps must be completed BEFORE drafting the stakeholder messages? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Archive the drafted messages in the corporate communications repository.",
      "B": "Identify the stakeholder groups and what each group needs to understand",
      "C": "Define the key facts about Claude’s role and the boundaries that apply.",
      "D": "Send the drafted messages out and gather feedback for revision.",
      "E": "Schedule a follow-up forum to handle questions raised by the messages."
    },
    "correctAnswer": "B, C",
    "explanation": "Discussion:\nSelected Answer: BC",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: BC Isiliye correct answer B, C hai.",
    "wrongOptions": {
      "A": "'Archive the drafted messages in the corporate communications...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Send the drafted messages out and gather feedback for revisi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Schedule a follow-up forum to handle questions raised by the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: BC."
  },
  {
    "num": 70,
    "conceptId": "code-execution",
    "question": "You are a knowledge worker evaluating which Claude feature matches each proposed use case. Which two feature-to-use-case matches are appropriate? (Select two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "Long-context summarization for a quarterly report distilled from many sources.",
      "B": "Long-context summarization for drafting a reply to a single short customer email.",
      "C": "Web search invocation to retrieve the established formula for calculating compound interest.",
      "D": "Tool use to invoke a calculator for rephrasing a product description in simpler language.",
      "E": "Tool use to invoke a calculator for a complex, multi-step pricing calculation."
    },
    "correctAnswer": "A, E",
    "explanation": "Long-context summarization for multi-source reports (A) and tool use for complex calculations (E) are appropriate matches.",
    "isMulti": true,
    "whyCorrect": "Long-context summarization for multi-source reports (A) and tool use for complex calculations (E) are appropriate matches. Isiliye correct answer A, E hai.",
    "wrongOptions": {
      "B": "'Long-context summarization for drafting a reply to a single ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Web search invocation to retrieve the established formula fo...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Tool use to invoke a calculator for rephrasing a product des...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Long-context summarization for multi-source reports (A) and tool use for complex calculations (E) are appropriate matches."
  },
  {
    "num": 71,
    "conceptId": "context-windows",
    "question": "You are an operations manager preparing a quick reference card for a team. Which description correctly characterizes the three Claude model tiers in general terms?",
    "options": {
      "A": "Haiku is the most capable model for the deepest reasoning, while Opus is the lightweight model for quick replies.",
      "B": "All three models offer the same reasoning depth and differ only in response speed and cost.",
      "C": "Haiku is fast and lightweight, Sonnet is the balanced default for most everyday work, and Opus is the most capable for complex reasoning at higher latency and cost.",
      "D": "Sonnet is the fastest of the three models because its architecture is optimized for speed rather than reasoning depth."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Haiku is the most capable model for the deepest reasoning, w...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'All three models offer the same reasoning depth and differ o...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Sonnet is the fastest of the three models because its archit...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 72,
    "conceptId": "degraded-conversations",
    "question": "You are a project manager working through a long planning conversation with Claude and must keep the conversation productive as it grows. Which two practices keep a long planning conversation productive? (Choose two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "Open a new thread for every minor follow-up question to keep threads short.",
      "B": "Restate constraints and goals when the focus shifts to a new subtopic.",
      "C": "Periodically summarize decisions made so far to compress the working state.",
      "D": "Switch context aggressively between unrelated planning topics within one thread",
      "E": "Avoid summarizing so the model retains every original word it has produced."
    },
    "correctAnswer": "B, C",
    "explanation": "Discussion:\nSelected Answer: BC",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: BC Isiliye correct answer B, C hai.",
    "wrongOptions": {
      "A": "'Open a new thread for every minor follow-up question to keep...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Switch context aggressively between unrelated planning topic...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Avoid summarizing so the model retains every original word i...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: BC."
  },
  {
    "num": 73,
    "conceptId": "data-privacy",
    "question": "A finance manager is about to discuss a confidential pre-announcement figure with Claude. Which two settings best align with sound privacy practice for this conversation? (Choose two.)",
    "options": {
      "A": "Skip the privacy setting decision and proceed with default behavior, since the conversation will not explicitly instruct Claude to remember the figure.",
      "B": "Disable Memory contribution for the conversation if Incognito mode is not used, so the confidential figure is not retained as persistent context that could surface in later unrelated sessions.",
      "C": "Treat the conversation as appropriate for default Memory settings, since the figure will only be discussed briefly and is unlikely to be retained.",
      "D": "Enable Memory contribution for the conversation so the context carries forward to support follow-up analysis in future sessions.",
      "E": "Open the conversation in Incognito mode, which prevents the conversation from contributing to Memory and avoids persistent retention of the confidential pre-announcement figure across sessions."
    },
    "correctAnswer": "B, E",
    "explanation": "Disable Memory contribution (B) or use Incognito mode (E) to prevent retention of confidential pre-announcement figures.",
    "isMulti": true,
    "whyCorrect": "Disable Memory contribution (B) or use Incognito mode (E) to prevent retention of confidential pre-announcement figures. Isiliye correct answer B, E hai.",
    "wrongOptions": {
      "A": "'Skip the privacy setting decision and proceed with default b...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Treat the conversation as appropriate for default Memory set...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Enable Memory contribution for the conversation so the conte...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Disable Memory contribution (B) or use Incognito mode (E) to prevent retention of confidential pre-announcement figures."
  },
  {
    "num": 74,
    "conceptId": "iteration-diminishing",
    "question": "A knowledge worker is explaining how to use feedback to improve Claude-supported work over time. Which description is most accurate?",
    "options": {
      "A": "Capture specific feedback after each run, translate it into targeted prompt or workflow changes, and observe whether subsequent runs improve.",
      "B": "Capture feedback only after several runs so patterns emerge from the volume of observations, then apply changes based on the patterns rather than any single run.",
      "C": "Capture feedback as an aggregate quality score per run, since aggregate scores show whether quality is improving without requiring detail on individual issues.",
      "D": "Capture general impressions after each run and apply them as broad prompt rewrites, since broad rewrites cover more potential issues than targeted changes."
    },
    "correctAnswer": "A",
    "explanation": "Specific, targeted feedback after each run enables precise improvements that can be validated in subsequent runs.",
    "isMulti": false,
    "whyCorrect": "Specific, targeted feedback after each run enables precise improvements that can be validated in subsequent runs. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Capture feedback only after several runs so patterns emerge ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Capture feedback as an aggregate quality score per run, sinc...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Capture general impressions after each run and apply them as...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Specific, targeted feedback after each run enables precise improvements that can be validated in subsequent runs."
  },
  {
    "num": 75,
    "conceptId": "prompt-clarity",
    "question": "You are an operations lead evaluating prompting strategies that teammates have proposed for various task types. Which two strategies represent appropriate matches between strategy and task type? (Select two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "rigid templated prompting for early-stage creative naming and tagline ideation",
      "B": "open exploratory prompting for legal contract redlining against a clause library",
      "C": "open exploratory prompting for early-stage strategic brainstorming on a new market",
      "D": "rigid templated prompting for casual customer-feedback summarization with no schema",
      "E": "rigid templated prompting for monthly compliance reports against a fixed schema"
    },
    "correctAnswer": "C, E",
    "explanation": "Correct answers: C, E. C. open exploratory prompting for early-stage strategic brainstorming on a new market; E. rigid templated prompting for monthly compliance reports against a fixed schema.",
    "isMulti": true,
    "whyCorrect": "Correct answers: C, E. C. open exploratory prompting for early-stage strategic brainstorming on a new market; E. rigid templated prompting for monthly compliance reports against a fixed schema. Isiliye correct answer C, E hai.",
    "wrongOptions": {
      "A": "'rigid templated prompting for early-stage creative naming an...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'open exploratory prompting for legal contract redlining agai...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'rigid templated prompting for casual customer-feedback summa...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct answers: C, E."
  },
  {
    "num": 76,
    "conceptId": "iteration-diminishing",
    "question": "You have iterated a Claude prompt eight times, and the output quality has plateaued for the last four attempts. Which conclusion is most appropriate?",
    "options": {
      "A": "Iteration should stop and the current output should be accepted as-is regardless of remaining issues.",
      "B": "Iteration should stop and the task should be abandoned without communicating to stakeholders.",
      "C": "Iteration has reached diminishing returns and the next step is human review or a different approach.",
      "D": "Iteration should continue indefinitely because more attempts always improve quality."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Iteration should stop and the current output should be accep...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Iteration should stop and the task should be abandoned witho...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Iteration should continue indefinitely because more attempts...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 77,
    "conceptId": "prompt-clarity",
    "question": "You are a project manager weighing workflow steps by how much leverage Claude integration provides. Which workflow step typically offers the greatest Claude leverage in a knowledge-work team?",
    "options": {
      "A": "approving final deliverables for external publication without further review",
      "B": "negotiating contractual terms with external parties on behalf of the company",
      "C": "drafting and synthesizing across many sources for a downstream reviewer",
      "D": "making final personnel decisions about hiring, promotion, or termination"
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'approving final deliverables for external publication withou...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'negotiating contractual terms with external parties on behal...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'making final personnel decisions about hiring, promotion, or...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 78,
    "conceptId": "iteration-diminishing",
    "question": "You are running a weekly feedback-and-adjustment cycle. Which is the correct order of cycle steps? (1) Translate feedback into one or two targeted adjustments for the next cycle. (2) Run the next cycle and compare results against the prior cycle. (3) Capture the specific feedback received during the review. (4) Document what changed, what effect it produced, and any remaining issues. (5) Decide whether to continue iterating, switch approach, or escalate.",
    "options": {
      "A": "2, 3, 1, 4, 5",
      "B": "1, 3, 2, 4, 5",
      "C": "3, 1, 2, 4, 5",
      "D": "3, 2, 1, 4, 5"
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'2, 3, 1, 4, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'1, 3, 2, 4, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'3, 2, 1, 4, 5' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 79,
    "conceptId": "data-privacy",
    "question": "You are an HR specialist reviewing data items proposed for inclusion in a Claude prompt. Which two data items are appropriate to include in a Claude prompt for a routine task? (Select two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "A redacted job description that the model will adapt for a posting.",
      "B": "An anonymized summary of an HR policy that the model will rephrase.",
      "C": "Accommodation request notes from an employee's HR file needed to draft a role-adjustment memo.",
      "D": "A compensation-band summary that includes employee names and current salary figures for a specific team.",
      "E": "Employee identification numbers and hire dates for the team roster included to help Claude personalize onboarding communications."
    },
    "correctAnswer": "A, B",
    "explanation": "Redacted/anonymized content (A, B) is appropriate; sensitive personal data like accommodation notes, salary figures, and employee IDs should not be included.",
    "isMulti": true,
    "whyCorrect": "Redacted/anonymized content (A, B) is appropriate; sensitive personal data like accommodation notes, salary figures, and employee IDs should not be included. Isiliye correct answer A, B hai.",
    "wrongOptions": {
      "C": "'Accommodation request notes from an employee's HR file neede...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'A compensation-band summary that includes employee names and...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Employee identification numbers and hire dates for the team ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Redacted/anonymized content (A, B) is appropriate; sensitive personal data like accommodation notes, salary figures, and employee IDs should not be included."
  },
  {
    "num": 80,
    "conceptId": "iteration-diminishing",
    "question": "You are a content creator. A first response from Claude is accurate but uses inconsistent terminology that does not match your organization’s glossary. Which iterative change addresses the issue most directly?",
    "options": {
      "A": "Increase the requested length so the inconsistent terminology appears more often.",
      "B": "Ask Claude to invent additional terms unrelated to the glossary.",
      "C": "Remove the topic from the prompt to avoid the terminology issue entirely.",
      "D": "Provide the organization's glossary and instruct Claude to use only those terms throughout the response."
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Increase the requested length so the inconsistent terminolog...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Ask Claude to invent additional terms unrelated to the gloss...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Remove the topic from the prompt to avoid the terminology is...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D."
  },
  {
    "num": 81,
    "conceptId": "project-config",
    "question": "A knowledge worker often switches between Claude and another AI service while working on a long-running project. Which Claude feature most directly reduces repetitive context-setting between sessions?",
    "options": {
      "A": "Enable Memory and use the import capability to bring relevant context from the other AI service into Claude as a starting point for the project’s work.",
      "B": "Rely on a single static Artifact pasted into each chat as the only continuity mechanism, ignoring the Memory feature that is purpose-built for retaining work-relevant context across sessions.",
      "C": "Open every Claude session in Incognito mode, which prevents the conversation from contributing to Memory and therefore eliminates the cross-session continuity the project would benefit from.",
      "D": "Disable Memory entirely and re-paste the same context paragraphs at the start of every Claude session, even though Memory is designed to retain that context across conversations automatically."
    },
    "correctAnswer": "A",
    "explanation": "Discussion:\nSelected Answer: A",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: A Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Rely on a single static Artifact pasted into each chat as th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Open every Claude session in Incognito mode, which prevents ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Disable Memory entirely and re-paste the same context paragr...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: A."
  },
  {
    "num": 82,
    "conceptId": "project-config",
    "question": "An HR business partner is configuring a new Project for recurring policy questions from managers. The Project will be used across many chats by several HR team members. Which content belongs in the Project knowledge base?",
    "options": {
      "A": "the current employee handbook plus prior versions of the handbook going back five years, so Claude can answer questions about how policies have changed",
      "B": "the current employee handbook, the leveling guide, the policies-FAQ, and every email the HR team has sent about policy in the past year, for additional context",
      "C": "the current employee handbook only, with the leveling guide and the policies-FAQ attached at the start of each chat as needed for that chat’s topic",
      "D": "the current employee handbook, the leveling guide, and the policies-FAQ document referenced across the Project’s chats"
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'the current employee handbook plus prior versions of the han...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'the current employee handbook, the leveling guide, the polic...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'the current employee handbook only, with the leveling guide ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D."
  },
  {
    "num": 83,
    "conceptId": "primary-source",
    "question": "A knowledge worker is briefing a stakeholder group on Claude's limitations. The stakeholders will use Claude on customer-facing work where confident- sounding output that contains errors would cause real harm. Which limitation is most important to communicate clearly?",
    "options": {
      "A": "Claude’s responses vary across runs of the same prompt, so stakeholders should run each prompt several times and compare outputs before using any single response.",
      "B": "Claude can produce confident-sounding output that contains unsupported claims, so human review remains essential for high-impact work.",
      "C": "Claude can produce long, detailed responses that take time to read, so stakeholders should request shorter outputs when working under tight deadlines.",
      "D": "Claude’s knowledge has a training cutoff, so stakeholders must verify any time-sensitive claims against current sources before using them."
    },
    "correctAnswer": "B",
    "explanation": "Discussion:\nSelected Answer: B",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: B Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Claude’s responses vary across runs of the same prompt, so s...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Claude can produce long, detailed responses that take time t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Claude’s knowledge has a training cutoff, so stakeholders mu...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: B."
  },
  {
    "num": 84,
    "conceptId": "prompt-clarity",
    "question": "You are reviewing a Claude-generated report whose tone is confident throughout. Which question best separates plausibility from verification?",
    "options": {
      "A": "Can each specific claim be traced to a credible source or to the supplied input material?",
      "B": "Does the response cover the topic comprehensively based on its length and section count?",
      "C": "Does the response open with a clear, well-framed statement of the main finding?",
      "D": "Does the response use varied sentence structure across sections?"
    },
    "correctAnswer": "A",
    "explanation": "Tracing each claim to a credible source separates verification from mere plausibility.",
    "isMulti": false,
    "whyCorrect": "Tracing each claim to a credible source separates verification from mere plausibility. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Does the response cover the topic comprehensively based on i...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Does the response open with a clear, well-framed statement o...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Does the response use varied sentence structure across secti...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Tracing each claim to a credible source separates verification from mere plausibility."
  },
  {
    "num": 85,
    "conceptId": "data-privacy",
    "question": "You are a knowledge worker preparing inputs for a Claude prompt. Which data type most clearly requires extra handling such as redaction or anonymization before being included in the prompt?",
    "options": {
      "A": "public press releases the company has already published",
      "B": "customer government identifiers and full payment-card numbers tied to named individuals",
      "C": "job titles taken from the company’s public organizational chart",
      "D": "generic product descriptions available on the company’s marketing site"
    },
    "correctAnswer": "B",
    "explanation": "Discussion:\nSelected Answer: B",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: B Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'public press releases the company has already published' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'job titles taken from the company’s public organizational ch...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'generic product descriptions available on the company’s mark...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: B."
  },
  {
    "num": 86,
    "conceptId": "iteration-diminishing",
    "question": "You are an operations lead integrating Claude into a multi-person team workflow. Which integration step should be performed first?",
    "options": {
      "A": "Identify where Claude adds value and where each handoff to a human occurs.",
      "B": "Pilot the integrated workflow with a small group on representative work.",
      "C": "Iterate the integrated workflow based on the findings from the pilot.",
      "D": "Document the integrated workflow and onboard the rest of the team to it."
    },
    "correctAnswer": "A",
    "explanation": "First identify where Claude adds value and where human handoffs occur before piloting or documenting.",
    "isMulti": false,
    "whyCorrect": "First identify where Claude adds value and where human handoffs occur before piloting or documenting. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Pilot the integrated workflow with a small group on represen...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Iterate the integrated workflow based on the findings from t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Document the integrated workflow and onboard the rest of the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: First identify where Claude adds value and where human handoffs occur before piloting or documenting."
  },
  {
    "num": 87,
    "conceptId": "human-oversight",
    "question": "A Claude associate is evaluating a proposed use case in which Claude would issue final hiring decisions without any human review, applying the AI Fluency Framework Delegation competency. Which classification best reflects Delegation principles?",
    "options": {
      "A": "Inappropriate for full AI delegation, because hiring decisions involve human judgment, accountability, and consequences that Delegation criteria reserve for human ownership rather than autonomous AI execution.",
      "B": "Appropriate with light human review applied only to a sample of decisions, even though Delegation criteria reserve final hiring decisions for human ownership rather than sample-based oversight after the fact.",
      "C": "Appropriate for full AI delegation, on the basis that processing speed outweighs the human judgment, accountability, and consequence considerations that Delegation criteria require for final hiring decisions.",
      "D": "Inappropriate only because of system reliability concerns rather than accountability, even though Delegation criteria classify final hiring decisions as requiring human ownership regardless of system performance."
    },
    "correctAnswer": "A",
    "explanation": "Discussion:\nSelected Answer: A",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: A Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Appropriate with light human review applied only to a sample...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Appropriate for full AI delegation, on the basis that proces...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Inappropriate only because of system reliability concerns ra...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: A."
  },
  {
    "num": 88,
    "conceptId": "primary-source",
    "question": "You are evaluating a Claude output that appears to contain hallucinated content. Which response step should be performed first when a hallucination is suspected?",
    "options": {
      "A": "Discard the entire output and regenerate the output with a fresh prompt.",
      "B": "Document the hallucination pattern in the team’s risk register for future reference.",
      "C": "Notify the user community that the output contains a hallucinated claim.",
      "D": "Pinpoint the specific claim that appears to be unsupported by available evidence."
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Discard the entire output and regenerate the output with a f...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Document the hallucination pattern in the team’s risk regist...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Notify the user community that the output contains a halluci...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D."
  },
  {
    "num": 89,
    "conceptId": "prompt-clarity",
    "question": "You are optimizing a recurring Claude workflow and must complete the diagnostic steps before changing the workflow. Which two diagnostic steps must be completed BEFORE changing the recurring workflow? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Notify executive leadership of the projected savings from the optimization.",
      "B": "Identify the steps that contribute most to time, cost, or quality issues.",
      "C": "Deploy the updated workflow across the team and monitor for adoption issues.",
      "D": "Measure the current workflow's quality, time, and cost across recent runs.",
      "E": "Document the revised workflow steps and update the team’s standard operating procedures."
    },
    "correctAnswer": "B, D",
    "explanation": "Discussion:\nSelected Answer: BD",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: BD Isiliye correct answer B, D hai.",
    "wrongOptions": {
      "A": "'Notify executive leadership of the projected savings from th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Deploy the updated workflow across the team and monitor for ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Document the revised workflow steps and update the team’s st...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: BD."
  },
  {
    "num": 90,
    "conceptId": "human-oversight",
    "question": "Before sharing a Claude-generated brief, an analyst is applying the AI Fluency Framework Discernment competency to evaluate it. Which review best reflects Discernment principles?",
    "options": {
      "A": "Accept the brief on the basis that it reads fluently and the subject matter aligns with the analyst’s professional knowledge of the topic.",
      "B": "Skip the source material check during review and rely on overall tone and logical flow as proxies for factual accuracy.",
      "C": "Review the opening paragraph and the conclusion of the brief, since these sections typically reflect the quality of the full document.",
      "D": "Conduct a systematic check of the brief against the task requirements, source material, and professional standards before sharing it."
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Accept the brief on the basis that it reads fluently and the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Skip the source material check during review and rely on ove...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Review the opening paragraph and the conclusion of the brief...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D."
  },
  {
    "num": 91,
    "conceptId": "workflow-decomposition",
    "question": "You are using Claude to redesign an employee onboarding workflow and must complete the high-level decomposition steps before specifying detailed artifacts. Which two decomposition steps must be completed BEFORE specifying exact email content and the schedule? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Pilot the onboarding workflow with a small cohort of new hires.",
      "B": "Identify the major phases of the onboarding experience.",
      "C": "Negotiate the onboarding budget with the finance department.",
      "D": "Define the overall objective of the onboarding experience.",
      "E": "Roll out the onboarding workflow to every new hire across the company."
    },
    "correctAnswer": "B, D",
    "explanation": "Discussion:\nSelected Answer: BD",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: BD Isiliye correct answer B, D hai.",
    "wrongOptions": {
      "A": "'Pilot the onboarding workflow with a small cohort of new hir...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Negotiate the onboarding budget with the finance department.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Roll out the onboarding workflow to every new hire across th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: BD."
  },
  {
    "num": 92,
    "conceptId": "iteration-diminishing",
    "question": "You are a refining a prompt over several iterations. The output drifts further from the requested template with each change. Which step is most appropriate?",
    "options": {
      "A": "Discard all prior versions and start with no record of what worked.",
      "B": "Continue making large simultaneous changes until the output happens to align.",
      "C": "Revert to the version of the prompt that produced the closest match and adjust from that baseline.",
      "D": "Stop iterating and accept the most off-target version."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Discard all prior versions and start with no record of what ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Continue making large simultaneous changes until the output ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Stop iterating and accept the most off-target version.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 93,
    "conceptId": "project-config",
    "question": "You are reviewing items proposed for inclusion in a Project that supports policy summaries. Which two items are appropriate to include in the Project? (Choose two.) Each correct answer presents part of the solution.",
    "options": {
      "A": "the summary format and the audience expectations the summaries must meet",
      "B": "the current policy library that the summaries are drawn from",
      "C": "presentation slides from a recent team training session on internal communication standards",
      "D": "active client case files maintained by a separate legal team for a different workstream",
      "E": "employee onboarding records used in a separate HR workflow managed by the same team"
    },
    "correctAnswer": "A, B",
    "explanation": "Discussion:\nSelected Answer: AB",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: AB Isiliye correct answer A, B hai.",
    "wrongOptions": {
      "C": "'presentation slides from a recent team training session on i...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'active client case files maintained by a separate legal team...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'employee onboarding records used in a separate HR workflow m...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: AB."
  },
  {
    "num": 94,
    "conceptId": "data-privacy",
    "question": "You are handling a document containing mixed-sensitivity content before using it with Claude. Which data-handling step should be performed first?",
    "options": {
      "A": "Redact sensitive fields and replace them with appropriate placeholders.",
      "B": "Classify the content of the document and identify which fields are sensitive.",
      "C": "Submit the redacted document to Claude for the intended task.",
      "D": "Review the redacted document with a peer to confirm the redaction is complete."
    },
    "correctAnswer": "B",
    "explanation": "First classify content and identify sensitive fields before redacting or submitting.",
    "isMulti": false,
    "whyCorrect": "First classify content and identify sensitive fields before redacting or submitting. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Redact sensitive fields and replace them with appropriate pl...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Submit the redacted document to Claude for the intended task...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Review the redacted document with a peer to confirm the reda...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: First classify content and identify sensitive fields before redacting or submitting."
  },
  {
    "num": 95,
    "conceptId": "iteration-diminishing",
    "question": "You are a business analyst evaluating a Claude-generated business case against the agreed acceptance criteria. Which is the correct order of evaluation steps? (1) Compare the business case with the source data and required topics. (2) Document gaps and inaccuracies for follow-up or correction. (3) Restate the acceptance criteria for the business case. (4) Decide whether to use the business case, iterate, or escalate. (5) Read the business case from beginning to end to form an initial impression.",
    "options": {
      "A": "3, 1, 5, 2, 4",
      "B": "3, 5, 1, 2, 4",
      "C": "5, 3, 1, 2, 4",
      "D": "1, 3, 5, 2, 4"
    },
    "correctAnswer": "B",
    "explanation": "The correct answer is B: B. 3, 5, 1, 2, 4.",
    "isMulti": false,
    "whyCorrect": "The correct answer is B: B. 3, 5, 1, 2, 4. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'3, 1, 5, 2, 4' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'5, 3, 1, 2, 4' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'1, 3, 5, 2, 4' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is B: B."
  },
  {
    "num": 96,
    "conceptId": "prompt-clarity",
    "question": "A finance consultant is adapting a Claude-generated narrative for a quarterly investor update. Investors have a fixed time window for the call and expect the headline result and forward outlook to be clear early. Which adaptation is most appropriate for this audience?",
    "options": {
      "A": "Lead with the quarter’s operational highlights, present the financial result in the middle for context, and close with the forward outlook.",
      "B": "Lead with the forward outlook, since investors are most interested in what comes next, and present the headline result and drivers afterward.",
      "C": "Lead with the headline result, present the key drivers concisely, and close with the forward outlook.",
      "D": "Lead with a chronological recap of the quarter’s events, present the headline result at the natural end of the recap, and conclude with the forward outlook."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Lead with the quarter’s operational highlights, present the ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Lead with the forward outlook, since investors are most inte...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Lead with a chronological recap of the quarter’s events, pre...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 97,
    "conceptId": "project-config",
    "question": "A Claude associate is evaluating whether to enable a Skill that was provided by an unfamiliar third party. Which two checks best support a sound trust decision? (Select two.)",
    "options": {
      "A": "Verify the source of the Skill against the organization's approved-Skill list before enabling it within Claude.ai or any Project the team uses for its work.",
      "B": "Review the permissions and capabilities the Skill requests and confirm that the requested access is appropriate for the task the Skill is intended to perform.",
      "C": "Treat the Skill's appearance in a public listing as sufficient validation, without confirming the source, requested permissions, or alignment with the organization's approved-Skill list.",
      "D": "Enable the Skill immediately on the basis of strong external reviews, even though its source has not been validated and its permissions remain unverified.",
      "E": "Skip permission review on the assumption that the Skill cannot exceed the boundaries of the workflow, even though Skills can request access that the task does not require."
    },
    "correctAnswer": "A, B",
    "explanation": "Correct answers: A, B. A. Verify the source of the Skill against the organization's approved-Skill list before enabling it within Claude.ai or any Project the team uses for its work.; B. Review the permissions and capabilities the Skill requests and confirm that the requested access is appropriate for the task the Skill is intended to perform..",
    "isMulti": true,
    "whyCorrect": "Correct answers: A, B. A. Verify the source of the Skill against the organization's approved-Skill list before enabling it within Claude.ai or any Project the team uses for its work.; B. Review the permissions and capabilities the Skill requests and confirm that the requested access is appropriate for the task the Skill is intended to perform.. Isiliye correct answer A, B hai.",
    "wrongOptions": {
      "C": "'Treat the Skill's appearance in a public listing as sufficie...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Enable the Skill immediately on the basis of strong external...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Skip permission review on the assumption that the Skill cann...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct answers: A, B."
  },
  {
    "num": 98,
    "conceptId": "human-oversight",
    "question": "A knowledge worker is explaining the purpose of an organizational AI governance framework to a colleague. Which description is most accurate?",
    "options": {
      "A": "A governance framework defines approved tools, allowed data, required reviews, and reporting paths so AI is used consistently and accountably.",
      "B": "A governance framework lists the AI tools the organization licenses and the cost of each, so users can pick the most cost-effective tool for each task.",
      "C": "A governance framework defines the training every employee must complete before using AI tools, with separate requirements for each tool the organization licenses.",
      "D": "A governance framework documents the AI policies the organization is legally required to adopt, focusing on regulatory compliance rather than day-to-day use."
    },
    "correctAnswer": "A",
    "explanation": "Discussion:\nSelected Answer: A",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: A Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'A governance framework lists the AI tools the organization l...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'A governance framework defines the training every employee m...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'A governance framework documents the AI policies the organiz...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: A."
  },
  {
    "num": 99,
    "conceptId": "prompt-clarity",
    "question": "You are sorting Claude output structural defects by which most undermines clarity. Which structural defect most severely undermines the clarity of the output?",
    "options": {
      "A": "A single subheading is shorter than the other subheadings in the document.",
      "B": "Two adjacent paragraphs present the same information using inconsistent terminology.",
      "C": "Typographic inconsistencies appear throughout multiple sections of the document.",
      "D": "The main conclusion contradicts the evidence presented in the body."
    },
    "correctAnswer": "D",
    "explanation": "A conclusion that contradicts the evidence in the body fundamentally undermines clarity because the reader cannot determine what the document actually argues.",
    "isMulti": false,
    "whyCorrect": "A conclusion that contradicts the evidence in the body fundamentally undermines clarity because the reader cannot determine what the document actually argues. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'A single subheading is shorter than the other subheadings in...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Two adjacent paragraphs present the same information using i...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Typographic inconsistencies appear throughout multiple secti...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: A conclusion that contradicts the evidence in the body fundamentally undermines clarity because the reader cannot determine what the document actually argues."
  },
  {
    "num": 100,
    "conceptId": "primary-source",
    "question": "You are a communications manager validating a Claude-generated newsletter that includes a specific industry growth figure. The figure appears in three trade-press articles, but none of them link to the underlying study. Which validation step is correct?",
    "options": {
      "A": "Accept the figure because three trade-press articles repeat it.",
      "B": "Remove the source attribution and present the figure as common knowledge.",
      "C": "Locate the original study referenced by the trade-press articles and verify the figure in the primary source.",
      "D": "Use the highest figure across the three articles to make the newsletter more compelling."
    },
    "correctAnswer": "C",
    "explanation": "Verify by locating the primary source (the original study) rather than relying on secondary trade-press repetition.",
    "isMulti": false,
    "whyCorrect": "Verify by locating the primary source (the original study) rather than relying on secondary trade-press repetition. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Accept the figure because three trade-press articles repeat ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Remove the source attribution and present the figure as comm...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Use the highest figure across the three articles to make the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Verify by locating the primary source (the original study) rather than relying on secondary trade-press repetition."
  },
  {
    "num": 101,
    "conceptId": "workflow-decomposition",
    "question": "A senior project coordinator has been asked to use Claude to produce an end-of-year report covering finance, operations, and customer outcomes. The three areas have separate data owners and separate source documents. Which decomposition approach is most likely to produce a strong report?",
    "options": {
      "A": "Define the report goals, gather inputs per section, draft each section in its own prompt, then synthesize the executive summary from the drafted sections.",
      "B": "Draft the executive summary first to anchor the report's narrative, then draft each section so it supports the summary already written.",
      "C": "Draft the three sections in parallel, each using a section-specific prompt, then concatenate and lightly edit the outputs into the final report.",
      "D": "Prompt Claude once with all source documents and request the full report, including the executive summary, in a single pass."
    },
    "correctAnswer": "A",
    "explanation": "Discussion:\nSelected Answer: A",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: A Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Draft the executive summary first to anchor the report's nar...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Draft the three sections in parallel, each using a section-s...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Prompt Claude once with all source documents and request the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: A."
  },
  {
    "num": 102,
    "conceptId": "data-privacy",
    "question": "A customer-success associate is drafting a prompt that asks Claude to summarize a customer issue from the case file. The case file includes the customer's full government identifier, home address, name, account number, and the description of the issue. The summary the associate needs is about the issue. Which approach is most appropriate?",
    "options": {
      "A": "Submit the full case file and include an instruction telling Claude not to reference the government identifier or the home address in the summary.",
      "B": "Replace the government identifier with the customer’s name and the home address with the account number, since names and account numbers are less sensitive than identifiers and addresses.",
      "C": "Remove or redact the government identifier and the home address before submitting the prompt, since neither is necessary for a summary of the issue.",
      "D": "Submit only the description of the issue and add the customer’s name for context, since the description plus a name is sufficient to produce a summary."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Submit the full case file and include an instruction telling...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Replace the government identifier with the customer’s name a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Submit only the description of the issue and add the custome...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 103,
    "conceptId": "prompt-clarity",
    "question": "You are a process consultant integrating Claude into an existing weekly workflow. Which is the correct order of integration steps? (1) Pilot the integrated workflow with a small group and gather feedback. (2) Document the current workflow steps, owners, and decision points. (3) Update the documented workflow and roll it out to the broader team. (4) Identify the steps where Claude can augment work and where humans must remain. (5) Define the inputs Claude needs, the outputs Claude returns, and the hand-offs around each step.",
    "options": {
      "A": "2, 4, 5, 1, 3",
      "B": "2, 5, 4, 1, 3",
      "C": "4, 2, 5, 1, 3",
      "D": "1, 2, 4, 5, 3"
    },
    "correctAnswer": "A",
    "explanation": "Discussion:\nSelected Answer: A",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: A Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'2, 5, 4, 1, 3' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'4, 2, 5, 1, 3' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'1, 2, 4, 5, 3' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: A."
  },
  {
    "num": 104,
    "conceptId": "iteration-diminishing",
    "question": "You are reviewing claims about prompt iteration that colleagues have made during recent training. Which two claims about prompt iteration are accurate? (Select two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "Iteration should stop only after every possible alternative phrasing has been tried.",
      "B": "Repeatedly resubmitting the same prompt is the most reliable way to improve the output.",
      "C": "Iteration is most productive when each change targets a specifically diagnosed weakness.",
      "D": "More iterations always produce a better output, regardless of what was changed.",
      "E": "Comparing the output against the original criteria validates whether the iteration helped."
    },
    "correctAnswer": "C, E",
    "explanation": "Targeted iteration addressing specific weaknesses (C) and validating against original criteria (E) are accurate practices.",
    "isMulti": true,
    "whyCorrect": "Targeted iteration addressing specific weaknesses (C) and validating against original criteria (E) are accurate practices. Isiliye correct answer C, E hai.",
    "wrongOptions": {
      "A": "'Iteration should stop only after every possible alternative ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Repeatedly resubmitting the same prompt is the most reliable...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'More iterations always produce a better output, regardless o...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Targeted iteration addressing specific weaknesses (C) and validating against original criteria (E) are accurate practices."
  },
  {
    "num": 105,
    "conceptId": "iteration-diminishing",
    "question": "You are validating evaluation criteria proposed for a Claude-generated business brief. Which three criteria are valid for evaluating a Claude-generated brief? (Select three.) Each correct answer presents part of the solution.",
    "options": {
      "A": "Factual accuracy of the claims against the supplied source material",
      "B": "Consistency of the writing style with the organization's established tone guidelines",
      "C": "Alignment of the output with the requested format and length constraints",
      "D": "Total word count of the output relative to general industry benchmarks for business briefs",
      "E": "Presence of an executive-summary section regardless of whether one was requested"
    },
    "correctAnswer": "A, B, C",
    "explanation": "Correct answers: A, B, C. A. Factual accuracy of the claims against the supplied source material; B. Consistency of the writing style with the organization's established tone guidelines; C. Alignment of the output with the requested format and length constraints.",
    "isMulti": true,
    "whyCorrect": "Correct answers: A, B, C. A. Factual accuracy of the claims against the supplied source material; B. Consistency of the writing style with the organization's established tone guidelines; C. Alignment of the output with the requested format and length constraints. Isiliye correct answer A, B, C hai.",
    "wrongOptions": {
      "D": "'Total word count of the output relative to general industry ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Presence of an executive-summary section regardless of wheth...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct answers: A, B, C."
  },
  {
    "num": 106,
    "conceptId": "human-oversight",
    "question": "A customer-success team member is reviewing a Claude-generated customer health-check report against the agreed deliverable list. The report covers all five required topics, but the renewal-risk section names only one risk factor where the deliverable specification calls for renewal risk to be assessed across pricing, product fit, and stakeholder change. Which conclusion is best supported?",
    "options": {
      "A": "The report’s completeness cannot be assessed from the deliverable specification alone; the customer should review the output and confirm whether the renewal-risk depth is sufficient.",
      "B": "The report does not meet the deliverable specification because a section that addresses only one of three required risk dimensions counts as a missing section.",
      "C": "The report meets the deliverable specification because all five required topics appear and the renewal-risk section is present in the output.",
      "D": "The report meets the topic-level requirements but the renewal-risk section is under-scoped against the specification and should be expanded before delivery."
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'The report’s completeness cannot be assessed from the delive...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'The report does not meet the deliverable specification becau...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The report meets the deliverable specification because all f...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D."
  },
  {
    "num": 107,
    "conceptId": "project-config",
    "question": "A manager is deciding what changes to make while conducting a Memory maintenance review for a long- running workflow. Which two actions best support Memory quality over time? (Select two.)",
    "options": {
      "A": "Delete all memories as the maintenance action to ensure a clean slate, then allow Claude to rebuild context organically through subsequent workflow runs.",
      "B": "Export the current memories as a backup before making changes, so prior context can be restored if a maintenance edit unintentionally removes information the workflow still depends on.",
      "C": "Leave all memories untouched on the basis that the workflow has been running consistently and no output-quality issues have been reported.",
      "D": "Disable Memory entirely to eliminate the risk of stale entries surfacing in future workflow runs.",
      "E": "Identify and edit or delete entries that are stale, inaccurate, or no longer relevant, and add context Claude has not automatically captured but the workflow continues to need."
    },
    "correctAnswer": "B, E",
    "explanation": "Correct answers: B, E. B. Export the current memories as a backup before making changes, so prior context can be restored if a maintenance edit unintentionally removes information the workflow still depends on.; E. Identify and edit or delete entries that are stale, inaccurate, or no longer relevant, and add context Claude has not automatically captured but the workflow continues to need..",
    "isMulti": true,
    "whyCorrect": "Correct answers: B, E. B. Export the current memories as a backup before making changes, so prior context can be restored if a maintenance edit unintentionally removes information the workflow still depends on.; E. Identify and edit or delete entries that are stale, inaccurate, or no longer relevant, and add context Claude has not automatically captured but the workflow continues to need.. Isiliye correct answer B, E hai.",
    "wrongOptions": {
      "A": "'Delete all memories as the maintenance action to ensure a cl...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Leave all memories untouched on the basis that the workflow ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Disable Memory entirely to eliminate the risk of stale entri...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct answers: B, E."
  },
  {
    "num": 108,
    "conceptId": "code-execution",
    "question": "An analyst has been asked to compute summary statistics from an uploaded sales data file and produce a chart for a weekly report. Which output approach best fits the task?",
    "options": {
      "A": "Ask Claude to estimate the summary statistics from a brief preview of the file, accepting unverified figures rather than running the calculations against the full uploaded dataset.",
      "B": "Produce a written placeholder for the chart in the chat response without generating the actual visualization, leaving the weekly report without the visual output it requires.",
      "C": "Request a narrative description of the data in the chat response without computing values, leaving the summary statistics and the chart unproduced and the weekly report incomplete.",
      "D": "Use Code Execution to perform the calculations and generate the chart, then verify the computed results against the source data before sharing the output."
    },
    "correctAnswer": "D",
    "explanation": "Code Execution performs accurate calculations and generates charts, with verification against source data.",
    "isMulti": false,
    "whyCorrect": "Code Execution performs accurate calculations and generates charts, with verification against source data. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Ask Claude to estimate the summary statistics from a brief p...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Produce a written placeholder for the chart in the chat resp...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Request a narrative description of the data in the chat resp...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Code Execution performs accurate calculations and generates charts, with verification against source data."
  },
  {
    "num": 109,
    "conceptId": "project-config",
    "question": "You are writing system-level instructions for a Project that supports recurring writing tasks. Which step should be performed first when writing the system-level instructions?",
    "options": {
      "A": "Refine the drafted instructions based on observed gaps from validation runs.",
      "B": "Validate the drafted instructions against representative requests for the Project.",
      "C": "Define the purpose of the Project and the boundaries the instructions must respect.",
      "D": "Distribute the finalized instructions to collaborators on the Project."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Refine the drafted instructions based on observed gaps from ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Validate the drafted instructions against representative req...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Distribute the finalized instructions to collaborators on th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 110,
    "conceptId": "human-oversight",
    "question": "A business analyst has been asked to use Claude to extract requirements from a recorded stakeholder interview transcript. The transcript is approximately 90 minutes long and covers multiple topics. Which approach is most likely to produce a usable structured output?",
    "options": {
      "A": "Provide the transcript along with a structured prompt that requests must-haves, nice-to-haves, open questions, and conflicts as separate sections.",
      "B": "Provide the transcript and ask Claude to produce a single ranked list of requirements, since a single list is easier for stakeholders to review than separate sections.",
      "C": "Provide the transcript and ask Claude to summarize it; extract requirements from the summary in a second pass since two passes catch more detail.",
      "D": "Provide the transcript and ask Claude to produce a chronological list of every statement that contains a verb, then classify each statement as a requirement or not."
    },
    "correctAnswer": "A",
    "explanation": "A structured prompt requesting categorized output (must-haves, nice-to-haves, open questions, conflicts) produces the most usable structured output.",
    "isMulti": false,
    "whyCorrect": "A structured prompt requesting categorized output (must-haves, nice-to-haves, open questions, conflicts) produces the most usable structured output. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Provide the transcript and ask Claude to produce a single ra...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Provide the transcript and ask Claude to summarize it; extra...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Provide the transcript and ask Claude to produce a chronolog...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: A structured prompt requesting categorized output (must-haves, nice-to-haves, open questions, conflicts) produces the most usable structured output."
  },
  {
    "num": 111,
    "conceptId": "prompt-clarity",
    "question": "You received a vague request to “look at our pricing.” After discovery, the goal is confirmed: produce a structured competitor-pricing summary the team can act on, not new pricing ideas. Which strategy best fits the clarified task?",
    "options": {
      "A": "Use a divergent brainstorming approach to generate a wide range of possible competitor-pricing observations, then narrow to the most likely ones.",
      "B": "Use a comparative analysis strategy that contrasts the company’s pricing against a single named competitor, since pairwise comparison produces the clearest output.",
      "C": "Use a research strategy that gathers structured information about competitor pricing, names sources, and notes confidence in each finding.",
      "D": "Use an open conversational strategy that explores competitor pricing iteratively across several prompts, allowing the structure to emerge from the conversation."
    },
    "correctAnswer": "C",
    "explanation": "Discussion:\nSelected Answer: C",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: C Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Use a divergent brainstorming approach to generate a wide ra...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Use a comparative analysis strategy that contrasts the compa...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Use an open conversational strategy that explores competitor...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: C."
  },
  {
    "num": 112,
    "conceptId": "human-oversight",
    "question": "You are a customer-success manager considering whether to escalate a Claude-generated response. Which factor most strongly raises the impact of the output and supports escalation before external use?",
    "options": {
      "A": "The response is an internal draft summarizing the associate’s notes from a customer call for their own reference.",
      "B": "The response is a casual rephrasing of an internal team status update.",
      "C": "The response is a brief internal announcement about an upcoming team all-hands meeting.",
      "D": "The response is an unchanged draft for a paying customer that includes a service-level commitment."
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'The response is an internal draft summarizing the associate’...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'The response is a casual rephrasing of an internal team stat...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The response is a brief internal announcement about an upcom...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D."
  },
  {
    "num": 113,
    "conceptId": "data-privacy",
    "question": "An HR associate is preparing to use Claude on a sensitive personnel matter. The organization’s AI policy explicitly states that information related to ongoing investigations must not be entered into AI tools. Which response best aligns with the policy?",
    "options": {
      "A": "Enter the investigation-related information into Claude only after the investigation closes, since the policy applies during the investigation period.",
      "B": "Refrain from entering investigation-related information into Claude and consult HR leadership for an approved alternative way to handle the matter.",
      "C": "Enter the investigation-related information into Claude in an Incognito chat, since Incognito chats do not retain information and therefore fall outside the policy's intent.",
      "D": "Enter a paraphrased version of the investigation-related information that removes identifying details, since paraphrasing addresses the spirit of the policy."
    },
    "correctAnswer": "B",
    "explanation": "When policy explicitly prohibits entering investigation information into AI tools, refrain and seek an approved alternative.",
    "isMulti": false,
    "whyCorrect": "When policy explicitly prohibits entering investigation information into AI tools, refrain and seek an approved alternative. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Enter the investigation-related information into Claude only...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Enter the investigation-related information into Claude in a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Enter a paraphrased version of the investigation-related inf...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: When policy explicitly prohibits entering investigation information into AI tools, refrain and seek an approved alternative."
  },
  {
    "num": 114,
    "conceptId": "degraded-conversations",
    "question": "Your conversation context has grown long, and the model is producing inconsistent outputs. Which context-management step should be performed first?",
    "options": {
      "A": "Switch to a different model in the hope that the new model handles long context better.",
      "B": "Continue the existing conversation and hope that the model recovers consistency.",
      "C": "Summarize the prior conversation into a concise statement of the current state.",
      "D": "Start a fresh conversation and repaste only the essential prior context."
    },
    "correctAnswer": "C",
    "explanation": "First summarize the prior conversation into a concise current-state statement before starting fresh.",
    "isMulti": false,
    "whyCorrect": "First summarize the prior conversation into a concise current-state statement before starting fresh. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Switch to a different model in the hope that the new model h...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Continue the existing conversation and hope that the model r...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Start a fresh conversation and repaste only the essential pr...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: First summarize the prior conversation into a concise current-state statement before starting fresh."
  },
  {
    "num": 115,
    "conceptId": "iteration-diminishing",
    "question": "A knowledge worker is iterating a prompt that has produced a partly acceptable response. Which refinement practice produces the strongest learning across iterations?",
    "options": {
      "A": "Change one identifiable element per iteration, capture the change and its effect, and adjust another element only after the first is settled.",
      "B": "Restart from a fresh prompt each iteration so that prior wording does not bias the next attempt, and pick the strongest response at the end.",
      "C": "Make several related changes in one iteration when they target the same weakness, and revert the whole set if the combined change makes the output worse.",
      "D": "Address every weakness the response showed in a single revision, then compare the revised output against the prior version."
    },
    "correctAnswer": "A",
    "explanation": "Discussion:\nSelected Answer: A",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: A Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Restart from a fresh prompt each iteration so that prior wor...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Make several related changes in one iteration when they targ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Address every weakness the response showed in a single revis...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: A."
  },
  {
    "num": 116,
    "conceptId": "project-config",
    "question": "You are reviewing Connector setups that colleagues have proposed for various tasks. Which two Connector setups represent safe and appropriate uses? (Choose two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "a Connector that links to the personnel-records system for team leads to support scheduling tasks",
      "B": "a Connector that links to the team's project management workspace under approved scope",
      "C": "a Connector that links to a personal cloud storage account where team member’s store working drafts alongside personal files",
      "D": "a read-only Connector that links to the public knowledge base for reference content",
      "E": "a Connector that links to the payroll system to allow team members to submit expense reports directly"
    },
    "correctAnswer": "B, D",
    "explanation": "Discussion:\nSelected Answer: BD",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: BD Isiliye correct answer B, D hai.",
    "wrongOptions": {
      "A": "'a Connector that links to the personnel-records system for t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'a Connector that links to a personal cloud storage account w...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'a Connector that links to the payroll system to allow team m...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: BD."
  },
  {
    "num": 117,
    "conceptId": "primary-source",
    "question": "A procurement manager is evaluating a Claude-generated vendor proposal summary against the original RFP. The RFP lists twelve numbered requirements across pricing, security, and service levels. How should the summary be checked for completeness?",
    "options": {
      "A": "Compare the section headings in the summary with the section headings in the RFP, since matching headings indicate matching content.",
      "B": "Spot-check three random requirements from the RFP against the summary, since random sampling is the standard completeness check for summaries.",
      "C": "Map each numbered requirement in the RFP to a section of the summary and confirm that every requirement is represented.",
      "D": "Read the summary end to end and confirm that it forms a coherent response to the RFP, since coherent summaries typically reflect coverage of the source."
    },
    "correctAnswer": "C",
    "explanation": "The correct answer is C: C. Map each numbered requirement in the RFP to a section of the summary and confirm that every requirement is represented..",
    "isMulti": false,
    "whyCorrect": "The correct answer is C: C. Map each numbered requirement in the RFP to a section of the summary and confirm that every requirement is represented.. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Compare the section headings in the summary with the section...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Spot-check three random requirements from the RFP against th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Read the summary end to end and confirm that it forms a cohe...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct answer is C: C."
  },
  {
    "num": 118,
    "conceptId": "prompt-clarity",
    "question": "A communications manager is drafting a prompt for Claude to produce a quarterly newsletter for store managers in three regions. The agreed key messages, regional details, and a prior newsletter the team liked are all available. Which prompt approach is most likely to produce a usable first draft?",
    "options": {
      "A": "Attach the prior newsletter, and ask Claude to match its tone and structure while incorporating the new key messages for the three named regions.",
      "B": "Attach the prior newsletter and the agreed key messages, and ask Claude to produce a similar newsletter for this quarter.",
      "C": "Provide the agreed key messages and the three regions, and ask Claude to choose an appropriate length and tone for store managers.",
      "D": "Name the audience, the three regions, the length, the tone, and the agreed key messages, and reference the prior newsletter only as a tone example."
    },
    "correctAnswer": "D",
    "explanation": "Option D provides all necessary parameters explicitly (audience, regions, length, tone, key messages) while using the prior newsletter only as a reference point for tone.",
    "isMulti": false,
    "whyCorrect": "Option D provides all necessary parameters explicitly (audience, regions, length, tone, key messages) while using the prior newsletter only as a reference point for tone. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Attach the prior newsletter, and ask Claude to match its ton...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Attach the prior newsletter and the agreed key messages, and...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Provide the agreed key messages and the three regions, and a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Option D provides all necessary parameters explicitly (audience, regions, length, tone, key messages) while using the prior newsletter only as a reference point for tone."
  },
  {
    "num": 119,
    "conceptId": "human-oversight",
    "question": "You are an HR specialist sorting potential ethical risks of a Claude-supported workflow. Which two risks pose the highest ethical concern in an HR-adjacent workflow? (Choose two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "decisions that materially affect a person’s employment without human accountability",
      "B": "a clerical typo in a routine internal calendar invitation",
      "C": "inconsistent tone and formatting across internal HR communications sent to employees",
      "D": "inconsistent use of the company’s preferred dash style across documents",
      "E": "outputs that systematically disadvantage members of a protected group"
    },
    "correctAnswer": "A, E",
    "explanation": "Discussion:\nSelected Answer: AE",
    "isMulti": true,
    "whyCorrect": "Discussion:\nSelected Answer: AE Isiliye correct answer A, E hai.",
    "wrongOptions": {
      "B": "'a clerical typo in a routine internal calendar invitation' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'inconsistent tone and formatting across internal HR communic...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'inconsistent use of the company’s preferred dash style acros...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: AE."
  },
  {
    "num": 120,
    "conceptId": "workflow-decomposition",
    "question": "You are an operations assistant asking Claude to summarize 200 weekly metric records across multiple regions. Which output format communicates the data most clearly?",
    "options": {
      "A": "a bulleted list of observations grouped by region without consistent metrics across entries",
      "B": "a narrative summary organized by region, describing trends and notable records in prose",
      "C": "a series of regional narrative briefs, each describing weekly performance in paragraph form",
      "D": "a structured table with one record per row and one metric per column, sorted by region"
    },
    "correctAnswer": "D",
    "explanation": "Discussion:\nSelected Answer: D",
    "isMulti": false,
    "whyCorrect": "Discussion:\nSelected Answer: D Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'a bulleted list of observations grouped by region without co...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'a narrative summary organized by region, describing trends a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'a series of regional narrative briefs, each describing weekl...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Discussion:\nSelected Answer: D."
  },
  {
    "num": 121,
    "conceptId": "human-oversight",
    "question": "You are a Claude associate assessing a proposed Claude use case before approving it for your team. Which is the correct order of assessment steps? (1) Compare the use case against the organization's policies and the relevant regulatory considerations. (2) Document the assessment outcome and the rationale for traceability. (3) Identify the audience, decision impact, and reversibility of the outputs. (4) Decide whether the use case proceeds, requires modification, or is declined. (5) Identify the data types involved and whether sensitive data is implicated.",
    "options": {
      "A": "3, 1, 5, 4, 2",
      "B": "3, 5, 1, 4, 2",
      "C": "1, 3, 5, 4, 2",
      "D": "5, 3, 1, 4, 2"
    },
    "correctAnswer": "B",
    "explanation": "Correct order: (3) Identify the audience, decision impact, and reversibility of the outputs, (5) Identify the data types involved and whether sensitive data is implicated, (1) Compare the use case against the organization's policies and the relevant regulatory considerations, (4) Decide whether the use case proceeds, requires modification, or is declined, (2) Document the assessment outcome and the rationale for traceability.",
    "isMulti": false,
    "whyCorrect": "Correct order: (3) Identify the audience, decision impact, and reversibility of the outputs, (5) Identify the data types involved and whether sensitive data is implicated, (1) Compare the use case against the organization's policies and the relevant regulatory considerations, (4) Decide whether the use case proceeds, requires modification, or is declined, (2) Document the assessment outcome and the rationale for traceability. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'3, 1, 5, 4, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'1, 3, 5, 4, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'5, 3, 1, 4, 2' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct order: (3) Identify the audience, decision impact, and reversibility of the outputs, (5) Identify the data types involved and whether sensitive data is implicated, (1) Compare the use case against the organization's policies and the relevant regulatory considerations, (4) Decide whether the use case proceeds, requires modification, or is declined, (2) Document the assessment outcome and the rationale for traceability."
  },
  {
    "num": 122,
    "conceptId": "prompt-clarity",
    "question": "You are an analyst reviewing a Claude response that addresses two of three required questions and skips the third. Which prompt element most likely needs strengthening?",
    "options": {
      "A": "The context provided to Claude should be expanded with additional background detail about the subject matter.",
      "B": "The output format should be revised to allow Claude to determine the appropriate structure for each question's answer.",
      "C": "The role assigned to Claude should be changed to a more specialized expert persona to increase response depth.",
      "D": "The task statement should explicitly enumerate the three required questions and require an answer to each."
    },
    "correctAnswer": "D",
    "explanation": "When Claude skips a required question, the root cause is most likely an underspecified task statement. Explicitly enumerating all required questions and requiring an answer to each directly addresses this gap.",
    "isMulti": false,
    "whyCorrect": "When Claude skips a required question, the root cause is most likely an underspecified task statement. Explicitly enumerating all required questions and requiring an answer to each directly addresses this gap. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'The context provided to Claude should be expanded with addit...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'The output format should be revised to allow Claude to deter...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The role assigned to Claude should be changed to a more spec...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: When Claude skips a required question, the root cause is most likely an underspecified task statement."
  },
  {
    "num": 123,
    "conceptId": "project-config",
    "question": "You are setting up a Connector for a shared data source that several colleagues will use. Which Connector setup step should be performed first?",
    "options": {
      "A": "Confirm that you have appropriate access permissions to the data source and that sharing it through a Connector complies with your organization's data governance policies.",
      "B": "Connect the data source immediately and grant access to all colleagues who might need it, then verify permissions afterward.",
      "C": "Upload a copy of the data source as a static file to Project knowledge instead, since Connectors introduce unnecessary complexity for shared access.",
      "D": "Ask each colleague to set up their own individual Connector to the same data source so access is managed separately per user."
    },
    "correctAnswer": "A",
    "explanation": "Before setting up a Connector for a shared data source, you must first confirm appropriate access permissions and ensure compliance with data governance policies. This prevents unauthorized data exposure.",
    "isMulti": false,
    "whyCorrect": "Before setting up a Connector for a shared data source, you must first confirm appropriate access permissions and ensure compliance with data governance policies. This prevents unauthorized data exposure. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Connect the data source immediately and grant access to all ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Upload a copy of the data source as a static file to Project...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ask each colleague to set up their own individual Connector ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Before setting up a Connector for a shared data source, you must first confirm appropriate access permissions and ensure compliance with data governance policies."
  },
  {
    "num": 124,
    "conceptId": "human-oversight",
    "question": "An HR team member is reviewing a Claude-drafted set of interview questions intended for use across all candidates for a single role. The questions will be asked verbatim in every interview. Which review practice is most important before the questions are adopted?",
    "options": {
      "A": "Review each question for fairness, relevance to the role requirements, and potential for introducing bias against any protected group.",
      "B": "Check that the questions are written at a reading level appropriate for the interviewer, since the interviewer will be reading them aloud.",
      "C": "Confirm that the total number of questions matches the number used in the previous hiring round for consistency across cycles.",
      "D": "Verify that Claude used a sufficiently large sample of interview questions from external sources when generating the draft."
    },
    "correctAnswer": "A",
    "explanation": "When interview questions will be used verbatim across all candidates, fairness and bias review is the most critical step. Questions must be relevant to the role and free from bias against any protected group to ensure equitable hiring practices.",
    "isMulti": false,
    "whyCorrect": "When interview questions will be used verbatim across all candidates, fairness and bias review is the most critical step. Questions must be relevant to the role and free from bias against any protected group to ensure equitable hiring practices. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Check that the questions are written at a reading level appr...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Confirm that the total number of questions matches the numbe...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Verify that Claude used a sufficiently large sample of inter...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: When interview questions will be used verbatim across all candidates, fairness and bias review is the most critical step."
  },
  {
    "num": 125,
    "conceptId": "workflow-decomposition",
    "question": "You are a marketing manager using Claude to research a new market segment. Which research step should be performed first?",
    "options": {
      "A": "Generate a final research report combining every Claude output produced.",
      "B": "Submit a series of Claude prompts to gather information across the segment.",
      "C": "Validate the gathered information against authoritative external sources.",
      "D": "Define the specific research questions that must be answered for the segment."
    },
    "correctAnswer": "D",
    "explanation": "First define the specific research questions before gathering or validating information.",
    "isMulti": false,
    "whyCorrect": "First define the specific research questions before gathering or validating information. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Generate a final research report combining every Claude outp...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Submit a series of Claude prompts to gather information acro...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Validate the gathered information against authoritative exte...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: First define the specific research questions before gathering or validating information."
  },
  {
    "num": 126,
    "conceptId": "project-config",
    "question": "An HR business partner is configuring two separate Projects for two distinct client engagements. Which configuration best prevents context bleed between the two engagements?",
    "options": {
      "A": "Set up each Project with its own distinct memory context, knowledge sources, and instructions, and verify that information from one Project does not appear in the other Project's responses.",
      "B": "Use a single shared Project for both client engagements with combined memory, knowledge sources, and instructions, on the assumption that Claude will keep the two clients' contexts separate without configuration.",
      "C": "Configure both Projects to share the same memory context to reduce setup effort, even though shared memory between unrelated client engagements is precisely the configuration that produces context bleed.",
      "D": "Skip Project configuration entirely and use general chats for both engagements, which provides no scoped memory contexts and offers no structural separation between the two clients' work streams."
    },
    "correctAnswer": "A",
    "explanation": "Projects function as isolated containers for managing project-specific knowledge, instructions, and histories. Separate Projects with distinct configurations prevent cross-tenant contamination.",
    "isMulti": false,
    "whyCorrect": "Projects function as isolated containers for managing project-specific knowledge, instructions, and histories. Separate Projects with distinct configurations prevent cross-tenant contamination. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Use a single shared Project for both client engagements with...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Configure both Projects to share the same memory context to ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Skip Project configuration entirely and use general chats fo...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Projects function as isolated containers for managing project-specific knowledge, instructions, and histories."
  },
  {
    "num": 127,
    "conceptId": "context-windows",
    "question": "You are an operations assistant selecting a model for a recurring meeting-summary task that does not require deep reasoning and runs at moderate volume. Which model selection best aligns with the requirements?",
    "options": {
      "A": "Select the deepest-reasoning tier to ensure the highest possible summary quality for every meeting.",
      "B": "Select a fast, cost-effective tier such as Haiku, since the task does not require deep reasoning and the volume is moderate.",
      "C": "Rotate through all available model tiers each week and compare results to determine which tier performs best over time.",
      "D": "Select the mid-tier Sonnet model because it is always the correct default choice regardless of task requirements."
    },
    "correctAnswer": "B",
    "explanation": "For a recurring task that does not require deep reasoning and runs at moderate volume, the fastest, most cost-effective tier (Haiku) is the appropriate choice. This balances speed, cost, and sufficient quality for straightforward meeting summarization.",
    "isMulti": false,
    "whyCorrect": "For a recurring task that does not require deep reasoning and runs at moderate volume, the fastest, most cost-effective tier (Haiku) is the appropriate choice. This balances speed, cost, and sufficient quality for straightforward meeting summarization. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Select the deepest-reasoning tier to ensure the highest poss...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Rotate through all available model tiers each week and compa...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Select the mid-tier Sonnet model because it is always the co...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: For a recurring task that does not require deep reasoning and runs at moderate volume, the fastest, most cost-effective tier (Haiku) is the appropriate choice."
  },
  {
    "num": 128,
    "conceptId": "human-oversight",
    "question": "You are a project manager reviewing Claude usage approaches that teammates have proposed for a project workflow. Which two workflow steps are well-suited for Claude support? (Choose two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "approving a final external press release without any human review.",
      "B": "issuing legally binding contractual commitments on behalf of the company.",
      "C": "deciding promotion outcomes for staff based solely on the model's judgment.",
      "D": "synthesizing a literature review across many uploaded research documents.",
      "E": "drafting a structured project status update from a set of meeting notes."
    },
    "correctAnswer": "D, E",
    "explanation": "Synthesizing literature reviews (D) and drafting status updates from notes (E) are well-suited for Claude support.",
    "isMulti": true,
    "whyCorrect": "Synthesizing literature reviews (D) and drafting status updates from notes (E) are well-suited for Claude support. Isiliye correct answer D, E hai.",
    "wrongOptions": {
      "A": "'approving a final external press release without any human r...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'issuing legally binding contractual commitments on behalf of...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'deciding promotion outcomes for staff based solely on the mo...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Synthesizing literature reviews (D) and drafting status updates from notes (E) are well-suited for Claude support."
  },
  {
    "num": 129,
    "conceptId": "context-windows",
    "question": "You are an operations lead mapping production tasks to Claude model strengths to set realistic expectations. Which two production tasks fit Claude’s strengths most clearly? (Choose two.) Each correct answer presents a complete solution.",
    "options": {
      "A": "monitoring a live sensor data stream and flagging anomalies as they occur in real time.",
      "B": "issuing a binding legal determination based solely on Claude's analysis of case documents.",
      "C": "drafting a tone-and-audience-aware customer-facing email under human review.",
      "D": "calculating the precise settlement value of a derivative contract using live market inputs.",
      "E": "synthesizing a single executive summary across many long source documents."
    },
    "correctAnswer": "C, E",
    "explanation": "Drafting audience-aware emails under review (C) and synthesizing summaries across documents (E) fit Claude's strengths.",
    "isMulti": true,
    "whyCorrect": "Drafting audience-aware emails under review (C) and synthesizing summaries across documents (E) fit Claude's strengths. Isiliye correct answer C, E hai.",
    "wrongOptions": {
      "A": "'monitoring a live sensor data stream and flagging anomalies ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'issuing a binding legal determination based solely on Claude...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'calculating the precise settlement value of a derivative con...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Drafting audience-aware emails under review (C) and synthesizing summaries across documents (E) fit Claude's strengths."
  },
  {
    "num": 130,
    "conceptId": "primary-source",
    "question": "You are a knowledge worker reviewing a Claude-generated brief that asserts a \"well-known industry standard\" without naming any source. How should this assertion be handled?",
    "options": {
      "A": "Treat the assertion as unverified, and either source it from an authoritative reference or remove it.",
      "B": "Accept the assertion because the phrase \"well-known\" is reassuring and indicates the claim is common knowledge.",
      "C": "Republish the brief unchanged because the claim sounds authoritative and confident in tone.",
      "D": "Strengthen the assertion by adding more confident wording to make it even more persuasive."
    },
    "correctAnswer": "A",
    "explanation": "Unsourced claims, even those labeled 'well-known,' must be treated as unverified. Either find an authoritative source to support the claim or remove it from the output.",
    "isMulti": false,
    "whyCorrect": "Unsourced claims, even those labeled 'well-known,' must be treated as unverified. Either find an authoritative source to support the claim or remove it from the output. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Accept the assertion because the phrase \"well-known\" is reas...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Republish the brief unchanged because the claim sounds autho...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Strengthen the assertion by adding more confident wording to...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Unsourced claims, even those labeled 'well-known,' must be treated as unverified."
  },
  {
    "num": 131,
    "conceptId": "project-config",
    "question": "You are a product manager asking Claude to produce an interactive prototype of a small landing-page mockup that the team will iterate on and share. Which Claude feature is best suited to this output?",
    "options": {
      "A": "A Research run that produces a multi-page external survey of competitor sites.",
      "B": "A short conversational reply embedded inline in the chat history.",
      "C": "An Artifact, which presents standalone editable content in a dedicated side panel for iteration.",
      "D": "A new Project containing only the team's prior meeting notes."
    },
    "correctAnswer": "C",
    "explanation": "Artifacts are designed for standalone, editable content that teams can iterate on and share.",
    "isMulti": false,
    "whyCorrect": "Artifacts are designed for standalone, editable content that teams can iterate on and share. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'A Research run that produces a multi-page external survey of...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'A short conversational reply embedded inline in the chat his...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'A new Project containing only the team's prior meeting notes...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Artifacts are designed for standalone, editable content that teams can iterate on and share."
  },
  {
    "num": 132,
    "conceptId": "prompt-clarity",
    "question": "You are a knowledge worker summarizing common prompt failure patterns for the team. Which pattern most often produces vague or off-target output?",
    "options": {
      "A": "A prompt that names a topic but does not state the task, audience, or required output structure.",
      "B": "A prompt that explicitly names the role, task, audience, and required output format.",
      "C": "A prompt that includes a representative example of the desired output.",
      "D": "A prompt that adds clear constraints on length and tone."
    },
    "correctAnswer": "A",
    "explanation": "A prompt that only names a topic without specifying the task, audience, or required output structure gives Claude no guidance on what to produce, leading to vague or off-target responses.",
    "isMulti": false,
    "whyCorrect": "A prompt that only names a topic without specifying the task, audience, or required output structure gives Claude no guidance on what to produce, leading to vague or off-target responses. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'A prompt that explicitly names the role, task, audience, and...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'A prompt that includes a representative example of the desir...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'A prompt that adds clear constraints on length and tone.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: A prompt that only names a topic without specifying the task, audience, or required output structure gives Claude no guidance on what to produce, leading to vague or off-target responses."
  },
  {
    "num": 133,
    "conceptId": "degraded-conversations",
    "question": "You are an operations lead choosing actions when a Claude conversation has degraded in quality. Which recovery action should be tried first when conversation quality degrades?",
    "options": {
      "A": "Summarize the current state and continue with a focused follow-up prompt.",
      "B": "Replace the model with a different vendor's model immediately.",
      "C": "Escalate to a senior architect for a manual review of the conversation history.",
      "D": "Discard the entire conversation and rebuild the work from the original prompt."
    },
    "correctAnswer": "A",
    "explanation": "First try summarizing the current state and continuing with a focused follow-up before more drastic measures.",
    "isMulti": false,
    "whyCorrect": "First try summarizing the current state and continuing with a focused follow-up before more drastic measures. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Replace the model with a different vendor's model immediatel...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Escalate to a senior architect for a manual review of the co...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Discard the entire conversation and rebuild the work from th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: First try summarizing the current state and continuing with a focused follow-up before more drastic measures."
  },
  {
    "num": 134,
    "conceptId": "context-windows",
    "question": "A knowledge worker is explaining context-window basics to a teammate. Which statement most accurately describes a context window?",
    "options": {
      "A": "The context window is the total amount of text, including the conversation history and any attached documents, that Claude can consider at one time when generating a response.",
      "B": "The context window is a fixed number of chat messages, regardless of how long each message is or what documents are attached.",
      "C": "The context window refers only to the system prompt and custom instructions, excluding the conversation history and any uploaded files.",
      "D": "The context window is unlimited and Claude can reference any part of the conversation history no matter how long the chat becomes."
    },
    "correctAnswer": "A",
    "explanation": "The context window is the total amount of text (measured in tokens) that Claude can consider at once, including conversation history, system prompts, and attached documents. It is finite, not unlimited.",
    "isMulti": false,
    "whyCorrect": "The context window is the total amount of text (measured in tokens) that Claude can consider at once, including conversation history, system prompts, and attached documents. It is finite, not unlimited. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'The context window is a fixed number of chat messages, regar...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The context window refers only to the system prompt and cust...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The context window is unlimited and Claude can reference any...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The context window is the total amount of text (measured in tokens) that Claude can consider at once, including conversation history, system prompts, and attached documents."
  },
  {
    "num": 135,
    "conceptId": "prompt-clarity",
    "question": "A product manager is using Claude to ideate options for a new self-service portal. The team needs breadth before narrowing and will evaluate trade-offs across the options in a separate session. Which prompting strategy fits this stage?",
    "options": {
      "A": "Request multiple distinct options ordered by Claude's assessment of feasibility, so the team can focus its trade-off discussion on the most feasible options first.",
      "B": "Request a single recommended option with strong reasoning, since well-reasoned single options give the team a clearer starting point than several weakly reasoned alternatives.",
      "C": "Request multiple distinct options with stated trade-offs, and avoid committing to a single recommendation in this round.",
      "D": "Request multiple distinct options and ask Claude to recommend the strongest one with reasoning, so the team starts the trade-off discussion from a leading candidate."
    },
    "correctAnswer": "C",
    "explanation": "For breadth-before-narrowing, request multiple distinct options with trade-offs without committing to a recommendation yet.",
    "isMulti": false,
    "whyCorrect": "For breadth-before-narrowing, request multiple distinct options with trade-offs without committing to a recommendation yet. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Request multiple distinct options ordered by Claude's assess...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Request a single recommended option with strong reasoning, s...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Request multiple distinct options and ask Claude to recommen...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: For breadth-before-narrowing, request multiple distinct options with trade-offs without committing to a recommendation yet."
  },
  {
    "num": 136,
    "conceptId": "prompt-clarity",
    "question": "A prompt describes a multi-step setup process, such as configuring an environment and then running a script, but Claude sometimes performs the steps out of order. What change would make the required order unambiguous?",
    "options": {
      "A": "Provide the instructions as a numbered list of steps in the exact order they must run.",
      "B": "Combine all of the steps into a single long sentence separated only by commas.",
      "C": "Describe the steps in a random order and let Claude infer the correct sequence.",
      "D": "Remove the step numbers and rely only on paragraph breaks to imply the correct order."
    },
    "correctAnswer": "A",
    "explanation": "Providing steps in a numbered list in exact order makes the required sequence unambiguous.",
    "isMulti": false,
    "whyCorrect": "Providing steps in a numbered list in exact order makes the required sequence unambiguous. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Combine all of the steps into a single long sentence separat...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Describe the steps in a random order and let Claude infer th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Remove the step numbers and rely only on paragraph breaks to...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Providing steps in a numbered list in exact order makes the required sequence unambiguous."
  },
  {
    "num": 137,
    "conceptId": "human-oversight",
    "question": "A marketing manager needs to draft a persuasive email campaign to launch a new product. The email should capture attention, highlight benefits, and include a call to action. Which prompting approach is best?",
    "options": {
      "A": "Prompt Claude to draft an email announcing the new product, leaving the structure and content entirely to the model's discretion without providing any specific guidelines on audience, tone, or key product benefits to highlight.",
      "B": "Instruct Claude to write a thorough product description report covering all features, specifications, technical details, and pricing info, formatted as a formal document that is suitable for internal stakeholders rather than a marketing audience.",
      "C": "Guide Claude to create a marketing email: first, write an attention-grabbing subject line; then, open with a hook; next, present three key benefits with persuasive language; and finally, include a clear call to action linked to the product page.",
      "D": "Ask Claude to produce several email drafts with distinct tones (formal, casual, urgent), then assess each draft's persuasiveness, clarity, and brand alignment, and choose the best one for final edits, and then iterate if needed."
    },
    "correctAnswer": "C",
    "explanation": "Option C provides the most structured guidance, giving Claude clear sequential instructions for the email's components.",
    "isMulti": false,
    "whyCorrect": "Option C provides the most structured guidance, giving Claude clear sequential instructions for the email's components. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Prompt Claude to draft an email announcing the new product, ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Instruct Claude to write a thorough product description repo...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ask Claude to produce several email drafts with distinct ton...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Option C provides the most structured guidance, giving Claude clear sequential instructions for the email's components."
  },
  {
    "num": 138,
    "conceptId": "iteration-diminishing",
    "question": "Over eight rounds of revision, a team notices that fixing the newest complaint often brings back a problem they had solved three rounds earlier. Nothing about their requirements is written down. What is the greatest risk?",
    "options": {
      "A": "The team will spend more time on revisions than they would have spent writing the document themselves.",
      "B": "The wording of the request will become long and repetitive as fixes for each separate complaint accumulate.",
      "C": "The eighth version will read less naturally than the first, because it has been adjusted so many times over.",
      "D": "With no record of what the document must satisfy, each round can undo an earlier fix and nobody notices."
    },
    "correctAnswer": "D",
    "explanation": "Without written requirements, there is no way to track that earlier fixes are preserved across revision rounds.",
    "isMulti": false,
    "whyCorrect": "Without written requirements, there is no way to track that earlier fixes are preserved across revision rounds. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'The team will spend more time on revisions than they would h...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'The wording of the request will become long and repetitive a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The eighth version will read less naturally than the first, ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Without written requirements, there is no way to track that earlier fixes are preserved across revision rounds."
  },
  {
    "num": 139,
    "conceptId": "workflow-decomposition",
    "question": "A business analyst is deciding whether to send one large request or break it into stages. Which two features of a request are the strongest signals that it should be decomposed? Select two.",
    "options": {
      "A": "It bundles several distinct deliverables that are meant for different audiences and uses.",
      "B": "It concerns a subject area the analyst has not personally worked in for several years.",
      "C": "It runs to a long prompt because a good deal of background has been pasted in with it.",
      "D": "It asks for the final answer to be presented as a table rather than as flowing paragraphs.",
      "E": "Later parts are only worth producing if the earlier factual work is correct."
    },
    "correctAnswer": "A, E",
    "explanation": "A and E are the strongest signals: bundling distinct deliverables for different audiences (A) and dependencies where later work depends on earlier accuracy (E) both indicate the request should be decomposed.",
    "isMulti": true,
    "whyCorrect": "A and E are the strongest signals: bundling distinct deliverables for different audiences (A) and dependencies where later work depends on earlier accuracy (E) both indicate the request should be decomposed. Isiliye correct answer A, E hai.",
    "wrongOptions": {
      "B": "'It concerns a subject area the analyst has not personally wo...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'It runs to a long prompt because a good deal of background h...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'It asks for the final answer to be presented as a table rath...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: A and E are the strongest signals: bundling distinct deliverables for different audiences (A) and dependencies where later work depends on earlier accuracy (E) both indicate the request should be decomposed."
  },
  {
    "num": 140,
    "conceptId": "prompt-clarity",
    "question": "A support lead finds a Claude-drafted troubleshooting article accurate but written at a reading level too advanced for the average customer. Which follow-up instruction best refines the draft without sacrificing accuracy?",
    "options": {
      "A": "Rewrite the article with shorter sentences and everyday words, keeping every step accurate.",
      "B": "Remove the least common troubleshooting steps so the article reads a bit shorter.",
      "C": "Add more technical detail so customers understand the underlying cause in full.",
      "D": "Convert the article into a formal specification format used by the engineering team."
    },
    "correctAnswer": "A",
    "explanation": "Option A directly addresses readability while preserving accuracy - shorter sentences and everyday words make the content accessible without removing steps.",
    "isMulti": false,
    "whyCorrect": "Option A directly addresses readability while preserving accuracy - shorter sentences and everyday words make the content accessible without removing steps. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Remove the least common troubleshooting steps so the article...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Add more technical detail so customers understand the underl...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Convert the article into a formal specification format used ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Option A directly addresses readability while preserving accuracy - shorter sentences and everyday words make the content accessible without removing steps."
  },
  {
    "num": 141,
    "conceptId": "prompt-clarity",
    "question": "A retention lead asked why cancellations rose sharply in the last quarter. The answer explains at length what cancellation rates are and how they are generally measured. How should she judge this output?",
    "options": {
      "A": "As accurate but off target, because it explains the topic instead of addressing the rise she asked about.",
      "B": "As adequate for now, because background on how the measure works is a reasonable place to begin the analysis.",
      "C": "As evidence that the question cannot be answered, since the reply avoided the specific rise she was asking about.",
      "D": "As a sound answer that simply needs shortening, since the explanation contains more detail than she required here."
    },
    "correctAnswer": "A",
    "explanation": "The output is accurate but misses the point - it explains what cancellation rates are generally rather than addressing why they rose sharply in the last quarter.",
    "isMulti": false,
    "whyCorrect": "The output is accurate but misses the point - it explains what cancellation rates are generally rather than addressing why they rose sharply in the last quarter. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'As adequate for now, because background on how the measure w...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'As evidence that the question cannot be answered, since the ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'As a sound answer that simply needs shortening, since the ex...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The output is accurate but misses the point - it explains what cancellation rates are generally rather than addressing why they rose sharply in the last quarter."
  },
  {
    "num": 142,
    "conceptId": "primary-source",
    "question": "A Claude draft attributes a sentence to a named industry report as a direct quotation. What is the appropriate validation step?",
    "options": {
      "A": "Open the report and find that exact sentence, since a close paraphrase may not appear in it.",
      "B": "Ask Claude for the page number, and accept the quotation once a number has been supplied to her.",
      "C": "Search for the sentence's key phrase and accept it if similar wording appears anywhere.",
      "D": "Confirm that the report exists and was published, which establishes the quotation's origin."
    },
    "correctAnswer": "A",
    "explanation": "Only finding the exact sentence in the source confirms it is a genuine direct quotation rather than a paraphrase or fabrication.",
    "isMulti": false,
    "whyCorrect": "Only finding the exact sentence in the source confirms it is a genuine direct quotation rather than a paraphrase or fabrication. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Ask Claude for the page number, and accept the quotation onc...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Search for the sentence's key phrase and accept it if simila...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Confirm that the report exists and was published, which esta...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Only finding the exact sentence in the source confirms it is a genuine direct quotation rather than a paraphrase or fabrication."
  },
  {
    "num": 143,
    "conceptId": "workflow-decomposition",
    "question": "A manager needs a comparison of six suppliers across five criteria. The information is currently spread across several separate Claude answers. What should she do first?",
    "options": {
      "A": "Ask Claude to combine all of the earlier answers into one long document she can read through.",
      "B": "Agree which suppliers and which criteria belong in the comparison before asking for any output.",
      "C": "Choose the output format now, so that every further answer can be produced in that same shape.",
      "D": "Ask Claude to rank the six suppliers straight away and work backwards from the ranking it gives."
    },
    "correctAnswer": "B",
    "explanation": "Defining the scope (which suppliers and criteria) before generating output ensures consistency and avoids wasted effort.",
    "isMulti": false,
    "whyCorrect": "Defining the scope (which suppliers and criteria) before generating output ensures consistency and avoids wasted effort. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Ask Claude to combine all of the earlier answers into one lo...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Choose the output format now, so that every further answer c...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ask Claude to rank the six suppliers straight away and work ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Defining the scope (which suppliers and criteria) before generating output ensures consistency and avoids wasted effort."
  },
  {
    "num": 144,
    "conceptId": "prompt-clarity",
    "question": "A communications officer must publish a Claude-drafted market briefing on the company blog within the hour. Claude used web search to produce it, and every figure in the draft carries a citation. What is the appropriate first step before she publishes?",
    "options": {
      "A": "Add a line at the foot of the briefing noting that it was prepared with the help of an AI assistant.",
      "B": "Open the cited sources and confirm that each figure in the draft does appear in the page it points to.",
      "C": "Ask Claude how confident it is in each figure, and revise the ones it rates as least confident.",
      "D": "Regenerate the briefing in a fresh conversation, and publish if the two drafts report the same figures."
    },
    "correctAnswer": "B",
    "explanation": "Verifying citations against original sources is the essential validation step before publishing any Claude-generated content with factual claims.",
    "isMulti": false,
    "whyCorrect": "Verifying citations against original sources is the essential validation step before publishing any Claude-generated content with factual claims. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Add a line at the foot of the briefing noting that it was pr...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask Claude how confident it is in each figure, and revise th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Regenerate the briefing in a fresh conversation, and publish...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Verifying citations against original sources is the essential validation step before publishing any Claude-generated content with factual claims."
  },
  {
    "num": 145,
    "conceptId": "primary-source",
    "question": "A communications assistant receives an answer containing a clearly incorrect statement about her organisation. She corrects her own draft in a follow-up message, and also wants the problem itself recorded rather than just worked around. What should she do?",
    "options": {
      "A": "Add a line to the conversation noting that the earlier statement was wrong, so the correction sits in the chat history.",
      "B": "Start the same task again in a new conversation, on the basis that a clean chat is less likely to repeat the mistake.",
      "C": "Rephrase her original prompt in more forceful language so that the incorrect statement is less likely to recur next time.",
      "D": "Use the thumbs-down control on the response that contained the incorrect statement, in addition to fixing her own draft."
    },
    "correctAnswer": "D",
    "explanation": "The thumbs-down control records the problem for the platform, while fixing the draft addresses the immediate work.",
    "isMulti": false,
    "whyCorrect": "The thumbs-down control records the problem for the platform, while fixing the draft addresses the immediate work. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Add a line to the conversation noting that the earlier state...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Start the same task again in a new conversation, on the basi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Rephrase her original prompt in more forceful language so th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The thumbs-down control records the problem for the platform, while fixing the draft addresses the immediate work."
  },
  {
    "num": 146,
    "conceptId": "degraded-conversations",
    "question": "A marketer is midway through a one-off brainstorm that will not be revisited, and the conversation is approaching its limit. What is the most appropriate action?",
    "options": {
      "A": "Let the conversation continue and condense itself, since nothing in it needs to outlive this session.",
      "B": "Build a Project and move the whole brainstorm into project knowledge before writing anything more.",
      "C": "Stop the brainstorm now and restart it in a new chat so the ideas come from a completely clean window.",
      "D": "Split the brainstorm across four separate chats so that no single conversation ever nears its limit."
    },
    "correctAnswer": "A",
    "explanation": "For a one-off brainstorm that won't be revisited, letting the conversation condense naturally is appropriate - no special preservation action is needed.",
    "isMulti": false,
    "whyCorrect": "For a one-off brainstorm that won't be revisited, letting the conversation condense naturally is appropriate - no special preservation action is needed. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Build a Project and move the whole brainstorm into project k...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Stop the brainstorm now and restart it in a new chat so the ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Split the brainstorm across four separate chats so that no s...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: For a one-off brainstorm that won't be revisited, letting the conversation condense naturally is appropriate - no special preservation action is needed."
  },
  {
    "num": 147,
    "conceptId": "prompt-clarity",
    "question": "A market analyst must produce a competitor briefing drawn from many public sources, and the team will keep editing that briefing for weeks afterwards. Which two Claude features fit this job? Select two.",
    "options": {
      "A": "Keep the briefing inline in the chat and re-paste the newest version whenever an edit lands.",
      "B": "Turn on a mail connector first so that the competitor facts are drawn from the team inbox.",
      "C": "Use Research mode, so the briefing is built by multi-step searching and returns citations.",
      "D": "Ask for the briefing as an artifact, so the team can edit and reuse it outside the chat.",
      "E": "Open a separate chat for each competitor so that no single conversation ever grows long."
    },
    "correctAnswer": "C, D",
    "explanation": "Research mode provides cited multi-step searching for public sources, and artifacts enable team editing outside the chat.",
    "isMulti": true,
    "whyCorrect": "Research mode provides cited multi-step searching for public sources, and artifacts enable team editing outside the chat. Isiliye correct answer C, D hai.",
    "wrongOptions": {
      "A": "'Keep the briefing inline in the chat and re-paste the newest...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Turn on a mail connector first so that the competitor facts ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Open a separate chat for each competitor so that no single c...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Research mode provides cited multi-step searching for public sources, and artifacts enable team editing outside the chat."
  },
  {
    "num": 148,
    "conceptId": "context-windows",
    "question": "A support operations lead must classify a large daily backlog of short inbound messages, and separately needs one deep analysis of a tangled contract dispute. Which two choices fit? Select two.",
    "options": {
      "A": "Use whichever tier the team already has open, since the tier rarely changes what comes back.",
      "B": "Use the deepest-reasoning tier for the contract dispute, accepting the larger quota it uses.",
      "C": "Use the fastest, cheapest tier for the high-volume classification, where throughput matters.",
      "D": "Use the fastest, cheapest tier for both jobs, since the tiers differ mainly in reply speed.",
      "E": "Use the deepest-reasoning tier for both of the jobs, since the strongest option is never bad."
    },
    "correctAnswer": "B, C",
    "explanation": "Match the tier to the task: fastest/cheapest for high-volume classification (C), deepest reasoning for complex contract analysis (B).",
    "isMulti": true,
    "whyCorrect": "Match the tier to the task: fastest/cheapest for high-volume classification (C), deepest reasoning for complex contract analysis (B). Isiliye correct answer B, C hai.",
    "wrongOptions": {
      "A": "'Use whichever tier the team already has open, since the tier...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Use the fastest, cheapest tier for both jobs, since the tier...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Use the deepest-reasoning tier for both of the jobs, since t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Match the tier to the task: fastest/cheapest for high-volume classification (C), deepest reasoning for complex contract analysis (B)."
  },
  {
    "num": 149,
    "conceptId": "context-windows",
    "question": "A new team member asks how the Claude model tiers actually differ from one another in everyday use. Which two statements are accurate? Select two.",
    "options": {
      "A": "The deepest tier suits genuinely hard problems, and it consumes meaningfully more allowance.",
      "B": "The tiers differ only in writing style, so any of them may be used for any task at any time.",
      "C": "The lightest tier gives answers of the very same depth, only more slowly than the other two.",
      "D": "The mid tier is the fast, capable default, and it is the right pick for most everyday work.",
      "E": "Moving up one tier is the standard fix whenever a prompt comes back with a vague or shallow answer."
    },
    "correctAnswer": "A, D",
    "explanation": "A and D accurately describe the tier differences: deepest tier for hard problems (A), mid tier as the capable default (D).",
    "isMulti": true,
    "whyCorrect": "A and D accurately describe the tier differences: deepest tier for hard problems (A), mid tier as the capable default (D). Isiliye correct answer A, D hai.",
    "wrongOptions": {
      "B": "'The tiers differ only in writing style, so any of them may b...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The lightest tier gives answers of the very same depth, only...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Moving up one tier is the standard fix whenever a prompt com...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: A and D accurately describe the tier differences: deepest tier for hard problems (A), mid tier as the capable default (D)."
  },
  {
    "num": 150,
    "conceptId": "context-windows",
    "question": "A team is setting up a new recurring weekly task and has to decide how much reasoning depth it needs. Which sequence is correct?",
    "options": {
      "A": "Pick a tier by how important the task feels, then run it for a month, then write down what good output means, then compare the month's results against that.",
      "B": "Run the task on several tiers at once, then write down what good output means, then compare the results against that definition, then keep the tier that did best.",
      "C": "Compare a sample of results with what colleagues produce by hand, then write down what good output means, then pick a tier on that basis, then run the task each week from then on.",
      "D": "Write down what good output means, then run a real sample on the default tier, then compare that sample against the definition, then change tier only where it falls short."
    },
    "correctAnswer": "D",
    "explanation": "Define success criteria first, test with the default tier, and only escalate tier if the output falls short of the definition.",
    "isMulti": false,
    "whyCorrect": "Define success criteria first, test with the default tier, and only escalate tier if the output falls short of the definition. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Pick a tier by how important the task feels, then run it for...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Run the task on several tiers at once, then write down what ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Compare a sample of results with what colleagues produce by ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Define success criteria first, test with the default tier, and only escalate tier if the output falls short of the definition."
  },
  {
    "num": 151,
    "conceptId": "human-oversight",
    "question": "A team runs two workloads that are alike in volume and subject matter. One is edited line by line by a specialist before use; the other is published automatically with no human reading it. Which consideration should weigh most heavily when choosing a tier for each?",
    "options": {
      "A": "The subject matter the two workloads share, since comparable material should be handled the same way for consistency of output.",
      "B": "The volume of the two workloads, since equal volumes imply equal throughput needs and therefore the same balance of speed and cost.",
      "C": "How much a downstream human check would catch, since the unchecked workload has to carry its own quality with no safety net.",
      "D": "The seniority of the people who own each workload, since the more senior owner is accountable for the more visible of the two."
    },
    "correctAnswer": "C",
    "explanation": "The key consideration is the presence of human review - unchecked automated output needs higher quality because there is no safety net.",
    "isMulti": false,
    "whyCorrect": "The key consideration is the presence of human review - unchecked automated output needs higher quality because there is no safety net. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'The subject matter the two workloads share, since comparable...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'The volume of the two workloads, since equal volumes imply e...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The seniority of the people who own each workload, since the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The key consideration is the presence of human review - unchecked automated output needs higher quality because there is no safety net."
  },
  {
    "num": 152,
    "conceptId": "workflow-decomposition",
    "question": "Reviewing a backlog of intake forms, an analyst notices that most entries name a solution rather than a need, for example \"we need a dashboard.\" How can Claude best help with this backlog?",
    "options": {
      "A": "Ask Claude to design the dashboard described in each entry so submitters can confirm what they wanted.",
      "B": "Ask Claude to reject entries that name a tool and ask the submitters to resubmit them in the right form.",
      "C": "Ask Claude to group the entries by the department that submitted them and report the totals to sponsors.",
      "D": "Ask Claude to restate each entry as the outcome sought, then flag entries where that outcome is unclear."
    },
    "correctAnswer": "D",
    "explanation": "Restating solution requests as desired outcomes helps identify the actual need behind the request, and flagging unclear entries highlights where more information is needed.",
    "isMulti": false,
    "whyCorrect": "Restating solution requests as desired outcomes helps identify the actual need behind the request, and flagging unclear entries highlights where more information is needed. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Ask Claude to design the dashboard described in each entry s...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Ask Claude to reject entries that name a tool and ask the su...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask Claude to group the entries by the department that submi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Restating solution requests as desired outcomes helps identify the actual need behind the request, and flagging unclear entries highlights where more information is needed."
  },
  {
    "num": 153,
    "conceptId": "iteration-diminishing",
    "question": "In a pilot of a new Claude-assisted briefing arrangement, three of eight testers report that the output is \"not quite right\" but say nothing more specific. What should the pilot's owner do first?",
    "options": {
      "A": "Rewrite the instructions to cover the areas the owner believes are most likely to be causing the trouble.",
      "B": "Ask the three testers for specific examples, with what the output said and what it should have said.",
      "C": "Ask the five satisfied testers what they did differently and circulate that as guidance to everyone.",
      "D": "Pause the pilot until the owner can sit with each tester and watch a full briefing being produced."
    },
    "correctAnswer": "B",
    "explanation": "Vague feedback ('not quite right') needs to be made specific first - concrete examples of what went wrong and what was expected enable diagnosis.",
    "isMulti": false,
    "whyCorrect": "Vague feedback ('not quite right') needs to be made specific first - concrete examples of what went wrong and what was expected enable diagnosis. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Rewrite the instructions to cover the areas the owner believ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask the five satisfied testers what they did differently and...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Pause the pilot until the owner can sit with each tester and...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Vague feedback ('not quite right') needs to be made specific first - concrete examples of what went wrong and what was expected enable diagnosis."
  },
  {
    "num": 154,
    "conceptId": "human-oversight",
    "question": "A manager is about to tell her team that Claude will now produce the first draft of every incident report. What should the announcement make clear above all?",
    "options": {
      "A": "How much time the change is expected to save the team over the course of a full year.",
      "B": "What changes, what stays with each person, and where their review is still required.",
      "C": "Which other departments have already adopted the same approach to their own reports.",
      "D": "How the manager tested the new arrangement before deciding to introduce it to the team."
    },
    "correctAnswer": "B",
    "explanation": "Above all, the announcement should clarify roles: what changes with Claude, what stays with each person, and where human review remains required.",
    "isMulti": false,
    "whyCorrect": "Above all, the announcement should clarify roles: what changes with Claude, what stays with each person, and where human review remains required. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'How much time the change is expected to save the team over t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Which other departments have already adopted the same approa...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'How the manager tested the new arrangement before deciding t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Above all, the announcement should clarify roles: what changes with Claude, what stays with each person, and where human review remains required."
  },
  {
    "num": 155,
    "conceptId": "workflow-decomposition",
    "question": "A strategy lead is planning a market-entry study and wants Claude to help with the research phase of it. Which two approaches are sound? Select two.",
    "options": {
      "A": "Accept the market figures Claude gives as final, since the answer reads confident and full.",
      "B": "Use Research mode and check the citations it returns back against the original sources.",
      "C": "Ask for the finished conclusion in a single prompt and publish it with no intermediate step.",
      "D": "Leave out the decision the study must support, so Claude is not steered toward an answer.",
      "E": "Ask Claude to draft the research plan and its open questions, then have the team refine it."
    },
    "correctAnswer": "B, E",
    "explanation": "Using Research mode with citation verification (B) and having Claude draft the research plan for team refinement (E) are sound research approaches.",
    "isMulti": true,
    "whyCorrect": "Using Research mode with citation verification (B) and having Claude draft the research plan for team refinement (E) are sound research approaches. Isiliye correct answer B, E hai.",
    "wrongOptions": {
      "A": "'Accept the market figures Claude gives as final, since the a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask for the finished conclusion in a single prompt and publi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Leave out the decision the study must support, so Claude is ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Using Research mode with citation verification (B) and having Claude draft the research plan for team refinement (E) are sound research approaches."
  },
  {
    "num": 156,
    "conceptId": "human-oversight",
    "question": "An analyst is presenting a Claude-assisted workflow to sceptical senior stakeholders next week. Which two things should the presentation include? Select two.",
    "options": {
      "A": "A comparison of technical benchmark scores across each of the underlying model tiers.",
      "B": "Where a human still reviews the output, and why that review step has been kept in place.",
      "C": "A claim that Claude will not make any factual errors once all its instructions are written well.",
      "D": "A specific, measured example of what the workflow improved during the pilot it ran on.",
      "E": "A promise that the workflow removes any need to check the output from this point onward."
    },
    "correctAnswer": "B, D",
    "explanation": "For sceptical stakeholders, showing where human review remains (B) and providing measured pilot results (D) build credibility without overpromising.",
    "isMulti": true,
    "whyCorrect": "For sceptical stakeholders, showing where human review remains (B) and providing measured pilot results (D) build credibility without overpromising. Isiliye correct answer B, D hai.",
    "wrongOptions": {
      "A": "'A comparison of technical benchmark scores across each of th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'A claim that Claude will not make any factual errors once al...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'A promise that the workflow removes any need to check the ou...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: For sceptical stakeholders, showing where human review remains (B) and providing measured pilot results (D) build credibility without overpromising."
  },
  {
    "num": 157,
    "conceptId": "project-config",
    "question": "An operations manager has two things to add to a project: the team's two-page approved abbreviation list, and the rule that answers must never use abbreviations outside that list. What is the best placement?",
    "options": {
      "A": "Put both the reference list and the rule into the project instructions so that the two are always read together.",
      "B": "Upload both the reference list and the rule as documents in the project knowledge base, for consistency.",
      "C": "Keep the reference list on the team wiki and paste the rule at the start of each chat that needs it.",
      "D": "Upload the reference to project knowledge and put the rule about unapproved abbreviations in the instructions."
    },
    "correctAnswer": "D",
    "explanation": "Reference material belongs in project knowledge (where it can be looked up), while behavioral rules belong in project instructions (where they guide every response).",
    "isMulti": false,
    "whyCorrect": "Reference material belongs in project knowledge (where it can be looked up), while behavioral rules belong in project instructions (where they guide every response). Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Put both the reference list and the rule into the project in...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Upload both the reference list and the rule as documents in ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Keep the reference list on the team wiki and paste the rule ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Reference material belongs in project knowledge (where it can be looked up), while behavioral rules belong in project instructions (where they guide every response)."
  },
  {
    "num": 158,
    "conceptId": "project-config",
    "question": "A project shared with a Team plan workspace has just had its escalation matrix replaced with a new version. What else should the project owner do?",
    "options": {
      "A": "Tell the members who use the project what changed, so they know earlier answers may no longer hold.",
      "B": "Ask each member to create their own copy of the project so everyone controls their own knowledge base.",
      "C": "Delete the project's chat history, because past conversations would otherwise override the new material.",
      "D": "Leave a note in the project title, since members are prompted to read the title before each new chat."
    },
    "correctAnswer": "A",
    "explanation": "When shared project knowledge changes, members need to be informed so they understand that previous answers may be based on outdated information.",
    "isMulti": false,
    "whyCorrect": "When shared project knowledge changes, members need to be informed so they understand that previous answers may be based on outdated information. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Ask each member to create their own copy of the project so e...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Delete the project's chat history, because past conversation...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Leave a note in the project title, since members are prompte...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: When shared project knowledge changes, members need to be informed so they understand that previous answers may be based on outdated information."
  },
  {
    "num": 159,
    "conceptId": "project-config",
    "question": "A policy team keeps a handbook in a Drive folder that changes weekly, and also has one annual report that never changes. Which two set-ups fit best? Select two.",
    "options": {
      "A": "Connect the Drive folder, so the weekly handbook changes are picked up from the source.",
      "B": "Connect the annual report and delete it from Drive, so that only one copy ever exists.",
      "C": "Upload a copy of the handbook just once and then rely on that copy for the rest of this year.",
      "D": "Paste the whole handbook into every new chat, so the newest version is always present.",
      "E": "Upload the fixed annual report into Project knowledge, since its content will not change."
    },
    "correctAnswer": "A, E",
    "explanation": "Connect the Drive folder for frequently changing content (A), and upload the static annual report to project knowledge (E).",
    "isMulti": true,
    "whyCorrect": "Connect the Drive folder for frequently changing content (A), and upload the static annual report to project knowledge (E). Isiliye correct answer A, E hai.",
    "wrongOptions": {
      "B": "'Connect the annual report and delete it from Drive, so that ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Upload a copy of the handbook just once and then rely on tha...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Paste the whole handbook into every new chat, so the newest ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Connect the Drive folder for frequently changing content (A), and upload the static annual report to project knowledge (E)."
  },
  {
    "num": 160,
    "conceptId": "data-privacy",
    "question": "An operations lead creates a project on an Enterprise plan and shares it with the whole organisation. To save time she uploads a complete team folder into the project knowledge, and that folder includes a spreadsheet of individual salary bands. What is the greatest risk?",
    "options": {
      "A": "Anyone who opens the shared project can draw the salary details out through ordinary questions.",
      "B": "The extra documents will slow down every answer in the project until the folder has been trimmed back.",
      "C": "The salary spreadsheet can no longer be removed once other members have opened the project.",
      "D": "Claude will decline every request in the project while a salary document remains uploaded."
    },
    "correctAnswer": "A",
    "explanation": "Sharing a project org-wide with sensitive data like salary bands means anyone with access can extract that information through ordinary queries.",
    "isMulti": false,
    "whyCorrect": "Sharing a project org-wide with sensitive data like salary bands means anyone with access can extract that information through ordinary queries. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'The extra documents will slow down every answer in the proje...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The salary spreadsheet can no longer be removed once other m...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Claude will decline every request in the project while a sal...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Sharing a project org-wide with sensitive data like salary bands means anyone with access can extract that information through ordinary queries."
  },
  {
    "num": 161,
    "conceptId": "human-oversight",
    "question": "A developer integrating Claude into an internal analytics agent wants to give it broad, unsupervised authority to automatically send emails and modify production database records without any human approval step. What ethical concern does this design most directly raise?",
    "options": {
      "A": "None, as long as the agent uses the Claude API rather than the consumer chat product.",
      "B": "None, unless the agent is built using a third-party framework instead of Anthropic's own official tools.",
      "C": "It removes human oversight from hard-to-reverse actions, risking harm before anyone can intervene.",
      "D": "It is acceptable because agentic use is encouraged without oversight requirements in the policy."
    },
    "correctAnswer": "C",
    "explanation": "Giving an agent unsupervised authority over email and production database modifications removes human oversight from actions that are hard to reverse.",
    "isMulti": false,
    "whyCorrect": "Giving an agent unsupervised authority over email and production database modifications removes human oversight from actions that are hard to reverse. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'None, as long as the agent uses the Claude API rather than t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'None, unless the agent is built using a third-party framewor...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'It is acceptable because agentic use is encouraged without o...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Giving an agent unsupervised authority over email and production database modifications removes human oversight from actions that are hard to reverse."
  },
  {
    "num": 162,
    "conceptId": "data-privacy",
    "question": "A Team-plan owner is uneasy about conversation content leaving the organisation when members rate Claude's answers. What control is available to them?",
    "options": {
      "A": "Owners can set ratings to be stored only inside the organisation's own private workspace.",
      "B": "Owners can have conversations redacted automatically before any rating is submitted.",
      "C": "Owners can switch off the chat rating feature for the whole organisation in its settings.",
      "D": "Owners can require that every rating is approved by a manager before it is finally sent."
    },
    "correctAnswer": "C",
    "explanation": "Team-plan owners can disable the chat rating feature organisation-wide in settings, preventing any rating data from leaving the organisation.",
    "isMulti": false,
    "whyCorrect": "Team-plan owners can disable the chat rating feature organisation-wide in settings, preventing any rating data from leaving the organisation. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Owners can set ratings to be stored only inside the organisa...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Owners can have conversations redacted automatically before ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Owners can require that every rating is approved by a manage...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Team-plan owners can disable the chat rating feature organisation-wide in settings, preventing any rating data from leaving the organisation."
  },
  {
    "num": 163,
    "conceptId": "prompt-clarity",
    "question": "A team lead asks whether using incognito chats on his personal plan makes it acceptable to paste regulated customer records into Claude. What is the best response?",
    "options": {
      "A": "Incognito chats are equivalent to the company's managed workspace, so no separate approval would be required.",
      "B": "Incognito chats are never used to improve Claude, but the policy's rules for regulated data still apply.",
      "C": "Incognito chats satisfy the policy, because nothing from the conversation is retained anywhere after it ends.",
      "D": "Incognito chats are acceptable for regulated data provided customer names are replaced with reference codes."
    },
    "correctAnswer": "B",
    "explanation": "While incognito chats aren't used for training, the organisation's data handling policies for regulated data still apply regardless of chat mode.",
    "isMulti": false,
    "whyCorrect": "While incognito chats aren't used for training, the organisation's data handling policies for regulated data still apply regardless of chat mode. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Incognito chats are equivalent to the company's managed work...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Incognito chats satisfy the policy, because nothing from the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Incognito chats are acceptable for regulated data provided c...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: While incognito chats aren't used for training, the organisation's data handling policies for regulated data still apply regardless of chat mode."
  },
  {
    "num": 164,
    "conceptId": "human-oversight",
    "question": "A consultant is about to send a client a report she drafted with Claude. Her firm's AI policy sets out several requirements for client-facing work produced with AI, and she is unsure which of them apply to a report of this kind. What should she do first?",
    "options": {
      "A": "Ask the client whether they have any objection to AI assistance having been used on the report.",
      "B": "Add a short line stating the report was drafted with AI assistance, and send it to the client.",
      "C": "Ask her engagement manager to sign the report off, so responsibility for it rests with him instead.",
      "D": "Establish what the policy requires for a deliverable of this kind, before the report goes out."
    },
    "correctAnswer": "D",
    "explanation": "First establish what the firm's AI policy requires for this type of client-facing deliverable, then comply with those requirements before sending.",
    "isMulti": false,
    "whyCorrect": "First establish what the firm's AI policy requires for this type of client-facing deliverable, then comply with those requirements before sending. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Ask the client whether they have any objection to AI assista...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Add a short line stating the report was drafted with AI assi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask her engagement manager to sign the report off, so respon...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: First establish what the firm's AI policy requires for this type of client-facing deliverable, then comply with those requirements before sending."
  },
  {
    "num": 165,
    "conceptId": "prompt-clarity",
    "question": "A school district's operations team wants Claude to work through the admissions criteria and produce the letters telling families whether their child has a place at an oversubscribed school. What should the team do first?",
    "options": {
      "A": "Ask Claude to restate the district's admissions criteria so the team can confirm it has them right.",
      "B": "Run the letters for one school first and see whether any family complains about the wording.",
      "C": "Separate deciding who gets a place from writing the letters, and keep the decision with staff.",
      "D": "Add an instruction telling Claude to apply the admissions criteria exactly as they are written."
    },
    "correctAnswer": "C",
    "explanation": "The admissions decision (who gets a place) is a high-stakes determination that should remain with human staff; Claude can assist with drafting the notification letters.",
    "isMulti": false,
    "whyCorrect": "The admissions decision (who gets a place) is a high-stakes determination that should remain with human staff; Claude can assist with drafting the notification letters. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Ask Claude to restate the district's admissions criteria so ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Run the letters for one school first and see whether any fam...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Add an instruction telling Claude to apply the admissions cr...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The admissions decision (who gets a place) is a high-stakes determination that should remain with human staff; Claude can assist with drafting the notification letters."
  },
  {
    "num": 166,
    "conceptId": "data-privacy",
    "question": "A market research manager has been asked to summarise survey free-text responses that include respondents' names and employers, using the company's Claude for Work plan. In which order should these steps be taken?",
    "options": {
      "A": "Remove the names and employers that the summary does not need; check what the participant consent and company policy allow; run the summary and review it before it is circulated; note what was removed so the result can be interpreted properly.",
      "B": "Run the summary and review it before it is circulated; check what the participant consent and company policy allow; remove the names and employers that the summary does not need; note what was removed so the result can be interpreted properly.",
      "C": "Check what the participant consent and company policy allow; remove the names and employers that the summary does not need; run the summary and review it before it is circulated; note what was removed so the result can be interpreted properly.",
      "D": "Check what the participant consent and company policy allow; run the summary and review it before it is circulated; remove the names and employers that the summary does not need; note what was removed so the result can be interpreted properly."
    },
    "correctAnswer": "C",
    "explanation": "The correct order: check policy/consent first, then remove unnecessary PII, then run and review the summary, then document what was removed.",
    "isMulti": false,
    "whyCorrect": "The correct order: check policy/consent first, then remove unnecessary PII, then run and review the summary, then document what was removed. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Remove the names and employers that the summary does not nee...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Run the summary and review it before it is circulated; check...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Check what the participant consent and company policy allow;...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The correct order: check policy/consent first, then remove unnecessary PII, then run and review the summary, then document what was removed."
  },
  {
    "num": 167,
    "conceptId": "workflow-decomposition",
    "question": "A support-ticket triage prompt gives Claude a single sentence: \"Categorize this ticket.\" Categories come back inconsistent between runs, and the team wants a fix that addresses the root cause rather than adding post-processing. What should they change first?",
    "options": {
      "A": "Lower the temperature parameter to zero so sampling becomes deterministic and the same ticket always returns the same category.",
      "B": "Route every ticket to a larger model on the assumption that added model capacity will infer the missing category definitions.",
      "C": "Rewrite the prompt to list the exact categories, the desired output format, and the criteria for choosing between them.",
      "D": "Have a reviewer manually relabel any ticket that looks miscategorized before the ticket reaches a customer-facing queue."
    },
    "correctAnswer": "C",
    "explanation": "The root cause is an underspecified prompt. Listing exact categories, output format, and selection criteria in the prompt addresses the cause rather than treating symptoms.",
    "isMulti": false,
    "whyCorrect": "The root cause is an underspecified prompt. Listing exact categories, output format, and selection criteria in the prompt addresses the cause rather than treating symptoms. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Lower the temperature parameter to zero so sampling becomes ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Route every ticket to a larger model on the assumption that ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Have a reviewer manually relabel any ticket that looks misca...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The root cause is an underspecified prompt."
  },
  {
    "num": 168,
    "conceptId": "context-windows",
    "question": "An analyst wants to get more done inside her weekly allowance without the quality of her work dropping. Which sequence of working habits is correct?",
    "options": {
      "A": "Put the request and the relevant material in the opening message; work through follow-ups that refer back to it; open a new chat for the next unrelated task; decide what she needs before starting.",
      "B": "Open a new chat for the next unrelated task; decide what she needs before starting; work through follow-ups that refer back to it; put the request and the relevant material in the opening message.",
      "C": "Decide what she needs before starting; put the request and the relevant material in the opening message; work through follow-ups that refer back to it; open a new chat for the next unrelated task.",
      "D": "Work through follow-ups that refer back to it; open a new chat for the next unrelated task; decide what she needs before starting; put the request and the relevant material in the opening message."
    },
    "correctAnswer": "C",
    "explanation": "Correct sequence: decide needs first, put everything in the opening message, work through follow-ups in the same chat, then open a new chat for the next task.",
    "isMulti": false,
    "whyCorrect": "Correct sequence: decide needs first, put everything in the opening message, work through follow-ups in the same chat, then open a new chat for the next task. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Put the request and the relevant material in the opening mes...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Open a new chat for the next unrelated task; decide what she...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Work through follow-ups that refer back to it; open a new ch...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Correct sequence: decide needs first, put everything in the opening message, work through follow-ups in the same chat, then open a new chat for the next task."
  },
  {
    "num": 169,
    "conceptId": "project-config",
    "question": "A researcher is doing straightforward drafting work while several connectors and tools she does not need for it remain switched on. What is a reasonable step to make routine work leaner?",
    "options": {
      "A": "Ask Claude in each message to avoid using any connector while she works on the drafting.",
      "B": "Do the drafting inside a separate project that has no documents in its knowledge at all.",
      "C": "Turn off the connectors and tools this task does not need, and switch them back on later.",
      "D": "Remove the connectors from her account permanently, so nothing can call on them by mistake."
    },
    "correctAnswer": "C",
    "explanation": "A. An instruction in every message is a per-message reminder rather than a change to the setup.\nB. An empty project addresses knowledge documents, not the tools and connections that stay enabled.\nC. Correct. Turning off tools and connectors that a task does not need is a recognised way to keep routine work efficient, and they can be re-enabled when the next task needs them.\nD. Removing them permanently costs her the reconnection work every time the other tasks come round.",
    "isMulti": false,
    "whyCorrect": "A. An instruction in every message is a per-message reminder rather than a change to the setup.\nB. An empty project addresses knowledge documents, not the tools and connections that stay enabled.\nC. Correct. Turning off tools and connectors that a task does not need is a recognised way to keep routine work efficient, and they can be re-enabled when the next task needs them.\nD. Removing them permanently costs her the reconnection work every time the other tasks come round. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Ask Claude in each message to avoid using any connector whil...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Do the drafting inside a separate project that has no docume...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Remove the connectors from her account permanently, so nothi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: A. An instruction in every message is a per-message reminder rather than a change to the setup.\nB. An empty project addr."
  },
  {
    "num": 170,
    "conceptId": "prompt-clarity",
    "question": "Several engineers tell a site coordinator that Claude's shift-handover digests 'skip the open risks', but nobody says which risks or which shifts. Which two steps should the coordinator take first? Select two.",
    "options": {
      "A": "Ask for two digests where an open risk was missed, with the missing risk actually named.",
      "B": "Rewrite the shared project instructions straight away to stress that open risks matter most of all.",
      "C": "Compare those digests against the shift logs to see exactly what was left out of them.",
      "D": "Ask everyone to score every future digest out of ten so that a trend can be tracked over time.",
      "E": "Switch the digests into a table format, since open risks may then be easier to spot in a table."
    },
    "correctAnswer": "A, C",
    "explanation": "A. Correct. Vague feedback cannot be acted on; specific failing examples turn an impression into something diagnosable.\nB. Changing shared instructions before the cause is known risks fixing the wrong thing for everyone at once.\nC. Correct on separate grounds: only the source shows whether the risk was absent from the log, buried, or genuinely dropped.\nD. A score captures sentiment but still never says which risks went missing, or why they went missing.\nE. A format change may help presentation, but it cannot add a risk the digest never captured.",
    "isMulti": true,
    "whyCorrect": "A. Correct. Vague feedback cannot be acted on; specific failing examples turn an impression into something diagnosable.\nB. Changing shared instructions before the cause is known risks fixing the wrong thing for everyone at once.\nC. Correct on separate grounds: only the source shows whether the risk was absent from the log, buried, or genuinely dropped.\nD. A score captures sentiment but still never says which risks went missing, or why they went missing.\nE. A format change may help presentation, but it cannot add a risk the digest never captured. Isiliye correct answer A, C hai.",
    "wrongOptions": {
      "B": "'Rewrite the shared project instructions straight away to str...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ask everyone to score every future digest out of ten so that...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Switch the digests into a table format, since open risks may...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: A. Correct. Vague feedback cannot be acted on; specific failing examples turn an impression into something diagnosable.."
  },
  {
    "num": 171,
    "conceptId": "iteration-diminishing",
    "question": "A Claude associate is incorporating reviewer feedback that named two specific issues with a Claude-drafted brief. The rest of the brief was accepted as written. Which next step is most likely to produce a strong revision?",
    "options": {
      "A": "Address the two specific issues and also revise unrelated sections to maintain a consistent voice across the brief after the edits.",
      "B": "Rewrite the brief from scratch incorporating the two specific issues, since starting fresh integrates the feedback more cleanly than targeted edits.",
      "C": "Address the two specific issues directly, leave unrelated parts unchanged, and document the changes for the next review.",
      "D": "Address the two specific issues and add a third improvement the associate identified, since combining reviewer feedback with self-identified improvements is more efficient."
    },
    "correctAnswer": "C",
    "explanation": "Targeted edits addressing only the specific feedback preserve the accepted parts and avoid introducing unintended changes.",
    "isMulti": false,
    "whyCorrect": "Targeted edits addressing only the specific feedback preserve the accepted parts and avoid introducing unintended changes. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Address the two specific issues and also revise unrelated se...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Rewrite the brief from scratch incorporating the two specifi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Address the two specific issues and add a third improvement ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Targeted edits addressing only the specific feedback preserve the accepted parts and avoid introducing unintended changes."
  },
  {
    "num": 172,
    "conceptId": "human-oversight",
    "question": "A workflow analyst is designing a hand-off between Claude and a human reviewer in an existing process. The reviewer needs to know what to check and what is in scope for their review. Which hand-off design is most appropriate?",
    "options": {
      "A": "Allow each reviewer to determine their own review criteria based on their experience, since reviewers know best what to check in their domain.",
      "B": "Define explicit criteria for what Claude produces and what the human reviewer must check before approval, documented in the workflow.",
      "C": "Define explicit criteria for what Claude produces and leave the reviewer's checks unspecified so the reviewer can apply judgment without constraint.",
      "D": "Use a checklist that the reviewer fills in for every output, with the checklist generated by Claude based on the specific content of each output."
    },
    "correctAnswer": "B",
    "explanation": "Explicit criteria for both Claude's output and the reviewer's checks ensure clarity and consistency in the hand-off.",
    "isMulti": false,
    "whyCorrect": "Explicit criteria for both Claude's output and the reviewer's checks ensure clarity and consistency in the hand-off. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Allow each reviewer to determine their own review criteria b...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Define explicit criteria for what Claude produces and leave ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Use a checklist that the reviewer fills in for every output,...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Explicit criteria for both Claude's output and the reviewer's checks ensure clarity and consistency in the hand-off."
  },
  {
    "num": 173,
    "conceptId": "human-oversight",
    "question": "A strategy manager is reviewing a Claude-generated recommendation to consolidate the company's two regional warehouses into one. The recommendation cites three sources that estimate cost savings and one source confirming that consolidation is operationally feasible. Two source documents also contain estimates of one-time transition costs and a stakeholder concern about regional service levels, neither of which appears in the recommendation. Which concern is most warranted?",
    "options": {
      "A": "The recommendation is acceptable for an initial round, but the missing material should be added in a separate appendix rather than re-prompting the original output.",
      "B": "The recommendation should be rejected because it relies on only four sources, which is insufficient for a decision of this size.",
      "C": "The recommendation is sound because every source it cites supports the consolidation conclusion.",
      "D": "The recommendation reflects selective use of the source documents and should be re-prompted to address the transition costs and the service-level concern before it is used."
    },
    "correctAnswer": "D",
    "explanation": "The recommendation selectively uses sources to support its conclusion while omitting contradictory information. It should be re-prompted to address all material facts.",
    "isMulti": false,
    "whyCorrect": "The recommendation selectively uses sources to support its conclusion while omitting contradictory information. It should be re-prompted to address all material facts. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'The recommendation is acceptable for an initial round, but t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'The recommendation should be rejected because it relies on o...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The recommendation is sound because every source it cites su...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The recommendation selectively uses sources to support its conclusion while omitting contradictory information."
  },
  {
    "num": 174,
    "conceptId": "human-oversight",
    "question": "You are a compliance specialist applying the organization's policy to a proposed Claude use case. Which policy-application step should be performed first?",
    "options": {
      "A": "Identify which policy provisions apply to the proposed use case.",
      "B": "Approve, modify, or reject the proposed use case based on the comparison.",
      "C": "Document the use case and the policy decision in the compliance register.",
      "D": "Compare the proposed use case against the applicable policy provisions."
    },
    "correctAnswer": "A",
    "explanation": "First identify which policy provisions apply before comparing, deciding, or documenting.",
    "isMulti": false,
    "whyCorrect": "First identify which policy provisions apply before comparing, deciding, or documenting. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Approve, modify, or reject the proposed use case based on th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Document the use case and the policy decision in the complia...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Compare the proposed use case against the applicable policy ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: First identify which policy provisions apply before comparing, deciding, or documenting."
  },
  {
    "num": 175,
    "conceptId": "project-config",
    "question": "A knowledge worker is preparing to use the Gmail connector with Claude for the first time. Which statement most accurately describes the connector's behavior at the user level?",
    "options": {
      "A": "Claude searches and reads emails the user has access to in a read-only mode, and the user must compose any reply manually outside the connector.",
      "B": "Claude searches and reads emails the user has access to and sends replies on the user's behalf for low-risk messages, with higher-risk messages routed to the user for approval.",
      "C": "Claude searches and reads emails the user has access to and labels them according to user-defined rules, with reply drafting handled in a separate workflow.",
      "D": "Claude searches and reads emails the user has access to and drafts replies for the user to send manually, with each action requiring explicit user approval."
    },
    "correctAnswer": "D",
    "explanation": "The Gmail connector allows Claude to search, read, and draft replies, but each action requires explicit user approval and the user sends manually.",
    "isMulti": false,
    "whyCorrect": "The Gmail connector allows Claude to search, read, and draft replies, but each action requires explicit user approval and the user sends manually. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Claude searches and reads emails the user has access to in a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Claude searches and reads emails the user has access to and ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Claude searches and reads emails the user has access to and ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The Gmail connector allows Claude to search, read, and draft replies, but each action requires explicit user approval and the user sends manually."
  },
  {
    "num": 176,
    "conceptId": "human-oversight",
    "question": "A senior sales manager is presenting Claude's role in a project to a non-technical executive sponsor. The sponsor will be asked to approve continued investment based on the presentation. Which framing best balances value and limitations?",
    "options": {
      "A": "Describe what Claude does well, name the limitations the team will manage with human review, and tie both to the project outcomes the sponsor cares about.",
      "B": "Describe the limitations first to set expectations, then explain how the team works around each limitation to deliver the project outcomes despite them.",
      "C": "Describe Claude's capabilities in technical terms so the sponsor understands the underlying model, and let the sponsor draw their own conclusions about value and limitations.",
      "D": "Describe what Claude does well and tie it to the project outcomes; defer discussion of limitations to a follow-up conversation to keep the approval discussion focused."
    },
    "correctAnswer": "A",
    "explanation": "Balance value and limitations by describing strengths, naming limitations managed by human review, and tying both to outcomes.",
    "isMulti": false,
    "whyCorrect": "Balance value and limitations by describing strengths, naming limitations managed by human review, and tying both to outcomes. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Describe the limitations first to set expectations, then exp...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Describe Claude's capabilities in technical terms so the spo...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Describe what Claude does well and tie it to the project out...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Balance value and limitations by describing strengths, naming limitations managed by human review, and tying both to outcomes."
  },
  {
    "num": 177,
    "conceptId": "human-oversight",
    "question": "While preparing stakeholder communication about a proposed Claude use case, a senior manager is applying the AI Fluency Framework Description competency. Which framing best reflects Description principles for stakeholder communication?",
    "options": {
      "A": "Omit the human oversight that will remain in place, even though Description principles require expectations that reflect the actual capability boundaries of the use case.",
      "B": "Understate Claude's capabilities to lower stakeholder expectations, even though Description principles require accuracy in both directions rather than systematic minimization.",
      "C": "Describe what Claude can reliably produce, the known limitations, and the human oversight that will remain in place, calibrated to the audience's familiarity with AI.",
      "D": "Overstate Claude's capabilities to secure stakeholder support, even though Description principles require accurate framing of what Claude can and cannot reliably produce."
    },
    "correctAnswer": "C",
    "explanation": "Description principles require accurate framing of capabilities, limitations, and human oversight, calibrated to audience familiarity.",
    "isMulti": false,
    "whyCorrect": "Description principles require accurate framing of capabilities, limitations, and human oversight, calibrated to audience familiarity. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Omit the human oversight that will remain in place, even tho...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Understate Claude's capabilities to lower stakeholder expect...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Overstate Claude's capabilities to secure stakeholder suppor...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Description principles require accurate framing of capabilities, limitations, and human oversight, calibrated to audience familiarity."
  },
  {
    "num": 178,
    "conceptId": "primary-source",
    "question": "You are a Claude associate troubleshooting a Claude response that introduces facts not present in the supplied source. Which root cause is most directly indicated?",
    "options": {
      "A": "The prompt asks for a comprehensive response, which leads Claude to fill perceived gaps with plausible-sounding but unverified detail.",
      "B": "The prompt asks Claude to act as a researcher rather than a writer.",
      "C": "The prompt's heading-based structure encourages Claude to generate placeholder content under each heading even when the source does not cover it.",
      "D": "The prompt does not constrain Claude to use only facts present in the supplied source."
    },
    "correctAnswer": "D",
    "explanation": "The root cause is the prompt not constraining Claude to use only facts from the supplied source, allowing hallucination of facts not present in the source.",
    "isMulti": false,
    "whyCorrect": "The root cause is the prompt not constraining Claude to use only facts from the supplied source, allowing hallucination of facts not present in the source. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'The prompt asks for a comprehensive response, which leads Cl...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'The prompt asks Claude to act as a researcher rather than a ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The prompt's heading-based structure encourages Claude to ge...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: The root cause is the prompt not constraining Claude to use only facts from the supplied source, allowing hallucination of facts not present in the source."
  },
  {
    "num": 179,
    "conceptId": "human-oversight",
    "question": "A project manager is evaluating a proposal for Claude to autonomously approve refunds above a threshold without any human review. The workflow would process roughly 2,000 refunds per week at moderate average amounts, and historical audits show a small but consistent percentage requiring correction. What is the most appropriate response to this proposal?",
    "options": {
      "A": "Approve the autonomous design but cap autonomous approvals at the current audit threshold.",
      "B": "Decline the autonomous design and instead propose that Claude triage refunds into auto-approve, human-approve, and escalate lanes based on risk factors.",
      "C": "Approve the autonomous design and replace human review with a daily random-sample audit of approved refunds.",
      "D": "Decline the autonomous design and instead propose that Claude pre-fill the refund decision for a human approver to complete and submit."
    },
    "correctAnswer": "B",
    "explanation": "Given the consistent correction rate in historical audits, fully autonomous approval is not appropriate. Risk-based triage (B) keeps human oversight on higher-risk decisions while allowing automation of clear-cut cases.",
    "isMulti": false,
    "whyCorrect": "Given the consistent correction rate in historical audits, fully autonomous approval is not appropriate. Risk-based triage (B) keeps human oversight on higher-risk decisions while allowing automation of clear-cut cases. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Approve the autonomous design but cap autonomous approvals a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Approve the autonomous design and replace human review with ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Decline the autonomous design and instead propose that Claud...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Given the consistent correction rate in historical audits, fully autonomous approval is not appropriate."
  },
  {
    "num": 180,
    "conceptId": "project-config",
    "question": "You are a process consultant integrating a pre-built Skill into a recurring team workflow. Which two practices best support reliable Skill integration? (Select two.)",
    "options": {
      "A": "Define the expected inputs and outputs of the Skill to create clear hand-off points around it in the workflow.",
      "B": "Apply the Skill outside its documented scope across unrelated workflow steps to maximize reuse.",
      "C": "Remove all human review from steps where the Skill is invoked, relying on the packaged output as final.",
      "D": "Document which workflow steps invoke the Skill and what human review or accountability remains around those steps.",
      "E": "Bypass the published version of the Skill and use an unreleased build obtained from outside the approved distribution channel."
    },
    "correctAnswer": "A, D",
    "explanation": "Defining clear inputs/outputs (A) ensures workflow hand-offs are predictable, and documenting invocation steps with remaining human review (D) maintains accountability and reliability.",
    "isMulti": true,
    "whyCorrect": "Defining clear inputs/outputs (A) ensures workflow hand-offs are predictable, and documenting invocation steps with remaining human review (D) maintains accountability and reliability. Isiliye correct answer A, D hai.",
    "wrongOptions": {
      "B": "'Apply the Skill outside its documented scope across unrelate...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Remove all human review from steps where the Skill is invoke...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Bypass the published version of the Skill and use an unrelea...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Defining clear inputs/outputs (A) ensures workflow hand-offs are predictable, and documenting invocation steps with remaining human review (D) maintains accountability and reliability."
  },
  {
    "num": 181,
    "conceptId": "code-execution",
    "question": "An operations assistant is redesigning a recurring data-processing workflow step to use Code Execution. Which two design choices best support reliable integration? (Select two.)",
    "options": {
      "A": "Standardize the input file format the step expects, so each Code Execution run receives consistent input and produces comparable, verifiable output across recurring weekly cycles.",
      "B": "Vary the input file format from run to run to accommodate the different source systems that supply the data each week.",
      "C": "Embed the Code Execution step inside the workflow without documenting the expected output format or the fields it produces.",
      "D": "Eliminate the human review step that follows Code Execution, since the sandboxed environment already verifies that the code ran without errors.",
      "E": "Define a brief output-verification step in which a human reviewer confirms the computed result against an expected range or sanity check before the output advances to downstream consumers."
    },
    "correctAnswer": "A, E",
    "explanation": "Standardized input format (A) ensures consistency across runs, and a human verification step (E) catches errors the sandbox cannot detect, such as logical mistakes or incorrect calculations.",
    "isMulti": true,
    "whyCorrect": "Standardized input format (A) ensures consistency across runs, and a human verification step (E) catches errors the sandbox cannot detect, such as logical mistakes or incorrect calculations. Isiliye correct answer A, E hai.",
    "wrongOptions": {
      "B": "'Vary the input file format from run to run to accommodate th...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Embed the Code Execution step inside the workflow without do...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Eliminate the human review step that follows Code Execution,...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Takeaway: Standardized input format (A) ensures consistency across runs, and a human verification step (E) catches errors the sandbox cannot detect, such as logical mistakes or incorrect calculations."
  }
];
