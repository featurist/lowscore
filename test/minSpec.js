var expect = require('chai').expect;
var describeLowscore = require('./describeLowscore')

describeLowscore('min', function(min) {
  it('chooses the value in the array with the smallest value', function () {
    expect(min([2, 1, 3])).to.equal(1)
  });

  it('chooses the object in the array with the smallest property', function () {
    expect(min([{value: 2}, {value: 1}, {value: 3}], 'value')).to.eql({value: 1})
  });

  it('chooses the object in the array with the smallest iterator', function () {
    expect(min([{value: 2}, {value: 1}, {value: 3}], function (x) { return x.value })).to.eql({value: 1})
  });

  it('returns -Infinity if array is empty', function () {
    expect(min([])).to.eql(Infinity)
  });
})
