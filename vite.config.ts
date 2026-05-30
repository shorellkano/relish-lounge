import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
    // REMOVE @cloudflare/vite-plugin - we don't need it for Vercel
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
    // Disable SSR build - we want STATIC only
    ssr: false
  }
})
