module.exports = function(from, to, step) {
  if (to === undefined) {
    to = from;
    from = 0;
  }

  if (step === undefined) {
    step = 1;
  }

  if (typeof from !== 'number' || typeof to !== 'number' || typeof step !== 'number') {
    throw new RangeError('Invalid array length')
  }

  var results = [];

  for (var n = from; n < to; n += step) {
    results.push(n);
  }

  return results;
};
