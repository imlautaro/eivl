import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import native from 'windi-native'

const config = defineConfig({
	darkMode: 'class',
	plugins: [native],
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
