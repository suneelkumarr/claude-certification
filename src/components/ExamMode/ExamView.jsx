import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Flag, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Award,
  Grid,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ExamView({ exam, onSwitchToStudy }) {
  const TOTAL_QUESTIONS = exam.quizQuestionCount || 60;
  const TOTAL_SECONDS = (exam.durationMinutes || 120) * 60;
  const PASSING_PCT = exam.passingPercentage || 70;

  // Mid-exam persistence: check if active session exists in localStorage
  const savedSessionKey = `active_exam_session_${exam.id}`;

  const [phase, setPhase] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(savedSessionKey) || 'null');
      return saved?.phase || 'intro';
    } catch {
      return 'intro';
    }
  });

  const [examQuestions, setExamQuestions] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(savedSessionKey) || 'null');
      return saved?.questions || [];
    } catch {
      return [];
    }
  });

  const [currentIndex, setCurrentIndex] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(savedSessionKey) || 'null');
      return saved?.currentIndex || 0;
    } catch {
      return 0;
    }
  });

  const [userResponses, setUserResponses] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(savedSessionKey) || 'null');
      return saved?.userResponses || {};
    } catch {
      return {};
    }
  });

  const [remainingSeconds, setRemainingSeconds] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(savedSessionKey) || 'null');
      return typeof saved?.remainingSeconds === 'number' ? saved.remainingSeconds : TOTAL_SECONDS;
    } catch {
      return TOTAL_SECONDS;
    }
  });

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [mobilePaletteOpen, setMobilePaletteOpen] = useState(false);
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all', 'correct', 'wrong'

  // Sync active exam session to localStorage while running
  useEffect(() => {
    if (phase === 'running' && examQuestions.length > 0) {
      const sessionData = {
        phase: 'running',
        questions: examQuestions,
        currentIndex,
        userResponses,
        remainingSeconds,
        savedAt: Date.now()
      };
      localStorage.setItem(savedSessionKey, JSON.stringify(sessionData));
    } else if (phase === 'report' || phase === 'intro') {
      localStorage.removeItem(savedSessionKey);
    }
  }, [phase, examQuestions, currentIndex, userResponses, remainingSeconds, savedSessionKey]);

  // Pick balanced questions across all concepts
  const initExamQuestions = () => {
    const selected = [];
    const questionsByConcept = {};

    exam.concepts.forEach(c => {
      questionsByConcept[c.id] = [];
    });

    exam.questions.forEach(q => {
      const cId = q.conceptId || exam.concepts[0]?.id;
      if (!questionsByConcept[cId]) questionsByConcept[cId] = [];
      questionsByConcept[cId].push(q);
    });

    // Take balanced sample from each concept
    const quotaPerTopic = Math.ceil(TOTAL_QUESTIONS / exam.concepts.length);
    exam.concepts.forEach(c => {
      const pool = [...(questionsByConcept[c.id] || [])];
      shuffle(pool);
      selected.push(...pool.slice(0, quotaPerTopic));
    });

    // Trim or fill up to TOTAL_QUESTIONS
    if (selected.length < TOTAL_QUESTIONS) {
      const remainingPool = exam.questions.filter(q => !selected.some(s => s.num === q.num));
      shuffle(remainingPool);
      while (selected.length < TOTAL_QUESTIONS && remainingPool.length > 0) {
        selected.push(remainingPool.pop());
      }
    }

    shuffle(selected);
    const finalSet = selected.slice(0, TOTAL_QUESTIONS);

    setExamQuestions(finalSet);
    setCurrentIndex(0);
    setUserResponses({});
    setRemainingSeconds(TOTAL_SECONDS);
    setPhase('running');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Timer countdown hook
  useEffect(() => {
    let timer = null;
    if (phase === 'running' && remainingSeconds > 0) {
      timer = setInterval(() => {
        setRemainingSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [phase, remainingSeconds]);

  // Handle option select in exam
  const handleSelectOption = (idx, letter, isMulti) => {
    const current = userResponses[idx] || { selected: [], markedReview: false };
    let updatedSelected = [];

    if (isMulti) {
      if (current.selected.includes(letter)) {
        updatedSelected = current.selected.filter(l => l !== letter);
      } else {
        updatedSelected = [...current.selected, letter];
      }
    } else {
      updatedSelected = [letter];
    }

    setUserResponses({
      ...userResponses,
      [idx]: { ...current, selected: updatedSelected }
    });
  };

  // Toggle review flag
  const handleToggleReview = (idx) => {
    const current = userResponses[idx] || { selected: [], markedReview: false };
    setUserResponses({
      ...userResponses,
      [idx]: { ...current, markedReview: !current.markedReview }
    });
  };

  // Clear current response
  const handleClearCurrent = () => {
    const current = userResponses[currentIndex] || { selected: [], markedReview: false };
    setUserResponses({
      ...userResponses,
      [currentIndex]: { ...current, selected: [] }
    });
  };

  // Finalize Exam
  const handleFinishExam = () => {
    setShowSubmitModal(false);
    setPhase('report');
    localStorage.removeItem(savedSessionKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger celebratory confetti if passed!
    const correctCount = examQuestions.reduce((acc, q, idx) => {
      const correct = (q.correctAnswer.match(/[A-E]/g) || []).sort();
      const user = [...(userResponses[idx]?.selected || [])].sort();
      return JSON.stringify(correct) === JSON.stringify(user) ? acc + 1 : acc;
    }, 0);

    if (Math.round((correctCount / TOTAL_QUESTIONS) * 100) >= PASSING_PCT) {
      confetti({ particleCount: 110, spread: 75, origin: { y: 0.6 } });
    }
  };

  // Format time (MM:SS)
  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // -------------------------------------------------------------
  // PHASE 1: INTRO SCREEN
  // -------------------------------------------------------------
  if (phase === 'intro') {
    return (
      <div style={{ maxWidth: 900, margin: '2.5rem auto', padding: '0 1.25rem', width: '100%' }}>
        <div style={{
          background: 'linear-gradient(145deg, rgba(20, 27, 39, 0.88) 0%, rgba(12, 17, 26, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(1.75rem, 1.4rem + 1.2vw, 3rem)',
          textAlign: 'center',
          boxShadow: 'var(--shadow-lg), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle Ambient Light */}
          <div style={{
            position: 'absolute',
            top: -70,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 400,
            height: 200,
            background: 'radial-gradient(ellipse, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            background: 'rgba(239, 68, 68, 0.12)',
            color: '#f87171',
            padding: '0.35rem 1rem',
            borderRadius: 9999,
            fontSize: '0.76rem',
            fontWeight: 800,
            marginBottom: '1.25rem',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            <Zap size={14} />
            <span>Independent Practice Exam Simulation</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.75rem, 1.4rem + 1.2vw, 2.5rem)',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '0.85rem',
            letterSpacing: '-0.025em'
          }}>
            <span className="text-gradient-amber">{exam.shortCode}</span> 120-Minute Exam Simulator
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: 680,
            margin: '0 auto 2.25rem',
            fontSize: '1rem',
            lineHeight: 1.65
          }}>
            Yeh simulator pool mein se <strong>randomly 60 questions</strong> select karta hai, jisme sabhi <strong>{exam.concepts.length} core concepts</strong> ka equal proportion hota hai. Practice timing aur score benchmark ke saath apni preparation test karein. Yeh official exam simulation nahi hai.
          </p>

          {/* 4 Feature Highlights Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
            textAlign: 'left'
          }}>
            <div style={{
              background: 'rgba(10, 15, 22, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>⏳</div>
              <div style={{ fontWeight: 800, color: '#f8fafc', fontSize: '0.98rem', marginBottom: '0.2rem' }}>120 Minutes Timer</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Countdown with automatic submission at 00:00.</div>
            </div>

            <div style={{
              background: 'rgba(10, 15, 22, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>📋</div>
              <div style={{ fontWeight: 800, color: '#f8fafc', fontSize: '0.98rem', marginBottom: '0.2rem' }}>60 Balanced Questions</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>All {exam.concepts.length} curriculum modules proportionately distributed.</div>
            </div>

            <div style={{
              background: 'rgba(10, 15, 22, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>🎯</div>
              <div style={{ fontWeight: 800, color: '#f8fafc', fontSize: '0.98rem', marginBottom: '0.2rem' }}>70% Practice Benchmark</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>42 / 60 correct answers reaches this practice benchmark; this is not an official passing score.</div>
            </div>

            <div style={{
              background: 'rgba(10, 15, 22, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>📊</div>
              <div style={{ fontWeight: 800, color: '#f8fafc', fontSize: '0.98rem', marginBottom: '0.2rem' }}>Diagnostic Scorecard</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Topic breakdown, weak areas diagnosis & review answers.</div>
            </div>
          </div>

          <button
            type="button"
            onClick={initExamQuestions}
            style={{
              background: 'var(--primary-gradient)',
              color: '#000',
              border: 'none',
              padding: '1rem 3rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 800,
              fontSize: '1.1rem',
              cursor: 'pointer',
              minHeight: 52,
              boxShadow: '0 4px 20px rgba(245, 158, 11, 0.45)',
              transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            🚀 Start 120-Minute Exam Simulation Now
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHASE 2: RUNNING ACTIVE EXAM
  // -------------------------------------------------------------
  if (phase === 'running') {
    const currentQ = examQuestions[currentIndex] || examQuestions[0];
    const currentResp = userResponses[currentIndex] || { selected: [], markedReview: false };
    const answeredCount = Object.values(userResponses).filter(r => r.selected.length > 0).length;

    const timerColor = remainingSeconds < 600 ? '#f87171' : remainingSeconds < 1800 ? '#fbbf24' : '#38bdf8';

    return (
      <div style={{ maxWidth: 1440, margin: '1.5rem auto', padding: '0 1.25rem', width: '100%' }}>
        
        {/* Exam Sub-Header with Floating Timer Bar */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 27, 39, 0.85) 0%, rgba(12, 17, 26, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-lg)',
          padding: '0.85rem 1.35rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 800, color: '#fbbf24', fontSize: '1rem' }}>
              {exam.shortCode} Timed Simulation
            </span>
            <span style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.2rem 0.65rem',
              borderRadius: 9999
            }}>
              {answeredCount} / {TOTAL_QUESTIONS} Answered
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Live Countdown Timer */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(10, 15, 22, 0.7)',
              padding: '0.45rem 1.15rem',
              borderRadius: 9999,
              border: `1px solid ${timerColor}`,
              boxShadow: `0 0 16px -4px ${timerColor}44`
            }}>
              <Clock size={18} color={timerColor} aria-hidden="true" />
              <span 
                role="timer"
                aria-live="polite"
                aria-atomic="true"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 800, color: timerColor }}
              >
                {formatTime(remainingSeconds)}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: '#fff',
                border: 'none',
                padding: '0.55rem 1.35rem',
                borderRadius: 9999,
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                minHeight: 42,
                boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)'
              }}
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Mobile Question Palette Toggle Button (< 1024px) */}
        <div style={{ marginBottom: '1rem' }}>
          <button
            type="button"
            onClick={() => setMobilePaletteOpen(!mobilePaletteOpen)}
            style={{
              width: '100%',
              background: 'rgba(20, 28, 40, 0.85)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              padding: '0.75rem 1.15rem',
              borderRadius: 'var(--radius-md)',
              color: '#38bdf8',
              fontWeight: 700,
              fontSize: '0.88rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: 44
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Grid size={18} /> Question Palette ({answeredCount}/{TOTAL_QUESTIONS} Answered)
            </span>
            <span>{mobilePaletteOpen ? 'Hide ▲' : 'Show ▼'}</span>
          </button>
        </div>

        {/* Main Exam Grid: Question Pane + Right Palette */}
        <div className="exam-layout-grid">
          
          {/* Question Pane */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(16, 22, 32, 0.85) 0%, rgba(11, 16, 24, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.25rem, 1rem + 1vw, 2.25rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 540,
            boxShadow: 'var(--shadow-lg), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            minWidth: 0
          }}>
            <div>
              {/* Question Top Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#fbbf24' }}>
                    Question {currentIndex + 1} of {TOTAL_QUESTIONS}
                  </span>
                  <span style={{
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)',
                    background: 'rgba(255, 255, 255, 0.06)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: 9999
                  }}>
                    PDF #{currentQ.num}
                  </span>
                  <span style={{
                    fontSize: '0.74rem',
                    color: '#38bdf8',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: 9999
                  }}>
                    {currentQ.conceptId?.replace(/-/g, ' ')}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.65rem',
                    borderRadius: 9999,
                    background: currentQ.isMulti ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                    color: currentQ.isMulti ? '#a5b4fc' : 'var(--text-muted)'
                  }}>
                    {currentQ.isMulti ? 'Select Two' : 'Single Choice'}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleToggleReview(currentIndex)}
                    style={{
                      background: currentResp.markedReview ? 'rgba(245, 158, 11, 0.18)' : 'rgba(255, 255, 255, 0.06)',
                      border: `1px solid ${currentResp.markedReview ? '#f59e0b' : 'rgba(255, 255, 255, 0.1)'}`,
                      color: currentResp.markedReview ? '#fbbf24' : 'var(--text-muted)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      minHeight: 36
                    }}
                  >
                    <Flag size={14} fill={currentResp.markedReview ? '#f59e0b' : 'none'} />
                    <span>{currentResp.markedReview ? 'Flagged' : 'Flag'}</span>
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div style={{
                fontSize: '1.05rem',
                fontWeight: 500,
                color: '#f8fafc',
                lineHeight: 1.65,
                marginBottom: '1.5rem'
              }} dangerouslySetInnerHTML={{ __html: currentQ.question.replace(/\n/g, '<br>') }} />

              {/* Options Tiles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {Object.keys(currentQ.options).sort().map(letter => {
                  const isSelected = currentResp.selected.includes(letter);
                  return (
                    <div
                      key={letter}
                      role={currentQ.isMulti ? 'checkbox' : 'radio'}
                      aria-checked={isSelected}
                      tabIndex={0}
                      onClick={() => handleSelectOption(currentIndex, letter, currentQ.isMulti)}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          handleSelectOption(currentIndex, letter, currentQ.isMulti);
                        }
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.9rem',
                        padding: '1rem 1.25rem',
                        background: isSelected ? 'rgba(245, 158, 11, 0.15)' : 'rgba(10, 15, 22, 0.55)',
                        border: `1px solid ${isSelected ? '#f59e0b' : 'rgba(255, 255, 255, 0.08)'}`,
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        userSelect: 'none',
                        minHeight: 48,
                        boxShadow: isSelected ? '0 0 18px -4px rgba(245, 158, 11, 0.35)' : 'none'
                      }}
                    >
                      <span style={{
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isSelected ? '#f59e0b' : 'rgba(255, 255, 255, 0.08)',
                        color: isSelected ? '#000' : '#fff',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: 1
                      }}>
                        {letter}
                      </span>
                      <span style={{
                        fontSize: '0.96rem',
                        color: '#f1f5f9',
                        lineHeight: 1.55,
                        fontWeight: isSelected ? 600 : 400
                      }}>
                        {currentQ.options[letter]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Navigation Buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    padding: '0.65rem 1.15rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                    minHeight: 44
                  }}
                >
                  <ChevronLeft size={16} /> Previous
                </button>

                <button
                  type="button"
                  onClick={handleClearCurrent}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-muted)',
                    padding: '0.65rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    minHeight: 44
                  }}
                >
                  Clear Selection
                </button>
              </div>

              {currentIndex < TOTAL_QUESTIONS - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIndex(prev => Math.min(TOTAL_QUESTIONS - 1, prev + 1))}
                  style={{
                    background: 'var(--primary-gradient)',
                    color: '#000',
                    border: 'none',
                    padding: '0.65rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)',
                    minHeight: 44
                  }}
                >
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(true)}
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: '#fff',
                    border: 'none',
                    padding: '0.65rem 1.75rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
                    minHeight: 44
                  }}
                >
                  Finish & Submit Exam ✅
                </button>
              )}
            </div>
          </div>

          {/* Right Question Palette (Desktop Sticky Panel) */}
          <aside style={{
            background: 'linear-gradient(145deg, rgba(16, 22, 32, 0.85) 0%, rgba(11, 16, 24, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.25rem',
            height: 'fit-content',
            position: 'sticky',
            top: 90,
            maxHeight: 'calc(100dvh - 110px)',
            overflowY: 'auto',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <span style={{ fontWeight: 800, fontSize: '0.92rem', color: '#fff' }}>Question Palette</span>
              <span style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 700 }}>
                {answeredCount}/{TOTAL_QUESTIONS} Answered
              </span>
            </div>

            {/* Legend */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.45rem',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: 10, height: 10, background: '#10b981', borderRadius: 2 }} />
                <span>Answered</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: 10, height: 10, background: '#f59e0b', borderRadius: 2 }} />
                <span>Flagged</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: 10, height: 10, background: 'rgba(255, 255, 255, 0.1)', borderRadius: 2 }} />
                <span>Unanswered</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: 10, height: 10, border: '2px solid #38bdf8', borderRadius: 2 }} />
                <span>Current</span>
              </div>
            </div>

            {/* Question Grid Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.45rem' }}>
              {examQuestions.map((_, i) => {
                const resp = userResponses[i];
                const isAnswered = resp && resp.selected.length > 0;
                const isReview = resp && resp.markedReview;
                const isCurrent = i === currentIndex;

                let bg = 'rgba(255, 255, 255, 0.05)';
                let color = 'var(--text-muted)';
                let border = 'rgba(255, 255, 255, 0.08)';

                if (isReview) {
                  bg = 'rgba(245, 158, 11, 0.25)';
                  border = '#f59e0b';
                  color = '#fef08a';
                } else if (isAnswered) {
                  bg = 'rgba(16, 185, 129, 0.2)';
                  border = '#10b981';
                  color = '#34d399';
                }

                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Jump to question ${i + 1}`}
                    onClick={() => {
                      setCurrentIndex(i);
                      setMobilePaletteOpen(false);
                    }}
                    style={{
                      aspectRatio: '1',
                      background: bg,
                      border: `1px solid ${border}`,
                      color: color,
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      outline: isCurrent ? '2px solid #38bdf8' : 'none',
                      outlineOffset: 1,
                      minHeight: 38,
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </aside>

        </div>

        {/* Submit Modal with accessible attributes */}
        {showSubmitModal && (
          <div 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="modal-submit-title"
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 200,
              backdropFilter: 'blur(8px)',
              padding: '1rem'
            }}
          >
            <div style={{
              background: 'linear-gradient(145deg, rgba(20, 27, 39, 0.95) 0%, rgba(12, 17, 26, 0.98) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.25rem',
              maxWidth: 480,
              width: '100%',
              textAlign: 'center',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <h3 id="modal-submit-title" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: '#fff' }}>
                Submit Exam?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Aapne <strong>{TOTAL_QUESTIONS} mein se {answeredCount} questions</strong> answer kiye hain. Kya aap sure hain ki exam submit karke final diagnostic scorecard dekhna chahte hain?
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#f8fafc',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    minHeight: 44,
                    cursor: 'pointer'
                  }}
                >
                  Keep Practicing
                </button>
                <button
                  type="button"
                  onClick={handleFinishExam}
                  style={{
                    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                    color: '#fff',
                    border: 'none',
                    padding: '0.75rem 1.75rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 800,
                    minHeight: 44,
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)'
                  }}
                >
                  Confirm & Submit
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  // -------------------------------------------------------------
  // PHASE 3: DIAGNOSTIC SCORE REPORT
  // -------------------------------------------------------------
  if (phase === 'report') {
    let correctCount = 0;
    const topicStats = {};

    exam.concepts.forEach(c => {
      topicStats[c.id] = { title: c.title, total: 0, correct: 0 };
    });

    const evaluatedQuestions = examQuestions.map((q, idx) => {
      const correctLetters = (q.correctAnswer.match(/[A-E]/g) || []).sort();
      const userLetters = [...(userResponses[idx]?.selected || [])].sort();
      const isCorrect = JSON.stringify(correctLetters) === JSON.stringify(userLetters);

      if (isCorrect) correctCount++;

      const cId = q.conceptId || exam.concepts[0]?.id;
      if (!topicStats[cId]) topicStats[cId] = { title: cId, total: 0, correct: 0 };
      topicStats[cId].total++;
      if (isCorrect) topicStats[cId].correct++;

      return {
        q,
        idx,
        userLetters,
        correctLetters,
        isCorrect
      };
    });

    const scorePct = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
    const isPass = scorePct >= PASSING_PCT;
    const timeSpentSecs = TOTAL_SECONDS - remainingSeconds;

    // Filter review questions
    let filteredQuestions = evaluatedQuestions;
    if (reviewFilter === 'correct') filteredQuestions = evaluatedQuestions.filter(i => i.isCorrect);
    if (reviewFilter === 'wrong') filteredQuestions = evaluatedQuestions.filter(i => !i.isCorrect);

    // Identify weak areas (< 70%)
    const weakTopics = Object.keys(topicStats).filter(cId => {
      const s = topicStats[cId];
      return s.total > 0 && Math.round((s.correct / s.total) * 100) < PASSING_PCT;
    });

    return (
      <div style={{ maxWidth: 1160, margin: '2rem auto', padding: '0 1.25rem', display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
        
        {/* Score Overview Banner */}
        <section 
          aria-label="Exam Results Summary"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 27, 39, 0.9) 0%, rgba(12, 17, 26, 0.98) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${isPass ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.5rem, 1.2rem + 1vw, 2.75rem)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            boxShadow: 'var(--shadow-lg), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Circular Score Badge */}
          <div style={{
            width: 150,
            height: 150,
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.55)',
            border: `6px solid ${isPass ? '#10b981' : '#ef4444'}`,
            color: isPass ? '#34d399' : '#f87171',
            boxShadow: `0 0 32px -6px ${isPass ? 'rgba(16, 185, 129, 0.5)' : 'rgba(239, 68, 68, 0.5)'}`,
            flexShrink: 0
          }}>
            <span style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1 }}>{scorePct}%</span>
            <span style={{ fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.35rem', letterSpacing: '0.06em' }}>
              {isPass ? 'PASSED ✅' : 'NEEDS WORK ❌'}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem', flex: 1, minWidth: 260 }}>
            <div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>Total Score</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginTop: '0.2rem' }}>{correctCount} / {TOTAL_QUESTIONS}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>Passing Gate</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#34d399', marginTop: '0.2rem' }}>42 / 60 (70%)</div>
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>Time Elapsed</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8', marginTop: '0.2rem' }}>{formatTime(timeSpentSecs)}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>Target Date</div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fbbf24', marginTop: '0.35rem' }}>{exam.examDate}</div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={initExamQuestions}
            style={{
              padding: '0.9rem 2.25rem',
              fontSize: '1rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: 'var(--primary-gradient)',
              color: '#000',
              fontWeight: 800,
              cursor: 'pointer',
              minHeight: 48,
              boxShadow: '0 4px 18px rgba(245, 158, 11, 0.45)'
            }}
          >
            🔄 Take Another 60-Question Quiz (Fresh Random Set)
          </button>
          <button
            type="button"
            onClick={onSwitchToStudy}
            style={{
              padding: '0.9rem 2.25rem',
              fontSize: '1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              background: 'rgba(255, 255, 255, 0.06)',
              color: '#fff',
              fontWeight: 700,
              minHeight: 48,
              cursor: 'pointer'
            }}
          >
            📚 Back to Concept Study Guide
          </button>
        </div>

        {/* Weak Areas Alert Box */}
        {weakTopics.length > 0 ? (
          <div style={{
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem'
          }}>
            <h3 style={{ color: '#f87171', fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={20} /> Priority Review Areas (&lt; 70% Score)
            </h3>
            <ul style={{ paddingLeft: '1.25rem', color: '#fecdd3', fontSize: '0.94rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', lineHeight: 1.6 }}>
              {weakTopics.map(cId => {
                const stat = topicStats[cId];
                const pct = Math.round((stat.correct / stat.total) * 100);
                return (
                  <li key={cId}>
                    <strong style={{ color: '#fff' }}>{stat.title} ({pct}%):</strong> Study Guide mein is topic ke Master Formula aur Revision Matrix ko dobara check karein.
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div style={{
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem'
          }}>
            <h3 style={{ color: '#34d399', fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle size={20} /> 🎉 Outstanding Performance Across All Topics!
            </h3>
            <p style={{ color: '#d1fae5', fontSize: '0.94rem', lineHeight: 1.6 }}>
              Aapne sabhi topics mein passing benchmark (70%+) paar kar liya hai. Aapka foundation exam-ready hai!
            </p>
          </div>
        )}

        {/* Topic Breakdown Progress Bars */}
        <section 
          aria-labelledby="topic-breakdown-heading" 
          style={{
            background: 'linear-gradient(145deg, rgba(16, 22, 32, 0.8) 0%, rgba(11, 16, 24, 0.9) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.25rem, 1rem + 1vw, 2rem)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <h3 id="topic-breakdown-heading" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.35rem', color: '#fff' }}>
            📊 Diagnostic Breakdown by Curriculum Topic
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            {Object.keys(topicStats).map(cId => {
              const stat = topicStats[cId];
              if (stat.total === 0) return null;
              const pct = Math.round((stat.correct / stat.total) * 100);
              const barColor = pct >= 80 ? '#34d399' : pct >= 70 ? '#38bdf8' : '#f87171';

              return (
                <div key={cId}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                    <span style={{ fontWeight: 600, color: '#f8fafc' }}>{stat.title}</span>
                    <span style={{ color: barColor, fontWeight: 800 }}>{stat.correct}/{stat.total} ({pct}%)</span>
                  </div>
                  <div style={{ height: 10, background: 'rgba(0, 0, 0, 0.45)', borderRadius: 9999, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${pct}%`, background: barColor, borderRadius: 9999, transition: 'width 0.6s ease' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Question-by-Question Review */}
        <section 
          aria-labelledby="question-review-heading" 
          style={{
            background: 'linear-gradient(145deg, rgba(16, 22, 32, 0.8) 0%, rgba(11, 16, 24, 0.9) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.25rem, 1rem + 1vw, 2rem)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <h3 id="question-review-heading" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
              📝 Question-by-Question Detailed Review ({filteredQuestions.length})
            </h3>
            
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setReviewFilter('all')}
                style={{
                  background: reviewFilter === 'all' ? 'var(--primary-gradient)' : 'rgba(255, 255, 255, 0.05)',
                  color: reviewFilter === 'all' ? '#000' : 'var(--text-muted)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  minHeight: 36,
                  cursor: 'pointer'
                }}
              >
                All ({TOTAL_QUESTIONS})
              </button>

              <button
                type="button"
                onClick={() => setReviewFilter('correct')}
                style={{
                  background: reviewFilter === 'correct' ? '#10b981' : 'rgba(255, 255, 255, 0.05)',
                  color: reviewFilter === 'correct' ? '#000' : '#34d399',
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  minHeight: 36,
                  cursor: 'pointer'
                }}
              >
                Correct ({correctCount})
              </button>

              <button
                type="button"
                onClick={() => setReviewFilter('wrong')}
                style={{
                  background: reviewFilter === 'wrong' ? '#ef4444' : 'rgba(255, 255, 255, 0.05)',
                  color: reviewFilter === 'wrong' ? '#fff' : '#f87171',
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  minHeight: 36,
                  cursor: 'pointer'
                }}
              >
                Incorrect ({TOTAL_QUESTIONS - correctCount})
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
            {filteredQuestions.map(item => {
              const q = item.q;
              return (
                <article
                  key={item.idx}
                  style={{
                    background: 'rgba(10, 15, 22, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderLeft: `4px solid ${item.isCorrect ? '#10b981' : '#ef4444'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: 'clamp(1rem, 0.85rem + 0.6vw, 1.45rem)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 800, color: '#fbbf24', fontSize: '1.02rem' }}>
                      Exam Q{item.idx + 1} (PDF Question #{q.num})
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: item.isCorrect ? '#34d399' : '#f87171',
                      background: item.isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 4
                    }}>
                      {item.isCorrect ? 'CORRECT (+1)' : 'INCORRECT (0)'}
                    </span>
                  </div>

                  <div style={{ fontWeight: 500, fontSize: '1rem', marginBottom: '1.15rem', color: '#f8fafc', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: q.question.replace(/\n/g, '<br>') }} />

                  {/* Options List with Badges */}
                  <div style={{ background: 'rgba(0, 0, 0, 0.35)', padding: '0.95rem', borderRadius: 8, marginBottom: '1.15rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {Object.keys(q.options).sort().map(letter => {
                      const isUser = item.userLetters.includes(letter);
                      const isAns = item.correctLetters.includes(letter);

                      return (
                        <div key={letter} style={{ fontSize: '0.92rem', color: isAns ? '#6ee7b7' : isUser ? '#fca5a5' : '#cbd5e1', lineHeight: 1.55 }}>
                          <strong style={{ color: isAns ? '#34d399' : isUser ? '#f87171' : '#fff' }}>{letter}.</strong> {q.options[letter]}
                          {isAns && <span style={{ color: '#34d399', fontWeight: 800, marginLeft: '0.6rem' }}>[Correct Answer ✅]</span>}
                          {isUser && !isAns && <span style={{ color: '#f87171', fontWeight: 800, marginLeft: '0.6rem' }}>[Your Choice ❌]</span>}
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ background: 'rgba(16, 185, 129, 0.08)', borderLeft: '3px solid #10b981', padding: '0.85rem 1.15rem', borderRadius: '0 6px 6px 0', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#34d399', fontSize: '0.92rem' }}>Kyun Sahi Hai:</strong>
                    <p style={{ color: '#d1fae5', fontSize: '0.9rem', marginTop: '0.3rem', lineHeight: 1.6 }}>{q.whyCorrect || q.explanation}</p>
                  </div>

                  {q.examTip && (
                    <div style={{ background: 'rgba(245, 158, 11, 0.08)', borderLeft: '3px solid #f59e0b', padding: '0.85rem 1.15rem', borderRadius: '0 6px 6px 0' }}>
                      <strong style={{ color: '#fbbf24', fontSize: '0.92rem' }}>💡 Exam Memory Tip:</strong>
                      <p style={{ color: '#fef3c7', fontSize: '0.9rem', marginTop: '0.3rem', lineHeight: 1.6 }}>{q.examTip}</p>
                    </div>
                  )}

                </article>
              );
            })}
          </div>

        </section>

      </div>
    );
  }

  return null;
}
