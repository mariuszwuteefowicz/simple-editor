/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        'wtf': '#557788'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
  safelist: ['text-red-500', 'text-blue-500', 'text-green-500']
}

