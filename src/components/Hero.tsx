import { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { GithubIcon, FacebookIcon } from './Icons';

export const Hero = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Info & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Status & Role Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{profileData.title}</span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span className="text-slate-600 dark:text-slate-400">PTIT • GPA 3.66</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                HELLO, WORLD. I AM
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight font-sans">
                {profileData.fullName}
                <span className="text-xs font-mono font-normal ml-3 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60 align-middle">
                  ({profileData.nativeName})
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                Backend Node.js &amp; TypeScript Developer
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Information Technology Engineering student at <strong>Posts and Telecommunications Institute of Technology (PTIT)</strong> (GPA: 3.66/4.0, TOEIC: 825) specializing in Node.js &amp; TypeScript backend systems. 
              Hands-on experience resolving concurrency anomalies and data integrity challenges using <strong>ACID transactions</strong>, <strong>Redis distributed locks (Redlock)</strong>, <strong>idempotency</strong>, <strong>BullMQ queues</strong>, and automated testing with <strong>Vitest</strong>.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-lg">
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 text-center shadow-sm">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">PTIT GPA</div>
                <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">3.66 / 4.0</div>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 text-center shadow-sm">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">TOEIC</div>
                <div className="text-lg font-bold font-mono text-cyan-600 dark:text-cyan-400">825 / 990</div>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 text-center shadow-sm">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Award</div>
                <div className="text-xs font-bold font-mono text-amber-600 dark:text-amber-400 mt-1">YES PTIT 2026</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-semibold text-sm transition-all shadow-md shadow-emerald-500/20 font-mono"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all font-mono shadow-sm"
              >
                <span>Get In Touch</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-mono transition-colors shadow-sm"
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied Email!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social Links from CV */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="text-slate-400 dark:text-slate-500">Verified Links:</span>
              
              {/* GitHub */}
              <a
                href={profileData.contact.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              {/* Facebook */}
              <a
                href={profileData.contact.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                <FacebookIcon className="w-4 h-4 text-blue-500" />
                <span>Facebook</span>
              </a>

              {/* Email Direct */}
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{profileData.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Backend Terminal Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-700/80 bg-slate-900 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-slate-400 ml-2 font-mono text-[11px]">
                    thanhphuong@backend-node: ~/runtime
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  HTTP/1.1 200 OK
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-4 space-y-3 text-slate-300 leading-relaxed overflow-x-auto">
                <div>
                  <span className="text-emerald-400">$ </span>
                  <span className="text-slate-200">curl -X GET https://api.novapay.internal/health</span>
                </div>

                <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/80 text-[11px] text-emerald-300 font-mono space-y-1">
                  <div>&#123;</div>
                  <div className="pl-4"><span className="text-cyan-300">"status"</span>: <span className="text-emerald-300">"HEALTHY_200"</span>,</div>
                  <div className="pl-4"><span className="text-cyan-300">"engineer"</span>: <span className="text-emerald-300">"Doan Thanh Phuong (Doãn Thanh Phương)"</span>,</div>
                  <div className="pl-4"><span className="text-cyan-300">"education"</span>: <span className="text-slate-300">"PTIT Engineer Program (GPA: 3.66, TOEIC: 825)"</span>,</div>
                  <div className="pl-4"><span className="text-cyan-300">"primary_stack"</span>: [</div>
                  <div className="pl-8 text-amber-300">"TypeScript", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis"</div>
                  <div className="pl-4">],</div>
                  <div className="pl-4"><span className="text-cyan-300">"concurrency_engine"</span>: <span className="text-emerald-300">"Redis Redlock + Lock-ordering"</span>,</div>
                  <div className="pl-4"><span className="text-cyan-300">"ledger_integrity"</span>: <span className="text-emerald-300">"Double-entry (Debit/Credit balance = 0)"</span>,</div>
                  <div className="pl-4"><span className="text-cyan-300">"test_suite"</span>: <span className="text-emerald-300">"Vitest passing (100+ parallel requests OK)"</span></div>
                  <div>&#125;</div>
                </div>

                <div className="pt-1">
                  <span className="text-emerald-400">$ </span>
                  <span className="text-slate-200">docker-compose ps</span>
                </div>

                {/* Container Status Table */}
                <div className="text-[11px] font-mono border border-slate-800 rounded bg-slate-950/60 p-2 text-slate-300 space-y-1">
                  <div className="text-slate-500 font-semibold grid grid-cols-3">
                    <span>CONTAINER</span>
                    <span>IMAGE</span>
                    <span>STATUS</span>
                  </div>
                  <div className="grid grid-cols-3 text-slate-300">
                    <span className="text-cyan-400">api-server</span>
                    <span>node:20-alpine</span>
                    <span className="text-emerald-400">Up (healthy)</span>
                  </div>
                  <div className="grid grid-cols-3 text-slate-300">
                    <span className="text-cyan-400">postgres-db</span>
                    <span>postgres:16</span>
                    <span className="text-emerald-400">Up :5432</span>
                  </div>
                  <div className="grid grid-cols-3 text-slate-300">
                    <span className="text-cyan-400">redis-lock</span>
                    <span>redis:7-alpine</span>
                    <span className="text-emerald-400">Up :6379</span>
                  </div>
                  <div className="grid grid-cols-3 text-slate-300">
                    <span className="text-cyan-400">bullmq-worker</span>
                    <span>node:20-alpine</span>
                    <span className="text-emerald-400">Up (idle)</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <span className="text-emerald-400 animate-pulse">&gt;</span>
                  <span>ready for high-scale backend engineering...</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
