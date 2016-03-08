var uglify = require('uglify-js');
var fs = require('fs-promise');
var pathUtils = require('path');
var mustache = require('mustache');

fs.readdir('.').then(list => {
  var jsfilenames = list.filter(item => item.match(/\.js$/));
  return Promise.all(jsfilenames.map(filename => {
    return fs.readFile(filename, 'utf-8').then(js => {
      return {
        filename: filename,
        js: js
      };
    });
  }));
}).then(files => {
  var sizes = {};

  files.forEach(file => {
    var key = pathUtils.basename(file.filename, '.js');
    var minjs = uglify.minify(file.js, {fromString: true}).code;

    sizes[key] = minjs.length + ' bytes';
  });

  return sizes;
}).then(sizes => {
  return fs.readFile('readme.md.mustache', 'utf-8').then(template => {
    var readme = mustache.render(template, sizes);
    return fs.writeFile('readme.md', readme);
  });
});
