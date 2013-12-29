
var fs = require('fs')

var FileMatcher = function(ext) {
  return function(file) {
    return !!file.match(ext)
  }
}

module.exports = function (dir, str, next) {
  fs.readdir(dir, function(err, list) {
    if (err) { return next(err) }

    var ext = RegExp('\\.' + str)
      , files = list.filter(FileMatcher(ext))

    next(null, files)
  })
}

