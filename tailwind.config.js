/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#2395FF',
        title: '#414141',
        forText: '#6d6a79',
        placeholder: '#9B96AB',
        dark: '#4D4D4D',
        grey1: '#979797',
        grey2: '#595959',
        boxInput: '#F5F5F5',
        textInput: '#6B6B6B',

      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      },
      screens: {
        sm: '375px',
        md: '1248px',
        // lg: '1248px',
        xl: '1536px'
        //min-width
      },
    },
  },
  plugins: [],
};


