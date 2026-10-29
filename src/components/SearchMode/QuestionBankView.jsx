import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  X, 
  Sparkles, 
  BookOpen, 
  CheckCircle, 
  XCircle, 
  Eye, 
  EyeOff, 
  Star, 
  Layers, 
  Lightbulb, 
  ArrowUpDown, 
  Hash, 
  ChevronLeft, 
  ChevronRight,
  RotateCcw
} from 'lucide-react';

export default function QuestionBankView({ exam }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedType, setSelectedType] = useState('all'); // 'all', 'single', 'multi'
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [globalReveal, setGlobalReveal] = useState(false);
  const [pageSize, setPageSize] = useState(25); // 25, 50, or 'all'
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpToQ, setJumpToQ] = useState('');

  // Bookmarks persistence
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`qbank_bookmarks_${exam.id}`) || '[]');
    } catch {
      return [];
    }
  });

  const [onlyBookmarks, setOnlyBookmarks] = useState(false);

  // User interactive testing state inside Question Bank
  const [userPicks, setUserPicks] = useState({});

  const toggleBookmark = (qNum) => {
    const updated = bookmarks.includes(qNum) 
      ? bookmarks.filter(n => n !== qNum)
      : [...bookmarks, qNum];
    setBookmarks(updated);
    localStorage.setItem(`qbank_bookmarks_${exam.id}`, JSON.stringify(updated));
  };

  const toggleExpand = (num) => {
    setExpandedQuestions(prev => ({ ...prev, [num]: !prev[num] }));
  };

  const toggleReveal = (num) => {
    setRevealedAnswers(prev => ({ ...prev, [num]: !prev[num] }));
  };

  const toggleGlobalReveal = () => {
    const nextState = !globalReveal;
    setGlobalReveal(nextState);
    const newRevealed = {};
    exam.questions.forEach(q => {
      newRevealed[q.num] = nextState;
    });
    setRevealedAnswers(newRevealed);
  };

  const toggleExpandAll = (expand) => {
    const newExpanded = {};
    filteredQuestions.forEach(q => {
      newExpanded[q.num] = expand;
    });
    setExpandedQuestions(newExpanded);
  };

  // Quick keyword filters
  const popularKeywords = [
    'RAG', 'Prompt Caching', 'Guardrails', 'Multi-Agent', 'Haiku', 'Opus', 'HIPAA', 'Degraded', 'Permissions', 'Batch'
  ];

  // Filtering Logic
  const filteredQuestions = useMemo(() => {
    return exam.questions.filter(q => {
      // Topic match
      if (selectedTopic !== 'all' && q.conceptId !== selectedTopic) return false;

      // Type match (single vs multi)
      if (selectedType === 'single' && q.isMulti) return false;
      if (selectedType === 'multi' && !q.isMulti) return false;

      // Bookmarked filter
      if (onlyBookmarks && !bookmarks.includes(q.num)) return false;

      // Specific Question # Jump
      if (jumpToQ) {
        return q.num.toString() === jumpToQ.trim();
      }

      // Keyword search
      const term = searchTerm.toLowerCase().trim();
      if (!term) return true;

      const matchesText = 
        q.question.toLowerCase().includes(term) ||
        (q.explanation && q.explanation.toLowerCase().includes(term)) ||
        (q.title && q.title.toLowerCase().includes(term)) ||
        (q.hinglishQ && q.hinglishQ.toLowerCase().includes(term)) ||
        (q.whyCorrect && q.whyCorrect.toLowerCase().includes(term)) ||
        Object.values(q.options).some(opt => opt.toLowerCase().includes(term));

      return matchesText;
    });
  }, [exam.questions, selectedTopic, selectedType, onlyBookmarks, jumpToQ, searchTerm, bookmarks]);

  // Pagination calculation
  const totalItems = filteredQuestions.length;
  const itemsPerPage = pageSize === 'all' ? totalItems || 1 : Number(pageSize);
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const safePage = Math.min(currentPage, totalPages);

  const paginatedQuestions = useMemo(() => {
    if (pageSize === 'all') return filteredQuestions;
    const start = (safePage - 1) * itemsPerPage;
    return filteredQuestions.slice(start, start + itemsPerPage);
  }, [filteredQuestions, safePage, itemsPerPage, pageSize]);

  // Handle user testing pick
  const handleUserPick = (qNum, letter, isMulti) => {
    const current = userPicks[qNum] || [];
    if (isMulti) {
      if (current.includes(letter)) {
        setUserPicks({ ...userPicks, [qNum]: current.filter(l => l !== letter) });
      } else {
        setUserPicks({ ...userPicks, [qNum]: [...current, letter] });
      }
    } else {
      setUserPicks({ ...userPicks, [qNum]: [letter] });
    }
  };

  return (
    <div style={{ maxWidth: 1320, margin: '1.75rem auto', padding: '0 1.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      
      {/* Search & Knowledge Explorer Hub */}
      <section 
        aria-label="Question Bank Search and Knowledge Explorer"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 27, 39, 0.88) 0%, rgba(12, 17, 26, 0.96) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(1.25rem, 1rem + 1vw, 2rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.35rem',
          boxShadow: 'var(--shadow-lg), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Top Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: '#fbbf24',
              fontSize: '0.74rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.35rem'
            }}>
              <Sparkles size={14} />
              <span>Interactive Knowledge Explorer & Search Hub</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.3rem, 1.15rem + 0.8vw, 1.85rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              {exam.shortCode} Complete Question Bank ({exam.totalQuestions} Questions)
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
              Search across questions, options, concept explanations, and option-by-option failure reasoning.
            </p>
          </div>

          {/* Quick Global Action Badges */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Show / Hide All Answers Switch */}
            <button
              type="button"
              onClick={toggleGlobalReveal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: globalReveal ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                border: `1px solid ${globalReveal ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
                color: globalReveal ? '#34d399' : '#e2e8f0',
                padding: '0.45rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                minHeight: 38
              }}
            >
              {globalReveal ? <Eye size={15} /> : <EyeOff size={15} />}
              <span>{globalReveal ? 'All Answers Revealed' : 'Hide All Answers (Self-Test)'}</span>
            </button>

            {/* Expand / Collapse All */}
            <button
              type="button"
              onClick={() => toggleExpandAll(Object.keys(expandedQuestions).length === 0)}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#e2e8f0',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                minHeight: 38
              }}
            >
              <Layers size={14} />
              <span>{Object.keys(expandedQuestions).length > 0 ? 'Collapse All' : 'Expand All'}</span>
            </button>
          </div>
        </div>

        {/* Search Inputs Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: '0.85rem',
          alignItems: 'center'
        }} className="qbank-search-grid">
          
          {/* Main Keyword Search Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(10, 15, 22, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-md)',
            padding: '0.5rem 1rem',
            minHeight: 48,
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)'
          }}>
            <Search size={18} color="#fbbf24" aria-hidden="true" style={{ flexShrink: 0 }} />
            <input
              type="text"
              aria-label="Search question bank"
              placeholder="Search concepts, questions, SKUs, or technical keywords..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontSize: '0.94rem',
                width: '100%',
                minHeight: 38,
                fontFamily: 'inherit'
              }}
            />
            {searchTerm && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchTerm('')}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 4 }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Jump directly to Question # */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(10, 15, 22, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-md)',
            padding: '0.5rem 0.85rem',
            minHeight: 48
          }}>
            <Hash size={16} color="#38bdf8" />
            <input
              type="text"
              placeholder="Jump Q#"
              value={jumpToQ}
              onChange={(e) => { setJumpToQ(e.target.value); setCurrentPage(1); }}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#38bdf8',
                fontWeight: 700,
                fontSize: '0.9rem',
                width: 68,
                fontFamily: 'inherit'
              }}
            />
            {jumpToQ && (
              <button
                type="button"
                onClick={() => setJumpToQ('')}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Starred / Bookmarked Filter Toggle */}
          <button
            type="button"
            onClick={() => { setOnlyBookmarks(!onlyBookmarks); setCurrentPage(1); }}
            style={{
              background: onlyBookmarks ? 'rgba(245, 158, 11, 0.2)' : 'rgba(10, 15, 22, 0.75)',
              border: `1px solid ${onlyBookmarks ? '#f59e0b' : 'rgba(255, 255, 255, 0.12)'}`,
              color: onlyBookmarks ? '#fbbf24' : 'var(--text-muted)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.86rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              minHeight: 48,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            <Star size={16} fill={onlyBookmarks ? '#f59e0b' : 'none'} />
            <span>Starred ({bookmarks.length})</span>
          </button>

        </div>

        {/* Secondary Filter Row: Topics & Question Type Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.85rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          
          {/* Topic Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>Topic:</span>
            <select
              aria-label="Filter by Topic"
              value={selectedTopic}
              onChange={(e) => { setSelectedTopic(e.target.value); setCurrentPage(1); }}
              style={{
                background: 'rgba(10, 15, 22, 0.85)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                color: '#fef08a',
                fontWeight: 700,
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                outline: 'none',
                cursor: 'pointer',
                minHeight: 40,
                fontSize: '0.85rem',
                fontFamily: 'inherit'
              }}
            >
              <option value="all">All Topics ({exam.concepts.length})</option>
              {exam.concepts.map(c => (
                <option key={c.id} value={c.id} style={{ background: '#0e141d', color: '#fff' }}>
                  {c.title.split('.')[1] || c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Type Selector (All vs Single vs Multi-Select) */}
          <div style={{ display: 'flex', gap: '0.35rem', background: 'rgba(10, 15, 22, 0.6)', padding: '0.25rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              type="button"
              onClick={() => { setSelectedType('all'); setCurrentPage(1); }}
              style={{
                background: selectedType === 'all' ? 'var(--primary-gradient)' : 'transparent',
                color: selectedType === 'all' ? '#000' : 'var(--text-muted)',
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 700,
                minHeight: 32,
                cursor: 'pointer'
              }}
            >
              All Types
            </button>
            <button
              type="button"
              onClick={() => { setSelectedType('single'); setCurrentPage(1); }}
              style={{
                background: selectedType === 'single' ? 'var(--primary-gradient)' : 'transparent',
                color: selectedType === 'single' ? '#000' : 'var(--text-muted)',
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 700,
                minHeight: 32,
                cursor: 'pointer'
              }}
            >
              Single Choice
            </button>
            <button
              type="button"
              onClick={() => { setSelectedType('multi'); setCurrentPage(1); }}
              style={{
                background: selectedType === 'multi' ? 'var(--primary-gradient)' : 'transparent',
                color: selectedType === 'multi' ? '#000' : 'var(--text-muted)',
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 700,
                minHeight: 32,
                cursor: 'pointer'
              }}
            >
              Multiple Select
            </button>
          </div>

          {/* Page Size & Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Show:
            </span>
            <select
              aria-label="Items per page"
              value={pageSize}
              onChange={(e) => { setPageSize(e.target.value === 'all' ? 'all' : Number(e.target.value)); setCurrentPage(1); }}
              style={{
                background: 'rgba(10, 15, 22, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                fontWeight: 700,
                padding: '0.3rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                outline: 'none',
                minHeight: 36,
                fontSize: '0.82rem'
              }}
            >
              <option value={25}>25 per page</option>
              <option value={50}>50 per page</option>
              <option value="all">Show All</option>
            </select>

            <span style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: '#fbbf24',
              padding: '0.25rem 0.75rem',
              borderRadius: 9999
            }}>
              {filteredQuestions.length} Found
            </span>
          </div>

        </div>

        {/* Popular Keyword Filter Chips */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap', paddingTop: '0.25rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginRight: '0.25rem' }}>
            Quick Topics:
          </span>
          {popularKeywords.map(kw => {
            const isActive = searchTerm.toLowerCase() === kw.toLowerCase();
            return (
              <button
                key={kw}
                type="button"
                onClick={() => { setSearchTerm(isActive ? '' : kw); setCurrentPage(1); }}
                style={{
                  background: isActive ? '#f59e0b' : 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${isActive ? '#f59e0b' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: isActive ? '#000' : 'var(--text-muted)',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  minHeight: 28,
                  transition: 'all 0.15s ease'
                }}
              >
                {kw}
              </button>
            );
          })}
        </div>

      </section>

      {/* Empty State */}
      {filteredQuestions.length === 0 ? (
        <div style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          background: 'rgba(16, 22, 32, 0.75)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <Filter size={44} style={{ margin: '0 auto 1.25rem', color: '#f59e0b', opacity: 0.7 }} aria-hidden="true" />
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: '#fff', fontWeight: 800 }}>
            Koi Question Match Nahi Hua
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto 1.75rem', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Aapke diye gaye filter ya search term ke sath koi sawal nahi mila. Search text clear karke dobara try karein.
          </p>
          <button
            type="button"
            onClick={() => { setSearchTerm(''); setSelectedTopic('all'); setSelectedType('all'); setOnlyBookmarks(false); setJumpToQ(''); }}
            style={{
              background: 'var(--primary-gradient)',
              color: '#000',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 800,
              minHeight: 46,
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(245, 158, 11, 0.4)'
            }}
          >
            <RotateCcw size={16} />
            <span>Reset All Search Filters</span>
          </button>
        </div>
      ) : (
        /* Questions Feed */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
          {paginatedQuestions.map(q => {
            const isExpanded = expandedQuestions[q.num] !== false; // Default expanded for ease of study
            const isRevealed = globalReveal || !!revealedAnswers[q.num];
            const correctLetters = (q.correctAnswer.match(/[A-E]/g) || []).sort();
            const isBookmarked = bookmarks.includes(q.num);
            const userSelection = userPicks[q.num] || [];

            return (
              <article
                key={q.num}
                id={`qb-q-${q.num}`}
                style={{
                  background: 'linear-gradient(145deg, rgba(16, 22, 32, 0.85) 0%, rgba(11, 16, 24, 0.95) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: isRevealed ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.25rem, 1rem + 0.8vw, 1.75rem)',
                  boxShadow: 'var(--shadow-md), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                  transition: 'all 0.22s ease'
                }}
              >
                {/* Question Header Bar */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 800, color: '#fbbf24', fontSize: '1.15rem' }}>
                      Question #{q.num}
                    </span>
                    {q.title && (
                      <span style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: 9999,
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}>
                        {q.title}
                      </span>
                    )}
                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#38bdf8',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: 9999
                    }}>
                      {q.conceptId?.replace(/-/g, ' ')}
                    </span>
                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.65rem',
                      borderRadius: 9999,
                      background: q.isMulti ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                      color: q.isMulti ? '#a5b4fc' : 'var(--text-muted)'
                    }}>
                      {q.isMulti ? '✨ Select Two' : 'Single Choice'}
                    </span>
                  </div>

                  {/* Card Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    {/* Reveal Answer Toggle */}
                    <button
                      type="button"
                      onClick={() => toggleReveal(q.num)}
                      style={{
                        background: isRevealed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.12)',
                        border: `1px solid ${isRevealed ? '#10b981' : 'rgba(245, 158, 11, 0.35)'}`,
                        color: isRevealed ? '#34d399' : '#fbbf24',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        minHeight: 34
                      }}
                    >
                      {isRevealed ? <Eye size={14} /> : <EyeOff size={14} />}
                      <span>{isRevealed ? 'Hide Explanation' : 'Reveal Answer & Why'}</span>
                    </button>

                    {/* Bookmark Star */}
                    <button
                      type="button"
                      onClick={() => toggleBookmark(q.num)}
                      title={isBookmarked ? 'Remove Star' : 'Star for Revision'}
                      style={{
                        background: isBookmarked ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${isBookmarked ? '#f59e0b' : 'rgba(255, 255, 255, 0.08)'}`,
                        borderRadius: 'var(--radius-sm)',
                        color: isBookmarked ? '#f59e0b' : 'var(--text-dim)',
                        cursor: 'pointer',
                        padding: '0.35rem',
                        minHeight: 34,
                        minWidth: 34
                      }}
                    >
                      <Star size={16} fill={isBookmarked ? '#f59e0b' : 'none'} />
                    </button>

                    {/* Expand / Collapse */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(q.num)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        padding: '0.35rem',
                        minHeight: 34
                      }}
                    >
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>

                {/* Question Body */}
                <div style={{ marginTop: '1rem' }}>
                  {/* Hinglish Question Context */}
                  {q.hinglishQ && (
                    <div style={{
                      background: 'rgba(99, 102, 241, 0.08)',
                      borderLeft: '3px solid #818cf8',
                      padding: '0.75rem 1rem',
                      borderRadius: '0 8px 8px 0',
                      fontSize: '0.92rem',
                      color: '#c7d2fe',
                      marginBottom: '1rem',
                      lineHeight: 1.6
                    }}>
                      <strong style={{ color: '#a5b4fc' }}>📝 Asan Bhasha Mein Sawal:</strong> {q.hinglishQ}
                    </div>
                  )}

                  {/* Question Text */}
                  <div style={{
                    fontSize: '1.02rem',
                    color: '#f8fafc',
                    fontWeight: 500,
                    lineHeight: 1.65,
                    marginBottom: '1.25rem'
                  }} dangerouslySetInnerHTML={{ __html: q.question.replace(/\n/g, '<br>') }} />

                  {/* Options Tiles */}
                  {isExpanded && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem' }}>
                      {Object.keys(q.options).sort().map(letter => {
                        const isCorrect = correctLetters.includes(letter);
                        const isPicked = userSelection.includes(letter);

                        let borderCol = 'rgba(255, 255, 255, 0.08)';
                        let bgCol = 'rgba(10, 15, 22, 0.55)';
                        let badgeBg = 'rgba(255, 255, 255, 0.08)';
                        let badgeColor = '#fff';

                        if (isRevealed) {
                          if (isCorrect) {
                            borderCol = '#10b981';
                            bgCol = 'rgba(16, 185, 129, 0.15)';
                            badgeBg = '#10b981';
                            badgeColor = '#000';
                          } else if (isPicked) {
                            borderCol = '#ef4444';
                            bgCol = 'rgba(239, 68, 68, 0.12)';
                            badgeBg = '#ef4444';
                            badgeColor = '#fff';
                          }
                        } else if (isPicked) {
                          borderCol = '#f59e0b';
                          bgCol = 'rgba(245, 158, 11, 0.15)';
                          badgeBg = '#f59e0b';
                          badgeColor = '#000';
                        }

                        return (
                          <div
                            key={letter}
                            onClick={() => handleUserPick(q.num, letter, q.isMulti)}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.85rem',
                              padding: '0.9rem 1.15rem',
                              background: bgCol,
                              border: `1px solid ${borderCol}`,
                              borderRadius: 'var(--radius-md)',
                              fontSize: '0.94rem',
                              color: isRevealed && isCorrect ? '#6ee7b7' : '#f1f5f9',
                              lineHeight: 1.55,
                              cursor: 'pointer',
                              userSelect: 'none',
                              transition: 'all 0.18s ease'
                            }}
                          >
                            <span style={{
                              width: 28,
                              height: 28,
                              borderRadius: '50%',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: badgeBg,
                              color: badgeColor,
                              fontWeight: 800,
                              fontSize: '0.82rem',
                              flexShrink: 0,
                              marginTop: 1
                            }}>
                              {letter}
                            </span>
                            <div style={{ flex: 1 }}>
                              <span>{q.options[letter]}</span>
                              {isRevealed && isCorrect && (
                                <span style={{
                                  display: 'inline-block',
                                  fontWeight: 800,
                                  color: '#34d399',
                                  marginLeft: '0.65rem',
                                  fontSize: '0.78rem',
                                  background: 'rgba(16, 185, 129, 0.25)',
                                  border: '1px solid rgba(16, 185, 129, 0.4)',
                                  padding: '0.12rem 0.55rem',
                                  borderRadius: 4
                                }}>
                                  Correct Answer ✅
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Complete Comprehensive Explanation Panel (When Revealed) */}
                  {isRevealed && (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      marginTop: '1.25rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                    }} className="animate-slide-up">
                      
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

                      {/* Baaki Options Kyun Galat Hain (Full Breakdown Table) */}
                      {q.wrongOptions && Object.keys(q.wrongOptions).length > 0 && (
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
                            <span>❌ Baaki Options Kyun Galat Hain (Option-by-Option Breakdown):</span>
                          </div>
                          <div className="table-container">
                            <table className="styled-table" aria-label="Option-by-option failure breakdown">
                              <thead>
                                <tr>
                                  <th style={{ width: 110 }}>Option</th>
                                  <th>Kyun Galat Hai? (Specific Reason)</th>
                                </tr>
                              </thead>
                              <tbody>
                                {Object.keys(q.options).sort().map(optLetter => {
                                  if (correctLetters.includes(optLetter)) return null;
                                  const wrongReason = q.wrongOptions[optLetter] || 'Yeh option official constraints ko bypass karta hai.';
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
                      )}

                      {/* Official Anthropic / Exam Explanation */}
                      {q.explanation && (
                        <div style={{
                          background: 'rgba(10, 15, 22, 0.65)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: 'var(--radius-md)',
                          padding: '1rem 1.25rem',
                          fontSize: '0.9rem',
                          lineHeight: 1.6
                        }}>
                          <strong style={{ color: '#38bdf8' }}>📖 Official Reference Explanation:</strong>
                          <p style={{ color: '#cbd5e1', marginTop: '0.35rem' }}>{q.explanation}</p>
                        </div>
                      )}

                      {/* Exam Memory Tip */}
                      {q.examTip && (
                        <div style={{
                          background: 'rgba(245, 158, 11, 0.08)',
                          borderLeft: '4px solid #f59e0b',
                          padding: '0.85rem 1.15rem',
                          borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                          fontSize: '0.9rem',
                          lineHeight: 1.6
                        }}>
                          <strong style={{ color: '#fbbf24' }}>💡 Exam Memory Tip:</strong>
                          <p style={{ color: '#fef3c7', marginTop: '0.25rem' }}>{q.examTip}</p>
                        </div>
                      )}

                    </div>
                  )}

                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1.25rem',
          background: 'rgba(16, 22, 32, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-lg)'
        }}>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Showing <strong>{(safePage - 1) * itemsPerPage + 1} - {Math.min(safePage * itemsPerPage, totalItems)}</strong> of <strong>{totalItems} questions</strong>
          </div>

          <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
            <button
              type="button"
              disabled={safePage === 1}
              onClick={() => { setCurrentPage(prev => Math.max(1, prev - 1)); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                padding: '0.45rem 0.95rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: safePage === 1 ? 'not-allowed' : 'pointer',
                minHeight: 38
              }}
            >
              <ChevronLeft size={16} /> Prev
            </button>

            <span style={{ fontSize: '0.88rem', color: '#fbbf24', fontWeight: 800, padding: '0 0.5rem' }}>
              Page {safePage} of {totalPages}
            </span>

            <button
              type="button"
              disabled={safePage === totalPages}
              onClick={() => { setCurrentPage(prev => Math.min(totalPages, prev + 1)); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                padding: '0.45rem 0.95rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: safePage === totalPages ? 'not-allowed' : 'pointer',
                minHeight: 38
              }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
