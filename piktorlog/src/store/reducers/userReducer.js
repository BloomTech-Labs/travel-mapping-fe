import { REGISTER_SUCCESS } from '../actions/types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
};