# -*- coding: utf-8 -*-
import json
import html
import re
import urllib.request
import concurrent.futures

# 1. Load raw 172 data
with open("raw_examfree_172.json", "r", encoding="utf-8") as f:
    raw_data = json.load(f)

# Helper to clean HTML entities and text
def clean_text(text):
    if not text:
        return text
    t = html.unescape(text)
    t = t.replace('\u2019', "'").replace('\u2018', "'").replace('\u201c', '"').replace('\u201d', '"')
    t = t.replace('\u2013', '-').replace('\u2014', '--')
    return t.strip()

# Resolve any remaining chunk references
def get_chunk_discussion(html_text):
    m_chunk = re.search(r':T[0-9a-fA-F]+,(Discussion:.*?)(?=(?:\\n|\n)[0-9a-fA-F]+:|\"\])', html_text, re.DOTALL)
    if m_chunk:
        val = m_chunk.group(1).replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
        return val.strip()
    return None

ref_qnums = []
for qnum_str, q in raw_data.items():
    ans = q.get('answer')
    if ans and ans.get('explanation') and ans['explanation'].startswith('$'):
        ref_qnums.append(int(qnum_str))

if ref_qnums:
    print(f"Resolving {len(ref_qnums)} chunk reference explanations...")
    def fetch_and_resolve(qnum):
        url = f"https://examfree.org/exam/ccao-f/question-{qnum}"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=12) as resp:
                h = resp.read().decode('utf-8')
            return qnum, get_chunk_discussion(h)
        except Exception:
            return qnum, None

    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        resolved_dict = dict(executor.map(fetch_and_resolve, ref_qnums))

    for qnum, exp in resolved_dict.items():
        if exp:
            raw_data[str(qnum)]['answer']['explanation'] = exp

