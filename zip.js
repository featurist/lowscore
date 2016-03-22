module.exports = function () {
  var numberOfArrays = arguments.length;
  var length = Math.max.apply(undefined, Array.prototype.map.call(arguments, function (a) {
    return a.length;
  }));

  var result = [];

  for (var n = 0; n < length; n++) {
    var item = [];
    for (var i = 0; i < numberOfArrays; i++) {
      item.push(arguments[i][n]);
    }
    result.push(item);
  }

  return result;
};
