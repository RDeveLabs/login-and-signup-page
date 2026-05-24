import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server:{
    host: '0.0.0.0',
    port: 5173
  },
  build:{
    rolldownOptions:{
      input: {
        main: resolve(__dirname, './index.html'),
        daftar: resolve(__dirname, './daftar/index.html')
      }
    }
  }

})