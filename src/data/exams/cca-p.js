// Anthropic Claude Certified Architect — Professional (CCA-P)
// Primary Source: cca-p-premium.pdf (110 Questions)

export const CONCEPTS_DATA = [
  {
    "id": "governance-fluency",
    "title": "1. AI Fluency, Governance & Stakeholder Alignment",
    "subtitle": "AI Fluency Description Competency, Human Oversight aur ADR Documentation",
    "meaning": "Enterprise Claude architecture mein AI capabilities ko bina oversell ya undersell kiye transparently communicate karna, human oversight retain karna, aur architectural decisions ko ADR (Architecture Decision Record) mein context ke sath record karna.",
    "beginnerExplanation": "Jab aap management ya clients ko Claude solution pitch karte ho, toh na toh bolna hai ki 'Claude sab kuch akele kar dega' (overselling) aur na hi darna hai. Sahi tareeqa yeh hai ki reliability, limitations aur human review process ko clear shabdon mein batao. Decisions ko document karo taaki audit ke time pata chale decision kyun liya gaya.",
    "dailyAnalogy": "Ek nayi high-speed car khareedte waqt dashboard pe cruise control ki speed limit aur safety brakes dono ki warning di jaati hai — driver ko bataya jata hai ki steer abhi bhi driver ke hath mein hai.",
    "masterFormula": "AI FLUENCY = Calibrated Capabilities + Known Limitations + Explicit Human-in-the-Loop Oversight. (Never oversell, never hide limitations).",
    "revisionTable": [
      {
        "concept": "AI Fluency Description Competency",
        "problem": "Overselling or hiding human oversight",
        "solution": "Describe what Claude reliably produces, known limitations, and residual human oversight (Q1)"
      },
      {
        "concept": "Productive Feedback Handling",
        "problem": "Blindly applying contradictory feedback or ignoring it",
        "solution": "Map feedback directly to specific draft changes and ask clarifying questions (Q3)"
      },
      {
        "concept": "Structured Discovery Gate",
        "problem": "Selecting model or deferring constraints without stakeholders",
        "solution": "Facilitate stakeholder workshops early to surface latency, accuracy, and compliance constraints (Q8)"
      },
      {
        "concept": "ADR Completeness",
        "problem": "Recording only the final decision without context",
        "solution": "Include context, considered alternatives, trade-offs, and consequences alongside decision (Q107)"
      }
    ],
    "practicalExample": {
      "bad": "Promising stakeholders that Claude will autonomously handle legal notices without human review.",
      "badReason": "Creates extreme legal risk and violates the core human oversight principle.",
      "good": "Framing Claude as an expert drafter whose outputs are verified by human legal reviewers before dispatch.",
      "goodReason": "Maintains transparency, calibrated expectations, and full compliance."
    },
    "examRule": "In stakeholder communication and discovery, always pair capabilities with limitations and human oversight! Document constraints BEFORE model selection!",
    "earlier": [
      1,
      3,
      8
    ],
    "repeated": [
      23,
      24,
      26,
      30,
      31
    ],
    "other": [
      39,
      40,
      42,
      51,
      54,
      58,
      59,
      65,
      66,
      76,
      79,
      86,
      88,
      107
    ]
  },
  {
    "id": "prompt-boundaries-degradation",
    "title": "2. System Prompt Engineering & Degradation Recovery",
    "subtitle": "Project Instructions, Scope Boundaries, Contradiction Resolution aur Conversation Recovery",
    "meaning": "System-level instructions mein clear scope boundaries define karna, contradictory directives ko prompt se remove karna, aur jab conversation lambi hokar degrade ho jaye toh least-disruptive recovery (state summary + focused prompt) use karna.",
    "beginnerExplanation": "Agar model ko bolenge 'kabhi guess mat karo' aur doosri line mein bolenge 'gaps ko confidently fill karo', toh model confuse hokar ulte seedhe jawab dega. System prompt mein contradiction allow mat karo. Aur agar lambi chat mein Claude context bhoolne lage, toh poori chat delete karne ki bajaye current status ko summarize karke focused prompt do.",
    "dailyAnalogy": "Agar class ke bachhe lambe lecture ke baad bhatakne lagein, toh teacher pehle 2 minute mein recap (summary) deta hai aur seedha main point pe wapas lata hai.",
    "masterFormula": "PROMPT HEALTH = Clear Boundaries First + Zero Contradictions + Fast Re-anchoring via Summary on Degradation.",
    "revisionTable": [
      {
        "concept": "Project System Instructions First Step",
        "problem": "Drafting or validating without defined scope",
        "solution": "Define the purpose of the Project and the boundaries instructions must respect (Q2)"
      },
      {
        "concept": "Degraded Conversation Recovery",
        "problem": "Escalating immediately or restarting completely",
        "solution": "Summarize the current state and continue with a focused follow-up prompt (Q4)"
      },
      {
        "concept": "Contradictory Prompt Directives",
        "problem": "Letting model decide or adding a third vague instruction",
        "solution": "Resolve contradictions directly in the system prompt text before deployment (Q9)"
      },
      {
        "concept": "Uncertain Knowledge Handling",
        "problem": "Forcing Claude to always invent answers instead of admitting gaps",
        "solution": "Allow graceful refusal ('I don't know') grounded in verified documents (Q102)"
      }
    ],
    "practicalExample": {
      "bad": "Writing 15 conflicting rules and letting the model guess which one to prioritize at runtime.",
      "badReason": "Produces erratic, nondeterministic behavior in production.",
      "good": "Resolving all conflicting instructions upstream and providing clear precedence hierarchy.",
      "goodReason": "Predictable, robust, and audit-ready outputs."
    },
    "examRule": "When conversation degrades, summarize current state first! When prompt has contradictions, fix the prompt text before deploying!",
    "earlier": [
      2,
      4,
      9
    ],
    "repeated": [
      45,
      73,
      83,
      95,
      101
    ],
    "other": [
      102
    ]
  },
  {
    "id": "guardrails-security-compliance",
    "title": "3. Guardrails, Security & Regulatory Compliance",
    "subtitle": "Defense-in-Depth, Structured Schema Validation, HIPAA, PII Redaction aur Audit Trails",
    "meaning": "Enterprise AI applications mein security sirf ek single prompt par depend nahi karti. Defense-in-depth approach mein prompt-level guardrails, runtime output schema validation, deterministic PII redaction, aur immutable audit logging ka multi-layered system hota hai.",
    "beginnerExplanation": "Agar aap banking ya healthcare bot bana rahe hain, toh sirf Claude ko prompt mein 'credit card number mat dikhana' bolna kaafi nahi hai. Output aane ke baad code level (regex/parser) par bhi check lagana hoga taaki koi sensitive data bahar na jaye. High-stakes faislon (jaise loan approval ya insurance claims) ka audit trail hona zaroori hai.",
    "dailyAnalogy": "Bank ki security mein sirf security guard nahi hota — CCTV camera, metal detector, biometric lock aur audit log sab milkar defense banate hain.",
    "masterFormula": "ENTERPRISE GUARDRAIL = Prompt Guardrails + Runtime Content Checks + Schema Validation + Immutable Audit Trail.",
    "revisionTable": [
      {
        "concept": "Guardrail Tactics",
        "problem": "Relying on a single system prompt or override phrases",
        "solution": "Validate output against structured schema and layer prompt guardrails with runtime checks (Q6)"
      },
      {
        "concept": "Regulated Claims Audit Trail",
        "problem": "Logging only final verdict without inputs or rationale",
        "solution": "Capture inputs, retrieved context, model outputs, human actions, and operator ID (Q74)"
      },
      {
        "concept": "Credit Card & PII Protection",
        "problem": "Trusting model to self-censor 100% of the time",
        "solution": "Apply deterministic post-processing redaction filters before delivery (Q85)"
      },
      {
        "concept": "HIPAA & Confidential HR Data",
        "problem": "Unencrypted logs or caching raw patient records",
        "solution": "Zero-data-retention, encrypted in-transit/at-rest, and strict access controls (Q62, Q108)"
      }
    ],
    "practicalExample": {
      "bad": "Allowing customer support bot to issue $10,000 refunds purely on model decision without human verification.",
      "badReason": "Exposes business to fraud, hallucinated concessions, and regulatory sanctions.",
      "good": "Model pre-screens claim, validates schema, and routes refunds above $100 to human adjuster with full audit context.",
      "goodReason": "Secure, compliant, and cost-effective automation."
    },
    "examRule": "Never rely solely on prompt-level instructions for security! Always use defense-in-depth with runtime schema validation and deterministic redaction!",
    "earlier": [
      6,
      12,
      15
    ],
    "repeated": [
      16,
      19,
      22,
      41,
      55
    ],
    "other": [
      56,
      62,
      63,
      67,
      74,
      85,
      89,
      106,
      108
    ]
  },
  {
    "id": "rag-retrieval-multitenancy",
    "title": "4. Retrieval Architecture (RAG) & Multi-Tenancy",
    "subtitle": "Dense Vector vs Sparse vs Hybrid Retrieval, Relational Queries aur Tenant Data Isolation",
    "meaning": "Enterprise knowledge retrieval mein query ke nature ke mutabiq sahi retrieval technique chunna: unstructured semantic queries ke liye Dense Vector, exact IDs/SKUs ke liye Sparse Keyword/BM25, filter/aggregate ke liye Structured Relational Queries, aur multi-tenant security ke liye strict tenant-ID filtering.",
    "beginnerExplanation": "Agar user product ka exact serial number ya SKU dhoondh raha hai, toh embedding vector search fail ho sakti hai kyunki numbers ka koi semantic meaning nahi hota — wahan BM25/keyword search chahiye. Aur agar client A ka data client B ko nahi dikhana hai, toh database query level par 'WHERE tenant_id = X' lagana mandatory hai.",
    "dailyAnalogy": "Library mein subject ke hisab se kitabein dhoondhna semantic search hai, lekin ISBN barcode scan karna exact keyword search hai.",
    "masterFormula": "RAG SELECTION: Dense = Paraphrase & Meaning | Sparse = Exact Identifiers & SKUs | Structured = Filters & Math | Multi-Tenant = Enforced Metadata Filter.",
    "revisionTable": [
      {
        "concept": "Dense vs Sparse vs Relational",
        "problem": "Using dense vectors for exact part numbers or SQL aggregation",
        "solution": "Dense for semantic paraphrase, Sparse for exact tokens, Structured for SQL aggregations (Q7)"
      },
      {
        "concept": "Multi-Tenant Data Isolation",
        "problem": "Relying on system prompt to keep tenants separate",
        "solution": "Enforce hard metadata tenant-ID filter in the vector/document store before retrieval (Q69)"
      },
      {
        "concept": "Topically Related But Factually Irrelevant Chunks",
        "problem": "Vector search returning similar broad topics without specific answers",
        "solution": "Increase chunk overlap, re-rank results, or combine with keyword BM25 retrieval (Q80)"
      },
      {
        "concept": "Hybrid Retrieval Myth",
        "problem": "Claiming hybrid is identical to dense or always superior without tuning",
        "solution": "Hybrid combines dense semantic recall with sparse precision; requires calibrated weighting (Q94)"
      }
    ],
    "practicalExample": {
      "bad": "Using dense embedding vectors to look up 'Part# ZX-9021-ALPHA' in a warehouse catalog.",
      "badReason": "Dense embeddings group strings by semantic concept, often confusing arbitrary part serial codes.",
      "good": "Using hybrid search with sparse BM25 prioritization for alphanumeric codes and dense embeddings for part descriptions.",
      "goodReason": "100% precision on part numbers with high recall on descriptive queries."
    },
    "examRule": "Dense handles semantic paraphrase, Sparse handles exact IDs and numbers! Multi-tenant isolation MUST be enforced in retrieval filters, not in model prompts!",
    "earlier": [
      7,
      10,
      27
    ],
    "repeated": [
      28,
      34,
      36,
      37,
      48
    ],
    "other": [
      69,
      80,
      87,
      93,
      94,
      97
    ]
  },
  {
    "id": "evaluation-metrics-qa",
    "title": "5. Evaluation Pipelines, Metrics & Quality Gates",
    "subtitle": "Evaluation Sets, Edge Cases, Task-Specific Metrics vs User CSAT aur Production Gating",
    "meaning": "Claude deployments ko evaluate karne ke liye sirf user satisfaction survey ya happy-path test cases par depend nahi kiya ja sakta. Quantitative evaluation metrics, gold standard test datasets, edge case distributions, aur pre-deployment gating thresholds zaroori hain.",
    "beginnerExplanation": "Agar aapne sirf 20 aasaan sawaalon par Claude ko test kiya aur bola '95% score aaya', toh real world mein mushkil cases aate hi model fail ho jayega. Evaluation set mein real-world edge cases, noisy inputs, aur multi-language test data hona chahiye. Sirf 'users are happy' score lene se hallucinations detect nahi hote.",
    "dailyAnalogy": "Car ki safety testing sirf smooth highway par nahi hoti — crash test, slippery ice, aur heavy rain conditions mein test karke hi certificate milta hai.",
    "masterFormula": "EVALUATION = Gold Standard Benchmark + Representative Edge Cases + Quantitative Task Metrics + Pre-Deployment Thresholds.",
    "revisionTable": [
      {
        "concept": "Requirements Analysis Ordering",
        "problem": "Submitting raw unlabelled documents directly to model",
        "solution": "Gather & label sources (4) -> Submit structured prompt (3) -> Group & flag conflicts (1) -> Validate (2) -> Document (5) (Q5)"
      },
      {
        "concept": "Happy-Path Only Evaluation Sets",
        "problem": "Testing only valid, easy requests",
        "solution": "Expand evaluation set with edge cases, invalid inputs, ambiguities, and adversarial queries (Q100)"
      },
      {
        "concept": "User Satisfaction (CSAT) vs Evaluation",
        "problem": "Evaluating model solely by user feedback thumbs up/down",
        "solution": "Pair user feedback with objective task-specific metrics, ground-truth accuracy, and hallucination audits (Q78)"
      },
      {
        "concept": "Multilingual Evaluation Parity",
        "problem": "Evaluating in English and assuming other languages match",
        "solution": "Build separate, culturally-validated evaluation sets for each supported target language (Q84)"
      }
    ],
    "practicalExample": {
      "bad": "Deploying a contract analysis assistant after testing on 10 standard NDA templates.",
      "badReason": "Will fail catastrophically on non-standard indemnity clauses, amendments, and foreign jurisdictions.",
      "good": "Testing against 500 diverse agreements spanning ambiguous terms, missing exhibits, and contradictory clauses with automated scoring.",
      "goodReason": "Ensures true production resilience and quantifiable accuracy thresholds."
    },
    "examRule": "Evaluation sets MUST include edge cases and adversarial queries! Never rely on user satisfaction ratings alone to gate production deployments!",
    "earlier": [
      5,
      14,
      38
    ],
    "repeated": [
      49,
      50,
      52,
      68,
      70
    ],
    "other": [
      71,
      78,
      84,
      91,
      96,
      100,
      103,
      110
    ]
  },
  {
    "id": "latency-cost-slos",
    "title": "6. Latency, Token Economics & Production Reliability (SLOs)",
    "subtitle": "Token Lifecycle, Prompt Caching, Batch Processing, P95 Optimization aur 99.9% SLO Architecture",
    "meaning": "Production systems mein cost aur latency trade-offs ko systematically manage karna: high-volume background jobs ke liye Message Batches API use karna (50% cost savings), repeated context ke liye Prompt Caching implement karna, real-time voice latency limits (300ms) samajhna, aur high availability ke liye graceful fallbacks banana.",
    "beginnerExplanation": "Agar aapko roz 5,000 customer tickets summarize karne hain aur turant jawab nahi chahiye, toh real-time API call karne se double bill aayega. Uske liye Batch API use karo jo sasta padta hai. Aur agar system prompt bahut bada hai, toh use Cache karo taaki baar-baar uske tokens ka poora paisa na lage.",
    "dailyAnalogy": "Ek ek chithi courier se bhejne ki jagah roz raat ko poora truck load ek sath dispatch karna (Batch processing) sasta aur efficient hota hai.",
    "masterFormula": "COST & SPEED = Prompt Caching for Repetition + Batch API for Offline Workloads + Streaming for TTFT + Multi-Region Fallback for 99.9% SLO.",
    "revisionTable": [
      {
        "concept": "Daily Batch Summarization",
        "problem": "Calling synchronous real-time API for non-urgent daily ticket batches",
        "solution": "Use Anthropic Message Batches API for 50% discount and higher throughput limits (Q75)"
      },
      {
        "concept": "Interactive Per-Turn Latency Bottleneck",
        "problem": "Running heavy multi-agent workflows or complex few-shots during live turn",
        "solution": "Use prompt caching, smaller/faster model tiers (Haiku), and stream partial tokens (Q17, Q53)"
      },
      {
        "concept": "Truncated JSON Responses",
        "problem": "Parsing broken JSON and failing the entire workflow",
        "solution": "Increase max_tokens, simplify output schema, or stream and parse incrementally (Q72)"
      },
      {
        "concept": "High Availability (99.9% SLO)",
        "problem": "Single endpoint dependency without retry or cross-region failover",
        "solution": "Implement automated retries with exponential backoff and multi-region / multi-endpoint fallback (Q104)"
      }
    ],
    "practicalExample": {
      "bad": "Invoking Opus synchronously for 100,000 nightly back-office log parsing jobs.",
      "badReason": "Burns massive budget and hits concurrent rate limits unnecessarily.",
      "good": "Submitting overnight log jobs to Batch API using Haiku with Prompt Caching.",
      "goodReason": "Slashes costs by over 70% while easily meeting overnight SLA."
    },
    "examRule": "For non-urgent asynchronous workloads, always choose the Batch API! For 99.9% SLOs, implement cross-region retries and failover!",
    "earlier": [
      13,
      17,
      20
    ],
    "repeated": [
      25,
      29,
      35,
      46,
      47
    ],
    "other": [
      53,
      72,
      75,
      90,
      92,
      104,
      105
    ]
  },
  {
    "id": "enterprise-tooling-mcp",
    "title": "7. Enterprise Tooling, Multi-Agent Observability & Claude Code",
    "subtitle": "Claude Code Permissions, MCP vs Direct APIs, Distributed Tracing aur Tool Governance",
    "meaning": "Enterprise developer deployments mein Claude Code ko least-privilege permission posture ke sath configure karna, Model Context Protocol (MCP) ko modular integrations ke liye use karna, multi-agent observability mein distributed traces capture karna, aur unused/high-risk tools par strict access governance lagana.",
    "beginnerExplanation": "Jab developers Claude Code use karte hain, toh unhe terminal par har command run karne ki खुली azadi nahi deni chahiye. Safe commands (read, test) allow karo, sensitive commands (rm -rf, git push main) explicitly deny karo. Multi-agent systems mein agar koi tool fail ho, toh logs mein transaction ID honi chahiye taaki pata chale kis agent ne kab call kiya.",
    "dailyAnalogy": "Company ke debit card mein limit set hoti hai aur ATM pin hota hai — kisi ko bhi unlimited blank cheque nahi diya jata.",
    "masterFormula": "ENTERPRISE TOOLING = Least-Privilege Permissions (Narrow Allows + Explicit Denies) + Standardized MCP + Distributed Trace Context.",
    "revisionTable": [
      {
        "concept": "Claude Code Enterprise Permissions",
        "problem": "Granting unrestricted bash access or asking prompt on every command",
        "solution": "Use narrow allow patterns for approved commands plus explicit denies for destructive ones (Q57, Q77)"
      },
      {
        "concept": "MCP vs Direct API Selection",
        "problem": "Building custom ad-hoc API integrations for standardized tools",
        "solution": "Use MCP for reusable, ecosystem-compatible tool interoperability; direct API for tightly coupled proprietary pipelines (Q61)"
      },
      {
        "concept": "Multi-Agent Observability",
        "problem": "Logging agent outputs in isolated log files without correlation",
        "solution": "Propagate distributed trace IDs across coordinator and subagents with latency & token metrics (Q64)"
      },
      {
        "concept": "Tool Governance & High-Risk Actions",
        "problem": "Leaving rarely-used or destructive database write tools permanently enabled",
        "solution": "Require explicit human authorization gates for destructive actions and prune unused tools (Q98, Q99, Q109)"
      }
    ],
    "practicalExample": {
      "bad": "Giving Claude Code automatic sudo permissions to execute arbitrary shell scripts across enterprise repos.",
      "badReason": "Massive security vulnerability with zero safety boundary.",
      "good": "Restricting Claude Code permissions to git read, unit test runners, and scoped file edits with human confirmation for external network calls.",
      "goodReason": "Empowers developer productivity while ensuring absolute enterprise security."
    },
    "examRule": "Enterprise Claude Code requires narrow allow patterns + explicit denies! Destructive tool calls must have explicit human authorization!",
    "earlier": [
      11,
      18,
      21
    ],
    "repeated": [
      32,
      33,
      43,
      44,
      57
    ],
    "other": [
      60,
      61,
      64,
      77,
      81,
      82,
      98,
      99,
      109
    ]
  }
];

