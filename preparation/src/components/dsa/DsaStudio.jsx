import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, ExternalLink, Compass, Layers, Calculator, Terminal, 
  ChevronRight, BookOpen, CheckCircle2, Award, Zap, HelpCircle,
  ArrowRight, Sparkles, Sliders, ShoppingBag, Grid
} from 'lucide-react';
import { DSA_PROBLEMS } from '../../data/dsaProblems';
import ElephantVisualizer from './ElephantVisualizer';
import DpTableVisualizer from './DpTableVisualizer';
import SoldierBananasVisualizer from './SoldierBananasVisualizer';
import ArithmeticProgressionVisualizer from './ArithmeticProgressionVisualizer';
import CodeWorkbench from './CodeWorkbench';

export default function DsaStudio() {
  const [selectedProblemId, setSelectedProblemId] = useState('cf-546a');
  // Visual Mode: 'visualizer', 'dp'/'ap', 'proof', 'code'
  const [activeMode, setActiveMode] = useState('visualizer');
  const [isProblemDropdownOpen, setIsProblemDropdownOpen] = useState(false);

  const problem = DSA_PROBLEMS.find(p => p.id === selectedProblemId) || DSA_PROBLEMS[0];

  // Dynamic tabs configuration per problem
  const getTabs = () => {
    if (problem.id === 'cf-617a') {
      return [
        { id: 'visualizer', label: 'Coordinate Line Simulator', icon: Compass },
        { id: 'dp', label: 'DP State Table Explorer', icon: Layers },
        { id: 'proof', label: 'Math Proof & Intuition', icon: Calculator },
        { id: 'code', label: 'Code & In-Browser Runner', icon: Terminal }
      ];
    }
    if (problem.id === 'cf-546a') {
      return [
        { id: 'visualizer', label: 'Banana Market & Loan Simulator', icon: Compass },
        { id: 'ap', label: 'AP Sum & Geometry Visualizer', icon: Grid },
        { id: 'proof', label: 'Math Proof & Closed Form', icon: Calculator },
        { id: 'code', label: 'Code & In-Browser Runner', icon: Terminal }
      ];
    }
    return [
      { id: 'visualizer', label: 'Problem Visualizer', icon: Compass },
      { id: 'proof', label: 'Math & Logic', icon: Calculator },
      { id: 'code', label: 'Code & In-Browser Runner', icon: Terminal }
    ];
  };

  const tabs = getTabs();

  // Problem switcher handler
  const handleSelectProblem = (id) => {
    setSelectedProblemId(id);
    setIsProblemDropdownOpen(false);
    setActiveMode('visualizer'); // Reset to visualizer on problem change
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-24">
      {/* Top Studio Header & Problem Metadata */}
      <div className="p-5 md:p-6 rounded-3xl glass-card border border-[var(--theme-border)] shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xl shadow-indigo-500/20 text-3xl">
            {problem.icon || '💡'}
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                {problem.platform}
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Difficulty: {problem.difficulty} (Rating {problem.rating})
              </span>
              <span className="text-[10px] font-mono text-[var(--theme-text-muted)]">
                Time: {problem.timeLimit} • Mem: {problem.memoryLimit}
              </span>
            </div>

            <div className="flex items-center gap-3 mt-1.5 flex-wrap">
              <h1 className="text-xl md:text-2xl font-black text-[var(--theme-text-heading)] leading-snug">
                {problem.title}
              </h1>
              {problem.url && (
                <a
                  href={problem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[var(--theme-text-accent)] hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={13} /> View on Codeforces
                </a>
              )}
            </div>

            <p className="text-xs text-[var(--theme-text-muted)] mt-1 max-w-2xl font-medium leading-relaxed">
              {problem.summary}
            </p>
          </div>
        </div>

        {/* Problem Switcher Dropdown */}
        <div className="relative shrink-0">
          <button
            onClick={() => setIsProblemDropdownOpen(!isProblemDropdownOpen)}
            className="btn-secondary px-4 py-2.5 text-xs font-bold flex items-center gap-2 shadow-sm"
          >
            <BookOpen size={14} className="text-indigo-400" />
            <span>Switch DSA Problem ({DSA_PROBLEMS.length})</span>
            <ChevronRight size={14} className={`transition-transform duration-200 ${isProblemDropdownOpen ? 'rotate-90' : ''}`} />
          </button>

          <AnimatePresence>
            {isProblemDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-2 w-80 rounded-2xl glass-card border border-[var(--theme-border-strong)] shadow-2xl p-2 z-50 backdrop-blur-2xl space-y-1"
              >
                <div className="px-3 py-2 text-[10px] font-black uppercase tracking-wider text-[var(--theme-text-muted)] border-b border-[var(--theme-border)]">
                  Foundational Practice Problems
                </div>
                {DSA_PROBLEMS.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectProblem(p.id)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between ${
                      selectedProblemId === p.id 
                        ? 'bg-[var(--theme-bg-accent-subtle)] text-[var(--theme-text-accent)] font-bold border border-[var(--theme-border-accent)]' 
                        : 'hover:bg-[var(--theme-bg-subtle)] text-[var(--theme-text-primary)]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{p.icon || '📝'}</span>
                      <div>
                        <div className="font-bold">{p.title}</div>
                        <div className="text-[10px] text-[var(--theme-text-muted)]">{p.category} • Rating {p.rating}</div>
                      </div>
                    </div>
                    {selectedProblemId === p.id && <CheckCircle2 size={14} />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Visual Mode Navigation Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 md:p-3 rounded-2xl glass-card border border-[var(--theme-border)] shadow-sm">
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveMode(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-all ${
                activeMode === tab.id 
                  ? 'bg-[var(--theme-btn-primary-bg)] text-white shadow-md shadow-indigo-500/25' 
                  : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:text-white hover:bg-[var(--theme-bg-subtle-hover)]'
              }`}
            >
              <tab.icon size={15} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Quick Problem Metric Pill */}
        <div className="text-xs font-mono text-[var(--theme-text-muted)] hidden md:block pr-2">
          {problem.quickMetric && (
            <span className="text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
              {problem.quickMetric}
            </span>
          )}
        </div>
      </div>

      {/* Active Tab View */}
      {activeMode === 'visualizer' && (
        problem.id === 'cf-617a' ? <ElephantVisualizer /> : <SoldierBananasVisualizer />
      )}

      {activeMode === 'dp' && (
        <DpTableVisualizer />
      )}

      {activeMode === 'ap' && (
        <ArithmeticProgressionVisualizer />
      )}

      {activeMode === 'code' && (
        <CodeWorkbench problem={problem} />
      )}

      {activeMode === 'proof' && (
        <div className="space-y-6">
          {/* Mathematical Proof Deep Dive Card */}
          <div className="p-6 md:p-8 rounded-3xl glass-card border border-[var(--theme-border)] shadow-2xl space-y-6">
            <div>
              <h2 className="text-lg md:text-xl font-black text-[var(--theme-text-heading)] flex items-center gap-2">
                <Calculator size={20} className="text-indigo-400" />
                {problem.mathProof?.title || 'Mathematical Proof & Intuition'}
              </h2>
              <p className="text-xs text-[var(--theme-text-muted)] font-medium mt-1">
                Rigorous algorithmic analysis, derivations, and complexity proofs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problem.mathProof?.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] flex flex-col justify-between gap-3 shadow-sm hover:border-[var(--theme-border-accent)] transition-all"
                >
                  <h3 className="font-bold text-sm text-[var(--theme-text-heading)] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono font-black">
                      {idx + 1}
                    </span>
                    {step.heading}
                  </h3>
                  <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed font-mono">
                    {step.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Identities Card */}
            {problem.id === 'cf-546a' ? (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-indigo-500/10 border border-amber-500/30 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[var(--theme-text-heading)] flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-400" /> Essential Arithmetic Progression Identities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)]">
                    <div className="text-[10px] text-[var(--theme-text-muted)]">Sum of 1 to w:</div>
                    <div className="font-bold text-emerald-400 mt-1">w × (w + 1) / 2</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)]">
                    <div className="text-[10px] text-[var(--theme-text-muted)]">Scaled by cost k:</div>
                    <div className="font-bold text-sky-400 mt-1">k × w × (w + 1) / 2</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)]">
                    <div className="text-[10px] text-[var(--theme-text-muted)]">Non-Negative Borrow:</div>
                    <div className="font-bold text-purple-400 mt-1">max(0LL, Total - n)</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10 border border-indigo-500/30 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[var(--theme-text-heading)] flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-400" /> Key Competitive Programming Formulas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)]">
                    <div className="text-[10px] text-[var(--theme-text-muted)]">Integer Ceiling Division:</div>
                    <div className="font-bold text-emerald-400 mt-1">(x + 4) / 5</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)]">
                    <div className="text-[10px] text-[var(--theme-text-muted)]">Floor + Remainder Check:</div>
                    <div className="font-bold text-sky-400 mt-1">x / 5 + (x % 5 ? 1 : 0)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--theme-bg-card)] border border-[var(--theme-border)]">
                    <div className="text-[10px] text-[var(--theme-text-muted)]">Bitwise / Floating point:</div>
                    <div className="font-bold text-purple-400 mt-1">ceil((double)x / 5.0)</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Problem Statement Card (Always accessible at the bottom) */}
      <div className="p-6 md:p-8 rounded-3xl glass-card border border-[var(--theme-border)] shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--theme-border)] pb-3">
          <h3 className="text-sm font-black uppercase tracking-wider text-[var(--theme-text-heading)] flex items-center gap-2">
            <BookOpen size={16} className="text-indigo-400" /> Complete Problem Specification
          </h3>
          <span className="text-[10px] font-mono text-[var(--theme-text-muted)]">
            Codeforces Problem ID: {problem.problemCode}
          </span>
        </div>

        <div className="text-xs md:text-sm text-[var(--theme-text-secondary)] leading-relaxed space-y-3">
          <p>{problem.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-1.5">
            <div className="text-xs font-black uppercase text-[var(--theme-text-muted)]">Input Format</div>
            <div className="text-xs font-mono text-[var(--theme-text-primary)]">{problem.inputFormat}</div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-1.5">
            <div className="text-xs font-black uppercase text-[var(--theme-text-muted)]">Output Format</div>
            <div className="text-xs font-mono text-[var(--theme-text-primary)]">{problem.outputFormat}</div>
          </div>
        </div>

        {/* Examples */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-black uppercase tracking-wider text-[var(--theme-text-muted)]">Sample Test Cases</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {problem.examples.map((ex, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#090d16] border border-[var(--theme-border)] space-y-2 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Sample {i + 1}</span>
                  <span className="text-emerald-400 font-bold">input: {ex.input} → output: {ex.output}</span>
                </div>
                <div className="text-slate-300 text-[11px]">{ex.explanation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
