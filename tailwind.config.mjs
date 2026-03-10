/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f8',
          100: '#d9e1ee',
          200: '#b3c3dd',
          300: '#8da5cc',
          400: '#6787bb',
          500: '#4169aa',
          600: '#2e4f8a',
          700: '#1B365D',
          800: '#142845',
          900: '#0d1a2e',
        },
        gold: {
          50: '#fdf8ee',
          100: '#f9edcf',
          200: '#f3db9f',
          300: '#edc96f',
          400: '#d4a83a',
          500: '#C5922E',
          600: '#a57824',
          700: '#855f1d',
          800: '#654716',
          900: '#45300f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
