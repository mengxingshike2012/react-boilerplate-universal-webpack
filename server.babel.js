//  enable runtime transpilation to use ES6/7 in node

const fs = require('fs')

const babelrc = fs.readFileSync('./.babelrc')
let config = null

try {
  config = JSON.parse(babelrc)
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

/* mock render count */
console.count = () => {}
/* use bluebird as default promise */
require('babel-runtime/core-js/promise').default = require('bluebird')
require('babel-register')(config);
