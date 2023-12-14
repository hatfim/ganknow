import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unfonts from 'unplugin-fonts/vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const { VITE_PORT, VITE_BASE_URL } = loadEnv(mode, process.cwd());

  return defineConfig({
    base: VITE_BASE_URL,
    plugins: [
      vue(),
      Unfonts({
        google: {
          preconnect: true,
          families: [
            {
              name: 'Inter',
              styles: 'wght@400;500;700',
              defer: true,
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      https: false,
      port: VITE_PORT,
      host: '0.0.0.0',
      open: true,
      cors: true,
      proxy: {},
    },
    build: {
      target: 'es2015',
      sourcemap: false,
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
    },
  });
};
