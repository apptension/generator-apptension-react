import {push} from 'react-router-redux';
import {ApiError} from 'redux-api-middleware';

export const HTTP_500_INTERNAL_SERVER_ERROR = 500;

export function apiErrorResponseMiddleware({dispatch}) {
  return (next) => (action) => {
    if (action.payload instanceof ApiError && action.payload.status === HTTP_500_INTERNAL_SERVER_ERROR) {
      dispatch(push('/internal-server-error'));
    }

    next(action);
  };
}
