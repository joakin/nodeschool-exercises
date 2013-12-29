
var format = require('util').format
  , net = require('net')

var port = process.argv[2]

function formatNum(num) {
  return (num<10 ? '0' : '') + num.toString()
}

function formatDate(date) {
  return format(
    '%s-%s-%s %s:%s',
    date.getFullYear(),
    formatNum(date.getMonth()+1),
    formatNum(date.getDate()),
    formatNum(date.getHours()),
    formatNum(date.getMinutes())
  )
}

net.createServer(function(socket) {
  socket.end(formatDate(new Date()) + '\n')
}).listen(port)
