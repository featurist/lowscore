module.exports = function object(array, values) {
  var result = {}

  if (values) {
    for (var i = 0, l = array.length; i < l; i++) {
      result[array[i]] = values[i]
    }
  } else {
    for (var j = 0, ll = array.length; j < ll; j++) {
      var item = array[j]
      result[item[0]] = item[1]
    }
  }

  return result
}
