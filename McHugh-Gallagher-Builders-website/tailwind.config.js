/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bob: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
