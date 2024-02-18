import type { Case, GenderOrNumber, ExampleType } from './constants'
export const translations: Record<Case | GenderOrNumber | ExampleType, string> =
	{
		nominative: 'Nominativ',
		accusative: 'Akkusativ',
		dative: 'Dativ',
		masculine: 'Maskulin',
		neuter: 'Neutral',
		feminine: 'Feminin',
		plural: 'Plural',
		definite: 'Bestimmte Artikel, Substantiv',
		indefinite: 'Unbestimmte Artikel, Substantiv',
		'negative-indefinite': 'Negativform unbestimmte Artikel, Substantiv',
		'definite-adjective': 'Bestimmte Artikel, Adjektiv, Substantiv',
		'indefinite-adjective': 'Unbestimmte Artikel, Adjektiv, Substantiv',
		'negative-indefinite-adjective':
			'Negativform unbestimmte Artikel, Adjektiv, Substantiv'
	}
