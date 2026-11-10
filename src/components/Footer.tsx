import { useState } from 'react';
import { Terminal, Copy, Check, ArrowUp } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/90 pt-16 pb-12 font-mono transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Summary & Full Copyable URLs Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
          
          {/* Email Raw URL */}
          <div className="space-y-1">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold">
              Direct Email:
            </span>
            <div className="flex items-center justify-between text-xs text-slate-800 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-800">
              <span className="truncate mr-2">{profileData.contact.email}</span>
              <button
                onClick={() => copyToClipboard('email', profileData.contact.email)}
                className="text-slate-400 hover:text-emerald-500 shrink-0"
                title="Copy Email"
              >
                {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Phone Raw */}
          <div className="space-y-1">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold">
              Phone / Zalo:
            </span>
            <div className="flex items-center justify-between text-xs text-slate-800 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-800">
              <span className="truncate mr-2">{profileData.contact.phone}</span>
              <button
                onClick={() => copyToClipboard('phone', profileData.contact.phone)}
                className="text-slate-400 hover:text-cyan-500 shrink-0"
                title="Copy Phone"
              >
                {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Location Raw */}
          <div className="space-y-1">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold">
              Location:
            </span>
            <div className="text-xs text-slate-800 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-800 truncate">
              {profileData.contact.location}
            </div>
          </div>

          {/* Education Summary */}
          <div className="space-y-1">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold">
              Academic Standing:
            </span>
            <div className="text-xs text-emerald-700 dark:text-emerald-400 bg-slate-50 dark:bg-slate-950 px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-800 truncate font-semibold">
              PTIT IT • GPA 3.66 • TOEIC 825
            </div>
          </div>

        </div>

        {/* Middle Navigation & Branding */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800/80">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-200">
                {profileData.fullName} ({profileData.nativeName})
              </span>
              <p className="text-xs text-slate-500">
                {profileData.title}
              </p>
            </div>
          </div>

          {/* Navigation Anchors */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            <a href="#home" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Timeline</a>
            <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs transition-colors shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Integrity Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {profileData.fullName} ({profileData.nativeName}). Engineered from authentic CV achievements.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <span>TypeScript</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-700 dark:text-emerald-400/90 font-semibold">Strict CV Data Verified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
