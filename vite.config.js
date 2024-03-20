import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from path
const path = require('path')



// https://vitejs.dev/config/
export default defineConfig({
  // root: path.resolve(__dirname, 'src'),
  plugins: [
    vue(),
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@': path.resolve(__dirname, 'src'),
      // '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),

    }
  },
  server: {
    port: 8080,
    hot: true
  },
  base: './',
})
