module.exports = function(array) {
  var results = [];

  for(var n = array.length - 1; n >= 0; n--) {
    var item = array[n];
    if (array.lastIndexOf(item) == n) {
      results.push(item);
    }
  }

  return results;
};
