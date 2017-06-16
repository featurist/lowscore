var expect = require('chai').expect;
var describeLowscore = require('./describeLowscore')

describeLowscore('sortBy', function(sortBy) {
  it('sorts items by key string', function () {
    var array = [
      { name: 'b' },
      { name: 'a' },
      { name: 'c' }
    ];

    expect(sortBy(array, 'name')).to.eql([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ]);
  });

  it('sorts items by key function', function () {
    var array = [
      { name: 'b' },
      { name: 'a' },
      { name: 'c' }
    ];

    expect(sortBy(array, item => item.name)).to.eql([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ]);
  });
});
