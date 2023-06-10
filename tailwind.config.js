/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx,html}', './components/**/*.{ts,tsx,js,jsx,html}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    // require('tw-elements/dist/plugin')
  ],
  theme: {
    colors: {
      'primary': 'rgb(var(--color-primary) / <alpha-value>)',
      'blue': '#004c97',
      'blue-alternate': '#0072ce',
      'blue-light': '#00a9e0',
      'blue-lighter': '#0090da',
      'blue-lightest': '#71c5e8',
      'green': '#201547',
      'cyan': '#00b2a9',
      'yellow': '#ff9e1b',
      'red': '#af272f',
      'purple': '#87189d',
      'gray-very-dark': '#222222',
      'gray': '#53565a',
      'gray-lighter': '#f4f4f4',
      'gray-lightest': '#f6f6f9',
      'cool-gray': '#d9d9d6',
      'black': '#000000',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ['VIC', 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}