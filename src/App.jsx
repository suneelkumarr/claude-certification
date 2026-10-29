import React, { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import StudyView from './components/StudyMode/StudyView';
import ExamView from './components/ExamMode/ExamView';
import QuestionBankView from './components/SearchMode/QuestionBankView';
import { getExamById } from './data/examRegistry';

export default function App() {
  const [activeExamId, setActiveExamId] = useState('ccao-f');
  const [activeTab, setActiveTab] = useState('study'); // 'study', 'exam', 'search'

  const activeExam = getExamById(activeExamId);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      
      {/* Top Header with Multi-Exam Selector & Tabs */}
      <Header
        activeExamId={activeExamId}
        setActiveExamId={setActiveExamId}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Hero Overview Showcase Banner */}
      <HeroBanner 
        exam={activeExam} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Body */}
      <div style={{ flex: 1 }}>
        {activeTab === 'study' && <StudyView exam={activeExam} />}
        {activeTab === 'exam' && <ExamView exam={activeExam} onSwitchToStudy={() => setActiveTab('study')} />}
        {activeTab === 'search' && <QuestionBankView exam={activeExam} />}
      </div>

      {/* Luxury Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        fontSize: '0.82rem',
        color: 'var(--text-muted)',
        marginTop: '4rem',
        background: 'rgba(10, 14, 21, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.45rem'
      }}>
        <div style={{ color: '#f8fafc', fontWeight: 700 }}>
          Anthropic Claude Certification Master Platform • 2026 Edition
        </div>
        <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem' }}>
          Active Track: <strong style={{ color: '#fbbf24' }}>{activeExam.title}</strong> ({activeExam.totalQuestions} Questions) • Target Date: {activeExam.examDate}
        </div>
      </footer>

    </div>
  );
}
