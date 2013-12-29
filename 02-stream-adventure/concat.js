
var concat = require('concat-stream')

process.stdin.pipe(concat(function(all) {
  console.log(all.toString().split('').reverse().join(''))
}))
