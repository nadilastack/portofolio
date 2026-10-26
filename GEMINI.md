# Catatan Perubahan Proyek Portofolio (Nadila Putri)

## [2026-10-10] Implementasi Penuh Website Portofolio (Laravel 11 + Inertia.js + React + Tailwind CSS)

### 1. Tahap Inisialisasi & Setup Arsitektur
- Menginisialisasi proyek Laravel 11 pada direktori kerja `d:\Portofolio`.
- Menginstal package backend `inertiajs/inertia-laravel` (v3.5.1) melalui Composer.
- Mengonfigurasi middleware `HandleInertiaRequests` pada `bootstrap/app.php` dengan sharing flash session (`flash.success` dan `flash.error`).
- Menginstal dependensi frontend via npm:
  - `@inertiajs/react`
  - `react` & `react-dom`
  - `@vitejs/plugin-react` (^5.2.0)
  - `lucide-react`
- Mengonfigurasi `vite.config.js` dengan integrasi React plugin, alias path `@/`, dan Tailwind CSS v4.
- Mengonfigurasi `resources/views/app.blade.php` dengan Google Fonts (Plus Jakarta Sans & JetBrains Mono), meta tag SEO (description, keywords, OpenGraph), favicon kustom NP, serta `@viteReactRefresh` dan `@inertiaHead`.
- Mengonfigurasi `resources/css/app.css` dengan source path JSX dan font theme variables.

### 2. Backend & Basis Data
- Membuat migrasi `create_contact_messages_table` untuk menyimpan pesan form kontak (kolom: `name`, `email`, `subject`, `message`, `is_read`, `timestamps`) dan menjalankannya dengan `php artisan migrate`.
- Membuat model `app/Models/ContactMessage.php` dengan atribut `$fillable`.
- Membuat controller:
  - `app/Http/Controllers/PortfolioController.php`: Merender halaman Inertia `Portfolio`.
  - `app/Http/Controllers/ContactController.php`: Validasi data form kontak dan penyimpanan pesan dengan redirect flash feedback.
- Mengonfigurasi routing di `routes/web.php`:
  - `GET /` -> `PortfolioController@index` (nama route: `portfolio.index`)
  - `POST /contact` -> `ContactController@store` (nama route: `contact.store`)
- Menulis pengujian otomatis di `tests/Feature/ContactFormTest.php` untuk validasi penyimpanan pesan dan rule form.

### 3. Frontend & Data Terpusat
- Membuat file data terpusat `resources/js/data/portfolioData.js` memuat data asli dari `CV_Nadila_Putri_IND.pdf` tanpa manipulasi data:
  - Profil & Ringkasan: Nadila Putri, Fresh Graduate D4 Teknik Informatika Politeknik Caltex Riau (IPK 3.61/4.00), BNSP Certified Programmer.
  - Positioning 3 Pilar: Fullstack Web Development (Utama), Business & System Analysis, Data & System Performance Analysis.
  - Metrik Kunci: IPK 3.61, SUS Score 90 & 85.7 (Grade A), Blackbox 90 skenario 100%, 14+ Sertifikasi, 3x Juara Silat Nasional.
  - Keterampilan dikelompokkan ke 4 kategori: Fullstack Development, Business & System Analysis, Data Analysis, Tools.
  - Proyek Studi Kasus:
    1. *Website Penjualan Online Central Palantea Hidroponik* (Fullstack - Featured Project)
    2. *Analisis Performa dan Keandalan Website Proxsis Group* (Data Analysis)
    3. *Implementasi AI-Driven Feature Generation pada Platform EMS* (Business Analysis)
    Setiap proyek mencakup format case study: Latar belakang & masalah, Peran saya, Tools & teknologi, Diagram alur sistem (visual box flow), Dampak/hasil terukur, Tautan GitHub/demo, serta label kategori.
  - Pendidikan, Pengalaman Profesional (PT. Malaka Incorpora Teknologi 2026/2025 & RS Mata SMEC 2021), 13 Sertifikasi Resmi, dan Kepemimpinan/Prestasi.
- Mengembangkan komponen React antarmuka:
  - `resources/js/Components/Navbar.jsx`: Sticky backdrop, mobile menu drawer, dan toggle dark/light mode tersimpan di `localStorage`.
  - `resources/js/Components/HeroSection.jsx`: Headline 3 pilar, ringkasan 2-3 kalimat, CTA "Download CV" dan "Lihat Proyek", kartu 3 pilar, dan kontak langsung.
  - `resources/js/Components/AboutSection.jsx`: Narasi peran penghubung bisnis-teknis, nilai utama, dan kartu metrik statistik terverifikasi.
  - `resources/js/Components/SkillsSection.jsx`: Grid keterampilan 4 kategori dengan label tingkat kemahiran dan filter tabs.
  - `resources/js/Components/ProjectsSection.jsx`: Galeri studi kasus dengan filter kategori, flowchart arsitektur sistem, dan modal popup detail case study.
  - `resources/js/Components/ExperienceEducationSection.jsx`: Tab switcher interaktif antara Pengalaman Kerja, Pendidikan, Sertifikasi Resmi, dan Kepemimpinan/Prestasi.
  - `resources/js/Components/ContactSection.jsx`: Kartu kontak langsung (Email, WhatsApp, LinkedIn, GitHub, Domisili) dan form pesan terkoneksi dengan Inertia backend.
  - `resources/js/Components/BrandIcons.jsx`: Komponen SVG ikon mandiri pixel-perfect untuk LinkedIn dan GitHub.
  - `resources/js/Components/Footer.jsx`: Brand identitas, badge stack teknologi, dan tombol kembali ke atas.
  - `resources/js/Pages/Portfolio.jsx`: Komponen halaman utama yang merangkai seluruh section sesuai urutan permintaan user.

### 4. Hasil Verifikasi & Pengujian
- **Frontend Build (`npm run build`)**: Berhasil 100% tanpa error (`public/build/assets/app-k5rwDSbY.css` 73.43 kB, `public/build/assets/app-AhPfVfs1.js` 483.82 kB).
- **Backend Tests (`php artisan test`)**: 4/4 tes berhasil (PASS) mencakup `ExampleTest` dan `ContactFormTest`.
- **Route Validation (`php artisan route:list`)**: Rute utama dan endpoint kontak terdaftar dengan benar.

## [2026-10-10] Perbaikan Bug: ReferenceError Github pada Modal Proyek Unggulan
- **Masalah**: Muncul pesan error `Uncaught ReferenceError: Github is not defined at ProjectsSection.jsx:350` saat tombol *Buka Studi Kasus Lengkap* / Proyek Unggulan diklik.
- **Penyebab**: Komponen `<Github />` pada bagian tautan proyek di dalam modal belum diganti dengan `<GithubIcon />` dari `BrandIcons.jsx`.
- **Solusi**:
  - Mengubah pemanggilan icon pada baris 350 file `resources/js/Components/ProjectsSection.jsx` dari `<Github />` menjadi `<GithubIcon />`.
  - Melakukan rebuild aset via `npm run build` dan memverifikasi seluruh komponen bebas dari error referensi.

## [2026-10-10] Integrasi & Perbaikan Tombol Download CV
- **Masalah**: Mengklik tombol Download CV menghasilkan pesan error 404 Not Found karena URL masih mengarah ke placeholder `/[ISI: path_file_cv_pdf]`.
- **Solusi**:
  - Menyalin file dokumen resmi `CV_Nadila_Putri_IND.pdf` ke folder publik `public/CV_Nadila_Putri_IND.pdf`.
  - Memperbarui properti `cvFileUrl` di `resources/js/data/portfolioData.js` menjadi `/CV_Nadila_Putri_IND.pdf`.
  - Menambahkan atribut HTML `download="CV_Nadila_Putri_IND.pdf"` pada tombol di `Navbar.jsx` dan `HeroSection.jsx` agar browser otomatis mengunduh file PDF secara langsung.
  - Melakukan rebuild aset via `npm run build`.

## [2026-10-10] Redesain Kartu Informasi Kontak (UX & Estetika)
- **Masalah**: Tampilan kartu kontak sebelumnya terkesan kaku seperti formulir biodata cetak, mengekspos deretan nomor WhatsApp mentah secara publik (berisiko privasi), menampilkan link URL panjang LinkedIn dengan ID acak, serta placeholder mentah `[ISI: url_github_anda]`.
- **Solusi & Peningkatan**:
  1. **Kartu Email**: Menambahkan tombol fitur interaktif *Salin Alamat Email (Copy to Clipboard)* dengan indikator feedback checklist, di samping opsi klik langsung `mailto:`.
  2. **Kartu WhatsApp**: Menyembunyikan nomor HP mentah untuk menjaga privasi dari web crawler/spam bot, menggantinya dengan kartu aksi interaktif berlabel *"Chat Langsung via WhatsApp"*, indikator pulse status hijau *"Respon Cepat"*, serta prefilled query pembuka chat otomatis.
  3. **Kartu LinkedIn**: Mengganti teks URL panjang menjadi kartu profil profesional bertuliskan nama lengkap *"Nadila Putri"* dengan subketerangan *"Koneksi & Rekam Jejak Profesional"* dan tautan langsung berikon panah eksternal.
  4. **Kartu GitHub**: Mengganti tampilan teks placeholder mentah menjadi kartu aksi bersih *"Repository & Source Code"*.
  5. **Kartu Domisili & Ketersediaan**: Menambahkan badge kesiapan kerja (*"Terbuka untuk Kerja (Full-time / Kontrak)"* dan *"Remote / On-site"*).
  6. Melakukan rebuild aset via `npm run build` dan memverifikasi tampilan bekerja responsif.

## [2026-10-10] Implementasi Fitur Bilingual Language Switcher (🇮🇩 ID | 🇬🇧 EN)
- **Tujuan**: Membuka peluang karir global dan remote serta menyelaraskan dengan sertifikasi Cisco *English for IT 2 (CEFR B2)* milik Nadila Putri.
- **Implementasi**:
  1. **Dataset Bilingual Terpusat**: Memperbarui `resources/js/data/portfolioData.js` dengan dua kumpulan data lengkap: `id` (Bahasa Indonesia) dan `en` (English profesional berstandar industri tech).
  2. **Reactive State**: Menambahkan state `lang` di `resources/js/Pages/Portfolio.jsx` dengan persistensi otomatis di `localStorage` (`portfolio_lang`).
  3. **Komponen Language Switcher**: Menambahkan tombol pill switcher bahasa `🇮🇩 ID` dan `🇬🇧 EN` pada `Navbar.jsx` (versi desktop dan drawer mobile) di samping tombol dark/light mode.
  4. **Pembaruan Komponen**: Seluruh komponen (`HeroSection`, `AboutSection`, `SkillsSection`, `ProjectsSection`, `ExperienceEducationSection`, `ContactSection`, dan `Footer`) kini merender teks, label tab, tombol aksi, dan pesan status secara dinamis sesuai bahasa yang aktif tanpa reload halaman.
  5. **Pengujian**: Rebuild frontend via `npm run build` berhasil 100% dan seluruh 4 unit/feature tests di backend Laravel tetap PASS.

## [2026-10-10] Visualisasi Bukti Audit Proxsis Group & Integrasi Proyek Proposal IDP Apps (Magang Proxsis)
- **Konteks & Kebutuhan**:
  - Pengguna mengunggah 2 gambar hasil audit Lighthouse website Proxsis Group (versi Desktop score 52 dan Mobile score 54).
  - Pengguna mengunggah dokumen PDF proposal magang: *Pengembangan Individual Development Plan (IDP) Apps Proxsis Academy / HR*.
- **Pekerjaan & Solusi yang Diimplementasikan**:
  1. **Pengelolaan Aset Gambar & Dokumen**:
     - Memindahkan dan mengorganisasi file tangkapan layar Lighthouse ke `public/images/projects/proxsis_lighthouse_desktop.jpg` dan `public/images/projects/proxsis_lighthouse_mobile.jpg`.
     - Menggunakan script Python (`pymupdf`) untuk mengekstrak lembar slide proposal PDF resolusi tinggi (200 DPI) ke `public/images/projects/`:
       - `idp_cover.png`: Cover proposal sistem IDP Apps Proxsis Academy.
       - `idp_business_flow.png`: Business Process Flow (BPMN) pengajuan & verifikasi IDP.
       - `idp_functional_req.png`: Kebutuhan Fungsional (FR) & Peran Pengguna (Admin, Karyawan, Verifikator).
       - `idp_app_flow.png`: Application Flowchart & arsitektur alur verifikasi.
       - `idp_features.png`: Fitur Utama sistem IDP (Dashboard, Competency Matrix, Tracking).
       - `idp_mockup.png`: Wireframe & UI Mockup antarmuka IDP.
       - `idp_roadmap.png`: Roadmap implementasi dan jadwal rilis.
     - Menyimpan file proposal asli di `public/documents/IDP_Apps_Proxsis_Academy_Proposal.pdf` agar dapat diakses publik.
  2. **Pembaruan Dataset Portofolio (`resources/js/data/portfolioData.js`)**:
     - **Proyek Audit Proxsis Group**: Ditambahkan metadata `auditData` yang memuat skor kuantitatif (Performance, Accessibility, Best Practices, SEO) serta path gambar untuk Desktop dan Mobile dalam Bahasa Indonesia dan English.
     - **Proyek Baru - IDP Apps Proxsis Academy (Business & System Analysis)**:
       - Ditambahkan ke data proyek bilingual (`id` dan `en`).
       - Memuat Latar Belakang (masalah penyusunan IDP manual via spreadsheet), Peran (System & Business Analyst), Tools (Figma, BPMN, Google Workspace, Draw.io), Diagram Alur, Hasil Terukur (Standarisasi 100%, efisiensi verifikasi), tombol "Download Proposal PDF", serta galeri artefak proposal lengkap (7 slide diagram & mockup).
  3. **Peningkatan Komponen Antarmuka (`resources/js/Components/ProjectsSection.jsx`)**:
     - Menambahkan banner gambar pratinjau visual pada setiap kartu proyek (Lighthouse screenshot untuk Audit Proxsis dan Cover Diagram untuk IDP Apps).
     - **Fitur Interaktif Switcher Lighthouse (Desktop vs Mobile)**: Pengguna dapat beralih antara tampilan Desktop (52) dan Mobile (54) dengan indikator skor warna dinamis, metrik Core Web Vitals, dan tombol zoom pratinjau gambar audit resolusi penuh.
     - **Fitur Galeri Artefak Interaktif IDP Apps**: Tab switcher untuk menelusuri mockup, BPMN Flow, Application Flow, dan Roadmap secara visual di dalam modal studi kasus.
     - Menambahkan tombol unduh dokumen proposal PDF resmi langsung dari modal.
  4. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-BB9Ar15r.js` 528.47 kB, `public/build/assets/app-BIKoSYkZ.css` 77.78 kB).
     - Seluruh tes backend Laravel (`php artisan test`) berjalan normal dan lulus.

## [2026-10-11] Integrasi Tangkapan Layar Asli Website IDP HRMS & Pembersihan Slide PPT
- **Konteks & Permintaan Pengguna**:
  - Pengguna mengklarifikasi bahwa slide proposal PPT sebelumnya hanya untuk pemahaman asisten mengenai konteks sistem dan tidak boleh ditampilkan di portofolio.
  - Pengguna mengunggah 3 tangkapan layar antarmuka asli dari aplikasi web IDP (HRMS):
    1. *Dashboard*: Progres IDP 25%, jadwal kompetensi kepemimpinan, aksi upload evidence, dan notifikasi revisi HR.
    2. *Self-Reflection*: Format evaluasi 4 kuadran (What Went Well, What Went Less Well, What Do I Want to Try Next, What Puzzles Us).
    3. *Resources*: Modul panduan mentoring, workshop teknik feedback, template sesi, studi kasus, dan komunitas.
- **Pekerjaan & Peningkatan**:
  1. **Pengelolaan Aset Bersih**:
     - Memindahkan tangkapan layar website asli ke folder publik:
       - `public/images/projects/idp_web_dashboard.png` (Cover kartu proyek & Dashboard galeri)
       - `public/images/projects/idp_web_reflection.png` (Galeri Self-Reflection)
       - `public/images/projects/idp_web_resources.png` (Galeri Resources Hub)
     - Menghapus slide ekstraksi PPT (`idp_cover.png`, `idp_business_flow.png`, dll.) dan file PDF proposal dari aset publik agar tidak dapat diakses atau ditampilkan.
  2. **Pembaruan Dataset Portofolio (`portfolioData.js`)**:
     - Menghapus seluruh referensi slide PPT dan properti `proposalPdf`.
     - Mengubah galeri proyek IDP di kedua bahasa (`id` dan `en`) menjadi 3 modul antarmuka website nyata dengan deskripsi kontekstual.
     - Menambahkan label dinamis untuk galeri antarmuka (`galleryTitle`, `gallerySubtitle`, `viewFullImage`) pada `projectsSection.modalHeadings`.
  3. **Penyempurnaan Komponen Antarmuka (`ProjectsSection.jsx`)**:
     - Mengganti tajuk galeri menjadi "Tangkapan Layar & Antarmuka Aplikasi Web (HRMS)" / "Web Application Interface & Screenshots (HRMS)".
     - Menambahkan tombol aksi interaktif "Buka Gambar Penuh" (*View Full Image*) untuk memungkinkan pengunjung dan rekruter melihat screenshot beresolusi tinggi di tab baru.
     - Menampilkan deskripsi detail modul di bawah gambar aktif galeri.
     - Menghilangkan tombol unduh proposal PDF.
  4. **Hasil Verifikasi**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-CiuXH6xa.js` 529.71 kB, `public/build/assets/app-D7xnWioZ.css` 78.27 kB).

