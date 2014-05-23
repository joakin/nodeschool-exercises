
var level = require('level')
  , fs = require('fs')

var dbPath = process.argv[2]
  , db = level(dbPath)
  , file = fs.readFileSync(process.argv[3], { encoding: 'utf8' })

var lines = file.split('\n')
function words(line) { return line.split(',') }
function wordsToCmd(words) {
  return { type: words[0]
    , key: words[1]
    , value: (words.length>2? words[2]: null)
    }
}
function lineToCmd(line) { return wordsToCmd(words(line)) }

db.batch(lines.map(lineToCmd), function(err) {
  if (err) throw err
  db.close()
})
