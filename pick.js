module.exports = function(object) {
  var predicate = arguments[1];
  var fields =
    typeof predicate === 'function'
      ? Object.keys(object).filter(function (key) {
        return predicate(object[key], key, object);
      })
      : predicate instanceof Array
        ? predicate
        : Array.prototype.slice.call(arguments, 1);

  var result = {};

  for (var f = 0, l = fields.length; f < l; f++) {
    var field = fields[f];
    if (object.hasOwnProperty(field)) {
      result[field] = object[field];
    }
  }

  return result;
};
