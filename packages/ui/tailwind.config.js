import preset from "@repo/tokens/tailwind/preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
