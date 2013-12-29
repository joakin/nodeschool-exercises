
var spawn = require('child_process').spawn
  , through = require('through')
  , duplex = require('duplexer')

module.exports = function(counter) {
  var input = through(write, end)
    , countries = {}

  return duplex(input, counter)

  function write(obj) {
    countries[obj.country] = (countries[obj.country] || 0) + 1
  }
  function end() {
    counter.setCounts(countries)
  }
}

