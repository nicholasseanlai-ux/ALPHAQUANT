
import React, { useState } from 'react';
import { X, Terminal, Copy, Check, Github, ArrowRight, ShieldCheck } from 'lucide-react';
import { Theme } from '../App';

interface GitHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  onConnect: () => void;
}

const GitHubModal: React.FC<GitHubModalProps> = ({ isOpen, onClose, theme, onConnect }) => {
  const isDark = theme === 'dark';
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const commands = [
    "git init",
    "git add .",
    'git commit -m "Initialize AlphaQuant Platform v1.0"',
    "git branch -M main",
    "git remote add origin https://github.com/YOUR_USERNAME/alpha-quant.git",
    "git push -u origin main"
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#020617]/90 backdrop-blur-xl">
      <div className={`relative w-full max-w-2xl rounded-xl border p-1 overflow-hidden transition-all animate-in fade-in zoom-in duration-300 ${
        isDark ? 'bg-[#0f172a] border-cyan-500/30' : 'bg-white border-slate-200 shadow-2xl'
      }`}>
        {/* Terminal Header */}
        <div className={`flex items-center justify-between px-4 py-3 border-b ${isDark ? 'bg-slate-900 border-white/5' : 'bg-slate-100 border-slate-200'}`}>
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="text-[10px] font-mono font-bold text-slate-500 flex items-center gap-2">
              <Terminal className="w-3 h-3" /> GITHUB_UPLOADER_PROTOCOL.v1
            </div>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Github className="w-8 h-8 text-cyan-500" />
            </div>
            <div>
              <h2 className={`text-2xl font-bold font-display tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                UPLOAD TO <span className="text-cyan-500">GITHUB</span>
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed font-mono uppercase">
                Initialize your local repository and push the AlphaQuant core to your personal GitHub cloud.
              </p>
            </div>
          </div>

          <div className={`rounded-lg p-6 font-mono text-[11px] mb-8 relative ${isDark ? 'bg-black/40 border border-white/5' : 'bg-slate-50 border border-slate-200'}`}>
            <div className="absolute top-4 right-4 text-[9px] text-cyan-500/40 animate-pulse">LIVE_TERMINAL</div>
            <div className="space-y-4">
              {commands.map((cmd, i) => (
                <div key={i} className="group flex items-center justify-between gap-4 border-b border-white/5 pb-2 last:border-0">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="text-cyan-500 shrink-0">$</span>
                    <code className={`truncate ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{cmd}</code>
                  </div>
                  <button 
                    onClick={() => handleCopy(cmd, i)}
                    className={`p-1.5 rounded transition-all ${isDark ? 'hover:bg-white/10 text-slate-500 hover:text-cyan-400' : 'hover:bg-slate-200 text-slate-400'}`}
                  >
                    {copiedIndex === i ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                onConnect();
                onClose();
              }}
              className="flex-grow py-4 bg-cyan-500 text-[#020617] font-bold text-[11px] tracking-[0.3em] rounded uppercase flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              FINALIZE SYNC <ShieldCheck className="w-4 h-4" />
            </button>
            <button 
              onClick={() => window.open('https://github.com/new', '_blank')}
              className={`px-8 py-4 border font-bold text-[11px] tracking-[0.3em] rounded uppercase flex items-center justify-center gap-2 transition-all active:scale-95 ${
                isDark ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              CREATE NEW REPO <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <p className="mt-6 text-center text-[9px] text-slate-600 font-mono tracking-widest uppercase">
            AlphaQuant uses standard git protocols for repository synchronization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GitHubModal;
