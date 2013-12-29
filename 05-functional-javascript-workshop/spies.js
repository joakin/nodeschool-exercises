
module.exports = function spy(obj, method) {
  var spy = { count: 0 }
    , fn = obj[method]
  obj[method] = function() {
    spy.count += 1
    return fn.apply(this, arguments)
  }
  return spy
}
