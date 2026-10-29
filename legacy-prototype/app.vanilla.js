// CCAO-F Interactive Learning Engine & Quiz App - Enhanced Version
document.addEventListener('DOMContentLoaded', () => {
  // State
  let activeConceptId = 'prompt-clarity';
  let activeFilter = 'all';
  let userAnswers = JSON.parse(localStorage.getItem('ccaof_answers') || '{}');

  // DOM Elements
  const conceptNavList = document.getElementById('concept-nav-list');
  const conceptCard = document.getElementById('concept-card');
  const questionsContainer = document.getElementById('questions-container');
  const questionsSectionTitle = document.getElementById('questions-section-title');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // Stats Elements
  const statAttempted = document.getElementById('stat-attempted');
  const statCorrect = document.getElementById('stat-correct');
  const statWrong = document.getElementById('stat-wrong');
  const statAccuracy = document.getElementById('stat-accuracy');

  // Initialize
  renderSidebar();
  renderConcept();
  renderQuestions();
  updateStats();

  // Sidebar Render
  function renderSidebar() {
    conceptNavList.innerHTML = '';

    CONCEPTS_DATA.forEach((concept) => {
      const li = document.createElement('li');
      const allQCount = [...concept.earlier, ...concept.repeated, ...(concept.other || [])].length;
      
      const btn = document.createElement('button');
      btn.className = `concept-nav-btn ${concept.id === activeConceptId ? 'active' : ''}`;
      btn.dataset.id = concept.id;
      btn.innerHTML = `
        <span>${concept.title.split('.')[1] || concept.title}</span>
        <span class="concept-q-count">${allQCount} Qs</span>
      `;

      btn.addEventListener('click', () => {
        activeConceptId = concept.id;
        activeFilter = 'all';
        updateFilterBtnState();
        document.querySelectorAll('.concept-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderConcept();
        renderQuestions();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      li.appendChild(btn);
      conceptNavList.appendChild(li);
    });

    // Master Mode: All 110 Questions
    const masterLi = document.createElement('li');
    masterLi.style.marginTop = '0.75rem';
    masterLi.style.borderTop = '1px solid var(--border-color)';
    masterLi.style.paddingTop = '0.75rem';

    const masterBtn = document.createElement('button');
    masterBtn.className = `concept-nav-btn ${activeConceptId === 'all-questions' ? 'active' : ''}`;
    masterBtn.style.color = '#38bdf8';
    masterBtn.innerHTML = `
      <span>📚 All 110 Questions Simulator</span>
      <span class="concept-q-count" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc;">110 Qs</span>
    `;

    masterBtn.addEventListener('click', () => {
      activeConceptId = 'all-questions';
      activeFilter = 'all';
      updateFilterBtnState();
      document.querySelectorAll('.concept-nav-btn').forEach(b => b.classList.remove('active'));
      masterBtn.classList.add('active');
      renderConcept();
      renderQuestions();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    masterLi.appendChild(masterBtn);
    conceptNavList.appendChild(masterLi);
  }

  // Render Active Concept Explanation Card
  function renderConcept() {
    if (activeConceptId === 'all-questions') {
      conceptCard.innerHTML = `
        <div class="concept-badge">Full Exam Simulator</div>
        <div class="concept-header">
          <h2>Master 110 Practice Questions Pool</h2>
          <div class="subtitle">Complete Coverage from ccao-f-premium.pdf (Q1 to Q110)</div>
        </div>
        <div class="concept-box">
          <h3>📌 Strategy for Full Practice</h3>
          <p>Yahan sabhi 110 practice questions ek saath accessible hain. Practice karte waqt dhyan dein ki kaafi questions purane principles ko nayi scenarios mein repeat karte hain. Har question ko dhyan se padhiye aur solve kijiye!</p>
        </div>
      `;
      return;
    }

    const concept = CONCEPTS_DATA.find(c => c.id === activeConceptId);
    if (!concept) return;

    const earlierBadges = concept.earlier.map(n => `<span class="pill-earlier" data-target="q-${n}">Q${n}</span>`).join(' ');
    const repeatedBadges = concept.repeated.map(n => `<span class="pill-repeated" data-target="q-${n}">Q${n}</span>`).join(' ');

    // Revision table HTML
    let revTableRows = '';
    if (concept.revisionTable) {
      concept.revisionTable.forEach(row => {
        revTableRows += `
          <tr>
            <td><strong>${row.concept}</strong></td>
            <td style="color: #fb7185;">${row.problem}</td>
            <td style="color: #34d399;">${row.solution}</td>
          </tr>
        `;
      });
    }

    const revisionTableHtml = concept.revisionTable ? `
      <div class="concept-box" style="margin-top: 1.25rem;">
        <h3>📊 Quick Revision Table (Exam se pehle dekhein)</h3>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Common Trap / Problem</th>
              <th>Exam-Ready Solution</th>
            </tr>
          </thead>
          <tbody>
            ${revTableRows}
          </tbody>
        </table>
      </div>
    ` : '';

    conceptCard.innerHTML = `
      <div class="concept-badge">Core Concept Guide</div>
      <div class="concept-header">
        <h2>${concept.title}</h2>
        <div class="subtitle">${concept.subtitle}</div>
      </div>

      <div class="master-formula-box">
        <div class="master-formula-title">🎯 Master Formula</div>
        <code class="master-formula-code">${concept.masterFormula || concept.meaning}</code>
      </div>

      <div class="concept-box">
        <h3>💡 Asan Hinglish Explanation (Beginner-Friendly)</h3>
        <p>${concept.beginnerExplanation}</p>
      </div>

      <div class="concept-box">
        <h3>🏢 Daily Life Analogy (Asli Zindagi ka Udaharan)</h3>
        <p>${concept.dailyAnalogy}</p>
      </div>

      <div class="concept-box" style="background: transparent; border: none; padding: 0;">
        <h3 style="margin-bottom: 0.5rem;">⚡ Practical Claude Example (Good vs Bad Prompt)</h3>
        <div class="comparison-grid">
          <div class="compare-card compare-bad">
            <div class="compare-title">❌ Bad Approach (Vague / Risky)</div>
            <code class="prompt-snippet">${concept.practicalExample.bad}</code>
            <p>${concept.practicalExample.badReason}</p>
          </div>
          <div class="compare-card compare-good">
            <div class="compare-title">✅ Good Approach (Clear / Safe)</div>
            <code class="prompt-snippet">${concept.practicalExample.good}</code>
            <p>${concept.practicalExample.goodReason}</p>
          </div>
        </div>
      </div>

      ${revisionTableHtml}

      <div class="golden-rule">
        <strong>🎯 Exam Golden Memory Rule:</strong> ${concept.examRule}
      </div>

      <div class="repetition-pills">
        <span class="rep-label">Question Mapping:</span>
        <span style="font-size: 0.75rem; color: #94a3b8; margin-left: 0.5rem;">Earlier Examples:</span>
        ${earlierBadges}
        <span style="font-size: 0.75rem; color: #94a3b8; margin-left: 0.5rem;">Repeated / Reinforcement:</span>
        ${repeatedBadges}
      </div>
    `;

    // Add click event to badges to jump to questions
    conceptCard.querySelectorAll('.pill-earlier, .pill-repeated').forEach(pill => {
      pill.addEventListener('click', () => {
        const targetId = pill.dataset.target;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetEl.style.borderColor = '#f59e0b';
          setTimeout(() => targetEl.style.borderColor = '', 2000);
        }
      });
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      updateFilterBtnState();
      renderQuestions();
    });
  });

  function updateFilterBtnState() {
    filterBtns.forEach(b => {
      if (b.dataset.filter === activeFilter) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  // Render Questions
  function renderQuestions() {
    questionsContainer.innerHTML = '';

    let questionsToShow = [];
    if (activeConceptId === 'all-questions') {
      questionsToShow = QUESTIONS_DATA;
      questionsSectionTitle.textContent = `All Practice Questions (${questionsToShow.length})`;
    } else {
      const concept = CONCEPTS_DATA.find(c => c.id === activeConceptId);
      if (!concept) return;

      if (activeFilter === 'earlier') {
        questionsToShow = QUESTIONS_DATA.filter(q => concept.earlier.includes(q.num));
      } else if (activeFilter === 'repeated') {
        questionsToShow = QUESTIONS_DATA.filter(q => concept.repeated.includes(q.num));
      } else {
        const targetNums = [...concept.earlier, ...concept.repeated, ...(concept.other || [])];
        questionsToShow = QUESTIONS_DATA.filter(q => targetNums.includes(q.num));
      }
      questionsSectionTitle.textContent = `Practice Questions (${questionsToShow.length})`;
    }

    if (questionsToShow.length === 0) {
      questionsContainer.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted); background: var(--bg-secondary); border-radius: var(--radius-md);">No questions found under this filter.</div>`;
      return;
    }

    questionsToShow.forEach(q => {
      const card = createQuestionCard(q);
      questionsContainer.appendChild(card);
    });
  }

  // Helper to normalize correct answers
  function parseAnswerLetters(ansStr) {
    const letters = ansStr.match(/[A-E]/g);
    return letters ? letters.sort() : [];
  }

  // Generate Option Breakdown Table in Hinglish
  function generateWrongOptionsBreakdown(q, correctLetters) {
    const allOptions = Object.keys(q.options).sort();
    let rowsHtml = '';

    allOptions.forEach(optLetter => {
      const isCorrect = correctLetters.includes(optLetter);
      const optText = q.options[optLetter];

      if (!isCorrect) {
        let reason = '';
        if (q.wrongOptions && q.wrongOptions[optLetter]) {
          reason = q.wrongOptions[optLetter];
        } else if (optText.toLowerCase().includes('incognito')) {
          reason = 'Incognito session data privacy policy ya explicit ban ko override nahi karta.';
        } else if (optText.toLowerCase().includes('paraphras')) {
          reason = 'Paraphrasing se confidential data ban circumvent nahi hota.';
        } else if (optText.toLowerCase().includes('split the prompt into separate')) {
          reason = 'Prompt ko tone aur structure mein split karna unnecessary complexity badhata hai.';
        } else if (optText.toLowerCase().includes('model is non-deterministic')) {
          reason = 'Non-determinism sach hai, lekin prompt ko tighten kiye bina variation accept karna galat practice hai.';
        } else if (optText.toLowerCase().includes('thousand words') || optText.toLowerCase().includes('800 words')) {
          reason = 'Word count quota prompt quality ka criterion nahi hota; clarity aur constraints matter karte hain.';
        } else if (optText.toLowerCase().includes('favorite opening phrase') || optText.toLowerCase().includes('signature')) {
          reason = 'Personal stylistic quirks prompt ki quality decide nahi karte.';
        } else if (optText.toLowerCase().includes('immediately replace claude with a competitor') || optText.toLowerCase().includes('switch immediately')) {
          reason = 'Vendor badalna last resort hai; sabse pehle conversation ko summarize aur re-anchor karna chahiye.';
        } else if (optText.toLowerCase().includes('rewrite the entire prompt from scratch')) {
          reason = 'Bina diagnosis ke scratch se rewrite karne se jo accha part tha wo bhi kho jata hai.';
        } else if (optText.toLowerCase().includes('average the two')) {
          reason = 'Conflicting sources ka average nikalna guessing hai, verification nahi.';
        } else if (optText.toLowerCase().includes('consult the brand voice') || optText.toLowerCase().includes('also consult')) {
          reason = 'Vague hidayat (consult) model ko enforce nahi karti; explicit constraints prompt mein hone chahiye.';
        } else if (optText.toLowerCase().includes('without any human review') || optText.toLowerCase().includes('fully automated')) {
          reason = 'High-stakes external publication ya legal/employment decisions mein human accountability mandatory hoti hai.';
        } else {
          reason = 'Yeh option question ki core requirement ko satisfy nahi karta ya unnecessary risk/overhead introduce karta hai.';
        }

        rowsHtml += `
          <tr>
            <td style="font-weight: 700; color: #fb7185;">Option ${optLetter}</td>
            <td style="color: #cbd5e1;">${reason}</td>
          </tr>
        `;
      }
    });

    return `
      <table class="styled-table" style="margin-top: 0.5rem;">
        <thead>
          <tr>
            <th style="width: 110px;">Option</th>
            <th>Kyun Galat Hai?</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    `;
  }

  // Create Question Card
  function createQuestionCard(q) {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.id = `q-${q.num}`;

    const correctLetters = parseAnswerLetters(q.correctAnswer);
    const saved = userAnswers[q.num] || { selected: [], checked: false };

    // Format Question Text
    const formattedQText = q.question.replace(/\n/g, '<br>');

    // Build Options HTML
    let optionsHtml = '';
    const optionKeys = Object.keys(q.options).sort();

    optionKeys.forEach(letter => {
      const isSelected = saved.selected.includes(letter);
      let statusClass = '';

      if (saved.checked) {
        if (correctLetters.includes(letter)) {
          statusClass = 'correct-revealed';
        } else if (isSelected) {
          statusClass = 'wrong-revealed';
        }
      } else if (isSelected) {
        statusClass = 'selected';
      }

      optionsHtml += `
        <div class="option-item ${statusClass}" data-letter="${letter}">
          <span class="option-letter">${letter}</span>
          <div class="option-content">${q.options[letter]}</div>
        </div>
      `;
    });

    const isMultiTag = q.isMulti ? '✨ Select Multiple (Check all that apply)' : 'Single Choice';
    const titleBadge = q.title ? `<span class="q-title-badge">${q.title}</span>` : '';
    const hinglishBox = q.hinglishQ ? `
      <div class="q-hinglish-box">
        <strong>📝 Asan Bhasha Mein Sawal:</strong> ${q.hinglishQ}
      </div>
    ` : '';

    const whyCorrectText = q.whyCorrect || q.explanation.replace(/\n/g, '<br>');
    const examTipText = q.examTip || 'Hamesha official principles (explicit constraints, diagnosis first, primary sources, human accountability) par focus karein.';

    card.innerHTML = `
      <div class="q-top">
        <div class="q-number-box">
          <span class="q-number">Question ${q.num}</span>
          ${titleBadge}
        </div>
        <span class="q-tag">${isMultiTag}</span>
      </div>

      ${hinglishBox}

      <div class="q-text">${formattedQText}</div>

      <div class="options-list">
        ${optionsHtml}
      </div>

      <button class="check-btn" ${saved.checked ? 'style="display:none;"' : ''}>
        Check Answer
      </button>

      <!-- Explanation Panel -->
      <div class="explanation-panel ${saved.checked ? 'show' : ''}">
        <div class="exp-box exp-correct">
          <div class="exp-correct-title">
            <span>✅ Sahi Answer: ${q.correctAnswer}</span>
          </div>
          <div><strong>Kyun Sahi Hai:</strong> ${whyCorrectText}</div>
        </div>

        <div class="exp-box exp-wrong-breakdown">
          <div class="exp-wrong-title">❌ Baaki Options Kyun Galat Hain:</div>
          ${generateWrongOptionsBreakdown(q, correctLetters)}
        </div>

        <div class="exp-box exp-trap">
          <strong>💡 Exam Tip:</strong> ${examTipText}
        </div>
      </div>
    `;

    // Interaction Logic
    const optionElements = card.querySelectorAll('.option-item');
    const checkBtn = card.querySelector('.check-btn');
    const expPanel = card.querySelector('.explanation-panel');

    let currentSelected = [...saved.selected];

    optionElements.forEach(optEl => {
      optEl.addEventListener('click', () => {
        if (saved.checked) return;

        const letter = optEl.dataset.letter;

        if (q.isMulti) {
          if (currentSelected.includes(letter)) {
            currentSelected = currentSelected.filter(l => l !== letter);
            optEl.classList.remove('selected');
          } else {
            currentSelected.push(letter);
            optEl.classList.add('selected');
          }
        } else {
          currentSelected = [letter];
          optionElements.forEach(el => el.classList.remove('selected'));
          optEl.classList.add('selected');
        }
      });
    });

    checkBtn.addEventListener('click', () => {
      if (currentSelected.length === 0) {
        alert('Pehle koi option select kijiye!');
        return;
      }

      currentSelected.sort();
      const isCorrect = JSON.stringify(currentSelected) === JSON.stringify(correctLetters);

      saved.selected = currentSelected;
      saved.checked = true;
      saved.isCorrect = isCorrect;
      userAnswers[q.num] = saved;
      localStorage.setItem('ccaof_answers', JSON.stringify(userAnswers));

      // Reveal Colors on Options
      optionElements.forEach(el => {
        const letter = el.dataset.letter;
        el.classList.remove('selected');

        if (correctLetters.includes(letter)) {
          el.classList.add('correct-revealed');
        } else if (currentSelected.includes(letter)) {
          el.classList.add('wrong-revealed');
        }
      });

      checkBtn.style.display = 'none';
      expPanel.classList.add('show');
      updateStats();
    });

    return card;
  }

  // Update Stats Bar
  function updateStats() {
    const totalAttempted = Object.keys(userAnswers).length;
    let correctCount = 0;

    Object.values(userAnswers).forEach(ans => {
      if (ans.isCorrect) correctCount++;
    });

    const wrongCount = totalAttempted - correctCount;
    const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

    statAttempted.textContent = `${totalAttempted}/110`;
    statCorrect.textContent = correctCount;
    statWrong.textContent = wrongCount;
    statAccuracy.textContent = `${accuracy}%`;
  }
});
