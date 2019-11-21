import ls from 'local-storage';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from './types';
import { register } from '../requests/users';

export default (display_name, email, password) => async dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const newUser = await register(display_name, email, password);
    ls.set('user', newUser);
    dispatch({ type: REGISTER_SUCCESS, payload: newUser });
  } catch (err) {
    dispatch({ type: REGISTER_FAILURE, payload: err });
    console.error(err);
  }
};
