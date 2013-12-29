var filteredLs = require('./makeitmodularmodule')

var dir = process.argv[2]
  , ext = process.argv[3]

filteredLs(dir, ext, function(err, files) {
  if (err) { return console.log('ERROR: err') }
  files.forEach(function(file) { console.log(file) })
})
