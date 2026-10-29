// Exam Registry: Central configuration for Multi-Exam Support
import { CONCEPTS_DATA as CCAOF_CONCEPTS, QUESTIONS_DATA as CCAOF_QUESTIONS } from './exams/ccao-f.js';
import { CONCEPTS_DATA as CCAF_CONCEPTS, QUESTIONS_DATA as CCAF_QUESTIONS } from './exams/cca-f.js';
import { CONCEPTS_DATA as CCAP_CONCEPTS, QUESTIONS_DATA as CCAP_QUESTIONS } from './exams/cca-p.js';

export const EXAMS_REGISTRY = [
  {
    id: 'ccao-f',
    title: 'Anthropic Claude Certified Associate — Foundations (CCAO-F)',
    shortCode: 'CCAO-F',
    description: 'Official Foundation certification covering AI Fluency, Prompt Engineering, Claude Models, Context Windows, Data Privacy, and Code Execution.',
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
    title: 'Anthropic Claude Certified Architect — Foundations (CCA-F)',
    shortCode: 'CCA-F',
    description: 'Architect certification covering Multi-Agent Orchestration, Parallel Execution, Pipeline Crash Recovery, Temporal Synthesis, and Dynamic Routing.',
    examDate: '4 November 2026',
    durationMinutes: 120,
    quizQuestionCount: 60,
    passingPercentage: 70,
    concepts: CCAF_CONCEPTS,
    questions: CCAF_QUESTIONS,
    totalQuestions: CCAF_QUESTIONS.length
  },
  {
    id: 'cca-p',
    title: 'Anthropic Claude Certified Architect — Professional (CCA-P)',
    shortCode: 'CCA-P',
    description: 'Professional Architect certification covering Enterprise AI Governance, Defense-in-Depth Guardrails, RAG Multi-Tenancy, Evaluation Pipelines, and Claude Code Security.',
    examDate: '4 November 2026',
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
