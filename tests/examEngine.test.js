import { describe, it, expect } from 'vitest';
import {
  calculateConceptQuotas,
  sampleExamQuestions,
  recordUserResponse,
  toggleReviewFlag,
  parseCorrectAnswers,
  calculateExamScore,
  navigateQuestion,
  checkTimerExpiration
} from '../src/utils/examEngine.js';

describe('Exam Engine - Core Question Distribution & Logic Tests', () => {

  // =========================================================================
  // 1. TOPIC QUOTA CALCULATION & OFFICIAL WEIGHTINGS
  // =========================================================================
  describe('1. Topic Quota Calculation & Official Weightings', () => {
    it('calculates equal quotas when weightPct is not provided', () => {
      const concepts = [
        { id: 'c1' }, { id: 'c2' }, { id: 'c3' },
        { id: 'c4' }, { id: 'c5' }, { id: 'c6' }
      ];
      const quotas = calculateConceptQuotas(concepts, 60);
      expect(Object.values(quotas).reduce((a, b) => a + b, 0)).toBe(60);
      expect(quotas['c1']).toBe(10);
      expect(quotas['c6']).toBe(10);
    });

    it('calculates weighted quotas according to official blueprint percentages', () => {
      const concepts = [
        { id: 'arch', weightPct: 25 },
        { id: 'caching', weightPct: 25 },
        { id: 'agents', weightPct: 30 },
        { id: 'evals', weightPct: 20 }
      ];
      const quotas = calculateConceptQuotas(concepts, 60);
      expect(quotas['arch']).toBe(15);    // 25% of 60 = 15
      expect(quotas['caching']).toBe(15); // 25% of 60 = 15
      expect(quotas['agents']).toBe(18);  // 30% of 60 = 18
      expect(quotas['evals']).toBe(12);   // 20% of 60 = 12
      expect(Object.values(quotas).reduce((a, b) => a + b, 0)).toBe(60);
    });

    it('handles decimal weight percentages and ensures exact sum match', () => {
      const concepts = [
        { id: 'c1', weightPct: 15 },
        { id: 'c2', weightPct: 18 },
        { id: 'c3', weightPct: 18 },
        { id: 'c4', weightPct: 15 },
        { id: 'c5', weightPct: 12 },
        { id: 'c6', weightPct: 12 },
        { id: 'c7', weightPct: 10 }
      ];
      const quotas = calculateConceptQuotas(concepts, 60);
      const total = Object.values(quotas).reduce((a, b) => a + b, 0);
      expect(total).toBe(60);
    });

    it('handles empty concepts or 0 target safely', () => {
      expect(calculateConceptQuotas([], 60)).toEqual({});
      const zeroQuota = calculateConceptQuotas([{ id: 'c1' }], 0);
      expect(zeroQuota['c1']).toBe(0);
    });
  });

  // =========================================================================
  // 2. QUESTION SAMPLING, EMPTY TOPIC POOLS & FALLBACK LOGIC
  // =========================================================================
  describe('2. Question Sampling, Empty Topic Pools & Fallback Logic', () => {
    // Generate a mock exam with 80 total questions across 4 concepts
    const mockExam = {
      id: 'mock-exam',
      concepts: [
        { id: 'c1', weightPct: 25 },
        { id: 'c2', weightPct: 25 },
        { id: 'c3', weightPct: 25 },
        { id: 'c4', weightPct: 25 }
      ],
      questions: Array.from({ length: 80 }, (_, i) => ({
        num: i + 1,
        question: `Question ${i + 1}`,
        conceptId: `c${(i % 4) + 1}`,
        correctAnswer: 'A',
        options: { A: 'Opt A', B: 'Opt B' }
      }))
    };

    it('samples exactly 60 questions from balanced pools', () => {
      const result = sampleExamQuestions(mockExam, 60);
      expect(result.questions.length).toBe(60);
      expect(result.deficitHandled).toBe(0);
    });

    it('handles empty topic pools gracefully without crashing (Fallback test)', () => {
      // Concept c1 has 0 questions, c2 has 40, c3 has 40
      const examWithEmptyPool = {
        concepts: [
          { id: 'empty-topic', weightPct: 33 },
          { id: 'topic-b', weightPct: 33 },
          { id: 'topic-c', weightPct: 34 }
        ],
        questions: Array.from({ length: 60 }, (_, i) => ({
          num: i + 1,
          question: `Q ${i + 1}`,
          conceptId: i < 30 ? 'topic-b' : 'topic-c',
          correctAnswer: 'B',
          options: { A: 'A', B: 'B' }
        }))
      };

      const result = sampleExamQuestions(examWithEmptyPool, 60);
      expect(result.questions.length).toBe(60);
      expect(result.distribution['empty-topic'].actualCount).toBe(0);
      expect(result.distribution['empty-topic'].availableInPool).toBe(0);
      expect(result.deficitHandled).toBeGreaterThan(0);
    });

    it('redistributes deficit proportionally when a topic has fewer questions than quota', () => {
      // Concept c1 has only 3 questions, but quota is 15
      const examWithSmallPool = {
        concepts: [
          { id: 'small-topic', weightPct: 25 }, // Target 15, but only 3 available
          { id: 'abundant-topic', weightPct: 75 }
        ],
        questions: [
          ...Array.from({ length: 3 }, (_, i) => ({
            num: i + 1,
            conceptId: 'small-topic',
            correctAnswer: 'A',
            options: { A: 'A', B: 'B' }
          })),
          ...Array.from({ length: 70 }, (_, i) => ({
            num: i + 4,
            conceptId: 'abundant-topic',
            correctAnswer: 'A',
            options: { A: 'A', B: 'B' }
          }))
        ]
      };

      const result = sampleExamQuestions(examWithSmallPool, 60);
      expect(result.questions.length).toBe(60);
      // Small topic should contribute all 3 of its questions
      expect(result.distribution['small-topic'].actualCount).toBe(3);
      expect(result.distribution['small-topic'].availableInPool).toBe(3);
      // Deficit of 12 was satisfied by abundant topic
      expect(result.deficitHandled).toBe(12);
    });

    it('guarantees ZERO duplicate questions across 100 test sampling iterations', () => {
      for (let run = 0; run < 100; run++) {
        const result = sampleExamQuestions(mockExam, 60);
        const seenNums = new Set();
        result.questions.forEach(q => {
          expect(seenNums.has(q.num)).toBe(false);
          seenNums.add(q.num);
        });
        expect(seenNums.size).toBe(60);
      }
    });
  });

  // =========================================================================
  // 3. MULTIPLE-SELECT & SINGLE-SELECT RESPONSES
  // =========================================================================
  describe('3. Multiple-Select & Single-Select Answer Recording', () => {
    it('records single-select choice by replacing previous selection', () => {
      let responses = {};
      responses = recordUserResponse(responses, 0, 'A', false);
      expect(responses[0].selected).toEqual(['A']);

      // Selecting another option replaces 'A'
      responses = recordUserResponse(responses, 0, 'C', false);
      expect(responses[0].selected).toEqual(['C']);
    });

    it('records multi-select by adding new options without replacing', () => {
      let responses = {};
      responses = recordUserResponse(responses, 1, 'A', true);
      expect(responses[1].selected).toEqual(['A']);

      responses = recordUserResponse(responses, 1, 'E', true);
      expect(responses[1].selected.sort()).toEqual(['A', 'E']);
    });

    it('toggles off an option in multi-select when clicked again', () => {
      let responses = { 1: { selected: ['A', 'C', 'E'], markedReview: false } };
      responses = recordUserResponse(responses, 1, 'C', true);
      expect(responses[1].selected.sort()).toEqual(['A', 'E']);

      responses = recordUserResponse(responses, 1, 'A', true);
      expect(responses[1].selected).toEqual(['E']);
    });

    it('toggles review flag while preserving selected choices', () => {
      let responses = { 0: { selected: ['B'], markedReview: false } };
      responses = toggleReviewFlag(responses, 0);
      expect(responses[0].markedReview).toBe(true);
      expect(responses[0].selected).toEqual(['B']);

      responses = toggleReviewFlag(responses, 0);
      expect(responses[0].markedReview).toBe(false);
    });
  });

  // =========================================================================
  // 4. UNANSWERED & SKIPPED QUESTIONS HANDLING
  // =========================================================================
  describe('4. Unanswered & Skipped Questions Handling', () => {
    const questions = [
      { num: 1, correctAnswer: 'A', conceptId: 'c1' },
      { num: 2, correctAnswer: 'B', conceptId: 'c1' },
      { num: 3, correctAnswer: 'C', conceptId: 'c2' },
      { num: 4, correctAnswer: 'D', conceptId: 'c2' }
    ];

    it('accurately distinguishes answered vs unanswered questions', () => {
      // User only answers Q1 and Q3, leaving Q2 and Q4 unanswered
      const userResponses = {
        0: { selected: ['A'], markedReview: false },
        2: { selected: ['C'], markedReview: true }
      };

      const score = calculateExamScore(questions, userResponses, 70);
      expect(score.totalQuestions).toBe(4);
      expect(score.attemptedCount).toBe(2);
      expect(score.unansweredCount).toBe(2);
      expect(score.correctCount).toBe(2);
      expect(score.scorePercentage).toBe(50);
      expect(score.isPassed).toBe(false);
    });

    it('marks unanswered questions as incorrect without throwing errors', () => {
      // All questions completely unanswered
      const emptyResponses = {};
      const score = calculateExamScore(questions, emptyResponses, 70);
      expect(score.attemptedCount).toBe(0);
      expect(score.unansweredCount).toBe(4);
      expect(score.correctCount).toBe(0);
      expect(score.scorePercentage).toBe(0);
      expect(score.isPassed).toBe(false);
    });
  });

  // =========================================================================
  // 5. SCORE CALCULATION & MULTI-SELECT VALIDATION
  // =========================================================================
  describe('5. Score Calculation & Multi-Select Validation', () => {
    const questions = [
      { num: 1, correctAnswer: 'B', conceptId: 'foundations' },
      { num: 2, correctAnswer: 'A & E', conceptId: 'foundations' }, // Multi-select
      { num: 3, correctAnswer: 'C', conceptId: 'architecture' },
      { num: 4, correctAnswer: 'B, D', conceptId: 'architecture' }  // Multi-select with comma
    ];

    it('scores multi-select as correct only when all required options match', () => {
      const userResponses = {
        0: { selected: ['B'] },          // Correct
        1: { selected: ['E', 'A'] },     // Correct (order independent)
        2: { selected: ['C'] },          // Correct
        3: { selected: ['B', 'D'] }      // Correct
      };

      const score = calculateExamScore(questions, userResponses, 70);
      expect(score.correctCount).toBe(4);
      expect(score.scorePercentage).toBe(100);
      expect(score.isPassed).toBe(true);
    });

    it('marks partial multi-select as incorrect (exam requirement)', () => {
      const userResponses = {
        0: { selected: ['B'] },          // Correct
        1: { selected: ['A'] },          // Partial (missing E) -> Incorrect
        2: { selected: ['C'] },          // Correct
        3: { selected: ['B', 'D', 'E'] } // Extra option -> Incorrect
      };

      const score = calculateExamScore(questions, userResponses, 70);
      expect(score.correctCount).toBe(2); // Only Q0 and Q2 are fully correct
      expect(score.scorePercentage).toBe(50);
      expect(score.isPassed).toBe(false);
    });

    it('enforces passing threshold boundary accurately', () => {
      const tenQuestions = Array.from({ length: 10 }, (_, i) => ({
        num: i + 1,
        correctAnswer: 'A',
        conceptId: 'c1'
      }));

      // 7 out of 10 = 70% (Pass on 70% threshold)
      const passResponses = {};
      for (let i = 0; i < 7; i++) passResponses[i] = { selected: ['A'] };
      expect(calculateExamScore(tenQuestions, passResponses, 70).isPassed).toBe(true);

      // 6 out of 10 = 60% (Fail on 70% threshold)
      const failResponses = {};
      for (let i = 0; i < 6; i++) failResponses[i] = { selected: ['A'] };
      expect(calculateExamScore(tenQuestions, failResponses, 70).isPassed).toBe(false);
    });

    it('calculates topic breakdown diagnostics correctly', () => {
      const concepts = [
        { id: 'foundations', title: 'Foundations' },
        { id: 'architecture', title: 'Architecture' }
      ];
      const userResponses = {
        0: { selected: ['B'] },      // Foundations: Correct
        1: { selected: ['A'] },      // Foundations: Incorrect
        2: { selected: ['C'] },      // Architecture: Correct
        3: { selected: ['B', 'D'] }  // Architecture: Correct
      };

      const score = calculateExamScore(questions, userResponses, 70, concepts);
      expect(score.topicPerformance['foundations'].total).toBe(2);
      expect(score.topicPerformance['foundations'].correct).toBe(1);
      expect(score.topicPerformance['foundations'].percentage).toBe(50);

      expect(score.topicPerformance['architecture'].total).toBe(2);
      expect(score.topicPerformance['architecture'].correct).toBe(2);
      expect(score.topicPerformance['architecture'].percentage).toBe(100);
    });
  });

  // =========================================================================
  // 6. QUESTION NAVIGATION BOUNDS
  // =========================================================================
  describe('6. Question Navigation Bounds', () => {
    it('advances on next and clamps at last question', () => {
      expect(navigateQuestion(0, 60, 'next')).toBe(1);
      expect(navigateQuestion(58, 60, 'next')).toBe(59);
      expect(navigateQuestion(59, 60, 'next')).toBe(59); // Cannot go beyond index 59
    });

    it('moves back on prev and clamps at index 0', () => {
      expect(navigateQuestion(10, 60, 'prev')).toBe(9);
      expect(navigateQuestion(1, 60, 'prev')).toBe(0);
      expect(navigateQuestion(0, 60, 'prev')).toBe(0); // Cannot go below 0
    });

    it('jumps to valid index and clamps out-of-range palette targets', () => {
      expect(navigateQuestion(5, 60, 42)).toBe(42);
      expect(navigateQuestion(5, 60, -10)).toBe(0);
      expect(navigateQuestion(5, 60, 100)).toBe(59);
    });
  });

  // =========================================================================
  // 7. TIMER EXPIRATION
  // =========================================================================
  describe('7. Timer Expiration Handling', () => {
    it('returns true when remaining seconds is 0 or negative', () => {
      expect(checkTimerExpiration(0)).toBe(true);
      expect(checkTimerExpiration(-1)).toBe(true);
      expect(checkTimerExpiration(-120)).toBe(true);
    });

    it('returns false when time is still remaining', () => {
      expect(checkTimerExpiration(1)).toBe(false);
      expect(checkTimerExpiration(7200)).toBe(false);
    });
  });

});
