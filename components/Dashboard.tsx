import React, { useState } from 'react';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Trophy, 
  ArrowUpRight, 
  ChevronRight,
  Shield,
  Activity,
  Award,
  Globe,
  Share2,
  Check,
  Github,
  Link2
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Theme, Page } from '../App';
import NumberTicker from './NumberTicker';
import GitHubModal from './GitHubModal';

const PERFORMANCE_DATA = [
  { time: 'Week 1', score: 400 },
  { time: 'Week 2', score: 600 },
  { time: 'Week 3', score: 550 },
  { time: 'Week 4', score: 800 },
  { time: 'Week 5', score: 950 },
];

interface DashboardProps {
  theme: Theme;
  onNavigate: (page: Page) => void;
}

const BarChart4 = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 3v18h18"/><path d="M13 17V9"/><path d="M18 17V5"/><path d="M8 17v-3"/>
  </svg>
);

const Dashboard: React.FC<DashboardProps> = ({ theme, onNavigate }) => {
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);
  const [isGithubModalOpen, setGithubModalOpen] = useState(false);
  const [isSynced, setIsSynced] = useState(false);

  const handleShare = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSyncSuccess = () => {
    setIsSynced(true);
  };

  return (
    <div className="pt-32 pb-20 px-6 container mx-auto">
      <GitHubModal 
        isOpen={isGithubModalOpen} 
        onClose={() => setGithubModalOpen(false)} 
        theme={theme} 
        onConnect={handleSyncSuccess} 
      />

      {/* Dashboard Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 reveal-item">
        <div>
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs mb-3 tracking-[0.4em]">
            <Zap className="w-3 h-3 animate-pulse" /> COMMAND_CENTER.EXE
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <h1 className={`text-4xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
              WELCOME BACK, <span className="text-cyan-500">ANALYST DOE</span>
            </h1>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleShare}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  copied 
                    ? 'bg-green-500/10 border-green-500 text-green-500' 
                    : isDark 
                      ? 'bg-white/5 border-white/10 text-slate-400 hover:border-cyan-500 hover:text-cyan-500 hover:bg-white/10' 
                      : 'bg-slate-100 border-slate-200 text-slate-600 hover:border-cyan-600 hover:text-cyan-600 hover:bg-white'
                }`}
              >
                {copied ? <Check className="w-3 h-3" /> : <Share2 className="w-3 h-3" />}
                {copied ? 'LINK_COPIED' : 'SHARE_ALPHA_PATH'}
              </button>
              
              <button 
                onClick={() => setGithubModalOpen(true)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  isSynced 
                    ? 'bg-green-500/10 border-green-500 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]' 
                    : isDark 
                      ? 'bg-slate-900 border-cyan-500/30 text-cyan-500 hover:border-cyan-500 hover:bg-cyan-500 hover:text-[#020617] shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {isSynced ? <Check className="w-3 h-3" /> : <Github className="w-3 h-3" />}
                {isSynced ? 'REPO_SYNCED' : 'UPLOAD_TO_GITHUB'}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
             <p className={`text-xs transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
               System status: Operational.
             </p>
             <div className="h-1 w-1 rounded-full bg-slate-700"></div>
             <p className={`text-xs font-mono uppercase tracking-tighter ${isSynced ? 'text-green-500' : 'text-slate-500'}`}>
               GITHUB_SYNC: {isSynced ? 'CONNECTED_TO_MASTER' : 'DISCONNECTED'}
             </p>
          </div>
        </div>

        {/* Market Mood Visual */}
        <div className={`p-6 rounded-2xl border flex items-center gap-6 transition-all duration-500 hover:border-cyan-500/30 ${isDark ? 'bg-slate-900/60 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div className="flex flex-col items-center">
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Alpha Sentiment</div>
             <div className="flex items-center gap-4">
                <img src="https://api.iconify.design/game-icons:bear-face.svg?color=%23ef4444" className="w-5 h-5 opacity-40 grayscale" alt="Bear" />
                <div className={`h-1.5 w-32 rounded-full relative ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                   <div className="absolute top-0 left-[65%] w-3 h-3 bg-cyan-500 rounded-full -translate-x-1/2 -translate-y-1/4 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></div>
                </div>
                <img src="https://api.iconify.design/game-icons:bull.svg?color=%2322c55e" className="w-6 h-6 animate-bounce" style={{ animationDuration: '3s' }} alt="Bull" />
             </div>
          </div>
          <div className="h-10 w-px bg-slate-800 mx-2 hidden sm:block"></div>
          <div className="hidden sm:block">
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Rank</div>
             <div className="text-xl font-bold font-display text-cyan-500">
               <NumberTicker value={412} prefix="#" />
             </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Main Column - Left (8/12) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Pathway Progress Card */}
          <div className={`reveal-item delay-1 p-8 rounded-2xl border relative overflow-hidden transition-all duration-500 hover:border-cyan-500/30 ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-center justify-between mb-8">
              <h3 className={`text-xl font-bold font-display flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Activity className="w-5 h-5 text-cyan-500 animate-pulse" /> PATHWAY: INVESTING & MARKETS
              </h3>
              <button 
                onClick={() => onNavigate('pathways')}
                className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest hover:underline"
              >
                View Roadmap
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-0 relative">
               <div className="flex items-center gap-4 z-10 w-full sm:w-auto mb-6 sm:mb-0">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Shield className="w-6 h-6 text-[#020617]" />
                  </div>
                  <div className="sm:hidden">
                    <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Fundamentals</div>
                    <div className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">COMPLETE</div>
                  </div>
               </div>
               <div className={`flex-grow h-0.5 mx-[-1px] hidden sm:block ${isDark ? 'bg-cyan-500' : 'bg-cyan-500'}`}></div>
               <div className="flex items-center gap-4 z-10 w-full sm:w-auto mb-6 sm:mb-0">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <TrendingUp className="w-6 h-6 text-[#020617]" />
                  </div>
                  <div className="sm:hidden">
                    <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Alpha Discovery</div>
                    <div className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">COMPLETE</div>
                  </div>
               </div>
               <div className={`flex-grow h-0.5 mx-[-1px] hidden sm:block ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
               <div className="flex items-center gap-4 z-10 w-full sm:w-auto mb-6 sm:mb-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${isDark ? 'bg-slate-900 border-cyan-500 text-cyan-500' : 'bg-white border-cyan-500 text-cyan-600 shadow-lg'}`}>
                    <Target className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="sm:hidden">
                    <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Competitive Pitching</div>
                    <div className="text-[10px] text-cyan-500 font-bold uppercase tracking-tighter">IN PROGRESS</div>
                  </div>
               </div>
               <div className={`flex-grow h-0.5 mx-[-1px] hidden sm:block ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
               <div className="flex items-center gap-4 z-10 w-full sm:w-auto">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-dashed ${isDark ? 'bg-transparent border-slate-700 text-slate-700' : 'bg-transparent border-slate-300 text-slate-300'}`}>
                    <Award className="w-6 h-6 opacity-30" />
                  </div>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-6">
                 <h3 className={`text-sm font-bold font-display flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    <Trophy className="w-4 h-4 text-cyan-500" /> RECOMMENDED_MATCHES
                 </h3>
              </div>
              <div className="space-y-4">
                 {[
                   { title: "Global Stock Pitch Comp", diff: "Elite", deadline: "Dec 15" },
                   { title: "Macro Forecasting League", diff: "Hard", deadline: "Nov 30" }
                 ].map((opp, i) => (
                   <div key={i} className={`p-4 rounded-xl border transition-all hover:border-cyan-500/30 group cursor-pointer ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                      <div className="flex justify-between items-start mb-2">
                         <h4 className={`text-xs font-bold group-hover:text-cyan-400 transition-colors ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{opp.title}</h4>
                         <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">{opp.diff}</span>
                      </div>
                      <div className="text-[9px] text-slate-500 font-mono">DEADLINE: {opp.deadline}</div>
                   </div>
                 ))}
              </div>
            </div>

            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-6">
                 <h3 className={`text-sm font-bold font-display flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    <BookOpen className="w-4 h-4 text-blue-500" /> CONTINUE_TRAINING
                 </h3>
              </div>
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-cyan-500/20' : 'bg-cyan-50/50 border-cyan-200'}`}>
                 <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Advanced DCF Modeling</h4>
                 <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500" style={{ width: '65%' }}></div>
                 </div>
                 <button className="w-full mt-6 py-2 bg-white text-[#020617] text-[10px] font-bold rounded uppercase">RESUME_SESSION</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column - Right (4/12) */}
        <div className="lg:col-span-4 space-y-8">
          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
             <h3 className={`text-sm font-bold font-display flex items-center gap-2 mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Activity className="w-4 h-4 text-cyan-500" /> PROFICIENCY_INDEX
             </h3>
             <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={PERFORMANCE_DATA}>
                    <Area type="monotone" dataKey="score" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.1} />
                    <Tooltip contentStyle={{ backgroundColor: isDark ? '#0f172a' : '#fff', fontSize: '10px' }} />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
             <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                   <div className="text-[10px] text-slate-500 uppercase mb-1">Growth</div>
                   <div className="text-lg font-bold text-green-500">+24.5%</div>
                </div>
                <div className="text-center">
                   <div className="text-[10px] text-slate-500 uppercase mb-1">Accuracy</div>
                   <div className="text-lg font-bold text-cyan-500">92%</div>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
             {[
               { icon: <Target className="w-4 h-4" />, label: "Submit Stock Pitch", color: "cyan" },
               { icon: <BarChart4 className="w-4 h-4" />, label: "Market Analysis Lab", color: "blue" },
               { icon: <Globe className="w-4 h-4" />, label: "Mentor Network", color: "indigo" }
             ].map((action, i) => (
               <button key={i} className={`p-4 rounded-xl border flex items-center justify-between group transition-all duration-300 ${isDark ? 'bg-slate-900/40 border-white/5 hover:bg-slate-900/60 hover:border-white/20' : 'bg-white border-slate-200 hover:shadow-lg'}`}>
                  <div className="flex items-center gap-3">
                     <div className={`p-2 rounded-lg bg-${action.color}-500/10 text-${action.color}-500 group-hover:scale-110 transition-transform`}>
                        {action.icon}
                     </div>
                     <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{action.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600" />
               </button>
             ))}
          </div>

          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
              <h3 className={`text-sm font-bold font-display mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>BADGE_COLLECTION</h3>
              <div className="flex flex-wrap gap-4">
                 {[1, 2, 3].map((badge) => (
                   <div key={badge} className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center border border-cyan-500/30 hover:scale-110 transition-transform">
                      <Award className="w-6 h-6" />
                   </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-800 flex items-center justify-center text-slate-700 text-[10px] font-bold">
                    +12
                 </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;