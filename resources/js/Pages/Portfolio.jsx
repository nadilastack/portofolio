import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { portfolioData } from '../data/portfolioData';

import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import SkillsSection from '../Components/SkillsSection';
import ProjectsSection from '../Components/ProjectsSection';
import ExperienceEducationSection from '../Components/ExperienceEducationSection';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';
import CvDownloadModal from '../Components/CvDownloadModal';

export default function Portfolio(props) {
    // Default language: 'en' (bisa di-toggle ke 'id' secara instan)
    const [lang, setLang] = useState('en');
    const [isCvModalOpen, setIsCvModalOpen] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('portfolio_lang');
        if (savedLang === 'id' || savedLang === 'en') {
            setLang(savedLang);
        }
    }, []);

    const handleToggleLang = (selectedLang) => {
        setLang(selectedLang);
        localStorage.setItem('portfolio_lang', selectedLang);
    };

    // Ambil dataset sesuai bahasa yang aktif (ID atau EN)
    const activeData = portfolioData[lang] || portfolioData.en;
    const data = props.portfolioData || activeData;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
            <Head>
                <title>{data.meta?.title || 'Nadila Putri | Fullstack Developer & Business/System Analyst'}</title>
                <meta 
                    name="description" 
                    content={data.meta?.description || 'Portofolio resmi Nadila Putri'} 
                />
                <meta name="keywords" content="Nadila Putri, Fullstack Developer, Laravel, React.js, Business Analyst, System Analyst, Data Analyst, Politeknik Caltex Riau" />
                <meta name="author" content="Nadila Putri" />
                <meta property="og:title" content={data.meta?.title || 'Nadila Putri | Fullstack Developer & Business Analyst'} />
                <meta property="og:description" content={data.meta?.description || 'Official Portfolio of Nadila Putri'} />
                <meta property="og:type" content="website" />
            </Head>

            {/* Sticky Navigation dengan Language Switcher & CV Modal Trigger */}
            <Navbar 
                profile={data.profile} 
                nav={data.nav}
                lang={lang}
                onToggleLang={handleToggleLang}
                onOpenCvModal={() => setIsCvModalOpen(true)}
            />

            {/* 1. Hero Section */}
            <main>
                <HeroSection 
                    profile={data.profile} 
                    pillars={data.pillars} 
                    hero={data.hero}
                    onOpenCvModal={() => setIsCvModalOpen(true)}
                />

                {/* 2. Tentang Saya / About */}
                <AboutSection 
                    profile={data.profile} 
                    keyStats={data.keyStats} 
                    about={data.about}
                />

                {/* 3. Skills */}
                <SkillsSection 
                    skillGroups={data.skillGroups} 
                    skills={data.skills}
                />

                {/* 4. Proyek / Projects (Case Studies) */}
                <ProjectsSection 
                    projects={data.projects} 
                    projectsSection={data.projectsSection}
                />

                {/* 5. Pendidikan & Pengalaman / Experience & Education */}
                <ExperienceEducationSection 
                    experiences={data.experiences}
                    education={data.education}
                    certifications={data.certifications}
                    achievementsAndLeadership={data.achievementsAndLeadership}
                    experienceEducation={data.experienceEducation}
                />

                {/* 6. Kontak / Contact */}
                <ContactSection 
                    profile={data.profile} 
                    contact={data.contact}
                />
            </main>

            {/* Footer */}
            <Footer 
                profile={data.profile} 
                footer={data.footer}
                nav={data.nav}
                lang={lang}
                onOpenCvModal={() => setIsCvModalOpen(true)}
            />

            {/* Modal Pilihan Format CV (ATS Otomatis & File Asli) */}
            <CvDownloadModal 
                isOpen={isCvModalOpen}
                onClose={() => setIsCvModalOpen(false)}
                lang={lang}
                onToggleLang={handleToggleLang}
                portfolioData={portfolioData}
            />
        </div>
    );
}
