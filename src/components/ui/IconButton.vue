<template>
	<component
		:is="to !== undefined ? 'nuxt-link' : 'button'"
		:to="to"
		class="duration-100 flex nt:hover:bg-gray-900/5 nt:hover:dark:(bg-gray-100/5) active:bg-gray-900/10 active:dark:bg-gray-100/10 p-3 rounded-2xl w-min"
		@click="$emit('click')"
	>
		<slot />
	</component>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
	props: {
		to: {
			default: undefined,
			type: String,
		},
	},
	setup() {},
})
</script>
