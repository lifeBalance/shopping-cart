import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shopping-cart/", // as per the docs
  plugins: [react()],
})
