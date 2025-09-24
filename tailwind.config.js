/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './sections/**/*.{liquid,js}',
    './snippets/**/*.{liquid,js}',
    './templates/**/*.{liquid,js}',
    './layout/**/*.{liquid,js}',
    './assets/**/*.{liquid,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}