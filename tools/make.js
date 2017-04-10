#!/usr/bin/env node

var uglify = require('uglify-js');
var fs = require('fs-promise');
var pathUtils = require('path');
var mustache = require('mustache');
var browserify = require('browserify')
var object = require('../object')
var mapObject = require('../mapObject')
var streamToString = require('stream-to-string')
var PassThrough = require('stream').PassThrough
var bytes = require('bytes')

fs.readdir('.').then(list => {
  var jsfilenames = list.filter(item => item.match(/\.js$/) && !item.match(/index\.js$/));
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
    var minjs = minSize(file.js)

    sizes[key] = minjs
  });

  return sizes;
}).then(sizes => {
  return fs.readFile('readme.md.mustache', 'utf-8').then(template => {
    var modules = {underscore: true}

    var readme = mustache.render(template, {
      comparison: function () {
        return function (_definition) {
          var definition = JSON.parse(_definition)
          Object.keys(definition).forEach(key => {
            if (key != 'lowscore') {
              modules[definition[key]] = true
            }
          })
          return 'calculating'
        }
      }
    });


    var cachedSizes = loadCachedSizes()

    return Promise.all(Object.keys(modules).map(module => {
      if (cachedSizes[module]) {
        return [module, cachedSizes[module]]
      } else {
        return moduleSize(module).then((size) => {
          return [module, size]
        })
      }
    })).then(function (moduleSizeArray) {
      var moduleSizes = object(moduleSizeArray)

      storeCachedSizes(moduleSizes)

      var readme = mustache.render(template, {
        sizes: mapObject(sizes, size => size + ' bytes'),
        comparison: function () {
          return function (_definition) {
            var definition = JSON.parse(_definition)
            return `
              | Module | Size (minified) |
              | --- | ---: |
              | \`lowscore/${definition.lowscore}\` | ${sizes[definition.lowscore]} |
              | \`${definition.lodashModule}\` | ${moduleSizes[definition.lodashModule]} |
              | \`${definition.lodash}\` | ${moduleSizes[definition.lodash]} |
              | \`underscore\` (all) | ${moduleSizes.underscore} |`.replace(/^\s*/gm, '')
          }
        }
      });

      return fs.writeFile('readme.md', readme);
    })
  }).then(() => {
    var index = Object.keys(sizes).map(module => {
      return `exports.${module} = require('./${module}.js');`;
    }).join('\n') + '\n';
    return fs.writeFile('index.js', index);
  });
});

var cachedSizesFilename = __dirname + '/cachedSizes.json'

function loadCachedSizes () {
  if (fs.existsSync(cachedSizesFilename)) {
    return JSON.parse(fs.readFileSync(cachedSizesFilename, 'utf-8'))
  } else {
    return {}
  }
}

function storeCachedSizes (sizes) {
  console.log('caching module sizes in ' + cachedSizesFilename)
  fs.writeFileSync(cachedSizesFilename, JSON.stringify(sizes, null, 2))
}

var _browserifyPreambleSize
function browserifyPreambleSize() {
  return _browserifyPreambleSize || (() => {
    var stream = new PassThrough()
    stream.end('')
    return browserifyModule('./tools/nothing.js').then((js) => {
      return minSize(js)
    })
  })()
}

function minSize(js) {
  var minjs = uglify.minify(js, {fromString: true}).code;
  return Buffer.byteLength(minjs)
}

function browserifyModule(module) {
  var bundle = browserify()
  bundle.require(module)
  return streamToString(bundle.bundle())
}

function moduleSize(module) {
  return Promise.all([
    browserifyModule(module),
    browserifyPreambleSize()
  ]).then(([js, preambleSize]) => {
    return minSize(js) - preambleSize
  })
}
