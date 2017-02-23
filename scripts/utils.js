'use strict';

const TAB_WIDTH = 4;

module.exports = {
    TAB_WIDTH,
    space(width) {
            return ' '.repeat(width);
    },
    tab(width) {
            return ' '.repeat(width * TAB_WIDTH);
    },
};