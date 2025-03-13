import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    viteReact(),
  ],
  server: {
    port: 3000,
    host: true, // Listen on all addresses
    proxy: {
      // Direct proxy to JSONPlaceholder without nginx in between
      "/api": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
