<script lang="ts">
	import type { Example } from '$lib/constants'
	import { groupBy } from '$lib/groupBy'

	export let caseItems: Example[]

	const extractGenderOrNumber = (example: Example) => example.genderOrNumber
</script>

{#each groupBy(caseItems, extractGenderOrNumber).values() as exampleGroup}
	<td>
		{#each exampleGroup as example}
			<x-example>
				{example.articleBase}<b>{example.articleEnding}</b>
				{example.adjectiveBase ?? ''}<b>{example.adjectiveEnding ?? ''}</b>
				{example.nounBase}
			</x-example>
		{/each}
	</td>
{/each}

<style>
	x-example {
		display: block;
		padding: 0.5rem;
	}
	x-example:nth-of-type(2n) {
		background-color: var(--background-color-alternate);
	}

	b {
		color: var(--accent);
	}
</style>
