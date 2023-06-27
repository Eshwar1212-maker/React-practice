import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  server: {
    port:3005,
    watch: {
        usePolling: true
    }
},
  plugins: [react()],
})