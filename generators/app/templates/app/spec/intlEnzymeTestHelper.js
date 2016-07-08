/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from 'react';
import {IntlProvider} from 'react-intl';

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
import en from '../src/translations/en.json';
import {unpath} from '../src/modules/utils';
const messages = unpath(en);

// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({locale: 'en', messages}, {});
const {intl} = intlProvider.getChildContext();

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
export function nodeWithIntlProp(node) {
  return React.cloneElement(node, {intl});
}
