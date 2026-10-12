<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Portofolio Nadila Putri - Fullstack Developer (Laravel, React.js) | Business & System Analysis | Data Analysis. Fresh Graduate D4 Teknik Informatika Politeknik Caltex Riau.">
        <meta name="keywords" content="Nadila Putri, Fullstack Developer, Laravel, React.js, Business Analyst, System Analyst, Data Analysis, Portfolio, Politeknik Caltex Riau">
        <meta name="author" content="Nadila Putri">
        
        <!-- Open Graph / Meta Sosial -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="Nadila Putri | Fullstack Developer & Business Analyst">
        <meta property="og:description" content="Portofolio resmi Nadila Putri - Web Developer Laravel & React.js, Business & System Analysis, Data Analysis.">
        <meta property="og:site_name" content="Portofolio Nadila Putri">

        <title inertia>Nadila Putri | Fullstack Developer & Business Analyst</title>

        <!-- Google Fonts: Inter (Professional Software Engineering Standard) & JetBrains Mono (Code/Tech) -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">

        <!-- Favicon -->
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%234f46e5'/><stop offset='100%25' stop-color='%230d9488'/></linearGradient></defs><rect width='100' height='100' rx='24' fill='url(%23g)'/><rect width='96' height='96' x='2' y='2' rx='22' fill='none' stroke='white' stroke-opacity='0.25' stroke-width='2'/><text x='50' y='66' font-family='sans-serif' font-size='50' font-weight='900' fill='white' text-anchor='middle' letter-spacing='-2'>NP</text></svg>">

        <!-- Script Inisialisasi Tema (Mencegah Flash of Light/Dark Mode) -->
        <script>
            (function() {
                try {
                    const savedTheme = localStorage.getItem('theme');
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                } catch (e) {}
            })();
        </script>

        <!-- Vite Assets & Inertia -->
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-slate-50 text-slate-800 dark:bg-[#0b0f19] dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        @inertia
    </body>
</html>
