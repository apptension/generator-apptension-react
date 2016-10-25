import {expect} from 'chai';
import {
  SET_LANG,
  setLang
} from '../index';

describe('locales: actions', () => {
  describe('setLang', () => {
    it('should return proper action type', () => {
      expect(setLang().type).to.equal(SET_LANG);
    });

    it('should set payload', () => {
      const payload = {prop: 'value'};

      expect(setLang(payload).payload).to.deep.equal(payload);
    });
  });
});
