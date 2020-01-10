import ls from 'local-storage';

export const address = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://piktorlog.herokuapp.com';
// export const address = 'https://piktorlogstaging.herokuapp.com';
export const getToken = () => {
  const user = ls.get('user');

  if (user) {
    return user.token;
  } else {
    return null;
  }
};

export const createAuthHeader = () => {
  const token = getToken();

  return token ? { headers: { Authorization: `Bearer ${token}` }} : null;
};

export const errors = {
  authHeaderError: 'could not generate authentication header',
};