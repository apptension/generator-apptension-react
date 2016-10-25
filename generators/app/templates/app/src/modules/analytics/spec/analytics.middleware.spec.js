import {expect} from 'chai';
import {spy} from 'sinon';
import identity from 'lodash/identity';
import ReactGA from 'react-ga';
import {Map} from 'immutable';
import {LOCATION_CHANGE} from 'react-router-redux';

import {analyticsMiddleware as middleware} from '../index';

describe('middleware: analytics', () => {
  const store = {dispatch: identity, getState: () => Map()};

  beforeEach(() => spy(ReactGA, 'event'));
  beforeEach(() => spy(ReactGA, 'pageview'));
  beforeEach(() => spy(ReactGA, 'set'));
  afterEach(() => ReactGA.event.restore());
  afterEach(() => ReactGA.pageview.restore());
  afterEach(() => ReactGA.set.restore());

  describe('when LOCATION_CHANGE action passed', () => {
    const type = LOCATION_CHANGE;

    it('should send ga page view', () => {
      const pathname = '/path-name';

      middleware(store)(identity)({type, payload: {pathname}});

      expect(ReactGA.pageview.calledOnce).to.equal(true);
      expect(ReactGA.pageview.getCall(0).args[0]).to.deep.equal(pathname);
    });
  });

  it('should call next middleware', () => {
    const dispatch = identity;
    const next = spy();
    const action = {payload: 'value'};

    middleware({dispatch, getState: () => Map()})(next)(action);

    expect(next.calledOnce).to.equal(true);
    expect(next.getCall(0).calledWith(action)).to.equal(true);
  });
});
