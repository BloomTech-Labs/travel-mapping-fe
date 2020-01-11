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


// format of DateTimeString is same format as the knex created_at date-time format
// example of DateTimeString: '2020-01-11T00:19:29.571Z'
// example of associated output: '1/10/2020, 7:19:29 PM'
export const getLocalDateAndTime = (dateTimeString) => {
  const dateTimeObj = new Date(dateTimeString);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return dateTimeObj.toLocaleString({timezone:String(userTimezone)});
};