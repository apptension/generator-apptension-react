import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import home from './home';

export default combineReducers({
  routing: routerReducer,
  home
});

