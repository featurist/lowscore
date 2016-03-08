module.exports = function(list, iteratee) {
  if (typeof iteratee !== 'function') {
    var fieldName = iteratee;
    iteratee = undefined;
  }

  return list.map(function(value, index) {
    return {
      value: value,
      index: index,
      criteria: iteratee? iteratee(value, index, list): value[fieldName]
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }).map(function (item) {
    return item.value;
  });
};
