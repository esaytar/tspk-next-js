/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      'leftCard': '1.43rem 0 0 1.43rem',
      'leftMobile': '0.71rem 0.71rem 0 0',
      'rightCard': '0 1.43rem 1.43rem 0',
      'rightMobile': '0 0 0.71rem 0.71rem'
    },
    fontSize: {
      '18': '1.125rem',
    },
    extend: {
      colors: {
        'mainGray': '#141414',
        'mainBlue': '#1763F4',
        'grayText': 'rgba(20, 20, 20, 0.8)',
        'grayMainText': '#434343',
      },
      gap: {
        '18': '1.125rem',
      },
      boxShadow: {
        'newShad': '4px 4px 10px 0 rgba(69, 129, 246, 0.15)',
      }
    },
  },
  plugins: [],
};
