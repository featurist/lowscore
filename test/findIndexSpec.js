var expect = require('chai').expect;
var describeLowscore = require('./describeLowscore')

describeLowscore('findIndex', function(findIndex) {
  it('returns the index of the first item that passes the predicate', function () {
    var array = [
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ];

    var found = findIndex(array, function (item) {
      return item.name == 'b';
    });

    expect(found).to.equal(1);
  });

  it('returns -1 if none of the items pass the predicate', function () {
    var array = [
      { name: 'b' },
      { name: 'a' },
      { name: 'c' }
    ];

    var found = findIndex(array, function (item) {
      return item.name == 'd';
    });

    expect(found).to.equal(-1);
  });

  it('passes index to predicate', function () {
    var array = [
      { name: 'b' },
      { name: 'a' },
      { name: 'c' }
    ];

    var found = findIndex(array, function (item, index) {
      return index === 1
    });

    expect(found).to.equal(1);
  });
});
