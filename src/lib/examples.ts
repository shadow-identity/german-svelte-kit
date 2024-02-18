import type { Example } from './constants'
const adjectiveBase = 'nett'
const noumMasculine = 'Mann'
const nounNeuter = 'Kind'
const nounFeminine = 'Frau'
const nounPlural = 'Leute'

const nominativeMasculine: Example[] = [
	{
		type: 'definite',
		case: 'nominative',
		genderOrNumber: 'masculine',
		articleBase: 'd',
		articleEnding: 'er',
		nounBase: noumMasculine
	},
	{
		type: 'indefinite',
		case: 'nominative',
		genderOrNumber: 'masculine',
		articleBase: 'ein',
		articleEnding: '',
		nounBase: noumMasculine
	},
	{
		type: 'negative-indefinite',
		case: 'nominative',
		genderOrNumber: 'masculine',
		articleBase: 'kein',
		articleEnding: '',
		nounBase: noumMasculine
	},
	{
		type: 'definite-adjective',
		case: 'nominative',
		genderOrNumber: 'masculine',
		articleBase: 'd',
		articleEnding: 'er',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: noumMasculine
	},
	{
		type: 'indefinite-adjective',
		case: 'nominative',
		genderOrNumber: 'masculine',
		articleBase: 'ein',
		articleEnding: '',
		adjectiveBase,
		adjectiveEnding: 'er',
		nounBase: noumMasculine
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'nominative',
		genderOrNumber: 'masculine',
		articleBase: 'kein',
		articleEnding: '',
		adjectiveBase,
		adjectiveEnding: 'er',
		nounBase: noumMasculine
	}
]

const nominativeNeuter: Example[] = [
	{
		type: 'definite',
		case: 'nominative',
		genderOrNumber: 'neuter',
		articleBase: 'd',
		articleEnding: 'as',
		nounBase: nounNeuter
	},
	{
		type: 'indefinite',
		case: 'nominative',
		genderOrNumber: 'neuter',
		articleBase: 'ein',
		articleEnding: '',
		nounBase: nounNeuter
	},
	{
		type: 'negative-indefinite',
		case: 'nominative',
		genderOrNumber: 'neuter',
		articleBase: 'kein',
		articleEnding: '',
		nounBase: nounNeuter
	},
	{
		type: 'definite-adjective',
		case: 'nominative',
		genderOrNumber: 'neuter',
		articleBase: 'd',
		articleEnding: 'as',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: nounNeuter
	},
	{
		type: 'indefinite-adjective',
		case: 'nominative',
		genderOrNumber: 'neuter',
		articleBase: 'ein',
		articleEnding: '',
		adjectiveBase,
		adjectiveEnding: 'es',
		nounBase: nounNeuter
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'nominative',
		genderOrNumber: 'neuter',
		articleBase: 'kein',
		articleEnding: '',
		adjectiveBase,
		adjectiveEnding: 'es',
		nounBase: nounNeuter
	}
]

const nominativeFeminine: Example[] = [
	{
		type: 'definite',
		case: 'nominative',
		genderOrNumber: 'feminine',
		articleBase: 'd',
		articleEnding: 'ie',
		nounBase: nounFeminine
	},
	{
		type: 'indefinite',
		case: 'nominative',
		genderOrNumber: 'feminine',
		articleBase: 'ein',
		articleEnding: 'e',
		nounBase: nounFeminine
	},
	{
		type: 'negative-indefinite',
		case: 'nominative',
		genderOrNumber: 'feminine',
		articleBase: 'kein',
		articleEnding: 'e',
		nounBase: nounFeminine
	},
	{
		type: 'definite-adjective',
		case: 'nominative',
		genderOrNumber: 'feminine',
		articleBase: 'd',
		articleEnding: 'ie',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: nounFeminine
	},
	{
		type: 'indefinite-adjective',
		case: 'nominative',
		genderOrNumber: 'feminine',
		articleBase: 'ein',
		articleEnding: 'e',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: nounFeminine
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'nominative',
		genderOrNumber: 'feminine',
		articleBase: 'kein',
		articleEnding: 'e',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: nounFeminine
	}
]

const nominativePlural: Example[] = [
	{
		type: 'definite',
		case: 'nominative',
		genderOrNumber: 'plural',
		articleBase: 'd',
		articleEnding: 'ie',
		nounBase: nounPlural
	},
	{
		type: 'indefinite',
		case: 'nominative',
		genderOrNumber: 'plural',
		articleBase: '-',
		articleEnding: '',
		nounBase: nounPlural
	},
	{
		type: 'negative-indefinite',
		case: 'nominative',
		genderOrNumber: 'plural',
		articleBase: 'kein',
		articleEnding: 'e',
		nounBase: nounPlural
	},
	{
		type: 'definite-adjective',
		case: 'nominative',
		genderOrNumber: 'plural',
		articleBase: 'd',
		articleEnding: 'ie',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounPlural
	},
	{
		type: 'indefinite-adjective',
		case: 'nominative',
		genderOrNumber: 'plural',
		articleBase: '-',
		articleEnding: '',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: nounPlural
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'nominative',
		genderOrNumber: 'plural',
		articleBase: 'kein',
		articleEnding: 'e',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounPlural
	}
]

