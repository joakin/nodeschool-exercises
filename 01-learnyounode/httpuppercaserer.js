
var http = require('http')
  , map = require('through2-map')

var upcase = map({ wantStrings: true}, function(str) {
  return str.toUpperCase()
})

http.createServer(function(req, res) {
  req.pipe(upcase).pipe(res)
}).listen(process.argv[2])

