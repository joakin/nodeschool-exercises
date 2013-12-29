
function str(name, version) { return name + '@' + version }

function merge(dst, deps) {
  deps.forEach(function(dep) {
    if (dst.indexOf(dep) === -1) { dst.push(dep) }
  })
}

function getDeps(deps) {
  var res = []
  Object.keys(deps).forEach(function(name) {
    var info = deps[name]
    merge(res, [str(name, info.version)])
    if (info.dependencies) { merge(res, getDeps(info.dependencies)) }
  })
  return res
}

function getDependencies(tree) {
  var deps = []
  if (tree.dependencies) {
    deps = getDeps(tree.dependencies).sort()
  }
  return deps
}
module.exports = getDependencies

