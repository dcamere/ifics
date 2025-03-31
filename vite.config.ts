import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: '/ifics/',
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_INITIAL_LANGUAGE),
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  }
})
