/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'wtf': '#557788'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
  safelist: ['text-red-500', 'text-blue-500', 'text-green-500']
}

