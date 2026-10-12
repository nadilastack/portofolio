import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, Globe } from 'lucide-react';

export default function Navbar({ profile, nav, lang, onToggleLang }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    const navLinks = [
        { name: nav.about, href: '#tentang' },
        { name: nav.skills, href: '#skills' },
        { name: nav.projects, href: '#proyek' },
        { name: nav.experience, href: '#pengalaman' },
        { name: nav.contact, href: '#kontak' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/85 dark:bg-[#0b0f19]/85 backdrop-blur-md shadow-sm border-b border-slate-200/60 dark:border-slate-800/60 py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand / Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                            NP
                        </div>
                        <div>
                            <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white block group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {profile.name}
                            </span>
                            <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 block -mt-1">
                                {profile.institution}
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Actions: Language Switcher, Theme Toggle & CV Button */}
                    <div className="hidden md:flex items-center gap-3">
                        
                        {/* Language Switcher Pill */}
                        <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-bold font-mono">
                            <button
                                onClick={() => onToggleLang('id')}
                                aria-label="Ganti ke Bahasa Indonesia"
                                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                                    lang === 'id'
                                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                <span>🇮🇩</span>
                                <span>ID</span>
                            </button>
                            <button
                                onClick={() => onToggleLang('en')}
                                aria-label="Switch to English"
                                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                                    lang === 'en'
                                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                <span>🇬🇧</span>
                                <span>EN</span>
                            </button>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Ganti mode tampilan"
                            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
                        </button>

                        {/* Download CV */}
                        <a
                            href={profile.cvFileUrl}
                            download="CV_Nadila_Putri_IND.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-600/30 transition-all hover:shadow hover:shadow-indigo-600/40"
                        >
                            <Download className="w-4 h-4" />
                            <span>{nav.downloadCv}</span>
                        </a>
                    </div>

                    {/* Mobile Menu & Quick Controls */}
                    <div className="flex md:hidden items-center gap-2">
                        {/* Mobile Language Toggle */}
                        <button
                            onClick={() => onToggleLang(lang === 'id' ? 'en' : 'id')}
                            aria-label="Switch Language"
                            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-slate-50 dark:bg-slate-900"
                        >
                            {lang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}
                        </button>

                        <button
                            onClick={toggleTheme}
                            aria-label="Ganti tema"
                            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                        >
                            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Buka menu"
                            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {isOpen && (
                    <div className="md:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                            <a
                                href={profile.cvFileUrl}
                                download="CV_Nadila_Putri_IND.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white"
                            >
                                <Download className="w-4 h-4" />
                                <span>{nav.downloadCv}</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
