import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Sun, Moon, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg dark:shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:border-emerald-500 transition-colors">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-sm tracking-tight flex items-center gap-1">
              <span>thanhphuong</span>
              <span className="text-emerald-600 dark:text-emerald-400">.dev()</span>
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-wider uppercase">
              Backend Node.js
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-md transition-all font-mono"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Intern Ready</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle Dark/Light Mode"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-slate-300 dark:hover:border-slate-700 flex items-center justify-center transition-colors shadow-sm"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Contact Direct CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-mono transition-colors shadow-sm"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="md:hidden w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-md">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>{profileData.status.text}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md transition-colors font-mono"
            >
              &gt; {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="block w-full text-center px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-mono"
            >
              Email Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
