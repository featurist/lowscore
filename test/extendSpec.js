var expect = require('chai').expect;
var describeLowscore = require('./describeLowscore')

describeLowscore('extend', function(extend) {
  it('adds properties of several objects to the first object', function () {
    var object = {
      a: 'a',
      b: 'b'
    };

    extend(object, {
      b: 'b2',
      c: 'c2'
    }, {
      c: 'c3',
      d: 'd3'
    });

    expect(object).to.eql({
      a: 'a',
      b: 'b2',
      c: 'c3',
      d: 'd3'
    });
  });

  it('ignores null or undefined objects', function () {
    var object = {
      a: 'a',
      b: 'b'
    };

    extend(object, undefined, {
      c: 'c3',
      d: 'd3'
    });

    expect(object).to.eql({
      a: 'a',
      b: 'b',
      c: 'c3',
      d: 'd3'
    });
  });
});
