import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

// Fallback & dynamic initial page jika dijalankan di static host (seperti GitHub Pages)
const isBrowser = typeof window !== 'undefined';
const domScript = isBrowser ? document.querySelector('script[data-page="app"]') : null;

// Deteksi static host (GitHub Pages / file:)
const isStaticHost = isBrowser && (
    window.location.hostname.includes('github.io') ||
    window.location.protocol === 'file:' ||
    !domScript
);

const isCvRoute = isBrowser && (
    window.location.pathname.endsWith('/cv') || 
    window.location.pathname.endsWith('/cv/') ||
    window.location.pathname.includes('/cv.html') ||
    new URLSearchParams(window.location.search).get('view') === 'cv'
);

let staticInitialPage = undefined;
if (isStaticHost) {
    const savedLang = localStorage.getItem('portfolio_lang');
    const paramLang = new URLSearchParams(window.location.search).get('lang');
    const activeLang = paramLang === 'id' || paramLang === 'en' ? paramLang : (savedLang || 'id');
    const autoPrint = new URLSearchParams(window.location.search).get('print') === '1' || new URLSearchParams(window.location.search).get('print') === 'true';

    staticInitialPage = {
        component: isCvRoute ? 'AtsCv' : 'Portfolio',
        props: {
            flash: {},
            lang: activeLang,
            autoPrint: autoPrint,
        },
        url: window.location.pathname + window.location.search,
        version: '',
    };
}

createInertiaApp({
    title: (title) => title ? `${title} | Nadila Putri` : 'Nadila Putri | Fullstack Developer & Business Analyst',
    page: staticInitialPage,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        const page = pages[`./Pages/${name}.jsx`];
        if (!page) {
            throw new Error(`Page ./Pages/${name}.jsx not found.`);
        }
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4f46e5',
        showSpinner: false,
    },
});
