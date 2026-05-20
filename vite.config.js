import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/drake-whitelist/',
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})