# Claude Certification Prep Hub

A community-built study platform for practicing Claude-related certification concepts through guided lessons, question banks, and timed self-assessments.

> **Important:** This is an independent learning resource, not an official Anthropic product. The practice questions and explanations are not represented as official exam questions. Verify exam objectives, certification names, policies, and current product behavior against the relevant official documentation before relying on them.

## Learning tracks

| Track | Question bank size | Focus |
| --- | ---: | --- |
| **CCAO-F** | 110 | Foundations, prompt clarity, context, privacy, verification, evaluation, and human oversight |
| **CCA-F** | 85 | Architecture concepts, model selection, latency, cost, and system design |
| **CCA-P** | 110 | Tool use, orchestration, retrieval, security, and guardrails |

Question counts describe the current repository data, not the number of questions on an official exam. The practice material may contain errors or outdated details; report suspected issues rather than treating the answer key as authoritative.

## Features

- **Study Mode:** topic-led explanations, Hinglish support, analogies, examples, and option-by-option review.
- **Timed practice:** a configurable question set, countdown, answer navigation, review flags, and a diagnostic result.
- **Question Bank:** browse and search the available practice questions; self-test and bookmark support.
- **Local progress:** supported study and in-progress exam state is stored in the browser's local storage. It is device/browser-specific and can be lost when site data is cleared. Do not use shared devices for private study notes.

## Tech stack

- React 19 and Vite
- Vanilla CSS
- Lucide React icons
- Browser local storage for local progress

## Run locally

Requirements: a supported current version of Node.js and npm.

```bash
git clone https://github.com/suneelkumarr/claude-certification.git
cd claude-certification
npm ci
npm run dev
```

Vite prints the local URL in the terminal (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Quality checks

Before submitting a change:

1. Run `npm ci` and `npm run build`.
2. Verify the changed flow in a browser at desktop and mobile widths.
3. For question data, check answer keys, question IDs, option labels, concept references, and explanations against the cited source.
4. For exam-mode changes, test single-select and multi-select answers, navigation, mark-for-review, clearing an answer, submit confirmation, timer expiry, refresh/recovery, and scoring.
5. Do not describe practice questions as official or imply that a mock score guarantees certification success.

See [Content Quality Policy](docs/CONTENT_QUALITY.md) for the review standard.

## Reporting an issue

When reporting a content or behavior issue, include the track, question number or screen, expected behavior, actual behavior, and a source link or reproducible steps. Do not include personal, confidential, or exam-account information.

## License

This project is released under the MIT License; see [LICENSE](LICENSE). The license applies to this repository's original code and does not grant rights to third-party marks or source materials included in the project.
