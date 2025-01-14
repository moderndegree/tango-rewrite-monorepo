import { resolve } from "path";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "BHNUI",
      fileName: "bhn-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-aria-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [viteReact(), dts()],
});
