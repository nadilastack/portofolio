import React from 'react';
import { 
    Target, 
    Sparkles, 
    ShieldCheck, 
    GraduationCap, 
    Award, 
    Trophy 
} from 'lucide-react';

export default function AboutSection({ profile, keyStats, about }) {
    const getStatVisual = (label, idx) => {
        const l = (label || '').toLowerCase();
        if (l.includes('ipk') || l.includes('gpa')) {
            return {
                icon: <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
                bg: 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-200/80 dark:border-indigo-800/80'
            };
        }
        if (l.includes('sus') || l.includes('usability')) {
            return {
                icon: <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
                bg: 'bg-amber-50 dark:bg-amber-950/70 border-amber-200/80 dark:border-amber-800/80'
            };
        }
        if (l.includes('blackbox') || l.includes('testing')) {
            return {
                icon: <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
                bg: 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-200/80 dark:border-emerald-800/80'
            };
        }
        if (l.includes('sertifikasi') || l.includes('certification') || l.includes('credentials')) {
            return {
                icon: <Award className="w-4 h-4 text-teal-600 dark:text-teal-400" />,
                bg: 'bg-teal-50 dark:bg-teal-950/70 border-teal-200/80 dark:border-teal-800/80'
            };
        }
        return {
            icon: <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
            bg: 'bg-amber-50 dark:bg-amber-950/70 border-amber-200/80 dark:border-amber-800/80'
        };
    };

    return (
        <section id="tentang" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="max-w-3xl mb-12">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{about.badge}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {about.title}
                    </h2>
                    <p className="mt-3 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                        {about.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left Column: Narrative Details */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                <span>{about.coreHeading}</span>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                                {about.paragraph1}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                                {about.paragraph2}
                            </p>
                            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                                <ShieldCheck className="w-4 h-4 shrink-0" />
                                <span>{about.certifiedStatement}</span>
                            </div>
                        </div>

                        {/* Nilai Utama / Core Values */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-105 transition-transform">
                                    01
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {about.val1Title}
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {about.val1Desc}
                                </p>
                            </div>

                            <div className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-105 transition-transform">
                                    02
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                    {about.val2Title}
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {about.val2Desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Key Stats Scorecard */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-5 flex items-center justify-between">
                                <span>{about.statsHeading}</span>
                                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                                    Verified
                                </span>
                            </h3>
                            <div className="space-y-3">
                                {keyStats.map((stat, idx) => {
                                    const visual = getStatVisual(stat.label, idx);
                                    return (
                                        <div
                                            key={idx}
                                            className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800/70 hover:border-indigo-300 dark:hover:border-indigo-700/80 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-lg border ${visual.bg} shrink-0 group-hover:scale-105 transition-transform`}>
                                                    {visual.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                        {stat.label}
                                                    </div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                                        {stat.note}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right pl-3 shrink-0">
                                                <span className="text-xl sm:text-2xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400">
                                                    {stat.value}
                                                </span>
                                                {stat.suffix && (
                                                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 ml-1">
                                                        {stat.suffix}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
