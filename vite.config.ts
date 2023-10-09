import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import svgr from '@svgr/rollup'

const root = resolve(__dirname, 'src')
const publicAssets = resolve(__dirname, 'public')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: '/tiktok_clone/',
  publicDir: publicAssets,
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {

    },
  },
})
