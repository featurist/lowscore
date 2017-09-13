var expect = require('chai').expect;
var describeLowscore = require('./describeLowscore')

describeLowscore('mapObject', function(mapObject) {
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

  it('returning undefined key', function () {
    var a = {
      a: 1,
      b: 2,
      c: 3
    };

    var args = [];

    expect(mapObject(a, function(value, key, object) {
      args.push([value, key, object]);
      if (value % 2) {
        return value
      }
    })).to.eql({a: 1, b: undefined, c: 3});

    expect(args).to.eql([
      [1, 'a', a],
      [2, 'b', a],
      [3, 'c', a]
    ]);
  });
});
