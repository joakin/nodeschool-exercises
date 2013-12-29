
var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])
  , file = buf.toString()
  , lines = file.split('\n')
  , count = lines.length - 1

console.log(count)
