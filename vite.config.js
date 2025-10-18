import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ yahan apna GitHub repo name likho exactly jaisa GitHub par hai (case sensitive)
export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/',
})
