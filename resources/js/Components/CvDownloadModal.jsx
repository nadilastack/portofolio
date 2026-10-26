import React from 'react';
import { 
    X, 
    FileText, 
    Printer, 
    Download, 
    Sparkles, 
    ExternalLink, 
    CheckCircle2, 
    ShieldCheck,
    Globe
} from 'lucide-react';

export default function CvDownloadModal({ isOpen, onClose, lang, onToggleLang, portfolioData }) {
    if (!isOpen) return null;

    const data = portfolioData[lang] || portfolioData.id;
    const modalContent = data.cvData?.modal || {
        badge: "Pilihan Format Unduhan",
        title: "Unduh Curriculum Vitae (CV)",
        subtitle: "Pilih format CV yang sesuai dengan kebutuhan Anda atau portal rekrutmen perusahaan.",
        langLabel: "Bahasa CV:",
        recommendedBadge: "Rekomendasi untuk HRD & Portal ATS",
        atsOption: {
            badge: "100% ATS Friendly · Otomatis",
            title: "CV Format ATS (Terkini & Otomatis)",
            desc: "Format satu kolom standar industri (Workday, Taleo, Greenhouse, dll.). Tersinkronisasi otomatis dengan portofolio terkini, proyek, magang, dan sertifikasi BNSP.",
            printBtn: "Buka & Simpan PDF (ATS)",
            previewBtn: "Pratinjau CV",
        },
        originalOption: {
            badge: "Format Dokumen Asli",
            title: "CV Dokumen Asli (PDF)",
            desc: "File dokumen PDF asli lengkap dengan layout visual grafis standar.",
            downloadBtn: "Unduh File PDF Asli",
        },
        closeBtn: "Tutup",
        atsHint: "💡 Tips HRD: Gunakan format ATS saat melamar via Job Portal (Jobstreet, Glints, LinkedIn, Tech in Asia, Workday) agar informasi Anda dapat diparsing sempurna oleh sistem."
    };

    const getBasePrefix = () => {
        const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) 
            ? import.meta.env.BASE_URL 
            : '/';
        return base.endsWith('/') ? base : `${base}/`;
    };

    const isStaticHost = typeof window !== 'undefined' && (
        window.location.hostname.includes('github.io') || 
        window.location.protocol === 'file:'
    );

    const getCvUrl = (withPrint = false) => {
        const prefix = getBasePrefix();
        const printParam = withPrint ? '&print=1' : '';
        if (isStaticHost) {
            return `${prefix}?view=cv&lang=${lang}${printParam}`;
        }
        return `${prefix}cv?lang=${lang}${printParam}`;
    };

    const handlePrintClick = () => {
        window.open(getCvUrl(true), '_blank');
        onClose();
    };

    const handlePreviewClick = () => {
        window.open(getCvUrl(false), '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-modal-backdrop"
                onClick={onClose}
            />

            {/* Modal Dialog */}
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
                <div 
                    className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 text-left overflow-hidden transition-all transform animate-modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Top Decorative Header Accent */}
                    <div className="h-2 w-full bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600" />

                    <div className="p-6 sm:p-8">
                        {/* Header Bar */}
                        <div className="flex items-start justify-between gap-4 mb-5">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 mb-2">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    <span>{modalContent.badge}</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                                    {modalContent.title}
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                                    {modalContent.subtitle}
                                </p>
                            </div>

                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Language Selector Toggle */}
                        <div className="mb-6 p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                                <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                <span>{modalContent.langLabel}</span>
                            </div>
                            <div className="inline-flex p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xs">
                                <button
                                    onClick={() => onToggleLang('id')}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                        lang === 'id'
                                            ? 'bg-indigo-600 text-white shadow-xs'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    🇮🇩 Bahasa Indonesia
                                </button>
                                <button
                                    onClick={() => onToggleLang('en')}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                        lang === 'en'
                                            ? 'bg-indigo-600 text-white shadow-xs'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    🇬🇧 English (US/Global)
                                </button>
                            </div>
                        </div>

                        {/* Format Options Grid */}
                        <div className="space-y-4">
                            
                            {/* Option 1: ATS-Friendly CV (Highlighted & Recommended) */}
                            <div className="relative p-5 sm:p-6 rounded-2xl border-2 border-indigo-500/80 bg-gradient-to-br from-indigo-50/60 via-white to-teal-50/40 dark:from-indigo-950/40 dark:via-slate-900 dark:to-teal-950/20 shadow-md">
                                <div className="absolute -top-3 right-4 sm:right-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-teal-600 text-white shadow-xs">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        {modalContent.atsOption.badge}
                                    </span>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30 shrink-0">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                                                {modalContent.atsOption.title}
                                            </h4>
                                        </div>
                                        <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {modalContent.atsOption.desc}
                                        </p>

                                        {/* Action Buttons for ATS */}
                                        <div className="mt-4 flex flex-wrap items-center gap-2.5">
                                            <button
                                                onClick={handlePrintClick}
                                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                <Printer className="w-4 h-4" />
                                                <span>{modalContent.atsOption.printBtn}</span>
                                            </button>

                                            <button
                                                onClick={handlePreviewClick}
                                                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                <span>{modalContent.atsOption.previewBtn}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Option 2: Original Document PDF */}
                            <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                                        <Download className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                                                {modalContent.originalOption.title}
                                            </h4>
                                            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                                PDF
                                            </span>
                                        </div>
                                        <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {modalContent.originalOption.desc}
                                        </p>

                                        <div className="mt-4">
                                            <a
                                                href={data.profile.cvFileUrl}
                                                download="CV_Nadila_Putri_IND.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={onClose}
                                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all"
                                            >
                                                <Download className="w-4 h-4" />
                                                <span>{modalContent.originalOption.downloadBtn}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Helpful HR Hint */}
                        <div className="mt-5 p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-[11px] sm:text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
                            {modalContent.atsHint}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
