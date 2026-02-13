
import React from 'react';
import { Trophy, BookOpen, Map, ChevronRight } from 'lucide-react';
import { Page, Theme } from '../App';

interface EntryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'cyan' | 'blue' | 'indigo';
  tags: string[];
  onClick: () => void;
  theme: Theme;
  index: number;
}

const EntryCard: React.FC<EntryCardProps> = ({ title, description, icon, color, tags, onClick, theme, index }) => {
  const isDark = theme === 'dark';
  
  const colorMap = {
    cyan: isDark ? 'from-cyan-500/20 text-cyan-400 border-cyan-500/30' : 'from-cyan-100 text-cyan-700 border-cyan-200',
    blue: isDark ? 'from-blue-500/20 text-blue-400 border-blue-500/30' : 'from-blue-100 text-blue-700 border-blue-200',
    indigo: isDark ? 'from-indigo-500/20 text-indigo-400 border-indigo-500/30' : 'from-indigo-100 text-indigo-700 border-indigo-200'
  };

  const glowColorMap = {
    cyan: 'bg-cyan-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500'
  }

  return (
    <div 
      onClick={onClick}
      className={`reveal-item group glass-card rounded-xl p-8 border flex flex-col h-full cursor-pointer relative overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-[#0f172a]/60 border-white/5 hover:border-white/10' : 'bg-white border-slate-200 shadow-sm'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br border border-white/5 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${colorMap[color].split(' ')[0]}`}>
        {icon}
      </div>
      
      <h3 className={`text-2xl font-bold font-display mb-4 transition-colors ${isDark ? 'text-white' : 'text-slate-900 group-hover:text-cyan-500'}`}>
        {title}
      </h3>
      
      <p className={`leading-relaxed mb-8 flex-grow transition-colors text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 h-8">
        {tags.map((tag, i) => (
          <span key={tag} className={`text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            // {tag}
          </span>
        ))}
      </div>

      <button className={`flex items-center gap-2 text-[11px] font-bold tracking-widest group-hover:gap-4 transition-all duration-300 w-fit ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-800 group-hover:text-cyan-600'}`}>
        INITIALIZE MODULE <ChevronRight className={`w-3 h-3 transition-transform group-hover:translate-x-1 ${isDark ? colorMap[color].split(' ')[1] : 'text-cyan-600'}`} />
      </button>

      <div className={`absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity ${glowColorMap[color]}`}></div>
    </div>
  );
};

interface EntrySectionsProps {
  onNavigate: (page: Page) => void;
  theme: Theme;
}

const EntrySections: React.FC<EntrySectionsProps> = ({ onNavigate, theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 relative overflow-hidden transition-colors ${isDark ? 'bg-[#020617]' : 'bg-slate-50'}`}>
      <div className={`absolute top-0 left-0 w-full h-px ${isDark ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'bg-slate-200'}`}></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-item">
          <div>
            <h2 className={`text-4xl font-bold font-display mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>PLATFORM MODULES</h2>
            <div className="w-20 h-1 bg-cyan-500 transition-all duration-700 hover:w-32"></div>
          </div>
          <p className={`max-w-md text-[10px] uppercase tracking-[0.4em] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            System nodes operational. Select objective to begin training protocol.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <EntryCard 
            title="Opportunities"
            description="Access premium case competitions, stock pitch challenges, and exclusive hackathons designed for high-performing students."
            icon={<Trophy className={`w-7 h-7 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />}
            color="cyan"
            tags={['Global Competitions', 'Real Capital Stakes', 'Industry Awards']}
            onClick={() => onNavigate('opportunities')}
            theme={theme}
            index={0}
          />
          <EntryCard 
            title="Courses / Prep"
            description="Advanced university-level financial modeling, LBO analysis, and macro-strategy training designed to bypass beginner basics."
            icon={<BookOpen className={`w-7 h-7 ${isDark ? 'text-blue-400' : 'text-blue-700'}`} />}
            color="blue"
            tags={['Quant Modeling', 'Macro Economics', 'DCF Mastery']}
            onClick={() => onNavigate('courses')}
            theme={theme}
            index={1}
          />
          <EntryCard 
            title="Pathways"
            description="Follow a structured business direction with curated tracks for Investment Banking, PE, or Venture Capital starting today."
            icon={<Map className={`w-7 h-7 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`} />}
            color="indigo"
            tags={['Career Blueprints', 'Mentor Network', 'Roadmap 2028']}
            onClick={() => onNavigate('pathways')}
            theme={theme}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default EntrySections;
