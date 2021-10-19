<template>
	<div class="flex flex-col h-screen overflow-hidden w-screen">
		<app-bar />
		<nuxt keep-alive />
		<search-bar />
		<refresh-to-update />
	</div>
</template>

<script>
export default {
	head() {
		return {
			meta: [
				{
					name: 'theme-color',
					content:
						this.$colorMode.value == 'dark' ? '#991b1b' : '#dc2626',
				},
			],
		}
	},
}
</script>
