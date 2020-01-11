import { useState, useEffect, useRef, useCallback } from 'react';

import { getAlbumReq, getUserAlbumsReq } from '../requests/albums';
import { 
  getCollabAlbumReq,
} from '../requests/collaboratorReqs';
import { 
  getInvitesByAlbumReq,
  getInvitesFromUserReq,
  getInvitesToUserReq,
} from '../requests/inviteReqs';
import { getAlbumMediaReq } from '../requests/media';

// reqParams is an array of the arguments needed for the request function, IN THE SAME ORDER AS THE REQUEST FUNCTION ACCEPTS THEM
// reqFn is any of the 'request' functions found in the 'requests' folder
// defaultData is whatever starting output you'd like the hook to default to while waiting for the request to return
const useImmediateFetch = (reqParams, reqFn, defaultData) => {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const paramRef = useRef(reqParams);

  const fireRequest = useCallback(() => {

    setIsLoading(true);

    reqFn(...paramRef.current)
      .then(res => {

        setIsLoading(false);
        setData(res);
        setErrorMessage('');

      })
      .catch(err => {

        setIsLoading(false);
        setErrorMessage(err);

      });
  }, [paramRef, reqFn]);
  
  useEffect(() => {

    fireRequest();

  }, [fireRequest]);

  return [data, isLoading, errorMessage, fireRequest];
};

export default useImmediateFetch;

export const useGetAlbum = (album_id) => {
  return useImmediateFetch([album_id], getAlbumReq, {});
};

export const useGetUserAlbums = (user_id) => {
  return useImmediateFetch([user_id], getUserAlbumsReq, []);
};

export const useGetCollabAlbum = (album_id) => {
  return useImmediateFetch([album_id], getCollabAlbumReq, []);
};

export const useGetInvitesFromUser = (user_id) => {
  return useImmediateFetch([user_id], getInvitesFromUserReq, []);
};

export const useGetInvitesByAlbum = (album_id) => {
  return useImmediateFetch([album_id], getInvitesByAlbumReq, []);
};

export const useGetInvitesToUser = (user_id) => {
  return useImmediateFetch([user_id], getInvitesToUserReq, []);
};

export const useGetAlbumMedia = (album_id) => {
  return useImmediateFetch([album_id], getAlbumMediaReq, []);
};