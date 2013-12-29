
var u = module.exports = {}

u.prop = function prop(key) {
  return function(obj) {
    return obj[key]
  }
}

u.args = function args(notAnArray) {
  return Array.prototype.slice.call(notAnArray)
}
