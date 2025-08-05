import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true // ✅ abre o navegador automaticamente ao rodar
  },
  build: {
    outDir: 'dist' // ✅ saída padrão do Vite
  },
  resolve: {
    alias: {
      '@': '/src' // ✅ útil para importar arquivos com "@/alguma-coisa"
    }
  }
})
