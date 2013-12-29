
var args = require('./utils.js').args

module.exports = function logger(prefix) {
  return function() {
    console.log.apply(null, [prefix].concat(args(arguments)))
  }
}
