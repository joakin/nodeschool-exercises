
var spawn = require('child_process').spawn
  , duplex = require('duplexer')

module.exports = function(cmd, args) {
  var pr = spawn(cmd, args)
  return duplex(pr.stdin, pr.stdout)
}

