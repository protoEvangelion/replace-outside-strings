import { IArgs } from './interface';

export function replace(contents: string, strings: IArgs) {
	const pattern = `(${strings.s1})(.*)(${strings.s2})`;

	const replacer = (_, __, p2) => `${strings.r1}${p2}${strings.r2}`;

	return contents.replace(new RegExp(pattern, 'g'), replacer);
}
