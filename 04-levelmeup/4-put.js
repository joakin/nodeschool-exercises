
var level = require('level')
  , path = process.argv[2]
  , db = level(path)
  , json = process.argv[3]
  , obj = JSON.parse(json)
  , keys = Object.keys(obj)

keys.forEach(function(key) {
  var value = obj[key]
  db.put(key, value)
})
