<template>
	<button
		@click="$emit('change', !active)"
		class="duration-200 p-1 rounded-full w-12"
		:class="
			active
				? 'bg-primary-600 dark:bg-primary-800'
				: 'bg-gray-400 dark:bg-gray-600'
		"
	>
		<div
			class="duration-200 ball transition-all bg-white shadow-md w-4 h-4 rounded-full transform"
			:class="
				active
					? 'dark:bg-white translate-x-6'
					: 'dark:bg-gray-100 translate-x-0'
			"
		/>
	</button>
</template>

<style lang="postcss" scoped>
.ball {
	transition-timing-function: cubic-bezier(0.5, -0.5, 0.5, 1.5);
}
</style>

<script>
export default {
	props: {
		active: {
			default: false,
			type: Boolean,
		},
	},
	model: {
		prop: 'active',
		event: 'change',
	},
}
</script>
