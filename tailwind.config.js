const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.html","./**/*.html"],
  theme: {
    extend: {
		colors: {
			foreground: '#422707',
			background: '#F9F2E0',
			birthdayblue: '#78CFFF',
		},
		fontFamily: {
			'sans': ['Noto Sans SC', defaultTheme.fontFamily.sans],
		}
	},
  },
  plugins: [
	  require("daisyui"),
	  require('@tailwindcss/typography'),
  ],
}
