/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {

        // required
        light_primary: "#474747",
        darker_primary: "#1f1f1f",
        darkest_primary: "#060606",
        link: "#15233D",

        // custom
        black: "#060606",
        bg: "#F9F9FB",
        white: "#FFFFFF",
        gray: "#B1B1B1",
        red: "#C80000",
        blue: "#000AFF",
        header: "#27292C",
      },

      fontSize: {
        '2xs': '.625rem',
        '3xs': '.5rem',
        '4xs': '.375rem',
        '5xs': '.25rem',
      },
      
    },

  },
  plugins: [],
}
