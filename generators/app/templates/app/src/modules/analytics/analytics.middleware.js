import {LOCATION_CHANGE} from 'react-router-redux';
import ReactGA from 'react-ga';

const actionHandlers = [
  [LOCATION_CHANGE, (state, {payload: {pathname}}) => ReactGA.pageview(pathname)]
];

export function analyticsMiddleware({getState}) {
  return (next) => (action) => {
    const state = getState();
    actionHandlers
      .filter(([type]) => action.type === type)
      .forEach(([, handler]) => handler(state, action));

    next(action);
  };
}
