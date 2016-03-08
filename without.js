module.exports = function (array) {
  var result = array.slice();
  for (var n = 1; n < arguments.length; n++) {
    var index = array.indexOf(arguments[n]);
    if (index >= 0) {
      result.splice(index, 1);
    }
  }
  return result;
};
