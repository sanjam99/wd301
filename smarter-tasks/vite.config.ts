import { defineConfig } from "vite"; 
 import react from "@vitejs/plugin-react"; 
 import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
      build: { 
       outDir: "dev-dist", 
     },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true // For making sure that the PWA is testable from the Local dev environment
      },
      manifest: {
        name: "Smarter Tasks application",
        short_name: "Smarter Tasks",
        icons: [
          {
            "src": "/san.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
          {
            "src": "/san.gif",
            "type": "image/gif",
            "sizes": "512x512",
            "purpose": "any maskable" // Icon format that ensures that your PWA icon looks great on all Android devices
          }
        ],
        theme_color: '#AAF',
      },
    }),
  ],
});
