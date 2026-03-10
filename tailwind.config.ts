import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '../../packages/ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C41E24',
          'red-dark': '#9E1820',
          'red-light': '#E8353C',
          charcoal: '#2D2D2D',
          'gray-dark': '#3D3D3D',
          'gray-mid': '#6B6B6B',
          'gray-light': '#E5E5E5',
          cream: '#F5F3F0',
          white: '#FFFFFF',
        },
        accent: {
          gold: '#D4A843',
          green: '#2D7D46',
          blue: '#1E5FA0',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
