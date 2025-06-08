/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#06122f', // Darker navy blue background from image
        'bright-red': '#e50800',
        'accent-blue': '#2fadcf', // Light blue accent color from image
        'soft-white': '#f8f9fa',
        'metallic-gray': '#b0b3c3',
        'light-blue': '#6c7ae0',
        'soft-black': '#040b1b', // Even darker navy blue for sections
        'dark-overlay': '#061029', // For overlays on images
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        display: ['Oswald', 'Impact', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #282f6c 0%, #6c7ae0 100%)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

