import {push} from 'react-router-redux';
import {CALL_API} from 'redux-api-middleware';


export const EXAMPLE_REQUEST = 'EXAMPLE_REQUEST';
export const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS';
export const EXAMPLE_FAILURE = 'EXAMPLE_FAILURE';

export function exampleRequest() {
  return {
    [CALL_API]: {
      endpoint: 'http://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      types: [EXAMPLE_REQUEST, EXAMPLE_SUCCESS, EXAMPLE_FAILURE]
    }
  };
}
