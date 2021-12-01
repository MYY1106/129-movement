import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPxToViewport from 'postcss-px-to-viewport'
import autoprefixer from 'autoprefixer'
import path from 'path'

const loderPostcssPxToViewport = postcssPxToViewport({
    viewportWidth: 375,
    viewportUnit: 'vw',
})

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "assets", replacement: path.resolve(__dirname, 'src/assets')
            }
        ]
    },
    build: {
        outDir: 'build',
    },
    css: {
        postcss: {
            plugins: [loderPostcssPxToViewport, autoprefixer],
        },
    },
    server: {
        host: '0.0.0.0'
    }
})
