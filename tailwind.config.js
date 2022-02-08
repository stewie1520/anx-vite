module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-blue': '#191845',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
