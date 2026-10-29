// Exam Registry: Central configuration for multi-track practice
import { CONCEPTS_DATA as CCAOF_CONCEPTS, QUESTIONS_DATA as CCAOF_QUESTIONS } from './exams/ccao-f.js';
import { CONCEPTS_DATA as CCAF_CONCEPTS, QUESTIONS_DATA as CCAF_QUESTIONS } from './exams/cca-f.js';
import { CONCEPTS_DATA as CCAP_CONCEPTS, QUESTIONS_DATA as CCAP_QUESTIONS } from './exams/cca-p.js';

export const EXAMS_REGISTRY = [
  {
    id: 'ccao-f',
    title: 'Claude Certified Associate — Foundations (CCAO-F) Practice',
    shortCode: 'CCAO-F',
    description: 'Independent practice track covering foundations topics such as AI fluency, prompt engineering, context windows, data privacy, and verification. Confirm current exam objectives with official documentation.',
    examDate: '4 November 2026',
    durationMinutes: 120,
    quizQuestionCount: 60,
    passingPercentage: 70,
    concepts: CCAOF_CONCEPTS,
    questions: CCAOF_QUESTIONS,
    totalQuestions: CCAOF_QUESTIONS.length
  },
  {
    id: 'cca-f',
    title: 'Claude Certified Architect — Foundations (CCA-F) Practice',
    shortCode: 'CCA-F',
    description: 'Independent practice track for architecture concepts, model selection, latency, cost, and system design. This repository does not verify official exam scope or scheduling.',
    examDate: 'Not set',
    durationMinutes: 120,
    quizQuestionCount: 60,
    passingPercentage: 70,
    concepts: CCAF_CONCEPTS,
    questions: CCAF_QUESTIONS,
    totalQuestions: CCAF_QUESTIONS.length
  },
  {
    id: 'cca-p',
    title: 'Claude Certified Architect — Practitioner (CCA-P) Practice',
    shortCode: 'CCA-P',
    description: 'Independent practice track for tool use, orchestration, retrieval, security, and guardrails. This repository does not verify official exam scope or scheduling.',
    examDate: 'Not set',
    durationMinutes: 120,
    quizQuestionCount: 60,
    passingPercentage: 70,
    concepts: CCAP_CONCEPTS,
    questions: CCAP_QUESTIONS,
    totalQuestions: CCAP_QUESTIONS.length
  }
];

export const getExamById = (id) => {
  return EXAMS_REGISTRY.find(e => e.id === id) || EXAMS_REGISTRY[0];
};
