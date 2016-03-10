var uniq = require('../uniq');
var expect = require('chai').expect;

describe('uniq', function () {
  it('removes duplicate entries', function () {
    var array = [1, 2, 3, 2, 3];

    expect(uniq(array)).to.eql([1, 2, 3]);
  });
});
