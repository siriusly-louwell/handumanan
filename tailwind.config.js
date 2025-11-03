/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0077b6",
        accent: "#ffb703",
        coral: "#fb8500",
        forest: "#2a9d8f",
        sand: "#fefae0",
        course: "#908960ff",
        fine: "#f8f7f1",
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
};
