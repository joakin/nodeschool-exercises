
//+ LevelDb, String, Fn(Error, Int(NumTweets))
module.exports = function (db, date, cb) {
  var tweets = 0
    , inc = function() { ++tweets; }
  db.createReadStream({ start: date })
  .on('data', inc)
  .on('error', cb)
  .on('end', function() { cb(null, tweets) })
}
