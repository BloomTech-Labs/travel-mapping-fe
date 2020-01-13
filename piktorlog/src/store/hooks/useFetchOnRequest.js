import { useState, useCallback, useRef } from 'react';

import { 
  removeCollabReq
} from '../requests/collaboratorReqs';
import { 
  createInviteReq,
  deleteInviteReq,
  acceptInviteReq
} from '../requests/inviteReqs';

import {
  editMediaReq,
  getIndividualMediaReq
} from '../requests/media';

import {
  getAlbumReq
} from '../requests/albums';

// reqFn is any of the 'request functions', found elsewhere in this folder
// onSuccess and onFailure are optional callbacks or arrays of callbacks for signalling or performing some further behavior after the request completes
const useFetchOnRequest = (reqFn, onSuccess, onFailure, defaultData = {}) => {

  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const SuccessRef = useRef(onSuccess);
  const FailRef = useRef(onFailure);

  const fireRequest = useCallback((...reqParams) => {

    setIsLoading(true);

    reqFn(...reqParams)
      .then(res => {

        setIsLoading(false);
        setData(res);
        setErrorMessage('');

        if (typeof SuccessRef.current === 'function') {
          SuccessRef.current();
        } else if (Array.isArray(SuccessRef.current)) {
          SuccessRef.current.forEach(e => e());
        }

      })
      .catch(err => {

        setIsLoading(false);
        setErrorMessage(err);

        if (typeof FailRef.current === 'function') {
          FailRef.current();
        } else if (Array.isArray(FailRef.current)) {
          FailRef.current.forEach(e => e());
        }

      });

  }, [reqFn]);

  return [fireRequest, data, isLoading, errorMessage];
};

export default useFetchOnRequest;

export const useCreateInvite = (onSuccess, onFailure) => {
  return useFetchOnRequest(createInviteReq, onSuccess, onFailure);
};

export const useCancelInvite = (onSuccess, onFailure) => {
  return useFetchOnRequest(deleteInviteReq, onSuccess, onFailure);
};

export const useRemoveCollab = (onSuccess, onFailure) => {
  return useFetchOnRequest(removeCollabReq, onSuccess, onFailure);
};

export const useAcceptInvite = (onSuccess, onFailure) => {
  return useFetchOnRequest(acceptInviteReq, onSuccess, onFailure);
};

export const useEditMedia = (onSuccess, onFailure) => {
  return useFetchOnRequest(editMediaReq, onSuccess, onFailure);
};

export const useGetAlbumOnRequest = (onSuccess, onFailure, defaultData) => {
  return useFetchOnRequest(getAlbumReq, onSuccess, onFailure, defaultData);
};

export const useGetMediaOnRequest = (onSuccess, onFailure, defaultData) => {
  return useFetchOnRequest(getIndividualMediaReq, onSuccess, onFailure, defaultData);
};