import {addLocaleData as addLocaleDataIntl} from 'react-intl';

import en from 'react-intl/locale-data/en';

export const addLocaleData = () => addLocaleDataIntl([...en]);
