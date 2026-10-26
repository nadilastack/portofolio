import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { portfolioData } from '../data/portfolioData';
import { 
    Printer, 
    ArrowLeft, 
    Download, 
    Globe, 
    CheckCircle2, 
    ExternalLink,
    Mail,
    Phone,
    MapPin,
    Sparkles,
    FileCheck
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../Components/BrandIcons';

export default function AtsCv(props) {
    // Tentukan bahasa awal dari prop, query param, atau localStorage
    const initialLang = () => {
        if (props.lang === 'id' || props.lang === 'en') return props.lang;
        if (typeof window !== 'undefined') {
            const urlLang = new URLSearchParams(window.location.search).get('lang');
            if (urlLang === 'id' || urlLang === 'en') return urlLang;
            const saved = localStorage.getItem('portfolio_lang');
            if (saved === 'id' || saved === 'en') return saved;
        }
        return 'id';
    };

    const [lang, setLang] = useState(initialLang);

    // Auto-print check jika parameter ?print=1 disertakan
    useEffect(() => {
        const shouldAutoPrint = props.autoPrint || (
            typeof window !== 'undefined' && (
                new URLSearchParams(window.location.search).get('print') === '1' ||
                new URLSearchParams(window.location.search).get('print') === 'true'
            )
        );

        if (shouldAutoPrint) {
            const timer = setTimeout(() => {
                window.print();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [props.autoPrint]);

    const handleSwitchLang = (newLang) => {
        setLang(newLang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('portfolio_lang', newLang);
            const url = new URL(window.location.href);
            url.searchParams.set('lang', newLang);
            window.history.replaceState({}, '', url.toString());
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const data = portfolioData[lang] || portfolioData.id;
    const { profile, experiences, projects, education, certifications, achievementsAndLeadership, skillGroups, cvData } = data;
    const ats = cvData?.atsView || {};
    const sections = ats.sections || {};
    const labels = ats.labels || {};

    // Grouping skill teks untuk format ATS standar
    const fullstackSkills = data.skills?.filter(s => s.category === 'fullstack' || s.category === 'backend' || s.category === 'frontend').map(s => s.name).join(', ') || 'Laravel 11, React.js, PHP, JavaScript (ES6+), MySQL, RESTful API, Tailwind CSS, Inertia.js, HTML5, CSS3, Vite';
    const analysisSkills = data.skills?.filter(s => s.category === 'analysis' || s.category === 'testing').map(s => s.name).join(', ') || 'Business Process Model & Notation (BPMN), User Stories, Functional Requirements (FR), System Architecture, UAT, System Usability Scale (SUS), Blackbox Testing, Draw.io, Figma';
    const dataSkills = data.skills?.filter(s => s.category === 'data' || s.category === 'performance').map(s => s.name).join(', ') || 'Python, SQL, Google Lighthouse, Core Web Vitals (LCP, FCP, TBT, CLS, TTFB), Chrome UX Report (CrUX), Data Analysis & Visualization';
    const toolsSkills = data.skills?.filter(s => s.category === 'tools').map(s => s.name).join(', ') || 'Git, GitHub, Postman, Visual Studio Code, Linux/Windows Environment, Agile/Scrum';

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 py-0 sm:py-8 transition-colors">
            <Head>
                <title>{ats.docTitle || `CV ATS - ${profile.name} | Fullstack Developer`}</title>
                <meta name="robots" content="noindex" />
            </Head>

            {/* STICKY TOP TOOLBAR (HIDDEN SAAT PRINT) */}
            <header className="no-print sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3 px-4 sm:px-8 mb-4 sm:mb-8">
                <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
                    
                    {/* Back Button & ATS Status Badge */}
                    <div className="flex items-center gap-3">
                        <a
                            href="/"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>{ats.backToPortfolio || "Kembali ke Portofolio"}</span>
                        </a>

                        <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>{ats.atsScoreBadge || "100% ATS Friendly"}</span>
                        </div>
                    </div>

                    {/* Actions: Language Toggle + Print + Original Download */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Language Switcher */}
                        <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <button
                                onClick={() => handleSwitchLang('id')}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                                    lang === 'id' 
                                        ? 'bg-indigo-600 text-white shadow-xs' 
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                🇮🇩 ID
                            </button>
                            <button
                                onClick={() => handleSwitchLang('en')}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                                    lang === 'en' 
                                        ? 'bg-indigo-600 text-white shadow-xs' 
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                🇬🇧 EN
                            </button>
                        </div>

                        {/* Primary Print / Save to PDF Button */}
                        <button
                            onClick={handlePrint}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Printer className="w-4 h-4" />
                            <span>{ats.printSavePdf || "Cetak / Simpan PDF"}</span>
                        </button>

                        {/* Original Document PDF Link */}
                        <a
                            href={profile.cvFileUrl}
                            download="CV_Nadila_Putri_IND.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            <span>{ats.originalPdfBtn || "Dokumen Asli"}</span>
                        </a>
                    </div>
                </div>

                {/* Subtitle Bar Info */}
                <div className="max-w-5xl mx-auto mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-indigo-500" />
                        {ats.autoSyncNotice || "Data CV ini tersinkronisasi otomatis dari database portofolio terkini."}
                    </span>
                    <span className="hidden sm:inline text-slate-400">
                        {lang === 'id' ? 'Standar ATS: Satu Kolom, Tanpa Grafik Mengganggu, Lolos Bot HRD' : 'ATS Standard: Single-Column, Clean Typography, 100% Machine Parsable'}
                    </span>
                </div>
            </header>

            {/* ATS CV DOCUMENT CANVAS (A4 SHEET) */}
            <main className="max-w-[210mm] mx-auto bg-white text-slate-900 shadow-xl sm:rounded-md p-8 sm:p-14 cv-sheet font-sans selection:bg-indigo-100 selection:text-indigo-900">
                
                {/* 1. HEADER: IDENTITAS & KONTAK (ATS STANDARD TOP-TO-BOTTOM) */}
                <header className="border-b-2 border-slate-900 pb-3 mb-5 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900">
                        {profile.name}
                    </h1>
                    <p className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5 tracking-wide uppercase">
                        {profile.roleHeadline}
                    </p>

                    {/* Contact Bar Line */}
                    <div className="mt-2.5 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-[11px] sm:text-xs text-slate-700">
                        <span className="font-medium">{profile.location}, Indonesia</span>
                        <span>•</span>
                        <a href={`mailto:${profile.email}`} className="font-medium text-slate-900 underline hover:text-indigo-600">
                            {profile.email}
                        </a>
                        <span>•</span>
                        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900 underline hover:text-indigo-600">
                            linkedin.com/in/nadila-putri
                        </a>
                        <span>•</span>
                        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900 underline hover:text-indigo-600">
                            github.com/nadilastack
                        </a>
                        <span>•</span>
                        <a href="https://nadilaputri.com" className="font-medium text-slate-900 underline hover:text-indigo-600">
                            Live Portfolio
                        </a>
                    </div>

                    {/* BNSP Credential Line */}
                    <div className="mt-1 text-[11px] text-slate-700 font-semibold">
                        <span className="text-emerald-800">✓ BNSP Certified Programmer:</span> {profile.competencyStatus || "KOMPETEN - LSP Politeknik Caltex Riau (BNSP-LSP-564-ID)"}
                    </div>
                </header>

                {/* 2. RINGKASAN PROFESIONAL / PROFESSIONAL SUMMARY */}
                <section className="mb-5 page-break-inside-avoid">
                    <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-2">
                        {sections.summary || "RINGKASAN PROFESIONAL"}
                    </h2>
                    <p className="text-xs sm:text-[13px] leading-relaxed text-slate-800 text-justify">
                        {profile.summary}
                    </p>
                </section>

                {/* 3. KEAHLIAN TEKNIS / TECHNICAL SKILLS */}
                <section className="mb-5 page-break-inside-avoid">
                    <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-2">
                        {sections.skills || "KEAHLIAN TEKNIS"}
                    </h2>
                    <div className="space-y-1.5 text-xs sm:text-[12.5px] text-slate-800">
                        <div>
                            <span className="font-bold text-slate-900">
                                {lang === 'id' ? 'Fullstack Web Development' : 'Fullstack Web Development'}:
                            </span>{' '}
                            <span>{fullstackSkills}</span>
                        </div>
                        <div>
                            <span className="font-bold text-slate-900">
                                {lang === 'id' ? 'Business & System Analysis' : 'Business & System Analysis'}:
                            </span>{' '}
                            <span>{analysisSkills}</span>
                        </div>
                        <div>
                            <span className="font-bold text-slate-900">
                                {lang === 'id' ? 'Data & Performance Analysis' : 'Data & Web Performance Analysis'}:
                            </span>{' '}
                            <span>{dataSkills}</span>
                        </div>
                        <div>
                            <span className="font-bold text-slate-900">
                                {lang === 'id' ? 'Tools & Workflow' : 'Tools & Workflow'}:
                            </span>{' '}
                            <span>{toolsSkills}</span>
                        </div>
                    </div>
                </section>

                {/* 4. PENGALAMAN KERJA & MAGANG / WORK EXPERIENCE */}
                <section className="mb-5">
                    <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-2.5">
                        {sections.experience || "PENGALAMAN KERJA & MAGANG"}
                    </h2>
                    <div className="space-y-4">
                        {experiences?.map((exp, idx) => (
                            <div key={idx} className="page-break-inside-avoid">
                                <div className="flex flex-wrap items-baseline justify-between gap-1 text-xs sm:text-[13px]">
                                    <div className="font-bold text-slate-900">
                                        <span>{exp.role}</span>
                                        <span className="font-normal text-slate-600"> | </span>
                                        <span className="font-semibold text-slate-800">{exp.company}</span>
                                    </div>
                                    <div className="font-bold text-slate-700 text-right">
                                        {exp.period}
                                    </div>
                                </div>
                                <div className="text-[11px] text-slate-500 italic mb-1.5">
                                    {exp.location}
                                </div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[12px] text-slate-800 leading-normal">
                                    {exp.highlights?.map((hl, hIdx) => (
                                        <li key={hIdx}>{hl}</li>
                                    ))}
                                </ul>
                                {exp.evaluation && (
                                    <div className="mt-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50/70 p-1 rounded">
                                        ★ {lang === 'id' ? 'Penilaian Kinerja Industri' : 'Industrial Performance Evaluation'}: {exp.evaluation.averageScore} ({exp.evaluation.predicate})
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. PROYEK & STUDI KASUS UNGGULAN / FEATURED PROJECTS */}
                <section className="mb-5">
                    <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-2.5">
                        {sections.projects || "PROYEK & STUDI KASUS UNGGULAN"}
                    </h2>
                    <div className="space-y-3.5">
                        {projects?.map((proj, idx) => (
                            <div key={idx} className="page-break-inside-avoid">
                                <div className="flex flex-wrap items-baseline justify-between gap-1 text-xs sm:text-[13px]">
                                    <div className="font-bold text-slate-900">
                                        {proj.title}
                                    </div>
                                    <div className="text-[11px] font-semibold text-indigo-700">
                                        {proj.badgeText}
                                    </div>
                                </div>
                                
                                <div className="text-[11px] text-slate-700 font-medium mb-1">
                                    <span className="font-bold">{labels.role || 'Peran'}:</span> {proj.caseStudy?.role} 
                                    <span className="mx-1">•</span> 
                                    <span className="font-bold">{labels.stack || 'Teknologi'}:</span> {proj.caseStudy?.technologies?.join(', ')}
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs sm:text-[12px] text-slate-800 leading-normal">
                                    {proj.caseStudy?.impacts?.map((imp, impIdx) => (
                                        <li key={impIdx} className="leading-snug">
                                            {typeof imp === 'string' ? imp : `${imp.label || ''}: ${imp.value || ''} - ${imp.desc || ''}`}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. PENDIDIKAN / EDUCATION */}
                <section className="mb-5 page-break-inside-avoid">
                    <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-2.5">
                        {sections.education || "PENDIDIKAN"}
                    </h2>
                    <div className="space-y-3">
                        {education?.map((edu, idx) => (
                            <div key={idx} className="page-break-inside-avoid">
                                <div className="flex flex-wrap items-baseline justify-between gap-1 text-xs sm:text-[13px]">
                                    <div className="font-bold text-slate-900">
                                        <span>{edu.institution}</span>
                                        <span className="font-normal text-slate-600"> — </span>
                                        <span className="font-semibold text-slate-800">{edu.degree}</span>
                                    </div>
                                    <div className="font-bold text-slate-700 text-right">
                                        {edu.period}
                                    </div>
                                </div>
                                
                                <div className="text-[11px] font-semibold text-slate-800 mt-0.5">
                                    {edu.gpa} {edu.predicate ? `(${edu.predicate})` : ''}
                                </div>

                                {edu.capstone && (
                                    <div className="mt-1 text-xs text-slate-800 pl-3 border-l-2 border-indigo-500">
                                        <span className="font-bold">{edu.capstone.title}:</span> "{edu.capstone.name}"
                                        <div className="text-[11px] text-slate-600 font-medium">
                                            → {edu.capstone.metrics}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 7. SERTIFIKASI PROFESIONAL & LISENSI / CERTIFICATIONS */}
                <section className="mb-5 page-break-inside-avoid">
                    <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-2">
                        {sections.certifications || "SERTIFIKASI PROFESIONAL & LISENSI"}
                    </h2>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[12px] text-slate-800">
                        {certifications?.slice(0, 8).map((cert, idx) => (
                            <li key={idx}>
                                <span className="font-bold text-slate-900">{cert.title}</span> – {cert.issuer} ({cert.year || cert.issueDate})
                                {cert.credentialId && (
                                    <span className="text-[11px] text-slate-600"> [ID: {cert.credentialId}]</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* 8. PRESTASI, KEPEMIMPINAN & ORGANISASI / HONORS & LEADERSHIP */}
                <section className="page-break-inside-avoid">
                    <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-2">
                        {sections.leadership || "PRESTASI, KEPEMIMPINAN & ORGANISASI"}
                    </h2>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[12px] text-slate-800">
                        {achievementsAndLeadership?.slice(0, 6).map((ach, idx) => (
                            <li key={idx}>
                                <span className="font-bold text-slate-900">{ach.title}</span> – {ach.org} ({ach.year || ach.period})
                                <div className="text-[11px] text-slate-700 leading-snug">
                                    {ach.desc}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* FOOTER NOTICE IN PRINT */}
                <footer className="mt-8 pt-2 border-t border-slate-300 text-[10px] text-slate-500 text-center">
                    {lang === 'id'
                        ? 'Curriculum Vitae ini dihasilkan secara dinamis berdasarkan data portofolio resmi Nadila Putri (https://nadilaputri.com).'
                        : 'This Curriculum Vitae is dynamically generated from Nadila Putri\'s official verified portfolio (https://nadilaputri.com).'
                    }
                </footer>

            </main>
        </div>
    );
}
