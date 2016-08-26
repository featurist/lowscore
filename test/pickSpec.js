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
      a: 'a',
      b: 'b',
      c: 'c'
    };

    expect(pick(a, function (f) {
      return f == 'a' || f == 'b';
    })).to.eql({a: 'a', b: 'b'});
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
