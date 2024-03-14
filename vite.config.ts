import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'VITE_TEMPLATE_CLIENT_ID': JSON.stringify(process.env.VITE_TEMPLATE_CLIENT_ID),
  },
})