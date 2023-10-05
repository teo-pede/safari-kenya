/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['SFMono-Regular', ...defaultTheme.fontFamily.mono],
        'potato': ['POTATO'],
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(+20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(+20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        bounceInRight: {
          '0%': { opacity: 0, transform: 'translateX(2000px)' },
          '60%': { opacity: 1, transform: 'translateX(-30px)' },
          '80%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' }
        },
        bounceInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-2000px)' },
          '60%': { opacity: 1, transform: 'translateX(30px)' },
          '80%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' }
        },
      },
      animation: {
        'fade-in-left': 'fadeInLeft 1s ease-in-out 1',
        'fade-in-right': 'fadeInRight 1s ease-in-out 1',
        'fade-in-up': 'fadeInUp 1s ease-in-out 1',
        'fade-in-down': 'fadeInDown 1s ease-in-out 1',
        'bounce-in-right': 'bounceInRight 2s ease 1',
        'bounce-in-left': 'bounceInLeft 2s ease 1'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

