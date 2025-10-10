/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coffee-dark': '#2E2A26',
        'coffee-neutral': '#F5F3F0',
        'coffee-accent': '#C67A30',
        'coffee-text': '#1A1A1A',
      },
    },
  },
  plugins: [],
};
