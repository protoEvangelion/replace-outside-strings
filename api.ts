import { IArgs } from './typings'

export function replace(contents: string, strings: IArgs): false | string {
	const pattern = `(${strings.s1})(.*)(${strings.s2})`
	let replaced = false

	const replacer = (_, __, p2) => {
		replaced = true

		return `${strings.r1}${p2}${strings.r2}`
	}

	const newContent = contents.replace(new RegExp(pattern, 'gm'), replacer)

	return replaced && newContent
}
