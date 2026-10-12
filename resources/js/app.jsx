import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

// Fallback initial page jika dijalankan di static host (seperti GitHub Pages)
const isBrowser = typeof window !== 'undefined';
const hasDomPage = isBrowser && !!document.querySelector('script[data-page="app"]');

const staticInitialPage = isBrowser && !hasDomPage ? {
    component: 'Portfolio',
    props: {
        flash: {},
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
