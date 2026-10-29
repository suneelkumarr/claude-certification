import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  XCircle, 
  Lightbulb, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Filter,
  Check,
  Bookmark,
  Sparkles,
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';

export default function StudyView({ exam }) {
  const [activeConceptId, setActiveConceptId] = useState(exam.concepts[0]?.id || '');
  const [filterType, setFilterType] = useState('all'); // 'all', 'earlier', 'repeated', 'bookmarked'
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [userAnswers, setUserAnswers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`study_answers_${exam.id}`) || '{}');
    } catch {
      return {};
    }
  });

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`study_bookmarks_${exam.id}`) || '[]');
    } catch {
      return [];
    }
  });

  const activeConcept = exam.concepts.find(c => c.id === activeConceptId) || exam.concepts[0];

  // Toggle Bookmark
  const toggleBookmark = (qNum) => {
    const updated = bookmarks.includes(qNum) 
      ? bookmarks.filter(n => n !== qNum)
      : [...bookmarks, qNum];
    setBookmarks(updated);
    localStorage.setItem(`study_bookmarks_${exam.id}`, JSON.stringify(updated));
  };

  // Filter questions
  let displayedQuestions = [];
  if (activeConcept) {
    if (filterType === 'earlier') {
      displayedQuestions = exam.questions.filter(q => activeConcept.earlier.includes(q.num));
    } else if (filterType === 'repeated') {
      displayedQuestions = exam.questions.filter(q => activeConcept.repeated.includes(q.num));
    } else if (filterType === 'bookmarked') {
      displayedQuestions = exam.questions.filter(q => bookmarks.includes(q.num));
    } else {
      const allowedNums = [...activeConcept.earlier, ...activeConcept.repeated, ...(activeConcept.other || [])];
      displayedQuestions = exam.questions.filter(q => allowedNums.includes(q.num));
    }
  }

  // Handle Option Selection
  const handleSelectOption = (qNum, letter, isMulti) => {
    const existing = userAnswers[qNum] || { selected: [], checked: false };
    if (existing.checked) return;

    let updatedSelected = [];
    if (isMulti) {
      if (existing.selected.includes(letter)) {
        updatedSelected = existing.selected.filter(l => l !== letter);
      } else {
        updatedSelected = [...existing.selected, letter];
      }
    } else {
      updatedSelected = [letter];
    }

    const updated = { ...userAnswers, [qNum]: { ...existing, selected: updatedSelected } };
    setUserAnswers(updated);
  };

  // Check Answer
  const handleCheckAnswer = (qNum, correctAns) => {
    const existing = userAnswers[qNum];
    if (!existing || existing.selected.length === 0) {
      alert('Pehle koi option select kijiye!');
      return;
    }

    const correctLetters = (correctAns.match(/[A-E]/g) || []).sort();
    const userLetters = [...existing.selected].sort();
    const isCorrect = JSON.stringify(correctLetters) === JSON.stringify(userLetters);

    const updated = {
      ...userAnswers,
      [qNum]: {
        selected: userLetters,
        checked: true,
        isCorrect
      }
    };

    setUserAnswers(updated);
    localStorage.setItem(`study_answers_${exam.id}`, JSON.stringify(updated));
  };

  // Keyboard navigation for options
  const handleOptionKeyDown = (e, qNum, letter, isMulti) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleSelectOption(qNum, letter, isMulti);
    }
  };

  // Progress count
  const answeredCount = Object.keys(userAnswers).filter(k => userAnswers[k].checked).length;
  const progressPct = Math.round((answeredCount / (exam.totalQuestions || 1)) * 100);

  return (
    <div style={{ maxWidth: 1440, margin: '1.75rem auto', padding: '0 1.25rem', width: '100%' }}>
      
      {/* Mobile Concept Drawer Toggle (< 1080px) */}
      <div style={{ marginBottom: '1rem', display: 'none' }} className="mobile-topic-toggle">
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          style={{
            width: '100%',
            background: 'rgba(20, 28, 40, 0.85)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            padding: '0.85rem 1.15rem',
            borderRadius: 'var(--radius-md)',
            color: '#fbbf24',
            fontWeight: 700,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.92rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span>📖 Active Topic: {activeConcept?.title?.split('.')[1] || activeConcept?.title}</span>
          {mobileSidebarOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <div className="responsive-layout-grid">
        
        {/* Sidebar: Executive Topic Navigator */}
        <aside style={{
          background: 'rgba(14, 19, 28, 0.78)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: 'var(--shadow-md), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.25rem',
          height: 'fit-content',
          position: 'sticky',
          top: 90,
          maxHeight: 'calc(100dvh - 110px)',
          overflowY: 'auto'
        }}>
          
          {/* Track Header & Progress */}
          <div style={{ marginBottom: '1.15rem' }}>
            <div style={{
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-dim)',
              fontWeight: 800,
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.45rem'
            }}>
              <span>Curriculum Modules</span>
              <span style={{ color: '#fbbf24' }}>{exam.concepts.length} Topics</span>
            </div>

            {/* Overall Study Progress Bar */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: 9999,
              height: 6,
              overflow: 'hidden',
              marginTop: '0.4rem',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <div style={{
                background: 'var(--primary-gradient)',
                height: '100%',
                width: `${Math.min(100, Math.max(5, progressPct))}%`,
                transition: 'width 0.4s ease'
              }} />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              marginTop: '0.35rem'
            }}>
              <span>Practice Mastery:</span>
              <span style={{ fontWeight: 700, color: '#f8fafc' }}>{answeredCount} / {exam.totalQuestions} Qs</span>
            </div>
          </div>

          {/* Concepts List */}
          <nav role="navigation" aria-label="Topics List">
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {exam.concepts.map(concept => {
                const count = [...concept.earlier, ...concept.repeated, ...(concept.other || [])].length;
                const isActive = concept.id === activeConceptId;
                return (
                  <li key={concept.id}>
                    <button
                      type="button"
                      aria-current={isActive ? 'true' : 'false'}
                      onClick={() => {
                        setActiveConceptId(concept.id);
                        setFilterType('all');
                        setMobileSidebarOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: isActive 
                          ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.08) 100%)' 
                          : 'transparent',
                        border: `1px solid ${isActive ? 'rgba(245, 158, 11, 0.45)' : 'transparent'}`,
                        borderLeft: isActive ? '3px solid #f59e0b' : '1px solid transparent',
                        padding: '0.7rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        color: isActive ? '#fef08a' : 'var(--text-muted)',
                        cursor: 'pointer',
                        fontSize: '0.88rem',
                        fontWeight: isActive ? 700 : 500,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        minHeight: 44,
                        boxShadow: isActive ? '0 4px 14px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : 'none',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <span style={{ paddingRight: '0.5rem', lineHeight: 1.3 }}>
                        {concept.title.split('.')[1] || concept.title}
                      </span>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        background: isActive ? 'rgba(245, 158, 11, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${isActive ? 'rgba(245, 158, 11, 0.35)' : 'rgba(255, 255, 255, 0.05)'}`,
                        padding: '0.15rem 0.5rem',
                        borderRadius: 9999,
                        color: isActive ? '#fde68a' : 'var(--text-dim)',
                        flexShrink: 0
                      }}>
                        {count} Qs
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Concept & Practice Area */}
        <main style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', minWidth: 0 }}>
          
          {/* Active Concept Showcase Card */}
          {activeConcept && (
            <section 
              aria-labelledby="concept-heading"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 27, 39, 0.85) 0%, rgba(12, 17, 26, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.25rem, 1rem + 1vw, 2.25rem)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Concept Number & Tag Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'rgba(245, 158, 11, 0.12)',
                color: '#fbbf24',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.3rem 0.85rem',
                borderRadius: 9999,
                border: '1px solid rgba(245, 158, 11, 0.35)',
                marginBottom: '0.85rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}>
                <Sparkles size={14} />
                <span>Foundational Architecture Module</span>
              </div>

              {/* Title & Subtitle */}
              <h2 id="concept-heading" style={{
                fontSize: 'clamp(1.4rem, 1.25rem + 0.8vw, 2rem)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '0.4rem',
                letterSpacing: '-0.02em'
              }}>
                {activeConcept.title}
              </h2>
              <div style={{
                color: '#fbbf24',
                fontSize: '1.05rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                lineHeight: 1.5
              }}>
                {activeConcept.subtitle}
              </div>

              {/* Master Formula Box (High-Impact Glowing Frame) */}
              {activeConcept.masterFormula && (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(245, 158, 11, 0.15) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.15rem 1.35rem',
                  marginBottom: '1.35rem',
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    color: '#fde68a',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <Award size={16} color="#fbbf24" />
                    <span>Master Exam Formula</span>
                  </div>
                  <code style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(0.88rem, 0.84rem + 0.2vw, 1rem)',
                    color: '#ffffff',
                    background: 'rgba(0, 0, 0, 0.45)',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'block',
                    borderLeft: '4px solid #f59e0b',
                    overflowX: 'auto',
                    lineHeight: 1.6
                  }}>
                    {activeConcept.masterFormula}
                  </code>
                </div>
              )}

              {/* Asan Hinglish Explanation */}
              <div style={{
                background: 'rgba(10, 15, 22, 0.55)',
                borderRadius: 'var(--radius-md)',
                padding: '1.35rem',
                marginBottom: '1.35rem',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <h3 style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: '#60a5fa',
                  marginBottom: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}>
                  <Lightbulb size={18} />
                  <span>Aasan Hinglish Mein Samjho:</span>
                </h3>
                <p style={{
                  color: '#e2e8f0',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  marginBottom: '0.65rem'
                }}>
                  {activeConcept.meaning}
                </p>
                {activeConcept.beginnerExplanation && (
                  <p style={{
                    color: '#cbd5e1',
                    fontSize: '0.92rem',
                    lineHeight: 1.7
                  }}>
                    {activeConcept.beginnerExplanation}
                  </p>
                )}
              </div>

              {/* Rozmarra Ki Zindagi Ka Real-Life Example */}
              {activeConcept.dailyAnalogy && (
                <div style={{
                  background: 'rgba(245, 158, 11, 0.06)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.15rem 1.35rem',
                  marginBottom: '1.35rem'
                }}>
                  <div style={{
                    color: '#fbbf24',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    marginBottom: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}>
                    <span>💡 Rozmarra Ki Zindagi Ka Example:</span>
                  </div>
                  <p style={{
                    color: '#fef3c7',
                    fontSize: '0.92rem',
                    lineHeight: 1.6
                  }}>
                    {activeConcept.dailyAnalogy}
                  </p>
                </div>
              )}

              {/* Good vs Bad Approach Comparison */}
              {activeConcept.practicalExample && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.35rem'
                }}>
                  {/* Bad Approach */}
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.08)',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    borderLeft: '4px solid #ef4444',
                    padding: '1.1rem',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <div style={{
                      color: '#f87171',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}>
                      <XCircle size={18} aria-hidden="true" />
                      <span>❌ Bad Approach (Exam Fail Trap)</span>
                    </div>
                    <code style={{
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 6,
                      display: 'block',
                      color: '#fca5a5',
                      fontSize: '0.85rem',
                      marginBottom: '0.5rem',
                      overflowX: 'auto'
                    }}>
                      {activeConcept.practicalExample.bad}
                    </code>
                    <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.5 }}>
                      {activeConcept.practicalExample.badReason}
                    </p>
                  </div>

                  {/* Good Approach */}
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    borderLeft: '4px solid #10b981',
                    padding: '1.1rem',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <div style={{
                      color: '#34d399',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}>
                      <CheckCircle size={18} aria-hidden="true" />
                      <span>✅ Good Approach (Certified Best Practice)</span>
                    </div>
                    <code style={{
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 6,
                      display: 'block',
                      color: '#6ee7b7',
                      fontSize: '0.85rem',
                      marginBottom: '0.5rem',
                      overflowX: 'auto'
                    }}>
                      {activeConcept.practicalExample.good}
                    </code>
                    <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.5 }}>
                      {activeConcept.practicalExample.goodReason}
                    </p>
                  </div>
                </div>
              )}

              {/* Quick Revision Matrix Table */}
              {activeConcept.revisionTable && (
                <div style={{
                  background: 'rgba(10, 15, 22, 0.55)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  marginBottom: '1.35rem',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <h3 style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#60a5fa',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}>
                    📊 Quick Revision Matrix (Exam se pehle zaroor dekhein):
                  </h3>
                  <div className="table-container">
                    <table className="styled-table" aria-label="Revision Matrix">
                      <thead>
                        <tr>
                          <th>Situation / Concept</th>
                          <th>Common Trap / Problem</th>
                          <th>Exam-Ready Solution</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeConcept.revisionTable.map((row, idx) => (
                          <tr key={idx}>
                            <td><strong style={{ color: '#f8fafc' }}>{row.concept}</strong></td>
                            <td style={{ color: '#f87171' }}>{row.problem}</td>
                            <td style={{ color: '#34d399' }}>{row.solution}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Golden Rule Callout */}
              <div style={{
                background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.08) 100%)',
                borderLeft: '4px solid #f59e0b',
                padding: '1.1rem 1.35rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                color: '#fef3c7',
                fontSize: '0.95rem',
                lineHeight: 1.6
              }}>
                <strong style={{ color: '#fbbf24' }}>🎯 Exam Golden Memory Rule:</strong> {activeConcept.examRule}
              </div>

            </section>
          )}

          {/* Practice Questions Section */}
          <section aria-labelledby="practice-questions-title">
            
            {/* Header & Filter Controls */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <h3 id="practice-questions-title" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
                  Practice Questions ({displayedQuestions.length})
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Interactive question verification with instant Hinglish explanations
                </p>
              </div>

              {/* Filter Pills */}
              <div style={{
                display: 'flex',
                gap: '0.4rem',
                flexWrap: 'wrap',
                background: 'rgba(16, 22, 32, 0.85)',
                padding: '0.3rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--glass-border)'
              }}>
                <button
                  type="button"
                  onClick={() => setFilterType('all')}
                  style={{
                    background: filterType === 'all' ? 'var(--primary-gradient)' : 'transparent',
                    color: filterType === 'all' ? '#000' : 'var(--text-muted)',
                    padding: '0.4rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    minHeight: 36,
                    cursor: 'pointer'
                  }}
                >
                  All ({[...activeConcept.earlier, ...activeConcept.repeated, ...(activeConcept.other || [])].length})
                </button>

                <button
                  type="button"
                  onClick={() => setFilterType('earlier')}
                  style={{
                    background: filterType === 'earlier' ? 'var(--primary-gradient)' : 'transparent',
                    color: filterType === 'earlier' ? '#000' : 'var(--text-muted)',
                    padding: '0.4rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    minHeight: 36,
                    cursor: 'pointer'
                  }}
                >
                  Earlier ({activeConcept.earlier.length})
                </button>

                <button
                  type="button"
                  onClick={() => setFilterType('repeated')}
                  style={{
                    background: filterType === 'repeated' ? 'var(--primary-gradient)' : 'transparent',
                    color: filterType === 'repeated' ? '#000' : 'var(--text-muted)',
                    padding: '0.4rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    minHeight: 36,
                    cursor: 'pointer'
                  }}
                >
                  Repeated ({activeConcept.repeated.length})
                </button>

                <button
                  type="button"
                  onClick={() => setFilterType('bookmarked')}
                  style={{
                    background: filterType === 'bookmarked' ? '#f59e0b' : 'transparent',
                    color: filterType === 'bookmarked' ? '#000' : 'var(--text-muted)',
                    padding: '0.4rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    minHeight: 36,
                    cursor: 'pointer'
                  }}
                >
                  ★ Starred ({bookmarks.length})
                </button>
              </div>
            </div>

            {/* Questions List */}
            {displayedQuestions.length === 0 ? (
              <div style={{
                padding: '3rem 2rem',
                textAlign: 'center',
                background: 'rgba(16, 22, 32, 0.7)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-muted)'
              }}>
                <Filter size={36} style={{ margin: '0 auto 0.85rem', opacity: 0.5 }} aria-hidden="true" />
                <p style={{ fontSize: '1rem', fontWeight: 600 }}>Is filter ke andar koi sawal nahi mila.</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                  Aap 'All' filter select karke saare questions dekh sakte hain.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {displayedQuestions.map(q => {
                  const saved = userAnswers[q.num] || { selected: [], checked: false };
                  const correctLetters = (q.correctAnswer.match(/[A-E]/g) || []).sort();
                  const isBookmarked = bookmarks.includes(q.num);

                  return (
                    <article
                      key={q.num}
                      id={`q-${q.num}`}
                      aria-labelledby={`q-title-${q.num}`}
                      style={{
                        background: 'linear-gradient(145deg, rgba(16, 22, 32, 0.8) 0%, rgba(11, 16, 24, 0.9) 100%)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'clamp(1.25rem, 1rem + 0.8vw, 1.75rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.25rem',
                        boxShadow: 'var(--shadow-md), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                        transition: 'border-color 0.25s ease'
                      }}
                    >
                      {/* Question Header Bar */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.75rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                          <span id={`q-title-${q.num}`} style={{
                            fontWeight: 800,
                            fontSize: '1.15rem',
                            color: '#fbbf24',
                            letterSpacing: '-0.01em'
                          }}>
                            Question {q.num}
                          </span>
                          {q.title && (
                            <span style={{
                              fontSize: '0.8rem',
                              color: 'var(--text-muted)',
                              background: 'rgba(255, 255, 255, 0.05)',
                              padding: '0.2rem 0.75rem',
                              borderRadius: 9999,
                              border: '1px solid rgba(255, 255, 255, 0.06)'
                            }}>
                              {q.title}
                            </span>
                          )}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <span style={{
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            padding: '0.2rem 0.65rem',
                            borderRadius: 9999,
                            background: q.isMulti ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                            color: q.isMulti ? '#a5b4fc' : 'var(--text-muted)',
                            border: `1px solid ${q.isMulti ? 'rgba(99, 102, 241, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`
                          }}>
                            {q.isMulti ? '✨ Multiple Choice (Select Two)' : 'Single Choice'}
                          </span>

                          <button
                            type="button"
                            onClick={() => toggleBookmark(q.num)}
                            title={isBookmarked ? 'Remove Star' : 'Star for Revision'}
                            aria-label={isBookmarked ? 'Remove question star' : 'Star question for revision'}
                            style={{
                              background: isBookmarked ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                              border: `1px solid ${isBookmarked ? 'rgba(245, 158, 11, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
                              borderRadius: 'var(--radius-sm)',
                              color: isBookmarked ? '#f59e0b' : 'var(--text-dim)',
                              cursor: 'pointer',
                              padding: '0.4rem',
                              minHeight: 36,
                              minWidth: 36
                            }}
                          >
                            <Star size={16} fill={isBookmarked ? '#f59e0b' : 'none'} aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {/* Hinglish Question Context */}
                      {q.hinglishQ && (
                        <div style={{
                          background: 'rgba(99, 102, 241, 0.08)',
                          borderLeft: '3px solid #818cf8',
                          padding: '0.75rem 1rem',
                          borderRadius: '0 8px 8px 0',
                          fontSize: '0.92rem',
                          color: '#c7d2fe',
                          lineHeight: 1.6
                        }}>
                          <strong style={{ color: '#a5b4fc' }}>📝 Asan Bhasha Mein Sawal:</strong> {q.hinglishQ}
                        </div>
                      )}

                      {/* Question Text */}
                      <div style={{
                        fontSize: '1.02rem',
                        fontWeight: 500,
                        color: '#f8fafc',
                        lineHeight: 1.65
                      }} dangerouslySetInnerHTML={{ __html: q.question.replace(/\n/g, '<br>') }} />

                      {/* Options Container (Glassmorphic Option Tiles) */}
                      <div 
                        role={q.isMulti ? 'group' : 'radiogroup'} 
                        aria-label={`Options for Question ${q.num}`}
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}
                      >
                        {Object.keys(q.options).sort().map(letter => {
                          const isSelected = saved.selected.includes(letter);
                          let borderCol = 'rgba(255, 255, 255, 0.08)';
                          let bgCol = 'rgba(10, 15, 22, 0.6)';
                          let glowStyle = 'none';

                          if (saved.checked) {
                            if (correctLetters.includes(letter)) {
                              borderCol = '#10b981';
                              bgCol = 'rgba(16, 185, 129, 0.15)';
                              glowStyle = '0 0 18px -4px rgba(16, 185, 129, 0.35)';
                            } else if (isSelected) {
                              borderCol = '#ef4444';
                              bgCol = 'rgba(239, 68, 68, 0.15)';
                              glowStyle = '0 0 18px -4px rgba(239, 68, 68, 0.35)';
                            }
                          } else if (isSelected) {
                            borderCol = '#f59e0b';
                            bgCol = 'rgba(245, 158, 11, 0.15)';
                            glowStyle = '0 0 18px -4px rgba(245, 158, 11, 0.35)';
                          }

                          return (
                            <div
                              key={letter}
                              role={q.isMulti ? 'checkbox' : 'radio'}
                              aria-checked={isSelected}
                              tabIndex={saved.checked ? -1 : 0}
                              onKeyDown={(e) => handleOptionKeyDown(e, q.num, letter, q.isMulti)}
                              onClick={() => handleSelectOption(q.num, letter, q.isMulti)}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.9rem',
                                padding: '0.95rem 1.25rem',
                                background: bgCol,
                                border: `1px solid ${borderCol}`,
                                borderRadius: 'var(--radius-md)',
                                cursor: saved.checked ? 'default' : 'pointer',
                                transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                                userSelect: 'none',
                                minHeight: 48,
                                boxShadow: glowStyle
                              }}
                            >
                              <span 
                                aria-hidden="true"
                                style={{
                                  width: 30,
                                  height: 30,
                                  borderRadius: '50%',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  background: saved.checked && correctLetters.includes(letter) 
                                    ? '#10b981' 
                                    : isSelected 
                                    ? '#f59e0b' 
                                    : 'rgba(255, 255, 255, 0.08)',
                                  color: isSelected || (saved.checked && correctLetters.includes(letter)) ? '#0a0d12' : '#fff',
                                  fontSize: '0.85rem',
                                  fontWeight: 800,
                                  flexShrink: 0,
                                  marginTop: 1,
                                  boxShadow: isSelected ? '0 2px 8px rgba(245, 158, 11, 0.4)' : 'none'
                                }}
                              >
                                {letter}
                              </span>
                              <span style={{
                                fontSize: '0.96rem',
                                color: '#f1f5f9',
                                lineHeight: 1.55,
                                fontWeight: isSelected ? 600 : 400
                              }}>
                                {q.options[letter]}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Check Answer Button */}
                      {!saved.checked && (
                        <button
                          type="button"
                          onClick={() => handleCheckAnswer(q.num, q.correctAnswer)}
                          style={{
                            alignSelf: 'flex-start',
                            background: 'var(--primary-gradient)',
                            color: '#000',
                            border: 'none',
                            padding: '0.75rem 1.75rem',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: 800,
                            fontSize: '0.92rem',
                            cursor: 'pointer',
                            boxShadow: '0 4px 16px rgba(245, 158, 11, 0.4)',
                            minHeight: 44,
                            marginTop: '0.25rem'
                          }}
                        >
                          Check Answer
                        </button>
                      )}

                      {/* Detailed Feedback Panel */}
                      {saved.checked && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.75rem' }} className="animate-slide-up">
                          
                          {/* Sahi Kyun Hai Card */}
                          <div style={{
                            background: 'rgba(16, 185, 129, 0.08)',
                            border: '1px solid rgba(16, 185, 129, 0.35)',
                            borderRadius: 'var(--radius-md)',
                            padding: '1.25rem',
                            fontSize: '0.94rem',
                            color: '#d1fae5',
                            lineHeight: 1.65,
                            boxShadow: '0 4px 16px -2px rgba(16, 185, 129, 0.2)'
                          }}>
                            <div style={{
                              color: '#34d399',
                              fontWeight: 800,
                              marginBottom: '0.45rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              fontSize: '1rem'
                            }}>
                              <CheckCircle size={20} aria-hidden="true" />
                              <span>✅ Sahi Answer: {q.correctAnswer}</span>
                            </div>
                            <div>
                              <strong style={{ color: '#6ee7b7' }}>Kyun Sahi Hai:</strong> {q.whyCorrect || q.explanation}
                            </div>
                          </div>

                          {/* Baaki Options Kyun Galat Hain Table */}
                          <div style={{
                            background: 'rgba(239, 68, 68, 0.05)',
                            border: '1px solid rgba(239, 68, 68, 0.25)',
                            borderRadius: 'var(--radius-md)',
                            padding: '1.25rem',
                            fontSize: '0.92rem'
                          }}>
                            <div style={{
                              color: '#f87171',
                              fontWeight: 800,
                              marginBottom: '0.65rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              fontSize: '0.98rem'
                            }}>
                              <XCircle size={18} aria-hidden="true" />
                              <span>❌ Baaki Options Kyun Galat Hain:</span>
                            </div>
                            <div className="table-container">
                              <table className="styled-table" aria-label="Option-by-option failure breakdown">
                                <thead>
                                  <tr>
                                    <th style={{ width: 110 }}>Option</th>
                                    <th>Kyun Galat Hai?</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Object.keys(q.options).sort().map(optLetter => {
                                    if (correctLetters.includes(optLetter)) return null;
                                    const wrongReason = q.wrongOptions && q.wrongOptions[optLetter] 
                                      ? q.wrongOptions[optLetter] 
                                      : 'Yeh option exam guidelines aur official principles ko satisfy nahi karta.';
                                    return (
                                      <tr key={optLetter}>
                                        <td>
                                          <span style={{
                                            fontWeight: 800,
                                            color: '#f87171',
                                            background: 'rgba(239, 68, 68, 0.15)',
                                            padding: '0.2rem 0.55rem',
                                            borderRadius: 4
                                          }}>
                                            Option {optLetter}
                                          </span>
                                        </td>
                                        <td style={{ color: '#cbd5e1', lineHeight: 1.55 }}>
                                          {wrongReason}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Exam Tip */}
                          {q.examTip && (
                            <div style={{
                              background: 'rgba(245, 158, 11, 0.08)',
                              borderLeft: '4px solid #f59e0b',
                              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                              padding: '0.85rem 1.15rem',
                              fontSize: '0.9rem',
                              color: '#fef3c7',
                              lineHeight: 1.6
                            }}>
                              <strong style={{ color: '#fbbf24' }}>💡 Exam Memory Tip:</strong> {q.examTip}
                            </div>
                          )}

                        </div>
                      )}

                    </article>
                  );
                })}
              </div>
            )}

          </section>

        </main>

      </div>

    </div>
  );
}
