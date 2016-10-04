module.exports = function(object) {
  var predicate = arguments[1];
  var keys = Object.keys(object);

  var fields =
    typeof predicate === 'function'
      ? keys.filter(function (key) {
        return predicate(object[key], key, object);
      })
      : predicate instanceof Array
        ? predicate
        : Array.prototype.slice.call(arguments, 1);

  var fieldSet = {};
  for (var f = 0, l = fields.length; f < l; f++) {
    var key = fields[f];
    fieldSet[key] = true;
  }

  var result = {};

  for (var k = 0, l = keys.length; k < l; k++) {
    var key = keys[k];
    if (!fieldSet[key]) {
      result[key] = object[key];
    }
  }

  return result;
};
