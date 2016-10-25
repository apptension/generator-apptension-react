import 'babel-polyfill';
import {resolve} from 'path';
import assert from 'assert';
import Module from 'module';
import chai from 'chai';
import {jsdom} from 'jsdom';
import path from 'path';

chai.config.includeStack = true;

const aliases = {
  'TweenLite': './node_modules/gsap/src/uncompressed/TweenLite.js',
  'TimelineLite': './node_modules/gsap/src/uncompressed/TimelineLite.js',
  'EasePack': './node_modules/gsap/src/uncompressed/easing/EasePack.js',
  'babylonjs': './app/spec/mocks/babylonjs.js',
  'create-reducer': path.join(process.cwd(), 'app/src/utils/createReducer.js')
};

Module.prototype.require = function (path) {
  const types = /\.(s?css|sass|less|svg|html|png|jpe?g|gif|glsl)$/;
  if (path.search(types) !== -1) {
    return null;
  }

  const alias = aliases[path];
  if (alias) {
    path = resolve(alias);
  }

  assert(typeof path === 'string', 'path must be a string');
  assert(path, 'missing path');

  return Module._load(path, this);
};

global.__DEBUG__ = true;
global.document = jsdom('');
global.window = document.defaultView;
global.requestAnimationFrame = (func) => setTimeout(func);

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
