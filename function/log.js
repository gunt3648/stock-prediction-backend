var consola = require('consola');
var date = require('../function/date');

let logFunction = {};

logFunction.success = (path, method = 'get') => {
  consola.success({
    message: `${date.now()} :: ${method.toUpperCase()} ${path}`,
  });
};

logFunction.error = (path, err, method = 'get') => {
  consola.info({
    message: `${date.now()} :: ${method.toUpperCase()} ${path}`
  });
  consola.error(err);
};

module.exports = logFunction;