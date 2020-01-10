import { useState, useEffect } from 'react';

import { getAlbumReq, getUserAlbumsReq } from './albums';
import { getCollabAlbumReq } from './collaboratorReqs';
import { getInvitesByAlbumReq, getInvitesFromUserReq, getInvitesToUserReq } from './inviteReqs';
import { getAlbumMediaReq } from './media';

// this should would with any of the simple request functions
// must be a request that accepts one or no args
export const useFetchData = (reqParam, reqFn, defaultData) => {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {

    setIsLoading(true);

    reqFn(reqParam)
      .then(res => {

        setIsLoading(false);
        setData(res);

      })
      .catch(err => {

        setIsLoading(false);
        setErrorMessage(err);

      });

  }, [reqParam, reqFn]);

  return [data, isLoading, errorMessage];
};

export const useGetAlbum = (album_id) => {
  return useFetchData(album_id, getAlbumReq, {});
};

export const useGetUserAlbums = (user_id) => {
  return useFetchData(user_id, getUserAlbumsReq, []);
};

export const useGetCollabAlbum = (album_id) => {
  return useFetchData(album_id, getCollabAlbumReq, []);
};

export const useGetInvitesFromUser = (user_id) => {
  return useFetchData(user_id, getInvitesFromUserReq, []);
};

export const useGetInvitesByAlbum = (album_id) => {
  return useFetchData(album_id, getInvitesByAlbumReq, []);
};

export const useGetInvitesToUser = (user_id) => {
  return useFetchData(user_id, getInvitesToUserReq, []);
};

export const useGetAlbumMedia = (album_id) => {
  return useFetchData(album_id, getAlbumMediaReq, []);
};