var expect = require('chai').expect;
var describeLowscore = require('./describeLowscore')

describeLowscore('find', function(find) {
  it('finds the first item that passes the predicate', function () {
    var array = [
      { name: 'b' },
      { name: 'a' },
      { name: 'c' }
    ];

    var found = find(array, function (item) {
      return item.name == 'b';
    });

    expect(found).to.eql({ name: 'b' });
  });

  it('returns undefined if none of the items pass the predicate', function () {
    var array = [
      { name: 'b' },
      { name: 'a' },
      { name: 'c' }
    ];

    var found = find(array, function (item) {
      return item.name == 'd';
    });

    expect(found).to.be.undefined;
  });
});
