module.exports = function(array, shallow) {
  var result = [];

  function flatten(array, level) {
    for (var n = 0; n < array.length; n++) {
      var item = array[n];

      if (!(level >= 1 && shallow) && item instanceof Array) {
        flatten(item, level + 1);
      } else {
        result.push(item);
      }
    }
  }

  flatten(array, 0);

  return result;
};
