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
		'vue2-script-setup-transform/nuxt',
	],
	colorMode: {
		classSuffix: '',
	},
	components: true,
	css: ['~/assets/css/main.css'],
	firebase: {
		config: {
			apiKey: 'AIzaSyDvOb2CGC_T52YRS_lAHTBXTt1vcT7y_Bk',
			authDomain: 'english-irregular-verbs-list.firebaseapp.com',
			projectId: 'english-irregular-verbs-list',
			storageBucket: 'english-irregular-verbs-list.appspot.com',
			messagingSenderId: '167135621400',
			appId: '1:167135621400:web:080662303ab9a7f7e42e6d',
			measurementId: 'G-Z3CD249ZE9',
		},
		services: {
			analytics: true,
			firestore: true,
		},
	},
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
	modules: ['@nuxtjs/firebase', '@nuxtjs/robots'],
	pwa: {
		manifest: {
			name: 'English Irregular Verbs List',
			short_name: 'EIVL',
			theme_color: '#dc2626',
		},
	},
	srcDir: 'src',
	target: 'static',
}

export default config
