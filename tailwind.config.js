/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ['./src/**/*.html', './src/**/*.js'],
  options: {
    safelist: [],
    blocklist: [],
    keyframes: true,
    fontFace: true,
  },
  theme: {
    screens: {
      ssm: '440px',
      sm: '550px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#000',
      secondary: '#fff',
      accent: 'red',
    },
    spacing: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '50px',
      7: '75px',
    },
    fontSize: {
      bodySize: '1.6rem',
      h1Size: '4rem',
      h2Size: '3rem',
      h3Size: '2.5rem',
      h4Size: '2rem',
      h5Size: '1.5rem',
      smSize: '1.2rem',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        yaGrid: 'repeat(auto-fill, minmax(min(500px, 100%), 1fr))',
      },
    },
  },
  plugins: [],
};
