
var level = require('level')

var path = process.argv[2]
  , db = level(path)

function print(key, value) {
  console.log('key' + key + '=' + value)
}

function checkKey(i) {
  db.get('key'+i, function(err, value) {
    if (err) {
      if (err.type !== 'NotFoundError')
        throw err
    } else {
      print(i, value)
    }
    if (i < 100)
      checkKey(i+1)
  })
}

checkKey(0)
