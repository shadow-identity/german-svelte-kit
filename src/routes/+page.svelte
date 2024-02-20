<script lang="ts">
	import { examples } from '$lib/examples'
	import { groupBy } from '$lib/groupBy'
	import { toSortedByType } from '$lib/toSortedByType'
	import {
		type Case,
		type ExampleType,
		caseNames,
		exampleTypes,
	} from '$lib/constants'

	import { translations } from '$lib/translations'
	import Row from './Row.svelte'

	let byCase = groupBy(examples, (example) => example.case)
	const allExamplesByType = groupBy(examples, ({ type }) => type)
	let examplesByType = structuredClone(allExamplesByType)

	let visibleCases = [...caseNames]
	const only = (caseName: Case) => (visibleCases = [caseName])

	const updateExampleContent = (
		event: Event & {
			currentTarget: HTMLInputElement
		},
	) => {
		const exampleType = event.currentTarget.name as ExampleType
		const visible = event.currentTarget.checked
		if (!visible) examplesByType.delete(exampleType)
		else {
			examplesByType.set(
				exampleType,
				allExamplesByType.get(exampleType) ?? [],
			)
			examplesByType = toSortedByType(examplesByType)
		}
		byCase = groupBy(
			[...examplesByType.values()].flat(),
			(example) => example.case,
		)
	}
</script>

<a href="/words">{translations.ui.wordsLearning}</a>
<x-wrapper>
	<x-examples-type>
		{#each exampleTypes as exampleType}
			<label>
				{translations[exampleType]}
				<input
					type="checkbox"
					name={exampleType}
					checked={examplesByType.has(exampleType)}
					on:change={updateExampleContent}
				/>
			</label>
		{/each}
	</x-examples-type>
	<x-table-wrapper>
		<table data-show={visibleCases}>
			<thead>
				<th>
					<button on:click={() => (visibleCases = [...caseNames])}>
						Reset
					</button>
				</th>
				<th> {translations.masculine} </th>
				<th> {translations.neuter} </th>
				<th> {translations.feminine} </th>
				<th> {translations.plural} </th>
			</thead>
			{#each visibleCases as caseName}
				<tr data-case={caseName}>
					<th>
						<x-case>
							{translations[caseName]}
							<button on:click={() => only(caseName)}>nur</button>
						</x-case>
					</th>
					<Row caseItems={byCase.get(caseName) ?? []} />
				</tr>
			{/each}
		</table>
	</x-table-wrapper>
</x-wrapper>

<style>
	th {
		padding: 0.4rem;
	}
	th,
	:global(td) {
		border: 1px solid var(--border-color);
	}

	:global(td) {
		padding: 0;
	}
	x-wrapper {
		width: 100vw;
		width: 100dvw;
		height: 100vh;
		height: 100dvh;
		display: grid;
		grid-template-rows: min-content 1fr;
		justify-content: center;
	}

	table {
		font-family: sans-serif;
		line-height: 1.5rem;
		border-collapse: collapse;
		border-spacing: 0;
	}

	tr {
		display: none;
	}

	[data-show*='nominative'] > [data-case='nominative'],
	[data-show*='accusative'] > [data-case='accusative'],
	[data-show*='dative'] > [data-case='dative'] {
		display: revert;
	}

	x-examples-type {
		display: flex;
		flex-direction: column;
		align-items: end;
	}

	x-examples-type > label {
		line-height: 2rem;
	}

	/* 💅 */
	x-table-wrapper {
		background: var(--background-color);
	}

	x-case {
		display: grid;
		grid-template-rows: 1fr max-content max-content;
		align-content: stretch;
	}
</style>
