import viteReact from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

const projectRoot = path.resolve(__dirname, './')
export default defineConfig({
  plugins: [viteReact()],
  resolve: {
    alias: {
      '@': path.resolve(projectRoot, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
