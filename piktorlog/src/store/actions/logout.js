import ls from 'local-storage';

import { LOGOUT } from './types';

export default () => {
  ls.remove('user');
  return { type: LOGOUT }
};