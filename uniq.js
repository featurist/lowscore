module.exports = function(array) {
  var results = [];

  for(var n = 0; n < array.length; ++n) {
    var item = array[n];
    if (array.indexOf(item) == n) {
      results.push(item);
    }
  }

  return results;
};
