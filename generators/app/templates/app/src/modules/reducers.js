import {combineReducers} from 'redux-immutable';

import {routerReducer as routing} from './utils';
import {localesReducer as locales} from './locales';

export default combineReducers({
  routing,
  locales
});
