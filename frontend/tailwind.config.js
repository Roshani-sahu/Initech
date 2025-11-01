/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      fontFamily: {
        kairos: ['Kairos', 'sans-serif'],
        aeonik: ['Aeonik Fono', 'sans-serif'],
                inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],

      },
    },
  },
  plugins: [
 require('tailwind-scrollbar'),  ],
};
