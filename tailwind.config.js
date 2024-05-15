/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#0C0C0C',
        'donaut': '#514DFB',
        'border-color': "#C9C9C9",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(109.46deg, rgba(122 121 121 / 48%) 1.57%, rgba(196, 196, 196, 0.1) 100%)',
        'bg-gradient': 'linear-gradient(140deg, #514DFB -10%, #0C0C0C 30%, #0C0C0C 70%, #514DFB 110%)'
      },
      fontFamily: {
        'proxima-nova': ['Proxima Nova', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

