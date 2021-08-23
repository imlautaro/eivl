<template>
	<div
		class="bg-primary-600 dark:bg-primary-800 flex items-center shadow text-white"
	>
		<label class="flex p-4" for="search">
			<octicons name="search" />
		</label>
		<input
			class="bg-transparent placeholder-white/50 py-4 pr-4 w-full"
			id="search"
			placeholder="Search..."
			v-model="query"
		/>
	</div>
</template>

<script setup>
import useSearch from '~/composables/search'

const { query } = useSearch()
</script>
