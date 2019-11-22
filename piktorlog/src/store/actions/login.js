import ls from 'local-storage';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE 
} from './types';
import { login } from '../requests/users'

export default (email, password) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const user = await login(email, password);
    ls.set('user', user);
    dispatch({ type: LOGIN_SUCCESS, payload: user });

  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err });
    console.error(err);
  }
};
