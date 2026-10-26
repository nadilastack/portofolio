import React from 'react';
import { 
    Download, 
    FolderGit2, 
    Mail, 
    MessageSquare, 
    Award, 
    GraduationCap,
    Code2,
    Workflow,
    Activity,
    Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';

export default function HeroSection({ profile, pillars, hero, onOpenCvModal }) {
    const getPillarIcon = (id) => {
        switch (id) {
            case 'fullstack':
                return <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
            case 'analysis':
                return <Workflow className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
            case 'data':
                return <Activity className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
            default:
                return <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
        }
    };

    const getPillarIconBg = (id) => {
        switch (id) {
            case 'fullstack':
                return 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-200/80 dark:border-indigo-800/80';
            case 'analysis':
                return 'bg-teal-50 dark:bg-teal-950/70 border-teal-200/80 dark:border-teal-800/80';
            case 'data':
                return 'bg-amber-50 dark:bg-amber-950/70 border-amber-200/80 dark:border-amber-800/80';
            default:
                return 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700';
        }
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
            {/* Background decorative ambient lights */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-indigo-500/15 via-teal-500/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    
                    {/* Developer Presence Visual Badge & Availability Beacon */}
                    <div className="mb-5 flex flex-col items-center">
                        <div className="relative group mb-3">
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 opacity-60 blur-sm group-hover:opacity-100 transition duration-500" />
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-tr from-indigo-600 via-blue-600 to-teal-500 dark:from-indigo-400 dark:via-blue-300 dark:to-teal-300 bg-clip-text text-transparent">
                                    NP
                                </span>
                            </div>
                        </div>

                        {/* Live Availability Beacon */}
                        {hero.availabilityBadge && (
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80 shadow-xs">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>{hero.availabilityBadge}</span>
                            </div>
                        )}
                    </div>

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 shadow-sm mb-6">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{hero.statusBadge}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        <span className="text-teal-700 dark:text-teal-300 font-mono">GPA {profile.gpa}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                        <span className="block mb-2 font-bold text-slate-700 dark:text-slate-300 text-2xl sm:text-3xl">
                            {hero.greeting} <span className="text-indigo-600 dark:text-indigo-400">{profile.name}</span>
                        </span>
                        <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 dark:from-indigo-400 dark:via-blue-300 dark:to-teal-300 bg-clip-text text-transparent">
                            {profile.roleHeadline}
                        </span>
                    </h1>

                    {/* 2-3 Kalimat Ringkasan */}
                    <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                        {profile.summary}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        {onOpenCvModal ? (
                            <button
                                onClick={onOpenCvModal}
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] shadow-lg shadow-indigo-600/25 transition-all text-sm sm:text-base cursor-pointer hover:scale-[1.02]"
                            >
                                <Download className="w-4 h-4" />
                                <span>{hero.ctaCv}</span>
                            </button>
                        ) : (
                            <a
                                href={profile.cvFileUrl}
                                download="CV_Nadila_Putri_IND.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] shadow-lg shadow-indigo-600/25 transition-all text-sm sm:text-base"
                            >
                                <Download className="w-4 h-4" />
                                <span>{hero.ctaCv}</span>
                            </a>
                        )}

                        <a
                            href="#proyek"
                            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 active:scale-[0.98] shadow-sm transition-all text-sm sm:text-base"
                        >
                            <FolderGit2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                            <span>{hero.ctaProjects}</span>
                        </a>

                        <a
                            href="#kontak"
                            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm sm:text-base"
                        >
                            <MessageSquare className="w-4 h-4" />
                            <span>{hero.ctaContact}</span>
                        </a>
                    </div>

                    {/* Social & Contact Direct Links */}
                    <div className="mt-8 flex items-center justify-center gap-4 text-slate-500 dark:text-slate-400">
                        <a
                            href={`mailto:${profile.email}`}
                            title="Email Nadila Putri"
                            className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                        <a
                            href={profile.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn Nadila Putri"
                            className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                        >
                            <LinkedinIcon className="w-5 h-5" />
                        </a>
                        {profile.githubUrl && (
                            <a
                                href={profile.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub Nadila Putri"
                                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
                            >
                                <GithubIcon className="w-5 h-5" />
                            </a>
                        )}
                    </div>

                    {/* Competency Ribbon */}
                    <div className="mt-10 inline-flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span>{hero.certifiedBadge} <strong className="text-slate-800 dark:text-slate-200 font-semibold">{hero.competentLabel}</strong></span>
                    </div>

                </div>

                {/* 3 Pillars Quick Cards (Keseimbangan 3 Pilar dengan Ikon Semantik) */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar) => {
                        const isPrimary = pillar.id === 'fullstack';
                        return (
                            <div
                                key={pillar.id}
                                className={`group relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                                    isPrimary
                                        ? 'bg-gradient-to-b from-indigo-50/70 to-white dark:from-indigo-950/20 dark:to-slate-900/80 border-indigo-200 dark:border-indigo-800/80 shadow-md ring-1 ring-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-700'
                                        : 'bg-white dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-2.5 rounded-xl border ${getPillarIconBg(pillar.id)} group-hover:scale-105 transition-transform`}>
                                        {getPillarIcon(pillar.id)}
                                    </div>
                                    <span
                                        className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                                            isPrimary
                                                ? 'bg-indigo-600 text-white shadow-xs'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                                        }`}
                                    >
                                        {pillar.badge}
                                    </span>
                                </div>
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {pillar.title}
                                </h2>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
