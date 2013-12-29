
module.exports = function reduce(array, fn, initial) {
  return (function reduceItem(index, store) {
    if (index === array.length) { return store }
    var next = fn(store, array[index], index, array)
    return reduceItem(index + 1, next)
  })(0, initial)
}
