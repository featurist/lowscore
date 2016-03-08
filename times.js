module.exports = function(n, fn) {
  var array = [];

  for (var i = 0; i < n; i++) {
    array.push(fn(i));
  }

  return array;
}
