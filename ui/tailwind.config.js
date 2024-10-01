/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: { 
      scrollBehavior: {
      smooth: 'smooth',
    },
  },
  },
  plugins: [require('daisyui'),],
}


