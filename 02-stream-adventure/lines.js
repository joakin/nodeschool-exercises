
var through = require('through')
  , split = require('split')

var count = 0

var transformLine = through(function(buf) {

  // Even
  if (++count %2 === 0) {
    this.queue(buf.toString().toUpperCase() + '\n')
  } else {
    this.queue(buf.toString().toLowerCase() + '\n')
  }

})

process.stdin.pipe(split()).pipe(transformLine).pipe(process.stdout)
