// Anthropic Claude Certified Associate — Foundations (CCAO-F)
// Primary Source: ccao-f-premium.pdf (110 Questions)

export const CONCEPTS_DATA = [
  {
    "id": "prompt-clarity",
    "title": "1. Prompt Clarity & Constraints",
    "subtitle": "Spasht Hidayatein aur Boundings (Audience, Tone, Format, Count)",
    "earlier": [
      20,
      34,
      43,
      50
    ],
    "repeated": [
      73,
      77,
      92,
      105
    ],
    "other": [
      2,
      57
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
    "examRule": "Inconsistency = Under-specification! Missing element = Task statement mein explicitly enumerate karo! Constraints hamesha prompt ke andar hone chahiye!"
  },
  {
    "id": "context-windows",
    "title": "2. Context Windows & Models",
    "subtitle": "Token Budget aur Model ki Yaad-dasht ki Seema",
    "earlier": [
      16
    ],
    "repeated": [
      75
    ],
    "other": [
      30,
      103,
      5,
      32,
      98
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
      22,
      54,
      66
    ],
    "repeated": [
      76,
      89
    ],
    "other": [
      18,
      26,
      109
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
      51
    ],
    "repeated": [
      69,
      86
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
    "examRule": "Deterministic calculations, multi-tab workbooks, exact statistics & charts = HAMESHA 'Code Execution'!"
  },
  {
    "id": "primary-source",
    "title": "5. Primary-Source Verification & Hallucinations",
    "subtitle": "Asli Source se Fact-Check karna aur Hallucination rokna",
    "earlier": [
      33,
      35
    ],
    "repeated": [
      78,
      99
    ],
    "other": [
      28,
      47,
      83
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
      15,
      23,
      65,
      67
    ],
    "repeated": [
      79,
      100,
      106,
      110
    ],
    "other": [
      7,
      8,
      36,
      41,
      45,
      10,
      52,
      87
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
      4,
      62
    ],
    "repeated": [
      101
    ],
    "other": [],
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
      17,
      60
    ],
    "repeated": [
      70,
      95
    ],
    "other": [
      6,
      14,
      21,
      74
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
      25,
      58
    ],
    "repeated": [
      93,
      102,
      108
    ],
    "other": [
      1,
      19,
      48,
      56,
      84,
      91,
      3,
      42,
      49,
      53,
      59,
      64,
      85,
      94
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
      13,
      44,
      68
    ],
    "repeated": [
      71,
      72,
      82,
      96,
      97
    ],
    "other": [
      9,
      11,
      12,
      24,
      28,
      29,
      31,
      38,
      39,
      40,
      63,
      80,
      81,
      88,
      104,
      107
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
    "conceptId": "workflow-decomposition",
    "question": "You are a senior analyst using Claude to analyze requirements from several stakeholder sources. Which is the\ncorrect order of steps?\n(1) Group related requirements and flag conflicts or ambiguities for stakeholder review.\n(2) Validate the structured output against the original sources for accuracy and completeness.\n(3) Submit the consolidated inputs to Claude with a structured extraction prompt.\n(4) Gather and label the source materials so each requirement can be traced.\n(5) Document the final requirements set with source traceability and status.",
    "options": {
      "A": "3, 4, 1, 2, 5",
      "B": "4, 3, 1, 2, 5",
      "C": "1, 4, 3, 2, 5",
      "D": "4, 1, 3, 2, 5"
    },
    "correctAnswer": "B",
    "explanation": "Source materials must be gathered and labeled first (4), then submitted to Claude (3), then grouped/flagged (1), validated\nagainst sources (2), and finally documented (5). This preserves traceability end-to-end.",
    "isMulti": false,
    "whyCorrect": "Source materials must be gathered and labeled first (4), then submitted to Claude (3), then grouped/flagged (1), validated against sources (2), and finally documented (5). This preserves traceability end-to-end. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Yeh execution order galat hai; source documents pehle gather aur label hone chahiye, uske baad Claude ko prompt bheja jata hai.",
      "C": "Yeh execution order galat hai; source documents pehle gather aur label hone chahiye, uske baad Claude ko prompt bheja jata hai.",
      "D": "Yeh execution order galat hai; source documents pehle gather aur label hone chahiye, uske baad Claude ko prompt bheja jata hai."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 2,
    "conceptId": "prompt-clarity",
    "question": "A product manager is using Claude to ideate options for a new self-service portal. Their team needs breadth before\nnarrowing and will evaluate trade-offs across the options in a separate session. Which prompting strategy fits this\nstage?",
    "options": {
      "A": "Request multiple distinct options and ask Claude to recommend the strongest one with reasoning, so the team starts\nthe trade-off discussion from a leading candidate.",
      "B": "Request a single recommended option with strong reasoning, since well-reasoned single options give the team a\nclearer starting point than several weakly-reasoned alternatives.",
      "C": "Request multiple distinct options ordered by Claude’s assessment of feasibility, so the team can focus its trade-off\ndiscussion on the most feasible options first.",
      "D": "Request multiple distinct options with stated trade-offs, and avoid committing to a single recommendation in this\nround."
    },
    "correctAnswer": "D",
    "explanation": "At the ideation / breadth stage the goal is to surface diverse options with explicit trade-offs. Committing to a single\nrecommendation or ranking by feasibility too early narrows the solution space prematurely.",
    "isMulti": false,
    "whyCorrect": "At the ideation / breadth stage the goal is to surface diverse options with explicit trade-offs. Committing to a single recommendation or ranking by feasibility too early narrows the solution space prematurely. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Request multiple distinct options and ask Claude to recommend the strongest o...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Request a single recommended option with strong reasoning' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Request multiple distinct options ordered by Claude’s assessment of feasibility' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Prompt Clarity questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 3,
    "conceptId": "workflow-decomposition",
    "question": "You are designing a checklist for evaluating Claude outputs and must complete the upstream steps before scoring\nan output. Which two steps must be completed BEFORE scoring a Claude output against the checklist? (Select\ntwo.)",
    "options": {
      "A": "Specify the threshold that distinguishes acceptable from unacceptable output.",
      "B": "Forward unacceptable outputs to a senior reviewer for second-pass review.",
      "C": "Document the final scoring rubric and reviewer comments for the audit trail.",
      "D": "Promote the approved output into the downstream production process.",
      "E": "Define the evaluation criteria that matter for the task at hand."
    },
    "correctAnswer": "A & E",
    "explanation": "Before any scoring can occur you must first define what “good” looks like (evaluation criteria) and the pass/fail threshold.\nDownstream actions such as forwarding or documenting happen after scoring.",
    "isMulti": true,
    "whyCorrect": "Before any scoring can occur you must first define what “good” looks like (evaluation criteria) and the pass/fail threshold. Downstream actions such as forwarding or documenting happen after scoring. Isiliye correct answer A & E hai.",
    "wrongOptions": {
      "B": "'Forward unacceptable outputs to a senior reviewer for second-pass review.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Document the final scoring rubric and reviewer comments for the audit trail.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Promote the approved output into the downstream production process.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 4,
    "conceptId": "degraded-conversations",
    "question": "You are an operations lead choosing actions when a Claude conversation has degraded in quality. Which recovery\naction should be tried first when conversation quality degrades?",
    "options": {
      "A": "Escalate to a senior architect for a manual review of the conversation history.",
      "B": "Replace the model with a different vendor’s model right away.",
      "C": "Discard the entire conversation and rebuild the work from the original prompt.",
      "D": "Summarize the current state and continue with a focused follow-up prompt."
    },
    "correctAnswer": "D",
    "explanation": "The least disruptive and most efficient first recovery is to summarize the current state and issue a focused follow-up prompt.\nEscalation, model switching, or full restart are heavier steps reserved for later.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "title": "Conversation Quality Degradation Recovery",
    "hinglishQ": "Jab Claude chat ki quality degrade hone lage, sabse pehla recovery action kya hona chahiye?",
    "whyCorrect": "The least disruptive and most efficient first recovery is to summarize the current state and issue a focused follow-up prompt. Escalation, model switching, or full restart are heavier steps reserved for later. Get Latest & Actual  Exam Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "Senior architect ko escalate karna overreaction aur heavy step hai.",
      "B": "Model vendor turant badalna disruptive aur last-resort action hai.",
      "C": "Poori chat discard karke scratch se shuru karna time waste karta hai."
    },
    "examTip": "Exam Tip: Degraded Conversations questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 5,
    "conceptId": "context-windows",
    "question": "You are an analyst working on a one-off complex problem that genuinely requires multi-step reasoning over an\nextended chain of thought. Which model is best suited to this work?",
    "options": {
      "A": "Haiku, because lightweight models are generally preferred for cost and speed, even on tasks that need extended\nreasoning.",
      "B": "Opus, because it is positioned as the most capable for advanced reasoning on complex specialized tasks.",
      "C": "Sonnet, because most tasks perform equally well on the mid-tier model regardless of reasoning complexity.",
      "D": "Sonnet, because its balanced reasoning is generally adequate and avoids the higher latency associated with Opus."
    },
    "correctAnswer": "B",
    "explanation": "Opus is Anthropic’s highest-capability model and is the recommended choice when the task truly needs deep, multi-step\nreasoning. Cost and latency are secondary for one-off complex work.",
    "isMulti": false,
    "title": "Model Selection: Complex Multi-step Reasoning",
    "hinglishQ": "Ek analyst one-off complex problem par kaam kar raha hai jisme multi-step extended chain of thought chahiye. Kaunsa model best hai?",
    "whyCorrect": "Opus is Anthropic’s highest-capability model and is the recommended choice when the task truly needs deep, multi-step reasoning. Cost and latency are secondary for one-off complex work. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Haiku speed aur cost ke liye best hai, par deep complex reasoning mein Opus se piche hai.",
      "C": "Sonnet mid-tier hai, par jab task genuinely deep reasoning maange toh Opus recommended hota hai.",
      "D": "One-off complex task mein latency secondary hoti hai, quality primary hoti hai."
    },
    "examTip": "Exam Tip: Context Windows questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 6,
    "conceptId": "iteration-diminishing",
    "question": "You are reviewing colleagues’ responses to feedback received on Claude-drafted communications. Which two\nfeedback responses are productive? (Select two.)",
    "options": {
      "A": "deferring all feedback to a later revision cycle to avoid disrupting the current draft’s consistency",
      "B": "incorporating all feedback received, including contradictory suggestions, into the next draft simultaneously",
      "C": "mapping each piece of feedback to the specific change made in the next draft",
      "D": "asking clarifying questions when feedback is ambiguous before acting on it",
      "E": "declining to revise Claude-generated sections on the basis that the model’s output should be trusted as written"
    },
    "correctAnswer": "C & D",
    "explanation": "Productive responses map feedback to concrete changes and clarify ambiguity before acting. Blindly incorporating everything,\ndeferring everything, or refusing to revise are unproductive.",
    "isMulti": true,
    "whyCorrect": "Productive responses map feedback to concrete changes and clarify ambiguity before acting. Blindly incorporating everything, deferring everything, or refusing to revise are unproductive. Isiliye correct answer C & D hai.",
    "wrongOptions": {
      "A": "Feedback ko defer karne se current draft ki flaws theek nahi hoti aur agle revision cycle par load badh jata hai.",
      "B": "Contradictory instructions ko bina resolve kiye merge karne se prompt mein conflict paida hota hai aur model erratic output deta hai.",
      "E": "Claude ke output ko blindly accept karna human accountability aur review governance ke rule ko todta hai."
    },
    "examTip": "Exam Tip: Iteration Diminishing questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 7,
    "conceptId": "project-config",
    "question": "A learning specialist is configuring a Project for course-design work. Their organization has an internal\ninstructional-design standard and a preferred output structure for lesson outlines. Which custom-instruction set\nbest supports this use case?",
    "options": {
      "A": "Name Claude’s role as a course designer, require alignment to the organization’s instructional-design standards,\nand specify the preferred output structure for lesson outlines.",
      "B": "Name Claude’s role as a course designer; let each chat’s prompt specify the standards and output structure for that\nlesson, since lessons vary widely.",
      "C": "Specify only the preferred output structure for lesson outlines, since the structure carries the standards implicitly and\nnaming the role adds no value.",
      "D": "Name Claude’s role as a course designer and require alignment to the organization’s instructional-design standards;\nleave output structure to Claude based on the topic of each lesson."
    },
    "correctAnswer": "A",
    "explanation": "Project-level custom instructions should lock in role, mandatory standards, and the expected output format so every\nconversation inherits the same guardrails without repetition.",
    "isMulti": false,
    "whyCorrect": "Project-level custom instructions should lock in role, mandatory standards, and the expected output format so every conversation inherits the same guardrails without repetition. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Name Claude’s role as a course designer' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Specify only the preferred output structure for lesson outlines' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Name Claude’s role as a course designer and require alignment to the organiza...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 8,
    "conceptId": "project-config",
    "question": "You are writing system-level instructions for a Project that supports recurring writing tasks. Which step should be\nperformed first when writing the system-level instructions?",
    "options": {
      "A": "Validate the drafted instructions against representative requests for the Project.",
      "B": "Define the purpose of the Project and the boundaries the instructions must respect.",
      "C": "Refine the drafted instructions based on observed gaps from validation runs.",
      "D": "Draft the system-level instructions using a template from a similar existing Project."
    },
    "correctAnswer": "B",
    "explanation": "Purpose and boundaries must be defined first; they are the foundation for every subsequent drafting, validation, and refinement\nstep.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Purpose and boundaries must be defined first; they are the foundation for every subsequent drafting, validation, and refinement step. Get Latest & Actual  Exam Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Validate the drafted instructions against representative requests for the Pro...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Refine the drafted instructions based on observed gaps from validation runs.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "Bina project ke exact scope aur boundaries freeze kiye doosre project ka template uthana scope drift aur misaligned instructions introduce karta hai."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 9,
    "conceptId": "human-oversight",
    "question": "Preparing a stakeholder communication about a proposed Claude use case, a senior manager is applying the AI\nFluency Framework Description competency. Which framing best reflects Description principles for stakeholder\ncommunication?",
    "options": {
      "A": "Emphasize the most successful examples of what Claude has produced for similar use cases, and let the audience’s\nenthusiasm carry the case for approval.",
      "B": "Describe what Claude can reliably produce for the use case in detail, and address the human oversight only if a\nstakeholder raises the question directly.",
      "C": "Describe what Claude can reliably produce for the use case, the known limitations, and the human oversight that will\nremain, calibrated to the audience’s familiarity with AI.",
      "D": "Describe only the most conservative, worst-case capabilities of the use case, reserving the stronger results as a\npleasant surprise once the pilot is underway."
    },
    "correctAnswer": "C",
    "explanation": "Description requires balanced, calibrated communication: reliable capabilities, known limitations, and the human oversight that\nremains. Over-selling successes or under-selling capabilities both violate the principle.",
    "isMulti": false,
    "whyCorrect": "Description requires balanced, calibrated communication: reliable capabilities, known limitations, and the human oversight that remains. Over-selling successes or under-selling capabilities both violate the principle. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "Sirf best highlights dikhana aur limitations ko chhipana (overselling) AI Fluency Description competency ke khilaf hai.",
      "B": "Human oversight aur known limitations ko proactively disclose karna chahiye, stakeholder ke poochne ka intezar nahi karna chahiye.",
      "D": "Capabilities ko artificially undersell karna stakeholder expectations ko miscalibrate karta hai aur product adoption rokta hai."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 10,
    "conceptId": "project-config",
    "question": "A knowledge worker used the Google Drive connector and asked Claude to summarize a recently revised policy\ndocument. The summary reflects the prior version of the document, not the revision saved three hours earlier.\nWhich factor most likely explains this?",
    "options": {
      "A": "The connector cached the prior version of the document at the start of the chat session, and will continue to use the\ncached version until the chat is closed.",
      "B": "The associate’s permissions on the document allow access only to the prior version, since the revision is held in a\nseparate permission group until publication.",
      "C": "The connector retrieved both versions, and Claude selected the earlier one because it was longer and contained\nmore material relevant to the prompt.",
      "D": "The connector’s index has not yet refreshed to reflect the recently revised document, so the older indexed content is\nstill being referenced."
    },
    "correctAnswer": "D",
    "explanation": "Connectors rely on an index that is refreshed periodically. A change made only a few hours earlier may not yet be visible to\nClaude until the index updates.",
    "isMulti": false,
    "whyCorrect": "Connectors rely on an index that is refreshed periodically. A change made only a few hours earlier may not yet be visible to Claude until the index updates. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'The connector cached the prior version of the document at the start of the ch...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'The associate’s permissions on the document allow access only to the prior ve...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The connector retrieved both versions' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 11,
    "conceptId": "human-oversight",
    "question": "You are an operations lead sorting proposed Claude use cases by whether they are acceptable for your team to\npursue with Claude. Which two proposed use cases are acceptable for the team to pursue with Claude? (Select\ntwo.)",
    "options": {
      "A": "drafting a preliminary symptom summary to support a clinician’s diagnostic review",
      "B": "drafting an internal training summary from approved internal documentation",
      "C": "drafting a legal summary an attorney reviews before sharing with a client",
      "D": "synthesizing themes across approved customer feedback under aggregation rules",
      "E": "summarizing performance review notes to determine promotion decisions across a team"
    },
    "correctAnswer": "B & D",
    "explanation": "Internal training summaries from approved docs and aggregated, non-identifying customer-feedback synthesis are low-risk,\nfully human-supervised tasks. Medical, legal-client, and employment decisions carry higher stakes and are generally out of\nscope without additional controls.\nGet Latest & Actual \nExam",
    "isMulti": true,
    "whyCorrect": "Internal training summaries from approved docs and aggregated, non-identifying customer-feedback synthesis are low-risk, fully human-supervised tasks. Medical, legal-client, and employment decisions carry higher stakes and are generally out of scope without additional controls. Get Latest & Actual  Exam Isiliye correct answer B & D hai.",
    "wrongOptions": {
      "A": "'drafting a preliminary symptom summary to support a clinician’s diagnostic re...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'drafting a legal summary an attorney reviews before sharing with a client' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'summarizing performance review notes to determine promotion decisions across ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 12,
    "conceptId": "human-oversight",
    "question": "A workflow analyst is designing a hand-off between Claude and a human reviewer in an existing process. The\nreviewer needs to know what is in scope for their review. Which hand-off design is most appropriate?",
    "options": {
      "A": "Allow each reviewer to determine their own review criteria based on their experience, since reviewers know best\nwhat to check in their domain.",
      "B": "Use a checklist that the reviewer fills in for every output, with the checklist generated by Claude based on the\nspecific content of each output.",
      "C": "Define explicit criteria for what Claude produces and what the human reviewer must check before approval,\ndocumented in the workflow.",
      "D": "Define explicit criteria for what Claude produces and leave the reviewer’s checks unspecified so the reviewer can\napply judgment without constraint."
    },
    "correctAnswer": "C",
    "explanation": "Clear, documented criteria for both the model’s output and the human’s review responsibilities create a reliable, auditable\nhand-off. Leaving either side undefined invites inconsistency and missed risks.",
    "isMulti": false,
    "whyCorrect": "Clear, documented criteria for both the model’s output and the human’s review responsibilities create a reliable, auditable hand-off. Leaving either side undefined invites inconsistency and missed risks. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Allow each reviewer to determine their own review criteria based on their exp...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Use a checklist that the reviewer fills in for every output' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Define explicit criteria for what Claude produces and leave the reviewer’s ch...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 13,
    "conceptId": "human-oversight",
    "question": "You are an HR specialist sorting potential ethical risks of a Claude-supported workflow. Which two risks pose the\nhighest ethical concern in an HR-adjacent workflow? (Select two.)",
    "options": {
      "A": "decisions that materially affect a person’s employment without human accountability",
      "B": "inconsistent tone and formatting across internal HR communications sent to employees",
      "C": "outputs that systematically disadvantage members of a protected group",
      "D": "inconsistent use of the company’s preferred dash style across documents",
      "E": "a clerical typo in a routine internal calendar invitation"
    },
    "correctAnswer": "A & C",
    "explanation": "Employment decisions without human accountability and systematic bias against protected groups are high-severity ethical\nrisks. Tone, dash style, and typos are quality issues, not ethical ones.",
    "isMulti": true,
    "title": "High-Severity Ethical Risks in HR (Select TWO)",
    "hinglishQ": "HR workflow mein kaunse 2 risks highest ethical concern pose karte hain? (Select two)",
    "whyCorrect": "Employment decisions without human accountability and systematic bias against protected groups are high-severity ethical risks. Tone, dash style, and typos are quality issues, not ethical ones. Isiliye correct answer A & C hai.",
    "wrongOptions": {
      "B": "Inconsistent tone formatting quality issue hai, ethical risk nahi.",
      "D": "Dash style formatting issue hai.",
      "E": "Calendar invite typo clerical mistake hai."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 14,
    "conceptId": "iteration-diminishing",
    "question": "A sales manager is iterating on a Claude-generated solution prototype after a stakeholder review identified two\nspecific concerns. The rest of the prototype was accepted as written. Which iteration approach is most likely to\nproduce a strong next version?",
    "options": {
      "A": "Address the two specific concerns and add a third improvement the sales manager identified.",
      "B": "Rewrite the prototype from scratch incorporating the two specific concerns.",
      "C": "Address the two specific concerns directly, leave unrelated parts unchanged, and document the changes for the\nnext review.",
      "D": "Address the two specific concerns and also revise unrelated sections to maintain consistent voice across the\nprototype after the edits."
    },
    "correctAnswer": "C",
    "explanation": "Targeted fixes preserve the already-accepted content and keep the change set small and reviewable. Adding extra\nimprovements or rewriting from scratch risks introducing new issues and obscuring the original feedback.",
    "isMulti": false,
    "whyCorrect": "Targeted fixes preserve the already-accepted content and keep the change set small and reviewable. Adding extra improvements or rewriting from scratch risks introducing new issues and obscuring the original feedback. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Address the two specific concerns and add a third improvement the sales manag...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Rewrite the prototype from scratch incorporating the two specific concerns.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Address the two specific concerns and also revise unrelated sections to maint...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Iteration Diminishing questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 15,
    "conceptId": "project-config",
    "question": "A manager is monitoring a Project’s effectiveness over time. The Project has been in use for several months and\nsupports a recurring workflow. Which signal most directly suggests the configuration needs updating?",
    "options": {
      "A": "The Project’s outputs increasingly reference terminology, sources, or guidance that no longer reflects current\npractice.",
      "B": "The Project’s chat volume has decreased steadily over the past several weeks compared to the prior baseline.",
      "C": "The Project’s members have started using ad-hoc chats outside the Project for tasks within the Project’s scope.",
      "D": "The Project’s outputs have grown longer on average than the outputs produced when the Project was first\nconfigured."
    },
    "correctAnswer": "A",
    "explanation": "Outdated terminology or sources is a direct quality-drift signal that the Project’s knowledge or instructions no longer match\ncurrent reality. Volume or length changes are weaker, indirect indicators.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "title": "Project Configuration Drift Signal",
    "hinglishQ": "Project kai mahino se chal raha hai. Kaunsa signal sabse directly batata hai ki configuration update mang rahi hai?",
    "whyCorrect": "Outdated terminology or sources is a direct quality-drift signal that the Project’s knowledge or instructions no longer match current reality. Volume or length changes are weaker, indirect indicators. Get Latest & Actual  Exam Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "Chat volume decrease hona indirect ya seasonable factor ho sakta hai.",
      "C": "Ad-hoc chats use karna signal hai, par outputs mein outdated guidance direct evidence hai.",
      "D": "Output length increase hona direct quality-drift signal nahi hai."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 16,
    "conceptId": "context-windows",
    "question": "A knowledge worker is explaining context-window basics to a teammate. Which statement most accurately\ndescribes a context window?",
    "options": {
      "A": "the complete conversation history retained across sessions, which the model can reference whenever it produces a\nresponse in any chat.",
      "B": "an adjustable setting that determines how much of the conversation history the model includes in each response,\nconfigurable per chat.",
      "C": "a bounded amount of text the model can consider at once, including the conversation history, attached documents,\nand the current input.",
      "D": "the subset of the conversation that the model determines is most relevant to the current input, which can be smaller\nthan the full conversation."
    },
    "correctAnswer": "C",
    "explanation": "The context window is a fixed token budget that includes everything the model can see in a single turn: system prompt, history,\nattachments, and the latest user message. It is not session-persistent or user-adjustable per chat.",
    "isMulti": false,
    "title": "Context Window Definition",
    "hinglishQ": "Ek knowledge worker apne teammate ko context window samjha raha hai. Kaunsa statement context window ko accurately describe karta hai?",
    "whyCorrect": "The context window is a fixed token budget that includes everything the model can see in a single turn: system prompt, history, attachments, and the latest user message. It is not session-persistent or user-adjustable per chat. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "Context window sessions ke beech persist nahi karta; har chat thread fresh slate hota hai.",
      "B": "Context window koi user-adjustable slider nahi hota jo per chat change ho.",
      "D": "Model khud se subset select karke context limit cross nahi kar sakta; hard token budget hota hai."
    },
    "examTip": "Exam Tip: Context Windows questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 17,
    "conceptId": "iteration-diminishing",
    "question": "When refining a Claude output that does not meet expectations. Which iterative refinement step should be\nperformed first?",
    "options": {
      "A": "Submit the revised prompt and capture the new output.",
      "B": "Compare the new output against the original criteria.",
      "C": "Identify the specific weaknesses in the current output.",
      "D": "Modify the prompt to address each identified weakness."
    },
    "correctAnswer": "C",
    "explanation": "You cannot usefully revise a prompt until you know exactly what is wrong with the current output. Diagnosis always precedes\nintervention.",
    "isMulti": false,
    "title": "First Step in Iterative Refinement",
    "hinglishQ": "Jab output umeed ke mutabiq na ho, prompt refinement mein pehla step kya hona chahiye?",
    "whyCorrect": "You cannot usefully revise a prompt until you know exactly what is wrong with the current output. Diagnosis always precedes intervention. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "Bina samjhe revised prompt submit karna andhere mein teer chalana hai.",
      "B": "Naye output ko compare tab karoge jab naya output bane; pehle current ki kami samjho.",
      "D": "Prompt tab tak modify nahi kar sakte jab tak weak points diagnose na hon."
    },
    "examTip": "Exam Tip: Iteration Diminishing questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 18,
    "conceptId": "data-privacy",
    "question": "You are handling a document containing mixed-sensitivity content before using it with Claude. Which data-handling\nstep should be performed first?",
    "options": {
      "A": "Submit the redacted document to Claude for the intended task.",
      "B": "Classify the content of the document and identify which fields are sensitive.",
      "C": "Redact sensitive fields and replace them with appropriate placeholders.",
      "D": "Review the redacted document with a peer to confirm the redaction is complete."
    },
    "correctAnswer": "B",
    "explanation": "Classification comes first: you must know what is sensitive before you can redact it, review the redaction, or submit anything to\nthe model.",
    "isMulti": false,
    "whyCorrect": "Classification comes first: you must know what is sensitive before you can redact it, review the redaction, or submit anything to the model. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Submit the redacted document to Claude for the intended task.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Redact sensitive fields and replace them with appropriate placeholders.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Review the redacted document with a peer to confirm the redaction is complete.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Data Privacy questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 19,
    "conceptId": "workflow-decomposition",
    "question": "A project manager is transforming a Claude-generated draft into a polished board memo. The board reads the\nmemo before the meeting and expects it to be scannable, factually verified, and consistent with the organization’s\nstandard terminology. Which set of refinements is most appropriate?",
    "options": {
      "A": "Apply consistent headings, tighten wording for executive scannability, align terminology with the organization’s\nstandards, and verify each fact against source data.",
      "B": "Apply consistent headings and align terminology with the organization’s standards; rely on Claude’s verification of\nfacts, since the draft was generated from the source data.",
      "C": "Apply consistent headings, expand each section to give the board full context, and align terminology with the\norganization’s standards.",
      "D": "Tighten wording for executive scannability and verify each fact against source data; leave heading structure and\nterminology as written to preserve the draft’s voice."
    },
    "correctAnswer": "A",
    "explanation": "Board-level documents require scannable structure, verified facts, and organization-standard language. Relying on the model’s\nown fact-checking or expanding length works against those requirements.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Board-level documents require scannable structure, verified facts, and organization-standard language. Relying on the model’s own fact-checking or expanding length works against those requirements. Get Latest & Actual  Exam Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Apply consistent headings and align terminology with the organization’s stand...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Apply consistent headings' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Tighten wording for executive scannability and verify each fact against sourc...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 20,
    "conceptId": "prompt-clarity",
    "question": "A knowledge worker has noticed that the same prompt for a recurring weekly task produces inconsistent outputs\nacross runs. Some weeks the output uses the right sections but the wrong tone; other weeks the tone is right but a\nsection is missing. The source inputs change each week but follow the same structure. Which cause is most worth\ninvestigating first?",
    "options": {
      "A": "The team should split the prompt into separate prompts for tone and structure, since combining both in one prompt\nproduces the mixed inconsistency the team is seeing.",
      "B": "The model is non-deterministic, so identical prompts naturally produce different outputs even when the prompt itself\nis well-written, and the team should accept the variation.",
      "C": "The recurring prompt under-specifies the audience, tone, format, and required sections, so each run drifts\ndepending on what the model emphasizes that turn.",
      "D": "The source inputs vary too much from week to week, and the team should standardize the inputs before changing\nthe prompt."
    },
    "correctAnswer": "C",
    "explanation": "When the same prompt yields different structural or tonal results, the most common root cause is insufficient specification of the\nrequired elements. Tightening the prompt is the first, lowest-cost investigation.",
    "isMulti": false,
    "title": "Recurring Task Inconsistent Output",
    "hinglishQ": "Ek knowledge worker har hafte same prompt run karta hai weekly report ke liye. Inputs ka structure same rehta hai, lekin outputs inconsistent aate hain — kabhi tone galat hoti hai, kabhi koi section gayab ho jata hai. Sabse pehle kya investigate karna chahiye?",
    "whyCorrect": "When the same prompt yields different structural or tonal results, the most common root cause is insufficient specification of the required elements. Tightening the prompt is the first, lowest-cost investigation. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "Tone aur structure ke liye alag prompts banana zaroori nahi hai; dono constraints ek hi prompt mein asani se specify ho sakte hain.",
      "B": "Non-determinism sach hai, lekin inconsistency accept kar lena galat practice hai; prompt improve karke variance khatam ki ja sakti hai.",
      "D": "Input ka format structured hai, problem prompt ke under-specification mein hai, inputs mein nahi."
    },
    "examTip": "Exam Tip: Prompt Clarity questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 21,
    "conceptId": "iteration-diminishing",
    "question": "A knowledge worker is adjusting an approach after a successful pilot revealed two opportunities for further\nimprovement. The pilot’s core results were positive, and the team is preparing for a broader rollout. Which\nadjustment is most appropriate?",
    "options": {
      "A": "Run a second pilot focused only on the two opportunities, then combine the results of both pilots before rolling out\nthe approach.",
      "B": "Adopt the changes that worked, address the two specific opportunities, and run a controlled comparison before\nbroader rollout.",
      "C": "Adopt the changes that worked, address the two opportunities, and monitor results closely during the broader rollout.",
      "D": "Roll out the approach as piloted and address the two opportunities in a separate follow-up project after the rollout\ncompletes."
    },
    "correctAnswer": "C",
    "explanation": "When the pilot already succeeded, the practical next step is to incorporate the improvements and proceed to broader rollout\nwith close monitoring rather than delaying for another full pilot cycle.",
    "isMulti": false,
    "whyCorrect": "When the pilot already succeeded, the practical next step is to incorporate the improvements and proceed to broader rollout with close monitoring rather than delaying for another full pilot cycle. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Run a second pilot focused only on the two opportunities' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Adopt the changes that worked' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Roll out the approach as piloted and address the two opportunities in a separ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Iteration Diminishing questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 22,
    "conceptId": "data-privacy",
    "question": "You are a knowledge worker preparing inputs for a Claude prompt. Which data type most clearly requires extra\nhandling such as redaction or anonymization before being included in the prompt?",
    "options": {
      "A": "generic product descriptions available on the company’s marketing site",
      "B": "public press releases the company has already published",
      "C": "job titles taken from the company’s public organizational chart",
      "D": "customer government identifiers and full payment-card numbers tied to named individuals"
    },
    "correctAnswer": "D",
    "explanation": "Government IDs and full payment-card numbers linked to individuals are highly sensitive PII/PCI data and must be redacted or\nexcluded before any model interaction.",
    "isMulti": false,
    "title": "Identifying Sensitive Data for Redaction",
    "hinglishQ": "Aap Claude prompt ke liye input prepare kar rahe hain. Kaunsa data type clearly redaction ya anonymization maangta hai?",
    "whyCorrect": "Government IDs and full payment-card numbers linked to individuals are highly sensitive PII/PCI data and must be redacted or excluded before any model interaction. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "Generic product descriptions public marketing data hain, safe hain.",
      "B": "Published press releases already public information hain.",
      "C": "Company public org chart ke job titles public hain."
    },
    "examTip": "Exam Tip: Data Privacy questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 23,
    "conceptId": "project-config",
    "question": "A senior manager is reviewing a colleague’s habit of never updating their team’s Project configurations because “if\nit works once, it works forever.” Which feedback is most warranted?",
    "options": {
      "A": "Configurations should be updated on a fixed schedule, since regular maintenance prevents drift even when nothing\nabout the policies or source documents has changed.",
      "B": "Configurations should be left alone if the team is satisfied with current outputs, and any required updates should be\nhandled at the chat level rather than the Project level.",
      "C": "Configurations should be reviewed and updated periodically because policies, terminology, and source documents\nchange over time, even when output quality has not visibly degraded.",
      "D": "Configurations should be updated only when output quality visibly degrades, since proactive updates risk introducing\nregressions in working configurations."
    },
    "correctAnswer": "C",
    "explanation": "Projects drift as the real world changes. Periodic review keeps instructions, knowledge, and standards current even before\nquality visibly declines.\n Get Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Projects drift as the real world changes. Periodic review keeps instructions, knowledge, and standards current even before quality visibly declines.  Get Latest & Actual  Exam Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Configurations should be updated on a fixed schedule' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Configurations should be left alone if the team is satisfied with current out...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Configurations should be updated only when output quality visibly degrades' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 24,
    "conceptId": "human-oversight",
    "question": "A Claude associate is reviewing a Claude-drafted set of customer-segment descriptions for an internal marketing\nbrief. One description applies a generalization about a demographic group’s purchasing behavior that does not\nhold for individual customers in the segment. Which response is most appropriate?",
    "options": {
      "A": "Add a disclaimer to the description, noting that the generalization may not apply to all individuals in the segment, and\nkeep the underlying description unchanged.",
      "B": "Revise the description to focus on observed behaviors rather than generalizations about people, and validate the\nrevision against actual customer data.",
      "C": "Remove the entire customer-segment description from the brief, since any segmentation that involves demographic\ncharacteristics is likely to introduce similar issues.",
      "D": "Keep the description as written for the internal brief, since internal use does not carry the same risk as external\npublication of demographic generalizations."
    },
    "correctAnswer": "B",
    "explanation": "Best practice is to replace demographic generalizations with observable, data-backed behaviors. Disclaimers or “internal-only”\nexcuses do not fix the underlying accuracy and fairness problem.",
    "isMulti": false,
    "whyCorrect": "Best practice is to replace demographic generalizations with observable, data-backed behaviors. Disclaimers or “internal-only” excuses do not fix the underlying accuracy and fairness problem. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Add a disclaimer to the description' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Remove the entire customer-segment description from the brief' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Keep the description as written for the internal brief' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 25,
    "conceptId": "workflow-decomposition",
    "question": "You are a knowledge worker who decomposed a “draft a board memo” request into fifteen tiny steps and noticed\nthe output now feels disjointed because related ideas were split apart. Which adjustment is most appropriate?",
    "options": {
      "A": "Consolidate related steps into fewer cohesive sections that group naturally connected ideas.",
      "B": "Group the fifteen steps by the order they appear rather than by which ideas they share.",
      "C": "Reduce the step count by merging steps that occur near each other in sequence.",
      "D": "Add short headings above each of the fifteen steps to visually separate them into named categories."
    },
    "correctAnswer": "A",
    "explanation": "Over-decomposition fragments related content. Re-grouping by conceptual cohesion restores narrative flow while still keeping\nthe task manageable for the model.",
    "isMulti": false,
    "title": "Over-decomposition Remedy",
    "hinglishQ": "15 tiny steps mein todne se board memo disjointed aur fragmented ho gaya. Best remedy kya hai?",
    "whyCorrect": "Over-decomposition fragments related content. Re-grouping by conceptual cohesion restores narrative flow while still keeping the task manageable for the model. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "Order ke hisab se group karne se ideas ka connection restore nahi hota.",
      "C": "Sequence merge karne se narrative flow solve nahi hota.",
      "D": "Headings add karne se underlying fragmentation theek nahi hoti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 26,
    "conceptId": "data-privacy",
    "question": "An HR associate is preparing to use Claude on a sensitive personnel matter. The organization’s AI policy explicitly\nstates that information related to ongoing investigations must not be entered into AI tools. Which response best\naligns with the policy?",
    "options": {
      "A": "Escalate the matter to HR leadership for an approved alternative, and do not enter investigation-related information\ninto Claude in the meantime.",
      "B": "Enter the investigation-related information into Claude in an Incognito chat, since Incognito chats do not retain\ninformation and therefore fall outside the policy’s intent.",
      "C": "Enter the investigation-related information into Claude only after the investigation closes, since the policy applies\nduring the investigation period.",
      "D": "Enter a paraphrased version of the investigation-related information that removes identifying details, since\nparaphrasing addresses the spirit of the policy."
    },
    "correctAnswer": "A",
    "explanation": "When policy expressly prohibits a class of data, the only compliant action is not to enter it and to escalate for an approved\nalternative. Incognito, paraphrasing, or waiting do not override an explicit ban.",
    "isMulti": false,
    "title": "Ongoing Investigation Policy Violation",
    "hinglishQ": "HR policy explicitly mana karti hai ki ongoing investigation ka data AI tools mein na dala jaye. Compliant action kya hai?",
    "whyCorrect": "When policy expressly prohibits a class of data, the only compliant action is not to enter it and to escalate for an approved alternative. Incognito, paraphrasing, or waiting do not override an explicit ban. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "Incognito chat policy ban ko override nahi karta.",
      "C": "Investigation close hone se pehle enter karne ki planning policy bypass nahi kar sakti.",
      "D": "Paraphrasing karke details chupana explicit ban ko bypass nahi karta."
    },
    "examTip": "Exam Tip: Data Privacy questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 27,
    "conceptId": "code-execution",
    "question": "An analyst has been asked to compute summary statistics from an uploaded sales data file and produce a chart for\na weekly report. Which output approach best fits the task?",
    "options": {
      "A": "Request a narrative description of the data in the chat response, describing the general trends without computing\nexact values.",
      "B": "Produce a written description of what the chart would show, in place of generating the actual visualization.",
      "C": "Ask Claude to estimate the summary statistics from a brief preview of the file rather than the complete uploaded\ndataset.",
      "D": "Use Code Execution to perform the calculations and generate the chart, then verify the computed results against the\nsource data before sharing the output."
    },
    "correctAnswer": "D",
    "explanation": "Deterministic numeric work and chart generation belong in the Code Execution environment, followed by human verification of\nthe results against the source data.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "title": "Sales Statistics & Chart Generation",
    "hinglishQ": "Sales data file se summary statistics aur weekly chart banana hai. Kaunsa approach best hai?",
    "whyCorrect": "Deterministic numeric work and chart generation belong in the Code Execution environment, followed by human verification of the results against the source data. Get Latest & Actual  Exam Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "Chat narrative general trends deta hai, exact verifiable math nahi.",
      "B": "Written description chart ka substitute nahi hai.",
      "C": "Brief preview se estimate karna hallucination aur errors create karta hai."
    },
    "examTip": "Exam Tip: Code Execution questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 28,
    "conceptId": "primary-source",
    "question": "You are evaluating a Claude output that appears to contain hallucinated content. Which response step should be\nperformed first when a hallucination is suspected?",
    "options": {
      "A": "Pinpoint the specific claim that appears to be unsupported by available evidence.",
      "B": "Document the hallucination pattern in the team’s risk register for future reference.",
      "C": "Notify the user community that the output contains a hallucinated claim.",
      "D": "Discard the entire output and regenerate the output with a fresh prompt."
    },
    "correctAnswer": "A",
    "explanation": "The first action is always localization: identify exactly which claim lacks support. Only after the claim is isolated can you decide\nwhether to correct, discard, or escalate.",
    "isMulti": false,
    "whyCorrect": "The first action is always localization: identify exactly which claim lacks support. Only after the claim is isolated can you decide whether to correct, discard, or escalate. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Document the hallucination pattern in the team’s risk register for future ref...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Notify the user community that the output contains a hallucinated claim.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "Poori chat history ko discard karna wasteful hai; jo progress ho chuki hai use state summary se preserve karke continue karna behtar hai."
    },
    "examTip": "Exam Tip: Primary Source questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 29,
    "conceptId": "human-oversight",
    "question": "You are a compliance specialist applying the organization’s policy to a proposed Claude use case. Which\npolicy-application step should be performed first?",
    "options": {
      "A": "Document the use case and the policy decision in the compliance register.",
      "B": "Approve, modify, or reject the proposed use case based on the comparison.",
      "C": "Compare the proposed use case against the applicable policy provisions.",
      "D": "Identify which policy provisions apply to the proposed use case."
    },
    "correctAnswer": "D",
    "explanation": "You must first determine which policy clauses are relevant before you can compare the use case against them or reach a\ndecision.",
    "isMulti": false,
    "whyCorrect": "You must first determine which policy clauses are relevant before you can compare the use case against them or reach a decision. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Document the use case and the policy decision in the compliance register.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Approve' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Compare the proposed use case against the applicable policy provisions.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 30,
    "conceptId": "context-windows",
    "question": "After importing context from another AI platform into Claude’s Memory, a knowledge worker notices that some\nimported details did not appear in subsequent responses. Which explanation is most accurate?",
    "options": {
      "A": "Memory imports are experimental, and Claude might not successfully incorporate all imported content; missing\ndetails can be added manually through Settings → Capabilities as a fallback.",
      "B": "Imported memories are stored separately from regular memories and cannot be referenced in any chat, so missing\ndetails reflect an architectural separation rather than imperfect import incorporation.",
      "C": "Memory imports overwrite all prior memories on completion, so any details that appear missing must have been\ndeleted by the import process rather than not incorporated during the import itself.",
      "D": "The import transfers every detail as a rule, and any missing content reflects a deliberate choice by Claude to omit\nthe information rather than the documented experimental nature of imports."
    },
    "correctAnswer": "A",
    "explanation": "Anthropic documents Memory imports as experimental; incomplete incorporation is a known possibility, and the recommended\nrecovery path is manual addition via Settings.",
    "isMulti": false,
    "whyCorrect": "Anthropic documents Memory imports as experimental; incomplete incorporation is a known possibility, and the recommended recovery path is manual addition via Settings. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Imported memories are stored separately from regular memories and cannot be r...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Memory imports overwrite all prior memories on completion' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The import transfers every detail as a rule' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Context Windows questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 31,
    "conceptId": "human-oversight",
    "question": "A Claude associate is applying the AI Fluency Framework Diligence competency to ongoing Claude usage. Which\npractice best reflects Diligence in a governance context?",
    "options": {
      "A": "Apply the organizational AI policies only in high-visibility situations where usage is likely to be observed or reviewed\nby others.",
      "B": "Apply organizational AI policies during onboarding as a foundational training step, document that each associate has\nreviewed them, and treat that record as evidence of ongoing compliance.",
      "C": "Defer all policy application to a centralized compliance team, treating individual usage as outside personal\nresponsibility.",
      "D": "Apply organizational AI policies consistently as a sustained professional habit, identify gaps between actual usage\nand the policies, and take corrective action to close those gaps over time."
    },
    "correctAnswer": "D",
    "explanation": "Diligence is an ongoing professional habit of aligning one’s own practice with policy, spotting gaps, and closing them—not a\none-time onboarding checkbox or something delegated away.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Diligence is an ongoing professional habit of aligning one’s own practice with policy, spotting gaps, and closing them—not a one-time onboarding checkbox or something delegated away. Get Latest & Actual  Exam Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Apply the organizational AI policies only in high-visibility situations where...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Apply organizational AI policies during onboarding as a foundational training...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Defer all policy application to a centralized compliance team' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 32,
    "conceptId": "context-windows",
    "question": "A knowledge worker is explaining the cost, speed, and quality trade-offs across Claude models to a colleague.\nWhich generalization correctly describes the trade-off?",
    "options": {
      "A": "More capable models generally consume less of the rate limit because their reasoning is more efficient, even though\nthey run more slowly than lighter models.",
      "B": "More capable models generally consume more of the rate limit and run more slowly, while lighter models are faster\nand consume less of the rate limit.",
      "C": "Lighter models consume more of the rate limit per request than more capable models, since lighter models require\nmultiple passes to match heavier-model quality.",
      "D": "Speed and rate-limit consumption are independent of model capability; the difference between Haiku, Sonnet, and\nOpus is reasoning depth alone."
    },
    "correctAnswer": "B",
    "explanation": "Higher-capability models (Opus) are slower and consume more of the rate limit; lighter models (Haiku) are faster and cheaper\nper request. That is the core trade-off.",
    "isMulti": false,
    "title": "Model Trade-offs: Speed, Cost, Quality",
    "hinglishQ": "Claude models ke cost, speed aur quality trade-offs ko kaunsa statement sahi describe karta hai?",
    "whyCorrect": "Higher-capability models (Opus) are slower and consume more of the rate limit; lighter models (Haiku) are faster and cheaper per request. That is the core trade-off. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Capable models kam rate limit nahi lete, balki zyada tokens aur compute lete hain.",
      "C": "Lighter models per request kam rate limit consume karte hain.",
      "D": "Speed aur rate limit model capability se completely linked hain, independent nahi hain."
    },
    "examTip": "Exam Tip: Context Windows questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 33,
    "conceptId": "primary-source",
    "question": "You are an analyst fact-checking a Claude-generated report. Two cited sources give conflicting dates for the same\nevent. Which approach is correct?",
    "options": {
      "A": "Choose the more recent date on the basis that later sources typically reflect updated or corrected information.",
      "B": "Locate a primary or authoritative source for the event and use the date that source confirms.",
      "C": "Average the two conflicting dates and use the average, treating a midpoint as a reasonable stand-in for verification.",
      "D": "Use the date confirmed by whichever source carries the more detailed citation for the event."
    },
    "correctAnswer": "B",
    "explanation": "When secondary sources conflict, resolve the discrepancy by consulting a primary or authoritative source rather than heuristics\nsuch as recency or citation length.",
    "isMulti": false,
    "title": "Conflicting Dates in Secondary Sources",
    "hinglishQ": "Claude report mein do cited sources same event ke liye alag-alag dates de rahe hain. Correct approach kya hai?",
    "whyCorrect": "When secondary sources conflict, resolve the discrepancy by consulting a primary or authoritative source rather than heuristics such as recency or citation length. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Recency heuristic (later source) galat assumption hai; naye articles bhi galat copy kar sakte hain.",
      "C": "Do conflicting dates ka average nikalna guessing hai, verification nahi.",
      "D": "Lamba citation hona factual accuracy ki guarantee nahi hai."
    },
    "examTip": "Exam Tip: Primary Source questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 34,
    "conceptId": "prompt-clarity",
    "question": "You are a project manager designing a checklist for prompt-quality reviews. Which two items belong on the\nprompt-quality checklist? (Select two.)",
    "options": {
      "A": "whether the prompt uses the author’s favorite opening phrase as a signature",
      "B": "whether the prompt reaches a thousand words, whatever it actually says",
      "C": "whether the prompt provides relevant context including audience and goal",
      "D": "whether the prompt states a specific task with the required deliverable",
      "E": "whether the prompt includes the names of every person in the department"
    },
    "correctAnswer": "C & D",
    "explanation": "A high-quality prompt must state a clear task/deliverable and supply the context (audience, goal, constraints) needed to\nproduce a useful result. Length quotas or personal stylistic quirks are not quality criteria.",
    "isMulti": true,
    "title": "Prompt-Quality Review Checklist (Select TWO)",
    "hinglishQ": "Aap project manager hain aur prompt quality review ke liye checklist bana rahe hain. Kaunse do items is checklist mein shamil hone chahiye?",
    "whyCorrect": "A high-quality prompt must state a clear task/deliverable and supply the context (audience, goal, constraints) needed to produce a useful result. Length quotas or personal stylistic quirks are not quality criteria. Isiliye correct answer C & D hai.",
    "wrongOptions": {
      "A": "Author ka favorite opening phrase personal preference hai, prompt quality ka standard nahi.",
      "B": "1000 words reach karna ek arbitrary quota hai; prompt jitna concise aur clear ho utna behtar hota hai.",
      "E": "Department ke sabhi logon ke naam daalna irrelevant clutter hai."
    },
    "examTip": "Exam Tip: Prompt Clarity questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 35,
    "conceptId": "primary-source",
    "question": "You are a communications manager validating a Claude-generated newsletter that includes a specific industry\ngrowth figure. The figure appears in three trade-press articles, but none of them link to the underlying study. Which\nvalidation step is correct?",
    "options": {
      "A": "Locate the original study referenced by the trade-press articles and verify the figure in the primary source.",
      "B": "Accept the figure because three trade-press articles repeat the same number independently of one another.",
      "C": "Use the highest figure across the three articles to make the newsletter more compelling.",
      "D": "Remove the source attribution and present the figure as common knowledge already familiar to the newsletter’s\nreaders."
    },
    "correctAnswer": "A",
    "explanation": "Secondary repetition is not verification. The correct step is to locate and check the primary study that originated the number.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "title": "Unlinked Figures in Trade Press",
    "hinglishQ": "Growth figure teen trade-press articles mein repeat ho raha hai par underlying study ka link nahi hai. Correct validation step?",
    "whyCorrect": "Secondary repetition is not verification. The correct step is to locate and check the primary study that originated the number. Get Latest & Actual  Exam Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "Secondary repetition verification nahi hoti; 3 articles ek hi galat number repeat kar sakte hain.",
      "C": "Highest figure choose karna false representation hai.",
      "D": "Source attribution hatakar common knowledge bolna intellectual dishonesty hai."
    },
    "examTip": "Exam Tip: Primary Source questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 36,
    "conceptId": "project-config",
    "question": "A knowledge worker has asked Claude to produce a one-page operating procedure. The team will edit the\nprocedure, reuse it across multiple onboarding cycles, and update it when the underlying process changes. Which\noutput format is most appropriate?",
    "options": {
      "A": "Generate the procedure as the chat response and save the entire chat transcript to the team’s document store as\nthe working reference.",
      "B": "Generate the procedure as an Artifact, which the team can open, edit, and save as a stable reference for ongoing\nuse.",
      "C": "Generate the procedure as the chat response and copy the text into the team’s document store after each revision.",
      "D": "Generate the procedure as a series of numbered steps in the chat and keep the chat itself as the reference for future\nedits."
    },
    "correctAnswer": "B",
    "explanation": "Artifacts are designed to be durable, editable, versionable documents—exactly the properties needed for a living operating\nprocedure that will be reused and updated.",
    "isMulti": false,
    "whyCorrect": "Artifacts are designed to be durable, editable, versionable documents—exactly the properties needed for a living operating procedure that will be reused and updated. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Generate the procedure as the chat response and save the entire chat transcri...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Generate the procedure as the chat response and copy the text into the team’s...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Generate the procedure as a series of numbered steps in the chat and keep the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 37,
    "conceptId": "human-oversight",
    "question": "You are a marketing manager using Claude to research a new market segment. Which research step should be\nperformed first?",
    "options": {
      "A": "Define the specific research questions that must be answered for the segment.",
      "B": "Submit a series of Claude prompts to gather information across the segment.",
      "C": "Validate the gathered information against authoritative external sources.",
      "D": "Generate a final research report combining every Claude output produced."
    },
    "correctAnswer": "A",
    "explanation": "Research begins with clear questions. Without them, subsequent prompting, validation, and reporting lack focus and success\ncriteria.",
    "isMulti": false,
    "whyCorrect": "Research begins with clear questions. Without them, subsequent prompting, validation, and reporting lack focus and success criteria. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Submit a series of Claude prompts to gather information across the segment.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Validate the gathered information against authoritative external sources.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Generate a final research report combining every Claude output produced.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 38,
    "conceptId": "human-oversight",
    "question": "A senior sales manager is presenting Claude’s role in a project to a non-technical executive sponsor. The sponsor\nwill be asked to approve continued investment based on the presentation. Which framing best balances value and\nlimitations?",
    "options": {
      "A": "Describe the limitations first to set expectations, then explain how the team works around each limitation to deliver\nthe project outcomes despite them.",
      "B": "Describe Claude’s capabilities in technical terms so the sponsor understands the underlying model, and let the\nsponsor draw their own conclusions about value and limitations.",
      "C": "Describe what Claude does well and tie it to the project outcomes; defer discussion of limitations to a follow-up\nconversation to keep the approval discussion focused.",
      "D": "Describe what Claude does well, name the limitations the team will manage with human review, and tie both to the\nproject outcomes the sponsor cares about."
    },
    "correctAnswer": "D",
    "explanation": "Balanced framing presents both strengths and the human-managed limitations in the same narrative, always linked to the\noutcomes the sponsor cares about. Hiding limitations or leading with pure caveats both undermine trust.",
    "isMulti": false,
    "whyCorrect": "Balanced framing presents both strengths and the human-managed limitations in the same narrative, always linked to the outcomes the sponsor cares about. Hiding limitations or leading with pure caveats both undermine trust. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Describe the limitations first to set expectations' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Describe Claude’s capabilities in technical terms so the sponsor understands ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Describe what Claude does well and tie it to the project outcomes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 39,
    "conceptId": "human-oversight",
    "question": "You are a project manager reviewing Claude usage approaches that teammates have proposed for a project\nworkflow. Which two workflow steps are well-suited for Claude support? (Select two.)",
    "options": {
      "A": "approving a final external press release without any human review",
      "B": "drafting a structured project status update from a set of meeting notes",
      "C": "synthesizing a literature review across many uploaded research documents",
      "D": "deciding promotion outcomes for staff based solely on the model’s judgment",
      "E": "issuing legally binding contractual commitments on behalf of the company"
    },
    "correctAnswer": "B & C",
    "explanation": "Drafting status updates and synthesizing literature are classic high-value, human-supervised Claude tasks. Approving external\ncommunications, employment decisions, or binding contracts without human review are out of scope.\nGet Latest & Actual \nExam",
    "isMulti": true,
    "whyCorrect": "Drafting status updates and synthesizing literature are classic high-value, human-supervised Claude tasks. Approving external communications, employment decisions, or binding contracts without human review are out of scope. Get Latest & Actual  Exam Isiliye correct answer B & C hai.",
    "wrongOptions": {
      "A": "'approving a final external press release without any human review' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'deciding promotion outcomes for staff based solely on the model’s judgment' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'issuing legally binding contractual commitments on behalf of the company' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 40,
    "conceptId": "human-oversight",
    "question": "You are a customer-success manager considering whether to escalate a Claude-generated response. Which\nfactor most strongly raises the impact of the output and supports escalation before external use?",
    "options": {
      "A": "The response is an unchanged draft for a paying customer that includes a service-level commitment.",
      "B": "The response is an internal draft summarizing the associate’s notes from a customer call for their own reference.",
      "C": "The response is a casual rephrasing of an internal team status update.",
      "D": "The response is a brief internal announcement about an upcoming team all-hands meeting."
    },
    "correctAnswer": "A",
    "explanation": "An external customer-facing draft that contains a service-level commitment carries material commercial and reputational risk\nand therefore warrants escalation before release.",
    "isMulti": false,
    "whyCorrect": "An external customer-facing draft that contains a service-level commitment carries material commercial and reputational risk and therefore warrants escalation before release. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'The response is an internal draft summarizing the associate’s notes from a cu...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The response is a casual rephrasing of an internal team status update.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The response is a brief internal announcement about an upcoming team all-hand...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 41,
    "conceptId": "project-config",
    "question": "An support representative is configuring a Project for drafting customer-facing apology emails after service\noutages. The current custom instructions tell Claude to “be empathetic and casual, keep it short, and offer a\ngoodwill credit.” The customer-service team has flagged that recent drafts have been too brief, have offered\ngoodwill credits in cases where policy does not allow them, and have used contractions that the brand voice guide\nprohibits. Which adjustment best aligns the configuration to the use case?",
    "options": {
      "A": "Keep the existing instructions and add a sentence telling Claude to consult the brand voice guide and the\ngoodwill-credit policy that are attached to the Project knowledge base.",
      "B": "Replace “be empathetic and casual” with “match the brand voice guide,” remove the instruction to offer goodwill\ncredits, and let each draft determine its own length based on the incident.",
      "C": "Move the brand voice guide and the goodwill-credit policy into the Project knowledge base and rely on the\ndocuments alone to govern tone, length, and credit decisions, without changing the custom instructions.",
      "D": "Specify the brand voice attributes (empathetic, formal, no contractions), set a minimum length, and instruct Claude\nto recommend a goodwill credit only when the attached eligibility policy permits one."
    },
    "correctAnswer": "D",
    "explanation": "Explicit, concrete instructions that encode the brand attributes, length expectation, and the policy-gated credit rule give the\nmodel clear, enforceable constraints instead of relying on it to “consult” documents.",
    "isMulti": false,
    "whyCorrect": "Explicit, concrete instructions that encode the brand attributes, length expectation, and the policy-gated credit rule give the model clear, enforceable constraints instead of relying on it to “consult” documents. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Keep the existing instructions and add a sentence telling Claude to consult t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Replace “be empathetic and casual” with “match the brand voice guide' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Move the brand voice guide and the goodwill-credit policy into the Project kn...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 42,
    "conceptId": "workflow-decomposition",
    "question": "A customer-success team member is reviewing a Claude-generated customer health-check report against the\nagreed deliverable list. The report covers all five required topics, but the renewal-risk section names only one risk\nfactor where the deliverable specification calls for renewal risk to be assessed across pricing, product fit, and\nstakeholder change. Which conclusion is best supported?",
    "options": {
      "A": "The report meets the topic-level requirements but the renewal-risk section is under-scoped against the specification\nand should be expanded before delivery.",
      "B": "The report meets the deliverable specification because all five required topics appear and the renewal-risk section is\npresent in the output.",
      "C": "The report’s completeness cannot be assessed from the deliverable specification alone; the customer should review\nthe output and confirm whether the renewal-risk depth is sufficient.",
      "D": "The report does not meet the deliverable specification because a section that addresses only one of three required\nrisk dimensions counts as a missing section."
    },
    "correctAnswer": "A",
    "explanation": "Presence of a section is not enough when the specification requires multi-dimensional coverage. The section exists but is\nincomplete relative to the stated requirements and needs expansion.",
    "isMulti": false,
    "whyCorrect": "Presence of a section is not enough when the specification requires multi-dimensional coverage. The section exists but is incomplete relative to the stated requirements and needs expansion. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'The report meets the deliverable specification because all five required topi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The report’s completeness cannot be assessed from the deliverable specificati...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The report does not meet the deliverable specification because a section that...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 43,
    "conceptId": "prompt-clarity",
    "question": "You are an analyst reviewing a Claude response that addresses two of three required questions and skips the\nthird. Which prompt element most likely needs strengthening?",
    "options": {
      "A": "The role assigned to Claude should be changed to a more specialized expert persona to increase response depth.",
      "B": "The output format should be revised to allow Claude to determine the appropriate structure for each question’s\nanswer.",
      "C": "The context provided to Claude should be expanded with additional background detail about the subject matter.",
      "D": "The task statement should explicitly enumerate the three required questions and require an answer to each."
    },
    "correctAnswer": "D",
    "explanation": "When the model skips a required element, the most direct fix is to make that element an explicit, non-optional part of the task\nstatement.\n Get Latest & Actual \nExam",
    "isMulti": false,
    "title": "Claude Skipping Required Questions (Missing Element)",
    "hinglishQ": "Claude ne 3 required questions mein se 2 ka answer diya aur 1 question skip kar diya. Prompt ke kis element ko strengthen karna chahiye?",
    "whyCorrect": "When the model skips a required element, the most direct fix is to make that element an explicit, non-optional part of the task statement.  Get Latest & Actual  Exam Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "Role ya persona change karne se missing question automatically include nahi hoga.",
      "B": "Output format ko Claude par chhodna aur bhi risky hai, isse Claude dobara koi section chhod sakta hai.",
      "C": "Subject matter ka background context badhane se missing task solve nahi hota."
    },
    "examTip": "Exam Tip: Prompt Clarity questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 44,
    "conceptId": "human-oversight",
    "question": "As part of a workflow redesign, a process analyst is applying the AI Fluency Framework Delegation competency.\nWhich two criteria most directly inform Delegation decisions? (Select two.)",
    "options": {
      "A": "The visual complexity of the workflow diagram, since steps with more connections and dependencies are more likely\nto require human oversight.",
      "B": "The seniority of the team member who currently performs the step, since more senior roles typically involve\nhigher-stakes tasks that warrant human retention.",
      "C": "The length of time the workflow has existed in its current form, since well-established processes have been\nsufficiently validated for AI delegation.",
      "D": "The need for human creativity, empathy, or judgment in the step, which indicates whether the task is appropriate for\nAI delegation or requires the human capabilities Claude cannot provide.",
      "E": "The reversibility of the task and the consequence of an error, which together indicate whether the step is safe to\nattempt with Claude or should be retained for human decision-making."
    },
    "correctAnswer": "D & E",
    "explanation": "Delegation decisions turn on whether the step requires uniquely human capabilities and on the risk profile (reversibility ×\nconsequence). Visual complexity, seniority, or process age are not the primary criteria.",
    "isMulti": true,
    "title": "Delegation Criteria in AI Fluency (Select TWO)",
    "hinglishQ": "AI Fluency Framework ke Delegation competency ke mutabiq, kaunse 2 criteria decide karte hain ki task AI ko dena hai ya human ko? (Select two)",
    "whyCorrect": "Delegation decisions turn on whether the step requires uniquely human capabilities and on the risk profile (reversibility × consequence). Visual complexity, seniority, or process age are not the primary criteria. Isiliye correct answer D & E hai.",
    "wrongOptions": {
      "A": "Diagram ki visual complexity primary criterion nahi hai.",
      "B": "Team member ki seniority authority se judi hai, task appropriateness se nahi.",
      "C": "Process kitna purana hai ye delegation safety decide nahi karta."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 45,
    "conceptId": "project-config",
    "question": "A learning specialist is configuring a Claude Project for a recurring course-design workflow. Which configuration\napproach best leverages a Skill alongside other Project elements?",
    "options": {
      "A": "Upload the supporting knowledge sources but leave the relevant Skill disabled, relying on custom instructions alone.",
      "B": "Configure the Project with custom instructions that describe a different workflow than the one the Skill documents.",
      "C": "Add the relevant Skill to the Project, upload the supporting knowledge sources, and write custom instructions that\nreference both the Skill and the knowledge.",
      "D": "Add the Skill and the supporting knowledge sources to the Project, but write custom instructions for a general use\ncase unrelated to the recurring course-design workflow the Skill documents."
    },
    "correctAnswer": "C",
    "explanation": "Skills, knowledge, and custom instructions work best when they are deliberately aligned and cross-referenced so the model\nreceives a coherent set of guidance for the intended workflow.",
    "isMulti": false,
    "whyCorrect": "Skills, knowledge, and custom instructions work best when they are deliberately aligned and cross-referenced so the model receives a coherent set of guidance for the intended workflow. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Upload the supporting knowledge sources but leave the relevant Skill disabled' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Configure the Project with custom instructions that describe a different work...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Add the Skill and the supporting knowledge sources to the Project' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 46,
    "conceptId": "human-oversight",
    "question": "You are a project lead at Zentari Traders aligning a model choice to a new recurring workflow. Which is the correct\norder of alignment steps?\n(1) Run a representative sample on the candidate model and measure quality, latency, and rate-limit consumption.\n(2) Select the lightest model that consistently meets the bar across the sample.\n(3) Define the quality bar, latency tolerance, and expected volume for the workflow.\n(4) Choose a candidate model based on the requirements profile.\n(5) Retest the choice when a new model becomes available.",
    "options": {
      "A": "3, 1, 4, 2, 5",
      "B": "3, 4, 1, 2, 5",
      "C": "4, 3, 1, 2, 5",
      "D": "1, 3, 4, 2, 5"
    },
    "correctAnswer": "B",
    "explanation": "Requirements must be defined first (3), then a candidate chosen (4), then measured on a representative sample (1), then the\nlightest model that still meets the bar selected (2), with periodic retesting (5).\nGet Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Requirements must be defined first (3), then a candidate chosen (4), then measured on a representative sample (1), then the lightest model that still meets the bar selected (2), with periodic retesting (5). Get Latest & Actual  Exam Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Yeh execution order galat hai; source documents pehle gather aur label hone chahiye, uske baad Claude ko prompt bheja jata hai.",
      "C": "Yeh execution order galat hai; source documents pehle gather aur label hone chahiye, uske baad Claude ko prompt bheja jata hai.",
      "D": "Yeh execution order galat hai; source documents pehle gather aur label hone chahiye, uske baad Claude ko prompt bheja jata hai."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 47,
    "conceptId": "primary-source",
    "question": "You are a Claude associate troubleshooting a Claude response that introduces facts not present in the supplied\nsource. Which root cause is most directly indicated?",
    "options": {
      "A": "The prompt’s heading-based structure encourages Claude to generate placeholder content under each heading\neven when the source doesn’t cover it.",
      "B": "The prompt does not constrain Claude to use only facts present in the supplied source.",
      "C": "The prompt asks for a comprehensive response, which leads Claude to fill perceived gaps with plausible-sounding\nbut invented detail.",
      "D": "The prompt asks Claude to act as a researcher rather than a writer."
    },
    "correctAnswer": "B",
    "explanation": "When the model invents facts, the most direct cause is the absence of an explicit constraint to stay inside the provided source\nmaterial.",
    "isMulti": false,
    "whyCorrect": "When the model invents facts, the most direct cause is the absence of an explicit constraint to stay inside the provided source material. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'The prompt’s heading-based structure encourages Claude to generate placeholde...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The prompt asks for a comprehensive response' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The prompt asks Claude to act as a researcher rather than a writer.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Primary Source questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 48,
    "conceptId": "workflow-decomposition",
    "question": "A finance consultant is adapting a Claude-generated narrative for a quarterly investor update. Investors have a\nfixed time window for the call and expect the headline result and forward outlook to be clear early. Which\nadaptation is most appropriate for this audience?",
    "options": {
      "A": "Lead with the forward outlook, since investors are most interested in what comes next, and present the headline\nresult and drivers afterward.",
      "B": "Lead with the headline result, present the key drivers concisely, and close with the forward outlook.",
      "C": "Lead with a chronological recap of the quarter’s events, reaching the headline result only near the end, then close\nwith the outlook.",
      "D": "Lead with the quarter’s operational highlights, present the financial result in the middle for context, and close with the\nforward outlook."
    },
    "correctAnswer": "B",
    "explanation": "Time-constrained investors need the bottom-line result first, then the concise drivers that explain it, then the forward view.\nChronological or operational-first structures bury the information that matters most.",
    "isMulti": false,
    "whyCorrect": "Time-constrained investors need the bottom-line result first, then the concise drivers that explain it, then the forward view. Chronological or operational-first structures bury the information that matters most. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Lead with the forward outlook' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Lead with a chronological recap of the quarter’s events' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Lead with the quarter’s operational highlights' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 49,
    "conceptId": "workflow-decomposition",
    "question": "You are validating evaluation criteria proposed for a Claude-generated business brief. Which two criteria are valid\nfor evaluating a Claude-generated brief? (Select two.)",
    "options": {
      "A": "presence of an executive summary section as a structural completeness check",
      "B": "factual accuracy of the claims made against the supplied source material",
      "C": "total word count of the output relative to industry benchmarks for business briefs",
      "D": "consistency of the writing style with the organization’s established tone guidelines",
      "E": "alignment of the output with the requested format and length constraints"
    },
    "correctAnswer": "B & E",
    "explanation": "Factual accuracy against sources and fidelity to the requested format/length are core quality criteria. Presence of a particular\nsection, industry word-count norms, or style consistency may be secondary but are not the primary validity checks listed here.",
    "isMulti": true,
    "whyCorrect": "Factual accuracy against sources and fidelity to the requested format/length are core quality criteria. Presence of a particular section, industry word-count norms, or style consistency may be secondary but are not the primary validity checks listed here. Isiliye correct answer B & E hai.",
    "wrongOptions": {
      "A": "'presence of an executive summary section as a structural completeness check' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'total word count of the output relative to industry benchmarks for business b...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'consistency of the writing style with the organization’s established tone gui...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 50,
    "conceptId": "prompt-clarity",
    "question": "A marketing manager is preparing a constrained brainstorming task: produce ten campaign ideas, each tied to a\nstated audience segment, and each fitting one of three defined budget bands. Which prompting approach fits the\ntask?",
    "options": {
      "A": "Ask Claude for thirty ideas with the audience and budget constraints stated in the prompt, then keep the strongest\nten as a wider initial pool produces stronger finalists.",
      "B": "Ask Claude for ten distinct ideas without budget constraints, then filter the output afterward to keep only the ideas\nthat fit the three budget bands.",
      "C": "Ask Claude for ten distinct ideas with the audience and budget constraints stated in the prompt and require each\nidea to name which audience and budget band it addresses.",
      "D": "Ask Claude for ten distinct ideas, stating the audience constraints in the prompt and leaving budget unconstrained\nso creativity is not limited at the ideation stage."
    },
    "correctAnswer": "C",
    "explanation": "When the constraints are part of the success criteria, they belong in the prompt itself and each idea should explicitly declare\nhow it satisfies them. Post-filtering or unconstrained generation wastes effort and risks non-compliant ideas.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "title": "Constrained Brainstorming (10 Ideas, Segments, Budget Bands)",
    "hinglishQ": "Marketing manager ko 10 campaign ideas chahiye, har idea ek audience segment aur 3 budget bands mein fit hona chahiye. Kaunsa prompting approach sabse best hai?",
    "whyCorrect": "When the constraints are part of the success criteria, they belong in the prompt itself and each idea should explicitly declare how it satisfies them. Post-filtering or unconstrained generation wastes effort and risks non-compliant ideas. Get Latest & Actual  Exam Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "30 ideas maang kar filter karna unnecessary extra tokens aur latency waste karta hai.",
      "B": "Bina budget constraint ke generate karke baad mein filter karna prompt ki responsibility shift kar deta hai aur effort waste karta hai.",
      "D": "Budget ko unconstrained chhodna non-compliant ideas produce karega."
    },
    "examTip": "Exam Tip: Prompt Clarity questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 51,
    "conceptId": "code-execution",
    "question": "A finance manager must select a Claude feature for a task that requires deterministic calculations across a\nmulti-tab spreadsheet. Which selection best fits the requirement?",
    "options": {
      "A": "Use a standard chat prompt, which passes the spreadsheet contents to the model and asks it to compute the totals\nacross every tab.",
      "B": "Use the Research feature, which gathers figures from multiple sources and assembles them into a summary the\nmanager can review.",
      "C": "Use an Artifact, which renders the calculations as a stable, editable document the manager can revise across turns.",
      "D": "Use Code Execution, which runs code in a sandbox to perform calculations on the uploaded file and produce verified\noutputs the associate can check."
    },
    "correctAnswer": "D",
    "explanation": "Deterministic multi-tab calculations belong in the Code Execution sandbox, where actual code runs against the file and results\ncan be verified, rather than relying on the language model’s arithmetic.",
    "isMulti": false,
    "title": "Multi-tab Spreadsheet Arithmetic",
    "hinglishQ": "Multi-tab spreadsheet ke cross-sheet totals deterministic calculations se nikalne hain. Kaunsa feature use karein?",
    "whyCorrect": "Deterministic multi-tab calculations belong in the Code Execution sandbox, where actual code runs against the file and results can be verified, rather than relying on the language model’s arithmetic. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "Standard chat prompt LLM arithmetic par depend karta hai jo multi-tab mein errors de sakta hai.",
      "B": "Research feature web/docs gather karta hai, multi-sheet calculation nahi.",
      "C": "Artifacts UI document render karta hai par backend calculation sandbox Code Execution hai."
    },
    "examTip": "Exam Tip: Code Execution questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 52,
    "conceptId": "project-config",
    "question": "You are a content creator. A first response from Claude is accurate but uses inconsistent terminology that does not\nmatch your organization’s glossary. Which iterative change addresses the issue most directly?",
    "options": {
      "A": "Generate the response first, then manually find-and-replace mismatched terms afterward instead of supplying the\nglossary up front.",
      "B": "Ask Claude to choose terminology it judges most appropriate, without referencing the organization’s established\nglossary.",
      "C": "Provide the organization’s glossary and instruct Claude to use only those terms throughout the response.",
      "D": "Ask Claude to review the response for consistent terminology without providing the organization’s glossary as a\nreference."
    },
    "correctAnswer": "C",
    "explanation": "Supplying the glossary and explicitly requiring its exclusive use is the most direct way to eliminate terminology drift at\ngeneration time.",
    "isMulti": false,
    "whyCorrect": "Supplying the glossary and explicitly requiring its exclusive use is the most direct way to eliminate terminology drift at generation time. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Generate the response first' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Ask Claude to choose terminology it judges most appropriate' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ask Claude to review the response for consistent terminology without providin...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 53,
    "conceptId": "workflow-decomposition",
    "question": "An operations assistant is using Claude to support process optimization for an existing intake workflow. The\nassistant has access to the current process documentation and recent cycle-time data. Which activity best uses\nClaude to support this process optimization task?",
    "options": {
      "A": "Map the current intake process, identify likely bottlenecks based on the cycle-time data, and propose optimization\noptions for human review.",
      "B": "Apply Claude to predict the cycle-time impact of each proposed change and rank them so the team can implement\nimprovements in priority order.",
      "C": "Use Claude to interview each team member who works on the intake process and synthesize the interview output\ninto a redesigned workflow.",
      "D": "Generate an optimized version of the intake process based on industry benchmarks, then compare it to the current\nprocess to identify gaps."
    },
    "correctAnswer": "A",
    "explanation": "Claude is most useful as an analytical partner that maps the as-is process, surfaces data-backed bottleneck hypotheses, and\ngenerates options for humans to evaluate—not as an autonomous optimizer or interviewer.",
    "isMulti": false,
    "whyCorrect": "Claude is most useful as an analytical partner that maps the as-is process, surfaces data-backed bottleneck hypotheses, and generates options for humans to evaluate—not as an autonomous optimizer or interviewer. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Apply Claude to predict the cycle-time impact of each proposed change and ran...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Use Claude to interview each team member who works on the intake process and ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Generate an optimized version of the intake process based on industry benchmarks' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 54,
    "conceptId": "data-privacy",
    "question": "You are an HR specialist reviewing data items proposed for inclusion in a Claude prompt for a routine task. Which\ntwo data items are appropriate to include in a Claude prompt? (Select two.)",
    "options": {
      "A": "a compensation band summary that includes employee names and current salary figures for a specific team",
      "B": "employee ID numbers and hire dates for the team roster included to help Claude personalize onboarding\ncommunications",
      "C": "an anonymized summary of an HR policy that the model will rephrase",
      "D": "a redacted job description that the model will adapt for a posting",
      "E": "accommodation request notes from an employee’s HR file needed to draft a role adjustment memo"
    },
    "correctAnswer": "C & D",
    "explanation": "Anonymized policy text and already-redacted job descriptions are appropriate inputs. Named compensation data, employee\nIDs, and accommodation notes are sensitive personnel information that should not be entered.\nGet Latest & Actual \nExam",
    "isMulti": true,
    "whyCorrect": "Anonymized policy text and already-redacted job descriptions are appropriate inputs. Named compensation data, employee IDs, and accommodation notes are sensitive personnel information that should not be entered. Get Latest & Actual  Exam Isiliye correct answer C & D hai.",
    "wrongOptions": {
      "A": "'a compensation band summary that includes employee names and current salary f...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'employee ID numbers and hire dates for the team roster included to help Claud...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'accommodation request notes from an employee’s HR file needed to draft a role...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Data Privacy questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 55,
    "conceptId": "human-oversight",
    "question": "You received a vague request to “look at our pricing.” After discovery, the goal is confirmed: produce a structured\ncompetitor-pricing summary the team can act on, not new pricing ideas. Which strategy best fits the clarified task?",
    "options": {
      "A": "Use a comparative analysis strategy that contrasts the company’s pricing against a single named competitor, since\npairwise comparison produces the clearest output.",
      "B": "Use a research strategy that gathers structured information about competitor pricing, names sources, and notes\nconfidence in each finding.",
      "C": "Use a divergent brainstorming approach to generate a wide range of possible competitor-pricing observations, then\nnarrow to the most likely ones.",
      "D": "Use an open conversational strategy that explores competitor pricing iteratively across several prompts, allowing the\nstructure to emerge from the conversation."
    },
    "correctAnswer": "B",
    "explanation": "A structured research strategy that captures sources and confidence levels matches the clarified goal of an actionable\ncompetitor-pricing summary rather than ideation or open-ended exploration.",
    "isMulti": false,
    "whyCorrect": "A structured research strategy that captures sources and confidence levels matches the clarified goal of an actionable competitor-pricing summary rather than ideation or open-ended exploration. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Use a comparative analysis strategy that contrasts the company’s pricing agai...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Use a divergent brainstorming approach to generate a wide range of possible c...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Use an open conversational strategy that explores competitor pricing iterativ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 56,
    "conceptId": "workflow-decomposition",
    "question": "You are an operations assistant asking Claude to summarize 200 weekly metric records across multiple regions.\nWhich output format communicates the data most clearly?",
    "options": {
      "A": "a narrative summary organized by region, describing trends and notable records in prose",
      "B": "a bulleted list of observations grouped by region without consistent metrics across entries",
      "C": "a structured table with one record per row and one metric per column, sorted by region",
      "D": "a series of regional narrative briefs, each describing weekly performance in paragraph form"
    },
    "correctAnswer": "C",
    "explanation": "When the underlying data are tabular, a structured table preserves comparability, enables sorting/filtering, and communicates\nvolume far more clearly than prose narratives.",
    "isMulti": false,
    "whyCorrect": "When the underlying data are tabular, a structured table preserves comparability, enables sorting/filtering, and communicates volume far more clearly than prose narratives. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'a narrative summary organized by region' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'a bulleted list of observations grouped by region without consistent metrics ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'a series of regional narrative briefs' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 57,
    "conceptId": "prompt-clarity",
    "question": "You are a business analyst reviewing prompt drafts written by teammates. Which two elements belong in a\nwell-structured prompt for a business task? (Select two.)",
    "options": {
      "A": "a clear statement of the task that the model must perform",
      "B": "a comprehensive list of company products and services to provide the model with business context",
      "C": "a friendly, conversational tone instruction to make responses feel more approachable",
      "D": "relevant context such as the audience and the goal of the task",
      "E": "a short personal anecdote to make the prompt feel more conversational"
    },
    "correctAnswer": "A & D",
    "explanation": "Every effective business prompt needs a clear task statement and the context (audience, goal, constraints) required to execute\nit well. Exhaustive product lists, tone fluff, or personal anecdotes are optional and often distracting.",
    "isMulti": true,
    "whyCorrect": "Every effective business prompt needs a clear task statement and the context (audience, goal, constraints) required to execute it well. Exhaustive product lists, tone fluff, or personal anecdotes are optional and often distracting. Isiliye correct answer A & D hai.",
    "wrongOptions": {
      "B": "'a comprehensive list of company products and services to provide the model wi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'a friendly' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'a short personal anecdote to make the prompt feel more conversational' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Prompt Clarity questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 58,
    "conceptId": "workflow-decomposition",
    "question": "You are evaluating whether a “redesign new-hire onboarding” request should be decomposed before prompting\nClaude. Which feature of the request most strongly indicates decomposition will help?",
    "options": {
      "A": "The request involves a single well-defined output with a clear input and a familiar format.",
      "B": "The request requires multiple distinct outputs: a process map, supporting materials, and a measurement plan.",
      "C": "The request covers content the associate has produced many times before in a familiar format.",
      "D": "The request is for a single structured document that can be produced from one set of inputs in one prompt."
    },
    "correctAnswer": "B",
    "explanation": "Decomposition is indicated when the request comprises several distinct deliverables that benefit from separate focus,\nsequencing, or quality criteria.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "title": "Decomposition Trigger: Distinct Deliverables",
    "hinglishQ": "Redesign new-hire onboarding task ko decompose karne ka sabse strong indicator kya hai?",
    "whyCorrect": "Decomposition is indicated when the request comprises several distinct deliverables that benefit from separate focus, sequencing, or quality criteria. Get Latest & Actual  Exam Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Single well-defined output single prompt mein ho sakta hai, decompose ki zarurat nahi.",
      "C": "Familiar content decomposition demand nahi karta.",
      "D": "Single structured document single prompt se ho sakta hai."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 59,
    "conceptId": "workflow-decomposition",
    "question": "You are evaluating proposed workflow changes against whether they meaningfully improve the workflow. Which\ntwo proposed changes meaningfully improve a recurring Claude workflow? (Select two.)",
    "options": {
      "A": "reorganizing the workflow document’s section headings to improve navigation",
      "B": "updating the team’s shared workspace name to reflect the new workflow process",
      "C": "adding a quality check on outputs before they enter the downstream process",
      "D": "labeling each workflow step with descriptive names to improve readability for new team members",
      "E": "extracting the standard reference material into a Project to avoid repeating it"
    },
    "correctAnswer": "C & E",
    "explanation": "A quality gate before downstream use and the elimination of repeated reference material via a Project are substantive process\nimprovements. Cosmetic renaming or heading reorganization are secondary.",
    "isMulti": true,
    "whyCorrect": "A quality gate before downstream use and the elimination of repeated reference material via a Project are substantive process improvements. Cosmetic renaming or heading reorganization are secondary. Isiliye correct answer C & E hai.",
    "wrongOptions": {
      "A": "'reorganizing the workflow document’s section headings to improve navigation' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'updating the team’s shared workspace name to reflect the new workflow process' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'labeling each workflow step with descriptive names to improve readability for...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 60,
    "conceptId": "iteration-diminishing",
    "question": "You have iterated a Claude prompt eight times, and the output quality has plateaued for the last four attempts.\nWhich conclusion is most appropriate?",
    "options": {
      "A": "Iteration has reached diminishing returns and the next step is human review or a different approach.",
      "B": "Iteration should continue because a plateau often breaks after several more attempts.",
      "C": "Iteration should stop and the task should be abandoned without communicating to stakeholders.",
      "D": "Iteration should stop and the current output should be accepted as-is, without a human review of the remaining\nissues."
    },
    "correctAnswer": "A",
    "explanation": "When quality has stopped improving across multiple iterations, further prompting is unlikely to help. The rational next step is\nhuman review or a change of approach, not continued looping or silent abandonment.",
    "isMulti": false,
    "title": "Prompting Plateau & Diminishing Returns",
    "hinglishQ": "Aapne prompt 8 baar iterate kiya aur pichle 4 baar se quality plateau ho chuki hai. Sahi conclusion kya hai?",
    "whyCorrect": "When quality has stopped improving across multiple iterations, further prompting is unlikely to help. The rational next step is human review or a change of approach, not continued looping or silent abandonment. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "Plateau aane ke baad same prompting continue karna effort waste karta hai.",
      "C": "Task silently abandon karna unprofessional hai.",
      "D": "Kharab output accept kar lena quality standard ko compromise karta hai."
    },
    "examTip": "Exam Tip: Iteration Diminishing questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 61,
    "conceptId": "human-oversight",
    "question": "A product owner wants Claude to generate three alternative product roadmap options for the next quarter. The\nteam will debate trade-offs later. Which prompting approach is most appropriate?",
    "options": {
      "A": "Ask Claude to pick the single best roadmap and justify why the other two are inferior.",
      "B": "Request three distinct roadmaps, each with explicit trade-offs, without ranking them.",
      "C": "Ask Claude to generate one roadmap and then iteratively refine it based on imagined stakeholder objections.",
      "D": "Request a single comprehensive roadmap that already balances all known constraints."
    },
    "correctAnswer": "B",
    "explanation": "When the goal is breadth and later human debate, the model should surface distinct options with trade-offs rather than\ncollapsing to a single recommendation.",
    "isMulti": false,
    "whyCorrect": "When the goal is breadth and later human debate, the model should surface distinct options with trade-offs rather than collapsing to a single recommendation. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Ask Claude to pick the single best roadmap and justify why the other two are ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask Claude to generate one roadmap and then iteratively refine it based on im...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Request a single comprehensive roadmap that already balances all known constr...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 62,
    "conceptId": "degraded-conversations",
    "question": "You notice that Claude’s answers in a long chat have started repeating earlier points and ignoring the latest\ninstruction. Which recovery step should be tried first?",
    "options": {
      "A": "Switch immediately to a different model vendor.",
      "B": "Summarize the key decisions so far and issue a fresh, focused prompt that restates the current goal.",
      "C": "Delete the entire Project configuration and start over.",
      "D": "Increase the temperature setting to encourage more varied responses."
    },
    "correctAnswer": "B",
    "explanation": "Context degradation is best addressed by compressing history and re-anchoring the model with a clear, current goal before\nmore drastic measures.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Context degradation is best addressed by compressing history and re-anchoring the model with a clear, current goal before more drastic measures. Get Latest & Actual  Exam Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Switch immediately to a different model vendor.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Delete the entire Project configuration and start over.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Increase the temperature setting to encourage more varied responses.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Degraded Conversations questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 63,
    "conceptId": "human-oversight",
    "question": "A compliance officer is deciding whether a proposed Claude use case is in scope. The use case involves drafting\ninternal policy FAQs from already-approved policy documents. Which decision is most consistent with typical\norganizational AI policies?",
    "options": {
      "A": "Reject the use case because any policy-related content is high-risk.",
      "B": "Approve the use case with mandatory human review before the FAQs are published internally.",
      "C": "Approve the use case for fully automated publication without review.",
      "D": "Require the FAQs to be written only by a licensed attorney using Claude as a silent assistant."
    },
    "correctAnswer": "B",
    "explanation": "Internal FAQs drawn from approved sources are low-to-moderate risk and are typically allowed when a human reviews the\noutput before distribution.",
    "isMulti": false,
    "whyCorrect": "Internal FAQs drawn from approved sources are low-to-moderate risk and are typically allowed when a human reviews the output before distribution. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Reject the use case because any policy-related content is high-risk.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Approve the use case for fully automated publication without review.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Require the FAQs to be written only by a licensed attorney using Claude as a ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 64,
    "conceptId": "workflow-decomposition",
    "question": "Which two elements are essential in a well-formed evaluation rubric for Claude-generated customer emails?\n(Select two.)",
    "options": {
      "A": "Whether the email uses the author’s preferred greeting style.",
      "B": "Factual accuracy of any claims against the source ticket or knowledge base.",
      "C": "Whether the email exceeds 400 words regardless of content.",
      "D": "Alignment with the brand voice guide and required compliance statements.",
      "E": "Whether Claude spontaneously added an upsell offer."
    },
    "correctAnswer": "B & D",
    "explanation": "Accuracy against source material and adherence to brand/compliance requirements are core quality criteria; stylistic\npreferences and unsolicited upsells are secondary or out of scope.",
    "isMulti": true,
    "whyCorrect": "Accuracy against source material and adherence to brand/compliance requirements are core quality criteria; stylistic preferences and unsolicited upsells are secondary or out of scope. Isiliye correct answer B & D hai.",
    "wrongOptions": {
      "A": "'Whether the email uses the author’s preferred greeting style.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Whether the email exceeds 400 words regardless of content.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Whether Claude spontaneously added an upsell offer.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 65,
    "conceptId": "project-config",
    "question": "A team is configuring a Project that will be used by twelve people for weekly status reports. Which configuration\npractice best supports consistency?",
    "options": {
      "A": "Leave custom instructions empty so each user can prompt freely.",
      "B": "Place role, required sections, tone, and length constraints in the Project’s custom instructions.",
      "C": "Rely solely on a shared Slack channel to remind people of the expected format.",
      "D": "Create a separate Project for each team member to avoid cross-contamination."
    },
    "correctAnswer": "B",
    "explanation": "Project-level custom instructions ensure every conversation inherits the same role, structure, tone, and constraints without\nrelying on individual memory or external reminders.",
    "isMulti": false,
    "title": "12-Person Team Consistency in Project",
    "hinglishQ": "12 logon ki team ke weekly status reports mein consistency lane ke liye Project ki best configuration kya hai?",
    "whyCorrect": "Project-level custom instructions ensure every conversation inherits the same role, structure, tone, and constraints without relying on individual memory or external reminders. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Custom instructions empty chhodne se har banda alag prompt likhega aur output drift hoga.",
      "C": "Slack channel external reminder hai, model ko directly govern nahi karta.",
      "D": "12 alag Projects banana team fragmentation aur maintenance nightmare banata hai."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 66,
    "conceptId": "data-privacy",
    "question": "You are preparing a prompt that must reference a confidential pricing spreadsheet. Which data-handling step is\nrequired before including any content from the spreadsheet?",
    "options": {
      "A": "Upload the full spreadsheet and instruct Claude to ignore sensitive columns.",
      "B": "Redact or exclude any customer-specific or non-public pricing cells that the task does not require.",
      "C": "Convert the spreadsheet to a PDF so Claude cannot extract numbers precisely.",
      "D": "Ask Claude to confirm it will not store the data after the chat ends."
    },
    "correctAnswer": "B",
    "explanation": "Only the minimum necessary data should be provided; confidential or personally identifiable values that are not required for the\ntask must be redacted or omitted.",
    "isMulti": false,
    "whyCorrect": "Only the minimum necessary data should be provided; confidential or personally identifiable values that are not required for the task must be redacted or omitted. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Upload the full spreadsheet and instruct Claude to ignore sensitive columns.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Convert the spreadsheet to a PDF so Claude cannot extract numbers precisely.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ask Claude to confirm it will not store the data after the chat ends.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Data Privacy questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 67,
    "conceptId": "project-config",
    "question": "A manager observes that Claude outputs for a recurring task have begun citing an internal style guide that was\nretired six months ago. What does this signal most strongly?",
    "options": {
      "A": "The model’s training data is outdated and cannot be fixed.",
      "B": "The Project’s knowledge base or custom instructions still reference the retired guide and need updating.",
      "C": "Users are deliberately pasting the old guide into every prompt.",
      "D": "The temperature setting is too high, causing hallucinated citations."
    },
    "correctAnswer": "B",
    "explanation": "Persistent citation of retired guidance almost always means the Project still contains that material in its knowledge or\ninstructions; updating the configuration resolves the drift.\n Get Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Persistent citation of retired guidance almost always means the Project still contains that material in its knowledge or instructions; updating the configuration resolves the drift.  Get Latest & Actual  Exam Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'The model’s training data is outdated and cannot be fixed.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Users are deliberately pasting the old guide into every prompt.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The temperature setting is too high' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 68,
    "conceptId": "human-oversight",
    "question": "Which hand-off design between Claude and a human reviewer is most reliable for high-stakes external\ncommunications?",
    "options": {
      "A": "The human reviewer decides ad-hoc what to check based on personal experience.",
      "B": "Explicit criteria define both what Claude must produce and what the human must verify before release.",
      "C": "Claude generates a self-checklist that the human is free to ignore.",
      "D": "The human only reviews the final paragraph for tone."
    },
    "correctAnswer": "B",
    "explanation": "Documented, dual-sided criteria create an auditable, consistent hand-off; ad-hoc or partial review leaves gaps.",
    "isMulti": false,
    "whyCorrect": "Documented, dual-sided criteria create an auditable, consistent hand-off; ad-hoc or partial review leaves gaps. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'The human reviewer decides ad-hoc what to check based on personal experience.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Claude generates a self-checklist that the human is free to ignore.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The human only reviews the final paragraph for tone.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 69,
    "conceptId": "code-execution",
    "question": "A knowledge worker needs Claude to perform exact arithmetic across three uploaded CSV files and return a\nverified totals table. Which feature is the best fit?",
    "options": {
      "A": "Standard chat with the files attached.",
      "B": "Artifacts only.",
      "C": "Code Execution on the uploaded files, followed by human verification of the results.",
      "D": "Memory import of previous calculations."
    },
    "correctAnswer": "C",
    "explanation": "Deterministic calculations belong in the Code Execution sandbox where actual code runs against the data; the language model\nalone is not reliable for precise multi-file arithmetic.",
    "isMulti": false,
    "whyCorrect": "Deterministic calculations belong in the Code Execution sandbox where actual code runs against the data; the language model alone is not reliable for precise multi-file arithmetic. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Standard chat with the files attached.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Artifacts only.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Memory import of previous calculations.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Code Execution questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 70,
    "conceptId": "iteration-diminishing",
    "question": "When refining a prompt after a mediocre first output, which step should come first?",
    "options": {
      "A": "Immediately rewrite the entire prompt from scratch.",
      "B": "Identify the specific deficiencies in the current output relative to the success criteria.",
      "C": "Add three new example outputs to the prompt.",
      "D": "Switch to a more capable model before changing anything else."
    },
    "correctAnswer": "B",
    "explanation": "Diagnosis precedes intervention: you must know exactly what failed before you can target the prompt changes effectively.",
    "isMulti": false,
    "whyCorrect": "Diagnosis precedes intervention: you must know exactly what failed before you can target the prompt changes effectively. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Immediately rewrite the entire prompt from scratch.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Add three new example outputs to the prompt.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Switch to a more capable model before changing anything else.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Iteration Diminishing questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 71,
    "conceptId": "human-oversight",
    "question": "Which two risks are highest when Claude is used inside an HR performance-calibration workflow? (Select two.)",
    "options": {
      "A": "Inconsistent use of Oxford commas in written feedback.",
      "B": "Employment decisions made without clear human accountability.",
      "C": "Outputs that systematically disadvantage members of a protected class.",
      "D": "Slight variations in email signature formatting.",
      "E": "Occasional use of a slightly longer greeting."
    },
    "correctAnswer": "B & C",
    "explanation": "Material employment impact without accountability and systematic bias against protected groups are high-severity ethical and\nlegal risks; formatting issues are not.",
    "isMulti": true,
    "whyCorrect": "Material employment impact without accountability and systematic bias against protected groups are high-severity ethical and legal risks; formatting issues are not. Isiliye correct answer B & C hai.",
    "wrongOptions": {
      "A": "'Inconsistent use of Oxford commas in written feedback.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Slight variations in email signature formatting.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Occasional use of a slightly longer greeting.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 72,
    "conceptId": "human-oversight",
    "question": "A stakeholder asks for a one-sentence description of Claude’s role in a project. Which framing best balances value\nand limitations?",
    "options": {
      "A": "“Claude does everything so the team can focus on strategy.”",
      "B": "“Claude drafts and synthesizes under human direction; the team retains review and final decision rights.”",
      "C": "“Claude is experimental and should not be relied upon.”",
      "D": "“Claude replaces the need for junior analysts.”"
    },
    "correctAnswer": "B",
    "explanation": "Balanced framing names both the productive contribution and the continuing human accountability.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Balanced framing names both the productive contribution and the continuing human accountability. Get Latest & Actual  Exam Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'“Claude does everything so the team can focus on strategy.”' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'“Claude is experimental and should not be relied upon.”' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'“Claude replaces the need for junior analysts.”' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 73,
    "conceptId": "prompt-clarity",
    "question": "You are designing a prompt for a constrained brainstorming task that must produce exactly eight ideas, each tied\nto one of four predefined customer segments. Which approach fits best?",
    "options": {
      "A": "Ask for twenty ideas and filter afterward.",
      "B": "State the exact count, the four segments, and require each idea to name its segment.",
      "C": "Ask for ideas without segment constraints so creativity is unconstrained.",
      "D": "Ask Claude to choose the eight strongest ideas from an unbounded list."
    },
    "correctAnswer": "B",
    "explanation": "When constraints define success, they belong in the prompt and each output item should explicitly demonstrate compliance.",
    "isMulti": false,
    "title": "Constrained Brainstorming: 8 Ideas across 4 Segments (Repeated Concept)",
    "hinglishQ": "Brainstorming task jisme exactly 8 ideas chahiye, aur 4 predefined customer segments mein distribute karna hai. Best approach kya hai?",
    "whyCorrect": "When constraints define success, they belong in the prompt and each output item should explicitly demonstrate compliance. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "20 ideas maang kar baad mein filter karna inefficient hai.",
      "C": "Constraints hata dena task ki core requirement ko tod deta hai.",
      "D": "Unbounded list se Claude ko choose karne kehna random result deta hai."
    },
    "examTip": "Exam Tip: Prompt Clarity questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 74,
    "conceptId": "iteration-diminishing",
    "question": "After a successful pilot, two improvement opportunities were identified. The core results were positive. What is the\nmost appropriate next step?",
    "options": {
      "A": "Run an entirely new pilot focused only on the two opportunities.",
      "B": "Incorporate the improvements and proceed to broader rollout with close monitoring.",
      "C": "Delay rollout indefinitely until both opportunities are fully solved.",
      "D": "Discard the pilot results and start research from scratch."
    },
    "correctAnswer": "B",
    "explanation": "Positive core results justify advancing; remaining improvements can be addressed during monitored rollout rather than blocking\nprogress.",
    "isMulti": false,
    "whyCorrect": "Positive core results justify advancing; remaining improvements can be addressed during monitored rollout rather than blocking progress. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Run an entirely new pilot focused only on the two opportunities.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Delay rollout indefinitely until both opportunities are fully solved.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Discard the pilot results and start research from scratch.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Iteration Diminishing questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 75,
    "conceptId": "context-windows",
    "question": "Which statement most accurately describes the context window?",
    "options": {
      "A": "Unlimited conversation history that persists across all future chats.",
      "B": "A fixed token budget that includes system instructions, history, attachments, and the current message.",
      "C": "A user-adjustable slider that controls how much history Claude sees.",
      "D": "The subset of history Claude decides is relevant, which can exceed the model’s limit."
    },
    "correctAnswer": "B",
    "explanation": "The context window is a hard token limit on everything the model can attend to in a single turn.",
    "isMulti": false,
    "title": "Context Window Limits (Repeated Concept)",
    "hinglishQ": "Kaunsa statement context window ko accurately describe karta hai?",
    "whyCorrect": "The context window is a hard token limit on everything the model can attend to in a single turn. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Unlimited conversation history nahi hoti.",
      "C": "User-adjustable slider nahi hota.",
      "D": "Claude limit se exceed nahi kar sakta."
    },
    "examTip": "Exam Tip: Context Windows questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 76,
    "conceptId": "data-privacy",
    "question": "A team member wants to put full employee salary bands and names into a Claude prompt to generate\npersonalized compensation letters. What is the correct response?",
    "options": {
      "A": "Proceed if the letters will only be used internally.",
      "B": "Redact names and exact figures; supply only the policy rules and required structure.",
      "C": "Use Incognito mode so the data is not retained.",
      "D": "Ask Claude to anonymize the data after it has been uploaded."
    },
    "correctAnswer": "B",
    "explanation": "Named compensation data is highly sensitive; only the minimum necessary non-identifying policy information should be\nsupplied.",
    "isMulti": false,
    "whyCorrect": "Named compensation data is highly sensitive; only the minimum necessary non-identifying policy information should be supplied. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Proceed if the letters will only be used internally.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Use Incognito mode so the data is not retained.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ask Claude to anonymize the data after it has been uploaded.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Data Privacy questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 77,
    "conceptId": "prompt-clarity",
    "question": "Which two items belong on a prompt-quality checklist? (Select two.)",
    "options": {
      "A": "Whether the prompt contains the author’s favorite quotation.",
      "B": "Whether the prompt states a clear task and required deliverable.",
      "C": "Whether the prompt supplies relevant context (audience, goal, constraints).",
      "D": "Whether the prompt is longer than 800 words.",
      "E": "Whether the prompt lists every team member’s email address."
    },
    "correctAnswer": "B & C",
    "explanation": "Clear task/deliverable and sufficient context are foundational; length quotas and personal flourishes are not quality criteria.\nGet Latest & Actual \nExam",
    "isMulti": true,
    "title": "Prompt-Quality Checklist Items (Repeated Concept - Select TWO)",
    "hinglishQ": "Kaunse do items prompt-quality checklist par hone chahiye? (Select two)",
    "whyCorrect": "Clear task/deliverable and sufficient context are foundational; length quotas and personal flourishes are not quality criteria. Get Latest & Actual  Exam Isiliye correct answer B & C hai.",
    "wrongOptions": {
      "A": "Author ki favorite quote prompt quality se irrelevant hai.",
      "D": "800 words se lamba hona koi quality benchmark nahi hai.",
      "E": "Har team member ka email address prompt mein unnecessary noise hai."
    },
    "examTip": "Exam Tip: Prompt Clarity questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 78,
    "conceptId": "primary-source",
    "question": "Claude has produced a report that cites a growth figure appearing in three secondary articles, none of which link to\na primary source. What is the correct validation action?",
    "options": {
      "A": "Accept the figure because three independent articles agree.",
      "B": "Locate and verify the figure in the original primary study or authoritative source.",
      "C": "Average the three slightly different numbers reported.",
      "D": "Remove the citation and present the figure as common knowledge."
    },
    "correctAnswer": "B",
    "explanation": "Secondary repetition is not verification; the primary source must be checked.",
    "isMulti": false,
    "whyCorrect": "Secondary repetition is not verification; the primary source must be checked. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Accept the figure because three independent articles agree.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Average the three slightly different numbers reported.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Remove the citation and present the figure as common knowledge.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Primary Source questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 79,
    "conceptId": "project-config",
    "question": "For a living one-page operating procedure that will be edited and reused for months, which output format is most\nappropriate?",
    "options": {
      "A": "A chat response that is copied into email each time.",
      "B": "An Artifact that can be opened, edited, and versioned as a stable document.",
      "C": "A series of numbered steps left only inside the original chat.",
      "D": "A PDF screenshot of the chat window."
    },
    "correctAnswer": "B",
    "explanation": "Artifacts are designed to be durable, editable working documents—exactly what a living procedure requires.",
    "isMulti": false,
    "whyCorrect": "Artifacts are designed to be durable, editable working documents—exactly what a living procedure requires. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'A chat response that is copied into email each time.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'A series of numbered steps left only inside the original chat.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'A PDF screenshot of the chat window.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 80,
    "conceptId": "human-oversight",
    "question": "When applying organizational AI policy to a new use case, which step comes first?",
    "options": {
      "A": "Approve or reject the use case.",
      "B": "Document the decision in the compliance register.",
      "C": "Identify which policy provisions apply to the proposed use case.",
      "D": "Compare the use case against every policy document in the company."
    },
    "correctAnswer": "C",
    "explanation": "You must first determine relevance before comparison or decision-making can occur.",
    "isMulti": false,
    "whyCorrect": "You must first determine relevance before comparison or decision-making can occur. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Approve or reject the use case.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Document the decision in the compliance register.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Compare the use case against every policy document in the company.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 81,
    "conceptId": "human-oversight",
    "question": "A Claude-generated customer health report covers all required topics but addresses only one of three mandated\nrisk dimensions in the renewal-risk section. What is the best conclusion?",
    "options": {
      "A": "The report fully meets the specification because every topic heading is present.",
      "B": "The renewal-risk section is under-scoped and should be expanded before delivery.",
      "C": "Completeness cannot be judged without customer feedback.",
      "D": "The missing dimensions can be ignored because the rest of the report is strong."
    },
    "correctAnswer": "B",
    "explanation": "Presence of a section is insufficient when the specification requires multi-dimensional coverage; the gap must be closed.",
    "isMulti": false,
    "whyCorrect": "Presence of a section is insufficient when the specification requires multi-dimensional coverage; the gap must be closed. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'The report fully meets the specification because every topic heading is present.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Completeness cannot be judged without customer feedback.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The missing dimensions can be ignored because the rest of the report is strong.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 82,
    "conceptId": "human-oversight",
    "question": "Which two criteria most directly inform whether a workflow step should be delegated to Claude? (Select two.)",
    "options": {
      "A": "How colorful the process diagram is.",
      "B": "Whether the step requires human creativity, empathy, or high-stakes judgment.",
      "C": "How long the current process has existed unchanged.",
      "D": "The reversibility of the step and the consequence of an error.",
      "E": "The job title of the person who currently performs the step."
    },
    "correctAnswer": "B & D",
    "explanation": "Delegation decisions turn on uniquely human capabilities and on risk (reversibility × impact), not on diagram aesthetics or\ntenure.\nGet Latest & Actual \nExam",
    "isMulti": true,
    "whyCorrect": "Delegation decisions turn on uniquely human capabilities and on risk (reversibility × impact), not on diagram aesthetics or tenure. Get Latest & Actual  Exam Isiliye correct answer B & D hai.",
    "wrongOptions": {
      "A": "'How colorful the process diagram is.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'How long the current process has existed unchanged.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'The job title of the person who currently performs the step.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 83,
    "conceptId": "primary-source",
    "question": "A prompt asks Claude to “act as a senior researcher” but does not constrain it to the supplied source documents.\nThe output introduces plausible-sounding facts absent from those sources. What is the most direct root cause?",
    "options": {
      "A": "The model is inherently incapable of staying on source.",
      "B": "The prompt lacks an explicit constraint to use only facts present in the supplied sources.",
      "C": "The temperature setting was left at the default.",
      "D": "The role “senior researcher” forces invention of new facts."
    },
    "correctAnswer": "B",
    "explanation": "Without a source-boundary constraint, the model will fill gaps with trained knowledge or plausible invention.",
    "isMulti": false,
    "whyCorrect": "Without a source-boundary constraint, the model will fill gaps with trained knowledge or plausible invention. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'The model is inherently incapable of staying on source.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The temperature setting was left at the default.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The role “senior researcher” forces invention of new facts.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Primary Source questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 84,
    "conceptId": "workflow-decomposition",
    "question": "For a time-constrained investor update, which narrative structure is most appropriate?",
    "options": {
      "A": "Chronological recap of the quarter, reaching the headline result near the end.",
      "B": "Lead with the headline result, present key drivers concisely, close with forward outlook.",
      "C": "Lead with operational anecdotes, then financial results.",
      "D": "Present only the forward outlook and omit historical results."
    },
    "correctAnswer": "B",
    "explanation": "Investors need the bottom line first, then the concise explanation, then the forward view.",
    "isMulti": false,
    "whyCorrect": "Investors need the bottom line first, then the concise explanation, then the forward view. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Chronological recap of the quarter' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Lead with operational anecdotes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Present only the forward outlook and omit historical results.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 85,
    "conceptId": "workflow-decomposition",
    "question": "Which two evaluation criteria are valid for a Claude-generated business brief? (Select two.)",
    "options": {
      "A": "Total word count matching an industry average.",
      "B": "Factual accuracy of claims against the supplied source material.",
      "C": "Presence of the author’s favorite transitional phrase.",
      "D": "Alignment with the requested format and length constraints.",
      "E": "Whether Claude added an unsolicited competitive analysis."
    },
    "correctAnswer": "B & D",
    "explanation": "Accuracy against sources and fidelity to the requested format/length are core; stylistic idiosyncrasies and unsolicited extras are\nnot.",
    "isMulti": true,
    "whyCorrect": "Accuracy against sources and fidelity to the requested format/length are core; stylistic idiosyncrasies and unsolicited extras are not. Isiliye correct answer B & D hai.",
    "wrongOptions": {
      "A": "'Total word count matching an industry average.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Presence of the author’s favorite transitional phrase.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Whether Claude added an unsolicited competitive analysis.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 86,
    "conceptId": "code-execution",
    "question": "A finance manager needs deterministic calculations across a multi-tab workbook. Which Claude feature should be\nselected?",
    "options": {
      "A": "Standard chat prompt with the file attached.",
      "B": "Research feature.",
      "C": "Artifacts only.",
      "D": "Code Execution that runs code against the uploaded file and produces verifiable outputs."
    },
    "correctAnswer": "D",
    "explanation": "Only Code Execution provides actual deterministic computation on the file contents.",
    "isMulti": false,
    "whyCorrect": "Only Code Execution provides actual deterministic computation on the file contents. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Standard chat prompt with the file attached.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Research feature.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Artifacts only.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Code Execution questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 87,
    "conceptId": "project-config",
    "question": "Claude’s first response is factually correct but uses terminology that conflicts with the organization’s glossary. What\nis the most direct fix?",
    "options": {
      "A": "Manually find-and-replace terms after every generation.",
      "B": "Provide the glossary and instruct Claude to use only those terms.",
      "C": "Ask Claude to choose whatever terminology it prefers.",
      "D": "Ignore the inconsistency because the facts are correct."
    },
    "correctAnswer": "B",
    "explanation": "Supplying the authoritative glossary and requiring exclusive use prevents terminology drift at generation time.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Supplying the authoritative glossary and requiring exclusive use prevents terminology drift at generation time. Get Latest & Actual  Exam Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Manually find-and-replace terms after every generation.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask Claude to choose whatever terminology it prefers.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ignore the inconsistency because the facts are correct.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 88,
    "conceptId": "human-oversight",
    "question": "An operations analyst has process documentation and cycle-time data. How can Claude best support process\noptimization?",
    "options": {
      "A": "Autonomously redesign the process and implement the changes.",
      "B": "Map the current process, surface data-backed bottleneck hypotheses, and propose options for human review.",
      "C": "Interview every team member via Claude and rewrite the process from those interviews alone.",
      "D": "Generate an industry-benchmark process and force the team to adopt it."
    },
    "correctAnswer": "B",
    "explanation": "Claude is most effective as an analytical partner that surfaces options; humans retain design and implementation authority.",
    "isMulti": false,
    "whyCorrect": "Claude is most effective as an analytical partner that surfaces options; humans retain design and implementation authority. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Autonomously redesign the process and implement the changes.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Interview every team member via Claude and rewrite the process from those int...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Generate an industry-benchmark process and force the team to adopt it.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 89,
    "conceptId": "data-privacy",
    "question": "Which two data items are appropriate to include in a Claude prompt for a routine HR task? (Select two.)",
    "options": {
      "A": "Named employee salary figures.",
      "B": "An anonymized summary of an HR policy to be rephrased.",
      "C": "A redacted job description to be adapted for a posting.",
      "D": "Accommodation request notes from a personnel file.",
      "E": "Full employee ID numbers and home addresses."
    },
    "correctAnswer": "B & C",
    "explanation": "Anonymized policy text and already-redacted job descriptions are appropriate; named compensation and sensitive personnel\ndata are not.",
    "isMulti": true,
    "whyCorrect": "Anonymized policy text and already-redacted job descriptions are appropriate; named compensation and sensitive personnel data are not. Isiliye correct answer B & C hai.",
    "wrongOptions": {
      "A": "'Named employee salary figures.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Accommodation request notes from a personnel file.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Full employee ID numbers and home addresses.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Data Privacy questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 90,
    "conceptId": "human-oversight",
    "question": "After clarifying that the goal is a structured competitor-pricing summary (not new ideas), which strategy fits best?",
    "options": {
      "A": "Divergent brainstorming of many possible observations.",
      "B": "A research strategy that gathers structured pricing data, names sources, and notes confidence.",
      "C": "Open-ended conversation that lets structure emerge organically.",
      "D": "Comparative analysis against a single competitor only."
    },
    "correctAnswer": "B",
    "explanation": "A structured research approach with sources and confidence levels matches the clarified goal of an actionable summary.",
    "isMulti": false,
    "whyCorrect": "A structured research approach with sources and confidence levels matches the clarified goal of an actionable summary. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Divergent brainstorming of many possible observations.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Open-ended conversation that lets structure emerge organically.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Comparative analysis against a single competitor only.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 91,
    "conceptId": "workflow-decomposition",
    "question": "When summarizing 200 weekly metric records across regions, which output format communicates most clearly?",
    "options": {
      "A": "Long narrative paragraphs organized by region.",
      "B": "A structured table with consistent columns, one record per row, sorted by region.",
      "C": "A bulleted list of free-form observations without aligned metrics.",
      "D": "Separate narrative briefs for each region with no common structure."
    },
    "correctAnswer": "B",
    "explanation": "Tabular data is most clearly communicated in a consistent table that supports comparison and sorting.",
    "isMulti": false,
    "whyCorrect": "Tabular data is most clearly communicated in a consistent table that supports comparison and sorting. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Long narrative paragraphs organized by region.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'A bulleted list of free-form observations without aligned metrics.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Separate narrative briefs for each region with no common structure.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 92,
    "conceptId": "prompt-clarity",
    "question": "Which two elements belong in a well-structured business prompt? (Select two.)",
    "options": {
      "A": "A clear statement of the task the model must perform.",
      "B": "A complete catalog of every company product.",
      "C": "Relevant context such as audience and goal.",
      "D": "A personal anecdote to make the prompt feel friendly.",
      "E": "An instruction to use a casual tone regardless of audience."
    },
    "correctAnswer": "A & C",
    "explanation": "Task clarity and relevant context are essential; exhaustive catalogs and personal stories are usually noise.\nGet Latest & Actual \nExam",
    "isMulti": true,
    "title": "Well-Structured Business Prompt Elements (Repeated Concept - Select TWO)",
    "hinglishQ": "Business task ke well-structured prompt mein kaunse 2 elements aate hain? (Select two)",
    "whyCorrect": "Task clarity and relevant context are essential; exhaustive catalogs and personal stories are usually noise. Get Latest & Actual  Exam Isiliye correct answer A & C hai.",
    "wrongOptions": {
      "B": "Har company product ka pura catalog daalna noise aur context window waste karta hai.",
      "D": "Personal anecdote prompt ko friendly dikha sakti hai par quality nahi badhati.",
      "E": "Har audience ke liye casual tone force karna unprofessional aur wrong constraint hai."
    },
    "examTip": "Exam Tip: Prompt Clarity questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 93,
    "conceptId": "workflow-decomposition",
    "question": "A request asks for a process map, supporting materials, and a measurement plan. What does this feature\nindicate?",
    "options": {
      "A": "The request is simple enough for a single prompt.",
      "B": "The request should be decomposed into distinct outputs before prompting.",
      "C": "The request can be ignored because it is too large.",
      "D": "The request should be handled entirely by Code Execution."
    },
    "correctAnswer": "B",
    "explanation": "Multiple distinct deliverables benefit from decomposition so each can receive focused attention and quality criteria.",
    "isMulti": false,
    "whyCorrect": "Multiple distinct deliverables benefit from decomposition so each can receive focused attention and quality criteria. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'The request is simple enough for a single prompt.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The request can be ignored because it is too large.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The request should be handled entirely by Code Execution.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 94,
    "conceptId": "workflow-decomposition",
    "question": "Which two proposed changes meaningfully improve a recurring Claude workflow? (Select two.)",
    "options": {
      "A": "Renaming the shared workspace for aesthetic reasons.",
      "B": "Adding a quality check on outputs before they enter the downstream process.",
      "C": "Extracting standard reference material into a Project so it is not re-pasted every time.",
      "D": "Changing the font of the workflow document.",
      "E": "Reordering section headings without changing content or controls."
    },
    "correctAnswer": "B & C",
    "explanation": "A quality gate and elimination of repeated reference material are substantive improvements; cosmetic changes are not.",
    "isMulti": true,
    "whyCorrect": "A quality gate and elimination of repeated reference material are substantive improvements; cosmetic changes are not. Isiliye correct answer B & C hai.",
    "wrongOptions": {
      "A": "'Renaming the shared workspace for aesthetic reasons.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Changing the font of the workflow document.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Reordering section headings without changing content or controls.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 95,
    "conceptId": "iteration-diminishing",
    "question": "After eight prompt iterations with no further quality gain, what is the appropriate conclusion?",
    "options": {
      "A": "Keep iterating; plateaus usually break after a few more tries.",
      "B": "Iteration has reached diminishing returns; move to human review or a different approach.",
      "C": "Accept the current output without further human review.",
      "D": "Abandon the task silently."
    },
    "correctAnswer": "B",
    "explanation": "Continued prompting after a clear plateau wastes effort; human judgment or a new strategy is required.",
    "isMulti": false,
    "whyCorrect": "Continued prompting after a clear plateau wastes effort; human judgment or a new strategy is required. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Keep iterating' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Accept the current output without further human review.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Abandon the task silently.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Iteration Diminishing questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 96,
    "conceptId": "human-oversight",
    "question": "A user wants Claude to draft an external press release that will be published without further human editing. Is this\nappropriate?",
    "options": {
      "A": "Yes, because Claude is highly capable at writing.",
      "B": "No; external press releases require human review and approval before publication.",
      "C": "Yes, if the temperature is set to zero.",
      "D": "Yes, provided the release is shorter than 300 words."
    },
    "correctAnswer": "B",
    "explanation": "High-visibility external communications carry reputational and legal risk and must retain human accountability.",
    "isMulti": false,
    "whyCorrect": "High-visibility external communications carry reputational and legal risk and must retain human accountability. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 97,
    "conceptId": "human-oversight",
    "question": "Which practice best reflects the Diligence competency of the AI Fluency Framework?",
    "options": {
      "A": "Applying policy only when usage is likely to be audited.",
      "B": "Completing a one-time policy acknowledgment at onboarding and never revisiting it.",
      "C": "Consistently applying policy, identifying gaps between practice and policy, and closing those gaps over time.",
      "D": "Delegating all policy questions to a central team and taking no personal responsibility."
    },
    "correctAnswer": "C",
    "explanation": "Diligence is a sustained habit of alignment, gap detection, and corrective action.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Diligence is a sustained habit of alignment, gap detection, and corrective action. Get Latest & Actual  Exam Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Applying policy only when usage is likely to be audited.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Completing a one-time policy acknowledgment at onboarding and never revisitin...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Delegating all policy questions to a central team and taking no personal resp...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 98,
    "conceptId": "context-windows",
    "question": "More capable Claude models (e.g., Opus) compared with lighter models (e.g., Haiku) generally:",
    "options": {
      "A": "Consume less of the rate limit and run faster.",
      "B": "Consume more of the rate limit and run more slowly, while offering higher reasoning quality.",
      "C": "Have identical speed and rate-limit consumption; only quality differs.",
      "D": "Require multiple passes to match lighter-model quality."
    },
    "correctAnswer": "B",
    "explanation": "Higher capability comes with higher latency and greater rate-limit consumption—the fundamental trade-off.",
    "isMulti": false,
    "whyCorrect": "Higher capability comes with higher latency and greater rate-limit consumption—the fundamental trade-off. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Consume less of the rate limit and run faster.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Have identical speed and rate-limit consumption' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Require multiple passes to match lighter-model quality.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Context Windows questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 99,
    "conceptId": "primary-source",
    "question": "Two secondary sources give conflicting dates for the same event. What is the correct fact-checking action?",
    "options": {
      "A": "Choose the more recent secondary source.",
      "B": "Average the two dates.",
      "C": "Locate a primary or authoritative source and use the date it confirms.",
      "D": "Prefer the source with the longer citation."
    },
    "correctAnswer": "C",
    "explanation": "Conflicts between secondary sources are resolved by consulting a primary or authoritative source.",
    "isMulti": false,
    "whyCorrect": "Conflicts between secondary sources are resolved by consulting a primary or authoritative source. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Choose the more recent secondary source.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Average the two dates.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Prefer the source with the longer citation.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Primary Source questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 100,
    "conceptId": "project-config",
    "question": "A Project’s custom instructions tell Claude to “be casual and offer goodwill credits freely.” Recent drafts violate the\nbrand voice guide and the credit policy. What is the best configuration fix?",
    "options": {
      "A": "Add a sentence telling Claude to “also consult the attached policies.”",
      "B": "Replace the vague instructions with explicit brand-voice attributes, length expectations, and a rule that credits are\noffered only when the eligibility policy permits.",
      "C": "Move the policies into the knowledge base and leave the original instructions unchanged.",
      "D": "Disable custom instructions entirely."
    },
    "correctAnswer": "B",
    "explanation": "Explicit, enforceable constraints outperform vague instructions plus a hope that the model will consult documents.",
    "isMulti": false,
    "whyCorrect": "Explicit, enforceable constraints outperform vague instructions plus a hope that the model will consult documents. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Add a sentence telling Claude to “also consult the attached policies.”' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Move the policies into the knowledge base and leave the original instructions...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Disable custom instructions entirely.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 101,
    "conceptId": "degraded-conversations",
    "question": "Which recovery action is least appropriate as a first response when conversation quality degrades?",
    "options": {
      "A": "Summarize state and continue with a focused follow-up.",
      "B": "Immediately replace Claude with a competitor’s model.",
      "C": "Restate the current goal clearly.",
      "D": "Trim irrelevant history before the next turn."
    },
    "correctAnswer": "B",
    "explanation": "Switching vendors is a heavy, last-resort step; lighter recovery actions should be tried first.",
    "isMulti": false,
    "whyCorrect": "Switching vendors is a heavy, last-resort step; lighter recovery actions should be tried first. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Summarize state and continue with a focused follow-up.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Restate the current goal clearly.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Trim irrelevant history before the next turn.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Degraded Conversations questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 102,
    "conceptId": "workflow-decomposition",
    "question": "A request is for a single, well-defined deliverable with familiar inputs and format. Does it need decomposition?",
    "options": {
      "A": "Yes, every request should be decomposed.",
      "B": "No; a single coherent deliverable can usually be handled in one well-structured prompt.",
      "C": "Yes, because decomposition always improves quality.",
      "D": "Only if the user is new to Claude."
    },
    "correctAnswer": "B",
    "explanation": "Decomposition is indicated by multiple distinct outputs or conflicting success criteria, not by default.",
    "isMulti": false,
    "whyCorrect": "Decomposition is indicated by multiple distinct outputs or conflicting success criteria, not by default. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Only if the user is new to Claude.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 103,
    "conceptId": "context-windows",
    "question": "Which statement about Memory imports is most accurate?",
    "options": {
      "A": "Imports are guaranteed to transfer every detail perfectly.",
      "B": "Imports are experimental; some content may not be incorporated and can be added manually as a fallback.",
      "C": "Imports overwrite all existing memories and cannot be partial.",
      "D": "Imported memories are stored in a completely inaccessible separate store."
    },
    "correctAnswer": "B",
    "explanation": "Anthropic documents Memory imports as experimental with possible incomplete incorporation; manual addition is the\ndocumented recovery path.\n Get Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Anthropic documents Memory imports as experimental with possible incomplete incorporation; manual addition is the documented recovery path.  Get Latest & Actual  Exam Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Imports are guaranteed to transfer every detail perfectly.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Imports overwrite all existing memories and cannot be partial.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Imported memories are stored in a completely inaccessible separate store.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Context Windows questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 104,
    "conceptId": "human-oversight",
    "question": "A team wants Claude to generate a structured status update from meeting notes. Is this a suitable use case?",
    "options": {
      "A": "No, because status updates are too important for AI.",
      "B": "Yes; drafting structured updates from notes is a classic high-value, human-supervised task.",
      "C": "Only if the update will never be read by executives.",
      "D": "Only if Code Execution is used."
    },
    "correctAnswer": "B",
    "explanation": "Synthesis and drafting under human review is precisely the kind of work Claude is well suited to support.",
    "isMulti": false,
    "whyCorrect": "Synthesis and drafting under human review is precisely the kind of work Claude is well suited to support. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'No' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Only if the update will never be read by executives.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Only if Code Execution is used.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 105,
    "conceptId": "prompt-clarity",
    "question": "When a Claude output skips one of three explicitly required questions, which prompt element most needs\nstrengthening?",
    "options": {
      "A": "The persona/role assignment.",
      "B": "The task statement so that it enumerates all three questions and requires an answer to each.",
      "C": "The temperature setting.",
      "D": "The length of the system prompt."
    },
    "correctAnswer": "B",
    "explanation": "Missing required elements are most directly fixed by making those elements explicit and non-optional in the task statement.",
    "isMulti": false,
    "title": "Missing Question in Output (Repeated Concept)",
    "hinglishQ": "Jab Claude 3 required questions mein se 1 skip kar de, toh sabse pehle kya fix karein?",
    "whyCorrect": "Missing required elements are most directly fixed by making those elements explicit and non-optional in the task statement. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Persona change karne se missing question solve nahi hota.",
      "C": "Temperature badlane ya ghatane se task completeness guarantee nahi hoti.",
      "D": "System prompt lamba karne se specific task ki kami puri nahi hoti."
    },
    "examTip": "Exam Tip: Prompt Clarity questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 106,
    "conceptId": "project-config",
    "question": "Which practice best supports long-term Project effectiveness?",
    "options": {
      "A": "Never touch the configuration once it works.",
      "B": "Periodically review and update instructions, knowledge, and standards because the real world changes.",
      "C": "Update only when a senior leader complains.",
      "D": "Create a new Project every month and abandon the old one."
    },
    "correctAnswer": "B",
    "explanation": "Projects drift as policies, terminology, and source material evolve; periodic review keeps them current.",
    "isMulti": false,
    "whyCorrect": "Projects drift as policies, terminology, and source material evolve; periodic review keeps them current. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Never touch the configuration once it works.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Update only when a senior leader complains.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Create a new Project every month and abandon the old one.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 107,
    "conceptId": "human-oversight",
    "question": "A demographic generalization about purchasing behavior appears in an internal marketing brief. What is the most\nappropriate response?",
    "options": {
      "A": "Keep it because the brief is internal only.",
      "B": "Add a disclaimer and leave the generalization unchanged.",
      "C": "Revise the text to focus on observed behaviors and validate against actual data.",
      "D": "Delete the entire segment description."
    },
    "correctAnswer": "C",
    "explanation": "Replacing unsupported demographic generalizations with data-backed behavioral observations improves both accuracy and\nfairness.",
    "isMulti": false,
    "whyCorrect": "Replacing unsupported demographic generalizations with data-backed behavioral observations improves both accuracy and fairness. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Keep it because the brief is internal only.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Add a disclaimer and leave the generalization unchanged.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Delete the entire segment description.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Human Oversight questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 108,
    "conceptId": "workflow-decomposition",
    "question": "Over-decomposition of a board-memo request into fifteen tiny steps produced a disjointed result. What is the best\nremedy?",
    "options": {
      "A": "Add more steps for even finer control.",
      "B": "Consolidate related steps into fewer cohesive sections that group naturally connected ideas.",
      "C": "Keep all fifteen steps but number them differently.",
      "D": "Switch to a lighter model."
    },
    "correctAnswer": "B",
    "explanation": "Re-grouping by conceptual cohesion restores narrative flow while still keeping the task manageable.\nGet Latest & Actual \nExam",
    "isMulti": false,
    "whyCorrect": "Re-grouping by conceptual cohesion restores narrative flow while still keeping the task manageable. Get Latest & Actual  Exam Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Add more steps for even finer control.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Keep all fifteen steps but number them differently.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Switch to a lighter model.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Workflow Decomposition questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 109,
    "conceptId": "data-privacy",
    "question": "An organization’s policy explicitly prohibits entering ongoing investigation information into AI tools. What is the\ncompliant action?",
    "options": {
      "A": "Enter a paraphrased version that removes names.",
      "B": "Use Incognito chat because it does not retain data.",
      "C": "Escalate for an approved alternative and do not enter the investigation information.",
      "D": "Wait until the investigation closes and then enter the full history."
    },
    "correctAnswer": "C",
    "explanation": "An explicit prohibition leaves no room for work-arounds; escalation and non-entry is the only compliant path.",
    "isMulti": false,
    "whyCorrect": "An explicit prohibition leaves no room for work-arounds; escalation and non-entry is the only compliant path. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Enter a paraphrased version that removes names.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Use Incognito chat because it does not retain data.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Wait until the investigation closes and then enter the full history.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Data Privacy questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  },
  {
    "num": 110,
    "conceptId": "project-config",
    "question": "Which two signals most strongly indicate that a Project configuration needs updating? (Select two.)",
    "options": {
      "A": "Outputs increasingly reference retired terminology or outdated source guidance.",
      "B": "Chat volume has declined for two weeks.",
      "C": "Users have begun using ad-hoc chats for tasks that fall inside the Project’s intended scope.",
      "D": "Average output length has increased by 10 percent.",
      "E": "One user prefers a different greeting style."
    },
    "correctAnswer": "A & C",
    "explanation": "Outdated references and circumvention via ad-hoc chats are direct signals of configuration drift; volume or length changes are\nweaker indicators.\nGet Latest & Actual \nExam",
    "isMulti": true,
    "whyCorrect": "Outdated references and circumvention via ad-hoc chats are direct signals of configuration drift; volume or length changes are weaker indicators. Get Latest & Actual  Exam Isiliye correct answer A & C hai.",
    "wrongOptions": {
      "B": "'Chat volume has declined for two weeks.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Average output length has increased by 10 percent.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'One user prefers a different greeting style.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Project Config questions mein primary source verification, prompt constraints, aur human accountability hamesha winning choices hoti hain."
  }
];
