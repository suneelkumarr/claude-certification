# Claude Certification Preparation Platform

> 🚀 **Enterprise React + Vite preparation platform for Anthropic Claude Certifications** (`CCAO-F`, `CCA-F`, `CCA-P`) featuring **376 authentic questions**, official blueprint topic weightings, 120-minute timed simulator, diagnostic scorecard, interactive Question Bank, and a 100% passing automated test suite.

> **Important:** This is an independent learning resource, not an official Anthropic product. The practice questions and explanations are created for educational self-assessment. Verify current exam objectives, certification names, policies, and product behavior against official Anthropic documentation.

---

## 🎯 Certifications & Blueprint Topic Weightings

Question distribution in the exam simulator is governed by **certification blueprint topic weightings** (`src/utils/examEngine.js`) to accurately mirror real exam conditions:

### 1. CCAO-F: Claude Certified Associate — Foundations (181 Qs)
*Target: 60 questions sampled per exam attempt*

| Domain / Concept | Blueprint Weight | Target Quota | Core Topics |
| :--- | :---: | :---: | :--- |
| **Prompt Clarity & Constraints** | 12% | 7 Qs | Task specification, constraints, audience, tone, boundary counts |
| **Project Configuration & Maintenance** | 12% | 7 Qs | Custom instructions, project knowledge, connectors, memory |
| **Context Windows & Models** | 10% | 6 Qs | Token budget, model tiers (Opus vs Sonnet vs Haiku), latency vs cost |
| **Data Privacy & Redaction** | 10% | 6 Qs | PII, confidential data, redaction, opt-out, data retention |
| **Primary-Source Verification & Hallucinations** | 10% | 6 Qs | Grounding, source document cross-check, citations, fact-checking |
| **Iteration, Feedback & Diminishing Returns** | 10% | 6 Qs | Prompt refinement, 8+ rounds of diminishing returns, regression |
| **Workflow Decomposition & Formatting** | 10% | 6 Qs | Task decomposition, dependency ordering, intermediate structured formats |
| **Human Oversight, Ethical Risks & AI Fluency** | 10% | 6 Qs | AI Fluency Framework, high-stakes decisions, human-in-the-loop |
| **Code Execution for Exact Calculations** | 8% | 5 Qs | Deterministic arithmetic, Python analysis sandbox, spreadsheets |
| **Recovering Degraded Conversations** | 8% | 5 Qs | Context drift, session recovery, fresh focused chat transitions |
| **Total** | **100%** | **60 Qs** | *100% Blueprint Representation* |

---

### 2. CCA-F: Claude Certified Architect — Foundations (85 Qs)
*Target: 60 questions sampled per exam attempt*

| Domain / Concept | Blueprint Weight | Target Quota | Core Topics |
| :--- | :---: | :---: | :--- |
| **Multi-Agent Orchestration & Coordinators** | 22% | 13 Qs | Central coordinator pattern, explicit prompt context passing |
| **Parallel Execution & Tool Concurrency** | 18% | 11 Qs | Async tool execution, parallel latency reduction |
| **Pipeline Crash Recovery & Resilient Processing** | 18% | 11 Qs | State recovery, exponential backoff, circuit breaking |
| **Temporal Synthesis & Conflict Resolution** | 14% | 8 Qs | Resolving conflicting subagent findings, temporal ordering |
| **Dynamic Routing & Specialized Subagents** | 14% | 8 Qs | Intent classification, specialized domain routing |
| **Token Optimization & Context Management** | 14% | 9 Qs | Rolling window pruning, context compression, cache boundaries |
| **Total** | **100%** | **60 Qs** | *100% Blueprint Representation* |

---

### 3. CCA-P: Claude Certified Architect — Professional (110 Qs)
*Target: 60 questions sampled per exam attempt*

