/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair', 'sans-serif']
      } //end of fontFamily
    },
  },
  plugins: [],
}
