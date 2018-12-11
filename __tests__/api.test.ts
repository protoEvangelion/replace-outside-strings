import { replace } from '../src/api'
import content from './__fixtures__'

test('replace function replaces text with new text', () => {
	const argv = {
		r1: 'transition: ',
		r2: ';',
		s1: '@include transition\\(',
		s2: '\\);',
	}

	expect(replace(content, argv)).toMatchSnapshot()
})
