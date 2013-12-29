
var fs = require('fs')

var filePath = process.argv[2]

fs.readFile(filePath, function(err, data) {
  if (err) { console.error('Couldn\'t read file! ' + err) }
  var offset = 0
  for (var i = 0; i < data.length; i++) {
    if (data[i] === 10) {
      console.log(data.slice(offset, i))
      offset = i + 1
    }
  }
  console.log(data.slice(offset, data.length))
})
