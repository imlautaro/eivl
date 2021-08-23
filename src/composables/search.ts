import { ref } from '@nuxtjs/composition-api'
import { Verb } from '~/models'

const query = ref('')

const useSearch = () => {
	const filter = (doc: Verb) => {
		if (!query.value) return true
		const regexp = new RegExp(query.value, 'i')

		const text = Object.entries(doc)
			.map(i => i[1])
			.join()

		if (text.match(regexp)) return true

		return false
	}

	return { query, filter }
}

export default useSearch