export const QUESTIONS_DATA = [
  {
    "num": 1,
    "title": "Professional Decision: Preparing a stakeholder communication about a...",
    "conceptId": "governance-fluency",
    "question": "Preparing a stakeholder communication about a proposed Claude use case, a senior manager is applying the AI Fluency Framework Description competency. Which framing best reflects Description principles for stakeholder communication?",
    "options": {
      "A": "Emphasize the most successful examples of what Claude has produced for similar use cases, and let the audience's enthusiasm carry the case for approval.",
      "B": "Describe what Claude can reliably produce for the use case in detail, and address the human oversight only if a stakeholder raises the question directly.",
      "C": "Describe what Claude can reliably produce for the use case, the known limitations, and the human oversight that will remain in place, calibrated to the audience's familiarity with AI.",
      "D": "Describe only the most conservative, worst-case capabilities of the use case, reserving the stronger results as a pleasant surprise once the pilot is underway."
    },
    "correctAnswer": "C",
    "explanation": "Description competency requires transparent, calibrated communication of capabilities, limitations, and residual human oversight. Option C balances honesty with audience readiness and avoids both overselling and underselling.",
    "whyCorrect": "Description competency requires transparent, calibrated communication of capabilities, limitations, and residual human oversight. Option C balances honesty with audience readiness and avoids both overselling and underselling. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "Sirf best highlights dikhana aur limitations ko chhipana (overselling) AI Fluency Description competency ke khilaf hai.",
      "B": "Human oversight aur known limitations ko proactively disclose karna chahiye, stakeholder ke poochne ka intezar nahi karna chahiye.",
      "D": "Capabilities ko artificially undersell karna stakeholder expectations ko miscalibrate karta hai aur product adoption rokta hai."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 2,
    "title": "Professional Decision: You are writing system-level instructions for...",
    "conceptId": "prompt-boundaries-degradation",
    "question": "You are writing system-level instructions for a Project that supports recurring writing tasks. Which step should be performed first when writing the system-level instructions?",
    "options": {
      "A": "Validate the drafted instructions against representative requests for the Project.",
      "B": "Define the purpose of the Project and the boundaries the instructions must respect.",
      "C": "Refine the drafted instructions based on observed gaps from validation runs.",
      "D": "Draft the system-level instructions using a template from a similar existing Project."
    },
    "correctAnswer": "B",
    "explanation": "Purpose and boundaries must be established before any drafting or validation. Without clear scope, later validation cannot meaningfully measure success or detect drift.",
    "whyCorrect": "Purpose and boundaries must be established before any drafting or validation. Without clear scope, later validation cannot meaningfully measure success or detect drift. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Validate the drafted instructions against representative requests for the Pro...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Refine the drafted instructions based on observed gaps from validation runs.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "Bina project ke exact scope aur boundaries freeze kiye doosre project ka template uthana scope drift aur misaligned instructions introduce karta hai."
    },
    "examTip": "Exam Tip: Prompt Boundaries Degradation questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 3,
    "title": "Professional Decision: You are reviewing colleagues' responses to fe...",
    "conceptId": "governance-fluency",
    "question": "You are reviewing colleagues' responses to feedback received on Claude-drafted communications. Which two feedback responses are productive? (Select two.)",
    "options": {
      "A": "deferring all feedback to a later revision cycle to avoid disrupting the current draft's consistency",
      "B": "incorporating all feedback received, including contradictory suggestions, into the next draft simultaneously",
      "C": "mapping each piece of feedback to the specific change made in the next draft",
      "D": "asking clarifying questions when feedback is ambiguous before acting on it",
      "E": "declining to revise Claude-generated sections on the basis that the model's output should be trusted as written"
    },
    "correctAnswer": "C and D",
    "explanation": "Productive feedback handling requires traceability (map feedback to change) and clarification of ambiguity. Blind incorporation of contradictions or refusing to revise defeats the human-in-the-loop value.",
    "whyCorrect": "Productive feedback handling requires traceability (map feedback to change) and clarification of ambiguity. Blind incorporation of contradictions or refusing to revise defeats the human-in-the-loop value. Isiliye correct answer C and D hai.",
    "wrongOptions": {
      "A": "Feedback ko defer karne se current draft ki flaws theek nahi hoti aur agle revision cycle par load badh jata hai.",
      "B": "Contradictory instructions ko bina resolve kiye merge karne se prompt mein conflict paida hota hai aur model erratic output deta hai.",
      "E": "Claude ke output ko blindly accept karna human accountability aur review governance ke rule ko todta hai."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 4,
    "title": "Professional Decision: You are an operations lead choosing actions w...",
    "conceptId": "prompt-boundaries-degradation",
    "question": "You are an operations lead choosing actions when a Claude conversation has degraded in quality. Which recovery action should be tried first when conversation quality degrades?",
    "options": {
      "A": "Escalate to a senior architect for a manual review of the conversation history.",
      "B": "Replace the model with a different vendor's model right away.",
      "C": "Discard the entire conversation and rebuild the work from the original prompt.",
      "D": "Summarize the current state and continue with a focused follow-up prompt."
    },
    "correctAnswer": "D",
    "explanation": "The least-disruptive first recovery is to re-anchor the model with a summary of state and a focused prompt. Escalation or full restart are higher-cost actions that should follow only if the summary approach fails.",
    "whyCorrect": "The least-disruptive first recovery is to re-anchor the model with a summary of state and a focused prompt. Escalation or full restart are higher-cost actions that should follow only if the summary approach fails. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "Turant senior architect ya management ko escalate karna high-overhead step hai; pehle context state ko summarize karke focused prompt se re-anchor karna chahiye.",
      "B": "Model vendor ko turant change karna extreme step hai; degradation context overflow ki wajah se hoti hai jise state summary cleanly solve karti hai.",
      "C": "Poori chat history ko discard karna wasteful hai; jo progress ho chuki hai use state summary se preserve karke continue karna behtar hai."
    },
    "examTip": "Exam Tip: Prompt Boundaries Degradation questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 5,
    "title": "Professional Decision: You are a senior analyst using Claude to anal...",
    "conceptId": "evaluation-metrics-qa",
    "question": "You are a senior analyst using Claude to analyze requirements from several stakeholder sources. Which is the correct order of steps? (1) Group related requirements and flag conflicts or ambiguities for stakeholder review. (2) Validate the structured output against the original sources for accuracy and completeness. (3) Submit the consolidated inputs to Claude with a structured extraction prompt. (4) Gather and label the source materials so each requirement can be traced. (5) Document the final requirements set with source traceability and status.",
    "options": {
      "A": "3, 4, 1, 2, 5",
      "B": "4, 3, 1, 2, 5",
      "C": "1, 4, 3, 2, 5",
      "D": "4, 1, 3, 2, 5"
    },
    "correctAnswer": "B",
    "explanation": "Sources must be gathered and labeled first (4), then submitted to Claude (3), then grouped and conflict-flagged (1), validated (2), and finally documented (5). Any other order loses traceability or risks incomplete extraction.",
    "whyCorrect": "Sources must be gathered and labeled first (4), then submitted to Claude (3), then grouped and conflict-flagged (1), validated (2), and finally documented (5). Any other order loses traceability or risks incomplete extraction. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Yeh execution order galat hai; source documents pehle gather aur label hone chahiye, uske baad Claude ko prompt bheja jata hai.",
      "C": "Yeh execution order galat hai; source documents pehle gather aur label hone chahiye, uske baad Claude ko prompt bheja jata hai.",
      "D": "Yeh execution order galat hai; source documents pehle gather aur label hone chahiye, uske baad Claude ko prompt bheja jata hai."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 6,
    "title": "Professional Decision: You are compiling guardrail tactics for a cus...",
    "conceptId": "guardrails-security-compliance",
    "question": "You are compiling guardrail tactics for a customer-facing assistant. Which two tactics belong on the guardrail list? (Select two.)",
    "options": {
      "A": "Embed approved override phrases that let trusted users relax guardrails on demand.",
      "B": "Validate the model output against a structured schema before downstream actions are taken.",
      "C": "Lower sampling temperature globally to reduce the chance of off-policy completions.",
      "D": "Layer prompt-level guardrails with runtime content checks rather than relying on either alone.",
      "E": "Rely on a single hardened system prompt that enumerates every disallowed behavior."
    },
    "correctAnswer": "B and D",
    "explanation": "Defense-in-depth requires both schema validation of structured outputs and layered (prompt + runtime) checks. Single-prompt reliance or unrestricted overrides create single points of failure.",
    "whyCorrect": "Defense-in-depth requires both schema validation of structured outputs and layered (prompt + runtime) checks. Single-prompt reliance or unrestricted overrides create single points of failure. Isiliye correct answer B and D hai.",
    "wrongOptions": {
      "A": "Prompt mein override phrases add karna backdoor security vulnerability ban jata hai jise prompt injection se bypass kiya ja sakta hai.",
      "C": "'Lower sampling temperature globally to reduce the chance of off-policy comple...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "Sirf ek system prompt par rely karna brittle hai; defense-in-depth ke liye runtime schema validation aur guardrails dono chahiye."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 7,
    "title": "Professional Decision: You are evaluating retrieval-strategy claims ...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "You are evaluating retrieval-strategy claims used by a peer team. For each claim, select yes if the statement is generally accurate. Otherwise, select no. Statements: 1. Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text. 2. Sparse term-matching retrieval recovers exact terms (such as identifiers and rare tokens) more reliably than dense alone. 3. Structured query retrieval is the right fit for filter-and-aggregate workloads against a relational store with schema and indexes. 4. Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics. 5. Random sampling of a data store is a sound retrieval strategy for production Q&A.;",
    "options": {
      "A": "Yes, Yes, Yes, No, No",
      "B": "Yes, No, Yes, No, Yes",
      "C": "No, Yes, Yes, Yes, No",
      "D": "Yes, Yes, No, No, No"
    },
    "correctAnswer": "A",
    "explanation": "Dense handles paraphrase; sparse handles exact tokens; structured query fits relational filter/aggregate; hybrid is not identical to dense; random sampling is never a production retrieval strategy.",
    "whyCorrect": "Dense handles paraphrase; sparse handles exact tokens; structured query fits relational filter/aggregate; hybrid is not identical to dense; random sampling is never a production retrieval strategy. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'No' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 8,
    "title": "Professional Decision: A Claude architect is leading the discovery p...",
    "conceptId": "governance-fluency",
    "question": "A Claude architect is leading the discovery phase for a new AI-powered customer service solution. Which two activities are characteristic of structured discovery and requirement gathering for a Claude-based deployment? (Select two.)",
    "options": {
      "A": "deferring constraint documentation until the integration design phase to avoid scope creep",
      "B": "documenting explicit success criteria and failure thresholds that will gate production deployment",
      "C": "facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins",
      "D": "selecting the Claude model tier based on the architect's prior project experience before stakeholder input is collected",
      "E": "generating an initial prototype and iterating based on user reaction"
    },
    "correctAnswer": "B and C",
    "explanation": "Structured discovery surfaces constraints early via workshops and defines measurable success/failure gates. Deferring constraints or pre-selecting models without stakeholder input violates good discovery practice.",
    "whyCorrect": "Structured discovery surfaces constraints early via workshops and defines measurable success/failure gates. Deferring constraints or pre-selecting models without stakeholder input violates good discovery practice. Isiliye correct answer B and C hai.",
    "wrongOptions": {
      "A": "'deferring constraint documentation until the integration design phase to avoi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'selecting the Claude model tier based on the architect's prior project experi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'generating an initial prototype and iterating based on user reaction' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 9,
    "title": "Professional Decision: You are reviewing a peer's draft system promp...",
    "conceptId": "prompt-boundaries-degradation",
    "question": "You are reviewing a peer's draft system prompt that contains contradictory instructions: one section says to never speculate beyond the supplied source and another says to confidently fill in any gaps. Which response is most appropriate?",
    "options": {
      "A": "Keep both contradictory instructions in place and rely on the model to select which one to follow on each individual request, accepting inconsistent behavior as a result.",
      "B": "Keep both contradictory instructions in place and add a third instruction telling the model to use its best judgment based on the query's context.",
      "C": "Resolve the contradiction by removing or rewording the gap-filling instruction so the prompt consistently constrains the model to source-supported content.",
      "D": "Add a priority-ordering instruction that tells the model to evaluate all available instructions and apply the most contextually appropriate one on each request."
    },
    "correctAnswer": "C",
    "explanation": "Contradictory system-prompt instructions produce unreliable behavior. The correct action is to eliminate the contradiction so the model receives a single coherent constraint set.",
    "whyCorrect": "Contradictory system-prompt instructions produce unreliable behavior. The correct action is to eliminate the contradiction so the model receives a single coherent constraint set. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "Contradictory instructions ko bina resolve kiye merge karne se prompt mein conflict paida hota hai aur model erratic output deta hai.",
      "B": "Contradictory instructions ko bina resolve kiye merge karne se prompt mein conflict paida hota hai aur model erratic output deta hai.",
      "D": "'Add a priority-ordering instruction that tells the model to evaluate all avai...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Prompt Boundaries Degradation questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 10,
    "title": "Professional Decision: You are a platform architect designing an int...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "You are a platform architect designing an internal Claude-based assistant that serves both finance analysts and external auditors. Each population must access only documents permitted by their role. Where should role-based access control be enforced in the pipeline?",
    "options": {
      "A": "at the retrieval layer, before any role-restricted content reaches the prompt construction step or the model",
      "B": "after the response is generated, by post-filtering content that should not have been retrieved",
      "C": "at the retrieval layer, but relying on a single organization-wide access token shared across all roles rather than per-role scoping",
      "D": "inside the system prompt as a natural-language instruction that names the specific role-based access groups Claude should treat as unauthorized"
    },
    "correctAnswer": "A",
    "explanation": "RBAC must be enforced at retrieval so restricted documents never enter the model context. Post-filtering, shared tokens, or prompt-only controls are insufficient and create leakage risk.",
    "whyCorrect": "RBAC must be enforced at retrieval so restricted documents never enter the model context. Post-filtering, shared tokens, or prompt-only controls are insufficient and create leakage risk. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'after the response is generated' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'at the retrieval layer' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'inside the system prompt as a natural-language instruction that names the spe...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 11,
    "title": "Professional Decision: You are selecting the documentation set that ...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are selecting the documentation set that should accompany a Claude-based deployment at handoff. Which set is most complete?",
    "options": {
      "A": "the original design proposal, its review comments, meeting notes from design sessions, and the approved requirements document",
      "B": "a project retrospective document, a lessons-learned summary, and a list of contributors",
      "C": "user-facing release notes, a marketing one-pager describing the deployment, and a customer FAQ",
      "D": "architecture overview, ADRs, component-level diagrams, runbooks for common operations, on-call playbook, and a list of known limitations"
    },
    "correctAnswer": "D",
    "explanation": "Operational handoff requires living architecture artifacts, decision records, runbooks, and known limitations. Design history and marketing material alone are insufficient for sustained ownership.",
    "whyCorrect": "Operational handoff requires living architecture artifacts, decision records, runbooks, and known limitations. Design history and marketing material alone are insufficient for sustained ownership. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'the original design proposal' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'a project retrospective document' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'user-facing release notes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 12,
    "title": "Professional Decision: You are evaluating a Claude-based deployment ...",
    "conceptId": "guardrails-security-compliance",
    "question": "You are evaluating a Claude-based deployment for adherence to a specific regulation. Which two steps must be completed BEFORE mapping deployment data flows to specific regulatory clauses? (Select two.)",
    "options": {
      "A": "Compare the in-place controls against the regulatory requirements to identify any compliance gaps.",
      "B": "Schedule the remediation work with the engineering team based on the prioritized gap findings.",
      "C": "Identify the applicability of the regulation based on data types, jurisdiction, and audience.",
      "D": "Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place.",
      "E": "Document the identified gaps along with recommended remediations and residual risk for sign-off."
    },
    "correctAnswer": "C and D",
    "explanation": "Before mapping flows to clauses you must confirm the regulation actually applies (C) and know what tooling/controls already exist (D). Gap analysis and remediation come after the mapping.",
    "whyCorrect": "Before mapping flows to clauses you must confirm the regulation actually applies (C) and know what tooling/controls already exist (D). Gap analysis and remediation come after the mapping. Isiliye correct answer C and D hai.",
    "wrongOptions": {
      "A": "'Compare the in-place controls against the regulatory requirements to identify...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Schedule the remediation work with the engineering team based on the prioriti...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Document the identified gaps along with recommended remediations and residual...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 13,
    "title": "Professional Decision: You are classifying token-management tactics ...",
    "conceptId": "latency-cost-slos",
    "question": "You are classifying token-management tactics by where in the request lifecycle each tactic applies. For each of the tactics, select where in the request lifecycle each tactic applies: \"Input Preparation\", \"Prompt Construction\", or \"Output Handling\". Tactics: 1. Persist the validated output for downstream consumption and audit. 2. Order the prompt sections so cacheable content sits before per-request content. 3. Summarize prior conversation history when full history is no longer needed. 4. Validate the model's structured output against the expected schema. 5. Move stable repeated content into a cacheable prefix at the head of the prompt. 6. Trim retrieved passages to spans relevant to the user's question.",
    "options": {
      "A": "1-Output, 2-Prompt, 3-Input, 4-Output, 5-Prompt, 6-Input",
      "B": "1-Output, 2-Prompt, 3-Prompt, 4-Output, 5-Prompt, 6-Input",
      "C": "1-Input, 2-Prompt, 3-Output, 4-Output, 5-Input, 6-Prompt",
      "D": "1-Output, 2-Input, 3-Prompt, 4-Output, 5-Prompt, 6-Input"
    },
    "correctAnswer": "B",
    "explanation": "Persistence and schema validation are output handling; ordering sections and moving stable content to a cacheable prefix are prompt construction; history summarization is also prompt construction; trimming retrieved passages is input preparation.",
    "whyCorrect": "Persistence and schema validation are output handling; ordering sections and moving stable content to a cacheable prefix are prompt construction; history summarization is also prompt construction; trimming retrieved passages is input preparation. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'1-Output' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'1-Input' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'1-Output' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 14,
    "title": "Professional Decision: You are selecting a model for a new productio...",
    "conceptId": "evaluation-metrics-qa",
    "question": "You are selecting a model for a new production workload and must complete the upstream steps before testing candidate models empirically. Which two steps must be completed BEFORE running a representative sample on a candidate model? (Select two.)",
    "options": {
      "A": "Choose a candidate model based on the requirements profile and known capabilities.",
      "B": "Sign off the production rollout plan with the platform and security teams.",
      "C": "Select the lightest model that consistently meets the quality bar across the sample.",
      "D": "Define the quality bar, latency tolerance, and expected volume for the workload.",
      "E": "Retest the model choice when a new model version becomes available."
    },
    "correctAnswer": "A and D",
    "explanation": "You must first define the success criteria (quality/latency/volume) and shortlist candidates that match the profile. Empirical sampling comes after those definitions; rollout sign-off and later retesting are downstream.",
    "whyCorrect": "You must first define the success criteria (quality/latency/volume) and shortlist candidates that match the profile. Empirical sampling comes after those definitions; rollout sign-off and later retesting are downstream. Isiliye correct answer A and D hai.",
    "wrongOptions": {
      "B": "'Sign off the production rollout plan with the platform and security teams.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Select the lightest model that consistently meets the quality bar across the ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Retest the model choice when a new model version becomes available.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 15,
    "title": "Professional Decision: A customer support team has proposed delegati...",
    "conceptId": "guardrails-security-compliance",
    "question": "A customer support team has proposed delegating customer refund decisions to a Claude-driven workflow with no human review for less expensive refunds. The team's reasoning is that small refunds are low-risk and human review would erase the efficiency gain. Which Delegation-competency principle should guide your response?",
    "options": {
      "A": "Delegation should generally include human review on decisions the workflow produces, independent of how small the transaction is.",
      "B": "A Delegation scope should include human review on every decision the workflow produces, regardless of transaction size.",
      "C": "Delegation scope should be set primarily by maximizing efficiency gains across the workflow.",
      "D": "Delegation should be avoided in most cases wherever financial transactions occur in the workflow."
    },
    "correctAnswer": "A",
    "explanation": "Delegation competency requires retained human accountability for decisions that carry financial or customer-impact risk, even when individual amounts are small. Pure efficiency-driven scope is not the governing principle.",
    "whyCorrect": "Delegation competency requires retained human accountability for decisions that carry financial or customer-impact risk, even when individual amounts are small. Pure efficiency-driven scope is not the governing principle. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'A Delegation scope should include human review on every decision the workflow...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Delegation scope should be set primarily by maximizing efficiency gains acros...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Delegation should be avoided in most cases wherever financial transactions oc...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 16,
    "title": "Professional Decision: An architect at an organization is reviewing ...",
    "conceptId": "guardrails-security-compliance",
    "question": "An architect at an organization is reviewing two draft communication packages for the same architectural decision. Package 1 contains a threat model, residual-risk register, and control-mapping table. Package 2 contains a list of capabilities delivered and feature-level roadmap dependencies. Which two audiences are correctly matched to these packages? (Select two.)",
    "options": {
      "A": "Package 2 → executive sponsor",
      "B": "Package 2 → product manager owning the roadmap",
      "C": "Package 1 → security and compliance reviewer",
      "D": "Package 2 → security and compliance reviewer",
      "E": "Package 1 → engineering implementation team"
    },
    "correctAnswer": "B and C",
    "explanation": "Threat model / residual risk / control mapping belong to security & compliance. Capability list and roadmap dependencies belong to the product manager who owns sequencing. Executive sponsors typically need outcome-level, not detailed risk registers.",
    "whyCorrect": "Threat model / residual risk / control mapping belong to security & compliance. Capability list and roadmap dependencies belong to the product manager who owns sequencing. Executive sponsors typically need outcome-level, not detailed risk registers. Isiliye correct answer B and C hai.",
    "wrongOptions": {
      "A": "'Package 2 → executive sponsor' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Package 2 → security and compliance reviewer' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Package 1 → engineering implementation team' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 17,
    "title": "Professional Decision: You are operating an interactive assistant wh...",
    "conceptId": "latency-cost-slos",
    "question": "You are operating an interactive assistant whose dominant performance constraint is per-turn latency. Quality on routine turns is already acceptable. Which configuration adjustment most directly improves latency without disproportionately damaging quality?",
    "options": {
      "A": "Cache the full corpus in memory ahead of each request.",
      "B": "Precompute and cache retrieval embeddings offline, keeping retrieval depth and model tier unchanged.",
      "C": "Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content.",
      "D": "Switch to a smaller model for every turn in place of prompt caching."
    },
    "correctAnswer": "C",
    "explanation": "Reducing retrieval depth to the historically sufficient top-k and caching the static system prompt directly cut tokens and latency while preserving quality on routine turns. Full-corpus caching or blanket model downgrade are heavier and riskier.",
    "whyCorrect": "Reducing retrieval depth to the historically sufficient top-k and caching the static system prompt directly cut tokens and latency while preserving quality on routine turns. Full-corpus caching or blanket model downgrade are heavier and riskier. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Cache the full corpus in memory ahead of each request.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Precompute and cache retrieval embeddings offline' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Switch to a smaller model for every turn in place of prompt caching.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 18,
    "title": "Professional Decision: An engineering organization is adopting Claud...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "An engineering organization is adopting Claude Code across 200 developers. A team lead has proposed that AI-generated pull requests bypass the standard code review process for changes under 50 lines, on the grounds that small changes are low-risk and review capacity is constrained. Which two Diligence-competency objections should you raise? (Select two.)",
    "options": {
      "A": "Removing review removes the verification mechanism that AI-generated output requires across the workflow.",
      "B": "Line count is a poor proxy for the actual risk a code change introduces into the system.",
      "C": "Code review capacity should be expanded to handle every code change submitted across the team.",
      "D": "AI-generated pull requests should be rejected as a default policy across the engineering organization.",
      "E": "The 50-line threshold should be raised to 200 lines instead to capture more changes overall."
    },
    "correctAnswer": "A and B",
    "explanation": "Diligence requires verification of AI output; removing review eliminates that control. Line count is an unreliable risk proxy—small diffs can still introduce critical defects.",
    "whyCorrect": "Diligence requires verification of AI output; removing review eliminates that control. Line count is an unreliable risk proxy—small diffs can still introduce critical defects. Isiliye correct answer A and B hai.",
    "wrongOptions": {
      "C": "'Code review capacity should be expanded to handle every code change submitted...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'AI-generated pull requests should be rejected as a default policy across the ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'The 50-line threshold should be raised to 200 lines instead to capture more c...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 19,
    "title": "Professional Decision: The compliance team has authored a regulatory...",
    "conceptId": "guardrails-security-compliance",
    "question": "The compliance team has authored a regulatory disclosure procedure that must be applied identically across customer service, sales, and onboarding workflows. The procedure changes when regulators issue updates, currently four to six times per year. You are designing how the procedure will be packaged for use by Claude across all three workflows. Which two design decisions should you include? (Select two.)",
    "options": {
      "A": "Reference the same Claude Skill from all three of the workflow integrations directly.",
      "B": "Package the procedure as a Claude Skill owned by the compliance team directly.",
      "C": "Store the procedure in a shared retrieval corpus accessed by all three workflows.",
      "D": "Embed the procedure text into each workflow's system prompt at integration time.",
      "E": "Have each workflow team rewrite the procedure for that team's specific context."
    },
    "correctAnswer": "A and B",
    "explanation": "A single Skill owned by compliance and referenced by every workflow guarantees identical application and central update. Embedding, per-team rewriting, or pure retrieval risk divergence when the procedure changes.",
    "whyCorrect": "A single Skill owned by compliance and referenced by every workflow guarantees identical application and central update. Embedding, per-team rewriting, or pure retrieval risk divergence when the procedure changes. Isiliye correct answer A and B hai.",
    "wrongOptions": {
      "C": "'Store the procedure in a shared retrieval corpus accessed by all three workfl...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Embed the procedure text into each workflow's system prompt at integration time.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Have each workflow team rewrite the procedure for that team's specific context.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 20,
    "title": "Professional Decision: A solutions architect is analyzing stakeholde...",
    "conceptId": "latency-cost-slos",
    "question": "A solutions architect is analyzing stakeholder feedback collected after the first quarter of a Claude-powered procurement automation deployment. The feedback includes four statements: (1) \"Our procurement team is processing 3× more purchase orders per analyst per day.\" (2) \"We have eliminated the manual data entry role entirely and redeployed those staff to vendor relationship management.\" (3) \"The API integration costs are running 40% over the projected per-transaction budget.\" (4) \"Response latency during end-of-month batch runs is averaging 11 seconds, against our committed 5-second SLA.\" Which of the following correctly identifies the primary business value pillar each stakeholder statement represents?",
    "options": {
      "A": "Statement 1: Efficiency; Statement 2: Productivity; Statement 3: Performance SLA; Statement 4: Solution Cost",
      "B": "Statement 1: Transformation; Statement 2: Productivity; Statement 3: Solution Cost; Statement 4: Efficiency",
      "C": "Statement 1: Productivity; Statement 2: Efficiency; Statement 3: Solution Cost; Statement 4: Performance SLA",
      "D": "Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4: Performance SLA"
    },
    "correctAnswer": "D",
    "explanation": "3× throughput is efficiency; role elimination + redeployment is transformation; cost overrun is solution cost; SLA breach is performance. Mapping must match the actual language of each statement.",
    "whyCorrect": "3× throughput is efficiency; role elimination + redeployment is transformation; cost overrun is solution cost; SLA breach is performance. Mapping must match the actual language of each statement. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Statement 1: Efficiency' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Statement 1: Transformation' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Statement 1: Productivity' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 21,
    "title": "Professional Decision: You are rolling out monitoring for a Claude-b...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are rolling out monitoring for a Claude-based deployment and must complete the specification steps before instrumenting the deployment. Which two steps must be completed BEFORE instrumenting the deployment to emit metrics and traces? (Select two.)",
    "options": {
      "A": "Document the dashboards, alerts, and runbooks for the on-call rotation that will respond.",
      "B": "Build the dashboards that surface metrics across slices at the cadence the team operates on.",
      "C": "Define the metrics and the slices the deployment will monitor across normal and adversarial traffic.",
      "D": "Define the service-level objectives (SLOs) and the error budgets the deployment will be held to.",
      "E": "Tune the alert thresholds based on observed normal-state distributions to reduce false positives."
    },
    "correctAnswer": "C and D",
    "explanation": "Before any instrumentation you must know what to measure (metrics + slices) and what success looks like (SLOs + error budgets). Dashboards, runbooks, and threshold tuning come after data exists.",
    "whyCorrect": "Before any instrumentation you must know what to measure (metrics + slices) and what success looks like (SLOs + error budgets). Dashboards, runbooks, and threshold tuning come after data exists. Isiliye correct answer C and D hai.",
    "wrongOptions": {
      "A": "'Document the dashboards' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Build the dashboards that surface metrics across slices at the cadence the te...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Tune the alert thresholds based on observed normal-state distributions to red...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 22,
    "title": "Professional Decision: A Claude architect is implementing safety con...",
    "conceptId": "guardrails-security-compliance",
    "question": "A Claude architect is implementing safety controls for a customer-facing advice assistant that must never provide regulated investment recommendations. Which two guardrail implementations most directly enforce this constraint? (Select two.)",
    "options": {
      "A": "Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advice requests.",
      "B": "Add an output classifier that detects and blocks responses containing regulated investment-recommendation language.",
      "C": "Increase response temperature to introduce variability that reduces the likelihood of specific recommendations.",
      "D": "Limit session length to reduce the volume of queries processed per user per day.",
      "E": "Log all model responses to a SIEM and route flagged records to a compliance reviewer."
    },
    "correctAnswer": "A and B",
    "explanation": "Prompt-level refusal categories plus an output classifier form a layered hard stop. Temperature, session limits, and post-hoc logging do not prevent the prohibited content from being generated and returned.",
    "whyCorrect": "Prompt-level refusal categories plus an output classifier form a layered hard stop. Temperature, session limits, and post-hoc logging do not prevent the prohibited content from being generated and returned. Isiliye correct answer A and B hai.",
    "wrongOptions": {
      "C": "'Increase response temperature to introduce variability that reduces the likel...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Limit session length to reduce the volume of queries processed per user per day.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Log all model responses to a SIEM and route flagged records to a compliance r...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 23,
    "title": "Professional Decision: You are defining where human review must rema...",
    "conceptId": "governance-fluency",
    "question": "You are defining where human review must remain in a planned automated pipeline. Which placement reflects sound human-in-the-loop design?",
    "options": {
      "A": "Place a human reviewer between the model's output and any high-impact, irreversible action.",
      "B": "Place a human reviewer between the model's output and every action, regardless of impact or reversibility.",
      "C": "Place a human reviewer between each incoming request and the model so inputs are checked before generation.",
      "D": "Place a human reviewer between the model's output and any action a confidence score marks as uncertain."
    },
    "correctAnswer": "A",
    "explanation": "Human review is required where the consequence of error is high and irreversible. Requiring it on every action or only on low-confidence scores either over-burdens operators or leaves high-impact paths unprotected.",
    "whyCorrect": "Human review is required where the consequence of error is high and irreversible. Requiring it on every action or only on low-confidence scores either over-burdens operators or leaves high-impact paths unprotected. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Place a human reviewer between the model's output and every action' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Place a human reviewer between each incoming request and the model so inputs ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Place a human reviewer between the model's output and any action a confidence...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 24,
    "title": "Professional Decision: You are reviewing a peer's draft ADR. The ADR...",
    "conceptId": "governance-fluency",
    "question": "You are reviewing a peer's draft ADR. The ADR states the decision and the technical detail but does not state the alternatives considered or the trade-offs accepted. Which response is most appropriate?",
    "options": {
      "A": "Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR.",
      "B": "Publish the ADR as written and open a follow-up task to add alternatives in a later revision.",
      "C": "Approve the ADR as written since the decision is documented, treating the missing alternatives and trade-offs as unnecessary detail.",
      "D": "Ask the author to link the design-discussion thread in place of a written alternatives section."
    },
    "correctAnswer": "A",
    "explanation": "A complete ADR records the decision, the alternatives examined, and the trade-offs accepted. Publishing without those sections leaves future maintainers unable to understand why the chosen path was preferred.",
    "whyCorrect": "A complete ADR records the decision, the alternatives examined, and the trade-offs accepted. Publishing without those sections leaves future maintainers unable to understand why the chosen path was preferred. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Publish the ADR as written and open a follow-up task to add alternatives in a...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Approve the ADR as written since the decision is documented' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ask the author to link the design-discussion thread in place of a written alt...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 25,
    "title": "Professional Decision: You are designing a content moderation classi...",
    "conceptId": "latency-cost-slos",
    "question": "You are designing a content moderation classifier that processes high volumes of user-generated comments under a tight per-message latency budget using well-defined classification labels. Which model selection best aligns with the workload?",
    "options": {
      "A": "Fable",
      "B": "Haiku",
      "C": "Opus",
      "D": "Sonnet"
    },
    "correctAnswer": "B",
    "explanation": "Haiku is the lowest-latency, lowest-cost Claude model tier and is appropriate for high-volume, well-defined classification tasks where deep reasoning is not required.",
    "whyCorrect": "Haiku is the lowest-latency, lowest-cost Claude model tier and is appropriate for high-volume, well-defined classification tasks where deep reasoning is not required. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Fable' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "Simple lookup ya triage workloads par Opus chalana unnecessary latency aur high token costs generate karta hai.",
      "D": "'Sonnet' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 26,
    "title": "Professional Decision: You are reviewing a customer-support agent's ...",
    "conceptId": "governance-fluency",
    "question": "You are reviewing a customer-support agent's configuration. Each candidate tool falls into one of four categories: (1) required to complete defined tasks, (2) frequently used and reduces hand-offs, (3) occasionally useful for unrelated work, (4) speculative future utility. Which categories should typically remain in the agent configuration?",
    "options": {
      "A": "All 4 categories, because broader tool access tends to help agent performance, whether or not a tool maps to a defined task.",
      "B": "Category 1 only, because least privilege means the minimal set that completes defined tasks.",
      "C": "Categories 1, 2, and 3, because retaining occasionally useful tools avoids reconfiguring the agent when new requests arrive.",
      "D": "Categories 1 and 2 only, because they map to defined tasks and the agent's regular hand-offs."
    },
    "correctAnswer": "D",
    "explanation": "Least-privilege tool configuration keeps only tools required for defined tasks and those that measurably reduce hand-offs. Occasional or speculative tools expand the attack surface without proportional value.",
    "whyCorrect": "Least-privilege tool configuration keeps only tools required for defined tasks and those that measurably reduce hand-offs. Occasional or speculative tools expand the attack surface without proportional value. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'All 4 categories' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Category 1 only' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Categories 1' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 27,
    "title": "Professional Decision: You are reviewing a peer's end-to-end design ...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "You are reviewing a peer's end-to-end design for a Claude-based platform expected to scale to thousands of concurrent users. For each statement, indicate yes if the statement reflects a sound architectural practice. Otherwise, select no. Statements: 1. Authentication and authorization run before retrieval so retrieval can filter by identity. 2. An asynchronous queue absorbs bursty traffic between intake and the model invocation layer. 3. Tax computation is encoded directly in the system prompt rather than in code. 4. Conversation logs include unredacted government identifiers to maximize signal for tuning.",
    "options": {
      "A": "Yes, Yes, No, No",
      "B": "Yes, No, Yes, No",
      "C": "No, Yes, No, Yes",
      "D": "Yes, Yes, Yes, No"
    },
    "correctAnswer": "A",
    "explanation": "AuthZ before retrieval and an async queue for burst absorption are sound. Encoding business logic in the system prompt and logging unredacted PII are anti-patterns.",
    "whyCorrect": "AuthZ before retrieval and an async queue for burst absorption are sound. Encoding business logic in the system prompt and logging unredacted PII are anti-patterns. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'No' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 28,
    "title": "Professional Decision: You are identifying the highest-impact optimi...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "You are identifying the highest-impact optimization for a deployment whose token cost is dominated by a long, repeated system prompt and a large retrieved context per request. Which optimization most directly targets the dominant cost driver?",
    "options": {
      "A": "Batch requests so that several queries share a single call and the system prompt is transmitted once for the whole group.",
      "B": "Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query.",
      "C": "Route simpler requests to a smaller model and reserve the larger model for cases that a lightweight classifier flags as complex.",
      "D": "Compress the system prompt by rewriting its instructions more concisely and removing examples that overlap with one another."
    },
    "correctAnswer": "B",
    "explanation": "When cost is dominated by a repeated long system prompt plus large retrieval, the highest-leverage moves are prompt caching of the static prefix and aggressive trimming of retrieved spans.",
    "whyCorrect": "When cost is dominated by a repeated long system prompt plus large retrieval, the highest-leverage moves are prompt caching of the static prefix and aggressive trimming of retrieved spans. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Batch requests so that several queries share a single call and the system pro...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Route simpler requests to a smaller model and reserve the larger model for ca...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Compress the system prompt by rewriting its instructions more concisely and r...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 29,
    "title": "Professional Decision: You are designing the prompt for a ticket-tri...",
    "conceptId": "latency-cost-slos",
    "question": "You are designing the prompt for a ticket-triage classifier with thirty well-defined categories and clear category descriptions in the prompt. Which technique is most appropriate as the starting point?",
    "options": {
      "A": "a zero-shot prompt that specifies the categories with their descriptions and the required output format",
      "B": "a chain-of-thought prompt for a routing decision that does not require multi-step reasoning",
      "C": "a prompt with no category descriptions, expecting the model to infer the category set",
      "D": "a prompt-chaining setup that routes each ticket through a coarse grouping step before selecting the final category"
    },
    "correctAnswer": "A",
    "explanation": "With clear, enumerated categories and descriptions already available, a well-specified zero-shot prompt is the simplest and most reliable starting point; chain-of-thought and multi-step chaining add unnecessary latency and cost.",
    "whyCorrect": "With clear, enumerated categories and descriptions already available, a well-specified zero-shot prompt is the simplest and most reliable starting point; chain-of-thought and multi-step chaining add unnecessary latency and cost. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'a chain-of-thought prompt for a routing decision that does not require multi-...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'a prompt with no category descriptions' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'a prompt-chaining setup that routes each ticket through a coarse grouping ste...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 30,
    "title": "Professional Decision: A pilot AI assistant for procurement speciali...",
    "conceptId": "governance-fluency",
    "question": "A pilot AI assistant for procurement specialists shows 89 percent first-response acceptance, but follow-up surveys reveal that specialists frequently override the assistant's vendor recommendations after consulting unrelated criteria the assistant did not consider. The pilot owner wants to ship the assistant as is, given the strong acceptance rate. Which two discernment-competency observations should you raise BEFORE approving the launch? (Select two.)",
    "options": {
      "A": "The pilot duration was likely too short to establish reliability across the full year.",
      "B": "Acceptance does not measure whether recommendations are right after specialist review.",
      "C": "The acceptance rate, combined with the pilot's sample size, is enough evidence to proceed without further review.",
      "D": "The unconsidered criteria represent a scope gap in the assistant's input space directly.",
      "E": "The survey response rate may not be statistically representative of all the specialists."
    },
    "correctAnswer": "B and D",
    "explanation": "Discernment requires distinguishing acceptance (what users did) from correctness (what should have been recommended). Frequent overrides after consulting missing criteria signal a real scope gap that acceptance rate alone cannot mask.",
    "whyCorrect": "Discernment requires distinguishing acceptance (what users did) from correctness (what should have been recommended). Frequent overrides after consulting missing criteria signal a real scope gap that acceptance rate alone cannot mask. Isiliye correct answer B and D hai.",
    "wrongOptions": {
      "A": "'The pilot duration was likely too short to establish reliability across the f...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The acceptance rate' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'The survey response rate may not be statistically representative of all the s...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 31,
    "title": "Professional Decision: A research summarization assistant has been d...",
    "conceptId": "governance-fluency",
    "question": "A research summarization assistant has been deployed for six months. A user has flagged that a generated summary contained a fabricated citation. The product team has asked whether the incident requires architectural action or whether it is an isolated case. Which two Diligence-competency actions should you take? (Select two.)",
    "options": {
      "A": "Lower the model's sampling temperature across the pipeline in response to the incident.",
      "B": "Review whether citation grounding controls exist anywhere in the current generation pipeline.",
      "C": "Disable the assistant immediately for all current users without any prior diagnostic analysis.",
      "D": "Sample recent summaries to estimate the fabrication frequency across the population.",
      "E": "Communicate to users that the assistant does not fabricate output as a matter of design."
    },
    "correctAnswer": "B and D",
    "explanation": "Diligence requires checking whether grounding controls are present and measuring how often the failure actually occurs. Immediate global disable or temperature changes without diagnosis, and claims that fabrication never happens, are premature.",
    "whyCorrect": "Diligence requires checking whether grounding controls are present and measuring how often the failure actually occurs. Immediate global disable or temperature changes without diagnosis, and claims that fabrication never happens, are premature. Isiliye correct answer B and D hai.",
    "wrongOptions": {
      "A": "'Lower the model's sampling temperature across the pipeline in response to the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Disable the assistant immediately for all current users without any prior dia...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Communicate to users that the assistant does not fabricate output as a matter...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 32,
    "title": "Professional Decision: You are selecting a protocol for a single low...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are selecting a protocol for a single low-latency stateless tool call from a Claude-based assistant to an internal pricing service that already exposes a stable HTTP API. Which integration mechanism is the most appropriate?",
    "options": {
      "A": "an agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service",
      "B": "a bespoke streaming protocol layered over an unrelated asynchronous message bus",
      "C": "a long-lived stateful session protocol maintained between the assistant and the pricing service",
      "D": "a direct API call to the existing endpoint with the appropriate scoped credentials"
    },
    "correctAnswer": "D",
    "explanation": "A stable, low-latency, stateless HTTP endpoint is best consumed by a direct, scoped API call. Adding agents, custom streaming, or long-lived sessions introduces unnecessary complexity and latency.",
    "whyCorrect": "A stable, low-latency, stateless HTTP endpoint is best consumed by a direct, scoped API call. Adding agents, custom streaming, or long-lived sessions introduces unnecessary complexity and latency. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'an agent-to-agent handoff that introduces another Claude-based agent in front...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'a bespoke streaming protocol layered over an unrelated asynchronous message bus' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'a long-lived stateful session protocol maintained between the assistant and t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 33,
    "title": "Professional Decision: You are supporting a team whose Claude Code s...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are supporting a team whose Claude Code sessions consistently load 60 or more MCP tools from many servers, exhausting context budget before the session begins. Which adjustment most directly addresses this issue without removing capability?",
    "options": {
      "A": "Split the workflow across more sessions, each connecting to a smaller subset of servers, so no single session loads every tool definition.",
      "B": "Automate the review of the server list before each session and disable servers the engineer thinks are unneeded for that day's task.",
      "C": "Raise the session's context window to a larger model tier so all tool definitions fit within the available budget.",
      "D": "Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront."
    },
    "correctAnswer": "D",
    "explanation": "Tool Search defers tool definitions until they are actually needed, preserving the full capability set while eliminating the upfront context-tax of loading every definition.",
    "whyCorrect": "Tool Search defers tool definitions until they are actually needed, preserving the full capability set while eliminating the upfront context-tax of loading every definition. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Split the workflow across more sessions' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Automate the review of the server list before each session and disable server...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Raise the session's context window to a larger model tier so all tool definit...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 34,
    "title": "Professional Decision: A document analysis service processes legal f...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "A document analysis service processes legal filings averaging 80,000 tokens each. Each filing is queried by attorneys an average of 14 times during a case. The current architecture sends the full filing on every query. The security officer requires that filing contents not be stored outside the organization's tenancy. The CFO has asked you to reduce per-query costs while preserving response quality. Which optimization approach should you recommend?",
    "options": {
      "A": "Index filings in a vector store and retrieve only the relevant passages per query.",
      "B": "Summarize each filing once at intake and run all subsequent queries against the summary.",
      "C": "Move the workload to a smaller Claude model to reduce the per-token cost paid.",
      "D": "Cache the filing as the prompt prefix for reuse across the 14 queries per case."
    },
    "correctAnswer": "A",
    "explanation": "Vector indexing + passage retrieval cuts tokens dramatically while keeping the original text inside the tenancy. Full-document caching still pays for 80k tokens on every call; summarization risks losing detail required by attorneys.",
    "whyCorrect": "Vector indexing + passage retrieval cuts tokens dramatically while keeping the original text inside the tenancy. Full-document caching still pays for 80k tokens on every call; summarization risks losing detail required by attorneys. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Summarize each filing once at intake and run all subsequent queries against t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Move the workload to a smaller Claude model to reduce the per-token cost paid.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Cache the filing as the prompt prefix for reuse across the 14 queries per case.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 35,
    "title": "Professional Decision: A managed agent deployment for claims triage ...",
    "conceptId": "latency-cost-slos",
    "question": "A managed agent deployment for claims triage has grown from 6 tools to 34 tools over 18 months as product teams added capabilities. Triage accuracy has declined from 91 percent to 78 percent, and average tool selection latency has increased by 2.3 seconds. A junior engineer has proposed adding a tool router agent in front of the current agent to filter the tool list per request. Which two findings should you present to justify capability decomposition before adding the router? (Select two.)",
    "options": {
      "A": "The router pattern is well-documented across publicly available agent literature.",
      "B": "The 34 tools serve four distinct claim workflow domains within the triage scope.",
      "C": "The proposed router introduces an additional model call on every incoming request.",
      "D": "Tool descriptions overlap across multiple claim categories within the agent's tool set.",
      "E": "Several tools have not been invoked across the most recent 90 days of traffic."
    },
    "correctAnswer": "B and D",
    "explanation": "When tools map to distinct domains and descriptions overlap, decomposition into specialized agents is the cleaner fix. A router adds latency and still leaves the underlying confusion of an oversized, overlapping tool set.",
    "whyCorrect": "When tools map to distinct domains and descriptions overlap, decomposition into specialized agents is the cleaner fix. A router adds latency and still leaves the underlying confusion of an oversized, overlapping tool set. Isiliye correct answer B and D hai.",
    "wrongOptions": {
      "A": "'The router pattern is well-documented across publicly available agent literat...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The proposed router introduces an additional model call on every incoming req...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Several tools have not been invoked across the most recent 90 days of traffic.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 36,
    "title": "Professional Decision: A Claude-based research assistant begins prod...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "A Claude-based research assistant begins producing responses that confidently contradict its retrieved source documents despite no change to the retrieval pipeline. Which two diagnostic actions most directly identify the root cause of this behavior? (Select two.)",
    "options": {
      "A": "Reduce the temperature setting to lower response variance across all query types.",
      "B": "Isolate whether the failure reproduces on the previous model version to test for model mismatch.",
      "C": "Switch the retrieval index to a denser embedding model to improve chunk relevance scores.",
      "D": "Increase the context window size to allow more retrieved chunks per query.",
      "E": "Inspect system-prompt grounding instructions to determine whether citation constraints remain intact."
    },
    "correctAnswer": "B and E",
    "explanation": "A sudden contradiction of retrieved sources after a model upgrade or prompt change points to either a model-version mismatch or a broken grounding instruction. Temperature, embedding, or window changes do not explain the new contradiction behavior.",
    "whyCorrect": "A sudden contradiction of retrieved sources after a model upgrade or prompt change points to either a model-version mismatch or a broken grounding instruction. Temperature, embedding, or window changes do not explain the new contradiction behavior. Isiliye correct answer B and E hai.",
    "wrongOptions": {
      "A": "'Reduce the temperature setting to lower response variance across all query ty...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Switch the retrieval index to a denser embedding model to improve chunk relev...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Increase the context window size to allow more retrieved chunks per query.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 37,
    "title": "Professional Decision: A revenue projection assistant has missed its...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "A revenue projection assistant has missed its monthly cost target by 38 percent. Profiling shows three contributors: a 6,000-token policy preamble repeated on every call (45 percent of cost), retrieval of historical sales chunks averaging 3,000 tokens per call (30 percent), and inference on a flagship-tier model (25 percent). Stakeholders require that projection accuracy remain unchanged. Which two optimizations should you sequence first to reduce cost without affecting accuracy? (Select two.)",
    "options": {
      "A": "Reduce the number of historical sales chunks retrieved across each query run.",
      "B": "Cache common retrieved sales chunks accessed across many of the daily queries.",
      "C": "Enable prompt caching on the static policy preamble across the recurring calls.",
      "D": "Truncate the policy preamble to remove non-essential clauses from the prompt.",
      "E": "Switch the workload to a smaller, faster Claude model tier across all queries."
    },
    "correctAnswer": "B and C",
    "explanation": "Caching the static preamble and the frequently-retrieved sales chunks removes the dominant repeated cost without changing the model or the information available for projection, preserving accuracy.",
    "whyCorrect": "Caching the static preamble and the frequently-retrieved sales chunks removes the dominant repeated cost without changing the model or the information available for projection, preserving accuracy. Isiliye correct answer B and C hai.",
    "wrongOptions": {
      "A": "'Reduce the number of historical sales chunks retrieved across each query run.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Truncate the policy preamble to remove non-essential clauses from the prompt.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Switch the workload to a smaller' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 38,
    "title": "Professional Decision: You are running a controlled experiment to co...",
    "conceptId": "evaluation-metrics-qa",
    "question": "You are running a controlled experiment to compare two prompts and must complete the design steps before executing the experiment. Which two steps must be completed BEFORE running the experiment with random assignment? (Select two.)",
    "options": {
      "A": "Define the hypothesis and the primary success metric for the comparison.",
      "B": "Document the recommendation, the trade-offs accepted, and the alternatives considered.",
      "C": "Monitor interim metrics daily during the experiment and stop as soon as one prompt appears ahead.",
      "D": "Decide whether to promote, reject, or iterate the candidate based on the analysis.",
      "E": "Determine the minimum detectable effect size and the sample size needed for power."
    },
    "correctAnswer": "A and E",
    "explanation": "Before random assignment you must lock the hypothesis, the success metric, the effect size you care about, and the sample size required to detect it. Analysis decisions and interim stopping rules come after the experiment design is complete.",
    "whyCorrect": "Before random assignment you must lock the hypothesis, the success metric, the effect size you care about, and the sample size required to detect it. Analysis decisions and interim stopping rules come after the experiment design is complete. Isiliye correct answer A and E hai.",
    "wrongOptions": {
      "B": "'Document the recommendation' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Monitor interim metrics daily during the experiment and stop as soon as one p...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Decide whether to promote' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 39,
    "title": "Professional Decision: A Claude architect observes that after a rece...",
    "conceptId": "governance-fluency",
    "question": "A Claude architect observes that after a recent model-version upgrade, grounded responses began including claims not supported by the retrieved source documents. Which mitigation is most directly targeted at this failure mode?",
    "options": {
      "A": "constraining responses to source-supported content combined with required citations and a verification step",
      "B": "tightening the retrieval configuration so fewer, higher-relevance passages are returned for each incoming user query",
      "C": "treating retrieved passages as untrusted input and screening them with classifiers before they enter the prompt context",
      "D": "scoring each new model version against a stable adversarial evaluation set before promoting it to production"
    },
    "correctAnswer": "A",
    "explanation": "When the model starts inventing claims beyond the retrieved sources, the direct fix is to re-impose source-only constraints, require citations, and add a verification step that checks claims against the provided passages.",
    "whyCorrect": "When the model starts inventing claims beyond the retrieved sources, the direct fix is to re-impose source-only constraints, require citations, and add a verification step that checks claims against the provided passages. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'tightening the retrieval configuration so fewer' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'treating retrieved passages as untrusted input and screening them with classi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'scoring each new model version against a stable adversarial evaluation set be...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 40,
    "title": "Professional Decision: You are running a discovery session with a bu...",
    "conceptId": "governance-fluency",
    "question": "You are running a discovery session with a business sponsor who asks for \"an AI system to fix our customer escalations.\" Which approach best yields actionable requirements?",
    "options": {
      "A": "Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints (latency, cost, audit, data sensitivity) apply.",
      "B": "Assume the requirement matches the architect's previous engagement in a different industry and proceed with that context.",
      "C": "Defer the discovery session on the grounds that the sponsor must fully specify the system before the architect can ask clarifying or scoping questions.",
      "D": "Accept the sponsor's original phrasing as a complete and final requirement and proceed directly to design."
    },
    "correctAnswer": "A",
    "explanation": "Vague requests must be decomposed through structured questioning that surfaces actors, triggers, success criteria, and constraints. Assumptions, deferral, or accepting the vague statement as final all produce unusable requirements.",
    "whyCorrect": "Vague requests must be decomposed through structured questioning that surfaces actors, triggers, success criteria, and constraints. Assumptions, deferral, or accepting the vague statement as final all produce unusable requirements. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Assume the requirement matches the architect's previous engagement in a diffe...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Defer the discovery session on the grounds that the sponsor must fully specif...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Accept the sponsor's original phrasing as a complete and final requirement an...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 41,
    "title": "Professional Decision: You are comparing two configurations for an i...",
    "conceptId": "guardrails-security-compliance",
    "question": "You are comparing two configurations for an internal compliance Q&A; assistant. Configuration X reduces top-k retrieved and serves with a lighter model, lowering p95 latency by 38 percent at a measured 2 percent drop on the accuracy benchmark. Configuration Y keeps top-k and the heavier model with p95 latency unchanged and no measurable accuracy change. The deployment's stated priorities are accuracy first and latency second. Which configuration is the better recommendation?",
    "options": {
      "A": "Configuration X, because lower latency generally matters more than accuracy, independent of this deployment's priorities.",
      "B": "Configuration Y, because the deployment's stated priority is accuracy first, and Configuration X reduces measured accuracy.",
      "C": "Configuration X, because a 38 percent latency improvement outweighs a 2 percent accuracy reduction as a general rule across compliance deployments.",
      "D": "Configuration X, because the 2 percent accuracy reduction falls within normal benchmark variance and is not a meaningful regression here."
    },
    "correctAnswer": "B",
    "explanation": "When the stated priority order is accuracy first, any measured accuracy drop disqualifies the lower-latency option. General rules or variance arguments cannot override the deployment's explicit ranking.",
    "whyCorrect": "When the stated priority order is accuracy first, any measured accuracy drop disqualifies the lower-latency option. General rules or variance arguments cannot override the deployment's explicit ranking. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Configuration X' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Configuration X' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Configuration X' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 42,
    "title": "Professional Decision: You are auditing a procurement-assistant agen...",
    "conceptId": "governance-fluency",
    "question": "You are auditing a procurement-assistant agent whose defined responsibility is to draft purchase requests for review. For each tool currently configured on the agent, select yes if the tool should remain after a least-privilege audit. Otherwise, select no. Tools: 1. a read-only catalog lookup tool that returns vendor and SKU information 2. an inbox-send tool that emails purchase requests to vendors directly 3. a draft-write tool that creates purchase-request drafts in the review queue 4. a production-database admin tool unrelated to procurement 5. a read-only policy-document tool that returns the relevant procurement policies",
    "options": {
      "A": "Yes, No, Yes, No, Yes",
      "B": "Yes, Yes, Yes, No, Yes",
      "C": "No, No, Yes, No, Yes",
      "D": "Yes, No, Yes, Yes, Yes"
    },
    "correctAnswer": "A",
    "explanation": "Catalog lookup, draft-write, and policy lookup are required for the defined task. Direct vendor email and unrelated DB admin tools exceed the agent's least-privilege boundary.",
    "whyCorrect": "Catalog lookup, draft-write, and policy lookup are required for the defined task. Direct vendor email and unrelated DB admin tools exceed the agent's least-privilege boundary. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'No' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 43,
    "title": "Professional Decision: A security audit uncovers two issues: (1) all...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "A security audit uncovers two issues: (1) all end users share a single API key, and (2) tool calls are executed without logging the initiating user. Which two mitigations directly address these specific findings? (Select two.)",
    "options": {
      "A": "Add actor attribution to tool-call logs so each call records the initiating user identity.",
      "B": "Replace the shared API key with per-user OAuth tokens carrying scope-restricted permissions.",
      "C": "Validate structured outputs against a schema before downstream actions are executed.",
      "D": "Move credentials out of the prompt context and resolve them from a server-side secret store.",
      "E": "Enforce RBAC at the retrieval layer before content enters the model context."
    },
    "correctAnswer": "A and B",
    "explanation": "Per-user OAuth tokens eliminate the shared-key problem; actor attribution in tool-call logs closes the missing identity gap. The other options address different security concerns.",
    "whyCorrect": "Per-user OAuth tokens eliminate the shared-key problem; actor attribution in tool-call logs closes the missing identity gap. The other options address different security concerns. Isiliye correct answer A and B hai.",
    "wrongOptions": {
      "C": "'Validate structured outputs against a schema before downstream actions are ex...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Move credentials out of the prompt context and resolve them from a server-sid...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Enforce RBAC at the retrieval layer before content enters the model context.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 44,
    "title": "Professional Decision: You are comparing patterns for a batch docume...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are comparing patterns for a batch document-classification job that follows fixed steps: extract metadata, classify, summarize, and persist. Which pattern is the best fit and why?",
    "options": {
      "A": "An agentic pattern, because the open-ended planning capability of agents produces more consistent structured outputs than a fixed workflow graph on classification tasks.",
      "B": "A workflow pattern, because agentic patterns generally cost more per request than a workflow graph, regardless of the task's structure.",
      "C": "An agentic pattern, because agents tend to be more accurate than workflows, so this is a reasonable default choice for most classification tasks.",
      "D": "A workflow pattern, because the steps are well-defined and predictable per-request token cost is preferred over flexibility."
    },
    "correctAnswer": "D",
    "explanation": "Fixed, sequential steps with no need for open-ended planning map cleanly to a workflow pattern, which also yields predictable cost and simpler observability.",
    "whyCorrect": "Fixed, sequential steps with no need for open-ended planning map cleanly to a workflow pattern, which also yields predictable cost and simpler observability. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'An agentic pattern' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'A workflow pattern' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'An agentic pattern' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 45,
    "title": "Professional Decision: You are responding to a stakeholder request t...",
    "conceptId": "prompt-boundaries-degradation",
    "question": "You are responding to a stakeholder request that adds significant scope to a deployment already in flight. Which response best aligns expectations while respecting the stakeholder's underlying need?",
    "options": {
      "A": "Acknowledge the request, name the scope and timeline implications transparently, and propose options for the stakeholder to choose.",
      "B": "Acknowledge the request, explain that the current release is locked, and offer to revisit it once the deployment has shipped.",
      "C": "Accept the additional scope into the current release, extend the timeline to absorb it, and notify the affected teams of the new date.",
      "D": "Acknowledge the request, add it to the backlog with a note on its origin, and confirm that it will be considered in the next planning cycle."
    },
    "correctAnswer": "A",
    "explanation": "Transparent acknowledgment of impact plus concrete options preserves trust and gives the stakeholder agency. Silent acceptance, hard lock, or pure backlog deferral all fail to engage the underlying need constructively.",
    "whyCorrect": "Transparent acknowledgment of impact plus concrete options preserves trust and gives the stakeholder agency. Silent acceptance, hard lock, or pure backlog deferral all fail to engage the underlying need constructively. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Acknowledge the request' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Accept the additional scope into the current release' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Acknowledge the request' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Prompt Boundaries Degradation questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 46,
    "title": "Professional Decision: You are distinguishing functional from non-fu...",
    "conceptId": "latency-cost-slos",
    "question": "You are distinguishing functional from non-functional requirements during discovery. Which item is a non-functional requirement?",
    "options": {
      "A": "The system must produce a draft response that a human reviewer can edit before sending.",
      "B": "The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record.",
      "C": "The system must classify inbound tickets into a defined set of categories and route each to the owning team.",
      "D": "The system must respond at p95 latency under 800 milliseconds at the expected request volume."
    },
    "correctAnswer": "D",
    "explanation": "Latency under a defined percentile is a quality-of-service (non-functional) constraint. The other three items describe observable functional behavior the system must perform.",
    "whyCorrect": "Latency under a defined percentile is a quality-of-service (non-functional) constraint. The other three items describe observable functional behavior the system must perform. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'The system must produce a draft response that a human reviewer can edit befor...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'The system must extract a defined set of specific fields from invoice attachm...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The system must classify inbound tickets into a defined set of categories and...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 47,
    "title": "Professional Decision: You are a solution architect designing a Clau...",
    "conceptId": "latency-cost-slos",
    "question": "You are a solution architect designing a Claude-based assistant with access to 60 internal tools across multiple business domains. Loading every tool definition on every request increases token usage and time to first response. Which design pattern best addresses this issue without sacrificing capability breadth?",
    "options": {
      "A": "Group the 60 tools into five fixed categories and load one category per request based on a static mapping of task type to category.",
      "B": "Use a separate model call to condense all 60 tool definitions into a compact index that is prepended to each user turn for tool selection.",
      "C": "Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task.",
      "D": "Increase the maximum context length so all 60 tool definitions fit within a single request without exceeding the limit."
    },
    "correctAnswer": "C",
    "explanation": "Progressive / on-demand tool discovery keeps the initial context small while still allowing the full tool set to be reached when needed, preserving capability without the constant token tax.",
    "whyCorrect": "Progressive / on-demand tool discovery keeps the initial context small while still allowing the full tool set to be reached when needed, preserving capability without the constant token tax. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Group the 60 tools into five fixed categories and load one category per reque...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Use a separate model call to condense all 60 tool definitions into a compact ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Increase the maximum context length so all 60 tool definitions fit within a s...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 48,
    "title": "Professional Decision: You are integrating AI-assisted tooling into ...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "You are integrating AI-assisted tooling into the team's documentation workflow. The team wants generated documentation that stays grounded in the actual code. Which integration approach best fits this requirement?",
    "options": {
      "A": "Configure subagents that read a small sample of the repository's files and generate documentation for the whole codebase from that sample, then route it through review.",
      "B": "Configure subagents that read the relevant code files and draft documentation, then have a single reviewer skim only the summary section before publication.",
      "C": "Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow.",
      "D": "Configure subagents that read the relevant code files and generate documentation, then publish it directly to the team's shared documentation site."
    },
    "correctAnswer": "C",
    "explanation": "Reading the actual files via tools, generating grounded documentation, and routing the result through the normal review workflow keeps documentation accurate and accountable.",
    "whyCorrect": "Reading the actual files via tools, generating grounded documentation, and routing the result through the normal review workflow keeps documentation accurate and accountable. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Configure subagents that read a small sample of the repository's files and ge...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Configure subagents that read the relevant code files and draft documentation' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Configure subagents that read the relevant code files and generate documentation' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 49,
    "title": "Professional Decision: You are evaluating model-selection claims use...",
    "conceptId": "evaluation-metrics-qa",
    "question": "You are evaluating model-selection claims used by a peer team. For each statement, select yes if the statement is generally true. Otherwise, select no. Statements: 1. Heavier-reasoning models typically consume more of the rate limit and run more slowly than lighter models on the same input. 2. A representative-sample evaluation on the target workload is the right basis for confirming a model selection. 3. The most capable model is always the right choice regardless of the workload profile. 4. Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for traffic that needs its capability. 5. Selecting a model based on which version was most recently announced is the right basis for production decisions.",
    "options": {
      "A": "Yes, Yes, No, Yes, No",
      "B": "Yes, No, Yes, Yes, No",
      "C": "No, Yes, No, Yes, Yes",
      "D": "Yes, Yes, Yes, No, No"
    },
    "correctAnswer": "A",
    "explanation": "Heavier models are slower and more rate-limit hungry; representative evaluation is the correct selection basis; the most capable model is not always appropriate; tiered routing is sound; newest-version selection is not.",
    "whyCorrect": "Heavier models are slower and more rate-limit hungry; representative evaluation is the correct selection basis; the most capable model is not always appropriate; tiered routing is sound; newest-version selection is not. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'No' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 50,
    "title": "Professional Decision: You are building an evaluation pipeline for a...",
    "conceptId": "evaluation-metrics-qa",
    "question": "You are building an evaluation pipeline for a Claude-based deployment and must complete the specification steps before running the deployment against the evaluation dataset. Which two steps must be completed BEFORE running the deployment against the evaluation dataset? (Select two.)",
    "options": {
      "A": "Curate and label the evaluation dataset to match the defined slices.",
      "B": "Review failure cases with subject matter experts to refine the scoring rubric.",
      "C": "Score the deployment outputs against the reference labels and aggregate the metrics.",
      "D": "Publish the aggregated metrics to a dashboard and gate releases on threshold checks.",
      "E": "Define the metrics and slices the framework will report across representative, edge, and adversarial cases."
    },
    "correctAnswer": "A and E",
    "explanation": "Before any scoring run you must define what you will measure (metrics + slices) and have a labeled dataset that covers those slices. Rubric refinement, scoring, and dashboards come after the first evaluation pass.",
    "whyCorrect": "Before any scoring run you must define what you will measure (metrics + slices) and have a labeled dataset that covers those slices. Rubric refinement, scoring, and dashboards come after the first evaluation pass. Isiliye correct answer A and E hai.",
    "wrongOptions": {
      "B": "'Review failure cases with subject matter experts to refine the scoring rubric.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Score the deployment outputs against the reference labels and aggregate the m...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Publish the aggregated metrics to a dashboard and gate releases on threshold ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 51,
    "title": "Professional Decision: You are a solution architect evaluating candi...",
    "conceptId": "governance-fluency",
    "question": "You are a solution architect evaluating candidate use cases for a Claude-based program. For each scenario, select yes if Claude is appropriate as the primary solution at the architectural level. Otherwise, select no. Scenarios: 1. drafting first-pass investigative reports from semi-structured incident logs for analyst review 2. computing real-time fraud scores at sub-50-millisecond latency on a streaming pipeline 3. long-context contract review with structured clause extraction and deviation flagging 4. replacing a vector index for semantic retrieval over a multi-million-document corpus 5. routing inbound support tickets into 30 categories with reasoning for the chosen routing",
    "options": {
      "A": "Yes, No, Yes, No, Yes",
      "B": "Yes, Yes, Yes, No, Yes",
      "C": "No, No, Yes, No, Yes",
      "D": "Yes, No, Yes, Yes, Yes"
    },
    "correctAnswer": "A",
    "explanation": "Claude is appropriate for drafting, long-context review, and reasoned routing. Sub-50 ms real-time scoring and replacing a vector index are outside its architectural strengths.",
    "whyCorrect": "Claude is appropriate for drafting, long-context review, and reasoned routing. Sub-50 ms real-time scoring and replacing a vector index are outside its architectural strengths. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'No' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Yes' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 52,
    "title": "Professional Decision: A Claude architect at a health services organ...",
    "conceptId": "evaluation-metrics-qa",
    "question": "A Claude architect at a health services organization is defining evaluation metrics for a clinical-summary pipeline. The pipeline must remain within a per-query cost ceiling and must never surface patient data to unauthorized roles. Which two metrics directly address these requirements? (Select two.)",
    "options": {
      "A": "response latency at the 95th percentile across a one-week sample window",
      "B": "BLEU score computed against a human-annotated reference summary set",
      "C": "per-query token cost measured against the defined cost ceiling",
      "D": "throughput measured as successful requests processed per minute",
      "E": "role-based access-control enforcement rate measured on a red-team dataset"
    },
    "correctAnswer": "C and E",
    "explanation": "Per-query token cost tracks the cost ceiling; RBAC enforcement rate on a red-team set verifies that patient data is never surfaced to unauthorized roles. Latency, BLEU, and throughput address other concerns.",
    "whyCorrect": "Per-query token cost tracks the cost ceiling; RBAC enforcement rate on a red-team set verifies that patient data is never surfaced to unauthorized roles. Latency, BLEU, and throughput address other concerns. Isiliye correct answer C and E hai.",
    "wrongOptions": {
      "A": "'response latency at the 95th percentile across a one-week sample window' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'BLEU score computed against a human-annotated reference summary set' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'throughput measured as successful requests processed per minute' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 53,
    "title": "Professional Decision: A platform team at an organization needs to r...",
    "conceptId": "latency-cost-slos",
    "question": "A platform team at an organization needs to reduce per-query cost and p95 latency for a high-volume Claude pipeline without degrading output quality on the core use case. Which two optimizations directly target both cost and latency simultaneously? (Select two.)",
    "options": {
      "A": "Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls.",
      "B": "Expand the system prompt to include additional few-shot examples for every request.",
      "C": "Add a retrieval step that fetches the full source corpus into the context window before generation.",
      "D": "Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases.",
      "E": "Increase max_tokens to reduce the frequency of truncated responses requiring follow-up calls."
    },
    "correctAnswer": "A and D",
    "explanation": "Prompt caching of the static prefix and tiered routing to a lighter model both cut tokens and wall-clock time. Expanding the prompt or fetching the full corpus increases both cost and latency.",
    "whyCorrect": "Prompt caching of the static prefix and tiered routing to a lighter model both cut tokens and wall-clock time. Expanding the prompt or fetching the full corpus increases both cost and latency. Isiliye correct answer A and D hai.",
    "wrongOptions": {
      "B": "'Expand the system prompt to include additional few-shot examples for every re...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Add a retrieval step that fetches the full source corpus into the context win...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Increase max_tokens to reduce the frequency of truncated responses requiring ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 54,
    "title": "Professional Decision: A healthcare organization is evaluating two C...",
    "conceptId": "governance-fluency",
    "question": "A healthcare organization is evaluating two Claude-powered AI architectures for a clinical documentation assistant. Architecture X produces higher output quality scores but costs $0.18 per documentation session and averages 4.2 seconds per response. Architecture Y scores slightly lower on quality metrics but costs $0.09 per session and averages 2.1 seconds per response. The stated SLA requires responses under 3 seconds, and the annual volume is projected at 2 million documentation sessions. Which evaluation approach correctly applies business value pillar analysis to this decision?",
    "options": {
      "A": "Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution-cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical-workflow productivity.",
      "B": "Select Architecture X because the higher quality scores justify the cost premium, and any SLA gap can be addressed through infrastructure optimization after deployment.",
      "C": "Recommend a hybrid approach using Architecture X for complex cases and Architecture Y for routine cases, without additional analysis, since this preserves quality where it matters most.",
      "D": "Select Architecture Y based solely on the 50% cost reduction, since solution cost is the most important value pillar in healthcare budget-constrained environments."
    },
    "correctAnswer": "A",
    "explanation": "SLA is a hard gate: X fails the <3 s requirement. After eliminating X, the remaining comparison correctly examines cost (solution-cost pillar) and whether the quality difference affects productivity (efficiency/transformation pillars).",
    "whyCorrect": "SLA is a hard gate: X fails the <3 s requirement. After eliminating X, the remaining comparison correctly examines cost (solution-cost pillar) and whether the quality difference affects productivity (efficiency/transformation pillars). Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Select Architecture X because the higher quality scores justify the cost premium' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Recommend a hybrid approach using Architecture X for complex cases and Archit...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Select Architecture Y based solely on the 50% cost reduction' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 55,
    "title": "Professional Decision: You are sequencing decomposed components in a...",
    "conceptId": "guardrails-security-compliance",
    "question": "You are sequencing decomposed components in an invoice-processing pipeline. For each of the decomposed components, select the execution layer it belongs to: \"Pre-Processing\", \"Model Step\", or \"Post-Processing\". Components: 1. Claude-based classification of invoice type 2. persistence of validated records to the system of record 3. schema validation of the extracted fields",
    "options": {
      "A": "1-Model, 2-Post, 3-Post",
      "B": "1-Model, 2-Post, 3-Pre",
      "C": "1-Pre, 2-Post, 3-Post",
      "D": "1-Model, 2-Pre, 3-Post"
    },
    "correctAnswer": "A",
    "explanation": "Claude classification is a model step; both schema validation of the model output and persistence of validated records are post-processing steps that occur after generation.",
    "whyCorrect": "Claude classification is a model step; both schema validation of the model output and persistence of validated records are post-processing steps that occur after generation. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'1-Model' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'1-Pre' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'1-Model' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 56,
    "title": "Professional Decision: You are reviewing an integration specificatio...",
    "conceptId": "guardrails-security-compliance",
    "question": "You are reviewing an integration specification for security gaps. Which two findings constitute valid security gaps in the specification? (Select two.)",
    "options": {
      "A": "Tool inputs and outputs are encrypted in transit using transport layer security between services.",
      "B": "Role-based access control (RBAC) is enforced only at the response-rendering layer after the model accesses restricted data.",
      "C": "Service credentials are placed in the prompt context where they can leak into logs and traces.",
      "D": "Per-user OAuth tokens are exchanged with scope-restricted permissions and refreshed within the active session.",
      "E": "Tool calls execute server-side under a least-privilege service principal scoped to the requested action."
    },
    "correctAnswer": "B and C",
    "explanation": "RBAC after the model has already seen restricted data is too late; credentials in the prompt can leak. TLS, scoped OAuth, and least-privilege tool execution are sound practices.",
    "whyCorrect": "RBAC after the model has already seen restricted data is too late; credentials in the prompt can leak. TLS, scoped OAuth, and least-privilege tool execution are sound practices. Isiliye correct answer B and C hai.",
    "wrongOptions": {
      "A": "'Tool inputs and outputs are encrypted in transit using transport layer securi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Per-user OAuth tokens are exchanged with scope-restricted permissions and ref...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Tool calls execute server-side under a least-privilege service principal scop...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 57,
    "title": "Professional Decision: You are reviewing a peer's Claude Code permis...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are reviewing a peer's Claude Code permission rules for an enterprise rollout. The rules grant unrestricted Bash access to all projects across all developers. Which response is most appropriate?",
    "options": {
      "A": "Replace unrestricted Bash access with narrowly-scoped tool patterns, but apply the same scoped patterns identically across every project regardless of each project's actual workflow needs.",
      "B": "Allow-list Bash to the specific commands the workflows require, relying on the allow-list's implicit default-deny.",
      "C": "Replace unrestricted Bash with narrowly-scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.",
      "D": "Approve the rules as written, treating Bash scoping as a matter for each project team to tighten later."
    },
    "correctAnswer": "C",
    "explanation": "Enterprise Claude Code permissions should use narrow allow patterns for required commands plus explicit denies for sensitive operations. Unrestricted Bash or delayed scoping leaves an unacceptable attack surface.",
    "whyCorrect": "Enterprise Claude Code permissions should use narrow allow patterns for required commands plus explicit denies for sensitive operations. Unrestricted Bash or delayed scoping leaves an unacceptable attack surface. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Replace unrestricted Bash access with narrowly-scoped tool patterns' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Allow-list Bash to the specific commands the workflows require' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Approve the rules as written' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 58,
    "title": "Professional Decision: You are compiling continuity practices that s...",
    "conceptId": "governance-fluency",
    "question": "You are compiling continuity practices that span the deployment lifecycle. Which two practices belong on the list? (Select two.)",
    "options": {
      "A": "Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time.",
      "B": "Archive every phase deliverable in long-term storage to preserve a record of what was produced.",
      "C": "Lock decisions made in early phases to prevent revisiting them as later phases begin.",
      "D": "Capture lessons learned at the end of each phase and surface them as inputs to the next phase.",
      "E": "Maintain a stakeholder register and notify the listed parties at every phase transition event."
    },
    "correctAnswer": "A and D",
    "explanation": "Carrying the evaluation framework forward and feeding lessons learned into subsequent phases preserve institutional knowledge and measurement consistency. Rigid locking and pure archival do not actively improve continuity.",
    "whyCorrect": "Carrying the evaluation framework forward and feeding lessons learned into subsequent phases preserve institutional knowledge and measurement consistency. Rigid locking and pure archival do not actively improve continuity. Isiliye correct answer A and D hai.",
    "wrongOptions": {
      "B": "'Archive every phase deliverable in long-term storage to preserve a record of ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Lock decisions made in early phases to prevent revisiting them as later phase...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Maintain a stakeholder register and notify the listed parties at every phase ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 59,
    "title": "Professional Decision: You are building an ethics review checklist f...",
    "conceptId": "governance-fluency",
    "question": "You are building an ethics review checklist for deployments supported by artificial intelligence (AI). Which two checks belong on the list? (Select two.)",
    "options": {
      "A": "Restrict the ethics review to outputs that exceed a defined model-confidence threshold.",
      "B": "Confirm that high-impact decisions retain human accountability rather than being attributed to the model.",
      "C": "Verify that outputs do not rely on generalizations about people that the underlying data does not support.",
      "D": "Confirm that latency and throughput remain consistent across regions and user populations.",
      "E": "Confirm that vendor licensing terms permit the planned production use of the model."
    },
    "correctAnswer": "B and C",
    "explanation": "Ethics review focuses on retained human accountability for high-impact decisions and avoidance of unsupported generalizations about people. Confidence thresholds, performance consistency, and licensing are important but belong to other review categories.",
    "whyCorrect": "Ethics review focuses on retained human accountability for high-impact decisions and avoidance of unsupported generalizations about people. Confidence thresholds, performance consistency, and licensing are important but belong to other review categories. Isiliye correct answer B and C hai.",
    "wrongOptions": {
      "A": "'Restrict the ethics review to outputs that exceed a defined model-confidence ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Confirm that latency and throughput remain consistent across regions and user...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Confirm that vendor licensing terms permit the planned production use of the ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 60,
    "title": "Professional Decision: A platform team operates a self-hosted multi-...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "A platform team operates a self-hosted multi-agent system on Kubernetes that orchestrates seven specialized agents for invoice processing. The team spends approximately 40 percent of engineering capacity on infrastructure maintenance, message bus reliability, and agent state recovery. The CFO has asked you to evaluate moving to managed agent infrastructure to reclaim engineering capacity. The security officer requires that all customer financial data remain within an approved network boundary. Which factor should most heavily influence your recommendation?",
    "options": {
      "A": "whether the current seven agents map cleanly to the patterns supported by managed agents",
      "B": "whether managed agents support the current bus topology used by the platform team",
      "C": "whether managed agents reduce per-invoice token costs across the existing processing volume",
      "D": "whether managed agent data handling satisfies the network boundary required by security"
    },
    "correctAnswer": "D",
    "explanation": "Security's network-boundary requirement is a hard constraint. If managed infrastructure cannot keep financial data inside the approved boundary, the migration is disqualified regardless of capacity or cost benefits.",
    "whyCorrect": "Security's network-boundary requirement is a hard constraint. If managed infrastructure cannot keep financial data inside the approved boundary, the migration is disqualified regardless of capacity or cost benefits. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'whether the current seven agents map cleanly to the patterns supported by man...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'whether managed agents support the current bus topology used by the platform ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'whether managed agents reduce per-invoice token costs across the existing pro...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 61,
    "title": "Professional Decision: You are compiling factors that should drive t...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are compiling factors that should drive the choice between Model Context Protocol (MCP), direct API integration, and agent-to-agent handoff. Which two factors belong on the list? (Select two.)",
    "options": {
      "A": "whether the organization has a documented naming convention for internal API endpoints",
      "B": "whether the team has prior implementation experience with any of the candidate protocols",
      "C": "whether the interaction is stateless and latency-sensitive or stateful and longer-running",
      "D": "whether the underlying transport supports encryption in transit between the integrated services",
      "E": "whether the integration must be portable across multiple AI clients in the ecosystem"
    },
    "correctAnswer": "C and E",
    "explanation": "Interaction shape (stateless/latency vs stateful/long-running) and cross-client portability are primary drivers of protocol choice. Naming conventions, prior experience, and TLS are secondary or orthogonal concerns.",
    "whyCorrect": "Interaction shape (stateless/latency vs stateful/long-running) and cross-client portability are primary drivers of protocol choice. Naming conventions, prior experience, and TLS are secondary or orthogonal concerns. Isiliye correct answer C and E hai.",
    "wrongOptions": {
      "A": "'whether the organization has a documented naming convention for internal API ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'whether the team has prior implementation experience with any of the candidat...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'whether the underlying transport supports encryption in transit between the i...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 62,
    "title": "Professional Decision: You are preparing a HIPAA-eligible deployment...",
    "conceptId": "guardrails-security-compliance",
    "question": "You are preparing a HIPAA-eligible deployment for a healthcare customer. Which configuration supports HIPAA compliance using Anthropic-offered tools?",
    "options": {
      "A": "Claude Team with a signed Business Associate Agreement but Zero Data Retention left disabled and audit logging not yet configured for the deployment.",
      "B": "Claude Pro with no signed Business Associate Agreement, since a paid consumer subscription is assumed to meet HIPAA requirements out of the box.",
      "C": "an ad-hoc personal Claude account used by individual clinicians for PHI-related tasks, with no Business Associate Agreement, no Zero Data Retention, and no audit logging configured.",
      "D": "Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking."
    },
    "correctAnswer": "D",
    "explanation": "HIPAA-eligible use requires a signed BAA, Zero Data Retention, and audit logging—capabilities provided under Claude Enterprise. Consumer or Team configurations without those controls are not compliant.",
    "whyCorrect": "HIPAA-eligible use requires a signed BAA, Zero Data Retention, and audit logging—capabilities provided under Claude Enterprise. Consumer or Team configurations without those controls are not compliant. Isiliye correct answer D hai.",
    "wrongOptions": {
      "A": "'Claude Team with a signed Business Associate Agreement but Zero Data Retentio...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Claude Pro with no signed Business Associate Agreement' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'an ad-hoc personal Claude account used by individual clinicians for PHI-relat...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 63,
    "title": "Professional Decision: You are defining transparency practices for a...",
    "conceptId": "guardrails-security-compliance",
    "question": "You are defining transparency practices for a customer-facing assistant whose responses are materially shaped by AI. Which transparency practice most directly supports responsible deployment?",
    "options": {
      "A": "Disclose AI involvement in the terms of service at signup and rely on that single notice to cover all subsequent interactions.",
      "B": "Disclose AI involvement only to internal staff and operators while withholding that information from the end users whose interactions are materially shaped by the AI system.",
      "C": "Disclose AI involvement to end users in line with the organization's transparency policy and provide a documented path to reach a human when needed.",
      "D": "Refuse to answer any user question about how the responses were produced or whether AI was involved, treating the AI's role as confidential operational information."
    },
    "correctAnswer": "C",
    "explanation": "Responsible transparency discloses AI involvement to the people affected by it and offers a clear path to a human. Single signup notices, internal-only disclosure, or refusal to answer undermine informed use.",
    "whyCorrect": "Responsible transparency discloses AI involvement to the people affected by it and offers a clear path to a human. Single signup notices, internal-only disclosure, or refusal to answer undermine informed use. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Disclose AI involvement in the terms of service at signup and rely on that si...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Disclose AI involvement only to internal staff and operators while withholdin...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Refuse to answer any user question about how the responses were produced or w...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 64,
    "title": "Professional Decision: You are reviewing instrumentation in a multi-...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are reviewing instrumentation in a multi-agent system. Which two findings constitute valid observability gaps in the instrumentation? (Select two.)",
    "options": {
      "A": "Request-scoped correlation identifiers do not propagate across agent and tool calls.",
      "B": "Tool-call payloads and outcomes are recorded with redaction applied to known sensitive fields.",
      "C": "Trace spans for each agent step are exported to the shared distributed-tracing backend.",
      "D": "Latency and token usage on every span are emitted to the central metrics pipeline.",
      "E": "Model identity and version on each turn are not recorded with the turn artifacts."
    },
    "correctAnswer": "A and E",
    "explanation": "Missing correlation IDs across agent/tool boundaries and missing model identity/version break end-to-end diagnosis. Redaction, span export, and metrics emission are positive practices.",
    "whyCorrect": "Missing correlation IDs across agent/tool boundaries and missing model identity/version break end-to-end diagnosis. Redaction, span export, and metrics emission are positive practices. Isiliye correct answer A and E hai.",
    "wrongOptions": {
      "B": "'Tool-call payloads and outcomes are recorded with redaction applied to known ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Trace spans for each agent step are exported to the shared distributed-tracin...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Latency and token usage on every span are emitted to the central metrics pipe...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 65,
    "title": "Professional Decision: You are designing a test strategy for a Claud...",
    "conceptId": "governance-fluency",
    "question": "You are designing a test strategy for a Claude-based pipeline that handles sensitive financial data. Which two test types should be prioritized to cover both safety-under-attack and cross-component correctness? (Select two.)",
    "options": {
      "A": "adversarial tests using prompt-injection and malformed-input cases",
      "B": "regression tests against a stable reference set of previously known good outputs",
      "C": "smoke tests to verify core paths after each deployment",
      "D": "unit tests targeting individual prompt-template rendering logic only",
      "E": "integration tests that verify end-to-end pipeline behavior across all components"
    },
    "correctAnswer": "A and E",
    "explanation": "Adversarial tests exercise safety under attack; integration tests verify that components work together correctly end-to-end. Regression, smoke, and narrow unit tests are useful but do not cover the two requested dimensions.",
    "whyCorrect": "Adversarial tests exercise safety under attack; integration tests verify that components work together correctly end-to-end. Regression, smoke, and narrow unit tests are useful but do not cover the two requested dimensions. Isiliye correct answer A and E hai.",
    "wrongOptions": {
      "B": "'regression tests against a stable reference set of previously known good outputs' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'smoke tests to verify core paths after each deployment' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'unit tests targeting individual prompt-template rendering logic only' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 66,
    "title": "Professional Decision: You are presenting an architectural decision ...",
    "conceptId": "governance-fluency",
    "question": "You are presenting an architectural decision to a mixed audience that includes an executive sponsor and the engineering leads who will implement the decision. Which presentation strategy best serves both audiences?",
    "options": {
      "A": "Open with a deep technical dive into implementation details for the engineering leads.",
      "B": "Present a single undifferentiated narrative that addresses technical and business concerns with equal weight throughout, treating both audiences as requiring the same depth on every section.",
      "C": "Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience.",
      "D": "Announce the chosen decision and move directly to implementation planning."
    },
    "correctAnswer": "C",
    "explanation": "Executives need the decision, outcomes, and trade-offs first; engineers need the technical depth afterward. Leading with business framing then technical detail serves both without forcing either audience through irrelevant material.",
    "whyCorrect": "Executives need the decision, outcomes, and trade-offs first; engineers need the technical depth afterward. Leading with business framing then technical detail serves both without forcing either audience through irrelevant material. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Open with a deep technical dive into implementation details for the engineeri...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Present a single undifferentiated narrative that addresses technical and busi...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Announce the chosen decision and move directly to implementation planning.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 67,
    "title": "Professional Decision: A loan pre-qualification assistant shows 94 p...",
    "conceptId": "guardrails-security-compliance",
    "question": "A loan pre-qualification assistant shows 94 percent approval recommendations that match the human underwriter decision. The fairness team has reviewed approval rate parity across protected groups and reported no significant difference. A board member has asked whether this evidence is sufficient to declare the assistant fair. Which two Discernment-competency findings should you report? (Select two.)",
    "options": {
      "A": "Match with human underwriters does not establish freedom from underwriter-introduced bias.",
      "B": "A larger sample is needed before any meaningful fairness claim can be made about the model.",
      "C": "The 94 percent match rate is sufficient evidence of fairness for the assistant's decisions.",
      "D": "The fairness team's review process likely missed at least some of the protected groups studied.",
      "E": "Approval rate parity does not by itself assess error rate parity across protected groups."
    },
    "correctAnswer": "A and E",
    "explanation": "Matching a potentially biased human process does not prove fairness; approval-rate parity alone omits error-rate (false-positive/false-negative) parity. Both gaps must be reported before a fairness claim is accepted.",
    "whyCorrect": "Matching a potentially biased human process does not prove fairness; approval-rate parity alone omits error-rate (false-positive/false-negative) parity. Both gaps must be reported before a fairness claim is accepted. Isiliye correct answer A and E hai.",
    "wrongOptions": {
      "B": "'A larger sample is needed before any meaningful fairness claim can be made ab...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The 94 percent match rate is sufficient evidence of fairness for the assistan...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The fairness team's review process likely missed at least some of the protect...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 68,
    "title": "Professional Decision: You are evaluating an evaluation set used to ...",
    "conceptId": "evaluation-metrics-qa",
    "question": "You are evaluating an evaluation set used to score a Claude-based hiring-support tool. The set is drawn from one geographic region and one tenure band. Which response is most appropriate?",
    "options": {
      "A": "Replace quantitative evaluation with qualitative impressions from a small pilot group.",
      "B": "Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release.",
      "C": "Continue using the narrow evaluation set drawn from one region and one tenure band because the existing benchmark scores are already high on that subset.",
      "D": "Narrow the evaluation set to a single demographic subgroup to simplify score interpretation."
    },
    "correctAnswer": "B",
    "explanation": "An evaluation set that does not cover the populations the system will serve cannot support a release decision. Expansion to the real geographic and tenure distributions is required before broader rollout.",
    "whyCorrect": "An evaluation set that does not cover the populations the system will serve cannot support a release decision. Expansion to the real geographic and tenure distributions is required before broader rollout. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Replace quantitative evaluation with qualitative impressions from a small pil...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Continue using the narrow evaluation set drawn from one region and one tenure...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Narrow the evaluation set to a single demographic subgroup to simplify score ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 69,
    "title": "Professional Decision: You are designing a multi-tenant Claude assis...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "You are designing a multi-tenant Claude assistant that must isolate customer data at the retrieval layer. Which control most directly prevents cross-tenant leakage?",
    "options": {
      "A": "Append a natural-language instruction in the system prompt forbidding cross-tenant access.",
      "B": "Enforce tenant-scoped filters in the retrieval query so only documents belonging to the authenticated tenant are returned.",
      "C": "Rely on the model to refuse any request that appears to target another tenant's data.",
      "D": "Post-filter the generated response to remove any phrases that mention other tenant identifiers."
    },
    "correctAnswer": "B",
    "explanation": "Tenant isolation must be enforced before content reaches the model. Prompt instructions, model refusal, or post-filtering cannot guarantee that restricted documents never enter context.",
    "whyCorrect": "Tenant isolation must be enforced before content reaches the model. Prompt instructions, model refusal, or post-filtering cannot guarantee that restricted documents never enter context. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Append a natural-language instruction in the system prompt forbidding cross-t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Rely on the model to refuse any request that appears to target another tenant...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Post-filter the generated response to remove any phrases that mention other t...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 70,
    "title": "Professional Decision: A team wants to add a \"confidence score\" fiel...",
    "conceptId": "evaluation-metrics-qa",
    "question": "A team wants to add a \"confidence score\" field to every Claude response for a high-stakes classification task. Which approach produces a usable confidence signal?",
    "options": {
      "A": "Instruct the model to output a free-form confidence percentage and treat the number as calibrated probability.",
      "B": "Use log-probabilities of the predicted class token when the model is forced to choose from a closed label set.",
      "C": "Ask the model to rate its own answer on a 1–5 scale after generation and map the rating to confidence.",
      "D": "Increase temperature and interpret higher variance across samples as lower confidence."
    },
    "correctAnswer": "B",
    "explanation": "For closed-label classification, token log-probabilities provide the most direct, model-native confidence signal. Free-form percentages and post-hoc self-ratings are uncalibrated and unreliable.",
    "whyCorrect": "For closed-label classification, token log-probabilities provide the most direct, model-native confidence signal. Free-form percentages and post-hoc self-ratings are uncalibrated and unreliable. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Instruct the model to output a free-form confidence percentage and treat the ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask the model to rate its own answer on a 1–5 scale after generation and map ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Increase temperature and interpret higher variance across samples as lower co...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 71,
    "title": "Professional Decision: You are writing the evaluation plan for a Cla...",
    "conceptId": "evaluation-metrics-qa",
    "question": "You are writing the evaluation plan for a Claude-powered contract redlining tool. Which metric pair best captures both accuracy and practical utility?",
    "options": {
      "A": "BLEU score against a reference redline and average response latency.",
      "B": "Exact-match rate on clause-level change detection and attorney acceptance rate of suggested edits.",
      "C": "Perplexity of the generated redline text and total token consumption per document.",
      "D": "Number of suggested edits per document and model temperature setting."
    },
    "correctAnswer": "B",
    "explanation": "Exact-match on clause changes measures detection accuracy; attorney acceptance measures whether the suggestions are actually useful. BLEU, perplexity, and token counts do not capture either dimension well.",
    "whyCorrect": "Exact-match on clause changes measures detection accuracy; attorney acceptance measures whether the suggestions are actually useful. BLEU, perplexity, and token counts do not capture either dimension well. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'BLEU score against a reference redline and average response latency.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Perplexity of the generated redline text and total token consumption per docu...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Number of suggested edits per document and model temperature setting.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 72,
    "title": "Professional Decision: A production Claude assistant occasionally re...",
    "conceptId": "latency-cost-slos",
    "question": "A production Claude assistant occasionally returns partially completed JSON when the response is truncated by max_tokens. Which two mitigations should be applied together? (Select two.)",
    "options": {
      "A": "Increase max_tokens to a value that covers the 99th-percentile response length observed in production.",
      "B": "Add a post-generation schema validator that rejects incomplete objects and triggers a focused continuation prompt.",
      "C": "Lower temperature to reduce the chance of long, meandering responses.",
      "D": "Switch the entire workload to a smaller model that tends to produce shorter outputs.",
      "E": "Remove the JSON schema from the prompt so the model is free to respond in any format."
    },
    "correctAnswer": "A and B",
    "explanation": "Raising the token ceiling reduces truncation frequency; a schema validator plus continuation recovers the rare remaining cases. Temperature or model changes do not guarantee completeness.",
    "whyCorrect": "Raising the token ceiling reduces truncation frequency; a schema validator plus continuation recovers the rare remaining cases. Temperature or model changes do not guarantee completeness. Isiliye correct answer A and B hai.",
    "wrongOptions": {
      "C": "'Lower temperature to reduce the chance of long' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Switch the entire workload to a smaller model that tends to produce shorter o...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Remove the JSON schema from the prompt so the model is free to respond in any...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 73,
    "title": "Professional Decision: You are reviewing a proposed system prompt th...",
    "conceptId": "prompt-boundaries-degradation",
    "question": "You are reviewing a proposed system prompt that contains 12 distinct behavioral rules, three of which conflict under edge cases. What is the preferred resolution?",
    "options": {
      "A": "Leave the conflicts in place and instruct the model to \"use its best judgment\" when rules collide.",
      "B": "Rank the rules by priority and add an explicit ordering statement so the model knows which rule prevails.",
      "C": "Remove or rewrite the conflicting rules until the remaining set is internally consistent.",
      "D": "Split the prompt into two separate system prompts and randomly select one at request time."
    },
    "correctAnswer": "C",
    "explanation": "Conflicting instructions produce non-deterministic behavior. The cleanest fix is to eliminate the contradiction so every rule can be satisfied simultaneously.",
    "whyCorrect": "Conflicting instructions produce non-deterministic behavior. The cleanest fix is to eliminate the contradiction so every rule can be satisfied simultaneously. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Leave the conflicts in place and instruct the model to \"use its best judgment...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Rank the rules by priority and add an explicit ordering statement so the mode...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Split the prompt into two separate system prompts and randomly select one at ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Prompt Boundaries Degradation questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 74,
    "title": "Professional Decision: A Claude-based claims-adjudication workflow m...",
    "conceptId": "guardrails-security-compliance",
    "question": "A Claude-based claims-adjudication workflow must keep a complete audit trail of every decision. Which design element is required?",
    "options": {
      "A": "Log only the final accept/reject decision and the model version used.",
      "B": "Persist the full prompt, retrieved context, model response, any human overrides, and the acting user identity for every decision.",
      "C": "Rely on the model's internal memory of the conversation as the audit record.",
      "D": "Store only a hash of the prompt and response to save storage costs."
    },
    "correctAnswer": "B",
    "explanation": "A complete audit trail for regulated decisions must capture inputs, context, outputs, human interventions, and identity so any decision can be reconstructed and explained later.",
    "whyCorrect": "A complete audit trail for regulated decisions must capture inputs, context, outputs, human interventions, and identity so any decision can be reconstructed and explained later. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Log only the final accept/reject decision and the model version used.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Rely on the model's internal memory of the conversation as the audit record.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Store only a hash of the prompt and response to save storage costs.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 75,
    "title": "Professional Decision: You need to reduce the cost of a daily batch ...",
    "conceptId": "latency-cost-slos",
    "question": "You need to reduce the cost of a daily batch job that summarizes 5,000 support tickets. The job currently sends each ticket individually to Claude. Which change yields the largest cost reduction while preserving summary quality?",
    "options": {
      "A": "Batch multiple tickets into a single prompt, request structured summaries for each, and use prompt caching on the shared instruction prefix.",
      "B": "Switch to the largest available model so fewer tokens are needed to reach the same quality.",
      "C": "Summarize only a random 10 percent sample of tickets and extrapolate.",
      "D": "Remove all few-shot examples from the prompt to shorten it."
    },
    "correctAnswer": "A",
    "explanation": "Batching amortizes the fixed instruction cost across many tickets; prompt caching further reduces the repeated prefix cost. Larger models or sampling reduce quality; removing examples may harm consistency.",
    "whyCorrect": "Batching amortizes the fixed instruction cost across many tickets; prompt caching further reduces the repeated prefix cost. Larger models or sampling reduce quality; removing examples may harm consistency. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Switch to the largest available model so fewer tokens are needed to reach the...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Summarize only a random 10 percent sample of tickets and extrapolate.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Remove all few-shot examples from the prompt to shorten it.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 76,
    "title": "Professional Decision: A stakeholder asks for a Claude assistant tha...",
    "conceptId": "governance-fluency",
    "question": "A stakeholder asks for a Claude assistant that can \"answer any question about our product roadmap.\" Which discovery response is most appropriate?",
    "options": {
      "A": "Accept the request as stated and begin building a general-purpose Q&A; system over the entire roadmap repository.",
      "B": "Ask which specific decision types, time horizons, and audience segments the assistant must support, and what accuracy and latency constraints apply.",
      "C": "Refuse the request on the grounds that roadmaps change too frequently for any AI system to stay current.",
      "D": "Propose an offline weekly PDF digest instead of an interactive assistant."
    },
    "correctAnswer": "B",
    "explanation": "Vague \"answer any question\" requests must be decomposed into concrete decision types, audiences, and constraints before design can begin.",
    "whyCorrect": "Vague \"answer any question\" requests must be decomposed into concrete decision types, audiences, and constraints before design can begin. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Accept the request as stated and begin building a general-purpose Q&A' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Refuse the request on the grounds that roadmaps change too frequently for any...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Propose an offline weekly PDF digest instead of an interactive assistant.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 77,
    "title": "Professional Decision: You are configuring Claude Code permissions f...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are configuring Claude Code permissions for a regulated finance team. Which permission posture is required?",
    "options": {
      "A": "Full unrestricted Bash and filesystem access so developers can explore freely.",
      "B": "Allow-list only the specific commands and paths required by approved workflows, plus explicit deny rules for production database and secret-store paths.",
      "C": "Allow all tools by default and rely on developers to self-restrict.",
      "D": "Disable all tool use and force every action through a human operator."
    },
    "correctAnswer": "B",
    "explanation": "Regulated environments require least-privilege allow-lists for required operations and explicit denies for high-risk paths. Unrestricted or default-allow postures create unacceptable exposure.",
    "whyCorrect": "Regulated environments require least-privilege allow-lists for required operations and explicit denies for high-risk paths. Unrestricted or default-allow postures create unacceptable exposure. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Full unrestricted Bash and filesystem access so developers can explore freely.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Allow all tools by default and rely on developers to self-restrict.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Disable all tool use and force every action through a human operator.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 78,
    "title": "Professional Decision: A peer proposes evaluating a Claude assistant...",
    "conceptId": "evaluation-metrics-qa",
    "question": "A peer proposes evaluating a Claude assistant solely by measuring user satisfaction scores after each interaction. Which two additional measures should you recommend? (Select two.)",
    "options": {
      "A": "Task-completion rate against a labeled gold set of representative requests.",
      "B": "Average number of emojis used in the model's responses.",
      "C": "Rate of policy or safety violations detected by an independent classifier.",
      "D": "Length of the system prompt in tokens.",
      "E": "Number of unique users who opened the assistant at least once."
    },
    "correctAnswer": "A and C",
    "explanation": "Satisfaction alone does not measure correctness or safety. Task-completion against a gold set and independent safety-violation rate close those gaps.",
    "whyCorrect": "Satisfaction alone does not measure correctness or safety. Task-completion against a gold set and independent safety-violation rate close those gaps. Isiliye correct answer A and C hai.",
    "wrongOptions": {
      "B": "'Average number of emojis used in the model's responses.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Length of the system prompt in tokens.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Number of unique users who opened the assistant at least once.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 79,
    "title": "Professional Decision: You must decide whether a new Claude use case...",
    "conceptId": "governance-fluency",
    "question": "You must decide whether a new Claude use case that generates customer-facing legal notices should include human review. Which criterion decides the question?",
    "options": {
      "A": "Whether the notices are shorter than 200 words.",
      "B": "Whether an incorrect notice could create regulatory liability or customer harm.",
      "C": "Whether the model has a high average confidence score on similar past generations.",
      "D": "Whether the legal team has bandwidth this quarter."
    },
    "correctAnswer": "B",
    "explanation": "Human review is required when the consequence of error is high (liability or harm). Length, confidence, or current bandwidth do not determine the need for oversight.",
    "whyCorrect": "Human review is required when the consequence of error is high (liability or harm). Length, confidence, or current bandwidth do not determine the need for oversight. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Whether the notices are shorter than 200 words.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Whether the model has a high average confidence score on similar past generat...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Whether the legal team has bandwidth this quarter.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 80,
    "title": "Professional Decision: A Claude retrieval pipeline returns passages ...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "A Claude retrieval pipeline returns passages that are topically related but do not contain the specific facts needed to answer the query. Which change most directly improves answerability?",
    "options": {
      "A": "Increase the number of retrieved passages from 5 to 20.",
      "B": "Switch from dense retrieval to a hybrid (dense + sparse) retrieval strategy and re-rank by exact-term overlap with the query.",
      "C": "Lower the temperature of the generation model.",
      "D": "Add a second system-prompt instruction telling the model to \"try harder\" when sources are weak."
    },
    "correctAnswer": "B",
    "explanation": "When topical but non-answer-bearing passages dominate, hybrid retrieval plus exact-term re-ranking improves the chance that fact-bearing spans reach the context.",
    "whyCorrect": "When topical but non-answer-bearing passages dominate, hybrid retrieval plus exact-term re-ranking improves the chance that fact-bearing spans reach the context. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Increase the number of retrieved passages from 5 to 20.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Lower the temperature of the generation model.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Add a second system-prompt instruction telling the model to \"try harder\" when...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 81,
    "title": "Professional Decision: You are writing the runbook for a Claude-base...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are writing the runbook for a Claude-based production service. Which two items must appear in the runbook? (Select two.)",
    "options": {
      "A": "Exact model version and deployment timestamp currently serving traffic.",
      "B": "Step-by-step procedure to roll back to the previous known-good model version and prompt configuration.",
      "C": "A list of every engineer who has ever contributed to the prompt.",
      "D": "Marketing copy describing the service for external press releases.",
      "E": "Preferred coffee order for the on-call rotation."
    },
    "correctAnswer": "A and B",
    "explanation": "On-call engineers need the current version identity and a tested rollback procedure. Contributor lists and marketing copy are not operational requirements.",
    "whyCorrect": "On-call engineers need the current version identity and a tested rollback procedure. Contributor lists and marketing copy are not operational requirements. Isiliye correct answer A and B hai.",
    "wrongOptions": {
      "C": "'A list of every engineer who has ever contributed to the prompt.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Marketing copy describing the service for external press releases.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Preferred coffee order for the on-call rotation.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 82,
    "title": "Professional Decision: A team wants to use Claude to generate unit t...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "A team wants to use Claude to generate unit tests for a legacy codebase. Which grounding practice is essential?",
    "options": {
      "A": "Provide only the function signature and ask Claude to invent realistic test cases.",
      "B": "Supply the actual source of the function under test and any existing related tests as context, and require the generated tests to compile and pass against the real code.",
      "C": "Generate tests offline and commit them without running them against the codebase.",
      "D": "Use a temperature of 1.0 to maximize test diversity."
    },
    "correctAnswer": "B",
    "explanation": "Generated tests must be grounded in the real source and verified by compilation and execution; otherwise they risk testing invented behavior.",
    "whyCorrect": "Generated tests must be grounded in the real source and verified by compilation and execution; otherwise they risk testing invented behavior. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Provide only the function signature and ask Claude to invent realistic test c...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Generate tests offline and commit them without running them against the codeb...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Use a temperature of 1.0 to maximize test diversity.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 83,
    "title": "Professional Decision: You observe that a Claude assistant's answers...",
    "conceptId": "prompt-boundaries-degradation",
    "question": "You observe that a Claude assistant's answers have become less consistent after a system-prompt update. Which diagnostic step should you take first?",
    "options": {
      "A": "Immediately revert the prompt and declare the update a failure.",
      "B": "Diff the previous and current system prompts, identify every changed instruction, and re-run a fixed evaluation set against both versions side-by-side.",
      "C": "Increase temperature to see whether variability decreases.",
      "D": "Ask a single colleague for a subjective opinion on a handful of responses."
    },
    "correctAnswer": "B",
    "explanation": "A controlled side-by-side evaluation against a fixed set isolates the effect of the prompt change and quantifies any consistency regression.",
    "whyCorrect": "A controlled side-by-side evaluation against a fixed set isolates the effect of the prompt change and quantifies any consistency regression. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Immediately revert the prompt and declare the update a failure.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Increase temperature to see whether variability decreases.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Ask a single colleague for a subjective opinion on a handful of responses.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Prompt Boundaries Degradation questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 84,
    "title": "Professional Decision: A Claude deployment must support both English...",
    "conceptId": "evaluation-metrics-qa",
    "question": "A Claude deployment must support both English and Spanish queries with equal quality. Which evaluation design is required?",
    "options": {
      "A": "Evaluate only on English data and assume Spanish performance will be similar.",
      "B": "Maintain separate, balanced evaluation sets for each language and report metrics per language as well as overall.",
      "C": "Translate all Spanish queries to English before evaluation.",
      "D": "Use a single multilingual BLEU score that collapses both languages."
    },
    "correctAnswer": "B",
    "explanation": "Language-specific evaluation sets and per-language metrics are the only way to detect and prevent quality asymmetry between languages.",
    "whyCorrect": "Language-specific evaluation sets and per-language metrics are the only way to detect and prevent quality asymmetry between languages. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "English test set ka result doosri languages par directly assume nahi kiya ja sakta; localized evaluation benchmark zaroori hai.",
      "C": "English test set ka result doosri languages par directly assume nahi kiya ja sakta; localized evaluation benchmark zaroori hai.",
      "D": "'Use a single multilingual BLEU score that collapses both languages.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 85,
    "title": "Professional Decision: You need to prevent a Claude assistant from e...",
    "conceptId": "guardrails-security-compliance",
    "question": "You need to prevent a Claude assistant from ever emitting a customer's full credit-card number. Which layered control set is most effective?",
    "options": {
      "A": "A system-prompt rule forbidding credit-card numbers plus a post-generation regex/classifier that redacts or blocks any detected PAN.",
      "B": "A single system-prompt instruction and nothing else.",
      "C": "Relying on the model to have learned that credit-card numbers are sensitive.",
      "D": "Logging every response that contains a number longer than 12 digits for later review."
    },
    "correctAnswer": "A",
    "explanation": "Prompt-level prohibition plus deterministic post-generation detection and redaction form a defense-in-depth that does not rely solely on model compliance.",
    "whyCorrect": "Prompt-level prohibition plus deterministic post-generation detection and redaction form a defense-in-depth that does not rely solely on model compliance. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'A single system-prompt instruction and nothing else.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Relying on the model to have learned that credit-card numbers are sensitive.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Logging every response that contains a number longer than 12 digits for later...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 86,
    "title": "Professional Decision: A product manager requests that a Claude assi...",
    "conceptId": "governance-fluency",
    "question": "A product manager requests that a Claude assistant \"always be more creative\" when generating marketing copy. How should you translate the request into a controllable prompt change?",
    "options": {
      "A": "Raise temperature from 0.3 to 0.9 and add an instruction to prefer novel phrasing while still respecting brand guidelines and factual claims.",
      "B": "Leave temperature unchanged and add the single word \"creative\" to the system prompt.",
      "C": "Switch to the largest model available and keep every other setting identical.",
      "D": "Remove all brand-guideline constraints so the model is free to invent."
    },
    "correctAnswer": "A",
    "explanation": "Creativity is most directly influenced by temperature; the instruction must still preserve brand and factual constraints so the output remains usable.",
    "whyCorrect": "Creativity is most directly influenced by temperature; the instruction must still preserve brand and factual constraints so the output remains usable. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Leave temperature unchanged and add the single word \"creative\" to the system ...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Switch to the largest model available and keep every other setting identical.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Remove all brand-guideline constraints so the model is free to invent.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 87,
    "title": "Professional Decision: You are selecting an embedding model for a Cl...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "You are selecting an embedding model for a Claude RAG pipeline that must retrieve both exact part numbers and paraphrased natural-language questions. Which retrieval architecture is appropriate?",
    "options": {
      "A": "Dense-only retrieval with a general-purpose embedding model.",
      "B": "Sparse-only retrieval with BM25.",
      "C": "Hybrid retrieval that combines dense embeddings for semantic match with sparse term matching for exact identifiers, followed by a cross-encoder re-ranker.",
      "D": "Random sampling of the document store."
    },
    "correctAnswer": "C",
    "explanation": "Hybrid retrieval plus re-ranking covers both semantic paraphrase and exact-token needs; either dense-only or sparse-only leaves a large recall gap.",
    "whyCorrect": "Hybrid retrieval plus re-ranking covers both semantic paraphrase and exact-token needs; either dense-only or sparse-only leaves a large recall gap. Isiliye correct answer C hai.",
    "wrongOptions": {
      "A": "'Dense-only retrieval with a general-purpose embedding model.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "B": "'Sparse-only retrieval with BM25.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "Random sampling se deterministic ya relevant knowledge extract nahi ho sakti; production Q&A mein yeh complete failure hai."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 88,
    "title": "Professional Decision: A Claude assistant is used to draft internal ...",
    "conceptId": "governance-fluency",
    "question": "A Claude assistant is used to draft internal policy updates. Legal requires that every draft be reviewed by a human before publication. Where should the human gate be placed?",
    "options": {
      "A": "After the model generates the draft and before the draft is written to the policy repository or sent to stakeholders.",
      "B": "Before the model is invoked, so the human writes the first version.",
      "C": "Only when the model reports low confidence.",
      "D": "After publication, as a post-hoc audit."
    },
    "correctAnswer": "A",
    "explanation": "The human gate must sit between generation and any irreversible downstream action (publication or distribution).",
    "whyCorrect": "The human gate must sit between generation and any irreversible downstream action (publication or distribution). Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'Before the model is invoked' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Only when the model reports low confidence.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'After publication' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 89,
    "title": "Professional Decision: You discover that a production Claude service...",
    "conceptId": "guardrails-security-compliance",
    "question": "You discover that a production Claude service is being called with prompts that contain raw database connection strings. Which immediate remediation is required?",
    "options": {
      "A": "Add a system-prompt instruction telling the model never to log credentials.",
      "B": "Move credential resolution out of the prompt and into a server-side secret store; redact any residual secrets before they reach the model or logs.",
      "C": "Lower the log level so connection strings are no longer written to disk.",
      "D": "Switch to a different model provider."
    },
    "correctAnswer": "B",
    "explanation": "Credentials must never enter the prompt or logs. Server-side secret resolution plus redaction is the required control.",
    "whyCorrect": "Credentials must never enter the prompt or logs. Server-side secret resolution plus redaction is the required control. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Add a system-prompt instruction telling the model never to log credentials.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Lower the log level so connection strings are no longer written to disk.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Switch to a different model provider.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 90,
    "title": "Professional Decision: A team is debating whether to use Claude for ...",
    "conceptId": "latency-cost-slos",
    "question": "A team is debating whether to use Claude for real-time voice-agent turn-taking with a hard 300 ms latency budget. Which architectural conclusion is correct?",
    "options": {
      "A": "Claude is an excellent fit because it can reason about conversation state.",
      "B": "Claude's typical generation latency exceeds a 300 ms hard budget for interactive turn-taking; a specialized low-latency speech model or streaming partial-response design is required.",
      "C": "Latency can be ignored if the answers are high quality.",
      "D": "Raising temperature will reduce latency."
    },
    "correctAnswer": "B",
    "explanation": "Hard sub-second interactive latency budgets are outside Claude's typical generation profile; specialized speech or streaming architectures are needed.",
    "whyCorrect": "Hard sub-second interactive latency budgets are outside Claude's typical generation profile; specialized speech or streaming architectures are needed. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Claude is an excellent fit because it can reason about conversation state.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Latency can be ignored if the answers are high quality.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Raising temperature will reduce latency.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 91,
    "title": "Professional Decision: You are writing acceptance criteria for a Cla...",
    "conceptId": "evaluation-metrics-qa",
    "question": "You are writing acceptance criteria for a Claude-powered ticket-routing service. Which criterion is both measurable and aligned with business value?",
    "options": {
      "A": "\"The system should feel fast and accurate.\"",
      "B": "\"At least 92 percent of tickets are routed to the correct team on the first attempt, measured against a monthly labeled sample, with p95 latency under 1.5 seconds.\"",
      "C": "\"The model should use the most advanced reasoning available.\"",
      "D": "\"Users should not complain about the routing.\""
    },
    "correctAnswer": "B",
    "explanation": "Acceptance criteria must be quantitative, measurable against a defined sample, and tied to the business outcomes of correct routing and acceptable latency.",
    "whyCorrect": "Acceptance criteria must be quantitative, measurable against a defined sample, and tied to the business outcomes of correct routing and acceptable latency. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'\"The system should feel fast and accurate.\"' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'\"The model should use the most advanced reasoning available.\"' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'\"Users should not complain about the routing.\"' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 92,
    "title": "Professional Decision: A Claude deployment's token cost has risen 40...",
    "conceptId": "latency-cost-slos",
    "question": "A Claude deployment's token cost has risen 40 percent after the addition of a long few-shot example block. Which two actions should you take first? (Select two.)",
    "options": {
      "A": "Move the few-shot examples into a cacheable system-prompt prefix so they are billed only once per cache window.",
      "B": "Evaluate whether a smaller number of higher-quality examples achieves the same accuracy.",
      "C": "Double the number of few-shot examples to improve accuracy further.",
      "D": "Switch every request to the largest model tier.",
      "E": "Disable all caching."
    },
    "correctAnswer": "A and B",
    "explanation": "Caching the static few-shot block and pruning to the minimal effective set both attack the new cost driver without sacrificing quality.",
    "whyCorrect": "Caching the static few-shot block and pruning to the minimal effective set both attack the new cost driver without sacrificing quality. Isiliye correct answer A and B hai.",
    "wrongOptions": {
      "C": "'Double the number of few-shot examples to improve accuracy further.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Switch every request to the largest model tier.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Disable all caching.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 93,
    "title": "Professional Decision: You must ensure that a Claude assistant never...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "You must ensure that a Claude assistant never invents product SKUs that do not exist in the catalog. Which control is most reliable?",
    "options": {
      "A": "Instruct the model to \"only use real SKUs\" in the system prompt.",
      "B": "Constrain generation to a closed set of SKUs retrieved from the catalog and validated against the catalog before any downstream action.",
      "C": "Ask the model to list its confidence next to every SKU.",
      "D": "Manually review a random sample of responses once a month."
    },
    "correctAnswer": "B",
    "explanation": "Closed-set constrained generation plus deterministic catalog validation prevents invented SKUs; prompt instructions and periodic sampling cannot guarantee it.",
    "whyCorrect": "Closed-set constrained generation plus deterministic catalog validation prevents invented SKUs; prompt instructions and periodic sampling cannot guarantee it. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Instruct the model to \"only use real SKUs\" in the system prompt.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask the model to list its confidence next to every SKU.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Manually review a random sample of responses once a month.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 94,
    "title": "Professional Decision: A peer claims that \"hybrid retrieval is alway...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "A peer claims that \"hybrid retrieval is always better than dense-only retrieval.\" How should you respond?",
    "options": {
      "A": "Agree, because hybrid retrieval is universally superior.",
      "B": "Note that hybrid retrieval improves recall for workloads that need both semantic and exact-term matching, but dense-only may be sufficient and cheaper when queries are purely paraphrastic.",
      "C": "Reject hybrid retrieval in all cases.",
      "D": "Recommend random retrieval as a simpler alternative."
    },
    "correctAnswer": "B",
    "explanation": "Hybrid helps when both paraphrase and exact tokens matter; for purely semantic workloads the extra sparse path may add cost without benefit.",
    "whyCorrect": "Hybrid helps when both paraphrase and exact tokens matter; for purely semantic workloads the extra sparse path may add cost without benefit. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Agree' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Reject hybrid retrieval in all cases.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Recommend random retrieval as a simpler alternative.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 95,
    "title": "Professional Decision: You are designing the rollback procedure for ...",
    "conceptId": "prompt-boundaries-degradation",
    "question": "You are designing the rollback procedure for a Claude prompt change. Which element is mandatory?",
    "options": {
      "A": "A one-click (or single-command) ability to restore the previous prompt version and model configuration, with verification that traffic has switched.",
      "B": "A 48-hour waiting period before any rollback can be initiated.",
      "C": "Approval from the original prompt author before rollback.",
      "D": "Automatic deletion of all logs generated under the new prompt."
    },
    "correctAnswer": "A",
    "explanation": "Rollback must be fast, tested, and verifiable so production can be restored when a prompt change degrades quality or safety.",
    "whyCorrect": "Rollback must be fast, tested, and verifiable so production can be restored when a prompt change degrades quality or safety. Isiliye correct answer A hai.",
    "wrongOptions": {
      "B": "'A 48-hour waiting period before any rollback can be initiated.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Approval from the original prompt author before rollback.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Automatic deletion of all logs generated under the new prompt.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Prompt Boundaries Degradation questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 96,
    "title": "Professional Decision: A Claude assistant is used to generate first-...",
    "conceptId": "evaluation-metrics-qa",
    "question": "A Claude assistant is used to generate first-draft incident reports. Analysts then edit the drafts. Which metric best measures the assistant's contribution?",
    "options": {
      "A": "Average length of the generated draft in tokens.",
      "B": "Time-to-final-report and edit-distance (or acceptance rate of generated sentences) relative to a pure-manual baseline.",
      "C": "Number of adjectives used in the draft.",
      "D": "Model temperature setting on the day of generation."
    },
    "correctAnswer": "B",
    "explanation": "The value of a drafting assistant is reduced analyst time and higher acceptance of the generated text; those are the metrics that matter.",
    "whyCorrect": "The value of a drafting assistant is reduced analyst time and higher acceptance of the generated text; those are the metrics that matter. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Average length of the generated draft in tokens.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Number of adjectives used in the draft.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Model temperature setting on the day of generation.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 97,
    "title": "Professional Decision: You discover that two different Claude projec...",
    "conceptId": "rag-retrieval-multitenancy",
    "question": "You discover that two different Claude projects share the same system prompt but have diverged in their retrieval corpora. What continuity risk does this create?",
    "options": {
      "A": "No risk, because the system prompt is identical.",
      "B": "Behavior can diverge silently when the same prompt is applied to different knowledge bases, making debugging and shared evaluation harder.",
      "C": "The projects will automatically stay in sync.",
      "D": "Retrieval corpora never affect prompt behavior."
    },
    "correctAnswer": "B",
    "explanation": "Identical prompts on divergent corpora produce different answers for the same question, breaking shared evaluation and complicating root-cause analysis.",
    "whyCorrect": "Identical prompts on divergent corpora produce different answers for the same question, breaking shared evaluation and complicating root-cause analysis. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'No risk' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The projects will automatically stay in sync.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Retrieval corpora never affect prompt behavior.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Rag Retrieval Multitenancy questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 98,
    "title": "Professional Decision: A security review requires that every Claude ...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "A security review requires that every Claude tool call be attributable to an individual user. Which implementation satisfies the requirement?",
    "options": {
      "A": "Use a single service account for all tool calls and log the service-account identity.",
      "B": "Propagate the authenticated user identity into the tool-call context and record that identity with every tool invocation.",
      "C": "Log only the model version used for the call.",
      "D": "Rely on network-level IP logging as a proxy for user identity."
    },
    "correctAnswer": "B",
    "explanation": "User identity must travel with the request and be recorded at the tool-call boundary; service accounts or IP addresses do not provide individual attribution.",
    "whyCorrect": "User identity must travel with the request and be recorded at the tool-call boundary; service accounts or IP addresses do not provide individual attribution. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Use a single service account for all tool calls and log the service-account i...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Log only the model version used for the call.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Rely on network-level IP logging as a proxy for user identity.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 99,
    "title": "Professional Decision: You are asked to add a new high-risk capabili...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You are asked to add a new high-risk capability (direct database write) to an existing Claude agent. What is the required governance step before enabling it?",
    "options": {
      "A": "Enable the capability immediately and monitor for problems.",
      "B": "Perform a risk assessment, define human-approval gates for every write, implement least-privilege credentials, and obtain explicit sign-off from security and the data owner.",
      "C": "Add a system-prompt sentence saying \"be careful with writes.\"",
      "D": "Increase the model's temperature so writes are more random and therefore less dangerous."
    },
    "correctAnswer": "B",
    "explanation": "High-risk write capabilities require formal risk assessment, human gates, least-privilege credentials, and explicit stakeholder sign-off before activation.",
    "whyCorrect": "High-risk write capabilities require formal risk assessment, human gates, least-privilege credentials, and explicit stakeholder sign-off before activation. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Enable the capability immediately and monitor for problems.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Add a system-prompt sentence saying \"be careful with writes.\"' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Increase the model's temperature so writes are more random and therefore less...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 100,
    "title": "Professional Decision: A Claude evaluation set contains only \"happy-...",
    "conceptId": "evaluation-metrics-qa",
    "question": "A Claude evaluation set contains only \"happy-path\" examples. What is the most important expansion?",
    "options": {
      "A": "Add more happy-path examples from the same distribution.",
      "B": "Add adversarial, edge-case, and out-of-distribution examples that exercise safety, refusal, and failure modes.",
      "C": "Remove all examples that the current model already answers correctly.",
      "D": "Translate the entire set into a second language and discard the original."
    },
    "correctAnswer": "B",
    "explanation": "An evaluation set that never stresses safety or edge conditions cannot reveal the failures that matter most in production.",
    "whyCorrect": "An evaluation set that never stresses safety or edge conditions cannot reveal the failures that matter most in production. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "Sirf valid happy-path requests par test karne se production ke edge cases aur invalid inputs par system fail ho jayega.",
      "C": "'Remove all examples that the current model already answers correctly.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Translate the entire set into a second language and discard the original.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 101,
    "title": "Professional Decision: You need to keep a Claude assistant's knowled...",
    "conceptId": "prompt-boundaries-degradation",
    "question": "You need to keep a Claude assistant's knowledge of internal policies current when policies change weekly. Which design is preferred?",
    "options": {
      "A": "Embed the full policy text into the system prompt and update the prompt every week.",
      "B": "Store policies in a versioned retrieval corpus and retrieve only the current, relevant sections at query time; keep the system prompt stable.",
      "C": "Ask the model to remember previous policy versions from conversation history.",
      "D": "Disable the assistant every time a policy changes until a full retrain can be performed."
    },
    "correctAnswer": "B",
    "explanation": "Retrieval of versioned policy sections keeps the prompt stable and the knowledge current without weekly prompt rewrites or reliance on conversation memory.",
    "whyCorrect": "Retrieval of versioned policy sections keeps the prompt stable and the knowledge current without weekly prompt rewrites or reliance on conversation memory. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Embed the full policy text into the system prompt and update the prompt every...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Ask the model to remember previous policy versions from conversation history.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Disable the assistant every time a policy changes until a full retrain can be...' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Prompt Boundaries Degradation questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 102,
    "title": "Professional Decision: A stakeholder insists that \"Claude should nev...",
    "conceptId": "prompt-boundaries-degradation",
    "question": "A stakeholder insists that \"Claude should never say I don't know.\" How should you respond?",
    "options": {
      "A": "Add a system-prompt instruction that forbids any expression of uncertainty.",
      "B": "Explain that forced answers on out-of-scope or under-specified questions increase hallucination risk; recommend calibrated uncertainty language and escalation paths instead.",
      "C": "Raise temperature so the model invents more confident-sounding answers.",
      "D": "Accept the request without discussion."
    },
    "correctAnswer": "B",
    "explanation": "Forbidding uncertainty forces the model to invent; responsible design surfaces uncertainty and provides escalation rather than suppressing it.",
    "whyCorrect": "Forbidding uncertainty forces the model to invent; responsible design surfaces uncertainty and provides escalation rather than suppressing it. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Add a system-prompt instruction that forbids any expression of uncertainty.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Raise temperature so the model invents more confident-sounding answers.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Accept the request without discussion.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Prompt Boundaries Degradation questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 103,
    "title": "Professional Decision: You are comparing two Claude configurations f...",
    "conceptId": "evaluation-metrics-qa",
    "question": "You are comparing two Claude configurations for a document-classification task. Configuration A uses a single large prompt with all 40 labels. Configuration B uses a two-stage cascade: first coarse category, then fine label within that category. Under what condition is B preferable?",
    "options": {
      "A": "Always, because cascades are always more accurate.",
      "B": "When the label space is large and hierarchical, and the coarse stage can be made highly accurate, reducing error propagation and token cost for the fine stage.",
      "C": "Never, because single-stage prompts are always simpler.",
      "D": "Only when the model is the smallest available tier."
    },
    "correctAnswer": "B",
    "explanation": "Cascades help when the label space is large and hierarchical and the first stage is reliable; otherwise the extra hop adds latency and error risk.",
    "whyCorrect": "Cascades help when the label space is large and hierarchical and the first stage is reliable; otherwise the extra hop adds latency and error risk. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Always' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Never' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Only when the model is the smallest available tier.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 104,
    "title": "Professional Decision: A production Claude service must meet a 99.9 ...",
    "conceptId": "latency-cost-slos",
    "question": "A production Claude service must meet a 99.9 percent availability SLO. Which two practices support that target? (Select two.)",
    "options": {
      "A": "Implement health checks, circuit breakers, and automatic failover to a secondary region or degraded mode.",
      "B": "Rely solely on the model provider's uptime and do no additional resilience work.",
      "C": "Maintain a tested rollback and a warm standby configuration that can be activated within the error budget.",
      "D": "Disable all monitoring to reduce load.",
      "E": "Restart the service every hour whether or not it is healthy."
    },
    "correctAnswer": "A and C",
    "explanation": "High availability requires proactive health checks, failover, and a fast, tested recovery path. Relying only on the provider or disabling monitoring leaves the SLO unprotected.",
    "whyCorrect": "High availability requires proactive health checks, failover, and a fast, tested recovery path. Relying only on the provider or disabling monitoring leaves the SLO unprotected. Isiliye correct answer A and C hai.",
    "wrongOptions": {
      "B": "'Rely solely on the model provider's uptime and do no additional resilience work.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Disable all monitoring to reduce load.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Restart the service every hour whether or not it is healthy.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 105,
    "title": "Professional Decision: You are asked to estimate the monthly token c...",
    "conceptId": "latency-cost-slos",
    "question": "You are asked to estimate the monthly token cost of a new Claude workload before it is built. Which inputs are required for a credible estimate?",
    "options": {
      "A": "The marketing budget allocated to the project.",
      "B": "Expected request volume, average input and output tokens per request, model tier pricing, and any caching or batching factors.",
      "C": "The number of engineers on the team.",
      "D": "The color of the product UI."
    },
    "correctAnswer": "B",
    "explanation": "Token cost is a function of volume, tokens per call, price per token, and efficiency factors such as caching; those are the necessary inputs.",
    "whyCorrect": "Token cost is a function of volume, tokens per call, price per token, and efficiency factors such as caching; those are the necessary inputs. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'The marketing budget allocated to the project.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'The number of engineers on the team.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The color of the product UI.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Latency Cost Slos questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 106,
    "title": "Professional Decision: A Claude assistant must refuse any request th...",
    "conceptId": "guardrails-security-compliance",
    "question": "A Claude assistant must refuse any request that asks for medical diagnosis. Which implementation is most robust?",
    "options": {
      "A": "A single system-prompt sentence: \"Do not give medical advice.\"",
      "B": "Explicit out-of-scope categories in the system prompt with fixed refusal language, plus an output classifier that blocks diagnostic language, plus logging of refused requests for review.",
      "C": "Raising temperature so answers become more vague.",
      "D": "Relying on the model's pre-training to avoid medical topics."
    },
    "correctAnswer": "B",
    "explanation": "Layered controls (prompt refusal + output classifier + logging) provide defense-in-depth that a single instruction cannot match.",
    "whyCorrect": "Layered controls (prompt refusal + output classifier + logging) provide defense-in-depth that a single instruction cannot match. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'A single system-prompt sentence: \"Do not give medical advice.\"' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Raising temperature so answers become more vague.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Relying on the model's pre-training to avoid medical topics.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 107,
    "title": "Professional Decision: You are reviewing a proposed ADR that records...",
    "conceptId": "governance-fluency",
    "question": "You are reviewing a proposed ADR that records only the final decision and the date. What is missing?",
    "options": {
      "A": "Nothing; decision and date are sufficient.",
      "B": "Context, alternatives considered, trade-offs accepted, and the decision makers.",
      "C": "A list of every meeting that was held during the project.",
      "D": "The full source code of the implementation."
    },
    "correctAnswer": "B",
    "explanation": "A useful ADR captures why the decision was made, what else was considered, and who accepted the trade-offs, so future teams can understand and revisit it intelligently.",
    "whyCorrect": "A useful ADR captures why the decision was made, what else was considered, and who accepted the trade-offs, so future teams can understand and revisit it intelligently. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Nothing' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'A list of every meeting that was held during the project.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The full source code of the implementation.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Governance Fluency questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 108,
    "title": "Professional Decision: A Claude pipeline processes highly confidenti...",
    "conceptId": "guardrails-security-compliance",
    "question": "A Claude pipeline processes highly confidential HR data. Which logging practice is required?",
    "options": {
      "A": "Log full prompts and responses in clear text for debugging convenience.",
      "B": "Redact or tokenize sensitive fields before any log is written, and restrict log access to authorized roles under the same RBAC regime as the primary data.",
      "C": "Disable all logging to eliminate leakage risk.",
      "D": "Send logs to a public analytics service for richer dashboards."
    },
    "correctAnswer": "B",
    "explanation": "Confidential data in logs must be redacted or tokenized and access-controlled; clear-text logging or public export creates a secondary data store of regulated information.",
    "whyCorrect": "Confidential data in logs must be redacted or tokenized and access-controlled; clear-text logging or public export creates a secondary data store of regulated information. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Log full prompts and responses in clear text for debugging convenience.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Disable all logging to eliminate leakage risk.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Send logs to a public analytics service for richer dashboards.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Guardrails Security Compliance questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 109,
    "title": "Professional Decision: You need to decide whether to keep a rarely-u...",
    "conceptId": "enterprise-tooling-mcp",
    "question": "You need to decide whether to keep a rarely-used tool in a Claude agent's tool set. Which criterion should govern the decision?",
    "options": {
      "A": "Keep every tool that has ever been requested, regardless of frequency.",
      "B": "Remove tools that are not required for the agent's defined tasks and that have not been invoked in a representative traffic window, unless a clear near-term need is documented.",
      "C": "Keep tools only if they were written by the original agent author.",
      "D": "Always prefer more tools because \"more capability is better.\""
    },
    "correctAnswer": "B",
    "explanation": "Least privilege and tool-set hygiene remove unused surface area while retaining tools that map to defined tasks or have a documented near-term need.",
    "whyCorrect": "Least privilege and tool-set hygiene remove unused surface area while retaining tools that map to defined tasks or have a documented near-term need. Isiliye correct answer B hai.",
    "wrongOptions": {
      "A": "'Keep every tool that has ever been requested' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "C": "'Keep tools only if they were written by the original agent author.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'Always prefer more tools because \"more capability is better.\"' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Enterprise Tooling Mcp questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  },
  {
    "num": 110,
    "title": "Professional Decision: A Claude evaluation shows 95 percent accuracy...",
    "conceptId": "evaluation-metrics-qa",
    "question": "A Claude evaluation shows 95 percent accuracy on the test set but production users report frequent wrong answers. Which two explanations should you investigate first? (Select two.)",
    "options": {
      "A": "The test set distribution does not match production query distribution.",
      "B": "The model temperature is set too low.",
      "C": "Label noise or leakage in the test set inflated the reported accuracy.",
      "D": "The system prompt is too long.",
      "E": "Users are intentionally trying to break the system."
    },
    "correctAnswer": "A and C",
    "explanation": "Mismatch between test and production distributions, or contaminated/leaky labels, are the most common reasons a high offline score fails to translate to production. THANK YOUBest wishes for your exam. You have put in the effort. Stay focused, trust your preparation, and take the next step with confidence. Review key topics Stay calm and focused Believe in your progress Practice • Learn • Succeed",
    "whyCorrect": "Mismatch between test and production distributions, or contaminated/leaky labels, are the most common reasons a high offline score fails to translate to production. THANK YOUBest wishes for your exam. You have put in the effort. Stay focused, trust your preparation, and take the next step with confidence. Review key topics Stay calm and focused Believe in your progress Practice • Learn • Succeed Isiliye correct answer A and C hai.",
    "wrongOptions": {
      "B": "'The model temperature is set too low.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "D": "'The system prompt is too long.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti.",
      "E": "'Users are intentionally trying to break the system.' yeh approach is scenario ke core constraints aur official Anthropic best practice ko satisfy nahi karti."
    },
    "examTip": "Exam Tip: Evaluation Metrics Qa questions mein hamesha centralized coordinator control, defense-in-depth, aur explicit human oversight ko prioritize karein."
  }
];
