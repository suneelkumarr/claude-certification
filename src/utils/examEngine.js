/**
 * Exam Engine: Core Question Distribution, Sampling, Scoring, and Session Logic
 * Implements official exam blueprint topic weighting, deficit handling, and testable state functions.
 */

/**
 * Calculates question quota per concept based on weight percentages.
 * Guarantees that the sum of quotas equals totalQuestions.
 * 
 * @param {Array<{id: string, weightPct?: number}>} concepts 
 * @param {number} totalQuestions 
 * @returns {Record<string, number>} Map of conceptId -> target question count
 */
export function calculateConceptQuotas(concepts, totalQuestions = 60) {
  if (!concepts || concepts.length === 0) return {};
  if (totalQuestions <= 0) {
    return concepts.reduce((acc, c) => ({ ...acc, [c.id]: 0 }), {});
  }

  // If weights aren't provided, distribute equally
  const defaultWeight = 100 / concepts.length;
  let remaining = totalQuestions;
  const quotas = {};
  const fractions = [];

  concepts.forEach(concept => {
    const weight = typeof concept.weightPct === 'number' && concept.weightPct > 0 
      ? concept.weightPct 
      : defaultWeight;
    const rawCount = (weight / 100) * totalQuestions;
    const floored = Math.floor(rawCount);
    quotas[concept.id] = floored;
    remaining -= floored;
    fractions.push({ id: concept.id, frac: rawCount - floored, weight });
  });

  // Distribute remaining questions to concepts with highest decimal remainder or highest weight
  fractions.sort((a, b) => b.frac - a.frac || b.weight - a.weight);
  for (let i = 0; i < remaining; i++) {
    const target = fractions[i % fractions.length];
    quotas[target.id] = (quotas[target.id] || 0) + 1;
  }

  return quotas;
}

/**
 * Modern Fisher-Yates array shuffle (in-place copy).
 */
export function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Samples exam questions respecting topic weightings, with proportional fallback
 * for small or empty topic pools, guaranteeing zero duplicates.
 * 
 * @param {Object} exam Exam configuration containing concepts and questions
 * @param {number} [targetCount=60] Total questions desired
 * @returns {{
 *   questions: Array<any>,
 *   distribution: Record<string, { targetQuota: number, actualCount: number, availableInPool: number, weightPct: number }>,
 *   deficitHandled: number,
 *   totalSampled: number
 * }}
 */
export function sampleExamQuestions(exam, targetCount = 60) {
  const concepts = exam?.concepts || [];
  const allQuestions = exam?.questions || [];
  const effectiveTarget = Math.min(targetCount, allQuestions.length);

  if (effectiveTarget === 0 || concepts.length === 0) {
    return {
      questions: [],
      distribution: {},
      deficitHandled: 0,
      totalSampled: 0
    };
  }

  // 1. Calculate target quota for each concept
  const quotas = calculateConceptQuotas(concepts, effectiveTarget);

  // 2. Index available questions by conceptId
  const poolByConcept = {};
  concepts.forEach(c => {
    poolByConcept[c.id] = [];
  });

  allQuestions.forEach(q => {
    const cId = q.conceptId || concepts[0]?.id;
    if (!poolByConcept[cId]) poolByConcept[cId] = [];
    poolByConcept[cId].push(q);
  });

  // 3. Sample from each concept up to its quota
  const selected = [];
  const selectedIds = new Set();
  const distribution = {};
  let totalDeficit = 0;

  concepts.forEach(c => {
    const quota = quotas[c.id] || 0;
    const available = shuffleArray(poolByConcept[c.id] || []);
    const availableCount = available.length;
    const takeCount = Math.min(quota, availableCount);

    const taken = available.slice(0, takeCount);
    taken.forEach(q => {
      selected.push(q);
      selectedIds.add(q.num ?? q.id);
    });

    const deficit = quota - takeCount;
    if (deficit > 0) {
      totalDeficit += deficit;
    }

    distribution[c.id] = {
      targetQuota: quota,
      actualCount: takeCount,
      availableInPool: availableCount,
      weightPct: c.weightPct ?? (100 / concepts.length)
    };
  });

  // 4. Fallback: If any concept had fewer questions than quota, satisfy deficit from remaining pool
  if (selected.length < effectiveTarget) {
    const remainingPool = shuffleArray(
      allQuestions.filter(q => !selectedIds.has(q.num ?? q.id))
    );

    while (selected.length < effectiveTarget && remainingPool.length > 0) {
      const q = remainingPool.pop();
      selected.push(q);
      selectedIds.add(q.num ?? q.id);

      // Track back into distribution actual count
      const cId = q.conceptId || concepts[0]?.id;
      if (distribution[cId]) {
        distribution[cId].actualCount += 1;
      }
    }
  }

  // 5. Final randomized shuffle so questions from the same domain aren't grouped sequentially
  const finalQuestions = shuffleArray(selected.slice(0, effectiveTarget));

  return {
    questions: finalQuestions,
    distribution,
    deficitHandled: totalDeficit,
    totalSampled: finalQuestions.length
  };
}

