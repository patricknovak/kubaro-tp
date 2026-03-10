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
          navy: '#0F2B4C',
          'navy-dark': '#0A1E35',
          'navy-light': '#1A3F6B',
          teal: '#0D7C8F',
          'teal-dark': '#096573',
          'teal-light': '#10A3BA',
          charcoal: '#1E1E2E',
          'gray-dark': '#2D2D3D',
          'gray-mid': '#6B6B7B',
          'gray-light': '#E5E5EB',
          cream: '#F7F8FA',
          white: '#FFFFFF',
        },
        accent: {
          gold: '#C49A2A',
          green: '#2D7D46',
          copper: '#B87333',
        },
      },
      fontFamily: {
        heading: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
