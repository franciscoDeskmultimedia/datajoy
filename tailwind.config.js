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
      },
      fontSize: {
        'h1': '80px',
        'h2': '48px'
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
