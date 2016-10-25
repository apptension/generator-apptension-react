import {Map} from 'immutable';
import identity from 'lodash/identity';
import reduce from 'lodash/reduce';

export function applyReducerActions(types, action) {
  return reduce(types, (obj, type) => ({
    ...obj,
    [type]: action
  }), {});
}

export default function createReducer(initialState = Map(), actionHandlers = Map()) {
  if (!(actionHandlers instanceof Map)) {
    actionHandlers = Map(actionHandlers);
  }

  if (__DEBUG__) {
    if (actionHandlers.get('undefined')) {
      debug.warn('Reducer contains an \'undefined\' action type. Have you misspelled a constant?');
    }
  }


  return (state = initialState, action) => actionHandlers.get(action.type, identity)(state, action);
}
