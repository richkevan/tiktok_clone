import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import svgr from '@svgr/rollup'

const root = resolve(__dirname, 'src')
const googlee5f7fb12da473b5e = resolve(root, 'googlee5f7fb12da473b5e.html')
const publicAssets = resolve(__dirname, 'public')
const dist = resolve(__dirname, 'dist')
const fallback = resolve(root, '404.html')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  publicDir: publicAssets,
  plugins: [react(), svgr()],
  build: {
    outDir: dist,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        googlee5f7fb12da473b5e,
        "404": fallback,
      }
    },
  },
})