const accusativeMasculine: Example[] = [
	{
		type: 'definite',
		case: 'accusative',
		genderOrNumber: 'masculine',
		articleBase: 'd',
		articleEnding: 'en',
		nounBase: noumMasculine
	},
	{
		type: 'indefinite',
		case: 'accusative',
		genderOrNumber: 'masculine',
		articleBase: 'ein',
		articleEnding: 'en',
		nounBase: noumMasculine
	},
	{
		type: 'negative-indefinite',
		case: 'accusative',
		genderOrNumber: 'masculine',
		articleBase: 'kein',
		articleEnding: 'en',
		nounBase: noumMasculine
	},
	{
		type: 'definite-adjective',
		case: 'accusative',
		genderOrNumber: 'masculine',
		articleBase: 'd',
		articleEnding: 'en',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: noumMasculine
	},
	{
		type: 'indefinite-adjective',
		case: 'accusative',
		genderOrNumber: 'masculine',
		articleBase: 'ein',
		articleEnding: 'en',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: noumMasculine
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'accusative',
		genderOrNumber: 'masculine',
		articleBase: 'kein',
		articleEnding: 'en',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: noumMasculine
	}
]

const accusativeNeuter: Example[] = [
	{
		type: 'definite',
		case: 'accusative',
		genderOrNumber: 'neuter',
		articleBase: 'd',
		articleEnding: 'as',
		nounBase: nounNeuter
	},
	{
		type: 'indefinite',
		case: 'accusative',
		genderOrNumber: 'neuter',
		articleBase: 'ein',
		articleEnding: '',
		nounBase: nounNeuter
	},
	{
		type: 'negative-indefinite',
		case: 'accusative',
		genderOrNumber: 'neuter',
		articleBase: 'kein',
		articleEnding: '',
		nounBase: nounNeuter
	},
	{
		type: 'definite-adjective',
		case: 'accusative',
		genderOrNumber: 'neuter',
		articleBase: 'd',
		articleEnding: 'as',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: nounNeuter
	},
	{
		type: 'indefinite-adjective',
		case: 'accusative',
		genderOrNumber: 'neuter',
		articleBase: 'ein',
		articleEnding: '',
		adjectiveBase,
		adjectiveEnding: 'es',
		nounBase: nounNeuter
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'accusative',
		genderOrNumber: 'neuter',
		articleBase: 'kein',
		articleEnding: '',
		adjectiveBase,
		adjectiveEnding: 'es',
		nounBase: nounNeuter
	}
]

const accusativeFeminine: Example[] = [
	{
		type: 'definite',
		case: 'accusative',
		genderOrNumber: 'feminine',
		articleBase: 'd',
		articleEnding: 'ie',
		nounBase: nounFeminine
	},
	{
		type: 'indefinite',
		case: 'accusative',
		genderOrNumber: 'feminine',
		articleBase: 'ein',
		articleEnding: 'e',
		nounBase: nounFeminine
	},
	{
		type: 'negative-indefinite',
		case: 'accusative',
		genderOrNumber: 'feminine',
		articleBase: 'kein',
		articleEnding: 'e',
		nounBase: nounFeminine
	},
	{
		type: 'definite-adjective',
		case: 'accusative',
		genderOrNumber: 'feminine',
		articleBase: 'd',
		articleEnding: 'ie',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: nounFeminine
	},
	{
		type: 'indefinite-adjective',
		case: 'accusative',
		genderOrNumber: 'feminine',
		articleBase: 'ein',
		articleEnding: 'e',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: nounFeminine
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'accusative',
		genderOrNumber: 'feminine',
		articleBase: 'kein',
		articleEnding: 'e',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: nounFeminine
	}
]

const accusativePlural: Example[] = [
	{
		type: 'definite',
		case: 'accusative',
		genderOrNumber: 'plural',
		articleBase: 'd',
		articleEnding: 'ie',
		nounBase: nounPlural
	},
	{
		type: 'indefinite',
		case: 'accusative',
		genderOrNumber: 'plural',
		articleBase: '-',
		articleEnding: '',
		nounBase: nounPlural
	},
	{
		type: 'negative-indefinite',
		case: 'accusative',
		genderOrNumber: 'plural',
		articleBase: 'kein',
		articleEnding: 'e',
		nounBase: nounPlural
	},
	{
		type: 'definite-adjective',
		case: 'accusative',
		genderOrNumber: 'plural',
		articleBase: 'd',
		articleEnding: 'ie',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounPlural
	},
	{
		type: 'indefinite-adjective',
		case: 'accusative',
		genderOrNumber: 'plural',
		articleBase: '-',
		articleEnding: '',
		adjectiveBase,
		adjectiveEnding: 'e',
		nounBase: nounPlural
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'accusative',
		genderOrNumber: 'plural',
		articleBase: 'kein',
		articleEnding: 'e',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounPlural
	}
]

