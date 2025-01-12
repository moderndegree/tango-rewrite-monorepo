/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@repo/ui/index.tsx",
    "./node_modules/@repo/ui/components/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
