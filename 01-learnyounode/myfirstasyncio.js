
var fs = require('fs')

fs.readFile(process.argv[2], function(err, buf) {
  if (err) throw Error(err)
  var file = buf.toString()
    , lines = file.split('\n')
    , count = lines.length - 1
  console.log(count)
})
