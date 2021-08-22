import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: ['@nuxt/typescript-build', 'nuxt-windicss'],
	components: true,
	srcDir: 'src',
	target: 'static',
}

export default config
