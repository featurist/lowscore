module.exports = function(list, iteratee) {
  if (typeof iteratee == 'string') {
    var fieldName = iteratee;
    iteratee = undefined;
  }

  var index = {};

  for(var n = 0; n < list.length; n++) {
    var item = list[n];
    var key = iteratee? iteratee(item): item[fieldName];

    index[key] = item;
  }

  return index;
};
