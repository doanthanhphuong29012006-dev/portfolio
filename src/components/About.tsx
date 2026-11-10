import { 
  Target, 
  ShieldCheck, 
  CheckCircle, 
  Terminal, 
  FileCode2, 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 font-sans tracking-tight">
            Background &amp; Backend Engineering Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
            Academic excellence, transactional systems engineering, and strict software discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Biography & Career Direction */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-mono">
                <FileCode2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Engineering Profile</span>
              </h3>
              
              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {profileData.about.summary.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Career Goal */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                      Career Objective
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">
                      {profileData.about.careerDirection}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values / Soft Skills & Practices directly from CV */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Core Engineering Strengths (From CV)
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {profileData.about.coreValues.map((value, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
                  >
                    <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-300 font-mono flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{value.title}</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Education, Scores & System Principles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  Formal Education
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
                  {profileData.education.period}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {profileData.education.institution}
                </h4>
                <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400 mt-0.5">
                  Major: {profileData.education.major}
                </p>
              </div>

              {/* Verified Scores */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Cumulative GPA</span>
                  <div className="text-xl font-bold font-mono text-emerald-700 dark:text-emerald-400 mt-0.5">
                    {profileData.education.gpa}
                  </div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500">Scale of 4.0</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">English Proficiency</span>
                  <div className="text-xl font-bold font-mono text-cyan-700 dark:text-cyan-400 mt-0.5">
                    {profileData.education.toeic}
                  </div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500">TOEIC Score</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 pt-2 text-xs text-slate-600 dark:text-slate-300">
                {profileData.education.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400 mt-0.5 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend Engineering Mindset Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Architectural Guarantees</span>
              </h4>
              
              <div className="space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <span>Concurrency Safety</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Redlock + Lock-ordering</span>
                </div>
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <span>Ledger Balancing</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Debit = Credit Journal</span>
                </div>
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <span>Network Idempotency</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Redis-backed middleware</span>
                </div>
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <span>Code Architecture</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">4-Layer Modular Clean</span>
                </div>
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <span>Automated Testing</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Vitest Unit &amp; Integration</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
