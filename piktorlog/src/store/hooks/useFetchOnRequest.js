import { useState } from 'react';

import { 
  removeCollabReq
} from '../requests/collaboratorReqs';
import { 
  createInviteReq,
  deleteInviteReq
} from '../requests/inviteReqs';

// reqFn is any of the 'request functions', found elsewhere in this folder
// onSuccess and onFailure are optional callbacks for signalling or performing some further behavior after the request completes
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
          console.log('success');
        }

      })
      .catch(err => {

        setIsLoading(false);
        setErrorMessage(err);

        if (typeof onFailure === 'function') {
          onFailure();
          console.log('failure');
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