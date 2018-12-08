import { replace } from './api'

test('replace function replaces text with new text', () => {
	const content = `
		.osb-nav-overlay {
			z-index: 0;

			@include transition(opacity 1s $navBezier);
			@include transition(yolo 3s ballin);
		}
	`

	const argv = {
		s1: '@include transition\\(',
		r1: 'transition: ',
		s2: '\\);',
		r2: ';',
	}

	console.log('replace(content, argv)', replace(content, argv))

	expect(replace(content, argv)).toMatchSnapshot()
})
