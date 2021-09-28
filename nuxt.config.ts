import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode',
		'@nuxtclub/octicons',
		'@nuxtjs/composition-api/module',
		'@nuxtjs/pwa',
		'@nuxtclub/supabase',
	],
	colorMode: {
		classSuffix: '',
	},
	components: true,
	css: ['~/assets/css/main.css'],
	generate: {
		interval: 2000,
	},
	googleFonts: {
		display: 'swap',
		families: {
			Rubik: [400, 500, 700],
		},
	},
	head: {
		meta: [
			{
				name: 'google-site-verification',
				content: 'j1UdgqW5_2PAOSo7q80f4P8tJFeCBAqfioYOZJ4kims',
			},
		],
	},
	modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
	pwa: {
		manifest: {
			name: 'English Irregular Verbs List',
			short_name: 'EIVL',
		},
	},
	robots: {
		Sitemap: 'https://english-irregular-verbs-list.web.app/sitemap.xml',
	},
	sitemap: {
		hostname: 'https://english-irregular-verbs-list.web.app',
	},
	srcDir: 'src',
	supabase: {
		key: process.env.SUPABASE_KEY || '',
		url: process.env.SUPABASE_URL || '',
	},
	target: 'static',
}

export default config
