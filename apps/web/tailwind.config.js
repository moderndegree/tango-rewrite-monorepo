import preset from "@repo/tokens/tailwind/preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@repo/ui/lib/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
