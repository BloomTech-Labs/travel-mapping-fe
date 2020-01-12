import { useState } from 'react';

import { 
  removeCollabReq
} from '../requests/collaboratorReqs';
import { 
  createInviteReq,
  deleteInviteReq,
  acceptInviteReq
} from '../requests/inviteReqs';

// reqFn is any of the 'request functions', found elsewhere in this folder
// onSuccess and onFailure are optional callbacks or arrays of callbacks for signalling or performing some further behavior after the request completes
const useFetchOnRequest = (reqFn, onSuccess, onFailure) => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fireRequest = (...reqParams) => {

    setIsLoading(true);

    reqFn(...reqParams)
      .then(res => {

        setIsLoading(false);
        setData(res);
        setErrorMessage('');

        if (typeof onSuccess === 'function') {
          onSuccess();
        } else if (Array.isArray(onSuccess)) {
          onSuccess.forEach(e => e());
        }

      })
      .catch(err => {

        setIsLoading(false);
        setErrorMessage(err);

        if (typeof onFailure === 'function') {
          onFailure();
        } else if (Array.isArray(onFailure)) {
          onFailure.forEach(e => e());
        }

      })

  };

  return [fireRequest, isLoading, errorMessage, data];
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