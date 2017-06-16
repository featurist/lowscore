module.exports = function (array, _iterator) {
  var smallestItem = Infinity
  var smallestProperty
  var iterator = typeof _iterator === 'function'
    ? _iterator
    : typeof _iterator === 'string'
      ? function (item) { return item[_iterator] }
      : undefined

  for (var i = 0, l = array.length; i < l; i++) {
    var item = array[i];
    var property = iterator ? iterator(item) : item
    if (smallestProperty === undefined || property < smallestProperty) {
      smallestItem = item
      smallestProperty = property
    }
  }

  return smallestItem
}
