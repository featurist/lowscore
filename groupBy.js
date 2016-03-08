module.exports = function(list, iteratee) {
  if (typeof iteratee == 'string') {
    var fieldName = iteratee;
    iteratee = undefined;
  }

  var groups = {};

  for(var n = 0; n < list.length; n++) {
    var item = list[n];
    var key = iteratee? iteratee(item): item[fieldName];

    var group = groups[key];

    if (group) {
      group.push(item);
    } else {
      groups[key] = [item];
    }
  }

  return groups;
};
