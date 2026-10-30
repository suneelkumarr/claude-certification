# Content Quality Policy

This policy applies to every certification track in this repository.

## 1. Be precise about provenance

- This repository is an independent study aid, not an official Anthropic certification platform.
- Label questions as practice questions unless their official publication and reuse rights have been verified.
- Record the source used to create or verify each question set. A third-party practice guide is not the same as an official exam blueprint.
- Do not copy protected exam questions or claim access to live exam content.

## 2. Review every question

For each question, a reviewer should verify:

- The question stem is understandable and includes all necessary scenario details.
- Every option is distinct and plausible.
- The answer key matches the cited source and the explanation.
- The explanation says why the correct option fits and why each distractor fails in this scenario.
- Single-select versus multi-select behavior matches the question.
- The question links to a valid concept and a stable question number.
- Ambiguous or context-dependent questions are flagged for review instead of presented as unquestionable facts.

## 3. Separate source facts from interpretation

- Preserve what the source actually says.
- Label added explanations, analogies, and inferred examples as learning aids.
- Check product features, certification names, exam rules, and model capabilities against current official documentation.
- Avoid absolute words such as “always,” “never,” and “100%” unless the cited rule genuinely supports them.
- When sources conflict or the answer key looks questionable, flag the discrepancy and document the resolution.

## 4. Validate question data

Before merging question-data changes, verify:

- Question IDs/numbers are unique within the relevant track.
- Required fields and option labels are present.
- Correct-answer labels exist among the available options.
- Multi-select questions can represent all correct answers.
- Every referenced concept exists.
- The number of questions shown in the UI matches the data actually loaded.

## 5. Manual regression checklist

For the affected track, exercise:

- Starting a new attempt and restoring an in-progress attempt after refresh.
- Single-select and multi-select questions.
- Previous/next navigation and direct question-palette navigation.
- Mark for review and clear answer.
- Submit confirmation, unanswered questions, and automatic time expiry.
- Score and topic breakdown, including a question with multiple correct options.
- Study answers, bookmarks, and question search.
- Narrow/mobile layout, keyboard use, visible focus, and readable contrast.

## 6. Release honesty

A passing production build proves that the application compiles; it does not prove answer-key correctness, accessibility conformance, or end-to-end behavior. State which checks were actually run and list remaining limitations in the pull request.
