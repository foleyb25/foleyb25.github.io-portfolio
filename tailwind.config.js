/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      animation: {
        'slide-right': 'slide-right 1s',
        'slide-left': 'slide-left 1s'
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
}
