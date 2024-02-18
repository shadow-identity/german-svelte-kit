import { type Example, type ExampleType, exampleTypes } from './constants'

export const toSortedByType = (examples: Map<ExampleType, Example[]>) => {
	const sorted: [ExampleType, Example[]][] = []
	for (let exampleType of exampleTypes) {
		if (examples.has(exampleType))
			sorted.push([exampleType, examples.get(exampleType)!])
	}
	return new Map(sorted)
}
