
var multilevel = require('multilevel')
  , net = require('net')

var db = multilevel.client()
  , conn = net.connect(4545)
conn.pipe(db.createRpcStream()).pipe(conn)

db.get('multilevelmeup', function(err, value) {
  console.log(value)
  conn.end()
})
