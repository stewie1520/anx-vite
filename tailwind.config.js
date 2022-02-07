module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
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
