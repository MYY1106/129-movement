import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPxToViewport from 'postcss-px-to-viewport'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build',
    },
    css: {
        postcss: {
            plugins: [postcssPxToViewport, autoprefixer],
        },
    },
})
