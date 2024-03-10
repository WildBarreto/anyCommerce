/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#820ad1",
        "secundary": "#3F454F",
      }
    },
  },
  plugins: [],
}

