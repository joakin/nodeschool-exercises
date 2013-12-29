
function double(n) { return n*2 }

module.exports = function doubleAll(numbers) {
  return numbers.map(double)
}
