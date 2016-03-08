var flatten = require('../flatten');
var expect = require('chai').expect;

describe('flatten', function () {
  it('finds the first item that passes the predicate', function () {
    var array = [
      [1, 2, 3],
      4,
      [[5, 6], 7],
      [[[8]]]
    ];

    var flat = flatten(array);

    expect(flat).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('returns undefined if none of the items pass the predicate', function () {
    var array = [
      [1, 2, 3],
      4,
      [[5, 6], 7],
      [[[8]]]
    ];

    var flat = flatten(array, true);

    expect(flat).to.eql([1, 2, 3, 4, [5, 6], 7, [[8]]]);
  });
});
