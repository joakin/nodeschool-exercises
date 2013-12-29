
var websocket = require('websocket-stream')

var con = websocket('ws://localhost:8000')
con.end('hello world\n')
