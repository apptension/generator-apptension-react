import {fromJS} from 'immutable';
import createReducer from 'create-reducer';

import {SET_LANG} from './locales.actions';

import en from '../../translations/en.json';
import {unpath} from '../utils';

export const DEFAULT_LANG = 'en';

const translations = {en};

const initialState = fromJS({
  lang: DEFAULT_LANG,
  messages: unpath(translations[DEFAULT_LANG])
});

export const localesReducer = createReducer(initialState, {
  [SET_LANG](state, {payload}) {
    return state.merge({
      lang: payload,
      messages: translations[payload]
    });
  }
});
