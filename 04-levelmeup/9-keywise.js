
var level = require('level')

var db = level(process.argv[2], {valueEncoding: 'json'})
  , data = require(process.argv[3])

function key(obj) {
  return (obj.type === 'user') ? obj.name
  : obj.user + '!' + obj.name
}

function op(item) { return {type: 'put', key: key(item), value: item} }

db.batch(data.map(op))
