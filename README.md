# Claude Certification Preparation Platform

> 🚀 **Enterprise React + Vite preparation platform for Anthropic Claude Certifications** (`CCAO-F`, `CCA-F`, `CCA-P`) featuring **305 authentic questions**, official blueprint topic weightings, 120-minute timed simulator, diagnostic scorecard, interactive Question Bank, and a 100% passing automated test suite.

---

## 🎯 Certifications & Official Topic Weightings

The simulator does not sample questions arbitrarily. Question distribution is governed by **official exam blueprint topic weightings** (`src/utils/examEngine.js`) to accurately mirror real exam conditions:

### 1. CCAO-F: Claude Certified Associate — Foundations (110 Qs)
*Target: 60 questions sampled per exam attempt*

| Domain / Concept | Blueprint Weight | Target Quota | Core Topics |
| :--- | :---: | :---: | :--- |
| **Prompt Clarity & Constraints** | 12% | 7 Qs | Task specification, constraints, audience, tone, boundary counts |
| **System Prompts & Role Framing** | 12% | 7 Qs | System prompts, behavioral boundaries, persona framing |
| **Hallucinations & Citations** | 10% | 6 Qs | Verification against source text, grounding, factual citations |
| **RAG & Retrieval Augmentation** | 10% | 6 Qs | Chunking strategies, semantic search, hybrid retrieval |
| **Context Windows & Needle in Haystack** | 10% | 6 Qs | Placement of instructions, 200k window nuances, attention drift |
| **Claude Models & Modalities** | 10% | 6 Qs | Model selection trade-offs (Haiku 3.5, Sonnet 3.7, Opus) |
| **Evaluation & Iterative Prompting** | 10% | 6 Qs | Golden datasets, pass/fail rubrics, downstream verification |
| **Prompt Caching & Latency** | 10% | 6 Qs | Cache breakpoints, ephemeral context reuse, TTFT reduction |
| **Temperature & Sampling Parameters** | 8% | 5 Qs | Determinism vs creativity, top-p, temperature calibrations |
| **Structured Outputs & XML Protocol** | 8% | 5 Qs | Schema enforcement, `<tags>`, JSON mode, XML parsing |
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
| **Defense-in-Depth Guardrails & Safety Architecture** | 18% | 11 Qs | Input sanitization, jailbreak mitigation, output red-teaming |
| **Contextual Retrieval & Multi-Tenant RAG** | 18% | 11 Qs | Chunk enrichment, tenant isolation, vector search metadata |
| **AI Fluency, Governance & Stakeholder Alignment** | 15% | 9 Qs | Calibrated capabilities, limitations disclosure, human oversight |
| **Production Evaluation Pipelines & Golden Sets** | 15% | 9 Qs | Automated grading, LLM-as-a-judge, regression benchmarks |
| **System Prompts, Prefill & Structured XML** | 12% | 7 Qs | Strict output schema prefill, role boundary separation |
| **Tool Use Governance & Sandboxing** | 12% | 7 Qs | Least-privilege permissions, human-in-the-loop approvals |
| **Claude Code, CLI Workflows & DevEx** | 10% | 6 Qs | Interactive CLI workflows, test synthesis, code execution |
| **Total** | **100%** | **60 Qs** | *100% Blueprint Representation* |

---

## ⚙️ Question Sampling & Fallback Engine (`src/utils/examEngine.js`)

When generating a 60-question simulator exam:
1. **Weighted Allocation**: Quotas are calculated proportionally using `calculateConceptQuotas()`.
2. **Deficit Handling & Graceful Fallback**: If a topic pool has fewer questions than its weight quota (or 0 questions in edge test scenarios), all available questions are taken and the remaining deficit is proportionally satisfied from the remaining unselected questions across other topics.
3. **Zero Duplicates Guarantee**: Unique IDs and numbers are tracked in a hash set to ensure strictly zero duplicate questions across the entire exam.
4. **Final Domain Shuffle**: Questions are shuffled via Fisher-Yates algorithm so questions from the same domain are not presented in consecutive blocks.

---

