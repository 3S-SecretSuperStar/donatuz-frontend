/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#0C0C0C',
        'donaut': '#514DFB',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(109.46deg, rgba(201, 201, 201, 0.48) 1.57%, rgba(196, 196, 196, 0.1) 100%)',
      }
    },
  },
  plugins: [],
}

