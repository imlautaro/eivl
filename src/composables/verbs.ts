import { computed, useAsync, useContext } from '@nuxtjs/composition-api'
import useSearch from '~/composables/search'
import { Verb } from '~/models'

const useVerbs = () => {
	const { $supabase } = useContext()
	const { filter } = useSearch()

	const verbs = useAsync(async () => {
		const { data } = await $supabase
			.from<Verb>('eivl_verbs')
			.select('*')
			.order('infinitive', { ascending: true })
		return data
	})

	const filterVerbs = computed(() =>
		verbs.value!.filter((doc) => filter(doc))
	)

	return { verbs, filterVerbs }
}

export default useVerbs
