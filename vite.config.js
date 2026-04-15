import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tarix: resolve(__dirname, 'tarix.html'),
        tuzilma: resolve(__dirname, 'tuzilma.html'),
        rahbariyat: resolve(__dirname, 'rahbariyat.html'),
        hujjatlar: resolve(__dirname, 'hujjatlar.html'),
        yangiliklar: resolve(__dirname, 'yangiliklar.html'),
        taqvim: resolve(__dirname, 'taqvim.html'),
      },
    },
  },
});
