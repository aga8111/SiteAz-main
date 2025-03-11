/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{htm,js}"],
  theme: {
    extend: {},
    screens: {
      ck:'340px',
      xsm: '480px',
      kecid1:'550px',
      sm: '640px',
      md: '768px',
      td:'841px',
      kecid960: '960px', 
      lg: '1024px', //lazimdir!
      xl: '1280px', //lazimdir!
      '2xl': '1536px',
      'max-sm': { max: '639px' }, 
    },
  },
  plugins: [],
};

