import React, { useState, useEffect } from 'react';
import { 
    Briefcase, 
    GraduationCap, 
    Award, 
    Trophy, 
    Calendar, 
    CheckCircle2, 
    BookOpen,
    Sparkles,
    Users,
    Eye,
    X,
    ExternalLink,
    Maximize2,
    Building2,
    Code2,
    ShieldCheck
} from 'lucide-react';

export default function ExperienceEducationSection({ 
    experiences, 
    education, 
    certifications, 
    achievementsAndLeadership,
    experienceEducation
}) {
    const [activeTab, setActiveTab] = useState('experience');
    const [selectedCert, setSelectedCert] = useState(null);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        setActivePage(0);
    }, [selectedCert]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedCert(null);
            }
        };

        if (selectedCert) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedCert]);

    const getItemBadge = (category) => {
        switch (category) {
            case 'Prestasi':
            case 'Penghargaan':
            case 'Award':
            case 'Honor':
                return {
                    icon: Trophy,
                    iconBg: 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400',
                    badgeBg: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                };
            case 'Kepemimpinan':
            case 'Leadership':
                return {
                    icon: Award,
                    iconBg: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400',
                    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                };
            case 'Kepanitiaan':
            case 'Committee':
                return {
                    icon: Calendar,
                    iconBg: 'bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400',
                    badgeBg: 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800'
                };
            default:
                return {
                    icon: Users,
                    iconBg: 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400',
                    badgeBg: 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                };
        }
    };

    const tabs = [
        { id: 'experience', label: experienceEducation.tabs.experience, icon: Briefcase, count: experiences.length },
        { id: 'education', label: experienceEducation.tabs.education, icon: GraduationCap, count: education.length },
        { id: 'certifications', label: experienceEducation.tabs.certifications, icon: Award, count: certifications.length },
        { id: 'leadership', label: experienceEducation.tabs.leadership, icon: Trophy, count: achievementsAndLeadership.length },
    ];

    return (
        <section id="pengalaman" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="max-w-3xl mb-12">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{experienceEducation.badge}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {experienceEducation.title}
                    </h2>
                    <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                        {experienceEducation.subtitle}
                    </p>
                </div>

                {/* Tab Navigation dengan Count Pills */}
                <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 mb-10 w-fit">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                                    isActive
                                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-700/70 text-slate-600 dark:text-slate-300">
                                    {tab.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Content: 1. Work Experience (Timeline) */}
                {activeTab === 'experience' && (
                    <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200 dark:border-indigo-900/60 space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative group">
                                {/* Bullet Node */}
                                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100 dark:ring-indigo-950/80" />
                                
                                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                                                {exp.role}
                                            </h3>
                                            <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                                {exp.company}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <ul className="mt-4 space-y-2.5">
                                        {exp.highlights.map((point, pIdx) => (
                                            <li key={pIdx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed">
                                                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Evaluation (If available, e.g. RS Mata SMEC PKL) */}
                                    {exp.evaluation && (
                                        <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                                    <Award className="w-3.5 h-3.5 text-amber-500" />
                                                    <span>{experienceEducation.evaluationSupervisor || "Penilaian Pembimbing Industri"}</span>
                                                </span>
                                                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                                                    Rata-rata: {exp.evaluation.averageScore} ({exp.evaluation.predicate})
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-5 gap-1.5 text-center">
                                                {exp.evaluation.criteria.map((crit, cIdx) => (
                                                    <div key={cIdx} className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                                                        <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                                                            {crit.score}
                                                        </div>
                                                        <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate" title={crit.name}>
                                                            {crit.name}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Content: 2. Education */}
                {activeTab === 'education' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between"
                            >
                                <div>
                                    {/* Period & Subdegree / GPA Badge */}
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                                            {edu.period}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            {edu.subDegree && (
                                                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                                                    {edu.subDegree}
                                                </span>
                                            )}
                                            {edu.gpa && (
                                                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                                                    {edu.gpa}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Degree Title & Institution */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {edu.degree}
                                    </h3>
                                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1 flex items-center gap-1.5">
                                        <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                                        <span>{edu.institution}</span>
                                    </div>

                                    <p className="mt-3.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {edu.notes}
                                    </p>

                                    {/* Capstone Thesis Box (If available, e.g. PCR) */}
                                    {edu.capstone && (
                                        <div className="mt-5 p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
                                            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
                                                <Sparkles className="w-3.5 h-3.5" />
                                                <span>{edu.capstone.title}</span>
                                            </div>
                                            <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                                                {edu.capstone.name}
                                            </div>
                                            {edu.capstone.metrics && (
                                                <div className="mt-2.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-md border border-emerald-200/50 dark:border-emerald-800/40 inline-block">
                                                    {edu.capstone.metrics}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Bidang yang dipelajari / Relevant Coursework */}
                                    {((edu.courses && edu.courses.length > 0) || (edu.courseGroups && edu.courseGroups.length > 0)) && (
                                        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                                            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
                                                <BookOpen className="w-3.5 h-3.5" />
                                                <span>{edu.ukk ? (experienceEducation.vocationalSubjects || "Bidang yang Dipelajari") : experienceEducation.relevantCourses}</span>
                                            </div>

                                            {edu.courseGroups && edu.courseGroups.length > 0 ? (
                                                <div className="space-y-3">
                                                    {edu.courseGroups.map((group, gIdx) => (
                                                        <div key={gIdx}>
                                                            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                                                                {group.title}
                                                            </div>
                                                            <div className="flex flex-wrap gap-1.5">
                                                                {group.courses.map((course, cIdx) => (
                                                                    <span
                                                                        key={cIdx}
                                                                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                                                                    >
                                                                        {course}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex flex-wrap gap-1.5">
                                                    {edu.courses.map((course, cIdx) => (
                                                        <span
                                                            key={cIdx}
                                                            className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                                                        >
                                                            {course}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Uji Kompetensi Keahlian (UKK) */}
                                    {edu.ukk && (
                                        <div className="mt-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                                                    <Code2 className="w-4 h-4" />
                                                    <span>{edu.ukk.title}</span>
                                                </div>
                                                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                                                    {edu.ukk.badge}
                                                </span>
                                            </div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-white">
                                                {edu.ukk.projectName}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-1.5 mt-2">
                                                {edu.ukk.technologies.map((tech, tIdx) => (
                                                    <span key={tIdx} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                                <span className="font-semibold text-slate-900 dark:text-white">{edu.ukk.role}: </span>
                                                {edu.ukk.description}
                                            </div>
                                            <div className="mt-2.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium flex items-start gap-1.5">
                                                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                                <span>{edu.ukk.result}</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Praktik Kerja Lapangan (PKL) */}
                                    {edu.pkl && (
                                        <div className="mt-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                                                    <Building2 className="w-4 h-4" />
                                                    <span>{edu.pkl.title}</span>
                                                </div>
                                                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                                                    {edu.pkl.period}
                                                </span>
                                            </div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-white">
                                                {edu.pkl.company}
                                            </div>
                                            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                                                {edu.pkl.role}
                                            </div>

                                            {/* Duties */}
                                            <div className="mt-3 space-y-1.5">
                                                {edu.pkl.duties.map((duty, dIdx) => (
                                                    <div key={dIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                                                        <span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span>
                                                        <span>{duty}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Outputs */}
                                            {edu.pkl.outputs && (
                                                <div className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 leading-relaxed">
                                                    <span className="font-semibold text-slate-900 dark:text-white">{experienceEducation.outputsLabel || "Keluaran / Kontribusi:"} </span>
                                                    {edu.pkl.outputs}
                                                </div>
                                            )}

                                            {/* Evaluation Micro-Dashboard (5 Criteria) */}
                                            {edu.pkl.evaluation && (
                                                <div className="mt-3.5 pt-3 border-t border-slate-200/80 dark:border-slate-700/80">
                                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                                                            <Award className="w-3.5 h-3.5 text-amber-500" />
                                                            <span>{edu.pkl.evaluation.title}</span>
                                                        </div>
                                                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                                                            Rata-rata: {edu.pkl.evaluation.averageScore}
                                                        </span>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-1.5 text-center">
                                                        {edu.pkl.evaluation.criteria.map((crit, cIdx) => (
                                                            <div key={cIdx} className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60">
                                                                <div className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white">
                                                                    {crit.score}
                                                                </div>
                                                                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate" title={crit.name}>
                                                                    {crit.name}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Certification Note */}
                                            {edu.pkl.certification && (
                                                <div className="mt-3 flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 bg-emerald-50/50 dark:bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-200/40 dark:border-emerald-800/30">
                                                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                                    <span>{edu.pkl.certification}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Content: 3. Certifications */}
                {activeTab === 'certifications' && (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedCert(cert)}
                                    className="group relative p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-indigo-400/80 dark:hover:border-indigo-500/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
                                >
                                    {/* Subtle gradient hover wash */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                    <div>
                                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2.5">
                                            <span className="font-mono font-medium">{cert.year}</span>
                                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50">
                                                {cert.type}
                                            </span>
                                        </div>

                                        <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {cert.title}
                                        </h3>

                                        <div className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1.5">
                                            <span>{cert.issuer}</span>
                                        </div>

                                        {cert.score && (
                                            <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-mono text-[11px] font-bold border border-indigo-200/60 dark:border-indigo-800/60">
                                                <span>Skor: {cert.score}</span>
                                            </div>
                                        )}

                                        {cert.credentialId && (
                                            <div className="mt-2 text-[11px] font-mono text-slate-400 dark:text-slate-500 truncate">
                                                ID: {cert.credentialId}
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom Action Hint */}
                                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                        <span className="inline-flex items-center gap-1.5 text-[11px]">
                                            {cert.image ? (
                                                <>
                                                    <Eye className="w-3.5 h-3.5 text-indigo-500" />
                                                    <span>{experienceEducation.certificateModal?.viewBtn || 'Buka Sertifikat'}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Award className="w-3.5 h-3.5 text-indigo-500" />
                                                    <span>{experienceEducation.certificateModal?.officialBadge || 'Kredensial Terverifikasi'}</span>
                                                </>
                                            )}
                                        </span>
                                        <span className="p-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                            <Eye className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Content: 4. Leadership & Achievements */}
                {activeTab === 'leadership' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {achievementsAndLeadership.map((item, index) => {
                            const badgeConfig = getItemBadge(item.category);
                            const ItemIcon = badgeConfig.icon;
                            const hasImage = Boolean(item.image);

                            return (
                                <div
                                    key={index}
                                    onClick={() => hasImage ? setSelectedCert({ ...item, isAward: true, issuer: item.org }) : null}
                                    className={`p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between transition-all duration-300 ${
                                        hasImage 
                                            ? 'cursor-pointer hover:border-amber-400 dark:hover:border-amber-500 hover:-translate-y-1 hover:shadow-md group' 
                                            : 'hover:border-indigo-400/60 dark:hover:border-indigo-600/60'
                                    }`}
                                >
                                    <div>
                                        <div className="flex items-start justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className={`p-2.5 rounded-xl shrink-0 ${badgeConfig.iconBg} ${hasImage ? 'group-hover:scale-105 transition-transform' : ''}`}>
                                                    <ItemIcon className="w-5 h-5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                                                        <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                                                            {item.year}
                                                        </span>
                                                        {item.category && (
                                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeConfig.badgeBg}`}>
                                                                {item.category}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 block truncate">
                                                        {item.org}
                                                    </span>
                                                </div>
                                            </div>

                                            {hasImage && (
                                                <div className="relative w-14 h-16 sm:w-16 sm:h-20 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 shrink-0 group-hover:scale-105 group-hover:border-amber-400 transition-all shadow-xs">
                                                    <img 
                                                        src={item.image} 
                                                        alt={item.title} 
                                                        className="w-full h-full object-cover object-top" 
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                                                    <span className="absolute bottom-1 right-1 p-0.5 rounded bg-amber-500/90 text-white text-[9px]">
                                                        <Eye className="w-2.5 h-2.5" />
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <h3 className={`text-base font-bold text-slate-900 dark:text-white leading-snug ${hasImage ? 'group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors' : ''}`}>
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {hasImage && (
                                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                                            <span className="inline-flex items-center gap-1.5 text-[11px]">
                                                <Eye className="w-3.5 h-3.5" />
                                                <span>{experienceEducation.certificateModal?.viewBtn || 'Lihat Dokumentasi Resmi'}</span>
                                            </span>
                                            <span className="p-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                                                <Eye className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

            </div>

            {/* Certificate Modal Lightbox (In-Page Animated Popup) */}
            {selectedCert && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-modal-backdrop"
                    onClick={() => setSelectedCert(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div 
                        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col animate-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/80 backdrop-blur-sm shrink-0">
                            <div className="flex items-center gap-3 min-w-0 pr-4">
                                <div className={`p-2.5 rounded-xl shrink-0 ${
                                    selectedCert.isAward 
                                        ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400' 
                                        : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                                }`}>
                                    {selectedCert.isAward ? <Trophy className="w-5 h-5 text-amber-500" /> : <Award className="w-5 h-5" />}
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/50 dark:border-indigo-800/50">
                                            {selectedCert.type || selectedCert.category || 'Sertifikasi'}
                                        </span>
                                        {selectedCert.partner && (
                                            <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1">
                                                <Sparkles className="w-3 h-3 text-emerald-500" />
                                                <span>{selectedCert.partner}</span>
                                            </span>
                                        )}
                                        <span className="text-xs text-slate-400 font-mono">
                                            {selectedCert.year}
                                        </span>
                                    </div>
                                    <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                                        {selectedCert.title}
                                    </h3>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedCert(null)}
                                aria-label="Tutup"
                                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Scrollable Body */}
                        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
                            {/* Image Display */}
                            {selectedCert.image ? (
                                <div className="space-y-3">
                                    {selectedCert.pages && selectedCert.pages.length > 1 && (
                                        <div className="flex items-center justify-center gap-2 flex-wrap">
                                            {selectedCert.pages.map((pg, pIdx) => (
                                                <button
                                                    key={pIdx}
                                                    onClick={() => setActivePage(pIdx)}
                                                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                                                        activePage === pIdx
                                                            ? 'bg-indigo-600 text-white shadow-xs'
                                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                                    }`}
                                                >
                                                    <span>{pg.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950/90 shadow-inner flex items-center justify-center p-2 sm:p-4 group">
                                        <img 
                                            src={selectedCert.pages ? selectedCert.pages[activePage]?.image : selectedCert.image} 
                                            alt={selectedCert.title} 
                                            className="max-h-[56vh] sm:max-h-[62vh] w-auto max-w-full rounded-lg object-contain shadow-md transition-transform duration-300 group-hover:scale-[1.01]" 
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-indigo-50/50 to-slate-50 dark:from-slate-800/40 dark:to-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                                    <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        {selectedCert.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                                        {selectedCert.desc || (experienceEducation.certificateModal?.noImageNotice || 'Sertifikasi resmi tercatat dan terafiliasi dengan lembaga penerbit terkait.')}
                                    </p>
                                </div>
                            )}

                            {/* Details Meta Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
                                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                        {experienceEducation.certificateModal?.issuedBy || 'Lembaga Penerbit'}
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                                        {selectedCert.issuer || selectedCert.org}
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
                                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                        {experienceEducation.certificateModal?.credentialId || 'ID Kredensial'}
                                    </div>
                                    <div className="text-xs sm:text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400 mt-0.5 break-all">
                                        {selectedCert.credentialId || 'Verified Record'}
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
                                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                        {experienceEducation.certificateModal?.issueDate || 'Tanggal Perolehan'}
                                    </div>
                                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                                        {selectedCert.issueDate || selectedCert.year}
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
                                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                        {selectedCert.signerLabel
                                            ? selectedCert.signerLabel
                                            : selectedCert.score 
                                                ? (experienceEducation.certificateModal?.scoreLabel || 'Skor / Pencapaian')
                                                : selectedCert.speaker 
                                                    ? (experienceEducation.certificateModal?.speaker || 'Pemateri / Instruktur') 
                                                    : (experienceEducation.certificateModal?.duration || 'Beban / Waktu Belajar')}
                                    </div>
                                    <div className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 truncate" title={selectedCert.speaker || selectedCert.hours || ''}>
                                        {selectedCert.score || selectedCert.speaker || selectedCert.hours || 'Terverifikasi Resmi'}
                                    </div>
                                </div>
                            </div>

                            {/* Award & Legal Credentials Details (e.g. Mahasiswa Berprestasi PCR) */}
                            {selectedCert.awardDetails && (
                                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-amber-50/70 dark:from-amber-950/30 dark:via-slate-800/60 dark:to-slate-900 border border-amber-200/80 dark:border-amber-800/50">
                                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                        <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                                            <Trophy className="w-3.5 h-3.5 text-amber-500" />
                                            <span>{selectedCert.awardDetails.title || 'Legalitas & Rincian Sertifikat Resmi'}</span>
                                        </div>
                                        {selectedCert.awardDetails.badge && (
                                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500 text-white shadow-xs">
                                                {selectedCert.awardDetails.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {selectedCert.awardDetails.items.map((it, idx) => (
                                            <div key={idx} className="p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-amber-100/70 dark:border-amber-800/40 text-xs shadow-xs">
                                                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">{it.label}</span>
                                                <span className="font-semibold text-slate-900 dark:text-white mt-0.5 block">{it.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Score Breakdown (e.g. TOEIC Prediction) */}
                            {selectedCert.scoreBreakdown && (
                                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50/90 via-blue-50/60 to-purple-50/80 dark:from-indigo-950/40 dark:via-slate-800/60 dark:to-slate-900 border border-indigo-100 dark:border-indigo-900/50">
                                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                        <div className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                                            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                                            <span>{selectedCert.scoreBreakdown.title}</span>
                                        </div>
                                        <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-indigo-600 text-white shadow-xs">
                                            Total: {selectedCert.scoreBreakdown.total}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        {selectedCert.scoreBreakdown.items.map((it, idx) => (
                                            <div key={idx} className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-indigo-100/70 dark:border-indigo-800/50 text-center shadow-xs">
                                                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{it.label}</div>
                                                <div className="text-base sm:text-xl font-mono font-black text-indigo-600 dark:text-indigo-400 mt-0.5">{it.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedCert.desc && (
                                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-indigo-50/50 dark:bg-indigo-950/30 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/40">
                                    {selectedCert.desc}
                                </div>
                            )}

                            {/* Verified Syllabus & Modules */}
                            {selectedCert.modules && selectedCert.modules.length > 0 && (
                                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                                    <div className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-1.5">
                                        <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                                        <span>{experienceEducation.certificateModal?.syllabusTitle || 'Silabus & Modul Kompetensi Terverifikasi'}</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {selectedCert.modules.map((mod, mIdx) => (
                                            <div key={mIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                                                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                                                <span>{mod}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* Modal Footer Actions */}
                        <div className="px-5 sm:px-7 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/80 backdrop-blur-sm flex flex-wrap items-center justify-between gap-3 shrink-0">
                            <div className="flex flex-wrap items-center gap-2">
                                {selectedCert.verifyUrl && (
                                    <a
                                        href={selectedCert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                                        <span>{experienceEducation.certificateModal?.verifyBtn || 'Verifikasi Kredensial Resmi'}</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                                {(selectedCert.image || (selectedCert.pages && selectedCert.pages[activePage]?.image)) && (
                                    <a
                                        href={selectedCert.pages ? selectedCert.pages[activePage]?.image : selectedCert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        <Maximize2 className="w-3.5 h-3.5 text-slate-500" />
                                        <span>{experienceEducation.certificateModal?.openFull || 'Buka Gambar Penuh'}</span>
                                    </a>
                                )}
                            </div>
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors ml-auto"
                            >
                                {experienceEducation.certificateModal?.close || 'Tutup'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
