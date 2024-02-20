export type Gender = 'masculine' | 'neuter' | 'feminine'
export type GenderOrNumber = Gender | 'plural'
export type Case = (typeof caseNames)[number]
export type ExampleType = (typeof exampleTypes)[number]

export const caseNames = ['nominative', 'accusative', 'dative'] as const

export const exampleTypes = [
	'definite',
	'indefinite',
	'negative-indefinite',
	'definite-adjective',
	'indefinite-adjective',
	'negative-indefinite-adjective',
] as const

export type Example = {
	articleBase: string
	articleEnding: string
	nounBase: string
	nounEnding?: string
	genderOrNumber: GenderOrNumber
	case: Case
	type: ExampleType
	adjectiveBase?: string
	adjectiveEnding?: string
}
