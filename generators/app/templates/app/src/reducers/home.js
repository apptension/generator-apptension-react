import {HOME_REQUEST, HOME_SUCCESS, HOME_FAILURE} from '../actions';

const initialState = {
  posts: [],
  isLoading: false
};

export default function character(state = initialState, action = null) {
  switch (action.type) {
    case HOME_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case HOME_SUCCESS:
      return Object.assign({}, state, {
        posts: action.payload,
        isLoading: false
      });
    case HOME_FAILURE:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
}
