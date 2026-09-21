import { useState, useMemo, useEffect, useRef } from 'react';



import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, BookOpen, CheckCircle, 
  Layout, ChevronRight, X, Brain, Target, Star, 
  RotateCcw, ChevronLeft, Award, Zap, Clock, Loader2,
  ShieldCheck, Activity,
  ChevronDown, SearchCode, GraduationCap, Layers,
  Menu, Infinity as InfinityIcon, Sun, Moon, Sparkles
} from 'lucide-react';

const SUBJECT_DESCRIPTIONS = {
  "Analytical & Critical Reasoning": "Evaluate complex arguments, recognize patterns, and apply logical structures to solve high-level problems.",
  "Coding": "Previous Year Questions (PYQs) from top tech companies to test algorithmic thinking and programming proficiency.",
  "Communication Skills": "Assess written and verbal communication logic, grammar, and professional interaction scenarios.",
  "General & Current Affairs": "Test awareness of recent global events, business updates, and general knowledge.",
  "Logical Reasoning": "Analyze puzzles, sequences, and deductive logic to reach accurate conclusions.",
  "Quantitative Aptitude": "Mathematical problem-solving, data interpretation, and numerical calculation skills.",
  "Technical Awareness": "Core computer science concepts including OS, DBMS, Networks, and software engineering principles.",
  "Verbal Ability": "Vocabulary, reading comprehension, sentence correction, and language proficiency."
};


import confetti from 'canvas-confetti';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';


// --- Constants & Config ---

const ITEMS_PER_PAGE = 20;


