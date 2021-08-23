<template>
	<div class="flex-1 overflow-y-auto w-full">
		<table v-if="filterVerbs.length" class="min-w-full table-auto">
			<thead>
				<tr
					class="bg-white dark:bg-gray-800 duration-200 shadow sticky top-0"
				>
					<th class="p-4 whitespace-nowrap">
						Infinitive
					</th>
					<th class="p-4 whitespace-nowrap">
						Past Simple
					</th>
					<th class="p-4 whitespace-nowrap">Past Participle</th>
					<th class="p-4 whitespace-nowrap">Spanish</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="doc in filterVerbs"
					:key="doc.id"
					class="even:bg-gray-900/5 dark:even:bg-gray-100/5 select-text"
				>
					<td class="p-4 text-center">{{ doc.infinitive }}</td>
					<td class="p-4 text-center">{{ doc.past_simple }}</td>
					<td class="p-4 text-center">
						{{ doc.past_participle }}
					</td>
					<td class="p-4 text-center">{{ doc.spanish }}</td>
				</tr>
			</tbody>
		</table>
		<div
			v-else
			class="container flex flex-col max-w-screen-sm px-4 py-8 space-y-4 text-center"
		>
			<p class="text-2xl">
				Ups, there are no results for the verb you're looking for.
			</p>
			<p class="text-gray-600">
				Probably what you're looking for is a <b>regular verb</b> or
				it's not a verb.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import useVerbs from '~/composables/verbs'

const { filterVerbs } = useVerbs()
</script>
