var through = require('through')

module.exports = function () {
  return through(function(buf) {
    this.queue(buf.toString().toUpperCase())
  })
}

