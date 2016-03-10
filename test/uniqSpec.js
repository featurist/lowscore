var uniq = require('../uniq');
var expect = require('chai').expect;
var times = require('../times');
var itBehaves = require('./itBehaves');

describe('uniq', function () {
  it('removes duplicate entries', function () {
    var a = { name: 'a' };
    var b = { name: 'b' };
    var c = { name: 'c' };

    var array = [a, b, c, b, a];

    expect(uniq(array)).to.eql([a, b, c]);
  });
  
  itBehaves.likeUnderscoreFor('_.uniq([1,2,3,2,3])');
});