const dativeMasculine: Example[] = [
	{
		type: 'definite',
		case: 'dative',
		genderOrNumber: 'masculine',
		articleBase: 'd',
		articleEnding: 'em',
		nounBase: noumMasculine
	},
	{
		type: 'indefinite',
		case: 'dative',
		genderOrNumber: 'masculine',
		articleBase: 'ein',
		articleEnding: 'em',
		nounBase: noumMasculine
	},
	{
		type: 'negative-indefinite',
		case: 'dative',
		genderOrNumber: 'masculine',
		articleBase: 'kein',
		articleEnding: 'em',
		nounBase: noumMasculine
	},
	{
		type: 'definite-adjective',
		case: 'dative',
		genderOrNumber: 'masculine',
		articleBase: 'd',
		articleEnding: 'em',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: noumMasculine
	},
	{
		type: 'indefinite-adjective',
		case: 'dative',
		genderOrNumber: 'masculine',
		articleBase: 'ein',
		articleEnding: 'em',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: noumMasculine
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'dative',
		genderOrNumber: 'masculine',
		articleBase: 'kein',
		articleEnding: 'em',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: noumMasculine
	}
]

const dativeNeuter: Example[] = [
	{
		type: 'definite',
		case: 'dative',
		genderOrNumber: 'neuter',
		articleBase: 'd',
		articleEnding: 'em',
		nounBase: nounNeuter
	},
	{
		type: 'indefinite',
		case: 'dative',
		genderOrNumber: 'neuter',
		articleBase: 'ein',
		articleEnding: 'em',
		nounBase: nounNeuter
	},
	{
		type: 'negative-indefinite',
		case: 'dative',
		genderOrNumber: 'neuter',
		articleBase: 'kein',
		articleEnding: 'em',
		nounBase: nounNeuter
	},
	{
		type: 'definite-adjective',
		case: 'dative',
		genderOrNumber: 'neuter',
		articleBase: 'd',
		articleEnding: 'em',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounNeuter
	},
	{
		type: 'indefinite-adjective',
		case: 'dative',
		genderOrNumber: 'neuter',
		articleBase: 'ein',
		articleEnding: 'em',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounNeuter
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'dative',
		genderOrNumber: 'neuter',
		articleBase: 'kein',
		articleEnding: 'em',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounNeuter
	}
]

const dativeFeminine: Example[] = [
	{
		type: 'definite',
		case: 'dative',
		genderOrNumber: 'feminine',
		articleBase: 'd',
		articleEnding: 'er',
		nounBase: nounFeminine
	},
	{
		type: 'indefinite',
		case: 'dative',
		genderOrNumber: 'feminine',
		articleBase: 'ein',
		articleEnding: 'er',
		nounBase: nounFeminine
	},
	{
		type: 'negative-indefinite',
		case: 'dative',
		genderOrNumber: 'feminine',
		articleBase: 'kein',
		articleEnding: 'er',
		nounBase: nounFeminine
	},
	{
		type: 'definite-adjective',
		case: 'dative',
		genderOrNumber: 'feminine',
		articleBase: 'd',
		articleEnding: 'er',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounFeminine
	},
	{
		type: 'indefinite-adjective',
		case: 'dative',
		genderOrNumber: 'feminine',
		articleBase: 'ein',
		articleEnding: 'er',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounFeminine
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'dative',
		genderOrNumber: 'feminine',
		articleBase: 'kein',
		articleEnding: 'er',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounFeminine
	}
]

const dativePlural: Example[] = [
	{
		type: 'definite',
		case: 'dative',
		genderOrNumber: 'plural',
		articleBase: 'd',
		articleEnding: 'en',
		nounBase: nounPlural,
		nounEnding: 'n'
	},
	{
		type: 'indefinite',
		case: 'dative',
		genderOrNumber: 'plural',
		articleBase: '-',
		articleEnding: '',
		nounBase: nounPlural,
		nounEnding: 'n'
	},
	{
		type: 'negative-indefinite',
		case: 'dative',
		genderOrNumber: 'plural',
		articleBase: 'kein',
		articleEnding: 'en',
		nounBase: nounPlural,
		nounEnding: 'n'
	},
	{
		type: 'definite-adjective',
		case: 'dative',
		genderOrNumber: 'plural',
		articleBase: 'd',
		articleEnding: 'en',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounPlural,
		nounEnding: 'n'
	},
	{
		type: 'indefinite-adjective',
		case: 'dative',
		genderOrNumber: 'plural',
		articleBase: '-',
		articleEnding: '',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounPlural,
		nounEnding: 'n'
	},
	{
		type: 'negative-indefinite-adjective',
		case: 'dative',
		genderOrNumber: 'plural',
		articleBase: 'kein',
		articleEnding: 'en',
		adjectiveBase,
		adjectiveEnding: 'en',
		nounBase: nounPlural,
		nounEnding: 'n'
	}
]

export const examples: Example[] = nominativeMasculine.concat(
	nominativeNeuter,
	nominativeFeminine,
	nominativePlural,
	accusativeMasculine,
	accusativeNeuter,
	accusativeFeminine,
	accusativePlural,
	dativeMasculine,
	dativeNeuter,
	dativeFeminine,
	dativePlural
)
