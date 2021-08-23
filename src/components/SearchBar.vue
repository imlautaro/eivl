<template>
	<div class="bg-white dark:bg-gray-800 flex items-center shadow">
		<label class="flex p-4" for="search">
			<octicons name="search" />
		</label>
		<input
			class="bg-transparent py-4 pr-4 w-full"
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
