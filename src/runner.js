const glob = require('glob')
const path = require('path');

let tests = [];
const test = (config, t) => {
  tests = tests.concat({test: t, config });
}

const runTests = () => {
  tests.forEach(t => t.test(t.config))
}

module.exports = test

glob('**/*.test.js', {}, (err, files) => {
  files.forEach(f => require(path.resolve(f)));
  runTests();
})
