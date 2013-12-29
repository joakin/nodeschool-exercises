var fs = require('fs')

var dir = process.argv[2]
  , ext = RegExp('\\.' + process.argv[3])

fs.readdir(dir, function(err, list) {
  if (err) throw err
  list.forEach(function(file, i) {
    if (file.match(ext)) {
      console.log(file)
    }
  })
})
