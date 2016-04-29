import {push} from 'react-router-redux';
import {CALL_API} from 'redux-api-middleware';


export const HOME_REQUEST = 'HOME_REQUEST';
export const HOME_SUCCESS = 'HOME_SUCCESS';
export const HOME_FAILURE = 'HOME_FAILURE';

export function exampleHomeRequest() {
  return {
    [CALL_API]: {
      endpoint: 'http://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      types: [HOME_REQUEST, HOME_SUCCESS, HOME_FAILURE]
    }
  };
}
