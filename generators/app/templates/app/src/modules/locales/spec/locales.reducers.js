import {expect} from 'chai';
import {fromJS} from 'immutable';
import {
  localesReducer as reducer,
  SET_LANG,
  DEFAULT_LANG
} from '../index';

describe('description', () => {
  const fauxAction = {type: 'type'};

  it('should return initial state', () => {
    const resultState = reducer(undefined, fauxAction);

    expect(resultState.get('lang')).to.equal(DEFAULT_LANG);
    expect(typeof resultState.get('messages')).to.equal('object');
  });

  it('should return given state when unhandled action is passed', () => {
    const givenState = fromJS({prop: 'value'});

    expect(reducer(givenState, fauxAction)).to.equal(givenState);
  });

  it('should set language when SET_LANG action is passed', () => {
    const action = {type: SET_LANG, payload: 'pl'};
    const resultState = reducer(undefined, action);

    expect(resultState.get('lang')).to.equal('pl');
  });
});
