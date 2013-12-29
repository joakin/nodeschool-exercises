
var combine = require('stream-combiner')
  , split = require('split')
  , through = require('through')
  , zlib = require('zlib')

var cache

module.exports = function() {

  return combine(
    split(),
    grouper(),
    zlib.createGzip()
  )
}

function grouper() {
  return through(function(str) {
    if (str.length === 0) return
    var item = JSON.parse(str)

    if (item.type === 'genre') {
      if (cache) {
        this.queue(JSON.stringify(cache) + '\n')
      }
      cache = { name: item.name, books: [] }
    } else if (item.type === 'book') {
      cache.books.push(item.name)
    }

  }, function() {
    if (cache) {
      this.queue(JSON.stringify(cache) + '\n')
    }
    this.queue(null)
  })
}