const Badge = ({ children, variant = 'indigo' }) => {
  const variants = {
    indigo: 'bg-[var(--badge-indigo-bg)] text-[var(--badge-indigo-text)] border-[var(--badge-indigo-border)]',
    rose: 'bg-[var(--badge-rose-bg)] text-[var(--badge-rose-text)] border-[var(--badge-rose-border)]',
    emerald: 'bg-[var(--badge-emerald-bg)] text-[var(--badge-emerald-text)] border-[var(--badge-emerald-border)]',
    amber: 'bg-[var(--badge-amber-bg)] text-[var(--badge-amber-text)] border-[var(--badge-amber-border)]',
    fuchsia: 'bg-[var(--badge-fuchsia-bg)] text-[var(--badge-fuchsia-text)] border-[var(--badge-fuchsia-border)]',
    sky: 'bg-[var(--badge-sky-bg)] text-[var(--badge-sky-text)] border-[var(--badge-sky-border)]',
    violet: 'bg-[var(--badge-violet-bg)] text-[var(--badge-violet-text)] border-[var(--badge-violet-border)]',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${variants[variant] || variants.indigo}`}>
      {children}
    </span>
  );
};

const QuestionCard = ({ question, status, onSetStatus, testMode = false }) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Trigger MathJax processing whenever the component renders or updates (e.g. when expanding solution)
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise().catch((err) => console.error('MathJax typeset failed:', err));
    }
  }, [question, showExplanation]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className={`glass-card p-5 mb-4 group transition-colors duration-300 relative overflow-hidden ${
        status === 'learned' ? 'border-[var(--theme-border-strong)]' : 
        status === 'difficult' ? 'border-[var(--theme-border-strong)]' : ''
      }`}
    >
      {/* Status Indicators */}
      {status !== 'normal' && (
        <div className={`absolute top-0 left-0 w-1 h-full ${status === 'learned' ? 'bg-[var(--theme-bg-success-solid)]' : 'bg-[var(--theme-bg-danger-solid)]'}`} />
      )}

      <div className="flex justify-between items-start mb-4 gap-3">
        <div className="flex gap-2 flex-wrap items-center">
          <Badge variant="indigo">{question.subject?.name || 'General'}</Badge>
          <Badge variant={
            question.difficulty?.name === 'High' ? 'rose' :
            question.difficulty?.name === 'Medium' ? 'amber' : 'emerald'
          }>
            {question.difficulty?.name || 'Standard'}
          </Badge>
          {question.cognitive_level?.name && (
            <Badge variant="fuchsia">{question.cognitive_level.name}</Badge>
          )}
          {question.question_type?.name && (
            <Badge variant="sky">{question.question_type.name}</Badge>
          )}
          {question.examination_types?.length > 0 && (
            question.examination_types.map((et, idx) => (
              <Badge key={idx} variant="violet">{et.examination_type?.name}</Badge>
            ))
          )}
        </div>
        
        {!testMode && (
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => onSetStatus(question.id, status === 'difficult' ? 'normal' : 'difficult')}
              className={`p-2.5 rounded-2xl transition-all duration-300 ${status === 'difficult' ? 'bg-[var(--theme-bg-danger-solid)] text-white' : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:bg-[var(--theme-bg-danger-subtle)] hover:text-[var(--theme-text-danger)]'}`}
              title="Mark Critical"
            >
              <Zap size={18} />
            </button>
            <button 
              onClick={() => onSetStatus(question.id, status === 'learned' ? 'normal' : 'learned')}
              className={`p-2.5 rounded-2xl transition-all duration-300 ${status === 'learned' ? 'bg-[var(--theme-bg-success-solid)] text-white' : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:bg-[var(--theme-bg-success-subtle)] hover:text-[var(--theme-text-success)]'}`}
              title="Mark Verified"
            >
              <CheckCircle size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="prose-custom mb-4 overflow-visible tex2jax_process">
        <div className="text-base md:text-lg font-bold leading-relaxed text-[var(--theme-text-primary)] tracking-tight break-words" dangerouslySetInnerHTML={{ __html: question.question_text }} />
        {question.options && question.options.length > 0 && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {question.options.map((opt, idx) => {
              const isSelected = selectedOption === (opt.id || opt.option_text);
              return (
                <div 
                  key={idx} 
                  onClick={() => {
                    if (!showExplanation) {
                      setSelectedOption(opt.id || opt.option_text);
                      setShowExplanation(true);
                    }
                  }}
                  className={`p-3 rounded-xl border text-sm font-medium transition-colors ${!showExplanation ? 'cursor-pointer' : ''} ${
                    showExplanation && opt.is_correct ? 'bg-[var(--theme-correct-bg)] border-[var(--theme-correct-border)] text-[var(--theme-correct-text)]' : 
                    showExplanation && isSelected && !opt.is_correct ? 'bg-[var(--theme-bg-danger-subtle)] border-[var(--theme-border-strong)] text-[var(--theme-text-danger)]' :
                    isSelected ? 'bg-[var(--theme-bg-accent-subtle)] border-[var(--theme-border-strong)]' :
                    `bg-[var(--theme-bg-subtle)] border-[var(--theme-border)] text-[var(--theme-text-secondary)] ${!showExplanation ? 'hover:bg-[var(--theme-bg-subtle-hover)]' : ''}`
                  }`}
                >
                  <div className="flex gap-3">
                    <span className="font-bold text-[var(--theme-text-accent)]">{String.fromCharCode(65 + idx)}.</span>
                    <span dangerouslySetInnerHTML={{ __html: opt.option_text }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--theme-text-muted)] font-semibold tracking-wider">
        <div className="flex items-center gap-1.5">
          <Target size={12} className="text-[var(--theme-text-accent)] opacity-50" />
          <span>{question.topic?.name || question.topic}</span>
        </div>
        {question.question_code && (
          <div className="flex items-center gap-1.5">
            <SearchCode size={12} className="text-[var(--theme-text-accent)] opacity-50" />
            <span className="font-mono">{question.question_code}</span>
          </div>
        )}
        {question.exam?.name && (
          <div className="flex items-center gap-1.5">
            <GraduationCap size={12} className="text-[var(--theme-text-accent)] opacity-50" />
            <span>{question.exam.name}</span>
          </div>
        )}
        {(question.marks || question.total_marks) && (
          <div className="flex items-center gap-1.5">
            <Award size={12} className="text-[var(--theme-text-warning)] opacity-50" />
            <span>{question.marks || question.total_marks} Marks</span>
          </div>
        )}
        {question.negative_marks && parseFloat(question.negative_marks) > 0 && (
          <div className="flex items-center gap-1.5 text-[var(--theme-text-danger)] opacity-80">
            <span>-{parseFloat(question.negative_marks)}</span>
          </div>
        )}
        {(question.time_to_solve || question.time_limit_seconds) && (
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-[var(--theme-text-info)] opacity-50" />
            <span>{question.time_limit_seconds ? `${question.time_limit_seconds}s` : `${question.time_to_solve}s`}</span>
          </div>
        )}
        {question.memory_limit_mb && (
          <div className="flex items-center gap-1.5">
            <Layers size={12} className="text-[var(--badge-fuchsia-text)] opacity-50" />
            <span>{question.memory_limit_mb}MB Limit</span>
          </div>
        )}
        {question.pyq && question.years && (
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--badge-amber-bg)] text-[var(--badge-amber-text)]">
            <span>PYQ: {question.years}</span>
          </div>
        )}
      </div>

      {!testMode && (
        <div className="mt-4">
          <button 
            onClick={() => setShowExplanation(!showExplanation)}
            className="w-full py-2.5 px-5 rounded-xl bg-[var(--theme-bg-subtle)] hover:bg-[var(--theme-bg-subtle-hover)] border border-[var(--theme-border)] transition-all text-xs font-bold uppercase tracking-wider text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] flex items-center justify-center gap-2 group/btn"
          >
            {showExplanation ? 'Hide Solution' : 'Show Solution'}
            <ChevronDown size={14} className={`transition-transform duration-500 ${showExplanation ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}

      <AnimatePresence>
        {showExplanation && !testMode && (
          <motion.div 
            key="explanation-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3 pt-4 border-t border-[var(--theme-border)] tex2jax_process">
              
              {question.solution?.trim() && (
                <div className="p-4 rounded-xl bg-[var(--theme-solution-bg)] border border-[var(--theme-solution-border)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-5">
                    <ShieldCheck size={50} />
                  </div>
                  <div className="flex items-center gap-2 text-[var(--theme-text-success)] font-bold mb-2 text-[10px] uppercase tracking-wider">
                    <Star size={12} className="fill-[var(--theme-text-success)]" /> Solution
                  </div>
                  <div className="text-[var(--theme-solution-text)] text-sm font-bold overflow-x-auto overflow-y-hidden" dangerouslySetInnerHTML={{ __html: question.solution }} />
                </div>
              )}
              
              {question.model_answer?.trim() && (
                <div className="p-4 rounded-xl bg-[var(--theme-model-answer-bg)] border border-[var(--theme-model-answer-border)] text-sm leading-relaxed text-[var(--theme-text-secondary)] overflow-x-auto overflow-y-hidden">
                  <div className="flex items-center gap-2 text-[var(--theme-text-info)] font-bold mb-2 text-[10px] uppercase tracking-wider">
                    <ShieldCheck size={12} /> Model Answer
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: question.model_answer }} />
                </div>
              )}

              {question.solution_code?.trim() && (
                <div className="p-4 rounded-xl bg-[var(--theme-code-block-bg)] border border-[var(--theme-code-block-border)] text-sm leading-relaxed overflow-x-auto">
                  <div className="flex items-center gap-2 text-[var(--theme-text-muted)] font-bold mb-2 text-[10px] uppercase tracking-wider">
                    <SearchCode size={12} /> Reference Solution Code
                  </div>
                  <pre className="text-[var(--theme-text-success)] font-mono text-xs"><code>{question.solution_code}</code></pre>
                </div>
              )}
              
              {question.explanation?.trim() && (
                <div className="p-4 rounded-xl bg-[var(--theme-explanation-bg)] border border-[var(--theme-explanation-border)] text-xs leading-relaxed text-[var(--theme-text-muted)] font-medium italic overflow-x-auto overflow-y-hidden">
                  <div className="flex items-center gap-2 text-[var(--theme-text-accent)] font-bold mb-2 text-[10px] uppercase tracking-wider">
                    <Activity size={12} /> Explanation
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: question.explanation }} />
                </div>
              )}

              {question.starter_code?.trim() && (
                <div className="p-4 rounded-xl bg-[var(--theme-starter-code-bg)] border border-[var(--theme-starter-code-border)] text-sm leading-relaxed overflow-x-auto">
                  <div className="flex items-center gap-2 text-[var(--theme-text-secondary)] font-bold mb-2 text-[10px] uppercase tracking-wider">
                    <Layers size={12} /> Starter Code
                  </div>
                  <pre className="text-[var(--theme-text-muted)] font-mono text-xs opacity-75"><code>{question.starter_code}</code></pre>
                </div>
              )}

              {!question.solution?.trim() && !question.explanation?.trim() && !question.model_answer?.trim() && !question.solution_code?.trim() && (
                <div className="p-4 rounded-xl bg-[var(--theme-no-explanation-bg)] border border-[var(--theme-no-explanation-border)] text-xs leading-relaxed text-[var(--theme-text-muted)] font-medium italic text-center">
                  Correct answer is highlighted above. No detailed explanation available.
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const TestConfigModal = ({ availableCount, filters, onStart, onClose }) => {
  const [count, setCount] = useState(Math.min(10, availableCount));
  const [timeMode, setTimeMode] = useState(60); // 30, 60, 120, -1
  const [customCount, setCustomCount] = useState('');

  const [prevAvailableCount, setPrevAvailableCount] = useState(availableCount);
  if (availableCount !== prevAvailableCount) {
    setPrevAvailableCount(availableCount);
    if (count > availableCount) {
      setCount(availableCount);
    }
  }

  const handleCustomCountChange = (e) => {
    const val = parseInt(e.target.value);
    setCustomCount(e.target.value);
    if (!isNaN(val) && val > 0 && val <= availableCount) {
      setCount(val);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[var(--theme-bg-overlay)] backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[var(--theme-bg-modal)] border border-[var(--theme-border)] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        <div className="p-6 border-b border-[var(--theme-border)] flex justify-between items-center bg-[var(--theme-bg-elevated)] shrink-0">
          <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--theme-text-heading)]"><Target className="text-[var(--theme-text-accent)]" /> Custom Mock Test</h2>
          <button onClick={onClose} className="p-2 hover:bg-[var(--theme-bg-subtle-hover)] rounded-lg transition-colors text-[var(--theme-text-muted)]"><X size={20} /></button>
        </div>
        
        <div className="p-6 overflow-y-auto space-y-8 shrink" data-lenis-prevent="true">
          {/* Filters Section */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-[var(--theme-text-muted)] uppercase tracking-wider flex items-center gap-2"><Filter size={14}/> Test Filters</label>
            <div className="grid grid-cols-2 gap-3">
              {filters && filters.map((filter, i) => (
                <div key={i} className="space-y-1">
                  <label className="text-[9px] font-bold tracking-wider text-[var(--theme-text-faint)] uppercase ml-3">{filter.label}</label>
                  <div className="relative">
                    <select 
                      value={filter.value}
                      onChange={(e) => filter.setter(e.target.value)}
                      className="w-full pl-4 pr-8 py-2.5 rounded-xl bg-[var(--theme-bg-input)] border border-[var(--theme-border)] focus:border-[var(--theme-bg-accent-solid)]/40 outline-none transition-all text-sm font-bold text-[var(--theme-text-primary)] appearance-none"
                    >
                      {filter.options.map(o => <option key={o} value={o} className="bg-[var(--theme-option-bg)]">{o === 'normal' ? 'Pending' : o}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--theme-text-muted)] pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-[var(--theme-border)] w-full"></div>

          <div>
            <label className="text-xs font-bold text-[var(--theme-text-muted)] uppercase tracking-wider block mb-3">Number of Questions</label>
            <div className="flex flex-wrap gap-3 items-center">
              {[5, 10, 20, 50, availableCount].filter((v, i, a) => a.indexOf(v) === i).map(num => {
                if (num > availableCount && num !== availableCount) return null;
                const label = num === availableCount ? `All (${availableCount})` : num;
                return (
                  <button
                    key={`count-${num}`}
                    onClick={() => { setCount(num); setCustomCount(''); }}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${count === num && customCount === '' ? 'bg-[var(--theme-bg-accent-solid)] text-white border-[var(--theme-bg-accent-solid)]' : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] border-[var(--theme-border)] hover:bg-[var(--theme-bg-subtle-hover)]'}`}
                  >
                    {label}
                  </button>
                )
              })}
              <input 
                type="number" 
                min="1" 
                max={availableCount}
                placeholder="Custom..."
                value={customCount}
                onChange={(e) => {
                  const val = e.target.value;
                  setCustomCount(val);
                  const num = parseInt(val);
                  if (!isNaN(num)) {
                    setCount(num);
                  } else {
                    setCount(0);
                  }
                }}
                className={`w-28 px-4 py-2 rounded-xl text-sm font-medium bg-[var(--theme-bg-input)] border border-[var(--theme-border)] text-[var(--theme-text-primary)] focus:outline-none focus:border-[var(--theme-bg-accent-solid)] focus:ring-2 focus:ring-[var(--theme-shadow-accent)] transition-all ${customCount !== '' ? 'bg-[var(--theme-bg-accent-subtle)] border-[var(--theme-border-strong)]' : ''}`}
              />
            </div>
            {count > availableCount && customCount !== '' && (
              <p className="mt-2 text-[11px] text-[var(--theme-text-danger)] font-medium">Please enter a number between 1 and {availableCount}.</p>
            )}
            <p className="mt-3 text-[11px] font-medium text-[var(--theme-text-muted)] flex items-center gap-1.5"><Zap size={12} className="text-[var(--theme-text-accent)]" /> Questions will be randomly selected from your current <strong className="text-[var(--theme-text-primary)]">{availableCount}</strong> filtered questions.</p>
          </div>
          
          <div>
            <label className="text-xs font-bold text-[var(--theme-text-muted)] uppercase tracking-wider block mb-3">Time Per Question</label>
            <div className="flex flex-wrap gap-3">
              {[
                { val: 30, label: '30s' },
                { val: 60, label: '1m' },
                { val: 120, label: '2m' },
                { val: -1, label: 'Unlimited' },
              ].map(opt => (
                  <button
                    key={`time-${opt.val}`}
                    onClick={() => setTimeMode(opt.val)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${timeMode === opt.val ? 'bg-[var(--theme-bg-warning-solid)] text-white border-[var(--theme-bg-warning-solid)]' : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] border-[var(--theme-border)] hover:bg-[var(--theme-bg-subtle-hover)]'}`}
                  >
                    {opt.label}
                  </button>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-[var(--theme-border)] bg-[var(--theme-bg-elevated)] flex justify-end gap-3 shrink-0">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl text-sm font-bold text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-subtle)] transition-colors">Cancel</button>
          <button 
            disabled={availableCount === 0 || count <= 0 || isNaN(count) || count > availableCount}
            onClick={() => onStart(count, timeMode === -1 ? -1 : count * timeMode)} 
            className="px-5 py-2.5 rounded-xl text-sm font-bold bg-[var(--theme-bg-accent-solid)] hover:bg-[var(--theme-btn-primary-hover)] text-white shadow-lg shadow-[0_4px_14px_var(--theme-shadow-accent)] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Zap size={16} /> Begin Test
          </button>
        </div>
      </motion.div>
    </div>
  );
};


const MockTest = ({ questions, timeLimit, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (showResult || timeLimit === -1) return;
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
  }, [showResult, timeLimit]);

  useEffect(() => {
    if (showResult) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#c084fc', '#4f46e5']
      });
    }
  }, [showResult]);

  const score = useMemo(() => {
    return Object.keys(answers).reduce((acc, idx) => {
      const q = questions[idx];
      const ans = answers[idx];
      if (q.options && q.options.length > 0) {
        // Multiple choice check
        const selectedOpt = q.options.find(o => o.id === ans || o.option_text === ans);
        if (selectedOpt && selectedOpt.is_correct) return acc + 1;
      } else {
        // Text input check
        if (ans && q.solution && ans.trim().toLowerCase() === q.solution.trim().toLowerCase()) return acc + 1;
      }
      return acc;
    }, 0);
  }, [answers, questions]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (showResult) {
    const timeSpent = timeLimit === -1 ? 0 : timeLimit - Math.max(0, timeLeft);
    const accuracy = Math.round((score / questions.length) * 100);

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-[var(--theme-btn-primary-bg)] shadow-lg shadow-[0_4px_14px_var(--theme-shadow-accent)]" />
        
        <div className="w-24 h-24 bg-[var(--theme-bg-accent-subtle)] rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-[0_4px_14px_var(--theme-shadow-accent)] animate-float">
          <Award className="text-[var(--theme-text-accent)]" size={48} />
        </div>
        
        <h2 className="text-5xl font-black mb-4 tracking-tight text-[var(--theme-text-heading)]">Audit <span className="gradient-text">Concluded</span></h2>
        <p className="text-[var(--theme-text-muted)] text-lg mb-12 font-medium">Simulation report generated for current security intelligence.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Score Matrix', val: `${score} / ${questions.length}`, color: 'text-[var(--theme-text-accent)]' },
            { label: 'Accuracy Rating', val: `${accuracy}%`, color: 'text-[var(--theme-text-success)]' },
            { label: 'Time Efficiency', val: `${Math.floor(timeSpent / 60)}m ${timeSpent % 60}s`, color: 'text-[var(--theme-text-warning)]' }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--theme-text-muted)]">{stat.label}</span>
              <span className={`text-3xl font-black ${stat.color}`}>{stat.val}</span>
            </div>
          ))}
        </div>
        
        <button onClick={onFinish} className="btn-premium w-full py-6 text-lg tracking-widest uppercase font-black">
          Archive Session & Exit
        </button>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center glass-card p-6 px-10 sticky top-8 z-50">
        <div className="flex items-center gap-10">
          <div className="text-xs font-black tracking-[0.2em] text-[var(--theme-text-muted)] flex items-center gap-3">
            PHASE <span className="text-2xl text-[var(--theme-text-heading)] font-mono">{currentIndex + 1}</span> <span className="opacity-20">/</span> <span className="text-lg opacity-40">{questions.length}</span>
          </div>
          <div className="h-10 w-px bg-[var(--theme-border)] hidden md:block" />
          {timeLimit !== -1 ? (
            <div className={`flex items-center gap-3 font-mono text-2xl font-black ${timeLeft < 60 ? 'text-[var(--theme-text-danger)] animate-pulse' : 'text-[var(--theme-text-warning)]'}`}>
              <Clock size={24} /> {formatTime(timeLeft)}
            </div>
          ) : (
            <div className="flex items-center gap-3 font-mono text-lg font-black text-[var(--theme-text-accent)]">
              <InfinityIcon size={24} /> Unlimited Time
            </div>
          )}
        </div>
        <div className="flex gap-2.5">
          {questions.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-[var(--theme-bg-accent-solid)] scale-150 shadow-lg shadow-[0_8px_20px_var(--theme-shadow-accent)]' : i < currentIndex ? 'bg-[var(--theme-bg-accent-subtle)]' : 'bg-[var(--theme-bg-subtle)]'}`} 
            />
          ))}
        </div>
      </div>

      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card p-12 min-h-[600px] flex flex-col relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Brain size={160} className="text-[var(--theme-text-accent)]" />
        </div>
        
        <div className="flex-1 relative z-10">
          <div className="mb-8">
            <Badge variant="indigo">{currentQuestion.subject?.name}</Badge>
          </div>
          <h3 className="text-3xl md:text-4xl font-black mb-16 leading-[1.2] text-[var(--theme-text-primary)] tracking-tight tex2jax_process" dangerouslySetInnerHTML={{ __html: currentQuestion.question_text }} />
          
          <div className="max-w-2xl">
            {currentQuestion.options && currentQuestion.options.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAnswers({...answers, [currentIndex]: opt.id || opt.option_text})}
                    className={`text-left w-full p-6 rounded-2xl border transition-all ${
                      answers[currentIndex] === (opt.id || opt.option_text) 
                        ? 'bg-[var(--theme-bg-accent-subtle)] border-[var(--theme-border-strong)] shadow-md shadow-[0_4px_14px_var(--theme-shadow-accent)]' 
                        : 'bg-[var(--theme-bg-subtle)] border-[var(--theme-border)] hover:bg-[var(--theme-bg-subtle-hover)] hover:border-[var(--theme-border-hover)]'
                    }`}
                  >
                    <div className="flex gap-4 items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors ${
                        answers[currentIndex] === (opt.id || opt.option_text) ? 'bg-[var(--theme-bg-accent-solid)] text-white' : 'bg-[var(--theme-bg-subtle-hover)] text-[var(--theme-text-muted)]'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <div className="text-lg font-medium text-[var(--theme-text-secondary)] tex2jax_process" dangerouslySetInnerHTML={{ __html: opt.option_text }} />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-[10px] font-black text-[var(--theme-text-muted)] uppercase tracking-[0.3em]">Identification Input</label>
                  <span className="text-[9px] text-[var(--theme-text-accent)] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Sparkles size={10} /> Precision Mode Active
                  </span>
                </div>
                <input 
                  type="text"
                  placeholder="Enter solution hash..."
                  value={answers[currentIndex] || ''}
                  onChange={(e) => setAnswers({...answers, [currentIndex]: e.target.value})}
                  className="w-full p-8 rounded-[2.5rem] bg-[var(--theme-bg-input)] border border-[var(--theme-border)] focus:border-[var(--theme-bg-accent-solid)] focus:ring-[20px] focus:ring-[var(--theme-shadow-accent)] outline-none text-3xl font-black tracking-tight transition-all placeholder:text-[var(--theme-text-faint)] text-[var(--theme-text-primary)]"
                  autoFocus
                  onKeyDown={(ev) => {
                    if (ev.key === 'Enter') {
                      if (currentIndex < questions.length - 1) {
                        setCurrentIndex(currentIndex + 1);
                      } else {
                        const unanswered = questions.length - Object.keys(answers).length;
                        if (unanswered > 0) {
                          if (!window.confirm(`You have ${unanswered} unanswered questions. Are you sure you want to submit?`)) {
                            return;
                          }
                        }
                        setShowResult(true);
                      }
                    }
                  }}
                />
              </>
            )}
          </div>
        </div>

        <div className="mt-16 flex justify-between items-center relative z-10 pt-10 border-t border-[var(--theme-border)]">
          <button 
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="btn-secondary group flex items-center gap-3"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
          <button 
            onClick={() => {
              if (currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1);
              } else {
                const unanswered = questions.length - Object.keys(answers).length;
                if (unanswered > 0) {
                  if (!window.confirm(`You have ${unanswered} unanswered questions. Are you sure you want to submit?`)) {
                    return;
                  }
                }
                setShowResult(true);
              }
            }}
            className="btn-premium flex items-center gap-4 px-12 group"
          >
            {currentIndex === questions.length - 1 ? 'Analyze Final Report' : 'Proceed to Next Phase'} 
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

