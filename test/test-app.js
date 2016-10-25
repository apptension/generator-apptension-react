'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');

describe('apptension angular:app', function () {

  var promptOptions;

  before(function (done) {
    promptOptions = {
      appName: 'appname',
      author: 'author',
      license: 'UNLICENSED'
    };

    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({skipInstall: true})
      .withPrompts(promptOptions)
      .on('end', done);
  });

  it('creates .editorconfig', function () {
    assert.file('.editorconfig');
  });

  it('creates .eslintrc', function () {
    assert.file('.eslintrc');
  });

  describe('package.json', function () {
    it('is created', function () {
      assert.file('package.json');
    });

    it('has name set', function () {
      assert.fileContent('package.json', propPattern('name', promptOptions.appName))
    });

    it('has author set', function () {
      assert.fileContent('package.json', propPattern('author', promptOptions.author))
    });

    it('has license set', function () {
      assert.fileContent('package.json', propPattern('license', promptOptions.license))
    });

  });

  describe('gulpfile', function () {
    it('is created', function () {
      assert.file('webpack.config.babel.js');
    });
  });

  it('creates .gitignore', function () {
    assert.file('.gitignore');
  });

  it('creates .babelrc', function () {
    assert.file('.babelrc');
  });

  describe('app', function () {
    it('main.js file is created', function () {
      assert.file('app/main.js');
    });

    it('main.scss file is created', function () {
      assert.file('app/src/main.scss');
    });
  });

  describe('config', function () {
    it('webpack/webpack-dev.config.babel.js file is created', function () {
      assert.file('config/webpack/webpack-dev.config.babel.js');
    });

    it('webpack/webpack-dev-opt.config.babel.js file is created', function () {
      assert.file('config/webpack/webpack-dev-opt.config.babel.js');
    });

    it('webpack/webpack-prod.config.babel.js file is created', function () {
      assert.file('config/webpack/webpack-prod.config.babel.js');
    });

    it('env/development.js file is created', function () {
      assert.file('config/env/development.js');
    });

    it('env/developmentOptimized.js file is created', function () {
      assert.file('config/env/developmentOptimized.js');
    });

    it('env/production.js file is created', function () {
      assert.file('config/env/production.js');
    });
  });

  describe('bin', function () {
    it('startDevServer file is created', function () {
      assert.file('bin/startDevServer.js');
    });

    it('startOptimizedDevServer file is created', function () {
      assert.file('bin/startOptimizedDevServer.js');
    });
  });
});

function propPattern(propName, value) {
  return new RegExp('\\s+"' + propName + '":\\s+"' + value + '"');
}
