import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode',
	],
	colorMode: {
		classSuffix: '',
	},
	components: true,
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
	googleFonts: {
		display: 'swap',
		families: {
			Rubik: [400, 500, 700],
		},
	},
	modules: ['@nuxtjs/firebase'],
	srcDir: 'src',
	target: 'static',
}

export default config
