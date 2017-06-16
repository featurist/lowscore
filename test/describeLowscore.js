var _ = require('underscore');

module.exports = function(name, fn) {
  describe('lowscore.' + name, function () { fn(require('../' + name)) })
  describe('underscore.' + name, function () { fn(_[name].bind(_)) })
}
