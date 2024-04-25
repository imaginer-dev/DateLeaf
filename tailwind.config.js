/** @type {import('tailwindcss').Config} */

import * as daisyUiPlugin from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: ['lemonade'],
  },
  plugins: [daisyUiPlugin],
};
