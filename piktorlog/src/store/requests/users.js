import axios from 'axios';

import { address, createAuthHeader } from '../utils';

// changes is an object with the optional String properties: 'display_name', 'email', and 'password'
export const editUser = async (user_id, changes) => {
  const header = createAuthHeader();
  if (!header) return false;

  const { data } = await axios.put(
    `${address}/users/${user_id}/edit`,
    changes,
    header
  );
  return data;
};

export const getAllUsers = async () => {
  const { data } = await axios.get(`${address}/users`);
  return data;
};

export const getUser = async (user_id) => {
  const { data } = await axios.get(`${address}/users/${user_id}`);
  return data;
};

export const login = async (email, password) => {
  const { data } = await axios.post(`${address}/users/login/email`, {
    email,
    password
  });
  return data;
};

export const register = async (display_name, email, password) => {
  const { data } = await axios.post(`${address}/users/register/email`, {
    display_name,
    email,
    password
  });
  return data;
};

export const deleteUser = async (user_id) => {
  const header = createAuthHeader();
  if (!header) return false;

  const { data } = await axios.delete(
    `${address}/users/${user_id}/remove`,
    header
  );
  return data;
}