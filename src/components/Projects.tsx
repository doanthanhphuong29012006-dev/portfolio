import { useState } from 'react';
import { 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Eye,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 font-sans tracking-tight">
            Production-Grade Backend Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
            Tackling real distributed systems problems: Concurrency Control, Double-entry Accounting, Multi-document ACID Transactions, Clean Architecture, and Vitest Automation.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all overflow-hidden shadow-sm dark:shadow-xl"
            >
              {/* Card Top Banner */}
              <div className="px-6 py-4 bg-slate-100/70 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-500">
                    PROJECT // 0{index + 1}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 font-semibold">
                    {project.badge || 'Backend Service'}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{project.period}</span>
                  <span className="text-slate-400 dark:text-slate-600">•</span>
                  <span>{project.type}</span>
                </div>
              </div>

              {/* Main Card Body */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                        {project.name}
                      </h3>
                      <p className="text-sm font-mono text-emerald-700 dark:text-emerald-400 mt-1 font-medium">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Problem Solved Highlight */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <div className="font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 text-xs">
                        <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span>PROBLEM SOLVED:</span>
                      </div>
                      <p className="leading-relaxed">
                        {project.problemSolved}
                      </p>
                    </div>

                    {/* Key Technical Bullets */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                        Technical Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {project.technicalHighlights.slice(0, 2).map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 shrink-0">▸</span>
                            <div>
                              <strong className="text-slate-900 dark:text-slate-200 font-mono">{item.title}: </strong>
                              <span>{item.detail}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="space-y-2 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-mono text-xs font-bold transition-all shadow-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Technical Details</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs font-medium transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub Repo</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Architectural Schematic */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div className="h-full min-h-[260px] rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/70 p-5 flex flex-col justify-between font-mono text-xs">
                      
                      <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-200 dark:border-slate-800">
                        <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                          <Layers className="w-4 h-4" />
                          <span>ARCHITECTURAL SCHEMATIC</span>
                        </span>
                        <span className="text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 font-semibold">
                          VERIFIED
                        </span>
                      </div>

                      {/* Schematic Diagram Block */}
                      <div className="my-auto py-4 space-y-2.5 text-center">
                        <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 font-semibold shadow-sm">
                          [Client Requests / Webhook Triggers]
                        </div>
                        <div className="text-emerald-600 dark:text-emerald-400 text-[11px]">↓ (HttpOnly JWT + Rate Limit)</div>
                        <div className="p-2 rounded bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-semibold">
                          {project.id === 'novapay' 
                            ? 'Redis Redlock (Ordering) + ACID Transactions'
                            : 'Prisma ORM + node-postgres Raw SQL Pool'}
                        </div>
                        <div className="text-cyan-600 dark:text-cyan-400 text-[11px]">↓ (Data Layer Persistence)</div>
                        <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-700 dark:text-cyan-300 font-semibold shadow-sm">
                          {project.id === 'novapay' 
                            ? 'MongoDB Journal (Debit/Credit Ledger = 0)'
                            : 'PostgreSQL Relational Storage + Redis Cache'}
                        </div>
                      </div>

                      {/* Footer Info inside diagram */}
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                        <span>Pattern: {project.architecturePattern.split('&')[0]}</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">100% Tested</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-depth Technical Specs */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
