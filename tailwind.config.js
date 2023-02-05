/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
    'blue': '#1fb6ff',
    'purple':'#E9D5FF',
    'gray-dark': '#273444',
    'dark': '#000',
    'gray': '#E5E7EB',
    'gray-light': '#9CA3AF',
    'white': '#fff',
    'primary': '#114B35',
    'terciary': '#9E81F6'
  },
  fontFamily: {
    primary: ['Playfair Display', 'serif'],
    grotesk: ['Space Grotesk', 'sans-serif'],
  },
  fontSize: {
    sm: '0.8rem',  //12.8px
    base: '1rem',  //16px
    xl: '1.25rem',  //20px
    '2xl': '1.563rem', //25px
    '3xl': '1.875rem', //30px
    '4xl': '2.375rem', //38px
    '5xl': '3.125rem', //50px
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    'extra-bold': '800',
    black: '900',
  },
  // height: {
  //   '126': '7.875rem', //126px
  // },
  },
  plugins: [
    
  ],
};



