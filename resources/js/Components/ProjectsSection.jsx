import React, { useState } from 'react';
import { 
    ExternalLink, 
    Sparkles, 
    Layers, 
    CheckCircle2, 
    ArrowRight, 
    X,
    Award,
    FileText,
    Download,
    Monitor,
    Smartphone,
    Eye,
    Trophy
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectsSection({ projects, projectsSection }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeModalProject, setActiveModalProject] = useState(null);
    
    // State untuk audit Proxsis (Desktop / Mobile view)
    const [auditMode, setAuditMode] = useState('desktop');
    
    // State untuk galeri IDP proposal
    const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

    const categories = ['All', 'Fullstack', 'Analysis', 'Data'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

    const getCategoryBadgeClass = (category) => {
        switch (category) {
            case 'Fullstack':
                return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
            case 'Analysis':
                return 'bg-teal-100 text-teal-700 dark:bg-teal-950/80 dark:text-teal-300 border-teal-200 dark:border-teal-800';
            case 'Data':
                return 'bg-amber-100 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800';
            default:
                return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
        }
    };

    const handleOpenModal = (project) => {
        setActiveModalProject(project);
        setAuditMode('desktop');
        setActiveGalleryIdx(0);
    };

    return (
        <section id="proyek" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{projectsSection.badge}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {projectsSection.title}
                        </h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl">
                            {projectsSection.subtitle}
                        </p>
                    </div>

                    {/* Filter Tabs dengan Count Badge */}
                    <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800 self-start md:self-auto">
                        {categories.map((cat) => {
                            const count = cat === 'All' ? projects.length : projects.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                                        selectedCategory === cat
                                            ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    <span>{cat === 'All' ? projectsSection.allTab : cat}</span>
                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-slate-300/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Projects Showcase Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => {
                        const isFeatured = project.featured;
                        return (
                            <div
                                key={project.id}
                                className={`group flex flex-col justify-between rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                                    isFeatured
                                        ? 'bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-900/60 shadow-md ring-1 ring-indigo-500/10'
                                        : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800/80 shadow-sm'
                                }`}
                            >
                                {/* Optional Image Banner / Mockup Preview */}
                                {project.image && (
                                    <div className="relative w-full h-52 sm:h-60 bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 cursor-pointer" onClick={() => handleOpenModal(project)}>
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                                        
                                        {/* Lighthouse Pill Badges on Card */}
                                        {project.auditData && (
                                            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                                                <span className="px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-1.5 shadow-sm">
                                                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                                                    Desktop: 52
                                                </span>
                                                <span className="px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-1.5 shadow-sm">
                                                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                                                    Mobile: 54
                                                </span>
                                                <span className="px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-emerald-500 text-white backdrop-blur-sm flex items-center gap-1 shadow-sm">
                                                    SEO: 92
                                                </span>
                                            </div>
                                        )}

                                        {project.proposalPdf && (
                                            <div className="absolute bottom-3 right-3">
                                                <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-indigo-600/90 text-white backdrop-blur-sm flex items-center gap-1.5 shadow-sm">
                                                    <FileText className="w-3.5 h-3.5" />
                                                    Proposal PDF
                                                </span>
                                            </div>
                                        )}

                                        {project.certificate && (
                                            <div className="absolute bottom-3 left-3">
                                                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-600/95 text-white backdrop-blur-sm border border-emerald-400/50 flex items-center gap-1.5 shadow-md">
                                                    <Trophy className="w-3.5 h-3.5 text-amber-300" />
                                                    <span>{project.certificate.title}</span>
                                                </span>
                                            </div>
                                        )}

                                        {project.caseStudy.links?.demo && project.caseStudy.links.demo.startsWith('http') && (
                                            <div className="absolute bottom-3 right-3">
                                                <a
                                                    href={project.caseStudy.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    title={project.caseStudy.links.demoLabel || "Kunjungi Website Live"}
                                                    className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-900/90 text-emerald-400 hover:text-emerald-300 hover:bg-slate-900 backdrop-blur-sm border border-emerald-500/40 flex items-center gap-1.5 shadow-md transition-all group/live"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                                    <span>Live Web</span>
                                                    <ExternalLink className="w-3 h-3 group-hover/live:translate-x-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Category & Badge */}
                                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getCategoryBadgeClass(project.category)}`}>
                                                    {project.category}
                                                </span>
                                                {isFeatured && (
                                                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-600 text-white flex items-center gap-1">
                                                        <Award className="w-3 h-3" />
                                                        {projectsSection.featuredBadge}
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                                                {project.badgeText}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Short Description */}
                                        <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                            {project.shortDescription}
                                        </p>

                                        {/* Tech Stack Pills */}
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.caseStudy.technologies.slice(0, 5).map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.caseStudy.technologies.length > 5 && (
                                                <span className="px-2 py-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                                                    +{project.caseStudy.technologies.length - 5}
                                                </span>
                                            )}
                                        </div>

                                        {/* Visual Architecture / Flow Preview (SVG Flowchart) */}
                                        <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80">
                                            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                                                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                                                <span>{project.caseStudy.systemArchitecture.title}</span>
                                            </div>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                {project.caseStudy.systemArchitecture.nodes.map((node, nIdx) => (
                                                    <div
                                                        key={nIdx}
                                                        className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-center relative"
                                                    >
                                                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                                                            {node.label}
                                                        </div>
                                                        <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                                                            {node.desc}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Key Impact Highlights */}
                                        <div className="mt-5 space-y-2">
                                            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                                {projectsSection.impactHeading}
                                            </div>
                                            <ul className="space-y-1.5">
                                                {project.caseStudy.impacts.slice(0, 2).map((impact, iIdx) => (
                                                    <li key={iIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                                                        <span>{impact}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Footer Actions */}
                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between mt-6">
                                        <button
                                            onClick={() => handleOpenModal(project)}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                                        >
                                            <span>{projectsSection.openModal}</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </button>

                                        <div className="flex items-center gap-2">
                                            {project.proposalPdf && (
                                                <a
                                                    href={project.proposalPdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Lihat Dokumen Proposal PDF"
                                                    className="p-2 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1 text-xs font-semibold"
                                                >
                                                    <FileText className="w-4 h-4" />
                                                    <span className="hidden sm:inline">PDF</span>
                                                </a>
                                            )}

                                            {project.caseStudy.links?.github && (
                                                <a
                                                    href={project.caseStudy.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Repository GitHub"
                                                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
                                                >
                                                    <GithubIcon className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.caseStudy.links?.demo && !project.proposalPdf && (
                                                <a
                                                    href={project.caseStudy.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Demo / Dokumen"
                                                    className="p-2 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Case Study Modal Detail View */}
                {activeModalProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
                        <div className="relative w-full max-w-4xl my-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
                            
                            {/* Modal Header */}
                            <div className="p-6 sm:p-8 border-b border-slate-200/80 dark:border-slate-800/80 flex items-start justify-between bg-slate-50/70 dark:bg-slate-950/40">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getCategoryBadgeClass(activeModalProject.category)}`}>
                                            {activeModalProject.category}
                                        </span>
                                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                                            {activeModalProject.badgeText}
                                        </span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                                        {activeModalProject.title}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setActiveModalProject(null)}
                                    className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Body (Scrollable) */}
                            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                                {/* A. Interactive Web App Interface Gallery */}
                                {activeModalProject.gallery && (
                                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                    <Eye className="w-4 h-4 text-indigo-500" />
                                                    <span>
                                                        {activeModalProject.galleryTitle || projectsSection.modalHeadings?.galleryTitle || 'Tangkapan Layar & Antarmuka Sistem'}
                                                    </span>
                                                </h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                                    {activeModalProject.gallerySubtitle || projectsSection.modalHeadings?.gallerySubtitle || 'Klik tab modul di bawah untuk menjelajahi tampilan sistem yang telah diimplementasikan'}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-2">
                                                {activeModalProject.caseStudy.links?.demo && activeModalProject.caseStudy.links.demo.startsWith('http') && (
                                                    <a
                                                        href={activeModalProject.caseStudy.links.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors w-fit"
                                                    >
                                                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                                        <span>{lang === 'id' ? 'Kunjungi Website Live' : 'Visit Live Website'}</span>
                                                        <ExternalLink className="w-3.5 h-3.5" />
                                                    </a>
                                                )}
                                                <a
                                                    href={activeModalProject.gallery[activeGalleryIdx]?.src}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 transition-colors w-fit"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                    <span>{projectsSection.modalHeadings?.viewFullImage || 'Buka Gambar Penuh'}</span>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Tab switcher galeri */}
                                        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80">
                                            {activeModalProject.gallery.map((item, gIdx) => (
                                                <button
                                                    key={gIdx}
                                                    onClick={() => setActiveGalleryIdx(gIdx)}
                                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                                        activeGalleryIdx === gIdx
                                                            ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                                    }`}
                                                >
                                                    {item.title}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Image Display */}
                                        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-inner">
                                            <img
                                                src={activeModalProject.gallery[activeGalleryIdx]?.src}
                                                alt={activeModalProject.gallery[activeGalleryIdx]?.title}
                                                className="w-full h-auto max-h-[480px] object-contain mx-auto"
                                            />
                                            <div className="p-3.5 text-center bg-slate-50 dark:bg-slate-950/80 border-t border-slate-100 dark:border-slate-800">
                                                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                                                    {activeModalProject.gallery[activeGalleryIdx]?.title}
                                                </div>
                                                {activeModalProject.gallery[activeGalleryIdx]?.description && (
                                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl mx-auto leading-relaxed">
                                                        {activeModalProject.gallery[activeGalleryIdx]?.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Khusus Proyek dengan Sertifikat Penghargaan Resmi (misal: Central Palantea) */}
                                {activeModalProject.certificate && (
                                    <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-amber-950/30 border border-emerald-200/90 dark:border-emerald-800/70 shadow-sm space-y-5">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-100 dark:border-emerald-900/40 pb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 rounded-2xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 shrink-0">
                                                    <Trophy className="w-5 h-5 text-amber-500" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-0.5">
                                                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60">
                                                            {activeModalProject.certificate.number}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                                                        {activeModalProject.certificate.title}
                                                    </h4>
                                                </div>
                                            </div>
                                            <a
                                                href={activeModalProject.certificate.image}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors shadow-xs w-fit"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                <span>{projectsSection.modalHeadings?.viewFullCertificate || 'Buka Sertifikat Resolusi Penuh'}</span>
                                            </a>
                                        </div>

                                        {/* Tampilan Gambar Sertifikat Penghargaan */}
                                        <div className="relative rounded-2xl overflow-hidden border border-emerald-200/60 dark:border-emerald-800/60 bg-white dark:bg-slate-950 shadow-inner p-2 sm:p-3 flex items-center justify-center group">
                                            <img 
                                                src={activeModalProject.certificate.image} 
                                                alt={activeModalProject.certificate.title} 
                                                className="w-full max-h-[460px] object-contain rounded-lg shadow-xs group-hover:scale-[1.01] transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Metadata & Kutipan Resmi Apresiasi */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-800/70 border border-emerald-100 dark:border-slate-800 text-xs">
                                                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">{projectsSection.modalHeadings?.certGivenBy || "Diberikan Oleh"}</span>
                                                <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mt-0.5 block">{activeModalProject.certificate.issuer}</span>
                                            </div>
                                            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-800/70 border border-emerald-100 dark:border-slate-800 text-xs">
                                                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">{projectsSection.modalHeadings?.certDateLocation || "Tanggal & Lokasi"}</span>
                                                <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mt-0.5 block">{activeModalProject.certificate.locationDate}</span>
                                            </div>
                                        </div>

                                        <blockquote className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border-l-4 border-emerald-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                                            "{activeModalProject.certificate.quote}"
                                        </blockquote>
                                    </div>
                                )}

                                {/* A. Khusus Audit Proxsis Group: Desktop vs Mobile Switcher */}
                                {activeModalProject.auditData && (
                                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                                                    Bukti Audit Nyata: Google Lighthouse Report
                                                </h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                                    Hasil benchmark resmi pada platform live Proxsis Group
                                                </p>
                                            </div>

                                            {/* Toggle Desktop / Mobile */}
                                            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800 self-start sm:self-auto">
                                                <button
                                                    onClick={() => setAuditMode('desktop')}
                                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                                                        auditMode === 'desktop'
                                                            ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                                                            : 'text-slate-600 dark:text-slate-400'
                                                    }`}
                                                >
                                                    <Monitor className="w-3.5 h-3.5" />
                                                    <span>Desktop (52)</span>
                                                </button>
                                                <button
                                                    onClick={() => setAuditMode('mobile')}
                                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                                                        auditMode === 'mobile'
                                                            ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                                                            : 'text-slate-600 dark:text-slate-400'
                                                    }`}
                                                >
                                                    <Smartphone className="w-3.5 h-3.5" />
                                                    <span>Mobile (54)</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Selected Image Display */}
                                        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-inner">
                                            <img
                                                src={activeModalProject.auditData[auditMode].image}
                                                alt={`Proxsis ${auditMode} Lighthouse report`}
                                                className="w-full h-auto max-h-[360px] object-contain mx-auto"
                                            />
                                        </div>

                                        {/* Score Highlights */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                                            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                                                <div className="text-xl font-extrabold font-mono text-amber-500">
                                                    {activeModalProject.auditData[auditMode].score}
                                                </div>
                                                <div className="text-[11px] text-slate-500 mt-0.5">Performance</div>
                                            </div>
                                            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                                                <div className="text-xl font-extrabold font-mono text-emerald-500">
                                                    {activeModalProject.auditData[auditMode].accessibility}
                                                </div>
                                                <div className="text-[11px] text-slate-500 mt-0.5">Accessibility</div>
                                            </div>
                                            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                                                <div className="text-xl font-extrabold font-mono text-amber-500">
                                                    {activeModalProject.auditData[auditMode].bestPractices}
                                                </div>
                                                <div className="text-[11px] text-slate-500 mt-0.5">Best Practices</div>
                                            </div>
                                            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                                                <div className="text-xl font-extrabold font-mono text-emerald-500">
                                                    {activeModalProject.auditData[auditMode].seo}
                                                </div>
                                                <div className="text-[11px] text-slate-500 mt-0.5">SEO</div>
                                            </div>
                                        </div>

                                        {/* Core Web Vitals Lab Metrics */}
                                        {activeModalProject.auditData[auditMode].fcp && (
                                            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800">
                                                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                                                    Lab Metrics ({activeModalProject.auditData[auditMode].label})
                                                </div>
                                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                                                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                                        <div className="text-slate-500 text-[10px]">FCP</div>
                                                        <div className="font-bold font-mono text-rose-500 mt-0.5">{activeModalProject.auditData[auditMode].fcp}</div>
                                                    </div>
                                                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                                        <div className="text-slate-500 text-[10px]">LCP</div>
                                                        <div className="font-bold font-mono text-rose-500 mt-0.5">{activeModalProject.auditData[auditMode].lcp}</div>
                                                    </div>
                                                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                                        <div className="text-slate-500 text-[10px]">TBT</div>
                                                        <div className="font-bold font-mono text-emerald-500 mt-0.5">{activeModalProject.auditData[auditMode].tbt}</div>
                                                    </div>
                                                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                                        <div className="text-slate-500 text-[10px]">CLS</div>
                                                        <div className="font-bold font-mono text-emerald-500 mt-0.5">{activeModalProject.auditData[auditMode].cls}</div>
                                                    </div>
                                                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 col-span-2 sm:col-span-1">
                                                        <div className="text-slate-500 text-[10px]">Speed Index</div>
                                                        <div className="font-bold font-mono text-rose-500 mt-0.5">{activeModalProject.auditData[auditMode].speedIndex}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Field Data CrUX (28-day Real User Telemetry) */}
                                        {activeModalProject.fieldDataSummary && (
                                            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs">
                                                <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                                                    <span className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                                                        <span>Google Core Web Vitals Assessment (CrUX Field Data):</span>
                                                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-rose-500 text-white">
                                                            {activeModalProject.fieldDataSummary.status}
                                                        </span>
                                                    </span>
                                                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                                                        {activeModalProject.fieldDataSummary.source}
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-[11px] text-slate-700 dark:text-slate-300">
                                                    <div>• <strong className="text-rose-600 dark:text-rose-400">LCP Field:</strong> {activeModalProject.fieldDataSummary.lcpField}</div>
                                                    <div>• <strong className="text-emerald-600 dark:text-emerald-400">CLS Field:</strong> {activeModalProject.fieldDataSummary.clsField}</div>
                                                    <div>• <strong className="text-amber-600 dark:text-amber-400">TTFB Field:</strong> {activeModalProject.fieldDataSummary.ttfbField}</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}



                                {/* 1. Latar Belakang & Masalah */}
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                                        {projectsSection.modalHeadings.background}
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                        {activeModalProject.caseStudy.background}
                                    </p>
                                </div>

                                {/* 2. Peran Saya */}
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                                        {projectsSection.modalHeadings.role}
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                        {activeModalProject.caseStudy.role}
                                    </p>
                                </div>

                                {/* 3. Tools & Teknologi */}
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                                        {projectsSection.modalHeadings.tech}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeModalProject.caseStudy.technologies.map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* 4. Fitur Utama & Alur Sistem */}
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                                        {projectsSection.modalHeadings.featuresFlow}
                                    </h4>
                                    
                                    {/* Alur Visual Box Diagram */}
                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-4">
                                        <div className="text-xs font-mono font-semibold text-slate-500 mb-3">
                                            {activeModalProject.caseStudy.systemArchitecture.title}
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                            {activeModalProject.caseStudy.systemArchitecture.nodes.map((n, idx) => (
                                                <div key={idx} className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                                                    <div className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold mx-auto flex items-center justify-center mb-1.5">
                                                        {idx + 1}
                                                    </div>
                                                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                                        {n.label}
                                                    </div>
                                                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                                                        {n.desc}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* List Fitur Utama */}
                                    <ul className="space-y-2">
                                        {activeModalProject.caseStudy.featuresAndFlow.map((feat, fIdx) => (
                                            <li key={fIdx} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 5. Hasil & Dampak */}
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                                        {projectsSection.modalHeadings.impacts}
                                    </h4>
                                    <ul className="space-y-2">
                                        {activeModalProject.caseStudy.impacts.map((imp, impIdx) => (
                                            <li key={impIdx} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                                <span className="font-medium">{imp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 6. Tautan & Lampiran */}
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                        {projectsSection.modalHeadings.links}
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {activeModalProject.proposalPdf && (
                                            <a
                                                href={activeModalProject.proposalPdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                download="IDP_Apps_Proxsis_Academy_Proposal.pdf"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
                                            >
                                                <FileText className="w-4 h-4" />
                                                <span>Buka Proposal Lengkap (PDF)</span>
                                            </a>
                                        )}

                                        {activeModalProject.caseStudy.links?.github && (
                                            <a
                                                href={activeModalProject.caseStudy.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                                            >
                                                <GithubIcon className="w-4 h-4" />
                                                <span>{projectsSection.modalHeadings.githubRepo}</span>
                                            </a>
                                        )}

                                        {activeModalProject.caseStudy.links?.demo && !activeModalProject.proposalPdf && (
                                            <a
                                                href={activeModalProject.caseStudy.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white shadow-sm transition-colors ${
                                                    activeModalProject.caseStudy.links.demo.startsWith('http')
                                                        ? 'bg-emerald-600 hover:bg-emerald-700'
                                                        : 'bg-indigo-600 hover:bg-indigo-700'
                                                }`}
                                            >
                                                {activeModalProject.caseStudy.links.demo.startsWith('http') && (
                                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                                )}
                                                <ExternalLink className="w-4 h-4" />
                                                <span>{activeModalProject.caseStudy.links.demoLabel || projectsSection.modalHeadings.demoDocs}</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 sm:p-6 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/40 flex justify-end">
                                <button
                                    onClick={() => setActiveModalProject(null)}
                                    className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700"
                                >
                                    {projectsSection.modalHeadings.close}
                                </button>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
