import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // 👇 Important: this enables React Router to handle all routes
  server: {
    historyApiFallback: true,
  },
});
