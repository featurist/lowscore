var expect = require('chai').expect;
var describeLowscore = require('./describeLowscore')

describeLowscore('uniq', function(uniq) {
  it('removes duplicate entries', function () {
    var a = { name: 'a' };
    var b = { name: 'b' };
    var c = { name: 'c' };

    var array = [a, b, c, b, a];

    expect(uniq(array)).to.eql([a, b, c]);
  });
});
