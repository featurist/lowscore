var omit = require('../omit');
var expect = require('chai').expect;

describe('omit', function () {
  it('returns new object without named fields', function () {
    var a = {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    };

    expect(omit(a, 'a', 'c')).to.eql({b: 'b', d: 'd'});
  });

  it('returns new object with only named fields as an array', function () {
    var a = {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    };

    expect(omit(a, ['a', 'c'])).to.eql({b: 'b', d: 'd'});
  });

  it('returns new object with only fields passing a predicate', function () {
    var a = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };

    var args = [];

    expect(omit(a, function (value, key) {
      args.push(Array.prototype.slice.call(arguments));
      return key == 'a' || key == 'b';
    })).to.eql({c: 3, d: 4});

    expect(args).to.eql([
      [1, 'a', a],
      [2, 'b', a],
      [3, 'c', a],
      [4, 'd', a]
    ]);
  });

  it("doesn't return fields that don't exist", function () {
    var a = {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    };

    expect(omit(a, 'a', 'd')).to.eql({b: 'b', c: 'c'});
  });
});