| Domain / Concept | Blueprint Weight | Target Quota | Core Topics |
| :--- | :---: | :---: | :--- |
| **Enterprise AI Governance & Compliance** | 15% | 9 Qs | Audit logging, access control, regulatory compliance |
| **Defense-in-Depth Guardrails & Security** | 18% | 11 Qs | Prompt injection defense, secret redacting, safety classifiers |
| **Contextual RAG & Multi-Tenant Retrieval** | 18% | 11 Qs | Tenant isolation, vector filtering, hybrid re-ranking |
| **Evaluation Pipelines & LLM-as-a-Judge** | 15% | 9 Qs | Automated benchmarks, rubric grading, regression suites |
| **System Prompts & Assistant Prefilling** | 12% | 7 Qs | Enforcing prefixes, prefill steering, boundary protection |
| **Tool Governance & MCP Architecture** | 12% | 7 Qs | Tool permissions, sandboxed execution, MCP lifecycle |
| **Claude Code & Enterprise DevEx** | 10% | 6 Qs | CLI workflows, repository indexing, safe tool permissions |
| **Total** | **100%** | **60 Qs** | *100% Blueprint Representation* |

---

## 🛠️ Platform Features

- **Study Mode**: Topic-led explanations, Hinglish support, analogies, examples, and option-by-option failure breakdowns.
- **Timed Practice Simulator**: 120-minute countdown with persistent absolute deadlines across tab switches and refreshes, question palette navigation, review flags, and instant pass/fail diagnostic scorecards.
- **Question Bank**: Instant full-text search across all questions, filterable by track and concept, with expandable answer keys and detailed reasoning.
- **Automated Validation**: Automated Vitest test suite and question bank integrity validator.

---

## 🧪 Automated Testing & Validation

The codebase includes an automated test suite verifying exam engine logic and data integrity:

```bash
# Run Vitest unit & integration test suite
npm test

# Run question bank content validation
npm run test:content
```

### Coverage Highlights:
- ✅ **Weighted Sampling Engine**: Guarantees sampling matches topic weights without missing concepts.
- ✅ **Deterministic Scoring**: Strict 70% passing threshold, multi-select grading, and per-topic diagnostic breakdown.
- ✅ **Navigation & Boundaries**: Boundary checks preventing invalid index access.
- ✅ **Deadline & Timer Persistence**: Preserves active time across tab switches and refreshes.

---

## 📦 Content Provenance & Non-Dogmatic Rationale

- **Source Materials**: Practice questions are organized from certification preparation materials (`ccao-f-premium.pdf`, `cca-f-premium.pdf`, `cca-p-premium.pdf`, and online question banks).
- **Context-Grounded Explanations**: Avoids dogmatic shortcuts. Each question explains scenario-specific trade-offs:
  - Deterministic calculations vs. LLM linguistic text generation (Code Execution).
  - Ideation breadth vs. premature decision convergence.
  - Multi-agent state isolation vs. tight coupling.
  - Latency vs. precision trade-offs in subagent concurrency.
  - Option-by-option failure table (`wrongOptions`) detailing why incorrect distractors fail in enterprise architectures.

---

## 💻 Tech Stack & Production Architecture

- **Framework**: React 19, Vite 6
- **Testing**: Vitest 5
- **Icons**: Lucide React
- **Confetti**: Canvas Confetti
- **Design System**: Vanilla CSS (`src/index.css`) with Cosmic Dark Glassmorphism, 44px accessible touch targets, and WCAG AA/AAA compliance.
- **Production Asset Pipeline**:
  - Active source code is exclusively housed under [`src/`](file:///d:/claude-cerifications/src).
  - Legacy prototype files are preserved in [`legacy-prototype/`](file:///d:/claude-cerifications/legacy-prototype) for historical reference and excluded from production builds.

---

## 🚀 Local Development & Deployment

### 1. Prerequisites
- Node.js 18+ or 20+
- npm 9+

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/suneelkumarr/claude-certification.git
cd claude-certification

# Install dependencies
npm install

# Run automated tests
npm test

# Validate content integrity
npm run test:content

# Start local development server
npm run dev
```

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🔍 Quality Checks

Before submitting changes:
1. Run `npm test` and `npm run test:content`.
2. Run `npm run build` to verify production bundling.
3. Test exam mode with single-select and multi-select answers, mark-for-review, timer persistence, and score calculation.
4. Review against the [Content Quality Policy](docs/CONTENT_QUALITY.md).

---

## 📄 License

This project is released under the [MIT License](LICENSE).
