import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    build: {
        outDir: 'build',
    },
    server: {
        port: 3000,
        open: false,
        host: true,
        proxy: {
            '^/assets': {
                target: 'http://localhost:3000/src',
            },
        },
    },
});
