var expect = require('chai').expect;
var describeLowscore = require('./describeLowscore')

describeLowscore('max', function(max) {
  it('chooses the value in the array with the smallest value', function () {
    expect(max([2, 1, 3])).to.equal(3)
  });

  it('chooses the object in the array with the smallest property', function () {
    expect(max([{value: 2}, {value: 1}, {value: 3}], 'value')).to.eql({value: 3})
  });

  it('chooses the object in the array with the smallest iterator', function () {
    expect(max([{value: 2}, {value: 1}, {value: 3}], function (x) { return x.value })).to.eql({value: 3})
  });

  it('returns -Infinity if array is empty', function () {
    expect(max([])).to.eql(-Infinity)
  });
})
