/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      fontFamily: {
        Kairos: ['Kairos', 'sans-serif'],
        aeonik: ['Aeonik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Kairos', 'ui-sans-serif', 'system-ui', 'sans-serif'],

      },
    },
  },
  plugins: [
 require('tailwind-scrollbar'),  ],
};
