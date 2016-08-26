var findIndex = require('../findIndex');
var expect = require('chai').expect;

describe('findIndex', function () {
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
});
