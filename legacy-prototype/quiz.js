// CCAO-F 120-Minute Exam Simulator Engine (60 Questions Balanced Across All 10 Topics)

document.addEventListener('DOMContentLoaded', () => {
  // Constants
  const TOTAL_QUESTIONS = 60;
  const TOTAL_SECONDS = 120 * 60; // 120 minutes = 7200 seconds
  const PASSING_PERCENTAGE = 70;

  // State
  let examQuestions = [];
  let currentIndex = 0;
  let userResponses = {}; // { [index]: { selected: ['B'], markedReview: false } }
  let timerInterval = null;
  let remainingSeconds = TOTAL_SECONDS;
  let examSubmitted = false;

  // DOM Elements
  const startScreen = document.getElementById('start-screen');
  const examScreen = document.getElementById('exam-screen');
  const reportScreen = document.getElementById('report-screen');
  const btnStartExam = document.getElementById('btn-start-exam');

  const timerClock = document.getElementById('timer-clock');
  const btnSubmitExam = document.getElementById('btn-submit-exam');
  const confirmModal = document.getElementById('confirm-modal');
  const modalSummaryText = document.getElementById('modal-summary-text');
  const btnCancelSubmit = document.getElementById('btn-cancel-submit');
  const btnConfirmSubmit = document.getElementById('btn-confirm-submit');

  const currentQIndex = document.getElementById('current-q-index');
  const currentQTopic = document.getElementById('current-q-topic');
  const markReviewChk = document.getElementById('mark-review-chk');
  const examQType = document.getElementById('exam-q-type');
  const examQText = document.getElementById('exam-q-text');
  const examOptionsContainer = document.getElementById('exam-options-container');

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnClear = document.getElementById('btn-clear');

  const paletteGrid = document.getElementById('palette-grid');
  const answeredCountEl = document.getElementById('answered-count');

  // Start Exam Event
  btnStartExam.addEventListener('click', () => {
    initNewExam();
  });

  // Initialize Balanced 60-Question Exam
  function initNewExam() {
    examQuestions = selectBalanced60Questions();
    userResponses = {};
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      userResponses[i] = { selected: [], markedReview: false };
    }
    currentIndex = 0;
    remainingSeconds = TOTAL_SECONDS;
    examSubmitted = false;

    startScreen.style.display = 'none';
    reportScreen.style.display = 'none';
    examScreen.style.display = 'grid';

    buildPalette();
    renderCurrentQuestion();
    startTimer();
  }

  // Pick 60 Questions evenly distributed across all 10 concepts
  function selectBalanced60Questions() {
    const selected = [];
    const questionsByConcept = {};

    CONCEPTS_DATA.forEach(c => {
      questionsByConcept[c.id] = [];
    });

    QUESTIONS_DATA.forEach(q => {
      const cId = q.conceptId || 'human-oversight';
      if (!questionsByConcept[cId]) questionsByConcept[cId] = [];
      questionsByConcept[cId].push(q);
    });

    // Pick 6 questions from each of the 10 concepts = exactly 60!
    CONCEPTS_DATA.forEach(c => {
      const pool = [...questionsByConcept[c.id]];
      shuffleArray(pool);
      const quota = 6;
      const picked = pool.slice(0, quota);
      selected.push(...picked);
    });

    // If any concept had less than 6, fill from remaining pool
    if (selected.length < TOTAL_QUESTIONS) {
      const remainingPool = QUESTIONS_DATA.filter(q => !selected.some(s => s.num === q.num));
      shuffleArray(remainingPool);
      while (selected.length < TOTAL_QUESTIONS && remainingPool.length > 0) {
        selected.push(remainingPool.pop());
      }
    }

    shuffleArray(selected);
    return selected.slice(0, TOTAL_QUESTIONS);
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Timer Logic
  function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();

    timerInterval = setInterval(() => {
      remainingSeconds--;
      updateTimerDisplay();

      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        alert('Time is up! Submitting your exam automatically.');
        finalizeExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timerClock.textContent = formatted;

    if (remainingSeconds < 600) { // < 10 mins
      timerClock.className = 'timer-clock danger';
    } else if (remainingSeconds < 1800) { // < 30 mins
      timerClock.className = 'timer-clock warning';
    } else {
      timerClock.className = 'timer-clock';
    }
  }

  // Palette Grid Builder
  function buildPalette() {
    paletteGrid.innerHTML = '';
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.id = `palette-btn-${i}`;
      btn.textContent = i + 1;

      btn.addEventListener('click', () => {
        currentIndex = i;
        renderCurrentQuestion();
      });

      paletteGrid.appendChild(btn);
    }
    updatePaletteState();
  }

  function updatePaletteState() {
    let answered = 0;

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      const btn = document.getElementById(`palette-btn-${i}`);
      if (!btn) continue;

      const resp = userResponses[i];
      btn.className = 'palette-btn';

      if (i === currentIndex) {
        btn.classList.add('active');
      }

      if (resp.markedReview) {
        btn.classList.add('review');
      } else if (resp.selected.length > 0) {
        btn.classList.add('answered');
        answered++;
      }
    }

    answeredCountEl.textContent = answered;
  }

  // Render Current Question
  function renderCurrentQuestion() {
    const q = examQuestions[currentIndex];
    const resp = userResponses[currentIndex];

    currentQIndex.textContent = currentIndex + 1;
    
    // Concept title
    const conceptObj = CONCEPTS_DATA.find(c => c.id === q.conceptId);
    currentQTopic.textContent = conceptObj ? (conceptObj.title.split('.')[1] || conceptObj.title) : 'General';

    markReviewChk.checked = resp.markedReview;

    examQType.textContent = q.isMulti ? '✨ Multiple Select (Check all that apply)' : 'Single Choice';
    examQText.innerHTML = q.question.replace(/\n/g, '<br>');

    // Options
    examOptionsContainer.innerHTML = '';
    const optionKeys = Object.keys(q.options).sort();

    optionKeys.forEach(letter => {
      const isSelected = resp.selected.includes(letter);
      const card = document.createElement('div');
      card.className = `exam-option-card ${isSelected ? 'selected' : ''}`;
      card.dataset.letter = letter;

      card.innerHTML = `
        <span class="exam-opt-letter">${letter}</span>
        <div class="exam-opt-text">${q.options[letter]}</div>
      `;

      card.addEventListener('click', () => {
        handleOptionClick(letter, q.isMulti);
      });

      examOptionsContainer.appendChild(card);
    });

    // Nav Button States
    btnPrev.disabled = currentIndex === 0;
    btnNext.textContent = currentIndex === TOTAL_QUESTIONS - 1 ? 'Finish & Review' : 'Next Question →';

    updatePaletteState();
  }

  function handleOptionClick(letter, isMulti) {
    const resp = userResponses[currentIndex];

    if (isMulti) {
      if (resp.selected.includes(letter)) {
        resp.selected = resp.selected.filter(l => l !== letter);
      } else {
        resp.selected.push(letter);
      }
    } else {
      resp.selected = [letter];
    }

    renderCurrentQuestion();
  }

  // Mark for review change
  markReviewChk.addEventListener('change', () => {
    userResponses[currentIndex].markedReview = markReviewChk.checked;
    updatePaletteState();
  });

  // Clear button
  btnClear.addEventListener('click', () => {
    userResponses[currentIndex].selected = [];
    userResponses[currentIndex].markedReview = false;
    renderCurrentQuestion();
  });

  // Nav Buttons
  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderCurrentQuestion();
    }
  });

  btnNext.addEventListener('click', () => {
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      currentIndex++;
      renderCurrentQuestion();
    } else {
      triggerSubmitModal();
    }
  });

  // Submit Flow
  btnSubmitExam.addEventListener('click', triggerSubmitModal);

  function triggerSubmitModal() {
    let answered = 0;
    let marked = 0;
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      if (userResponses[i].selected.length > 0) answered++;
      if (userResponses[i].markedReview) marked++;
    }

    modalSummaryText.innerHTML = `
      Aapne <strong>60 mein se ${answered} questions</strong> answer kiye hain.<br>
      <strong>${marked} questions</strong> 'Mark for Review' hain.<br><br>
      Kya aap sure hain ki exam complete karke final diagnostic report dekhna chahte hain?
    `;

    confirmModal.style.display = 'flex';
  }

  btnCancelSubmit.addEventListener('click', () => {
    confirmModal.style.display = 'none';
  });

  btnConfirmSubmit.addEventListener('click', () => {
    confirmModal.style.display = 'none';
    finalizeExam();
  });

  // Finalize Exam & Generate Complete Report
  function finalizeExam() {
    clearInterval(timerInterval);
    examSubmitted = true;
    examScreen.style.display = 'none';
    reportScreen.style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let correctCount = 0;
    const topicStats = {};

    CONCEPTS_DATA.forEach(c => {
      topicStats[c.id] = { title: c.title, total: 0, correct: 0 };
    });

    const evaluatedQuestions = [];

    examQuestions.forEach((q, idx) => {
      const resp = userResponses[idx];
      const correctLetters = (q.correctAnswer.match(/[A-E]/g) || []).sort();
      const userLetters = [...resp.selected].sort();
      const isCorrect = JSON.stringify(correctLetters) === JSON.stringify(userLetters);

      if (isCorrect) correctCount++;

      const cId = q.conceptId || 'human-oversight';
      if (!topicStats[cId]) {
        topicStats[cId] = { title: cId, total: 0, correct: 0 };
      }
      topicStats[cId].total++;
      if (isCorrect) topicStats[cId].correct++;

      evaluatedQuestions.push({
        q,
        idx,
        userLetters,
        correctLetters,
        isCorrect,
        markedReview: resp.markedReview
      });
    });

    const scorePct = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
    const isPass = scorePct >= PASSING_PERCENTAGE;
    const timeSpentSeconds = TOTAL_SECONDS - remainingSeconds;
    const timeSpentMins = Math.floor(timeSpentSeconds / 60);
    const timeSpentSecs = timeSpentSeconds % 60;

    // Render Full Diagnostic Report
    renderReportView({
      correctCount,
      scorePct,
      isPass,
      timeSpentFormatted: `${timeSpentMins}m ${timeSpentSecs}s`,
      topicStats,
      evaluatedQuestions
    });
  }

  function renderReportView(data) {
    // Topic Bars HTML
    let topicBarsHtml = '';
    const weakTopics = [];

    Object.keys(data.topicStats).forEach(cId => {
      const stat = data.topicStats[cId];
      if (stat.total === 0) return;

      const pct = Math.round((stat.correct / stat.total) * 100);
      const isWeak = pct < PASSING_PERCENTAGE;
      if (isWeak) weakTopics.push({ title: stat.title, pct });

      const barColor = pct >= 80 ? '#10b981' : pct >= 70 ? '#38bdf8' : '#f43f5e';

      topicBarsHtml += `
        <div class="topic-bar-row">
          <div class="topic-bar-meta">
            <span style="font-weight: 600; color: #f8fafc;">${stat.title}</span>
            <span style="color: ${barColor}; font-weight: 700;">${stat.correct}/${stat.total} (${pct}%)</span>
          </div>
          <div class="topic-bar-bg">
            <div class="topic-bar-fill" style="width: ${pct}%; background: ${barColor};"></div>
          </div>
        </div>
      `;
    });

    // Weak areas alert
    let weakAlertHtml = '';
    if (weakTopics.length > 0) {
      const items = weakTopics.map(w => `<li><strong>${w.title} (${w.pct}%)</strong>: Study Guide mein is topic ke Golden Rule aur Revision Matrix ko dobara padhein.</li>`).join('');
      weakAlertHtml = `
        <div class="weak-areas-card">
          <h3>⚠️ Focus Areas for Improvement (&lt; 70% Score)</h3>
          <ul>${items}</ul>
        </div>
      `;
    } else {
      weakAlertHtml = `
        <div class="weak-areas-card" style="background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3);">
          <h3 style="color: #34d399;">🎉 Outstanding Mastery!</h3>
          <p style="color: #d1fae5; font-size: 0.95rem;">Aapne sabhi 10 topics mein passing threshold (70%+) paar kiya hai! Aap real exam ke liye ready hain.</p>
        </div>
      `;
    }

    reportScreen.innerHTML = `
      <!-- Score Overview -->
      <div class="score-overview-card">
        <div class="score-badge-circle ${data.isPass ? 'pass' : 'fail'}">
          <span class="score-circle-pct">${data.scorePct}%</span>
          <span class="score-circle-status">${data.isPass ? 'PASSED ✅' : 'NEEDS PRACTICE ❌'}</span>
        </div>

        <div class="score-details-list">
          <div class="detail-metric">
            <span class="metric-title">Score</span>
            <span class="metric-number">${data.correctCount} / 60</span>
          </div>
          <div class="detail-metric">
            <span class="metric-title">Passing Bar</span>
            <span class="metric-number">42 / 60 (70%)</span>
          </div>
          <div class="detail-metric">
            <span class="metric-title">Time Spent</span>
            <span class="metric-number">${data.timeSpentFormatted}</span>
          </div>
          <div class="detail-metric">
            <span class="metric-title">Exam Date</span>
            <span class="metric-number">4 Nov 2026</span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <button class="nav-btn btn-primary" id="btn-retake-exam" style="padding: 0.9rem 2rem; font-size: 1rem;">
          🔄 Take Another 60-Question Quiz (Fresh Random Set)
        </button>
        <a href="index.html" class="nav-btn btn-secondary" style="padding: 0.9rem 2rem; text-decoration: none; text-align: center; font-size: 1rem;">
          📚 Back to Complete Study Guide
        </a>
      </div>

      <!-- Weak Areas -->
      ${weakAlertHtml}

      <!-- Topic Performance Breakdown -->
      <div class="topic-report-card">
        <div class="topic-report-header">📊 All 10 Topics Diagnostic Breakdown</div>
        ${topicBarsHtml}
      </div>

      <!-- Question-by-Question Review -->
      <div class="topic-report-card">
        <div class="topic-report-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <span>📝 Question-by-Question Detailed Review (All 60 Questions)</span>
          <div class="review-filter-tabs">
            <button class="filter-btn active" data-rev-filter="all">All (60)</button>
            <button class="filter-btn" data-rev-filter="correct">Correct (${data.correctCount})</button>
            <button class="filter-btn" data-rev-filter="wrong">Incorrect (${60 - data.correctCount})</button>
          </div>
        </div>

        <div id="review-cards-list" style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <!-- Injected dynamically -->
        </div>
      </div>
    `;

    document.getElementById('btn-retake-exam').addEventListener('click', () => {
      initNewExam();
    });

    // Review filtering
    renderReviewQuestionsList(data.evaluatedQuestions, 'all');

    const revFilterBtns = reportScreen.querySelectorAll('.review-filter-tabs .filter-btn');
    revFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        revFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderReviewQuestionsList(data.evaluatedQuestions, btn.dataset.revFilter);
      });
    });
  }

  function renderReviewQuestionsList(evaluatedList, filter) {
    const container = document.getElementById('review-cards-list');
    container.innerHTML = '';

    let filtered = evaluatedList;
    if (filter === 'correct') filtered = evaluatedList.filter(item => item.isCorrect);
    if (filter === 'wrong') filtered = evaluatedList.filter(item => !item.isCorrect);

    filtered.forEach(item => {
      const q = item.q;
      const userChoiceStr = item.userLetters.length > 0 ? item.userLetters.join(', ') : 'Not Attempted';
      const correctChoiceStr = item.correctLetters.join(', ');

      const card = document.createElement('div');
      card.className = `review-card ${item.isCorrect ? 'correct' : 'wrong'}`;

      let optListHtml = '';
      Object.keys(q.options).sort().forEach(letter => {
        const isUser = item.userLetters.includes(letter);
        const isAns = item.correctLetters.includes(letter);
        let badge = '';

        if (isAns) {
          badge = '<span style="color: #34d399; font-weight: 700; margin-left: 0.5rem;">[Correct Answer ✅]</span>';
        } else if (isUser) {
          badge = '<span style="color: #fb7185; font-weight: 700; margin-left: 0.5rem;">[Your Choice ❌]</span>';
        }

        optListHtml += `
          <div style="font-size: 0.9rem; margin-bottom: 0.4rem; color: #cbd5e1;">
            <strong>${letter}.</strong> ${q.options[letter]} ${badge}
          </div>
        `;
      });

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="font-weight: 800; color: #fbbf24;">Exam Q${item.idx + 1} (PDF Question #${q.num})</span>
          <span style="font-size: 0.8rem; font-weight: 700; color: ${item.isCorrect ? '#34d399' : '#fb7185'};">
            ${item.isCorrect ? 'CORRECT (+1)' : 'INCORRECT (0)'}
          </span>
        </div>

        <div style="font-weight: 500; font-size: 0.98rem; margin-bottom: 1rem; color: #f1f5f9;">
          ${q.question.replace(/\n/g, '<br>')}
        </div>

        <div style="background: rgba(0,0,0,0.25); padding: 0.85rem; border-radius: 6px; margin-bottom: 1rem;">
          ${optListHtml}
        </div>

        <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0; margin-bottom: 0.5rem;">
          <strong style="color: #34d399;">Kyun Sahi Hai:</strong>
          <p style="color: #d1fae5; font-size: 0.88rem; margin-top: 0.25rem;">${q.whyCorrect || q.explanation.replace(/\n/g, '<br>')}</p>
        </div>

        ${q.examTip ? `
          <div style="background: rgba(234, 179, 8, 0.08); border-left: 3px solid #eab308; padding: 0.75rem 1rem; border-radius: 0 6px 6px 0;">
            <strong style="color: #fef08a;">💡 Exam Tip:</strong>
            <p style="color: #fef9c3; font-size: 0.88rem; margin-top: 0.25rem;">${q.examTip}</p>
          </div>
        ` : ''}
      `;

      container.appendChild(card);
    });
  }
});
