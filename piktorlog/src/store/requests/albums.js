import axios from 'axios';

import { address, createAuthHeader } from '../utils';

// album_id is an integer
// metaData is an array of objects in the form { name: <String>, value: <String> }
export const addAlbumMeta = async (album_id, metaData) => {
  const header = createAuthHeader();
  if (!header) return false;

  const { data } = await axios.post(`${address}/albums/${album_id}/meta/add`, metaData, header);
  return data;
};

export const createAlbum = async (user_id, title, description, access = 'public') => {
  const header = createAuthHeader();
  if (!header) return false;

  const { data } = await axios.post(
    `${address}/users/${user_id}/albums/create`,
    { title, description, access },
    header
  );
  return data;
};

// changes is an object with the optional String properties: 'title', 'description', and 'access'
export const editAlbum = async (album_id, changes) => {
  const header = createAuthHeader();
  if (!header) return false;

  const { data } = await axios.put(
    `${address}/albums/${album_id}/edit`,
    changes,
    header
  );
  return data;
};

export const getUserAlbums = async (user_id) => {
  const header = createAuthHeader();
  if (!header) return false;

  const { data } = await axios.get(
    `${address}/users/${user_id}/albums`,
    header
  );
  return data;
};

export const deleteAlbum = async (album_id) => {
  const header = createAuthHeader();
  if (!header) return false;

  const { data } = axios.delete(
    `${address}/albums/${album_id}/remove`,
    header
  );
  return data;
};