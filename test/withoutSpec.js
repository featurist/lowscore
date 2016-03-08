var without = require('../without');
var expect = require('chai').expect;

describe('without', function () {
  it('returns new array with arguments removed', function () {
    var array = [
      1, 2, 3, 4, 5
    ];

    var less = without(array, 6, 3, 1)

    expect(less).to.eql([2, 4, 5]);
  });
});
