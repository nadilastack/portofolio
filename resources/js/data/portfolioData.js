/**
 * Data Terpusat Portofolio Nadila Putri (Bilingual: ID & EN)
 * Berdasarkan dokumen resmi CV_Nadila_Putri_IND.pdf.
 * Seluruh data pendidikan, pengalaman, skill, dan proyek bersumber langsung dari CV.
 */

const rawPortfolioData = {
    // ==========================================
    // VERSI BAHASA INDONESIA (ID)
    // ==========================================
    id: {
        meta: {
            title: "Nadila Putri | Fullstack Developer & Business/System Analyst",
            description: "Portofolio resmi Nadila Putri - Fresh Graduate D4 Teknik Informatika Politeknik Caltex Riau. Fullstack Developer (Laravel 11, React.js), Business & System Analysis, Data Analysis.",
        },
        nav: {
            about: "Tentang",
            skills: "Skills",
            projects: "Proyek",
            experience: "Pendidikan & Pengalaman",
            contact: "Kontak",
            downloadCv: "Download CV",
            langLabel: "Bahasa",
        },
        profile: {
            name: "Nadila Putri",
            roleHeadline: "Fullstack Developer (Laravel, React.js) | Business & System Analysis | Data Analysis",
            summary: "Fresh graduate D4 Teknik Informatika Politeknik Caltex Riau (IPK 3,61/4,00) dengan keahlian membangun aplikasi web full-stack menggunakan Laravel 11, React.js, dan MySQL. Memiliki pengalaman nyata dalam business & system analysis, pemetaan proses bisnis, serta pengujian sistem berbasis SUS dan Blackbox. Mampu menjembatani kebutuhan bisnis menjadi solusi teknis yang andal dan terukur.",
            location: "Pekanbaru, Riau",
            email: "nadilaaa24putriii@gmail.com",
            linkedinUrl: "https://linkedin.com/in/nadila-putri-928679362",
            githubUrl: "https://github.com/nadilastack",
            cvFileUrl: "/CV_Nadila_Putri_IND.pdf",
            gpa: "3.61 / 4.00",
            institution: "Politeknik Caltex Riau",
            status: "Fresh Graduate D4 Teknik Informatika (2026)",
            competencyStatus: "KOMPETEN - BNSP Programmer (LSP Politeknik Caltex Riau)"
        },
        hero: {
            statusBadge: "Fresh Graduate D4 Teknik Informatika · Politeknik Caltex Riau",
            availabilityBadge: "Terbuka untuk Peluang Kerja (Full-time / Kontrak)",
            greeting: "Halo, saya",
            ctaCv: "Download CV",
            ctaProjects: "Lihat Proyek",
            ctaContact: "Hubungi Saya",
            certifiedBadge: "Sertifikasi BNSP Skema Programmer:",
            competentLabel: "KOMPETEN",
        },
        pillars: [
            {
                id: "fullstack",
                title: "Fullstack Web Development",
                color: "indigo",
                description: "Pengembangan aplikasi web end-to-end dengan Laravel 11 dan React.js, perancangan database MySQL teroptimasi, serta implementasi RESTful API terintegrasi.",
                badge: "Pilar Utama"
            },
            {
                id: "analysis",
                title: "Business & System Analysis",
                color: "teal",
                description: "Menerjemahkan kebutuhan stakeholder menjadi spesifikasi teknis, pemetaan proses bisnis (BPM), perancangan sistem, serta koordinasi UAT menyeluruh.",
                badge: "Pilar Analisis"
            },
            {
                id: "data",
                title: "Data & Performance Analysis",
                color: "amber",
                description: "Analisis data dengan Python & SQL untuk perancangan fitur, serta evaluasi keandalan dan kecepatan web menggunakan Core Web Vitals & Lighthouse.",
                badge: "Pilar Optimasi"
            }
        ],
        about: {
            badge: "Profil Profesional",
            title: "Tentang Saya",
            subtitle: "Menggabungkan ketajaman analisis bisnis dengan keterampilan implementasi full-stack web development untuk menghasilkan sistem digital yang fungsional, teruji, dan berdampak nyata.",
            coreHeading: "Menjembatani Kebutuhan Bisnis ke Solusi Teknis",
            paragraph1: "Sebagai lulusan D4 Teknik Informatika dari Politeknik Caltex Riau (IPK 3,61/4,00), saya memiliki bekal menyeluruh dalam rekayasa perangkat lunak. Melalui pengalaman magang di industri sebagai Business Analyst dan Project Coordinator, saya terbiasa melakukan requirements gathering, business process mapping, koordinasi lintas tim, dan pelaksanaan User Acceptance Testing (UAT).",
            paragraph2: "Di sisi teknis, saya berpengalaman membangun aplikasi web full-stack menggunakan Laravel 11, React.js, dan MySQL dengan metodologi Rapid Solo Software Development (RSSD) dan Design Thinking. Saya juga melakukan pengujian usabilitas menggunakan System Usability Scale (SUS) serta evaluasi keandalan web menggunakan Core Web Vitals dan Google Lighthouse.",
            certifiedStatement: "Telah dinyatakan KOMPETEN pada skema Programmer oleh Lembaga Sertifikasi Profesi (LSP) berlisensi BNSP.",
            val1Title: "Struktur Data Teroptimasi",
            val1Desc: "Mampu menyederhanakan arsitektur database, mengurangi duplikasi tabel, dan mengamankan alur autentikasi peran.",
            val2Title: "Validasi & Pengujian Terukur",
            val2Desc: "Memastikan kualitas software melalui Blackbox testing menyeluruh, metrik usabilitas SUS terstandarisasi, dan audit performa.",
            statsHeading: "Metrik & Pencapaian Terverifikasi",
        },
        keyStats: [
            { label: "IPK Kelulusan (D4 TI)", value: "3.61", suffix: "/ 4.00", note: "Politeknik Caltex Riau" },
            { label: "Skor SUS Tugas Akhir", value: "90", suffix: "& 85.7", note: "Grade A / Excellent (Admin & Pelanggan)" },
            { label: "Blackbox Testing", value: "100%", suffix: "", note: "90 Skenario Teruji Berhasil" },
            { label: "Sertifikasi & Lisensi Resmi", value: "20", suffix: "Sertifikat", note: "BNSP, HackerRank, Cisco, EC-Council, Kominfo" },
            { label: "Prestasi Silat Nasional", value: "3x", suffix: "Medali", note: "Juara 1 (2024), Juara 2 (2025), Juara 3 (2023)" },
        ],
        skills: {
            badge: "Keahlian & Kompetensi",
            title: "Keterampilan Teknis & Analisis",
            subtitle: "Daftar kemampuan yang teruji melalui proyek nyata, pengalaman magang industri, dan sertifikasi resmi BNSP.",
            allTab: "Semua Kategori",
        },
        skillGroups: [
            {
                id: "fullstack",
                name: "Fullstack Development",
                description: "Keahlian membangun aplikasi web modern, efisien, dan berskala",
                skills: [
                    { name: "PHP", level: "Mahir", highlight: true },
                    { name: "Laravel 11", level: "Mahir", highlight: true },
                    { name: "JavaScript", level: "Menengah", highlight: true },
                    { name: "React.js", level: "Mahir", highlight: true },
                    { name: "MySQL", level: "Mahir", highlight: true },
                    { name: "Git", level: "Mahir", highlight: false },
                    { name: "GitHub", level: "Mahir", highlight: false },
                    { name: "Postman", level: "Mahir", highlight: false }
                ]
            },
            {
                id: "analysis",
                name: "Business & System Analysis",
                description: "Metodologi dan praktik analisis sistem serta koordinasi proyek",
                skills: [
                    { name: "Requirements Analysis", level: "Mahir", highlight: true },
                    { name: "System Analysis & Design", level: "Mahir", highlight: true },
                    { name: "Business Process Mapping", level: "Mahir", highlight: true },
                    { name: "Database Design", level: "Mahir", highlight: true },
                    { name: "SDLC & Agile/Scrum", level: "Paham", highlight: false },
                    { name: "User Acceptance Testing (UAT)", level: "Mahir", highlight: true },
                    { name: "Gap Analysis", level: "Menengah", highlight: false },
                    { name: "Stakeholder Management", level: "Menengah", highlight: false },
                    { name: "Project Coordination", level: "Mahir", highlight: false },
                    { name: "Digital Transformation", level: "Menengah", highlight: false },
                    { name: "Technical Documentation", level: "Mahir", highlight: true }
                ]
            },
            {
                id: "data",
                name: "Data & Performance Analysis",
                description: "Eksplorasi data dan audit performa sistem berbasis metrik nyata",
                skills: [
                    { name: "Python", level: "Menengah", highlight: true },
                    { name: "SQL", level: "Mahir", highlight: true },
                    { name: "Data Analysis", level: "Menengah", highlight: false },
                    { name: "Customer Data Analysis", level: "Menengah", highlight: false },
                    { name: "AI/ML Implementation Concept", level: "Menengah", highlight: false },
                    { name: "Core Web Vitals", level: "Mahir", highlight: true },
                    { name: "Google Lighthouse", level: "Mahir", highlight: true },
                    { name: "PageSpeed Insights", level: "Mahir", highlight: true },
                    { name: "Root Cause Analysis", level: "Menengah", highlight: false }
                ]
            },
            {
                id: "tools",
                name: "Tools & Software",
                description: "Alat bantu kerja desain, pengujian, dan version control",
                skills: [
                    { name: "Figma", level: "Desain UI/UX & Wireframe", highlight: true },
                    { name: "Postman", level: "API Testing & Mocking", highlight: true },
                    { name: "Git & GitHub", level: "Version Control & Kolaborasi", highlight: true }
                ]
            }
        ],
        projectsSection: {
            badge: "Studi Kasus & Portofolio",
            title: "Proyek Terpilih (Case Studies)",
            subtitle: "Disajikan dalam format studi kasus terstruktur: latar belakang, peran saya, arsitektur alur sistem, hingga hasil dan dampak terukur.",
            allTab: "Semua Proyek",
            openModal: "Buka Studi Kasus Lengkap",
            impactHeading: "Dampak / Hasil Terukur:",
            featuredBadge: "Unggulan",
            modalHeadings: {
                background: "1. Latar Belakang & Masalah",
                role: "2. Peran & Tanggung Jawab",
                tech: "3. Tools & Teknologi",
                featuresFlow: "4. Fitur Utama & Diagram Alur Sistem",
                impacts: "5. Hasil & Dampak Terukur",
                links: "Tautan Proyek:",
                close: "Tutup",
                githubRepo: "GitHub Repository",
                demoDocs: "Demo / Dokumentasi Proyek",
                internalNotice: "Repository bersifat internal / non-publik",
                galleryTitle: "Tangkapan Layar & Antarmuka Sistem",
                gallerySubtitle: "Klik tab modul di bawah untuk menjelajahi tampilan sistem yang telah diimplementasikan",
                viewFullImage: "Buka Gambar Penuh",
                viewFullCertificate: "Buka Sertifikat Resolusi Penuh",
                certGivenBy: "Diberikan Oleh",
                certDateLocation: "Tanggal & Lokasi"
            }
        },
        projects: [
            {
                id: "central-palantea-hidroponik",
                title: "Website Penjualan Online Central Palantea Hidroponik",
                category: "Fullstack",
                badgeText: "Tugas Akhir D4 (2026) · Proyek Unggulan",
                featured: true,
                image: "/images/projects/palantea_hero_landing.jpg",
                galleryTitle: "Tangkapan Layar & Antarmuka Website Penjualan Online",
                gallerySubtitle: "Klik tab di bawah untuk menjelajahi etalase belanja, katalog sayur & buah, profil usaha, dan dokumentasi wisata edukasi",
                gallery: [
                    {
                        title: "Beranda & Hero Section",
                        src: "/images/projects/palantea_hero_landing.jpg",
                        description: "Antarmuka beranda website dengan visual greenhouse hidroponik modern, proposisi nilai wisata edukasi & belanja segar di tengah kota, tombol reservasi kunjungan & belanja sayur, serta navigasi kategori terintegrasi."
                    },
                    {
                        title: "Katalog Sayuran Hidroponik",
                        src: "/images/projects/palantea_catalog_sayuran.png",
                        description: "Etalase e-commerce sayuran hidroponik segar (Butterhead, Dakota, Kale, Kemangi, Kubis) dengan label kategori, informasi ketersediaan stok real-time, dan tombol tambah ke keranjang belanja interaktif."
                    },
                    {
                        title: "Katalog Buah-buahan Segar",
                        src: "/images/projects/palantea_catalog_buah.png",
                        description: "Katalog produk buah segar bebas pestisida (Anggur, Apel, Apel Hijau, Aprikot, Atemoya) dengan filter kategori tab, visual produk resolusi tinggi, dan manajemen inventaris stok terpadu."
                    },
                    {
                        title: "Tentang Kami & Keunggulan",
                        src: "/images/projects/palantea_about_section.png",
                        description: "Modul profil Central Palantea Hidroponik yang menyajikan latar belakang greenhouse, komitmen 100% hidroponik segar bebas pestisida, serta layanan wisata edukasi memetik sayur langsung."
                    },
                    {
                        title: "Galeri Kunjungan Edukasi",
                        src: "/images/projects/palantea_galeri_kegiatan.jpg",
                        description: "Dokumentasi visual kunjungan outing class sekolah, komunitas, dan rombongan keluarga yang menikmati pengalaman petik sayur hidroponik langsung di kebun Central Palantea."
                    }
                ],
                certificate: {
                    title: "Sertifikat Penghargaan Resmi",
                    number: "No. 0012/CP.08/2026",
                    issuer: "Pimpinan Central Palantea (Ismail)",
                    locationDate: "Duri, 18 Agustus 2026",
                    image: "/images/certificates/cert_penghargaan_central_palantea.jpg",
                    quote: "Atas dedikasi, kompetensi, dan kontribusi luar biasa dalam merancang, membangun, serta mengimplementasikan Website Penjualan Online Central Palantea Hidroponik. Hasil karya yang dihasilkan menunjukkan kualitas teknis yang sangat baik, tampilan antarmuka yang profesional, serta kemampuan sistem yang secara nyata meningkatkan efisiensi proses bisnis, kemudahan akses informasi produk, dan mutu layanan kepada pelanggan."
                },
                shortDescription: "Aplikasi web full-stack penjualan hidroponik berbasis Laravel 11 & React.js dengan metodologi RSSD & Design Thinking serta pengujian Blackbox dan SUS Grade A.",
                caseStudy: {
                    background: "Central Palantea Hidroponik membutuhkan digitalisasi menyeluruh pada rantai penjualan dan transaksi operasional mereka yang sebelumnya berjalan secara manual. Dibutuhkan platform online yang mudah digunakan baik oleh pelanggan umum maupun pengelola hidroponik dengan proses autentikasi yang aman dan efisien.",
                    role: "Full-Stack Developer & System Analyst (Merancang basis data MySQL, mengembangkan front-end React.js dan back-end Laravel 11, memetakan proses bisnis, melakukan optimasi skema database, serta memimpin pengujian Blackbox dan Usability).",
                    technologies: ["Laravel 11", "React.js", "MySQL", "RSSD", "Design Thinking", "System Usability Scale (SUS)", "Blackbox Testing"],
                    featuresAndFlow: [
                        "Katalog produk hidroponik interaktif dengan pembaruan data real-time",
                        "Sistem keranjang belanja, checkout transaksi, dan riwayat pesanan pelanggan",
                        "Optimasi struktur database: penyederhanaan tabel admin dan pelanggan ke dalam satu tabel terpadu dengan atribut pembeda role guna memangkas redundansi data dan mempercepat proses autentikasi",
                        "Panel manajemen data pesanan dan laporan penjualan bagi administrator",
                        "Metodologi Rapid Solo Software Development (RSSD) dipadukan dengan tahapan Design Thinking (Empathize, Define, Ideate, Prototype, Test)"
                    ],
                    systemArchitecture: {
                        type: "flowchart",
                        title: "Alur Sistem & Arsitektur Terpadu",
                        nodes: [
                            { label: "Pelanggan & Admin", desc: "Akses web responsif (React.js)" },
                            { label: "Frontend React.js", desc: "Komponen interaktif & state" },
                            { label: "Backend Laravel 11", desc: "REST API, Otentikasi Role, Logic" },
                            { label: "Basis Data MySQL", desc: "Single User Table teroptimasi" }
                        ]
                    },
                    impacts: [
                        "Pengujian fungsional Blackbox Testing terhadap 90 skenario mencapai tingkat keberhasilan 100%.",
                        "Pengujian usabilitas System Usability Scale (SUS) memperoleh skor 90 (Admin) dan 85,7 (Pelanggan) — Kategori Acceptable dengan predikat Excellent dan Grade A.",
                        "Sistem berhasil diimplementasikan dan digunakan secara aktif oleh Central Palantea Hidroponik untuk digitalisasi proses bisnis mereka.",
                        "Mendapatkan Sertifikat Penghargaan atas dedikasi, kompetensi, dan kontribusi implementasi sistem (2026)."
                    ],
                    links: {
                        github: null,
                        demo: "https://centralpalantea.my.id/",
                        demoLabel: "Kunjungi Website Live (centralpalantea.my.id)"
                    }
                }
            },
            {
                id: "proxsis-group-performance",
                title: "Analisis Performa Website Proxsis Group Berdasarkan Core Web Vitals",
                category: "Data",
                badgeText: "Magang MBKM · Performance Analyst (2026)",
                featured: true,
                image: "/images/projects/proxsis_lighthouse_desktop.jpg",
                auditData: {
                    desktop: {
                        score: 52,
                        accessibility: 86,
                        bestPractices: 54,
                        seo: 92,
                        image: "/images/projects/proxsis_lighthouse_desktop.jpg",
                        label: "Lighthouse Desktop v13.0.2",
                        fcp: "4.8s",
                        lcp: "8.5s",
                        tbt: "150ms",
                        cls: "0",
                        speedIndex: "9.5s"
                    },
                    mobile: {
                        score: 54,
                        accessibility: 86,
                        bestPractices: 54,
                        seo: 92,
                        image: "/images/projects/proxsis_lighthouse_mobile.jpg",
                        label: "Lighthouse Mobile (Slow 4G / CPU 4x)",
                        fcp: "5.5s",
                        lcp: "29.7s",
                        tbt: "130ms",
                        cls: "0",
                        speedIndex: "15.5s"
                    }
                },
                fieldDataSummary: {
                    status: "FAILED",
                    lcpField: "3.1 detik (Ambang batas Google ≤ 2.5s)",
                    clsField: "0.07 (Good / Lolos standar Google)",
                    fcpField: "3.0 detik",
                    ttfbField: "1.9 detik (Poor / Server Bottleneck)",
                    source: "Chrome User Experience Report (CrUX) 28 hari pengguna nyata"
                },
                shortDescription: "Evaluasi mendalam performa dan Core Web Vitals pada website proxsisgroup.com berbasis simulasi lab Google Lighthouse v13.0.2 serta 28 hari data lapangan telemetri pengguna nyata (CrUX).",
                caseStudy: {
                    background: "Sebagai portal utama komunikasi korporat dan kredibilitas bisnis konsultan, website Proxsis Group (proxsisgroup.com) memerlukan evaluasi kepatuhan terhadap standar Google Page Experience & Core Web Vitals guna mencegah potensi tingginya rasio pentalan (bounce rate) dan menjaga peringkat pencarian organik di mesin pencari.",
                    role: "Performance & Quality Analyst Intern (Merancang skenario pengujian lab Lighthouse Desktop & Mobile Slow 4G, menganalisis data telemetri lapangan pengguna nyata 28 hari dari CrUX via PageSpeed Insights, melakukan Root Cause Analysis terhadap 9 aspek teknis, serta merumuskan matriks rekomendasi perbaikan berbasis dampak & kompleksitas).",
                    technologies: ["Google Lighthouse v13.0.2", "Google PageSpeed Insights (PSI)", "Chrome User Experience Report (CrUX)", "Core Web Vitals (LCP, INP, CLS)", "Root Cause Analysis (RCA)", "Network Dependency Tree", "Web Performance Engineering"],
                    featuresAndFlow: [
                        "Benchmarking Multi-Skenario: Pengujian simulasi lab (Desktop koneksi standar vs Mobile Slow 4G emulasi Moto G Power) dan komparasi terhadap data lapangan nyata 28 hari CrUX",
                        "Isolasi Akar Masalah LCP (LCP Breakdown): Mengidentifikasi kontribusi keterlambatan pada elemen hero section Elementor (Resource Load Duration 2.230 ms dan Resource Load Delay 1.500 ms)",
                        "Analisis 3 Faktor Kritis: Temuan gambar hero tanpa kompresi modern (potensi hemat 1.771 KiB), render-blocking resources (dampak 3.550 ms), dan latensi respons server (TTFB 1,9 detik)",
                        "Evaluasi Stabilitas Visual (CLS): Membuktikan kekuatan visual stability halaman utama dengan skor ideal CLS 0 (lab) dan 0,07 (field), menandakan minim pergeseran layout tak terduga",
                        "Matriks Solusi & Roadmap Perbaikan: Merumuskan 6 rekomendasi teknis terstruktur (konversi WebP/AVIF & preload hero image, inline critical CSS, perbaikan TTFB via CDN & server cache, font-display: swap, dan pembersihan 257 KiB kode JS/CSS)"
                    ],
                    systemArchitecture: {
                        type: "flowchart",
                        title: "Metodologi Audit Core Web Vitals",
                        nodes: [
                            { label: "1. Baseline Lab Audit", desc: "Lighthouse Desktop (52) & Mobile (54)" },
                            { label: "2. CrUX Field Data", desc: "Data telemetri nyata 28 hari (Failed LCP 3.1s)" },
                            { label: "3. Root Cause Analysis", desc: "Isolasi 3 faktor kritis (1.771 KiB & 3.550 ms)" },
                            { label: "4. Actionable Roadmap", desc: "6 rekomendasi prioritas teknis" }
                        ]
                    },
                    impacts: [
                        "Mengidentifikasi secara presisi penyebab tunggal kegagalan Core Web Vitals Assessment (LCP mobile 3,1 detik) dari jutaan data sesi pengguna nyata di Google CrUX.",
                        "Menemukan potensi penghematan waktu muat awal lebih dari 5.500 milidetik (eliminasi render-blocking 3.550 ms, TTFB 940 ms, font display 390 ms) serta pemangkasan aset 1.771 KiB.",
                        "Menghasilkan dokumen laporan magang MBKM resmi (133 halaman) berisikan panduan teknis yang disahkan oleh PT Malaka Incorpora Teknologi dan Politeknik Caltex Riau."
                    ],
                    links: {
                        github: null,
                        demo: "/images/projects/proxsis_lighthouse_desktop.jpg"
                    }
                }
            },
            {
                id: "ems-ai-feature-generation",
                title: "AI-Driven Feature Generation pada Platform Integrasi EMS",
                category: "Analysis",
                badgeText: "Kerja Praktik · CRM AI Engineer (2025)",
                featured: true,
                image: "/images/projects/ai_module_generator.png",
                gallery: [
                    {
                        title: "AI Module Generator Interface",
                        src: "/images/projects/ai_module_generator.png",
                        description: "Antarmuka cerdas AI Module Generator: input deskripsi bahasa alami, template Quick Prompts (CRUD, Report, Audit Log, Approval), validasi Context Awareness 4 pilar, dan panel terminal preview terintegrasi otomatisasi Laravel Boost."
                    }
                ],
                shortDescription: "Pengembangan modul otomatisasi cerdas berbasis Context-Aware Generative Logic pada platform EMS untuk mentransformasikan data konsultasi klien menjadi struktur modul sistem (Domain, Model, Controller, Migration, Views, Routes) secara otomatis.",
                caseStudy: {
                    background: "Pada Platform Integrasi Enterprise Management System (EMS) di PT Malaka Incorpora Teknologi (Proxsis Consulting), perumusan kebutuhan sistem klien enterprise sering memakan waktu panjang akibat diskusi berulang dan interpretasi manual. Konfigurasi modul manual juga rentan terhadap human error serta ketidakkonsistenan arsitektur kode antar proyek.",
                    role: "CRM AI Engineer Intern (Merancang logika alur kerja Context-Aware Generative Logic, arsitektur 3 lapisan [Input, Processing, Output], merumuskan mekanisme validasi Context Awareness 4 pilar [Struktur Proyek, Skema DB, Dependensi, Lingkungan], serta menguji implementasi antarmuka AI Module Generator yang terintegrasi dengan otomatisasi Laravel).",
                    technologies: ["Context-Aware Generative Logic", "Laravel Boost Automation", "Prompt Engineering", "Domain-Driven Design (DDD)", "Context Validation Engine", "Enterprise Management System (EMS)", "Business Process Mapping (BPM)"],
                    featuresAndFlow: [
                        "Input Deskripsi Fleksibel & Quick Prompts: Pengguna dapat mendeskripsikan kebutuhan sistem menggunakan bahasa alami atau memilih templat cepat (CRUD Module, Report System, Audit Log, Approval Workflow, Dashboard Widget)",
                        "Mekanisme Context Awareness (4 Pilar Validasi): Memvalidasi kesiapan sistem sebelum eksekusi mencakup struktur direktori proyek, sinkronisasi skema basis data, verifikasi dependensi pustaka, dan kesiapan environment",
                        "Context Injection & Generative Processing: Penggabungan data konteks teknis dengan instruksi prompt engineering terarah guna menghasilkan skrip pembentukan modul otomatis tanpa teks naratif yang membingungkan",
                        "Panel Output & Preview Interaktif: Menampilkan terminal simulasi real-time (module-generator.sh) yang mengeksekusi 'php artisan make:module' dan merangkum berkas ter-generate (Domain Model, Controller, Migration, Views, Routes)",
                        "Kontrol Penuh Pengembang: Dilengkapi tombol 'Apply Changes' dan 'Discard' untuk memastikan pengembang tetap memegang kendali penuh sebelum kode digabungkan ke repositori utama"
                    ],
                    systemArchitecture: {
                        type: "flowchart",
                        title: "Arsitektur Otomatisasi AI 3 Lapisan",
                        nodes: [
                            { label: "1. Input Layer", desc: "Deskripsi Alami & Quick Prompts" },
                            { label: "2. Context Validation", desc: "4 Pilar (Struktur, DB, Lib, Env)" },
                            { label: "3. Processing Layer", desc: "Context Injection & AI Engine" },
                            { label: "4. Output & Preview", desc: "Terminal Preview & Apply Changes" }
                        ]
                    },
                    impacts: [
                        "Mengotomatisasi pembentukan modul fungsional dari masukan konsultasi bisnis menjadi struktur kode nyata berbasis Domain-Driven Design (DDD) di Laravel.",
                        "Memangkas waktu konfigurasi awal modul baru secara signifikan dari proses manual berhari-hari menjadi hitungan menit.",
                        "Menjamin 100% konsistensi arsitektur proyek dan mencegah konflik basis data berkat lapisan pengaman Context Awareness.",
                        "Hasil kerja praktik berhasil diuji dan disahkan secara resmi oleh pembimbing industri (PT Malaka Incorpora Teknologi) dan pembimbing akademik (Politeknik Caltex Riau)."
                    ],
                    links: {
                        github: null,
                        demo: "/images/projects/ai_module_generator.png"
                    }
                }
            },
            {
                id: "idp-apps-proxsis-academy",
                title: "Perancangan & Analisis Sistem Website IDP HRMS",
                category: "Analysis",
                badgeText: "Magang Project · Business & System Analysis (2025)",
                featured: true,
                image: "/images/projects/idp_mockup_devices.png",
                gallery: [
                    {
                        title: "Mockup Responsif (Laptop & Mobile)",
                        src: "/images/projects/idp_mockup_devices.png",
                        description: "Visualisasi mockup antarmuka sistem Implementation Tracker (IDP) yang dirancang responsif untuk kenyamanan akses pada perangkat laptop maupun smartphone."
                    },
                    {
                        title: "Dashboard & Jadwal Program",
                        src: "/images/projects/idp_web_dashboard.png",
                        description: "Antarmuka dashboard pelacakan progres IDP karyawan (25% progress), status verifikasi kompetensi kepemimpinan, upload evidence tugas, dan notifikasi revisi HR."
                    },
                    {
                        title: "Modul Self-Reflection",
                        src: "/images/projects/idp_web_reflection.png",
                        description: "Fitur evaluasi berkala 4 kuadran: What Went Well, What Went Less Well, What Do I Want to Try Next, dan What Puzzles Us dengan rating skala 1-10."
                    },
                    {
                        title: "Pusat Resources & Materi",
                        src: "/images/projects/idp_web_resources.png",
                        description: "Pusat materi pengembangan mandiri: panduan mentoring, video workshop feedback, template sesi, studi kasus, dan forum komunitas."
                    }
                ],
                shortDescription: "Perancangan dan analisis sistem Individual Development Plan (IDP) berbasis web pada platform HRMS untuk digitalisasi tracking mentoring, pelaporan evidence kompetensi, dan refleksi 4 kuadran talent.",
                caseStudy: {
                    background: "Proses pengelolaan Individual Development Plan (IDP) di perusahaan sebelumnya dijalankan secara manual menggunakan spreadsheet dan drive bersama. Hal ini menyebabkan pemantauan progres mentoring, pengumpulan bukti evidence kegiatan, dan evaluasi refleksi diri menjadi terfragmentasi serta sulit dimonitor secara terpusat oleh tim HR dan mentor.",
                    role: "Business & System Analyst Intern (Menganalisis kebutuhan pengguna & proses bisnis, menyusun spesifikasi kebutuhan fungsional antarmuka web, merancang flowchart alur sistem, serta memvalidasi alur dashboard kompetensi, modul refleksi 4 kuadran, dan pusat resources pengembangan).",
                    technologies: ["Business & System Analysis", "HRMS Web Platform", "Requirements Engineering", "System Flowchart", "UI/UX System Design", "Talent Development Tracking"],
                    featuresAndFlow: [
                        "Dasbor Analitik Personal: Visualisasi data kemajuan (overall progress), status jadwal program kepemimpinan, dan notifikasi feedback/revisi dari admin HR",
                        "Refleksi Diri 4 Kuadran: Format input terstandarisasi (What Went Well, What Went Less Well, What Do I Want to Try Next, What Puzzles Us) dengan rating berkala",
                        "Tracking Evidence & Program: Manajemen bukti penyelesaian tugas (upload evidence), verifikasi dokumen, dan checklist aktivitas kompetensi",
                        "Pusat Materi & Resources: Akses modul panduan mentoring, video workshop teknik feedback, template sesi, dan direktori studi kasus"
                    ],
                    systemArchitecture: {
                        type: "flowchart",
                        title: "Alur Navigasi Sistem IDP Web",
                        nodes: [
                            { label: "Login & HRMS Portal", desc: "Akses profil talent" },
                            { label: "Dashboard Utama", desc: "Progress 25% & jadwal" },
                            { label: "Self-Reflection", desc: "Evaluasi 4 kuadran" },
                            { label: "Resources Hub", desc: "Panduan & materi mentoring" }
                        ]
                    },
                    impacts: [
                        "Digitalisasi penuh sistem pengelolaan IDP dari proses manual spreadsheet ke platform aplikasi web HRMS terpadu.",
                        "Menstandarisasi alur pengisian refleksi diri 4 kuadran dan pelacakan upload evidence kompetensi kepemimpinan bagi seluruh talent.",
                        "Meningkatkan transparansi review dan percepatan feedback antara mentor, talent, dan admin HR secara real-time."
                    ],
                    links: {
                        github: null,
                        demo: "/images/projects/idp_web_dashboard.png"
                    }
                }
            }
        ],
        experienceEducation: {
            badge: "Rekam Jejak & Kualifikasi",
            title: "Pendidikan, Pengalaman & Prestasi",
            subtitle: "Perjalanan akademik di bidang Teknik Informatika, pengalaman magang industri di bidang analisis bisnis dan sistem, serta lisensi kompetensi resmi.",
            tabs: {
                experience: "Pengalaman Kerja",
                education: "Pendidikan",
                certifications: "Sertifikasi Resmi",
                leadership: "Prestasi & Organisasi"
            },
            relevantCourses: "Mata Kuliah Relevan",
            vocationalSubjects: "Bidang yang Dipelajari (Kurikulum Kejuruan)",
            industrialInternship: "Praktik Kerja Lapangan (PKL)",
            competencyExam: "Uji Kompetensi Keahlian (UKK)",
            evaluationSupervisor: "Penilaian Pembimbing Industri",
            outputsLabel: "Keluaran / Kontribusi:",
            certificateModal: {
                viewBtn: "Buka Sertifikat",
                verifyBtn: "Verifikasi Kredensial Resmi",
                openFull: "Buka Gambar Penuh",
                credentialId: "Nomor / ID Kredensial",
                issueDate: "Tanggal Perolehan",
                type: "Bidang Keahlian",
                issuedBy: "Lembaga Penerbit",
                officialPartner: "Mitra Resmi & Program",
                duration: "Beban / Waktu Belajar",
                speaker: "Pemateri / Instruktur",
                scoreLabel: "Skor / Pencapaian",
                syllabusTitle: "Materi & Silabus Kompetensi Terverifikasi",
                close: "Tutup",
                officialBadge: "Sertifikat Terverifikasi",
                noImageNotice: "Sertifikasi resmi tercatat dan terafiliasi dengan lembaga penerbit terkait."
            }
        },
        experiences: [
            {
                period: "Feb 2026 – Jun 2026",
                role: "Business Analyst & Project Coordinator Intern",
                company: "PT. Malaka Incorpora Teknologi (Malaka Group)",
                location: "Indonesia",
                highlights: [
                    "Menerjemahkan kebutuhan bisnis dan operasional menjadi kebutuhan sistem melalui koordinasi dengan stakeholder dan tim pengembang.",
                    "Menganalisis kebutuhan sistem dan memetakan proses bisnis sebagai dasar perancangan solusi digital yang sesuai dengan kebutuhan pengguna.",
                    "Mengoordinasikan tindak lanjut lintas tim dan memantau perkembangan proyek untuk mendukung penyelesaian pekerjaan sesuai target dan jadwal.",
                    "Mengoordinasikan User Acceptance Testing (UAT), mendokumentasikan temuan, dan mengelola feedback stakeholder sebagai bagian dari proses validasi solusi.",
                    "Mendukung implementasi solusi digital berbasis web dalam proses digitalisasi operasional yang sebelumnya dilakukan secara manual."
                ]
            },
            {
                period: "Jul 2025 – Nov 2025",
                role: "CRM & AI Business Analyst Intern",
                company: "PT. Malaka Incorpora Teknologi",
                location: "Indonesia",
                highlights: [
                    "Menganalisis kebutuhan bisnis dan data untuk mendukung pengembangan solusi digital berbasis CRM.",
                    "Menjembatani kebutuhan stakeholder bisnis dan tim teknis dalam menerjemahkan kebutuhan organisasi ke dalam solusi teknologi.",
                    "Mengembangkan proses pengolahan data pada modul CRM untuk mendukung segmentasi pelanggan dan pemanfaatan data dalam pengambilan keputusan.",
                    "Menganalisis data menggunakan Python dan MySQL untuk mengidentifikasi pola dan wawasan yang relevan bagi pengembangan fitur digital.",
                    "Menyusun dokumentasi teknis dan pemetaan proses bisnis sebagai referensi dalam pengembangan sistem dan kolaborasi lintas tim."
                ]
            },
            {
                period: "Jul 2021 – Sep 2021",
                role: "IT Engineering Specialist Intern",
                company: "RS Mata SMEC Pekanbaru",
                location: "Pekanbaru, Riau",
                highlights: [
                    "Mendukung pemeliharaan workstation medis, perangkat komputer klinik, dan kestabilan konektivitas jaringan LAN rumah sakit.",
                    "Operasional harian dan pemeliharaan Sistem Informasi Manajemen Rumah Sakit (SIMRS) dalam menunjang layanan digital klinis.",
                    "Digitalisasi, input, dan validasi integritas data layanan rekam medis serta administrasi pasien.",
                    "Melakukan troubleshooting teknis hardware dan software untuk kelancaran operasional staf medis dan administrasi.",
                    "Meraih penilaian pembimbing industri dengan rata-rata 94/100 (Predikat Sangat Memuaskan: Kehadiran 95, Kejujuran 95, Tanggung Jawab 95, Prakarsa 95, Kecakapan 90)."
                ],
                evaluation: {
                    averageScore: "94 / 100",
                    predicate: "Sangat Memuaskan (Grade A)",
                    criteria: [
                        { name: "Kehadiran", score: 95 },
                        { name: "Kejujuran", score: 95 },
                        { name: "Tanggung Jawab", score: 95 },
                        { name: "Prakarsa", score: 95 },
                        { name: "Kecakapan", score: 90 }
                    ]
                }
            }
        ],
        education: [
            {
                period: "Sep 2022 – Agu 2026",
                degree: "D4 Teknik Informatika",
                institution: "Politeknik Caltex Riau",
                subDegree: "Sarjana Terapan · 145 SKS",
                gpa: "IPK: 3,61 / 4,00 (Cumlaude)",
                predicate: "Cumlaude",
                notes: "Kurikulum Sarjana Terapan Teknik Informatika berfokus pada rekayasa perangkat lunak berskala industri, arsitektur basis data modern, kecerdasan buatan terapan (Machine Learning & Deep Learning), serta analisis sistem dan bisnis.",
                capstone: {
                    title: "Tugas Akhir / Skripsi Terapan",
                    name: "Penerapan RSSD dengan Design Thinking dalam Pembangunan Website Penjualan Online Central Palantea Hidroponik",
                    metrics: "SUS Score 90 & 85.7 (Grade A / Best Usability) · 90 Skenario Blackbox Testing 100% Valid"
                },
                courses: [
                    "Workshop Rekayasa Perangkat Lunak",
                    "Bengkel Pemrograman Web",
                    "Bengkel Pemrograman Framework",
                    "Pemrograman Berorientasi Objek (PBO)",
                    "Kualitas & Pengujian Perangkat Lunak",
                    "Manajemen Proyek",
                    "Interaksi Manusia & Komputer (UI/UX)",
                    "Pembelajaran Mesin (Machine Learning)",
                    "Praktikum Deep Learning",
                    "Praktikum Natural Language Processing (NLP)",
                    "Big Data",
                    "Workshop Data Warehouse",
                    "Workshop Basis Data Lanjut",
                    "Administrasi & Keamanan Jaringan Komputer"
                ],
                courseGroups: [
                    {
                        title: "Rekayasa Perangkat Lunak & Web",
                        courses: [
                            "Workshop Rekayasa Perangkat Lunak",
                            "Bengkel Pemrograman Web",
                            "Bengkel Pemrograman Framework",
                            "Pemrograman Berorientasi Objek (PBO)",
                            "Kualitas & Pengujian Perangkat Lunak",
                            "Manajemen Proyek",
                            "Interaksi Manusia & Komputer (UI/UX)"
                        ]
                    },
                    {
                        title: "Kecerdasan Buatan (AI) & Pengolahan Data",
                        courses: [
                            "Pembelajaran Mesin (Machine Learning)",
                            "Praktikum Deep Learning",
                            "Praktikum Natural Language Processing (NLP)",
                            "Big Data",
                            "Workshop Data Warehouse",
                            "Workshop Basis Data Lanjut",
                            "Pengolahan Citra Digital"
                        ]
                    },
                    {
                        title: "Infrastruktur, Sistem & Keamanan Jaringan",
                        courses: [
                            "Administrasi & Keamanan Jaringan Komputer",
                            "Jaringan Komputer",
                            "Sistem Operasi",
                            "Jaringan Multimedia"
                        ]
                    }
                ]
            },
            {
                period: "2019 – 2022",
                degree: "Rekayasa Perangkat Lunak (RPL)",
                institution: "SMK Negeri 2 Guguak",
                subDegree: "Pendidikan Menengah Kejuruan",
                gpa: "Nilai PKL: 94 / 100",
                predicate: "Predikat: Sangat Baik",
                notes: "Kurikulum kejuruan teknologi informasi berfokus pada logika algoritma pemrograman, perancangan basis data relasional, pemodelan sistem perangkat lunak, serta praktik kerja nyata di industri medis.",
                courses: [
                    "Pemrograman Dasar",
                    "Basis Data Relasional",
                    "Pemodelan Perangkat Lunak (UML & ERD)",
                    "Pemrograman Web & Perangkat Bergerak",
                    "Pemrograman Berorientasi Objek (PBO)",
                    "Sistem Komputer & Jaringan Dasar"
                ],
                ukk: {
                    title: "Uji Kompetensi Keahlian (UKK)",
                    badge: "Kompeten · Sangat Baik",
                    projectName: "Pembangunan Sistem Informasi Berbasis Web & Basis Data Relasional",
                    technologies: ["PHP", "MySQL", "Bootstrap", "Apache", "HTML5/CSS3"],
                    role: "Full-Stack Developer / System Programmer",
                    result: "Dinyatakan KOMPETEN dengan predikat Sangat Baik (A) melalui sidang penguji internal sekolah dan asesor eksternal industri.",
                    description: "Merancang arsitektur basis data relasional, membangun antarmuka responsif pengguna, mengimplementasikan logika CRUD terintegrasi, dan memvalidasi alur bisnis sistem secara mandiri."
                },
                pkl: {
                    title: "Praktik Kerja Lapangan (PKL)",
                    company: "Rumah Sakit Mata SMEC Pekanbaru",
                    period: "3 Juli – 30 September 2021 (±3 Bulan)",
                    role: "IT Support & SIMRS Assistant",
                    duties: [
                        "Pemeliharaan workstation medis, perangkat komputer klinik, dan kestabilan konektivitas jaringan LAN rumah sakit.",
                        "Operasional harian dan monitoring Sistem Informasi Manajemen Rumah Sakit (SIMRS).",
                        "Digitalisasi, input, dan validasi integritas data layanan rekam medis pasien.",
                        "Troubleshooting cepat perangkat keras dan lunak operasional harian klinik."
                    ],
                    outputs: "Kelancaran operasional IT harian rumah sakit dan terjaganya keandalan digitalisasi alur layanan SIMRS.",
                    evaluation: {
                        title: "Penilaian Pembimbing Industri",
                        averageScore: "94 / 100",
                        predicate: "Sangat Memuaskan (Grade A)",
                        criteria: [
                            { name: "Kehadiran", score: 95 },
                            { name: "Kejujuran", score: 95 },
                            { name: "Tanggung Jawab", score: 95 },
                            { name: "Prakarsa", score: 95 },
                            { name: "Kecakapan", score: 90 }
                        ]
                    },
                    certification: "Sertifikat Praktik Kerja Lapangan (PKL), SMK Negeri 2 Guguak bersama RS Mata SMEC Pekanbaru (2021)"
                }
            }
        ],
        certifications: [
            {
                id: "bnsp-programmer",
                title: "Sertifikasi Kompetensi Programmer (KOMPETEN)",
                issuer: "LSP Politeknik Caltex Riau (BNSP-LSP-564-ID)",
                year: "2026",
                issueDate: "2026",
                type: "National Competency",
                credentialId: "BNSP-LSP-564-ID",
                desc: "Sertifikasi kompetensi nasional Badan Nasional Sertifikasi Profesi (BNSP) bidang rekayasa perangkat lunak, algoritma, pemrograman terstruktur, dan basis data.",
                modules: [
                    "Analisis Kebutuhan Sistem & Algoritma Pemrograman",
                    "Rekayasa Perangkat Lunak & Clean Code",
                    "Implementasi Struktur Basis Data Relasional",
                    "Pengujian & Validasi Kualitas Kode Program"
                ]
            },
            {
                id: "hackerrank-software-engineer",
                title: "Software Engineer Role Certification",
                issuer: "HackerRank",
                speaker: "Harishankaran K (CTO, HackerRank)",
                year: "2026",
                issueDate: "23 September 2026",
                type: "Software Engineering",
                credentialId: "D51DE7B5FE49",
                verifyUrl: "https://www.hackerrank.com/certificates/D51DE7B5FE49",
                image: "/images/certificates/cert_hackerrank_software_engineer.png",
                partner: "HackerRank Standardized Assessment",
                desc: "Sertifikasi peran Software Engineer berstandar industri global dari HackerRank, menguji pemecahan masalah algoritma, efisiensi struktur data, logika sistem, dan arsitektur kode bersih.",
                modules: [
                    "Problem Solving & Algoritma Kompleks",
                    "Optimalisasi Struktur Data & Kompleksitas Waktu",
                    "Logika Rekayasa Perangkat Lunak Industri",
                    "Prinsip Clean Code & Standar Produksi"
                ]
            },
            {
                id: "hackerrank-sql-advanced",
                title: "SQL (Advanced) Skill Certification",
                issuer: "HackerRank",
                speaker: "Harishankaran K (CTO, HackerRank)",
                year: "2026",
                issueDate: "23 September 2026",
                type: "Database & SQL",
                credentialId: "9BA3F212D6C8",
                verifyUrl: "https://www.hackerrank.com/certificates/9BA3F212D6C8",
                image: "/images/certificates/cert_hackerrank_sql_advanced.png",
                partner: "HackerRank Skill Assessment",
                desc: "Sertifikasi tingkat lanjut SQL dari HackerRank meliputi manipulasi kueri kompleks, recursive CTEs, window functions analitik, pivot data, dan optimasi performa basis data relasional.",
                modules: [
                    "Manipulasi Kueri Relasional Kompleks & Multi-Join",
                    "Recursive CTEs & Hierarchical Data Querying",
                    "Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD)",
                    "Data Aggregation, Pivot & Performance Tuning"
                ]
            },
            {
                id: "cisco-python-essentials-2",
                title: "Python Essentials 2 (PCAP Aligned)",
                issuer: "Cisco Networking Academy",
                partner: "OpenEDG Python Institute",
                speaker: "Lynn Bloomer (Director, Cisco Networking Academy)",
                year: "2026",
                issueDate: "01 Oktober 2026",
                type: "Programming & OOP",
                credentialId: "Cisco / OpenEDG Verified",
                verifyUrl: "https://www.netacad.com",
                image: "/images/certificates/cert_cisco_python_essentials_2.png",
                desc: "Sertifikasi keahlian tingkat lanjut bahasa pemrograman Python 3 mencakup Object-Oriented Programming (OOP), modularitas multi-package, penanganan exception, generator, closure, dan standar sertifikasi PCAP.",
                modules: [
                    "Desain, Debug & Refactoring Multi-Module Python 3",
                    "Pemodelan Masalah Nyata Berbasis OOP (Class, Inheritance, Polymorphism)",
                    "Advanced Exception Handling Hierarchies",
                    "Generators, Closures, Processing Strings & File I/O Streams"
                ]
            },
            {
                id: "dicoding-prompt-engineering",
                title: "Prompt Engineering untuk Software Developer",
                issuer: "Dicoding Indonesia",
                partner: "Google Developers (Authorized Training Partner)",
                hours: "16 Jam Belajar",
                year: "2026",
                issueDate: "15 September 2026",
                type: "AI & Engineering",
                credentialId: "98XW8G1O0PM3",
                verifyUrl: "https://dicoding.com/certificates/98XW8G1O0PM3",
                image: "/images/certificates/cert_dicoding_prompt_engineering.png",
                desc: "Sertifikasi resmi kerja sama dengan Google Developers Authorized Training Partner untuk teknik prompt engineering tingkat lanjut, Chain-of-Thought, Few-Shot prompting, dan integrasi LLM ke aktivitas software development.",
                modules: [
                    "Pengenalan Dasar Prompt Engineering & Cara Kerja GenAI (2.5 jam)",
                    "Pola Prompting Adaptif, Konsisten & Efektif (4.3 jam)",
                    "Implementasi Prompting pada Aktivitas Software Development (5.5 jam)",
                    "Limitasi, Etika & Mitigasi Risiko AI pada Software Engineering (1.5 jam)"
                ]
            },
            {
                id: "dicoding-azure-genai",
                title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
                issuer: "Dicoding Indonesia",
                partner: "Microsoft",
                hours: "8 Jam Belajar",
                year: "2026",
                issueDate: "21 September 2026",
                type: "AI & Cloud",
                credentialId: "N9ZO050K8XG5",
                verifyUrl: "https://dicoding.com/certificates/N9ZO050K8XG5",
                image: "/images/certificates/cert_dicoding_azure_genai.png",
                desc: "Pengembangan solusi Generative AI berbasis Azure OpenAI Service, integrasi prompt orchestration, Retrieval-Augmented Generation (RAG) dengan Azure AI Search, dan pengamanan respon AI.",
                modules: [
                    "Perencanaan Solusi AI di Azure AI Foundry & Responsible AI",
                    "Memilih & Deploy Language Model (LLM) ke Endpoint",
                    "Azure AI Foundry SDK & Chatbot Application Scripting",
                    "Orkestrasi Prompt Flow & Solusi RAG dengan Azure AI Search",
                    "Fine-Tuning Model Open-Source & Evaluasi Metrik Kinerja AI"
                ]
            },
            {
                id: "dicoding-fabric-datascience",
                title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
                issuer: "Dicoding Indonesia",
                partner: "Microsoft",
                year: "2026",
                issueDate: "21 September 2026",
                type: "Data Science & Cloud",
                credentialId: "53XEM4M79PRN",
                verifyUrl: "https://dicoding.com/certificates/53XEM4M79PRN",
                image: "/images/certificates/cert_dicoding_data_science_fabric.png",
                desc: "Penerapan pipeline data science end-to-end pada ekosistem Microsoft Fabric, eksplorasi data lakehouse, eksperimen model machine learning, dan deployment tracking.",
                modules: [
                    "Arsitektur Data Lakehouse & Ingestion di Microsoft Fabric",
                    "Data Exploration, Cleaning & Feature Engineering",
                    "Pelatihan Model Machine Learning & Tracking dengan MLflow",
                    "Model Deployment, Batch Scoring & Integrasi Power BI"
                ]
            },
            {
                id: "coursera-python-ust",
                title: "Create Your First Python Program",
                issuer: "UST (Coursera)",
                year: "2026",
                issueDate: "20 September 2026",
                type: "Programming",
                credentialId: "NA293WBSX22D",
                verifyUrl: "https://coursera.org/verify/NA293WBSX22D",
                image: "/images/certificates/cert_coursera_python_ust.png",
                desc: "Pelatihan praktik langsung implementasi algoritma pemrograman Python, struktur kendali, modularitas fungsi, dan eksekusi program terstruktur.",
                modules: [
                    "Python Syntax Basics & Runtime Setup",
                    "Control Flow (Branching & Loops)",
                    "Modular Function Architecture & Parameter Passing",
                    "Structured Code Execution & Debugging"
                ]
            },
            {
                id: "dicoding-java",
                title: "Memulai Pemrograman Dengan Java",
                issuer: "Dicoding Indonesia",
                hours: "15 Jam Belajar",
                year: "2026",
                issueDate: "15 September 2026",
                type: "Programming",
                credentialId: "0LZ0J9EGQX65",
                verifyUrl: "https://dicoding.com/certificates/0LZ0J9EGQX65",
                image: "/images/certificates/cert_dicoding_java_programming.png",
                desc: "Sertifikasi konsep pemrograman berorientasi objek (OOP) di Java (15 jam belajar), enkapsulasi, pewarisan (inheritance), polimorfisme, dan koleksi Java Collections.",
                modules: [
                    "Pengenalan Java Multiplatform & Setup IDE (IntelliJ / Replit)",
                    "Dasar Bahasa Java (Struktur, Data Types, String, Operators, Arrays)",
                    "Control Flow (Percabangan & Perulangan)",
                    "Collection Types (List, Set, Map) & Algoritma Manipulasi",
                    "OOP Paradigms (Class, Object, Encapsulation, Inheritance, Interface)",
                    "Common Classes, Exception Handling & Studi Kasus Algoritmik"
                ]
            },
            {
                id: "dicoding-c",
                title: "Memulai Pemrograman Dengan C",
                issuer: "Dicoding Indonesia",
                hours: "15 Jam Belajar",
                year: "2026",
                issueDate: "15 September 2026",
                type: "Programming",
                credentialId: "72ZDM862JZYW",
                verifyUrl: "https://dicoding.com/certificates/72ZDM862JZYW",
                image: "/images/certificates/cert_dicoding_c_programming.png",
                desc: "Sertifikasi sintaks dan logika pemrograman bahasa C (15 jam belajar), manajemen memori, pointer, manipulasi array dan struct, serta efisiensi komputasi.",
                modules: [
                    "Sejarah C, Lingkungan Kompilasi & Konsep Dasar",
                    "Variabel, Tipe Data Primitif, Inisialisasi & Assignment",
                    "Operasi Aritmatika, Boolean & Logika Komparasi",
                    "Instruksi Kondisional (If-Else, Switch) & Perulangan (For, While, Do-While)",
                    "Array & Matriks Multidimensi",
                    "Subprogram (Fungsi, Prosedur) & Problem Solving Kasus Riil"
                ]
            },
            {
                id: "dicoding-ai-basics",
                title: "Belajar Dasar AI",
                issuer: "Dicoding Indonesia",
                partner: "DBS Foundation",
                year: "2026",
                issueDate: "06 Agustus 2026",
                type: "Artificial Intelligence",
                credentialId: "EYX4QDWDJPDL",
                verifyUrl: "https://dicoding.com/certificates/EYX4QDWDJPDL",
                image: "/images/certificates/cert_dicoding_ai_basics.png",
                desc: "Sertifikasi pemahaman komprehensif konsep dasar kecerdasan buatan (AI), machine learning, computer vision, natural language processing, dan etika implementasi AI.",
                modules: [
                    "Konsep Dasar & Sejarah Perkembangan AI",
                    "Prinsip Machine Learning: Supervised, Unsupervised & Reinforcement",
                    "Pengenalan Deep Learning & Neural Networks",
                    "Aplikasi Nyata: Computer Vision & Natural Language Processing",
                    "Etika & Tata Kelola Kecerdasan Buatan"
                ]
            },
            {
                id: "dicoding-financial-lit",
                title: "Introduction to Financial Literacy",
                issuer: "Dicoding Indonesia",
                partner: "DBS Foundation Coding Camp",
                hours: "6 Jam Belajar",
                year: "2026",
                issueDate: "06 Agustus 2026",
                type: "Finance & Business",
                credentialId: "ERZRLQR1MZYV",
                verifyUrl: "https://dicoding.com/certificates/ERZRLQR1MZYV",
                image: "/images/certificates/cert_dicoding_financial_literacy.png",
                desc: "Pemahaman literasi keuangan (6 jam belajar), pengelolaan anggaran proyek, analisis arus kas digital, serta perencanaan keuangan strategis untuk profesional teknologi.",
                modules: [
                    "Decoding Your Financial Future - Navigasi & Pengelolaan Keuangan",
                    "Investing for Your Future - Konsep Investasi Menuju Kebebasan Finansial",
                    "Loan Management 101 - Smart Borrowing & Manajemen Risiko Finansial"
                ]
            },
            {
                id: "toeic-lti-pcr",
                title: "TOEIC Prediction Test (Score: 485)",
                issuer: "Language Training Institution (LTI Group)",
                partner: "LTI Group & Politeknik Caltex Riau",
                speaker: "Form: TNF-02A (Disahkan LTI Group)",
                year: "2026",
                issueDate: "9 Februari 2026",
                type: "Language Proficiency",
                credentialId: "202600662/LTI/X/2026",
                verifyUrl: "https://onlinetest.ltigroup.id/Certified?id_ujian=202600662&id_peserta=1008",
                score: "485 / 990",
                hours: "Total Skor: 485 (L: 235, R: 250)",
                image: "/images/certificates/cert_toeic_lti_pcr.png",
                desc: "Tes kemahiran bahasa Inggris internasional TOEIC® Prediction resmi dari Language Training Institution (LTI Group) dengan Nomor Sertifikat 202600662/LTI/X/2026 dan Form Ujian TNF-02A. Terverifikasi resmi oleh sistem validasi LTI Group dengan Total Skor 485 (Listening: 235, Reading: 250).",
                scoreBreakdown: {
                    title: "Rincian Skor TOEIC® Prediction",
                    total: "485 / 990",
                    items: [
                        { label: "Listening Section", value: "235" },
                        { label: "Reading Section", value: "250" }
                    ]
                },
                modules: [
                    "Listening Comprehension Section: 235 (Percakapan Kerja, Arahan Audio & Dialog Profesional)",
                    "Reading Comprehension Section: 250 (Dokumen Teknis, Laporan Bisnis & Korespondensi Email)",
                    "Verifikasi Resmi Sistem Validasi Sertifikat Digital LTI Group (202600662/LTI/X/2026)",
                    "Standar Evaluasi TOEIC® Prediction Resmi Language Training Institution (LTI PCR)"
                ]
            },
            {
                id: "cisco-english-it",
                title: "English for IT 2 (CEFR B2)",
                issuer: "Cisco Networking Academy & OpenEDG",
                partner: "Cisco & OpenEDG",
                speaker: "Lynn Bloomer (Director, Cisco Networking Academy)",
                year: "2026",
                issueDate: "25 September 2026",
                type: "Professional Communication",
                credentialId: "Student Level Credential (CEFR B2)",
                hours: "CEFR Level B2 Certified",
                verifyUrl: "https://www.netacad.com",
                image: "/images/certificates/cert_cisco_english_for_it_2.png",
                desc: "Sertifikasi kemahiran komunikasi profesional berbahasa Inggris tingkat internasional dari Cisco Networking Academy & OpenEDG pada standar CEFR B2, mencakup komunikasi teknis tim software engineering, vocabulary cloud computing, dan korespondensi formal.",
                modules: [
                    "Penggunaan Subjunctive Mood, Modal Verbs, Cleft Sentences & Conjunctions",
                    "Deduksi Logis & Komunikasi Formal Profesional dalam Email Teknis",
                    "Pengenalan CamelCase, snake_case & Terminologi Penanganan Bug Software",
                    "Standar Kemahiran Bahasa Inggris Tingkat CEFR B2 Bidang IT",
                    "Terminologi Jaringan Komputer, Customer Support, OS & Manajemen Produk",
                    "Kosakata Komputasi Awan (Cloud Computing) & Pertukaran Feedback Teknis Tim"
                ]
            },
            {
                id: "mikrotik-mtcna",
                title: "MikroTik Certified Network Associate (MTCNA)",
                issuer: "MikroTik (Riga, Latvia)",
                year: "2024",
                issueDate: "10 Juli 2024",
                type: "Networking",
                credentialId: "2407NA8555",
                verifyUrl: "https://mikrotik.com/certificates",
                image: "/images/certificates/cert_mikrotik_mtcna.png",
                desc: "Sertifikasi internasional konfigurasi RouterOS, manajemen IP routing, subnetting, DHCP, firewall security, NAT, antrean bandwidth (Queues), dan tunneling.",
                modules: [
                    "RouterOS Installation & Configuration Baseline",
                    "IP Routing & Subnetting Architecture",
                    "DHCP Server & Client Configuration",
                    "Firewall Filter Rules & Network Address Translation (NAT)",
                    "Quality of Service (QoS) & Queue Bandwidth Shaping",
                    "VPN Tunnels (PPTP, L2TP, SSTP) & Wireless Basics"
                ]
            },
            {
                id: "cisco-ccna-srwe",
                title: "CCNA: Switching, Routing, and Wireless Essentials (SRWE)",
                issuer: "Cisco Networking Academy",
                year: "2024",
                issueDate: "28 Februari 2024",
                type: "Networking",
                credentialId: "Cisco Academy Aligned",
                verifyUrl: "https://www.netacad.com",
                image: "/images/certificates/cert_cisco_ccna_switching.png",
                desc: "Konfigurasi VLAN, Trunking 802.1Q, Inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, SLAAC, first-hop redundancy protocols (HSRP), dan WLAN controller.",
                modules: [
                    "VLAN Segmentation & 802.1Q Trunking Protocol",
                    "Spanning Tree Protocol (STP) & EtherChannel Link Aggregation",
                    "Inter-VLAN Routing & Dynamic Host Configuration (DHCPv4/v6)",
                    "SLAAC Addressing & First-Hop Redundancy Protocols (HSRP)",
                    "WLAN Controller Architecture & Wireless Security"
                ]
            },
            {
                id: "cisco-ccna-itn",
                title: "CCNA: Introduction to Networks (ITN)",
                issuer: "Cisco Networking Academy",
                year: "2024",
                issueDate: "28 Februari 2024",
                type: "Networking",
                credentialId: "Cisco Academy Aligned",
                verifyUrl: "https://www.netacad.com",
                image: "/images/certificates/cert_cisco_ccna_intro.png",
                desc: "Pemahaman arsitektur model OSI & TCP/IP, pengalamatan IPv4/IPv6, instalasi dan konfigurasi awal perangkat switch dan router Cisco, serta keamanan jaringan dasar.",
                modules: [
                    "Network Architecture across OSI & TCP/IP Reference Models",
                    "IPv4 & IPv6 Subnetting & Addressing Schemes",
                    "Cisco IOS Switch & Router Initial Configuration",
                    "Ethernet Protocol & Layer 2 Switching Operation",
                    "Transport Layer (TCP/UDP) & Application Services"
                ]
            },
            {
                id: "gamatechno-system-analyst",
                title: "Memahami Peran System Analyst dalam Pengembangan Aplikasi",
                issuer: "PT Gamatechno Indonesia",
                partner: "TechnoClass by Gamatechno",
                speaker: "Alivia Saskia P (System Analyst at PT Gamatechno Indonesia)",
                year: "2022",
                issueDate: "28 Oktober 2022",
                type: "System Analysis",
                credentialId: "40251/SNM/STF/XI/2022",
                verifyUrl: "https://sertiva.id",
                image: "/images/certificates/cert_gamatechno_system_analyst.jpg",
                desc: "Sertifikasi resmi seminar & workshop analitis dari PT Gamatechno Indonesia membahas peran strategis System Analyst sebagai jembatan antara kebutuhan bisnis dengan arsitektur teknologi perangkat lunak.",
                modules: [
                    "Analisis Kebutuhan Bisnis & Translasi ke Spesifikasi Fungsional (FR/NFR)",
                    "Pemodelan Proses Bisnis (BPMN) & Use Case Diagram",
                    "Komunikasi & Kolaborasi Lintas Tim: Stakeholders, UI/UX, dan Engineers",
                    "Penyusunan Software Requirements Specification (SRS) Standar Industri"
                ]
            },
            {
                id: "ehe-eccouncil",
                title: "Ethical Hacking Essentials (EHE)",
                issuer: "EC-Council",
                partner: "EC-Council Global (President: Jay Bavisi)",
                speaker: "Jay Bavisi (President, EC-Council)",
                year: "2026",
                issueDate: "13 Mei 2026",
                expiryDate: "12 Mei 2029",
                type: "Cyber Security",
                credentialId: "ECC4529670318",
                hours: "Masa Berlaku: 13 Mei 2026 – 12 Mei 2029",
                verifyUrl: "https://aspen.eccouncil.org",
                image: "/images/certificates/cert_eccouncil_ethical_hacking_essentials.jpg",
                desc: "Sertifikasi resmi keamanan siber berstandar internasional dari EC-Council, memverifikasi kompetensi dalam fundamental ethical hacking, identifikasi kerentanan sistem web & jaringan, threat intelligence, dan mitigasi risiko informasi.",
                modules: [
                    "Cyber Security Fundamentals & Threat Landscape",
                    "Web Application Security & Vulnerability Scanning",
                    "Network Attacks, Penetration Testing & Defensive Countermeasures",
                    "Information Security Policy & Risk Mitigation"
                ]
            },
            {
                id: "kominfo-vsga",
                title: "VSGA - Junior Web Developer",
                issuer: "Kementerian Komunikasi dan Informatika RI (Balitbang SDM)",
                partner: "Digital Talent Scholarship 2022 & Politeknik Caltex Riau",
                speaker: "Hary Budiarto (Kepala Balitbang SDM Kominfo)",
                year: "2022",
                issueDate: "16 September 2022",
                type: "Web Development",
                credentialId: "VSGA/2022/3858/150305899100-2718",
                hours: "90 Jam Pelatihan (18 Jul – 29 Agt 2022)",
                verifyUrl: "https://digitalent.kominfo.go.id",
                image: "/images/certificates/cert_kominfo_vsga_jwd.png",
                pages: [
                    { label: "Sertifikat Pelatihan Resmi", image: "/images/certificates/cert_kominfo_vsga_jwd.png" },
                    { label: "Daftar Unit Kompetensi SKKNI", image: "/images/certificates/cert_kominfo_vsga_jwd_syllabus.png" }
                ],
                desc: "Sertifikasi pelatihan berbasis Standar Kompetensi Kerja Nasional Indonesia (SKKNI) program Vocational School Graduate Academy (VSGA) DTS 2022 kerja sama Balitbang SDM Kominfo RI dengan Politeknik Caltex Riau selama 90 jam pelatihan.",
                modules: [
                    "Mengimplementasikan User Interface (UI)",
                    "Menerapkan perintah eksekusi bahasa pemrograman berbasis teks, grafik, dan multimedia",
                    "Menyusun fungsi, file atau sumber daya pemrograman dalam organisasi yang rapi",
                    "Menulis kode dengan prinsip sesuai guidelines dan best practices",
                    "Mengimplementasikan pemrograman terstruktur",
                    "Menggunakan library atau komponen pre-existing"
                ]
            }
        ],
        achievementsAndLeadership: [
            {
                title: "Sertifikat Penghargaan Pengembangan & Implementasi Sistem",
                org: "Central Palantea Hidroponik",
                year: "2026",
                issueDate: "18 Agustus 2026",
                category: "Penghargaan",
                credentialId: "0012/CP.08/2026",
                speaker: "Ismail (Pimpinan Central Palantea)",
                signerLabel: "Pimpinan Central Palantea",
                image: "/images/certificates/cert_penghargaan_central_palantea.jpg",
                desc: "Menerima penghargaan resmi atas dedikasi, kompetensi, dan kontribusi nyata dalam merancang, membangun, serta mengimplementasikan Website Penjualan Online Central Palantea Hidroponik yang terbukti meningkatkan efisiensi proses bisnis.",
                awardDetails: {
                    title: "Legalitas Sertifikat Penghargaan Mitra Usaha",
                    badge: "No. 0012/CP.08/2026",
                    items: [
                        { label: "Nomor Sertifikat", value: "0012/CP.08/2026" },
                        { label: "Bentuk Penghargaan", value: "Pengembangan & Implementasi Platform Penjualan Online" },
                        { label: "Mitra Penerbit", value: "Central Palantea Hidroponik" },
                        { label: "Pimpinan / Pengesah", value: "Ismail (Pimpinan Central Palantea)" },
                        { label: "Tempat & Tanggal Pengesahan", value: "Duri, 18 Agustus 2026" },
                        { label: "Dampak Implementasi", value: "Otomasi Transaksi, Tracking Pesanan & Efisiensi Operasional" }
                    ]
                }
            },
            {
                title: "Mahasiswa Berprestasi Non Akademik – Juara 2 Kejuaraan Pencak Silat Nasional",
                org: "Politeknik Caltex Riau",
                year: "2025",
                partner: "T.A. 2024/2025 • Non Akademik",
                category: "Prestasi",
                credentialId: "0231.42/STF/PCR/2025",
                issueDate: "31 Agustus 2025",
                speaker: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur PCR)",
                signerLabel: "Pengesah / Direktur PCR",
                desc: "Dianugerahi Sertifikat Mahasiswa Berprestasi Tahun Ajaran 2024/2025 Kategori Non Akademik oleh Direktur Politeknik Caltex Riau atas prestasi membanggakan meraih Juara 2 (Medali Perak) Kejuaraan Pencak Silat Nasional Tahun 2025 mewakili kontingen atlet kampus.",
                awardDetails: {
                    title: "Legalitas Sertifikat Penghargaan Direktur PCR",
                    badge: "No. 0231.42/STF/PCR/2025",
                    items: [
                        { label: "Nomor Sertifikat", value: "0231.42/STF/PCR/2025" },
                        { label: "Predikat Penghargaan", value: "Mahasiswa Berprestasi Tahun Ajaran 2024/2025" },
                        { label: "Kategori Prestasi", value: "Non Akademik (Olahraga Beladiri)" },
                        { label: "Pencapaian Kompetisi", value: "Juara 2 Kejuaraan Pencak Silat Nasional Tahun 2025" },
                        { label: "Tempat & Tanggal Pengesahan", value: "Pekanbaru, 31 Agustus 2025" },
                        { label: "Pejabat Pengesah", value: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur Politeknik Caltex Riau)" }
                    ]
                }
            },
            {
                title: "Mahasiswa Berprestasi Non Akademik – Juara 1 Kejuaraan Pencak Silat Nasional",
                org: "Politeknik Caltex Riau",
                year: "2024",
                partner: "T.A. 2023/2024 • Non Akademik",
                category: "Prestasi",
                credentialId: "0231.42/STF/PCR/2024",
                issueDate: "31 Agustus 2024",
                speaker: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur PCR)",
                signerLabel: "Pengesah / Direktur PCR",
                desc: "Dianugerahi Sertifikat Mahasiswa Berprestasi Tahun Ajaran 2023/2024 Kategori Non Akademik oleh Direktur Politeknik Caltex Riau atas prestasi membanggakan meraih Juara 1 (Medali Emas) Kejuaraan Pencak Silat Nasional Tahun 2024 mewakili kontingen atlet kampus.",
                awardDetails: {
                    title: "Legalitas Sertifikat Penghargaan Direktur PCR",
                    badge: "No. 0231.42/STF/PCR/2024",
                    items: [
                        { label: "Nomor Sertifikat", value: "0231.42/STF/PCR/2024" },
                        { label: "Predikat Penghargaan", value: "Mahasiswa Berprestasi Tahun Ajaran 2023/2024" },
                        { label: "Kategori Prestasi", value: "Non Akademik (Olahraga Beladiri)" },
                        { label: "Pencapaian Kompetisi", value: "Juara 1 Kejuaraan Pencak Silat Nasional Tahun 2024" },
                        { label: "Tempat & Tanggal Pengesahan", value: "Pekanbaru, 31 Agustus 2024" },
                        { label: "Pejabat Pengesah", value: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur Politeknik Caltex Riau)" }
                    ]
                }
            },
            {
                title: "Mahasiswa Berprestasi Non Akademik – Juara 3 Kejuaraan Pencak Silat Nasional",
                org: "Politeknik Caltex Riau",
                year: "2023",
                partner: "T.A. 2022/2023 • Non Akademik",
                category: "Prestasi",
                credentialId: "0231.42/STF/PCR/2023",
                issueDate: "31 Agustus 2023",
                speaker: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur PCR)",
                signerLabel: "Pengesah / Direktur PCR",
                desc: "Dianugerahi Sertifikat Mahasiswa Berprestasi Tahun Ajaran 2022/2023 Kategori Non Akademik oleh Direktur Politeknik Caltex Riau atas prestasi membanggakan meraih Juara 3 (Medali Perunggu) Kejuaraan Pencak Silat Nasional Tahun 2023 mewakili kontingen atlet kampus.",
                awardDetails: {
                    title: "Legalitas & Rincian Juara 3 Pencak Silat Nasional",
                    badge: "No. 0231.42/STF/PCR/2023",
                    items: [
                        { label: "Nomor Sertifikat PCR", value: "0231.42/STF/PCR/2023" },
                        { label: "Predikat Penghargaan", value: "Mahasiswa Berprestasi Tahun Ajaran 2022/2023" },
                        { label: "Medali Kejuaraan", value: "Medali Perunggu (Bronze Medal 3rd Place)" },
                        { label: "Kategori Kejuaraan", value: "Pemenang 3 Kelas E Putri (Remaja) – Kejurda V Se-Sumatera" },
                        { label: "Penyelenggara / Tempat", value: "PPS Betako Merpati Putih Komda Sumbar · GOR Sago Gafur (17–19 Maret 2023)" },
                        { label: "Pejabat Pengesah", value: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur Politeknik Caltex Riau)" }
                    ]
                }
            },
            {
                title: "Regional Leader (Koordinator Wilayah) – PCR Goes to School",
                org: "Politeknik Caltex Riau",
                year: "2023 & 2024",
                category: "Kepemimpinan",
                desc: "Memimpin tim wilayah untuk kegiatan promosi universitas, mengelola logistik operasional, penyampaian presentasi ke sekolah-sekolah, dan koordinasi relawan."
            },
            {
                title: "Divisi Acara – Sumatra Networking Competition (SNC)",
                org: "Sumatra Networking Competition",
                year: "2023",
                category: "Kepanitiaan",
                desc: "Memimpin perencanaan dan eksekusi rundown acara, mendelegasikan tanggung jawab di internal divisi acara, serta memastikan kelancaran seluruh alur kompetisi."
            },
            {
                title: "Divisi Acara (Program Coordinator) – Studi Islam Intensif (SII)",
                org: "Studi Islam Intensif (SII)",
                year: "2023",
                category: "Kepanitiaan",
                desc: "Merancang susunan rundown lengkap, mengelola distribusi tugas dalam tim acara, serta mengawal ketepatan jadwal dan ketepatan waktu setiap sesi acara."
            },
            {
                title: "Divisi Acara (Program Coordinator) – PCR Cup Volleyball Tournament",
                org: "Turnamen Bola Voli PCR Cup",
                year: "2024",
                category: "Kepanitiaan",
                desc: "Menyusun jadwal pertandingan turnamen dan memimpin koordinasi teknis antara staf pelaksana acara dengan tim perwasitan/aturan kompetisi."
            },
            {
                title: "Divisi Acara (Program Coordinator) – Musyawarah Besar UKM Bola Voli",
                org: "UKM Bola Voli Politeknik Caltex Riau",
                year: "2024",
                category: "Kepanitiaan",
                desc: "Mengelola jalannya alur musyawarah besar, mengatur alur panggung, mengoordinasikan tim dokumentasi, serta memanajemen sesi internal sidang."
            },
            {
                title: "Divisi Acara (Program Coordinator) – Pembekalan Pementor PCR",
                org: "UKMI Politeknik Caltex Riau",
                year: "2023",
                category: "Kepanitiaan",
                desc: "Merencanakan dan mengawasi jadwal pelaksanaan acara pembekalan mentor, serta menetapkan tugas bagi seluruh anggota panitia divisi acara."
            },
            {
                title: "Anggota & Atlet – Komunitas Beladiri Politeknik Caltex Riau (Beladiri PCR)",
                org: "Politeknik Caltex Riau",
                year: "2022 – 2026",
                category: "Organisasi",
                credentialId: "Atlet Pencak Silat Kontingen PCR",
                desc: "Aktif berlatih dan mewakili kampus Politeknik Caltex Riau dalam berbagai kejuaraan pencak silat tingkat nasional, serta berkontribusi dalam pembinaan disiplin atlet, kebugaran fisik, dan keorganisasian komunitas beladiri kampus."
            },
            {
                title: "Anggota Aktif – Caltex Techno Science Club (CTS)",
                org: "Politeknik Caltex Riau",
                year: "2022 – 2026",
                category: "Organisasi",
                desc: "Berpartisipasi aktif dalam berbagai diskusi, forum riset sains, inovasi teknologi, dan kegiatan workshop pengembangan perangkat lunak."
            },
            {
                title: "Kader Aktif – UKMI Ar-Ruhul Jadid",
                org: "UKMI Ar-Ruhul Jadid Politeknik Caltex Riau",
                year: "2022 – 2026",
                category: "Organisasi",
                desc: "Aktif mengikuti kegiatan pembinaan karakter kepemimpinan, kepanitiaan sosial kemahasiswaan, dan penguatan nilai integritas organisasi kampus."
            }
        ],
        contact: {
            badge: "Hubungi Saya",
            title: "Mari Terhubung & Berdiskusi",
            subtitle: "Tertarik mendiskusikan peluang karir Fullstack Developer, Business/System Analyst, Data Analyst, atau kolaborasi proyek? Silakan hubungi saya melalui jalur di bawah ini.",
            infoHeading: "Informasi Kontak",
            emailLabel: "Email Resmi",
            copyEmail: "Salin alamat email",
            copied: "Tersalin!",
            whatsappTitle: "Chat Langsung via WhatsApp",
            whatsappSub: "Diskusi peluang kerja & jadwal interview",
            fastResponse: "Respon Cepat",
            linkedinSub: "Koneksi profesional & jaringan industri",
            githubTitle: "Repository & Source Code",
            githubSub: "Eksplorasi kode proyek & portfolio development",
            locationLabel: "Domisili & Ketersediaan",
            openForWork: "Terbuka untuk Kerja (Full-time / Kontrak)",
            workMode: "Remote / On-site",
            formHeading: "Kirim Pesan Langsung",
            formSub: "Form ini terhubung ke backend Laravel dengan validasi langsung dan penyimpanan aman ke database.",
            labelName: "Nama Lengkap",
            placeholderName: "Nama Anda / Perusahaan",
            labelEmail: "Alamat Email",
            placeholderEmail: "nama@email.com",
            labelSubject: "Subjek / Perihal",
            placeholderSubject: "Peluang Karir / Diskusi Proyek",
            labelMessage: "Pesan",
            placeholderMessage: "Tuliskan pesan atau detail peluang yang ingin didiskusikan...",
            submitBtn: "Kirim Pesan",
            submittingBtn: "Mengirim Pesan...",
            successMessage: "Pesan Anda berhasil dikirim! Terima kasih."
        },
        footer: {
            bannerBadge: "Peluang Karir & Kolaborasi",
            bannerTitle: "Mari Ciptakan Solusi Digital yang Berdampak Nyata",
            bannerSubtitle: "Mencari Fullstack Developer handal atau Business/System Analyst dengan latar belakang rekayasa perangkat lunak yang teruji? Saya siap berdiskusi.",
            ctaEmail: "Hubungi via Email",
            ctaCv: "Unduh CV Resmi (PDF)",
            affiliation: "Fresh Graduate D4 Teknik Informatika · Politeknik Caltex Riau",
            tagline: "Mengintegrasikan keahlian full-stack web engineering (Laravel 11, React.js) dengan ketajaman analisis bisnis untuk menghasilkan produk digital kelas enterprise yang andal dan teruji.",
            statusAvailability: "Terbuka untuk Peluang Kerja (Pekanbaru / Remote / On-site)",
            quickNavHeading: "Navigasi Portofolio",
            connectHeading: "Koneksi & Jaringan",
            liveWebLabel: "Website Live Central Palantea",
            techStack: "Laravel 11 · React.js · Inertia.js · Tailwind CSS v4",
            allRights: "Seluruh hak cipta dilindungi.",
            backToTop: "Kembali ke Atas"
        },
        cvData: {
            modal: {
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
            },
            atsView: {
                docTitle: "CV ATS - Nadila Putri | Fullstack Developer & Business Analyst",
                backToPortfolio: "Kembali ke Portofolio",
                printSavePdf: "Cetak / Simpan PDF",
                originalPdfBtn: "Dokumen Asli (PDF)",
                atsScoreBadge: "100% ATS Friendly · Single-Column Standard",
                autoSyncNotice: "Data CV ini tersinkronisasi otomatis dari database portofolio terkini.",
                sections: {
                    summary: "RINGKASAN PROFESIONAL",
                    skills: "KEAHLIAN TEKNIS",
                    experience: "PENGALAMAN KERJA & MAGANG",
                    projects: "PROYEK & STUDI KASUS UNGGULAN",
                    education: "PENDIDIKAN",
                    certifications: "SERTIFIKASI PROFESIONAL & LISENSI",
                    leadership: "PRESTASI, KEPEMIMPINAN & ORGANISASI",
                },
                labels: {
                    location: "Domisili",
                    email: "Email",
                    phone: "Telepon",
                    linkedin: "LinkedIn",
                    github: "GitHub",
                    portfolio: "Portofolio",
                    gpa: "IPK",
                    role: "Peran",
                    stack: "Teknologi",
                    liveDemo: "Live Demo",
                    sourceCode: "Source Code",
                    credentialId: "No. Kredensial",
                    modules: "Kompetensi Utama",
                }
            }
        }
    },

    // ==========================================
    // VERSI BAHASA INGGRIS (EN)
    // ==========================================
    en: {
        meta: {
            title: "Nadila Putri | Fullstack Developer & Business/System Analyst",
            description: "Official Portfolio of Nadila Putri - Fresh Graduate of D4 Informatics Engineering Politeknik Caltex Riau. Fullstack Developer (Laravel 11, React.js), Business & System Analysis, Data Analysis.",
        },
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience & Education",
            contact: "Contact",
            downloadCv: "Download CV",
            langLabel: "Language",
        },
        profile: {
            name: "Nadila Putri",
            roleHeadline: "Fullstack Developer (Laravel, React.js) | Business & System Analysis | Data Analysis",
            summary: "Fresh graduate in Informatics Engineering from Politeknik Caltex Riau (GPA 3.61/4.00) with proven expertise in building full-stack web applications using Laravel 11, React.js, and MySQL. Experienced in business & system analysis, workflow mapping, and rigorous testing methodologies (SUS & Blackbox). Adept at bridging strategic business objectives into robust, scalable technical solutions.",
            location: "Pekanbaru, Riau",
            email: "nadilaaa24putriii@gmail.com",
            linkedinUrl: "https://linkedin.com/in/nadila-putri-928679362",
            githubUrl: "https://github.com/nadilastack",
            cvFileUrl: "/CV_Nadila_Putri_IND.pdf",
            gpa: "3.61 / 4.00",
            institution: "Politeknik Caltex Riau",
            status: "Fresh Graduate of Informatics Engineering (2026)",
            competencyStatus: "COMPETENT - BNSP Certified Programmer (LSP Politeknik Caltex Riau)"
        },
        hero: {
            statusBadge: "Fresh Graduate D4 Informatics Engineering · Politeknik Caltex Riau",
            availabilityBadge: "Open to Work (Full-time / Contract)",
            greeting: "Hi, I'm",
            ctaCv: "Download CV",
            ctaProjects: "View Projects",
            ctaContact: "Get in Touch",
            certifiedBadge: "BNSP Certified Programmer Scheme:",
            competentLabel: "COMPETENT",
        },
        pillars: [
            {
                id: "fullstack",
                title: "Fullstack Web Development",
                color: "indigo",
                description: "End-to-end web application development using Laravel 11 and React.js, optimized relational MySQL architecture, and seamless RESTful API integration.",
                badge: "Core Pillar"
            },
            {
                id: "analysis",
                title: "Business & System Analysis",
                color: "teal",
                description: "Translating stakeholder requirements into precise technical specifications, business process mapping (BPM), and coordinating comprehensive UAT workflows.",
                badge: "Analysis Pillar"
            },
            {
                id: "data",
                title: "Data & Performance Analysis",
                color: "amber",
                description: "Data exploration with Python & SQL for feature insights, combined with website speed and reliability evaluation using Core Web Vitals & Google Lighthouse.",
                badge: "Optimization Pillar"
            }
        ],
        about: {
            badge: "Professional Profile",
            title: "About Me",
            subtitle: "Combining sharp business acumen with solid full-stack web development execution to engineer digital systems that are reliable, thoroughly validated, and high-impact.",
            coreHeading: "Bridging Business Requirements to Technical Solutions",
            paragraph1: "Graduating with a Bachelor of Applied Science (D4) in Informatics Engineering from Politeknik Caltex Riau (GPA 3.61/4.00), I possess comprehensive foundations in software engineering. Through industry internships as a Business Analyst and Project Coordinator, I have honed skills in requirements gathering, business process mapping, cross-team alignment, and orchestrating User Acceptance Testing (UAT).",
            paragraph2: "On the engineering side, I build robust full-stack applications leveraging Laravel 11, React.js, and MySQL with Rapid Solo Software Development (RSSD) and Design Thinking. I evaluate usability using the System Usability Scale (SUS) and optimize digital performance via Core Web Vitals and Google Lighthouse audits.",
            certifiedStatement: "Certified as COMPETENT under the Programmer Scheme by the National Professional Certification Board (BNSP).",
            val1Title: "Optimized Data Architecture",
            val1Desc: "Capable of simplifying database schemas, eliminating redundant tables, and streamlining role-based authentication.",
            val2Title: "Measurable Quality Assurance",
            val2Desc: "Ensuring top-tier software reliability through 100% functional Blackbox testing, standardized SUS usability grading, and performance audits.",
            statsHeading: "Verified Highlights & Metrics",
        },
        keyStats: [
            { label: "Graduation GPA (D4 Informatics)", value: "3.61", suffix: "/ 4.00", note: "Politeknik Caltex Riau" },
            { label: "Capstone SUS Usability Score", value: "90", suffix: "& 85.7", note: "Grade A / Excellent (Admin & Users)" },
            { label: "Blackbox Testing Rate", value: "100%", suffix: "", note: "90 Tested Functional Scenarios" },
            { label: "Official Credentials & Certifications", value: "20", suffix: "Certificates", note: "BNSP, HackerRank, Cisco, EC-Council, Kominfo" },
            { label: "National Martial Arts Medals", value: "3x", suffix: "Medals", note: "Gold (2024), Silver (2025), Bronze (2023)" },
        ],
        skills: {
            badge: "Skills & Competencies",
            title: "Technical & Analytical Skills",
            subtitle: "Proven capabilities demonstrated across real-world capstone development, enterprise internships, and certified assessments.",
            allTab: "All Categories",
        },
        skillGroups: [
            {
                id: "fullstack",
                name: "Fullstack Development",
                description: "Engineering modern, efficient, and scalable web platforms",
                skills: [
                    { name: "PHP", level: "Advanced", highlight: true },
                    { name: "Laravel 11", level: "Advanced", highlight: true },
                    { name: "JavaScript", level: "Intermediate", highlight: true },
                    { name: "React.js", level: "Advanced", highlight: true },
                    { name: "MySQL", level: "Advanced", highlight: true },
                    { name: "Git", level: "Advanced", highlight: false },
                    { name: "GitHub", level: "Advanced", highlight: false },
                    { name: "Postman", level: "Advanced", highlight: false }
                ]
            },
            {
                id: "analysis",
                name: "Business & System Analysis",
                description: "System design methodologies, requirement engineering & coordination",
                skills: [
                    { name: "Requirements Analysis", level: "Advanced", highlight: true },
                    { name: "System Analysis & Design", level: "Advanced", highlight: true },
                    { name: "Business Process Mapping", level: "Advanced", highlight: true },
                    { name: "Database Design", level: "Advanced", highlight: true },
                    { name: "SDLC & Agile/Scrum", level: "Proficient", highlight: false },
                    { name: "User Acceptance Testing (UAT)", level: "Advanced", highlight: true },
                    { name: "Gap Analysis", level: "Intermediate", highlight: false },
                    { name: "Stakeholder Management", level: "Intermediate", highlight: false },
                    { name: "Project Coordination", level: "Advanced", highlight: false },
                    { name: "Digital Transformation", level: "Intermediate", highlight: false },
                    { name: "Technical Documentation", level: "Advanced", highlight: true }
                ]
            },
            {
                id: "data",
                name: "Data & Performance Analysis",
                description: "Data exploration and objective system performance benchmarking",
                skills: [
                    { name: "Python", level: "Intermediate", highlight: true },
                    { name: "SQL", level: "Advanced", highlight: true },
                    { name: "Data Analysis", level: "Intermediate", highlight: false },
                    { name: "Customer Data Analysis", level: "Intermediate", highlight: false },
                    { name: "AI/ML Implementation Concept", level: "Intermediate", highlight: false },
                    { name: "Core Web Vitals", level: "Advanced", highlight: true },
                    { name: "Google Lighthouse", level: "Advanced", highlight: true },
                    { name: "PageSpeed Insights", level: "Advanced", highlight: true },
                    { name: "Root Cause Analysis", level: "Intermediate", highlight: false }
                ]
            },
            {
                id: "tools",
                name: "Tools & Software",
                description: "Essential toolset for interface design, testing, and collaboration",
                skills: [
                    { name: "Figma", level: "UI/UX & Wireframing", highlight: true },
                    { name: "Postman", level: "API Testing & Mocking", highlight: true },
                    { name: "Git & GitHub", level: "Version Control & CI/CD", highlight: true }
                ]
            }
        ],
        projectsSection: {
            badge: "Case Studies & Portfolio",
            title: "Featured Case Studies",
            subtitle: "Presented in structured case study format: background & problem, role, system flow diagram, and verified metrics.",
            allTab: "All Projects",
            openModal: "Open Full Case Study",
            impactHeading: "Measurable Impact & Results:",
            featuredBadge: "Featured",
            modalHeadings: {
                background: "1. Background & Problem Statement",
                role: "2. Role & Responsibilities",
                tech: "3. Tools & Technologies",
                featuresFlow: "4. Key Features & System Architecture Flow",
                impacts: "5. Measurable Results & Impact",
                links: "Project Links:",
                close: "Close",
                githubRepo: "GitHub Repository",
                demoDocs: "Project Demo / Documentation",
                internalNotice: "Repository is internal / private",
                galleryTitle: "System Interface & Screenshots",
                gallerySubtitle: "Click module tabs below to explore the implemented system interfaces",
                viewFullImage: "View Full Image",
                viewFullCertificate: "View Full Resolution Certificate",
                certGivenBy: "Issued By",
                certDateLocation: "Date & Location"
            }
        },
        projects: [
            {
                id: "central-palantea-hidroponik",
                title: "Central Palantea Hydroponics Online Commerce Platform",
                category: "Fullstack",
                badgeText: "Capstone Project (2026) · Featured Project",
                featured: true,
                image: "/images/projects/palantea_hero_landing.jpg",
                galleryTitle: "Website Screenshots & E-Commerce Interface",
                gallerySubtitle: "Click the tabs below to explore the online storefront, fresh vegetable & fruit catalogs, farm profile, and event gallery",
                gallery: [
                    {
                        title: "Homepage & Hero Section",
                        src: "/images/projects/palantea_hero_landing.jpg",
                        description: "Modern homepage interface featuring high-tech greenhouse visuals, eco-tourism & fresh grocery value proposition, quick-action reservation & shop buttons, and integrated category navigation."
                    },
                    {
                        title: "Hydroponic Vegetables Catalog",
                        src: "/images/projects/palantea_catalog_sayuran.png",
                        description: "Interactive fresh vegetable storefront (Butterhead, Dakota, Kale, Basil, Cabbage) with dynamic category badges, real-time stock levels, and instant add-to-cart actions."
                    },
                    {
                        title: "Fresh Fruits Catalog",
                        src: "/images/projects/palantea_catalog_buah.png",
                        description: "Pesticide-free fruit catalog (Grapes, Apples, Green Apples, Apricots, Atemoya) with tab filtering, high-resolution product imagery, and centralized inventory tracking."
                    },
                    {
                        title: "About Us & Value Proposition",
                        src: "/images/projects/palantea_about_section.png",
                        description: "Company profile module presenting the hydroponic farm background, 100% fresh pesticide-free quality guarantees, and direct-harvest educational tourism programs."
                    },
                    {
                        title: "Educational Tours & Outing Gallery",
                        src: "/images/projects/palantea_galeri_kegiatan.jpg",
                        description: "Visual documentation of school outing classes, community visits, and family tours engaging in hands-on hydroponic harvesting at Central Palantea farm."
                    }
                ],
                certificate: {
                    title: "Official Certificate of Appreciation",
                    number: "No. 0012/CP.08/2026",
                    issuer: "Head of Central Palantea (Ismail)",
                    locationDate: "Duri, August 18, 2026",
                    image: "/images/certificates/cert_penghargaan_central_palantea.jpg",
                    quote: "Awarded for exceptional dedication, technical competence, and impactful contributions in designing, developing, and deploying the Central Palantea Hydroponics Online Commerce Website. The delivered solution demonstrated outstanding technical quality, professional UI, and tangible business process efficiency, enhancing product accessibility and customer service excellence."
                },
                shortDescription: "End-to-end e-commerce platform built with Laravel 11 & React.js adhering to RSSD & Design Thinking methodologies, backed by Grade A SUS scores and 100% Blackbox pass rate.",
                caseStudy: {
                    background: "Central Palantea Hydroponics required comprehensive digital transformation for their agricultural sales and transactional processes, which previously operated manually. They needed an accessible web platform for general customers and administrators featuring secure, streamlined authentication and order fulfillment.",
                    role: "Full-Stack Developer & System Analyst (Engineered MySQL schema, developed React.js frontend and Laravel 11 backend, mapped business workflows, optimized data structures, and conducted Blackbox and SUS usability tests).",
                    technologies: ["Laravel 11", "React.js", "MySQL", "RSSD", "Design Thinking", "System Usability Scale (SUS)", "Blackbox Testing"],
                    featuresAndFlow: [
                        "Interactive hydroponic product catalog with real-time stock status",
                        "Shopping cart, automated transaction checkout, and customer order tracking",
                        "Database schema optimization: consolidated admin and customer records into a single unified table with role attributes to eliminate data redundancy and enhance authentication speed",
                        "Admin dashboard for order lifecycle management and business revenue reporting",
                        "Rapid Solo Software Development (RSSD) integrated with Design Thinking phases (Empathize, Define, Ideate, Prototype, Test)"
                    ],
                    systemArchitecture: {
                        type: "flowchart",
                        title: "System Architecture & Transaction Flow",
                        nodes: [
                            { label: "Clients & Admin", desc: "Responsive React.js App" },
                            { label: "Frontend React.js", desc: "Interactive UI & state management" },
                            { label: "Backend Laravel 11", desc: "REST API, Role Auth, Business Logic" },
                            { label: "MySQL Database", desc: "Optimized Single-Table Auth" }
                        ]
                    },
                    impacts: [
                        "Functional Blackbox Testing across 90 test scenarios achieved a 100% success rate.",
                        "System Usability Scale (SUS) achieved scores of 90 (Admin) and 85.7 (Customers) — rated Acceptable with an Excellent Grade A status.",
                        "Successfully implemented and actively utilized by Central Palantea Hydroponics to run daily digital operations.",
                        "Awarded an official Certificate of Recognition for dedication, competence, and platform delivery (2026)."
                    ],
                    links: {
                        github: null,
                        demo: "https://centralpalantea.my.id/",
                        demoLabel: "Visit Live Website (centralpalantea.my.id)"
                    }
                }
            },
            {
                id: "proxsis-group-performance",
                title: "Proxsis Group Web Performance Analysis Based on Core Web Vitals",
                category: "Data",
                badgeText: "MBKM Internship · Performance Analyst (2026)",
                featured: true,
                image: "/images/projects/proxsis_lighthouse_desktop.jpg",
                auditData: {
                    desktop: {
                        score: 52,
                        accessibility: 86,
                        bestPractices: 54,
                        seo: 92,
                        image: "/images/projects/proxsis_lighthouse_desktop.jpg",
                        label: "Lighthouse Desktop v13.0.2",
                        fcp: "4.8s",
                        lcp: "8.5s",
                        tbt: "150ms",
                        cls: "0",
                        speedIndex: "9.5s"
                    },
                    mobile: {
                        score: 54,
                        accessibility: 86,
                        bestPractices: 54,
                        seo: 92,
                        image: "/images/projects/proxsis_lighthouse_mobile.jpg",
                        label: "Lighthouse Mobile (Slow 4G / CPU 4x)",
                        fcp: "5.5s",
                        lcp: "29.7s",
                        tbt: "130ms",
                        cls: "0",
                        speedIndex: "15.5s"
                    }
                },
                fieldDataSummary: {
                    status: "FAILED",
                    lcpField: "3.1 seconds (Google threshold ≤ 2.5s)",
                    clsField: "0.07 (Good / Passed Google standard)",
                    fcpField: "3.0 seconds",
                    ttfbField: "1.9 seconds (Poor / Server Bottleneck)",
                    source: "Chrome User Experience Report (CrUX) 28-day real-world telemetry"
                },
                shortDescription: "In-depth web performance and Core Web Vitals audit of proxsisgroup.com combining Google Lighthouse v13.0.2 lab simulation and 28-day real-user CrUX telemetry data.",
                caseStudy: {
                    background: "As the corporate digital flagship and business consulting portal, Proxsis Group's web platform (proxsisgroup.com) required an objective compliance evaluation against Google Page Experience and Core Web Vitals standards to prevent elevated user bounce rates and defend organic search visibility.",
                    role: "Performance & Quality Analyst Intern (Designed multi-scenario lab benchmarks with Lighthouse v13.0.2, gathered 28-day real-user field telemetry via PageSpeed Insights CrUX, performed Root Cause Analysis across 9 technical vectors, and authored a prioritized engineering remediation matrix).",
                    technologies: ["Google Lighthouse v13.0.2", "Google PageSpeed Insights (PSI)", "Chrome User Experience Report (CrUX)", "Core Web Vitals (LCP, INP, CLS)", "Root Cause Analysis (RCA)", "Network Dependency Tree", "Web Performance Engineering"],
                    featuresAndFlow: [
                        "Multi-Scenario Benchmarking: Combining controlled lab environments (Standard Desktop vs Mobile Slow 4G on Moto G Power emulation) with 28-day CrUX real-world field telemetry",
                        "LCP Breakdown & Root Cause Isolation: Tracing LCP delay to unoptimized Elementor hero container assets (Resource Load Duration 2,230 ms and Resource Load Delay 1,500 ms)",
                        "3 Critical Bottlenecks Identified: Heavy uncompressed hero imagery (1,771 KiB savings), render-blocking resources (3,550 ms delay), and slow server TTFB (1.9 seconds)",
                        "Consistent Visual Stability (CLS): Validating layout stability with an ideal score of 0 in lab tests and 0.07 in field data, well within Google's Good boundary",
                        "Actionable Remediation Roadmap: Formulating 6 prioritized interventions (WebP/AVIF hero conversion & preload, critical CSS inlining, CDN/caching TTFB reduction, font-display: swap, and 257 KiB code minification)"
                    ],
                    systemArchitecture: {
                        type: "flowchart",
                        title: "Core Web Vitals Audit Methodology",
                        nodes: [
                            { label: "1. Baseline Lab Audit", desc: "Lighthouse Desktop (52) & Mobile (54)" },
                            { label: "2. CrUX Field Data", desc: "28-day real user telemetry (Failed LCP 3.1s)" },
                            { label: "3. Root Cause Analysis", desc: "Isolating 3 critical factors (1,771 KiB & 3,550 ms)" },
                            { label: "4. Actionable Roadmap", desc: "6 prioritized technical interventions" }
                        ]
                    },
                    impacts: [
                        "Pinpointed the single root cause of official Core Web Vitals failure (Mobile field LCP 3.1s) across real user traffic in Google CrUX.",
                        "Identified potential load time reductions exceeding 5,500 ms (render blocking 3,550 ms + TTFB 940 ms + font display 390 ms) alongside 1,771 KiB asset payload reduction.",
                        "Delivered an approved 133-page MBKM Internship Report ratified by PT Malaka Incorpora Teknologi (Member of Proxsis Group) and Politeknik Caltex Riau."
                    ],
                    links: {
                        github: null,
                        demo: "/images/projects/proxsis_lighthouse_desktop.jpg"
                    }
                }
            },
            {
                id: "ems-ai-feature-generation",
                title: "AI-Driven Feature Generation for Enterprise Management System",
                category: "Analysis",
                badgeText: "Internship Project · CRM AI Engineer (2025)",
                featured: true,
                image: "/images/projects/ai_module_generator.png",
                gallery: [
                    {
                        title: "AI Module Generator Interface",
                        src: "/images/projects/ai_module_generator.png",
                        description: "Intelligent AI Module Generator interface: natural language input, Quick Prompts (CRUD, Report, Audit Log, Approval), 4-pillar Context Awareness validation, and terminal output preview powered by Laravel Boost."
                    }
                ],
                shortDescription: "Development of an intelligent automation module utilizing Context-Aware Generative Logic on an EMS platform to translate client consultation requirements into structured software modules (Domain, Model, Controller, Migration, Views, Routes) automatically.",
                caseStudy: {
                    background: "On the Enterprise Management System (EMS) Integration Platform at PT Malaka Incorpora Teknologi (Proxsis Consulting), specifying client system requirements frequently suffered from prolonged turnaround times due to manual requirement interpretation and repetitive manual configurations that risked human error and inconsistent code architecture.",
                    role: "CRM AI Engineer Intern (Engineered the Context-Aware Generative Logic workflow, designed the 3-tier architecture [Input, Processing, Output], formulated the 4-pillar Context Awareness safety validation [Project Structure, DB Schema, Dependencies, Environment], and built the AI Module Generator UI integrated with Laravel automation).",
                    technologies: ["Context-Aware Generative Logic", "Laravel Boost Automation", "Prompt Engineering", "Domain-Driven Design (DDD)", "Context Validation Engine", "Enterprise Management System (EMS)", "Business Process Mapping (BPM)"],
                    featuresAndFlow: [
                        "Flexible Natural Language & Quick Prompts: Users can input plain English descriptions or select instant presets (CRUD Module, Report System, Audit Log, Approval Workflow, Dashboard Widget)",
                        "4-Pillar Context Awareness Validation: Automated pre-flight checks ensuring project directory structure, database schema synchronization, package dependencies, and environment readiness before generation",
                        "Context Injection & Generative Prompting: Fusing existing technical schema context with targeted prompt engineering to instruct the AI engine to generate code-only artifacts rather than conversational text",
                        "Interactive Output & Terminal Preview: Terminal-style monitoring window (module-generator.sh) showing real-time 'php artisan make:module' execution and generated Domain files",
                        "Developer Decision Control: Dedicated 'Apply Changes' and 'Discard' buttons ensuring human engineers retain ultimate authority over code deployment into the main codebase"
                    ],
                    systemArchitecture: {
                        type: "flowchart",
                        title: "3-Tier AI Automation Architecture",
                        nodes: [
                            { label: "1. Input Layer", desc: "Natural Language & Quick Prompts" },
                            { label: "2. Context Validation", desc: "4 Pillars (Structure, DB, Lib, Env)" },
                            { label: "3. Processing Layer", desc: "Context Injection & AI Engine" },
                            { label: "4. Output & Preview", desc: "Terminal Preview & Apply Changes" }
                        ]
                    },
                    impacts: [
                        "Automated end-to-end translation of consulting business requirements into production-ready Domain-Driven Design (DDD) code structures in Laravel.",
                        "Dramatically accelerated initial module scaffolding from several days of manual setup down to minutes.",
                        "Guaranteed architectural consistency and prevented database conflicts through automated Context Awareness validation.",
                        "Officially reviewed, defended, and approved by both industry mentors (PT Malaka Incorpora Teknologi) and academic faculty (Politeknik Caltex Riau)."
                    ],
                    links: {
                        github: null,
                        demo: "/images/projects/ai_module_generator.png"
                    }
                }
            },
            {
                id: "idp-apps-proxsis-academy",
                title: "IDP Web Application System Design & Analysis - HRMS",
                category: "Analysis",
                badgeText: "Internship Project · Business & System Analysis (2025)",
                featured: true,
                image: "/images/projects/idp_mockup_devices.png",
                gallery: [
                    {
                        title: "Responsive Mockup (Laptop & Mobile)",
                        src: "/images/projects/idp_mockup_devices.png",
                        description: "High-fidelity responsive interface mockup of the Implementation Tracker (IDP) designed for optimal user experience on laptop and mobile viewports."
                    },
                    {
                        title: "Dashboard & Program Schedule",
                        src: "/images/projects/idp_web_dashboard.png",
                        description: "Main talent dashboard tracking IDP progress (25% completion), leadership competency milestones, evidence upload verification, and HR revision alerts."
                    },
                    {
                        title: "Self-Reflection Module",
                        src: "/images/projects/idp_web_reflection.png",
                        description: "Standardized 4-quadrant periodic evaluation: What Went Well, What Went Less Well, What Do I Want to Try Next, and What Puzzles Us with 1-10 rating scales."
                    },
                    {
                        title: "Resources & Knowledge Hub",
                        src: "/images/projects/idp_web_resources.png",
                        description: "Self-guided learning library: mentoring guides, feedback technique workshops, session templates, case studies, and mentor community."
                    }
                ],
                shortDescription: "System analysis and web interface design for an Individual Development Plan (IDP) platform on HRMS to digitalize mentoring tracking, evidence logs, and 4-quadrant talent reflection.",
                caseStudy: {
                    background: "The Individual Development Plan (IDP) workflow was previously managed manually via spreadsheets and shared drive folders, causing fragmented milestone tracking, lost evidence files, and lack of real-time monitoring visibility for HR and mentors.",
                    role: "Business & System Analyst Intern (Conducted requirements elicitation & business process analysis, specified functional requirements for the web interface, mapped system flowcharts, and validated the competency dashboard, 4-quadrant reflection module, and mentoring resource library).",
                    technologies: ["Business & System Analysis", "HRMS Web Platform", "Requirements Engineering", "System Flowchart", "UI/UX System Design", "Talent Development Tracking"],
                    featuresAndFlow: [
                        "Personal Analytics Dashboard: Overall progress visualization, leadership competency schedule, and automated admin revision alerts",
                        "Structured 4-Quadrant Reflection: Standardized evaluation form (What Went Well, What Went Less Well, What to Try Next, What Puzzles Us) with 1-10 rating scales",
                        "Competency & Evidence Tracking: Task completion evidence uploads, verification workflows, and structured development milestones",
                        "Learning & Resource Center: Instant access to mentoring guides, video feedback workshops, session templates, and peer community"
                    ],
                    systemArchitecture: {
                        type: "flowchart",
                        title: "IDP Web System Navigation Flow",
                        nodes: [
                            { label: "Login & HRMS Portal", desc: "Talent profile access" },
                            { label: "Main Dashboard", desc: "25% progress & programs" },
                            { label: "Self-Reflection", desc: "4-quadrant evaluation" },
                            { label: "Resources Hub", desc: "Guides & mentoring tools" }
                        ]
                    },
                    impacts: [
                        "Successfully transitioned the talent IDP tracking from manual spreadsheet files to an interactive web-based HRMS application.",
                        "Standardized the 4-quadrant reflection framework and leadership competency evidence upload processes for company-wide talent.",
                        "Enhanced review transparency and real-time feedback loops between mentors, talent, and HR administrators."
                    ],
                    links: {
                        github: null,
                        demo: "/images/projects/idp_web_dashboard.png"
                    }
                }
            }
        ],
        experienceEducation: {
            badge: "Career Track & Credentials",
            title: "Experience, Education & Honors",
            subtitle: "Academic journey in Informatics Engineering, industry internships in business analysis & system coordination, and certified competencies.",
            tabs: {
                experience: "Work Experience",
                education: "Education",
                certifications: "Official Certifications",
                leadership: "Honors & Leadership"
            },
            relevantCourses: "Relevant Coursework",
            vocationalSubjects: "Vocational Curriculum & Subjects",
            industrialInternship: "Industrial Field Practice (PKL)",
            competencyExam: "Vocational Competency Exam (UKK)",
            evaluationSupervisor: "Industrial Supervisor Evaluation",
            outputsLabel: "Outputs & Contribution:",
            certificateModal: {
                viewBtn: "View Certificate",
                verifyBtn: "Verify Official Credential",
                openFull: "Open Full Image",
                credentialId: "Credential ID / License",
                issueDate: "Issue Date",
                type: "Domain",
                issuedBy: "Issuing Organization",
                officialPartner: "Official Partner & Program",
                duration: "Study Load / Duration",
                speaker: "Speaker / Instructor",
                scoreLabel: "Score / Achievement",
                syllabusTitle: "Verified Syllabus & Core Competencies",
                close: "Close",
                officialBadge: "Verified Credential",
                noImageNotice: "Official certification registered and verified in the issuing authority's database."
            }
        },
        experiences: [
            {
                period: "Feb 2026 – Jun 2026",
                role: "Business Analyst & Project Coordinator Intern",
                company: "PT. Malaka Incorpora Teknologi (Malaka Group)",
                location: "Indonesia",
                highlights: [
                    "Translated business and operational requirements into technical specifications through close coordination with stakeholders and engineering teams.",
                    "Analyzed system needs and mapped business processes (BPM) as the architectural baseline for user-centric digital solutions.",
                    "Coordinated cross-functional teams and tracked milestones to ensure on-time delivery across target sprint dates.",
                    "Led User Acceptance Testing (UAT), documented findings, and synthesized stakeholder feedback for solution validation.",
                    "Supported the digital transformation of manual operational processes into web-based digital workflows."
                ]
            },
            {
                period: "Jul 2025 – Nov 2025",
                role: "CRM & AI Business Analyst Intern",
                company: "PT. Malaka Incorpora Teknologi",
                location: "Indonesia",
                highlights: [
                    "Analyzed business requirements and customer data structures to drive CRM digital solutions.",
                    "Bridged business stakeholders and technical developers to translate organizational goals into technology architectures.",
                    "Designed CRM data processing workflows for customer segmentation and data-driven decision making.",
                    "Analyzed data using Python and MySQL to identify behavioral patterns and actionable feature insights.",
                    "Formulated comprehensive technical documentation and process maps for cross-team collaboration."
                ]
            },
            {
                period: "Jul 2021 – Sep 2021",
                role: "IT Engineering Specialist Intern",
                company: "RS Mata SMEC Pekanbaru",
                location: "Pekanbaru, Riau",
                highlights: [
                    "Maintained medical workstation hardware, clinical computer peripherals, and hospital local area network (LAN) stability.",
                    "Monitored and maintained daily operations of the Hospital Management Information System (SIMRS) to support clinical services.",
                    "Digitized, entered, and validated the integrity of electronic medical records and patient administration datasets.",
                    "Delivered rapid hardware and software troubleshooting to ensure zero disruption to healthcare staff operations.",
                    "Achieved an outstanding 94/100 industry supervisor evaluation score (Grade A: Attendance: 95, Integrity: 95, Responsibility: 95, Initiative: 95, Work Competence: 90)."
                ],
                evaluation: {
                    averageScore: "94 / 100",
                    predicate: "Grade A (Excellent)",
                    criteria: [
                        { name: "Attendance", score: 95 },
                        { name: "Integrity", score: 95 },
                        { name: "Responsibility", score: 95 },
                        { name: "Initiative", score: 95 },
                        { name: "Work Competence", score: 90 }
                    ]
                }
            }
        ],
        education: [
            {
                period: "Sep 2022 – Aug 2026",
                degree: "Bachelor of Applied Science (D4) in Informatics Engineering",
                institution: "Politeknik Caltex Riau",
                subDegree: "Applied Bachelor · 145 Credits",
                gpa: "GPA: 3.61 / 4.00 (Cum Laude)",
                predicate: "Cum Laude",
                notes: "Applied Bachelor curriculum focused on enterprise software engineering, modern database architecture, applied artificial intelligence (Machine Learning, Deep Learning & NLP), and system analysis.",
                capstone: {
                    title: "Capstone Thesis (Skripsi Terapan)",
                    name: "Application of RSSD with Design Thinking in Developing an Online Sales Website for Central Palantea Hydroponics",
                    metrics: "SUS Score 90 & 85.7 (Grade A / Best Usability) · 90 Blackbox Test Scenarios 100% Valid"
                },
                courses: [
                    "Software Engineering Workshop",
                    "Web Programming Workshop",
                    "Framework Programming Workshop",
                    "Object-Oriented Programming (OOP)",
                    "Software Quality & Testing",
                    "Project Management",
                    "Human-Computer Interaction (HCI / UI/UX)",
                    "Machine Learning",
                    "Deep Learning Practicum",
                    "Natural Language Processing (NLP) Practicum",
                    "Big Data",
                    "Data Warehouse Workshop",
                    "Advanced Database Workshop",
                    "Network Administration & Security"
                ],
                courseGroups: [
                    {
                        title: "Software Engineering & Web Development",
                        courses: [
                            "Software Engineering Workshop",
                            "Web Programming Workshop",
                            "Framework Programming Workshop",
                            "Object-Oriented Programming (OOP)",
                            "Software Quality & Testing",
                            "Project Management",
                            "Human-Computer Interaction (HCI / UI/UX)"
                        ]
                    },
                    {
                        title: "Artificial Intelligence (AI) & Data Engineering",
                        courses: [
                            "Machine Learning",
                            "Deep Learning Practicum",
                            "Natural Language Processing (NLP) Practicum",
                            "Big Data",
                            "Data Warehouse Workshop",
                            "Advanced Database Workshop",
                            "Digital Image Processing"
                        ]
                    },
                    {
                        title: "Infrastructure, Systems & Network Security",
                        courses: [
                            "Network Administration & Security",
                            "Computer Networks",
                            "Operating Systems",
                            "Multimedia Networks"
                        ]
                    }
                ]
            },
            {
                period: "2019 – 2022",
                degree: "Software Engineering (RPL)",
                institution: "SMK Negeri 2 Guguak",
                subDegree: "Vocational High School",
                gpa: "Internship Score: 94 / 100",
                predicate: "Grade: Excellent",
                notes: "Information technology vocational curriculum emphasizing algorithmic logic, relational database systems, software modeling, and real-world industrial practice in a healthcare environment.",
                courses: [
                    "Fundamental Programming & Logic",
                    "Relational Database Systems",
                    "Software Modeling (UML & ERD)",
                    "Web & Mobile Application Development",
                    "Object-Oriented Programming (OOP)",
                    "Computer Systems & Networking Fundamentals"
                ],
                ukk: {
                    title: "Vocational Competency Examination (UKK)",
                    badge: "Competent · Grade A",
                    projectName: "Development of Web-Based Management Information System & Relational Database",
                    technologies: ["PHP", "MySQL", "Bootstrap", "Apache", "HTML5/CSS3"],
                    role: "Full-Stack Developer / System Programmer",
                    result: "Certified as COMPETENT with Grade A (Excellent) by internal school evaluators and external industry assessors.",
                    description: "Designed relational database schema, engineered responsive user interfaces, implemented full CRUD operations, and conducted end-to-end system business validation."
                },
                pkl: {
                    title: "Industrial Field Practice (PKL)",
                    company: "RS Mata SMEC Pekanbaru",
                    period: "July 3 – September 30, 2021 (±3 Months)",
                    role: "IT Support & SIMRS Assistant",
                    duties: [
                        "Maintained medical workstations, clinical computer peripherals, and hospital local area network (LAN) stability.",
                        "Monitored and maintained the Hospital Management Information System (SIMRS) operational workflows.",
                        "Digitized, input, and verified the data integrity of patient electronic medical records.",
                        "Provided rapid hardware and software troubleshooting to ensure continuous healthcare service delivery."
                    ],
                    outputs: "Seamless daily IT clinic operations and dependable digitization of SIMRS service workflows.",
                    evaluation: {
                        title: "Industrial Supervisor Assessment",
                        averageScore: "94 / 100",
                        predicate: "Grade A (Excellent)",
                        criteria: [
                            { name: "Attendance", score: 95 },
                            { name: "Integrity", score: 95 },
                            { name: "Responsibility", score: 95 },
                            { name: "Initiative", score: 95 },
                            { name: "Work Competence", score: 90 }
                        ]
                    },
                    certification: "Industrial Field Practice (PKL) Certificate, SMK Negeri 2 Guguak & RS Mata SMEC Pekanbaru (2021)"
                }
            }
        ],
        certifications: [
            {
                id: "bnsp-programmer",
                title: "Certified Programmer (KOMPETEN)",
                issuer: "LSP Politeknik Caltex Riau (BNSP-LSP-564-ID)",
                year: "2026",
                issueDate: "2026",
                type: "National Competency",
                credentialId: "BNSP-LSP-564-ID",
                desc: "National competency certification issued by the National Professional Certification Board (BNSP) covering software engineering, algorithms, structured programming, and database systems.",
                modules: [
                    "System Requirements Analysis & Algorithmic Problem Solving",
                    "Software Engineering Architecture & Clean Code",
                    "Relational Database Design & Implementation",
                    "Software Quality Assurance & Code Validation"
                ]
            },
            {
                id: "hackerrank-software-engineer",
                title: "Software Engineer Role Certification",
                issuer: "HackerRank",
                speaker: "Harishankaran K (CTO, HackerRank)",
                year: "2026",
                issueDate: "September 23, 2026",
                type: "Software Engineering",
                credentialId: "D51DE7B5FE49",
                verifyUrl: "https://www.hackerrank.com/certificates/D51DE7B5FE49",
                image: "/images/certificates/cert_hackerrank_software_engineer.png",
                partner: "HackerRank Standardized Assessment",
                desc: "Global industry-standard Software Engineer role certification from HackerRank, validating proficiency in algorithmic problem solving, data structure optimization, systems logic, and clean code principles.",
                modules: [
                    "Problem Solving & Advanced Algorithmic Patterns",
                    "Data Structure Optimization & Time-Space Complexity",
                    "Production-Ready Software Engineering Logic",
                    "Clean Code Practices & Robust Exception Handling"
                ]
            },
            {
                id: "hackerrank-sql-advanced",
                title: "SQL (Advanced) Skill Certification",
                issuer: "HackerRank",
                speaker: "Harishankaran K (CTO, HackerRank)",
                year: "2026",
                issueDate: "September 23, 2026",
                type: "Database & SQL",
                credentialId: "9BA3F212D6C8",
                verifyUrl: "https://www.hackerrank.com/certificates/9BA3F212D6C8",
                image: "/images/certificates/cert_hackerrank_sql_advanced.png",
                partner: "HackerRank Skill Assessment",
                desc: "Advanced SQL skill certification from HackerRank covering complex relational query structuring, recursive CTEs, analytic window functions, pivot data transformations, and relational database optimization.",
                modules: [
                    "Complex Relational Queries & Multi-Table Relational Joins",
                    "Recursive CTEs & Hierarchical Graph Traversal",
                    "Analytic Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD)",
                    "Data Aggregation, Pivot Matrices & Performance Query Tuning"
                ]
            },
            {
                id: "cisco-python-essentials-2",
                title: "Python Essentials 2 (PCAP Aligned)",
                issuer: "Cisco Networking Academy",
                partner: "OpenEDG Python Institute",
                speaker: "Lynn Bloomer (Director, Cisco Networking Academy)",
                year: "2026",
                issueDate: "October 01, 2026",
                type: "Programming & OOP",
                credentialId: "Cisco / OpenEDG Verified",
                verifyUrl: "https://www.netacad.com",
                image: "/images/certificates/cert_cisco_python_essentials_2.png",
                desc: "Advanced Python 3 credential covering Object-Oriented Programming (OOP), multi-module application packages, custom exception hierarchies, generators, closures, and file operations aligned with the industry PCAP standard.",
                modules: [
                    "Design, Debug & Refactor Multi-Module Python 3 Packages",
                    "Real-World OOP Modeling (Classes, Inheritance, Polymorphism)",
                    "Advanced Exception Hierarchy Engineering",
                    "Generators, Closures, Advanced Strings & Stream File I/O"
                ]
            },
            {
                id: "dicoding-prompt-engineering",
                title: "Prompt Engineering for Software Developers",
                issuer: "Dicoding Indonesia",
                partner: "Google Developers (Authorized Training Partner)",
                hours: "16 Hours of Study",
                year: "2026",
                issueDate: "September 15, 2026",
                type: "AI & Engineering",
                credentialId: "98XW8G1O0PM3",
                verifyUrl: "https://dicoding.com/certificates/98XW8G1O0PM3",
                image: "/images/certificates/cert_dicoding_prompt_engineering.png",
                desc: "Certified in partnership with Google Developers Authorized Training Partner, covering advanced prompt engineering frameworks, Chain-of-Thought, Few-Shot prompting, and integrating LLMs into software engineering workflows.",
                modules: [
                    "Prompt Engineering Fundamentals & GenAI Linguistic Mechanics (2.5 hrs)",
                    "Adaptive, Consistent & Precise Prompting Patterns (4.3 hrs)",
                    "Applying Prompt Engineering across Software Development Workflows (5.5 hrs)",
                    "AI Guardrails, Ethical Considerations & Model Limitations (1.5 hrs)"
                ]
            },
            {
                id: "dicoding-azure-genai",
                title: "Building Generative AI Apps with Microsoft Azure",
                issuer: "Dicoding Indonesia",
                partner: "Microsoft",
                hours: "8 Hours of Study",
                year: "2026",
                issueDate: "September 21, 2026",
                type: "AI & Cloud",
                credentialId: "N9ZO050K8XG5",
                verifyUrl: "https://dicoding.com/certificates/N9ZO050K8XG5",
                image: "/images/certificates/cert_dicoding_azure_genai.png",
                desc: "Development of enterprise Generative AI solutions leveraging Azure OpenAI Service, prompt orchestration, Retrieval-Augmented Generation (RAG) with Azure AI Search, and model safety guardrails.",
                modules: [
                    "Azure AI Foundry Solution Planning & Responsible AI Standards",
                    "Selecting & Deploying Language Models (LLMs) to Endpoints",
                    "Azure AI Foundry SDK Scripting & Interactive Chatbot Logic",
                    "Prompt Flow Orchestration & Grounded RAG with Azure AI Search",
                    "Open-Source Model Fine-Tuning & Quantitative AI Metric Evaluation"
                ]
            },
            {
                id: "dicoding-fabric-datascience",
                title: "Data Science Applications with Microsoft Fabric",
                issuer: "Dicoding Indonesia",
                partner: "Microsoft",
                year: "2026",
                issueDate: "September 21, 2026",
                type: "Data Science & Cloud",
                credentialId: "53XEM4M79PRN",
                verifyUrl: "https://dicoding.com/certificates/53XEM4M79PRN",
                image: "/images/certificates/cert_dicoding_data_science_fabric.png",
                desc: "End-to-end data science pipelines on Microsoft Fabric, data lakehouse architectures, machine learning experiment tracking with MLflow, and scalable analytics.",
                modules: [
                    "Data Lakehouse Architecture & Ingestion in Microsoft Fabric",
                    "Data Exploration, Cleaning & Feature Transformation",
                    "Machine Learning Model Training & Tracking with MLflow",
                    "Model Deployment, Batch Inference & Power BI Reporting"
                ]
            },
            {
                id: "coursera-python-ust",
                title: "Create Your First Python Program",
                issuer: "UST (Coursera)",
                year: "2026",
                issueDate: "September 20, 2026",
                type: "Programming",
                credentialId: "NA293WBSX22D",
                verifyUrl: "https://coursera.org/verify/NA293WBSX22D",
                image: "/images/certificates/cert_coursera_python_ust.png",
                desc: "Hands-on guided project mastering Python algorithmic syntax, control flow logic, functional modularity, and structured execution.",
                modules: [
                    "Python Syntax Fundamentals & Environment Setup",
                    "Control Flow (Branching & Loop Constructs)",
                    "Modular Function Design & Parameter Passing",
                    "Structured Code Execution & Interactive Debugging"
                ]
            },
            {
                id: "dicoding-java",
                title: "Getting Started with Java Programming",
                issuer: "Dicoding Indonesia",
                hours: "15 Hours of Study",
                year: "2026",
                issueDate: "September 15, 2026",
                type: "Programming",
                credentialId: "0LZ0J9EGQX65",
                verifyUrl: "https://dicoding.com/certificates/0LZ0J9EGQX65",
                image: "/images/certificates/cert_dicoding_java_programming.png",
                desc: "Certified proficiency in Java Object-Oriented Programming (OOP) paradigms (15 hours course), encapsulation, inheritance, polymorphism, and collections data structures.",
                modules: [
                    "Java Multiplatform Architecture & IDE Setup (IntelliJ / Replit)",
                    "Core Java (Structure, Primitive Data Types, String, Operators, Arrays)",
                    "Control Flow Mechanics (Conditionals & Loops)",
                    "Collection Types (List, Set, Map) & Data Manipulation Algorithms",
                    "OOP Paradigms (Class, Object, Encapsulation, Inheritance, Interface)",
                    "Common Classes, Exception Handling & Algorithmic Problem Solving"
                ]
            },
            {
                id: "dicoding-c",
                title: "Getting Started with C Programming",
                issuer: "Dicoding Indonesia",
                hours: "15 Hours of Study",
                year: "2026",
                issueDate: "September 15, 2026",
                type: "Programming",
                credentialId: "72ZDM862JZYW",
                verifyUrl: "https://dicoding.com/certificates/72ZDM862JZYW",
                image: "/images/certificates/cert_dicoding_c_programming.png",
                desc: "Comprehensive certification covering C programming fundamentals (15 hours course), memory allocation, pointers, arrays, structs, and compute efficiency.",
                modules: [
                    "C Evolution, Compilation Environments & System Concepts",
                    "Variables, Primitive Data Types, Initialization & Memory Assignment",
                    "Arithmetic, Boolean & Relational Logic Operators",
                    "Conditional Statements & Looping Control (For, While, Do-While)",
                    "Arrays & Multidimensional Matrices",
                    "Subprograms (Functions, Procedures) & Algorithmic Problem Solving"
                ]
            },
            {
                id: "dicoding-ai-basics",
                title: "Basics of Artificial Intelligence",
                issuer: "Dicoding Indonesia",
                partner: "DBS Foundation",
                year: "2026",
                issueDate: "August 6, 2026",
                type: "Artificial Intelligence",
                credentialId: "EYX4QDWDJPDL",
                verifyUrl: "https://dicoding.com/certificates/EYX4QDWDJPDL",
                image: "/images/certificates/cert_dicoding_ai_basics.png",
                desc: "Comprehensive foundation in Artificial Intelligence, machine learning concepts, computer vision, natural language processing, and ethical AI implementation.",
                modules: [
                    "Core AI Concepts & Historical Evolution",
                    "Machine Learning Paradigms: Supervised, Unsupervised & Reinforcement",
                    "Deep Learning & Artificial Neural Networks",
                    "Applied AI: Computer Vision & Natural Language Processing",
                    "Ethical AI Governance & Responsible Deployment"
                ]
            },
            {
                id: "dicoding-financial-lit",
                title: "Introduction to Financial Literacy",
                issuer: "Dicoding Indonesia",
                partner: "DBS Foundation Coding Camp",
                hours: "6 Hours of Study",
                year: "2026",
                issueDate: "August 6, 2026",
                type: "Finance & Business",
                credentialId: "ERZRLQR1MZYV",
                verifyUrl: "https://dicoding.com/certificates/ERZRLQR1MZYV",
                image: "/images/certificates/cert_dicoding_financial_literacy.png",
                desc: "Financial literacy foundation (6 hours course) covering budgeting, digital cash flow analysis, financial planning, and investment fundamentals for tech professionals.",
                modules: [
                    "Decoding Your Financial Future - Financial Planning & Cash Flow Control",
                    "Investing for Your Future - Investment Vehicles & Financial Independence",
                    "Loan Management 101 - Smart Borrowing & Strategic Debt Optimization"
                ]
            },
            {
                id: "toeic-lti-pcr",
                title: "TOEIC Prediction Test (Score: 485)",
                issuer: "Language Training Institution (LTI Group)",
                partner: "LTI Group & Politeknik Caltex Riau",
                speaker: "Form: TNF-02A (Verified by LTI Group)",
                year: "2026",
                issueDate: "February 9, 2026",
                type: "Language Proficiency",
                credentialId: "202600662/LTI/X/2026",
                verifyUrl: "https://onlinetest.ltigroup.id/Certified?id_ujian=202600662&id_peserta=1008",
                score: "485 / 990",
                hours: "Total Score: 485 (L: 235, R: 250)",
                image: "/images/certificates/cert_toeic_lti_pcr.png",
                desc: "Official TOEIC® Prediction Test credential issued by Language Training Institution (LTI Group) with Certificate Number 202600662/LTI/X/2026 and Test Form TNF-02A. Verified by LTI Group online validation system with a Total Scaled Score of 485 (Listening: 235, Reading: 250).",
                scoreBreakdown: {
                    title: "TOEIC® Prediction Score Breakdown",
                    total: "485 / 990",
                    items: [
                        { label: "Listening Section", value: "235" },
                        { label: "Reading Section", value: "250" }
                    ]
                },
                modules: [
                    "Listening Comprehension: Workplace Discussions, Instructions & Tech Dialogues (Score: 235)",
                    "Reading Comprehension: Technical Documentation, Business Reports & Email Analysis (Score: 250)",
                    "Official Digital Certificate Validation via LTI Group System (202600662/LTI/X/2026)",
                    "Standardized TOEIC® Prediction Evaluation by Language Training Institution (LTI PCR)"
                ]
            },
            {
                id: "cisco-english-it",
                title: "English for IT 2 (CEFR B2)",
                issuer: "Cisco Networking Academy & OpenEDG",
                partner: "Cisco & OpenEDG",
                speaker: "Lynn Bloomer (Director, Cisco Networking Academy)",
                year: "2026",
                issueDate: "September 25, 2026",
                type: "Professional Communication",
                credentialId: "Student Level Credential (CEFR B2)",
                hours: "CEFR Level B2 Certified",
                verifyUrl: "https://www.netacad.com",
                image: "/images/certificates/cert_cisco_english_for_it_2.png",
                desc: "International credential from Cisco Networking Academy & OpenEDG demonstrating CEFR B2 professional English communication skills for tech and software engineering environments, cloud computing terminology, and cross-border team collaboration.",
                modules: [
                    "Subjunctive mood, modal verbs, cleft sentences & conjunctions usage",
                    "Logical deductions & formal technical email communications",
                    "Recognition of CamelCase, snake_case & software debugging terminology",
                    "CEFR B2-level English proficiency standard for IT professionals",
                    "Networking, customer support, operating systems & product management terminology",
                    "Cloud computing vocabulary & peer feedback exchange in tech teams"
                ]
            },
            {
                id: "mikrotik-mtcna",
                title: "MikroTik Certified Network Associate (MTCNA)",
                issuer: "MikroTik (Riga, Latvia)",
                year: "2024",
                issueDate: "July 10, 2024",
                type: "Networking",
                credentialId: "2407NA8555",
                verifyUrl: "https://mikrotik.com/certificates",
                image: "/images/certificates/cert_mikrotik_mtcna.png",
                desc: "Official international credential on RouterOS configuration, IP routing, subnetting, DHCP, firewall policies, NAT, bandwidth queues, and VPN tunnels.",
                modules: [
                    "RouterOS Installation & Configuration Baseline",
                    "IP Routing & Subnetting Architecture",
                    "DHCP Server & Client Configuration",
                    "Firewall Filter Rules & Network Address Translation (NAT)",
                    "Quality of Service (QoS) & Queue Bandwidth Shaping",
                    "VPN Tunnels (PPTP, L2TP, SSTP) & Wireless Basics"
                ]
            },
            {
                id: "cisco-ccna-srwe",
                title: "CCNA: Switching, Routing, and Wireless Essentials (SRWE)",
                issuer: "Cisco Networking Academy",
                year: "2024",
                issueDate: "February 28, 2024",
                type: "Networking",
                credentialId: "Cisco Academy Aligned",
                verifyUrl: "https://www.netacad.com",
                image: "/images/certificates/cert_cisco_ccna_switching.png",
                desc: "Configuration of VLANs, 802.1Q Trunking, Inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, SLAAC, first-hop redundancy protocols (HSRP), and wireless LAN controllers.",
                modules: [
                    "VLAN Segmentation & 802.1Q Trunking Protocol",
                    "Spanning Tree Protocol (STP) & EtherChannel Link Aggregation",
                    "Inter-VLAN Routing & Dynamic Host Configuration (DHCPv4/v6)",
                    "SLAAC Addressing & First-Hop Redundancy Protocols (HSRP)",
                    "WLAN Controller Architecture & Wireless Security"
                ]
            },
            {
                id: "cisco-ccna-itn",
                title: "CCNA: Introduction to Networks (ITN)",
                issuer: "Cisco Networking Academy",
                year: "2024",
                issueDate: "February 28, 2024",
                type: "Networking",
                credentialId: "Cisco Academy Aligned",
                verifyUrl: "https://www.netacad.com",
                image: "/images/certificates/cert_cisco_ccna_intro.png",
                desc: "Foundational networking principles across OSI and TCP/IP models, IPv4/IPv6 addressing schemes, Cisco switch & router configuration, and network security baselines.",
                modules: [
                    "Network Architecture across OSI & TCP/IP Reference Models",
                    "IPv4 & IPv6 Subnetting & Addressing Schemes",
                    "Cisco IOS Switch & Router Initial Configuration",
                    "Ethernet Protocol & Layer 2 Switching Operation",
                    "Transport Layer (TCP/UDP) & Application Services"
                ]
            },
            {
                id: "gamatechno-system-analyst",
                title: "Understanding the Role of System Analyst in App Development",
                issuer: "PT Gamatechno Indonesia",
                partner: "TechnoClass by Gamatechno",
                speaker: "Alivia Saskia P (System Analyst at PT Gamatechno Indonesia)",
                year: "2022",
                issueDate: "October 28, 2022",
                type: "System Analysis",
                credentialId: "40251/SNM/STF/XI/2022",
                verifyUrl: "https://sertiva.id",
                image: "/images/certificates/cert_gamatechno_system_analyst.jpg",
                desc: "Official masterclass & analytical workshop certification by PT Gamatechno Indonesia exploring the System Analyst role as a bridge between enterprise business requirements and software engineering.",
                modules: [
                    "Business Needs Analysis & Translation to Functional Specs (FR/NFR)",
                    "Business Process Modeling (BPMN) & Use Case Architectures",
                    "Cross-Functional Alignment: Stakeholders, UI/UX, and Engineers",
                    "Industry Standard Software Requirements Specification (SRS) Drafting"
                ]
            },
            {
                id: "ehe-eccouncil",
                title: "Ethical Hacking Essentials (EHE)",
                issuer: "EC-Council",
                partner: "EC-Council Global (President: Jay Bavisi)",
                speaker: "Jay Bavisi (President, EC-Council)",
                year: "2026",
                issueDate: "May 13, 2026",
                expiryDate: "May 12, 2029",
                type: "Cyber Security",
                credentialId: "ECC4529670318",
                hours: "Validity: May 13, 2026 – May 12, 2029",
                verifyUrl: "https://aspen.eccouncil.org",
                image: "/images/certificates/cert_eccouncil_ethical_hacking_essentials.jpg",
                desc: "Official international cybersecurity certification issued by EC-Council, verifying proficiency in ethical hacking fundamentals, web & network vulnerability assessment, threat intelligence, and information security countermeasure strategies.",
                modules: [
                    "Cyber Security Fundamentals & Threat Landscape",
                    "Web Application Security & Vulnerability Scanning",
                    "Network Attacks, Penetration Testing & Defensive Countermeasures",
                    "Information Security Policy & Risk Mitigation"
                ]
            },
            {
                id: "kominfo-vsga",
                title: "VSGA - Junior Web Developer",
                issuer: "Ministry of Communication and Information Technology RI (Balitbang SDM)",
                partner: "Digital Talent Scholarship 2022 & Politeknik Caltex Riau",
                speaker: "Hary Budiarto (Head of SDM R&D Kominfo)",
                year: "2022",
                issueDate: "September 16, 2022",
                type: "Web Development",
                credentialId: "VSGA/2022/3858/150305899100-2718",
                hours: "90 Training Hours (Jul 18 – Aug 29, 2022)",
                verifyUrl: "https://digitalent.kominfo.go.id",
                image: "/images/certificates/cert_kominfo_vsga_jwd.png",
                pages: [
                    { label: "Official Training Certificate", image: "/images/certificates/cert_kominfo_vsga_jwd.png" },
                    { label: "SKKNI Competency Units", image: "/images/certificates/cert_kominfo_vsga_jwd_syllabus.png" }
                ],
                desc: "National competency-based vocational certification under the Indonesian National Work Competency Standards (SKKNI), organized by Balitbang SDM Kominfo RI in collaboration with Politeknik Caltex Riau (90 training hours).",
                modules: [
                    "Implementing User Interfaces (UI)",
                    "Executing text, graphical, and multimedia programming language commands",
                    "Organizing functions, files, and programming resources into neat structures",
                    "Writing code adhering to guidelines and software engineering best practices",
                    "Implementing structured programming logic",
                    "Utilizing pre-existing software libraries and components"
                ]
            }
        ],
        achievementsAndLeadership: [
            {
                title: "Certificate of Appreciation for System Development & Delivery",
                org: "Central Palantea Hydroponics",
                year: "2026",
                issueDate: "August 18, 2026",
                category: "Award",
                credentialId: "0012/CP.08/2026",
                speaker: "Ismail (Owner / Head of Central Palantea)",
                signerLabel: "Head of Central Palantea",
                image: "/images/certificates/cert_penghargaan_central_palantea.jpg",
                desc: "Awarded official recognition for outstanding dedication, technical competence, and impactful contributions in designing, developing, and deploying their online sales platform, driving business process efficiency.",
                awardDetails: {
                    title: "Business Partner Award Legal Credentials",
                    badge: "No. 0012/CP.08/2026",
                    items: [
                        { label: "Certificate Number", value: "0012/CP.08/2026" },
                        { label: "Recognition Scope", value: "Online Sales Platform Development & Deployment" },
                        { label: "Issuing Partner", value: "Central Palantea Hydroponics" },
                        { label: "Executive Signer", value: "Ismail (Owner / Head of Central Palantea)" },
                        { label: "Place & Date of Conferment", value: "Duri, August 18, 2026" },
                        { label: "Operational Impact", value: "Order Automation, Real-Time Tracking & Process Optimization" }
                    ]
                }
            },
            {
                title: "Outstanding Student Award (Non-Academic) – 2nd Place, National Pencak Silat Championship",
                org: "Politeknik Caltex Riau",
                year: "2025",
                partner: "A.Y. 2024/2025 • Non-Academic",
                category: "Honor",
                credentialId: "0231.42/STF/PCR/2025",
                issueDate: "August 31, 2025",
                speaker: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Director of PCR)",
                signerLabel: "Endorser / Director of PCR",
                desc: "Conferred the Outstanding Student Certificate for Academic Year 2024/2025 (Non-Academic Category) by the Director of Politeknik Caltex Riau for winning 2nd Place (Silver Medal) in the National Pencak Silat Championship representing the university athlete contingent.",
                awardDetails: {
                    title: "Official PCR Director Award Legal Credentials",
                    badge: "No. 0231.42/STF/PCR/2025",
                    items: [
                        { label: "Certificate Number", value: "0231.42/STF/PCR/2025" },
                        { label: "Award Predicate", value: "Outstanding Student of Academic Year 2024/2025" },
                        { label: "Category", value: "Non-Academic (Martial Arts)" },
                        { label: "Championship Achievement", value: "2nd Place, National Pencak Silat Championship 2025" },
                        { label: "Place & Date of Conferment", value: "Pekanbaru, August 31, 2025" },
                        { label: "Authorized Signer", value: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Director of Politeknik Caltex Riau)" }
                    ]
                }
            },
            {
                title: "Outstanding Student Award (Non-Academic) – 1st Place, National Pencak Silat Championship",
                org: "Politeknik Caltex Riau",
                year: "2024",
                partner: "A.Y. 2023/2024 • Non-Academic",
                category: "Honor",
                credentialId: "0231.42/STF/PCR/2024",
                issueDate: "August 31, 2024",
                speaker: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Director of PCR)",
                signerLabel: "Endorser / Director of PCR",
                desc: "Conferred the Outstanding Student Certificate for Academic Year 2023/2024 (Non-Academic Category) by the Director of Politeknik Caltex Riau for winning 1st Place (Gold Medal) in the National Pencak Silat Championship representing the university athlete contingent.",
                awardDetails: {
                    title: "Official PCR Director Award Legal Credentials",
                    badge: "No. 0231.42/STF/PCR/2024",
                    items: [
                        { label: "Certificate Number", value: "0231.42/STF/PCR/2024" },
                        { label: "Award Predicate", value: "Outstanding Student of Academic Year 2023/2024" },
                        { label: "Category", value: "Non-Academic (Martial Arts)" },
                        { label: "Championship Achievement", value: "1st Place, National Pencak Silat Championship 2024" },
                        { label: "Place & Date of Conferment", value: "Pekanbaru, August 31, 2024" },
                        { label: "Authorized Signer", value: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Director of Politeknik Caltex Riau)" }
                    ]
                }
            },
            {
                title: "Outstanding Student Award (Non-Academic) – 3rd Place, National Pencak Silat Championship",
                org: "Politeknik Caltex Riau",
                year: "2023",
                partner: "A.Y. 2022/2023 • Non-Academic",
                category: "Honor",
                credentialId: "0231.42/STF/PCR/2023",
                issueDate: "August 31, 2023",
                speaker: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Director of PCR)",
                signerLabel: "Endorser / Director of PCR",
                desc: "Conferred the Outstanding Student Certificate for Academic Year 2022/2023 (Non-Academic Category) by the Director of Politeknik Caltex Riau for winning 3rd Place (Bronze Medal) in the National Pencak Silat Championship representing the university athlete contingent.",
                awardDetails: {
                    title: "Official PCR Director Award Legal Credentials",
                    badge: "No. 0231.42/STF/PCR/2023",
                    items: [
                        { label: "Certificate Number", value: "0231.42/STF/PCR/2023" },
                        { label: "Award Predicate", value: "Outstanding Student of Academic Year 2022/2023" },
                        { label: "Championship Medal", value: "Bronze Medal (3rd Place)" },
                        { label: "Competition Class", value: "3rd Place Class E Female (Teen) – Regional Championship V West Sumatra" },
                        { label: "Organizer & Venue", value: "PPS Betako Merpati Putih Komda Sumbar · GOR Sago Gafur (March 17–19, 2023)" },
                        { label: "Authorized Signer", value: "Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Director of Politeknik Caltex Riau)" }
                    ]
                }
            },
            {
                title: "Regional Leader – PCR Goes to School",
                org: "Politeknik Caltex Riau",
                year: "2023 & 2024",
                category: "Leadership",
                desc: "Led the regional team for university promotion activities, managing logistics, presentation delivery, and school coordination."
            },
            {
                title: "Event Committee – Sumatra Networking Competition (SNC)",
                org: "Sumatra Networking Competition",
                year: "2023",
                category: "Committee",
                desc: "Led the planning and execution of the event rundown. Delegated responsibilities within the event division and ensured smooth flow of activities."
            },
            {
                title: "Event Committee (Program Coordinator) – Intensive Islamic Studies (SII)",
                org: "Intensive Islamic Studies (SII)",
                year: "2023",
                category: "Committee",
                desc: "Designed the full rundown and managed task distribution within the event team. Ensured schedule accuracy and event timing."
            },
            {
                title: "Event Committee (Program Coordinator) – PCR Cup Volleyball Tournament",
                org: "PCR Cup Volleyball Tournament",
                year: "2024",
                category: "Committee",
                desc: "Created the match schedule and led coordination between event staff and competition rules team."
            },
            {
                title: "Event Committee (Program Coordinator) – General Assembly of Volleyball UKM",
                org: "Volleyball Student Activity Unit (UKM)",
                year: "2024",
                category: "Committee",
                desc: "Managed event flow and coordinated responsibilities for documentation, stage flow, and internal session management."
            },
            {
                title: "Event Committee (Program Coordinator) – Mentor Preparation by UKMI",
                org: "UKMI Politeknik Caltex Riau",
                year: "2023",
                category: "Committee",
                desc: "Planned and supervised the event schedule, and assigned duties to committee members in the program division."
            },
            {
                title: "Member & Martial Arts Athlete – Politeknik Caltex Riau Martial Arts Community (Beladiri PCR)",
                org: "Politeknik Caltex Riau",
                year: "2022 – 2026",
                category: "Organization",
                credentialId: "PCR Martial Arts Athlete Contingent",
                desc: "Actively trained and represented Politeknik Caltex Riau across multiple national pencak silat martial arts championships, while contributing to student athletic mentorship, physical discipline, and campus sports community development."
            },
            {
                title: "Active Member – Caltex Techno Science Club",
                org: "Politeknik Caltex Riau",
                year: "2022 – 2026",
                category: "Organization",
                desc: "Participated in various science and innovation discussions, research forums, and technology development events."
            },
            {
                title: "Active Member – UKMI Ar-Ruhul Jadid",
                org: "UKMI Ar-Ruhul Jadid Politeknik Caltex Riau",
                year: "2022 – 2026",
                category: "Organization",
                desc: "Actively participated in campus leadership development, student welfare committees, and organizational integrity programs."
            }
        ],
        contact: {
            badge: "Contact Me",
            title: "Let's Connect & Collaborate",
            subtitle: "Interested in hiring or discussing opportunities in Fullstack Development, Business/System Analysis, Data Analysis, or collaborative projects? Reach out through any channel below.",
            infoHeading: "Contact Details",
            emailLabel: "Official Email",
            copyEmail: "Copy email address",
            copied: "Copied!",
            whatsappTitle: "Direct WhatsApp Message",
            whatsappSub: "Career discussions & interview inquiries",
            fastResponse: "Fast Response",
            linkedinSub: "Professional network & track record",
            githubTitle: "Repository & Source Code",
            githubSub: "Explore codebases & development projects",
            locationLabel: "Location & Availability",
            openForWork: "Available for Hire (Full-time / Contract)",
            workMode: "Remote / On-site",
            formHeading: "Send a Direct Message",
            formSub: "This form connects directly to the Laravel backend with instant validation and secure database storage.",
            labelName: "Full Name",
            placeholderName: "Your Name / Organization",
            labelEmail: "Email Address",
            placeholderEmail: "name@company.com",
            labelSubject: "Subject",
            placeholderSubject: "Career Opportunity / Project Inquiry",
            labelMessage: "Message",
            placeholderMessage: "Write your message or role details here...",
            submitBtn: "Send Message",
            submittingBtn: "Sending Message...",
            successMessage: "Your message has been sent successfully! Thank you."
        },
        footer: {
            bannerBadge: "Career & Collaboration",
            bannerTitle: "Let's Build Impactful Digital Solutions Together",
            bannerSubtitle: "Seeking a versatile Fullstack Developer or a rigorous Business/System Analyst with verified software engineering credentials? Let's connect.",
            ctaEmail: "Get in Touch via Email",
            ctaCv: "Download Official CV (PDF)",
            affiliation: "Fresh Graduate D4 Informatics Engineering · Politeknik Caltex Riau",
            tagline: "Combining full-stack software craftsmanship (Laravel 11, React.js) with analytical business acumen to build resilient, enterprise-grade digital platforms.",
            statusAvailability: "Open to Work (Pekanbaru / Remote / On-site)",
            quickNavHeading: "Portfolio Navigation",
            connectHeading: "Connect & Network",
            liveWebLabel: "Central Palantea Live Web",
            techStack: "Laravel 11 · React.js · Inertia.js · Tailwind CSS v4",
            allRights: "All rights reserved.",
            backToTop: "Back to Top"
        },
        cvData: {
            modal: {
                badge: "Download Format Options",
                title: "Download Curriculum Vitae (CV)",
                subtitle: "Choose the CV format that best suits your needs or the company's recruitment portal.",
                langLabel: "CV Language:",
                recommendedBadge: "Recommended for HR & ATS Portals",
                atsOption: {
                    badge: "100% ATS Friendly · Dynamic",
                    title: "ATS-Friendly CV (Latest & Automated)",
                    desc: "Industry-standard single-column layout optimized for ATS parsers (Workday, Taleo, Greenhouse). Automatically synchronized with latest projects, internships, and BNSP certifications.",
                    printBtn: "Open & Save as PDF (ATS)",
                    previewBtn: "Preview CV",
                },
                originalOption: {
                    badge: "Original Document Format",
                    title: "Original Document CV (PDF)",
                    desc: "Original PDF document with standard visual graphic layout.",
                    downloadBtn: "Download Original PDF",
                },
                closeBtn: "Close",
                atsHint: "💡 HR Tip: Use the ATS-friendly format when applying via job portals (LinkedIn, Jobstreet, Glints, Workday) to ensure your data is parsed flawlessly by recruitment algorithms."
            },
            atsView: {
                docTitle: "ATS Resume - Nadila Putri | Fullstack Developer & Business Analyst",
                backToPortfolio: "Back to Portfolio",
                printSavePdf: "Print / Save as PDF",
                originalPdfBtn: "Original Document (PDF)",
                atsScoreBadge: "100% ATS Friendly · Single-Column Standard",
                autoSyncNotice: "This resume is dynamically generated and synchronized with live portfolio data.",
                sections: {
                    summary: "PROFESSIONAL SUMMARY",
                    skills: "TECHNICAL SKILLS",
                    experience: "WORK & INTERNSHIP EXPERIENCE",
                    projects: "FEATURED PROJECTS & CASE STUDIES",
                    education: "EDUCATION",
                    certifications: "PROFESSIONAL CERTIFICATIONS & LICENSES",
                    leadership: "HONORS, LEADERSHIP & ORGANIZATIONS",
                },
                labels: {
                    location: "Location",
                    email: "Email",
                    phone: "Phone",
                    linkedin: "LinkedIn",
                    github: "GitHub",
                    portfolio: "Portfolio",
                    gpa: "GPA",
                    role: "Role",
                    stack: "Technologies",
                    liveDemo: "Live Demo",
                    sourceCode: "Source Code",
                    credentialId: "Credential ID",
                    modules: "Key Competencies",
                }
            }
        }
    }
};

const resolveAssetPaths = (obj) => {
    const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : '/';
    const prefix = base.endsWith('/') ? base : `${base}/`;

    if (typeof obj === 'string') {
        if (obj.startsWith('/images/') || obj.startsWith('/CV_') || obj.startsWith('/documents/')) {
            return `${prefix}${obj.slice(1)}`;
        }
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(resolveAssetPaths);
    }
    if (obj !== null && typeof obj === 'object') {
        const res = {};
        for (const [key, value] of Object.entries(obj)) {
            res[key] = resolveAssetPaths(value);
        }
        return res;
    }
    return obj;
};

export const portfolioData = resolveAssetPaths(rawPortfolioData);

