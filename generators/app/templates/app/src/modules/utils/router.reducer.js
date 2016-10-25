import {fromJS} from 'immutable';
import {
  LOCATION_CHANGE
} from 'react-router-redux';
import createReducer from 'create-reducer';

const initialState = fromJS({
  locationBeforeTransitions: null
});

export const routerReducer = createReducer(initialState, {
  [LOCATION_CHANGE](state, {payload}) {
    return state.merge({
      locationBeforeTransitions: payload
    });
  }
});