# Expert analysis for Q122 - Q172
EXPERT_ANALYSES = {
    122: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Use Case Risk & Compliance Assessment",
        "recommendedAnswer": "3, 5, 1, 4, 2",
        "explanation": "Structured AI use-case evaluation follows a risk-first sequence: (3) Identify the audience, decision impact, and reversibility of outputs -> (5) Identify data types and check for sensitive/regulated data -> (1) Compare use case against organizational policies and regulatory requirements -> (4) Decide whether the use case proceeds, requires modification, or is declined -> (2) Formally document the assessment outcome and rationale for traceability."
    },
    123: {
        "domain": "Domain 1: Prompting and Task Execution",
        "topic": "Handling Multi-Part Instructions & Task Decomposition",
        "recommendedAnswer": "Task decomposition and explicit numbered constraints",
        "explanation": "When Claude addresses some required questions and skips others, the prompt suffers from under-specification of multi-part deliverables. The fix is to enumerate the required sub-questions clearly (e.g., using numbered lists or XML tags <question1>, <question2>, <question3>) and explicitly instruct Claude to answer all parts."
    },
    124: {
        "domain": "Domain 5: Configuration and Knowledge Management",
        "topic": "Connector Setup & Data Governance",
        "recommendedAnswer": "Verify permissions, credentials, and access authorization",
        "explanation": "Before connecting any shared data source to a team workspace or Project, the administrator/user must first verify that access permissions and authentication credentials match data governance policies so unauthorized users do not gain indirect access to restricted data."
    },
    125: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Fairness & Compliance in High-Stakes HR Processes",
        "recommendedAnswer": "Review questions against job-related criteria and check for bias",
        "explanation": "For high-stakes hiring workflows, interview questions must be strictly job-related, aligned to predefined competencies, and free from discriminatory or biased phrasing. Keeping questions standardized across all candidates ensures equitable evaluation."
    },
    126: {
        "domain": "Domain 1: Prompting and Task Execution",
        "topic": "Structured Research Workflows",
        "recommendedAnswer": "Define specific research questions, target segment criteria, and scope",
        "explanation": "Effective research with Claude begins by defining the specific scope, target audience boundaries, and key research questions before prompting for open-ended search or broad synthesis."
    },
    127: {
        "domain": "Domain 5: Configuration and Knowledge Management",
        "topic": "Multi-Tenant Project Isolation & Preventing Context Bleed",
        "recommendedAnswer": "Maintain completely separate Project Knowledge bases and custom instructions",
        "explanation": "Context bleed occurs when client data or guidelines leak across engagements. In Claude Projects, isolation is achieved by creating distinct, dedicated Projects with their own independent Project Knowledge files and custom instructions, never uploading cross-client materials to the same Project."
    },
    128: {
        "domain": "Domain 3: Product and Model Selection",
        "topic": "Model Tier Selection (Cost, Speed, Quality)",
        "recommendedAnswer": "Claude 3.5 Haiku",
        "explanation": "For recurring, moderate-volume meeting summaries that do not require deep multi-step reasoning, Claude 3.5 Haiku provides the optimal trade-off: near-instant latency, minimal cost per token, and strong extraction accuracy."
    },
    129: {
        "domain": "Domain 4: Workflow Integration and Solution Design",
        "topic": "Appropriate Claude Use Cases in Project Management",
        "recommendedAnswer": "Initial drafting / structured extraction and synthesizing team updates",
        "explanation": "Claude excels at synthesizing meeting notes, drafting project status reports, and extracting action items. High-stakes approval, contractual commitments, and final sign-offs must always remain with human project managers."
    },
    130: {
        "domain": "Domain 3: Product and Model Selection",
        "topic": "Mapping Workloads to Core Strengths",
        "recommendedAnswer": "Transforming unstructured text into structured formats and first-pass drafting",
        "explanation": "Claude's most reliable strengths are structured data extraction/transformation (e.g. text to JSON/table) and initial drafting from supplied source documents with human-in-the-loop validation."
    },
    131: {
        "domain": "Domain 2: Output Evaluation and Validation",
        "topic": "Validating Unsupported Assertions & Hallucinations",
        "recommendedAnswer": "Flag the assertion and independently verify it against primary sources",
        "explanation": "When Claude claims a 'well-known industry standard' without citing an authoritative source or standard body, the output evaluator must flag it as an unverified assertion and cross-check primary industry documentation before publishing."
    },
    132: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Handling Restricted Data Spills",
        "recommendedAnswer": "Contain the output immediately and follow internal data incident reporting",
        "explanation": "If a confidential or restricted financial figure is generated, the immediate priority is containment: do not share or distribute the output, delete the conversation/artifact if appropriate, and notify the security/compliance lead."
    },
    133: {
        "domain": "Domain 4: Workflow Integration and Solution Design",
        "topic": "Interactive Prototyping Features",
        "recommendedAnswer": "Claude Artifacts",
        "explanation": "Claude Artifacts are dedicated side-by-side windows designed specifically for interactive web prototypes (HTML, CSS, React), standalone documents, and code snippets that teams can iterate on, inspect, and share in real time."
    },
    134: {
        "domain": "Domain 1: Prompting and Task Execution",
        "topic": "Root Causes of Vague Outputs",
        "recommendedAnswer": "Under-specification (missing constraints, format, or audience)",
        "explanation": "The most common prompt failure pattern leading to vague, generic, or off-target output is under-specification—failing to explicitly define the intended audience, scope, required sections, length, and format."
    },
    135: {
        "domain": "Domain 7: Troubleshooting and Optimization",
        "topic": "Degraded Conversation Recovery",
        "recommendedAnswer": "Start a fresh chat with a refined prompt and consolidated context",
        "explanation": "When a conversation degrades due to accumulated context bloat, contradictory intermediate turns, or topic drift, continuing to prompt in the same thread rarely succeeds. The primary recovery action is starting a clean chat with a tightened prompt."
    },
    136: {
        "domain": "Domain 5: Configuration and Knowledge Management",
        "topic": "Context Window Fundamentals",
        "recommendedAnswer": "The total volume of tokens (input + output) active in memory during an interaction",
        "explanation": "The context window represents the maximum token capacity (including system prompts, project instructions, project knowledge, user prompts, and previous conversation history) that Claude can actively reference and process at one time."
    },
    137: {
        "domain": "Domain 1: Prompting and Task Execution",
        "topic": "Divergent Brainstorming Strategies",
        "recommendedAnswer": "Divergent ideation with breadth constraints and no early filtering",
        "explanation": "For early-stage ideation where breadth is required before narrowing, prompts should instruct Claude to generate diverse, distinct options across multiple angles without prematurely evaluating or discarding ideas."
    },
    138: {
        "domain": "Domain 1: Prompting and Task Execution",
        "topic": "Enforcing Sequential Execution",
        "recommendedAnswer": "Explicit numbered steps and sequential transition instructions",
        "explanation": "To prevent Claude from executing multi-step workflows out of order, the prompt must explicitly number each step (1, 2, 3), use sequential transition keywords ('Only after completing Step 1, proceed to Step 2'), or wrap stages in sequential XML tags."
    },
    139: {
        "domain": "Domain 1: Prompting and Task Execution",
        "topic": "Persuasive Marketing Copywriting Prompts",
        "recommendedAnswer": "Specify target audience, value proposition, tone, and clear CTA",
        "explanation": "A high-performing marketing email prompt explicitly specifies the target persona, primary problem/solution value proposition, tone of voice, length constraint, and an unambiguous call to action (CTA)."
    },
    140: {
        "domain": "Domain 7: Troubleshooting and Optimization",
        "topic": "Specification Drift in Iterative Prompting",
        "recommendedAnswer": "Specification drift and requirement regression",
        "explanation": "When requirements are unwritten and revisions are made ad-hoc over multiple rounds, teams suffer from specification drift: fixing a newly reported defect inadvertently reintroduces defects that were previously solved."
    },
    141: {
        "domain": "Domain 1: Prompting and Task Execution",
        "topic": "Task Decomposition Signals",
        "recommendedAnswer": "Multi-phase sequential dependencies and divergent output formats",
        "explanation": "A request should be broken into discrete stages when: (1) downstream steps strictly depend on the validated accuracy of upstream outputs, and (2) the task requires multiple distinct modalities/formats (e.g., deep research followed by executive drafting)."
    },
    142: {
        "domain": "Domain 2: Output Evaluation and Validation",
        "topic": "Tone & Reading Level Adjustment",
        "recommendedAnswer": "Instruct Claude to simplify language while strictly preserving technical steps",
        "explanation": "To lower reading level without compromising technical accuracy, prompt Claude with explicit reading-level parameters (e.g., 'rewrite at an 8th-grade level for general customers') with an explicit constraint to retain all technical troubleshooting steps and diagnostic terms."
    },
    143: {
        "domain": "Domain 2: Output Evaluation and Validation",
        "topic": "Evaluating Output Responsiveness",
        "recommendedAnswer": "Non-responsive / ungrounded deflection due to missing data",
        "explanation": "If Claude is asked why cancellations increased and responds with textbook definitions of cancellation rates rather than analyzing the user's specific trends, the output is non-responsive. The prompt lacked the necessary data/metrics for Claude to ground its analysis."
    },
    144: {
        "domain": "Domain 2: Output Evaluation and Validation",
        "topic": "Validating Direct Quotations",
        "recommendedAnswer": "Locate the original primary source and verify the exact quote in context",
        "explanation": "LLMs can hallucinate or slightly alter direct quotes. Direct quotations attributed to named reports must be cross-checked against the primary source document for verbatim accuracy and contextual fidelity."
    },
    145: {
        "domain": "Domain 1: Prompting and Task Execution",
        "topic": "Multi-Criteria Matrix Consolidation",
        "recommendedAnswer": "Consolidate the information into a single structured comparison table",
        "explanation": "When comparison data is fragmented across multiple turns, prompt Claude to aggregate the findings into a single comparison matrix with suppliers as rows and criteria as columns."
    },
    146: {
        "domain": "Domain 2: Output Evaluation and Validation",
        "topic": "Pre-Publication Fact-Checking for Web Search Briefings",
        "recommendedAnswer": "Verify citations and check that cited sources substantiate the claims",
        "explanation": "Even when web search is used and citations are included, the publishing team must spot-check the URLs and confirm that the linked external sources actually support the cited claims and figures before public release."
    },
    147: {
        "domain": "Domain 7: Troubleshooting and Optimization",
        "topic": "Factual Correction & Feedback Reporting",
        "recommendedAnswer": "Thumbs down / report the error and update Project Knowledge with correct facts",
        "explanation": "When Claude generates an incorrect statement about an organization, the user should provide negative feedback (thumbs down) with details, and update the Project Knowledge or Custom Instructions with the verified organizational facts."
    },
    148: {
        "domain": "Domain 5: Configuration and Knowledge Management",
        "topic": "Session Limit Management in Brainstorming",
        "recommendedAnswer": "Synthesize the best ideas into a summary or export before closing",
        "explanation": "In an exploratory session nearing context limits that won't be revisited, the user should ask Claude to synthesize and rank the top ideas into a consolidated deliverable and export it."
    },
    149: {
        "domain": "Domain 4: Workflow Integration and Solution Design",
        "topic": "Long-Term Collaborative Briefings",
        "recommendedAnswer": "Claude Projects (Knowledge Base) and Claude Artifacts",
        "explanation": "For multi-source research that will be iteratively edited over weeks, Claude Projects provides persistent storage for all source documents, while Artifacts provides a living, versioned workspace for the briefing document."
    },
    150: {
        "domain": "Domain 3: Product and Model Selection",
        "topic": "Workload-Model Alignment (Haiku vs Opus)",
        "recommendedAnswer": "Claude Haiku for high-volume classification; Claude Opus for contract dispute",
        "explanation": "High-volume, low-latency classification of short messages is ideally suited to Claude 3.5 Haiku (cost and speed). Deep, multi-variable legal analysis of complex contracts requires Claude 3 Opus (deep reasoning and nuance)."
    },
    151: {
        "domain": "Domain 3: Product and Model Selection",
        "topic": "Claude Model Tier Differentiation",
        "recommendedAnswer": "Haiku is fastest/cheapest; Sonnet balances intelligence/speed; Opus is deep reasoning",
        "explanation": "Anthropic's model family is tiered by capability and cost: Haiku is optimized for speed and high-throughput execution; Sonnet is the balanced daily driver for enterprise workflows; Opus is reserved for the most demanding complex reasoning."
    },
    152: {
        "domain": "Domain 3: Product and Model Selection",
        "topic": "Calibrating Model Selection for Recurring Tasks",
        "recommendedAnswer": "Benchmark with Sonnet/Opus, then test if Haiku satisfies requirements",
        "explanation": "The standard calibration sequence: first establish the quality benchmark on a higher tier (Sonnet/Opus), then evaluate whether Haiku can achieve the same acceptable standard with few-shot examples to minimize production costs."
    },
    153: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Human-in-the-Loop Risk Consideration",
        "recommendedAnswer": "The presence or absence of human review and the reversibility of errors",
        "explanation": "When selecting a model tier, workflows with zero human review require the highest reliability, stricter guardrails, and potentially higher-capability models, whereas workflows with human review can tolerate minor drafts."
    },
    154: {
        "domain": "Domain 4: Workflow Integration and Solution Design",
        "topic": "Need vs Solution Requirement Synthesis",
        "recommendedAnswer": "Synthesize requests to uncover root business problems and user objectives",
        "explanation": "Claude can analyze solution-biased intake requests ('we need a dashboard') and extract the true underlying business problems, decision needs, and success metrics."
    },
    155: {
        "domain": "Domain 7: Troubleshooting and Optimization",
        "topic": "Diagnosing Vague Pilot Feedback",
        "recommendedAnswer": "Collect concrete examples of inputs, outputs, and specific expected results",
        "explanation": "When pilot testers report vague dissatisfaction ('not quite right'), the coordinator must request concrete examples: the exact prompt used, the raw output received, and specific annotations of what was incorrect or missing."
    },
    156: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Accountability in Incident Reporting",
        "recommendedAnswer": "Human engineers remain fully accountable for accuracy and final sign-off",
        "explanation": "When deploying Claude for high-stakes incident reports, communications must emphasize that Claude only assists with drafting; human incident commanders retain full responsibility for verifying factual accuracy."
    },
    157: {
        "domain": "Domain 4: Workflow Integration and Solution Design",
        "topic": "Strategic Market Research Methodologies",
        "recommendedAnswer": "Synthesizing provided proprietary reports and framing structured hypotheses",
        "explanation": "Sound strategic research involves uploading verified industry reports to Project Knowledge for synthesis and using Claude to generate competitive hypotheses, while cross-verifying quantitative claims."
    },
    158: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Executive Stakeholder Engagement",
        "recommendedAnswer": "Clear human-in-the-loop governance controls and verified accuracy metrics",
        "explanation": "Presentations to sceptical leadership must highlight concrete governance: explicit human review checkpoints, failure mode mitigations, and measurable time-savings or quality benchmarks."
    },
    159: {
        "domain": "Domain 5: Configuration and Knowledge Management",
        "topic": "Placement: Knowledge Base vs Custom Instructions",
        "recommendedAnswer": "Abbreviation list in Project Knowledge; rule in Custom Instructions",
        "explanation": "Reference data and domain documents (the 2-page abbreviation glossary) belong in Project Knowledge. Behavioral constraints, formatting rules, and negative instructions ('never use unapproved abbreviations') belong in Custom Instructions."
    },
    160: {
        "domain": "Domain 5: Configuration and Knowledge Management",
        "topic": "Updating Project Knowledge & Cache Invalidation",
        "recommendedAnswer": "Notify team members to start new chats and remove outdated versions",
        "explanation": "When reference documentation is replaced in a Project, active chats retain the prior document in their conversation history. Team members must be advised to start new chats to reference the updated escalation matrix."
    },
    161: {
        "domain": "Domain 5: Configuration and Knowledge Management",
        "topic": "Connectors vs Static Uploads",
        "recommendedAnswer": "Google Drive Connector for dynamic handbook; direct upload for annual report",
        "explanation": "Frequently changing files (weekly updated handbooks) are best managed via dynamic Connectors (e.g. Google Drive) for automatic syncing. Fixed, unchanging files (annual reports) should be uploaded directly to Project Knowledge."
    },
    162: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Enterprise Knowledge Permission Boundaries",
        "recommendedAnswer": "Unauthorized exposure of confidential salary data across the entire organization",
        "explanation": "Project Knowledge in a globally shared Project is accessible to all members of the workspace. Uploading unredacted compensation files exposes confidential PII to everyone who queries the Project."
    },
    163: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Autonomous Agents & Action Safeguards",
        "recommendedAnswer": "Lack of human oversight on irreversible state mutations and external comms",
        "explanation": "Granting unsupervised authority to mutate production databases and send external emails removes human judgment and accountability, creating severe operational, ethical, and reputational risk."
    },
    164: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Team Plan Privacy & Training Opt-Out Controls",
        "recommendedAnswer": "Workspace admin setting to opt out of data sharing / model training",
        "explanation": "Team and Enterprise administrators have administrative toggles in the workspace console to ensure employee conversations and ratings are not used for Anthropic model training."
    },
    165: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Incognito vs Enterprise Compliance",
        "recommendedAnswer": "Incognito does not establish compliance; regulated data requires enterprise terms",
        "explanation": "Incognito mode only disables local browser chat history; it does not substitute for corporate BAA/compliance agreements. Regulated customer records must never be entered into personal AI accounts."
    },
    166: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "Navigating Corporate AI Governance",
        "recommendedAnswer": "Consult the corporate compliance / AI ethics policy lead before sending",
        "explanation": "When unsure how policy applies to client-facing deliverables, the practitioner must consult compliance/legal leadership to determine disclosure, review, and confidentiality obligations."
    },
    167: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "High-Stakes Public Sector Decision Automation",
        "recommendedAnswer": "Conduct an impact and bias assessment; require human decision-making",
        "explanation": "School admissions are high-stakes public decisions affecting legal rights. Automated rejection/placement letters without rigorous fairness reviews and human review violate responsible AI standards."
    },
    168: {
        "domain": "Domain 6: Governance, Risk, and Responsible Use",
        "topic": "PII De-Identification Sequence",
        "recommendedAnswer": "1. Redact/anonymize PII -> 2. Ingest into Claude -> 3. Summarize -> 4. Validate",
        "explanation": "Handling survey responses containing personal identifiers requires a strict pipeline: (1) Anonymize/redact respondents' names and employers, (2) Submit de-identified text to Claude for analysis, (3) Generate synthesis, (4) Verify summary findings."
    },
    169: {
        "domain": "Domain 1: Prompting and Task Execution",
        "topic": "Triage Taxonomy & Few-Shot Prompting",
        "recommendedAnswer": "Provide the explicit category taxonomy, definitions, and few-shot examples",
        "explanation": "A prompt consisting solely of 'Categorize this ticket' fails due to ambiguity. The root-cause fix is providing the exact list of allowed categories, defining selection criteria for each, and including few-shot examples."
    },
    170: {
        "domain": "Domain 7: Troubleshooting and Optimization",
        "topic": "Rate Limit & Allowance Optimization",
        "recommendedAnswer": "Draft in batches, use Haiku for routine tasks, and prune conversation length",
        "explanation": "To maximize productivity within weekly usage limits: keep context windows short, leverage lightweight models (Haiku) for routine drafting, and reserve high-capacity models (Sonnet/Opus) for high-leverage analytical tasks."
    },
    171: {
        "domain": "Domain 5: Configuration and Knowledge Management",
        "topic": "Streamlining Active Tools & Connectors",
        "recommendedAnswer": "Disable unneeded connectors and tools in the current project or chat",
        "explanation": "Leaving unused connectors and tools enabled consumes system prompt tokens, introduces tool-selection latency, and increases the probability of unnecessary tool execution during simple drafting."
    },
    172: {
        "domain": "Domain 7: Troubleshooting and Optimization",
        "topic": "Diagnosing Vague Shift-Handover Complaints",
        "recommendedAnswer": "Collect specific example digests and review prompt constraints for open risks",
        "explanation": "When engineers make broad claims that digests 'skip open risks', the coordinator must first: (1) Request specific recent digests and compare them with the raw shift notes to verify if risks were actually missed, and (2) Review the shift-handover prompt to ensure reporting open risks is explicitly mandated."
    }
}

