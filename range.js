module.exports = function(from, to, step) {
  if (to === undefined) {
    to = from;
    from = 0;
  }

  if (step === undefined) {
    step = 1;
  }

  var results = [];

  for (var n = from; n < to; n += step) {
    results.push(n);
  }

  return results;
};
