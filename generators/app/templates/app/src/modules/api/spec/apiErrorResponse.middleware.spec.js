import {expect} from 'chai';
import {spy} from 'sinon';
import identity from 'lodash/identity';
import {ApiError} from 'redux-api-middleware';
import {push} from 'react-router-redux';
import {fromJS} from 'immutable';

import {
  HTTP_500_INTERNAL_SERVER_ERROR,
  apiErrorResponseMiddleware
} from '../apiErrorResponse.middleware';

describe('middleware: apiErrorResponse', () => {
  describe(`when payload is an ApiError with status ${HTTP_500_INTERNAL_SERVER_ERROR}`, () => {
    it('should dispatch push', () => {
      const dispatch = spy();

      apiErrorResponseMiddleware({dispatch})(identity)({
        payload: new ApiError(HTTP_500_INTERNAL_SERVER_ERROR)
      });

      expect(dispatch.calledOnce).to.equal(true);
      expect(dispatch.getCall(0).calledWith(push('/internal-server-error'))).to.equal(true);
    });

    it('should call next middleware', () => {
      const dispatch = identity;
      const next = spy();
      const action = {
        payload: new ApiError(HTTP_500_INTERNAL_SERVER_ERROR)
      };

      apiErrorResponseMiddleware({dispatch})(next)(action);

      expect(next.calledOnce).to.equal(true);
      expect(next.getCall(0).calledWith(action)).to.equal(true);
    });
  });

  it('should call next middleware', () => {
    const dispatch = identity;
    const next = spy();
    const action = {payload: 'value'};

    apiErrorResponseMiddleware({dispatch})(next)(action);

    expect(next.calledOnce).to.equal(true);
    expect(next.getCall(0).calledWith(action)).to.equal(true);
  });
});
