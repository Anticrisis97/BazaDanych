import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Możesz dostosować numer portu
  },
  build: {
    outDir: 'dist', // Katalog, do którego będą kompilowane pliki
  },
})
