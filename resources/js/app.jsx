import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

// Fallback initial page jika dijalankan di static host (seperti GitHub Pages)
const isBrowser = typeof window !== 'undefined';
const hasDomPage = isBrowser && !!document.querySelector('script[data-page="app"]');

const isCvRoute = isBrowser && (
    window.location.pathname.endsWith('/cv') || 
    window.location.pathname.endsWith('/cv/') ||
    window.location.pathname.includes('/cv.html') ||
    new URLSearchParams(window.location.search).get('view') === 'cv'
);

const staticInitialPage = isBrowser && !hasDomPage ? {
    component: isCvRoute ? 'AtsCv' : 'Portfolio',
    props: {
        flash: {},
        lang: new URLSearchParams(window.location.search).get('lang') || 'id',
        autoPrint: new URLSearchParams(window.location.search).get('print') === '1' || new URLSearchParams(window.location.search).get('print') === 'true',
    },
    url: window.location.pathname || '/',
    version: '',
} : undefined;

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
