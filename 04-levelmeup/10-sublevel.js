
var sub = require('level-sublevel')
  , level = require('level')

var db = sub(level(process.argv[2]))
  , robots = db.sublevel('robots')
  , dinosaurs = db.sublevel('dinosaurs')

robots.put('slogan', 'beep boop')
dinosaurs.put('slogan', 'rawr')
