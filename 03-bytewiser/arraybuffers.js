
var n = +process.argv[2]
  , arr = new Uint32Array(1)

arr[0] = n

var arr2 = new Uint16Array(arr.buffer)
console.log(JSON.stringify(arr2))

