
var level = require('level')
  , dbPath = process.argv[2]
  , db = level(dbPath)

db.get('levelmeup', function (err, value) {
  console.log(value)
})

