/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MadimiOne: ["Madimi One", "sans-serif"],
        KodeMono: ["Kode Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
