import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

const config = defineConfig({
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: colors.red,
				gray: colors.gray,
			},
		},
		fontFamily: {
			sans: ['Rubik', 'sans-serif'],
		},
	},
})

export default config
