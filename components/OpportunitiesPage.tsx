
import React, { useState } from 'react';
import { Search, Filter, Calendar, BarChart3, Clock, ArrowUpRight, Trophy, Zap } from 'lucide-react';
import { Theme } from '../App';

type Category = 'All' | 'Finance' | 'Consulting' | 'Entrepreneurship' | 'Stock Pitch' | 'Case Competitions' | 'Investing';

interface Opportunity {
  id: string;
  title: string;
  description: string;
  category: Category[];
  difficulty: 'Beginner' | 'Intermediate' | 'Hard' | 'Elite';
  deadline: string;
  skills: string[];
}

const OPPORTUNITIES: Opportunity[] = [
  {
    id: '1',
    title: 'Global High School Stock Pitch Competition',
    description: 'Present a long-form investment thesis to a panel of hedge fund analysts and compete for a $10,000 seed fund.',
    category: ['Finance', 'Stock Pitch', 'Investing'],
    difficulty: 'Elite',
    deadline: 'Dec 15, 2024',
    skills: ['Analysis', 'Pitching', 'Valuation']
  },
  {
    id: '2',
    title: 'AlphaQuant Strategy Hackathon',
    description: 'Build a quantitative trading model using Python and historical market data. Top performers gain mentor access.',
    category: ['Finance', 'Investing'],
    difficulty: 'Hard',
    deadline: 'Jan 10, 2025',
    skills: ['Strategy', 'Quantitative', 'Programming']
  },
  {
    id: '3',
    title: 'Junior Consultant Challenge',
    description: 'Solve real-world business problems for Fortune 500 startups in this 48-hour case competition.',
    category: ['Consulting', 'Case Competitions'],
    difficulty: 'Intermediate',
    deadline: 'Feb 22, 2025',
    skills: ['Leadership', 'Problem Solving', 'Strategy']
  },
  {
    id: '4',
    title: 'Future Founders Venture Studio',
    description: 'A structured 8-week accelerator for student-led startups with focus on scalability and seed readiness.',
    category: ['Entrepreneurship'],
    difficulty: 'Intermediate',
    deadline: 'Mar 05, 2025',
    skills: ['Leadership', 'Pitching', 'Growth']
  },
  {
    id: '5',
    title: 'Macro-Economic Forecasting League',
    description: 'Predict global market movements based on Fed interest rate decisions and geopolitical shifts.',
    category: ['Finance', 'Investing'],
    difficulty: 'Hard',
    deadline: 'Nov 30, 2024',
    skills: ['Macro Analysis', 'Strategy']
  },
  {
    id: '6',
    title: 'Pre-College Private Equity Summit',
    description: 'Deep dive into LBO modeling and the mechanics of private equity. Requires pre-requisite course completion.',
    category: ['Finance'],
    difficulty: 'Elite',
    deadline: 'Apr 12, 2025',
    skills: ['Analysis', 'Modeling', 'Valuation']
  }
];

const CATEGORIES: Category[] = ['All', 'Finance', 'Consulting', 'Entrepreneurship', 'Stock Pitch', 'Case Competitions', 'Investing'];

const DifficultyBadge = ({ level }: { level: Opportunity['difficulty'] }) => {
  const colors = {
    'Beginner': 'text-green-500 bg-green-500/10 border-green-500/20',
    'Intermediate': 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    'Hard': 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    'Elite': 'text-red-500 bg-red-500/10 border-red-500/20'
  };
  return (
    <span className={`px-2 py-0.5 rounded text-[9px] font-bold border uppercase tracking-wider transition-all duration-300 ${colors[level]}`}>
      {level}
    </span>
  );
};

const OpportunitiesPage: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOpportunities = OPPORTUNITIES.filter(opp => {
    const matchesCategory = activeCategory === 'All' || opp.category.includes(activeCategory);
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          opp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-6 container mx-auto">
      <div className="mb-12 reveal-item">
        <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs mb-4 tracking-[0.4em]">
          <Zap className="w-3 h-3 animate-pulse" /> OPPORTUNITY_FEED.EXE
        </div>
        <h1 className={`text-4xl md:text-5xl font-bold font-display mb-4 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
          MARKET <span className="text-cyan-500">OPPORTUNITIES</span>
        </h1>
        <p className={`max-w-2xl text-sm leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          The central clearinghouse for high-stakes student business competitions and training challenges. Sort by domain or difficulty to find your next objective.
        </p>
      </div>

      <div className={`reveal-item glass-card p-4 rounded-lg border mb-10 flex flex-col lg:flex-row gap-6 items-center justify-between transition-all duration-500 ${
        isDark ? 'bg-slate-900/40 border-white/10' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-sm text-[10px] font-bold transition-all duration-300 border uppercase tracking-[0.2em] ${
                activeCategory === cat 
                  ? 'bg-cyan-500 text-[#020617] border-cyan-500 shadow-lg shadow-cyan-500/20 scale-105' 
                  : isDark 
                    ? 'bg-slate-900/50 text-slate-400 border-white/5 hover:border-cyan-500/50 hover:text-cyan-400'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:border-cyan-600/50 hover:text-cyan-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full lg:w-72 group">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 transition-colors group-focus-within:text-cyan-500 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
          <input 
            type="text"
            placeholder="Search objectives..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full rounded-sm px-10 py-2.5 text-[11px] focus:outline-none transition-all duration-300 border ${
              isDark 
                ? 'bg-slate-900/80 border-white/5 text-slate-200 focus:border-cyan-500/50 focus:bg-slate-900' 
                : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-cyan-500/50 focus:bg-white'
            }`}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredOpportunities.map((opp, idx) => (
          <div 
            key={opp.id} 
            className={`reveal-item group glass-card p-6 rounded-xl border flex flex-col relative overflow-hidden transition-all duration-300 ${
              isDark ? 'bg-[#0f172a]/80 border-white/5 hover:border-white/10' : 'bg-white border-slate-200'
            }`}
            style={{ animationDelay: `${(idx % 6) * 0.05}s` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg border transition-all duration-500 group-hover:scale-110 ${isDark ? 'bg-slate-800 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                <Trophy className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
              </div>
              <DifficultyBadge level={opp.difficulty} />
            </div>

            <h3 className={`text-lg font-bold font-display mb-3 transition-colors group-hover:text-cyan-500 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {opp.title}
            </h3>

            <p className={`text-xs leading-relaxed mb-6 flex-grow transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {opp.description}
            </p>

            <div className="space-y-4">
              <div className={`flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-cyan-500" /> {opp.deadline}
                </div>
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-3 h-3 text-blue-500" /> {opp.category[0]}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {opp.skills.map((skill) => (
                  <span key={skill} className={`px-2 py-1 border text-[8px] font-bold rounded-sm uppercase ${
                    isDark ? 'bg-slate-900/80 border-white/5 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-500'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>

              <button className={`w-full mt-4 py-3 border rounded-sm text-[10px] font-bold tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-2 uppercase ${
                isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20' : 'bg-slate-900 text-white border-slate-900'
              }`}>
                ENGAGE PROTOCOL <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunitiesPage;
