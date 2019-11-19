import address from '../../serverAddress';
import axios from 'axios';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './types';

export default (display_name, email, password) => async dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const newUser = await registerHelper(display_name, email, password);
    dispatch({ type: REGISTER_SUCCESS, payload: newUser });
  } catch (err) {
    dispatch({ type: REGISTER_FAILURE, payload: err });
    console.error(err);
  }
};

export const registerHelper = async (display_name, email, password) => {
  const { data } = await axios.post(`${address}/users/register/email`, {
    display_name,
    email,
    password
  });
  console.log(data);
  return data;
};