const App = () => {
  const [indexData, setIndexData] = useState(null);
  const [loadedQuestions, setLoadedQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentChunk, setCurrentChunk] = useState(0);
  const isSyncing = useRef(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedCognitive, setSelectedCognitive] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedQuestionType, setSelectedQuestionType] = useState('All');
  const [selectedExamType, setSelectedExamType] = useState('All');
  const [selectedExam, setSelectedExam] = useState('All');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [selectedOutcomeLinking, setSelectedOutcomeLinking] = useState('All');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [page, setPage] = useState(1);

  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('prepDash_theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('prepDash_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const isDark = theme === 'dark';

  // User Profile State
  const [loginName, setLoginName] = useState('');
  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem('prepDash_currentUser') || null;
  });

  const [questionStatuses, setQuestionStatuses] = useState(() => {
    const user = localStorage.getItem('prepDash_currentUser') || null;
    if (user) {
      const saved = localStorage.getItem(`prepDash_statuses_${user}`);
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  const [testsAttempted, setTestsAttempted] = useState(() => {
    const user = localStorage.getItem('prepDash_currentUser') || null;
    if (user) {
      return parseInt(localStorage.getItem(`prepDash_testsAttempted_${user}`) || '0', 10);
    }
    return 0;
  });

  // Save statuses
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`prepDash_statuses_${currentUser}`, JSON.stringify(questionStatuses));
    }
  }, [questionStatuses, currentUser]);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const loadAllRemainingChunks = async (total) => {
    for (let i = 1; i < total; i++) {
      try {
        const res = await fetch(`/data/chunks/chunk_${i}.json`);
        const data = await res.json();
        setLoadedQuestions(prev => [...prev, ...data]);
        setCurrentChunk(i);
        // Small delay to prevent UI freezing during massive state updates
        await new Promise(r => setTimeout(r, 100));
      } catch (e) {
        console.error(`Failed to sync chunk ${i}:`, e);
      }
    }
  };

  // Initial Load
  useEffect(() => {
    const init = async () => {
      if (isSyncing.current) return;
      isSyncing.current = true;
      
      try {
        const idxRes = await fetch('/data/index.json');
        const idxData = await idxRes.json();
        setIndexData(idxData);

        const chunkRes = await fetch(`/data/chunks/chunk_0.json`);
        const chunkData = await chunkRes.json();
        setLoadedQuestions(chunkData);

        setTimeout(() => setIsLoading(false), 1500);

        // Background Sync: Load remaining chunks silently
        loadAllRemainingChunks(idxData.totalChunks);
      } catch (e) {
        console.error('Boot failure:', e);
        isSyncing.current = false;
      }
    };
    init();
  }, []);



  const handleSetStatus = (id, status) => {
    setQuestionStatuses(prev => ({ ...prev, [id]: status }));
  };

  const questionsForSubject = useMemo(() => {
    if (selectedSubject === 'All') return loadedQuestions;
    return loadedQuestions.filter(q => q.subject?.name === selectedSubject);
  }, [loadedQuestions, selectedSubject]);

  const availableTopics = useMemo(() => {
    if (!indexData) return [];
    if (selectedSubject === 'All') return indexData.topics || [];
    return indexData.topicsBySubject?.[selectedSubject] || [];
  }, [indexData, selectedSubject]);

  useEffect(() => {
    setSelectedTopic('All');
    setSelectedDifficulty('All');
    setSelectedCognitive('All');
    setSelectedQuestionType('All');
    setSelectedExam('All');
    setSelectedExamType('All');
    setSelectedAgeGroup('All');
    setSelectedOutcomeLinking('All');
  }, [selectedSubject]);

  const availableDifficulties = useMemo(() => {
    return [...new Set(questionsForSubject.map(q => q.difficulty?.name).filter(Boolean))].sort();
  }, [questionsForSubject]);

  const availableCognitiveLevels = useMemo(() => {
    return [...new Set(questionsForSubject.map(q => q.cognitive_level?.name).filter(Boolean))].sort();
  }, [questionsForSubject]);

  const availableQuestionTypes = useMemo(() => {
    return [...new Set(questionsForSubject.map(q => q.question_type?.name).filter(Boolean))].sort();
  }, [questionsForSubject]);

  const availableExams = useMemo(() => {
    return [...new Set(questionsForSubject.map(q => q.exam?.name).filter(Boolean))].sort();
  }, [questionsForSubject]);

  const availableExamTypes = useMemo(() => {
    const types = new Set();
    questionsForSubject.forEach(q => {
      if (q.examination_types) {
        q.examination_types.forEach(et => {
          if (et.examination_type?.name) types.add(et.examination_type.name);
        });
      }
    });
    return [...types].sort();
  }, [questionsForSubject]);

  const availableAgeGroups = useMemo(() => {
    return [...new Set(questionsForSubject.map(q => q.age_group?.name).filter(Boolean))].sort();
  }, [questionsForSubject]);

  const availableOutcomeLinkings = useMemo(() => {
    return [...new Set(questionsForSubject.map(q => q.outcome_linking?.name).filter(Boolean))].sort();
  }, [questionsForSubject]);

  // Filtering
  const filteredQuestions = useMemo(() => {
    return loadedQuestions.filter(q => {
      const qStatus = questionStatuses[q.id] || 'normal';
      const matchesSearch = searchTerm === '' || 
        q.question_text?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.question_code?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSubject = selectedSubject === 'All' || q.subject?.name === selectedSubject;
      const matchesDifficulty = selectedDifficulty === 'All' || q.difficulty?.name === selectedDifficulty;
      const matchesCognitive = selectedCognitive === 'All' || q.cognitive_level?.name === selectedCognitive;
      const matchesStatus = selectedStatus === 'All' || qStatus === selectedStatus;
      const matchesTopic = selectedTopic === 'All' || q.topic?.name === selectedTopic;
      const matchesQuestionType = selectedQuestionType === 'All' || q.question_type?.name === selectedQuestionType;
      const matchesExam = selectedExam === 'All' || q.exam?.name === selectedExam;
      const matchesExamType = selectedExamType === 'All' || 
        q.examination_types?.some(et => et.examination_type?.name === selectedExamType);
      const matchesAgeGroup = selectedAgeGroup === 'All' || q.age_group?.name === selectedAgeGroup;
      const matchesOutcome = selectedOutcomeLinking === 'All' || q.outcome_linking?.name === selectedOutcomeLinking;

      return matchesSearch && matchesSubject && matchesDifficulty && matchesCognitive && matchesStatus && matchesTopic && matchesQuestionType && matchesExam && matchesExamType && matchesAgeGroup && matchesOutcome;
    });
  }, [loadedQuestions, searchTerm, selectedSubject, selectedDifficulty, selectedCognitive, selectedStatus, selectedTopic, selectedQuestionType, selectedExam, selectedExamType, selectedAgeGroup, selectedOutcomeLinking, questionStatuses]);

  const paginatedQuestions = useMemo(() => {
    return filteredQuestions.slice(0, page * ITEMS_PER_PAGE);
  }, [filteredQuestions, page]);

  // Stats
  const stats = useMemo(() => {
    if (!indexData) return { total: 0, learned: 0, difficult: 0, unmarked: 0 };
    const learned = Object.values(questionStatuses).filter(s => s === 'learned').length;
    const difficult = Object.values(questionStatuses).filter(s => s === 'difficult').length;
    return { 
      total: indexData.total, 
      learned, 
      difficult, 
      unmarked: indexData.total - learned - difficult 
    };
  }, [indexData, questionStatuses]);

  // Test Mode
  const [testQuestions, setTestQuestions] = useState([]);
  const [testTimeLimit, setTestTimeLimit] = useState(60);
  const [isTestConfigOpen, setIsTestConfigOpen] = useState(false);

  const startTest = (count = 10, timeLimit = 60) => {
    const available = filteredQuestions;
    const testCount = Math.min(count, available.length);
    const shuffled = [...available].sort(() => 0.5 - Math.random());
    setTestQuestions(shuffled.slice(0, testCount));
    setTestTimeLimit(timeLimit);
    setIsTestConfigOpen(false);
    setActiveTab('test');
  };

  const appFilters = indexData ? [
    { label: 'Subject', value: selectedSubject, options: ['All', ...(indexData.subjects || [])], setter: setSelectedSubject },
    { label: 'Difficulty', value: selectedDifficulty, options: availableDifficulties, setter: setSelectedDifficulty },
    { label: 'Cognitive Level', value: selectedCognitive, options: availableCognitiveLevels, setter: setSelectedCognitive },
    { label: 'Status', value: selectedStatus, options: ['All', 'learned', 'difficult', 'normal'], setter: setSelectedStatus },
    { label: 'Topic', value: selectedTopic, options: availableTopics, setter: setSelectedTopic },
    { label: 'Question Type', value: selectedQuestionType, options: availableQuestionTypes, setter: setSelectedQuestionType },
    { label: 'Exam Phase', value: selectedExam, options: availableExams, setter: setSelectedExam },
    { label: 'Age Group', value: selectedAgeGroup, options: availableAgeGroups, setter: setSelectedAgeGroup },
  ] : [];

  if (isLoading) {
    return (
      <div key="loading-screen" className="min-h-screen bg-[var(--theme-bg)] flex items-center justify-center flex-col gap-8 p-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--theme-bg-accent-subtle),transparent_70%)] animate-pulse" />
        
        <motion.div 
          key="loading-spinner"
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="w-20 h-20 rounded-2xl bg-[var(--theme-btn-primary-bg)] flex items-center justify-center shadow-[0_0_60px_-15px_rgba(79,70,229,0.6)] relative z-10"
        >
          <ShieldCheck className="text-white" size={36} />
        </motion.div>
        
        <div className="text-center space-y-2 relative z-10">
          <h2 className="text-2xl font-black tracking-tight text-[var(--theme-text-heading)]"><span className="gradient-text">Loading</span> Questions</h2>
          <p className="text-[var(--theme-text-muted)] font-medium tracking-wider text-[10px]">Fetching data (Chunk {currentChunk + 1})</p>
        </div>
        
        <div className="w-full max-w-xs h-1 bg-[var(--theme-progress-track)] rounded-full overflow-hidden border border-[var(--theme-border)] relative z-10">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-[var(--theme-bg-accent-solid)] shadow-lg shadow-[0_8px_20px_var(--theme-shadow-accent)]"
          />
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div key="login-screen" className="min-h-screen bg-[var(--theme-bg)] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--theme-bg-accent-subtle),transparent_60%)]" />
        <motion.div 
          key="login-form-card"
          initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="glass-card p-10 max-w-md w-full relative z-10 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-[var(--theme-btn-primary-bg)] flex items-center justify-center shadow-[0_0_40px_-10px_rgba(79,70,229,0.6)] mx-auto mb-6">
            <Brain className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-2 text-[var(--theme-text-heading)]">Welcome to <span className="gradient-text">PREPDASH</span></h2>
          <p className="text-[var(--theme-text-muted)] text-sm font-medium mb-8">Enter your alias to load your personalized preparation environment and track your progress.</p>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            if (loginName.trim()) {
              const user = loginName.trim();
              localStorage.setItem('prepDash_currentUser', user);
              setCurrentUser(user);
              const saved = localStorage.getItem(`prepDash_statuses_${user}`);
              setQuestionStatuses(saved ? JSON.parse(saved) : {});
              setTestsAttempted(parseInt(localStorage.getItem(`prepDash_testsAttempted_${user}`) || '0', 10));
            }
          }} className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name..."
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              className="w-full p-4 rounded-xl bg-[var(--theme-bg-input)] border border-[var(--theme-border)] focus:border-[var(--theme-bg-accent-solid)] focus:ring-[10px] focus:ring-[var(--theme-shadow-accent)] outline-none text-[var(--theme-text-primary)] font-medium transition-all text-center"
              autoFocus
            />
            <button 
              type="submit"
              disabled={!loginName.trim()}
              className="btn-premium w-full py-4 text-sm tracking-widest uppercase font-black disabled:opacity-50"
            >
              Start Preparation
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[var(--theme-bg)]">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-[var(--theme-border)] bg-[var(--theme-bg-sticky)] backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3 px-1">
          <div className="w-9 h-9 rounded-xl bg-[var(--theme-btn-primary-bg)] flex items-center justify-center shadow-lg shadow-[0_4px_14px_var(--theme-shadow-accent)]">
            <Brain className="text-white" size={20} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tighter text-[var(--theme-text-heading)] leading-none">PREPDASH</h1>
            <span className="text-[9px] font-bold tracking-[0.3em] text-[var(--theme-text-accent)] uppercase mt-1">Prep Dashboard</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-subtle-hover)] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`w-full lg:w-64 shrink-0 p-4 flex-col gap-5 lg:sticky lg:top-0 lg:h-screen border-r border-[var(--theme-border)] bg-[var(--theme-bg-sidebar)] backdrop-blur-3xl z-40 overflow-hidden ${isMobileMenuOpen ? 'flex' : 'hidden lg:flex'}`}>
        <div className="hidden lg:flex items-center gap-3 px-1">
          <div className="w-9 h-9 rounded-xl bg-[var(--theme-btn-primary-bg)] flex items-center justify-center shadow-lg shadow-[0_4px_14px_var(--theme-shadow-accent)]">
            <Brain className="text-white" size={20} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tighter text-[var(--theme-text-heading)] leading-none">PREPDASH</h1>
            <span className="text-[9px] font-bold tracking-[0.3em] text-[var(--theme-text-accent)] uppercase mt-1">Prep Dashboard</span>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {[
            { id: 'dashboard', icon: Layout, label: 'Dashboard' },
            { id: 'questions', icon: Target, label: 'Questions' },
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
              className={`nav-link ${activeTab === item.id ? 'nav-link-active' : ''}`}
            >
              <item.icon size={18} className={activeTab === item.id ? 'text-[var(--theme-text-accent)]' : ''} />
              <span className="text-sm font-bold">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-2 space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar" data-lenis-prevent="true">
          <div className="p-4 rounded-xl bg-[var(--theme-bg-elevated)] border border-[var(--theme-border)] relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--theme-bg-accent-subtle)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[inherit]" />
            <h3 className="text-[10px] font-bold tracking-[0.3em] text-[var(--theme-text-muted)] uppercase mb-4 flex items-center gap-2">
              <Activity size={12} className="text-[var(--theme-text-accent)]" /> Progress
            </h3>
            <div className="space-y-4 relative z-10">
              {[
                { label: 'Learned', val: stats.learned, color: 'bg-[var(--theme-bg-success-solid)]', text: 'text-[var(--theme-text-success)]', filter: 'learned' },
                { label: 'Difficult', val: stats.difficult, color: 'bg-[var(--theme-bg-danger-solid)]', text: 'text-[var(--theme-text-danger)]', filter: 'difficult' },
                { label: 'Pending', val: stats.unmarked, color: 'bg-[var(--theme-bg-subtle-hover)]', text: 'text-[var(--theme-text-muted)]', filter: 'normal' }
              ].map((m, i) => (
                <div 
                  key={i} 
                  className="cursor-pointer hover:bg-[var(--theme-bg-subtle)] p-1 -mx-1 rounded transition-colors"
                  onClick={() => {
                    setSelectedStatus(m.filter);
                    setActiveTab('questions');
                    if (window.innerWidth < 1024) setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="flex justify-between items-end mb-1.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${m.text}`}>{m.label}</span>
                    <span className={`text-xs font-bold font-mono ${m.text}`}>{m.val.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 bg-[var(--theme-progress-track)] rounded-full overflow-hidden border border-[var(--theme-border)]">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(m.val / stats.total) * 100}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className={`h-full ${m.color}`} 
                      style={{
                        boxShadow: `0 0 12px ${m.color === 'bg-[var(--theme-bg-success-solid)]' ? 'var(--theme-bg-success-subtle)' : m.color === 'bg-[var(--theme-bg-danger-solid)]' ? 'var(--theme-bg-danger-subtle)' : 'var(--theme-bg-subtle)'}`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 shadow-lg shadow-[0_4px_14px_var(--theme-shadow-accent)] group relative overflow-hidden cursor-pointer" onClick={() => setIsTestConfigOpen(true)}>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500 ease-out transform origin-center">
              <Zap size={60} />
            </div>
            <h4 className="text-xs font-bold text-white/90 mb-1 uppercase tracking-wider">Mock Test</h4>
            <p className="text-[10px] text-white/60 font-medium leading-relaxed mb-3">Test your knowledge with random questions.</p>
            <button className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider transition-all shadow-md active:scale-95">
              Start Test
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--theme-border)] space-y-3">
          {/* Theme Toggle - Desktop */}
          <button
            onClick={toggleTheme}
            className="theme-toggle w-full flex items-center justify-center gap-2 text-sm font-bold"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--theme-bg-elevated)] border border-[var(--theme-border)] group hover:bg-[var(--theme-bg-subtle)] transition-all">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-[var(--theme-bg-accent-subtle)] flex items-center justify-center text-[var(--theme-text-accent)] text-xs font-bold border border-[var(--theme-border-strong)] uppercase">
                  {currentUser.substring(0, 2)}
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[var(--theme-bg-success-solid)] border-2 border-[var(--theme-user-dot-border)]" />
              </div>
              <div className="flex flex-col min-w-0 max-w-[100px]">
                <span className="text-xs font-bold text-[var(--theme-text-primary)] truncate">{currentUser}</span>
                <span className="text-[9px] text-[var(--theme-text-accent)] font-bold uppercase tracking-wider">Candidate</span>
              </div>
            </div>
            <button 
              onClick={() => {
                localStorage.removeItem('prepDash_currentUser');
                setCurrentUser(null);
                setLoginName('');
                setQuestionStatuses({});
              }}
              className="p-2 hover:bg-[var(--theme-bg-danger-subtle)] text-[var(--theme-text-muted)] hover:text-[var(--theme-text-danger)] rounded-lg transition-colors"
              title="Switch User"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 min-h-screen p-4 lg:p-8 flex flex-col relative">
        <AnimatePresence>
          {isTestConfigOpen && (
            <TestConfigModal 
              availableCount={filteredQuestions.length}
              filters={appFilters}
              onStart={startTest}
              onClose={() => setIsTestConfigOpen(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-[1400px] mx-auto w-full space-y-10"
            >
              <header className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black tracking-tight leading-none text-[var(--theme-text-heading)]"><span className="gradient-text">Preparation</span> Dashboard</h2>
                  <p className="text-[var(--theme-text-muted)] text-sm font-medium max-w-xl leading-relaxed">Your centralized question bank for exam preparation. <span className="text-[var(--theme-text-success)]">{stats.total.toLocaleString()}</span> questions loaded.</p>
                </div>
                <div className="flex gap-3">
                   <button 
                    onClick={() => setActiveTab('questions')}
                    className="btn-secondary"
                  >
                    Browse Questions
                  </button>
                  <button 
                    onClick={() => setIsTestConfigOpen(true)}
                    className="btn-premium flex items-center gap-2"
                  >
                    <Activity size={16} className="animate-pulse" /> Start Test
                  </button>
                </div>
              </header>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Total Questions', value: stats.total, icon: Brain, color: 'text-[var(--theme-text-accent)]', bg: 'bg-[var(--theme-bg-accent-subtle)]', action: () => { setSelectedStatus('All'); setActiveTab('questions'); } },
                  { label: 'Learned', value: stats.learned, icon: ShieldCheck, color: 'text-[var(--theme-text-success)]', bg: 'bg-[var(--theme-bg-success-subtle)]', action: () => { setSelectedStatus('learned'); setActiveTab('questions'); } },
                  { label: 'Difficult', value: stats.difficult, icon: Zap, color: 'text-[var(--theme-text-danger)]', bg: 'bg-[var(--theme-bg-danger-subtle)]', action: () => { setSelectedStatus('difficult'); setActiveTab('questions'); } },
                  { label: 'Tests Attempted', value: testsAttempted, icon: Target, color: 'text-[var(--theme-text-warning)]', bg: 'bg-[var(--theme-bg-warning-subtle)]' },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    onClick={item.action}
                    whileHover={{ y: -2 }}
                    className={`glass-card p-5 flex flex-col gap-3 group relative ${item.action ? 'cursor-pointer' : ''}`}
                  >
                    <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center ${item.color} shadow-md transition-transform duration-500 group-hover:rotate-12`}>
                      <item.icon size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--theme-text-faint)]">{item.label}</span>
                      <span className="text-2xl font-black text-[var(--theme-text-heading)] mt-1 tracking-tight">{item.value.toLocaleString()}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1.5 bg-[var(--theme-btn-primary-bg)] rounded-full shadow-[0_0_12px_rgba(99,102,241,1)]" />
                  <h3 className="text-xl font-black text-[var(--theme-text-heading)] tracking-tight">Subjects</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {indexData?.subjects.map(subject => {
                    const qCount = indexData?.subjectCounts?.[subject] || 0;
                    const displayName = subject === 'Coding' ? 'PYQ of Company Questions' : subject;
                    return (
                      <div key={subject} className="relative group">
                        <button 
                          onClick={() => { setSelectedSubject(subject); setActiveTab('questions'); }}
                          className="subject-card w-full relative p-5 rounded-xl bg-[var(--theme-bg-elevated)] border border-[var(--theme-border)] group-hover:border-[var(--theme-bg-accent-solid)]/40 text-left overflow-hidden h-36 flex flex-col justify-between"
                        >
                          <div className="subject-target-icon absolute -top-6 -right-6 z-0 pointer-events-none transform origin-center">
                            <Target size={100} />
                          </div>
                          <div className="subject-card-icon w-9 h-9 rounded-lg bg-[var(--theme-bg-accent-subtle)] flex items-center justify-center text-[var(--theme-text-accent)] group-hover:bg-[var(--theme-btn-primary-hover)] group-hover:text-white relative z-10">
                            <BookOpen size={18} />
                          </div>
                          <div className="relative z-10">
                            <div className="subject-card-title text-sm font-bold text-[var(--theme-text-primary)] mb-1 group-hover:text-[var(--theme-text-accent)] tracking-tight line-clamp-2">{displayName}</div>
                            <div className="subject-card-count text-[10px] font-bold text-[var(--theme-text-faint)] uppercase tracking-wider group-hover:text-[var(--theme-text-muted)]">{qCount.toLocaleString()} Questions</div>
                          </div>
                        </button>
                        
                        {/* Outside Tooltip */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.5rem)] w-[110%] min-w-[200px] p-3 rounded-xl bg-[var(--theme-tooltip-bg)] backdrop-blur-xl border border-[var(--theme-border)] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] text-[11px] font-medium text-[var(--theme-text-secondary)] leading-relaxed text-center pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                          {SUBJECT_DESCRIPTIONS[subject] || "Comprehensive question bank for this subject."}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </motion.div>
          )}

           {activeTab === 'questions' && (
            <motion.div 
              key="questions"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="max-w-[1400px] mx-auto w-full space-y-6"
            >
              <header className="space-y-2">
                <h2 className="text-3xl font-black tracking-tight leading-none text-[var(--theme-text-heading)]"><span className="gradient-text">Question</span> Bank</h2>
                <p className="text-[var(--theme-text-muted)] text-sm font-medium max-w-xl leading-relaxed">Search and filter through <span className="text-[var(--theme-text-success)]">{stats.total.toLocaleString()}</span> questions across {indexData?.subjects?.length} subjects.</p>
              </header>

              <div className="sticky top-0 z-40 -mx-4 px-4 py-4 bg-[var(--theme-bg-sticky)] backdrop-blur-2xl border-b border-[var(--theme-border)] rounded-b-xl shadow-lg">
                <div className="space-y-4">
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--theme-text-faint)] group-focus-within:text-[var(--theme-text-accent)] transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search questions by text or code..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-11 pr-6 py-3 rounded-xl bg-[var(--theme-bg-input)] border border-[var(--theme-border)] focus:border-[var(--theme-bg-accent-solid)]/40 focus:ring-4 focus:ring-[var(--theme-shadow-accent)] outline-none transition-all text-sm font-medium placeholder:text-[var(--theme-text-faint)] text-[var(--theme-text-primary)]"
                    />
                  </div>
                
                  {/* Primary Filters - Always visible */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: 'Subject', value: selectedSubject, options: ['All', ...indexData.subjects], setter: setSelectedSubject },
                      { label: 'Difficulty', value: selectedDifficulty, options: ['All', ...indexData.difficulties], setter: setSelectedDifficulty },
                      { label: 'Cognitive Level', value: selectedCognitive, options: ['All', ...indexData.cognitiveLevels], setter: setSelectedCognitive },
                      { label: 'Status', value: selectedStatus, options: ['All', 'learned', 'difficult', 'normal'], setter: setSelectedStatus },
                    ].map((filter, i) => (
                      <div key={i} className="space-y-1">
                        <label className="text-[9px] font-bold tracking-wider text-[var(--theme-text-faint)] uppercase ml-3">{filter.label}</label>
                        <div className="relative">
                          <select 
                            value={filter.value}
                            onChange={(e) => filter.setter(e.target.value)}
                            className="filter-select"
                          >
                            {filter.options.map(o => {
                              let display = o;
                              if (o === 'normal') display = 'Pending';
                              if (o === 'Coding') display = 'PYQ of Company Questions';
                              return <option key={o} value={o} className="bg-[var(--theme-option-bg)]">{display}</option>;
                            })}
                          </select>
                          <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--theme-text-faint)] pointer-events-none" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Advanced Filters Toggle */}
                  <button 
                    onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                    className="flex items-center gap-2 text-[10px] font-bold text-[var(--theme-text-accent)] hover:text-[var(--theme-text-accent)] transition-colors uppercase tracking-wider"
                  >
                    <Filter size={12} />
                    {showAdvancedFilters ? 'Hide' : 'Show'} Advanced Filters
                    <ChevronDown size={12} className={`transition-transform ${showAdvancedFilters ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Advanced Filters - Collapsible */}
                  <AnimatePresence>
                    {showAdvancedFilters && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
                          {[
                            { label: 'Topic', value: selectedTopic, options: ['All', ...availableTopics], setter: setSelectedTopic },
                            { label: 'Question Type', value: selectedQuestionType, options: ['All', ...availableQuestionTypes], setter: setSelectedQuestionType },
                            { label: 'Exam Category', value: selectedExamType, options: ['All', ...availableExamTypes], setter: setSelectedExamType },
                            { label: 'Exam Mode', value: selectedExam, options: ['All', ...availableExams], setter: setSelectedExam },
                            { label: 'Age Group', value: selectedAgeGroup, options: ['All', ...availableAgeGroups], setter: setSelectedAgeGroup },
                            { label: 'Outcome Linking', value: selectedOutcomeLinking, options: ['All', ...availableOutcomeLinkings], setter: setSelectedOutcomeLinking },
                          ].map((filter, i) => (
                            <div key={i} className="space-y-1">
                              <label className="text-[9px] font-bold tracking-wider text-[var(--theme-text-faint)] uppercase ml-3">{filter.label}</label>
                              <div className="relative">
                                <select 
                                  value={filter.value}
                                  onChange={(e) => filter.setter(e.target.value)}
                                  className="filter-select truncate"
                                >
                                  {filter.options.map(o => {
                                    let display = o;
                                    if (o === 'Coding') display = 'PYQ of Company Questions';
                                    return <option key={o} value={o} className="bg-[var(--theme-option-bg)]">{display}</option>;
                                  })}
                                </select>
                                <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--theme-text-faint)] pointer-events-none" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Active Filter Count + Reset */}
              <div className="flex justify-between items-center px-2">
                <span className="text-xs text-[var(--theme-text-muted)] font-medium flex items-center gap-2">
                  <span>
                    Showing <span className="text-[var(--theme-text-heading)] font-bold">{filteredQuestions.length.toLocaleString()}</span> of {stats.total.toLocaleString()} questions
                  </span>
                  {loadedQuestions.length < stats.total && (
                    <span className="flex items-center gap-1.5 text-[var(--theme-text-accent)] bg-[var(--theme-bg-accent-subtle)] px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      <Loader2 size={10} className="animate-spin" />
                      Syncing...
                    </span>
                  )}
                </span>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSubject('All');
                    setSelectedDifficulty('All');
                    setSelectedCognitive('All');
                    setSelectedStatus('All');
                    setSelectedTopic('All');
                    setSelectedQuestionType('All');
                    setSelectedExamType('All');
                    setSelectedExam('All');
                    setSelectedAgeGroup('All');
                    setSelectedOutcomeLinking('All');
                  }}
                  className="flex items-center gap-2 text-xs font-bold tracking-wider text-[var(--theme-text-faint)] hover:text-[var(--theme-text-primary)] transition-colors"
                >
                  <RotateCcw size={12} /> Reset All
                </button>
              </div>

              <div className="space-y-4">
                {paginatedQuestions.map(q => (
                  <QuestionCard 
                    key={q.id} 
                    question={q} 
                    status={questionStatuses[q.id] || 'normal'}
                    onSetStatus={handleSetStatus}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-4 pb-12">
                {paginatedQuestions.length < filteredQuestions.length && (
                  <div className="mt-6 flex justify-center">
                    <button 
                      onClick={() => setPage(page + 1)}
                      className="btn-premium flex items-center gap-2"
                    >
                      Load More <ChevronRight size={14} />
                    </button>
                  </div>
                )}



                {filteredQuestions.length === 0 && (
                  <div className="py-16 text-center glass-card border-dashed">
                    <Loader2 size={32} className="mx-auto mb-4 text-[var(--theme-text-accent)] animate-spin opacity-20" />
                    <h3 className="text-lg font-bold text-[var(--theme-text-heading)] mb-2 tracking-tight">No Results</h3>
                    <p className="text-[var(--theme-text-faint)] font-medium text-xs">No questions match your current filters</p>
                  </div>
                )}
              </div>


            </motion.div>
          )}


          {activeTab === 'test' && (
            <motion.div 
              key="test"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex-1 flex flex-col justify-center py-20"
            >
              <MockTest 
                questions={testQuestions} 
                timeLimit={testTimeLimit}
                onFinish={() => {
                  setActiveTab('dashboard');
                  setTestsAttempted(prev => {
                    const newTotal = prev + 1;
                    if (currentUser) {
                      localStorage.setItem(`prepDash_testsAttempted_${currentUser}`, newTotal);
                    }
                    return newTotal;
                  });
                }} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;





