import { defineConfig } from 'vite';
import injectHtml from 'vite-plugin-html-inject';

import { resolve } from 'node:path';

export default defineConfig({
    base: '/',
    plugins: [
        injectHtml(),
    ],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                nested: resolve(__dirname, 'src/404.html'),
            },
        },
    },
    root: 'src',
    publicDir: '../public',
    server: {
        open: true
    }
});
