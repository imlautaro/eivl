import { computed, useAsync, useContext } from '@nuxtjs/composition-api'
import useSearch from '~/composables/search'
import { Verb } from '~/models'

const useVerbs = () => {
	const { $fire } = useContext()
	const { filter } = useSearch()

	const verbs = useAsync(async () => {
		const { docs } = await $fire.firestore
			.collection('verbs')
			.orderBy('infinitive', 'asc')
			.get()
		return docs.map(doc => doc.data()) as Verb[]
	})

	const filterVerbs = computed(() => verbs.value!.filter(doc => filter(doc)))

	return { verbs, filterVerbs }
}

export default useVerbs
