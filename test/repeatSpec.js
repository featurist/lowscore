var repeat = require('../repeat');
var expect = require('chai').expect;

describe('repeat', function () {
  it('returns an array with "times" number of "item"s', function () {
    expect(repeat(5, 1)).to.eql([1,1,1,1,1]);
  });
});
