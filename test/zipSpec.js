var zip = require('../zip');
var expect = require('chai').expect;
var itBehaves = require('./itBehaves');

describe('zip', function () {
  it('zips three arrays together', function () {
    var result = zip([1, 2, 3], ['one', 'two', 'three'], ['a', 'b', 'c']);

    expect(result).to.eql([
      [1, 'one', 'a'],
      [2, 'two', 'b'],
      [3, 'three', 'c']
    ]);
  });

  it('zips past the ends of shorter arrays', function () {
    var result = zip([1, 2], ['one', 'two'], ['a', 'b', 'c']);

    expect(result).to.eql([
      [1, 'one', 'a'],
      [2, 'two', 'b'],
      [undefined, undefined, 'c']
    ]);
  });

  itBehaves.likeUnderscoreFor("_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])");
  itBehaves.likeUnderscoreFor("_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])");
});
