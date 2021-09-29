module.exports = {
  purge: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { sans: 'Inter, -apple-system, sans-serif' },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
