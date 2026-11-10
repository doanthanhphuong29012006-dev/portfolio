import { 
  Calendar, 
  Terminal, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // CAREER &amp; LEARNING TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 font-sans tracking-tight">
            Academic Track &amp; Project Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
            A chronological progression of technical foundations at PTIT, university competition awards, and individual backend architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-300 dark:border-slate-800 space-y-12">
          
          {experienceTimeline.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-4 border-emerald-500 group-hover:scale-125 transition-transform" />

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-all shadow-sm dark:shadow-lg">
                
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>

                    {item.badge && (
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-medium">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20 font-semibold">
                    {item.role}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-sans">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.organization} {item.gpaOrScore && `• ${item.gpaOrScore}`}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Achievements if any */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Key Outcomes &amp; Benchmarks:</span>
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills Developed */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider font-semibold block mb-2">
                    Competencies &amp; Technologies Mastered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skillsDeveloped.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
