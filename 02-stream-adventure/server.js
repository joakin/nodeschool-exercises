
var upcaser = require('./upcaser')
  , http = require('http')

process.on('uncaughtException', function(e) {
  console.error(e)
})

http.createServer(function(req, res) {
  res.end('HELLO\n')
  // if (req.method === 'POST')
  //   req.pipe(upcaser()).pipe(res)
}).listen(Number(process.argv[2]))