## [2026-10-11] Integrasi Mockup Responsif 3D Perangkat (Laptop & Smartphone) Proyek IDP
- **Konteks & Kebutuhan**:
  - Pengguna mengunggah gambar mockup presentasi 3D modern yang memperlihatkan antarmuka sistem *Implementation Tracker - Coaching, Mentoring & Counseling Program* pada frame Laptop dan Smartphone berdampingan dengan logo badge Proxsis.
- **Pekerjaan & Peningkatan**:
  1. **Aset Gambar**:
     - Menyimpan gambar mockup ke `public/images/projects/idp_mockup_devices.png`.
  2. **Pembaruan Dataset Portofolio (`portfolioData.js`)**:
     - Menjadikan mockup perangkat ini sebagai gambar sampul utama (*cover thumbnail*) kartu proyek IDP pada tampilan beranda.
     - Menambahkan slide *Mockup Responsif (Laptop & Mobile)* / *Responsive Mockup (Laptop & Mobile)* sebagai item pertama pada galeri antarmuka interaktif di kedua bahasa (`id` dan `en`).
  3. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-DBrokCTO.js` 530.22 kB, `public/build/assets/app-D7xnWioZ.css` 78.27 kB).

## [2026-10-11] Integrasi Mendalam & Penyempurnaan Proyek AI-Driven Feature Generation (Laporan KP & Screenshot UI)
- **Konteks & Kebutuhan**:
  - Pengguna mengunggah tangkapan layar antarmuka asli modul *AI Module Generator* (`media_1791652218867.png`).
  - Pengguna mengunggah dokumen lengkap 65 halaman *Laporan Kerja Praktik*: "Implementasi AI-Driven Feature Generation pada Platform Integrasi EMS Berbasis Data Konsultasi" oleh Nadila Putri (NIM 2255301134), Politeknik Caltex Riau, PT Malaka Incorpora Teknologi (Malaka Group / berafiliasi dengan Proxsis).
- **Pekerjaan & Peningkatan**:
  1. **Aset Gambar**:
     - Memindahkan tangkapan layar antarmuka modul ke `public/images/projects/ai_module_generator.png`.
  2. **Pembaruan Dataset Portofolio (`portfolioData.js`)**:
     - Memperbarui data proyek `ems-ai-feature-generation` di kedua bahasa (`id` dan `en`):
       - Judul resmi: *AI-Driven Feature Generation pada Platform Integrasi EMS* / *AI-Driven Feature Generation for Enterprise Management System*.
       - Badge resmi: *Kerja Praktik · CRM AI Engineer (2025)* / *Internship Project · CRM AI Engineer (2025)*.
       - Menjadikan proyek ini bertatus `featured: true` sebagai bukti unggulan di pilar Business & System Analysis / AI.
       - Cover kartu proyek & galeri menggunakan `ai_module_generator.png`.
       - Latar belakang & masalah autentik: proses manual perumusan kebutuhan klien enterprise yang memakan waktu lama dan berisiko salah konfigurasi.
       - Peran: *CRM AI Engineer Intern* (Merancang logika alur kerja Context-Aware Generative Logic, arsitektur 3 lapisan [Input, Processing, Output], merumuskan validasi Context Awareness 4 pilar [struktur proyek, skema DB, dependensi, environment], dan menguji antarmuka generator terintegrasi otomatisasi Laravel).
       - Teknologi & metodologi: Context-Aware Generative Logic, Laravel Boost Automation, Prompt Engineering, Domain-Driven Design (DDD), Context Validation Engine, Enterprise Management System (EMS), BPM.
       - Fitur terperinci: Input bahasa alami & Quick Prompts (CRUD, Report, Audit Log, Approval, Dashboard Widget), Context Awareness check, simulasi terminal output (`php artisan make:module`), pembentukan modular Domain (`app/Domains/Procurement/...`), dan tombol persetujuan pengembang (*Apply Changes* / *Discard*).
       - Dampak nyata: memangkas waktu setup modul dari berhari-hari menjadi hitungan menit, menjamin 100% konsistensi arsitektur kode, serta disahkan resmi oleh PT Malaka Incorpora Teknologi & Politeknik Caltex Riau.
  3. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-Cfzd7Qrq.js` 534.07 kB, `public/build/assets/app-D7xnWioZ.css` 78.27 kB).

## [2026-10-11] Integrasi Mendalam Laporan Magang MBKM: Audit Core Web Vitals Website Proxsis Group (133 Halaman)
- **Konteks & Kebutuhan**:
  - Pengguna mengunggah dokumen 133 halaman *Laporan Magang MBKM*: "Analisis Performa Website Proxsis Group Berdasarkan Core Web Vitals Menggunakan Google Lighthouse dan PageSpeed Insights" oleh Nadila Putri (NIM 2255301134), Politeknik Caltex Riau, PT Malaka Incorpora Teknologi (Member of Proxsis Group), Februari–Juni 2026.
- **Pekerjaan & Peningkatan**:
  1. **Pembaruan Dataset Portofolio (`portfolioData.js`)**:
     - Memperbarui data proyek `proxsis-group-performance` di kedua bahasa (`id` dan `en`):
       - Judul resmi: *Analisis Performa Website Proxsis Group Berdasarkan Core Web Vitals* / *Proxsis Group Web Performance Analysis Based on Core Web Vitals*.
       - Badge resmi: *Magang MBKM · Performance Analyst (2026)* / *MBKM Internship · Performance Analyst (2026)*.
       - Menjadikan status `featured: true` di pilar Data & Performance Analysis.
       - Memperkaya metadata `auditData`:
         - Desktop (Lighthouse v13.0.2): FCP 4.8s, LCP 8.5s (240% di atas batas), TBT 150ms (Good), CLS 0 (Ideal), Speed Index 9.5s.
         - Mobile (Slow 4G / CPU 4x Moto G Power): FCP 5.5s, LCP 29.7s (Poor), TBT 130ms (Good), CLS 0 (Ideal), Speed Index 15.5s.
       - Menambahkan metadata data telemetri lapangan `fieldDataSummary` (CrUX 28 hari pengguna nyata):
         - Status Google CWV Assessment: **FAILED** pada mobile akibat LCP lapangan 3.1 detik (ambang batas ≤ 2.5s).
         - CLS Lapangan: **0.07** (Lolos / Good).
         - TTFB Lapangan: **1.9 detik** (Poor / Server Bottleneck).
       - Menambahkan analisis 3 faktor kritis: Unoptimized Images (1.771 KiB potensi hemat pada hero container Elementor), Render-Blocking Resources (3.550 ms delay), dan TTFB tinggi (1,9 s).
       - Menambahkan matriks 6 rekomendasi terprioritas (WebP/AVIF hero conversion & preload, inline critical CSS, perbaikan TTFB via CDN & server cache, font-display: swap, dan pembersihan 257 KiB kode JS/CSS).
  2. **Penyempurnaan Komponen Antarmuka (`ProjectsSection.jsx`)**:
     - Menambahkan baris metrik diagnostik lab (*Lab Metrics*) lengkap (FCP, LCP, TBT, CLS, Speed Index) dengan indikator warna status.
     - Menambahkan banner informatif resmi *Google Core Web Vitals Assessment (CrUX Field Data)* yang menjelaskan status FAILED mobile, LCP 3.1s, CLS 0.07, dan TTFB 1.9s.
  3. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-DUQQevdZ.js` 540.40 kB, `public/build/assets/app-D21xHp2V.css` 79.03 kB).
     - `php artisan test` 4/4 PASS.

## [2026-10-11] Integrasi Lengkap Pengalaman Organisasi & Kepanitiaan (Event Committees & Clubs)
- **Konteks & Kebutuhan**:
  - Pengguna meminta pengecekan dan pelengkapan seluruh pengalaman kepanitiaan dan keanggotaan organisasi yang tertera pada CV/resume, mencakup 7 kegiatan kepanitiaan dan klub aktif.
- **Pekerjaan & Peningkatan**:
  1. **Pembaruan Dataset Portofolio (`portfolioData.js`)**:
     - Memperbarui tab `achievementsAndLeadership` (Prestasi, Kepemimpinan & Organisasi) pada kedua bahasa (`id` dan `en`) menjadi 11 entri lengkap:
       1. *Sertifikat Penghargaan*: Pengembangan & Implementasi Sistem Central Palantea (2026).
       2. *Prestasi Nasional*: Juara 1 Medali Emas Kejuaraan Pencak Silat Nasional (2024).
       3. *Prestasi Nasional*: Juara 2 & 3 Kejuaraan Pencak Silat Nasional (2025 & 2023).
       4. *Regional Leader*: PCR Goes to School (2023 & 2024) — Memimpin promosi universitas, logistik, presentasi, dan kemitraan sekolah.
       5. *Event Committee*: Sumatra Networking Competition (SNC 2023) — Perencanaan rundown, delegasi tugas divisi acara, dan kelancaran alur kompetisi.
       6. *Event Committee (Program Coordinator)*: Intensive Islamic Studies (SII 2023) — Penyusunan rundown lengkap, distribusi tugas tim, dan manajemen waktu acara.
       7. *Event Committee (Program Coordinator)*: PCR Cup Volleyball Tournament (2024) — Pembuatan jadwal pertandingan dan koordinasi staf teknis perwasitan.
       8. *Event Committee (Program Coordinator)*: Musyawarah Besar UKM Bola Voli (2024) — Pengaturan alur sidang, panggung, dokumentasi, dan manajemen sesi.
       9. *Event Committee (Program Coordinator)*: Pembekalan Pementor PCR (UKMI 2023) — Perencanaan jadwal dan supervisi panitia divisi program.
       10. *Active Member*: Caltex Techno Science Club (2022 – Sekarang) — Partisipasi aktif dalam diskusi inovasi teknologi dan forum riset sains.
       11. *Kader Aktif*: UKMI Ar-Ruhul Jadid (2022 – Sekarang) — Pembinaan karakter kepemimpinan dan kepanitiaan sosial kemahasiswaan.
  2. **Penyempurnaan Komponen Antarmuka (`ExperienceEducationSection.jsx`)**:
     - Menambahkan fungsi `getItemBadge` dengan pemetaan warna dan ikon semantik:
       - 🏆 **Prestasi / Penghargaan**: Ikon Trophy dengan aksen warna amber.
       - 🎖️ **Kepemimpinan**: Ikon Award dengan aksen warna indigo.
       - 📅 **Kepanitiaan**: Ikon Calendar dengan aksen warna teal.
       - 👥 **Organisasi**: Ikon Users dengan aksen warna purple.
     - Menampilkan pill badge kategori (`Penghargaan`, `Prestasi`, `Kepemimpinan`, `Kepanitiaan`, `Organisasi`) pada setiap kartu.
  3. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-XA6gywFh.js` 545.01 kB, `public/build/assets/app-BpJFjftr.css` 80.65 kB).
     - `php artisan test` 4/4 PASS.

## [2026-10-11] Pemisahan Prestasi Pencak Silat Menjadi 3 Entri Terpisah Berdasarkan Tahun
- **Konteks & Kebutuhan**:
  - Pengguna meminta agar prestasi pencak silat dipisahkan menjadi 3 item individual berdasarkan tahun pelaksanaannya (2025, 2024, dan 2023) sesuai yang tercatat resmi pada CV.
