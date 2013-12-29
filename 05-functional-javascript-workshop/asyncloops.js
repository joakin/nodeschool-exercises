
function loadUsers(userIds, load, done) {
  var users = []
    , length = userIds.length
    , count = 0

  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user
      if (++count === length) { done(users) }
    })
  })
}

module.exports = loadUsers

