import ls from 'local-storage';

export const address = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://piktorlog.herokuapp.com/';

export const getToken = () => {
  const user = ls.get('user');

  if (user) {
    return user.token;
  } else {
    return null;
  }
};