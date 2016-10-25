export const SET_LANG = 'SET_LANG';

export function setLang(data) {
  return {
    type: SET_LANG,
    payload: data
  };
}
