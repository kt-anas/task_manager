import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Adjust if your app is hosted in a subdirectory
  build: {
    outDir: 'dist',  // Ensure output is directed to 'dist' for Vercel
  },
});
