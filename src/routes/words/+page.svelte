<script lang="ts">
	import type { Gender } from '$lib/constants'
	import {
		getAllWords,
		setWord,
		getSelection,
		setSelection,
		type Selection,
	} from '$lib/db'
	import { translations } from '$lib/translations'
	import { onMount } from 'svelte'

	const wordsPromise = getAllWords()
	let gender: Gender
	let root = ''
	let plural: string
	let translation: string

	let genderRepresentation: Selection['showGender'] = 'both'
	let selection: Selection = {}

	onMount(async () => {
		selection = await getSelection()
		genderRepresentation = selection.showGender ?? 'both'
	})

	const submit = () => {
		setWord({ gender, root, plural, translation })
	}

	$: setSelection({ showGender: genderRepresentation })
</script>

<form>
	<fieldset>
		<legend>Gender *</legend>
		<label>
			<input type="radio" bind:group={gender} value="masculine" />
			{translations.masculine}
		</label>
		<label>
			<input type="radio" bind:group={gender} value="neuter" />
			{translations.neuter}
		</label>
		<label>
			<input type="radio" bind:group={gender} value="feminine" />
			{translations.feminine}
		</label>
	</fieldset>

	<label for="root">
		{translations.root} *
	</label>
	<input
		name="root"
		type="text"
		bind:value={root}
		spellcheck="true"
		size="10"
		placeholder="Frau"
	/>
	<label for="plural">
		{translations.plural}
	</label>
	<input
		name="plural"
		type="text"
		bind:value={plural}
		size="5"
		spellcheck="false"
		placeholder="-en"
	/>
	<label for="t9n">
		{translations.ui.translation}
	</label>
	<input
		name="t9n"
		type="text"
		bind:value={translation}
		spellcheck="false"
		placeholder="Woman"
		size="10"
	/>
	<button on:click={submit} disabled={!gender || !root}>
		{translations.ui.save}
	</button>
</form>
<hr />

{#await wordsPromise}
	...
{:then words}
	<label>
		{translations.ui.genderAppearance}:
		<select bind:value={genderRepresentation}>
			<option value={'color'}>{translations.ui.showColorLabel}</option>
			<option value={'article'}>
				{translations.ui.showDefiniteArticle}
			</option>
			<option value={'both'}>{translations.ui.both}</option>
		</select>
	</label>
	<dl>
		{#each words as { gender, root, plural, translation }}
			<div>
				<dt
					data-gender={gender}
					data-gender-representation={genderRepresentation}
				>
					<x-article>
						{translations.definiteArticles[gender]}
					</x-article>
					<b>{root}</b>
					<i>{plural ?? ''}</i>
				</dt>
				{#if translation}
					:
					<dd>{translation}</dd>
				{/if}
			</div>
		{/each}
	</dl>
{/await}

<style>
	* {
		line-height: 200%;
	}

	form {
		display: grid;
		grid-template-areas:
			'gender gender'
			'root   root-input'
			'plural plural-input'
			't9n    t9n-input'
			'submit submit';
		align-items: start;

		gap: 1rem;
	}

	form > label {
		justify-self: end;
	}

	form > label::after {
		content: ':';
	}

	fieldset {
		min-width: max-content;
		display: flex;
		flex-direction: column;
		grid-area: gender;
	}

	@media (width > 35rem) {
		form {
			grid-template-columns: max-content repeat(3, 1fr) min-content;
			grid-template-areas:
				'gender  root       plural       t9n       .'
				'gender  root-input plural-input t9n-input submit';
			gap: 0 1rem;
		}

		form > label {
			justify-self: start;
			align-self: end;
		}

		form > label::after {
			content: '';
		}

		fieldset {
			width: auto;
		}
	}
	label[for='root'] {
		grid-area: root;
	}

	input[name='root'] {
		grid-area: root-input;
	}

	label[for='plural'] {
		grid-area: plural;
	}
	input[name='plural'] {
		grid-area: plural-input;
	}

	label[for='t9n'] {
		grid-area: t9n;
	}
	input[name='t9n'] {
		grid-area: t9n-input;
	}

	button {
		grid-area: submit;
	}

	dt,
	dd {
		display: inline;
	}

	dt:not([data-gender-representation='article'])::before {
		content: '●';
		display: inline-block;
		width: 1em;
	}

	dt[data-gender='masculine']::before {
		color: red;
	}
	dt[data-gender='neuter']::before {
		color: blue;
	}
	dt[data-gender='feminine']::before {
		color: green;
	}

	dt[data-gender-representation='color'] x-article {
		display: none;
	}

	dd {
		margin: 0.5rem;
	}
</style>
