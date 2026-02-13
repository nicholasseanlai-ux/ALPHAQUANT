
import React from 'react';
import { Theme } from '../App';

const TechOverlay: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';

  const waterfallData = [
    "AAPL +2.4% $189.21 • TSLA -1.2% $231.50 • BTC +5.6% $62,100 • NVDA +4.1% $820.45 • AMZN +0.8% $175.20 •",
    "PE_RATIO: 24.5 • EPS_GROWTH: 12% • ALPHA_SIG: ACTIVE • VOLATILITY: LOW • SECTOR: TECH •",
    "MSFT +1.1% $402.12 • GOOGL +0.4% $142.30 • META +3.2% $485.60 • NFLX -0.5% $605.10 •",
  ];

  return (
    <div className={`fixed inset-0 pointer-events-none z-[-10] overflow-hidden transition-opacity duration-1000 ${isDark ? 'opacity-30' : 'opacity-40'}`}>
      {/* Waterfall Gutters */}
      <div className="waterfall-gutter left-2 hidden lg:flex">
        <div className="waterfall-content" style={{ animationDelay: '0s' }}>{waterfallData[0]} {waterfallData[0]}</div>
      </div>
      <div className="waterfall-gutter left-12 hidden xl:flex">
        <div className="waterfall-content" style={{ animationDelay: '5s' }}>{waterfallData[1]} {waterfallData[1]}</div>
      </div>
      <div className="waterfall-gutter right-2 hidden lg:flex">
        <div className="waterfall-content" style={{ animationDelay: '2s' }}>{waterfallData[2]} {waterfallData[2]}</div>
      </div>

      {/* Radial gradients for 'UI spots' */}
      <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] blur-[150px] transition-colors ${isDark ? 'bg-blue-600/10' : 'bg-blue-400/10'}`}></div>
      <div className={`absolute top-[20%] right-[-5%] w-[30%] h-[30%] blur-[150px] transition-colors ${isDark ? 'bg-cyan-600/10' : 'bg-cyan-400/10'}`}></div>
      
      {/* Decorative Line Patterns with Staggered Energy Pulsing Intersections */}
      <svg className="absolute w-full h-full opacity-10">
        <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Main Grid Lines */}
          <path d="M 120 0 L 0 0 0 120 M 60 0 L 60 120 M 0 60 L 120 60" fill="none" stroke={isDark ? "white" : "black"} strokeWidth="0.5"/>
          
          {/* Energy Pulsing Intersections - Asynchronous ripples across the field */}
          <circle cx="0" cy="0" r="1.2" className="pulse-dot" />
          <circle cx="120" cy="0" r="1.2" className="pulse-dot delay-2" />
          <circle cx="0" cy="120" r="1.2" className="pulse-dot delay-4" />
          <circle cx="120" cy="120" r="1.2" className="pulse-dot delay-1" />
          <circle cx="60" cy="0" r="1.2" className="pulse-dot delay-3" />
          <circle cx="0" cy="60" r="1.2" className="pulse-dot delay-1" />
          <circle cx="60" cy="60" r="1.2" className="pulse-dot delay-2" />
          <circle cx="120" cy="60" r="1.2" className="pulse-dot delay-4" />
          <circle cx="60" cy="120" r="1.2" className="pulse-dot delay-3" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Crosshair accents in corners */}
      <div className={`absolute top-10 left-10 w-8 h-8 border-t border-l ${isDark ? 'border-white/20' : 'border-slate-300'}`}></div>
      <div className={`absolute top-10 right-10 w-8 h-8 border-t border-r ${isDark ? 'border-white/20' : 'border-slate-300'}`}></div>
      <div className={`absolute bottom-10 left-10 w-8 h-8 border-b border-l ${isDark ? 'border-white/20' : 'border-slate-300'}`}></div>
      <div className={`absolute bottom-10 right-10 w-8 h-8 border-b border-r ${isDark ? 'border-white/20' : 'border-slate-300'}`}></div>
    </div>
  );
};

export default TechOverlay;