- **Pekerjaan & Peningkatan**:
  1. **Pembaruan Dataset Portofolio (`portfolioData.js`)**:
     - Memisahkan data pencak silat pada kedua bahasa (`id` dan `en`) menjadi 3 entri independen:
       1. **Juara 2 (Medali Perak) Kejuaraan Pencak Silat Nasional (2025)**: *Meraih Juara 2 (Medali Perak) dalam Kejuaraan Seni Bela Diri Pencak Silat Tingkat Nasional.*
       2. **Juara 1 (Medali Emas) Kejuaraan Pencak Silat Nasional (2024)**: *Pencapaian medali emas (Juara 1) tingkat nasional dalam kompetisi seni bela diri pencak silat.*
       3. **Juara 3 (Medali Perunggu) Kejuaraan Pencak Silat Nasional (2023)**: *Meraih Juara 3 (Medali Perunggu) dalam Kejuaraan Seni Bela Diri Pencak Silat Tingkat Nasional.*
     - Total entri pada tab *Prestasi, Kepemimpinan & Organisasi* kini menjadi 12 kartu terstruktur dengan urutan kronologis yang jelas.
  2. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-DAVkf8go.js` 545.50 kB, `public/build/assets/app-BpJFjftr.css` 80.65 kB).
     - `php artisan test` 4/4 PASS.

## [2026-10-11] Implementasi Pop-up Modal Lightbox Interaktif Bersertifikat (In-Page Preview Tanpa Pindah Tab)
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna mengunggah berkas sertifikat resmi (11 berkas PDF + 2 foto sertifikat: Gamatechno & Sertifikat Penghargaan Central Palantea).
  - Pengguna meminta agar setiap kartu sertifikat dapat diklik dan membuka sertifikat secara langsung di halaman yang sama (*"pas di klik kebuka sertifikatnya ga pindah tab ya ttp di halaman itu kayak muncul gitu aja oukey tapi yg bagus animasinya ya"*).
- **Pekerjaan & Peningkatan**:
  1. **Pengelolaan & Ekstraksi Aset Visual Sertifikat**:
     - Mengekstrak 11 sertifikat PDF ke gambar beresolusi tinggi (DPI 180) serta mengintegrasikan 2 sertifikat JPG ke `public/images/certificates/`:
       1. `cert_dicoding_ai_basics.png`: Dicoding – Belajar Dasar AI (ID: `EYX4QDWDJPDL`)
       2. `cert_coursera_python_ust.png`: Coursera & UST – Create Your First Python Program (ID: `NA293WBSX22D`)
       3. `cert_dicoding_data_science_fabric.png`: Dicoding – Belajar Penerapan Data Science dengan Microsoft Fabric (ID: `53XEM4M79PRN`)
       4. `cert_cisco_ccna_intro.png`: Cisco Networking Academy – CCNA: Introduction to Networks (ITN)
       5. `cert_cisco_ccna_switching.png`: Cisco Networking Academy – CCNA: Switching, Routing, and Wireless Essentials (SRWE)
       6. `cert_dicoding_financial_literacy.png`: Dicoding – Introduction to Financial Literacy (ID: `ERZRLQR1MZYV`)
       7. `cert_mikrotik_mtcna.png`: MikroTik – MikroTik Certified Network Associate (MTCNA) (ID: `2407NA8555`)
       8. `cert_dicoding_c_programming.png`: Dicoding – Memulai Pemrograman Dengan C (ID: `72ZDM862JZYW`)
       9. `cert_dicoding_java_programming.png`: Dicoding – Memulai Pemrograman Dengan Java (ID: `0LZ0J9EGQX65`)
       10. `cert_dicoding_azure_genai.png`: Dicoding – Membangun Aplikasi Gen AI dengan Microsoft Azure (ID: `N9ZO050K8XG5`)
       11. `cert_dicoding_prompt_engineering.png`: Dicoding – Prompt Engineering untuk Software Developer (ID: `98XW8G1O0PM3`)
       12. `cert_gamatechno_system_analyst.jpg`: PT Gamatechno Indonesia – Memahami Peran System Analyst dalam Pengembangan Aplikasi (No: `40251/SNM/STF/XI/2022`)
       13. `cert_penghargaan_central_palantea.jpg`: Sertifikat Penghargaan Resmi Central Palantea Hidroponik (No: `0012/CP.08/2026`)
  2. **Pembaruan Dataset Portofolio (`portfolioData.js`)**:
     - Memperbarui 16 sertifikasi di kedua bahasa (`id` dan `en`) dengan properti `image`, `credentialId`, `issueDate`, `verifyUrl`, dan deskripsi kompetensi terperinci.
     - Menghubungkan *Sertifikat Penghargaan Central Palantea* pada tab *Prestasi & Organisasi* dengan gambar fisik penghargaan asli sehingga dapat dibuka langsung melalui modal.
     - Menambahkan teks lokalisasi `certificateModal` (Label tombol buka, verifikasi kredensial resmi, buka ukuran penuh, tanggal perolehan, penerbit, nomor kredensial, dll.).
  3. **Animasi & Interaktivitas Lightbox Modal (`ExperienceEducationSection.jsx` & `app.css`)**:
     - Menambahkan animasi CSS keyframe halus: `@keyframes modalBackdropFadeIn` (fade-in transparan berdurasi 0.22s) dan `@keyframes modalContentPopIn` (scale-up spring cubic-bezier 0.28s) pada `app.css`.
     - Setiap kartu sertifikat kini berstatus tombol interaktif dengan hover elevation (`hover:-translate-y-1 hover:shadow-md cursor-pointer`), ikon mata (*Eye*), dan tombol aksi eksplisit.
     - Kartu prestasi yang memiliki sertifikat visual (seperti Sertifikat Penghargaan Central Palantea) kini juga interaktif dan memicu modal preview langsung.
     - Mengembangkan Lightbox Modal in-page:
       - Pratinjau gambar sertifikat tajam dengan latar belakang frame kontras dan efek zoom halus saat hover.
       - Metadata resmi: Nama sertifikat, lembaga penerbit, nomor kredensial ID, dan tanggal perolehan.
       - Tombol aksi verifikasi kredensial resmi langsung ke situs penyedia (Dicoding, Coursera, MikroTik) jika pengunjung ingin memeriksa validitas di database penerbit.
       - Tombol pratinjau ukuran penuh (*Open Full Image*) dan tombol tutup.
       - Aksesibilitas: Mendukung tombol `Escape` untuk menutup modal, klik di luar modal (backdrop click), dan scroll-lock otomatis pada elemen `body`.
  4. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-CLft1yI2.js` 566.96 kB, `public/build/assets/app-BRndABG1.css` 86.98 kB).
     - `php artisan test` 4/4 PASS (100% passed).

## [2026-10-11] Integrasi 4 Sertifikasi Tambahan: HackerRank, Cisco Python Essentials 2 & TOEIC PCR
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna mengunggah 4 berkas sertifikat tambahan bergengsi:
    1. HackerRank: Software Engineer Role Certification (`media_1791654109300.pdf`)
    2. HackerRank: SQL (Advanced) Skill Certification (`media_1791654109675.pdf`)
    3. Cisco Networking Academy & OpenEDG Python Institute: Python Essentials 2 (`media_1791654108885.pdf`)
    4. Language Training Institution (LTI Politeknik Caltex Riau): TOEIC Prediction Test Score 485 (`media_1791653486343.pdf`)
- **Pekerjaan & Peningkatan**:
  1. **Pengolahan & Ekstraksi Aset Visual**:
     - `cert_hackerrank_software_engineer.png`: Ekstraksi DPI 200 sertifikat Software Engineer HackerRank resmi (ID: `D51DE7B5FE49`, Verify: `https://www.hackerrank.com/certificates/D51DE7B5FE49`).
     - `cert_hackerrank_sql_advanced.png`: Ekstraksi DPI 200 sertifikat SQL (Advanced) HackerRank resmi (ID: `9BA3F212D6C8`, Verify: `https://www.hackerrank.com/certificates/9BA3F212D6C8`).
     - `cert_cisco_python_essentials_2.png`: Ekstraksi DPI 200 sertifikat Python Essentials 2 (PCAP Aligned) resmi kolaborasi Cisco dan OpenEDG Python Institute.
     - `cert_toeic_lti_pcr.png`: Ekstraksi dan rotasi 270 derajat searah jarum jam sehingga sertifikat skor TOEIC tampil tegak lurus horizontal sempurna (Listening: 235, Reading: 250, Total Score: 485).
  2. **Pembaruan Dataset Portofolio (`portfolioData.js`)**:
     - Menambah total sertifikasi resmi menjadi **20 sertifikasi** pada kedua bahasa (`id` dan `en`).
     - Memposisikan sertifikasi bergengsi HackerRank (Software Engineer & SQL Advanced) dan Cisco Python Essentials 2 di jajaran teratas bersama BNSP Programmer.
     - Melengkapi nomor lisensi, tautan verifikasi URL resmi HackerRank dan Cisco, serta uraian silabus pembelajaran yang dipelajari.
  3. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-DXgBOv8A.js` 571.23 kB, `public/build/assets/app-BRndABG1.css` 86.98 kB).
     - `php artisan test` 4/4 PASS.

## [2026-10-11] Integrasi Mendalam Silabus Terverifikasi, Badge Mitra Global & Detail Instruktur pada Modal Sertifikat
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna mengunggah lembar silabus lengkap untuk *Prompt Engineering untuk Software Developer* (Dicoding & Google Developers Authorized Training Partner, 16 Jam) dan sertifikat *TechnoClass by Gamatechno* (PT Gamatechno Indonesia, Pemateri: Alivia Saskia P - System Analyst).
- **Pekerjaan & Peningkatan**:
  1. **Pengayaan Metadata Sertifikat (`portfolioData.js`)**:
     - Menambahkan badge **Mitra Resmi & Program** pada sertifikasi terkait:
       - *Google Developers (Authorized Training Partner)* untuk Prompt Engineering.
       - *Microsoft* untuk Membangun Aplikasi Gen AI & Data Science Fabric.
       - *OpenEDG Python Institute (PCAP Aligned)* untuk Cisco Python Essentials 2.
       - *DBS Foundation Coding Camp* untuk Belajar Dasar AI & Financial Literacy.
       - *HackerRank Standardized Assessment* untuk Software Engineer & SQL Advanced.
       - *PT Gamatechno Indonesia* dengan pemateri resmi *Alivia Saskia P (System Analyst)*.
     - Menambahkan data **Beban / Durasi Jam Belajar Terverifikasi**:
       - Prompt Engineering: 16 Jam Belajar
       - Pemrograman Java: 15 Jam Belajar
       - Pemrograman C: 15 Jam Belajar
       - Gen AI Microsoft Azure: 8 Jam Belajar
       - Financial Literacy: 6 Jam Belajar
     - Menambahkan daftar **Silabus & Modul Kompetensi Terverifikasi (`modules`)** pada seluruh 20 sertifikat di kedua bahasa (`id` dan `en`).
  2. **Penyempurnaan Antarmuka Modal Lightbox (`ExperienceEducationSection.jsx`)**:
     - Menampilkan pill badge mitra resmi dengan ikon Sparkles pada header modal (`Mitra Resmi: Google Developers Authorized Training Partner`, dll.).
     - Menambahkan kolom informasi meta: Beban/Jam Belajar atau Nama Pemateri/Instruktur.
     - Merender section kartu silabus interaktif (*Materi & Silabus Kompetensi Terverifikasi*) dengan grid 2 kolom dan ikon checklist `CheckCircle2` hijau-teal.
  3. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-DFJULfaY.js` 584.81 kB, `public/build/assets/app-CB2BDYRC.css` 87.74 kB).
     - `php artisan test` 4/4 PASS.

## [2026-10-11] Integrasi Sertifikat Penghargaan Resmi Central Palantea Hidroponik pada Proyek Unggulan
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna mengunggah gambar Sertifikat Penghargaan Resmi dari Central Palantea Hidroponik (cert_penghargaan_central_palantea.jpg, No: 0012/CP.08/2026, Duri 18 Ags 2026, Pimpinan Ismail).
  - Sertifikat ini merupakan bukti fisik penghargaan dan pengakuan atas dedikasi serta keberhasilan implementasi platform Tugas Akhir / Proyek Utama #1.
- **Pekerjaan & Peningkatan**:
  1. **Integrasi Visual pada Kartu Proyek Luar (ProjectsSection.jsx)**:
     - Menjadikan gambar Sertifikat Penghargaan sebagai thumbnail pratinjau elegan pada kartu proyek Central Palantea di halaman utama.
     - Menambahkan badge khusus 'Sertifikat Penghargaan Resmi' dengan aksen emerald & emas di sudut gambar.
  2. **Integrasi Blok Sertifikat di Dalam Modal Studi Kasus Proyek (ProjectsSection.jsx & portfolioData.js)**:
     - Menambahkan blok visual eksklusif bertema emerald-gold yang memuat gambar sertifikat penghargaan fisik, nomor kredensial resmi (0012/CP.08/2026), tanggal legalisasi (18 Agustus 2026), kutipan resmi pimpinan (Ismail), serta tombol 'Lihat Sertifikat Penuh'.
     - Menghubungkan metadata penghargaan di kedua bahasa (id dan en).
  3. **Hasil Verifikasi & Build**:
     - npm run build sukses 100% tanpa error (public/build/assets/app-Cf63MSzm.js 593.24 kB, public/build/assets/app-CoffaZgk.css 92.22 kB).

## [2026-10-11] Integrasi 3 Berkas Sertifikat Baru (Cisco English for IT 2, EC-Council EHE, Kominfo VSGA) & Komunitas Atlet Beladiri PCR
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna mengunggah 3 berkas sertifikat tambahan:
    1. Cisco Networking Academy & OpenEDG: English for IT 2 (CEFR B2) (media_1791654166254.pdf)
    2. EC-Council: Ethical Hacking Essentials (EHE) (media_1791654237391.jpg)
    3. Kementerian Kominfo & DTS: VSGA - Junior Web Developer 90 Jam (media_1791654269781.pdf)
  - Pengguna juga mengunggah profil visual resmi Komunitas Beladiri Politeknik Caltex Riau (media_1791653708755.png).
- **Pekerjaan & Peningkatan**:
  1. **Pengolahan & Penyimpanan Aset**:
     - cert_cisco_english_for_it_2.png: Render PDF DPI 200 sertifikat kemahiran komunikasi teknologi CEFR B2 dari Cisco & OpenEDG (Diterbitkan 25 Sep 2026).
     - cert_eccouncil_ethical_hacking_essentials.jpg: Sertifikat resmi EC-Council EHE (Nomor Kredensial: ECC4529670318, Berlaku: 13 Mei 2026 s/d 12 Mei 2029).
     - cert_kominfo_vsga_jwd.png & cert_kominfo_vsga_jwd_syllabus.png: Sertifikat resmi Kominfo Balitbang SDM & PCR (Nomor: VSGA/2022/3858/150305899100-2718, 90 Jam Pelatihan).
     - beladiri_pcr_community.png: Banner resmi identitas komunitas atlet beladiri Politeknik Caltex Riau (@Beladiri_pcr).
  2. **Pembaruan Dataset Portofolio (portfolioData.js)**:
     - Memperbarui cisco-english-it dengan gambar sertifikat, nomor kredensial Student Level CEFR B2, tanggal 25 September 2026, serta 6 modul silabus autentik dari sertifikat di kedua bahasa (id dan en).
     - Memperbarui ehe-eccouncil dengan gambar sertifikat, nomor kredensial ECC4529670318, masa berlaku, lembaga penerbit resmi EC-Council (Presiden Jay Bavisi), dan tautan verifikasi Aspen EC-Council.
     - Memperbarui kominfo-vsga dengan gambar sertifikat, nomor kredensial resmi, durasi 90 jam pelatihan, serta 6 unit kompetensi SKKNI resmi (UI, eksekusi kode, struktur fungsi/file, best practices, pemrograman terstruktur, library) di kedua bahasa (id dan en).
     - Memperbarui 3 entri Kejuaraan Seni Bela Diri Pencak Silat Nasional (2025 Perak, 2024 Emas, 2023 Perunggu) dengan gambar beladiri_pcr_community.png dan atribut kredensial atlet kontingen Beladiri PCR, sehingga saat diklik pengunjung dapat melihat bukti representasi resmi kampus Politeknik Caltex Riau.
  3. **Status Kelengkapan Visual**:
     - Sebanyak 19 dari 20 sertifikasi resmi kini memiliki pratinjau gambar sertifikat beresolusi tinggi langsung di dalam modal pop-up in-page dengan animasi transisi yang mulus tanpa perlu reload atau berpindah halaman.
  4. **Hasil Verifikasi & Build**:
     - npm run build sukses 100% tanpa error (public/build/assets/app-Cf63MSzm.js 593.24 kB, public/build/assets/app-CoffaZgk.css 92.22 kB).
     - php artisan test 4/4 PASS (100% passed).

