
module.exports = function countWords(words) {
  return words.reduce(function(stats, word) {
    stats[word] = (stats[word] | 0) + 1
    return stats
  }, {})
}
