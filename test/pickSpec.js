var pick = require('../pick');
var expect = require('chai').expect;

describe('pick', function () {
  it('returns new object with only named fields', function () {
    var a = {
      a: 'a',
      b: 'b',
      c: 'c'
    };

    expect(pick(a, 'a', 'c')).to.eql({a: 'a', c: 'c'});
  });

  it('returns new object with only named fields as an array', function () {
    var a = {
      a: 'a',
      b: 'b',
      c: 'c'
    };

    expect(pick(a, ['a', 'c'])).to.eql({a: 'a', c: 'c'});
  });

  it('returns new object with only fields passing a predicate', function () {
    var a = {
      a: 1,
      b: 2,
      c: 3
    };

    var args = [];

    expect(pick(a, function (value, key) {
      args.push(Array.prototype.slice.call(arguments));
      return key == 'a' || key == 'b';
    })).to.eql({a: 1, b: 2});

    expect(args).to.eql([
      [1, 'a', a],
      [2, 'b', a],
      [3, 'c', a]
    ]);
  });

  it("doesn't return fields that don't exist", function () {
    var a = {
      a: 'a',
      b: 'b',
      c: 'c'
    };

    expect(pick(a, 'a', 'd')).to.eql({a: 'a'});
  });
});
