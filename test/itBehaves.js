var underscore = require('underscore');
var lowscore = require('..');
var expect = require('chai').expect;

module.exports = {
  likeUnderscoreFor: function(expression) {
    it('beahves like underscore for ' + expression, function() {
      var underscoreValue = evaluateAgainst(underscore, expression);
      var lowscoreValue = evaluateAgainst(lowscore, expression);
      expect(lowscoreValue).to.eql(underscoreValue);
    });
  }
}

function evaluateAgainst(library, expression) {
  var _ = library;
  eval('var result = ' + expression);
  return result;
}
