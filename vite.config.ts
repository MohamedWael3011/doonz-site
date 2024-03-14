import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      VITE_TEMPLATE_CLIENT_ID: process.env.VITE_TEMPLATE_CLIENT_ID,
    },
    plugins:[react()]
  };
});