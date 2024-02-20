import { openDB, type DBSchema } from 'idb'
import { get, set } from 'idb-keyval'

const WORDS_STORE = 'words'
const SELECTION_STORE = 'selection'

export type Word = {
	gender: 'feminine' | 'masculine' | 'neuter'
	root: string
	plural?: string
	translation?: string
}

export type Selection = {
	showGender?: 'color' | '' | 'both'
}

export interface WordsDB extends DBSchema {
	[WORDS_STORE]: {
		key: string
		value: Word
		indexes: { 'by-root': string }
	}
	[SELECTION_STORE]: {
		key: string
		value: Selection
	}
}

const db = openDB<WordsDB>(WORDS_STORE, 2, {
	upgrade(db) {
		try {
			const wordsStore = db.createObjectStore(WORDS_STORE, {
				keyPath: 'root',
			})
			wordsStore.createIndex('by-root', 'root')
		} finally {
			db.createObjectStore(SELECTION_STORE)
		}
	},
})

export const getWord = async (key: string) => {
	return await (await db).get(WORDS_STORE, key)
}

export const setWord = async (val: Word) => {
	return (await db).put(WORDS_STORE, val)
}

export const getAllWords = async () => {
	return (await db).getAll(WORDS_STORE)
}

export const getSelection = async () => {
	return (await get<Selection>('selection')) ?? {}
}

export const setSelection = async (value: Selection) => {
	return await set('selection', value)
}
