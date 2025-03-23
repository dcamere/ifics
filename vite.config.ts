import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/ifics/',
    define: {
      __APP_ENV__: JSON.stringify(env.INITIAL_LANGUAGE),
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
        },
      },
    },
  };
});
