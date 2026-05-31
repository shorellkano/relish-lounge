import { defineConfig } from 'vite'

const cloudflare = require('@lovable.dev/vite-tanstack-config')

export default defineConfig({
  plugins: [cloudflare()]
})
