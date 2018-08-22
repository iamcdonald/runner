const test = require('./runner');

test({ config: true, a: true }, config => {
  console.log('test ran with config:', config)
});
