<template>
	<div
		v-if="show"
		class="px-5 py-3 bg-green-600 text-white shadow justify-between flex items-center space-x-4 "
	>
		<span>Hay una nueva versión disponible</span>
		<button
			@click="update()"
			class="px-5 py-3 font-semibold rounded-md duration-300 text-green-600 bg-white shadow-md"
		>
			Actualizar
		</button>
	</div>
</template>

<script setup>
import { onMounted, ref } from '@nuxtjs/composition-api'

const show = ref(false)

const getStatus = async () => {
	const workbox = await window.$workbox
	if (workbox) {
		workbox.addEventListener('installed', (event) => {
			if (event.isUpdate) {
				show.value = true
			}
		})
	}
}

const update = () => {
	window.location.reload()
}

onMounted(() => {
	getStatus()
})
</script>
