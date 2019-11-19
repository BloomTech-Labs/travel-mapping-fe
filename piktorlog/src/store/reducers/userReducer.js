import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  ALREADY_LOGGED_IN
} from '../actions/types';

export default (state = null, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case ALREADY_LOGGED_IN:
      return payload;

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT:
      return null;

    default:
      return state;
  }
};