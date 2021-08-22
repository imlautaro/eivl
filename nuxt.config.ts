import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
	],
	components: true,
	googleFonts: {
		display: 'swap',
		families: {
			Rubik: [400, 500, 700],
		},
	},
	srcDir: 'src',
	target: 'static',
}

export default config