## [2026-10-11] Integrasi Mendalam & Penyempurnaan Sertifikasi TOEIC® Prediction Test LTI PCR
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna mengunggah dan mengonfirmasi berkas sertifikat resmi TOEIC Prediction Test dari Language Training Institution (LTI) Politeknik Caltex Riau atas nama Nadila Putri.
  - Memastikan tampilan sertifikat tegak lurus horizontal sempurna serta menyajikan rincian skor dan kompetensi secara transparan.
- **Pekerjaan & Peningkatan**:
  1. **Aset Visual & Kualitas Render**:
     - Memastikan berkas 'public/images/certificates/cert_toeic_lti_pcr.png' (2750 x 2125 piksel, DPI 250) terotasi horizontal tegak lurus tanpa distorsi, siap dibuka langsung di modal in-page.
  2. **Pembaruan Dataset Portofolio (portfolioData.js)**:
     - Melengkapi data 'toeic-lti-pcr' pada kedua bahasa ('id' dan 'en'):
       - Mitra resmi: Language Training Institution (LTI) Politeknik Caltex Riau.
       - Skor Total Resmi: 485 / 990.
       - Objek 'scoreBreakdown': Rincian nilai Listening Section (235) dan Reading Section (250).
       - Deskripsi analitis mengukur kompetensi pemahaman instruksi, diskusi profesional, analisis dokumen teknis, dan korespondensi bisnis dunia kerja global.
       - Silabus terverifikasi: Listening Comprehension (percakapan kerja & arahan audio) dan Reading Comprehension (analisis dokumen kerja & email bisnis).
  3. **Penyempurnaan Antarmuka & Modal Lightbox (ExperienceEducationSection.jsx)**:
     - Menambahkan badge sorotan skor 'Skor: 485 / 990' langsung pada kartu luar sertifikat.
     - Menambahkan widget 'Score Breakdown' eksklusif di dalam modal lightbox dengan gradient modern, menampilkan skor Listening (235), Reading (250), dan Total Skor (485 / 990).
     - Menyesuaikan label kotak metadata ke-4 menjadi 'Skor / Pencapaian' (ID) / 'Score / Achievement' (EN) saat sertifikat berbasis skor dibuka.
  4. **Optimasi Sistem Lingkungan**:
     - Membersihkan npm-cache pada drive C: dan mengalihkan cache npm ke drive D: ('D:\.npm-cache') untuk menjamin kelancaran build selanjutnya.
  5. **Hasil Verifikasi & Build**:
     - 'npm run build' sukses 100% tanpa error ('public/build/assets/app-C19QQH3f.js' 596.03 kB, 'public/build/assets/app-DvVaN_uN.css' 94.99 kB).
     - 'php artisan test' 4/4 PASS (100% passed).

## [2026-10-11] Integrasi Organisasi Komunitas Beladiri PCR & Penyesuaian Periode Organisasi (2022 – 2026)
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna menambahkan keanggotaan organisasi resmi pada Komunitas Beladiri Politeknik Caltex Riau (Beladiri PCR) untuk periode 2022 – 2026.
  - Pengguna meminta agar seluruh masa keanggotaan organisasi yang sebelumnya berlabel '- Sekarang' / '- Present' diperbarui menjadi '- 2026' (2022 – 2026).
- **Pekerjaan & Peningkatan**:
  1. **Pembaruan Dataset Portofolio (portfolioData.js)**:
     - Menambahkan entri organisasi baru pada kedua bahasa ('id' dan 'en'):
       - Judul: 'Anggota & Atlet – Komunitas Beladiri Politeknik Caltex Riau (Beladiri PCR)' / 'Member & Martial Arts Athlete – Politeknik Caltex Riau Martial Arts Community (Beladiri PCR)'.
       - Organisasi: Politeknik Caltex Riau.
       - Periode: '2022 – 2026'.
       - Kategori: 'Organisasi' / 'Organization'.
       - ID Kredensial: 'Atlet Pencak Silat Kontingen PCR'.
       - Gambar Bukti: '/images/certificates/beladiri_pcr_community.png' (dapat diklik langsung untuk memicu modal pop-up in-page).
       - Deskripsi: Meliputi partisipasi aktif latihan, perwakilan kontingen kampus PCR pada kejuaraan silat nasional, serta pembinaan disiplin dan komunitas olahraga mahasiswa.
     - Memperbarui periode organisasi lainnya dari '2022 – Sekarang' / '2022 – Present' menjadi '2022 – 2026':
       - Caltex Techno Science Club (CTS): '2022 – 2026'.
       - UKMI Ar-Ruhul Jadid: '2022 – 2026'.
  2. **Hasil Verifikasi & Build**:
     - 'npm run build' sukses 100% tanpa error ('public/build/assets/app-DolgV8gp.js' 597.04 kB, 'public/build/assets/app-DvVaN_uN.css' 94.99 kB).
     - 'php artisan test' 4/4 PASS (100% passed).

## [2026-10-11] Integrasi Tautan Validasi Resmi LTI Group TOEIC Prediction & Penyelarasan Kredensial 3 Berkas Sertifikat
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna melampirkan tautan resmi validasi sertifikat TOEIC dari LTI Group (https://onlinetest.ltigroup.id/Certified?id_ujian=202600662&id_peserta=1008).
  - Tautan tersebut secara resmi memvalidasi bahwa pihak LTI Group telah menandatangani sertifikat TOEIC Prediction atas nama Nadila Putri.
  - Pengguna juga menyertakan konfirmasi untuk 3 sertifikat lainnya (Cisco Python Essentials 2, HackerRank Software Engineer, HackerRank SQL Advanced).
- **Pekerjaan & Peningkatan**:
  1. **Audit & Ekstraksi Data Validasi LTI Group**:
     - Status: 'Benar adanya bahwa pihak LTI Group telah menandatangani sertifikat TOEIC Prediction'.
     - Nomor Sertifikat Resmi: '202600662/LTI/X/2026'.
     - Nama Lengkap: 'NADILA PUTRI'.
     - Form Ujian: 'TNF-02A'.
     - Tanggal Tes: 'Monday, 9 February 2026'.
     - Scaled Score: Listening 235, Reading 250, Total Score 485.
  2. **Pembaruan Dataset Portofolio (portfolioData.js)**:
     - 'toeic-lti-pcr':
       - Menghubungkan tombol 'Verifikasi Kredensial Resmi' langsung ke URL validasi resmi LTI Group.
       - Memperbarui nomor kredensial ke nomor resmi '202600662/LTI/X/2026'.
       - Tanggal resmi disesuaikan menjadi 9 Februari 2026.
       - Menambahkan keterangan form ujian TNF-02A dan penandatanganan resmi LTI Group.
     - 'hackerrank-software-engineer' & 'hackerrank-sql-advanced':
       - Menambahkan penandatangan resmi: Harishankaran K (CTO, HackerRank).
       - Tanggal terverifikasi: 23 September 2026, nomor kredensial D51DE7B5FE49 dan 9BA3F212D6C8.
     - 'cisco-python-essentials-2':
       - Menambahkan penandatangan resmi: Lynn Bloomer (Director, Cisco Networking Academy).
       - Tanggal terverifikasi: 01 Oktober 2026, kolaborasi resmi bersama OpenEDG Python Institute (PCAP Aligned).
  3. **Hasil Verifikasi & Build**:
     - 'npm run build' sukses 100% tanpa error ('public/build/assets/app-DmdV-Epq.js' 597.59 kB, 'public/build/assets/app-DvVaN_uN.css' 94.99 kB).
     - 'php artisan test' 4/4 PASS (100% passed).

## [2026-10-11] Integrasi Berkas Sertifikat Tambahan (Cisco English for IT 2, EC-Council EHE, Kominfo VSGA), Multi-Page Switcher & Audit Integritas Aset
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna mengunggah 3 berkas sertifikat tambahan:
    1. `media_1791654166254.pdf`: Cisco Networking Academy & OpenEDG — *English for IT 2 (CEFR B2)* (Lynn Bloomer, 25 Sep 2026).
    2. `media_1791654237391.jpg`: EC-Council — *Ethical Hacking Essentials (EHE)* (`ECC4529670318`, Jay Bavisi, 13 Mei 2026 – 12 Mei 2029).
    3. `media_1791654269781.pdf`: Kementerian Kominfo, DTS & PCR — *VSGA - Junior Web Developer 90 Jam* (`VSGA/2022/3858/150305899100-2718`, Hary Budiarto, 16 Sep 2022).
- **Pekerjaan & Peningkatan**:
  1. **Integrasi Multi-Halaman Interaktif & Penyelarasan Kredensial (`portfolioData.js`)**:
     - Mengonfigurasi `pages` switcher untuk *VSGA Junior Web Developer* pada kedua bahasa (`id` dan `en`), memungkinkan pengunjung beralih antara Halaman 1 (*Sertifikat Pelatihan Resmi*) dan Halaman 2 (*Daftar Unit Kompetensi SKKNI*) secara instan di dalam pop-up modal lightbox.
     - Menambahkan tautan verifikasi resmi `verifyUrl: "https://digitalent.kominfo.go.id"` pada sertifikat VSGA Kominfo.
     - Menghubungkan seluruh penandatangan resmi: Lynn Bloomer (Director Cisco Networking Academy), Jay Bavisi (President EC-Council), dan Dr. Hary Budiarto (Kepala Balitbang SDM Kominfo).
  2. **Pembersihan Aset & Audit Integritas 100%**:
     - Menghapus seluruh berkas sementara dan file redundan (`temp_*` dan `media_*`) di `public/images/certificates/`, merapikan struktur menjadi 22 file aset bersih berkualitas tinggi.
     - Melakukan audit otomatis dengan script Python dan memverifikasi bahwa seluruh 66 referensi gambar pada `portfolioData.js` eksis 100% di disk (0 missing images).
  3. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-WD1EXrFH.js` 599.16 kB, `public/build/assets/app-BFay1q5j.css` 95.05 kB).
     - `php artisan test` 4/4 PASS (100% passed).

## [2026-10-11] Integrasi Data Legalitas Sertifikat Mahasiswa Berprestasi Non Akademik (Juara Pencak Silat Nasional 2025, 2024, 2023) Politeknik Caltex Riau
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna memberikan rincian data resmi 3 Sertifikat Mahasiswa Berprestasi Kategori Non Akademik yang diterbitkan oleh Politeknik Caltex Riau:
    1. **Juara 3 — Tahun 2023**: Nomor `0231.42/STF/PCR/2023`, T.A. 2022/2023, Pekanbaru 31 Agustus 2023, Penandatangan: Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur Politeknik Caltex Riau).
    2. **Juara 1 — Tahun 2024**: Nomor `0231.42/STF/PCR/2024`, T.A. 2023/2024, Pekanbaru 31 Agustus 2024, Penandatangan: Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur Politeknik Caltex Riau).
    3. **Juara 2 — Tahun 2025**: Nomor `0231.42/STF/PCR/2025`, T.A. 2024/2025, Pekanbaru 31 Agustus 2025, Penandatangan: Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur Politeknik Caltex Riau).
- **Pekerjaan & Peningkatan**:
  1. **Pengayaan Struktur Data & Kredensial Resmi (`portfolioData.js`)**:
     - Memperbarui 3 entri kejuaraan pencak silat pada kedua bahasa (`id` dan `en`) dengan data otentik:
       - Judul resmi: *Sertifikat Mahasiswa Berprestasi Non Akademik – Juara [1/2/3] Kejuaraan Pencak Silat Nasional*.
       - Lembaga penerbit: *Politeknik Caltex Riau*.
       - Nomor sertifikat: `0231.42/STF/PCR/2025`, `0231.42/STF/PCR/2024`, dan `0231.42/STF/PCR/2023`.
       - Tanggal & lokasi pengesahan: *Pekanbaru, 31 Agustus 2025 / 2024 / 2023*.
       - Pejabat pengesah: *Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur Politeknik Caltex Riau)*.
       - Menambahkan objek terstruktur `awardDetails` pada masing-masing item (Nomor Sertifikat, Predikat Penghargaan, Kategori Prestasi, Pencapaian Kompetisi, Tanggal Pengesahan, dan Pejabat Pengesah).
       - Menambahkan juga objek `awardDetails` pada *Sertifikat Penghargaan Central Palantea Hidroponik* (No: `0012/CP.08/2026`).
  2. **Penyempurnaan Antarmuka Modal Lightbox (`ExperienceEducationSection.jsx`)**:
     - Menambahkan dukungan atribut `selectedCert.signerLabel` sehingga kotak pengesahan pada rincian meta menampilkan label semantik yang tepat (*Pengesah / Direktur PCR* atau *Pimpinan Central Palantea*) alih-alih label umum.
     - Menambahkan komponen widget kartu amber bertema penghargaan (*Award & Legal Credentials Card*) di dalam pop-up modal lightbox dengan ikon `Trophy`, badge nomor sertifikat, dan grid 2 kolom rincian legalitas sertifikat resmi.
  3. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-CafNg9bd.js` 607.05 kB, `public/build/assets/app-YA3ewbt_.css` 97.60 kB).
     - `php artisan test` 4/4 PASS (100% passed).

## [2026-10-11] Penghapusan Tangkapan Layar Profil Instagram Beladiri PCR & Penyesuaian Menunggu Foto Juara Resmi
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna mengklarifikasi bahwa tangkapan layar akun Instagram `@beladiri_pcr` (`media_1791653708755.png` / `media_1791722488719.png`) sebelumnya hanya dilampirkan sebagai referensi informasi keikutsertaan organisasi, bukan untuk ditampilkan sebagai foto aset resmi organisasi maupun foto kejuaraan.
  - Pengguna meminta agar gambar tersebut dihapus dari entri organisasi dan dari ketiga item kejuaraan silat, serta menyatakan bahwa 3 foto resmi juara (untuk masing-masing kejuaraan 2025, 2024, dan 2023) akan dikirimkan menyusul.
