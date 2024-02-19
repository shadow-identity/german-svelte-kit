export const groupBy = <K, V>(
	items: V[],
	callbackfn: (item: V, index: number) => K,
): Map<K, V[]> => {
	const map = new Map<K, V[]>()
	let k = 0
	items.forEach((value) => {
		const key = callbackfn(value, k++)
		if (!map.has(key)) map.set(key, [value])
		else map.get(key)!.push(value)
	})

	return map
}
