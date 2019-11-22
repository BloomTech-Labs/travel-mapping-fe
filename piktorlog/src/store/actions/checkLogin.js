import ls from 'local-storage';

import {
  ALREADY_LOGGED_IN,
  NOT_YET_LOGGED_IN
} from './types';

export default () => {
  const user = ls.get('user');

  if (user) {
    return { type: ALREADY_LOGGED_IN, payload: user };
  } else {
    return { type: NOT_YET_LOGGED_IN };
  }
};