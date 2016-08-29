var mapObject = require('../mapObject');
var expect = require('chai').expect;

describe('mapObject', function () {
  it('returns new object mapped by function', function () {
    var a = {
      a: 1,
      b: 2,
      c: 3
    };

    var args = [];

    expect(mapObject(a, function(value, key, object) {
      args.push([value, key, object]);
      return value + 1;
    })).to.eql({a: 2, b: 3, c: 4});

    expect(args).to.eql([
      [1, 'a', a],
      [2, 'b', a],
      [3, 'c', a]
    ]);
  });
});
