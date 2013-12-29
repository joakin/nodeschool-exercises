
module.exports = function map(arr, fn) {
  return arr.reduce(function(a, v, i) {
    a[i] = fn(v, i, arr)
    return a
  }, [])
}
