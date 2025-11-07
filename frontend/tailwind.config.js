/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      fontFamily: {
        kairos: ['"Zalando Sans SemiExpanded"', 'sans-serif'],
        aeonik: ['"Zalando Sans SemiExpanded"', 'sans-serif'],
        inter: ['"Zalando Sans SemiExpanded"', 'ui-sans-serif', 'system-ui', 'sans-serif'],

      },
    },
  },
  plugins: [
 require('tailwind-scrollbar'),  ],
};
