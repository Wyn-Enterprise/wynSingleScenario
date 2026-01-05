import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 22023,
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: 'build',
  },
});