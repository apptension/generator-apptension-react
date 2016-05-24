import {EXAMPLE_REQUEST, EXAMPLE_SUCCESS, EXAMPLE_FAILURE} from './example.actions';

const initialState = {
  posts: [],
  isLoading: false
};

export function exampleReducer(state = initialState, action = null) {
  switch (action.type) {
    case EXAMPLE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case EXAMPLE_SUCCESS:
      return Object.assign({}, state, {
        posts: action.payload,
        isLoading: false
      });
    case EXAMPLE_FAILURE:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
}