/**
 * Pure state updater for recorded user responses.
 * Supports single-select and multi-select answer sets.
 */
export function recordUserResponse(currentResponses, questionIndex, selectedLetter, isMulti = false) {
  const current = currentResponses?.[questionIndex] || { selected: [], markedReview: false };
  let updatedSelected = [];

  if (isMulti) {
    if (current.selected.includes(selectedLetter)) {
      // Toggle off if already present
      updatedSelected = current.selected.filter(l => l !== selectedLetter);
    } else {
      // Toggle on
      updatedSelected = [...current.selected, selectedLetter];
    }
  } else {
    // Single choice replaces current selection
    updatedSelected = [selectedLetter];
  }

  return {
    ...currentResponses,
    [questionIndex]: {
      ...current,
      selected: updatedSelected
    }
  };
}

/**
 * Pure state updater for review flags.
 */
export function toggleReviewFlag(currentResponses, questionIndex) {
  const current = currentResponses?.[questionIndex] || { selected: [], markedReview: false };
  return {
    ...currentResponses,
    [questionIndex]: {
      ...current,
      markedReview: !current.markedReview
    }
  };
}

/**
 * Normalizes question correct answer into a sorted array of choice letters.
 * Example: "A & C" -> ['A', 'C'], "B" -> ['B'], "A, D" -> ['A', 'D']
 */
export function parseCorrectAnswers(correctAnswer) {
  if (Array.isArray(correctAnswer)) {
    return [...correctAnswer].sort();
  }
  if (typeof correctAnswer === 'string') {
    const matches = correctAnswer.match(/[A-E]/gi);
    return matches ? matches.map(m => m.toUpperCase()).sort() : [];
  }
  return [];
}

/**
 * Calculates comprehensive score metrics and per-topic diagnostic breakdown.
 * 
 * @param {Array<any>} examQuestions Questions included in the exam
 * @param {Record<number, { selected: string[], markedReview?: boolean }>} userResponses
 * @param {number} [passingPct=70] Passing percentage threshold
 * @param {Array<any>} [concepts=[]] Exam concepts for topic attribution
 */
export function calculateExamScore(examQuestions = [], userResponses = {}, passingPct = 70, concepts = []) {
  const total = examQuestions.length;
  if (total === 0) {
    return {
      totalQuestions: 0,
      attemptedCount: 0,
      unansweredCount: 0,
      correctCount: 0,
      incorrectCount: 0,
      scorePercentage: 0,
      isPassed: false,
      passingPct,
      topicPerformance: {}
    };
  }

  let correctCount = 0;
  let attemptedCount = 0;
  const topicMap = {};

  // Initialize topic performance tracker
  concepts.forEach(c => {
    topicMap[c.id] = {
      id: c.id,
      title: c.title,
      total: 0,
      correct: 0,
      attempted: 0,
      percentage: 0
    };
  });

  examQuestions.forEach((q, idx) => {
    const cId = q.conceptId || (concepts[0]?.id || 'general');
    if (!topicMap[cId]) {
      topicMap[cId] = {
        id: cId,
        title: q.conceptTitle || cId,
        total: 0,
        correct: 0,
        attempted: 0,
        percentage: 0
      };
    }
    topicMap[cId].total += 1;

    const userSelected = (userResponses[idx]?.selected || []).map(s => s.toUpperCase()).sort();
    const isAttempted = userSelected.length > 0;

    if (isAttempted) {
      attemptedCount += 1;
      topicMap[cId].attempted += 1;
    }

    const expected = parseCorrectAnswers(q.correctAnswer);
    const isCorrect = isAttempted && JSON.stringify(userSelected) === JSON.stringify(expected);

    if (isCorrect) {
      correctCount += 1;
      topicMap[cId].correct += 1;
    }
  });

  // Calculate percentages for each topic
  Object.values(topicMap).forEach(topic => {
    topic.percentage = topic.total > 0 ? Math.round((topic.correct / topic.total) * 100) : 0;
  });

  const unansweredCount = total - attemptedCount;
  const incorrectCount = total - correctCount;
  const scorePercentage = Math.round((correctCount / total) * 100);
  const isPassed = scorePercentage >= passingPct;

  return {
    totalQuestions: total,
    attemptedCount,
    unansweredCount,
    correctCount,
    incorrectCount,
    scorePercentage,
    isPassed,
    passingPct,
    topicPerformance: topicMap
  };
}

/**
 * Question navigation handler with strict index boundary protection.
 */
export function navigateQuestion(currentIndex, totalQuestions, action) {
  if (totalQuestions <= 0) return 0;
  const maxIndex = totalQuestions - 1;

  if (typeof action === 'number') {
    return Math.max(0, Math.min(action, maxIndex));
  }

  if (action === 'next') {
    return Math.min(currentIndex + 1, maxIndex);
  }

  if (action === 'prev') {
    return Math.max(currentIndex - 1, 0);
  }

  return Math.max(0, Math.min(currentIndex, maxIndex));
}

/**
 * Timer expiration checker.
 */
export function checkTimerExpiration(remainingSeconds) {
  return typeof remainingSeconds === 'number' && remainingSeconds <= 0;
}
