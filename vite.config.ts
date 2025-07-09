import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => ({
  publicDir: path.resolve(__dirname, 'public'),
  build: { copyPublicDir: true },
  server: {
    host: true,
    port: 8080,
    // ADICIONE ESTA SEÇÃO DE PROXY
    proxy: {
      '/api': {
        target: 'http://localhost:3333', // O endereço do seu backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api do caminho final
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));