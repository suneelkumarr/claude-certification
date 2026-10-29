import React from 'react';
import { BookOpen, Clock, Search, Award, Sparkles, ChevronDown } from 'lucide-react';
import { EXAMS_REGISTRY } from '../data/examRegistry';

export default function Header({ 
  activeExamId, 
  setActiveExamId, 
  activeTab, 
  setActiveTab 
}) {
  const activeExam = EXAMS_REGISTRY.find(e => e.id === activeExamId) || EXAMS_REGISTRY[0];

  return (
    <header style={{
      background: 'rgba(10, 14, 21, 0.82)',
      borderBottom: '1px solid var(--glass-border)',
      padding: '0.85rem 1.5rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{
        maxWidth: 1440,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        
        {/* Brand & Multi-Exam Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          
          {/* Brand Logo & Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div 
              aria-hidden="true"
              style={{
                width: 44,
                height: 44,
                background: 'var(--primary-gradient)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.4rem',
                color: '#fff',
                boxShadow: '0 4px 18px rgba(245, 158, 11, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
                flexShrink: 0
              }}
            >
              C
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <h1 style={{ 
                  fontSize: '1.15rem', 
                  fontWeight: 800, 
                  letterSpacing: '-0.02em', 
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  Claude Certifications
                </h1>
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#fbbf24',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  padding: '0.12rem 0.45rem',
                  borderRadius: 9999
                }}>
                  PRO HUB
                </span>
              </div>
              <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Anthropic Official Certification Study & Diagnostic Simulator
              </p>
            </div>
          </div>

          {/* Luxury Multi-Exam Selector Pill */}
          <div style={{
            position: 'relative',
            background: 'rgba(20, 28, 40, 0.75)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '0.2rem 0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            minHeight: 44,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            transition: 'border-color 0.2s'
          }}>
            <Award size={18} color="#fbbf24" aria-hidden="true" style={{ flexShrink: 0 }} />
            <label htmlFor="exam-select" className="sr-only">Choose Certification Exam</label>
            <select
              id="exam-select"
              aria-label="Choose Certification Exam"
              value={activeExamId}
              onChange={(e) => setActiveExamId(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fef08a',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                outline: 'none',
                minHeight: 40,
                fontFamily: 'inherit',
                paddingRight: '1rem'
              }}
            >
              {EXAMS_REGISTRY.map(exam => (
                <option key={exam.id} value={exam.id} style={{ background: '#0e141d', color: '#f8fafc' }}>
                  {exam.shortCode} • {exam.title.split('—')[0].replace('Anthropic ', '')} ({exam.totalQuestions} Qs)
                </option>
              ))}
            </select>
            <ChevronDown size={14} color="#fbbf24" style={{ pointerEvents: 'none', marginLeft: -12 }} />
          </div>

        </div>

        {/* Navigation Tabs (Glassmorphic Pill Bar) */}
        <nav 
          role="navigation" 
          aria-label="Primary navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'rgba(16, 22, 32, 0.85)',
            padding: '0.35rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--shadow-sm), var(--glass-specular)',
            overflowX: 'auto',
            maxWidth: '100%',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* Study Guide Tab */}
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'study'}
            onClick={() => setActiveTab('study')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.15rem',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: activeTab === 'study' ? 'var(--primary-gradient)' : 'transparent',
              color: activeTab === 'study' ? '#fff' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              minHeight: 40,
              whiteSpace: 'nowrap',
              boxShadow: activeTab === 'study' ? '0 4px 14px rgba(245, 158, 11, 0.35)' : 'none',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <BookOpen size={16} aria-hidden="true" />
            <span>Study Guide</span>
          </button>

          {/* Exam Simulator Tab */}
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'exam'}
            onClick={() => setActiveTab('exam')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.15rem',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: activeTab === 'exam' ? 'var(--primary-gradient)' : 'transparent',
              color: activeTab === 'exam' ? '#fff' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              minHeight: 40,
              whiteSpace: 'nowrap',
              boxShadow: activeTab === 'exam' ? '0 4px 14px rgba(245, 158, 11, 0.35)' : 'none',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <Clock size={16} aria-hidden="true" />
            <span>Exam Simulator</span>
            <span style={{
              fontSize: '0.68rem',
              background: activeTab === 'exam' ? 'rgba(0,0,0,0.25)' : 'rgba(245, 158, 11, 0.15)',
              color: activeTab === 'exam' ? '#fff' : '#fbbf24',
              padding: '0.1rem 0.45rem',
              borderRadius: 9999,
              fontWeight: 800
            }}>
              120m
            </span>
          </button>

          {/* Question Bank Tab */}
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'search'}
            onClick={() => setActiveTab('search')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.15rem',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: activeTab === 'search' ? 'var(--primary-gradient)' : 'transparent',
              color: activeTab === 'search' ? '#fff' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              minHeight: 40,
              whiteSpace: 'nowrap',
              boxShadow: activeTab === 'search' ? '0 4px 14px rgba(245, 158, 11, 0.35)' : 'none',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <Search size={16} aria-hidden="true" />
            <span>Question Bank</span>
            <span style={{
              fontSize: '0.68rem',
              background: activeTab === 'search' ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.08)',
              color: activeTab === 'search' ? '#fff' : 'var(--text-muted)',
              padding: '0.1rem 0.45rem',
              borderRadius: 9999,
              fontWeight: 700
            }}>
              {activeExam.totalQuestions}
            </span>
          </button>

        </nav>

      </div>
    </header>
  );
}
