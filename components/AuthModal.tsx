
import React, { useState } from 'react';
import { X, Mail, Lock, User, Shield, Github, Globe } from 'lucide-react';
import { Theme } from '../App';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  onSuccess?: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, theme, onSuccess }) => {
  const isDark = theme === 'dark';
  const [mode, setMode] = useState<'login' | 'signup'>('signup');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication success
    if (onSuccess) onSuccess();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#020617]/80 backdrop-blur-md">
      <div className={`relative w-full max-w-md rounded-2xl border p-8 overflow-hidden transition-all animate-in fade-in zoom-in duration-300 ${
        isDark ? 'bg-[#0f172a] border-white/10 shadow-2xl' : 'bg-white border-slate-200 shadow-2xl'
      }`}>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] pointer-events-none"></div>
        
        <button 
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10 text-slate-500' : 'hover:bg-slate-100 text-slate-400'}`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 mx-auto mb-4">
             <Shield className="text-white w-6 h-6" />
          </div>
          <h2 className={`text-2xl font-bold font-display uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {mode === 'login' ? 'System Access' : 'Create Protocol'}
          </h2>
          <p className="text-xs text-slate-500 font-mono mt-1 uppercase">Authentication required to save path</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="FULL_NAME" 
                className={`w-full pl-10 pr-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-cyan-500 transition-colors ${
                  isDark ? 'bg-slate-900/50 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
                required
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="email" 
              placeholder="ACCESS_ID@EMAIL.COM" 
              className={`w-full pl-10 pr-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-cyan-500 transition-colors ${
                isDark ? 'bg-slate-900/50 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="password" 
              placeholder="ENCRYPTED_KEY" 
              className={`w-full pl-10 pr-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-cyan-500 transition-colors ${
                isDark ? 'bg-slate-900/50 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
              required
            />
          </div>

          <button type="submit" className={`w-full py-4 rounded-lg font-bold tracking-widest text-sm transition-all shadow-lg active:scale-[0.98] ${
            isDark ? 'bg-cyan-500 text-[#020617] hover:bg-cyan-400 shadow-cyan-500/20' : 'bg-slate-900 text-white hover:bg-cyan-600'
          }`}>
            {mode === 'login' ? 'INITIALIZE LOGIN' : 'RESERVE ALPHA PATH'}
          </button>
        </form>

        <div className="mt-8">
           <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-grow bg-slate-800"></div>
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Connect Via</span>
              <div className="h-px flex-grow bg-slate-800"></div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <button onClick={onSuccess} className={`flex items-center justify-center gap-2 py-2.5 rounded border text-[10px] font-bold tracking-widest uppercase transition-colors ${
                isDark ? 'border-white/5 hover:bg-white/5 text-slate-400' : 'border-slate-200 hover:bg-slate-50 text-slate-600'
              }`}>
                 <Github className="w-4 h-4" /> Github
              </button>
              <button onClick={onSuccess} className={`flex items-center justify-center gap-2 py-2.5 rounded border text-[10px] font-bold tracking-widest uppercase transition-colors ${
                isDark ? 'border-white/5 hover:bg-white/5 text-slate-400' : 'border-slate-200 hover:bg-slate-50 text-slate-600'
              }`}>
                 <Globe className="w-4 h-4" /> LinkedIn
              </button>
           </div>
        </div>

        <div className="mt-8 text-center">
           <button 
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-xs font-bold text-slate-500 hover:text-cyan-500 transition-colors uppercase tracking-widest"
           >
             {mode === 'login' ? 'Create New Protocol' : 'Access Existing Vault'}
           </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
