
var trumpet = require('trumpet')()
  , upcaser = require('./upcaser.js')

var toBeUpcased = trumpet.select('.loud').createStream()
toBeUpcased.pipe(upcaser()).pipe(toBeUpcased)

process.stdin.pipe(trumpet).pipe(process.stdout)

