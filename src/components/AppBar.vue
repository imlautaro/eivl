<template>
	<div
		class="bg-primary-600 dark:(bg-primary-800 text-gray-100) flex items-center justify-between p-4 shadow text-white z-10"
	>
		<span class="font-bold text-2xl">EIVL</span>
		<desktop-search-bar />
		<div class="relative">
			<div class="dark flex">
				<ui-icon-button @click="showDropdown = !showDropdown">
					<ph-dots-three-vertical-bold />
				</ui-icon-button>
			</div>
			<transition name="dropdown">
				<div
					v-if="showDropdown"
					class="absolute bg-white dark:(bg-gray-800 text-gray-100) duration-200 overflow-hidden py-2 right-0 rounded-2xl shadow-md text-gray-900"
				>
					<div
						class="duration-200 flex items-center justify-between p-4 space-x-8 w-full"
					>
						<div class="flex items-center space-x-4">
							<ph-moon-bold />
							<span class="flex-1 whitespace-nowrap">
								Dark mode
							</span>
						</div>
						<ui-switch
							:active="$colorMode.value == 'dark'"
							@change="toggleColorMode"
						/>
					</div>
					<nuxt-link
						to="/suggest-a-verb/"
						class="active:bg-gray-900/5 dark:active:bg-gray-100/5 duration-200 flex items-center justify-between p-4 space-x-8 w-full"
					>
						<div class="flex items-center space-x-4">
							<ph-list-plus-bold />
							<span class="flex-1 whitespace-nowrap">
								Suggest a verb
							</span>
						</div>
					</nuxt-link>
					<button
						v-if="shareSupport"
						@click="share()"
						class="active:bg-gray-900/5 dark:active:bg-gray-100/5 duration-200 flex items-center justify-between p-4 space-x-8 w-full"
					>
						<div class="flex items-center space-x-4">
							<ph-share-network-bold />
							<span class="flex-1 whitespace-nowrap">
								Share
							</span>
						</div>
					</button>
					<a
						class="active:bg-gray-900/5 dark:active:bg-gray-100/5 duration-200 flex items-center justify-between p-4 space-x-8 w-full"
						href="https://github.com/imlautaro/eivl"
						target="_blank"
					>
						<div class="flex items-center space-x-4">
							<fa-brands-github />
							<span class="flex-1 whitespace-nowrap">
								GitHub
							</span>
						</div>
						<ph-arrow-square-out-bold />
					</a>
				</div>
			</transition>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.dropdown-enter-active,
.dropdown-leave-active {
	@apply duration-200 origin-top-right transform;
}
.dropdown-enter,
.dropdown-leave-to {
	@apply opacity-0 scale-95;
}
</style>

<script setup>
import { ref, useContext, onMounted } from '@nuxtjs/composition-api'
import PhDotsThreeVerticalBold from '~icons/ph/dots-three-vertical-bold'
import PhMoonBold from '~icons/ph/moon-bold'
import PhArrowSquareOutBold from '~icons/ph/arrow-square-out-bold'
import FaBrandsGithub from '~icons/fa-brands/github'
import PhListPlusBold from '~icons/ph/list-plus-bold'
import PhShareNetworkBold from '~icons/ph/share-network-bold'

const showDropdown = ref(false)

const { $colorMode } = useContext()

const toggleColorMode = () => {
	if ($colorMode.value == 'dark') {
		$colorMode.preference = 'light'
	} else {
		$colorMode.preference = 'dark'
	}
}

const shareSupport = ref(false)

onMounted(() => {
	if (navigator.share) {
		shareSupport.value = true
	}
})

const share = () => {
	navigator.share({
		title: 'English Irregular Verbs List',
		text: 'I recommend this app',
		url: 'https://eivl.nuxt.club/',
	})
}
</script>