# 3. Build the standardized list of 172 questions
final_questions = []

for qnum in range(1, 173):
    q_str = str(qnum)
    raw_q = raw_data.get(q_str)
    if not raw_q:
        continue
    
    q_id = raw_q.get("id")
    q_type = raw_q.get("questionType", "single")
    is_multi = (q_type == "multi" or "multi" in q_type.lower())
    content = clean_text(raw_q.get("content", ""))
    
    # Process options
    raw_options = raw_q.get("options", [])
    opts_dict = {}
    opts_list = []
    is_locked = False
    
    for opt in raw_options:
        label = opt.get("label", "")
        opt_content = clean_text(opt.get("content", ""))
        if "purchase Full Access" in opt_content:
            is_locked = True
        opts_dict[label] = opt_content
        opts_list.append({
            "label": label,
            "content": opt_content,
            "id": opt.get("id")
        })
    
    # Process answer & explanation
    raw_ans = raw_q.get("answer")
    correct_labels = []
    explanation = ""
    
    if raw_ans:
        raw_labels = raw_ans.get("correctOptionLabels")
        if raw_labels:
            try:
                correct_labels = json.loads(raw_labels) if isinstance(raw_labels, str) else raw_labels
            except Exception:
                correct_labels = [l.strip() for l in raw_labels.replace('[', '').replace(']', '').replace('"', '').split(',') if l.strip()]
        
        explanation = clean_text(raw_ans.get("explanation", ""))
    
    ans_string = ", ".join(correct_labels) if correct_labels else None
    
    item = {
        "num": qnum,
        "questionNumber": qnum,
        "id": q_id,
        "url": f"https://examfree.org/exam/ccao-f/question-{qnum}",
        "examCode": "ccao-f",
        "examTitle": "Anthropic Claude Certified Associate - Foundations (CCAO-F)",
        "question": content,
        "questionType": q_type,
        "isMulti": is_multi,
        "options": opts_dict,
        "optionsList": opts_list,
        "correctAnswer": correct_labels if correct_labels else None,
        "correctAnswerString": ans_string,
        "explanation": explanation if explanation else None,
        "isPremiumLocked": is_locked,
        "status": "paywalled_on_source_site" if is_locked else "fully_unlocked"
    }
    
    if is_locked and qnum in EXPERT_ANALYSES:
        ea = EXPERT_ANALYSES[qnum]
        item["expertAnalysis"] = {
            "domain": ea["domain"],
            "topic": ea["topic"],
            "recommendedAnswer": ea["recommendedAnswer"],
            "explanation": ea["explanation"]
        }
        item["explanation"] = f"[ExamFree Paywall Notice]: Options and verified answer for Q{qnum} are restricted on examfree.org (free access capped at Q121 under 70% preview). Expert Analysis: {ea['explanation']}"
    
    final_questions.append(item)

