<template>
	<div>
		<h1 class="font-bold text-2xl text-center">Suggest a verb</h1>
		<form @submit.prevent="submit()" class="flex flex-col space-y-4">
			<span class="font-semibold text-lg">Verb</span>
			<div class="flex flex-col space-y-2">
				<label class="text-sm" for="infinitive"
					>Infinitive (required)</label
				>
				<input
					class="bg-gray-200 dark:bg-gray-800 px-5 py-3 rounded-md"
					placeholder="Infinitive"
					type="text"
					v-model="infinitive"
					id="infinitive"
				/>
			</div>
			<div class="flex flex-col space-y-2">
				<label class="text-sm" for="past_simple">Past Simple</label>
				<input
					class="bg-gray-200 dark:bg-gray-800 px-5 py-3 rounded-md"
					placeholder="Past Simple"
					type="text"
					v-model="past_simple"
					id="past_simple"
				/>
			</div>
			<div class="flex flex-col space-y-2">
				<label class="text-sm" for="past_participle"
					>Past Participle</label
				>
				<input
					class="bg-gray-200 dark:bg-gray-800 px-5 py-3 rounded-md"
					placeholder="Past Participle"
					type="text"
					v-model="past_participle"
					id="past_participle"
				/>
			</div>
			<div class="flex flex-col space-y-2">
				<label class="text-sm" for="spanish">Spanish</label>
				<input
					class="bg-gray-200 dark:bg-gray-800 px-5 py-3 rounded-md"
					placeholder="Spanish"
					type="text"
					v-model="spanish"
					id="spanish"
				/>
			</div>
			<span class="font-semibold text-lg">Credits</span>
			<p>
				If your suggestion is approved, you will appear in a "thank you"
				section in the
				<a
					target="_blank"
					rel="nofollow noopener noreferrer"
					class="text-primary-600 dark:text-primary-400"
					href="//github.com/imlautaro/eivl#thank-you"
					>app's repository</a
				>.
			</p>
			<p>
				Leave the fields empty if you are not interested in appearing in
				the app's repository.
			</p>
			<div class="flex flex-col space-y-2">
				<label class="text-sm" for="name">Your name</label>
				<input
					class="bg-gray-200 dark:bg-gray-800 px-5 py-3 rounded-md"
					placeholder="Your name"
					type="text"
					v-model="name"
					id="name"
				/>
			</div>
			<div class="flex flex-col space-y-2">
				<label class="text-sm" for="social_link">Social Link</label>
				<input
					class="bg-gray-200 dark:bg-gray-800 px-5 py-3 rounded-md"
					placeholder="e.g., @agustinlaje on Twitter"
					type="text"
					v-model="social_link"
					id="social_link"
				/>
			</div>
			<button
				type="submit"
				class="bg-primary-600 font-semibold px-5 py-3 rounded-md text-white"
			>
				Submit
			</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { Suggestion } from '~/models'

export default defineComponent({
	layout: 'form',
	setup() {
		const { $supabase } = useContext()

		const infinitive = ref('')
		const past_simple = ref('')
		const past_participle = ref('')
		const spanish = ref('')

		const name = ref('')
		const social_link = ref('')

		const submit = async () => {
			const { error } = await $supabase
				.from<Suggestion>('eivl_suggestions')
				.insert({
					infinitive: infinitive.value,
					past_simple: past_simple.value,
					past_participle: past_participle.value,
					spanish: spanish.value,
					name: name.value,
					social_link: social_link.value,
				})
			if (error) {
				alert('An error has ocurred')
			} else {
				infinitive.value = ''
				past_simple.value = ''
				past_participle.value = ''
				spanish.value = ''
				alert('Your suggestion has been sent successfully. Thank you!')
			}
		}

		return {
			infinitive,
			past_simple,
			past_participle,
			spanish,
			name,
			social_link,
			submit,
		}
	},
})
</script>
