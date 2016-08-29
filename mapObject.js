module.exports = function(object, iteratee) {
  var result = {};
  var keys = Object.keys(object);

  for (var k = 0, l = keys.length; k < l; k++) {
    var key = keys[k];
    result[key] = iteratee(object[key], key, object);
  }

  return result;
};
