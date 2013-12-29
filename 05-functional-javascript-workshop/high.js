
module.exports = function repeat(fn, n) {
  if (n === 0) { return }
  repeat(fn, n-1)
  return fn()
}
