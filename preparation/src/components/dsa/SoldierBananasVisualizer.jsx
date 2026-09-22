import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Pause, RotateCcw, SkipForward, ChevronRight, ChevronLeft,
  DollarSign, ShoppingBag, AlertTriangle, CheckCircle2, TrendingUp,
  Sparkles, Wallet, Info, ArrowRight, ShieldCheck, Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SoldierBananasVisualizer() {
  // Parameters
  const [k, setK] = useState(3);       // Cost of 1st banana
  const [n, setN] = useState(17);      // Initial money soldier has
  const [w, setW] = useState(4);       // Number of bananas wanted

  // Simulator playback state
  const [currentBananaIndex, setCurrentBananaIndex] = useState(0); // 0 to w
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // 0.5, 1, 2, 4

  // Pre-calculated banana item breakdown
  const bananas = [];
  let runningCost = 0;
  for (let i = 1; i <= w; i++) {
    const cost = i * k;
    const startCost = runningCost;
    runningCost += cost;
    const endCost = runningCost;

    // How much of this banana is paid by own money vs borrowed
    let paidByCash = 0;
    let paidByLoan = 0;
    if (n >= endCost) {
      paidByCash = cost;
    } else if (n <= startCost) {
      paidByLoan = cost;
    } else {
      paidByCash = n - startCost;
      paidByLoan = endCost - n;
    }

    bananas.push({
      index: i,
      cost,
      startCost,
      endCost,
      paidByCash,
      paidByLoan,
      status: paidByLoan === 0 ? 'cash' : paidByCash === 0 ? 'loan' : 'partial'
    });
  }

  const totalCost = (k * w * (w + 1)) / 2;
  const borrowAmount = Math.max(0, totalCost - n);
  const surplusAmount = Math.max(0, n - totalCost);

  // Cost at current simulated step
  const currentTotalPaid = currentBananaIndex > 0 ? bananas[currentBananaIndex - 1].endCost : 0;
  const currentCashSpent = Math.min(n, currentTotalPaid);
  const currentCashRemaining = Math.max(0, n - currentCashSpent);
  const currentLoanTaken = Math.max(0, currentTotalPaid - n);

  // Playback timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      const delay = 1000 / playbackSpeed;
      timer = setTimeout(() => {
        if (currentBananaIndex < w) {
          setCurrentBananaIndex(prev => prev + 1);
        } else {
          setIsPlaying(false);
          confetti({
            particleCount: 75,
            spread: 60,
            origin: { y: 0.6 }
          });
        }
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentBananaIndex, w, playbackSpeed]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentBananaIndex(0);
  };

  const handleStepForward = () => {
    if (currentBananaIndex < w) {
      setCurrentBananaIndex(prev => prev + 1);
    }
  };

  const handleStepBack = () => {
    if (currentBananaIndex > 0) {
      setCurrentBananaIndex(prev => prev - 1);
    }
  };

  const handleBuyAll = () => {
    setIsPlaying(false);
    setCurrentBananaIndex(w);
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const applyPreset = (presetK, presetN, presetW) => {
    setIsPlaying(false);
    setK(presetK);
    setN(presetN);
    setW(presetW);
    setCurrentBananaIndex(0);
  };

  return (
    <div className="space-y-6">
      {/* 1. Quick Presets Bar */}
      <div className="p-4 rounded-2xl glass-card border border-[var(--theme-border)] shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-amber-400" />
          <span className="text-xs font-black uppercase tracking-wider text-[var(--theme-text-heading)]">
            Problem Presets:
          </span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { label: 'Codeforces Sample 1 (k=3, n=17, w=4)', k: 3, n: 17, w: 4, tag: 'Borrow $13' },
            { label: 'Wealthy Soldier (k=3, n=45, w=4)', k: 3, n: 45, w: 4, tag: 'Borrow $0' },
            { label: 'Exact Match (k=3, n=30, w=4)', k: 3, n: 30, w: 4, tag: 'Borrow $0' },
            { label: 'Broke Soldier (k=4, n=0, w=5)', k: 4, n: 0, w: 5, tag: 'Borrow $60' },
            { label: 'Single Banana (k=10, n=4, w=1)', k: 10, n: 4, w: 1, tag: 'Borrow $6' },
            { label: 'Big Order (k=5, n=100, w=10)', k: 5, n: 100, w: 10, tag: 'Borrow $175' }
          ].map((preset, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(preset.k, preset.n, preset.w)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                k === preset.k && n === preset.n && w === preset.w
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:text-white border-[var(--theme-border)]'
              }`}
            >
              <span>{preset.label}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/40 text-amber-400">
                {preset.tag}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Interactive Parameter Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Cost of 1st Banana (k) */}
        <div className="p-4 md:p-5 rounded-2xl glass-card border border-[var(--theme-border)] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-black flex items-center justify-center text-xs">
                k
              </span>
              <div>
                <h4 className="text-xs font-black uppercase text-[var(--theme-text-heading)]">1st Banana Cost</h4>
                <p className="text-[10px] text-[var(--theme-text-muted)]">i-th banana costs i · k</p>
              </div>
            </div>
            <span className="text-base font-black font-mono text-amber-400 px-2.5 py-1 rounded-xl bg-amber-500/15 border border-amber-500/30">
              ${k}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={k}
            onChange={(e) => {
              setK(Number(e.target.value));
              handleReset();
            }}
            className="w-full accent-amber-400 cursor-pointer h-1.5 bg-[var(--theme-bg-subtle)] rounded-lg"
          />
          <div className="flex justify-between text-[10px] font-mono text-[var(--theme-text-muted)]">
            <span>$1</span>
            <span>$15</span>
            <span>$30</span>
          </div>
        </div>

        {/* Soldier's Initial Money (n) */}
        <div className="p-4 md:p-5 rounded-2xl glass-card border border-[var(--theme-border)] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-xs">
                n
              </span>
              <div>
                <h4 className="text-xs font-black uppercase text-[var(--theme-text-heading)]">Soldier's Dollars</h4>
                <p className="text-[10px] text-[var(--theme-text-muted)]">Starting cash in wallet</p>
              </div>
            </div>
            <span className="text-base font-black font-mono text-emerald-400 px-2.5 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
              ${n}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="150"
            value={n}
            onChange={(e) => {
              setN(Number(e.target.value));
              handleReset();
            }}
            className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-[var(--theme-bg-subtle)] rounded-lg"
          />
          <div className="flex justify-between text-[10px] font-mono text-[var(--theme-text-muted)]">
            <span>$0</span>
            <span>$75</span>
            <span>$150</span>
          </div>
        </div>

        {/* Bananas Wanted (w) */}
        <div className="p-4 md:p-5 rounded-2xl glass-card border border-[var(--theme-border)] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 font-black flex items-center justify-center text-xs">
                w
              </span>
              <div>
                <h4 className="text-xs font-black uppercase text-[var(--theme-text-heading)]">Bananas Wanted</h4>
                <p className="text-[10px] text-[var(--theme-text-muted)]">Quantity soldier desires</p>
              </div>
            </div>
            <span className="text-base font-black font-mono text-blue-400 px-2.5 py-1 rounded-xl bg-blue-500/15 border border-blue-500/30">
              {w} 🍌
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="12"
            value={w}
            onChange={(e) => {
              setW(Number(e.target.value));
              handleReset();
            }}
            className="w-full accent-blue-400 cursor-pointer h-1.5 bg-[var(--theme-bg-subtle)] rounded-lg"
          />
          <div className="flex justify-between text-[10px] font-mono text-[var(--theme-text-muted)]">
            <span>1 banana</span>
            <span>6 bananas</span>
            <span>12 bananas</span>
          </div>
        </div>
      </div>

      {/* 3. Financial Status & Live Metrics Gauge */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Total Cost */}
        <div className="p-4 rounded-2xl glass-card border border-[var(--theme-border)] shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-[var(--theme-text-muted)] mb-1">
            <span className="font-bold uppercase tracking-wider">Total Bill Required</span>
            <ShoppingBag size={15} className="text-amber-400" />
          </div>
          <div className="text-2xl font-black font-mono text-amber-400">${totalCost}</div>
          <p className="text-[10px] text-[var(--theme-text-muted)] mt-1 font-mono">
            {k} · ({w} × {w + 1} / 2) = {k} · {(w * (w + 1)) / 2}
          </p>
        </div>

        {/* Soldier's Cash */}
        <div className="p-4 rounded-2xl glass-card border border-[var(--theme-border)] shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-[var(--theme-text-muted)] mb-1">
            <span className="font-bold uppercase tracking-wider">Soldier's Own Cash</span>
            <Wallet size={15} className="text-emerald-400" />
          </div>
          <div className="text-2xl font-black font-mono text-emerald-400">${n}</div>
          <p className="text-[10px] text-[var(--theme-text-muted)] mt-1">
            {n >= totalCost ? 'Covers 100% of the bill' : `Covers $${Math.min(n, totalCost)} of $${totalCost}`}
          </p>
        </div>

        {/* Amount to Borrow (Official Answer) */}
        <div className={`p-4 rounded-2xl glass-card border shadow-sm relative overflow-hidden ${
          borrowAmount > 0 
            ? 'border-rose-500/40 bg-rose-500/5' 
            : 'border-emerald-500/40 bg-emerald-500/5'
        }`}>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-black uppercase tracking-wider text-[var(--theme-text-heading)]">
              Amount to Borrow
            </span>
            {borrowAmount > 0 ? (
              <AlertTriangle size={15} className="text-rose-400" />
            ) : (
              <ShieldCheck size={15} className="text-emerald-400" />
            )}
          </div>
          <div className={`text-2xl font-black font-mono ${borrowAmount > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
            ${borrowAmount}
          </div>
          <p className="text-[10px] font-mono text-[var(--theme-text-muted)] mt-1">
            max(0, {totalCost} - {n}) = {borrowAmount}
          </p>
        </div>

        {/* Surplus / Balance */}
        <div className="p-4 rounded-2xl glass-card border border-[var(--theme-border)] shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-[var(--theme-text-muted)] mb-1">
            <span className="font-bold uppercase tracking-wider">Wallet Surplus</span>
            <DollarSign size={15} className="text-blue-400" />
          </div>
          <div className="text-2xl font-black font-mono text-blue-400">${surplusAmount}</div>
          <p className="text-[10px] text-[var(--theme-text-muted)] mt-1">
            {surplusAmount > 0 ? 'Cash left after purchasing all' : 'No cash remaining'}
          </p>
        </div>
      </div>

      {/* 4. Financial Balance Split Bar */}
      <div className="p-5 rounded-2xl glass-card border border-[var(--theme-border)] shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-[var(--theme-text-heading)] flex items-center gap-1.5">
            <DollarSign size={14} className="text-emerald-400" />
            Payment Coverage Split
          </span>
          <span className="font-mono text-[var(--theme-text-muted)]">
            Total ${totalCost} = Paid by Cash (${Math.min(n, totalCost)}) + Borrowed (${borrowAmount})
          </span>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-7 bg-[var(--theme-bg-subtle)] rounded-xl overflow-hidden p-1 flex gap-1 border border-[var(--theme-border)]">
          {/* Own Money Portion */}
          <div
            style={{ width: `${Math.min(100, totalCost > 0 ? (Math.min(n, totalCost) / totalCost) * 100 : 100)}%` }}
            className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg flex items-center justify-center text-[10px] font-black text-white font-mono shadow-sm transition-all duration-300"
          >
            {n > 0 && totalCost > 0 && (
              <span>Own Cash ${Math.min(n, totalCost)} ({Math.round((Math.min(n, totalCost) / totalCost) * 100)}%)</span>
            )}
          </div>

          {/* Borrow Portion */}
          {borrowAmount > 0 && (
            <div
              style={{ width: `${(borrowAmount / totalCost) * 100}%` }}
              className="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg flex items-center justify-center text-[10px] font-black text-white font-mono shadow-sm transition-all duration-300"
            >
              <span>Borrowed ${borrowAmount} ({Math.round((borrowAmount / totalCost) * 100)}%)</span>
            </div>
          )}
        </div>

        {/* Verdict Badge */}
        <div className="flex items-center justify-between text-xs pt-1 flex-wrap gap-2">
          {borrowAmount > 0 ? (
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle size={15} />
              <span className="font-bold">
                Soldier's cash falls short by <span className="font-mono">${borrowAmount}</span>. He must ask his friend for a loan of <span className="font-mono">${borrowAmount}</span>.
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={15} />
              <span className="font-bold">
                Soldier has sufficient funds! He needs to borrow <span className="font-mono">$0</span> (with <span className="font-mono">${surplusAmount}</span> remaining).
              </span>
            </div>
          )}

          <div className="text-[11px] font-mono text-[var(--theme-text-muted)] bg-black/30 px-2.5 py-1 rounded-lg border border-[var(--theme-border)]">
            Rule: borrow = max(0, total - n)
          </div>
        </div>
      </div>

      {/* 5. Banana Market Rack & Step-by-Step Purchase Simulator */}
      <div className="p-6 rounded-3xl glass-card border border-[var(--theme-border)] shadow-2xl space-y-6">
        {/* Rack Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--theme-border)]">
          <div>
            <h3 className="text-base font-black text-[var(--theme-text-heading)] flex items-center gap-2">
              <span>🍌</span> Banana Market Stall Rack
            </h3>
            <p className="text-xs text-[var(--theme-text-muted)] mt-0.5">
              Watch the soldier purchase each banana. See when his wallet empties and borrowing begins!
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleReset}
              className="p-2 rounded-xl bg-[var(--theme-bg-subtle)] hover:bg-[var(--theme-bg-subtle-hover)] text-[var(--theme-text-muted)] hover:text-white border border-[var(--theme-border)] transition-all"
              title="Reset Simulator"
            >
              <RotateCcw size={15} />
            </button>

            <button
              onClick={handleStepBack}
              disabled={currentBananaIndex === 0}
              className="p-2 rounded-xl bg-[var(--theme-bg-subtle)] hover:bg-[var(--theme-bg-subtle-hover)] disabled:opacity-30 text-[var(--theme-text-muted)] hover:text-white border border-[var(--theme-border)] transition-all"
              title="Step Backward"
            >
              <ChevronLeft size={15} />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
              <span>{isPlaying ? 'Pause' : 'Buy Step-by-Step'}</span>
            </button>

            <button
              onClick={handleStepForward}
              disabled={currentBananaIndex === w}
              className="p-2 rounded-xl bg-[var(--theme-bg-subtle)] hover:bg-[var(--theme-bg-subtle-hover)] disabled:opacity-30 text-[var(--theme-text-muted)] hover:text-white border border-[var(--theme-border)] transition-all"
              title="Step Forward"
            >
              <ChevronRight size={15} />
            </button>

            <button
              onClick={handleBuyAll}
              className="px-3 py-2 rounded-xl bg-[var(--theme-bg-subtle)] hover:bg-[var(--theme-bg-subtle-hover)] text-xs font-bold text-[var(--theme-text-muted)] hover:text-white border border-[var(--theme-border)] transition-all flex items-center gap-1.5"
            >
              <SkipForward size={14} />
              <span>Buy All</span>
            </button>

            {/* Speed Selector */}
            <div className="flex items-center bg-[var(--theme-bg-subtle)] rounded-xl p-0.5 border border-[var(--theme-border)]">
              {[0.5, 1, 2, 4].map(s => (
                <button
                  key={s}
                  onClick={() => setPlaybackSpeed(s)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                    playbackSpeed === s ? 'bg-amber-400 text-black shadow-sm' : 'text-[var(--theme-text-muted)] hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Simulation Progress Monitor */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded-2xl bg-black/20 border border-[var(--theme-border)] font-mono text-xs">
          <div>
            <span className="text-[10px] text-[var(--theme-text-muted)] block">Purchased So Far:</span>
            <span className="font-bold text-amber-400">{currentBananaIndex} / {w} Bananas</span>
          </div>
          <div>
            <span className="text-[10px] text-[var(--theme-text-muted)] block">Current Spent:</span>
            <span className="font-bold text-white">${currentTotalPaid}</span>
          </div>
          <div>
            <span className="text-[10px] text-[var(--theme-text-muted)] block">Wallet Balance Left:</span>
            <span className="font-bold text-emerald-400">${currentCashRemaining}</span>
          </div>
          <div>
            <span className="text-[10px] text-[var(--theme-text-muted)] block">Friend's Loan Tapped:</span>
            <span className={`font-bold ${currentLoanTaken > 0 ? 'text-rose-400' : 'text-gray-400'}`}>
              ${currentLoanTaken}
            </span>
          </div>
        </div>

        {/* Banana Stalls Rack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {bananas.map(b => {
            const isPurchased = currentBananaIndex >= b.index;
            const isCurrent = currentBananaIndex === b.index;

            return (
              <motion.div
                key={b.index}
                layout
                className={`p-4 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between ${
                  isCurrent
                    ? 'border-amber-400 ring-2 ring-amber-400/30 bg-amber-500/10 shadow-lg shadow-amber-500/10'
                    : isPurchased
                      ? b.status === 'cash'
                        ? 'border-emerald-500/40 bg-emerald-500/5'
                        : b.status === 'loan'
                          ? 'border-rose-500/40 bg-rose-500/5'
                          : 'border-amber-500/40 bg-amber-500/5'
                      : 'border-[var(--theme-border)] bg-[var(--theme-bg-subtle)] opacity-60'
                }`}
              >
                {/* Stall Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl">🍌</span>
                    <div>
                      <span className="text-xs font-black text-[var(--theme-text-heading)]">Banana #{b.index}</span>
                      <span className="text-[10px] font-mono block text-[var(--theme-text-muted)]">{b.index} × ${k}</span>
                    </div>
                  </div>
                  <span className="text-base font-black font-mono text-amber-400 px-2 py-0.5 rounded-lg bg-black/40 border border-amber-400/20">
                    ${b.cost}
                  </span>
                </div>

                {/* Progress / Cumulative Sum */}
                <div className="space-y-1.5 my-2">
                  <div className="flex justify-between text-[10px] font-mono text-[var(--theme-text-muted)]">
                    <span>Cumulative Total:</span>
                    <span className="font-bold text-white">${b.endCost}</span>
                  </div>

                  {/* Micro payment split bar for this banana */}
                  <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden flex">
                    {b.paidByCash > 0 && (
                      <div
                        style={{ width: `${(b.paidByCash / b.cost) * 100}%` }}
                        className="h-full bg-emerald-500"
                        title={`Paid from cash: $${b.paidByCash}`}
                      />
                    )}
                    {b.paidByLoan > 0 && (
                      <div
                        style={{ width: `${(b.paidByLoan / b.cost) * 100}%` }}
                        className="h-full bg-rose-500"
                        title={`Paid from loan: $${b.paidByLoan}`}
                      />
                    )}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="pt-2 border-t border-[var(--theme-border)] flex items-center justify-between text-[10px]">
                  {b.status === 'cash' && (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 size={12} /> Covered by Cash
                    </span>
                  )}
                  {b.status === 'loan' && (
                    <span className="text-rose-400 font-bold flex items-center gap-1">
                      <AlertTriangle size={12} /> Needs Loan (${b.paidByLoan})
                    </span>
                  )}
                  {b.status === 'partial' && (
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      <TrendingUp size={12} /> Cash runs out here!
                    </span>
                  )}

                  {isPurchased && (
                    <span className="px-1.5 py-0.5 rounded bg-black/40 text-emerald-400 font-mono text-[9px] font-bold">
                      BOUGHT ✓
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 6. Caution: The "Never Negative" Beginner Trap */}
      <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5">
        <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
          <Info size={18} />
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-black uppercase tracking-wider text-amber-300">
            Crucial Implementation Insight: The Zero Floor Trap (max(0, Total - n))
          </h4>
          <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed">
            In competitive programming, many beginners calculate <code className="font-mono text-amber-300">Total - n</code> directly without <code className="font-mono text-emerald-400">max(0LL, ...)</code>. If the soldier has more money than needed (e.g., soldier has $50 and the bananas cost $30), <code className="font-mono">30 - 50 = -20</code>. But the shopkeeper does not pay the soldier money! The soldier must borrow <strong className="text-emerald-400">0 dollars</strong>. Always floor the answer at zero.
          </p>
        </div>
      </div>
    </div>
  );
}
