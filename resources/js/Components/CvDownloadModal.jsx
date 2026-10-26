import React from 'react';
import { 
    X, 
    FileText, 
    Printer, 
    Sparkles, 
    ExternalLink, 
    ShieldCheck,
    Globe
} from 'lucide-react';

export default function CvDownloadModal({ isOpen, onClose, lang, onToggleLang, portfolioData }) {
    if (!isOpen) return null;

    const data = portfolioData[lang] || portfolioData.id;
    const modalContent = data.cvData?.modal || {
        badge: "Format Standar HRD & ATS",
        title: "Unduh Curriculum Vitae (CV)",
        subtitle: "Format satu kolom standar industri yang disinkronkan otomatis dari portofolio terbaru.",
        langLabel: "Bahasa CV:",
        recommendedBadge: "Rekomendasi untuk HRD & Portal ATS",
        atsOption: {
            badge: "100% ATS Friendly · Otomatis",
            title: "CV Format Standar ATS (Terkini & Otomatis)",
            desc: "Format satu kolom standar industri (Workday, Taleo, Greenhouse, Glints, Jobstreet). Tersinkronisasi otomatis dengan proyek terbaru, magang, dan sertifikasi BNSP.",
            printBtn: "Cetak / Simpan sebagai PDF",
            previewBtn: "Pratinjau CV",
        },
        closeBtn: "Tutup",
        atsHint: "💡 Tips HRD: Format ATS satu kolom ini memastikan data pengalaman, keahlian, dan pendidikan kamu dapat dipindai sempurna oleh sistem penyaring pelamar (ATS)."
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
        <div className="fixed inset-0 z-50 p-3 sm:p-4 md:p-6 flex items-center justify-center overflow-y-auto">
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-modal-backdrop"
                onClick={onClose}
            />

            {/* Modal Dialog Card (Optimized Height, Never Clipped) */}
            <div 
                className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 text-left overflow-hidden transition-all transform animate-modal-content my-auto max-h-[92vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top Decorative Header Accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 shrink-0" />

                <div className="p-4 sm:p-6 overflow-y-auto">
                    {/* Header Bar */}
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 mb-1.5">
                                <Sparkles className="w-3 h-3" />
                                <span>{modalContent.badge || "Format Standar HRD & ATS"}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                                {modalContent.title}
                            </h3>
                            <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                                {modalContent.subtitle}
                            </p>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Language Selector Toggle */}
                    <div className="mb-3.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                            <Globe className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                            <span>{modalContent.langLabel}</span>
                        </div>
                        <div className="inline-flex p-0.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xs">
                            <button
                                onClick={() => onToggleLang('id')}
                                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                                    lang === 'id'
                                        ? 'bg-indigo-600 text-white shadow-xs'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                🇮🇩 ID
                            </button>
                            <button
                                onClick={() => onToggleLang('en')}
                                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                                    lang === 'en'
                                        ? 'bg-indigo-600 text-white shadow-xs'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                🇬🇧 EN
                            </button>
                        </div>
                    </div>

                    {/* CV ATS Card (Focused, Compact & Clean) */}
                    <div className="relative p-4 sm:p-5 rounded-2xl border-2 border-indigo-500/80 bg-gradient-to-br from-indigo-50/60 via-white to-teal-50/40 dark:from-indigo-950/40 dark:via-slate-900 dark:to-teal-950/20 shadow-sm">
                        <div className="flex items-start gap-3.5">
                            <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30 shrink-0">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                                        {modalContent.atsOption.title}
                                    </h4>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 shrink-0">
                                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                        ATS Ready
                                    </span>
                                </div>
                                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {modalContent.atsOption.desc}
                                </p>

                                {/* Action Buttons for ATS */}
                                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                                    <button
                                        onClick={handlePrintClick}
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex-1 sm:flex-initial"
                                    >
                                        <Printer className="w-4 h-4" />
                                        <span>{modalContent.atsOption.printBtn}</span>
                                    </button>

                                    <button
                                        onClick={handlePreviewClick}
                                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        <span>{modalContent.atsOption.previewBtn}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Helpful HR Hint */}
                    <div className="mt-3.5 p-2.5 sm:p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-300 leading-relaxed">
                        {modalContent.atsHint}
                    </div>

                </div>
            </div>
        </div>
    );
}
