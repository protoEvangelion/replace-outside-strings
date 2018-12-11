import * as child_process from 'child_process'

test('check if cli works end to end', () => {
	const result = child_process.spawnSync(
		'npx',
		[
			'ts-node',
			'src/cli.ts',
			'-f',
			'__tests__/__fixtures__/index.ts',
			'--s1',
			'@include transition\\(',
			'--s2',
			'\\);',
			'--r1',
			'transition: ',
			'--r2',
			';',
		],
		{ cwd: process.cwd() }
	)

	expect(result.stdout.toString()).toMatchSnapshot()
})
