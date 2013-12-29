
var through = require('through')

var upcaser = through(function(buf) {
  this.queue(buf.toString().toUpperCase())
})

process.stdin.pipe(upcaser).pipe(process.stdout)
