
import React from 'react';
import { Activity, Terminal, Moon, Sun, User, LayoutDashboard, LogOut } from 'lucide-react';
import { Page, Theme } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  theme: Theme;
  toggleTheme: () => void;
  onLogin: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  theme, 
  toggleTheme, 
  onLogin, 
  isLoggedIn, 
  onLogout 
}) => {
  const navItems: { label: string; page: Page; icon?: React.ReactNode }[] = [
    { label: 'OPPORTUNITIES', page: 'opportunities' },
    { label: 'COURSES / PREP', page: 'courses' },
    { label: 'PATHWAYS', page: 'pathways' },
  ];

  if (isLoggedIn) {
    navItems.unshift({ label: 'DASHBOARD', page: 'dashboard' });
  } else {
    navItems.unshift({ label: 'HOME', page: 'home' });
  }

  const activeColor = 'text-cyan-500';
  const inactiveColor = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className="container mx-auto px-6 flex items-center justify-between">
      <div 
        className="flex items-center gap-2 group cursor-pointer"
        onClick={() => onNavigate(isLoggedIn ? 'dashboard' : 'home')}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform duration-500">
          <Activity className="text-white w-6 h-6" />
        </div>
        <span className={`text-xl font-bold font-display tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          ALPHA<span className="text-cyan-500">QUANT</span>
        </span>
      </div>

      <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em]">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={`transition-all flex items-center gap-1.5 ${
              currentPage === item.page ? activeColor : inactiveColor
            } hover:text-cyan-400 active:scale-95`}
          >
            {item.page === 'dashboard' && <LayoutDashboard className="w-3.5 h-3.5" />}
            {item.page === 'home' && <Terminal className="w-3.5 h-3.5" />}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 hover:rotate-12 ${theme === 'dark' ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-200 text-slate-600'}`}
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        
        {isLoggedIn ? (
          <div className="flex items-center gap-4 ml-2">
            <button 
              onClick={onLogout}
              className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'hover:bg-red-500/10 text-slate-400 hover:text-red-400' : 'hover:bg-red-50 text-slate-600 hover:text-red-600'}`}
              title="Log Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
            <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center text-[#020617] font-bold shadow-lg shadow-cyan-500/20 cursor-pointer hover:scale-110 active:scale-95 transition-all">
              JD
            </div>
          </div>
        ) : (
          <>
            <button 
              onClick={onLogin}
              className={`hidden sm:block text-[10px] font-bold tracking-widest transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              LOG IN
            </button>
            <button 
              onClick={() => onNavigate('onboarding')}
              className={`px-5 py-2 text-[10px] font-bold tracking-widest rounded-sm transition-all shadow-lg active:scale-95 border ${
                theme === 'dark' ? 'bg-white text-[#020617] hover:bg-cyan-400 border-white hover:border-cyan-400' : 'bg-slate-900 text-white hover:bg-cyan-600 border-slate-900 hover:border-cyan-600'
              }`}
            >
              GET ACCESS
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
