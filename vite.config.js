import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
   server: {
    allowedHosts: [
      'tiiypg-ip-187-190-198-80.tunnelmole.net',
      // también puedes agregar otros hosts aquí
    ],
  },
})