## 🧪 Automated Testing Suite (`tests/examEngine.test.js`)

The test suite is built on **Vitest** and covers 23 comprehensive unit and integration tests across 7 critical exam workflows:

```bash
npm test
```

### Verified Test Matrix
- ✅ **Topic Quota Calculation**: Validates exact quota distribution matching blueprint percentages summing to 60.
- ✅ **Empty Topic Pools & Small Pool Fallback**: Asserts fallback logic handles empty pools without crashing and satisfies deficits cleanly.
- ✅ **Zero Duplicate Prevention**: Runs 100 randomized sampling iterations verifying 100% uniqueness.
- ✅ **Single-Select & Multiple-Select Answers**: Validates option toggles, selections, and array normalization.
- ✅ **Unanswered & Skipped Questions**: Confirms unanswered questions are accurately counted and do not throw runtime exceptions.
- ✅ **Passing Threshold & Score Calculation**: Asserts score calculation, strict 70% boundary conditions, and diagnostic per-topic performance.
- ✅ **Question Palette Navigation**: Asserts navigation boundary protection (prevents indices < 0 or > max).
- ✅ **Timer Expiration**: Tests auto-submit triggers when countdown reaches zero.

---

## 📦 Content Provenance & Non-Dogmatic Rationale

- **Source Materials**: All 305 questions and initial answer keys are extracted directly from official Anthropic preparation guide PDFs (`ccao-f-premium.pdf`, `cca-f-premium.pdf`, `cca-p-premium.pdf`).
- **Context-Grounded Explanations**: Avoids dogmatic shortcuts ("hamesha yahi use karo"). Each question contains scenario-specific trade-offs explaining:
  - Deterministic calculations vs. LLM linguistic text generation (Code Execution).
  - Ideation breadth vs. premature decision convergence.
  - Multi-agent state isolation vs. tight coupling.
  - Latency vs. precision trade-offs in subagent concurrency.
  - Option-by-option failure table (`wrongOptions`) detailing why incorrect distractors fail in enterprise architectures.

---

## 💻 Tech Stack & Production Architecture

- **Framework**: React 18, Vite 6
- **Testing**: Vitest 5
- **Icons**: Lucide React
- **Confetti**: Canvas Confetti
- **Design System**: Vanilla CSS (`src/index.css`) with Cosmic Dark Glassmorphism, 44px accessible touch targets, and WCAG AA/AAA compliance.
- **Production Asset Pipeline**:
  - Active source code is exclusively housed under [`src/`](file:///d:/claude-cerifications/src).
  - Legacy prototype files (`app.js`, `quiz.js`, `style.css`, etc.) created during early development are preserved in [`legacy-prototype/`](file:///d:/claude-cerifications/legacy-prototype) for historical traceability and are excluded from production builds.

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

# Start local development server
npm run dev
```

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🌐 Supported Browsers

The application is thoroughly tested and optimized for modern standards-compliant browsers:
- **Google Chrome**: Version 110+ (Desktop & Android)
- **Mozilla Firefox**: Version 115+
- **Apple Safari**: Version 16.4+ (macOS & iOS)
- **Microsoft Edge**: Version 110+

---

## ⚠️ Known Notes & Limitations

1. **Cloudflare Pages Production URL**:
   - Production domain: **[https://claude-certification.pages.dev](https://claude-certification.pages.dev)**
   - *Note*: Deployment hash subdomains (e.g., `f101e720.claude-certification.pages.dev`) create two-level subdomains (`*.*.pages.dev`), which trigger `ERR_SSL_VERSION_OR_CIPHER_MISMATCH` because standard Cloudflare wildcard SSL certificates secure single-level subdomains. Always use the primary apex `claude-certification.pages.dev`.
2. **Session Persistence**:
   - Active exams persist in `localStorage` under `active_exam_session_<examId>`. If you accidentally close your tab or refresh, your timer and answered questions are automatically restored.
   - Submitting an exam or clicking reset cleans up the local session storage.

---

## 📄 License
MIT License. Created for Anthropic Claude Certification preparation.
