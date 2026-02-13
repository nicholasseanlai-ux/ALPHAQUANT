
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Theme } from '../App';

const Footer: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t transition-colors ${isDark ? 'bg-[#020617] border-white/5' : 'bg-slate-100 border-slate-200'} pt-20 pb-10`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-bold text-lg leading-none">A</span>
              </div>
              <span className={`text-xl font-bold font-display tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                ALPHA<span className="text-cyan-500">QUANT</span>
              </span>
            </div>
            <p className={`max-w-sm mb-8 transition-colors ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              The premium training environment for the next generation of financial powerhouses. Built for students, powered by institutional insight.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub', highlighted: true },
                { icon: Mail, label: 'Email' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    item.highlighted 
                      ? 'border-cyan-500/40 bg-cyan-500/5 text-cyan-500 hover:scale-110 shadow-[0_0_10px_rgba(6,182,212,0.1)]'
                      : isDark 
                        ? 'border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30' 
                        : 'border-slate-200 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-slate-600'
                  }`}
                  title={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold font-display mb-6 tracking-widest text-sm text-cyan-600">ECOSYSTEM</h4>
            <ul className={`space-y-4 text-sm transition-colors ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              {['Training Terminal', 'Competition Hub', 'Pathway Maps', 'GET_SOURCE_CODE'].map(item => (
                <li key={item}>
                  <a href="#" className={`transition-colors flex items-center gap-2 ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>
                    {item === 'GET_SOURCE_CODE' && <Github className="w-3.5 h-3.5 text-cyan-500" />}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-display mb-6 tracking-widest text-sm text-cyan-600">PLATFORM</h4>
            <ul className={`space-y-4 text-sm transition-colors ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              {['System Updates', 'Privacy Protocol', 'User Agreement', 'Status: Online'].map(item => (
                <li key={item}><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
          <p className="text-xs text-slate-500 font-mono">
            &copy; 2024 ALPHAQUANT. ALL RIGHTS RESERVED. ENCRYPTED_TRANSMISSION: OK
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Nodes Operational</span>
            </div>
            <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Latency: 12ms</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
