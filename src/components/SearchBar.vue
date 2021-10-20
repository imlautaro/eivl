<template>
	<div
		class="bg-primary-600 dark:bg-primary-800 flex items-center md:hidden shadow text-white"
	>
		<label class="flex p-4" for="search">
			<ph-magnifying-glass-bold />
		</label>
		<input
			class="bg-transparent placeholder-white/50 py-4 pr-4 w-full"
			id="search"
			placeholder="Search..."
			v-model="query"
		/>
		<button
			v-if="query.length"
			@click.prevent="query = ''"
			class="flex p-4"
		>
			<ph-x-bold />
		</button>
	</div>
</template>

<script setup>
import useSearch from '~/composables/search'
import PhMagnifyingGlassBold from '~icons/ph/magnifying-glass-bold'
import PhXBold from '~icons/ph/x-bold'

const { query } = useSearch()
</script>
