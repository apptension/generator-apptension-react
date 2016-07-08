import 'babel-polyfill';
import chai from 'chai';

chai.config.includeStack = true;

var appContext = require.context('../src', true, /\.js$/);
appContext.keys().forEach(appContext);


