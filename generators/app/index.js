'use strict';
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the marvelous ' + chalk.red('ApptensionReact') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'appName',
      message: 'Your project name',
      default: this.appname
    },{
      type: 'input',
      name: 'author',
      message: 'Author name'
    },{
      type: 'input',
      name: 'license',
      message: 'Your project license',
      default: 'UNLICENSED'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var props = this.props;
      this.template(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.directory(
        this.templatePath('app'),
        this.destinationPath('app')
      );
      this.directory(
        this.templatePath('specE2E'),
        this.destinationPath('specE2E')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('_Gulpfile.js'),
        this.destinationPath('Gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('_protractor.conf'),
        this.destinationPath('protractor.conf')
      );
      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );
    }
  },

  install: function () {
  }
});
