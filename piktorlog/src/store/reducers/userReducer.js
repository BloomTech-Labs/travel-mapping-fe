import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../actions/types';

export default (state = null, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};