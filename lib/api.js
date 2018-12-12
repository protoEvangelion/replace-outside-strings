"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replace(contents, strings) {
    const pattern = `(${strings.s1})(.*)(${strings.s2})`;
    let replaced = false;
    const replacer = (_, __, p2) => {
        replaced = true;
        return `${strings.r1}${p2}${strings.r2}`;
    };
    const newContent = contents.replace(new RegExp(pattern, 'gm'), replacer);
    return replaced && newContent;
}
exports.replace = replace;
//# sourceMappingURL=api.js.map