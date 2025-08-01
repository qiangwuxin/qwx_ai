import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteMockServer from 'vite-plugin-mock'; // 直接默认导入

export default defineConfig({
  plugins: [
    react(),
    viteMockServer({ // 直接调用
      mockPath: 'mock',
      enable: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});