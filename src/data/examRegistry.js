// Exam Registry: Central configuration for Multi-Exam Support with Official Blueprint Weightings
import { CONCEPTS_DATA as CCAOF_CONCEPTS, QUESTIONS_DATA as CCAOF_QUESTIONS } from './exams/ccao-f.js';
import { CONCEPTS_DATA as CCAF_CONCEPTS, QUESTIONS_DATA as CCAF_QUESTIONS } from './exams/cca-f.js';
import { CONCEPTS_DATA as CCAP_CONCEPTS, QUESTIONS_DATA as CCAP_QUESTIONS } from './exams/cca-p.js';

// Official Topic Weighting Specifications (Anthropic Certification Blueprint Standards)
export const TOPIC_WEIGHTINGS = {
  'ccao-f': {
    'prompt-clarity': 12,
    'context-windows': 10,
    'claude-models': 10,
    'system-prompts': 12,
    'evals-iteration': 10,
    'temperature-parameters': 8,
    'prompt-caching': 10,
    'hallucinations-grounding': 10,
    'rag-retrieval': 10,
    'structured-outputs': 8
  },
  'cca-f': {
    'multi-agent-orchestration': 22,
    'tools-concurrency': 18,
    'pipeline-resilience': 18,
    'temporal-synthesis': 14,
    'dynamic-routing': 14,
    'token-optimization': 14
  },
  'cca-p': {
    'governance-fluency': 15,
    'guardrails-security': 18,
    'contextual-rag': 18,
    'eval-pipelines': 15,
    'system-prompts-prefill': 12,
    'tool-governance': 12,
    'claude-code-devex': 10
  }
};

const enrichConceptsWithWeights = (concepts, examId) => {
  const weights = TOPIC_WEIGHTINGS[examId] || {};
  const defaultWeight = Math.round(100 / (concepts.length || 1));
  return concepts.map(c => ({
    ...c,
    weightPct: typeof weights[c.id] === 'number' ? weights[c.id] : defaultWeight
  }));
};

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
    concepts: enrichConceptsWithWeights(CCAOF_CONCEPTS, 'ccao-f'),
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
    concepts: enrichConceptsWithWeights(CCAF_CONCEPTS, 'cca-f'),
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
    concepts: enrichConceptsWithWeights(CCAP_CONCEPTS, 'cca-p'),
    questions: CCAP_QUESTIONS,
    totalQuestions: CCAP_QUESTIONS.length
  }
];

export const getExamById = (id) => {
  return EXAMS_REGISTRY.find(e => e.id === id) || EXAMS_REGISTRY[0];
};
