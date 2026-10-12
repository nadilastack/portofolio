import React from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';

export default function Footer({ profile, footer, nav, lang = 'id' }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { label: nav?.about || (lang === 'id' ? 'Tentang' : 'About'), href: '#tentang' },
        { label: nav?.skills || (lang === 'id' ? 'Keterampilan' : 'Skills'), href: '#keterampilan' },
        { label: nav?.projects || (lang === 'id' ? 'Proyek' : 'Projects'), href: '#proyek' },
        { label: nav?.experience || (lang === 'id' ? 'Pendidikan & Pengalaman' : 'Experience & Education'), href: '#pengalaman' },
        { label: nav?.contact || (lang === 'id' ? 'Kontak' : 'Contact'), href: '#kontak' },
    ];

    return (
        <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden transition-colors">
            {/* Subtle Ambient Laser Line at Top */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
                    
                    {/* Brand Identity & Social Icons */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-teal-400 p-[1.5px] shadow-lg shadow-indigo-500/20 shrink-0">
                                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white font-extrabold text-sm tracking-tight">
                                    NP
                                </div>
                            </div>
                            <div>
                                <div className="text-base font-extrabold text-white tracking-tight">
                                    {profile.name}
                                </div>
                                <div className="text-xs font-mono text-indigo-400">
                                    {footer.affiliation || "Fresh Graduate D4 Teknik Informatika · Politeknik Caltex Riau"}
                                </div>
                            </div>
                        </div>

                        {/* Minimalist Social Icons */}
                        <div className="flex items-center gap-2 sm:pl-6 sm:border-l sm:border-slate-800">
                            <a
                                href={profile.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn Nadila Putri"
                                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-blue-500/30 transition-all"
                            >
                                <LinkedinIcon className="w-4 h-4" />
                            </a>
                            {profile.githubUrl && (
                                <a
                                    href={profile.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub Nadila Putri"
                                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
                                >
                                    <GithubIcon className="w-4 h-4" />
                                </a>
                            )}
                            <a
                                href={`mailto:${profile.email}`}
                                title={profile.email}
                                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/30 transition-all"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Navigation Links */}
                    <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
                        {quickLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <div>
                        © {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">{profile.name}</strong>. {footer.allRights}
                    </div>

                    {/* Tech Stack Chip */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                        <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{footer.techStack}</span>
                    </div>

                    {/* Back to top smooth button */}
                    <button
                        onClick={scrollToTop}
                        aria-label={footer.backToTop}
                        className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/70 hover:bg-slate-900 text-slate-400 hover:text-white transition-all text-xs font-medium cursor-pointer"
                    >
                        <span>{footer.backToTop}</span>
                        <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>

            </div>
        </footer>
    );
}
