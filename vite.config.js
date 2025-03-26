// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/course-card-demo/', // 👈 use your repo name here
  plugins: [react()],
})
