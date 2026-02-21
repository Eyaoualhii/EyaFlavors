/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Zodiak', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#FFFFFF',
          dark: '#222222',
          accent: '#FFC0CB',
          accentHover: '#FFB6D9',
          accentLight: '#FFEBF1',
          border: '#EAEAEA',
          muted: '#888888',
          grayBg: '#F9F9F9',
        },
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
