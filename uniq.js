module.exports = function(array, _iterator) {
  var iterator = {
    "function": _iterator,
    "string": function (item) { return item[_iterator] }
  }[typeof _iterator]

  var results = [];
  var keys = [];

  for(var n = 0; n < array.length; ++n) {
    var item = array[n]
    var key = iterator ? iterator(item) : item
    if (keys.indexOf(key) === -1) {
      results.push(item);
      keys.push(key);
    }
  }

  return results;
};
