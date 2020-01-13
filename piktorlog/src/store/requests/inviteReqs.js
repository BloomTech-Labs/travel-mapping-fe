import axios from 'axios';

import { address, createAuthHeader, errors } from '../utils';

export const createInviteReq = async (album_id, invited_email) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      const { data } = await axios.post(`${address}/albums/${album_id}/invites/create`, { invited_email }, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }

};

export const acceptInviteReq = async (invite_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      const { data } = await axios.get(`${address}/invites/${invite_id}/accept`, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }

};

export const deleteInviteReq = async (invite_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      const { data } = await axios.delete(`${address}/invites/${invite_id}/remove`, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }

};

export const getInvitesFromUserReq = async (user_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      const { data } = await axios.get(`${address}/users/${user_id}/invites/from`, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }

};

export const getInvitesByAlbumReq = async (album_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      const { data } = await axios.get(`${address}/albums/${album_id}/invites`, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }

};

export const getInvitesToUserReq = async (user_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      const { data } = await axios.get(`${address}/users/${user_id}/invites/to`, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }

};