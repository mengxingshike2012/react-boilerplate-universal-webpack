'use strict';

module.exports = function pathToController(name) {
    let result = '';
    let nextUpperCase = false;
    for (const char of name) {
        if (char === '/') {
            nextUpperCase = true;
            continue;
        }
        if (char === '}') {
            continue;
        }
        if (char === '{') {
            nextUpperCase = true;
            result += 'By';
            continue;
        }
        if (nextUpperCase) {
            nextUpperCase = false;
            result += char.toUpperCase();
        } else {
            result += char;
        }
    }
    return result;
}