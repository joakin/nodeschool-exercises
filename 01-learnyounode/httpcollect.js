
var http = require('http')

/* EVENTS VERSION
var content = ''
http.get(process.argv[2], function(res) {
  res.setEncoding('utf8')
  res.on('data', function(data) {
    content += data
  })
  res.on('error', console.error)
  res.on('end', function() {
    console.log(content.length)
    console.log(content)
  })
})
*/

/* STREAM VERSION */
var concat = require('concat-stream')

http.get(process.argv[2], function(res) {
  res.on('error', console.error)
  res.pipe(concat(function(buf) {
    var content = buf.toString()
    console.log(content.length)
    console.log(content)
  }))
})

