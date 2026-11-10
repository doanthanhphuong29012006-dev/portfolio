import { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Box, 
  CheckCircle2, 
  Terminal, 
  Info
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import type { SkillLevel } from '../types/portfolio';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Box': return <Box className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      default: return <Terminal className="w-5 h-5" />;
    }
  };

  const getLevelBadge = (level?: SkillLevel) => {
    switch (level) {
      case 'Proficient':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
            Proficient
          </span>
        );
      case 'Familiar':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30">
            Familiar
          </span>
        );
      case 'Learning':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
            Learning
          </span>
        );
      case 'Basic':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-500/15 text-slate-700 dark:text-slate-400 border border-slate-500/30">
            Basic
          </span>
        );
      default:
        return null;
    }
  };

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 font-sans tracking-tight">
            Backend Skills &amp; Applied Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
            Categorized across 7 core software engineering areas, strictly verified from hands-on project implementation.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeCategory === 'all'
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
            }`}
          >
            All (7 Domains)
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <span>{cat.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400">
                      {getIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 font-mono">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border transition-all ${
                        skill.highlight
                          ? 'bg-slate-50 dark:bg-slate-950/90 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50'
                          : 'bg-slate-50/60 dark:bg-slate-950/50 border-slate-200/70 dark:border-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                        {getLevelBadge(skill.level)}
                      </div>

                      {skill.notes && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-start gap-1 font-sans">
                          <Info className="w-3 h-3 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                          <span>{skill.notes}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                <span>Domain stack: {category.skills.length} technologies</span>
                <span className="text-emerald-700 dark:text-emerald-400/80">CV-Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-3 shadow-sm">
          <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>
            <strong>Engineering Principle:</strong> Every skill item listed above was directly utilized in real project implementations (NovaPay &amp; StudyHub) or tested during academic computer science coursework at PTIT. Zero inflated skills.
          </span>
        </div>

      </div>
    </section>
  );
};
