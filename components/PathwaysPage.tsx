
import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Rocket, 
  Database, 
  BarChart4, 
  ArrowRight, 
  Zap, 
  ChevronRight,
  ShieldCheck,
  Cpu,
  Globe
} from 'lucide-react';
import { Theme } from '../App';

interface PathwayItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  milestones: string[];
  opps: string[];
  courses: string[];
}

const PATHWAYS: PathwayItem[] = [
  {
    id: 'p1',
    name: 'Investment Banking',
    description: 'Master the mechanics of high-stakes capital allocation and corporate valuation.',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'cyan',
    milestones: ['Fundamentals', 'Competitive Pitching', 'LBO Modeling'],
    opps: ['Stock Pitch Comp', 'M&A Hackathon'],
    courses: ['Valuation Basics', 'Cap Tables']
  },
  {
    id: 'p2',
    name: 'Strategic Consulting',
    description: 'Solve structural challenges for global enterprises through rigorous logical frameworks.',
    icon: <Globe className="w-8 h-8" />,
    color: 'blue',
    milestones: ['Market Sizing', 'Framework Design', 'Strategic Advisory'],
    opps: ['Case Competition Mastery', 'Junior Consultant Challenge'],
    courses: ['Research Thinking', 'Case Prep']
  },
  {
    id: 'p3',
    name: 'Venture Capital & Entrepreneurship',
    description: 'Identify, build, and scale high-growth ventures from zero to institutional exit.',
    icon: <Rocket className="w-8 h-8" />,
    color: 'indigo',
    milestones: ['Ideation', 'Seed Readiness', 'Series-A Simulation'],
    opps: ['Future Founders Studio', 'Venture Summit'],
    courses: ['Cap Tables', 'Market Thinking']
  },
  {
    id: 'p4',
    name: 'Business Analytics',
    description: 'Drive strategic alpha through quantitative data models and predictive intelligence.',
    icon: <Database className="w-8 h-8" />,
    color: 'purple',
    milestones: ['Data Structures', 'Predictive Modeling', 'System Architecture'],
    opps: ['Strategy Hackathon', 'Macro Forecasting'],
    courses: ['Research Thinking', 'Analyst 4.0']
  },
  {
    id: 'p5',
    name: 'Investing & Public Markets',
    description: 'Navigate global liquid markets with analytical precision and risk-adjusted strategies.',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'emerald',
    milestones: ['Alpha Discovery', 'Portfolio Construction', 'Risk Management'],
    opps: ['Stock Pitch Comp', 'Forecasting League'],
    courses: ['Market Thinking 101', 'Valuation Basics']
  }
];

// Define Props interface for PathwayCard
interface PathwayCardProps {
  item: PathwayItem;
  theme: Theme;
}

