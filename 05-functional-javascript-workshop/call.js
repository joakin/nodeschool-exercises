
var args = require('./utils.js').args

module.exports = function duckCount() {
  var ducks = args(arguments)
  return ducks.reduce(function(n, d) {
    if (Object.prototype.hasOwnProperty.call(d, 'quack')) { ++n }
    return n
  }, 0)
}
