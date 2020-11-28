module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.js',
		'./pages/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        djGreen: {
          50: '#F3F6F5',
          100: '#E7EDEA',
          200: '#C3D1CB',
          300: '#9FB6AC',
          400: '#567F6E',
          500: '#0E4830',
          600: '#0D412B',
          700: '#082B1D',
          800: '#062016',
          900: '#04160E',
        },
        lightblue: {
          50: '#FCFEFE',
          100: '#FAFCFE',
          200: '#F2F8FC',
          300: '#EAF3FB',
          400: '#DAEAF7',
          500: '#CAE1F4',
          600: '#B6CBDC',
          700: '#798792',
          800: '#5B656E',
          900: '#3D4449',
          },
          whiteRock: {
            50: '#FEFEFD',
            100: '#FDFDFB',
            200: '#FBFBF6',
            300: '#F8F8F0',
            400: '#F3F3E5',
            500: '#EEEEDA',
            600: '#D6D6C4',
            700: '#8F8F83',
            800: '#6B6B62',
            900: '#474741',
            },
      },
      fontSize: {
        'h1': '80px',
        'h2': '48px',
        '7xl': '5rem',
        '3.5xl': '2rem'
      },
    },
  },
  variants: {},
  plugins: [
    require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
  ],
}
