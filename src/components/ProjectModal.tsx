import { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Cpu, 
  CheckCircle, 
  Layers, 
  AlertTriangle,
  Code2,
} from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-y-auto z-10 font-sans">
        
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-wider font-semibold">
              Technical Project Specifications
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Project Title & Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                {project.type}
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25">
                Role: {project.role}
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Period: {project.period}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {project.name}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-2 font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Architecture Layout Flow */}
          <div className="p-5 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/70 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                <Layers className="w-4 h-4" />
                <span>SYSTEM ARCHITECTURE DIAGRAM</span>
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Production-grade Flow
              </span>
            </div>
            
            <div className="py-6 px-4 bg-white dark:bg-slate-900/80 rounded-lg border border-slate-200 dark:border-slate-800 text-center font-mono text-xs text-slate-600 dark:text-slate-400">
              <div className="max-w-md mx-auto space-y-2">
                <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-semibold">
                  Client / Payment Webhooks (VNPay, MoMo, Stripe)
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 text-xs">↓ (HTTP Transport / timingSafeEqual Signature Check)</div>
                <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-semibold">
                  Express Controllers &amp; Validation (Zod / Joi) + Redis Idempotency
                </div>
                <div className="text-cyan-600 dark:text-cyan-400 text-xs">↓ (Service Layer / Redlock Lock-ordering)</div>
                <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-semibold">
                  Transaction Ledger (Double-entry Debit/Credit) + ACID Session
                </div>
                <div className="text-amber-600 dark:text-amber-400 text-xs">↓ (Async Queue / Background Worker)</div>
                <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950 border border-purple-500/30 text-purple-700 dark:text-purple-300 font-semibold">
                  BullMQ Workers + Node.js Streams (CSV Statements Export)
                </div>
              </div>
            </div>
          </div>

          {/* Problem Solved */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Problem Statement &amp; Architectural Resolution</span>
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Technologies &amp; Libraries</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Core Functional Capabilities</span>
            </h3>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, i) => (
                <li
                  key={i}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                >
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Highlights with deep dive */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>In-Depth Technical Highlights</span>
            </h3>
            <div className="space-y-3">
              {project.technicalHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{hl.title}</span>
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {hl.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* GitHub */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-mono text-xs font-semibold transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              {/* API Docs Link */}
              <a
                href={project.swaggerDocsUrl || project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-mono text-xs font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>API Documentation ↗</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-mono text-xs font-bold transition-colors"
            >
              Close Details
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
