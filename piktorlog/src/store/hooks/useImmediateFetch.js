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

// this is the generic hook that all the other "immediate fetch" hooks are based around.
// you can use it in components directly if you like, though I'd suggest wrapping it in a function for a specific reqFunction, such as found below.
// reqParams is any arguments needed for the request function, IN THE SAME ORDER AS THE REQUEST FUNCTION ACCEPTS THEM
// reqFn is any of the 'request' functions found in the 'requests' folder
// defaultData is whatever starting output you'd like the hook to default to while waiting for the request to return
// filterFn is optional, MUST be either declared outside of a component, or memoized/stored in state within it.
const useImmediateFetch = (reqFn, defaultData, filterFn, ...reqParams) => {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const paramRef = useRef(reqParams);

  const fireRequest = useCallback(() => {

    setIsLoading(true);

    reqFn(...paramRef.current)
      .then(res => {

        setIsLoading(false);
        setErrorMessage('');

        if (typeof filterFn === 'function') {

          setData(filterFn(res));

        } else setData(res);
      

      })
      .catch(err => {

        setIsLoading(false);
        setErrorMessage(err);

      });
  }, [paramRef, reqFn, filterFn]);
  
  useEffect(() => {

    fireRequest();

  }, [fireRequest]);

  return [data, isLoading, errorMessage, fireRequest];
};

export default useImmediateFetch;

export const useGetAlbum = (album_id, filterFn) => {
  return useImmediateFetch(getAlbumReq, {}, filterFn, album_id);
};

export const useGetUserAlbums = (user_id, filterFn) => {
  return useImmediateFetch(getUserAlbumsReq, [], filterFn, user_id);
};

export const useGetCollabAlbum = (album_id, filterFn) => {
  return useImmediateFetch(getCollabAlbumReq, [], filterFn, album_id);
};

export const useGetInvitesFromUser = (user_id, filterFn) => {
  return useImmediateFetch(getInvitesFromUserReq, [], filterFn, user_id);
};

export const useGetInvitesByAlbum = (album_id, filterFn) => {
  return useImmediateFetch( getInvitesByAlbumReq, [], filterFn, album_id);
}

export const useGetInvitesToUser = (user_id, filterFn) => {
  return useImmediateFetch(getInvitesToUserReq, [], filterFn, user_id);
};

export const useGetAlbumMedia = (album_id, filterFn) => {
  return useImmediateFetch(getAlbumMediaReq, [], filterFn, album_id);
};