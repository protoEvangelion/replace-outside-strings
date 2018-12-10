# Replace Outside Strings

> CLI tool that will replace outside strings that you provide.

- **CLI usage**:

```bash
replace-outside-strings -d "/**/*.scss" --s1 "@include transform\(" --r1 "transform: " --s2 "\);" --r2 ";"
```

- **API usage**:

```javascript
const newContent = replace(fileContent, strings)
```

- [Replace Outside Strings](#replace-outside-strings)
	- [Install](#install)
	- [CLI](#cli)
		- [Examples](#examples)
	- [API](#api)
		- [How globs work](#how-globs-work)

## Install

```bash
npm i -g replace-outside-strings
```

- OR run with:

```bash
npx replace-outside-strings ...
```

## CLI

- **Usage**: `cli.ts [options]`

| Flag             |  Type   |                                                                         Description |
| ---------------- | :-----: | ----------------------------------------------------------------------------------: |
| -f, --file       | string  |                                                    Path of file you want to replace |
| -d, --directory  | string  |                   String glob of directory you want to replace files in recursively |
| --s1             | string  |                                                Beginning string you want to replace |
| --s2             | string  |                          Text content you want to replace the beginning string with |
| --r1             | string  |                                                   Ending string you want to replace |
| --r2             | string  |                             Text content you want to replace the ending string with |
| -n, --no-dry-run | boolean | By default dry run is set which means files will not be written unless you add this |
| -h, --help       | boolean |                                                            Output usage information |

- **Note**: make sure to double quote when passing in directory like: `-d "mydir/**/*.js"`

### Examples

- Test that css mixin replace works with dry run (*new file contents will be printed to console*):

```bash
replace-outside-strings -d "themes/*-theme/src/css/**/*.scss" --s1 "@include transform\(" --r1 "transform: " --s2 "\);" --r2 ";"
```

- Do it for real!

```bash
replace-outside-strings --no-dry-run -d "themes/*-theme/src/css/**/*.scss" --s1 "@include transform\(" --r1 "transform: " --s2 "\);" --r2 ";"
```

## API

```javascript
import { replace } from 'replace-outside-strings' //or
const { replace } = require('replace-outside-strings')

const newContent = replace(fileContent, strings)
// 2nd arg in shape of:
/* interface strings {
 	s1: string
 	s2: string
 	r1: string
 	r2: string
*/ }

console.log(newContent)
// Will return text if replace occurred.
// Will return false if nothing happened.- [Replace Outside Strings](#replace-outside-strings)
```

### How globs work

- https://www.npmjs.com/package/glob#glob-primer
