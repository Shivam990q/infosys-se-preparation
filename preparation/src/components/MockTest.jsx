import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, Award, Brain, ChevronLeft, ChevronRight, 
  RotateCcw, CheckCircle2, XCircle, HelpCircle, 
  Bookmark, Flag, AlertCircle, Eye, Check, X,
  Infinity as InfinityIcon, Sparkles, Filter, List
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MockTest({ questions = [], timeLimit = 1800, testTitle = 'Mock Examination', onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [reviewFilter, setReviewFilter] = useState('all'); // all, correct, incorrect, unanswered
  
  // Normalize timeLimit in seconds (e.g. if > 10000 ms passed in error, convert to sec)
  const normalizedTimeLimit = useMemo(() => {
    if (!timeLimit || timeLimit <= 0) return 1800;
    if (timeLimit > 10000) return Math.round(timeLimit / 1000);
    return timeLimit;
  }, [timeLimit]);

  const [timeLeft, setTimeLeft] = useState(normalizedTimeLimit);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Timer effect
  useEffect(() => {
    if (showResult || normalizedTimeLimit === -1) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setShowResult(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showResult, normalizedTimeLimit]);

  // MathJax typeset effect
  useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise().catch((err) => console.error('MathJax typeset failed:', err));
    }
  }, [currentIndex, showResult]);

  // Confetti on result
  useEffect(() => {
    if (showResult) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#c084fc', '#3b82f6', '#10b981']
      });
    }
  }, [showResult]);

  // Score calculation
  const stats = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach((q, idx) => {
      const ans = answers[idx];
      if (ans === undefined || ans === null || ans === '') {
        unanswered++;
        return;
      }

      if (q.options && q.options.length > 0) {
        const correctOpt = q.options.find(o => o.is_correct || o.isCorrect);
        if (correctOpt) {
          if (ans === correctOpt.id || ans === correctOpt.option_text) {
            correct++;
          } else {
            incorrect++;
          }
        } else {
          // If no option explicitly marked as correct, treat as practice submitted
          correct++;
        }
      } else {
        if (q.solution && String(ans).trim().toLowerCase() === String(q.solution).trim().toLowerCase()) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    const accuracy = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
    return { correct, incorrect, unanswered, accuracy };
  }, [answers, questions]);

  const formatTime = (seconds) => {
    if (seconds < 0) return '00:00';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleBookmark = (idx) => {
    setMarkedForReview(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleOptionSelect = (optId) => {
    setAnswers(prev => ({
      ...prev,
      [currentIndex]: optId
    }));
  };

  const clearCurrentAnswer = () => {
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  const handleSubmitExam = () => {
    setShowConfirmModal(true);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="glass-card p-12 text-center max-w-xl mx-auto space-y-4">
        <AlertCircle className="mx-auto text-[var(--theme-text-danger)]" size={48} />
        <h3 className="text-lg font-black text-[var(--theme-text-heading)]">No Questions Loaded</h3>
        <p className="text-xs text-[var(--theme-text-muted)]">Could not parse question bank for this mock test.</p>
        <button onClick={onFinish} className="btn-secondary py-2 px-6">Return to Dashboard</button>
      </div>
    );
  }

  // --- RESULT VIEW ---
  if (showResult) {
    const timeSpent = normalizedTimeLimit === -1 ? 0 : normalizedTimeLimit - Math.max(0, timeLeft);

    const filteredReviewQuestions = questions.map((q, idx) => {
      const userAns = answers[idx];
      const hasAnswered = userAns !== undefined && userAns !== null && userAns !== '';
      let isCorrect = false;
      let correctOpt = null;

      if (q.options && q.options.length > 0) {
        correctOpt = q.options.find(o => o.is_correct || o.isCorrect);
        if (correctOpt) {
          isCorrect = userAns === correctOpt.id || userAns === correctOpt.option_text;
        } else {
          isCorrect = true; // Practice default
        }
      }

      return {
        question: q,
        index: idx,
        userAns,
        hasAnswered,
        isCorrect,
        correctOpt
      };
    }).filter(item => {
      if (reviewFilter === 'correct') return item.hasAnswered && item.isCorrect;
      if (reviewFilter === 'incorrect') return item.hasAnswered && !item.isCorrect;
      if (reviewFilter === 'unanswered') return !item.hasAnswered;
      return true;
    });

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-5xl mx-auto space-y-8 pb-20"
      >
        {/* Scorecard Header */}
        <div className="glass-card p-8 md:p-10 rounded-3xl border border-[var(--theme-border)] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          
          <div className="w-20 h-20 bg-[var(--theme-bg-accent-subtle)] border border-[var(--theme-border-accent)] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl text-[var(--theme-text-accent)]">
            <Award size={40} />
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[var(--theme-text-heading)] tracking-tight">
            Mock Test <span className="gradient-text">Completed</span>
          </h2>
          <p className="text-xs md:text-sm text-[var(--theme-text-muted)] mt-1 font-medium">
            {testTitle} • Evaluation & Forensic Performance Breakdown
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="p-4 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)]">
              <span className="text-[10px] font-black uppercase tracking-wider text-[var(--theme-text-muted)]">Score</span>
              <div className="text-2xl md:text-3xl font-black text-indigo-400 mt-1">
                {stats.correct} <span className="text-sm text-[var(--theme-text-muted)]">/ {questions.length}</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)]">
              <span className="text-[10px] font-black uppercase tracking-wider text-[var(--theme-text-muted)]">Accuracy</span>
              <div className="text-2xl md:text-3xl font-black text-emerald-400 mt-1">
                {stats.accuracy}%
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)]">
              <span className="text-[10px] font-black uppercase tracking-wider text-[var(--theme-text-muted)]">Incorrect</span>
              <div className="text-2xl md:text-3xl font-black text-rose-400 mt-1">
                {stats.incorrect}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)]">
              <span className="text-[10px] font-black uppercase tracking-wider text-[var(--theme-text-muted)]">Time Spent</span>
              <div className="text-2xl md:text-3xl font-black text-amber-400 mt-1">
                {formatTime(timeSpent)}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={onFinish}
              className="btn-premium py-3 px-8 text-xs font-black uppercase tracking-wider"
            >
              Exit & Return to Course Library
            </button>
            <button 
              onClick={() => {
                setAnswers({});
                setMarkedForReview({});
                setCurrentIndex(0);
                setTimeLeft(normalizedTimeLimit);
                setShowResult(false);
              }}
              className="btn-secondary py-3 px-6 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <RotateCcw size={14} /> Retake Test
            </button>
          </div>
        </div>

        {/* Detailed Solutions Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-black text-[var(--theme-text-heading)] flex items-center gap-2">
                <Eye size={20} className="text-[var(--theme-text-accent)]" /> Detailed Question Analysis & Solutions
              </h3>
              <p className="text-xs text-[var(--theme-text-muted)] font-medium">Review your responses with step-by-step verified explanations.</p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 bg-[var(--theme-bg-elevated)] p-1.5 rounded-xl border border-[var(--theme-border)] text-xs font-bold">
              {[
                { id: 'all', label: `All (${questions.length})` },
                { id: 'correct', label: `Correct (${stats.correct})`, color: 'text-emerald-400' },
                { id: 'incorrect', label: `Incorrect (${stats.incorrect})`, color: 'text-rose-400' },
                { id: 'unanswered', label: `Unanswered (${stats.unanswered})`, color: 'text-amber-400' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setReviewFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    reviewFilter === f.id 
                      ? 'bg-[var(--theme-bg-accent-solid)] text-white shadow-sm' 
                      : 'text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question List Review */}
          <div className="space-y-6">
            {filteredReviewQuestions.map(({ question: q, index: idx, userAns, hasAnswered, isCorrect, correctOpt }) => (
              <div 
                key={idx}
                className="glass-card p-6 md:p-8 rounded-2xl border border-[var(--theme-border)] space-y-5 relative overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-[var(--theme-border)] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] flex items-center justify-center font-bold text-xs">
                      #{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-[var(--theme-text-muted)]">
                      {q.subject?.name || 'Section Question'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {!hasAnswered ? (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                        <HelpCircle size={12} /> Skipped / Unanswered
                      </span>
                    ) : isCorrect ? (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle2 size={12} /> Correct (+1.0)
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center gap-1">
                        <XCircle size={12} /> Incorrect (0.0)
                      </span>
                    )}
                  </div>
                </div>

                {/* Question HTML */}
                <div 
                  className="text-base md:text-lg font-bold text-[var(--theme-text-primary)] leading-relaxed space-y-2 [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2 [&_p]:mb-2"
                  dangerouslySetInnerHTML={{ __html: q.question_text }}
                />

                {/* Options Review */}
                {q.options && q.options.length > 0 && (
                  <div className="space-y-2.5 pt-2">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = userAns === opt.id || userAns === opt.option_text;
                      const isOptionCorrect = opt.is_correct || opt.isCorrect;

                      let optClasses = 'border-[var(--theme-border)] bg-[var(--theme-bg-subtle)]';
                      let badge = String.fromCharCode(65 + oIdx);

                      if (isOptionCorrect) {
                        optClasses = 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300 font-bold';
                      } else if (isSelected && !isOptionCorrect) {
                        optClasses = 'border-rose-500/60 bg-rose-500/10 text-rose-300';
                      }

                      return (
                        <div 
                          key={oIdx}
                          className={`p-3.5 rounded-xl border flex items-start gap-3 transition-all ${optClasses}`}
                        >
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                            isOptionCorrect ? 'bg-emerald-500 text-white' : isSelected ? 'bg-rose-500 text-white' : 'bg-[var(--theme-bg-subtle-hover)] text-[var(--theme-text-muted)]'
                          }`}>
                            {badge}
                          </span>
                          <div 
                            className="flex-1 text-sm pt-0.5 [&_img]:max-w-full [&_img]:rounded-lg [&_p]:m-0"
                            dangerouslySetInnerHTML={{ __html: opt.option_text }}
                          />
                          {isOptionCorrect && (
                            <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded shrink-0">
                              Correct Answer
                            </span>
                          )}
                          {isSelected && !isOptionCorrect && (
                            <span className="text-[10px] uppercase font-bold text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded shrink-0">
                              Your Choice
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Solution Explanation Box */}
                {q.solution && (
                  <div className="p-4 rounded-xl bg-[var(--theme-bg-elevated)] border border-[var(--theme-border-accent)] space-y-2 mt-4">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[var(--theme-text-accent)] flex items-center gap-1.5">
                      <Sparkles size={14} /> Step-by-Step Solution & Walkthrough
                    </div>
                    <div 
                      className="text-xs md:text-sm text-[var(--theme-text-muted)] leading-relaxed [&_img]:max-w-full [&_img]:rounded-xl [&_p]:mb-2 font-medium"
                      dangerouslySetInnerHTML={{ __html: q.solution }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // --- EXAM INTERFACE VIEW ---
  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      {/* Top Test Header Bar */}
      <div className="p-4 md:p-6 rounded-2xl glass-card border border-[var(--theme-border)] flex flex-wrap items-center justify-between gap-4 sticky top-4 z-40 shadow-xl backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center font-black">
            <Brain size={20} />
          </div>
          <div>
            <h2 className="text-sm md:text-base font-black text-[var(--theme-text-heading)] truncate max-w-xs md:max-w-md">
              {testTitle}
            </h2>
            <div className="flex items-center gap-2 text-[10px] font-bold text-[var(--theme-text-muted)] uppercase tracking-wider">
              <span>Question {currentIndex + 1} of {questions.length}</span>
              <span>•</span>
              <span className="text-indigo-400">{currentQuestion.subject?.name || 'CBT Section'}</span>
            </div>
          </div>
        </div>

        {/* Timer Display */}
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-lg font-black border transition-all ${
            timeLeft < 120 
              ? 'bg-rose-500/10 border-rose-500/40 text-rose-400 animate-pulse' 
              : 'bg-[var(--theme-bg-subtle)] border-[var(--theme-border)] text-amber-400'
          }`}>
            <Clock size={18} />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button 
            onClick={handleSubmitExam}
            className="btn-premium py-2 px-5 text-xs font-black uppercase tracking-wider shadow-md active:scale-95"
          >
            Submit Test
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Question Box (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 md:p-8 rounded-2xl border border-[var(--theme-border)] space-y-6 shadow-lg min-h-[480px] flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-[var(--theme-border)] pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Q. {currentIndex + 1}
                  </span>
                  <span className="text-xs text-[var(--theme-text-muted)] font-medium">Single Answer (1 Mark)</span>
                </div>

                <button
                  onClick={() => toggleBookmark(currentIndex)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
                    markedForReview[currentIndex] 
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' 
                      : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] border-[var(--theme-border)] hover:text-white'
                  }`}
                >
                  <Bookmark size={14} className={markedForReview[currentIndex] ? 'fill-amber-400' : ''} />
                  {markedForReview[currentIndex] ? 'Marked for Review' : 'Mark for Review'}
                </button>
              </div>

              {/* Question Body with HTML & Diagrams */}
              <div 
                className="text-base md:text-xl font-bold text-[var(--theme-text-primary)] leading-relaxed space-y-3 [&_img]:max-w-full [&_img]:rounded-xl [&_img]:shadow-sm [&_img]:my-3 [&_p]:mb-2"
                dangerouslySetInnerHTML={{ __html: currentQuestion.question_text }}
              />

              {/* Multiple Choice Options */}
              {currentQuestion.options && currentQuestion.options.length > 0 ? (
                <div className="space-y-3 pt-3">
                  {currentQuestion.options.map((opt, oIdx) => {
                    const isSelected = answers[currentIndex] === opt.id || answers[currentIndex] === opt.option_text;
                    const badge = String.fromCharCode(65 + oIdx);

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleOptionSelect(opt.id || opt.option_text)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 group cursor-pointer ${
                          isSelected 
                            ? 'bg-indigo-600/15 border-indigo-500 shadow-md shadow-indigo-500/10' 
                            : 'bg-[var(--theme-bg-subtle)] border-[var(--theme-border)] hover:bg-[var(--theme-bg-subtle-hover)] hover:border-[var(--theme-border-strong)]'
                        }`}
                      >
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                          isSelected ? 'bg-indigo-600 text-white' : 'bg-[var(--theme-bg-subtle-hover)] text-[var(--theme-text-muted)] group-hover:text-white'
                        }`}>
                          {badge}
                        </span>
                        <div 
                          className="text-sm md:text-base font-medium text-[var(--theme-text-secondary)] pt-1 [&_img]:max-w-full [&_img]:rounded-lg [&_p]:m-0"
                          dangerouslySetInnerHTML={{ __html: opt.option_text }}
                        />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="pt-4 space-y-2">
                  <label className="text-xs font-black text-[var(--theme-text-muted)] uppercase tracking-wider">
                    Numerical / Text Solution Input
                  </label>
                  <input
                    type="text"
                    placeholder="Type your answer value here..."
                    value={answers[currentIndex] || ''}
                    onChange={(e) => handleOptionSelect(e.target.value)}
                    className="w-full p-4 rounded-xl bg-[var(--theme-bg-input)] border border-[var(--theme-border)] focus:border-[var(--theme-bg-accent-solid)] outline-none text-lg font-bold text-[var(--theme-text-primary)]"
                  />
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-[var(--theme-border)] mt-8">
              <div className="flex items-center gap-2">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                  className="btn-secondary py-2 px-4 text-xs font-bold flex items-center gap-1.5 disabled:opacity-30"
                >
                  <ChevronLeft size={16} /> Previous
                </button>
                {answers[currentIndex] !== undefined && (
                  <button
                    onClick={clearCurrentAnswer}
                    className="text-xs font-bold text-[var(--theme-text-muted)] hover:text-rose-400 px-3 py-1.5"
                  >
                    Clear Choice
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {currentIndex < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                    className="btn-primary py-2.5 px-6 text-xs font-black uppercase tracking-wider flex items-center gap-2"
                  >
                    Next Question <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitExam}
                    className="btn-premium py-2.5 px-6 text-xs font-black uppercase tracking-wider shadow-lg"
                  >
                    Submit Exam & View Report
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Question Palette Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-card p-5 rounded-2xl border border-[var(--theme-border)] space-y-4 shadow-lg">
            <h3 className="text-xs font-black uppercase tracking-wider text-[var(--theme-text-muted)] flex items-center justify-between">
              <span>Question Palette ({questions.length})</span>
              <span className="text-indigo-400 font-mono">{Object.keys(answers).length} Answered</span>
            </h3>

            {/* Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="w-3.5 h-3.5 rounded bg-emerald-500" /> Answered ({Object.keys(answers).length})
              </div>
              <div className="flex items-center gap-2 text-amber-400">
                <div className="w-3.5 h-3.5 rounded bg-amber-500" /> Marked ({Object.keys(markedForReview).filter(k => markedForReview[k]).length})
              </div>
              <div className="flex items-center gap-2 text-indigo-400">
                <div className="w-3.5 h-3.5 rounded border-2 border-indigo-500" /> Current Question
              </div>
              <div className="flex items-center gap-2 text-[var(--theme-text-muted)]">
                <div className="w-3.5 h-3.5 rounded bg-[var(--theme-bg-subtle-hover)]" /> Not Visited
              </div>
            </div>

            {/* Palette Grid Buttons */}
            <div className="grid grid-cols-5 gap-2 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar pt-2">
              {questions.map((_, qIdx) => {
                const isAnswered = answers[qIdx] !== undefined && answers[qIdx] !== null && answers[qIdx] !== '';
                const isMarked = markedForReview[qIdx];
                const isCurrent = qIdx === currentIndex;

                let btnStyle = 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] border-[var(--theme-border)]';

                if (isCurrent) {
                  btnStyle = 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-black bg-indigo-600 text-white font-black scale-105';
                } else if (isMarked) {
                  btnStyle = 'bg-amber-500 text-white font-black border-amber-600';
                } else if (isAnswered) {
                  btnStyle = 'bg-emerald-600 text-white font-black border-emerald-700';
                }

                return (
                  <button
                    key={qIdx}
                    onClick={() => setCurrentIndex(qIdx)}
                    className={`h-10 rounded-xl text-xs font-bold transition-all flex items-center justify-center border ${btnStyle} hover:opacity-90 active:scale-95`}
                  >
                    {qIdx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleSubmitExam}
              className="w-full btn-premium py-3 text-xs font-black uppercase tracking-wider mt-2"
            >
              Submit & Finalize
            </button>
          </div>
        </div>
      </div>

      {/* SUBMISSION CONFIRMATION MODAL */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="glass-card max-w-md w-full p-6 border border-[var(--theme-border-default)] shadow-2xl relative space-y-6">
            <div className="flex items-center space-x-3 text-indigo-400">
              <CheckCircle2 size={28} />
              <div>
                <h3 className="text-lg font-black text-[var(--theme-text-heading)]">Submit Examination</h3>
                <p className="text-xs text-[var(--theme-text-muted)]">Are you sure you want to conclude this mock test?</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 py-2 text-center">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="block text-xl font-black text-emerald-400">{Object.keys(answers).length}</span>
                <span className="text-[10px] font-bold uppercase text-[var(--theme-text-muted)]">Answered</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <span className="block text-xl font-black text-amber-400">{Object.values(markedForReview).filter(Boolean).length}</span>
                <span className="text-[10px] font-bold uppercase text-[var(--theme-text-muted)]">Marked</span>
              </div>
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                <span className="block text-xl font-black text-rose-400">{questions.length - Object.keys(answers).length}</span>
                <span className="text-[10px] font-bold uppercase text-[var(--theme-text-muted)]">Unanswered</span>
              </div>
            </div>

            <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed">
              Once submitted, your responses will be evaluated instantly. You will gain access to detailed solutions, explanations, accuracy metrics, and step-by-step reasoning.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 btn-secondary py-2.5 text-xs font-bold"
              >
                Back to Test
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  setShowResult(true);
                }}
                className="flex-1 btn-premium py-2.5 text-xs font-black"
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