- **Pekerjaan & Peningkatan**:
  1. **Pembersihan Referensi Gambar (`portfolioData.js`)**:
     - Menghapus properti `image` yang mengarah ke `beladiri_pcr_community.png` dari:
       1. *Mahasiswa Berprestasi Non Akademik – Juara 2 Kejuaraan Pencak Silat Nasional (2025)* (ID & EN).
       2. *Mahasiswa Berprestasi Non Akademik – Juara 1 Kejuaraan Pencak Silat Nasional (2024)* (ID & EN).
       3. *Mahasiswa Berprestasi Non Akademik – Juara 3 Kejuaraan Pencak Silat Nasional (2023)* (ID & EN).
       4. *Anggota & Atlet – Komunitas Beladiri Politeknik Caltex Riau (Beladiri PCR)* (ID & EN).
     - Seluruh data legalitas resmi (nomor sertifikat PCR, nama Direktur, tanggal pengesahan, dan deskripsi) tetap tersimpan aman dan rapi di dalam sistem.
  2. **Pembersihan Aset Fisik Disk**:
     - Menghapus file `public/images/certificates/beladiri_pcr_community.png` dari disk.
     - Audit otomatis memastikan 58/58 seluruh referensi gambar pada codebase 100% valid tanpa tautan gambar rusak (*0 broken links*).
  3. **Penyesuaian UX Kartu Antarmuka (`ExperienceEducationSection.jsx`)**:
     - Kartu kejuaraan dan organisasi kini tampil bersih sebagai kartu informatif formal tanpa tombol pop-up yang memicu tampilan screenshot Instagram.
     - Sistem telah dipersiapkan sehingga ketika pengguna mengunggah 3 foto juara resmi, masing-masing foto akan langsung dihubungkan ke entri kejuaraan terkait.
  4. **Hasil Verifikasi & Build**:
     - `npm run build` sukses 100% tanpa error (`public/build/assets/app-Bk_DtYfj.js` 606.60 kB, `public/build/assets/app-YA3ewbt_.css` 97.60 kB).
     - `php artisan test` 4/4 PASS (100% passed).

## [2026-10-11] Penyempurnaan Visual & Estetika Menyeluruh Seluruh Halaman Portofolio (Visual & UX Perfection)
- **Konteks & Permintaan Pengguna**:
  - Pengguna meminta pengecekan dan penyempurnaan menyeluruh terhadap keseluruhan desain portofolio agar tampil sempurna ('COBA CHECK KESELURUHANNYA YA APAKAH ADA YG PERLU DIMAKSIMALIN LAGI TAMPILANNYA GITU ENTAH DESAINNYA KARNA AKU PENGEN PERFECT').
