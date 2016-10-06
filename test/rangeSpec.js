var range = require('../range');
var expect = require('chai').expect;

describe('range', function () {
  it('produces a range from 0 up to 3', function () {
    expect(range(3)).to.eql([0, 1, 2]);
  });

  it('produces a range from 3 to 5', function () {
    expect(range(3, 6)).to.eql([3, 4, 5]);
  });

  it('produces a range of uneven numbers from 3 to 7', function () {
    expect(range(3, 8, 2)).to.eql([3, 5, 7]);
  });

  it("doesn't crash when given silly numbers", function () {
    expect(range(3, 'ten'));
    expect(range(3, 10, 'ten'));
  });
});
