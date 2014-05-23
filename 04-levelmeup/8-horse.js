
//+ LevelDb, String, Fn(Error, Int(NumTweets))
module.exports = function (db, date, cb) {
  var tweets = []
    , push = function(data) { tweets.push(data.value) }
  db.createReadStream({ start: date, end: date+'\xff' })
  .on('data', push)
  .on('error', cb)
  .on('end', function() { cb(null, tweets) })
}
