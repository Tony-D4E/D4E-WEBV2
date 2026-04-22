import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({

  base: './',
  plugins: [inspectAttr(), react()],
  server: {
    allowedHosts: ['devserver-preview--d4e-webv2.netlify.app', 'digital4efficiency.ch'],
  },
  build: {
    target: ['es2019', 'chrome80']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
