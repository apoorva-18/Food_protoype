import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` (e.g. .env, .env.development)
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || "/Food_protoype",
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    }
  }
})
