var prop = require('./utils').prop

module.exports = function(validUsers) {
  var validIds = validUsers.map(prop('id'))
  return function(users) {
    return users.every(function(user) {
      return validIds.indexOf(user.id) > -1
    })
  }
}
