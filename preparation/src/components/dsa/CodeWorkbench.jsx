import React, { useState, useEffect } from 'react';
import { Copy, Check, Play, Terminal, CheckCircle2, XCircle, Code2, Cpu, Zap, Clock } from 'lucide-react';

export default function CodeWorkbench({ problem }) {
  const [selectedLang, setSelectedLang] = useState('cpp');
  const [copied, setCopied] = useState(false);
  const [multiInputs, setMultiInputs] = useState({});
  const [singleInput, setSingleInput] = useState('12');
  const [customResult, setCustomResult] = useState(null);
  const [testResults, setTestResults] = useState(null);
  const [isRunningTests, setIsRunningTests] = useState(false);

  // Initialize input state from problem schema
  useEffect(() => {
    setCustomResult(null);
    setTestResults(null);
    if (problem?.inputSchema?.type === 'multi') {
      const initial = {};
      problem.inputSchema.fields.forEach(f => {
        initial[f.key] = f.default;
      });
      setMultiInputs(initial);
    } else {
      setSingleInput(String(problem?.inputSchema?.default || 12));
    }
  }, [problem?.id]);

  const codeSnippets = problem?.solutions || {};

  const handleCopy = () => {
    const code = codeSnippets[selectedLang] || '';
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Run in-browser custom solution
  const handleRunCustom = () => {
    const startTime = performance.now();
    try {
      let ans;
      let inputSummary = '';

      if (problem?.inputSchema?.type === 'multi') {
        ans = problem.runner(multiInputs);
        inputSummary = Object.entries(multiInputs).map(([k, v]) => `${k} = ${v}`).join(', ');
      } else {
        const x = parseInt(singleInput, 10);
        if (isNaN(x) || x <= 0) {
          setCustomResult({ error: 'Please enter a valid positive integer.' });
          return;
        }
        ans = problem.runner({ x });
        inputSummary = `x = ${x}`;
      }

      const durationMs = (performance.now() - startTime).toFixed(4);
      setCustomResult({
        ans,
        inputSummary,
        durationMs
      });
    } catch (err) {
      setCustomResult({ error: err.message });
    }
  };

  // Run all test cases in the test suite
  const handleRunAllTests = () => {
    setIsRunningTests(true);
    const cases = problem.testCases || [];
    setTimeout(() => {
      const results = cases.map(tc => {
        const computed = problem.runner(tc);
        return {
          ...tc,
          computed,
          passed: computed === tc.expected
        };
      });
      setTestResults(results);
      setIsRunningTests(false);
    }, 250);
  };

  const langNames = {
    cpp: 'C++ 20 (GCC)',
    java: 'Java 21 (OpenJDK)',
    python: 'Python 3.12 (PyPy3)',
    javascript: 'JavaScript (Node.js)'
  };

  return (
    <div className="space-y-6">
      {/* Code Editor Header & Language Switcher */}
      <div className="rounded-3xl glass-card border border-[var(--theme-border)] shadow-xl overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 md:p-4 bg-[var(--theme-bg-subtle)] border-b border-[var(--theme-border)]">
          {/* Language Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
            {Object.keys(codeSnippets).map(lang => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedLang === lang 
                    ? 'bg-[var(--theme-btn-primary-bg)] text-white shadow-sm' 
                    : 'text-[var(--theme-text-muted)] hover:text-white hover:bg-[var(--theme-bg-subtle-hover)]'
                }`}
              >
                {langNames[lang] || lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5 font-bold"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
        </div>

        {/* Code Display Area */}
        <div className="p-4 md:p-6 bg-[#090d16] font-mono text-xs md:text-sm text-slate-200 overflow-x-auto custom-scrollbar leading-relaxed">
          <pre className="selection:bg-indigo-500/30">
            <code>{codeSnippets[selectedLang]}</code>
          </pre>
        </div>

        {/* Complexity Summary Bar */}
        <div className="p-4 bg-[var(--theme-bg-elevated)] border-t border-[var(--theme-border)] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-emerald-400" />
              <span className="text-[var(--theme-text-muted)] font-bold">Time:</span>
              <span className="font-mono font-black text-emerald-400">{problem.complexity?.time || 'O(1)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu size={15} className="text-indigo-400" />
              <span className="text-[var(--theme-text-muted)] font-bold">Space:</span>
              <span className="font-mono font-black text-indigo-400">{problem.complexity?.space || 'O(1)'}</span>
            </div>
          </div>

          <div className="text-[11px] text-[var(--theme-text-muted)] font-medium">
            {problem.complexity?.timeDetail || 'Optimal solution running in under 0.001 ms.'}
          </div>
        </div>
      </div>

      {/* Interactive Test Bench & In-Browser Runner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Custom Input Runner */}
        <div className="p-6 rounded-3xl glass-card border border-[var(--theme-border)] shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-wider text-[var(--theme-text-heading)] flex items-center gap-2">
              <Terminal size={16} className="text-indigo-400" /> Live Custom Input Tester
            </h3>
            <span className="text-[10px] font-mono text-[var(--theme-text-muted)]">
              {problem.inputSchema?.type === 'multi' ? 'k, w ≤ 1000 • n ≤ 10^9' : '1 ≤ x ≤ 1,000,000'}
            </span>
          </div>

          {/* Dynamic Input Form */}
          {problem.inputSchema?.type === 'multi' ? (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2.5">
                {problem.inputSchema.fields.map(f => (
                  <div key={f.key} className="space-y-1">
                    <label className="text-[10px] font-bold text-[var(--theme-text-muted)] uppercase block">
                      {f.key} ({f.label.split('(')[0].trim()})
                    </label>
                    <input
                      type="number"
                      min={f.min}
                      max={f.max}
                      value={multiInputs[f.key] ?? f.default}
                      onChange={(e) => setMultiInputs(prev => ({ ...prev, [f.key]: Number(e.target.value) }))}
                      className="w-full px-3 py-2 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] text-xs font-mono font-bold text-white focus:border-indigo-400 outline-none"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={handleRunCustom}
                className="w-full btn-premium py-2.5 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Play size={13} className="fill-current" /> Run Code with Custom Inputs
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="1000000"
                value={singleInput}
                onChange={(e) => setSingleInput(e.target.value)}
                placeholder="Enter coordinate x..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] focus:border-[var(--theme-border-accent)] outline-none text-sm font-mono font-black text-[var(--theme-text-heading)]"
              />
              <button
                onClick={handleRunCustom}
                className="btn-premium px-5 py-2.5 text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg"
              >
                <Play size={13} className="fill-current" /> Run Code
              </button>
            </div>
          )}

          {/* Execution Output */}
          {customResult && (
            <div className="p-4 rounded-2xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-2">
              {customResult.error ? (
                <div className="text-rose-400 text-xs font-bold">{customResult.error}</div>
              ) : (
                <>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--theme-text-muted)] font-bold">Standard Output:</span>
                    <span className="text-emerald-400 font-mono text-[10px]">Exec Time: {customResult.durationMs} ms</span>
                  </div>
                  <div className="text-3xl font-black font-mono text-emerald-400">
                    {customResult.ans}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--theme-text-muted)] border-t border-[var(--theme-border)] pt-2">
                    Evaluated for: <span className="text-[var(--theme-text-heading)] font-bold">{customResult.inputSummary}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Pre-Loaded Test Suite */}
        <div className="p-6 rounded-3xl glass-card border border-[var(--theme-border)] shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-wider text-[var(--theme-text-heading)] flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" /> Automated Test Suite ({problem.testCases?.length || 0} cases)
            </h3>
            <button
              onClick={handleRunAllTests}
              disabled={isRunningTests}
              className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5 font-bold"
            >
              <Play size={12} className="fill-current text-emerald-400" /> Run All Tests
            </button>
          </div>

          <div className="space-y-2 max-h-72 overflow-y-auto custom-scrollbar pr-1">
            {(testResults || problem.testCases || []).map((tc, idx) => {
              const inputLabel = tc.x !== undefined 
                ? `x = ${tc.x}` 
                : `k = ${tc.k}, n = ${tc.n}, w = ${tc.w}`;

              return (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] flex items-center justify-between text-xs font-mono"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--theme-text-muted)] w-6">#{idx + 1}</span>
                    <div>
                      <span className="text-[var(--theme-text-muted)]">Input:</span> <span className="font-bold text-[var(--theme-text-heading)]">{inputLabel}</span>
                      <span className="text-[var(--theme-text-muted)] ml-2">Expected:</span> <span className="font-bold text-emerald-400">{tc.expected}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {testResults && (
                      <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] flex items-center gap-1 ${
                        tc.passed ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                      }`}>
                        {tc.passed ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                        {tc.passed ? 'PASSED' : 'FAILED'}
                      </span>
                    )}
                    {!testResults && (
                      <span className="text-[10px] text-[var(--theme-text-muted)] truncate max-w-[130px]" title={tc.note}>
                        {tc.note}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
