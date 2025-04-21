import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:import.meta.env.VITE_BASE_PATH||"/Food_protoype",
  css:{
    modules: {
      localsConvention: 'camelCase',
    },
  }
})
