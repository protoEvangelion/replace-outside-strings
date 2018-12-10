#!/usr/bin/env node

import * as program from 'commander'
import * as fs from 'fs'
import * as globby from 'globby'
import { replace } from './api'
import { IArgs } from './typings'

program
	.option('-f, --file [path]', '[path] of file you want to replace')
	.option(
		'-d, --directory [string]',
		'[string] of directory you want to replace files in recursively'
	)
	.option('--s1 <string>', 'Beginning string you want to replace')
	.option('--r1 <string>', 'Ending string you want to replace')
	.option('--s2 <string>', 'Text content you want to replace the beginning string with')
	.option('--r2 <string>', 'Text content you want to replace the ending string with')
	.option(
		'-n, --no-dry-run',
		'Print to console what the program would replace instead of rewriting the file (dry run is enabled by default)'
	)
	.parse(process.argv)

const argv = program as IArgs & program.CommanderStatic
;(async () => {
	if (argv.directory) {
		const paths = await globby(argv.directory)
		paths.forEach(writeFile)
	} else if (argv.file) {
		writeFile(argv.file)
	}
})()

function writeFile(file: string) {
	const fileContent = fs.readFileSync(file).toString()

	const newContent = replace(fileContent, argv)

	if (argv.dryRun && Boolean(newContent)) {
		console.log(newContent, '============================\n')
	} else if (Boolean(newContent)) {
		fs.writeFile(file, newContent, 'utf8', (err: Error) => {
			if (err) {
				throw new Error(`Error writing file: ${err}`)
			}

			console.log(`Successfully wrote ==> ${file}`)
		})
	}
}
