import assert from 'node:assert/strict';
import { EXAMS_REGISTRY } from '../src/data/examRegistry.js';

const failures = [];
let totalQuestions = 0;

for (const exam of EXAMS_REGISTRY) {
  const label = exam.shortCode;
  const concepts = new Set(exam.concepts.map((concept) => concept.id));
  const seenNumbers = new Set();

  if (!Array.isArray(exam.questions) || exam.questions.length === 0) {
    failures.push(`[${label}] Question bank is empty or missing.`);
    continue;
  }

  if (exam.totalQuestions !== exam.questions.length) {
    failures.push(`[${label}] totalQuestions (${exam.totalQuestions}) does not match data length (${exam.questions.length}).`);
  }

  for (const question of exam.questions) {
    const prefix = `[${label} Q${question.num ?? '?'}]`;

    if (!Number.isInteger(question.num) || question.num < 1) {
      failures.push(`${prefix} Question number must be a positive integer.`);
    } else if (seenNumbers.has(question.num)) {
      failures.push(`${prefix} Duplicate question number.`);
    } else {
      seenNumbers.add(question.num);
    }

    if (typeof question.question !== 'string' || !question.question.trim()) {
      failures.push(`${prefix} Missing question text.`);
    }

    if (!question.options || typeof question.options !== 'object' || Array.isArray(question.options)) {
      failures.push(`${prefix} Options must be an object.`);
      continue;
    }

    const optionLabels = Object.keys(question.options);
    if (optionLabels.length < 2) {
      failures.push(`${prefix} At least two options are required.`);
    }

    for (const [letter, optionText] of Object.entries(question.options)) {
      if (!/^[A-Z]$/.test(letter)) failures.push(`${prefix} Invalid option label "${letter}".`);
      if (typeof optionText !== 'string' || !optionText.trim()) failures.push(`${prefix} Option ${letter} has no text.`);
    }

    const answerLabels = typeof question.correctAnswer === 'string'
      ? [...new Set(question.correctAnswer.match(/[A-Z]/g) || [])]
      : [];

    if (answerLabels.length === 0) {
      failures.push(`${prefix} Missing or unreadable correctAnswer.`);
    } else {
      for (const answer of answerLabels) {
        if (!Object.hasOwn(question.options, answer)) {
          failures.push(`${prefix} Answer key "${answer}" is not present in options.`);
        }
      }
      if (answerLabels.length > 1 && question.isMulti !== true) {
        failures.push(`${prefix} Multiple answer labels exist but isMulti is not true.`);
      }
    }

    if (typeof question.explanation !== 'string' || !question.explanation.trim()) {
      failures.push(`${prefix} Missing explanation.`);
    }

    if (!question.conceptId || !concepts.has(question.conceptId)) {
      failures.push(`${prefix} conceptId "${question.conceptId ?? ''}" does not match a registered concept.`);
    }
  }

  totalQuestions += exam.questions.length;
}

if (failures.length > 0) {
  console.error(`Content validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Content validation passed: ${EXAMS_REGISTRY.length} tracks, ${totalQuestions} questions.`);
}

assert.ok(EXAMS_REGISTRY.length > 0, 'At least one exam track must be registered.');
