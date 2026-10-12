import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { 
    Mail, 
    Send, 
    MapPin, 
    CheckCircle2, 
    AlertCircle,
    Sparkles,
    Copy,
    Check,
    ExternalLink,
    Briefcase
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';

export default function ContactSection({ profile, contact }) {
    const { flash } = usePage().props;
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [staticSuccess, setStaticSuccess] = useState(false);
    
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleCopyEmail = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(profile.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isStaticHost = typeof window !== 'undefined' && (
            window.location.hostname.includes('github.io') || 
            window.location.protocol === 'file:'
        );

        if (isStaticHost) {
            const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(data.subject || 'Pesan Portofolio - ' + (data.name || 'Pengunjung'))}&body=${encodeURIComponent(`Halo Nadila,\n\nNama: ${data.name}\nEmail: ${data.email}\n\nPesan:\n${data.message}`)}`;
            window.open(mailtoUrl, '_blank');
            setStaticSuccess(true);
            reset();
            return;
        }

        post('/contact', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <section id="kontak" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="max-w-3xl mb-12">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{contact.badge}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {contact.title}
                    </h2>
                    <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                        {contact.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left: Modern Interactive Contact Cards */}
                    <div className="lg:col-span-5 space-y-4">
                        
                        {/* 1. Email Card with Copy to Clipboard */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-600 transition-all group">
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3.5">
                                    <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                            {contact.emailLabel}
                                        </div>
                                        <a
                                            href={`mailto:${profile.email}`}
                                            className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block break-all"
                                        >
                                            {profile.email}
                                        </a>
                                    </div>
                                </div>
                                
                                <button
                                    onClick={handleCopyEmail}
                                    title={contact.copyEmail}
                                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shrink-0"
                                >
                                    {copiedEmail ? (
                                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                                            <Check className="w-4 h-4" />
                                        </span>
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* 2. LinkedIn Card */}
                        <a
                            href={profile.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 transition-all block group"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3.5">
                                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                                        <LinkedinIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                            LinkedIn
                                        </div>
                                        <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {profile.name}
                                        </div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                            {contact.linkedinSub}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0">
                                    <ExternalLink className="w-4 h-4" />
                                </div>
                            </div>
                        </a>

                        {/* 4. GitHub Card */}
                        <a
                            href={profile.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-slate-400 dark:hover:border-slate-600 transition-all block group"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3.5">
                                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:scale-105 transition-transform shrink-0">
                                        <GithubIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                            GitHub
                                        </div>
                                        <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {contact.githubTitle}
                                        </div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                            {contact.githubSub}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors shrink-0">
                                    <ExternalLink className="w-4 h-4" />
                                </div>
                            </div>
                        </a>

                        {/* 5. Location & Work Availability */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                            <div className="flex items-center gap-3.5">
                                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                        {contact.locationLabel}
                                    </div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                                        {profile.location}, Indonesia
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                                            <Briefcase className="w-3 h-3" />
                                            {contact.openForWork}
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                            {contact.workMode}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                {contact.formHeading}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                                {contact.formSub}
                            </p>

                            {/* Flash Success Notification */}
                            {(flash?.success || recentlySuccessful || staticSuccess) && (
                                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        {flash?.success || contact.successMessage}
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                            {contact.labelName} <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder={contact.placeholderName}
                                            className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                                                <AlertCircle className="w-3.5 h-3.5" />
                                                <span>{errors.name}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                            {contact.labelEmail} <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder={contact.placeholderEmail}
                                            className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                                                <AlertCircle className="w-3.5 h-3.5" />
                                                <span>{errors.email}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                        {contact.labelSubject}
                                    </label>
                                    <input
                                        type="text"
                                        value={data.subject}
                                        onChange={(e) => setData('subject', e.target.value)}
                                        placeholder={contact.placeholderSubject}
                                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                                            <AlertCircle className="w-3.5 h-3.5" />
                                            <span>{errors.subject}</span>
                                        </p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                        {contact.labelMessage} <span className="text-rose-500">*</span>
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        placeholder={contact.placeholderMessage}
                                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                                            <AlertCircle className="w-3.5 h-3.5" />
                                            <span>{errors.message}</span>
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-indigo-600/25 transition-all text-sm"
                                >
                                    <Send className="w-4 h-4" />
                                    <span>{processing ? contact.submittingBtn : contact.submitBtn}</span>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
