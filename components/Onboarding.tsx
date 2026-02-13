import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Zap, Target, TrendingUp, Briefcase, Rocket, Database, Globe, ArrowUpRight } from 'lucide-react';
import { Theme, Page } from '../App';

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    icon: React.ReactNode;
    value: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "WHICH BEST DESCRIBES YOUR PRIMARY INTEREST?",
    options: [
      { label: "MARKET MOVEMENTS", icon: <TrendingUp className="w-5 h-5" />, value: "markets" },
      { label: "BUILDING VENTURES", icon: <Rocket className="w-5 h-5" />, value: "building" },
      { label: "SOLVING STRATEGIES", icon: <Globe className="w-5 h-5" />, value: "advising" },
      { label: "QUANTITATIVE DATA", icon: <Database className="w-5 h-5" />, value: "data" }
    ]
  },
  {
    id: 2,
    text: "WHAT IS YOUR MAIN COMPETITIVE OBJECTIVE?",
    options: [
      { label: "WIN STOCK PITCHES", icon: <Zap className="w-5 h-5" />, value: "pitch" },
      { label: "CRUSH CASE COMPS", icon: <Target className="w-5 h-5" />, value: "case" },
      { label: "SCALE A STARTUP", icon: <Rocket className="w-5 h-5" />, value: "startup" },
      { label: "MASTER MODELING", icon: <Database className="w-5 h-5" />, value: "modeling" }
    ]
  },
  {
    id: 3,
    text: "SELECT YOUR CURRENT EXPERIENCE LEVEL.",
    options: [
      { label: "ABS. BEGINNER", icon: <span className="text-xs font-mono font-bold">L1</span>, value: "beginner" },
      { label: "COMPETITIVE", icon: <span className="text-xs font-mono font-bold">L2</span>, value: "intermediate" },
      { label: "ELITE / ADVANCED", icon: <span className="text-xs font-mono font-bold">L3</span>, value: "advanced" }
    ]
  }
];

interface OnboardingProps {
  theme: Theme;
  onNavigate: (page: Page) => void;
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ theme, onNavigate, onComplete }) => {
  const isDark = theme === 'dark';
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinishing, setIsFinishing] = useState(false);

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [QUESTIONS[step].id]: value });
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinishing(true);
      setTimeout(() => setIsFinishing(false), 2000); // Simulate "Analyzing"
      setStep(step + 1);
    }
  };

  if (step === QUESTIONS.length) {
    if (isFinishing) {
      return (
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-8"></div>
            <h2 className={`text-2xl font-bold font-display tracking-widest animate-pulse ${isDark ? 'text-white' : 'text-slate-900'}`}>ANALYZING_USER_PROFILE...</h2>
            <p className="text-slate-500 mt-2 font-mono text-xs uppercase">Connecting to AlphaQuant Core nodes</p>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-32 pb-20 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 text-green-500 text-[10px] font-bold tracking-[0.2em] mb-8 uppercase">
            <Zap className="w-3 h-3" /> Profile calibration complete
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold font-display mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
            SYSTEM <span className="text-cyan-500">SYNCHRONIZED</span>
          </h1>
          <p className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Based on your responses, we've identified the optimal entry vector for your AlphaQuant experience.
          </p>

          <div className={`glass-card p-10 rounded-2xl border mb-12 grid md:grid-cols-2 gap-10 text-left ${isDark ? 'bg-slate-900/60 border-white/5' : 'bg-white border-slate-200'}`}>
            <div>
              <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-2">Recommended Pathway</div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>INVESTING & MARKETS</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Focusing on market analysis and competitive stock pitching as your primary growth drivers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Initial Directives</div>
              {[
                "Complete 'Market Thinking 101'",
                "Register for Global Stock Pitch",
                "Unlock 'Valuation Basics' Module"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                  </div>
                  <span className={`text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={onComplete}
            className={`px-10 py-5 font-bold rounded-sm flex items-center gap-3 mx-auto transition-all active:scale-95 shadow-2xl shadow-cyan-500/20 ${
              isDark ? 'bg-cyan-500 text-[#020617] hover:bg-cyan-400' : 'bg-slate-900 text-white hover:bg-cyan-600'
            }`}
          >
            INITIALIZE TERMINAL ACCESS <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = QUESTIONS[step];
  const progress = ((step) / QUESTIONS.length) * 100;

  return (
    <div className="pt-32 pb-20 px-6 container mx-auto flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-2xl relative z-10">
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.3em]">Calibration Step 0{step + 1}</div>
            <div className="text-[10px] font-mono text-slate-500">{Math.round(progress)}%</div>
          </div>
          <div className={`h-1 w-full rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
            <div className="h-full bg-cyan-500 transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <h2 className={`text-3xl md:text-4xl font-bold font-display mb-12 tracking-tight text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {currentQuestion.text}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {currentQuestion.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleOptionSelect(opt.value)}
              className={`group p-6 rounded-xl border flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 ${
                isDark 
                  ? 'bg-slate-900/40 border-white/5 hover:border-cyan-500/50 hover:bg-slate-900/80 text-slate-400 hover:text-white' 
                  : 'bg-white border-slate-200 hover:border-cyan-600/50 hover:shadow-lg text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className={`p-3 rounded-lg transition-colors group-hover:scale-110 duration-500 ${isDark ? 'bg-white/5 text-cyan-500' : 'bg-slate-100 text-cyan-600'}`}>
                {opt.icon}
              </div>
              <span className="text-[11px] font-bold tracking-widest uppercase">{opt.label}</span>
            </button>
          ))}
        </div>

        {step > 0 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="mt-12 flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-cyan-500 transition-colors uppercase tracking-widest mx-auto"
          >
            <ChevronLeft className="w-3 h-3" /> Back
          </button>
        )}
      </div>
      
      {/* Peripheral background icons */}
      <div className="fixed inset-0 pointer-events-none opacity-5 flex items-center justify-between px-[-10vw] z-0 overflow-hidden">
         <img src="https://api.iconify.design/game-icons:bear-face.svg?color=%23ef4444" className="w-[40vw] max-w-[700px] h-auto -translate-x-1/4" alt="" />
         <img src="https://api.iconify.design/game-icons:bull.svg?color=%2322c55e" className="w-[40vw] max-w-[700px] h-auto translate-x-1/4" alt="" />
      </div>
    </div>
  );
};

export default Onboarding;