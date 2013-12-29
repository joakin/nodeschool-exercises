
var concat = require('concat-stream')

function bufferRead(buf) {
  var res = new Uint8Array(buf.length)
  for (var i = 0; i < buf.length; i++) { res[i] = buf[i] }
  console.log(JSON.stringify(res))
}

process.stdin.pipe(concat(bufferRead))

