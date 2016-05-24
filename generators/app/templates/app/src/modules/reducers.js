import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import {exampleReducer as example} from './example';

export default combineReducers({
  routing: routerReducer,
  example
});

