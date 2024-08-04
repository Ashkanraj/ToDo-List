/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#5F33E1",
        tDark: "#24252C",
      },
    },
  },
  plugins: [],
};
