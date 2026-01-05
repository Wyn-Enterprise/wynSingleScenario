import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 22023,
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: 'build',
  },
});
