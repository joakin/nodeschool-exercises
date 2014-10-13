
var sprintf = require('sprintf').sprintf

var filePath = '/usr/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt'
var fs = require('fs')
var file = fs.readFileSync(filePath, 'utf8')

function str(line, number) {
  if (number%5 === 0)
    return sprintf('%3f %s', number, line)
  else
    return sprintf('    %s', line)
}
// str('hola', 10)

console.log(file.split('\n').map(str))
