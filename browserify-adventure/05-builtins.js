var url = require('url')

var addr = prompt()
// var addr = 'http://asdf.asdf/?file=ass'
var parsedAddr = url.parse(addr, true)
var file = parsedAddr.query.file

console.log(url.resolve(addr, file))



