import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), libCss()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: resolve(__dirname, './package/index.ts'),
      name: 'vue3-coinbase-commerce',
      formats: ['es', 'umd'],
    },
  },
})
