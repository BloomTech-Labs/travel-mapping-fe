import axios from 'axios';

import { address, createAuthHeader, errors } from '../utils';

export const createAlbumReq = async (user_id, title, description, access = 'public') => {
  const header = createAuthHeader();
  if (!header) return false;

  const { data } = await axios.post(
    `${address}/users/${user_id}/albums/create`,
    { title, description, access },
    header
  );
  return data;
};

export const getUserAlbumsReq = async (user_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      const { data } = await axios.get(`${address}/users/${user_id}/albums`, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }
};

// changes is an object with the optional String properties: 'title', 'description', and 'access'
export const editAlbumReq = async (album_id, changes) => {
  const header = createAuthHeader();
  if (!header) return false;

  const { data } = await axios.put(
    `${address}/albums/${album_id}/edit`,
    changes,
    header
  );
  return data;
};

// export const deleteAlbumReq = async (album_id) => {
//   const header = createAuthHeader();
//   if (!header) return false;

//   const { data } = axios.delete(
//     `${address}/albums/${album_id}/remove`,
//     header
//   );
//   return data;
// };

export const deleteAlbumReq = async(album_id) => {
  const header = createAuthHeader(); 
  if (!header) throw new Error(errors.authHeaderError);
  else {
    try {
      // request returns an array of objects; each object containing an individual media item's data 
      const {data} = await axios.delete(`${address}/albums/${album_id}/remove`, header);
      console.log('data: ', data);
      return data;

    } catch(err) {
      console.log('err: ', err)
      throw new Error(Object.values(err.response.data)[0]);
    }
  }
}

// album_id is an integer
// metaData is an array of objects in the form { name: <String>, value: <String> }
export const addAlbumMetaReq = async (album_id, metaData) => {
  const header = createAuthHeader();
  if (!header) return false;

  try {

  const { data } = await axios.post(`${address}/albums/${album_id}/meta/add`, metaData, header);
  return data;

  } catch(err) {
    throw new Error(Object.values(err.response.data)[0]);
  } 
};

export const getAlbumReq = async (album_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      const { data } = await axios.get(`${address}/albums/${album_id}`, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }

};