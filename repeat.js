module.exports = function (times, item) {
  return Array.apply(null, Array(times)).map(function(){return item});
}
