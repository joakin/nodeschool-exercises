
var http = require('http')
  , concat = require('concat-stream')

var urls = process.argv.slice(2, process.argv.length)
  , contents = []
  , count = 0
  , total = urls.length

urls.forEach(getFromInternet)

function getFromInternet(url, order) {
  http.get(url, function(res) {
    res.pipe(concat(function(buf) {
      contents[order] = buf.toString()
      pageReceived()
    }))
  })
}

function pageReceived() {
  if (++count === total) {
    printResults()
  }
}

function printResults() {
  contents.forEach(function(v) { console.log(v) })
}
