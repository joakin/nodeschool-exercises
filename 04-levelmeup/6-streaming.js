
var level = require('level')

var dbPath = process.argv[2]
  , db = level(dbPath)

db.createReadStream()
.on('data', function (data) {
  console.log(data.key+'='+data.value)
})
.on('error', console.error)