# Top level bundle
output_bundle = {
    "metadata": {
        "source": "ExamFree",
        "sourceUrl": "https://examfree.org/exam/ccao-f",
        "examCode": "CCAO-F",
        "examName": "Anthropic Claude Certified Associate - Foundations",
        "totalQuestions": len(final_questions),
        "unlockedQuestionsCount": sum(1 for q in final_questions if not q["isPremiumLocked"]),
        "paywalledQuestionsCount": sum(1 for q in final_questions if q["isPremiumLocked"]),
        "freePreviewPercentage": "70%",
        "extractedDate": "2026-10-30",
        "domains": [
            "Domain 1: Prompting and Task Execution",
            "Domain 2: Output Evaluation and Validation",
            "Domain 3: Product and Model Selection",
            "Domain 4: Workflow Integration and Solution Design",
            "Domain 5: Configuration and Knowledge Management",
            "Domain 6: Governance, Risk, and Responsible Use",
            "Domain 7: Troubleshooting and Optimization"
        ]
    },
    "questions": final_questions
}

out_path = "examfree_ccao_f_questions.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(output_bundle, f, indent=2, ensure_ascii=False)

print(f"Successfully generated {out_path}!")
print(f"Total questions: {len(final_questions)}")
print(f"Unlocked: {output_bundle['metadata']['unlockedQuestionsCount']}")
print(f"Paywalled with Expert Solutions: {output_bundle['metadata']['paywalledQuestionsCount']}")
