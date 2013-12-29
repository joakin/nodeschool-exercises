
var args = process.argv.slice(2, process.argv.length)
  , add = function(x, y) { return parseInt(x) + parseInt(y) }

console.log(args.reduce(add, 0))
