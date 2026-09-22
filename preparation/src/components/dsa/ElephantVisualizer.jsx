import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Pause, SkipForward, SkipBack, RotateCcw, FastForward, 
  Sparkles, CheckCircle2, Info, ArrowRight, Compass, Calculator,
  Sliders, Layers, Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ElephantVisualizer() {
  // Target coordinate x (Default 12, matching Codeforces Sample 2)
  const [targetX, setTargetX] = useState(12);
  const [inputVal, setInputVal] = useState('12');
  
  // Strategy: 'greedy' (5+5+2), 'balanced' (4+4+4), 'sample2' (3+5+4)
  const [strategy, setStrategy] = useState('greedy');
  
  // Playback state
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // 0.5x, 1x, 2x, 4x

  // Generate path according to strategy
  const path = useMemo(() => {
    const x = Math.max(1, targetX);
    const steps = [];
    
    if (strategy === 'greedy') {
      // 5s first, then remainder
      let remaining = x;
      while (remaining > 0) {
        const stepSize = Math.min(5, remaining);
        steps.push(stepSize);
        remaining -= stepSize;
      }
    } else if (strategy === 'balanced') {
      // Divide evenly into ceil(x / 5) steps
      const totalSteps = Math.ceil(x / 5);
      const base = Math.floor(x / totalSteps);
      let rem = x % totalSteps;
      for (let i = 0; i < totalSteps; i++) {
        const stepSize = base + (rem > 0 ? 1 : 0);
        if (rem > 0) rem--;
        steps.push(stepSize);
      }
    } else if (strategy === 'sample2') {
      // Codeforces sample 2 alternative: 3 + 5 + 4 if x == 12, else custom breakdown
      if (x === 12) {
        steps.push(3, 5, 4);
      } else {
        // First a small jump, then 5s, then finish
        const totalSteps = Math.ceil(x / 5);
        if (totalSteps === 1) {
          steps.push(x);
        } else {
          const first = Math.min(3, x - 1);
          steps.push(first);
          let rem = x - first;
          while (rem > 0) {
            const s = Math.min(5, rem);
            steps.push(s);
            rem -= s;
          }
        }
      }
    }

    // Build cumulative positions
    let pos = 0;
    const history = [{ stepNumber: 0, jumpSize: 0, from: 0, to: 0 }];
    steps.forEach((s, idx) => {
      const from = pos;
      pos += s;
      history.push({
        stepNumber: idx + 1,
        jumpSize: s,
        from,
        to: pos
      });
    });

    return { steps, history, totalSteps: steps.length };
  }, [targetX, strategy]);

  // Reset steps on target or strategy change
  useEffect(() => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  }, [targetX, strategy]);

  // Auto-play interval
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      const intervalMs = Math.max(250, 1000 / playbackSpeed);
      timer = setInterval(() => {
        setCurrentStepIndex(prev => {
          if (prev < path.totalSteps) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            // Trigger victory celebration
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 }
            });
            return prev;
          }
        });
      }, intervalMs);
    }
    return () => clearInterval(timer);
  }, [isPlaying, path.totalSteps, playbackSpeed]);

  const currentPos = path.history[currentStepIndex]?.to || 0;
  const remainingDist = Math.max(0, targetX - currentPos);
  const isFinished = currentStepIndex >= path.totalSteps;

  // Handle slider or text input
  const handleApplyCustomX = (val) => {
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 1 && num <= 1000000) {
      setTargetX(num);
    }
  };

  // Color mapping for step sizes
  const getStepColor = (size) => {
    switch (size) {
      case 5: return { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500/40', fill: '#10b981', lightBg: 'bg-emerald-500/10' };
      case 4: return { bg: 'bg-sky-500', text: 'text-sky-400', border: 'border-sky-500/40', fill: '#0ea5e9', lightBg: 'bg-sky-500/10' };
      case 3: return { bg: 'bg-indigo-500', text: 'text-indigo-400', border: 'border-indigo-500/40', fill: '#6366f1', lightBg: 'bg-indigo-500/10' };
      case 2: return { bg: 'bg-amber-500', text: 'text-amber-400', border: 'border-amber-500/40', fill: '#f59e0b', lightBg: 'bg-amber-500/10' };
      case 1: return { bg: 'bg-rose-500', text: 'text-rose-400', border: 'border-rose-500/40', fill: '#f43f5e', lightBg: 'bg-rose-500/10' };
      default: return { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500/40', fill: '#a855f7', lightBg: 'bg-purple-500/10' };
    }
  };

  // Mathematical variables
  const fullFives = Math.floor(targetX / 5);
  const remainder = targetX % 5;
  const mathCeilSteps = Math.ceil(targetX / 5);

  // Responsive number line coordinates calculation
  // We render up to targetX points if targetX <= 30. For larger targetX, we display key landmarks.
  const visualMax = targetX <= 30 ? targetX : Math.min(targetX, 40);
  const isCompressed = targetX > 30;

  return (
    <div className="space-y-6">
      {/* Visualizer Top Control Bar */}
      <div className="p-4 md:p-6 rounded-3xl glass-card border border-[var(--theme-border)] shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left: Input coordinate x */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-[var(--theme-text-muted)] flex items-center gap-1.5">
              <Compass size={14} className="text-[var(--theme-text-accent)]" /> Target Coordinate (x)
            </label>
            <div className="flex items-center gap-2 mt-1.5">
              <input
                type="number"
                min="1"
                max="1000000"
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value);
                  handleApplyCustomX(e.target.value);
                }}
                className="w-28 px-3.5 py-2 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] focus:border-[var(--theme-border-accent)] outline-none text-base font-black text-[var(--theme-text-heading)] font-mono"
              />
              <div className="flex items-center gap-1">
                {[5, 12, 17, 25, 40].map(val => (
                  <button
                    key={val}
                    onClick={() => {
                      setInputVal(val.toString());
                      setTargetX(val);
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      targetX === val 
                        ? 'bg-[var(--theme-btn-primary-bg)] text-white shadow-sm' 
                        : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:text-white'
                    }`}
                  >
                    x={val}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="h-10 w-px bg-[var(--theme-border)] hidden sm:block mx-1" />

          {/* Quick Slider (for smooth exploration 1 to 50) */}
          <div className="flex-1 min-w-[160px]">
            <div className="flex items-center justify-between text-xs text-[var(--theme-text-muted)] font-bold mb-1">
              <span>Slider (1 - 50)</span>
              <span className="font-mono text-[var(--theme-text-accent)]">{Math.min(targetX, 50)}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={Math.min(targetX, 50)}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                setInputVal(val.toString());
                setTargetX(val);
              }}
              className="w-full accent-indigo-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Strategy Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <label className="text-xs font-black uppercase tracking-wider text-[var(--theme-text-muted)]">
            Step Strategy:
          </label>
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] text-xs font-bold">
            <button
              onClick={() => setStrategy('greedy')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                strategy === 'greedy' 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm font-black' 
                  : 'text-[var(--theme-text-muted)] hover:text-white'
              }`}
              title="Takes max 5 steps first, then remainder"
            >
              Greedy Optimal (5s first)
            </button>
            <button
              onClick={() => setStrategy('balanced')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                strategy === 'balanced' 
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shadow-sm font-black' 
                  : 'text-[var(--theme-text-muted)] hover:text-white'
              }`}
              title="Evenly distributed steps"
            >
              Balanced Steps
            </button>
            {targetX === 12 && (
              <button
                onClick={() => setStrategy('sample2')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  strategy === 'sample2' 
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-sm font-black' 
                    : 'text-[var(--theme-text-muted)] hover:text-white'
                }`}
                title="Codeforces Sample 2: 3 + 5 + 4"
              >
                CF Sample (3+5+4)
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Visual Arena: Interactive Number Line & Parabolic Jump Simulator */}
      <div className="p-6 md:p-8 rounded-3xl glass-card border border-[var(--theme-border)] shadow-2xl relative overflow-hidden bg-gradient-to-b from-[var(--theme-bg-card)] to-[var(--theme-bg-subtle)]/40">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🐘</span>
            <div>
              <h2 className="text-lg font-black text-[var(--theme-text-heading)] flex items-center gap-2">
                Coordinate Line Jump Simulator
              </h2>
              <p className="text-xs text-[var(--theme-text-muted)] font-medium">
                Watch the elephant jump from House <span className="text-emerald-400 font-mono font-bold">0</span> to Friend's House <span className="text-indigo-400 font-mono font-bold">{targetX}</span>
              </p>
            </div>
          </div>

          {/* Jump Color Legend */}
          <div className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase">
            <span className="text-[var(--theme-text-muted)] mr-1">Steps:</span>
            {[5, 4, 3, 2, 1].map(sz => {
              const col = getStepColor(sz);
              return (
                <span key={sz} className={`px-2 py-0.5 rounded-md ${col.lightBg} ${col.text} border ${col.border}`}>
                  +{sz}
                </span>
              );
            })}
          </div>
        </div>

        {/* SVG Animated Coordinate Line and Jumping Arcs */}
        <div className="relative w-full h-72 md:h-80 my-4 border border-[var(--theme-border)] rounded-2xl bg-[var(--theme-bg-subtle)]/60 overflow-hidden flex flex-col justify-end p-4">
          {/* Background Grid Lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* SVG Canvas for Jump Arcs */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 320" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Baseline coordinate axis */}
            <line x1="40" y1="260" x2="960" y2="260" stroke="var(--theme-border)" strokeWidth="3" strokeDasharray="4 4" />
            <line x1="40" y1="260" x2="960" y2="260" stroke="url(#lineGlow)" strokeWidth="2" opacity="0.6" />

            {/* Jump Arcs up to currentStepIndex */}
            {path.history.slice(1, currentStepIndex + 1).map((step, idx) => {
              const startPct = step.from / targetX;
              const endPct = step.to / targetX;
              const x1 = 60 + startPct * 880;
              const x2 = 60 + endPct * 880;
              const midX = (x1 + x2) / 2;
              
              // Arc height determined by jump size (larger jumps make higher arcs)
              const arcHeight = Math.min(180, 50 + (step.jumpSize / 5) * 110);
              const yControl = 260 - arcHeight;
              
              const col = getStepColor(step.jumpSize);

              return (
                <g key={idx} className="transition-all duration-300">
                  {/* Parabolic Jump Path */}
                  <path
                    d={`M ${x1} 260 Q ${midX} ${yControl} ${x2} 260`}
                    fill="none"
                    stroke={col.fill}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="drop-shadow-lg"
                  />
                  {/* Arc glow */}
                  <path
                    d={`M ${x1} 260 Q ${midX} ${yControl} ${x2} 260`}
                    fill="none"
                    stroke={col.fill}
                    strokeWidth="8"
                    opacity="0.25"
                  />
                  {/* Step Label Pill on top of arc */}
                  <rect
                    x={midX - 18}
                    y={yControl - 14}
                    width="36"
                    height="20"
                    rx="10"
                    fill="#0f172a"
                    stroke={col.fill}
                    strokeWidth="1.5"
                  />
                  <text
                    x={midX}
                    y={yControl}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="bold"
                    dominantBaseline="middle"
                  >
                    +{step.jumpSize}
                  </text>
                </g>
              );
            })}

            {/* Point 0 Marker (Elephant's House) */}
            <circle cx="60" cy="260" r="7" fill="#10b981" />
            <text x="60" y="285" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">0</text>
            <text x="60" y="302" textAnchor="middle" fill="var(--theme-text-muted)" fontSize="9">Home</text>

            {/* Point x Marker (Friend's House) */}
            <circle cx="940" cy="260" r="7" fill="#ec4899" />
            <text x="940" y="285" textAnchor="middle" fill="#ec4899" fontSize="12" fontWeight="bold">{targetX}</text>
            <text x="940" y="302" textAnchor="middle" fill="var(--theme-text-muted)" fontSize="9">Friend</text>

            {/* Intermediate Tick Marks */}
            {!isCompressed && Array.from({ length: targetX - 1 }).map((_, i) => {
              const tickVal = i + 1;
              const tickX = 60 + (tickVal / targetX) * 880;
              return (
                <g key={tickVal} opacity="0.35">
                  <line x1={tickX} y1="255" x2={tickX} y2="265" stroke="var(--theme-text-muted)" strokeWidth="1" />
                  <text x={tickX} y="278" textAnchor="middle" fill="var(--theme-text-muted)" fontSize="9">
                    {tickVal}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Animated Elephant Marker */}
          <div 
            className="absolute z-20 transition-all duration-300 pointer-events-none flex flex-col items-center"
            style={{
              left: `${60 + (currentPos / targetX) * 880}px`,
              top: '215px',
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Elephant Character Card */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900 border-2 border-indigo-400 shadow-xl text-white text-xs font-black">
              <span className="text-base animate-bounce">🐘</span>
              <span>pos={currentPos}</span>
            </div>
            {/* Pointer arrow down */}
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-indigo-400 mt-0.5" />
          </div>

          {/* Friend's House Icon at finish point */}
          <div 
            className="absolute z-10 flex flex-col items-center"
            style={{
              left: '940px',
              top: '210px',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 text-lg shadow-lg">
              🏠
            </div>
          </div>
        </div>

        {/* Playback Control Bar */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--theme-border)]">
          {/* Controls: Play, Step Forward, Backward, Reset */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="btn-premium px-4 py-2 text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg"
            >
              {isPlaying ? <Pause size={14} className="fill-current" /> : <Play size={14} className="fill-current" />}
              <span>{isPlaying ? 'Pause' : isFinished ? 'Replay' : 'Play Jumps'}</span>
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStepIndex(prev => Math.max(0, prev - 1));
              }}
              disabled={currentStepIndex === 0}
              className="btn-secondary p-2 text-xs disabled:opacity-30"
              title="Previous Step"
            >
              <SkipBack size={15} />
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStepIndex(prev => Math.min(path.totalSteps, prev + 1));
              }}
              disabled={isFinished}
              className="btn-secondary p-2 text-xs disabled:opacity-30"
              title="Next Step"
            >
              <SkipForward size={15} />
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStepIndex(0);
              }}
              className="btn-secondary p-2 text-xs"
              title="Reset to 0"
            >
              <RotateCcw size={15} />
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStepIndex(path.totalSteps);
              }}
              className="btn-secondary px-3 py-2 text-xs font-bold flex items-center gap-1 text-[var(--theme-text-accent)]"
              title="Instant Finish"
            >
              <FastForward size={14} /> Finish
            </button>
          </div>

          {/* Speed Selector */}
          <div className="flex items-center gap-2 text-xs text-[var(--theme-text-muted)] font-bold">
            <span>Speed:</span>
            {[0.5, 1, 2, 4].map(spd => (
              <button
                key={spd}
                onClick={() => setPlaybackSpeed(spd)}
                className={`px-2 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                  playbackSpeed === spd 
                    ? 'bg-[var(--theme-btn-primary-bg)] text-white' 
                    : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:text-white'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>

          {/* Live Step Tracker Pill */}
          <div className="flex items-center gap-2 text-xs font-mono font-black">
            <span className="text-[var(--theme-text-muted)]">Step:</span>
            <span className="text-[var(--theme-text-accent)] text-sm">{currentStepIndex}</span>
            <span className="text-[var(--theme-text-muted)]">/ {path.totalSteps}</span>
            {isFinished && (
              <span className="text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[10px] flex items-center gap-1 ml-2 animate-pulse">
                <CheckCircle2 size={12} /> Target Reached!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Real-Time Mathematical & Algorithmic Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Metric 1: Total Steps Needed */}
        <div className="p-5 rounded-2xl glass-card border border-[var(--theme-border)] flex flex-col justify-between gap-2 shadow-sm">
          <div className="text-[10px] font-black uppercase tracking-wider text-[var(--theme-text-muted)] flex items-center gap-1">
            <Calculator size={13} className="text-indigo-400" /> Minimum Steps Needed
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-[var(--theme-text-heading)] font-mono">{path.totalSteps}</span>
            <span className="text-xs text-emerald-400 font-bold">Optimal Answer</span>
          </div>
          <div className="text-[11px] text-[var(--theme-text-muted)] font-mono">
            Formula: ⌈{targetX} / 5⌉ = {path.totalSteps}
          </div>
        </div>

        {/* Metric 2: Full 5-jumps */}
        <div className="p-5 rounded-2xl glass-card border border-[var(--theme-border)] flex flex-col justify-between gap-2 shadow-sm">
          <div className="text-[10px] font-black uppercase tracking-wider text-[var(--theme-text-muted)] flex items-center gap-1">
            <Zap size={13} className="text-emerald-400" /> Full Jumps of 5
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-400 font-mono">{fullFives}</span>
            <span className="text-xs text-[var(--theme-text-muted)] font-bold">x 5 = {fullFives * 5} units</span>
          </div>
          <div className="text-[11px] text-[var(--theme-text-muted)] font-mono">
            Math: ⌊{targetX} / 5⌋
          </div>
        </div>

        {/* Metric 3: Remainder Jump */}
        <div className="p-5 rounded-2xl glass-card border border-[var(--theme-border)] flex flex-col justify-between gap-2 shadow-sm">
          <div className="text-[10px] font-black uppercase tracking-wider text-[var(--theme-text-muted)] flex items-center gap-1">
            <Layers size={13} className="text-amber-400" /> Remainder Jump
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-400 font-mono">{remainder > 0 ? `+${remainder}` : '0'}</span>
            <span className="text-xs text-[var(--theme-text-muted)] font-bold">
              {remainder > 0 ? '1 step needed' : 'Exact multiple'}
            </span>
          </div>
          <div className="text-[11px] text-[var(--theme-text-muted)] font-mono">
            Math: {targetX} % 5 = {remainder}
          </div>
        </div>

        {/* Metric 4: Live Distance Remaining */}
        <div className="p-5 rounded-2xl glass-card border border-[var(--theme-border)] flex flex-col justify-between gap-2 shadow-sm">
          <div className="text-[10px] font-black uppercase tracking-wider text-[var(--theme-text-muted)] flex items-center gap-1">
            <Compass size={13} className="text-rose-400" /> Distance Remaining
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-rose-400 font-mono">{remainingDist}</span>
            <span className="text-xs text-[var(--theme-text-muted)] font-bold">units to target</span>
          </div>
          <div className="text-[11px] text-[var(--theme-text-muted)] font-mono">
            Current: pos = {currentPos}
          </div>
        </div>
      </div>

      {/* Step Breakdown Sequence */}
      <div className="p-5 md:p-6 rounded-2xl glass-card border border-[var(--theme-border)] space-y-3">
        <h3 className="text-xs font-black uppercase tracking-wider text-[var(--theme-text-muted)] flex items-center gap-1.5">
          <Layers size={14} className="text-indigo-400" /> Step-by-Step Jump Sequence ({path.steps.length} jumps)
        </h3>
        
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar py-2">
          {path.history.slice(1).map((item, idx) => {
            const col = getStepColor(item.jumpSize);
            const isExecuted = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex - 1;

            return (
              <div
                key={idx}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStepIndex(idx + 1);
                }}
                className={`p-3 rounded-xl border transition-all shrink-0 cursor-pointer flex flex-col gap-1 min-w-[100px] ${
                  isCurrent 
                    ? `${col.lightBg} ${col.border} shadow-lg ring-2 ring-indigo-400/40` 
                    : isExecuted 
                    ? 'bg-[var(--theme-bg-subtle)] border-[var(--theme-border)] opacity-90' 
                    : 'bg-[var(--theme-bg-subtle)]/40 border-dashed border-[var(--theme-border)] opacity-40 hover:opacity-80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-[var(--theme-text-muted)]">
                    Step {item.stepNumber}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${col.bg} text-white`}>
                    +{item.jumpSize}
                  </span>
                </div>
                <div className="text-xs font-mono font-bold text-[var(--theme-text-heading)] mt-1">
                  {item.from} → {item.to}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
