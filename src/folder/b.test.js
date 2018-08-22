const test = require('../runner');

test({ config: true, b: true }, config => {
  console.log('test ran with config:', config)
});
