/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Varela Round', 'sans-serif'],
      },
      keyframes: {
        slideInSlightly: {
          '0%': { transform: 'translateX(-20%)', opacity: '0.8' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInSlightly: 'slideInSlightly 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}