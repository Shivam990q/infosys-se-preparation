import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw, Info, ArrowLeft, GitCommit, Check } from 'lucide-react';

export default function DpTableVisualizer({ maxLimit = 25 }) {
  const [targetX, setTargetX] = useState(15);
  const [currentI, setCurrentI] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  // Compute full DP table and trace data
  const dpData = useMemo(() => {
    const n = Math.min(Math.max(1, targetX), maxLimit);
    const dp = new Array(n + 1).fill(Infinity);
    const parent = new Array(n + 1).fill(-1);
    const chosenStep = new Array(n + 1).fill(0);
    const candidates = [];

    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
      const currentCands = [];
      for (let s = 1; s <= 5; s++) {
        if (i - s >= 0) {
          const cost = dp[i - s] + 1;
          currentCands.push({ step: s, from: i - s, cost, prevVal: dp[i - s] });
          if (cost < dp[i]) {
            dp[i] = cost;
            parent[i] = i - s;
            chosenStep[i] = s;
          }
        }
      }
      candidates[i] = currentCands;
    }

    // Reconstruct optimal path from n to 0
    const reconstructedPath = [];
    let curr = n;
    while (curr > 0 && parent[curr] !== -1) {
      reconstructedPath.unshift({
        from: parent[curr],
        to: curr,
        step: chosenStep[curr]
      });
      curr = parent[curr];
    }

    return { dp, parent, chosenStep, candidates, reconstructedPath, n };
  }, [targetX, maxLimit]);

  // Reset playback when target changes
  useEffect(() => {
    setCurrentI(0);
    setIsPlaying(false);
  }, [targetX]);

  // Auto-play timer
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentI(prev => {
          if (prev < dpData.n) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 900 / speed);
    }
    return () => clearInterval(timer);
  }, [isPlaying, dpData.n, speed]);

  const activeCandidates = dpData.candidates[currentI] || [];
  const chosenCandidate = activeCandidates.find(c => c.step === dpData.chosenStep[currentI]);

  return (
    <div className="space-y-6">
      {/* Header & Target selector */}
      <div className="p-4 md:p-6 rounded-3xl glass-card border border-[var(--theme-border)] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-[var(--theme-text-heading)] flex items-center gap-2">
            Dynamic Programming State Explorer
          </h2>
          <p className="text-xs text-[var(--theme-text-muted)] font-medium mt-0.5">
            Solving Elephant via Bottom-Up Tabulation: <code className="text-indigo-400 font-mono">DP[i] = 1 + min(DP[i-s])</code> for <code className="text-emerald-400 font-mono">s ∈ &#123;1..5&#125;</code>
          </p>
        </div>

        {/* Target X selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--theme-text-muted)]">Target Coordinate:</span>
          {[10, 12, 15, 20, 25].map(val => (
            <button
              key={val}
              onClick={() => setTargetX(val)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
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

      {/* DP Array Interactive Grid */}
      <div className="p-6 md:p-8 rounded-3xl glass-card border border-[var(--theme-border)] shadow-2xl space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-xs font-black uppercase tracking-wider text-[var(--theme-text-muted)] flex items-center gap-2">
            <span>DP Array:</span>
            <span className="text-indigo-400 font-mono">dp[0..{dpData.n}]</span>
          </div>
          <div className="text-xs text-[var(--theme-text-muted)] font-mono">
            Evaluating: <span className="text-amber-400 font-black">i = {currentI}</span>
          </div>
        </div>

        {/* Horizontal Table of DP Cells */}
        <div className="overflow-x-auto custom-scrollbar pb-3">
          <div className="flex items-center gap-2.5 min-w-max">
            {Array.from({ length: dpData.n + 1 }).map((_, idx) => {
              const isEvaluated = idx <= currentI;
              const isCurrent = idx === currentI;
              const isCandidate = currentI > 0 && idx >= currentI - 5 && idx < currentI;
              const isOptimalPredecessor = currentI > 0 && idx === dpData.parent[currentI];
              const val = isEvaluated ? dpData.dp[idx] : '?';

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentI(idx);
                  }}
                  className={`flex flex-col items-center justify-between p-2.5 rounded-2xl border transition-all cursor-pointer w-14 h-24 ${
                    isCurrent 
                      ? 'bg-indigo-500/20 border-indigo-400 ring-2 ring-indigo-400/50 shadow-lg scale-105' 
                      : isOptimalPredecessor
                      ? 'bg-emerald-500/20 border-emerald-400 shadow-md ring-1 ring-emerald-400'
                      : isCandidate
                      ? 'bg-amber-500/10 border-amber-500/30'
                      : isEvaluated
                      ? 'bg-[var(--theme-bg-subtle)] border-[var(--theme-border)]'
                      : 'bg-[var(--theme-bg-subtle)]/30 border-dashed border-[var(--theme-border)] opacity-40'
                  }`}
                >
                  <span className="text-[10px] font-mono text-[var(--theme-text-muted)]">
                    [{idx}]
                  </span>

                  <div className={`text-xl font-black font-mono ${
                    isCurrent ? 'text-indigo-400 animate-pulse' :
                    isOptimalPredecessor ? 'text-emerald-400' :
                    isEvaluated ? 'text-[var(--theme-text-heading)]' : 'text-slate-600'
                  }`}>
                    {val}
                  </div>

                  <span className="text-[9px] font-bold text-[var(--theme-text-muted)]">
                    {idx === 0 ? 'Home' : idx === dpData.n ? 'Target' : `step=${isEvaluated ? dpData.dp[idx] : '-'}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* State Transition Formula Breakdown Box */}
        {currentI > 0 && (
          <div className="p-5 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-[var(--theme-text-muted)] flex items-center justify-between">
              <span>State Transition Calculation for i = {currentI}:</span>
              <span className="text-emerald-400 font-mono font-bold">
                Chosen: from {dpData.parent[currentI]} (jump +{dpData.chosenStep[currentI]}) → DP[{currentI}] = {dpData.dp[currentI]}
              </span>
            </div>

            {/* Candidate steps breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 pt-1">
              {activeCandidates.map((c, i) => {
                const isWinner = c.step === dpData.chosenStep[currentI];
                return (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border flex flex-col gap-1 transition-all ${
                      isWinner 
                        ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-md ring-1 ring-emerald-500/40' 
                        : 'bg-[var(--theme-bg-elevated)] border-[var(--theme-border)] text-[var(--theme-text-muted)]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span>Jump +{c.step}</span>
                      {isWinner && <Check size={14} className="text-emerald-400 font-black" />}
                    </div>
                    <div className="text-[11px] font-mono mt-1">
                      From DP[{c.from}]: <span className="font-bold">{c.prevVal}</span>
                    </div>
                    <div className="text-[11px] font-mono font-bold">
                      1 + {c.prevVal} = <span className={isWinner ? 'text-white text-sm' : ''}>{c.cost}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Playback Controls */}
        <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-[var(--theme-border)]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="btn-premium px-4 py-2 text-xs font-black uppercase tracking-wider flex items-center gap-2"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'Pause' : currentI >= dpData.n ? 'Recompute' : 'Step Through'}</span>
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentI(prev => Math.max(0, prev - 1));
              }}
              disabled={currentI === 0}
              className="btn-secondary p-2 text-xs disabled:opacity-30"
            >
              <SkipBack size={15} />
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentI(prev => Math.min(dpData.n, prev + 1));
              }}
              disabled={currentI >= dpData.n}
              className="btn-secondary p-2 text-xs disabled:opacity-30"
            >
              <SkipForward size={15} />
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentI(0);
              }}
              className="btn-secondary p-2 text-xs"
            >
              <RotateCcw size={15} />
            </button>
          </div>

          {/* Reconstructed Path */}
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--theme-text-muted)]">
            <span>Optimal Path:</span>
            {dpData.reconstructedPath.map((p, idx) => (
              <span key={idx} className="flex items-center gap-1 text-[var(--theme-text-primary)]">
                <span>{p.from}</span>
                <span className="text-emerald-400 font-black">--(+{p.step})--&gt;</span>
                {idx === dpData.reconstructedPath.length - 1 && <span className="text-indigo-400">{p.to}</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
