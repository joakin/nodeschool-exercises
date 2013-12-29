
var prop = require('./utils').prop

module.exports = function(messages) {
  return messages.map(prop('message')).filter(function(msg) {
    return msg.length < 50 ? true : false
  })
}
