import { defineConfig } from 'vite'
import cloudflare from '@lovable.dev/vite-tanstack-config'

export default defineConfig({
  plugins: [cloudflare()]
})
