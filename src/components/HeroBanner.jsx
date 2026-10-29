import React from 'react';
import { Sparkles, Award, Clock, BookOpen, Search, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HeroBanner({ exam, activeTab, setActiveTab }) {
  return (
    <section 
      aria-label="Exam Overview Banner"
      style={{
        maxWidth: 1440,
        margin: '1.25rem auto 0 auto',
        padding: '0 1.25rem',
        width: '100%'
      }}
    >
      <div style={{
        background: 'linear-gradient(135deg, rgba(20, 27, 39, 0.85) 0%, rgba(12, 16, 24, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(1.25rem, 1rem + 1vw, 2.25rem)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}>
        
        {/* Subtle Ambient Accent Glow */}
        <div style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1
        }}>
          
          {/* Left Column: Title & Description */}
          <div style={{ maxWidth: 820 }}>
            
            {/* Live Status Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: 'var(--radius-full)',
              padding: '0.25rem 0.85rem',
              marginBottom: '0.85rem'
            }}>
              <span className="pulse-dot" />
              <span style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#fbbf24',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}>
                Official Anthropic Certification Syllabus • 2026 Ready
              </span>
            </div>

            {/* Main Title */}
            <h2 style={{
              fontSize: 'clamp(1.5rem, 1.25rem + 1.2vw, 2.35rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '0.65rem',
              letterSpacing: '-0.025em'
            }}>
              <span className="text-gradient-amber">{exam.title}</span>
            </h2>

            {/* Subtitle / Description */}
            <p style={{
              fontSize: 'clamp(0.92rem, 0.88rem + 0.2vw, 1.05rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.25rem',
              maxWidth: 720
            }}>
              {exam.description} Powered by bilingual Hinglish Master Formulas, daily analogies, option-by-option failure reasoning, and a 120-minute timed simulator.
            </p>

            {/* Interactive Mode Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setActiveTab('study')}
                style={{
                  background: activeTab === 'study' ? 'var(--primary-gradient)' : 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${activeTab === 'study' ? 'transparent' : 'rgba(255, 255, 255, 0.12)'}`,
                  color: activeTab === 'study' ? '#000' : '#fff',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: activeTab === 'study' ? '0 4px 16px rgba(245, 158, 11, 0.4)' : 'none',
                  cursor: 'pointer'
                }}
              >
                <BookOpen size={16} />
                <span>Explore Concepts & Master Formulas</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('exam')}
                style={{
                  background: activeTab === 'exam' ? 'var(--primary-gradient)' : 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  color: '#fbbf24',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                  cursor: 'pointer'
                }}
              >
                <Clock size={16} />
                <span>Launch 120-Min Exam Simulator</span>
              </button>
            </div>

          </div>

          {/* Right Column: 4 Stat Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(130px, 1fr))',
            gap: '0.75rem',
            width: '100%',
            maxWidth: 420
          }}>
            
            {/* Stat 1 */}
            <div style={{
              background: 'rgba(10, 15, 22, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '0.9rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                Question Pool
              </div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fbbf24', marginTop: '0.2rem' }}>
                {exam.totalQuestions} <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>Qs</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>
                Verified Official Dumps
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{
              background: 'rgba(10, 15, 22, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '0.9rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                Timed Simulator
              </div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#38bdf8', marginTop: '0.2rem' }}>
                120 <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>Min</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>
                60 Balanced Questions
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{
              background: 'rgba(10, 15, 22, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '0.9rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                Passing Gate
              </div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#34d399', marginTop: '0.2rem' }}>
                70% <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>Min</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>
                42 / 60 Correct Required
              </div>
            </div>

            {/* Stat 4 */}
            <div style={{
              background: 'rgba(10, 15, 22, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '0.9rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                Target Date
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.35rem' }}>
                4 Nov 2026
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>
                Scheduled Exam Day
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
