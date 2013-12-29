
var concat = require('concat-stream')

process.stdin.pipe(concat(console.log))
