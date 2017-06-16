var expect = require('chai').expect;
var describeLowscore = require('./describeLowscore')

describeLowscore('object', function(object) {
  it('returns an object from an array of key/value pairs', function () {
    var a = [
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]

    expect(object(a)).to.eql({a: 1, b: 2, c: 3});
  });

  it('returns an object from an two arrays of keys and values', function () {
    var keys = [
      'a',
      'b',
      'c'
    ]
    var values = [
      1,
      2,
      3
    ]

    expect(object(keys, values)).to.eql({a: 1, b: 2, c: 3});
  });
});
