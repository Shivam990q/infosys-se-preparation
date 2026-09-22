import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, Grid, Layers, Play, RotateCcw, ChevronRight,
  Sparkles, CheckCircle2, TrendingUp, Info, Zap, HelpCircle
} from 'lucide-react';

export default function ArithmeticProgressionVisualizer() {
  const [w, setW] = useState(5);      // Bananas count for geometric display (3..8)
  const [k, setK] = useState(3);      // Multiplier
  const [viewMode, setViewMode] = useState('rectangle'); // 'staircase', 'pairing', 'rectangle'

  // Step-through loop simulation state
  const [loopStep, setLoopStep] = useState(0); // 0 to w
  const [isAutoLooping, setIsAutoLooping] = useState(false);

  // Generate staircase rows: row i has i units
  const totalUnits = (w * (w + 1)) / 2;
  const totalCost = k * totalUnits;

  // Pairing pairs: (1, w), (2, w-1), ...
  const pairs = [];
  for (let i = 1; i <= Math.floor(w / 2); i++) {
    pairs.push({ a: i, b: w - i + 1, sum: w + 1 });
  }
  const hasMiddle = w % 2 !== 0;
  const middleElement = Math.ceil(w / 2);

  // Loop simulation step forward
  const handleLoopNext = () => {
    if (loopStep < w) {
      setLoopStep(prev => prev + 1);
    } else {
      setLoopStep(0);
    }
  };

  // Calculate accumulated sum in loop up to loopStep
  let loopAccumulated = 0;
  for (let i = 1; i <= loopStep; i++) {
    loopAccumulated += i * k;
  }

  return (
    <div className="space-y-6">
      {/* 1. Interactive Control Toolbar */}
      <div className="p-4 md:p-5 rounded-2xl glass-card border border-[var(--theme-border)] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
            ∑
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-[var(--theme-text-heading)]">
              Gauss's Geometric Proof & AP Summation
            </h3>
            <p className="text-xs text-[var(--theme-text-muted)]">
              Visualizing why <code className="font-mono text-amber-400 font-bold">1 + 2 + ... + w = w(w + 1)/2</code>
            </p>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[var(--theme-text-muted)]">Bananas (w):</span>
            <div className="flex items-center gap-1 bg-[var(--theme-bg-subtle)] p-1 rounded-xl border border-[var(--theme-border)]">
              {[3, 4, 5, 6, 7].map(num => (
                <button
                  key={num}
                  onClick={() => {
                    setW(num);
                    setLoopStep(0);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    w === num ? 'bg-amber-400 text-black shadow-sm' : 'text-[var(--theme-text-muted)] hover:text-white'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[var(--theme-text-muted)]">Unit Cost (k):</span>
            <input
              type="number"
              min="1"
              max="20"
              value={k}
              onChange={(e) => setK(Math.max(1, Number(e.target.value)))}
              className="w-16 px-2.5 py-1 text-xs font-mono bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] rounded-xl text-center text-white"
            />
          </div>
        </div>
      </div>

      {/* 2. Visual Mode Selector Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-card border border-[var(--theme-border)]">
        {[
          { id: 'rectangle', label: '1. Two Staircases = Full Rectangle (w × (w+1))', icon: Grid },
          { id: 'pairing', label: '2. Gauss\'s Pairing Trick ((1+w) Pairs)', icon: Layers },
          { id: 'staircase', label: '3. Single Staircase Breakdown', icon: TrendingUp }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setViewMode(tab.id)}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
              viewMode === tab.id
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-[var(--theme-text-muted)] hover:text-white hover:bg-[var(--theme-bg-subtle)]'
            }`}
          >
            <tab.icon size={14} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 3. Proof Visualizer Canvas */}
      <div className="p-6 md:p-8 rounded-3xl glass-card border border-[var(--theme-border)] shadow-2xl space-y-6">
        {/* Mode 1: Rectangle (Two Staircases) */}
        {viewMode === 'rectangle' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h4 className="text-base font-black text-[var(--theme-text-heading)]">
                  Proof by Doubling: 2 Staircases form a {w} × {w + 1} Rectangle
                </h4>
                <p className="text-xs text-[var(--theme-text-muted)] mt-0.5">
                  Combine the original staircase (Amber) with an inverted duplicate (Cyan).
                </p>
              </div>
              <div className="text-xs font-mono px-3 py-1.5 rounded-xl bg-black/40 border border-[var(--theme-border)] text-amber-400">
                Area = {w} rows × {w + 1} columns = {w * (w + 1)} cells
              </div>
            </div>

            {/* Visual 2D Grid */}
            <div className="p-6 rounded-2xl bg-black/30 border border-[var(--theme-border)] flex flex-col items-center justify-center overflow-x-auto">
              <div className="space-y-2">
                {Array.from({ length: w }).map((_, rowIndex) => {
                  const row = rowIndex + 1;
                  const amberUnits = row;
                  const cyanUnits = (w + 1) - row;

                  return (
                    <div key={row} className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[var(--theme-text-muted)] w-12 text-right">
                        Row {row}:
                      </span>

                      {/* Amber blocks (Original Staircase) */}
                      <div className="flex gap-1.5">
                        {Array.from({ length: amberUnits }).map((_, col) => (
                          <motion.div
                            key={`amber-${col}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-xs font-black text-black shadow-md shadow-amber-500/20"
                            title={`Row ${row}, Item ${col + 1} ($${k})`}
                          >
                            🍌
                          </motion.div>
                        ))}
                      </div>

                      {/* Cyan blocks (Inverted Duplicate Staircase) */}
                      <div className="flex gap-1.5">
                        {Array.from({ length: cyanUnits }).map((_, col) => (
                          <motion.div
                            key={`cyan-${col}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-400/70 to-blue-600/70 border border-cyan-400/40 flex items-center justify-center text-xs font-bold text-white shadow-md shadow-cyan-500/10"
                            title={`Duplicate Unit`}
                          >
                            <span className="opacity-70">2nd</span>
                          </motion.div>
                        ))}
                      </div>

                      <span className="text-[10px] font-mono text-[var(--theme-text-muted)] pl-2">
                        = {w + 1} cells
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mathematical Derivation Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-1">
                <span className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase block">1. Rectangle Area</span>
                <div className="text-base font-black text-white font-mono">w × (w + 1) = {w * (w + 1)}</div>
                <p className="text-[11px] text-[var(--theme-text-muted)]">Each of the {w} rows contains exactly {w + 1} cells.</p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-1">
                <span className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase block">2. Divide by 2</span>
                <div className="text-base font-black text-amber-400 font-mono">w(w + 1) / 2 = {totalUnits} bananas</div>
                <p className="text-[11px] text-[var(--theme-text-muted)]">Since 2 staircases make the rectangle, 1 staircase is exactly half.</p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-1">
                <span className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase block">3. Multiply by Price k</span>
                <div className="text-base font-black text-emerald-400 font-mono">k × {totalUnits} = ${totalCost}</div>
                <p className="text-[11px] text-[var(--theme-text-muted)]">Each banana costs $k, giving the total bill in O(1) time.</p>
              </div>
            </div>
          </div>
        )}

        {/* Mode 2: Pairing (Gauss Trick) */}
        {viewMode === 'pairing' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-black text-[var(--theme-text-heading)]">
                Gauss's Pairing Method: Symmetry around the Center
              </h4>
              <p className="text-xs text-[var(--theme-text-muted)] mt-0.5">
                Pair the first and last elements: (1 + {w}), then (2 + {w - 1}), and so on. Every pair sums to {w + 1}!
              </p>
            </div>

            <div className="space-y-3">
              {pairs.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-mono font-black flex items-center justify-center text-xs">
                      #{idx + 1}
                    </div>
                    <div className="font-mono text-sm">
                      <span className="text-amber-400 font-bold">Banana #{p.a}</span>
                      <span className="text-[var(--theme-text-muted)] mx-2">+</span>
                      <span className="text-blue-400 font-bold">Banana #{p.b}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-mono">
                    <span className="text-xs text-[var(--theme-text-muted)]">
                      ({p.a} × ${k}) + ({p.b} × ${k}) = {p.a * k} + {p.b * k}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-black/40 border border-emerald-500/30 text-emerald-400 font-black text-sm">
                      = ${(p.a + p.b) * k} ({w + 1} units)
                    </span>
                  </div>
                </div>
              ))}

              {hasMiddle && (
                <div className="p-4 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 font-mono font-black flex items-center justify-center text-xs">
                      Mid
                    </div>
                    <div className="font-mono text-sm">
                      <span className="text-purple-400 font-bold">Banana #{middleElement} (Unpaired Middle)</span>
                    </div>
                  </div>

                  <div className="font-mono">
                    <span className="px-3 py-1 rounded-xl bg-black/40 border border-purple-500/30 text-purple-400 font-black text-sm">
                      = ${middleElement * k} ({middleElement} units = ({w + 1}) / 2)
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono flex items-center justify-between">
              <span>Total Pairs = {w}/2, each summing to {w + 1} units</span>
              <span className="font-black text-emerald-400">Sum = {w} × ({w + 1}) / 2 = {totalUnits} units</span>
            </div>
          </div>
        )}

        {/* Mode 3: Single Staircase Breakdown */}
        {viewMode === 'staircase' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-black text-[var(--theme-text-heading)]">
                Staircase Growth: Arithmetic Progression
              </h4>
              <p className="text-xs text-[var(--theme-text-muted)] mt-0.5">
                Each subsequent banana costs an additional $k dollars.
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-2xl bg-black/30 border border-[var(--theme-border)]">
              {Array.from({ length: w }).map((_, rowIndex) => {
                const row = rowIndex + 1;
                return (
                  <div key={row} className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[var(--theme-text-muted)] w-24">
                      Banana #{row} (${row * k}):
                    </span>
                    <div className="flex gap-1.5">
                      {Array.from({ length: row }).map((_, col) => (
                        <div
                          key={col}
                          className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-xs font-bold text-black"
                        >
                          🍌
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 4. Algorithmic Comparison: O(w) Loop vs O(1) Formula */}
      <div className="p-6 md:p-8 rounded-3xl glass-card border border-[var(--theme-border)] shadow-2xl space-y-6">
        <div>
          <h4 className="text-base font-black text-[var(--theme-text-heading)] flex items-center gap-2">
            <Zap size={18} className="text-amber-400" />
            Algorithm Complexity Comparison: O(w) Loop vs O(1) Closed Formula
          </h4>
          <p className="text-xs text-[var(--theme-text-muted)] mt-0.5">
            Both pass on Codeforces because w ≤ 1000, but O(1) closed-form scales to w = 10^9!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Approach 1: O(w) Loop */}
          <div className="p-5 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-blue-400">
                Approach 1: Iterative Simulation
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
                O(w) Time • O(1) Space
              </span>
            </div>

            <pre className="text-xs font-mono bg-black/40 p-3 rounded-xl border border-[var(--theme-border)] text-gray-300 overflow-x-auto">
{`long long total = 0;
for (int i = 1; i <= ${w}; i++) {
    total += i * ${k}; // Adds each banana
}
long long borrow = max(0LL, total - n);`}
            </pre>

            {/* Step-through loop tester */}
            <div className="p-3.5 rounded-xl bg-black/20 border border-[var(--theme-border)] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--theme-text-muted)] font-mono">Loop Progress:</span>
                <button
                  onClick={handleLoopNext}
                  className="px-3 py-1 rounded-lg bg-blue-500 hover:bg-blue-400 text-black font-black text-xs transition-all"
                >
                  {loopStep === w ? 'Restart Loop' : `Step i = ${loopStep + 1}`}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[11px] font-mono pt-1">
                <div>
                  <span className="text-[var(--theme-text-muted)] block">i:</span>
                  <span className="font-bold text-white">{loopStep} / {w}</span>
                </div>
                <div>
                  <span className="text-[var(--theme-text-muted)] block">Added Now:</span>
                  <span className="font-bold text-amber-400">{loopStep > 0 ? `+$${loopStep * k}` : '$0'}</span>
                </div>
                <div>
                  <span className="text-[var(--theme-text-muted)] block">Total So Far:</span>
                  <span className="font-bold text-emerald-400">${loopAccumulated}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Approach 2: O(1) Math */}
          <div className="p-5 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                Approach 2: Mathematical Closed Form (Optimal)
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                O(1) Time • O(1) Space
              </span>
            </div>

            <pre className="text-xs font-mono bg-black/40 p-3 rounded-xl border border-[var(--theme-border)] text-gray-300 overflow-x-auto">
{`// Direct constant-time formula
long long total = ${k} * (${w} * (${w} + 1)) / 2;
long long borrow = max(0LL, total - n);`}
            </pre>

            <div className="p-3.5 rounded-xl bg-black/20 border border-[var(--theme-border)] space-y-2">
              <div className="text-xs text-[var(--theme-text-muted)] font-mono">Immediate Calculation:</div>
              <div className="text-sm font-mono font-bold text-emerald-400">
                {k} × ({w} × {w + 1} / 2) = {k} × {totalUnits} = ${totalCost}
              </div>
              <p className="text-[10px] text-[var(--theme-text-muted)]">
                Executes in 1 arithmetic CPU instruction (&lt; 0.0001 ms), immune to timeouts even if w = 10^9!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
