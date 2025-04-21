import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  base: import.meta.env.VITE_BASE_PATH || "/Food_protoype",
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: {
      '@fortawesome/react-fontawesome': resolve(__dirname, 'node_modules/@fortawesome/react-fontawesome'),
    },
  },
})
