import { defineConfig } from 'vite'
import { tanstackStart } from '@lovable.dev/vite-tanstack-config'

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: 'server' }
    })
  ],
  build: {
    outDir: 'dist/client',
    emptyOutDir: true
  }
})
