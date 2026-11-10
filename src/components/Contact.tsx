import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Terminal, 
  ExternalLink, 
  ArrowUpRight, 
  Send, 
  CalendarCheck 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { GithubIcon, FacebookIcon } from './Icons';

export const Contact = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="contact" className="py-20 relative bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 font-sans tracking-tight">
            Direct Contact &amp; Availability
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
            Currently available for Backend Developer Intern / Junior roles. Contact me directly via verified channels below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-2">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                  <Mail className="w-4 h-4" />
                  <span>PRIMARY EMAIL</span>
                </span>
                <button
                  onClick={() => handleCopy('email', profileData.contact.email)}
                  className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="font-mono text-base font-bold text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block break-all"
              >
                {profileData.contact.email}
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans">
                Best communication channel. Monitored daily with quick responses within 24 hours.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href={`mailto:${profileData.contact.email}?subject=Backend%20Developer%20Internship%20Opportunity%20-%20Doan%20Thanh%20Phuong`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone / Zalo Card */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-2">
                <span className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-400 font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>DIRECT PHONE / ZALO</span>
                </span>
                <button
                  onClick={() => handleCopy('phone', profileData.contact.phone)}
                  className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`tel:${profileData.contact.phone}`}
                className="font-mono text-lg font-bold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block"
              >
                {profileData.contact.phone}
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans">
                Available during standard business hours (Hanoi GMT+7).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href={`tel:${profileData.contact.phone}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 hover:underline"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-2">
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
                  <GithubIcon className="w-4 h-4 text-emerald-500" />
                  <span>GITHUB PROFILE</span>
                </span>
                <button
                  onClick={() => handleCopy('github', profileData.contact.githubUrl)}
                  className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center gap-1"
                >
                  {copiedKey === 'github' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'github' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={profileData.contact.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block break-all"
              >
                github.com/doanthanhphuong29012006-dev
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans">
                Source code repositories for NovaPay, StudyHub, clean commits, and automated test suites.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href={profileData.contact.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <span>Explore Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-2">
                <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold">
                  <FacebookIcon className="w-4 h-4 text-blue-500" />
                  <span>FACEBOOK</span>
                </span>
                <button
                  onClick={() => handleCopy('facebook', profileData.contact.facebookUrl)}
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  {copiedKey === 'facebook' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'facebook' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={profileData.contact.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block break-all"
              >
                facebook.com/phuongdt29
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans">
                Social connection and direct messenger inquiries.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href={profileData.contact.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Visit Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Location & Engineering Program Card */}
        <div className="mt-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
                Location &amp; Degree Program
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {profileData.contact.location} • IT Engineer Program (Kỹ sư CNTT - PTIT)
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Ready for On-site, Hybrid, or Remote backend positions across Hanoi.
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Ready to Interview Immediately</span>
          </span>
        </div>

        {/* Quick Recruiter Callout Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-emerald-50 dark:bg-gradient-to-r dark:from-emerald-950/40 dark:to-slate-900 border border-emerald-200 dark:border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Looking for an energetic, disciplined Backend Node.js Intern?</span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              I am prepared for technical coding rounds, architectural design reviews, and take-home assignments.
            </p>
          </div>

          <a
            href={`mailto:${profileData.contact.email}?subject=Invitation%20for%20Backend%20NodeJS%20Internship%20Interview`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold text-xs font-mono transition-all shadow-md shadow-emerald-500/20"
          >
            <Send className="w-4 h-4" />
            <span>Send Interview Invitation</span>
          </a>
        </div>

      </div>
    </section>
  );
};
