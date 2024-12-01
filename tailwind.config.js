/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-light": "#e6ffe6",
        "green-dark": "#006400",
        primary: {
          50: "#f2f9f1",
          100: "#ddeedf",
          200: "#b6cdbd",
          300: "#5c715e",
          400: '#dde0ab',
          500: '#678a74',
      
  
        },
      },
    },
  },
  plugins: [],
};
