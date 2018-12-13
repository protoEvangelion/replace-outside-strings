"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replace(contents, strings) {
    var pattern = "(" + strings.s1 + ")(.*)(" + strings.s2 + ")";
    var replaced = false;
    var replacer = function (_, __, p2) {
        replaced = true;
        return "" + strings.r1 + p2 + strings.r2;
    };
    var newContent = contents.replace(new RegExp(pattern, 'gm'), replacer);
    return replaced && newContent;
}
exports.replace = replace;
