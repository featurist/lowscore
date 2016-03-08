module.exports = function (object) {
  for(var n = 1; n < arguments.length; n++) {
    var o = arguments[n];

    Object.keys(o).forEach(function (key) {
      object[key] = o[key];
    });
  }

  return object;
};
