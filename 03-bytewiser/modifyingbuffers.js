
var concat = require('concat-stream')

process.stdin.pipe(concat(function(buf) {
  console.log(new Buffer(buf.toString().replace(/\./g, '!')))
}))
