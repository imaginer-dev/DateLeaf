/** @type {import('tailwindcss').Config} */

import * as daisyUiPlugin from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Pretendard-Regular', 'sans-serif'],
      serif: ['Pretendard-Regular', 'sans-serif'],
      mono: ['Pretendard-Regular', 'sans-serif'],
    },
  },

  daisyui: {
    themes: ['lemonade'],
  },
  plugins: [daisyUiPlugin],
};
