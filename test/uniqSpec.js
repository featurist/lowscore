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

  it('removes duplicate entries based on fieldname', function () {
    var a = { name: 'a' };
    var b = { name: 'b' };
    var c = { name: 'c' };
    var a2 = { name: 'a' };
    var b2 = { name: 'b' };

    var array = [a, b, c, b2, a2];

    expect(uniq(array, 'name')).to.eql([a, b, c]);
  });

  it('removes duplicate entries based on function', function () {
    var a = { name: 'a' };
    var b = { name: 'b' };
    var c = { name: 'c' };
    var a2 = { name: 'a' };
    var b2 = { name: 'b' };

    var array = [a, b, c, b2, a2];

    expect(uniq(array, function (item) {
      return item.name
    })).to.eql([a, b, c]);
  });
});
