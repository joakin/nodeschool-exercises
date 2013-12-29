
var http = require('http')
  , url = require('url')

function isoDateToObj(iso) {
  var date = new Date(iso)
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

function isoDateToUnix(iso) {
  return {
    unixtime: new Date(iso).getTime()
  }
}

function sendJsonDateResponse(date, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(date))
}

http.createServer(function(req, res) {
  var u = url.parse(req.url, true)

  if (req.method === 'GET') {
    var transformDate = null

    switch(u.pathname) {
      case '/api/parsetime': transformDate = isoDateToObj;  break;
      case '/api/unixtime':  transformDate = isoDateToUnix; break;
    }

    if (transformDate)
      sendJsonDateResponse(transformDate(u.query.iso), res)
  }

}).listen(process.argv[2])
