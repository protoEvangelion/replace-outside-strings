#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const program = require("commander");
const fs = require("fs");
const globby = require("globby");
const api_1 = require("./api");
program
    .option('-f, --file [path]', '[path] of file you want to replace')
    .option('-d, --directory [string]', '[string] of directory you want to replace files in recursively')
    .option('--s1 <string>', 'Beginning string you want to replace')
    .option('--r1 <string>', 'Ending string you want to replace')
    .option('--s2 <string>', 'Text content you want to replace the beginning string with')
    .option('--r2 <string>', 'Text content you want to replace the ending string with')
    .option('-n, --no-dry-run', 'Print to console what the program would replace instead of rewriting the file (dry run is enabled by default)')
    .parse(process.argv);
const argv = program;
(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
    if (argv.directory) {
        const paths = yield globby(argv.directory);
        paths.forEach(writeFile);
    }
    else if (argv.file) {
        writeFile(argv.file);
    }
}))();
function writeFile(file) {
    const fileContent = fs.readFileSync(file).toString();
    const newContent = api_1.replace(fileContent, argv);
    if (argv.dryRun && Boolean(newContent)) {
        console.log(newContent, '============================\n');
    }
    else if (Boolean(newContent)) {
        fs.writeFile(file, newContent, 'utf8', (err) => {
            if (err) {
                throw new Error(`Error writing file: ${err}`);
            }
            console.log(`Successfully wrote ==> ${file}`);
        });
    }
}
//# sourceMappingURL=cli.js.map