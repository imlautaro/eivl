<template>
	<div
		class="bg-white dark:bg-gray-800 flex-1 hidden items-center max-w-sm md:flex px-4 py-3 rounded-2xl shadow space-x-4 text-gray-900 dark:text-gray-100 w-full"
	>
		<ph-magnifying-glass-bold
			class="duration-100"
			:class="
				focus
					? 'text-gray-900 dark:text-gray-100'
					: 'text-gray-400 dark:text-gray-600'
			"
		/>
		<input
			class="bg-transparent flex-1 w-full"
			placeholder="Search"
			@focus="focus = true"
			@blur="focus = false"
			v-model="query"
		/>
		<button
			v-if="query.length"
			@click.prevent="query = ''"
			class="flex text-primary-600 dark:text-primary-400"
		>
			<ph-x-bold />
		</button>
	</div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'
import useSearch from '~/composables/search'
import PhMagnifyingGlassBold from '~icons/ph/magnifying-glass-bold'
import PhXBold from '~icons/ph/x-bold'

const focus = ref(false)

const { query } = useSearch()
</script>
