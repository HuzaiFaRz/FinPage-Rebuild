/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        Main_Bg: "url('./src/assets/Main_Bg.webp')",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        dmsans: ["DMSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
