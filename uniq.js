function uniq(array) {
  var used = {}, result = [], length = array.length;
  for(var i = 0; i < length; ++i){
    var value = array[i];
    if (!used.hasOwnProperty(value)) {
      result.push(value);
      used[value] = 1;
    }
  }
  return result;
}

module.exports = uniq;
