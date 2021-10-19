<template>
	<div>
		<div class="px-4 py-2">
			<nuxt-link
				class="active:bg-gray-900/10 active:dark:bg-gray-100/10 flex p-3 rounded-2xl w-min"
				to="/"
			>
				<ph-arrow-left-bold />
			</nuxt-link>
		</div>
		<div class="container max-w-sm py-8 px-4">
			<nuxt class="flex flex-col space-y-4" />
		</div>
	</div>
</template>

<script setup>
import PhArrowLeftBold from '~icons/ph/arrow-left-bold'
</script>
