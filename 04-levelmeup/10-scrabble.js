
// Populates the db with the words
//+ LevelDb, Array[String], Fn
exports.init = function init(db, words, cb) {
  db.batch(words.map(op), cb)
}

// Querys the db for word
//+ LevelDb, String, Fn(Error, Array[String])
exports.query = function query(db, word, cb) {
  var f = filter(word)
    , matches = []
    , push = function(match) { matches.push(match.value) }
  db.createReadStream({ start: f.start, end: f.end })
  .on('data', push)
  .on('end', function() { cb(null, matches) })
  .on('error', cb)
}

function key(word) { return word.length + '!' + word }
function op(word) { return { type: 'put', key: key(word), value: word } }
function filter(word) {
  var k = key(word).split("*")[0]
  return {start: k, end: k+"\xff"}
}
