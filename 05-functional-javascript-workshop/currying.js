
module.exports = function curry(fn, n) {
  var length = n || fn.length
  function curried(prev) {
    return function(arg) {
      var args = prev.concat(arg)
      if (args.length < length)
        return curried(args)
      return fn.apply(this, args)
    }
  }
  return curried([])
}

