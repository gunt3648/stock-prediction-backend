var dateFormat = require('dateformat');
let dateFunction = {};

dateFunction.now = _ => {
  const date = new Date();
  return `${dateFormat(date, "mmmm dS, yyyy")}, ${dateFormat("longTime")}`;
};

module.exports = dateFunction;