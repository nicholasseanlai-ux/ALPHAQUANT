
import React from 'react';
import { BookOpen, Clock, Activity, Play, CheckCircle2, Zap, BarChart3, Presentation, Target } from 'lucide-react';
import { Theme } from '../App';

interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Fundamentals' | 'Advanced' | 'Elite';
  time: string;
  skills: string[];
}

interface TrainingSection {
  title: string;
  icon: React.ReactNode;
  description: string;
  courses: Course[];
}

const TRAINING_DATA: TrainingSection[] = [
  {
    title: 'Finance Fundamentals',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Master the core mechanics of how capital moves and how businesses are actually built.',
    courses: [
      {
        id: 'ff-1',
        title: 'Market Thinking 101',
        description: 'Understand macro shifts and how global events trigger specific market reactions.',
        level: 'Fundamentals',
        time: '4h 20m',
        skills: ['Macro Analysis', 'Strategy']
      },
      {
        id: 'ff-2',
        title: 'Valuation Basics',
        description: 'Learn why a company is worth what it is using real-world enterprise metrics.',
        level: 'Fundamentals',
        time: '6h 15m',
        skills: ['Analysis', 'Modeling']
      },
      {
        id: 'ff-3',
        title: 'Understanding Cap Tables',
        description: 'Navigate the complex ownership structures of early-stage startups to public giants.',
        level: 'Advanced',
        time: '3h 45m',
        skills: ['Equity Strategy', 'Analysis']
      }
    ]
  },
  {
    title: 'Competition Prep',
    icon: <Target className="w-6 h-6" />,
    description: 'Specialized frameworks to help you dominate global student competitions.',
    courses: [
      {
        id: 'cp-1',
        title: 'Stock Pitch Framework',
        description: 'A 5-step system to build a long-form investment thesis that analysts respect.',
        level: 'Advanced',
        time: '8h 30m',
        skills: ['Pitching', 'Valuation', 'Storytelling']
      },
      {
        id: 'cp-2',
        title: 'Case Competition Mastery',
        description: 'Structured problem solving for high-pressure 48-hour business challenges.',
        level: 'Elite',
        time: '12h 00m',
        skills: ['Leadership', 'Strategy', 'Analysis']
      },
      {
        id: 'cp-3',
        title: 'Executive Presentation Skills',
        description: 'The art of defending your strategy under direct questioning from industry pros.',
        level: 'Elite',
        time: '5h 10m',
        skills: ['Pitching', 'Communication']
      }
    ]
  },
  {
    title: 'Analyst Skills',
    icon: <Activity className="w-6 h-6" />,
    description: 'Technical proficiencies required to function at an institutional level.',
    courses: [
      {
        id: 'as-1',
        title: 'Research Thinking',
        description: 'Going beyond surface news to find the data that actually moves markets.',
        level: 'Fundamentals',
        time: '5h 40m',
        skills: ['Information Architecture', 'Analysis']
      },
      {
        id: 'as-2',
        title: 'Financial Storytelling',
        description: 'Turning raw spreadsheets into compelling strategic narratives for stakeholders.',
        level: 'Advanced',
        time: '7h 25m',
        skills: ['Communication', 'Strategy']
      },
      {
        id: 'as-3',
        title: 'Strategic Analysis 4.0',
        description: 'Advanced competitive benchmarking and sector analysis methodologies.',
        level: 'Elite',
        time: '10h 15m',
        skills: ['Analysis', 'Strategy', 'Leadership']
      }
    ]
  }
];

interface CourseCardProps {
  course: Course;
  theme: Theme;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, theme }) => {
  const isDark = theme === 'dark';
  
  const levelColors = {
    'Fundamentals': 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    'Advanced': 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    'Elite': 'text-purple-500 bg-purple-500/10 border-purple-500/20'
  };

  return (
    <div className={`glass-card p-6 rounded-xl border transition-all duration-300 flex flex-col hover:border-cyan-500/30 ${
      isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2 py-0.5 rounded text-[8px] font-bold border uppercase tracking-wider ${levelColors[course.level]}`}>
          {course.level}
        </span>
        <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
          <Clock className="w-3 h-3 text-cyan-500" /> {course.time}
        </div>
      </div>

      <h4 className={`text-lg font-bold font-display mb-2 transition-colors group-hover:text-cyan-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {course.title}
      </h4>
      
      <p className={`text-xs leading-relaxed mb-6 flex-grow ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {course.description}
      </p>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {course.skills.map((skill) => (
            <span key={skill} className={`px-2 py-0.5 border text-[8px] font-bold rounded-sm uppercase ${
              isDark ? 'bg-slate-900 border-white/5 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400'
            }`}>
              {skill}
            </span>
          ))}
        </div>
        
        <button className={`w-full py-2.5 rounded-sm text-[10px] font-bold tracking-[0.3em] transition-all flex items-center justify-center gap-2 uppercase border ${
          isDark 
            ? 'bg-cyan-500/5 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-[#020617] hover:border-cyan-500' 
            : 'bg-slate-900 text-white border-slate-900 hover:bg-cyan-600'
        }`}>
          INITIALIZE TRAINING <Play className="w-3 h-3 fill-current" />
        </button>
      </div>
    </div>
  );
};

const CoursesPage: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="pt-32 pb-20 px-6 container mx-auto">
      <div className="mb-16 text-center lg:text-left reveal-item">
        <div className="flex items-center justify-center lg:justify-start gap-2 text-cyan-500 font-mono text-xs mb-4 tracking-[0.4em]">
          <Zap className="w-3 h-3 animate-pulse" /> TRAINING_LAB_ACCESS.OK
        </div>
        <h1 className={`text-4xl md:text-6xl font-bold font-display mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
          COURSES & <span className="text-cyan-500">PREP MODULES</span>
        </h1>
        <p className={`max-w-2xl mx-auto lg:mx-0 text-sm leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Zero filler. Zero fluff. Institutional-grade training modules built specifically to prepare you for global business competitions and long-term financial dominance.
        </p>
      </div>

      <div className="space-y-24">
        {TRAINING_DATA.map((section, idx) => (
          <div key={idx} className="relative reveal-item" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-10 border-l-2 border-cyan-500 pl-6">
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/80 border-white/5 text-cyan-400' : 'bg-white border-slate-200 text-cyan-600 shadow-sm'}`}>
                {section.icon}
              </div>
              <div>
                <h2 className={`text-2xl font-bold font-display tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {section.title.toUpperCase()}
                </h2>
                <p className={`text-[10px] mt-1 uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  {section.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.courses.map(course => (
                <CourseCard key={course.id} course={course} theme={theme} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-32 p-12 rounded-xl border text-center relative overflow-hidden transition-all duration-700 ${
        isDark ? 'bg-slate-900/40 border-white/5' : 'bg-slate-900 text-white border-slate-800'
      }`}>
        <h3 className="text-3xl font-bold font-display mb-4 relative z-10 tracking-tight">READY TO TEST YOUR SKILLS?</h3>
        <p className={`max-w-xl mx-auto mb-8 relative z-10 text-sm ${isDark ? 'text-slate-400' : 'text-slate-300'}`}>
          Once you complete a core module, you unlock the ability to participate in high-stakes competition simulations and earn verified proficiency badges.
        </p>
        <button className="px-10 py-4 bg-cyan-500 text-[#020617] text-[11px] tracking-[0.3em] font-bold rounded-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95 relative z-10 uppercase">
          VIEW SKILLS RADAR
        </button>
      </div>
    </div>
  );
};

export default CoursesPage;
