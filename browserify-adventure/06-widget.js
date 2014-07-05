
var domify = require('domify')

module.exports = Widget

function Widget() {
  if (!(this instanceof Widget))
    return new Widget();

  this.el = domify(
    '<div>'+
      'Hello <span class="name"></span>!'+
    '</div>'
  )
}

Widget.prototype.setName = function (str) {
  this.el.querySelector('.name').textContent = str
}

Widget.prototype.appendTo = function (target) {
  target.appendChild(this.el)
}