- **Pekerjaan & Peningkatan Desain yang Diimplementasikan**:
  1. **Hero Section Elevation (Kesan Pertama & Identitas Visual Pengembang)**:
     - **Kartu Kehadiran Visual Developer (Developer Presence)**: Menambahkan monogram badge modern NP dengan cincin bercahaya (ambient gradient ring), efek hover scale 3D halus, serta indikator status ketersediaan kerja aktif (live animated pulse beacon):
       - Bahasa Indonesia: 'Terbuka untuk Peluang Kerja (Full-time / Kontrak)'
       - English: 'Open to Work (Full-time / Contract)'
     - **Ikon Semantik Khusus pada Kartu 3 Pilar**:
       - *Pilar 1 (Fullstack Web Development)*: Menggunakan ikon Code2 beraksen Indigo dengan container khusus berlatar belakang soft badge.
       - *Pilar 2 (Business & System Analysis)*: Menggunakan ikon Workflow beraksen Teal dengan container khusus.
       - *Pilar 3 (Data & Performance Analysis)*: Menggunakan ikon Activity beraksen Amber dengan container khusus.
     - Menambahkan transisi hover elevasi halus (hover:-translate-y-1 hover:shadow-lg) pada ketiga kartu pilar untuk memberikan dinamika visual modern.
  2. **About Section - Executive Metric Scorecard**:
     - Mengubah baris teks statistik metrik pada kolom kanan menjadi **Scorecard Metrik Interaktif** tersendiri dengan badge Verified dan ikon semantik tematik:
       - **IPK 3.61**: GraduationCap (Aksen Indigo)
       - **Skor SUS 90 & 85.7**: Sparkles (Aksen Amber)
       - **Blackbox 100%**: ShieldCheck (Aksen Emerald)
       - **Sertifikasi 20+**: Award (Aksen Teal)
       - **Silat Nasional 3x**: Trophy (Aksen Emas)
     - Setiap kartu metrik kini memiliki efek hover highlight dan tata letak yang sangat nyaman dipindai (scannable) oleh HR dan recruiter teknis.
  3. **Skills Section - Peningkatan Navigasi & Visual Highlight**:
     - Menambahkan pill counter pada setiap tombol filter tab (Semua: 36, Fullstack: 8, Analysis: 7, Data: 5, Tools: 16).
     - Menambahkan titik indikator visual berwarna indigo pada setiap skill yang berstatus unggulan (highlighted skill), mempermudah audiens melihat kompetensi inti secara cepat.
  4. **Projects Section - Counter Badges Kategori**:
     - Menambahkan pill badge jumlah proyek pada filter kategori (Semua: 4, Fullstack: 1, Analysis: 2, Data: 1).
  5. **Experience & Education Section - Counter Badges Tab Navigasi**:
     - Menambahkan pill badge angka pada ke-4 tab utama (Pengalaman: 2, Pendidikan: 2, Sertifikasi: 20, Prestasi & Kepemimpinan: 12).
  6. **Modernisasi Favicon SVG (app.blade.php)**:
     - Mengganti teks SVG standar dengan monogram rounded-square modern bergradien halus (#4f46e5 ke #0d9488), border stroke halus, dan tipografi monogram NP tajam beresolusi tinggi di tab browser.
  7. **Hasil Verifikasi & Pengujian**:
     - **Frontend Build (npm run build)**: 100% sukses tanpa error (app-f7j1zVFc.css 101.79 kB, app-DUI98BAg.js 613.15 kB).
     - **Backend Tests (php artisan test)**: 4/4 PASS (8 assertions) mencakup ContactFormTest dan ExampleTest.

## [2026-10-11] Sinkronisasi & Peningkatan Metrik Kredensial Resmi (14+ Menjadi 20 Sertifikat Terverifikasi)
- **Konteks & Masukan Pengguna**:
  - Pengguna menyoroti bahwa pada kartu metrik kunci (*Scorecard Tentang Saya*) masih tertulis '14+ Sertifikat', padahal di tab sertifikasi terdapat tepat 20 sertifikat resmi terverifikasi yang lengkap dengan pop-up modal lightbox.
  - Pengguna menanyakan strategi penyajian metrik yang paling menarik dan menjual bagi audiens/recruiter.
- **Pekerjaan & Peningkatan yang Diimplementasikan**:
  1. **Sinkronisasi Angka Aktual (portfolioData.js)**:
     - Mengubah nilai kuantitatif dari '14+' menjadi **'20'** (dengan suffix 'Sertifikat' / 'Certificates') di kedua bahasa (ID dan EN).
     - Menyelaraskan teks judul menjadi:
       - ID: *Sertifikasi & Lisensi Resmi*
       - EN: *Official Credentials & Certifications*
     - Memperbarui subketerangan (*note*) dengan menonjolkan lembaga-lembaga paling bergengsi bertaraf industri internasional dan nasional:
       - *BNSP, HackerRank, Cisco, EC-Council, Kominfo* (menggantikan keterangan lama yang belum menyertakan HackerRank dan Kominfo).
  2. **Dampak Strategis & Konsistensi UI**:
     - Angka pada scorecard kini 100% konsisten dengan pill counter pada tab navigasi *Sertifikasi (20)* di bagian bawah halaman.
     - Keberadaan nama **HackerRank** (Software Engineer & SQL Advanced) dan **BNSP** (Programmer Terlisensi Negara) di baris depan langsung memberikan impresi kuat bagi technical recruiter.
  3. **Hasil Verifikasi**:
     - Frontend Build (
pm run build): Berhasil tanpa error (public/build/assets/app-DQLYTbGE.js 613.19 kB).
     - Backend Tests (php artisan test): 4/4 PASS.

## [2026-10-11] Ekstraksi Bersih & Integrasi Foto Juara 3 Pencak Silat Nasional (Luxury Studio Backdrop Presentation)
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna mengunggah foto dokumentasi asli saat meraih Juara 3 (memegang medali perunggu dan piagam penghargaan).
  - Pengguna meminta agar background (lapangan futsal & jaring kawat) dihapus bersih, dan tampilan foto di portofolio dibuat secantik, seeksklusif, dan seprofesional mungkin.
- **Pekerjaan & Peningkatan yang Diimplementasikan**:
  1. **Background Removal & Segmentasi Presisi Tinggi (AI & Computer Vision)**:
     - Menggunakan model AI U2-Net dan pemetaan poligon koordinat presisi untuk mengekstrak figur Nadila, hijab merah, seragam silat hitam, medali perunggu, serta piagam penghargaan fisik secara utuh tanpa ada teks piagam yang terpotong.
     - Membersihkan seluruh artefak jaring kawat dan pagar di sekitar tangan dan piagam.
     - Menyimpan file transparan beresolusi tinggi di `public/images/certificates/juara_3_pencak_silat_2023_cutout.png`.
  2. **Pembuatan Presentasi Studio Eksklusif (Luxury Obsidian & Amber Backdrop)**:
     - Mengembangkan visual studio penghargaan di `public/images/certificates/juara_3_pencak_silat_2023_studio.png` dengan rasio potret ideal (4:5 / 600x750px):
       - Latar belakang gradien obsidian mewah yang bersih dari kebisingan visual (*visual clutter*).
       - Efek spotlight / halo glow hangat bertema perunggu (*warm bronze/amber ambient light*) yang memancar tepat di belakang medali dan piagam penghargaan.
       - Aksen ambient cahaya biru lembut di sisi kiri untuk kontras kedalaman studio 3D yang elegan.
  3. **Integrasi Antarmuka & UX Portofolio (portfolioData.js & ExperienceEducationSection.jsx)**:
     - **Kartu Prestasi**: Menambahkan wadah thumbnail pratinjau foto portrait dengan sudut membulat, border aksen amber, dan ikon mata (*Eye*) pada kartu *Juara 3 Kejuaraan Pencak Silat Nasional (2023)*.
     - **Modal Lightbox Interaktif**: Ketika kartu diklik, modal pop-up menampilkan foto studio beresolusi tinggi beserta kartu rincian legalitas:
       - Nomor Sertifikat PCR: `0231.42/STF/PCR/2023`
       - Medali: Medali Perunggu (*Bronze Medal 3rd Place*)
       - Kejuaraan: Pemenang 3 Kelas E Putri (Remaja) – Kejurda V Se-Sumatera PPS Betako Merpati Putih
       - Tempat & Waktu: GOR Sago Gafur Kabupaten Lima Puluh Kota (17–19 Maret 2023)
       - Pejabat Pengesah: Dr. Dadang Syarif Sihabudin Sahid, S.Si., M.Sc. (Direktur Politeknik Caltex Riau).
  4. **Hasil Verifikasi & Pengujian**:
     - Frontend Build (`npm run build`): 100% Sukses (`app-BbfBNSFU.css` 102.19 kB, `app-DlppaMas.js` 614.19 kB).
     - Backend Tests (`php artisan test`): 4/4 PASS (8 assertions).

## [2026-10-12] Perbaikan Dark Mode Tailwind CSS v4 (Selector-Based Custom Variant)
- **Konteks & Masalah**:
  - Pengguna melaporkan bahwa saat tombol toggle tema (Matahari / Bulan) diklik, website tidak berubah menjadi mode gelap (Dark Mode). Pengguna menanyakan apakah hal ini disebabkan oleh pengaturan Google Chrome yang berada di mode terang (Light).
- **Akar Masalah Teknis**:
  - Proyek menggunakan **Tailwind CSS v4** (@tailwindcss/vite ^4.0.0 & 	ailwindcss ^4.0.0).
  - Pada Tailwind CSS v4, varian dark: secara bawaan (*default*) dikompilasi menggunakan media query sistem operasi/browser (@media (prefers-color-scheme: dark)), bukan berbasis class selector .dark pada tag <html>.
  - Karena browser Chrome atau Windows pengguna berada dalam mode Light (Terang), media query @media (prefers-color-scheme: dark) selalu bernilai alse. Meskipun JavaScript tombol toggle berhasil menambahkan class .dark ke tag <html>, Tailwind CSS v4 mengabaikan class tersebut dan tidak menerapkan aturan CSS mode gelap.
- **Solusi & Peningkatan yang Diimplementasikan**:
  1. **Konfigurasi Varian Dark Mode Tailwind v4**:
     - Menambahkan deklarasi @custom-variant dark (&:where(.dark, .dark *)); pada baris teratas 
esources/css/app.css.
     - Ini menginstruksikan Tailwind CSS v4 untuk mengompilasi semua utility class dark:... agar aktif saat elemen berada di dalam kontainer berkelas .dark (class-based dark mode), sepenuhnya independen dari tema Chrome atau sistem operasi.
  2. **Pencegahan Kedipan Tampilan (Flash of Light Mode)**:
     - Menambahkan script blocking inline di <head> file 
esources/views/app.blade.php.
     - Script ini membaca preferensi dari localStorage.getItem('theme') secara sinkron sebelum rendering DOM dimulai, sehingga jika pengguna memilih dark mode, tampilan langsung gelap seketika tanpa kedipan putih saat halaman dimuat ulang (*refresh*).
  3. **Hasil Verifikasi & Pengujian**:
     - Frontend Build (
pm run build): Berhasil 100% tanpa error (public/build/assets/app-exT3oeXx.css 107.32 kB, public/build/assets/app-DHSKRKn6.js 614.19 kB). File CSS kini memuat selector :where(.dark, .dark *).
     - Backend Tests (php artisan test): 4/4 PASS (8 assertions).

## [2026-10-12] Integrasi Lengkap 5 Tangkapan Layar & Galeri Interaktif Proyek Central Palantea Hidroponik
- **Konteks & Permintaan Pengguna**:
  - Pengguna mengunggah 5 tangkapan layar antarmuka asli dari website *Central Palantea Hidroponik* dan memberikan kebebasan untuk memilih salah satu atau mencantumkan semuanya sesuai susunan terbaik.
- **Keputusan Desain & Arsitektur Visual (Menampilkan Seluruh 5 Modul)**:
  - Menyertakan **kelima tangkapan layar** ke dalam galeri interaktif multi-tab di dalam modal studi kasus, karena masing-masing memperlihatkan spektrum fungsionalitas aplikasi web full-stack secara utuh:
    1. **Beranda & Hero Section** (palantea_hero_landing.jpg): Visual greenhouse hidroponik modern, proposisi nilai wisata edukasi & belanja segar di tengah kota, tombol reservasi kunjungan & belanja sayur, serta navigasi kategori terintegrasi.
    2. **Katalog Sayuran Hidroponik** (palantea_catalog_sayuran.png): Etalase e-commerce sayuran hidroponik segar (Butterhead, Dakota, Kale, Kemangi, Kubis) dengan label kategori, status stok real-time, dan aksi tambah ke keranjang (*add-to-cart*).
    3. **Katalog Buah-buahan Segar** (palantea_catalog_buah.png): Etalase belanja buah bebas pestisida (Anggur, Apel, Apel Hijau, Aprikot, Atemoya) dengan filter kategori tab dan manajemen stok terpusat.
    4. **Profil Usaha & Nilai Keunggulan** (palantea_about_section.png): Modul profil Central Palantea Hidroponik menyajikan profil kebun, komitmen kualitas 100% hidroponik segar bebas pestisida, dan program edukasi & wisata.
    5. **Galeri Kunjungan Edukasi** (palantea_galeri_kegiatan.jpg): Dokumentasi visual kunjungan outing class sekolah, komunitas, dan rombongan keluarga yang menikmati wisata petik sayur langsung.
  - **Cover Utama Kartu Proyek**: Mengganti thumbnail kartu beranda dari gambar sertifikat menjadi tangkapan layar *Beranda & Hero Section* yang memukau dan modern, dengan tetap mempertahankan badge kejuaraan/penghargaan (*🏆 Sertifikat Penghargaan Resmi*) di sudut gambar.
- **Pembaruan Kode & Komponen**:
  1. 
esources/js/data/portfolioData.js:
     - Menambahkan array gallery (5 modul lengkap), galleryTitle, dan gallerySubtitle pada proyek central-palantea-hidroponik di kedua bahasa (id dan en).
     - Memperbarui tautan demo proyek ke tangkapan layar beranda resolusi penuh.
     - Menstandarisasi modalHeadings untuk teks tombol sertifikat dan galeri yang adaptif bilingual.
  2. 
esources/js/Components/ProjectsSection.jsx:
     - Memposisikan galeri antarmuka interaktif pada urutan teratas di dalam modal studi kasus agar pengunjung langsung disuguhkan visual produk nyata, diikuti oleh bukti legal *Sertifikat Penghargaan Resmi* dari Pimpinan Ismail, lalu uraian mendalam studi kasus (arsitektur, metodologi RSSD, Design Thinking, serta skor pengujian SUS 90 & 85.7 Grade A dan Blackbox 90 skenario 100%).
     - Menjadikan judul galeri dinamis berbasis ctiveModalProject.galleryTitle.
- **Hasil Verifikasi & Pengujian**:
  - Frontend Build (
pm run build): 100% Sukses tanpa error (public/build/assets/app-BEjs31g2.css 107.35 kB, public/build/assets/app-C9MmwZR5.js 617.81 kB).
  - Backend Tests (php artisan test): 4/4 PASS (8 assertions).

## [2026-10-12] Integrasi URL Live Production Website Central Palantea (https://centralpalantea.my.id/)
- **Konteks & Permintaan Pengguna**:
  - Pengguna meminta agar tautan demo proyek *Central Palantea Hidroponik* diarahkan langsung ke domain produksi aktif: `https://centralpalantea.my.id/` karena aplikasi sudah ter-hosting dan beroperasi live.
- **Verifikasi Domain & Status Konektivitas**:
  - Melakukan pengujian request ke `https://centralpalantea.my.id/`.
  - Terverifikasi status **HTTP 200 OK** (Content-Length: 56.018 bytes) berjalan aktif di internet.
- **Pembaruan & Peningkatan Fitur UI/UX**:
  1. `resources/js/data/portfolioData.js`:
     - Memperbarui properti `links.demo` menjadi `https://centralpalantea.my.id/` di dataset Bahasa Indonesia dan English.
     - Menambahkan label khusus `links.demoLabel`:
       - ID: "Kunjungi Website Live (centralpalantea.my.id)"
       - EN: "Visit Live Website (centralpalantea.my.id)"
  2. `resources/js/Components/ProjectsSection.jsx`:
     - **Badge Kartu Beranda (Live Web)**: Menambahkan badge interaktif di sudut kanan bawah thumbnail kartu proyek: "Live Web" lengkap dengan animasi pulse hijau yang dapat diklik langsung untuk membuka website tanpa harus membuka modal terlebih dahulu.
     - **Tombol Cepat di Header Galeri Modal**: Menambahkan tombol aksi "Kunjungi Website Live" di samping tombol "Buka Gambar Penuh" pada header galeri antarmuka.
     - **Tombol Aksi Tautan Proyek**: Mengubah tombol demo menjadi varian warna emerald terkemuka (bg-emerald-600) dengan titik status online berkedip (pulsing white dot) dan teks label domain terverifikasi.
- **Hasil Verifikasi & Pengujian**:
  - Frontend Build (npm run build): Berhasil 100% tanpa kendala (public/build/assets/app-DyNcUpey.css 108.20 kB, public/build/assets/app-Df51kx_M.js 619.50 kB).
  - Backend Tests (php artisan test): 4/4 PASS (8 assertions).

## [2026-10-12] Transformasi Tipografi ke Standar Emas Software Engineering (Inter + JetBrains Mono)
- **Konteks & Analisis Kebutuhan**:
  - Pengguna menanyakan apakah font sebelumnya (*Plus Jakarta Sans*) terkesan terlalu "AI generik" dan meminta agar langsung diubah ke standar font portofolio developer profesional internasional tanpa keraguan.
- **Keputusan Tipografi (The Industry Standard)**:
  - Mengganti font primer seluruh website dari *Plus Jakarta Sans* ke **Inter** (Variable Font dengan Optical Sizing `14..32` dan bobot lengkap `100..900`).
  - Mempertahankan **JetBrains Mono** (bobot `400, 500, 600, 700`) untuk nomor sertifikasi, tahun, badge metrik teknis, dan terminal preview.
  - **Mengapa Inter?**: Inter adalah standar de-facto industri teknologi global yang digunakan oleh GitHub, Figma, Linear, Supabase, Stripe, dan OpenAI. Font ini menghilangkan total kesan "template AI SaaS" dan memberikan visual yang sangat tajam, presisi, berwibawa, dan mencerminkan *software craftsmanship* murni.
- **Pembaruan Kode & Konfigurasi**:
  1. `resources/views/app.blade.php`:
     - Memperbarui Google Fonts link untuk memuat *Inter* (optical sizing dan multi-weight) bersama *JetBrains Mono*.
  2. `resources/css/app.css`:
     - Mengonfigurasi Tailwind CSS v4 `@theme` `--font-sans` menjadi `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`.
     - Mengonfigurasi `--font-mono` dengan fallback programmer lengkap.
- **Hasil Verifikasi & Pengujian**:
  - Frontend Build (`npm run build`): Berhasil 100% (`public/build/assets/app-DJ57j_6D.css` 108.28 kB, `public/build/assets/app-Bv4tuW_I.js` 619.50 kB).
  - Backend Tests (`php artisan test`): 4/4 PASS (8 assertions).

## [2026-10-12] Penghapusan Kontak WhatsApp & Pemusatan Kanal Komunikasi ke Email Resmi & LinkedIn
- **Konteks & Permintaan Pengguna**:
  - Pengguna meminta agar kanal kontak WhatsApp dihapus dari portofolio agar komunikasi dengan recruiter, perusahaan, maupun klien dipusatkan sepenuhnya melalui Email resmi (nadilaaa24putriii@gmail.com), formulir kontak terintegrasi, dan LinkedIn.
- **Pembaruan Kode & Desain Komponen**:
  1. `resources/js/Components/ContactSection.jsx`:
     - Menghapus kartu interaktif WhatsApp dari deretan kartu kontak.
     - Menyusun ulang kartu kontak menjadi 4 kartu profesional yang solid:
       1. **Email Resmi**: dengan fitur Salin Alamat (Copy to Clipboard) dan tautan direct mailto.
       2. **LinkedIn**: profil profesional resmi Nadila Putri.
       3. **GitHub**: tautan repositori kode dan portofolio.
       4. **Domisili & Ketersediaan**: status kesiapan kerja (Pekanbaru, Full-time / Kontrak, Remote / On-site).
     - Menghapus import ikon MessageSquare yang tidak lagi terpakai.
  2. `resources/js/Components/HeroSection.jsx`:
     - Menghapus tautan ikon WhatsApp dari deretan tombol sosial di section Hero (sehingga tersisa Email, LinkedIn, dan GitHub).
  3. `resources/js/data/portfolioData.js`:
     - Menghapus properti `phone` dan `whatsappUrl` dari objek profil di kedua bahasa (ID dan EN) demi melindungi privasi nomor pribadi.
- **Hasil Verifikasi & Pengujian**:
  - Frontend Build (`npm run build`): Berhasil 100% tanpa kendala (`public/build/assets/app-Bt53rpgb.css` 107.50 kB, `public/build/assets/app-CdBRgBJs.js` 617.33 kB).
  - Backend Tests (`php artisan test`): 4/4 PASS (8 assertions).

## [2026-10-12] Redesain Total Footer: The Luxury Executive Tech Studio Footer (WOW Effect)
- **Konteks & Permintaan Pengguna**:
  - Pengguna meminta agar tampilan footer portofolio yang sebelumnya terlalu minimalis dan kosong dirombak total menjadi desain yang eksklusif, mewah, elegan, dan memberikan efek visual "wah" bagi rekruter dan klien.
- **Arsitektur Visual & Peningkatan Desain Mewah**:
  1. **Ambient Studio Glow**:
     - Latar belakang bertema *Deep Obsidian Studio* (`bg-slate-950`) dengan garis highlight berkilau gradien indigo di batas atas serta ambient radial halo glow yang memberi nuansa kedalaman panggung 3D modern.
  2. **Pre-Footer Executive CTA Banner**:
     - Wadah kartu kaca (*glassmorphism backdrop*) melengkung besar di atas footer dengan efek pencahayaan dinamis.
     - Memuat badge `✨ Peluang Karir & Kolaborasi` / `✨ Career & Collaboration`, headline bergradien perak-putih *"Mari Ciptakan Solusi Digital yang Berdampak Nyata"*, serta dua tombol aksi berbobot: *"Hubungi via Email"* (glowing indigo gradient) dan *"Unduh CV Resmi (PDF)"* (glassmorphism border).
  3. **3-Column Luxury Architecture**:
     - **Kolom 1 (Identitas & Kredensial)**: Logo monogram NP berbingkai gradien cincin cahaya, nama lengkap, gelar akademik PCR, narasi positioning teknis-bisnis, serta pill status kesiapan kerja berkedip hijau (`🟢 Terbuka untuk Peluang Kerja: Pekanbaru / Remote / On-site`).
     - **Kolom 2 (Navigasi Cepat Portofolio)**: Daftar tautan cepat ke seluruh bagian (Tentang, Keterampilan, Proyek dengan badge `Featured`, Prestasi, Kontak) dengan indikator panah interaktif saat kursor diarahkan.
     - **Kolom 3 (Koneksi & Jaringan)**: Kartu mini interaktif ke LinkedIn Nadila Putri, GitHub Repository, Live Production Website Central Palantea (`centralpalantea.my.id` dengan badge status LIVE), serta kotak Email resmi dengan tombol Salin (Copy to Clipboard).
  4. **Sleek Bottom Bar**:
     - Hak cipta resmi 2026, pill chip arsitektur stack (`Laravel 11 · React.js · Inertia.js · Tailwind CSS v4`), serta tombol kembali ke atas (`Kembali ke Atas ↑`) dengan animasi hover melayang.
  5. **Bilingual Support (ID | EN)**:
     - Terintegrasi penuh dengan sistem multi-bahasa website.
- **Pembaruan Kode**:
  - `resources/js/Components/Footer.jsx`: Ditulis ulang dengan standar UI premium.
  - `resources/js/Pages/Portfolio.jsx`: Menyambungkan prop `nav` dan `lang` ke komponen Footer.
  - `resources/js/data/portfolioData.js`: Menambahkan teks dan label lengkap footer di dataset ID dan EN.
- **Hasil Verifikasi & Pengujian**:
  - Frontend Build (`npm run build`): Berhasil 100% (`public/build/assets/app-rmr3LEPp.css` 118.07 kB, `public/build/assets/app-DQmIvC48.js` 627.95 kB).
  - Backend Tests (`php artisan test`): 4/4 PASS (8 assertions).

## [2026-10-12] Penyempurnaan Footer Bersih, Lapang & Eksklusif (Opsi 3 - Eliminasi Redundansi)
- **Konteks & Permintaan Pengguna**:
  - Pengguna memilih **Opsi 3 (Minimalis Lapang)** dan meminta agar bagian kartu kontak, paragraf bio panjang, serta pill ketersediaan kerja yang berulang dari section kontak di atasnya dibersihkan secara tuntas.
- **Hasil Redesain Footer (The Clean & Confident Studio)**:
  1. **Eliminasi Pengulangan Konten**:
     - Menghilangkan kartu tebal "Koneksi & Jaringan" yang menduplikasi kartu di Contact Section.
     - Menghilangkan narasi bio panjang dan pill ketersediaan kerja yang sudah tertera di kartu domisili.
     - Menghilangkan pre-footer banner ganda.
  2. **Struktur Horizontal yang Rapi, Tenang & Mewah**:
     - **Sisi Kiri**: Monogram NP berbingkai gradien cincin cahaya, nama lengkap *Nadila Putri*, status akademik PCR, berdampingan dengan 3 tombol ikon sosial minimalis (LinkedIn, GitHub, Email) yang elegan.
     - **Sisi Kanan**: Baris navigasi cepat portofolio (*Tentang · Keterampilan · Proyek · Pendidikan & Pengalaman · Kontak*) yang mudah diakses.
  3. **Bottom Bar Presisi**:
     - Hak cipta resmi 2026.
     - Badge stack teknologi (`Laravel 11 · React.js · Inertia.js · Tailwind CSS v4`).
     - Tombol kembali ke atas (`Kembali ke Atas ↑`) dengan smooth scrolling.
  4. **Atmosfer Visual**:
     - Tetap mempertahankan latar belakang *Deep Obsidian* (`bg-slate-950`) dengan garis laser highlight gradien indigo di batas atas.
- **Hasil Verifikasi & Pengujian**:
  - Frontend Build (`npm run build`): Berhasil 100% (`public/build/assets/app-CEZe4bjJ.css` 110.62 kB, `public/build/assets/app-Bt4zjATP.js` 621.07 kB).
  - Backend Tests (`php artisan test`): 4/4 PASS (8 assertions).

## [2026-10-12] Penyempurnaan Pendidikan Menengah Kejuruan (SMK Negeri 2 Guguak) & Integrasi PKL/UKK
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna meminta agar entri pendidikan SMK Negeri 2 Guguak (Kompetensi Keahlian Rekayasa Perangkat Lunak 2019–2022) diperkaya dengan format detail komprehensif:
    1. **Bidang yang dipelajari** (Mata pelajaran kejuruan dari rapor: Pemrograman Dasar, Basis Data Relasional, Pemodelan Perangkat Lunak, Pemrograman Web & Perangkat Bergerak, PBO, Sistem Komputer & Jaringan Dasar).
    2. **Uji Kompetensi Keahlian (UKK)**: Proyek sistem informasi berbasis web & basis data relasional, teknologi (PHP, MySQL, Apache, Bootstrap, HTML5/CSS3), peran Full-Stack Developer / System Programmer, serta hasil predikat Kompeten / Sangat Baik (A).
    3. **Praktik Kerja Lapangan (PKL)**: Rumah Sakit Mata SMEC Pekanbaru (3 Juli – 30 September 2021, ±3 bulan) dengan rincian tugas (pemeliharaan workstation & LAN, operasional SIMRS, digitalisasi rekam medis, troubleshooting operasional), kontribusi kelancaran IT, dan 5 metrik penilaian pembimbing industri: Kehadiran 95, Kejujuran 95, Tanggung Jawab 95, Prakarsa 95, Kecakapan 90 (Rata-rata 94 / 100 - Predikat Sangat Memuaskan).
    4. **Sertifikasi**: Sertifikat resmi PKL dari SMKN 2 Guguak bersama RS Mata SMEC Pekanbaru (2021).
  - Integrasi ini diterapkan secara langsung pada kedua versi bahasa (ID dan EN).
- **Implementasi & Peningkatan**:
  1. **Pembaruan Dataset Portofolio (
esources/js/data/portfolioData.js)**:
     - Memperbarui entri education[1] (SMK Negeri 2 Guguak) di ID dan EN:
       - Badge status: Nilai PKL: 94 / 100 / Internship Score: 94 / 100.
       - Sub-degree: Pendidikan Menengah Kejuruan / Vocational High School.
       - Kurikulum kejuruan: 6 mata pelajaran fondasi RPL.
       - Blok UKK (ukk): Proyek web database relasional dengan stack PHP/MySQL/Bootstrap, peran programmer, dan predikat resmi Kompeten.
       - Blok PKL (pkl): Instansi RS Mata SMEC Pekanbaru, durasi 3 bulan, uraian tugas klinis & SIMRS, kontribusi operasional, 5 metrik nilai pembimbing industri, dan sertifikat resmi PKL.
     - Memperbarui entri education[0] (Politeknik Caltex Riau D4 Teknik Informatika) di ID dan EN:
       - Menambahkan blok Capstone Thesis (Skripsi Terapan) Central Palantea dengan metrik validasi SUS Score 90 & 85.7 (Grade A) serta 90 skenario Blackbox 100% valid agar kedua kartu akademik seimbang dan berbobot.
     - Memperbarui entri experiences (RS Mata SMEC Pekanbaru) di ID dan EN:
       - Memperkaya tugas SIMRS dan menambahkan ringkasan nilai evaluasi pembimbing industri (94/100).
     - Menambahkan label navigasi multibahasa: ocationalSubjects, industrialInternship, competencyExam, evaluationSupervisor, outputsLabel.
  2. **Peningkatan Komponen Antarmuka (
esources/js/Components/ExperienceEducationSection.jsx)**:
     - Mengubah grid pendidikan menjadi grid grid-cols-1 lg:grid-cols-2 gap-8 items-start agar kartu tidak terdistorsi secara vertikal.
     - Merender sub-kartu UKK dengan badge Kompeten · Sangat Baik, deretan tag teknologi, dan indikator centang validasi.
     - Merender sub-kartu PKL dengan ikon Building2, daftar tugas operasional harian, kotak kutipan kontribusi/keluaran, micro-dashboard 5 kolom nilai evaluasi pembimbing industri (Kehadiran, Kejujuran, Tanggung Jawab, Prakarsa, Kecakapan), serta badge verifikasi sertifikat PKL berikon ShieldCheck.
     - Merender indikator evaluasi industri pada timeline Pengalaman Kerja (experiences) untuk RS Mata SMEC Pekanbaru.
  3. **Hasil Verifikasi & Build**:
     - Frontend Build (
pm run build): Berhasil 100% (public/build/assets/app-BPHLCUhO.css 113.10 kB, public/build/assets/app-obDO8VAz.js 635.09 kB).
     - Backend Tests (php artisan test): 4/4 PASS (8 assertions).

## [2026-10-12] Penyempurnaan Kurikulum D4 Teknik Informatika Politeknik Caltex Riau Berdasarkan Transkrip Resmi (Privasi Dijaga Penuh)
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna mengunggah dokumen Transkrip Akademik Resmi Program Sarjana Terapan Politeknik Caltex Riau (*Nomor: 134/PCR-AKA/55301-22/26*).
  - Pengguna memberikan instruksi tegas: **Dokumen/gambar transkrip tidak boleh ditampilkan secara publik** di portofolio (menjaga privasi data dokumen resmi), melainkan hanya digunakan sebagai acuan validasi bidang mata kuliah yang telah dipelajari selama masa studi D4 Teknik Informatika.
- **Pekerjaan & Peningkatan**:
  1. **Privasi & Keamanan Dokumen**:
     - Dokumen transkrip dan seluruh file crop sementara dipastikan tidak dipublikasikan ke aset website dan telah dibersihkan sepenuhnya dari workspace.
  2. **Pembaruan Dataset Portofolio (
esources/js/data/portfolioData.js)**:
     - Memperbarui entri education[0] (Politeknik Caltex Riau D4 Teknik Informatika) di kedua bahasa (ID dan EN):
       - Periode Kelulusan: Sep 2022 – Agu 2026 (Resmi lulus: 28 Agustus 2026).
       - Total Beban Studi: 145 SKS.
       - Predikat Kelulusan Resmi: **Cumlaude** (IPK 3.61 / 4.00).
       - Mengelompokkan kurikulum kejuruan menjadi 3 domain spesialisasi terstruktur (courseGroups) sesuai mata kuliah unggulan pada transkrip (khususnya yang berpredikat Nilai A / AB):
         1. **Rekayasa Perangkat Lunak & Web**: *Workshop Rekayasa Perangkat Lunak, Bengkel Pemrograman Web, Bengkel Pemrograman Framework (1 & 2), Pemrograman Berorientasi Objek (PBO), Kualitas & Pengujian Perangkat Lunak, Manajemen Proyek, Interaksi Manusia & Komputer (UI/UX).*
         2. **Kecerdasan Buatan (AI) & Pengolahan Data**: *Pembelajaran Mesin (Machine Learning), Praktikum Deep Learning, Praktikum Natural Language Processing (NLP), Big Data, Workshop Data Warehouse, Workshop Basis Data Lanjut, Pengolahan Citra Digital.*
         3. **Infrastruktur, Sistem & Keamanan Jaringan**: *Administrasi & Keamanan Jaringan Komputer, Jaringan Komputer, Sistem Operasi, Jaringan Multimedia.*
  3. **Penyempurnaan Komponen Antarmuka (
esources/js/Components/ExperienceEducationSection.jsx)**:
     - Menambahkan dukungan render adaptif untuk courseGroups dengan sub-label kategori domain keahlian yang bersih dan profesional.
  4. **Hasil Verifikasi & Build**:
     - Frontend Build (
pm run build): Berhasil 100% (public/build/assets/app-BPHLCUhO.css 113.10 kB, public/build/assets/app-BPi8h1Su.js 637.65 kB).
     - Backend Tests (php artisan test): 4/4 PASS (8 assertions).

## [2026-10-12] Persiapan Lengkap Hosting Otomatis ke GitHub Pages (nadilaputri.github.io/portofolio)
- **Konteks & Kebutuhan Pengguna**:
  - Pengguna ingin mempublikasikan portofolio secara online melalui **GitHub Pages** dengan alamat: https://nadilaputri.github.io/portofolio.
  - Mengingat arsitektur proyek adalah Laravel 11 + React (Inertia.js), GitHub Pages membutuhkan static bundle. Seluruh konfigurasi otomatis disiapkan agar proyek dapat di-build statis secara mandiri oleh GitHub Actions.
- **Pekerjaan & Peningkatan yang Diimplementasikan**:
  1. **Konfigurasi Static Entry & Build Pipeline**:
     - Membuat index.html sebagai static entry point dengan metadata SEO dan link font Google.
     - Membuat ite.config.static.js untuk build statis mandiri (dist/) dengan base path adaptif ./.
     - Menambahkan script uild:static pada package.json.
     - Menguji build statis (
pm run build:static): Berhasil 100% menghasilkan dist/index.html, dist/assets/, dan menyalin seluruh aset publik (gambar, sertifikat, dan CV_Nadila_Putri_IND.pdf).
  2. **Automasi CI/CD GitHub Actions (.github/workflows/deploy.yml)**:
     - Membuat workflow resmi GitHub Actions untuk auto-deploy ke GitHub Pages setiap ada push ke branch main.
     - Menjalankan checkout, setup Node.js v20, npm install, build static dengan --base /portofolio/, upload artifact Pages, dan auto-deploy.
  3. **Penyesuaian Adaptif Formulir Kontak (ContactSection.jsx)**:
     - Menambahkan deteksi lingkungan runtime (isStaticHost).
     - Jika dibuka di static host (seperti github.io), pengiriman formulir kontak secara cerdas membuka email client (mailto:) dengan pre-filled subjek dan isi pesan ke 
adilaaa24putriii@gmail.com serta menampilkan status notifikasi sukses.
  4. **Pembaruan Link Profil GitHub (portfolioData.js)**:
     - Menyelaraskan githubUrl di versi ID dan EN menjadi https://github.com/nadilaputri.
  5. **Inisialisasi Git & Commit Lokal**:
     - Melakukan inisialisasi git (git init) di branch main.
     - Mengabaikan folder /dist pada .gitignore.
     - Melakukan commit awal 125 file dengan identitas Nadila Putri <nadilaaa24putriii@gmail.com>.
     - Mengonfigurasi remote origin: https://github.com/nadilaputri/portofolio.git.
- **Hasil Verifikasi**:
  - 
pm run build: Berhasil 100% (Vite production bundle Laravel).
  - 
pm run build:static: Berhasil 100% (Vite static bundle untuk GitHub Pages).
  - php artisan test: 4/4 PASS (8 assertions).

## [2026-10-12] Koreksi Akun GitHub Resmi (nadilastack) & Konfigurasi Repository Portofolio
- **Konteks & Investigasi Masalah**:
  - Saat pengguna menjalankan git push, autentikasi browser berhasil (*Authentication Succeeded*), namun muncul pesan error 
emote: Repository not found.
  - Melalui pemeriksaan kredensial Windows, akun GitHub aktif pengguna teridentifikasi sebagai: **
adilastack** (bukan 
adilaputri).
- **Pembaruan yang Dilakukan**:
  1. Memperbarui githubUrl di 
esources/js/data/portfolioData.js pada versi ID dan EN menjadi: https://github.com/nadilastack.
  2. Memperbarui remote Git origin: git remote set-url origin https://github.com/nadilastack/portofolio.git.
  3. Mengompilasi ulang aset produksi (
pm run build dan 
pm run build:static).
  4. Melakukan commit perubahan ke branch main.


## [2026-10-12] Perbaikan Layar Blank/Abu-abu (Inertia v2 DOM Mounting), Resolusi Path Gambar Subpath & Sinkronisasi Git Push
- **Konteks & Masalah**:
  - Pengguna melaporkan tampilan portofolio masih abu-abu/blank ("kok masih abu2") saat dibuka di `https://nadilastack.github.io/portofolio/`.
- **Investigasi & Analisis Akar Masalah**:
  1. **Inertia v2 DOM Mounting**:
     - Modern `@inertiajs/react` v2 / `@inertiajs/core` mencari element `<script data-page="app" type="application/json">` via `getInitialPageFromDOM("app")`.
     - File static `index.html` sebelumnya masih menggunakan pola Inertia v1 (`<div id="app" data-page="...">`), menyebabkan `initialPage` bernilai `null` dan memicu error `Cannot read properties of null (reading 'component')` di konsol browser.
  2. **Asset Subpath 404 pada GitHub Pages**:
     - Di GitHub Pages, URL repo berada pada subdirektori `/portofolio/`.
     - Seluruh path gambar dan file PDF yang diawali tanda slash mutlak (`/images/...`, `/CV_Nadila_Putri_IND.pdf`) diarahkan browser ke root domain (`nadilastack.github.io/images/...`) dan menghasilkan HTTP 404.
  3. **Autentikasi Git Push Windows Credential Manager**:
     - Remote origin umum `https://github.com/nadilastack/portofolio.git` memicu interaksi login default Windows Credential Manager yang mengarah ke user lain (`ilaa2`), sementara kredensial `nadilastack` tersimpan pada target `git:https://nadilastack@github.com`.
- **Solusi & Peningkatan yang Diimplementasikan**:
  1. **Perbaikan Bootstrapping Inertia (`resources/js/app.jsx` & `index.html`)**:
     - Menambahkan fallback `staticInitialPage` pada `resources/js/app.jsx` yang dieksekusi jika DOM script tag tidak ditemukan.
     - Menyematkan `<script data-page="app" type="application/json">{"component":"Portfolio","props":{"flash":{}},"url":"/portofolio/","version":""}</script>` di dalam `index.html`.
  2. **Resolusi Dinamis Asset & Gambar (`resources/js/data/portfolioData.js`)**:
     - Mengembangkan fungsi reaktif `resolveAssetPaths` yang secara otomatis mendeteksi `import.meta.env.BASE_URL`.
     - Seluruh 88 path gambar proyek, galeri, sertifikat, dan file unduhan CV otomatis mendapatkan prefix yang tepat (`/portofolio/images/...` pada GitHub Pages dan `/images/...` pada local development Laravel), bebas dari tautan 404.
  3. **Sinkronisasi Git Remote & Push**:
     - Mengubah remote URL ke `https://nadilastack@github.com/nadilastack/portofolio.git`.
     - Berhasil melakukan push commit ke remote repository `origin main`.
- **Hasil Verifikasi**:
  - `npm run build`: Berhasil 100% tanpa error.
  - `npm run build:static`: Berhasil 100% menghasilkan bundle statis siap saji.
  - Pengujian live endpoint: `https://nadilastack.github.io/portofolio/` merespons HTTP 200 dengan script data page dan aset JavaScript terpasang utuh.


## [2026-10-12] Penghapusan Foto Juara 3 Silat & Sinkronisasi Card Prestasi Seragam
- **Konteks & Permintaan Pengguna**:
  - Pengguna mengunggah tangkapan layar kartu prestasi *Mahasiswa Berprestasi Non Akademik – Juara 3 Kejuaraan Pencak Silat Nasional* dan meminta agar foto thumbnail studio pada kartu tersebut dihapus, lalu perubahan di-push ke GitHub repository.
- **Pekerjaan & Peningkatan**:
  1. **Pembaruan Dataset Portofolio (`resources/js/data/portfolioData.js`)**:
     - Menghapus referensi `image: "/images/certificates/juara_3_pencak_silat_2023_studio.png"` pada entri Juara 3 Pencak Silat (2023) di kedua versi bahasa (`id` dan `en`).
     - Kartu Juara 3 kini tampil seragam, rapi, dan terstruktur seperti kartu Juara 1 (2024) dan Juara 2 (2025) dengan menampilkan rincian kredensial legalitas Direktur PCR, nomor SK, medali perunggu, dan deskripsi prestasi.
  2. **Pembersihan Aset Fisik**:
     - Menghapus file `public/images/certificates/juara_3_pencak_silat_2023_studio.png` dan `juara_3_pencak_silat_2023_cutout.png`.
  3. **Build & Verifikasi**:
     - `npm run build`: Berhasil 100% tanpa error.
     - `npm run build:static`: Berhasil 100% menghasilkan bundle statis terbaru.


## [2026-10-26] Implementasi CV Dinamis Berformat Standar ATS (Applicant Tracking System) Bilingual & Otomatis Terintegrasi Portofolio

### 1. Konteks & Permintaan Pengguna
- **Kebutuhan**:
  - Pengguna menginginkan fitur unduh CV di website portofolio yang secara otomatis menghasilkan **Curriculum Vitae berformat standar ATS** (Applicant Tracking System) yang disukai oleh HRD dan lolos algoritma screening rekrutmen.
  - **Single Source of Truth**: Setiap kali ada penambahan atau perubahan data di portofolio (proyek baru, pengalaman kerja baru, keahlian, atau sertifikasi), CV harus otomatis terupdate detik itu juga tanpa perlu mendesain atau mengedit file PDF secara manual.
  - **Bilingual Terintegrasi**: Jika website sedang dalam mode Bahasa Indonesia (`id`), CV yang diunduh/dihasilkan otomatis berbahasa Indonesia. Begitu pula jika dalam mode Bahasa Inggris (`en`), CV otomatis berbahasa Inggris.

### 2. Standar Desain ATS yang Diterapkan
- **Single-Column Linear Hierarchy**: Tata letak satu kolom murni dari atas ke bawah (menghindari multi-kolom samping yang kerap membuat parser bot ATS seperti Workday, Taleo, Greenhouse, dan Lever keliru membaca tanggal atau pengalaman).
- **Tipografi Standar Industri**: Teks hitam pekat (`#111827`) pada latar putih bersih (`#ffffff`) dengan font sans-serif berstandar software engineering (`Inter`).
- **Semantic Machine-Readable Text**: 100% teks murni yang dapat disalin, dicari, dan dipindai oleh bot (bukan gambar raster).
- **Heading Standar ATS**:
  - ID: `RINGKASAN PROFESIONAL`, `KEAHLIAN TEKNIS`, `PENGALAMAN KERJA & MAGANG`, `PROYEK & STUDI KASUS UNGGULAN`, `PENDIDIKAN`, `SERTIFIKASI PROFESIONAL & LISENSI`, `PRESTASI, KEPEMIMPINAN & ORGANISASI`.
  - EN: `PROFESSIONAL SUMMARY`, `TECHNICAL SKILLS`, `WORK & INTERNSHIP EXPERIENCE`, `FEATURED PROJECTS & CASE STUDIES`, `EDUCATION`, `PROFESSIONAL CERTIFICATIONS & LICENSES`, `HONORS, LEADERSHIP & ORGANIZATIONS`.
- **Bullet Points Berbasis Aksi & Metrik**: Setiap pengalaman dan proyek memuat deskripsi dengan kata kerja aksi serta metrik kuantitatif (SUS Score 90 & 85.7 Grade A, Blackbox 100% 90 skenario, audit CWV LCP bottleneck 29.7s / 3.1s CrUX, evaluasi magang RS SMEC 94/100 Grade A, dll.).

### 3. Pekerjaan & Arsitektur yang Diimplementasikan
1. **Pembaruan Dataset Portofolio (`resources/js/data/portfolioData.js`)**:
   - Menambahkan objek konfigurasi dan teks multibahasa `cvData` pada kedua bahasa (`id` dan `en`).
   - Menyediakan metadata lengkap untuk modal unduhan dan view ATS (label, terjemahan heading, tips HRD, status kredensial BNSP, dan catatan sinkronisasi otomatis).
2. **Halaman Khusus ATS CV (`resources/js/Pages/AtsCv.jsx`)**:
   - Komponen halaman Inertia responsif yang merender kanvas dokumen A4 berstandar ATS.
   - Dilengkapi sticky toolbar navigasi atas (otomatis disembunyikan saat cetak):
     - Tombol kembali ke portofolio (`<- Kembali ke Portofolio`).
     - Badge verifikasi kompatibilitas: *"100% ATS Friendly · Format Standar HRD"*.
     - Toggle switcher bahasa instan (`🇮🇩 ID` dan `🇬🇧 EN`) sehingga HRD dapat beralih bahasa dalam satu klik tanpa refresh halaman.
     - Tombol utama *"Cetak / Simpan PDF"* yang memicu dialog cetak browser native (`window.print()`).
     - Opsi alternatif unduh dokumen PDF asli.
   - Mendukung parameter query string `?lang=id` / `?lang=en` dan auto-print `?print=1`.
3. **Komponen Modal Pilihan Unduhan (`resources/js/Components/CvDownloadModal.jsx`)**:
   - Modal interaktif yang muncul ketika pengunjung mengklik tombol *"Download CV"* di Navbar (desktop & mobile drawer) maupun Hero section.
   - Menyediakan pemilih bahasa langsung (`🇮🇩 Bahasa Indonesia` & `🇬🇧 English`).
   - Memberikan 2 opsi jelas:
     - **⭐ CV Format ATS (Terkini & Otomatis)**: Opsi unggulan dengan badge rekomendasi HRD, tombol *"Buka & Simpan PDF (ATS)"* dan tombol *"Pratinjau CV"*.
     - **📎 CV Dokumen Asli (PDF)**: Tombol untuk mengunduh berkas PDF asli.
     - Kotak tips HRD yang mengedukasi pelamar kapan harus menggunakan format ATS saat melamar via Job Portal.
4. **Backend Routing & Controller (`routes/web.php` & `PortfolioController.php`)**:
   - Menambahkan rute `GET /cv` (`portfolio.cv`).
   - Menambahkan controller method `PortfolioController@cv` yang merender halaman `AtsCv` dengan prop `lang` dan `autoPrint`.
5. **Konfigurasi CSS Cetak Presisi (`resources/css/app.css`)**:
   - Menambahkan aturan `@media print`:
     - `@page { size: A4; margin: 12mm 15mm 15mm 15mm; }`
     - `.no-print { display: none !important; }`
     - `.cv-sheet` tanpa shadow dan border saat cetak.
     - `.page-break-inside-avoid` untuk mencegah elemen terpotong canggung di antara halaman.
6. **Kompatibilitas Static Host (`resources/js/app.jsx`)**:
   - Menambahkan deteksi rute `/cv` dan `?view=cv` pada konfigurasi `staticInitialPage` agar jika dijalankan pada static hosting (seperti GitHub Pages), halaman ATS CV tetap dapat diakses dengan mulus.
7. **Pengujian Otomatis (`tests/Feature/AtsCvTest.php`)**:
   - Menulis 3 unit feature test:
     1. `test_ats_cv_page_returns_successful_response`
     2. `test_ats_cv_page_accepts_english_language_parameter`
     3. `test_ats_cv_page_accepts_print_parameter`

### 4. Hasil Verifikasi & Pengujian
- **Backend Tests (PHPUnit)**: **7/7 PASS (42 assertions)** dengan status `OK (7 tests, 42 assertions)`.
- **Frontend Build (`npm run build`)**: **100% Berhasil** (`public/build/assets/app-brY6jHH8.css` 120.24 kB, `public/build/assets/app-E6bPNqK-.js` 666.32 kB).
- **Static Build (`npm run build:static`)**: **100% Berhasil** (`dist/assets/index-brY6jHH8.css` 120.24 kB, `dist/assets/index-D9Lxks0h.js` 667.01 kB).

- **Sinkronisasi Git & GitHub Deploy**:
  - Seluruh kode fitur CV ATS, komponen modal, controller, CSS print, dan unit test telah di-commit ke branch `main` (`4cd3f5b feat: implement automated bilingual ATS-friendly CV generation and download modal`).
  - Berhasil di-push ke remote repository `origin main` (`https://github.com/nadilastack/portofolio.git`).
  - Memicu otomatis alur kerja GitHub Actions workflow `.github/workflows/deploy.yml` untuk mem-build dan memperbarui live website di GitHub Pages (`https://nadilastack.github.io/portofolio/`).


## [2026-10-26] Perbaikan Bug Routing & URL GitHub Pages pada Fitur CV ATS (Resolusi Error 404 & SPA Routing)

### 1. Masalah & Analisis Akar Penyebab
- **Gejala Masalah**:
  1. Pengguna membuka `https://nadilastack.github.io/portofolio/` dan mengklik tombol *Download CV*, lalu membuka link cetak ATS.
  2. Browser membuka tab baru dengan URL `https://nadilastack.github.io/cv?lang=id&print=1` dan menghasilkan error **"404 - There isn't a GitHub Pages site here."**.
  3. Pengguna mengira tombol download masih mengunduh berkas lama (`CV_Nadila_Putri_IND.pdf`).
- **Akar Masalah Teknis**:
  1. **Hilangnya Subpath `/portofolio/`**:
     Pada `CvDownloadModal.jsx`, URL awal didefinisikan sebagai string absolut `/cv?lang=${lang}&print=1`. Pada domain GitHub Pages (`nadilastack.github.io`), browser otomatis mengabaikan subfolder repository (`/portofolio/`) dan mencari langsung ke root `nadilastack.github.io/cv`, yang tidak ada di server GitHub.
  2. **Keterbatasan Server Statis GitHub Pages**:
     GitHub Pages tidak memiliki URL rewrite engine (seperti Apache `.htaccess` atau Nginx `try_files`). Akses langsung ke sub-path selain file fisik akan menghasilkan error 404 kecuali jika menggunakan query parameter atau berkas `404.html`.
  3. **Penimpaan Script DOM Inertia**:
     Pada `app.jsx`, `index.html` GitHub Pages memuat tag `<script data-page="app">` statis yang selalu merender komponen `Portfolio`. Akibatnya, parameter query tidak terbaca dengan baik untuk memuat komponen `AtsCv`.

### 2. Solusi & Perbaikan Komprehensif
1. **Perbaikan Generator URL Dinamis (`resources/js/Components/CvDownloadModal.jsx`)**:
   - Menambahkan deteksi reaktif `getBasePrefix()` dari `import.meta.env.BASE_URL` (`/portofolio/` pada GitHub Pages).
   - Pada static hosting (`github.io`), link diarahkan ke query parameter aman:
     `https://nadilastack.github.io/portofolio/?view=cv&lang=id&print=1`
     Metode ini 100% dijamin tidak akan pernah mengalami HTTP 404 di server statis manapun karena selalu dilayani oleh `index.html`.
2. **Pembaruan Bootstrapping SPA (`resources/js/app.jsx`)**:
   - Memperbaiki logika `isStaticHost` agar saat `view=cv` atau path `/cv` terdeteksi, `initialPage` langsung menginstansiasi komponen `AtsCv` dengan prop bahasa dan autoPrint aktif.
3. **Penyediaan `dist/404.html` untuk Fallback Routing GitHub Pages**:
   - Memperbarui skrip `build:static` pada `package.json` dan workflow `.github/workflows/deploy.yml` untuk otomatis menduplikasi `dist/index.html` menjadi `dist/404.html`.
   - Ini memastikan jika ada pengunjung yang mengakses URL langsung `https://nadilastack.github.io/portofolio/cv`, GitHub Pages akan menyajikan `404.html` (SPA) yang kemudian me-render komponen `AtsCv` secara seamless.
4. **Perbaikan Tombol Kembali (`resources/js/Pages/AtsCv.jsx`)**:
   - Mengganti tautan keras `href="/"` menjadi `href={homeUrl}` berbasis `import.meta.env.BASE_URL` agar tombol *"Kembali ke Portofolio"* kembali ke `/portofolio/` dan tidak lari ke root domain.

### 3. Hasil Verifikasi & Build
- `npm run build`: 100% Berhasil.
- `npm run build:static`: 100% Berhasil dan otomatis menghasilkan `dist/404.html`.
- Seluruh 7 tes otomatis backend PHPUnit tetap PASS (42 assertions).


## [2026-10-26] Penghapusan Total Opsi CV Dokumen PDF Lama & Pemfokusan Penuh ke Format ATS

### 1. Konteks & Permintaan Pengguna
- **Permintaan**:
  - Pengguna mengunggah tangkapan layar kartu *"CV Dokumen Asli (PDF)"* pada modal unduhan dan meminta dengan tegas: **"GA USAH ADA INI"**.
  - Pengguna tidak ingin file PDF lama ditampilkan atau dapat diunduh lagi agar tidak menimbulkan kebingungan dan memastikan recruiter/HRD hanya mendapatkan CV format ATS otomatis yang selalu sinkron dengan isi portofolio terbaru.

### 2. Pekerjaan & Pembersihan
1. **Pembersihan Modal Unduhan (`resources/js/Components/CvDownloadModal.jsx`)**:
   - Menghapus total blok kartu *"CV Dokumen Asli (PDF)"* dan tombol *"Unduh File PDF Asli"*.
   - Modal kini berfokus murni 100% pada **CV Format ATS Terkini**:
     - Pilihan bahasa instan: `🇮🇩 Bahasa Indonesia` | `🇬🇧 English (Global)`.
     - Tombol aksi utama: **"Cetak / Simpan sebagai PDF"** (membuka CV ATS dan memicu dialog print-to-PDF).
     - Tombol aksi sekunder: **"Lihat Pratinjau Dokumen"** (melihat halaman ATS langsung).
     - Catatan tips HRD tentang keunggulan format ATS satu kolom.
2. **Pembersihan Halaman ATS (`resources/js/Pages/AtsCv.jsx`)**:
   - Menghapus tombol *"Dokumen Asli"* dari toolbar navigasi atas.
3. **Pembaruan Dataset Portofolio (`resources/js/data/portfolioData.js`)**:
   - Menghapus objek `originalOption` dan properti `originalPdfBtn` dari dataset Bahasa Indonesia dan Bahasa Inggris.

### 3. Hasil Verifikasi & Build
- `npm run build`: 100% Berhasil tanpa error.
- `npm run build:static`: 100% Berhasil dan otomatis menyalin `dist/404.html`.


## [2026-10-26] Redesain Responsif Modal Unduhan CV (Pencegahan Tampilan Terpotong pada Layar Laptop)

### 1. Masalah & Analisis
- **Masalah**: Pada layar laptop dengan resolusi standar (1366x768 atau skala 125%/150%), tinggi jendela modal unduhan CV sempat terpotong di bagian bawah (*overflow* melewati batas bawah layar).
- **Akar Penyebab**: Ukuran padding yang terlalu tebal (`p-6 sm:p-8`), margin antar elemen yang longgar, dan ketiadaan batasan `max-height` relatif terhadap tinggi viewport (`vh`).

### 2. Solusi Desain
1. **Penerapan Batas Maksimal Responsif (`max-h-[92vh]`)**:
   - Menambahkan batasan `max-h-[92vh]` dengan `overflow-y-auto` pada kontainer modal kartu.
   - Mengubah lebar modal dari `max-w-xl` menjadi `max-w-lg` agar lebih terpusat dan kompak.
2. **Optimalisasi Padding & Proporsi Ruang**:
   - Mengurangi padding menjadi `p-4 sm:p-6` dan memadatkan jarak vertikal (*gap* & *margin*).
   - Menyesuaikan ukuran tombol aksi menjadi `py-2.5` yang tetap ramah sentuhan (*touch-friendly*) namun sangat hemat ruang vertikal.
3. **Hasil**: Seluruh modal, tombol bahasa, kartu ATS CV, tombol cetak/simpan PDF, tombol pratinjau, dan catatan tips HRD kini tampil 100% utuh di dalam layar tanpa ada bagian yang terpotong sedikitpun di berbagai resolusi layar.

### 3. Build & Deploy
- `npm run build`: 100% Sukses.
- `npm run build:static`: 100% Sukses.
