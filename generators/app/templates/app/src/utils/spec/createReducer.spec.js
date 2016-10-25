import {Map} from 'immutable';
import {expect} from 'chai';
import createReducer, {applyReducerActions} from '../createReducer';

describe('createReducer', () => {
  const fauxAction = {type: 'type'};

  it('should return empty immutable map', () => {
    const reducer = createReducer();

    expect(reducer(undefined, fauxAction).isEmpty()).to.equal(true);
  });

  it('should return proper initial state', () => {
    const reducer = createReducer('initState');

    expect(reducer(undefined, fauxAction)).to.equal('initState');
  });

  it('should return the same state for unknown action', () => {
    const type = 'TEST';
    const reducer = createReducer();

    expect(reducer('state not changed', {type})).to.equal('state not changed');
  });

  it('should return correct state for known action', () => {
    const type = 'TEST';
    const reducer = createReducer(Map(), {
      [type]: () => {
        return 'properState';
      }
    });

    expect(reducer(undefined, {type})).to.equal('properState');
  });

  describe('applyReducerActions', () => {
    it('should create actions object', () => {
      const func = () => {
      };
      const type1 = 'type-1';
      const type2 = 'type-2';

      expect(applyReducerActions([type1, type2], func)).to.deep.equal({
        [type1]: func,
        [type2]: func
      });
    });
  });
});
