import axios from 'axios';

import { address, createAuthHeader, errors } from '../utils';

export const getCollabAlbumReq = async (album_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {
  
    try {

      const { data } = await axios.get(`${address}/albums/${album_id}/collaborators`, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }
    
  }

};

export const removeCollabReq = async (album_id, collaborator_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      const { data } = await axios.delete(`${address}/albums/${album_id}/collaborators/${collaborator_id}/remove`, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }

};