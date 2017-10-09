module.exports = function(list, predicate) {
  for (var n = 0; n < list.length; n++) {
    var item = list[n];

    if (predicate(item, n)) {
      return n;
    }
  }

  return -1;
};