// Fixed: Using React.FC to handle standard React component props like 'key' correctly in JSX
const PathwayCard: React.FC<PathwayCardProps> = ({ item, theme }) => {
  const isDark = theme === 'dark';
  
  const colors: Record<string, string> = {
    cyan: 'text-cyan-500 border-cyan-500/20 bg-cyan-500/5',
    blue: 'text-blue-500 border-blue-500/20 bg-blue-500/5',
    indigo: 'text-indigo-500 border-indigo-500/20 bg-indigo-500/5',
    purple: 'text-purple-500 border-purple-500/20 bg-purple-500/5',
    emerald: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5'
  };

  const accentColor: Record<string, string> = {
    cyan: 'bg-cyan-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-500',
    emerald: 'bg-emerald-500'
  };

  return (
    <div className={`group relative glass-card p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
      isDark ? 'bg-slate-900/40 border-white/5 hover:border-white/20' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
    }`}>
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
        <BarChart4 className="w-48 h-48 -rotate-12 transform translate-x-12 translate-y-[-24px]" />
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className={`p-4 rounded-xl border ${colors[item.color]}`}>
          {item.icon}
        </div>
        <div className="flex gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity">
           <Cpu className="w-4 h-4" />
           <ShieldCheck className="w-4 h-4" />
        </div>
      </div>

      <h3 className={`text-2xl font-bold font-display mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {item.name}
      </h3>
      
      <p className={`text-sm leading-relaxed mb-10 transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {item.description}
      </p>

      {/* Roadmap Elements */}
      <div className="space-y-8 relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-800/50 hidden sm:block"></div>
        
        {/* Progression */}
        <div className="flex flex-col gap-4">
          <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            PROG_SEQUENCE
          </span>
          <div className="flex flex-wrap gap-2">
            {item.milestones.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-[10px] font-bold border ${
                  isDark ? 'bg-slate-900/80 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}>
                  {m}
                </span>
                {i < item.milestones.length - 1 && <ArrowRight className="w-3 h-3 text-slate-700" />}
              </div>
            ))}
          </div>
        </div>

        {/* Connections */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
             <span className={`text-[9px] font-bold tracking-widest uppercase ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>RECOM_OPPS</span>
             <ul className="space-y-1">
                {item.opps.map((o, i) => (
                  <li key={i} className={`text-[11px] flex items-center gap-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <ChevronRight className="w-3 h-3 text-cyan-500" /> {o}
                  </li>
                ))}
             </ul>
          </div>
          <div className="space-y-2">
             <span className={`text-[9px] font-bold tracking-widest uppercase ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>CORE_MODULES</span>
             <ul className="space-y-1">
                {item.courses.map((c, i) => (
                  <li key={i} className={`text-[11px] flex items-center gap-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <ChevronRight className="w-3 h-3 text-blue-500" /> {c}
                  </li>
                ))}
             </ul>
          </div>
        </div>

        {/* Engage CTA */}
        <button className={`w-full py-4 mt-6 border rounded-lg text-xs font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-3 transition-all ${
          isDark 
            ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30 text-white' 
            : 'bg-slate-900 text-white hover:bg-cyan-600 border-slate-900 hover:border-cyan-600'
        }`}>
          INITIALIZE PATHWAY <Zap className="w-4 h-4 fill-current" />
        </button>
      </div>

      {/* Side Color Strip */}
      <div className={`absolute top-0 left-0 w-1 h-full opacity-50 group-hover:opacity-100 transition-opacity ${accentColor[item.color]}`}></div>
    </div>
  );
};

const PathwaysPage: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="pt-32 pb-20 px-6 container mx-auto relative overflow-hidden">
      {/* Background visual - Bull and Bear watermarks */}
      <div className="absolute top-[20%] left-[-5%] opacity-5 pointer-events-none select-none">
        <img 
          src="https://api.iconify.design/game-icons:bear-face.svg?color=%23ef4444" 
          alt="" 
          className="w-[600px] h-[600px] grayscale" 
        />
      </div>
      <div className="absolute bottom-0 right-[-5%] opacity-5 pointer-events-none select-none">
        <img 
          src="https://api.iconify.design/game-icons:bull.svg?color=%2322c55e" 
          alt="" 
          className="w-[600px] h-[600px] grayscale" 
        />
      </div>

      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs mb-4 tracking-[0.4em]">
          <Zap className="w-3 h-3" /> STRATEGIC_ROADMAP_v1.0
        </div>
        <h1 className={`text-5xl md:text-7xl font-bold font-display mb-8 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
          SELECT YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            DOMINANCE TRACK
          </span>
        </h1>
        <p className={`max-w-2xl text-lg leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          The AlphaQuant pathway system aligns your skill development with real-world institutional directions. Choose a track to visualize the exact sequence of training and competition required for elite mastery.
        </p>
      </div>

      {/* Pathway Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {PATHWAYS.map(item => (
          <PathwayCard key={item.id} item={item} theme={theme} />
        ))}

        {/* Custom Track Card */}
        <div className={`p-8 rounded-2xl border flex flex-col items-center justify-center text-center gap-6 border-dashed transition-all ${
          isDark ? 'bg-slate-900/20 border-white/10 text-slate-500' : 'bg-slate-50 border-slate-300 text-slate-400'
        }`}>
          <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center opacity-40">
            <Zap className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display mb-2 uppercase tracking-widest">Custom Quant Track</h3>
            <p className="text-sm">Connect with a mentor to build a hyper-specialized training pathway.</p>
          </div>
          <button className={`text-xs font-bold tracking-widest underline underline-offset-8 uppercase hover:text-cyan-500 transition-colors`}>
            Request Analysis
          </button>
        </div>
      </div>

      {/* Bottom Status Info */}
      <div className={`mt-24 p-6 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="flex items-center gap-8">
           <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Active Tracks</span>
              <span className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>05</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Available Modules</span>
              <span className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>48+</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Network Capacity</span>
              <span className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>High</span>
           </div>
        </div>
        <div className={`px-4 py-2 rounded font-mono text-[10px] tracking-tight ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
           SYSTEM_LOAD_BALANCED: STABLE
        </div>
      </div>
    </div>
  );
};

export default PathwaysPage;
