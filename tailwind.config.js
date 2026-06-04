/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orient: {
          50: '#f4f6f8',
          100: '#e3e8ef',
          200: '#cbd5e1',
          300: '#a3b6cc',
          400: '#7592b0',
          500: '#527598',
          600: '#3e5c7d',
          700: '#334a65',
          800: '#2c3f56',
          900: '#273648',
          950: '#1a2432',
        }
      }
    },
  },
  plugins: [],
}

