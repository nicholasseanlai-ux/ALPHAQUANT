import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { ArrowUpRight, TrendingUp, Zap, Target } from 'lucide-react';
import { Page, Theme } from '../App';
import NumberTicker from './NumberTicker';

const MOCK_DATA = [
  { val: 400 }, { val: 600 }, { val: 550 }, { val: 800 }, 
  { val: 750 }, { val: 1100 }, { val: 900 }, { val: 1400 },
  { val: 1300 }, { val: 1800 }, { val: 1600 }, { val: 2200 }
];

const CATEGORIES = [
  'Finance', 'Consulting', 'Entrepreneurship', 'Stock Pitch', 'Case Competitions', 'Investing'
];

interface HeroProps {
  onNavigate: (page: Page) => void;
  theme: Theme;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden">
      {/* Background Decor Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] ${isDark ? 'opacity-10' : 'opacity-[0.05]'}`}></div>
        
        {/* Overlapping Bull and Bear */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Bear (Left - Red) */}
          <div className={`absolute top-1/2 left-0 -translate-x-1/3 -translate-y-1/2 transition-all duration-[20s] linear ${isDark ? 'opacity-20' : 'opacity-10'} filter drop-shadow-[0_0_80px_rgba(239,68,68,0.15)]`}>
            <img 
              src="https://api.iconify.design/game-icons:bear-face.svg?color=%23ef4444" 
              alt="Bear" 
              className="w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] rotate-[10deg]"
              style={{
                maskImage: 'radial-gradient(circle at center, white 30%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(circle at center, white 30%, transparent 80%)'
              }}
            />
          </div>
          
          {/* Bull (Right - Green) */}
          <div className={`absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 transition-all duration-[20s] linear ${isDark ? 'opacity-20' : 'opacity-10'} filter drop-shadow-[0_0_80px_rgba(34,197,94,0.15)]`}>
            <img 
              src="https://api.iconify.design/game-icons:bull.svg?color=%2322c55e" 
              alt="Bull" 
              className="w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] -rotate-[10deg]"
              style={{
                maskImage: 'radial-gradient(circle at center, white 30%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(circle at center, white 30%, transparent 80%)'
              }}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-3xl reveal-item">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold tracking-[0.2em] mb-6 uppercase transition-colors ${
            isDark ? 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400' : 'border-cyan-600/20 bg-cyan-600/5 text-cyan-600'
          }`}>
            <Zap className="w-3 h-3 animate-pulse" /> AlphaQuant Training System v4.0
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            LEARN FINANCE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600">
              DOMINATE MARKETS
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl mb-10 max-w-xl leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            The elite training ecosystem for high school analysts to master complex finance, crush global competitions, and build a career before college.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button 
              onClick={() => onNavigate('onboarding')}
              className={`px-8 py-4 font-bold rounded-sm flex items-center gap-2 transition-all active:scale-95 shadow-[0_0_25px_rgba(6,182,212,0.3)] ${
                isDark ? 'bg-cyan-500 text-[#020617] hover:bg-cyan-400' : 'bg-cyan-600 text-white hover:bg-cyan-700'
              }`}
            >
              FIND YOUR PATHWAY <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => onNavigate('courses')}
              className={`px-8 py-4 border font-bold rounded-sm transition-all active:scale-95 ${
                isDark ? 'border-white/10 bg-white/5 hover:border-white/20 text-white' : 'border-slate-300 bg-white hover:border-slate-400 text-slate-800'
              }`}
            >
              START LEARNING
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((chip, i) => (
              <span key={chip} className={`reveal-item px-3 py-1 border text-[10px] font-bold rounded-sm uppercase tracking-wider transition-all cursor-default ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:border-cyan-500/40 hover:text-cyan-300' : 'bg-slate-100 border-slate-200 text-slate-600 hover:border-cyan-600/40 hover:text-cyan-600'
              }`} style={{ animationDelay: `${i * 0.05}s` }}>
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Terminal Side */}
        <div className="hidden lg:block relative reveal-item">
          <div className={`glass-card rounded-xl p-6 border shadow-2xl relative transition-all duration-500 ${
            isDark ? 'bg-[#0f172a]/60 border-white/10 shadow-cyan-900/10' : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
            <div className={`flex items-center justify-between mb-6 border-b pb-4 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className={`text-[10px] font-mono flex items-center gap-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                   <Target className="w-3 h-3 text-cyan-500" /> LIVE_MARKET_TICKER.EXE
                </div>
              </div>
              <div className="text-[10px] font-mono text-cyan-500">STATUS: ACTIVE</div>
            </div>

            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MOCK_DATA}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="val" 
                    stroke="#06b6d4" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorVal)" 
                    isAnimationActive={true}
                    animationDuration={2000}
                  />
                  <XAxis hide />
                  <YAxis hide domain={['auto', 'auto']} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: isDark ? '#0f172a' : '#ffffff', border: `1px solid ${isDark ? '#1e293b' : '#e2e8f0'}`, fontSize: '10px' }} 
                    itemStyle={{ color: '#06b6d4' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className={`grid grid-cols-3 gap-4 border-t pt-6 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
              <div>
                <div className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Students</div>
                <div className={`text-xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <NumberTicker value={12402} />
                </div>
              </div>
              <div>
                <div className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Competitions</div>
                <div className={`text-xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <NumberTicker value={850} suffix="+" />
                </div>
              </div>
              <div>
                <div className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Scholarships</div>
                <div className="text-xl font-bold font-display text-cyan-500">
                  <NumberTicker value={2.4} prefix="$" suffix="M" decimals={1} />
                </div>
              </div>
            </div>

            <div className={`absolute -top-6 -right-6 w-32 h-32 border p-3 rounded shadow-xl hidden xl:block transition-all duration-500 ${
              isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
            }`}>
              <div className={`text-[10px] mb-2 font-bold uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Signal</div>
              <div className="flex items-center gap-2">
                <div className="p-1 bg-green-500/10 text-green-500 rounded">
                  <TrendingUp className="w-5 h-5 animate-pulse" />
                </div>
                <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>+12.4%</div>
              </div>
              <div className={`mt-2 h-1 w-full rounded ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                <div className="h-full w-2/3 bg-green-500 rounded transition-all duration-1000 ease-out" style={{ width: '66%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;